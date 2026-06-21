import { describe, it, expect } from "vitest";
import {
  parseSectionBodies,
  renderMarkdown,
} from "../src/services/markdown.js";
import { loadPageContent, loadHiringCta } from "../src/services/content.js";

describe("parseSectionBodies", () => {
  it("parses sections keyed by ## headers", () => {
    const result = parseSectionBodies(`
## introduction

First section.

## honourableDeveloper

Second section.
`);
    expect(result.introduction).toBe("First section.");
    expect(result.honourableDeveloper).toBe("Second section.");
  });

  it("returns empty object when no section headers exist", () => {
    expect(parseSectionBodies("Plain paragraph.")).toEqual({});
  });
});

describe("renderMarkdown", () => {
  it("renders paragraphs and emphasis", () => {
    const html = renderMarkdown("Hello **world**.");
    expect(html).toContain("<strong>world</strong>");
    expect(html).toContain("<p>");
  });
});

describe("loadPageContent", () => {
  it("loads home page with merged section bodies", () => {
    const page = loadPageContent("home");
    expect(page.title).toContain("Kurtis Rogers");
    expect(page.introduction).toMatchObject({
      heading: "Introduction",
    });
    const intro = page.introduction as { body: string };
    expect(intro.body).toContain("<p>");
    expect(intro.body).toContain("user-centred");
  });

  it("loads not-found page with top-level body", () => {
    const page = loadPageContent("not-found");
    expect(page.heading).toBe("Page not found");
    expect(String(page.body)).toContain("exist");
  });
});

describe("loadHiringCta", () => {
  it("loads reusable section markdown", () => {
    const section = loadHiringCta();
    expect(section.heading).toBe("Open to opportunities");
    expect(section.body).toContain("<p>");
    expect(section.buttonHref).toBe("/contact");
  });
});
