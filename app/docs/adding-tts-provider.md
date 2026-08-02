# Adding a text-to-speech provider

All speech goes through the `TTSProvider` interface in `src/infra/tts/index.ts`.
The default is `webSpeechTTS` (browser Web Speech API — free, offline, pt-BR),
with `noopTTS` as a silent fallback for tests or unsupported environments. A
cloud voice can be swapped in behind the same interface, ideally with caching.

## The interface

```ts
export interface TTSProvider {
  id: string;
  label: string;
  available(): boolean;
  speak(text: string, opts?: SpeakOptions): Promise<void>;
  cancel(): void;
}
```

`SpeakOptions` is `{ lang?: string; rate?: number; signal?: AbortSignal }`.
`speak()` resolves when playback finishes; `cancel()` stops any current
playback. `available()` should return `false` when the provider can't run so
`resolveTts` can fall back.

## Example: a caching cloud provider

Create `src/infra/tts/cloud.ts`:

```ts
import type { TTSProvider, SpeakOptions } from './index';

const KEY = import.meta.env.VITE_CLOUD_TTS_API_KEY as string | undefined;
const BASE =
  (import.meta.env.VITE_CLOUD_TTS_BASE_URL as string | undefined) ??
  'https://api.example-tts.com/v1';

export const cloudTTS: TTSProvider = {
  id: 'cloud',
  label: 'صدای ابری (Cloud TTS)',
  available: () => Boolean(KEY),

  // Cache synthesized audio by text+lang+rate so repeats are instant + cheap.
  _cache: new Map<string, string>(),
  _audio: null as HTMLAudioElement | null,

  async speak(text: string, opts?: SpeakOptions): Promise<void> {
    if (!KEY) throw new Error('Cloud TTS key not configured');
    const lang = opts?.lang ?? 'pt-BR';
    const rate = opts?.rate ?? 0.95;
    const cacheKey = `${lang}|${rate}|${text}`;

    let url = this._cache.get(cacheKey);
    if (!url) {
      const res = await fetch(`${BASE}/synthesize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${KEY}`,
        },
        body: JSON.stringify({ text, lang, rate }),
        signal: opts?.signal,
      });
      if (!res.ok) throw new Error(`Cloud TTS error ${res.status}`);
      url = URL.createObjectURL(await res.blob());
      this._cache.set(cacheKey, url);
    }

    await new Promise<void>((resolve, reject) => {
      const audio = new Audio(url);
      this._audio = audio;
      audio.onended = () => resolve();
      audio.onerror = () => reject(new Error('Cloud TTS playback failed'));
      opts?.signal?.addEventListener('abort', () => {
        audio.pause();
        resolve();
      });
      void audio.play();
    });
  },

  cancel() {
    this._audio?.pause();
    this._audio = null;
  },
} as TTSProvider & { _cache: Map<string, string>; _audio: HTMLAudioElement | null };
```

## Register it

In `src/infra/tts/index.ts`, import and add it to the `providers` array:

```ts
import { cloudTTS } from './cloud';

const providers: TTSProvider[] = [webSpeechTTS, cloudTTS, noopTTS];
```

`resolveTts(id)` returns the chosen provider when `available()` is true, else
falls back to `webSpeechTTS` (or `noopTTS` if even that is unavailable). Keep
`noopTTS` last so tests and headless runs always resolve to silence.
