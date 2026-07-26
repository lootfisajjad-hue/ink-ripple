/**
 * Flashcard decks overview: each deck shows total + due counts and links into a
 * review session scoped to that deck.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, EmptyState } from '../components/kit';
import { useSession } from '@/app/store/session';
import { getDeckSummaries } from '@/infra/db/flashcards';

const DECK_LABEL: Record<string, string> = {
  vocab: 'واژگان',
  mistakes: 'اشتباهات من',
  interview: 'مصاحبه',
  phrases: 'عبارات',
};

export function Flashcards() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [decks, setDecks] = useState<
    Array<{ deck: string; total: number; due: number }>
  >([]);

  useEffect(() => {
    getDeckSummaries(profile.id).then(setDecks);
  }, [profile.id]);

  return (
    <div>
      <h1 className="screen-title">{t('flashcards.title')}</h1>
      <p className="screen-subtitle">{t('flashcards.decks')}</p>

      {decks.length === 0 ? (
        <EmptyState>
          هنوز فلش‌کارتی نساخته‌اید. با تکمیل درس‌ها، واژگان به این‌جا اضافه
          می‌شوند.
        </EmptyState>
      ) : (
        <div className="stack">
          {decks.map((d) => (
            <Card key={d.deck}>
              <div className="row-between">
                <div>
                  <strong>{DECK_LABEL[d.deck] ?? d.deck}</strong>
                  <div className="muted" style={{ fontSize: '0.85rem' }}>
                    {d.total} کارت · {d.due} برای مرور
                  </div>
                </div>
                <Link to={`/review?deck=${encodeURIComponent(d.deck)}`}>
                  <Button disabled={d.due === 0}>
                    {t('flashcards.reviewNow')}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
