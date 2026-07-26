/**
 * Interview simulator: the app plays the officer, asks questions in Portuguese
 * (with audio), and the learner answers by text (or voice capture). Answers are
 * scored heuristically and a report is produced. It never claims a real result.
 */
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, Disclaimer, ProgressBar } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useVoiceCapture } from '../hooks/useVoiceCapture';
import { useSession } from '@/app/store/session';
import { db } from '@/infra/db/db';
import {
  planSession,
  scoreAnswer,
  buildReport,
  type SimulatorMode,
  type SimulatorLength,
  type AnswerScore,
  type SessionReport,
} from '@/domain/interview/simulator';
import type { InterviewQuestion } from '@/domain/content/schema';

export function InterviewSimulator() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { speak } = useSpeak();
  const profile = useSession((s) => s.profile)!;
  const voice = useVoiceCapture();

  const [pool, setPool] = useState<InterviewQuestion[]>([]);
  const [mode, setMode] = useState<SimulatorMode>('friendly');
  const [length, setLength] = useState<SimulatorLength>('short');
  const [session, setSession] = useState<InterviewQuestion[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState('');
  const [scores, setScores] = useState<AnswerScore[]>([]);
  const [report, setReport] = useState<SessionReport | null>(null);
  const startedAt = useRef<string>('');

  useEffect(() => {
    db.interviewQuestions.toArray().then(setPool);
  }, []);

  const current = session?.[idx];

  useEffect(() => {
    if (current) void speak(current.pt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.id]);

  function start() {
    const s = planSession(pool, { mode, length }, pool.length);
    setSession(s);
    setIdx(0);
    setScores([]);
    setReport(null);
    setAnswer('');
    startedAt.current = new Date().toISOString();
  }

  async function submit() {
    if (!current) return;
    const score = scoreAnswer(current, answer || voice.transcript);
    const nextScores = [...scores, score];
    setScores(nextScores);
    setAnswer('');
    voice.reset();
    if (idx + 1 < (session?.length ?? 0)) {
      setIdx(idx + 1);
    } else {
      const rep = buildReport(nextScores);
      setReport(rep);
      await db.interviewSessions.put({
        id: `is-${startedAt.current}`,
        profileId: profile.id,
        mode,
        startedAt: startedAt.current,
        endedAt: new Date().toISOString(),
        turns: (session ?? []).map((q, i) => ({
          questionId: q.id,
          questionPt: q.pt,
          answer: '',
          score: nextScores[i]?.score,
        })),
        report: {
          overallScore: rep.overallScore,
          strengths: rep.strengths,
          weaknesses: rep.weaknesses,
        },
      });
    }
  }

  // --- setup screen ---
  if (!session) {
    return (
      <div>
        <button className="back-link" onClick={() => navigate('/citizenship')}>
          ← {t('citizenship.title')}
        </button>
        <h1 className="screen-title">{t('citizenship.simulator.title')}</h1>
        <p className="screen-subtitle">{t('citizenship.simulator.intro')}</p>
        <Disclaimer>{t('citizenship.simulator.noPassClaim')}</Disclaimer>

        <h2 className="section-title">حالت</h2>
        <div className="seg">
          {(['friendly', 'formal', 'hard'] as const).map((m) => (
            <button
              key={m}
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
            >
              {t(
                `citizenship.simulator.mode${m[0]!.toUpperCase()}${m.slice(1)}`,
              )}
            </button>
          ))}
        </div>

        <h2 className="section-title">طول</h2>
        <div className="seg">
          {(['short', 'medium', 'full'] as const).map((l) => (
            <button
              key={l}
              aria-pressed={length === l}
              onClick={() => setLength(l)}
            >
              {l === 'short'
                ? t('citizenship.simulator.length5')
                : l === 'medium'
                  ? t('citizenship.simulator.length10')
                  : t('citizenship.simulator.full')}
            </button>
          ))}
        </div>

        <Button className="mt-4" onClick={start} disabled={pool.length === 0}>
          {t('citizenship.simulator.startBtn')}
        </Button>
      </div>
    );
  }

  // --- report screen ---
  if (report) {
    return (
      <div className="stack">
        <h1 className="screen-title">{t('citizenship.simulator.report')}</h1>
        <Card className="center">
          <div className="stat-num">{report.overallScore}%</div>
          <div className="stat-label">{t('learn.yourScore')}</div>
        </Card>
        {report.strengths.length > 0 && (
          <Card>
            <strong>{t('placement.strengths')}</strong>
            <ul style={{ margin: '6px 0 0', paddingInlineStart: '18px' }}>
              {report.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        )}
        {report.weaknesses.length > 0 && (
          <Card>
            <strong>{t('placement.weaknesses')}</strong>
            <ul style={{ margin: '6px 0 0', paddingInlineStart: '18px' }}>
              {report.weaknesses.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Card>
        )}
        <Disclaimer>{report.disclaimer}</Disclaimer>
        <Button onClick={() => setSession(null)}>{t('common.retry')}</Button>
      </div>
    );
  }

  // --- question screen ---
  return (
    <div className="stack">
      <ProgressBar value={(idx + 1) / (session.length || 1)} />
      <div className="muted">
        {idx + 1}/{session.length}
      </div>
      <Card>
        <div className="muted" style={{ fontSize: '0.8rem' }}>
          {t('citizenship.interview.officer')}
        </div>
        <div className="ptline-main">
          <span className="pt ptline-pt" lang="pt">
            {current!.pt}
          </span>
          <button
            className="speak-btn"
            aria-label="پخش سؤال"
            onClick={() => void speak(current!.pt)}
          >
            🔊
          </button>
        </div>
        <div className="ptline-fa">{current!.fa}</div>
      </Card>

      <textarea
        className="onb-input"
        rows={3}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="پاسخ خود را به پرتغالی بنویسید…"
        lang="pt"
      />

      {voice.supported && (
        <div className="record-controls">
          <Button
            variant={voice.recording ? 'danger' : 'outline'}
            onClick={voice.toggle}
          >
            {voice.recording
              ? `⏺ ${t('common.stop')}`
              : `🎤 ${t('common.record')}`}
          </Button>
          {voice.recording && (
            <span className="recording-dot" aria-hidden="true" />
          )}
          {voice.transcript && (
            <span className="muted">«{voice.transcript}»</span>
          )}
        </div>
      )}

      <Button onClick={() => void submit()}>{t('common.next')} →</Button>
    </div>
  );
}
