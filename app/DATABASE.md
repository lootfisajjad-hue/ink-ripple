# DATABASE — Olá Brasil

The app is **offline-first**. All data lives in the browser via **IndexedDB**
(through [Dexie](https://dexie.org)). There is no required server. An optional
`SyncProvider` can later mirror per-profile tables to a backend (see
`../ARCHITECTURE.md`).

Schema definition: `src/infra/db/db.ts` (Dexie v1). Content shape and validation:
`src/domain/content/schema.ts` (Zod).

## Two kinds of tables

1. **Content tables** — shared, seeded from the validated bundle on first run
   (`src/infra/db/seed.ts`). Read-only at runtime.
2. **Per-profile tables** — a learner's own state. Every row carries a
   `profileId` so multiple family profiles stay fully isolated.

## Content tables

| Table | Key | Indexes | Notes |
| --- | --- | --- | --- |
| `sources` | `id` | — | Citable official/public sources with `accessedAt`. |
| `vocab` | `id` | `cefr, category` | Words (extends phrase with pos/gender/plural). |
| `phrases` | `id` | `cefr, category` | Sentences/expressions. |
| `lessons` | `id` | `track, cefr, order` | Structured lessons + inline exercises. |
| `dialogues` | `id` | `scenario, cefr` | Situational dialogues. |
| `interviewQuestions` | `id` | `topic` | Citizenship Q&A with graded sample answers. |
| `citizenshipTopics` | `id` | `category` | Society/history/process; each has `sourceId` + `disclaimer`. |
| `cities` | `id` | `city` | City-specific content. |
| `documentTemplates` | `id` | — | Seed items for the document checklist. |

## Per-profile tables

| Table | Key | Indexes | Notes |
| --- | --- | --- | --- |
| `profiles` | `id` | — | displayName, interfaceLang, goal, dailyMinutes, cefr, onboarded. |
| `flashcards` | `id` = `profileId:itemId` | `profileId, deck, [profileId+deck], memory.due` | Carries the FSRS `MemoryState`. |
| `reviewLogs` | `++id` | `profileId, cardId, reviewedAt` | One row per grade; feeds retention stats. |
| `progress` | `id` = `profileId:lessonId` | `profileId, lessonId` | completed/score/mastery. |
| `skillScores` | `id` = `profileId:skill` | `profileId, skill` | Per-skill CEFR from placement. |
| `mistakes` | `++id` | `profileId, context, turnedIntoCard` | Mined into flashcards. |
| `interviewSessions` | `id` | `profileId` | Simulator turns + report. |
| `conversations` | `id` | `profileId` | AI chat history. |
| `documents` | `id` = `profileId:templateId` | `profileId` | User checklist (status/dates/notes). |
| `pronunciationAttempts` | `++id` | `profileId, phraseId` | Metadata for recordings. |
| `dailyActivity` | `id` = `profileId:date` | `profileId, date` | Minutes/reviews/lessons per day → streak. |

## Relationships & integrity

- Referential integrity that Dexie can't enforce is checked by the content
  pipeline (`src/content/pipeline/validate.ts`): unique ids per collection,
  every `sourceId` resolves, every lesson `dialogueId` resolves.
- Lessons reference vocab/phrases **by category** at runtime
  (`lessonCategoryMap` → `getLessonContent`), not by hard ids, so content can be
  extended without touching lessons.

## Seeding & versioning

`seedContent()` is idempotent and keyed on `CONTENT_VERSION` (stored in
`localStorage`). Bumping the version re-seeds content tables via `bulkPut`
without touching per-profile data. Run `npm run seed:validate` to check content
before shipping a new version.

## Migrations

Dexie versions the schema. To evolve it, add `db.version(2).stores({...})` with
an optional `.upgrade(tx => ...)` — never mutate the existing `version(1)`
block. Per-profile data is preserved across content re-seeds.
