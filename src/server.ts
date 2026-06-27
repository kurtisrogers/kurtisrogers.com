import express from "express";
import path from "node:path";
import { createPageContext, pages } from "./app.js";
import { createNunjucksEnv } from "./govuk/render.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const env = createNunjucksEnv();
const basePath = "/";

const govukDist = path.join(
  process.cwd(),
  "node_modules/govuk-frontend/dist/govuk",
);

app.use("/assets/govuk", express.static(govukDist));

for (const page of pages) {
  const route = page.slug === "home" ? "/" : `/${page.slug}`;

  app.get(route, (_req, res) => {
    const title =
      page.slug === "home"
        ? "Kurtis Rogers — Software Engineer"
        : page.slug.charAt(0).toUpperCase() + page.slug.slice(1);

    const html = env.render("layouts/base.njk", {
      ...createPageContext(title, { activeNav: page.nav, basePath }),
      contentTemplate: page.template,
    });

    res.type("html").send(html);
  });
}

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});
