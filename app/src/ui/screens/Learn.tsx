/**
 * Learning path: pick a track (A1, A2, citizenship, …) and see its lessons with
 * completion state. Lessons unlock in order.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSession } from '@/app/store/session';
import { getAllTracks, getLessonsByTrack } from '@/infra/db/content';
import { getProgressMap } from '@/infra/db/activity';
import type { Lesson } from '@/domain/content/schema';

const TRACK_LABEL: Record<string, string> = {
  a1: 'A1 — پایه',
  a2: 'A2 — پیش‌متوسط',
  citizenship: 'شهروندی',
};

export function Learn() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [tracks, setTracks] = useState<string[]>([]);
  const [active, setActive] = useState<string>('a1');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    getAllTracks().then((tr) => {
      setTracks(tr);
      if (tr.length && !tr.includes(active)) setActive(tr[0]!);
    });
    getProgressMap(profile.id).then((m) => {
      setDone(
        new Set(
          [...m.values()].filter((p) => p.completed).map((p) => p.lessonId),
        ),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.id]);

  useEffect(() => {
    getLessonsByTrack(active).then(setLessons);
  }, [active]);

  return (
    <div>
      <h1 className="screen-title">{t('learn.title')}</h1>
      <div className="track-tabs" role="tablist">
        {tracks.map((tr) => (
          <button
            key={tr}
            role="tab"
            aria-selected={active === tr}
            className={`track-tab ${active === tr ? 'track-tab-active' : ''}`}
            onClick={() => setActive(tr)}
          >
            {TRACK_LABEL[tr] ?? tr}
          </button>
        ))}
      </div>

      <div className="lesson-list">
        {lessons.map((l, i) => {
          const prevDone = i === 0 || done.has(lessons[i - 1]!.id);
          const isDone = done.has(l.id);
          const locked = !prevDone && !isDone;
          const inner = (
            <>
              <span className="lesson-num">{l.order}</span>
              <span>
                <strong>{l.title}</strong>
                <div className="muted" style={{ fontSize: '0.85rem' }}>
                  {l.cefr} · {l.estimatedMinutes} {t('common.minutes')}
                </div>
              </span>
              {isDone && (
                <span className="lesson-done" aria-label={t('common.done')}>
                  ✓
                </span>
              )}
              {locked && (
                <span className="lesson-done" aria-hidden="true">
                  🔒
                </span>
              )}
            </>
          );
          return locked ? (
            <div key={l.id} className="lesson-item" aria-disabled="true">
              {inner}
            </div>
          ) : (
            <Link
              key={l.id}
              to={`/learn/lesson/${l.id}`}
              className="lesson-item"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
