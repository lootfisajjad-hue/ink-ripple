/**
 * Structured lessons. Each lesson has an objective, an optional grammar note,
 * and inline exercises. Vocabulary and phrases are pulled at runtime by the
 * lesson's category tags (see src/infra/db/content.ts → lessonContent), so
 * lessons stay decoupled from individual content ids.
 *
 * The `categories` list on each lesson (via tags) tells the UI which vocab and
 * phrases to surface.
 */
import type { Lesson } from '@/domain/content/schema';

type LessonSeed = Omit<Lesson, 'exercises'> & {
  categories: string[];
  exercises: Lesson['exercises'];
};

const L = (l: LessonSeed): Lesson & { categories: string[] } => l;

export const lessons: Array<Lesson & { categories: string[] }> = [
  L({
    id: 'les-a1-greetings',
    slug: 'a1-greetings',
    title: 'سلام و احوال‌پرسی',
    titlePt: 'Cumprimentos',
    cefr: 'A1',
    track: 'a1',
    order: 1,
    objectiveFa: 'سلام‌ و احوال‌پرسی پایه و معرفی کوتاه خودتان را یاد بگیرید.',
    grammarNoteFa:
      'در پرتغالی برای «حال شما چطور است؟» می‌گوییم «Como você está?». پاسخ رایج: «Bem, obrigado/obrigada».',
    categories: ['greetings', 'introductions'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: ['dlg-mercado'],
    estimatedMinutes: 10,
    exercises: [
      {
        id: 'ex-greet-1',
        type: 'mcq',
        prompt: 'معنی «Bom dia» چیست؟',
        options: ['شب بخیر', 'صبح بخیر', 'خداحافظ', 'ممنون'],
        answer: 'صبح بخیر',
        explanationFa: '«Bom dia» یعنی صبح بخیر (تا حدود ظهر).',
        cefr: 'A1',
        skill: 'vocab',
      },
      {
        id: 'ex-greet-2',
        type: 'translate-fa-pt',
        prompt: '«ممنون» (از زبان یک زن) را به پرتغالی بگویید.',
        options: ['Obrigado', 'Obrigada', 'Por favor', 'De nada'],
        answer: 'Obrigada',
        explanationFa: 'زن‌ها «Obrigada» و مردها «Obrigado» می‌گویند.',
        cefr: 'A1',
        skill: 'vocab',
      },
      {
        id: 'ex-greet-3',
        type: 'listen-type',
        prompt: 'به صدا گوش کنید و انتخاب کنید چه شنیدید.',
        audioText: 'Boa noite',
        options: ['Boa noite', 'Bom dia', 'Boa tarde', 'Tudo bem'],
        answer: 'Boa noite',
        explanationFa: '«Boa noite» یعنی شب بخیر.',
        cefr: 'A1',
        skill: 'listening',
      },
    ],
  }),
  L({
    id: 'les-a1-numbers',
    slug: 'a1-numbers',
    title: 'اعداد و قیمت‌ها',
    titlePt: 'Números',
    cefr: 'A1',
    track: 'a1',
    order: 2,
    objectiveFa: 'شمارش تا ۲۰ و پرسیدن قیمت را تمرین کنید.',
    grammarNoteFa: 'برای پرسیدن قیمت: «Quanto é?» یا «Quanto custa?».',
    categories: ['numbers', 'money', 'shopping'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: ['dlg-padaria'],
    estimatedMinutes: 12,
    exercises: [
      {
        id: 'ex-num-1',
        type: 'mcq',
        prompt: 'عدد «cinco» چند است؟',
        options: ['۳', '۴', '۵', '۶'],
        answer: '۵',
        cefr: 'A1',
        skill: 'vocab',
      },
      {
        id: 'ex-num-2',
        type: 'translate-pt-fa',
        prompt: 'ترجمهٔ «Quanto é?» چیست؟',
        options: ['کجاست؟', 'چقدر می‌شود؟', 'چه ساعتی؟', 'چرا؟'],
        answer: 'چقدر می‌شود؟',
        cefr: 'A1',
        skill: 'reading',
      },
    ],
  }),
  L({
    id: 'les-a1-family',
    slug: 'a1-family',
    title: 'خانواده',
    titlePt: 'Família',
    cefr: 'A1',
    track: 'a1',
    order: 3,
    objectiveFa: 'اعضای خانواده را نام ببرید و خانوادهٔ خود را معرفی کنید.',
    grammarNoteFa:
      'ضمایر ملکی: «meu/minha» (مالِ من)، بسته به جنسیت اسم تغییر می‌کند.',
    categories: ['family'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: [],
    estimatedMinutes: 10,
    exercises: [
      {
        id: 'ex-fam-1',
        type: 'mcq',
        prompt: '«esposa» یعنی چه؟',
        options: ['شوهر', 'همسر (زن)', 'خواهر', 'مادر'],
        answer: 'همسر (زن)',
        cefr: 'A1',
        skill: 'vocab',
      },
    ],
  }),
  L({
    id: 'les-a1-food',
    slug: 'a1-food',
    title: 'غذا و رستوران',
    titlePt: 'Comida',
    cefr: 'A1',
    track: 'a1',
    order: 4,
    objectiveFa: 'سفارش غذا و نوشیدنی در رستوران را یاد بگیرید.',
    grammarNoteFa:
      'برای سفارش: «Eu quero...» یا مؤدبانه‌تر «Eu gostaria de...».',
    categories: ['food', 'drinks'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: ['dlg-padaria'],
    estimatedMinutes: 12,
    exercises: [
      {
        id: 'ex-food-1',
        type: 'translate-fa-pt',
        prompt: '«آب» به پرتغالی؟',
        options: ['leite', 'água', 'pão', 'café'],
        answer: 'água',
        cefr: 'A1',
        skill: 'vocab',
      },
    ],
  }),
  L({
    id: 'les-a2-past',
    slug: 'a2-past',
    title: 'گذشته: تعریف تجربه',
    titlePt: 'O passado',
    cefr: 'A2',
    track: 'a2',
    order: 1,
    objectiveFa: 'دربارهٔ کارهایی که انجام دادید با زمان گذشته صحبت کنید.',
    grammarNoteFa:
      'گذشتهٔ ساده (pretérito perfeito) برای افعال -ar: eu falei, você falou, nós falamos.',
    categories: ['verbs-basic'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: [],
    estimatedMinutes: 15,
    exercises: [
      {
        id: 'ex-past-1',
        type: 'fill-blank',
        prompt: 'Ontem eu ___ português. (falar)',
        options: ['falo', 'falei', 'falar', 'falava'],
        answer: 'falei',
        explanationFa: 'گذشتهٔ falar برای «eu» می‌شود «falei».',
        cefr: 'A2',
        skill: 'grammar',
      },
    ],
  }),
  L({
    id: 'les-a2-doctor',
    slug: 'a2-doctor',
    title: 'پزشک و بیمارستان',
    titlePt: 'No médico',
    cefr: 'A2',
    track: 'a2',
    order: 2,
    objectiveFa: 'علائم بیماری را توضیح دهید و نوبت بگیرید.',
    grammarNoteFa:
      '«Estou com...» برای بیان حال و درد: «Estou com febre» (تب دارم).',
    categories: ['health'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: ['dlg-farmacia'],
    estimatedMinutes: 15,
    exercises: [
      {
        id: 'ex-doc-1',
        type: 'translate-pt-fa',
        prompt: 'معنی «Estou com dor de cabeça» چیست؟',
        options: ['تب دارم', 'سردرد دارم', 'دل‌درد دارم', 'خسته‌ام'],
        answer: 'سردرد دارم',
        cefr: 'A2',
        skill: 'reading',
      },
    ],
  }),
  L({
    id: 'les-cit-intro',
    slug: 'cit-intro',
    title: 'معرفی شخصی برای مصاحبه',
    titlePt: 'Apresentação pessoal',
    cefr: 'A2',
    track: 'citizenship',
    order: 1,
    objectiveFa:
      'خود را برای مصاحبهٔ شهروندی معرفی کنید: نام، ملیت، محل و مدت اقامت.',
    grammarNoteFa:
      '«Moro no Brasil desde...» برای بیان از چه زمانی؛ «há [x] anos» برای مدت.',
    categories: ['introductions', 'admin-process'],
    vocabIds: [],
    phraseIds: [],
    dialogueIds: ['dlg-policia-federal'],
    estimatedMinutes: 15,
    exercises: [
      {
        id: 'ex-cit-1',
        type: 'order-words',
        prompt: 'جمله را مرتب کنید: «desde / no / Moro / Brasil / 2019»',
        options: [],
        answer: 'Moro no Brasil desde 2019',
        explanationFa: 'ترتیب درست: Moro no Brasil desde 2019.',
        cefr: 'A2',
        skill: 'writing',
      },
      {
        id: 'ex-cit-2',
        type: 'translate-fa-pt',
        prompt: '«می‌خواهم تابعیت بگیرم» را به پرتغالی بگویید.',
        options: [
          'Quero me naturalizar.',
          'Quero viajar.',
          'Quero estudar.',
          'Quero trabalhar.',
        ],
        answer: 'Quero me naturalizar.',
        cefr: 'A2',
        skill: 'vocab',
      },
    ],
  }),
];
