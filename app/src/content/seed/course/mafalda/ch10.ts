import type { CourseLesson } from '@/domain/content/schema';

export const mafalda10: CourseLesson = {
  id: 'course-mafalda-10',
  order: 10,
  aula: 'Capítulo 10',
  track: 'mafalda',
  pagesKey: 'mafalda10',
  titleFa: 'آزادی عقیده — ورزش‌ها، اعداد ترتیبی و سه زمان فعل',
  titlePt: 'Liberdade de crença — Esportes, Números ordinais, Verbos',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ آزادی عقیده و باور است. نام ورزش‌ها، اعداد ترتیبی (اول، دوم، سوم…)، قیدها و مرور سه زمان فعل (حال، گذشته، آینده) را می‌آموزید. پیام کلیدی: در برزیل همه حق دارند آزادانه دین و باور خود را داشته باشند.',
  objectivesFa: [
    'نام ورزش‌ها را بگویید.',
    'اعداد ترتیبی را به‌کار ببرید.',
    'سه زمان فعل (حال/گذشته/آینده) را مرور کنید.',
    'اصل آزادی عقیده را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. ورزش‌ها (Esportes)',
      bodyFa: 'نام ورزش‌های رایج؛ با فعل jogar (بازی کردن) یا praticar.',
      examples: [
        {
          pt: 'futebol, vôlei, basquete, natação',
          fa: 'فوتبال، والیبال، بسکتبال، شنا',
          pron: 'فوتِبال، وُلِی، باسکِتی',
        },
        {
          pt: 'Eu jogo futebol aos domingos.',
          fa: 'یکشنبه‌ها فوتبال بازی می‌کنم.',
          pron: 'اِئو ژُگو فوتِبال',
        },
      ],
    },
    {
      headingFa: '۲. اعداد ترتیبی (Ordinais)',
      bodyFa: 'برای رتبه و ترتیب.',
      examples: [
        {
          pt: 'primeiro, segundo, terceiro',
          fa: 'اول، دوم، سوم',
          pron: 'پریمِیرو، سِگوندو، تِرسِیرو',
        },
        {
          pt: 'quarto, quinto, décimo, milésimo',
          fa: 'چهارم، پنجم، دهم، هزارم',
          pron: 'کوارتو، کینتو، دِسیمو',
        },
      ],
    },
    {
      headingFa: '۳. مرور سه زمان فعل',
      bodyFa: 'حال (عادت)، گذشته (تمام‌شده)، آینده (ir + مصدر).',
      examples: [
        {
          pt: 'Eu jogo / Eu joguei / Eu vou jogar',
          fa: 'بازی می‌کنم / بازی کردم / بازی خواهم کرد',
          pron: 'ژُگو / ژُگِی / وُو ژُگار',
        },
      ],
    },
    {
      headingFa: '۴. آیا می‌دانستید؟ — آزادی عقیده',
      bodyFa:
        'برزیل کشوری با تنوع دینی است و قانون اساسی آزادی عقیده را تضمین می‌کند. همه حق دارند آزادانه دین و باور خود را داشته باشند یا هیچ دینی نداشته باشند، و کسی به‌خاطر باورش نباید تبعیض ببیند.',
      examples: [
        {
          pt: 'Todos têm o direito de exercer livremente a sua crença.',
          fa: 'همه حق دارند آزادانه باور خود را داشته باشند.',
          pron: 'اِگزِرسِر لیورِمِنتی',
        },
        {
          pt: 'liberdade de crença e religião',
          fa: 'آزادی عقیده و دین',
          pron: 'لیبِردادی جی کرِنسا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'ورزش با jogar/praticar می‌آید.',
    'اعداد ترتیبی: primeiro, segundo, terceiro…',
    'سه زمان: jogo / joguei / vou jogar.',
    'آزادی عقیده حق همه است و در قانون اساسی تضمین شده.',
  ],
  quiz: [
    {
      id: 'q-mafalda10-1',
      type: 'mcq',
      prompt: '«terceiro» یعنی چندم؟',
      options: ['اول', 'دوم', 'سوم', 'چهارم'],
      answer: 'سوم',
      explanationFa: 'terceiro = سوم.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda10-2',
      type: 'mcq',
      prompt: '«بازی خواهم کرد» (آینده) کدام است؟',
      options: ['Eu joguei', 'Eu jogo', 'Eu vou jogar', 'Eu jogava'],
      answer: 'Eu vou jogar',
      explanationFa: 'آینده = ir + مصدر.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda10-3',
      type: 'mcq',
      prompt: 'در برزیل آزادی عقیده و دین چگونه است؟',
      options: [
        'ممنوع',
        'حق همه و تضمین‌شده در قانون اساسی',
        'فقط برای شهروندان',
        'فقط یک دین مجاز',
      ],
      answer: 'حق همه و تضمین‌شده در قانون اساسی',
      explanationFa: 'آزادی عقیده حق همه است و قانون اساسی آن را تضمین می‌کند.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۱۰. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
