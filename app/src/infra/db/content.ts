/**
 * Read-side helpers over the content tables. Keeps Dexie queries in one place
 * so screens depend on intent ("give me this lesson's vocab"), not on schema.
 */
import { db } from './db';
import { lessonCategoryMap } from '@/content/seed';
import type {
  Vocab,
  Phrase,
  Lesson,
  Dialogue,
  CourseLesson,
} from '@/domain/content/schema';

export async function getCourseLessons(): Promise<CourseLesson[]> {
  const lessons = await db.courseLessons.toArray();
  return lessons.sort((a, b) => a.order - b.order);
}

export async function getCourseLesson(
  id: string,
): Promise<CourseLesson | undefined> {
  return db.courseLessons.get(id);
}

export async function getLessonsByTrack(track: string): Promise<Lesson[]> {
  const lessons = await db.lessons.where('track').equals(track).toArray();
  return lessons.sort((a, b) => a.order - b.order);
}

export async function getAllTracks(): Promise<string[]> {
  const lessons = await db.lessons.toArray();
  return [...new Set(lessons.map((l) => l.track))];
}

export async function getLesson(id: string): Promise<Lesson | undefined> {
  return db.lessons.get(id);
}

/** Vocab + phrases + dialogues a lesson should surface, by its category map. */
export async function getLessonContent(lesson: Lesson): Promise<{
  vocab: Vocab[];
  phrases: Phrase[];
  dialogues: Dialogue[];
}> {
  const categories = lessonCategoryMap[lesson.slug] ?? [];
  const [allVocab, allPhrases] = await Promise.all([
    db.vocab.where('category').anyOf(categories).toArray(),
    db.phrases.where('category').anyOf(categories).toArray(),
  ]);
  const dialogues = lesson.dialogueIds.length
    ? await db.dialogues.bulkGet(lesson.dialogueIds)
    : [];
  return {
    vocab: allVocab.slice(0, 12),
    phrases: allPhrases.slice(0, 10),
    dialogues: dialogues.filter((d): d is Dialogue => Boolean(d)),
  };
}

export async function getVocabByCategory(category: string): Promise<Vocab[]> {
  return db.vocab.where('category').equals(category).toArray();
}

export async function getAllVocab(): Promise<Vocab[]> {
  return db.vocab.toArray();
}

/** Vocabulary categories with their word count and the CEFR levels present. */
export async function getVocabCategories(): Promise<
  Array<{ category: string; count: number; levels: string[] }>
> {
  const all = await db.vocab.toArray();
  const map = new Map<string, { count: number; levels: Set<string> }>();
  for (const v of all) {
    const entry = map.get(v.category) ?? { count: 0, levels: new Set() };
    entry.count += 1;
    entry.levels.add(v.cefr);
    map.set(v.category, entry);
  }
  return [...map.entries()]
    .map(([category, v]) => ({
      category,
      count: v.count,
      levels: [...v.levels].sort(),
    }))
    .sort((a, b) => b.count - a.count);
}

export async function searchPhrases(
  query: string,
  limit = 30,
): Promise<Phrase[]> {
  const q = query.trim().toLowerCase();
  if (!q) return db.phrases.limit(limit).toArray();
  const all = await db.phrases.toArray();
  return all
    .filter(
      (p) =>
        p.pt.toLowerCase().includes(q) ||
        p.faNatural.includes(q) ||
        p.faLiteral.includes(q),
    )
    .slice(0, limit);
}
