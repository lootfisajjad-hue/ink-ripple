/**
 * Pronunciation practice: listen (normal/slow), shadow, and record your voice to
 * compare. Focus items target sounds Persian speakers find hard in Brazilian
 * Portuguese. No automatic phoneme scoring is claimed (architecture-ready).
 */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Disclaimer } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useVoiceCapture } from '../hooks/useVoiceCapture';
import { useSession } from '@/app/store/session';
import { db } from '@/infra/db/db';

const FOCUS = [
  {
    sound: 'ão',
    example: 'não, pão, mão',
    noteFa: 'صدای خیشومی؛ مانند «اَئون» با تشدید بینی.',
  },
  {
    sound: 'nh',
    example: 'senhor, dinheiro',
    noteFa: 'مانند «نی» نرم (نظیر ñ اسپانیایی).',
  },
  { sound: 'lh', example: 'trabalho, filho', noteFa: 'مانند «لی» نرم.' },
  {
    sound: 'r / rr',
    example: 'carro, rua',
    noteFa: 'r ابتدای کلمه و rr مانند «ه/خ» گلویی.',
  },
  {
    sound: 'd/t + i',
    example: 'dia, tia',
    noteFa: 'd و t پیش از i مانند «ج» و «چ» تلفظ می‌شوند: جیا، چیا.',
  },
  {
    sound: 's / z',
    example: 'casa, mesa',
    noteFa: 's بین دو مصوت مثل «ز» تلفظ می‌شود.',
  },
];

const PAIRS = [
  ['avô', 'avó'],
  ['sede', 'sede'],
  ['pêlo', 'pelo'],
];

export function Pronunciation() {
  const { t } = useTranslation();
  const { speak } = useSpeak();
  const voice = useVoiceCapture();
  const profile = useSession((s) => s.profile)!;
  const [shadow, setShadow] = useState<{
    pt: string;
    fa: string;
    pron: string;
  } | null>(null);

  useEffect(() => {
    db.phrases
      .limit(1)
      .toArray()
      .then((rows) => {
        const p = rows[0];
        if (p) setShadow({ pt: p.pt, fa: p.faNatural, pron: p.pronunciation });
      });
  }, []);

  async function saveAttempt() {
    if (voice.audioUrl) {
      await db.pronunciationAttempts.add({
        profileId: profile.id,
        phraseId: shadow ? 'shadow' : 'free',
        createdAt: new Date().toISOString(),
        durationMs: 0,
      });
    }
  }

  return (
    <div>
      <h1 className="screen-title">{t('pronunciation.title')}</h1>
      <Disclaimer>{t('pronunciation.noScoreNote')}</Disclaimer>

      <h2 className="section-title">{t('pronunciation.shadowing')}</h2>
      {shadow && (
        <Card>
          <span className="pt ptline-pt" lang="pt">
            {shadow.pt}
          </span>
          <div className="ptline-pron">{shadow.pron}</div>
          <div className="ptline-fa">{shadow.fa}</div>
          <div className="row mt-4" style={{ flexWrap: 'wrap' }}>
            <Button variant="outline" onClick={() => void speak(shadow.pt)}>
              🔊 {t('common.play')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => void speak(shadow.pt, { slow: true })}
            >
              🐢 {t('common.playSlow')}
            </Button>
          </div>
          {voice.supported && (
            <div className="record-controls mt-4">
              <Button
                variant={voice.recording ? 'danger' : 'primary'}
                onClick={() => {
                  voice.toggle();
                  if (voice.recording) void saveAttempt();
                }}
              >
                {voice.recording
                  ? `⏺ ${t('common.stop')}`
                  : `🎤 ${t('common.record')}`}
              </Button>
              {voice.recording && (
                <span className="recording-dot" aria-hidden="true" />
              )}
              {voice.audioUrl && (
                <audio
                  controls
                  src={voice.audioUrl}
                  aria-label={t('pronunciation.compare')}
                />
              )}
            </div>
          )}
        </Card>
      )}

      <h2 className="section-title">{t('pronunciation.focusForPersian')}</h2>
      <Card>
        {FOCUS.map((f) => (
          <div key={f.sound} className="ptline">
            <div className="ptline-main">
              <span>
                <strong className="pt" lang="pt">
                  {f.sound}
                </strong>{' '}
                <span className="muted pt" lang="pt">
                  ({f.example})
                </span>
              </span>
              <button
                className="speak-btn"
                aria-label={`پخش: ${f.example}`}
                onClick={() => void speak(f.example)}
              >
                🔊
              </button>
            </div>
            <div className="ptline-fa">{f.noteFa}</div>
          </div>
        ))}
      </Card>

      <h2 className="section-title">{t('pronunciation.minimalPairs')}</h2>
      <Card>
        {PAIRS.map((pair, i) => (
          <div
            key={i}
            className="row"
            style={{ justifyContent: 'space-between' }}
          >
            {pair.map((w, j) => (
              <button
                key={j}
                className="option-btn"
                style={{ flex: 1 }}
                onClick={() => void speak(w)}
              >
                <span className="pt" lang="pt">
                  {w}
                </span>{' '}
                🔊
              </button>
            ))}
          </div>
        ))}
      </Card>
    </div>
  );
}
