# SECURITY — Olá Brasil

## Threat model (summary)

The app is a **client-side, offline-first PWA** with no required backend. The
main assets to protect are the learner's on-device data (which for the
citizenship track can include personal information) and any API keys a user
chooses to configure.

| Asset | Threat | Mitigation |
| --- | --- | --- |
| Learner data (progress, mistakes, documents) | Local device access / XSS | Stored only in IndexedDB on-device; no upload by default. React escapes output; no `dangerouslySetInnerHTML`. |
| Sensitive citizenship data (names, doc info) | Accidental exfiltration | **Never uploaded by default.** The document checklist stores only what the user types, on-device. |
| API keys (if configured) | Exposure in the bundle | Read from `.env` (`VITE_*`) only; never committed. See the browser-key caveat below. |
| Content integrity | Malformed/incorrect content | Zod schema + `validate.ts` integrity checks gate content. |
| Legal misinformation | Over-trusting the app | Citizenship content is sourced, dated, and labelled "general information, not legal advice"; the simulator never claims a pass/fail. |

## Key handling

- No secrets in the repo. `.env.example` documents the variables; real `.env`
  is git-ignored.
- **Browser-key caveat:** any `VITE_*` key is embedded in the client bundle and
  visible to users. The bundled providers (e.g. OpenAI) support a
  `VITE_OPENAI_BASE_URL` so production deployments can point at a **serverless
  proxy** that injects the key server-side. Do not ship a real third-party key
  to end users.

## Authentication

Local profiles require **no password** and never leave the device, so there is
no password storage to get wrong. If cloud sync/auth is added later, it must use
a managed provider (e.g. Supabase Auth) with hashed credentials and
Row-Level Security — never store raw passwords. This is intentionally out of the
default build.

## Input handling

- All content is validated with Zod before use.
- User free-text (chat, answers, checklist notes) is rendered as text, never as
  HTML.
- Interpolation placeholders in i18n are escape-safe (`escapeValue` handled by
  React rendering).

## Remaining dependency advisories (transparency)

`npm audit` may report advisories that do **not** affect the shipped app:

- **Dev/build-only** (esbuild dev-server, `brace-expansion`, `workbox-build`
  chain): these tools are not part of the production bundle in `dist/`.
- **react-router RSC/SSR advisories**: apply only to React Server Components /
  SSR server modes. This app is a **client-only SPA** with no SSR, so they are
  not exploitable here. We track the version and update when a client-relevant
  fix lands.

The production bundle itself contains only React, the app code, and the runtime
libraries (Dexie, i18next, zod, zustand, react-router).

## Reporting

Open a private issue or contact the maintainer. Do not include real personal
documents in bug reports.
