/**
 * Daily home: greeting, today's plan progress, due reviews, continue-last-lesson,
 * and quick actions. Personalised by the active profile's goal.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, ProgressBar, PtLine } from '../components/kit';
import { useSession } from '@/app/store/session';
import { countDue, addCard } from '@/infra/db/flashcards';
import { getTodayActivity, getStreak } from '@/infra/db/activity';
import { getLessonsByTrack, getAllVocab } from '@/infra/db/content';
import { getProgressMap } from '@/infra/db/activity';
import type { Vocab } from '@/domain/content/schema';
import './Dashboard.css';

/** Days since the epoch — used to pick a stable "word of the day". */
function dayIndex(): number {
  return Math.floor(Date.now() / 86_400_000);
}

const GOAL_TRACK: Record<string, string> = {
  citizenship: 'citizenship',
  living: 'a1',
  daily: 'a1',
};

export function Dashboard() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [due, setDue] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [streak, setStreak] = useState(0);
  const [nextLesson, setNextLesson] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [wotd, setWotd] = useState<Vocab | null>(null);
  const [wotdAdded, setWotdAdded] = useState(false);

  useEffect(() => {
    (async () => {
      setDue(await countDue(profile.id));
      setMinutes((await getTodayActivity(profile.id)).minutes);
      setStreak(await getStreak(profile.id));

      const all = await getAllVocab();
      if (all.length) setWotd(all[dayIndex() % all.length]!);

      const track = GOAL_TRACK[profile.goal] ?? 'a1';
      const [lessons, progress] = await Promise.all([
        getLessonsByTrack(track),
        getProgressMap(profile.id),
      ]);
      const next =
        lessons.find((l) => !progress.get(l.id)?.completed) ?? lessons[0];
      if (next) setNextLesson({ id: next.id, title: next.title });
    })();
  }, [profile.id, profile.goal]);

  return (
    <div className="dash">
      <header className="dash-head">
        <h1 className="screen-title">
          {t('dashboard.greeting', { name: profile.displayName })}
        </h1>
        <div className="dash-badges">
          <span className="dash-streak">
            🔥 {t('dashboard.streak', { count: streak })}
          </span>
          <Link to="/settings" className="badge badge-neutral">
            {profile.cefr}
          </Link>
        </div>
      </header>

      <Card className="dash-plan">
        <div className="row-between">
          <strong>{t('dashboard.todayPlan')}</strong>
          <span className="muted">
            {t('dashboard.minutesToday', {
              done: minutes,
              goal: profile.dailyMinutes,
            })}
          </span>
        </div>
        <ProgressBar value={minutes / profile.dailyMinutes} />
      </Card>

      {wotd && (
        <Card className="dash-wotd">
          <div className="row-between">
            <strong>🗓️ {t('dashboard.wordOfDay')}</strong>
            <button
              className={`word-add ${wotdAdded ? 'word-add-done' : ''}`}
              disabled={wotdAdded}
              aria-label={t('flashcards.addToDeck')}
              title={t('flashcards.addToDeck')}
              onClick={async () => {
                await addCard(profile.id, {
                  itemId: wotd.id,
                  itemType: 'vocab',
                  deck: 'vocab',
                  front: wotd.pt,
                  back: wotd.faNatural,
                  pronunciation: wotd.pronunciation,
                });
                setWotdAdded(true);
              }}
            >
              {wotdAdded ? '✓' : '＋'}
            </button>
          </div>
          <PtLine
            pt={wotd.pt}
            fa={wotd.faNatural}
            pronunciation={wotd.pronunciation}
          />
        </Card>
      )}

      {nextLesson && (
        <Link to={`/learn/lesson/${nextLesson.id}`} className="dash-continue">
          <Card>
            <div className="muted">{t('dashboard.continueLesson')}</div>
            <div className="dash-continue-title">{nextLesson.title}</div>
          </Card>
        </Link>
      )}

      <Card className="dash-review">
        <div className="row-between">
          <div>
            <strong>{t('nav.review')}</strong>
            <div className="muted">
              {due > 0
                ? t('dashboard.dueReviews', { count: due })
                : t('dashboard.noReviews')}
            </div>
          </div>
          <Link to="/review">
            <Button disabled={due === 0}>{t('dashboard.startReview')}</Button>
          </Link>
        </div>
      </Card>

      <h2 className="section-title">{t('dashboard.quickActions')}</h2>
      <div className="grid-2">
        <QuickAction to="/learn" label={t('nav.learn')} emoji="📚" />
        <QuickAction to="/words" label={t('words.title')} emoji="🔠" />
        <QuickAction to="/course" label={t('course.title')} emoji="🎓" />
        <QuickAction
          to="/citizenship"
          label={t('citizenship.title')}
          emoji="🇧🇷"
        />
        <QuickAction
          to="/pronunciation"
          label={t('pronunciation.title')}
          emoji="🗣️"
        />
        <QuickAction to="/conversation" label={t('ai.title')} emoji="💬" />
        <QuickAction
          to="/flashcards"
          label={t('flashcards.title')}
          emoji="🃏"
        />
        <QuickAction to="/progress" label={t('progress.title')} emoji="📈" />
      </div>
    </div>
  );
}

function QuickAction({
  to,
  label,
  emoji,
}: {
  to: string;
  label: string;
  emoji: string;
}) {
  return (
    <Link to={to} className="quick-action">
      <span className="quick-emoji" aria-hidden="true">
        {emoji}
      </span>
      <span>{label}</span>
    </Link>
  );
}
