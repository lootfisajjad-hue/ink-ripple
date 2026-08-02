/**
 * Citizenship hub — the app's flagship module. Links to interview practice, the
 * interview simulator, administrative phrases, the document checklist, and the
 * society/history/sources content. Always shows the "not legal advice" note.
 */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Disclaimer } from '../components/kit';

const TILES = [
  { to: '/citizenship/interview', key: 'interview', emoji: '❓' },
  { to: '/citizenship/simulator', key: 'simulator', emoji: '🎙️' },
  { to: '/citizenship/documents', key: 'documents', emoji: '📄' },
  { to: '/citizenship/society', key: 'society', emoji: '🏛️' },
] as const;

export function Citizenship() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="screen-title">{t('citizenship.title')}</h1>
      <p className="screen-subtitle">{t('citizenship.subtitle')}</p>

      <Disclaimer>{t('citizenship.disclaimerLong')}</Disclaimer>

      <div className="hub-grid mt-4">
        {TILES.map((tile) => (
          <Link key={tile.to} to={tile.to} className="hub-tile">
            <span className="hub-emoji" aria-hidden="true">
              {tile.emoji}
            </span>
            <strong>{t(`citizenship.sections.${tile.key}`)}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}
