/**
 * Citizenship document checklist. Seeded from templates on first open; the user
 * can set status, dates and notes. Data stays on-device by default. The screen
 * reminds the user to verify requirements against official sources.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, Disclaimer, Badge } from '../components/kit';
import { useSession } from '@/app/store/session';
import { db, type DocumentItem } from '@/infra/db/db';

const STATUS_TONE: Record<
  DocumentItem['status'],
  'success' | 'warning' | 'neutral'
> = {
  ready: 'success',
  missing: 'warning',
  expired: 'warning',
  translation: 'neutral',
};

export function Documents() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const profile = useSession((s) => s.profile)!;
  const [items, setItems] = useState<DocumentItem[]>([]);

  useEffect(() => {
    (async () => {
      let existing = await db.documents
        .where('profileId')
        .equals(profile.id)
        .toArray();
      if (existing.length === 0) {
        const templates = await db.documentTemplates.toArray();
        const seeded: DocumentItem[] = templates.map((tpl) => ({
          id: `${profile.id}:${tpl.id}`,
          profileId: profile.id,
          templateId: tpl.id,
          name: tpl.nameFa,
          status: 'missing',
          note: tpl.descFa,
          updatedAt: new Date().toISOString(),
        }));
        await db.documents.bulkPut(seeded);
        existing = seeded;
      }
      setItems(existing);
    })();
  }, [profile.id]);

  async function update(item: DocumentItem, patch: Partial<DocumentItem>) {
    const updated = { ...item, ...patch, updatedAt: new Date().toISOString() };
    await db.documents.put(updated);
    setItems((prev) => prev.map((i) => (i.id === item.id ? updated : i)));
  }

  const statuses: DocumentItem['status'][] = [
    'ready',
    'missing',
    'expired',
    'translation',
  ];

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/citizenship')}>
        ← {t('citizenship.title')}
      </button>
      <h1 className="screen-title">{t('citizenship.documents.title')}</h1>
      <Disclaimer>{t('citizenship.documents.reminderNote')}</Disclaimer>

      <Card className="mt-4">
        {items.map((item) => (
          <div key={item.id} className="doc-item">
            <div className="row-between">
              <strong>{item.name}</strong>
              <Badge tone={STATUS_TONE[item.status]}>
                {t(`citizenship.documents.status.${item.status}`)}
              </Badge>
            </div>
            {item.note && (
              <div className="muted" style={{ fontSize: '0.85rem' }}>
                {item.note}
              </div>
            )}
            <div className="seg">
              {statuses.map((st) => (
                <button
                  key={st}
                  aria-pressed={item.status === st}
                  onClick={() => void update(item, { status: st })}
                >
                  {t(`citizenship.documents.status.${st}`)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
