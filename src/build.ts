import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createPageContext, pages } from "./app.js";
import { createNunjucksEnv } from "./govuk/render.js";

const root = process.cwd();
const distDir = path.join(root, "dist");
const basePath = process.env.BASE_PATH ?? "/";

function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function copyGovukAssets(): void {
  const govukDist = path.join(
    root,
    "node_modules/govuk-frontend/dist/govuk",
  );
  const assetsDir = path.join(distDir, "assets/govuk");

  ensureDir(assetsDir);

  for (const file of ["govuk-frontend.min.css", "govuk-frontend.min.js"]) {
    copyFileSync(path.join(govukDist, file), path.join(assetsDir, file));
  }

  cpSync(path.join(govukDist, "assets"), path.join(assetsDir, "assets"), {
    recursive: true,
  });
}

function normaliseBasePath(value: string): string {
  if (!value || value === "/") return "/";
  return value.endsWith("/") ? value : `${value}/`;
}

export function buildStaticSite(): void {
  const env = createNunjucksEnv();
  const resolvedBase = normaliseBasePath(basePath);

  rmSync(distDir, { recursive: true, force: true });
  ensureDir(distDir);
  copyGovukAssets();

  for (const page of pages) {
    const context = createPageContext(
      page.slug === "home" ? "Kurtis Rogers — Software Engineer" : page.slug.charAt(0).toUpperCase() + page.slug.slice(1),
      { activeNav: page.nav, basePath: resolvedBase },
    );

    const html = env.render(`layouts/base.njk`, {
      ...context,
      contentTemplate: page.template,
    });

    const outputPath = path.join(distDir, page.output);
    ensureDir(path.dirname(outputPath));
    writeFileSync(outputPath, html, "utf8");
  }

  console.log(`Built static site to ${distDir} (base: ${resolvedBase})`);
}

buildStaticSite();
