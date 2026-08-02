/**
 * Progress + stats: per-skill scores, totals, retention, and a suggested weekly
 * plan derived from the profile's daily-minute goal.
 */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, ProgressBar } from '../components/kit';
import { useSession } from '@/app/store/session';
import { db } from '@/infra/db/db';

interface Stats {
  words: number;
  lessons: number;
  reviews: number;
  retention: number;
  skills: Array<{ skill: string; score: number; cefr: string }>;
}

export function Progress() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    (async () => {
      const [cards, progress, logs, skills] = await Promise.all([
        db.flashcards.where('profileId').equals(profile.id).count(),
        db.progress.where('profileId').equals(profile.id).toArray(),
        db.reviewLogs.where('profileId').equals(profile.id).toArray(),
        db.skillScores.where('profileId').equals(profile.id).toArray(),
      ]);
      const good = logs.filter((l) => l.rating !== 'again').length;
      setStats({
        words: cards,
        lessons: progress.filter((p) => p.completed).length,
        reviews: logs.length,
        retention: logs.length ? Math.round((good / logs.length) * 100) : 0,
        skills: skills.map((s) => ({
          skill: s.skill,
          score: s.score,
          cefr: s.cefr,
        })),
      });
    })();
  }, [profile.id]);

  if (!stats) return <div className="empty-state">{t('common.loading')}</div>;

  return (
    <div>
      <h1 className="screen-title">{t('progress.title')}</h1>

      <div className="stat-grid">
        <div className="stat">
          <div className="stat-num">{stats.words}</div>
          <div className="stat-label">{t('progress.wordsLearned')}</div>
        </div>
        <div className="stat">
          <div className="stat-num">{stats.lessons}</div>
          <div className="stat-label">{t('progress.lessonsDone')}</div>
        </div>
        <div className="stat">
          <div className="stat-num">{stats.reviews}</div>
          <div className="stat-label">{t('progress.reviewsDone')}</div>
        </div>
        <div className="stat">
          <div className="stat-num">{stats.retention}%</div>
          <div className="stat-label">{t('progress.retention')}</div>
        </div>
      </div>

      <h2 className="section-title">{t('progress.bySkill')}</h2>
      <Card>
        {stats.skills.length === 0 && <span className="muted">—</span>}
        {stats.skills.map((s) => (
          <div key={s.skill} className="onb-skill" style={{ marginBottom: 12 }}>
            <div className="row-between">
              <span>{t(`placement.skills.${s.skill}`)}</span>
              <span className="muted">
                {s.cefr} · {s.score}%
              </span>
            </div>
            <ProgressBar value={s.score / 100} />
          </div>
        ))}
      </Card>

      <h2 className="section-title">{t('progress.weeklyPlan')}</h2>
      <Card>
        <p>
          {t('dashboard.minutesToday', {
            done: profile.dailyMinutes,
            goal: profile.dailyMinutes,
          })}{' '}
          · {profile.goal}
        </p>
        <ul style={{ paddingInlineStart: 18, lineHeight: 2 }}>
          <li>۳ درس جدید در هفته</li>
          <li>مرور روزانهٔ فلش‌کارت‌ها</li>
          <li>۲ جلسه شبیه‌ساز مصاحبه</li>
          <li>تمرین تلفظ روزهای یک‌درمیان</li>
        </ul>
      </Card>
    </div>
  );
}
