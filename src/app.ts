import type { SiteConfig } from "./config/site.js";
import { site } from "./config/site.js";

export interface PageContext {
  site: SiteConfig;
  basePath: string;
  title: string;
  activeNav?: string;
}

export function createPageContext(
  title: string,
  options: { activeNav?: string; basePath?: string } = {},
): PageContext {
  return {
    site,
    basePath: options.basePath ?? process.env.BASE_PATH ?? "/",
    title,
    activeNav: options.activeNav,
  };
}

export const pages = [
  { slug: "home", template: "pages/home.njk", output: "index.html", nav: "home" },
  { slug: "about", template: "pages/about.njk", output: "about/index.html", nav: "about" },
  { slug: "work", template: "pages/work.njk", output: "work/index.html", nav: "work" },
  { slug: "contact", template: "pages/contact.njk", output: "contact/index.html", nav: "contact" },
] as const;
