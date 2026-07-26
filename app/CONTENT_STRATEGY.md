# CONTENT_STRATEGY — Olá Brasil

## Principles

1. **Pedagogically grounded.** Content supports CEFR A1→B2 and the methods the
   app is built around: spaced repetition (FSRS), active recall, comprehensible
   input, shadowing, dictation, and learning in real situations.
2. **Persian-speaker–aware.** Every item carries an accurate literal Persian
   translation, a natural Persian translation, and a Persian-friendly
   pronunciation guide; notes call out mistakes Persian speakers typically make
   (gender, nasal `ão`, `r/rr`, `d/t + i`, `s/z`).
3. **Brazilian Portuguese**, not European.
4. **Honest provenance.** Every item records whether it is `ai-generated`,
   `human-verified`, or `needs-review`. Legally-sensitive content is sourced and
   dated and labelled "general information, not legal advice."
5. **No copyright violations.** Content is authored for this app; we never copy
   full texts of copyrighted books or paid courses. Only official/public
   references are cited.

## Data model

The single source of truth is the Zod schema in
`src/domain/content/schema.ts`. Each phrase/word records: `pt`, `faLiteral`,
`faNatural`, optional `en`, `pronunciation`, `cefr`, `category`, `tags`,
`formality`, optional `region`, `notes`, `commonMistakes`, `examples`,
`audioUrl`, `sourceId`, `verification`, timestamps, and `version`.

Collections: `sources`, `vocab`, `phrases`, `lessons`, `dialogues`,
`interviewQuestions`, `citizenshipTopics`, `cities`, `documentTemplates`.

## Pipeline

Authoring → validation → seeding → QC:

1. **Gather sources** (official/public) → `src/content/seed/sources.ts`.
2. **Author content** compactly using `mkVocab` / `mkPhrase` helpers (they fill
   timestamps/version/defaults) → `src/content/seed/*.ts`.
3. **Validate** (`npm run seed:validate`): Zod schema + integrity checks
   (unique ids, resolvable `sourceId`, resolvable lesson `dialogueId`), and a
   report of human-verified vs AI-generated counts.
4. **Seed** into IndexedDB (`seedContent()`), keyed on `CONTENT_VERSION`.
5. **QC / review**: a human promotes `ai-generated` → `human-verified` after
   checking Portuguese correctness and Persian translation quality.

AI-generated content is clearly distinguished from human-verified content in the
data and can be surfaced in the UI (`common.aiGenerated` / `common.humanVerified`).

## Current seed (this release)

Real, validated content (not filler):

| Collection | Count |
| --- | --- |
| vocab | 213 |
| phrases (daily + admin) | 173 |
| interview questions (with graded sample answers) | 22 |
| citizenship topics (sourced) | 8 |
| cities | 5 |
| dialogues | 4 |
| lessons | 7 |
| document templates | 7 |
| sources | 8 |

These are a genuine, working core. The stated targets (e.g. 1000 words, 200
interview questions) are the **roadmap ceiling**; the pipeline above is built to
scale toward them. Current provenance: all seed vocab/phrases are marked
`ai-generated` pending human review — the app tracks this honestly rather than
overclaiming.

## Growing the content

- Add words/phrases in `src/content/seed/{vocab,phrases}.ts` via the helpers.
- Add lessons per `docs/adding-lesson.md` (link content by `categories`).
- Always run `npm run seed:validate && npm test` before shipping, and bump
  `CONTENT_VERSION` in `src/infra/db/seed.ts` so devices re-seed.
