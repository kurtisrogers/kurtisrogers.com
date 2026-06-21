import { readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import type { HiringCtaSection, PageContent } from "../types/index.js";
import {
  mergeSectionContent,
  parseSectionBodies,
  renderMarkdown,
} from "./markdown.js";

const CONTENT_DIR = join(process.cwd(), "content");

function loadMarkdownFile(path: string): { data: Record<string, unknown>; content: string } {
  const raw = readFileSync(path, "utf-8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, content };
}

function buildPageContent(data: Record<string, unknown>, content: string): PageContent {
  const sectionBodies = parseSectionBodies(content);
  const page = mergeSectionContent<PageContent>(data, sectionBodies);

  if (Object.keys(sectionBodies).length === 0 && content.trim()) {
    page.body = renderMarkdown(content);
  }

  return page;
}

export function loadPageContent(slug: string): PageContent {
  const filePath = join(CONTENT_DIR, "pages", `${slug}.md`);
  const { data, content } = loadMarkdownFile(filePath);
  return buildPageContent(data, content);
}

export function loadSection<T = Record<string, unknown>>(slug: string): T {
  const filePath = join(CONTENT_DIR, "sections", `${slug}.md`);
  const { data, content } = loadMarkdownFile(filePath);
  return buildPageContent(data, content) as T;
}

export function loadHiringCta(): HiringCtaSection {
  const section = loadSection<Record<string, unknown>>("hiring-cta");
  return {
    heading: String(section.heading ?? ""),
    body: String(section.body ?? ""),
    buttonText: String(section.buttonText ?? ""),
    buttonHref: String(section.buttonHref ?? ""),
  };
}
