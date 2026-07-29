/**
 * One vocabulary category — its words grouped by CEFR level, each with audio
 * and a one-tap "add to flashcards" action.
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, PtLine, Button } from '../components/kit';
import { useSession } from '@/app/store/session';
import { getVocabByCategory } from '@/infra/db/content';
import { addCard } from '@/infra/db/flashcards';
import cardImages from '@/content/cardImages.json';
import { categoryMeta } from './wordCategories';
import type { Vocab } from '@/domain/content/schema';

type CardImage = {
  file: string;
  source: string;
  author: string;
  license: string;
};
const CARD_IMAGES = cardImages as Record<string, CardImage>;
const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

function imageFor(vocabId: string) {
  const m = CARD_IMAGES[vocabId];
  if (!m) return {};
  return {
    image: `${import.meta.env.BASE_URL}${m.file}`,
    imageCredit: `${m.author} · ${m.license}`,
    imageSource: m.source,
  };
}

export function WordsCategory() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [words, setWords] = useState<Vocab[]>([]);
  const [added, setAdded] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (category) getVocabByCategory(category).then(setWords);
  }, [category]);

  const meta = categoryMeta(category ?? '');

  // group by CEFR level, levels in canonical order
  const byLevel = new Map<string, Vocab[]>();
  for (const w of words) {
    (byLevel.get(w.cefr) ?? byLevel.set(w.cefr, []).get(w.cefr)!).push(w);
  }
  const levels = [...byLevel.keys()].sort(
    (a, b) => CEFR_ORDER.indexOf(a) - CEFR_ORDER.indexOf(b),
  );

  async function addWord(w: Vocab) {
    await addCard(profile.id, {
      itemId: w.id,
      itemType: 'vocab',
      deck: 'vocab',
      front: w.pt,
      back: w.faNatural,
      pronunciation: w.pronunciation,
      ...imageFor(w.id),
    });
    setAdded((s) => new Set(s).add(w.id));
  }

  async function addAll() {
    await Promise.all(words.filter((w) => !added.has(w.id)).map(addWord));
  }

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/words')}>
        ← {t('words.title')}
      </button>
      <h1 className="screen-title">
        <span aria-hidden style={{ marginInlineEnd: 8 }}>
          {meta.emoji}
        </span>
        {meta.fa}
      </h1>

      {words.length > 0 && (
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => void addAll()}
        >
          ＋ {t('words.addAll', { count: words.length })}
        </Button>
      )}

      {levels.map((lv) => (
        <section key={lv} style={{ marginTop: 'var(--space-5)' }}>
          <h2 className="section-title">
            {t('words.level')} <Badge tone="primary">{lv}</Badge>{' '}
            <span className="muted" style={{ fontSize: '0.8rem' }}>
              {t('words.wordCount', { count: byLevel.get(lv)!.length })}
            </span>
          </h2>
          <div className="word-list">
            {byLevel.get(lv)!.map((w) => (
              <div key={w.id} className="word-row">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <PtLine
                    pt={w.pt}
                    fa={w.faNatural}
                    pronunciation={w.pronunciation}
                  />
                </div>
                <button
                  className={`word-add ${added.has(w.id) ? 'word-add-done' : ''}`}
                  onClick={() => void addWord(w)}
                  disabled={added.has(w.id)}
                  aria-label={t('flashcards.addToDeck')}
                  title={t('flashcards.addToDeck')}
                >
                  {added.has(w.id) ? '✓' : '＋'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
