import type { CourseLesson } from '@/domain/content/schema';

export const mafalda13: CourseLesson = {
  id: 'course-mafalda-13',
  order: 13,
  aula: 'Glossário',
  track: 'mafalda',
  pagesKey: 'mafalda13',
  titleFa: 'واژه‌نامه و پایان دوره — مرجع سه‌زبانه',
  titlePt: 'Glossário e encerramento — Português, Espanhol, Francês',
  cefr: 'A2',
  summaryFa:
    'این بخشِ پایانی و مرجعِ کتاب است: واژه‌نامهٔ سه‌زبانه (پرتغالی، اسپانیایی، فرانسوی) و صفحهٔ سازندگان دوره. واژه‌نامهٔ کامل به‌صورت تصویر در پایین همین درس آمده تا هر وقت لازم شد به آن مراجعه کنید. چند اصطلاح پرکاربرد دوره را هم اینجا مرور می‌کنیم.',
  objectivesFa: [
    'با ساختار واژه‌نامهٔ سه‌زبانهٔ کتاب آشنا شوید.',
    'اصطلاح‌های کلیدی و پرتکرار دوره را مرور کنید.',
    'برای مرجع، به تصاویر کامل واژه‌نامه در پایین درس مراجعه کنید.',
  ],
  sections: [
    {
      headingFa: '۱. اصطلاح‌های کلیدی دوره',
      bodyFa:
        'این واژه‌ها و مدارک در سراسر کتاب پرتکرار بودند و برای زندگی روزمره و اداری در برزیل حیاتی‌اند.',
      examples: [
        {
          pt: 'refúgio / refugiado(a)',
          fa: 'پناهندگی / پناهنده',
          pron: 'هِفوژیو / هِفوژیادو',
        },
        {
          pt: 'documento, formulário, protocolo',
          fa: 'مدرک، فرم، پروتکل (رسید موقت)',
          pron: 'دوکومِنتو، فُرمولاریو',
        },
        {
          pt: 'direito, dever, cidadania',
          fa: 'حق، وظیفه، شهروندی',
          pron: 'جیرِیتو، دِوِر، سیدادانیا',
        },
        {
          pt: 'gratuito, obrigatório',
          fa: 'رایگان، اجباری',
          pron: 'گراتویتو، اوبریگاتوریو',
        },
      ],
    },
    {
      headingFa: '۲. مدارک و نهادهای مهم (مرور)',
      bodyFa: 'خلاصهٔ مدارک و نهادهایی که در طول دوره دیدید.',
      examples: [
        {
          pt: 'CPF (Receita Federal)',
          fa: 'شمارهٔ مالیاتی فردی',
          pron: 'سِ‌پِ‌اِفی',
        },
        {
          pt: 'RNE (Polícia Federal)',
          fa: 'کارت شناسایی اتباع خارجی',
          pron: 'اِ‌رِ‌نِ‌اِ',
        },
        {
          pt: 'CTPS — Carteira de Trabalho',
          fa: 'دفترچهٔ کار',
          pron: 'کارتِیرا جی ترابالیو',
        },
        {
          pt: 'SUS (saúde) · SAMU 192 · Mulher 180',
          fa: 'سلامت رایگان · اورژانس ۱۹۲ · کمک به زنان ۱۸۰',
          pron: 'سوس، سامو',
        },
      ],
    },
    {
      headingFa: '۳. واژه‌نامهٔ سه‌زبانه (تصویری)',
      bodyFa:
        'کتاب یک واژه‌نامهٔ کامل به سه زبان پرتغالی، اسپانیایی و فرانسوی دارد. تصاویر این واژه‌نامه و صفحهٔ سازندگان دوره در پایین همین درس آمده است؛ برای پیداکردن معادلِ واژه‌ها به آن مراجعه کنید.',
      examples: [
        {
          pt: 'Glossário: Português | Espanhol | Francês',
          fa: 'واژه‌نامه: پرتغالی | اسپانیایی | فرانسوی',
          pron: 'گلوساریو',
        },
      ],
    },
  ],
  keyPointsFa: [
    'واژه‌نامهٔ کامل سه‌زبانه در تصاویر پایین درس است.',
    'مدارک کلیدی: CPF، RNE، CTPS.',
    'شماره‌های مهم: SUS، اورژانس ۱۹۲، کمک به زنان ۱۸۰.',
  ],
  quiz: [
    {
      id: 'q-mafalda13-1',
      type: 'mcq',
      prompt: 'واژه‌نامهٔ این کتاب به چه زبان‌هایی است؟',
      options: [
        'فقط پرتغالی',
        'پرتغالی، اسپانیایی، فرانسوی',
        'پرتغالی و انگلیسی',
        'پرتغالی و عربی',
      ],
      answer: 'پرتغالی، اسپانیایی، فرانسوی',
      explanationFa: 'واژه‌نامهٔ سه‌زبانه: پرتغالی/اسپانیایی/فرانسوی.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-mafalda13-2',
      type: 'mcq',
      prompt: '«gratuito» یعنی چه؟',
      options: ['اجباری', 'رایگان', 'گران', 'ممنوع'],
      answer: 'رایگان',
      explanationFa: 'gratuito = رایگان.',
      cefr: 'A2',
      skill: 'vocab',
    },
  ],
  estimatedMinutes: 10,
  sourceNoteFa:
    'بخش مرجعِ کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — واژه‌نامهٔ سه‌زبانه (پرتغالی/اسپانیایی/فرانسوی) و صفحهٔ سازندگان. تصاویر کامل در پایین درس آمده‌اند.',
};
