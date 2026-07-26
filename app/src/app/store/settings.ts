/**
 * Global UI settings, persisted to localStorage. These are device-level (not
 * per-profile): theme, interface language, font scale, speech rate, and which
 * AI/TTS providers to use.
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '../i18n';
import i18n, { applyDirection } from '../i18n';

export type ThemeMode = 'light' | 'dark' | 'system';

interface SettingsState {
  theme: ThemeMode;
  language: Language;
  fontScale: number;
  speechRate: number;
  aiProviderId: string;
  ttsProviderId: string;
  setTheme: (t: ThemeMode) => void;
  setLanguage: (l: Language) => void;
  setFontScale: (s: number) => void;
  setSpeechRate: (r: number) => void;
  setAiProvider: (id: string) => void;
  setTtsProvider: (id: string) => void;
}

/** Resolve 'system' to a concrete theme using the OS preference. */
export function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'system') return mode;
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/** Push the current theme + font scale onto the document root. */
export function applyTheme(mode: ThemeMode, fontScale: number): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', resolveTheme(mode));
  document.documentElement.style.setProperty('--font-scale', String(fontScale));
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'system',
      language: 'fa',
      fontScale: 1,
      speechRate: 0.95,
      aiProviderId: 'mock',
      ttsProviderId: 'web-speech',
      setTheme: (theme) => {
        set({ theme });
        const { fontScale } = useSettings.getState();
        applyTheme(theme, fontScale);
      },
      setLanguage: (language) => {
        set({ language });
        void i18n.changeLanguage(language);
        applyDirection(language);
      },
      setFontScale: (fontScale) => {
        set({ fontScale });
        applyTheme(useSettings.getState().theme, fontScale);
      },
      setSpeechRate: (speechRate) => set({ speechRate }),
      setAiProvider: (aiProviderId) => set({ aiProviderId }),
      setTtsProvider: (ttsProviderId) => set({ ttsProviderId }),
    }),
    {
      name: 'ola-brasil-settings',
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        applyTheme(state.theme, state.fontScale);
        void i18n.changeLanguage(state.language);
        applyDirection(state.language);
      },
    },
  ),
);
