import type { CourseLesson } from '@/domain/content/schema';

export const portas10: CourseLesson = {
  id: 'course-portas-10',
  order: 10,
  aula: 'Anexo',
  track: 'portas',
  pagesKey: 'portas10',
  titleFa: 'ضمیمه — جدول صرف افعال و مرجع دستوری',
  titlePt: 'Anexos — Tabela de Conjugação de Verbos',
  cefr: 'B1',
  summaryFa:
    'این ضمیمهٔ مرجعِ کتاب است: جدول کامل صرف افعال. سه گروه فعل پرتغالی (-ar، -er، -ir) و مهم‌ترین افعال بی‌قاعده را در زمان‌هایی که در درس‌ها یاد گرفتید مرور می‌کنید. جدول‌های کامل به‌صورت تصویر در پایین همین صفحه آمده‌اند تا هر وقت لازم شد به آن‌ها مراجعه کنید. در تصاویر، صفحهٔ سپاسگزاری و نویسندگان کتاب هم هست.',
  objectivesFa: [
    'سه گروه صرف فعل (-ar, -er, -ir) را بشناسید.',
    'الگوی زمان‌های حال، گذشتهٔ ساده و گذشتهٔ استمراری را مرور کنید.',
    'مهم‌ترین افعال بی‌قاعده (ser, estar, ter, ir, fazer, vir) را به یاد بسپارید.',
    'برای مرجع، به جدول‌های کامل تصویری در پایین درس مراجعه کنید.',
  ],
  sections: [
    {
      headingFa: '۱. سه گروه فعل و زمان حال',
      bodyFa:
        'همهٔ افعال باقاعده به یکی از سه گروه تعلق دارند: -ar (falar)، -er (comer)، -ir (abrir). ریشه ثابت می‌ماند و پایانه بر اساس فاعل و زمان عوض می‌شود. زمان حال (اول‌شخص): falo، como، abro.',
      examples: [
        {
          pt: 'falar: eu falo, você fala, nós falamos, vocês falam',
          fa: 'صحبت کردن (گروه -ar)',
          pron: 'فالو، فالا، فالاموس، فالام',
        },
        {
          pt: 'comer: eu como, você come, nós comemos, vocês comem',
          fa: 'خوردن (گروه -er)',
          pron: 'کُمو، کُمی، کُمِموس',
        },
        {
          pt: 'abrir: eu abro, você abre, nós abrimos, vocês abrem',
          fa: 'باز کردن (گروه -ir)',
          pron: 'آبرو، آبری، آبریموس',
        },
      ],
    },
    {
      headingFa: '۲. دو زمان گذشته (مرور)',
      bodyFa:
        'گذشتهٔ ساده (Perfeito) برای رویداد یک‌باره، گذشتهٔ استمراری (Imperfeito) برای عادت گذشته. الگوی اول‌شخص را به یاد بسپارید.',
      examples: [
        {
          pt: 'Perfeito: falei / comi / abri',
          fa: 'گذشتهٔ ساده: گفتم / خوردم / باز کردم',
          pron: 'فالِی / کُمی / آبری',
          note: '-ar→-ei، -er/-ir→-i',
        },
        {
          pt: 'Imperfeito: falava / comia / abria',
          fa: 'گذشتهٔ استمراری: می‌گفتم / می‌خوردم / باز می‌کردم',
          pron: 'فالاوا / کُمیا / آبریا',
          note: '-ar→-ava، -er/-ir→-ia',
        },
      ],
    },
    {
      headingFa: '۳. افعال بی‌قاعدهٔ پرکاربرد',
      bodyFa:
        'این افعال بی‌قاعده‌اند و باید حفظ شوند چون خیلی زیاد استفاده می‌شوند. (حال / گذشتهٔ ساده اول‌شخص)',
      examples: [
        {
          pt: 'ser: eu sou / eu fui',
          fa: 'بودن (ثابت): هستم / بودم',
          pron: 'سُو / فویی',
        },
        {
          pt: 'estar: eu estou / eu estive',
          fa: 'بودن (موقتی): هستم / بودم',
          pron: 'اِستُو / اِستیوی',
        },
        {
          pt: 'ter: eu tenho / eu tive',
          fa: 'داشتن: دارم / داشتم',
          pron: 'تِنیو / تیوی',
        },
        {
          pt: 'ir: eu vou / eu fui',
          fa: 'رفتن: می‌روم / رفتم',
          pron: 'وُو / فویی',
        },
        {
          pt: 'fazer: eu faço / eu fiz',
          fa: 'انجام دادن: می‌کنم / کردم',
          pron: 'فاسو / فیز',
        },
        {
          pt: 'vir: eu venho / eu vim',
          fa: 'آمدن: می‌آیم / آمدم',
          pron: 'وِنیو / ویم',
        },
      ],
    },
  ],
  keyPointsFa: [
    'سه گروه: -ar (falar)، -er (comer)، -ir (abrir).',
    'گذشتهٔ ساده = یک‌باره (falei)؛ گذشتهٔ استمراری = عادت (falava).',
    'افعال بی‌قاعدهٔ کلیدی: ser, estar, ter, ir, fazer, vir را حفظ کنید.',
    'جدول‌های کامل صرف در تصاویر پایین این درس آمده‌اند.',
  ],
  quiz: [
    {
      id: 'q-portas10-1',
      type: 'mcq',
      prompt: 'فعل «comer» به کدام گروه صرف تعلق دارد؟',
      options: ['گروه -ar', 'گروه -er', 'گروه -ir', 'بی‌قاعده'],
      answer: 'گروه -er',
      explanationFa: 'comer به -er ختم می‌شود → گروه دوم.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'q-portas10-2',
      type: 'mcq',
      prompt: 'گذشتهٔ سادهٔ اول‌شخصِ «falar» چیست؟',
      options: ['falo', 'falei', 'falava', 'falarei'],
      answer: 'falei',
      explanationFa: 'در گذشتهٔ ساده، -ar به -ei تبدیل می‌شود: falei.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'q-portas10-3',
      type: 'mcq',
      prompt: 'گذشتهٔ سادهٔ اول‌شخصِ «fazer» (بی‌قاعده) چیست؟',
      options: ['fazi', 'fez', 'fiz', 'fazia'],
      answer: 'fiz',
      explanationFa: 'fazer بی‌قاعده است: eu fiz.',
      cefr: 'B1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 10,
  sourceNoteFa:
    'ضمیمهٔ مرجعِ کتاب «Portas Abertas: Português para Imigrantes» — جدول کامل صرف افعال (به‌صورت تصویر) و صفحهٔ نویسندگان و همکاران. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
