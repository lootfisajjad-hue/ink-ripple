/**
 * Assemble the full seed bundle from the individual content modules and expose
 * it (validated) to the seeding routine. The lesson→category map is kept
 * separately because it is app metadata, not part of the persisted schema.
 */
import {
  contentBundleSchema,
  type ContentBundle,
} from '../../domain/content/schema';
import { sources } from './sources';
import { vocab as coreVocab } from './vocab';
import { vocabExtra } from './vocabExtra';
import { vocabExtra2 } from './vocabExtra2';
import { vocabExtra3 } from './vocabExtra3';
import { phrases } from './phrases';
import { lessons as lessonsWithCategories } from './lessons';
import { dialogues } from './dialogues';
import { interviewQuestions } from './interviewQuestions';
import { citizenshipTopics } from './citizenshipTopics';
import { cities } from './cities';
import { documentTemplates } from './documentTemplates';
import { courseLessons } from './course';

/** slug → categories, used by the Lesson screen to pull vocab/phrases. */
export const lessonCategoryMap: Record<string, string[]> = Object.fromEntries(
  lessonsWithCategories.map((l) => [l.slug, l.categories]),
);

// Strip the app-only `categories` field so lessons match the schema exactly.
const lessons = lessonsWithCategories.map(
  ({ categories: _categories, ...rest }) => rest,
);

// Merge the core (A1) vocabulary with the extended set, dropping any extended
// word that repeats an existing one in the same category (same text).
const seenVocab = new Set(
  coreVocab.map((v) => `${v.category}::${v.pt.toLowerCase()}`),
);
const vocab = [
  ...coreVocab,
  ...[...vocabExtra, ...vocabExtra2, ...vocabExtra3].filter((v) => {
    const key = `${v.category}::${v.pt.toLowerCase()}`;
    if (seenVocab.has(key)) return false;
    seenVocab.add(key);
    return true;
  }),
];

/** The raw, unvalidated bundle. Use {@link getContentBundle} for a checked one. */
export const rawBundle = {
  sources,
  vocab,
  phrases,
  lessons,
  dialogues,
  interviewQuestions,
  citizenshipTopics,
  cities,
  documentTemplates,
  courseLessons,
};

/** Validate and return the bundle. Throws (with details) on malformed content. */
export function getContentBundle(): ContentBundle {
  return contentBundleSchema.parse(rawBundle);
}

/** Handy totals for reporting / the admin panel. */
export const contentCounts = {
  sources: sources.length,
  vocab: vocab.length,
  phrases: phrases.length,
  lessons: lessons.length,
  dialogues: dialogues.length,
  interviewQuestions: interviewQuestions.length,
  citizenshipTopics: citizenshipTopics.length,
  cities: cities.length,
  documentTemplates: documentTemplates.length,
  courseLessons: courseLessons.length,
};
