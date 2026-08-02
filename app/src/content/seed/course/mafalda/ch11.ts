import type { CourseLesson } from '@/domain/content/schema';

export const mafalda11: CourseLesson = {
  id: 'course-mafalda-11',
  order: 11,
  aula: 'Capítulo 11',
  track: 'mafalda',
  pagesKey: 'mafalda11',
  titleFa: 'تاریخ برزیل — حیوانات، ضرب‌المثل‌ها، شرطی و حق رأی',
  titlePt: 'História do Brasil — Animais, Ditados, Futuro do pretérito',
  cefr: 'B1',
  summaryFa:
    'این فصل دربارهٔ تاریخ برزیل است. نام حیوانات، ضرب‌المثل‌های محبوب، وجه شرطی (futuro do pretérito) و مروری بر تاریخ برزیل را می‌آموزید — از جمله دوران ژِتولیو وارگاس و پیدایش حقوق کار، دوران دیکتاتوری نظامی و نقض حقوق بشر، و «حق رأی». پیام کلیدی: حق رأی و مشارکت سیاسی.',
  objectivesFa: [
    'نام حیوانات و چند ضرب‌المثل را بشناسید.',
    'وجه شرطی (futuro do pretérito) را به‌کار ببرید.',
    'خطوط اصلی تاریخ برزیل و حقوق کار را بدانید.',
    'با «حق رأی» در برزیل آشنا شوید.',
  ],
  sections: [
    {
      headingFa: '۱. حیوانات (Animais)',
      bodyFa: 'نام حیوانات رایج.',
      examples: [
        {
          pt: 'cachorro, gato, cavalo, boi, galinha',
          fa: 'سگ، گربه، اسب، گاو، مرغ',
          pron: 'کاشُهو، گاتو، کاوالو',
        },
        {
          pt: 'onça, tucano, arara',
          fa: 'یوزپلنگ، توکان، طوطی آرارا (حیوانات برزیل)',
          pron: 'اُنسا، توکانو، آرارا',
        },
      ],
    },
    {
      headingFa: '۲. ضرب‌المثل‌ها (Ditados populares)',
      bodyFa: 'ضرب‌المثل‌ها بخشی از فرهنگ‌اند.',
      examples: [
        {
          pt: 'Quem não arrisca, não petisca.',
          fa: 'هرکه خطر نکند، نصیبی نمی‌برد. (نابرده رنج…)',
          pron: 'کِین نائو آهیسکا',
        },
        {
          pt: 'Água mole em pedra dura tanto bate até que fura.',
          fa: 'قطرهٔ آب بر سنگ سخت آن‌قدر می‌زند تا سوراخش کند. (پشتکار)',
          pron: 'آگوا مُلی',
        },
      ],
    },
    {
      headingFa: '۳. وجه شرطی (Futuro do pretérito)',
      bodyFa:
        'برای آرزو، فرض و ادب به‌کار می‌رود. پایانهٔ -ia: gostaria (دوست داشتم)، poderia (می‌توانستم).',
      examples: [
        {
          pt: 'Eu gostaria de trabalhar aqui.',
          fa: 'دوست داشتم اینجا کار کنم. (مؤدبانه)',
          pron: 'گُستاریا',
        },
        {
          pt: 'Você poderia me ajudar?',
          fa: 'می‌شود کمکم کنید؟',
          pron: 'پودِریا',
        },
      ],
    },
    {
      headingFa: '۴. کمی تاریخ و حقوق کار',
      bodyFa:
        'در دوران ژِتولیو وارگاس بسیاری از حقوق کار پدید آمد: مرخصی، محدودیت ساعت کار هفتگی و… . برزیل دورانی از دیکتاتوری نظامی را هم تجربه کرد که در آن حقوق بشر نقض شد (سرکوب و تعقیب مخالفان). امروز برزیل دموکراسی است.',
      examples: [
        {
          pt: 'No governo Vargas surgiram direitos trabalhistas: férias, jornada semanal.',
          fa: 'در دولت وارگاس حقوق کار پدید آمد: مرخصی، محدودیت ساعت کار.',
          pron: 'جیرِیتوس ترابالیستاس',
        },
        {
          pt: 'Na ditadura houve violações de direitos humanos.',
          fa: 'در دیکتاتوری، حقوق بشر نقض شد.',
          pron: 'جیتادورا',
        },
      ],
    },
    {
      headingFa: '۵. آیا می‌دانستید؟ — حق رأی',
      bodyFa:
        'در برزیل رأی‌دادن حق و در سنین معینی وظیفهٔ شهروندان است. حق رأی نتیجهٔ مبارزات تاریخی است و بخش مهمی از دموکراسی و شهروندی به شمار می‌رود.',
      examples: [
        { pt: 'o direito ao voto', fa: 'حق رأی', pron: 'او جیرِیتو آو وُتو' },
        {
          pt: 'O voto é parte da cidadania e da democracia.',
          fa: 'رأی بخشی از شهروندی و دموکراسی است.',
          pron: 'سیدادانیا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'وجه شرطی (-ia): gostaria, poderia — برای آرزو و ادب.',
    'در دولت وارگاس حقوق کار پدید آمد.',
    'در دیکتاتوری نظامی حقوق بشر نقض شد؛ امروز برزیل دموکراسی است.',
    'حق رأی بخشی از شهروندی و دموکراسی است.',
  ],
  quiz: [
    {
      id: 'q-mafalda11-1',
      type: 'mcq',
      prompt: '«دوست داشتم کمک کنم» (مؤدبانه) کدام است؟',
      options: [
        'Eu gosto de ajudar',
        'Eu gostei de ajudar',
        'Eu gostaria de ajudar',
        'Eu vou gostar',
      ],
      answer: 'Eu gostaria de ajudar',
      explanationFa: 'وجه شرطی gostaria برای بیان مؤدبانه و آرزو.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda11-2',
      type: 'mcq',
      prompt: 'در دولت کدام رهبر بسیاری از حقوق کار در برزیل پدید آمد؟',
      options: ['Getúlio Vargas', 'Pedro I', 'Tiradentes', 'Dom João'],
      answer: 'Getúlio Vargas',
      explanationFa: 'در دولت وارگاس حقوق کار (مرخصی، ساعت کار) شکل گرفت.',
      cefr: 'B1',
      skill: 'reading',
    },
    {
      id: 'q-mafalda11-3',
      type: 'mcq',
      prompt: 'حق رأی در برزیل بخشی از چیست؟',
      options: ['ورزش', 'شهروندی و دموکراسی', 'مذهب', 'تجارت'],
      answer: 'شهروندی و دموکراسی',
      explanationFa: 'حق رأی بخش مهمی از شهروندی و دموکراسی است.',
      cefr: 'B1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 18,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۱۱. مطالب تاریخی آموزشی و بازتاب متن اصلی است. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
