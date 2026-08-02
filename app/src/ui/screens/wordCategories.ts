/**
 * Display metadata for the vocabulary categories — an emoji and a Persian
 * label per content `category` key, plus a thematic display order. Keeping it
 * here (not in i18n) avoids bloating the locale key-parity surface for what is
 * really the content taxonomy; unknown keys fall back to the raw key.
 */
export type WordCategoryMeta = { emoji: string; fa: string };

export const WORD_CATEGORIES: Record<string, WordCategoryMeta> = {
  greetings: { emoji: '👋', fa: 'سلام و احوال‌پرسی' },
  family: { emoji: '👪', fa: 'خانواده' },
  food: { emoji: '🍽️', fa: 'خوراک' },
  drinks: { emoji: '🥤', fa: 'نوشیدنی‌ها' },
  house: { emoji: '🏠', fa: 'خانه و وسایل' },
  body: { emoji: '🧍', fa: 'بدن' },
  health: { emoji: '🏥', fa: 'سلامت' },
  clothing: { emoji: '👕', fa: 'پوشاک' },
  colors: { emoji: '🎨', fa: 'رنگ‌ها' },
  numbers: { emoji: '🔢', fa: 'اعداد' },
  'days-time': { emoji: '📅', fa: 'روز و زمان' },
  weather: { emoji: '☀️', fa: 'آب‌وهوا' },
  transport: { emoji: '🚌', fa: 'حمل‌ونقل' },
  directions: { emoji: '🧭', fa: 'جهت و مسیر' },
  city: { emoji: '🏙️', fa: 'شهر و مکان‌ها' },
  shopping: { emoji: '🛒', fa: 'خرید' },
  money: { emoji: '💰', fa: 'پول' },
  work: { emoji: '💼', fa: 'کار و شغل' },
  emotions: { emoji: '😊', fa: 'احساسات' },
  'verbs-basic': { emoji: '🔤', fa: 'فعل‌های پایه' },
  'adjectives-basic': { emoji: '🏷️', fa: 'صفت‌های پایه' },
  pronouns: { emoji: '🧑', fa: 'ضمایر' },
  prepositions: { emoji: '↔️', fa: 'حروف اضافه' },
  'question-words': { emoji: '❓', fa: 'پرسش‌واژه‌ها' },
};

// thematic order for the category grid (unknown categories go last, A→Z)
const ORDER = Object.keys(WORD_CATEGORIES);

export function categoryMeta(key: string): WordCategoryMeta {
  return WORD_CATEGORIES[key] ?? { emoji: '📚', fa: key };
}

export function categoryRank(key: string): number {
  const i = ORDER.indexOf(key);
  return i === -1 ? ORDER.length : i;
}
