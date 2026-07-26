/**
 * Content schema — the single source of truth for every learning item.
 *
 * All content (vocabulary, phrases, lessons, interview Q&A, …) is validated
 * against these Zod schemas at build time (see src/content/pipeline) and at
 * seed time, so malformed or half-translated content can never reach the app.
 */
import { z } from 'zod';

export const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;
export const cefrSchema = z.enum(CEFR);
export type Cefr = (typeof CEFR)[number];

export const formalitySchema = z.enum(['formal', 'informal', 'neutral']);
export type Formality = z.infer<typeof formalitySchema>;

/** Where a claim/phrase comes from, and how much we trust it. */
export const sourceTypeSchema = z.enum([
  'official', // government / law / official portal
  'academic', // university / recognised institution
  'reference', // dictionaries, grammars, public references
  'generated', // authored for this app (not from an external claim)
]);
export type SourceType = z.infer<typeof sourceTypeSchema>;

export const verificationSchema = z.enum([
  'human-verified',
  'ai-generated',
  'needs-review',
]);
export type Verification = z.infer<typeof verificationSchema>;

/** A citable source, kept with every legally-sensitive claim. */
export const sourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  publisher: z.string().optional(),
  url: z.string().url().optional(),
  sourceType: sourceTypeSchema,
  official: z.boolean().default(false),
  accessedAt: z.string(), // ISO date the source was reviewed
  note: z.string().optional(),
});
export type Source = z.infer<typeof sourceSchema>;

/**
 * The atomic learning unit: one Portuguese expression with everything a
 * Persian speaker needs to understand, pronounce, and reuse it.
 */
export const phraseSchema = z.object({
  id: z.string(),
  pt: z.string(), // Brazilian Portuguese text
  faLiteral: z.string(), // precise (literal) Persian translation
  faNatural: z.string(), // natural, idiomatic Persian
  en: z.string().optional(),
  pronunciation: z.string(), // Persian-friendly pronunciation guide
  ipa: z.string().optional(),
  cefr: cefrSchema,
  category: z.string(),
  tags: z.array(z.string()).default([]),
  formality: formalitySchema.default('neutral'),
  region: z.string().optional(),
  notes: z.string().optional(), // grammar / usage note (in Persian)
  commonMistakes: z.array(z.string()).default([]),
  examples: z.array(z.object({ pt: z.string(), fa: z.string() })).default([]),
  audioUrl: z.string().optional(),
  sourceId: z.string().optional(),
  verification: verificationSchema.default('ai-generated'),
  createdAt: z.string(),
  updatedAt: z.string(),
  version: z.number().int().positive().default(1),
  reviewNotes: z.string().optional(),
});
export type Phrase = z.infer<typeof phraseSchema>;

/** A single vocabulary word (a thin specialisation of a phrase). */
export const vocabSchema = phraseSchema.extend({
  pos: z
    .enum(['noun', 'verb', 'adj', 'adv', 'prep', 'pron', 'phrase', 'other'])
    .default('other'),
  gender: z.enum(['m', 'f', 'mf', 'none']).default('none'),
  plural: z.string().optional(),
});
export type Vocab = z.infer<typeof vocabSchema>;

export const exerciseSchema = z.object({
  id: z.string(),
  type: z.enum([
    'mcq', // multiple choice
    'fill-blank',
    'match',
    'listen-type', // dictation
    'translate-fa-pt',
    'translate-pt-fa',
    'speak', // shadowing / speaking prompt
    'order-words',
  ]),
  prompt: z.string(),
  promptFa: z.string().optional(),
  audioText: z.string().optional(), // text to speak for listening exercises
  options: z.array(z.string()).default([]),
  answer: z.union([z.string(), z.array(z.string())]),
  explanationFa: z.string().optional(),
  cefr: cefrSchema,
  skill: z.enum([
    'vocab',
    'grammar',
    'listening',
    'reading',
    'writing',
    'speaking',
  ]),
});
export type Exercise = z.infer<typeof exerciseSchema>;

export const lessonSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(), // Persian title
  titlePt: z.string().optional(),
  cefr: cefrSchema,
  track: z.string(), // e.g. 'a1', 'citizenship'
  order: z.number().int().nonnegative(),
  objectiveFa: z.string(),
  grammarNoteFa: z.string().optional(),
  vocabIds: z.array(z.string()).default([]),
  phraseIds: z.array(z.string()).default([]),
  dialogueIds: z.array(z.string()).default([]),
  exercises: z.array(exerciseSchema).default([]),
  estimatedMinutes: z.number().int().positive().default(10),
});
export type Lesson = z.infer<typeof lessonSchema>;

export const dialogueLineSchema = z.object({
  speaker: z.string(),
  pt: z.string(),
  fa: z.string(),
  pronunciation: z.string().optional(),
});
export const dialogueSchema = z.object({
  id: z.string(),
  title: z.string(),
  scenario: z.string(), // e.g. 'pharmacy', 'polícia-federal'
  cefr: cefrSchema,
  lines: z.array(dialogueLineSchema).min(2),
  notesFa: z.string().optional(),
});
export type Dialogue = z.infer<typeof dialogueSchema>;

/** Interview Q&A for the citizenship module. */
export const interviewQuestionSchema = z.object({
  id: z.string(),
  topic: z.string(), // 'personal', 'residence', 'documents', …
  pt: z.string(), // the officer's question
  fa: z.string(), // Persian translation of the question
  pronunciation: z.string().optional(),
  sampleAnswers: z
    .array(
      z.object({
        cefr: cefrSchema,
        pt: z.string(),
        fa: z.string(),
      }),
    )
    .min(1),
  tips: z.array(z.string()).default([]),
  sourceId: z.string().optional(),
});
export type InterviewQuestion = z.infer<typeof interviewQuestionSchema>;

/** A knowledge item for the Brazil society/culture/citizenship track. */
export const citizenshipTopicSchema = z.object({
  id: z.string(),
  category: z.enum([
    'geography',
    'history',
    'government',
    'rights',
    'culture',
    'process',
  ]),
  title: z.string(),
  bodyFa: z.string(), // explanation in Persian (educational, neutral)
  keyTermsPt: z.array(z.object({ pt: z.string(), fa: z.string() })).default([]),
  sourceId: z.string(), // legally/factually sensitive → source required
  disclaimer: z.boolean().default(true), // show "general info, not legal advice"
});
export type CitizenshipTopic = z.infer<typeof citizenshipTopicSchema>;

export const cityContentSchema = z.object({
  id: z.string(),
  city: z.string(),
  state: z.string(),
  region: z.string(),
  overviewFa: z.string(),
  phrases: z.array(z.object({ pt: z.string(), fa: z.string() })).default([]),
  offices: z
    .array(z.object({ name: z.string(), descFa: z.string() }))
    .default([]),
});
export type CityContent = z.infer<typeof cityContentSchema>;

export const documentTemplateSchema = z.object({
  id: z.string(),
  name: z.string(), // e.g. 'Certidão de nascimento'
  nameFa: z.string(),
  descFa: z.string(),
  sourceId: z.string(),
});
export type DocumentTemplate = z.infer<typeof documentTemplateSchema>;

/**
 * A worked example inside a course section: Portuguese + Persian + optional
 * pronunciation guide and a short Persian note.
 */
export const courseExampleSchema = z.object({
  pt: z.string(),
  fa: z.string(),
  pron: z.string().optional(),
  note: z.string().optional(),
});
export type CourseExample = z.infer<typeof courseExampleSchema>;

/** One teaching step: a simplified Persian explanation + examples. */
export const courseSectionSchema = z.object({
  headingFa: z.string(),
  bodyFa: z.string(),
  examples: z.array(courseExampleSchema).default([]),
});
export type CourseSection = z.infer<typeof courseSectionSchema>;

/**
 * A course lesson — a step-by-step, simplified re-teaching of a source "Aula"
 * from the federal-prep materials. Interface/explanations in Persian, examples
 * in Brazilian Portuguese.
 */
export const courseLessonSchema = z.object({
  id: z.string(),
  order: z.number().int().nonnegative(),
  aula: z.string(), // e.g. 'Aula 1'
  titleFa: z.string(), // Persian title (required)
  titlePt: z.string(), // original Portuguese title
  cefr: cefrSchema,
  summaryFa: z.string(),
  objectivesFa: z.array(z.string()).default([]),
  sections: z.array(courseSectionSchema).min(1),
  keyPointsFa: z.array(z.string()).default([]),
  quiz: z.array(exerciseSchema).default([]),
  estimatedMinutes: z.number().int().positive().default(12),
  sourceNoteFa: z.string(),
});
export type CourseLesson = z.infer<typeof courseLessonSchema>;

/** The whole seed bundle, validated as one object. */
export const contentBundleSchema = z.object({
  sources: z.array(sourceSchema),
  vocab: z.array(vocabSchema),
  phrases: z.array(phraseSchema),
  lessons: z.array(lessonSchema),
  dialogues: z.array(dialogueSchema),
  interviewQuestions: z.array(interviewQuestionSchema),
  citizenshipTopics: z.array(citizenshipTopicSchema),
  cities: z.array(cityContentSchema),
  documentTemplates: z.array(documentTemplateSchema),
  courseLessons: z.array(courseLessonSchema),
});
export type ContentBundle = z.infer<typeof contentBundleSchema>;
