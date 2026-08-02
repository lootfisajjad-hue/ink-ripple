import type { CourseLesson } from '@/domain/content/schema';

export const portas8: CourseLesson = {
  id: 'course-portas-8',
  order: 8,
  aula: 'Unidade 8',
  track: 'portas',
  pagesKey: 'portas8',
  titleFa: 'خانواده! — خویشاوندی، ضمایر ملکی، روابط و حق آموزش',
  titlePt:
    'Família! — Parentescos, Pronomes Possessivos, Relacionamentos, Direito à Educação',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ خانواده و روابط اجتماعی است: نام نسبت‌های خویشاوندی، درخت خانواده، ضمایر ملکی به‌صورت کامل، انواع رابطه (دوستی، نامزدی، ازدواج) و اصطلاح برزیلی «ficar»، و در پایان «حق آموزش» که طبق قانون اساسی برزیل حق همه — از جمله همهٔ مهاجران — است، همراه با راه‌های ادامهٔ تحصیل (EJA، دانشگاه، ENEM) و مرکز CRAI.',
  objectivesFa: [
    'نسبت‌های خویشاوندی را نام ببرید و دربارهٔ خانواده‌تان صحبت کنید.',
    'ضمایر ملکی را کامل بشناسید و درست به‌کار ببرید.',
    'انواع رابطه و اصطلاح «ficar» را بفهمید.',
    'بدانید آموزش حق همهٔ مهاجران است و راه‌های ادامهٔ تحصیل را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. خویشاوندی (Parentescos)',
      bodyFa:
        'نسبت‌های خانوادگی را حفظ کنید؛ در معرفی خانواده و در فرم‌ها لازمشان دارید.',
      examples: [
        {
          pt: 'o pai, a mãe, o filho, a filha',
          fa: 'پدر، مادر، پسر، دختر',
          pron: 'پای، مائی، فیلیو، فیلیا',
        },
        { pt: 'o irmão, a irmã', fa: 'برادر، خواهر', pron: 'ایرمائو، ایرما' },
        {
          pt: 'o avô, a avó, o neto, a neta',
          fa: 'پدربزرگ، مادربزرگ، نوهٔ پسر، نوهٔ دختر',
          pron: 'آوُو، آوُ، نِتو، نِتا',
        },
        {
          pt: 'o tio, a tia, o primo, a prima',
          fa: 'عمو/دایی، عمه/خاله، پسرعمو، دخترعمو',
          pron: 'تیو، تیا، پریمو، پریما',
        },
        {
          pt: 'o sogro, a sogra, o cunhado, a cunhada',
          fa: 'پدرشوهر/زن، مادرشوهر/زن، برادرشوهر/زن، خواهرشوهر/زن',
          pron: 'سُگرو، سُگرا، کونیادو',
        },
      ],
    },
    {
      headingFa: '۲. ضمایر ملکی (Pronomes possessivos)',
      bodyFa:
        'ضمیر ملکی با «چیزِ مالِ من» از نظر جنسیت و شمار هماهنگ می‌شود، نه با صاحب آن. یعنی minha casa (خانه مؤنث) اما meu carro (ماشین مذکر).',
      examples: [
        {
          pt: 'meu(s) / minha(s) — مالِ من',
          fa: 'meu carro (ماشینم)، minha casa (خانه‌ام)',
          pron: 'مِئو / مینیا',
        },
        {
          pt: 'teu(s) / tua(s) — مالِ تو',
          fa: 'teu nome (اسمت)',
          pron: 'تِئو / توآ',
        },
        {
          pt: 'seu(s) / sua(s) — مالِ او/شما',
          fa: 'seu documento (مدرکت)',
          pron: 'سِئو / سوآ',
        },
        {
          pt: 'nosso(s) / nossa(s) — مالِ ما',
          fa: 'nosso carro (ماشین ما)، nossa ajuda (کمک ما)',
          pron: 'نُسو / نُسا',
        },
        {
          pt: 'dele / dela — مالِ او (برای رفع ابهام)',
          fa: 'o celular dele (موبایلِ او-مرد)، a senha dela (رمزِ او-زن)',
          pron: 'دِلی / دِلا',
        },
      ],
    },
    {
      headingFa: '۳. انواع رابطه (Relacionamentos)',
      bodyFa:
        'مراحل رابطه در برزیل: «ficar» (با‌هم‌بودنِ بی‌تعهد و کوتاه)، «namorar» (دوست‌داشتن/نامزدی)، «noivar» (نامزد رسمی)، «casar» (ازدواج). اصطلاح «ficar» خاص فرهنگ برزیل است.',
      examples: [
        {
          pt: 'ficar com alguém',
          fa: 'با کسی بودن (رابطهٔ کوتاه و بی‌تعهد)',
          pron: 'فیکار کُن آلگِین',
        },
        {
          pt: 'namorar / o namorado, a namorada',
          fa: 'دوست‌بودن / دوست‌پسر، دوست‌دختر',
          pron: 'نامورار',
        },
        {
          pt: 'casar / o casamento',
          fa: 'ازدواج کردن / عروسی',
          pron: 'کازار / کازامِنتو',
        },
        {
          pt: 'solteiro/a, casado/a, divorciado/a, viúvo/a',
          fa: 'مجرد، متأهل، طلاق‌گرفته، بیوه',
          pron: 'سُلتِیرو، کازادو',
        },
      ],
    },
    {
      headingFa: '۴. حق آموزش (Direito à Educação)',
      bodyFa:
        'قانون اساسی برزیل (اصل ۲۰۵) می‌گوید: «آموزش حق همه و وظیفهٔ دولت و خانواده است.» طبق قانون شهرداری سائوپائولو، همهٔ مهاجران — کودک، نوجوان و بزرگسال، فارغ از وضعیت اقامت — حق تحصیل در مدارس دولتی دارند. برای بزرگسالانی که تحصیلشان ناتمام مانده، دورهٔ EJA هست؛ برای دانشگاه، آزمون ENEM و سهمیهٔ ویژهٔ پناهندگان.',
      examples: [
        {
          pt: '"A educação é direito de todos e dever do Estado." (Art. 205)',
          fa: '«آموزش حق همه و وظیفهٔ دولت است.» (اصل ۲۰۵ قانون اساسی)',
          pron: 'ادوکاسائو اِ جیرِیتو جی تُدوس',
        },
        {
          pt: 'EJA = Educação de Jovens e Adultos',
          fa: 'آموزش جوانان و بزرگسالان؛ برای تکمیل تحصیلات ناتمام.',
          pron: 'اِژا',
        },
        {
          pt: 'ENEM e vestibular para entrar na universidade.',
          fa: 'آزمون ENEM و کنکور برای ورود به دانشگاه.',
          pron: 'اِنِن، وِستیبولار',
          note: 'با مدارک بازبینی‌شده',
        },
        {
          pt: 'CRAI — informações sobre todos os direitos, em várias línguas.',
          fa: 'مرکز CRAI؛ اطلاعات همهٔ حقوق مهاجران به چند زبان.',
          pron: 'کرای',
        },
      ],
    },
  ],
  keyPointsFa: [
    'ضمیر ملکی با «چیز» هماهنگ می‌شود نه با صاحب: minha casa، meu carro.',
    'برای رفع ابهامِ «مالِ او»، از dele (مرد) / dela (زن) استفاده کنید.',
    '«ficar» = رابطهٔ کوتاه و بی‌تعهد؛ namorar = دوستی؛ casar = ازدواج.',
    'آموزش حق همهٔ مهاجران است (اصل ۲۰۵)؛ بزرگسالان: EJA؛ دانشگاه: ENEM.',
  ],
  quiz: [
    {
      id: 'q-portas8-1',
      type: 'mcq',
      prompt: '«خانهٔ من» به پرتغالی چه می‌شود؟ (casa مؤنث است)',
      options: ['meu casa', 'minha casa', 'meus casa', 'nosso casa'],
      answer: 'minha casa',
      explanationFa: 'ضمیر ملکی با «چیز» هماهنگ می‌شود؛ casa مؤنث → minha.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-portas8-2',
      type: 'mcq',
      prompt: '«cunhada» یعنی چه نسبتی؟',
      options: ['مادربزرگ', 'خواهرشوهر/خواهرزن', 'دخترعمو', 'عمه'],
      answer: 'خواهرشوهر/خواهرزن',
      explanationFa: 'cunhada = خواهرِ همسر یا همسرِ برادر.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'q-portas8-3',
      type: 'mcq',
      prompt: 'آیا کودک مهاجرِ بدون مدرک اقامت حق تحصیل در مدرسهٔ دولتی دارد؟',
      options: [
        'نه',
        'بله، آموزش حق همهٔ مهاجران است',
        'فقط با پرداخت شهریه',
        'فقط تا کلاس پنجم',
      ],
      answer: 'بله، آموزش حق همهٔ مهاجران است',
      explanationFa:
        'طبق قانون، همهٔ مهاجران فارغ از وضعیت اقامت حق تحصیل دارند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas8-4',
      type: 'mcq',
      prompt: 'بزرگسالی که تحصیلش ناتمام مانده، از کدام دوره استفاده می‌کند؟',
      options: ['ENEM', 'EJA', 'SUS', 'CLT'],
      answer: 'EJA',
      explanationFa: 'EJA = آموزش جوانان و بزرگسالان، برای تکمیل تحصیلات.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۸ (Família!)، شامل «حق آموزش» (اصل ۲۰۵ قانون اساسی و قانون شهرداری سائوپائولو). اطلاعات آموزشی است؛ برای مراحل به CRAI مراجعه کنید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
