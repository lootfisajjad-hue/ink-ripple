/**
 * i18n bootstrap. Persian (fa) is the default and RTL; Portuguese (pt) and
 * English (en) are selectable. Direction is applied to <html> whenever the
 * language changes so RTL/LTR switching never breaks layout.
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fa } from './locales/fa';
import { en } from './locales/en';
import { pt } from './locales/pt';

export const LANGUAGES = ['fa', 'pt', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

export const RTL_LANGUAGES: Language[] = ['fa'];

export function isRtl(lang: string): boolean {
  return RTL_LANGUAGES.includes(lang as Language);
}

/** Apply language + direction to the document root. Safe to call anywhere. */
export function applyDirection(lang: string): void {
  if (typeof document === 'undefined') return;
  const dir = isRtl(lang) ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);
}

void i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: fa },
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: 'fa',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnNull: false,
});

i18n.on('languageChanged', applyDirection);

export default i18n;
