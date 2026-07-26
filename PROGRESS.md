# Progress Log

Autonomous execution log for bringing **Ink Ripple** to production quality.

## Goals

1. Refactor the monolithic `script.js` into small, pure, testable ES modules.
2. Introduce a modern build toolchain (Vite) while keeping the app trivial to run.
3. Add a deterministic, seedable simulation core so physics is unit-testable.
4. Configure linting (ESLint), formatting (Prettier), testing (Vitest), coverage.
5. Add Git hooks (Husky + lint-staged) and CI (GitHub Actions).
6. Generate project-specific Claude Code skills under `.claude/skills` from scratch.
7. Keep documentation continuously updated.

## Timeline

- **Init** — Inspected repo: vanilla HTML/CSS/JS canvas toy, no tooling. Node 22 / npm 10.
- **Refactor** — Split `script.js` into `config`, `rng`, `color`, `ripples`, `particles`, `simulation`, `renderer`, and a thin `main` entry. Physics is now pure and RNG-injected.
- **Tooling** — Added Vite (dev/build/preview), Vitest (+ v8 coverage), ESLint 9 flat config, Prettier, and lint-staged config.
- **Tests** — 56 unit/integration tests across all modules, including a jsdom test that drives the DOM wiring. 100% coverage on the pure core.
- **CI/CD** — GitHub Actions: a CI workflow (lint + coverage + build) and a GitHub Pages deploy workflow. Husky `pre-commit` (lint-staged) and `pre-push` (tests) hooks.
- **Skills** — Generated two project-specific Claude Code skills from scratch under `.claude/skills`: `ink-ripple-dev` (architecture + workflow) and `add-paint-mode` (recipe for the main extension point).
- **Hardening** — Upgraded to Vite 8 / Vitest 4 / ESLint 10; `npm audit` reports 0 vulnerabilities. Added a favicon, LICENSE, and `.editorconfig`.
- **E2E smoke** — Verified in a headless Chromium (Playwright): the built app loads with no console errors and actually paints to the canvas across modes.

---

## Olá Brasil — Brazilian Portuguese learning app (`app/`)

A separate, full application built in the `app/` directory. Plan + milestones in
`PROJECT_PLAN.md`; architecture + decisions in `ARCHITECTURE.md`.

- **Stack decision** — Given the headless environment can't run iOS/Android
  simulators, chose a **Vite + React + TypeScript PWA** (mobile-first, offline,
  RTL) that is actually runnable and testable here. Native migration path
  documented. Vite 6 / Vitest 2 / ESLint 9 pinned for a coherent tree.
- **Domain (pure)** — FSRS spaced-repetition scheduler, placement grading,
  interview simulator scoring, and a Zod content schema — all framework-free.
- **Infra** — Dexie (IndexedDB) local-first DB with content + per-profile
  tables; provider-agnostic AI (offline Mock + OpenAI) and TTS (Web Speech);
  voice capture (MediaRecorder + optional recognition).
- **i18n/RTL** — i18next with fa (default, RTL) / pt / en; direction applied to
  `<html>`; Portuguese content stays LTR inside the RTL UI.
- **UI** — 16 screens: onboarding + placement, dashboard, learning path, lesson
  - quiz, flashcards + review, the full citizenship module (interview practice,
    simulator, documents, society/sources), pronunciation, AI conversation,
    progress, settings, family profiles. Light/dark themes, font scaling.
- **Content** — Validated seed bundle (213 vocab, 173 phrases, 22 interview
  Q&A, 8 sourced citizenship topics, 5 cities, 4 dialogues, 7 lessons, 7 doc
  templates, 8 sources) + a Zod/integrity validation pipeline. AI-generated vs
  human-verified tracked honestly.
- **Tests** — 41 unit/integration tests (FSRS, placement, interview, AI,
  flashcards over fake-indexeddb, content integrity, i18n parity) + a Playwright
  e2e journey. Typecheck, build, and `seed:validate` all green.
- **Docs** — README, ARCHITECTURE, DATABASE, CONTENT_STRATEGY, SOURCES,
  SECURITY, TESTING, DEPLOYMENT, PRIVACY, `.env.example`, and `docs/` guides for
  adding AI/TTS providers, lessons, and managing content.
- **Verified in-browser** — Playwright on a mobile viewport: onboarding →
  placement → personalised dashboard → citizenship interview, no console errors;
  screenshots confirm polished RTL UI in light/dark.

### Honest status / remaining work

- Content is a **real, working core**, not the roadmap ceiling (e.g. 1000 words
  / 200 interview questions). The pipeline is built to scale toward those; counts
  are reported truthfully and seed items are marked `ai-generated` pending human
  linguistic review.
- Real AI/TTS providers are interface-complete with working mocks; connecting a
  paid provider needs a key (and, for production, a proxy) — documented.
- Pronunciation does not claim automatic phoneme scoring; the architecture is
  ready for a `PronunciationAssessor`.
- Cloud sync is designed (interfaces) but disabled by default (offline-first).
