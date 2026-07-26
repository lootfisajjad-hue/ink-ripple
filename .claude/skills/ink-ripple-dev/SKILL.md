---
name: ink-ripple-dev
description: Development guide for the Ink Ripple canvas art toy in this repository. Use this whenever working on Ink Ripple's code — understanding the architecture, running the dev server, writing or running tests, linting/formatting, or the conventions the pure-simulation core follows. Trigger when a task touches files under src/ or test/, or mentions ripples, particles, fireworks, the Simulation, or the CanvasRenderer.
---

# Ink Ripple — Development Guide

Ink Ripple is a small, dependency-free (at runtime) HTML canvas art toy. The
codebase is deliberately split so that all the interesting physics is **pure and
testable**, and only a thin layer touches the DOM. Respect that split when
making changes.

## Architecture

The simulation is a one-way data flow: **input → Simulation (state) → Renderer (draw)**.

| File                | Responsibility                                                    | Touches DOM? |
| ------------------- | ----------------------------------------------------------------- | ------------ |
| `src/config.js`     | All tuning constants (physics, colours, defaults). No logic.      | No           |
| `src/rng.js`        | `mulberry32(seed)` seedable RNG + `randomRng()`.                  | No           |
| `src/color.js`      | `wrapHue`, `jitterHue`, `hsla` colour helpers.                    | No           |
| `src/ripples.js`    | `createRipple` / `stepRipples` — the ripple mode.                 | No           |
| `src/particles.js`  | `createTrailParticles`, `createFirework`, `stepParticles`.        | No           |
| `src/simulation.js` | `Simulation` class: owns state, `emit()`, `step()`, `clear()`.    | No           |
| `src/renderer.js`   | `CanvasRenderer`: reads a `Simulation` and paints it.             | ctx only     |
| `src/main.js`       | `initApp` / `bootstrap`: wires controls, pointer input, RAF loop. | Yes          |

## Core rules

1. **Keep physics pure.** Functions in `ripples.js`, `particles.js`, `color.js`
   take plain values plus an `rng` argument and return data. They never read
   `Math.random`, `window`, or a canvas. This is what makes them testable and
   deterministic.
2. **Inject randomness.** Anything random takes an `rng: () => number` parameter
   (a function returning `[0, 1)`). Never call `Math.random()` inside the
   simulation — pass `randomRng()` at the top (`main.js`) or a seeded
   `mulberry32(seed)` in tests.
3. **Constants live in `config.js`.** No magic numbers in logic files. Tests
   assert against the named constants, so adding a number in code without a
   config entry will look wrong.
4. **The renderer never mutates the simulation.** It only reads state and calls
   canvas methods.
5. **`main.js` is the only DOM file.** Its `initApp` takes the elements as
   dependencies so it can be driven from a jsdom test.

## Commands

```bash
npm install        # once
npm run dev        # Vite dev server with HMR
npm run build      # production build into dist/
npm run preview    # serve the built dist/
npm test           # run the Vitest suite once
npm run test:watch # watch mode
npm run coverage   # tests + v8 coverage report
npm run lint       # eslint + prettier --check
npm run lint:fix   # autofix both
```

## Testing conventions

- Tests live in `test/` as `*.test.js`, one file per source module.
- The default Vitest environment is `node`. Tests that need the DOM opt in with
  a `// @vitest-environment jsdom` comment at the top of the file (see
  `test/main.test.js`).
- Seed the RNG (`mulberry32(1)`) for deterministic assertions. A handy trick:
  `rng = () => 0.5` makes symmetric jitter terms collapse to exactly zero, so you
  can assert exact inherited/base values.
- The pure modules are held to **100% coverage**. Keep them there.

## Before you finish any change

Run the full gate the way CI does:

```bash
npm run lint && npm run coverage && npm run build
```

A Husky `pre-commit` hook runs `lint-staged` (eslint + prettier on staged
files) and `pre-push` runs the test suite, so committing/pushing enforces this
too.
