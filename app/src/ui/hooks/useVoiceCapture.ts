/**
 * useVoiceCapture — records the microphone (MediaRecorder) and, where the
 * browser supports it, produces a rough live transcript via the Web Speech
 * recognition API (pt-BR).
 *
 * HONESTY: recognition quality varies by browser and is not a pronunciation
 * score. Raw audio capture works even where recognition is unavailable.
 */
import { useCallback, useRef, useState } from 'react';

/* Minimal typings for the non-standard SpeechRecognition API. */
interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onresult:
    | ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void)
    | null;
  onerror: (() => void) | null;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getRecognition(): SpeechRecognitionCtor | undefined {
  if (typeof window === 'undefined') return undefined;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export function useVoiceCapture() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  const supported =
    typeof navigator !== 'undefined' &&
    Boolean(navigator.mediaDevices?.getUserMedia);

  const start = useCallback(async () => {
    if (!supported) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((tr) => tr.stop());
      };
      recorder.start();
      recorderRef.current = recorder;

      const Recognition = getRecognition();
      if (Recognition) {
        const rec = new Recognition();
        rec.lang = 'pt-BR';
        rec.continuous = true;
        rec.interimResults = true;
        rec.onresult = (e) => {
          let text = '';
          for (let i = 0; i < e.results.length; i++) {
            text += e.results[i]?.[0]?.transcript ?? '';
          }
          setTranscript(text.trim());
        };
        rec.onerror = () => {};
        rec.start();
        recognitionRef.current = rec;
      }
      setRecording(true);
    } catch {
      setRecording(false);
    }
  }, [supported]);

  const stop = useCallback(() => {
    recorderRef.current?.stop();
    recognitionRef.current?.stop();
    recorderRef.current = null;
    recognitionRef.current = null;
    setRecording(false);
  }, []);

  const toggle = useCallback(() => {
    if (recording) stop();
    else void start();
  }, [recording, start, stop]);

  const reset = useCallback(() => {
    setTranscript('');
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
  }, [audioUrl]);

  return {
    supported,
    recording,
    transcript,
    audioUrl,
    start,
    stop,
    toggle,
    reset,
  };
}
