import type { CourseLesson } from '@/domain/content/schema';

export const mafalda8: CourseLesson = {
  id: 'course-mafalda-8',
  order: 8,
  aula: 'Capítulo 8',
  track: 'mafalda',
  pagesKey: 'mafalda8',
  titleFa: 'سلامت و SUS — اعضای بدن، علائم، تخصص‌های پزشکی و حق سلامت',
  titlePt: 'Saúde e o SUS — Partes do corpo, Sintomas, Advérbios de tempo',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ سلامت و نظام سلامت همگانی برزیل (SUS) است. اعضای بدن، علائم و بیماری‌ها، تخصص‌های پزشکی، دستورهای پزشک و قیدهای زمان را می‌آموزید. پیام کلیدی: همهٔ مهاجران و پناهندگان حق درمان رایگان در SUS را دارند.',
  objectivesFa: [
    'اعضای بدن و علائم بیماری را بگویید.',
    'تخصص‌های پزشکی را بشناسید.',
    'دستورهای پزشک را بفهمید و قیدهای زمان را به‌کار ببرید.',
    'حق سلامت (SUS) و شمارهٔ اورژانس را بدانید.',
  ],
  sections: [
    {
      headingFa: '۱. اعضای بدن (Partes do corpo)',
      bodyFa: 'اعضای اصلی بدن.',
      examples: [
        {
          pt: 'cabeça, olho, boca, nariz, orelha',
          fa: 'سر، چشم، دهان، بینی، گوش',
          pron: 'کابِسا، اُلیو، بُکا',
        },
        {
          pt: 'braço, mão, perna, pé, barriga',
          fa: 'بازو، دست، پا، کف پا، شکم',
          pron: 'براسو، مائو، پِرنا، په',
        },
      ],
    },
    {
      headingFa: '۲. علائم و بیماری (Sinais e sintomas)',
      bodyFa: 'برای گفتن درد از «estar com dor de…» استفاده کنید.',
      examples: [
        {
          pt: 'Estou com dor de cabeça / febre / tosse.',
          fa: 'سردرد / تب / سرفه دارم.',
          pron: 'اِستُو کُن دُر',
        },
        {
          pt: 'gripe, resfriado, dor de barriga',
          fa: 'آنفلوانزا، سرماخوردگی، دل‌درد',
          pron: 'گریپی، هِسفریادو',
        },
      ],
    },
    {
      headingFa: '۳. تخصص‌های پزشکی و قیدهای زمان',
      bodyFa: 'تخصص‌های رایج و قیدهای زمان (همیشه، گاهی، هرگز، هر روز).',
      examples: [
        {
          pt: 'clínico geral, pediatra, dentista',
          fa: 'پزشک عمومی، متخصص کودکان، دندان‌پزشک',
          pron: 'کلینیکو ژِرال، پِدیاترا',
        },
        {
          pt: 'sempre, às vezes, nunca, todos os dias',
          fa: 'همیشه، گاهی، هرگز، هر روز',
          pron: 'سِمپری، آس وِزِس، نونکا',
        },
      ],
    },
    {
      headingFa: '۴. آیا می‌دانستید؟ — حق سلامت (SUS)',
      bodyFa:
        'همهٔ مهاجران و پناهندگان، فارغ از وضعیت اقامت، حق درمان رایگان در SUS (نظام سلامت همگانی) را دارند. با CPF و RNE/پروتکل می‌توانید کارت SUS بگیرید. اورژانس آمبولانس: ۱۹۲ (SAMU).',
      examples: [
        {
          pt: 'SUS = Sistema Único de Saúde (gratuito para todos).',
          fa: 'نظام سلامت همگانی؛ رایگان برای همه.',
          pron: 'سوس',
        },
        {
          pt: 'SAMU — urgência: 192',
          fa: 'آمبولانس اورژانس: ۱۹۲',
          pron: 'سامو',
        },
      ],
    },
  ],
  keyPointsFa: [
    'درد داشتن: estar com dor de… (Estou com dor de cabeça).',
    'قیدهای زمان: sempre, às vezes, nunca, todos os dias.',
    'SUS برای همهٔ مهاجران رایگان است؛ اورژانس ۱۹۲.',
  ],
  quiz: [
    {
      id: 'q-mafalda8-1',
      type: 'mcq',
      prompt: '«سردرد دارم» به پرتغالی چه می‌شود؟',
      options: [
        'Sou dor de cabeça',
        'Estou com dor de cabeça',
        'Tenho cabeça',
        'Vou cabeça',
      ],
      answer: 'Estou com dor de cabeça',
      explanationFa: 'درد داشتن = estar com dor de…',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda8-2',
      type: 'mcq',
      prompt: 'شمارهٔ آمبولانس اورژانس (SAMU) چند است؟',
      options: ['۱۸۰', '۱۹۰', '۱۹۲', '۱۰۰'],
      answer: '۱۹۲',
      explanationFa: 'SAMU = ۱۹۲.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-mafalda8-3',
      type: 'mcq',
      prompt: 'آیا SUS برای پناهندگان رایگان است؟',
      options: ['نه', 'بله، برای همه رایگان است', 'فقط با بیمه', 'فقط اورژانس'],
      answer: 'بله، برای همه رایگان است',
      explanationFa: 'SUS برای همهٔ مهاجران و پناهندگان رایگان است.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۸. اطلاعات بهداشتی آموزشی است؛ در موارد واقعی با ۱۹۲ یا مرکز درمانی تماس بگیرید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
