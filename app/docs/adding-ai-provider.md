# Adding an AI provider

The app talks to language models only through the `AIProvider` interface
(`src/infra/ai/types.ts`). The concrete provider is chosen at runtime, so adding
a new one is self-contained: implement the interface, then register it.

## The interface

```ts
export interface AIProvider {
  id: string;
  label: string;
  /** true when the provider is usable in the current environment */
  available(): boolean;
  chat(messages: ChatMessage[], opts?: ChatOptions): Promise<ChatResult>;
}
```

- `id` — stable identifier stored in settings and returned as `providerId`.
- `label` — human-facing name shown in the Settings picker.
- `available()` — return `false` when credentials are missing so the registry
  can fall back to the always-on mock provider.
- `chat()` — takes `ChatMessage[]` (`role` is `'system' | 'user' | 'assistant'`)
  plus optional `ChatOptions` (`persona`, `level`, `explainLang`, `temperature`,
  `signal`) and resolves to a `ChatResult` (`reply`, optional `corrections`,
  `providerId`).

## Example: an Anthropic provider

Create `src/infra/ai/anthropic.ts`:

```ts
import type { AIProvider, ChatMessage, ChatOptions, ChatResult } from './types';

const KEY = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;
const BASE =
  (import.meta.env.VITE_ANTHROPIC_BASE_URL as string | undefined) ??
  'https://api.anthropic.com/v1';
const MODEL =
  (import.meta.env.VITE_ANTHROPIC_MODEL as string | undefined) ??
  'claude-3-5-haiku-latest';

function systemPrompt(opts?: ChatOptions): string {
  const level = opts?.level ?? 'A1';
  const persona = opts?.persona ?? 'teacher';
  return [
    `You are a friendly Brazilian Portuguese conversation partner playing "${persona}".`,
    `Speak in simple Brazilian Portuguese suitable for a CEFR ${level} learner.`,
    `Keep replies short (1-2 sentences); gently model corrections.`,
    `Explanations, when needed, should be in Persian (Farsi).`,
  ].join(' ');
}

export const anthropicProvider: AIProvider = {
  id: 'anthropic',
  label: 'Anthropic (Claude)',
  available: () => Boolean(KEY),
  async chat(messages: ChatMessage[], opts?: ChatOptions): Promise<ChatResult> {
    if (!KEY) throw new Error('Anthropic API key not configured');
    const res = await fetch(`${BASE}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 512,
        system: systemPrompt(opts),
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
        temperature: opts?.temperature ?? 0.6,
      }),
      signal: opts?.signal,
    });
    if (!res.ok) throw new Error(`Anthropic error ${res.status}`);
    const data = await res.json();
    return {
      reply: data.content?.[0]?.text?.trim() ?? '',
      providerId: 'anthropic',
    };
  },
};
```

## Register it

In `src/infra/ai/registry.ts` import the provider and add it to the array:

```ts
import { anthropicProvider } from './anthropic';

const providers: AIProvider[] = [mockAIProvider, openAIProvider, anthropicProvider];
```

`resolveProvider(id)` returns your provider when `available()` is true, and
falls back to `mockAIProvider` otherwise. Add `VITE_ANTHROPIC_API_KEY` to your
`.env` to enable it.

## Security caveat

As noted in `openai.ts`, calling a provider directly from the browser exposes
the key to the client. For production, route requests through a small serverless
proxy and point `VITE_ANTHROPIC_BASE_URL` at it instead of shipping the key.
