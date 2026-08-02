import type { CourseLesson } from '@/domain/content/schema';

export const mafalda9: CourseLesson = {
  id: 'course-mafalda-9',
  order: 9,
  aula: 'Capítulo 9',
  track: 'mafalda',
  pagesKey: 'mafalda9',
  titleFa: 'حمل‌ونقل عمومی — پول برزیل، زمان آینده و قیدهای شدت',
  titlePt:
    'Transportes públicos — Real, Verbos no futuro, Advérbios de intensidade',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ حمل‌ونقل عمومی است. اسکناس و سکه‌های واحد پول برزیل (رئال)، زمان آینده، قیدهای شدت و گفت‌وگو در اتوبوس را می‌آموزید. پیام کلیدی: حقوق و وظایف مسافران در حمل‌ونقل عمومی.',
  objectivesFa: [
    'اسکناس و سکه‌های رئال را بشناسید.',
    'زمان آینده را با «ir + مصدر» بسازید.',
    'قیدهای شدت را به‌کار ببرید.',
    'در اتوبوس مؤدبانه صحبت کنید و کمک بخواهید/بدهید.',
  ],
  sections: [
    {
      headingFa: '۱. پول برزیل (o Real)',
      bodyFa: 'واحد پول برزیل «رئال» (R$) است. اسکناس‌ها و سکه‌های مختلف دارد.',
      examples: [
        {
          pt: 'notas: 2, 5, 10, 20, 50, 100 reais',
          fa: 'اسکناس‌ها: ۲ تا ۱۰۰ رئال',
          pron: 'نُتاس',
        },
        {
          pt: 'moedas: 5, 10, 25, 50 centavos e 1 real',
          fa: 'سکه‌ها: ۵ تا ۵۰ سِنت و ۱ رئال',
          pron: 'مُئِداس',
        },
        {
          pt: 'Quanto custa a passagem? — Custa R$ 4,40.',
          fa: 'کرایه چند است؟ — ۴٫۴۰ رئال.',
          pron: 'کوانتو کوستا',
        },
      ],
    },
    {
      headingFa: '۲. زمان آینده (Futuro)',
      bodyFa: 'ساده‌ترین آینده: فعل ir در حال + مصدر.',
      examples: [
        {
          pt: 'Eu vou pegar o ônibus.',
          fa: 'سوار اتوبوس می‌شوم.',
          pron: 'وُو پِگار',
          note: 'ir + مصدر',
        },
        {
          pt: 'Nós vamos descer na próxima parada.',
          fa: 'ایستگاه بعد پیاده می‌شویم.',
          pron: 'واموس دِسِر',
        },
      ],
    },
    {
      headingFa: '۳. قیدهای شدت (Advérbios de intensidade)',
      bodyFa: 'برای بیان درجه و شدت.',
      examples: [
        {
          pt: 'muito, pouco, bastante, demais',
          fa: 'خیلی، کم، به‌اندازهٔ کافی، بیش از حد',
          pron: 'مویتو، پوکو، باستانتی',
        },
        {
          pt: 'O ônibus está muito cheio.',
          fa: 'اتوبوس خیلی شلوغ است.',
          pron: 'مویتو شِیو',
        },
      ],
    },
    {
      headingFa: '۴. در اتوبوس (No ônibus)',
      bodyFa: 'عبارت‌های رایج هنگام سوارشدن و کمک‌خواستن.',
      examples: [
        {
          pt: 'Este ônibus vai para o centro?',
          fa: 'این اتوبوس به مرکز شهر می‌رود؟',
          pron: 'اِستی اُنیبوس وای',
        },
        {
          pt: 'Por favor, pode me ajudar?',
          fa: 'لطفاً می‌توانید کمکم کنید؟',
          pron: 'پُدی می آژودار',
        },
      ],
    },
    {
      headingFa: '۵. آیا می‌دانستید؟ — حقوق و وظایف مسافر',
      bodyFa:
        'در حمل‌ونقل عمومی، مسافران هم حقوق دارند (اولویت برای سالمند، باردار، معلول) و هم وظایف (احترام، دادن صندلی اولویت). این فصل فهرست حقوق و وظایف را بررسی می‌کند.',
      examples: [
        {
          pt: 'Assento preferencial: idosos, gestantes, PCD.',
          fa: 'صندلی اولویت: سالمند، باردار، معلول.',
          pron: 'آسِنتو پرِفِرِنسیال',
        },
        {
          pt: 'direitos e deveres no transporte público',
          fa: 'حقوق و وظایف در حمل‌ونقل عمومی',
          pron: 'جیرِیتوس ای دِوِرِس',
        },
      ],
    },
  ],
  keyPointsFa: [
    'واحد پول: رئال (R$)؛ سِنت‌ها = centavos.',
    'آینده = ir + مصدر (vou pegar).',
    'قیدهای شدت: muito, pouco, bastante, demais.',
    'صندلی اولویت برای سالمند، باردار و معلول است.',
  ],
  quiz: [
    {
      id: 'q-mafalda9-1',
      type: 'mcq',
      prompt: 'واحد پول برزیل چیست؟',
      options: ['دلار', 'رئال (Real)', 'پزو', 'یورو'],
      answer: 'رئال (Real)',
      explanationFa: 'واحد پول برزیل «رئال» (R$) است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-mafalda9-2',
      type: 'mcq',
      prompt: '«سوار اتوبوس می‌شوم» (آینده) کدام است؟',
      options: [
        'Eu peguei o ônibus',
        'Eu vou pegar o ônibus',
        'Eu pego ontem',
        'Eu pegava',
      ],
      answer: 'Eu vou pegar o ônibus',
      explanationFa: 'آینده = ir + مصدر: vou pegar.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda9-3',
      type: 'mcq',
      prompt: 'صندلی اولویت (assento preferencial) برای چه کسانی است؟',
      options: ['همه', 'سالمند، باردار و معلول', 'فقط کودکان', 'فقط رانندگان'],
      answer: 'سالمند، باردار و معلول',
      explanationFa: 'اولویت برای idosos، gestantes و PCD است.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۹. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
