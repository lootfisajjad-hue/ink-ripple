/**
 * Words — vocabulary browser. Landing shows one card per topic category
 * (with word count and the CEFR levels it spans); tapping a card opens that
 * category's words grouped by level (see WordsCategory).
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge } from '../components/kit';
import { getVocabCategories } from '@/infra/db/content';
import { categoryMeta, categoryRank } from './wordCategories';

type Cat = { category: string; count: number; levels: string[] };

export function Words() {
  const { t } = useTranslation();
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    getVocabCategories().then((list) =>
      setCats(
        [...list].sort(
          (a, b) => categoryRank(a.category) - categoryRank(b.category),
        ),
      ),
    );
  }, []);

  const total = cats.reduce((s, c) => s + c.count, 0);

  return (
    <div>
      <h1 className="screen-title">{t('words.title')}</h1>
      <p className="screen-subtitle">{t('words.subtitle', { count: total })}</p>

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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
