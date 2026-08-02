# Ink Ripple

A small canvas art toy for your browser. Click, drag, or touch the screen to
paint with ripples, flowing trails, or fireworks.

![CI](https://github.com/lootfisajjad-hue/ink-ripple/actions/workflows/ci.yml/badge.svg)

## Quick start

```bash
npm install
npm run dev      # open the printed localhost URL
```

Then paint on the canvas.

## Controls

- **Mode** — switch between three paint styles:
  - **Ripples** — expanding rings that fade out
  - **Flow Trail** — a trail of particles that follows your cursor
  - **Fireworks** — bursts of particles on click
- **Palette** — sets the base hue for new strokes
- **Brush Size** — controls the size of ripples/particles
- **Clear** — wipes the canvas
- **Save PNG** — downloads the current canvas as a PNG image

Works with mouse, touch, and any pointer that fires standard mouse/touch events.

## Scripts

| Command              | What it does                    |
| -------------------- | ------------------------------- |
| `npm run dev`        | Vite dev server with hot reload |
| `npm run build`      | Production build into `dist/`   |
| `npm run preview`    | Serve the built `dist/` locally |
| `npm test`           | Run the Vitest suite once       |
| `npm run test:watch` | Vitest in watch mode            |
| `npm run coverage`   | Tests + v8 coverage report      |
| `npm run lint`       | ESLint + Prettier check         |
| `npm run lint:fix`   | Autofix lint + formatting       |

## Project structure

The physics is split into small **pure, testable** modules; only `main.js`
touches the DOM.

```
src/
  config.js      tuning constants (physics, colours, defaults)
  rng.js         seedable mulberry32 RNG
  color.js       hue + hsla helpers
  ripples.js     ripple mode (pure)
  particles.js   trail + firework modes (pure)
  simulation.js  Simulation: owns state, emit/step/clear
  renderer.js    CanvasRenderer: draws a Simulation
  main.js        DOM wiring, pointer input, animation loop
test/            one *.test.js per module (Vitest)
```

Data flows one way: **input → Simulation (state) → Renderer (draw)**. Because
the simulation takes an injected RNG, seeding it (`mulberry32(seed)`) makes the
whole thing deterministic and unit-testable — see `test/`.

## Tooling

- **Vite** — dev server and production build
- **Vitest** (+ v8 coverage) — unit and jsdom integration tests, 100% coverage
  on the pure core
- **ESLint 9** (flat config) + **Prettier** — linting and formatting
- **Husky** + **lint-staged** — pre-commit lint/format, pre-push tests
- **GitHub Actions** — CI (lint, test, build) and GitHub Pages deploy

## Claude Code skills

This repo ships project-specific [Claude Code](https://claude.com/claude-code)
skills under `.claude/skills`, generated from scratch for this codebase:

- **ink-ripple-dev** — architecture, conventions, and commands for working in
  the repo.
- **add-paint-mode** — a step-by-step recipe for adding a new brush/paint mode.

## License

MIT
