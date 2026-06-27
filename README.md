# kurtisrogers.com

A simple server-rendered portfolio built with the [GOV.UK Design System](https://design-system.service.gov.uk/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [Storybook](https://storybook.js.org/). The site pre-renders to static HTML for [GitHub Pages](https://pages.github.com/).

## Live sites

| Site | URL |
|------|-----|
| Portfolio | https://kurtisrogers.github.io/kurtisrogers.com/ |
| Storybook (all GDS components) | https://kurtisrogers.github.io/kurtisrogers.com/storybook/ |

Enable GitHub Pages once per repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Requirements

- Node.js ≥ 20 (see `.nvmrc` for the version used in CI)

## Setup

```bash
nvm use
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Express SSR dev server |
| `npm run build` | Pre-render portfolio pages to `dist/` |
| `npm run build-storybook` | Build Storybook to `storybook-static/` |
| `npm run build:site` | Build portfolio + Storybook into `dist/` (used in CI) |
| `npm run storybook` | Component library at `http://localhost:6006` |
| `npm run generate:stories` | Regenerate GOV.UK component stories from package fixtures |
| `npm run typecheck` | Type-check TypeScript sources |

## Storybook

Every component shipped in `govuk-frontend` is documented in Storybook, using the official fixture data from the package. Stories are generated automatically:

```bash
npm run storybook
```

To refresh stories after upgrading `govuk-frontend`:

```bash
npm run generate:stories
```

## Architecture

- **Local development:** Express 5 renders Nunjucks templates on each request (SSR)
- **Production:** `src/build.ts` pre-renders pages to static HTML for GitHub Pages
- **Templates:** Nunjucks with GOV.UK Frontend macros from `node_modules/govuk-frontend`
- **Styling & scripts:** `govuk-frontend.min.css` and `govuk-frontend.min.js`
- **Component docs:** Storybook 8 with `@storybook/html-vite`

## Project layout

```
src/
  server.ts          # SSR dev server
  build.ts           # Static site generator
  govuk/             # GOV.UK component helpers
  config/site.ts     # Site metadata
views/
  layouts/base.njk   # GOV.UK page shell
  pages/             # Portfolio pages
stories/govuk/       # Storybook stories (generated + overview)
scripts/             # Story generation
```

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`, which:

1. Builds the portfolio with `BASE_PATH=/kurtisrogers.com/`
2. Builds Storybook into `dist/storybook/`
3. Deploys the combined `dist/` folder to GitHub Pages

For a custom domain, configure it under **Settings → Pages** and update `src/config/site.ts`.

## Licence

This project uses [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend), which is available under the [MIT licence](https://github.com/alphagov/govuk-frontend/blob/main/LICENCE.txt).
