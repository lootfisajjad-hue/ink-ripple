# TESTING — Olá Brasil

Three layers, all runnable locally and in CI.

```bash
npm run typecheck        # tsc -b (strict)
npm test                 # Vitest: unit + integration
npm run coverage         # + v8 coverage
npm run seed:validate    # content schema + integrity
npm run e2e              # Playwright end-to-end
```

## Unit tests (pure domain)

Fast, deterministic, no DOM. Located in `test/`.

- `fsrs.test.ts` — the FSRS scheduler: new cards, first/again/good/easy
  transitions, stability growth, lapses, difficulty bounds, retrievability decay.
- `placement.test.ts` — placement grading: perfect/zero runs, CEFR-weighted
  scoring, self-assessed items, unanswered items.
- `interview.test.ts` — simulator: session planning (count, topic filter,
  determinism), answer scoring heuristics, report building (no pass/fail claim).
- `ai.test.ts` — Mock AI provider corrections/personas; registry fallback.

## Integration tests

- `flashcards.test.ts` — the flashcard service against **fake-indexeddb**:
  card creation/dedup, grading + review logs, "again" stays due, mistake →
  card, and **profile isolation**.
- `content.test.ts` — validates the entire seed bundle (Zod + integrity) and
  asserts content invariants (every citizenship topic has a source + disclaimer;
  every interview question has a sample answer).
- `i18n.test.ts` — locale **key parity** across fa/pt/en, placeholder
  preservation, and RTL/LTR direction.

## End-to-end (Playwright)

`e2e/journey.spec.ts` runs the acceptance journey on a mobile viewport against
the built app:

1. RTL Persian interface loads with no console errors.
2. Onboard: language → name → goal (citizenship) → time → placement test.
3. Land on a personalised dashboard (greeting shows the name).
4. Open the citizenship module and interview practice (Portuguese question
   visible).
5. Switch theme to dark and interface to English (→ LTR).

The Playwright config builds + serves the app automatically. In this
environment, point it at the preinstalled browser:

```bash
PLAYWRIGHT_CHROMIUM_PATH=/opt/pw-browsers/chromium npm run e2e
```

## Coverage philosophy

The **pure domain** (FSRS, placement, interview) and the **content** are held to
a high bar because they encode the learning logic and correctness guarantees.
UI screens are exercised via the e2e journey rather than heavy snapshot tests.

## Current status

- Unit + integration: **41 tests passing**.
- E2E: journey passing (mobile Chromium).
- Typecheck, build, and `seed:validate`: green.
