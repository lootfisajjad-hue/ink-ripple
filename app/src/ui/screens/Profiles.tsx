/**
 * Family profiles: list, switch, and add independent learner profiles. Each
 * profile keeps its own progress, plan, flashcards and stats.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Card } from '../components/kit';
import { useSession } from '@/app/store/session';
import { useSettings } from '@/app/store/settings';

export function Profiles() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { profiles, profile, loadProfiles, setActiveProfile } = useSession();
  const language = useSettings((s) => s.language);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    void loadProfiles();
  }, [loadProfiles]);

  async function addProfile() {
    if (!name.trim()) return;
    // create a fresh profile that will go through onboarding
    const { createProfile } = useSession.getState();
    await createProfile({
      displayName: name.trim(),
      interfaceLang: language,
      goal: 'citizenship',
      dailyMinutes: 20,
      cefr: 'A1',
      onboarded: false,
    });
    navigate('/onboarding', { replace: true });
  }

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/settings')}>
        ← {t('settings.title')}
      </button>
      <h1 className="screen-title">{t('profiles.title')}</h1>
      <p className="screen-subtitle">{t('profiles.familyNote')}</p>

      <div className="stack">
        {profiles.map((p) => (
          <Card key={p.id}>
            <div className="row-between">
              <div>
                <strong>{p.displayName}</strong>
                <div className="muted" style={{ fontSize: '0.85rem' }}>
                  {p.cefr} ·{' '}
                  {t(`onboarding.goals.${p.goal}`, { defaultValue: p.goal })}
                </div>
              </div>
              {profile?.id === p.id ? (
                <span className="badge badge-success">✓</span>
              ) : (
                <Button
                  variant="ghost"
                  onClick={async () => {
                    await setActiveProfile(p.id);
                    navigate('/');
                  }}
                >
                  {t('profiles.switch')}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {adding ? (
        <Card className="mt-4">
          <input
            className="onb-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('profiles.displayName')}
            aria-label={t('profiles.displayName')}
          />
          <div className="row mt-4">
            <Button variant="ghost" onClick={() => setAdding(false)}>
              {t('common.cancel')}
            </Button>
            <Button className="grow" onClick={() => void addProfile()}>
              {t('common.save')}
            </Button>
          </div>
        </Card>
      ) : (
        <Button className="mt-4" onClick={() => setAdding(true)}>
          + {t('profiles.add')}
        </Button>
      )}
    </div>
  );
}
