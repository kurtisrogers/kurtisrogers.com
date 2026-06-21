import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

export function renderMarkdown(source: string): string {
  const trimmed = source.trim();
  if (!trimmed) return "";
  return marked.parse(trimmed) as string;
}

const SECTION_HEADER = /^##\s+([a-zA-Z][\w-]*)\s*$/m;

export function parseSectionBodies(markdown: string): Record<string, string> {
  const trimmed = markdown.trim();
  if (!trimmed || !SECTION_HEADER.test(trimmed)) {
    return {};
  }

  const sections: Record<string, string> = {};
  const parts = trimmed.split(SECTION_HEADER);

  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i];
    const body = parts[i + 1]?.trim() ?? "";
    if (key) {
      sections[key] = body;
    }
  }

  return sections;
}

export function mergeSectionContent<T extends Record<string, unknown>>(
  frontmatter: Record<string, unknown>,
  sectionBodies: Record<string, string>,
): T {
  const result = { ...frontmatter } as T;

  for (const [key, markdown] of Object.entries(sectionBodies)) {
    const existing = frontmatter[key];
    const meta =
      existing && typeof existing === "object" && !Array.isArray(existing)
        ? (existing as Record<string, unknown>)
        : {};

    (result as Record<string, unknown>)[key] = {
      ...meta,
      body: renderMarkdown(markdown),
    };
  }

  return result;
}
