# DEPLOYMENT — Olá Brasil

The app builds to a **static PWA** (`app/dist/`) that can be hosted on any
static host or CDN. No server is required.

## Build

```bash
cd app
npm ci
npm run build        # tsc -b && vite build  → app/dist
npm run preview      # verify the built output locally
```

The build emits hashed assets, a `manifest.webmanifest`, and a service worker
(`sw.js`) via `vite-plugin-pwa` (auto-update). `base: './'` keeps asset URLs
correct under any sub-path.

## Hosting options

- **GitHub Pages / Netlify / Vercel / Cloudflare Pages**: publish `app/dist`.
- Routing uses a **hash router** (`/#/...`), so no server rewrite rules are
  needed for deep links.

### Example: Netlify

```
build command:   cd app && npm ci && npm run build
publish dir:     app/dist
```

### Example: static server

```bash
npm run build && npx serve app/dist
```

## Environment variables

All optional (see `.env.example`). Set them in your host's build environment as
`VITE_*` variables. **Remember the browser-key caveat** (`SECURITY.md`): for a
real AI provider in production, deploy a small serverless proxy and point
`VITE_OPENAI_BASE_URL` at it rather than shipping a raw key.

## PWA / installation

Because it's a PWA, users can "Add to Home Screen" on Android/iOS and use it
offline. The service worker precaches the app shell and content; updates are
picked up automatically on next load.

## CI suggestion

A pipeline should run, in order:

```bash
npm ci
npm run lint
npm run typecheck
npm run seed:validate
npm run coverage
npm run build
# optionally: PLAYWRIGHT_CHROMIUM_PATH=... npm run e2e
```

## Native (future)

To ship to the App Store / Play Store, follow the React Native migration path in
`../ARCHITECTURE.md`: the pure domain, content, i18n, and provider layers move
unchanged; only the presentation and a few adapters (storage, TTS) are swapped.
