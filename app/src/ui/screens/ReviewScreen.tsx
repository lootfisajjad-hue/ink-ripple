/**
 * A spaced-repetition review session. Shows due cards one at a time; the learner
 * flips to reveal, then rates Again/Hard/Good/Easy which reschedules via FSRS.
 */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { getDueCards, gradeCard } from '@/infra/db/flashcards';
import { logActivity } from '@/infra/db/activity';
import { RATINGS, type Rating } from '@/domain/srs/fsrs';
import type { Flashcard } from '@/infra/db/db';

const RATING_LABEL: Record<Rating, string> = {
  again: 'flashcards.againHint',
  hard: 'flashcards.hardHint',
  good: 'flashcards.goodHint',
  easy: 'flashcards.easyHint',
};

export function ReviewScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const deck = params.get('deck') ?? undefined;
  const profile = useSession((s) => s.profile)!;
  const { speak } = useSpeak();

  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDueCards(profile.id, deck).then((cards) => {
      setQueue(cards);
      setLoading(false);
    });
  }, [profile.id, deck]);

  const card = queue[0];

  async function rate(rating: Rating) {
    if (!card) return;
    await gradeCard(card, rating);
    await logActivity(profile.id, { reviews: 1, minutes: 0 });
    setReviewed((r) => r + 1);
    setFlipped(false);
    setQueue((q) => q.slice(1));
  }

  if (loading) return <div className="empty-state">{t('common.loading')}</div>;

  if (!card) {
    return (
      <div className="stack center mt-4">
        <div style={{ fontSize: '3rem' }}>✅</div>
        <h2>{t('flashcards.sessionDone')}</h2>
        <p className="muted">
          {t('flashcards.reviewedCount', { count: reviewed })}
        </p>
        <Button onClick={() => navigate('/')}>{t('common.done')}</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="row-between">
        <button className="back-link" onClick={() => navigate(-1)}>
          ← {t('common.back')}
        </button>
        <span className="muted">
          {t('flashcards.reviewedCount', { count: reviewed })}
        </span>
      </div>

      <Card className="flip-card" onClick={() => setFlipped((f) => !f)}>
        <span className="pt flip-front" lang="pt">
          {card.front}
        </span>
        {flipped ? (
          <>
            <div style={{ fontSize: '1.2rem' }}>{card.back}</div>
            {card.pronunciation && (
              <div className="muted">{card.pronunciation}</div>
            )}
          </>
        ) : (
          <span className="flip-hint">{t('flashcards.flip')}</span>
        )}
        <button
          className="speak-btn"
          onClick={(e) => {
            e.stopPropagation();
            void speak(card.front);
          }}
          aria-label={`پخش: ${card.front}`}
        >
          🔊
        </button>
      </Card>

      {flipped ? (
        <div className="rating-row mt-4">
          {RATINGS.map((r) => (
            <button
              key={r}
              className={`rating-btn rating-${r}`}
              onClick={() => void rate(r)}
            >
              <span>{t(RATING_LABEL[r])}</span>
            </button>
          ))}
        </div>
      ) : (
        <Button className="mt-4" onClick={() => setFlipped(true)}>
          {t('flashcards.flip')}
        </Button>
      )}
    </div>
  );
}
