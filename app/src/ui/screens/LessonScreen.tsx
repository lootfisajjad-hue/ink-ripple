/**
 * A lesson: objective, key vocab, useful phrases, dialogue, grammar note, and
 * an inline quiz. Completing the quiz records progress + mastery and lets the
 * learner add items to their flashcards.
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, PtLine, Badge, Disclaimer } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { getLesson, getLessonContent } from '@/infra/db/content';
import { setLessonProgress, logActivity } from '@/infra/db/activity';
import { addCard, recordMistake } from '@/infra/db/flashcards';
import cardImages from '@/content/cardImages.json';
import type {
  Lesson,
  Vocab,
  Phrase,
  Dialogue,
  Exercise,
} from '@/domain/content/schema';

type CardImage = {
  file: string;
  source: string;
  author: string;
  license: string;
};
const CARD_IMAGES = cardImages as Record<string, CardImage>;

/** Illustration + attribution for a vocab id, if we have a licensed image. */
function imageFor(vocabId: string): {
  image?: string;
  imageCredit?: string;
  imageSource?: string;
} {
  const meta = CARD_IMAGES[vocabId];
  if (!meta) return {};
  return {
    image: `${import.meta.env.BASE_URL}${meta.file}`,
    imageCredit: `${meta.author} · ${meta.license}`,
    imageSource: meta.source,
  };
}

export function LessonScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { speak } = useSpeak();
  const profile = useSession((s) => s.profile)!;

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [vocab, setVocab] = useState<Vocab[]>([]);
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);
  const [phase, setPhase] = useState<'study' | 'quiz' | 'done'>('study');

  useEffect(() => {
    if (!id) return;
    getLesson(id).then(async (l) => {
      if (!l) return;
      setLesson(l);
      const content = await getLessonContent(l);
      setVocab(content.vocab);
      setPhrases(content.phrases);
      setDialogues(content.dialogues);
    });
  }, [id]);

  if (!lesson) return <div className="empty-state">{t('common.loading')}</div>;

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/learn')}>
        ← {t('learn.title')}
      </button>
      <h1 className="screen-title">{lesson.title}</h1>
      <Badge tone="primary">{lesson.cefr}</Badge>

      {phase === 'study' && (
        <div className="stack mt-4">
          <Card>
            <strong>{t('learn.objective')}</strong>
            <p style={{ margin: '6px 0 0' }}>{lesson.objectiveFa}</p>
          </Card>

          {vocab.length > 0 && (
            <>
              <h2 className="section-title">{t('learn.keyVocab')}</h2>
              <Card>
                {vocab.map((v) => (
                  <PtLine
                    key={v.id}
                    pt={v.pt}
                    fa={v.faNatural}
                    pronunciation={v.pronunciation}
                  />
                ))}
              </Card>
            </>
          )}

          {phrases.length > 0 && (
            <>
              <h2 className="section-title">{t('learn.usefulPhrases')}</h2>
              <Card>
                {phrases.map((p) => (
                  <PtLine
                    key={p.id}
                    pt={p.pt}
                    fa={p.faNatural}
                    pronunciation={p.pronunciation}
                  />
                ))}
              </Card>
            </>
          )}

          {lesson.grammarNoteFa && (
            <>
              <h2 className="section-title">{t('learn.grammarNote')}</h2>
              <Card>{lesson.grammarNoteFa}</Card>
            </>
          )}

          {dialogues.map((d) => (
            <div key={d.id}>
              <h2 className="section-title">
                {t('learn.dialogue')}: {d.title}
              </h2>
              <Card>
                {d.lines.map((line, i) => (
                  <div key={i} className="ptline">
                    <div className="muted" style={{ fontSize: '0.8rem' }}>
                      {line.speaker}
                    </div>
                    <div className="ptline-main">
                      <span className="pt ptline-pt" lang="pt">
                        {line.pt}
                      </span>
                      <button
                        className="speak-btn"
                        aria-label={`پخش: ${line.pt}`}
                        onClick={() => void speak(line.pt)}
                      >
                        🔊
                      </button>
                    </div>
                    <div className="ptline-fa">{line.fa}</div>
                  </div>
                ))}
                {d.notesFa && <Disclaimer>{d.notesFa}</Disclaimer>}
              </Card>
            </div>
          ))}

          <Button className="mt-4" onClick={() => setPhase('quiz')}>
            {t('learn.quiz')} →
          </Button>
        </div>
      )}

      {phase === 'quiz' && (
        <Quiz
          exercises={lesson.exercises}
          onSpeak={(txt) => void speak(txt)}
          onDone={async (score) => {
            await setLessonProgress(profile.id, lesson.id, {
              completed: true,
              score,
              mastery: score / 100,
            });
            await logActivity(profile.id, {
              lessons: 1,
              minutes: lesson.estimatedMinutes,
            });
            setPhase('done');
          }}
          onMistake={(pt, correction) =>
            void recordMistake({
              profileId: profile.id,
              context: 'lesson',
              pt,
              correctionPt: correction,
            })
          }
        />
      )}

      {phase === 'done' && (
        <div className="stack mt-4 center">
          <div style={{ fontSize: '3rem' }}>🎉</div>
          <h2>{t('learn.complete')}</h2>
          <Button
            onClick={async () => {
              // add this lesson's vocab to flashcards
              await Promise.all(
                vocab.map((v) =>
                  addCard(profile.id, {
                    itemId: v.id,
                    itemType: 'vocab',
                    deck: 'vocab',
                    front: v.pt,
                    back: v.faNatural,
                    pronunciation: v.pronunciation,
                    ...imageFor(v.id),
                  }),
                ),
              );
              navigate('/learn');
            }}
          >
            {t('flashcards.addToDeck')} + {t('common.done')}
          </Button>
          <Button variant="ghost" onClick={() => navigate('/learn')}>
            {t('common.done')}
          </Button>
        </div>
      )}
    </div>
  );
}

function Quiz({
  exercises,
  onDone,
  onSpeak,
  onMistake,
}: {
  exercises: Exercise[];
  onDone: (score: number) => void;
  onSpeak: (text: string) => void;
  onMistake: (pt: string, correction: string) => void;
}) {
  const { t } = useTranslation();
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  if (exercises.length === 0) {
    // no exercises → count as complete
    onDone(100);
    return null;
  }

  const ex = exercises[i]!;
  const answer = Array.isArray(ex.answer) ? ex.answer[0]! : ex.answer;
  const answered = chosen !== null;
  const isCorrect = chosen === answer;

  function choose(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === answer) setCorrectCount((c) => c + 1);
    // Build a useful mistake card: the question on the front, the correct
    // answer (plus any explanation) on the back — never front === back.
    else
      onMistake(
        ex.prompt,
        [String(answer), ex.explanationFa].filter(Boolean).join(' — '),
      );
  }

  function next() {
    if (i + 1 < exercises.length) {
      setI(i + 1);
      setChosen(null);
    } else {
      const total = exercises.length;
      const finalCorrect = correctCount; // already includes current if correct
      onDone(Math.round((finalCorrect / total) * 100));
    }
  }

  return (
    <div className="exercise mt-4">
      <div className="muted">
        {i + 1}/{exercises.length}
      </div>
      <h2>{ex.prompt}</h2>
      {ex.audioText && (
        <Button variant="outline" onClick={() => onSpeak(ex.audioText!)}>
          🔊 {t('common.play')}
        </Button>
      )}
      <div className="exercise-options">
        {ex.options.map((opt) => {
          const cls =
            answered && opt === answer
              ? 'option-correct'
              : answered && opt === chosen
                ? 'option-wrong'
                : '';
          return (
            <button
              key={opt}
              className={`option-btn ${cls}`}
              onClick={() => choose(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <Card>
          <strong
            style={{ color: isCorrect ? 'var(--success)' : 'var(--danger)' }}
          >
            {isCorrect ? t('learn.correct') : t('learn.incorrect')}
          </strong>
          {!isCorrect && (
            <div>
              {t('learn.correctAnswer')}:{' '}
              <span lang="pt" className="pt">
                {String(answer)}
              </span>
            </div>
          )}
          {ex.explanationFa && (
            <p className="muted" style={{ margin: '6px 0 0' }}>
              {ex.explanationFa}
            </p>
          )}
          <Button className="mt-4" onClick={next}>
            {t('common.next')}
          </Button>
        </Card>
      )}
    </div>
  );
}
