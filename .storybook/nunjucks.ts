import nunjucks from "nunjucks";
import { marked } from "marked";

const templates = import.meta.glob<string>("../views/**/*.njk", {
  query: "?raw",
  import: "default",
  eager: true,
});

function getTemplate(name: string): string {
  const relative = name.replace(/^\.\.\/views\//, "");
  const key = `../views/${relative}`;
  const source = templates[key];
  if (!source) {
    throw new Error(`Template not found: ${name} (key: ${key})`);
  }
  return source;
}

const env = new nunjucks.Environment(
  new (class implements nunjucks.ILoader {
    getSource(name: string) {
      const source = getTemplate(name);
      return { src: source, path: name, noCache: true };
    }
  })(),
  { autoescape: true },
);

env.addFilter("date", (value: string, format: string) => {
  const date = value === "now" ? new Date() : new Date(value);
  if (format === "Y") {
    return String(date.getFullYear());
  }
  return date.toISOString();
});

env.addFilter("markdown", (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return marked.parse(trimmed) as string;
});

env.addGlobal("appStage", "development");

export function renderTemplate(
  template: string,
  context: Record<string, unknown> = {},
): string {
  return env.render(template, context);
}

export function renderComponent(
  component: string,
  context: Record<string, unknown> = {},
): string {
  return renderTemplate(component, context);
}

export function withAlpine(html: string): string {
  return `<div x-data="siteApp()" x-init="init()" data-theme="light">${html}</div>`;
}
