import type { Request, Response } from "express";
import { loadHiringCta, loadPageContent } from "../services/content.js";
import { getFeatureFlags } from "../services/features.js";
import type { RenderContext } from "../types/index.js";
import { siteConfig } from "../config/site.js";

function buildContext(
  req: Request,
  pageSlug: string,
  extra: Partial<RenderContext> = {},
): RenderContext {
  const features = getFeatureFlags();
  const page = loadPageContent(pageSlug);
  const sections: RenderContext["sections"] = {};

  if (features.hiringCta) {
    sections.hiringCta = loadHiringCta();
  }

  return {
    site: siteConfig,
    features,
    page,
    currentPath: req.path,
    theme: "light",
    sections,
    ...extra,
  };
}

export function renderHome(req: Request, res: Response): void {
  res.render("pages/home.njk", buildContext(req, "home"));
}

export function renderAbout(req: Request, res: Response): void {
  res.render("pages/about.njk", buildContext(req, "about"));
}

export function renderContact(req: Request, res: Response): void {
  res.render("pages/contact.njk", buildContext(req, "contact"));
}

export function renderNotFound(req: Request, res: Response): void {
  res.status(404).render(
    "pages/404.njk",
    buildContext(req, "not-found"),
  );
}
