/**
 * Federal Prep Course — the list of Aulas (lessons re-taught step-by-step in
 * Persian, based on the user's federal-preparation materials). Shows completion
 * state and links into each lesson reader.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, ProgressBar } from '../components/kit';
import { useSession } from '@/app/store/session';
import { getCourseLessons } from '@/infra/db/content';
import { getProgressMap } from '@/infra/db/activity';
import type { CourseLesson } from '@/domain/content/schema';

export function Course() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [lessons, setLessons] = useState<CourseLesson[]>([]);
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    getCourseLessons().then(setLessons);
    getProgressMap(profile.id).then((m) => {
      setDone(
        new Set(
          [...m.values()].filter((p) => p.completed).map((p) => p.lessonId),
        ),
      );
    });
  }, [profile.id]);

  const doneCount = lessons.filter((l) => done.has(l.id)).length;

  return (
    <div>
      <h1 className="screen-title">{t('course.title')}</h1>
      <p className="screen-subtitle">{t('course.subtitle')}</p>

      {lessons.length > 0 && (
        <div className="stack" style={{ marginBottom: 'var(--space-4)' }}>
          <ProgressBar value={doneCount / lessons.length} />
          <span className="muted" style={{ fontSize: '0.85rem' }}>
            {t('course.progress', { done: doneCount, total: lessons.length })}
          </span>
        </div>
      )}

      <div className="lesson-list">
        {lessons.map((l) => (
          <Link key={l.id} to={`/course/${l.id}`} className="lesson-item">
            <span className="lesson-num">{l.order}</span>
            <span style={{ flex: 1 }}>
              <strong>{l.titleFa}</strong>
              <div
                className="muted pt"
                lang="pt"
                style={{ fontSize: '0.82rem' }}
              >
                {l.aula} · {l.titlePt}
              </div>
            </span>
            <Badge tone="primary">{l.cefr}</Badge>
            {done.has(l.id) && (
              <span className="lesson-done" aria-label={t('common.done')}>
                ✓
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
