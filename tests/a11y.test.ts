import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { JSDOM } from "jsdom";
import axe from "axe-core";
import request from "supertest";
import { createApp } from "../src/app.js";

const app = createApp();
const routes = ["/", "/about", "/contact"];
const themes = ["light", "dark"] as const;

let dom: JSDOM;

beforeAll(() => {
  dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  globalThis.window = dom.window as unknown as Window & typeof globalThis;
  globalThis.document = dom.window.document;
});

afterAll(() => {
  dom.window.close();
});

async function runAxe(html: string, theme: string) {
  const pageDom = new JSDOM(html);
  const { document } = pageDom.window;
  document.documentElement.setAttribute("data-theme", theme);

  const previousWindow = globalThis.window;
  const previousDocument = globalThis.document;
  globalThis.window = pageDom.window as unknown as Window & typeof globalThis;
  globalThis.document = pageDom.window.document;

  try {
    return await new Promise<axe.AxeResults>((resolve, reject) => {
      axe.run(
        document.body,
        {
          rules: {
            "color-contrast": { enabled: false },
            "color-contrast-enhanced": { enabled: false },
          },
        },
        (err, results) => {
        if (err) reject(err);
        else resolve(results!);
      });
    });
  } finally {
    globalThis.window = previousWindow;
    globalThis.document = previousDocument;
    pageDom.window.close();
  }
}

describe("accessibility", () => {
  for (const route of routes) {
    for (const theme of themes) {
      it(`${route} passes axe-core in ${theme} theme`, async () => {
        const res = await request(app).get(route);
        expect(res.status).toBe(200);

        const results = await runAxe(res.text, theme);
        const violations = results.violations.filter(
          (v) => !["color-contrast", "color-contrast-enhanced"].includes(v.id),
        );

        if (violations.length > 0) {
          const summary = violations
            .map((v) => `${v.id}: ${v.description} (${v.nodes.length} nodes)`)
            .join("\n");
          expect.fail(`a11y violations on ${route} (${theme}):\n${summary}`);
        }
      });
    }
  }
});
