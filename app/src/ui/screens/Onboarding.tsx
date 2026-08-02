/**
 * Onboarding wizard: interface language → name → goal → daily time → a real
 * multi-skill placement quiz → a personalised plan. Creates the learner profile
 * with the estimated CEFR level and persists per-skill scores.
 */
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card, ProgressBar } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSettings } from '@/app/store/settings';
import { useSession } from '@/app/store/session';
import { LANGUAGES, type Language } from '@/app/i18n';
import { placementQuestions } from '@/content/seed/placementTest';
import {
  gradePlacement,
  type PlacementAnswer,
} from '@/domain/placement/placement';
import { db } from '@/infra/db/db';
import './Onboarding.css';

type Step = 'lang' | 'name' | 'goal' | 'time' | 'placement' | 'result';

const GOALS = [
  'daily',
  'living',
  'citizenship',
  'work',
  'travel',
  'school',
  'bank',
  'legal',
  'pronunciation',
] as const;
const TIMES = [10, 20, 30, 45, 60];
const LANG_LABEL: Record<Language, string> = {
  fa: 'فارسی',
  pt: 'Português',
  en: 'English',
};

export function Onboarding() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { speak } = useSpeak();
  const setLanguage = useSettings((s) => s.setLanguage);
  const language = useSettings((s) => s.language);
  const createProfile = useSession((s) => s.createProfile);

  const [step, setStep] = useState<Step>('lang');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState<string>('citizenship');
  const [minutes, setMinutes] = useState(20);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<PlacementAnswer[]>([]);

  const result = useMemo(
    () =>
      step === 'result' ? gradePlacement(placementQuestions, answers) : null,
    [step, answers],
  );

  const stepOrder: Step[] = [
    'lang',
    'name',
    'goal',
    'time',
    'placement',
    'result',
  ];
  const progress = (stepOrder.indexOf(step) + 1) / stepOrder.length;

  function answerPlacement(value: number) {
    const q = placementQuestions[qIndex]!;
    const next = [...answers, { itemId: q.id, value }];
    setAnswers(next);
    if (qIndex + 1 < placementQuestions.length) {
      setQIndex(qIndex + 1);
    } else {
      setStep('result');
    }
  }

  async function finish() {
    if (!result) return;
    const profile = await createProfile({
      displayName: name.trim() || 'کاربر',
      interfaceLang: language,
      goal,
      dailyMinutes: minutes,
      cefr: result.overall,
      onboarded: true,
    });
    // persist per-skill scores
    await db.skillScores.bulkPut(
      result.skills.map((s) => ({
        id: `${profile.id}:${s.skill}`,
        profileId: profile.id,
        skill: s.skill,
        score: s.score,
        cefr: s.cefr,
        updatedAt: new Date().toISOString(),
      })),
    );
    navigate('/', { replace: true });
  }

  return (
    <div className="onb">
      <div className="onb-progress">
        <ProgressBar value={progress} />
      </div>

      {step === 'lang' && (
        <div className="onb-step">
          <h1>{t('onboarding.welcomeTitle')}</h1>
          <p className="muted">{t('onboarding.welcomeBody')}</p>
          <h2 className="section-title">{t('onboarding.chooseLanguage')}</h2>
          <div className="stack">
            {LANGUAGES.map((l) => (
              <Button
                key={l}
                variant={language === l ? 'primary' : 'ghost'}
                onClick={() => setLanguage(l)}
              >
                {LANG_LABEL[l]}
              </Button>
            ))}
          </div>
          <Button className="onb-next" onClick={() => setStep('name')}>
            {t('common.continue')}
          </Button>
        </div>
      )}

      {step === 'name' && (
        <div className="onb-step">
          <h1>{t('onboarding.chooseName')}</h1>
          <input
            className="onb-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('onboarding.namePlaceholder')}
            aria-label={t('onboarding.chooseName')}
          />
          <div className="row">
            <Button variant="ghost" onClick={() => setStep('lang')}>
              {t('common.back')}
            </Button>
            <Button className="grow" onClick={() => setStep('goal')}>
              {t('common.continue')}
            </Button>
          </div>
        </div>
      )}

      {step === 'goal' && (
        <div className="onb-step">
          <h1>{t('onboarding.chooseGoal')}</h1>
          <div className="stack">
            {GOALS.map((g) => (
              <Button
                key={g}
                variant={goal === g ? 'primary' : 'ghost'}
                onClick={() => setGoal(g)}
              >
                {t(`onboarding.goals.${g}`)}
              </Button>
            ))}
          </div>
          <div className="row onb-next">
            <Button variant="ghost" onClick={() => setStep('name')}>
              {t('common.back')}
            </Button>
            <Button className="grow" onClick={() => setStep('time')}>
              {t('common.continue')}
            </Button>
          </div>
        </div>
      )}

      {step === 'time' && (
        <div className="onb-step">
          <h1>{t('onboarding.chooseTime')}</h1>
          <div className="grid-2">
            {TIMES.map((m) => (
              <Button
                key={m}
                variant={minutes === m ? 'primary' : 'ghost'}
                onClick={() => setMinutes(m)}
              >
                {m} {t('common.minutes')}
              </Button>
            ))}
          </div>
          <div className="row onb-next">
            <Button variant="ghost" onClick={() => setStep('goal')}>
              {t('common.back')}
            </Button>
            <Button className="grow" onClick={() => setStep('placement')}>
              {t('onboarding.startPlacement')}
            </Button>
          </div>
        </div>
      )}

      {step === 'placement' &&
        (() => {
          const q = placementQuestions[qIndex]!;
          return (
            <div className="onb-step">
              <div className="muted">
                {t('placement.title')} — {qIndex + 1}/
                {placementQuestions.length}
              </div>
              <h2 className="onb-q">{q.promptFa}</h2>
              {q.audioText && (
                <Button
                  variant="outline"
                  onClick={() => void speak(q.audioText!)}
                >
                  🔊 {t('common.play')}
                </Button>
              )}
              {q.selfAssess ? (
                <div className="stack mt-4">
                  <p className="muted">{t('onboarding.selfRate')}</p>
                  {[
                    { label: '😀 خیلی راحت', v: 1 },
                    { label: '🙂 نسبتاً', v: 0.6 },
                    { label: '😐 کمی', v: 0.3 },
                    { label: '🤔 اصلاً', v: 0 },
                  ].map((o) => (
                    <Button
                      key={o.v}
                      variant="ghost"
                      onClick={() => answerPlacement(o.v)}
                    >
                      {o.label}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="stack mt-4">
                  {q.options.map((opt, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      onClick={() => answerPlacement(i)}
                    >
                      <span lang={q.skill === 'listening' ? 'pt' : undefined}>
                        {opt}
                      </span>
                    </Button>
                  ))}
                  <Button variant="outline" onClick={() => answerPlacement(-1)}>
                    {t('onboarding.dontKnow')}
                  </Button>
                </div>
              )}
            </div>
          );
        })()}

      {step === 'result' && result && (
        <div className="onb-step">
          <h1>{t('placement.resultTitle')}</h1>
          <Card className="onb-result">
            <div className="onb-level">{result.overall}</div>
            <div className="muted">{t('placement.yourLevel')}</div>
          </Card>
          <h2 className="section-title">{t('placement.skills.vocab')} …</h2>
          <div className="stack">
            {result.skills.map((s) => (
              <div key={s.skill} className="onb-skill">
                <div className="row-between">
                  <span>{t(`placement.skills.${s.skill}`)}</span>
                  <span className="muted">
                    {s.cefr} · {s.score}%
                  </span>
                </div>
                <ProgressBar value={s.score / 100} />
              </div>
            ))}
          </div>
          <Button className="onb-next" onClick={() => void finish()}>
            {t('onboarding.finish')}
          </Button>
        </div>
      )}
    </div>
  );
}
