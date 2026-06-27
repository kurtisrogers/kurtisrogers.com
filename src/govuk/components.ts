import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const componentsDir = path.join(
  process.cwd(),
  "node_modules/govuk-frontend/dist/govuk/components",
);

export interface GovukFixture {
  name: string;
  options: Record<string, unknown>;
  hidden?: boolean;
  description?: string;
  html?: string;
}

export interface GovukComponentFixtures {
  component: string;
  fixtures: GovukFixture[];
}

export function listGovukComponents(): string[] {
  return readdirSync(componentsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export function loadComponentFixtures(
  component: string,
): GovukComponentFixtures {
  const file = path.join(componentsDir, component, "fixtures.json");
  return JSON.parse(readFileSync(file, "utf8")) as GovukComponentFixtures;
}

export function toMacroName(component: string): string {
  const pascal = component
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return `govuk${pascal}`;
}
