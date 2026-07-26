/**
 * Idempotent seeding. On first run (or when the content version changes) we
 * populate the content tables from the validated seed bundle. Per-profile data
 * is never touched here.
 */
import { db } from './db';
import { getContentBundle } from '@/content/seed';

const CONTENT_VERSION = 3;
const VERSION_KEY = 'ola-brasil-content-version';

/** Seed content into IndexedDB if not already present at this version. */
export async function seedContent(force = false): Promise<boolean> {
  const current = Number(localStorage.getItem(VERSION_KEY) ?? '0');
  const existing = await db.vocab.count();
  if (!force && current === CONTENT_VERSION && existing > 0) {
    return false; // already seeded
  }

  const bundle = getContentBundle(); // validates; throws on bad content

  await db.transaction(
    'rw',
    [
      db.sources,
      db.vocab,
      db.phrases,
      db.lessons,
      db.dialogues,
      db.interviewQuestions,
      db.citizenshipTopics,
      db.cities,
      db.documentTemplates,
      db.courseLessons,
    ],
    async () => {
      await Promise.all([
        db.sources.bulkPut(bundle.sources),
        db.vocab.bulkPut(bundle.vocab),
        db.phrases.bulkPut(bundle.phrases),
        db.lessons.bulkPut(bundle.lessons),
        db.dialogues.bulkPut(bundle.dialogues),
        db.interviewQuestions.bulkPut(bundle.interviewQuestions),
        db.citizenshipTopics.bulkPut(bundle.citizenshipTopics),
        db.cities.bulkPut(bundle.cities),
        db.documentTemplates.bulkPut(bundle.documentTemplates),
        db.courseLessons.bulkPut(bundle.courseLessons),
      ]);
    },
  );

  localStorage.setItem(VERSION_KEY, String(CONTENT_VERSION));
  return true;
}
