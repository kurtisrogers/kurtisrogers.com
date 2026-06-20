import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { HiringCtaSection, PageContent } from "../types/index.js";

const CONTENT_DIR = join(process.cwd(), "content");

export function loadPageContent(slug: string): PageContent {
  const filePath = join(CONTENT_DIR, "pages", `${slug}.json`);
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as PageContent;
}

export function loadSection<T = Record<string, unknown>>(slug: string): T {
  const filePath = join(CONTENT_DIR, "sections", `${slug}.json`);
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function loadHiringCta(): HiringCtaSection {
  return loadSection<HiringCtaSection>("hiring-cta");
}
