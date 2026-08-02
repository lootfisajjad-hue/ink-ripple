/**
 * OpenAI provider (optional). Only "available" when an API key is present in
 * the environment (VITE_OPENAI_API_KEY). Ships disabled by default so the app
 * needs no paid service to run. This is a thin, dependency-free fetch wrapper.
 *
 * NOTE: calling a provider directly from the browser exposes the key to the
 * client. For production, route through a small serverless proxy and set
 * VITE_OPENAI_BASE_URL to it. See docs/adding-ai-provider.md.
 */
import type { AIProvider, ChatMessage, ChatOptions, ChatResult } from './types';

const KEY = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
const BASE =
  (import.meta.env.VITE_OPENAI_BASE_URL as string | undefined) ??
  'https://api.openai.com/v1';
const MODEL =
  (import.meta.env.VITE_OPENAI_MODEL as string | undefined) ?? 'gpt-4o-mini';

function systemPrompt(opts?: ChatOptions): string {
  const level = opts?.level ?? 'A1';
  const persona = opts?.persona ?? 'teacher';
  return [
    `You are a friendly Brazilian Portuguese conversation partner playing the role of "${persona}".`,
    `Speak in simple Brazilian Portuguese suitable for a CEFR ${level} learner.`,
    `Keep replies short (1-2 sentences). If the learner makes a mistake, gently model the correct form.`,
    `Explanations, when needed, should be in Persian (Farsi).`,
  ].join(' ');
}

export const openAIProvider: AIProvider = {
  id: 'openai',
  label: 'OpenAI',
  available: () => Boolean(KEY),
  async chat(messages: ChatMessage[], opts?: ChatOptions): Promise<ChatResult> {
    if (!KEY) throw new Error('OpenAI API key not configured');
    const res = await fetch(`${BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemPrompt(opts) },
          ...messages,
        ],
        temperature: opts?.temperature ?? 0.6,
      }),
      signal: opts?.signal,
    });
    if (!res.ok) throw new Error(`OpenAI error ${res.status}`);
    const data = await res.json();
    return {
      reply: data.choices?.[0]?.message?.content?.trim() ?? '',
      providerId: 'openai',
    };
  },
};
