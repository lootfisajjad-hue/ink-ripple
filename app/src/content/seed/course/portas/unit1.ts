import type { CourseLesson } from '@/domain/content/schema';

export const portas1: CourseLesson = {
  id: 'course-portas-1',
  order: 1,
  aula: 'Unidade 1',
  track: 'portas',
  pagesKey: 'portas1',
  titleFa: 'مقدمه — پرچم برزیل و اصطلاح‌های کلاس',
  titlePt: 'Introdução — Bandeira do Brasil e expressões de sala de aula',
  cefr: 'A1',
  summaryFa:
    'این نخستین درسِ کتاب «درهای باز» (Portas Abertas)، کتابِ آموزش پرتغالی برای مهاجران است. در این درس با معنای رنگ‌های پرچم برزیل، نام رنگ‌ها به پرتغالی، و مهم‌ترین دستورهایی که معلم در کلاس می‌گوید آشنا می‌شوید تا از همان روز اول بتوانید کلاس را دنبال کنید. صفحهٔ اصلِ کتاب هم در پایین درس به‌صورت تصویر آمده است.',
  objectivesFa: [
    'معنای نمادین چهار رنگ پرچم برزیل را بدانید.',
    'نام رنگ‌های اصلی را به پرتغالی بگویید.',
    'دستورهای رایج کلاس (بخوان، تکرار کن، بنویس…) را بفهمید و اجرا کنید.',
  ],
  sections: [
    {
      headingFa: '۱. پرچم برزیل و معنای رنگ‌ها',
      bodyFa:
        'پرچم برزیل چهار رنگ دارد و هر رنگ نماد چیزی است. کتاب با این پرسش شروع می‌کند: «رنگ‌های پرچم کشور شما چیست؟» و سپس معنای رنگ‌های برزیل را توضیح می‌دهد.',
      examples: [
        {
          pt: 'A cor branca significa o desejo pela paz.',
          fa: 'رنگ سفید نشانهٔ آرزوی صلح است.',
          pron: 'آ کُر برانکا سیگنیفیکا او دِزِژو پِلا پاز',
          note: 'branca = سفید',
        },
        {
          pt: 'O azul simboliza o céu e os rios brasileiros.',
          fa: 'آبی نماد آسمان و رودهای برزیل است.',
          pron: 'او آزول سیمبولیزا او سِئو ای اوس ریوس برازیلِیروس',
          note: 'azul = آبی',
        },
        {
          pt: 'O amarelo simboliza as riquezas do país.',
          fa: 'زرد نماد ثروت‌های کشور است.',
          pron: 'او آمارِلو سیمبولیزا آس ریکِزاس دو پاییس',
          note: 'amarelo = زرد',
        },
        {
          pt: 'O verde simboliza as matas das florestas brasileiras.',
          fa: 'سبز نماد جنگل‌های سرسبز برزیل است.',
          pron: 'او وِردی سیمبولیزا آس ماتاس داس فلورِستاس',
          note: 'verde = سبز',
        },
      ],
    },
    {
      headingFa: '۲. نام رنگ‌ها به پرتغالی (Cores)',
      bodyFa:
        'این رنگ‌ها را کتاب در همین صفحه فهرست می‌کند. آن‌ها را حفظ کنید؛ بعداً برای توصیف لباس، اشیا و مدارک لازمشان دارید.',
      examples: [
        { pt: 'preto', fa: 'سیاه', pron: 'پرِتو' },
        { pt: 'vermelho', fa: 'قرمز', pron: 'وِرمِلیو' },
        { pt: 'azul', fa: 'آبی', pron: 'آزول' },
        { pt: 'verde', fa: 'سبز', pron: 'وِردی' },
        { pt: 'amarelo', fa: 'زرد', pron: 'آمارِلو' },
        { pt: 'laranja', fa: 'نارنجی', pron: 'لارانژا' },
        { pt: 'vinho', fa: 'زرشکی (شرابی)', pron: 'وینیو' },
        { pt: 'branco', fa: 'سفید', pron: 'برانکو' },
      ],
    },
    {
      headingFa: '۳. در کلاس درس (Na sala de aula)',
      bodyFa:
        'معلم در طول کلاس این دستورها را زیاد به‌کار می‌برد. اگر آن‌ها را بشناسید، دنبال‌کردن کلاس خیلی ساده‌تر می‌شود. همه فعل امری («انجام بده») هستند.',
      examples: [
        { pt: 'Leia', fa: 'بخوان', pron: 'لِیا' },
        { pt: 'Observe', fa: 'نگاه کن / دقت کن', pron: 'اوبسِروی' },
        { pt: 'Repita', fa: 'تکرار کن', pron: ' رِپیتا' },
        { pt: 'Sublinhe', fa: 'زیرش خط بکش', pron: 'سوبلینیه' },
        { pt: 'Marque', fa: 'علامت بزن', pron: 'مارکی' },
        { pt: 'Escute', fa: 'گوش کن', pron: 'اِسکوتی' },
        { pt: 'Escreva', fa: 'بنویس', pron: 'اِسکرِوا' },
      ],
    },
  ],
  keyPointsFa: [
    'رنگ‌های پرچم برزیل: سبز (جنگل‌ها)، زرد (ثروت)، آبی (آسمان و رودها)، سفید (صلح).',
    'رنگ‌های پایه را حفظ کنید: preto, vermelho, azul, verde, amarelo, branco.',
    'دستورهای کلاس مثل Leia (بخوان)، Repita (تکرار کن) و Escreva (بنویس) را بشناسید.',
  ],
  quiz: [
    {
      id: 'q-portas1-1',
      type: 'mcq',
      prompt: 'رنگ «verde» در پرچم برزیل نماد چیست؟',
      options: ['صلح', 'جنگل‌ها', 'ثروت', 'آسمان'],
      answer: 'جنگل‌ها',
      explanationFa: 'verde (سبز) نماد جنگل‌های سرسبز برزیل است.',
      cefr: 'A1',
      skill: 'reading',
    },
    {
      id: 'q-portas1-2',
      type: 'mcq',
      prompt: '«amarelo» یعنی چه رنگی؟',
      options: ['قرمز', 'زرد', 'آبی', 'سفید'],
      answer: 'زرد',
      explanationFa: 'amarelo = زرد.',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-portas1-3',
      type: 'mcq',
      prompt: 'معلم می‌گوید «Repita». باید چه کار کنید؟',
      options: ['بنویسید', 'گوش کنید', 'تکرار کنید', 'زیرش خط بکشید'],
      answer: 'تکرار کنید',
      explanationFa: 'Repita یعنی «تکرار کن».',
      cefr: 'A1',
      skill: 'listening',
    },
  ],
  estimatedMinutes: 8,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» (مرکز زبان دانشگاه سائوپائولو USP و شهرداری سائوپائولو) — فصل ۱. تصویر صفحهٔ اصلی در پایین درس آمده است.',
};
