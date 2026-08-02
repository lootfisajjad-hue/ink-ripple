/**
 * Words — vocabulary browser. Landing shows one card per topic category
 * (with word count and the CEFR levels it spans); tapping a card opens that
 * category's words grouped by level (see WordsCategory). A search box filters
 * across every word at once, showing matches with audio + add-to-flashcards.
 */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, PtLine, Button, ProgressBar } from '../components/kit';
import { useSession } from '@/app/store/session';
import { getVocabCategories, getAllVocab } from '@/infra/db/content';
import { addCard, getAllCards } from '@/infra/db/flashcards';
import cardImages from '@/content/cardImages.json';
import { categoryMeta, categoryRank } from './wordCategories';
import { CategoryQuiz } from './WordsCategory';
import type { Vocab } from '@/domain/content/schema';

type Cat = { category: string; count: number; levels: string[] };
type CardImage = {
  file: string;
  source: string;
  author: string;
  license: string;
};
const CARD_IMAGES = cardImages as Record<string, CardImage>;

function imageFor(id: string) {
  const m = CARD_IMAGES[id];
  if (!m) return {};
  return {
    image: `${import.meta.env.BASE_URL}${m.file}`,
    imageCredit: `${m.author} · ${m.license}`,
    imageSource: m.source,
  };
}

export function Words() {
  const { t } = useTranslation();
  const profile = useSession((s) => s.profile)!;
  const [cats, setCats] = useState<Cat[]>([]);
  const [all, setAll] = useState<Vocab[]>([]);
  const [query, setQuery] = useState('');
  const [added, setAdded] = useState<Set<string>>(new Set());
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [quiz, setQuiz] = useState(false);

  useEffect(() => {
    getVocabCategories().then((list) =>
      setCats(
        [...list].sort(
          (a, b) => categoryRank(a.category) - categoryRank(b.category),
        ),
      ),
    );
    getAllVocab().then(setAll);
    getAllCards(profile.id, 'vocab').then((cards) =>
      setSaved(new Set(cards.map((c) => c.itemId))),
    );
  }, [profile.id]);

  const total = cats.reduce((s, c) => s + c.count, 0);

  // how many words per category are already in the learner's flashcard deck
  const savedByCat = useMemo(() => {
    const m = new Map<string, number>();
    for (const v of all) {
      if (saved.has(v.id)) m.set(v.category, (m.get(v.category) ?? 0) + 1);
    }
    return m;
  }, [all, saved]);

  // accent-insensitive: "agua" matches "água", "cafe" matches "café"
  const deburr = (s: string) =>
    s
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();
  const q = query.trim();
  const qd = deburr(q);
  const results = useMemo(() => {
    if (!qd) return [];
    return all
      .filter(
        (v) =>
          deburr(v.pt).includes(qd) ||
          v.faNatural.includes(q) ||
          v.faLiteral.includes(q),
      )
      .slice(0, 60);
  }, [qd, q, all]);

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

  if (quiz) {
    return (
      <div>
        <h1 className="screen-title">{t('words.title')}</h1>
        <CategoryQuiz words={all} onExit={() => setQuiz(false)} />
      </div>
    );
  }

  return (
    <div>
      <h1 className="screen-title">{t('words.title')}</h1>
      <p className="screen-subtitle">{t('words.subtitle', { count: total })}</p>

      {all.length >= 4 && (
        <Button className="mt-4" onClick={() => setQuiz(true)}>
          🎯 {t('words.mixedPractice')}
        </Button>
      )}

      <input
        className="word-search"
        type="search"
        inputMode="search"
        placeholder={t('words.searchPlaceholder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={t('words.searchPlaceholder')}
      />

      {q ? (
        <div className="word-list mt-4">
          <div className="muted" style={{ fontSize: '0.85rem' }}>
            {t('words.wordCount', { count: results.length })}
          </div>
          {results.map((w) => (
            <div key={w.id} className="word-row">
              <div style={{ flex: 1, minWidth: 0 }}>
                <PtLine
                  pt={w.pt}
                  fa={w.faNatural}
                  pronunciation={w.pronunciation}
                />
                <Link
                  to={`/words/${w.category}`}
                  className="muted"
                  style={{ fontSize: '0.72rem', textDecoration: 'none' }}
                >
                  {categoryMeta(w.category).emoji} {categoryMeta(w.category).fa}{' '}
                  · {w.cefr}
                </Link>
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
      ) : (
        <div className="word-cat-grid">
          {cats.map((c) => {
            const meta = categoryMeta(c.category);
            return (
              <Link
                key={c.category}
                to={`/words/${c.category}`}
                className="word-cat-card"
              >
                <span className="word-cat-emoji" aria-hidden>
                  {meta.emoji}
                </span>
                <strong className="word-cat-name">{meta.fa}</strong>
                <span className="muted word-cat-count">
                  {t('words.wordCount', { count: c.count })}
                </span>
                <span className="word-cat-levels">
                  {c.levels.map((lv) => (
                    <Badge key={lv} tone="primary">
                      {lv}
                    </Badge>
                  ))}
                </span>
                {(savedByCat.get(c.category) ?? 0) > 0 && (
                  <span className="word-cat-progress">
                    <ProgressBar
                      value={(savedByCat.get(c.category) ?? 0) / c.count}
                    />
                    <span className="muted word-cat-saved">
                      {savedByCat.get(c.category) ?? 0}/{c.count}
                    </span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
