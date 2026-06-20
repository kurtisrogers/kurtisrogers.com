# Personal Website — Design Spec

**Author:** Kurtis Rogers (via agent)  
**Date:** 2026-06-20  
**Status:** Approved for implementation

## Goal

Replace the existing SolidJS SPA (`kurtisrogers.com`) with a modern, low-maintenance professional portfolio site covering career and experience. Three pages: Home, About, Contact. No CMS.

## Architecture

Server-rendered HTML via Express + Nunjucks.

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Server | Express 5 + TypeScript | Minimal, well-understood, runs nodemailer and HTMX endpoints in one process |
| Templates | Nunjucks partials | Native include/extend maps cleanly to Atomic Design |
| Styling | Pico CSS v2 + custom tokens | Class-light, accessible defaults, tiny maintenance surface |
| Interactivity | HTMX (contact form) + Alpine.js (UI state) | No SPA build step; progressive enhancement |
| Email | nodemailer | User requirement |
| Content | JSON files in `content/` | Edit text without touching templates |
| Feature flags | `config/features.json` + `FEATURE_*` env overrides | Toggle sections at runtime without rebuild |
| Tests | Vitest + Supertest + axe-core | Fast unit/API tests; automated a11y regression |

See `README.md` for setup, env vars, and content editing.
