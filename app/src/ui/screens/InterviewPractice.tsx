/**
 * Browse citizenship interview questions with audio, translation, graded sample
 * answers, and tips. Learners can add a question to their flashcards.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, Badge, Disclaimer } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { db } from '@/infra/db/db';
import { addCard } from '@/infra/db/flashcards';
import type { InterviewQuestion } from '@/domain/content/schema';

export function InterviewPractice() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { speak } = useSpeak();
  const profile = useSession((s) => s.profile)!;
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);

  useEffect(() => {
    db.interviewQuestions.toArray().then(setQuestions);
  }, []);

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/citizenship')}>
        ← {t('citizenship.title')}
      </button>
      <h1 className="screen-title">{t('citizenship.sections.interview')}</h1>
      <Disclaimer>{t('citizenship.simulator.noPassClaim')}</Disclaimer>

      <div className="stack mt-4">
        {questions.map((q) => (
          <Card key={q.id}>
            <div className="ptline-main">
              <span className="pt ptline-pt" lang="pt">
                {q.pt}
              </span>
              <button
                className="speak-btn"
                aria-label={`پخش: ${q.pt}`}
                onClick={() => void speak(q.pt)}
              >
                🔊
              </button>
            </div>
            {q.pronunciation && (
              <div className="ptline-pron">{q.pronunciation}</div>
            )}
            <div className="ptline-fa">{q.fa}</div>

            <div className="section-title" style={{ fontSize: '0.95rem' }}>
              {t('citizenship.interview.sampleAnswer')}
            </div>
            {q.sampleAnswers.map((a, i) => (
              <div key={i} className="ptline">
                <Badge tone="primary">{a.cefr}</Badge>
                <div className="ptline-main">
                  <span className="pt" lang="pt">
                    {a.pt}
                  </span>
                  <button
                    className="speak-btn"
                    aria-label={`پخش: ${a.pt}`}
                    onClick={() => void speak(a.pt)}
                  >
                    🔊
                  </button>
                </div>
                <div className="ptline-fa">{a.fa}</div>
              </div>
            ))}

            {q.tips.length > 0 && (
              <ul
                className="muted"
                style={{ margin: '8px 0 0', paddingInlineStart: '18px' }}
              >
                {q.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            )}

            <Button
              variant="ghost"
              className="mt-4"
              onClick={() =>
                void addCard(profile.id, {
                  itemId: q.id,
                  itemType: 'interview',
                  deck: 'interview',
                  front: q.pt,
                  back: q.sampleAnswers[0]!.pt,
                  pronunciation: q.pronunciation,
                })
              }
            >
              + {t('flashcards.addToDeck')}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
