import type { CourseLesson } from '@/domain/content/schema';

export const mafalda7: CourseLesson = {
  id: 'course-mafalda-7',
  order: 7,
  aula: 'Capítulo 7',
  track: 'mafalda',
  pagesKey: 'mafalda7',
  titleFa: 'احترام به تفاوت‌ها — خوراک، قیدهای مکان و حقوق سالمندان و معلولان',
  titlePt: 'Respeitar os diferentes — Alimentos, Advérbios de lugar',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ احترام به تفاوت‌ها و به‌ویژه حقوق سالمندان و افراد دارای معلولیت است. نام خوراکی‌های طبیعی و فرآوری‌شده، قیدهای مکان، و آشنایی با زبان اشاره (Libras) را می‌آموزید. پیام کلیدی: سالمندان و افراد دارای معلولیت حق سلامت، مسکن، حمل‌ونقل، آموزش، ورزش و تفریح دارند.',
  objectivesFa: [
    'خوراکی‌های طبیعی و فرآوری‌شده را تشخیص دهید.',
    'قیدهای مکان را به‌کار ببرید.',
    'با حقوق سالمندان و افراد دارای معلولیت آشنا شوید.',
  ],
  sections: [
    {
      headingFa: '۱. خوراک: طبیعی و فرآوری‌شده',
      bodyFa:
        'خوراکِ طبیعی (in natura) سالم‌تر از خوراکِ فرآوری‌شده و فوق‌فرآوری‌شده است.',
      examples: [
        {
          pt: 'in natura: frutas, verduras, arroz, feijão',
          fa: 'طبیعی: میوه، سبزی، برنج، لوبیا',
          pron: 'این ناتورا',
        },
        {
          pt: 'processados: enlatados, refrigerantes, salgadinhos',
          fa: 'فرآوری‌شده: کنسرو، نوشابه، تنقلات',
          pron: 'پروسِسادوس',
        },
      ],
    },
    {
      headingFa: '۲. قیدهای مکان (Advérbios de lugar)',
      bodyFa: 'برای گفتن جای چیزها.',
      examples: [
        {
          pt: 'aqui, ali, lá',
          fa: 'اینجا، آنجا، آن‌طرف',
          pron: 'آکی، آلی، لا',
        },
        {
          pt: 'perto, longe, dentro, fora',
          fa: 'نزدیک، دور، داخل، بیرون',
          pron: 'پِرتو، لُنژی، دِنترو، فُرا',
        },
      ],
    },
    {
      headingFa: '۳. زبان اشاره (Libras)',
      bodyFa:
        'برزیل زبان اشارهٔ رسمی خود را دارد: Libras (زبان اشارهٔ برزیل). این بخشی از احترام به ناشنوایان و ارتباط با آن‌هاست.',
      examples: [
        {
          pt: 'Libras = Língua Brasileira de Sinais',
          fa: 'زبان اشارهٔ برزیل — رسمی و قانونی.',
          pron: 'لیبراس',
        },
      ],
    },
    {
      headingFa: '۴. آیا می‌دانستید؟ — حقوق سالمندان و معلولان',
      bodyFa:
        'سالمندان و افراد دارای معلولیت حقوق تضمین‌شده دارند: حق سلامت، مسکن، حمل‌ونقل عمومی، آموزش، ورزش و تفریح. در اتوبوس و مکان‌های عمومی برایشان اولویت و صندلی ویژه در نظر گرفته می‌شود.',
      examples: [
        {
          pt: 'Direito à saúde, à moradia, ao transporte, à educação.',
          fa: 'حق سلامت، مسکن، حمل‌ونقل، آموزش.',
          pron: 'جیرِیتو آ ساوجی',
        },
        {
          pt: 'Assento preferencial no transporte público.',
          fa: 'صندلی اولویت‌دار در حمل‌ونقل عمومی.',
          pron: 'آسِنتو پرِفِرِنسیال',
        },
      ],
    },
  ],
  keyPointsFa: [
    'خوراکِ طبیعی (in natura) سالم‌تر از فرآوری‌شده است.',
    'قیدهای مکان: aqui, ali, lá, perto, longe.',
    'Libras زبان اشارهٔ رسمی برزیل است.',
    'سالمندان و افراد دارای معلولیت حق اولویت و خدمات ویژه دارند.',
  ],
  quiz: [
    {
      id: 'q-mafalda7-1',
      type: 'mcq',
      prompt: 'کدام خوراک «طبیعی (in natura)» است؟',
      options: ['نوشابه', 'میوه', 'کنسرو', 'تنقلات بسته‌بندی'],
      answer: 'میوه',
      explanationFa: 'میوه و سبزی خوراک طبیعی‌اند.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda7-2',
      type: 'mcq',
      prompt: 'Libras چیست؟',
      options: ['واحد پول', 'زبان اشارهٔ برزیل', 'نوعی غذا', 'یک شهر'],
      answer: 'زبان اشارهٔ برزیل',
      explanationFa: 'Libras = زبان اشارهٔ رسمی برزیل.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-mafalda7-3',
      type: 'mcq',
      prompt: 'در اتوبوس برای سالمندان و معلولان چه در نظر گرفته شده؟',
      options: ['هیچ‌چیز', 'صندلی اولویت‌دار', 'بلیت گران‌تر', 'ورود ممنوع'],
      answer: 'صندلی اولویت‌دار',
      explanationFa: 'صندلی و اولویت ویژه برایشان تضمین شده است.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۷. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
