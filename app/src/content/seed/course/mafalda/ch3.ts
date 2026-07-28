import type { CourseLesson } from '@/domain/content/schema';

export const mafalda3: CourseLesson = {
  id: 'course-mafalda-3',
  order: 3,
  aula: 'Capítulo 3',
  track: 'mafalda',
  pagesKey: 'mafalda3',
  titleFa: 'جامعه و آموزش — حروف تعریف، اشیای مدرسه و جای‌گیری',
  titlePt: 'Sociedade e Educação — Artigos, Objetos escolares, Localizações',
  cefr: 'A1',
  summaryFa:
    'این فصل دربارهٔ جامعه و آموزش است. حروف تعریف (o/a/os/as و um/uma…)، نام اشیای رایج در مدرسه و کلاس، و واژه‌های جای‌گیری و مکان (روی، زیر، کنار…) را می‌آموزید. پیام فصل: حق آموزش برای همه.',
  objectivesFa: [
    'حروف تعریف معین و نامعین را درست به‌کار ببرید.',
    'نام اشیای مدرسه و کلاس را بگویید.',
    'موقعیت و جای‌گیری اشیا را توصیف کنید (روی، زیر، کنار…).',
  ],
  sections: [
    {
      headingFa: '۱. حروف تعریف (Artigos)',
      bodyFa:
        'معین: o (مذکر)، a (مؤنث)، os/as (جمع). نامعین: um (مذکر)، uma (مؤنث). حرف تعریف با جنسیت و شمار اسم هماهنگ است.',
      examples: [
        {
          pt: 'o livro / a caneta',
          fa: 'کتاب / خودکار (معین)',
          pron: 'او لیورو / آ کانِتا',
        },
        {
          pt: 'os livros / as canetas',
          fa: 'کتاب‌ها / خودکارها',
          pron: 'اوس / آس',
        },
        {
          pt: 'um caderno / uma mochila',
          fa: 'یک دفتر / یک کوله',
          pron: 'اوم / اوما',
        },
      ],
    },
    {
      headingFa: '۲. اشیای مدرسه (Objetos escolares)',
      bodyFa: 'واژگان رایج کلاس درس.',
      examples: [
        {
          pt: 'o livro, o caderno, a caneta, o lápis',
          fa: 'کتاب، دفتر، خودکار، مداد',
          pron: 'لیورو، کادِرنو، کانِتا، لاپیس',
        },
        {
          pt: 'a borracha, a régua, a mochila',
          fa: 'پاک‌کن، خط‌کش، کوله‌پشتی',
          pron: 'بُهاشا، هِگوا، مُشیلا',
        },
        {
          pt: 'a mesa, a cadeira, a lousa',
          fa: 'میز، صندلی، تختهٔ کلاس',
          pron: 'مِزا، کادِیرا، لُوزا',
        },
      ],
    },
    {
      headingFa: '۳. جای‌گیری و مکان (Cadê? / Localizações)',
      bodyFa:
        '«Cadê…?» یعنی «… کجاست؟». برای پاسخ از واژه‌های مکان استفاده کنید.',
      examples: [
        {
          pt: 'em cima de / embaixo de',
          fa: 'روی / زیر',
          pron: 'اِین سیما جی / اِمبایشو جی',
        },
        {
          pt: 'ao lado de / entre',
          fa: 'کنارِ / بینِ',
          pron: 'آو لادو جی / اِنتری',
        },
        {
          pt: 'dentro de / fora de / atrás de',
          fa: 'داخلِ / بیرونِ / پشتِ',
          pron: 'دِنترو / فُرا / آتراس',
        },
        {
          pt: 'Cadê o livro? — Está em cima da mesa.',
          fa: 'کتاب کجاست؟ — روی میز است.',
          pron: 'کادِ او لیورو',
        },
      ],
    },
    {
      headingFa: '۴. آیا می‌دانستید؟ — حق آموزش',
      bodyFa:
        'آموزش حق همه است، از جمله پناهندگان و مهاجران. کودکان و بزرگسالان می‌توانند در مدارس دولتی ثبت‌نام کنند.',
      examples: [
        {
          pt: 'A educação é um direito de todos.',
          fa: 'آموزش حق همه است.',
          pron: 'آ ادوکاسائو اِ اوم جیرِیتو جی تُدوس',
        },
        {
          pt: 'Refugiados podem se matricular na escola pública.',
          fa: 'پناهندگان می‌توانند در مدرسهٔ دولتی ثبت‌نام کنند.',
          pron: 'ماتریکولار',
        },
      ],
    },
  ],
  keyPointsFa: [
    'حرف تعریف با جنسیت و شمار هماهنگ است: o/a/os/as، um/uma.',
    '«Cadê…?» = «… کجاست؟».',
    'مکان: em cima de (روی)، embaixo de (زیر)، ao lado de (کنار).',
    'آموزش حق همه است، از جمله پناهندگان.',
  ],
  quiz: [
    {
      id: 'q-mafalda3-1',
      type: 'mcq',
      prompt: 'حرف تعریف درست برای «caneta» (مؤنث) کدام است؟',
      options: ['o caneta', 'a caneta', 'um caneta', 'os caneta'],
      answer: 'a caneta',
      explanationFa: 'caneta مؤنث است → a caneta.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda3-2',
      type: 'mcq',
      prompt: '«em cima de» یعنی چه؟',
      options: ['زیر', 'روی', 'کنار', 'پشت'],
      answer: 'روی',
      explanationFa: 'em cima de = روی.',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda3-3',
      type: 'mcq',
      prompt: 'آیا پناهنده می‌تواند در مدرسهٔ دولتی ثبت‌نام کند؟',
      options: ['نه', 'بله، آموزش حق همه است', 'فقط با پول', 'فقط بزرگسالان'],
      answer: 'بله، آموزش حق همه است',
      explanationFa: 'آموزش حق همه است، از جمله پناهندگان.',
      cefr: 'A1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۳. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
