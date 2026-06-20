# kurtisrogers.com

Server-rendered personal portfolio built with Express, Nunjucks, Pico CSS, HTMX, and Alpine.js.

## Requirements

- Node.js ≥ 20

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run production server |
| `npm test` | Run Vitest + Supertest + axe-core tests |
| `npm run typecheck` | Type-check without emitting |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default `3000`) |
| `SMTP_HOST` | For contact | SMTP server hostname |
| `SMTP_PORT` | For contact | SMTP port (e.g. `587`) |
| `SMTP_USER` | For contact | SMTP username |
| `SMTP_PASS` | For contact | SMTP password |
| `CONTACT_TO` | For contact | Recipient email address |
| `CONTACT_FROM` | For contact | Sender email address |

## Feature Flags

Defaults live in `config/features.json`. Override at runtime with environment variables:

| Flag | Env override |
|------|--------------|
| `hiringCta` | `FEATURE_HIRING_CTA` |
| `homeIntroduction` | `FEATURE_HOME_INTRODUCTION` |
| `homeHonourableDeveloper` | `FEATURE_HOME_HONOURABLE_DEVELOPER` |
| `aboutTechnology` | `FEATURE_ABOUT_TECHNOLOGY` |
| `aboutCareer` | `FEATURE_ABOUT_CAREER` |

Set to `true` or `false`. Env vars win over the JSON file. Flags are cached for 60 seconds.

## Content Editing

Page copy lives in `content/pages/*.json`. Reusable sections (e.g. hiring CTA) live in `content/sections/`. Edit JSON and restart the dev server — no rebuild required for content changes.

## Architecture

- **Server:** Express 5 + TypeScript
- **Templates:** Nunjucks with Atomic Design (`views/atoms`, `molecules`, `organisms`, `templates`, `pages`)
- **Styling:** Pico CSS v2 + custom WCAG AAA tokens
- **Interactivity:** HTMX (contact form) + Alpine.js (theme, mobile nav)
- **Email:** nodemailer
- **Tests:** Vitest, Supertest, axe-core

## Deployment

```bash
npm run build
NODE_ENV=production npm start
```

Set all SMTP variables in production for the contact form to work.
