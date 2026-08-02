/**
 * One vocabulary category — its words grouped by CEFR level, each with audio
 * and a one-tap "add to flashcards" action.
 */
import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, PtLine, Button, Card } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { getVocabByCategory } from '@/infra/db/content';
import { addCard } from '@/infra/db/flashcards';
import cardImages from '@/content/cardImages.json';
import { categoryMeta } from './wordCategories';
import type { Vocab } from '@/domain/content/schema';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

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
  const [quiz, setQuiz] = useState(false);

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

      {quiz ? (
        <CategoryQuiz words={words} onExit={() => setQuiz(false)} />
      ) : (
        <>
          <div className="row-between mt-4" style={{ gap: 8 }}>
            {words.length > 0 && (
              <Button variant="outline" onClick={() => void addAll()}>
                ＋ {t('words.addAll', { count: words.length })}
              </Button>
            )}
            {words.length >= 4 && (
              <Button onClick={() => setQuiz(true)}>
                🎯 {t('words.practice')}
              </Button>
            )}
          </div>

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
        </>
      )}
    </div>
  );
}

/** A quick multiple-choice quiz over a set of words, in either direction. */
export function CategoryQuiz({
  words,
  onExit,
}: {
  words: Vocab[];
  onExit: () => void;
}) {
  const { t } = useTranslation();
  const { speak } = useSpeak();
  const [dir, setDir] = useState<'pt2fa' | 'fa2pt'>('pt2fa');
  const [listening, setListening] = useState(false);

  // questions depend on direction: prompt is the word in the source language,
  // the answer + options are in the target language.
  const questions = useMemo(() => {
    const pool = shuffle(words).slice(0, 10);
    return pool.map((w) => {
      const answer = dir === 'pt2fa' ? w.faNatural : w.pt;
      const distractors = shuffle(words.filter((o) => o.id !== w.id))
        .map((o) => (dir === 'pt2fa' ? o.faNatural : o.pt))
        .filter((v) => v !== answer)
        .slice(0, 3);
      return { w, answer, options: shuffle([answer, ...distractors]) };
    });
  }, [words, dir]);

  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const listenActive = listening && dir === 'pt2fa';

  // in listening mode (pt→fa only), auto-play the word each new question
  useEffect(() => {
    if (listenActive && q && !done) void speak(q.w.pt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, listenActive, done]);

  function restart() {
    setI(0);
    setChosen(null);
    setCorrect(0);
    setDone(false);
  }

  if (done || !q) {
    return (
      <div className="stack center mt-4">
        <div style={{ fontSize: '3rem' }}>
          {correct === questions.length ? '🏆' : '🎉'}
        </div>
        <h2>{t('words.scoreLine', { correct, total: questions.length })}</h2>
        <Button onClick={restart}>{t('common.retry')}</Button>
        <Button variant="ghost" onClick={onExit}>
          {t('common.back')}
        </Button>
      </div>
    );
  }

  const answered = chosen !== null;
  function choose(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === q!.answer) setCorrect((c) => c + 1);
  }
  function next() {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setChosen(null);
    } else {
      setDone(true);
    }
  }

  return (
    <div className="mt-4">
      <div className="row-between" style={{ flexWrap: 'wrap', gap: 8 }}>
        <span className="muted">
          {i + 1}/{questions.length}
        </span>
        <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            className={`chip-toggle ${dir === 'fa2pt' ? 'chip-on' : ''}`}
            onClick={() => {
              setDir((d) => (d === 'pt2fa' ? 'fa2pt' : 'pt2fa'));
              restart();
            }}
            aria-pressed={dir === 'fa2pt'}
          >
            {dir === 'pt2fa' ? 'PT → FA' : 'FA → PT'}
          </button>
          {dir === 'pt2fa' && (
            <button
              className={`chip-toggle ${listening ? 'chip-on' : ''}`}
              onClick={() => setListening((v) => !v)}
              aria-pressed={listening}
            >
              🎧 {t('words.listeningMode')}
            </button>
          )}
          <button className="back-link" onClick={onExit}>
            ✕
          </button>
        </span>
      </div>
      <Card className="flip-card" style={{ minHeight: 120 }}>
        {listenActive && !answered ? (
          <span className="flip-front" aria-hidden>
            🎧
          </span>
        ) : dir === 'pt2fa' ? (
          <>
            <span className="pt flip-front" lang="pt">
              {q.w.pt}
            </span>
            {q.w.pronunciation && (
              <span className="muted">{q.w.pronunciation}</span>
            )}
          </>
        ) : (
          <span className="flip-front">{q.w.faNatural}</span>
        )}
        {/* audio: always in pt→fa; in fa→pt only after answering (no spoiler) */}
        {(dir === 'pt2fa' || answered) && (
          <button
            className="speak-btn"
            onClick={() => void speak(q.w.pt)}
            aria-label={`پخش: ${q.w.pt}`}
          >
            🔊
          </button>
        )}
      </Card>
      <div className="exercise-options mt-4">
        {q.options.map((opt) => {
          const cls =
            answered && opt === q.answer
              ? 'option-correct'
              : answered && opt === chosen
                ? 'option-wrong'
                : '';
          const isPt = dir === 'fa2pt';
          return (
            <button
              key={opt}
              className={`option-btn ${cls} ${isPt ? 'pt' : ''}`}
              lang={isPt ? 'pt' : undefined}
              onClick={() => choose(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <Button className="mt-4" onClick={next}>
          {t('common.next')}
        </Button>
      )}
    </div>
  );
}
