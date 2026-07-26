/**
 * Conversation practice with the AI assistant. Uses the configured provider
 * (mock by default, real if a key is set). Shows gentle corrections and can turn
 * a correction into a flashcard.
 */
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Disclaimer } from '../components/kit';
import { useSpeak } from '../hooks/useSpeak';
import { useSession } from '@/app/store/session';
import { useSettings } from '@/app/store/settings';
import { resolveProvider } from '@/infra/ai/registry';
import { recordMistake } from '@/infra/db/flashcards';
import type { ChatMessage, Correction } from '@/infra/ai/types';

const ROLES = [
  'teacher',
  'shopkeeper',
  'doctor',
  'officer',
  'neighbor',
] as const;

interface UiMessage {
  role: 'user' | 'assistant';
  text: string;
  corrections?: Correction[];
}

export function AIConversation() {
  const { t } = useTranslation();
  const { speak } = useSpeak();
  const profile = useSession((s) => s.profile)!;
  const aiId = useSettings((s) => s.aiProviderId);
  const [role, setRole] = useState<(typeof ROLES)[number]>('teacher');
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const provider = resolveProvider(aiId);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // greeting from the assistant
    (async () => {
      const res = await provider.chat([], {
        persona: role,
        level: profile.cefr,
      });
      setMessages([{ role: 'assistant', text: res.reply }]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, aiId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput('');
    const history: ChatMessage[] = messages.map((m) => ({
      role: m.role,
      content: m.text,
    }));
    setMessages((m) => [...m, { role: 'user', text }]);
    setBusy(true);
    try {
      const res = await provider.chat(
        [...history, { role: 'user', content: text }],
        {
          persona: role,
          level: profile.cefr,
        },
      );
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: res.reply, corrections: res.corrections },
      ]);
      void speak(res.reply);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <h1 className="screen-title">{t('ai.title')}</h1>
      <div className="seg">
        {ROLES.map((r) => (
          <button key={r} aria-pressed={role === r} onClick={() => setRole(r)}>
            {t(`ai.roles.${r}`)}
          </button>
        ))}
      </div>
      {provider.id === 'mock' && <Disclaimer>{t('ai.mockNotice')}</Disclaimer>}

      <div className="chat mt-4">
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'contents' }}>
            <div className={`msg msg-${m.role}`}>
              <span
                lang={m.role === 'assistant' ? 'pt' : undefined}
                className={m.role === 'assistant' ? 'pt' : ''}
              >
                {m.text}
              </span>
            </div>
            {m.corrections?.map((c, j) => (
              <div key={j} className="msg-correction">
                <strong>{t('ai.correction')}:</strong>{' '}
                <span lang="pt" className="pt">
                  {c.corrected}
                </span>
                <div className="muted">{c.explanationFa}</div>
                <Button
                  variant="ghost"
                  onClick={() =>
                    void recordMistake({
                      profileId: profile.id,
                      context: 'conversation',
                      pt: c.original,
                      correctionPt: c.corrected,
                      noteFa: c.explanationFa,
                    })
                  }
                >
                  + {t('flashcards.myMistakes')}
                </Button>
              </div>
            ))}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-bar">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder={t('ai.placeholder')}
          lang="pt"
          aria-label={t('ai.placeholder')}
        />
        <Button onClick={() => void send()} disabled={busy}>
          {t('ai.send')}
        </Button>
      </div>
    </div>
  );
}
