# kurtisrogers.com

Server-rendered personal portfolio built with Express, Nunjucks, Pico CSS, HTMX, and Alpine.js.

## Requirements

- Node.js ≥ 20
- Docker Desktop (for SST deployments)
- AWS credentials configured locally (for SST)

## Setup

```bash
nvm use          # reads .nvmrc (Node 22 — matches Docker/CI)
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
| `npm run deploy:staging` | Deploy to staging (`staging.kurtisrogers.com`) |
| `npm run deploy:prod` | Deploy to production (`kurtisrogers.com`) |

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

The app runs as a Docker container on ECS Fargate behind an Application Load Balancer. SST manages the VPC, cluster, service, HTTPS certificates, and Route 53 DNS records.

### Environments

| Stage | Domain | Command |
|-------|--------|---------|
| **staging** | `https://staging.kurtisrogers.com` | `npm run deploy:staging` |
| **production** | `https://kurtisrogers.com` (redirects `www`) | `npm run deploy:prod` |

Each stage is a separate SST stack (own VPC, cluster, and secrets). Staging shows a banner so you can tell it apart from production.

DNS is managed automatically via **Route 53** (`sst.aws.dns()`). The domain `kurtisrogers.com` must be hosted in the same AWS account you deploy to. SST creates ACM certificates and the required A/AAAA/CNAME records on first deploy.

### Prerequisites

1. [AWS credentials](https://sst.dev/docs/iam-credentials) configured (`aws configure` or env vars)
2. Docker Desktop running
3. `kurtisrogers.com` hosted zone in Route 53 in the target AWS account

### First-time secret setup

Secrets are **per stage**. Set production secrets first, then staging (or use `--fallback` to inherit non-sensitive defaults):

```bash
# Production
npx sst secret set SmtpHost smtp.example.com --stage production
npx sst secret set SmtpPort 587 --stage production --fallback
npx sst secret set SmtpUser your-user --stage production
npx sst secret set SmtpPass your-password --stage production
npx sst secret set ContactTo hello@kurtisrogers.com --stage production
npx sst secret set ContactFrom noreply@kurtisrogers.com --stage production

# Staging (can use a mail catcher or the same provider with a staging inbox)
npx sst secret set SmtpHost smtp.example.com --stage staging
npx sst secret set SmtpUser your-user --stage staging
npx sst secret set SmtpPass your-password --stage staging
npx sst secret set ContactTo staging@kurtisrogers.com --stage staging
npx sst secret set ContactFrom noreply@kurtisrogers.com --stage staging
```

### Deploy

```bash
# Staging first — verify at https://staging.kurtisrogers.com
npm run deploy:staging

# Production
npm run deploy:prod
```

First deploy per stage takes **10–20 minutes** (VPC, NAT, ALB, certificate validation, DNS). SST prints the URL when complete.

### Tear down a stage

```bash
npx sst remove --stage staging
```

Production is protected from accidental removal (`protect: true` in `sst.config.ts`).

### Local dev with SST

```bash
npm run sst:dev
```

This starts SST and proxies to `npm run dev` — useful when testing linked AWS resources.

### Estimated AWS cost

Rough monthly minimum **per stage** for a single small Fargate task with EC2 NAT: ~$30/mo (Fargate + NAT instance + ALB). Running both staging and production doubles that unless you remove staging when not in use.

## Manual deployment (without SST)

```bash
npm run build
NODE_ENV=production npm start
```

Set all SMTP variables in production for the contact form to work.
