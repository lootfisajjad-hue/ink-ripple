/**
 * useSpeak — a small hook wrapping the configured TTS provider with the user's
 * speech-rate setting and a "slow" convenience.
 */
import { useCallback, useRef, useState } from 'react';
import { resolveTts } from '@/infra/tts';
import { useSettings } from '@/app/store/settings';

export function useSpeak() {
  const ttsId = useSettings((s) => s.ttsProviderId);
  const rate = useSettings((s) => s.speechRate);
  const [speaking, setSpeaking] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  const speak = useCallback(
    async (text: string, opts?: { slow?: boolean; lang?: string }) => {
      const tts = resolveTts(ttsId);
      ctrl.current?.abort();
      const controller = new AbortController();
      ctrl.current = controller;
      setSpeaking(true);
      try {
        await tts.speak(text, {
          lang: opts?.lang ?? 'pt-BR',
          rate: opts?.slow ? Math.max(rate - 0.35, 0.4) : rate,
          signal: controller.signal,
        });
      } catch {
        /* ignore playback errors (e.g. unsupported) */
      } finally {
        setSpeaking(false);
      }
    },
    [ttsId, rate],
  );

  const cancel = useCallback(() => {
    ctrl.current?.abort();
    resolveTts(ttsId).cancel();
    setSpeaking(false);
  }, [ttsId]);

  return { speak, cancel, speaking };
}
