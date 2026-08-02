import type { CourseLesson } from '@/domain/content/schema';

export const mafalda6: CourseLesson = {
  id: 'course-mafalda-6',
  order: 6,
  aula: 'Capítulo 6',
  track: 'mafalda',
  pagesKey: 'mafalda6',
  titleFa: 'می‌خواهم کار کنم — مشاغل، حمل‌ونقل، ترکیب‌ها، رزومه و حق کار',
  titlePt:
    'Eu quero trabalhar — Profissões, Transportes, Contrações, Currículo',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ کار است. نام مشاغل و وسایل نقلیه، ترکیب حروف اضافه با حرف تعریف (do/da، no/na، pelo/pela)، ساختن رزومه و زمان گذشته را می‌آموزید. پیام کلیدی: پناهندگان حق دفترچهٔ کار (CTPS) و کار قانونی با همان حقوق کارگران برزیلی را دارند.',
  objectivesFa: [
    'نام مشاغل و وسایل نقلیه را بگویید.',
    'ترکیب‌های حرف اضافه + حرف تعریف را به‌کار ببرید.',
    'یک رزومهٔ ساده بسازید.',
    'حق کار پناهندگان و دفترچهٔ کار (CTPS) را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. مشاغل (Profissões)',
      bodyFa: 'نام مشاغل رایج (مذکر/مؤنث).',
      examples: [
        {
          pt: 'professor/a, médico/a, cozinheiro/a',
          fa: 'معلم، پزشک، آشپز',
          pron: 'پروفِسور، مِجیکو، کوزینیِیرو',
        },
        {
          pt: 'pedreiro/a, motorista, costureiro/a',
          fa: 'بنّا، راننده، خیاط',
          pron: 'پِدرِیرو، موتوریستا',
        },
      ],
    },
    {
      headingFa: '۲. حمل‌ونقل (Transportes)',
      bodyFa: 'وسایل نقلیه؛ با «de» می‌آیند (پیاده = a pé).',
      examples: [
        {
          pt: 'ônibus, metrô, trem, carro, bicicleta',
          fa: 'اتوبوس، مترو، قطار، ماشین، دوچرخه',
          pron: 'اُنیبوس، مِترو، ترِین',
        },
        {
          pt: 'Eu vou de metrô. / Eu vou a pé.',
          fa: 'با مترو می‌روم / پیاده می‌روم.',
          pron: 'وُو جی مِترو',
        },
      ],
    },
    {
      headingFa: '۳. ترکیب‌ها (Contrações)',
      bodyFa:
        'حرف اضافه با حرف تعریف ادغام می‌شود: de+o=do، de+a=da؛ em+o=no، em+a=na؛ por+o=pelo، por+a=pela.',
      examples: [
        {
          pt: 'Eu sou do Haiti. / da Síria.',
          fa: 'اهل هائیتی/سوریه‌ام.',
          pron: 'دو / دا',
          note: 'de + o/a',
        },
        {
          pt: 'Eu moro no centro. / na rua Augusta.',
          fa: 'در مرکز/خیابان آگوستا زندگی می‌کنم.',
          pron: 'نو / نا',
          note: 'em + o/a',
        },
        {
          pt: 'Passo pelo parque. / pela praça.',
          fa: 'از پارک/میدان می‌گذرم.',
          pron: 'پِلو / پِلا',
          note: 'por + o/a',
        },
      ],
    },
    {
      headingFa: '۴. رزومه و گذشته (Currículo)',
      bodyFa: 'رزومه با مشخصات فردی و سپس تجربهٔ کاری (به گذشته) می‌آید.',
      examples: [
        {
          pt: 'Eu trabalhei como cozinheiro por dois anos.',
          fa: 'دو سال به‌عنوان آشپز کار کردم.',
          pron: 'ترابالیِی کُمو',
        },
        {
          pt: 'dados pessoais, experiência, formação',
          fa: 'مشخصات فردی، تجربه، تحصیلات',
          pron: 'دادوس پِسوایس',
        },
      ],
    },
    {
      headingFa: '۵. آیا می‌دانستید؟ — حق کار',
      bodyFa:
        'پناهندگان و متقاضیان پناهندگی حق دفترچهٔ کار (CTPS) را دارند و می‌توانند به‌صورت قانونی و رسمی کار کنند، با همان حقوقی که هر کارگر برزیلی دارد.',
      examples: [
        {
          pt: 'Refugiados têm direito à Carteira de Trabalho (CTPS).',
          fa: 'پناهندگان حق دفترچهٔ کار (CTPS) دارند.',
          pron: 'کارتِیرا جی ترابالیو',
        },
        {
          pt: 'Podem trabalhar com os mesmos direitos.',
          fa: 'می‌توانند با همان حقوق کارگران کار کنند.',
          pron: 'اوس مِزموس جیرِیتوس',
        },
      ],
    },
  ],
  keyPointsFa: [
    'ترکیب‌ها: do/da، no/na، pelo/pela.',
    'وسیله با de (Eu vou de metrô)؛ پیاده = a pé.',
    'رزومه: مشخصات فردی + تجربه + تحصیلات.',
    'پناهندگان حق CTPS و کار قانونی با حقوق برابر دارند.',
  ],
  quiz: [
    {
      id: 'q-mafalda6-1',
      type: 'mcq',
      prompt: '«em + a» چه می‌شود؟',
      options: ['no', 'na', 'do', 'pela'],
      answer: 'na',
      explanationFa: 'em + a = na.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda6-2',
      type: 'mcq',
      prompt: 'دفترچهٔ کار در برزیل چه نام دارد؟',
      options: ['CPF', 'RNE', 'CTPS', 'SUS'],
      answer: 'CTPS',
      explanationFa: 'CTPS = Carteira de Trabalho e Previdência Social.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-mafalda6-3',
      type: 'mcq',
      prompt: 'آیا پناهنده حق کار قانونی در برزیل دارد؟',
      options: [
        'نه',
        'بله، با همان حقوق کارگران برزیلی',
        'فقط کار موقت',
        'فقط با اجازهٔ ویژه',
      ],
      answer: 'بله، با همان حقوق کارگران برزیلی',
      explanationFa: 'پناهندگان با CTPS و حقوق برابر می‌توانند کار کنند.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda) — فصل ۶. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
