import type { CourseLesson } from '@/domain/content/schema';

export const mafalda12: CourseLesson = {
  id: 'course-mafalda-12',
  order: 12,
  aula: 'Capítulo 12',
  track: 'mafalda',
  pagesKey: 'mafalda12',
  titleFa: 'همه برای یکی — حقوق بشر، دعوت‌نامه و شکل‌های گوناگون خانواده',
  titlePt:
    'Todos(as) por um(a) — Direitos humanos, Convites, Formas de família',
  cefr: 'B1',
  summaryFa:
    'این فصلِ پایانی کتاب دربارهٔ حقوق بشر است. با تعریف و ویژگی‌های حقوق بشر (بر پایهٔ اعلامیهٔ جهانی حقوق بشر)، نوشتن دعوت‌نامه، و شکل‌های گوناگون خانواده در جامعهٔ امروز آشنا می‌شوید. پیام کلیدی: حقوق بشر جهان‌شمول، تفکیک‌ناپذیر و برای همه است.',
  objectivesFa: [
    'مفهوم و ویژگی‌های حقوق بشر را بفهمید.',
    'یک دعوت‌نامهٔ ساده بنویسید.',
    'شکل‌های گوناگون خانواده را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. حقوق بشر (Direitos humanos)',
      bodyFa:
        'حقوق بشر حقوقی است که همهٔ انسان‌ها فارغ از نژاد، ملیت، جنسیت، دین یا هر وضعیت دیگری دارند: حق زندگی و آزادی، آزادی بیان و عقیده، حق کار و آموزش و بسیاری دیگر.',
      examples: [
        {
          pt: 'Os direitos humanos são inerentes a todos os seres humanos.',
          fa: 'حقوق بشر ذاتیِ همهٔ انسان‌هاست.',
          pron: 'جیرِیتوس اومانوس',
        },
        {
          pt: 'direito à vida, à liberdade, ao trabalho, à educação',
          fa: 'حق زندگی، آزادی، کار، آموزش',
          pron: 'آ ویدا، آ لیبِردادی',
        },
      ],
    },
    {
      headingFa: '۲. ویژگی‌های حقوق بشر',
      bodyFa:
        'حقوق بشر جهان‌شمول (universais)، سلب‌ناشدنی (inalienáveis) و تفکیک‌ناپذیر (indivisíveis) است و برای همه به‌طور برابر و بدون تبعیض اعمال می‌شود.',
      examples: [
        {
          pt: 'universais, inalienáveis, indivisíveis',
          fa: 'جهان‌شمول، سلب‌ناشدنی، تفکیک‌ناپذیر',
          pron: 'اونیوِرسایس، ایندیویزیوِیس',
        },
        {
          pt: '"Direitos humanos para humanos direitos."',
          fa: '«حقوق بشر برای انسان‌های درست‌کردار.» (شعار فصل)',
          pron: 'اومانوس جیرِیتوس',
        },
      ],
    },
    {
      headingFa: '۳. دعوت‌نامه (Convites)',
      bodyFa: 'برای دعوت، عناصر زمان، مکان و مناسبت را بنویسید.',
      examples: [
        {
          pt: 'Você está convidado(a) para a festa.',
          fa: 'شما به جشن دعوت هستید.',
          pron: 'کُنویدادو',
        },
        {
          pt: 'Quando? Onde? — Sábado, às 19h, na minha casa.',
          fa: 'کِی؟ کجا؟ — شنبه ساعت ۷ عصر، خانهٔ من.',
          pron: 'کواندو، اُندی',
        },
      ],
    },
    {
      headingFa: '۴. شکل‌های گوناگون خانواده',
      bodyFa:
        'خانواده امروز شکل‌های گوناگونی دارد و همه به یک اندازه معتبر و شایستهٔ احترام‌اند: خانوادهٔ تک‌والد، خانوادهٔ گسترده، خانواده با والدین هم‌جنس و… .',
      examples: [
        {
          pt: 'diversas formas de família',
          fa: 'شکل‌های گوناگون خانواده',
          pron: 'دیوِرساس فُرماس',
        },
        {
          pt: 'Toda família merece respeito.',
          fa: 'هر خانواده‌ای شایستهٔ احترام است.',
          pron: 'تُدا فامیلیا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'حقوق بشر ذاتیِ همهٔ انسان‌هاست، بدون تبعیض.',
    'ویژگی‌ها: جهان‌شمول، سلب‌ناشدنی، تفکیک‌ناپذیر.',
    'دعوت‌نامه: زمان + مکان + مناسبت.',
    'خانواده شکل‌های گوناگون دارد و همه شایستهٔ احترام‌اند.',
  ],
  quiz: [
    {
      id: 'q-mafalda12-1',
      type: 'mcq',
      prompt: 'حقوق بشر شامل چه کسانی می‌شود؟',
      options: [
        'فقط شهروندان',
        'همهٔ انسان‌ها بدون تبعیض',
        'فقط بزرگسالان',
        'فقط یک گروه خاص',
      ],
      answer: 'همهٔ انسان‌ها بدون تبعیض',
      explanationFa: 'حقوق بشر ذاتیِ همهٔ انسان‌ها، فارغ از هر وضعیتی است.',
      cefr: 'B1',
      skill: 'reading',
    },
    {
      id: 'q-mafalda12-2',
      type: 'mcq',
      prompt: 'کدام از ویژگی‌های حقوق بشر است؟',
      options: ['موقتی', 'جهان‌شمول', 'قابل‌فروش', 'محلی'],
      answer: 'جهان‌شمول',
      explanationFa: 'حقوق بشر جهان‌شمول (universais) است.',
      cefr: 'B1',
      skill: 'reading',
    },
    {
      id: 'q-mafalda12-3',
      type: 'mcq',
      prompt: 'دربارهٔ شکل‌های گوناگون خانواده، فصل چه می‌گوید؟',
      options: [
        'فقط یک شکل معتبر است',
        'همه شایستهٔ احترام‌اند',
        'خانواده مهم نیست',
        'فقط خانوادهٔ گسترده',
      ],
      answer: 'همه شایستهٔ احترام‌اند',
      explanationFa: 'همهٔ شکل‌های خانواده معتبر و شایستهٔ احترام‌اند.',
      cefr: 'B1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۱۲ (پایانی)، بر پایهٔ اعلامیهٔ جهانی حقوق بشر. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
