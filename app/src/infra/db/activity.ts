/**
 * Daily activity + progress helpers. Tracks minutes, reviews and lessons per
 * day (for the streak and stats), and lesson completion / mastery.
 */
import { db, type ProgressRecord } from './db';

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function logActivity(
  profileId: string,
  delta: { minutes?: number; reviews?: number; lessons?: number },
): Promise<void> {
  const date = today();
  const id = `${profileId}:${date}`;
  const existing = await db.dailyActivity.get(id);
  const base = existing ?? {
    id,
    profileId,
    date,
    minutes: 0,
    reviews: 0,
    lessons: 0,
  };
  await db.dailyActivity.put({
    ...base,
    minutes: base.minutes + (delta.minutes ?? 0),
    reviews: base.reviews + (delta.reviews ?? 0),
    lessons: base.lessons + (delta.lessons ?? 0),
  });
}

export async function getTodayActivity(profileId: string) {
  return (
    (await db.dailyActivity.get(`${profileId}:${today()}`)) ?? {
      id: `${profileId}:${today()}`,
      profileId,
      date: today(),
      minutes: 0,
      reviews: 0,
      lessons: 0,
    }
  );
}

/** Consecutive-day streak ending today (or yesterday). */
export async function getStreak(profileId: string): Promise<number> {
  const rows = await db.dailyActivity
    .where('profileId')
    .equals(profileId)
    .toArray();
  const days = new Set(
    rows.filter((r) => r.minutes > 0 || r.reviews > 0).map((r) => r.date),
  );
  let streak = 0;
  const cursor = new Date();
  // allow the streak to count from today or yesterday
  if (!days.has(cursor.toISOString().slice(0, 10))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export async function setLessonProgress(
  profileId: string,
  lessonId: string,
  patch: Partial<Omit<ProgressRecord, 'id' | 'profileId' | 'lessonId'>>,
): Promise<void> {
  const id = `${profileId}:${lessonId}`;
  const existing = await db.progress.get(id);
  const base: ProgressRecord = existing ?? {
    id,
    profileId,
    lessonId,
    completed: false,
    score: 0,
    mastery: 0,
    updatedAt: new Date().toISOString(),
  };
  await db.progress.put({
    ...base,
    ...patch,
    updatedAt: new Date().toISOString(),
  });
}

export async function getProgressMap(
  profileId: string,
): Promise<Map<string, ProgressRecord>> {
  const rows = await db.progress.where('profileId').equals(profileId).toArray();
  return new Map(rows.map((r) => [r.lessonId, r]));
}
