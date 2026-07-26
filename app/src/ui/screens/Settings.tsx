/**
 * Settings: interface language, theme, font size, speech rate, AI/TTS provider,
 * profile management, and data controls (export / delete) for LGPD-style rights.
 */
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/kit';
import { useSettings } from '@/app/store/settings';
import { useSession } from '@/app/store/session';
import { LANGUAGES, type Language } from '@/app/i18n';
import { listProviders } from '@/infra/ai/registry';
import { listTtsProviders } from '@/infra/tts';
import { db } from '@/infra/db/db';

const LANG_LABEL: Record<Language, string> = {
  fa: 'فارسی',
  pt: 'Português',
  en: 'English',
};

export function Settings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const s = useSettings();
  const profile = useSession((st) => st.profile)!;

  async function exportData() {
    const tables = await Promise.all([
      db.profiles.toArray(),
      db.flashcards.where('profileId').equals(profile.id).toArray(),
      db.progress.where('profileId').equals(profile.id).toArray(),
      db.skillScores.where('profileId').equals(profile.id).toArray(),
      db.mistakes.where('profileId').equals(profile.id).toArray(),
      db.documents.where('profileId').equals(profile.id).toArray(),
      db.interviewSessions.where('profileId').equals(profile.id).toArray(),
    ]);
    const data = {
      exportedAt: new Date().toISOString(),
      profile,
      flashcards: tables[1],
      progress: tables[2],
      skillScores: tables[3],
      mistakes: tables[4],
      documents: tables[5],
      interviewSessions: tables[6],
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ola-brasil-${profile.displayName}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function deleteAll() {
    if (!window.confirm(t('settings.deleteConfirm'))) return;
    await db.delete();
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <h1 className="screen-title">{t('settings.title')}</h1>

      <div className="setting-row">
        <label>{t('settings.interfaceLanguage')}</label>
        <div className="seg">
          {LANGUAGES.map((l) => (
            <button
              key={l}
              aria-pressed={s.language === l}
              onClick={() => s.setLanguage(l)}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>

      <div className="setting-row">
        <label>{t('settings.theme')}</label>
        <div className="seg">
          {(['light', 'dark', 'system'] as const).map((th) => (
            <button
              key={th}
              aria-pressed={s.theme === th}
              onClick={() => s.setTheme(th)}
            >
              {t(`settings.theme${th[0]!.toUpperCase()}${th.slice(1)}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="setting-row">
        <label>
          {t('settings.fontSize')} — {Math.round(s.fontScale * 100)}%
        </label>
        <input
          type="range"
          min={0.85}
          max={1.5}
          step={0.05}
          value={s.fontScale}
          onChange={(e) => s.setFontScale(Number(e.target.value))}
          aria-label={t('settings.fontSize')}
        />
      </div>

      <div className="setting-row">
        <label>
          {t('settings.speechRate')} — {s.speechRate.toFixed(2)}×
        </label>
        <input
          type="range"
          min={0.5}
          max={1.2}
          step={0.05}
          value={s.speechRate}
          onChange={(e) => s.setSpeechRate(Number(e.target.value))}
          aria-label={t('settings.speechRate')}
        />
      </div>

      <div className="setting-row">
        <label>{t('settings.aiProvider')}</label>
        <div className="seg">
          {listProviders().map((p) => (
            <button
              key={p.id}
              aria-pressed={s.aiProviderId === p.id}
              disabled={!p.available()}
              onClick={() => s.setAiProvider(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="setting-row">
        <label>{t('settings.ttsProvider')}</label>
        <div className="seg">
          {listTtsProviders().map((p) => (
            <button
              key={p.id}
              aria-pressed={s.ttsProviderId === p.id}
              disabled={!p.available()}
              onClick={() => s.setTtsProvider(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <h2 className="section-title">{t('profiles.title')}</h2>
      <Card>
        <div className="row-between">
          <span>{profile.displayName}</span>
          <Button variant="ghost" onClick={() => navigate('/profiles')}>
            {t('profiles.switch')}
          </Button>
        </div>
      </Card>

      <h2 className="section-title">{t('settings.data')}</h2>
      <div className="stack">
        <Button variant="ghost" onClick={() => void exportData()}>
          {t('settings.exportData')}
        </Button>
        <Button variant="danger" onClick={() => void deleteAll()}>
          {t('settings.deleteData')}
        </Button>
        <Link to="/progress" className="muted center">
          {t('progress.title')}
        </Link>
      </div>
    </div>
  );
}
