import nunjucks from "nunjucks";
import path from "node:path";
import { toMacroName } from "./components.js";

const govukRoot = path.join(
  process.cwd(),
  "node_modules/govuk-frontend/dist/govuk",
);

const govukComponentsPath = path.join(govukRoot, "components");

const viewsPath = path.join(process.cwd(), "views");

export function createNunjucksEnv(): nunjucks.Environment {
  return nunjucks.configure([govukComponentsPath, govukRoot, viewsPath], {
    autoescape: true,
    noCache: process.env.NODE_ENV !== "production",
  });
}

export function renderGovukComponent(
  env: nunjucks.Environment,
  component: string,
  options: Record<string, unknown>,
): string {
  const macroName = toMacroName(component);
  const template = [
    `{% from "${component}/macro.njk" import ${macroName} %}`,
    `{{ ${macroName}(params) }}`,
  ].join("\n");

  return env.renderString(template, { params: options });
}
