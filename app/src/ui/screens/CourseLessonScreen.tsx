/**
 * Course lesson reader: teaches an Aula step by step — objectives, then each
 * section's simplified Persian explanation with spoken Portuguese examples, key
 * points, and a short quiz that records completion.
 */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, Badge, Disclaimer } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { getCourseLesson } from '@/infra/db/content';
import { setLessonProgress, logActivity } from '@/infra/db/activity';
import type { CourseLesson, Exercise } from '@/domain/content/schema';
import coursePages from '@/content/coursePages.json';

const PAGES = coursePages as Record<string, string[]>;
const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export function CourseLessonScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { speak } = useSpeak();
  const profile = useSession((s) => s.profile)!;
  const [lesson, setLesson] = useState<CourseLesson | null>(null);
  const [phase, setPhase] = useState<'read' | 'quiz' | 'done'>('read');
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id) getCourseLesson(id).then((l) => setLesson(l ?? null));
  }, [id]);

  if (!lesson) return <div className="empty-state">{t('common.loading')}</div>;

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/course')}>
        ← {t('course.backToList')}
      </button>
      <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
        <Badge tone="primary">{lesson.aula}</Badge>
        <Badge tone="neutral">{lesson.cefr}</Badge>
      </div>
      <h1 className="screen-title" style={{ marginTop: 8 }}>
        {lesson.titleFa}
      </h1>
      <div
        className="muted pt"
        lang="pt"
        style={{ marginBottom: 'var(--space-3)' }}
      >
        {lesson.titlePt}
      </div>

      {phase === 'read' && (
        <div className="stack">
          <Card>{lesson.summaryFa}</Card>

          {lesson.objectivesFa.length > 0 && (
            <Card>
              <strong>{t('course.objectives')}</strong>
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingInlineStart: 18,
                  lineHeight: 1.9,
                }}
              >
                {lesson.objectivesFa.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </Card>
          )}

          {lesson.sections.map((sec, i) => (
            <Card key={i}>
              <h2 className="section-title" style={{ marginTop: 0 }}>
                {i + 1}. {sec.headingFa}
              </h2>
              <p style={{ lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>
                {sec.bodyFa}
              </p>
              {sec.examples.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  {sec.examples.map((ex, j) => (
                    <div key={j} className="ptline">
                      <div className="ptline-main">
                        <span className="pt ptline-pt" lang="pt">
                          {ex.pt}
                        </span>
                        <button
                          className="speak-btn"
                          aria-label={`پخش: ${ex.pt}`}
                          onClick={() => void speak(ex.pt)}
                        >
                          🔊
                        </button>
                      </div>
                      {ex.pron && <div className="ptline-pron">{ex.pron}</div>}
                      <div className="ptline-fa">{ex.fa}</div>
                      {ex.note && (
                        <div
                          className="muted"
                          style={{ fontSize: '0.85rem', marginTop: 2 }}
                        >
                          💡 {ex.note}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}

          {lesson.keyPointsFa.length > 0 && (
            <Card>
              <strong>{t('course.keyPoints')}</strong>
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingInlineStart: 18,
                  lineHeight: 1.9,
                }}
              >
                {lesson.keyPointsFa.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </Card>
          )}

          {(PAGES[`aula${lesson.order}`]?.length ?? 0) > 0 && (
            <details className="pages-gallery">
              <summary>
                🖼️ {t('course.originalPages')} —{' '}
                {t('course.showPages', {
                  count: PAGES[`aula${lesson.order}`]!.length,
                })}
              </summary>
              <div className="pages-grid">
                {PAGES[`aula${lesson.order}`]!.map((file) => (
                  <a
                    key={file}
                    href={asset(`pages/aula${lesson.order}/${file}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={asset(`pages/aula${lesson.order}/${file}`)}
                      alt={`${lesson.aula} — ${file}`}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </details>
          )}

          <Disclaimer>{lesson.sourceNoteFa}</Disclaimer>

          {lesson.quiz.length > 0 ? (
            <Button onClick={() => setPhase('quiz')}>
              {t('course.quiz')} →
            </Button>
          ) : (
            <Button
              onClick={async () => {
                await setLessonProgress(profile.id, lesson.id, {
                  completed: true,
                  score: 100,
                  mastery: 1,
                });
                await logActivity(profile.id, {
                  lessons: 1,
                  minutes: lesson.estimatedMinutes,
                });
                setPhase('done');
              }}
            >
              {t('course.finish')}
            </Button>
          )}
        </div>
      )}

      {phase === 'quiz' && (
        <CourseQuiz
          quiz={lesson.quiz}
          onSpeak={(txt) => void speak(txt)}
          onDone={async (s) => {
            setScore(s);
            await setLessonProgress(profile.id, lesson.id, {
              completed: true,
              score: s,
              mastery: s / 100,
            });
            await logActivity(profile.id, {
              lessons: 1,
              minutes: lesson.estimatedMinutes,
            });
            setPhase('done');
          }}
        />
      )}

      {phase === 'done' && (
        <div className="stack center mt-4">
          <div style={{ fontSize: '3rem' }}>🎉</div>
          <h2>{t('course.finish')}</h2>
          {lesson.quiz.length > 0 && (
            <p className="muted">
              {t('learn.yourScore')}: {score}%
            </p>
          )}
          <Button onClick={() => navigate('/course')}>
            {t('common.done')}
          </Button>
        </div>
      )}
    </div>
  );
}

function CourseQuiz({
  quiz,
  onDone,
  onSpeak,
}: {
  quiz: Exercise[];
  onDone: (score: number) => void;
  onSpeak: (text: string) => void;
}) {
  const { t } = useTranslation();
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);

  const ex = quiz[i]!;
  const answer = Array.isArray(ex.answer) ? ex.answer[0]! : ex.answer;
  const answered = chosen !== null;
  const isCorrect = chosen === answer;

  function choose(opt: string) {
    if (answered) return;
    setChosen(opt);
    if (opt === answer) setCorrect((c) => c + 1);
  }
  function next() {
    if (i + 1 < quiz.length) {
      setI(i + 1);
      setChosen(null);
    } else {
      onDone(Math.round((correct / quiz.length) * 100));
    }
  }

  return (
    <div className="exercise mt-4">
      <div className="muted">
        {i + 1}/{quiz.length}
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
