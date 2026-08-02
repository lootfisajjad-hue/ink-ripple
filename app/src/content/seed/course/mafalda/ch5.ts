import type { CourseLesson } from '@/domain/content/schema';

export const mafalda5: CourseLesson = {
  id: 'course-mafalda-5',
  order: 5,
  aula: 'Capítulo 5',
  track: 'mafalda',
  pagesKey: 'mafalda5',
  titleFa: 'برابری جنسیتی — رنگ‌ها و لباس، وسایل خانه، رابط‌ها و گذشته',
  titlePt: 'Igualdade de Gênero — Cores e roupas, Móveis, Conjunções, Passado',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ برابری جنسیتی است. رنگ‌ها و لباس‌ها، وسایل و مبلمان خانه، رابط‌ها (و، اما، یا…) و زمان گذشته را می‌آموزید. پیام کلیدی: در برزیل زن و مرد حقوق برابر دارند و هر نوع خشونت علیه زنان جرم است (قانون ماریا دا پِنیا).',
  objectivesFa: [
    'رنگ‌ها و لباس‌ها را نام ببرید.',
    'وسایل و مبلمان خانه را بگویید.',
    'رابط‌ها را برای پیوند جمله‌ها به‌کار ببرید.',
    'زمان گذشته را به‌کار ببرید و از برابری جنسیتی و حمایت از زنان آگاه شوید.',
  ],
  sections: [
    {
      headingFa: '۱. رنگ‌ها و لباس (Cores e roupas)',
      bodyFa: 'رنگ‌ها با جنسیت اسم هماهنگ می‌شوند.',
      examples: [
        {
          pt: 'branco, preto, vermelho, azul, verde, amarelo',
          fa: 'سفید، سیاه، قرمز، آبی، سبز، زرد',
          pron: 'برانکو، پرِتو، وِرمِلیو',
        },
        {
          pt: 'camisa, calça, vestido, sapato, casaco',
          fa: 'پیراهن، شلوار، پیراهن زنانه، کفش، کاپشن',
          pron: 'کامیزا، کالسا، وِستیدو',
        },
        {
          pt: 'uma camisa branca / um sapato preto',
          fa: 'یک پیراهن سفید / یک کفش سیاه',
          pron: 'کامیزا برانکا',
        },
      ],
    },
    {
      headingFa: '۲. وسایل و مبلمان خانه (Móveis)',
      bodyFa: 'واژگان اشیای رایج خانه.',
      examples: [
        {
          pt: 'mesa, cadeira, cama, sofá',
          fa: 'میز، صندلی، تخت، مبل',
          pron: 'مِزا، کادِیرا، کاما، سُفا',
        },
        {
          pt: 'geladeira, fogão, armário',
          fa: 'یخچال، اجاق، کمد',
          pron: 'ژِلادِیرا، فُگائو، آرماریو',
        },
      ],
    },
    {
      headingFa: '۳. رابط‌ها (Conjunções)',
      bodyFa: 'برای پیوند جمله‌ها.',
      examples: [
        {
          pt: 'e (و), mas (اما), ou (یا)',
          fa: 'و، اما، یا',
          pron: 'ای، مایس، اُ',
        },
        {
          pt: 'porque (چون), então (پس)',
          fa: 'چون، پس',
          pron: 'پورکی، اِنتائو',
        },
      ],
    },
    {
      headingFa: '۴. زمان گذشته (Passado)',
      bodyFa: 'گذشتهٔ ساده برای رویداد تمام‌شده. اول‌شخص: -ar→-ei، -er/-ir→-i.',
      examples: [
        {
          pt: 'Ontem eu comprei uma camisa.',
          fa: 'دیروز یک پیراهن خریدم.',
          pron: 'کُمپرِی',
          note: 'comprar → comprei',
        },
        {
          pt: 'Nós comemos em casa.',
          fa: 'ما در خانه غذا خوردیم.',
          pron: 'کُمِموس',
        },
      ],
    },
    {
      headingFa: '۵. آیا می‌دانستید؟ — برابری جنسیتی',
      bodyFa:
        'در برزیل زن و مرد حقوق برابر دارند. هر نوع خشونت علیه زن — جسمی، روانی، جنسی، مالی یا اخلاقی — ممنوع است و قربانی حق دریافت کمک روانی-اجتماعی و حمایت قانونی دارد (قانون ماریا دا پِنیا؛ خط کمک ۱۸۰).',
      examples: [
        {
          pt: 'Homens e mulheres têm os mesmos direitos.',
          fa: 'زنان و مردان حقوق برابر دارند.',
          pron: 'اُمِنس ای مولیِرِس',
        },
        {
          pt: 'Central de Atendimento à Mulher: Ligue 180.',
          fa: 'مرکز کمک به زنان: شمارهٔ ۱۸۰.',
          pron: 'لیگی سِنتو ای اُیتِنتا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'رنگ‌ها و لباس‌ها با جنسیت اسم هماهنگ می‌شوند.',
    'رابط‌ها: e, mas, ou, porque, então.',
    'گذشتهٔ ساده: comprei, comi.',
    'زن و مرد حقوق برابر دارند؛ خشونت علیه زن جرم است (خط ۱۸۰).',
  ],
  quiz: [
    {
      id: 'q-mafalda5-1',
      type: 'mcq',
      prompt: '«اما» به پرتغالی چه می‌شود؟',
      options: ['e', 'mas', 'ou', 'porque'],
      answer: 'mas',
      explanationFa: 'mas = اما.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda5-2',
      type: 'mcq',
      prompt: 'گذشتهٔ سادهٔ «comprar» اول‌شخص چیست؟',
      options: ['compro', 'comprei', 'comprava', 'comprarei'],
      answer: 'comprei',
      explanationFa: '-ar در گذشتهٔ ساده به -ei تبدیل می‌شود.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda5-3',
      type: 'mcq',
      prompt: 'خط تلفن کمک به زنان در برابر خشونت چند است؟',
      options: ['۱۰۰', '۱۸۰', '۱۹۲', '۱۹۰'],
      answer: '۱۸۰',
      explanationFa: 'مرکز کمک به زنان: Ligue 180.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۵. اطلاعات حقوقی آموزشی است؛ در موارد واقعی با خط ۱۸۰ یا نهاد رسمی تماس بگیرید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
