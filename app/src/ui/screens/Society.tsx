/**
 * Society, history, government + the learner's city + the sources list. Every
 * topic shows its source and review date and the "not legal advice" note.
 */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, Disclaimer, Badge, PtLine } from '../components/kit';
import { db } from '@/infra/db/db';
import type {
  CitizenshipTopic,
  CityContent,
  Source,
} from '@/domain/content/schema';

export function Society() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [topics, setTopics] = useState<CitizenshipTopic[]>([]);
  const [cities, setCities] = useState<CityContent[]>([]);
  const [sources, setSources] = useState<Map<string, Source>>(new Map());
  const [cityId, setCityId] = useState<string>('');

  useEffect(() => {
    (async () => {
      const [tp, ct, sr] = await Promise.all([
        db.citizenshipTopics.toArray(),
        db.cities.toArray(),
        db.sources.toArray(),
      ]);
      setTopics(tp);
      setCities(ct);
      setSources(new Map(sr.map((s) => [s.id, s])));
      if (ct[0]) setCityId(ct[0].id);
    })();
  }, []);

  const city = cities.find((c) => c.id === cityId);

  return (
    <div>
      <button className="back-link" onClick={() => navigate('/citizenship')}>
        ← {t('citizenship.title')}
      </button>
      <h1 className="screen-title">{t('citizenship.sections.society')}</h1>
      <Disclaimer>{t('citizenship.disclaimerLong')}</Disclaimer>

      <div className="stack mt-4">
        {topics.map((topic) => {
          const src = sources.get(topic.sourceId);
          return (
            <Card key={topic.id}>
              <div className="row-between">
                <strong>{topic.title}</strong>
                <Badge tone="primary">{topic.category}</Badge>
              </div>
              <p style={{ lineHeight: 1.8 }}>{topic.bodyFa}</p>
              {topic.keyTermsPt.length > 0 && (
                <div className="row" style={{ flexWrap: 'wrap', gap: 6 }}>
                  {topic.keyTermsPt.map((kt, i) => (
                    <span key={i} className="badge badge-neutral">
                      <span lang="pt" className="pt">
                        {kt.pt}
                      </span>{' '}
                      — {kt.fa}
                    </span>
                  ))}
                </div>
              )}
              {src && (
                <div
                  className="muted"
                  style={{ fontSize: '0.8rem', marginTop: 8 }}
                >
                  {t('common.source')}: {src.title} · {t('common.reviewed')}{' '}
                  {src.accessedAt}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <h2 className="section-title">{t('citizenship.sections.city')}</h2>
      <div className="seg">
        {cities.map((c) => (
          <button
            key={c.id}
            aria-pressed={cityId === c.id}
            onClick={() => setCityId(c.id)}
          >
            {c.city}
          </button>
        ))}
      </div>
      {city && (
        <Card className="mt-4">
          <strong>
            {city.city} — {city.state}
          </strong>
          <p>{city.overviewFa}</p>
          {city.phrases.map((p, i) => (
            <PtLine key={i} pt={p.pt} fa={p.fa} small />
          ))}
        </Card>
      )}

      <h2 className="section-title">{t('citizenship.sections.sources')}</h2>
      <Card>
        {[...sources.values()].map((s) => (
          <div key={s.id} className="source-item">
            <div className="row-between">
              <strong style={{ fontSize: '0.95rem' }}>{s.title}</strong>
              {s.official && (
                <Badge tone="success">{t('common.humanVerified')}</Badge>
              )}
            </div>
            {s.url && (
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.url}
              </a>
            )}
            <div className="muted" style={{ fontSize: '0.8rem' }}>
              {t('common.reviewed')} {s.accessedAt}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
