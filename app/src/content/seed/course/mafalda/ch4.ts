import type { CourseLesson } from '@/domain/content/schema';

export const mafalda4: CourseLesson = {
  id: 'course-mafalda-4',
  order: 4,
  aula: 'Capítulo 4',
  track: 'mafalda',
  pagesKey: 'mafalda4',
  titleFa: 'حقوق کودکان — ماه‌ها و روزها، خانواده، ساعت و برنامهٔ روزانه',
  titlePt: 'Direitos das Crianças — Meses e dias, Família, Horários e rotina',
  cefr: 'A1',
  summaryFa:
    'این فصل دربارهٔ حقوق کودکان است. ماه‌ها و روزهای هفته، نسبت‌های خانوادگی، ساعت و برنامهٔ روزانه را می‌آموزید. پیام کلیدی: کودکان و نوجوانان در برزیل حقوق ویژه دارند (اساسنامهٔ کودک و نوجوان — ECA).',
  objectivesFa: [
    'ماه‌ها و روزهای هفته را بگویید.',
    'نسبت‌های خانوادگی را نام ببرید.',
    'ساعت را بپرسید و بگویید و برنامهٔ روزانه‌تان را توصیف کنید.',
    'با حقوق کودکان در برزیل آشنا شوید.',
  ],
  sections: [
    {
      headingFa: '۱. ماه‌ها و روزها',
      bodyFa: 'روزهای هفته در برزیل از دوشنبه شروع می‌شود.',
      examples: [
        {
          pt: 'janeiro, fevereiro, março, abril…',
          fa: 'ژانویه، فوریه، مارس، آوریل…',
          pron: 'ژانِیرو، فِوِرِیرو',
        },
        {
          pt: 'segunda, terça, quarta, quinta, sexta',
          fa: 'دوشنبه تا جمعه',
          pron: 'سِگوندا، تِرسا، کوارتا',
        },
        { pt: 'sábado, domingo', fa: 'شنبه، یکشنبه', pron: 'سابادو، دومینگو' },
      ],
    },
    {
      headingFa: '۲. خانواده (Família)',
      bodyFa: 'نسبت‌های خانوادگی پایه.',
      examples: [
        {
          pt: 'pai, mãe, filho, filha',
          fa: 'پدر، مادر، پسر، دختر',
          pron: 'پای، مائی، فیلیو، فیلیا',
        },
        {
          pt: 'irmão, irmã, avô, avó',
          fa: 'برادر، خواهر، پدربزرگ، مادربزرگ',
          pron: 'ایرمائو، ایرما، آوُو، آوُ',
        },
        {
          pt: 'tio, tia, primo, prima',
          fa: 'عمو/دایی، عمه/خاله، پسرعمو، دخترعمو',
          pron: 'تیو، تیا، پریمو',
        },
      ],
    },
    {
      headingFa: '۳. ساعت و برنامهٔ روزانه (Que horas são?)',
      bodyFa:
        'برای پرسیدن ساعت: «Que horas são?». برای پاسخ: «São … horas» یا «É uma hora».',
      examples: [
        {
          pt: 'Que horas são? — São três horas.',
          fa: 'ساعت چند است؟ — ساعت سه است.',
          pron: 'کی اُراس سائو',
        },
        {
          pt: 'Eu acordo às seis e almoço ao meio-dia.',
          fa: 'ساعت شش بیدار می‌شوم و ظهر ناهار می‌خورم.',
          pron: 'آکُردو آس سِیس',
        },
        {
          pt: 'meia-noite, meio-dia',
          fa: 'نیمه‌شب، ظهر',
          pron: 'مِیا-نُیتی، مِیو-جیا',
        },
      ],
    },
    {
      headingFa: '۴. آیا می‌دانستید؟ — حقوق کودکان (ECA)',
      bodyFa:
        'در برزیل «اساسنامهٔ کودک و نوجوان» (ECA) از کودکان محافظت می‌کند. کودک و نوجوان حق زندگی، سلامت، آموزش، تفریح و حمایت در برابر هر نوع خشونت و بهره‌کشی را دارند.',
      examples: [
        {
          pt: '"A criança e o adolescente têm o direito de ser protegidos."',
          fa: '«کودک و نوجوان حق حمایت‌شدن دارند.»',
          pron: 'کریانسا ای آدولِسِنتی',
        },
        {
          pt: 'ECA = Estatuto da Criança e do Adolescente',
          fa: 'اساسنامهٔ کودک و نوجوان.',
          pron: 'اِکا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'هفتهٔ برزیلی از دوشنبه (segunda) شروع می‌شود.',
    'پرسیدن ساعت: «Que horas são?».',
    'کودکان در برزیل با قانون ECA حمایت می‌شوند.',
  ],
  quiz: [
    {
      id: 'q-mafalda4-1',
      type: 'mcq',
      prompt: '«segunda-feira» کدام روز است؟',
      options: ['یکشنبه', 'دوشنبه', 'شنبه', 'جمعه'],
      answer: 'دوشنبه',
      explanationFa: 'segunda-feira = دوشنبه (اولین روز کاری هفته).',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda4-2',
      type: 'mcq',
      prompt: '«ساعت چند است؟» به پرتغالی چه می‌شود؟',
      options: ['Quantos anos?', 'Que horas são?', 'Onde está?', 'Qual dia?'],
      answer: 'Que horas são?',
      explanationFa: 'Que horas são? = ساعت چند است؟',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-mafalda4-3',
      type: 'mcq',
      prompt: 'ECA در برزیل از چه کسانی محافظت می‌کند؟',
      options: ['سالمندان', 'کودکان و نوجوانان', 'کارگران', 'رانندگان'],
      answer: 'کودکان و نوجوانان',
      explanationFa: 'ECA = اساسنامهٔ کودک و نوجوان.',
      cefr: 'A1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۴. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
