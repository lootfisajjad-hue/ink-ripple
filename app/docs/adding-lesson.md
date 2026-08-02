# Adding a lesson

Lessons live in `src/content/seed/lessons.ts` as an array of `LessonSeed`
objects. A `LessonSeed` is the schema `Lesson` (`src/domain/content/schema.ts`)
plus one app-only field, `categories`:

```ts
type LessonSeed = Omit<Lesson, 'exercises'> & {
  categories: string[];
  exercises: Lesson['exercises'];
};
```

## Fields

- `id`, `slug` — unique identifiers (`slug` also keys `lessonCategoryMap`).
- `title` (Persian), `titlePt` (optional Portuguese title).
- `cefr` — one of `A1 | A2 | B1 | B2 | C1`.
- `track` — e.g. `'a1'`, `'a2'`, `'citizenship'`.
- `order` — position within the track.
- `objectiveFa`, `grammarNoteFa` (optional) — Persian learning notes.
- `categories` — **how vocab/phrases are attached**. At runtime the lesson
  screen reads `lessonCategoryMap` (built from `slug → categories` in
  `src/content/seed/index.ts`) and pulls matching vocab/phrases via
  `getLessonContent`. So you list **category names**, not content ids.
- `vocabIds` / `phraseIds` — usually left `[]` because `categories` drives
  content; use them only to pin specific items.
- `dialogueIds` — must reference existing dialogues in `seed/dialogues.ts`.
- `exercises` — inline `Exercise[]` (see below).
- `estimatedMinutes` — positive integer.

Before the bundle is validated, `seed/index.ts` strips the `categories` field so
each lesson matches the schema exactly.

## Exercise shape

Each exercise needs `id`, `type`, `prompt`, `answer`, `cefr`, and `skill`.
`type` is one of `mcq | fill-blank | match | listen-type | translate-fa-pt |
translate-pt-fa | speak | order-words`; `skill` is one of `vocab | grammar |
listening | reading | writing | speaking`. `options`, `explanationFa`, and
`audioText` (for `listen-type`) are optional.

## Full example

Add to the `lessons` array in `src/content/seed/lessons.ts`:

```ts
L({
  id: 'les-a1-directions',
  slug: 'a1-directions',
  title: 'مسیر و آدرس',
  titlePt: 'Direções',
  cefr: 'A1',
  track: 'a1',
  order: 5,
  objectiveFa: 'پرسیدن مسیر و فهمیدن جهت‌ها را یاد بگیرید.',
  grammarNoteFa: 'برای پرسیدن مسیر: «Onde fica...?» (… کجاست؟).',
  categories: ['directions', 'city'],
  vocabIds: [],
  phraseIds: [],
  dialogueIds: [],
  estimatedMinutes: 12,
  exercises: [
    {
      id: 'ex-dir-1',
      type: 'mcq',
      prompt: 'معنی «à direita» چیست؟',
      options: ['به چپ', 'به راست', 'مستقیم', 'برگرد'],
      answer: 'به راست',
      explanationFa: '«à direita» یعنی سمت راست.',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'ex-dir-2',
      type: 'translate-fa-pt',
      prompt: '«ایستگاه کجاست؟» را به پرتغالی بگویید.',
      options: [
        'Onde fica a estação?',
        'Quanto custa?',
        'Como você está?',
        'Que horas são?',
      ],
      answer: 'Onde fica a estação?',
      cefr: 'A1',
      skill: 'writing',
    },
  ],
}),
```

## After editing

Run the checks:

```bash
npm run seed:validate   # Zod + integrity checks (unique ids, dialogue refs)
npm test
```

`seed:validate` fails if `id`/`slug` collide with an existing record or if any
`dialogueIds` entry doesn't resolve to a real dialogue.
