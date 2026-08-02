/**
 * Text-to-speech, provider-agnostic. The default uses the browser's built-in
 * Web Speech API (free, offline on most platforms, supports pt-BR). A cloud
 * provider can be swapped in behind the same interface with caching.
 * See docs/adding-tts-provider.md.
 */

export interface SpeakOptions {
  lang?: string;
  rate?: number; // 0.5 (slow) .. 1.0 (normal)
  signal?: AbortSignal;
}

export interface TTSProvider {
  id: string;
  label: string;
  available(): boolean;
  speak(text: string, opts?: SpeakOptions): Promise<void>;
  cancel(): void;
}

/** Pick the best available pt-BR voice, if any. */
function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  if (typeof speechSynthesis === 'undefined') return undefined;
  const voices = speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase() === lang.toLowerCase()) ??
    voices.find((v) => v.lang?.toLowerCase().startsWith('pt'))
  );
}

export const webSpeechTTS: TTSProvider = {
  id: 'web-speech',
  label: 'صدای مرورگر (Web Speech)',
  available: () => typeof window !== 'undefined' && 'speechSynthesis' in window,
  speak(text, opts) {
    return new Promise<void>((resolve, reject) => {
      if (!this.available()) {
        reject(new Error('Speech synthesis not available'));
        return;
      }
      const lang = opts?.lang ?? 'pt-BR';
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = opts?.rate ?? 0.95;
      const voice = pickVoice(lang);
      if (voice) utter.voice = voice;
      utter.onend = () => resolve();
      utter.onerror = (e) =>
        e.error === 'interrupted' || e.error === 'canceled'
          ? resolve()
          : reject(new Error(`TTS error: ${e.error}`));
      opts?.signal?.addEventListener('abort', () => {
        speechSynthesis.cancel();
        resolve();
      });
      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    });
  },
  cancel() {
    if (this.available()) speechSynthesis.cancel();
  },
};

/** A no-op provider used in tests / when synthesis is unavailable. */
export const noopTTS: TTSProvider = {
  id: 'none',
  label: 'بدون صدا',
  available: () => true,
  async speak() {
    /* silent */
  },
  cancel() {},
};

const providers: TTSProvider[] = [webSpeechTTS, noopTTS];

export function listTtsProviders(): TTSProvider[] {
  return providers;
}

export function resolveTts(id: string): TTSProvider {
  const chosen = providers.find((p) => p.id === id);
  if (chosen && chosen.available()) return chosen;
  return webSpeechTTS.available() ? webSpeechTTS : noopTTS;
}
