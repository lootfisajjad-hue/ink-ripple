# Content authoring and administration

This app is content-driven: every learning item is authored as typed seed data,
validated against a Zod schema, then bundled into the app. This guide covers the
content model, how to author and validate it, and the review workflow.

## The content model

All content is assembled into one `ContentBundle`
(`src/domain/content/schema.ts`) made of these collections:

- `sources` — citable references kept with legally/factually sensitive claims.
- `vocab` — single words (a specialisation of `phrase` with `pos`, `gender`,
  `plural`).
- `phrases` — full expressions with Persian translations and pronunciation.
- `lessons` — structured lessons with inline exercises (see
  `adding-lesson.md`).
- `dialogues` — multi-line scripted conversations.
- `interviewQuestions` — citizenship interview Q&A with sample answers.
- `citizenshipTopics` — society/culture/process knowledge items (require a
  `sourceId`).
- `cities` — city-specific overviews and phrases.
- `documentTemplates` — official document references (require a `sourceId`).

## Authoring content

Each collection is authored in its own file under `src/content/seed/*.ts`
(`vocab.ts`, `phrases.ts`, `lessons.ts`, `sources.ts`, …). Vocab and phrases use
the `mkVocab` / `mkPhrase` helpers from `seed/helpers.ts`, which fill boilerplate
(`createdAt`/`updatedAt` from the fixed `SEED_DATE`, `version`, and defaults) so
seed data stays concise:

```ts
import { mkVocab, mkPhrase } from './helpers';

export const vocab = [
  mkVocab({
    id: 'voc-agua',
    pt: 'água',
    faLiteral: 'آب',
    pron: 'آگوا',
    cefr: 'A1',
    category: 'drinks',
    pos: 'noun',
    gender: 'f',
    verification: 'human-verified',
  }),
];

export const phrases = [
  mkPhrase({
    id: 'phr-quanto-custa',
    pt: 'Quanto custa?',
    faLiteral: 'چقدر قیمت دارد؟',
    faNatural: 'چند است؟',
    pron: 'کوانتو کوستا',
    cefr: 'A1',
    category: 'shopping',
    sourceId: 'src-dicionario',
  }),
];
```

Helper defaults worth knowing: `faNatural` falls back to `faLiteral`, `pos`
defaults to `'other'`, `gender` to `'none'`, `formality` to `'neutral'`, and
`verification` to `'ai-generated'`.

All seed modules are collected in `seed/index.ts` into `rawBundle`;
`getContentBundle()` returns the validated bundle.

## Verification tracking

Every vocab and phrase carries a `verification` field:
`'human-verified' | 'ai-generated' | 'needs-review'` (default
`'ai-generated'`). This records how much a record is trusted. `seed:validate`
reports the human-verified ratio, e.g. `Human-verified vocab/phrases: 12/40`.
Sources also carry a `sourceType` (`official | academic | reference |
generated`) so provenance is explicit.

## Validation

Validation is `npm run seed:validate` (`src/content/pipeline/validate.ts`). It:

1. Parses the whole `rawBundle` through `contentBundleSchema` (Zod) — catches
   missing/malformed fields and half-translated content.
2. Runs integrity checks the schema can't express:
   - **unique ids** within each collection,
   - every `sourceId` (on phrases, citizenshipTopics, documentTemplates,
     interviewQuestions) resolves to a real source,
   - every lesson `dialogueId` resolves to a real dialogue.

It prints content counts and the human-verified ratio, and exits non-zero on any
problem so it can gate CI.

## Workflow: add or verify content

1. Add records to the relevant `seed/*.ts` file using `mkVocab`/`mkPhrase` (or
   the plain object shape for other collections). New AI-drafted items should
   start as `'ai-generated'` or `'needs-review'`.
2. If a claim is legally/factually sensitive, add a `Source` to `sources.ts`
   and reference it via `sourceId`.
3. Run `npm run seed:validate` and `npm test` and fix any reported problems.
4. When a human reviews and confirms a record, flip its `verification` to
   `'human-verified'` (bump `version` if the content itself changed).

## Content pipeline steps

Authoring (`seed/*.ts`) → assembly (`seed/index.ts` → `rawBundle`) →
validation (`pipeline/validate.ts`, Zod + integrity checks) →
`getContentBundle()` (validated bundle) → seeding into the app's local database.
Malformed content is rejected before it can reach the app.
