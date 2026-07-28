/**
 * Courses & books landing — shows each source collection (the federal-prep
 * Aulas and each provided book) as its own category card. Tapping a card opens
 * that collection's lessons (see CourseCollection).
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from '../components/kit';
import { useSession } from '@/app/store/session';
import { getCourseLessons } from '@/infra/db/content';
import { getProgressMap } from '@/infra/db/activity';
import type { CourseLesson } from '@/domain/content/schema';

// stable display order + an icon per known track
const TRACK_ORDER = ['federal', 'portas', 'mafalda'];
const TRACK_ICON: Record<string, string> = {
  federal: '🇧🇷',
  portas: '🚪',
  mafalda: '🕊️',
};

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

  // group lessons into collections by track
  const byTrack = new Map<string, CourseLesson[]>();
  for (const l of lessons) {
    const key = l.track ?? 'federal';
    (byTrack.get(key) ?? byTrack.set(key, []).get(key)!).push(l);
  }
  const tracks = [...byTrack.keys()].sort(
    (a, b) => TRACK_ORDER.indexOf(a) - TRACK_ORDER.indexOf(b),
  );

  return (
    <div>
      <h1 className="screen-title">{t('course.title')}</h1>
      <p className="screen-subtitle">{t('course.subtitle')}</p>

      <div className="collection-list">
        {tracks.map((track) => {
          const items = byTrack.get(track)!;
          const doneCount = items.filter((l) => done.has(l.id)).length;
          return (
            <Link
              key={track}
              to={`/course/c/${track}`}
              className="collection-card"
            >
              <span className="collection-icon" aria-hidden>
                {TRACK_ICON[track] ?? '📚'}
              </span>
              <span className="collection-body">
                <strong>{t(`course.track.${track}`)}</strong>
                <span className="muted collection-meta">
                  {t('course.lessonCount', { count: items.length })} ·{' '}
                  {t('course.progress', {
                    done: doneCount,
                    total: items.length,
                  })}
                </span>
                <ProgressBar
                  value={items.length ? doneCount / items.length : 0}
                />
              </span>
              <span className="collection-chevron" aria-hidden>
                ›
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
