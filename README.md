# kurtisrogers.com

Server-rendered personal portfolio built with Express, Nunjucks, Pico CSS, HTMX, and Alpine.js.

## Requirements

- Node.js ≥ 20
- Docker Desktop (for SST deployments)
- AWS credentials configured locally (for SST)

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
| `npm run sst:dev` | Run SST dev mode (proxies to local Express) |
| `npm run deploy` | Deploy to AWS via SST (current stage) |
| `npm run deploy:prod` | Deploy to the `production` stage |

## Pre-commit checks

[Husky](https://typicode.github.io/husky/) runs `typecheck` and `test` on every commit. After `npm install`, the `prepare` script wires this up automatically.

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

## Content editing

Page copy lives in `content/pages/*.md` with YAML frontmatter for metadata (title, headings, labels) and Markdown for prose. Reusable sections (e.g. hiring CTA) live in `content/sections/`.

### File format

Each page file has two parts:

1. **Frontmatter** (between `---` markers) — structured fields: `title`, `hero`, `form` labels, button text, etc.
2. **Body** — Markdown sections introduced by `## sectionKey` headers that match frontmatter keys

Example from `content/pages/home.md`:

```markdown
---
title: Kurtis Rogers — Software Engineer
introduction:
  heading: Introduction
---

## introduction

Your prose here. Supports **bold**, lists, and other standard Markdown.

## honourableDeveloper

Another section...
```

Pages with only frontmatter (e.g. `contact.md`) or a single body block (e.g. `not-found.md`) work without `##` section headers.

Edit Markdown and restart the dev server — no rebuild required for content changes. Feature flags remain in `config/features.json`.

## Architecture

- **Server:** Express 5 + TypeScript
- **Templates:** Nunjucks with Atomic Design (`views/atoms`, `molecules`, `organisms`, `templates`, `pages`)
- **Styling:** Pico CSS v2 + custom WCAG AAA tokens
- **Interactivity:** HTMX (contact form) + Alpine.js (theme, mobile nav)
- **Email:** nodemailer
- **Tests:** Vitest, Supertest, axe-core
- **Infra:** SST v3 on AWS (ECS Fargate + ALB)

## Deployment (SST + AWS)

The app runs as a Docker container on ECS Fargate behind an Application Load Balancer. SST manages the VPC, cluster, service, and encrypted secrets.

### Prerequisites

1. [AWS credentials](https://sst.dev/docs/iam-credentials) configured (`aws configure` or env vars)
2. Docker Desktop running

### First-time secret setup

```bash
npx sst secret set SmtpHost smtp.example.com --stage production
npx sst secret set SmtpPort 587 --stage production
npx sst secret set SmtpUser your-user --stage production
npx sst secret set SmtpPass your-password --stage production
npx sst secret set ContactTo hello@kurtisrogers.com --stage production
npx sst secret set ContactFrom noreply@kurtisrogers.com --stage production
```

Use `--fallback` on non-sensitive values (e.g. port) so preview stages inherit defaults.

### Deploy

```bash
npm run deploy:prod
```

SST prints the load balancer URL when complete. Point your domain's DNS at it, or add a custom domain in `sst.config.ts` later.

### Local dev with SST

```bash
npm run sst:dev
```

This starts SST and proxies to `npm run dev` — useful when testing linked AWS resources.

### Estimated AWS cost

Rough monthly minimum for a single small Fargate task with EC2 NAT: ~$15–25 (Fargate + NAT instance + ALB). Suitable for a low-traffic portfolio; scale `cpu`/`memory` in `sst.config.ts` if needed.

## Manual deployment (without SST)

```bash
npm run build
NODE_ENV=production npm start
```

Set all SMTP variables in production for the contact form to work.
