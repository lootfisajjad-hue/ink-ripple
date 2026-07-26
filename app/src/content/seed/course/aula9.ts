import type { CourseLesson } from '@/domain/content/schema';

export const aula9: CourseLesson = {
  id: 'course-aula-9',
  order: 9,
  aula: 'Aula 9',
  titleFa: 'افعال ۳ — تمرین (باقاعده و بی‌قاعده)',
  titlePt: 'Verbos 3 — Prática (Regulares e Irregulares)',
  cefr: 'A2',
  summaryFa:
    'این درس یک درسِ تمرین‌محور است و بر پایهٔ درس‌های ۷ و ۸ ساخته شده است. ابتدا چند یادآوریِ کوتاه دربارهٔ پایانه‌های افعال باقاعده در سه زمان (حال، گذشتهٔ کامل و آینده) و شکل‌های چند فعل بی‌قاعدهٔ پرکاربرد (ser, ir, fazer, estar) می‌بینید، و سپس با یک آزمونِ پرحجم مهارت صرف افعال را تثبیت می‌کنید.',
  objectivesFa: [
    'پایانه‌های افعال باقاعدهٔ سه گروه (‎-ar, -er, -ir) را در زمان حال و گذشتهٔ کامل به‌یاد بیاورید.',
    'آیندهٔ محاوره‌ای با ir + مصدر را درست بسازید.',
    'شکل‌های بی‌قاعدهٔ افعال ser و ir در زمان حال و گذشته را تشخیص دهید.',
    'در جای خالی، فعلِ داخل پرانتز را با شخص و زمانِ درست صرف کنید.',
  ],
  sections: [
    {
      headingFa: '۱. یادآوری: افعال باقاعده در زمان حال',
      bodyFa:
        'افعال بر اساس پایانهٔ مصدر به سه گروه تقسیم می‌شوند: ‎-ar، ‎-er، ‎-ir. در زمان حال، ریشه (بخشِ پیش از پایانه) ثابت می‌ماند و فقط پایانه بر اساس شخص عوض می‌شود. برای falar: eu falo, você/ele/ela fala, nós falamos, eles/elas falam. برای comer: como, come, comemos, comem. برای partir: parto, parte, partimos, partem.',
      examples: [
        {
          pt: 'Eu acordo cedo durante a semana.',
          fa: 'من در طول هفته زود بیدار می‌شوم.',
          pron: 'اِئو آکُردو سِدو دورانتی آ سِمانا',
          note: 'acordar فعل گروه ‎-ar است؛ اول‌شخص مفرد پایانهٔ ‎-o می‌گیرد: acordo.',
        },
        {
          pt: 'Os seus tios comem arroz com feijão?',
          fa: 'عموها/دایی‌های تو برنج با لوبیا می‌خورند؟',
          pron: 'اوس سِئوس تیوس کُمِین آخوز کُن فِیجائو',
          note: 'سوم‌شخص جمع در گروه ‎-er پایانهٔ ‎-em می‌گیرد: comem.',
        },
        {
          pt: 'Nós partimos cedo de casa.',
          fa: 'ما زود از خانه راه می‌افتیم.',
          pron: 'نُس پارتیموس سِدو جی کازا',
          note: 'اول‌شخص جمع در گروه ‎-ir پایانهٔ ‎-imos می‌گیرد: partimos.',
        },
      ],
    },
    {
      headingFa: '۲. یادآوری: گذشتهٔ کامل (Pretérito Perfeito)',
      bodyFa:
        'گذشتهٔ کامل برای کارهایی است که در گذشته تمام شده‌اند («دیروز صحبت کردم»). پایانه‌های باقاعده: گروه ‎-ar → ei, ou, amos, aram (falei, falou, falamos, falaram)؛ گروه ‎-er → i, eu, emos, eram (comi, comeu, comemos, comeram)؛ گروه ‎-ir → i, iu, imos, iram (parti, partiu, partimos, partiram).',
      examples: [
        {
          pt: 'Ontem eu falei com ela.',
          fa: 'دیروز من با او صحبت کردم.',
          pron: 'اُنتِین اِئو فالِی کُن اِلا',
          note: 'اول‌شخص گروه ‎-ar در گذشته: falei.',
        },
        {
          pt: 'Rogério comeu frango assado.',
          fa: 'روژریو مرغ کبابی خورد.',
          pron: 'خوژریو کُمِئو فرانگو آسادو',
          note: 'سوم‌شخص گروه ‎-er در گذشته: comeu.',
        },
        {
          pt: 'Eu já tirei a minha Carteira de Trabalho.',
          fa: 'من قبلاً کارت کارم را گرفته‌ام.',
          pron: 'اِئو ژا تیرِی آ مینیا کارتِیرا جی ترابالیو',
          note: 'tirar (‎-ar) در اول‌شخص گذشته: tirei.',
        },
      ],
    },
    {
      headingFa: '۳. یادآوری: آیندهٔ محاوره‌ای (ir + مصدر)',
      bodyFa:
        'رایج‌ترین راه ساختن آینده در گفتار برزیلی، فعلِ ir در زمان حال + مصدرِ فعل اصلی است: eu vou, você/ele/ela vai, nós vamos, eles/elas vão. مثلاً «فردا می‌روم» = amanhã eu vou؛ «یک کامپیوتر خواهم خرید» = vou comprar um computador.',
      examples: [
        {
          pt: 'Amanhã eu vou à praia com os meus amigos.',
          fa: 'فردا با دوستانم به ساحل می‌روم.',
          pron: 'آمانیا اِئو وُ آ پرایا کُن اوس مِئوس آمیگوس',
          note: 'اینجا خودِ ir فعل اصلی است: vou (می‌روم).',
        },
        {
          pt: 'Domingo nós vamos fazer um grande almoço.',
          fa: 'یکشنبه یک ناهار بزرگ درست خواهیم کرد.',
          pron: 'دومینگو نُس واموس فازِر اون گرانجی آلمُسو',
          note: 'vamos + مصدر (fazer) = آیندهٔ اول‌شخص جمع.',
        },
        {
          pt: 'Quarta-feira ela vai comprar um computador novo.',
          fa: 'چهارشنبه او یک کامپیوتر نو خواهد خرید.',
          pron: 'کوارتا فِیرا اِلا وای کُمپرار اون کُمپوتادور نُوو',
          note: 'vai + مصدر (comprar) = آیندهٔ سوم‌شخص مفرد.',
        },
      ],
    },
    {
      headingFa: '۴. یادآوری: افعال بی‌قاعدهٔ کلیدی (ser, ir)',
      bodyFa:
        'دو فعل بی‌قاعدهٔ ser و ir را باید حفظ کنید. زمان حالِ ser: sou, é, somos, são. زمان حالِ ir: vou, vai, vamos, vão. نکتهٔ جالب: هر دو فعل در گذشتهٔ کامل شکلِ یکسان دارند: fui, foi, fomos, foram (معنا از جمله فهمیده می‌شود).',
      examples: [
        {
          pt: 'Meu nome é Carol.',
          fa: 'اسم من کارول است.',
          pron: 'مِئو نُمی اِ کارُل',
          note: 'ser سوم‌شخص مفرد در حال: é.',
        },
        {
          pt: 'Maria vai ao cinema.',
          fa: 'ماریا به سینما می‌رود.',
          pron: 'ماریا وای آئو سینِما',
          note: 'ir سوم‌شخص مفرد در حال: vai.',
        },
        {
          pt: 'Ontem eu fui ao parque.',
          fa: 'دیروز من به پارک رفتم.',
          pron: 'اُنتِین اِئو فوُی آئو پارکی',
          note: 'ir در گذشته: fui. همین شکل برای ser هم به‌کار می‌رود.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'حال باقاعده: ‎-ar → o/a/amos/am؛ ‎-er → o/e/emos/em؛ ‎-ir → o/e/imos/em.',
    'گذشتهٔ کامل: ‎-ar → ei/ou/amos/aram؛ ‎-er → i/eu/emos/eram؛ ‎-ir → i/iu/imos/iram.',
    'آیندهٔ محاوره‌ای = ir (vou/vai/vamos/vão) + مصدر.',
    'ser در حال: sou/é/somos/são؛ ir در حال: vou/vai/vamos/vão.',
    'ser و ir در گذشته یکسان‌اند: fui/foi/fomos/foram.',
  ],
  quiz: [
    {
      id: 'course-aula-9-q1',
      type: 'fill-blank',
      prompt: 'Ontem eu ___ (falar) com ela.',
      promptFa: 'فعل داخل پرانتز را در گذشتهٔ کامل و برای «eu» صرف کنید.',
      options: [],
      answer: 'falei',
      explanationFa:
        'گروه ‎-ar در گذشتهٔ کامل برای اول‌شخص مفرد پایانهٔ ‎-ei می‌گیرد: falar → falei.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q2',
      type: 'fill-blank',
      prompt: 'Eu ___ (acordar) cedo durante a semana.',
      promptFa: 'فعل را در زمان حال و برای «eu» صرف کنید.',
      options: [],
      answer: 'acordo',
      explanationFa:
        'در زمان حال، گروه ‎-ar برای «eu» پایانهٔ ‎-o می‌گیرد: acordar → acordo.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q3',
      type: 'fill-blank',
      prompt: 'Rogério ___ (comer) frango assado ontem.',
      promptFa: 'فعل را در گذشتهٔ کامل و برای سوم‌شخص مفرد صرف کنید.',
      options: [],
      answer: 'comeu',
      explanationFa:
        'گروه ‎-er در گذشتهٔ کامل برای سوم‌شخص مفرد پایانهٔ ‎-eu می‌گیرد: comer → comeu.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q4',
      type: 'fill-blank',
      prompt: 'Eu já ___ (tirar) a minha Carteira de Trabalho.',
      promptFa: 'فعل را در گذشتهٔ کامل و برای «eu» صرف کنید.',
      options: [],
      answer: 'tirei',
      explanationFa:
        'tirar فعل گروه ‎-ar است؛ اول‌شخص مفرد گذشته: tirei. کلمهٔ «já» (قبلاً) نشانهٔ کارِ تمام‌شده است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q5',
      type: 'fill-blank',
      prompt: 'Amanhã eu ___ (ir) à praia com os meus amigos.',
      promptFa:
        'فعل بی‌قاعدهٔ ir را در زمان حال و برای «eu» صرف کنید (آیندهٔ محاوره‌ای).',
      options: [],
      answer: 'vou',
      explanationFa:
        'ir در اول‌شخص مفردِ حال «vou» است و همراه با «amanhã» معنای آینده می‌دهد: «فردا می‌روم».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q6',
      type: 'mcq',
      prompt: 'Escolha a forma correta: Maria ___ ao cinema. (ir, presente)',
      promptFa: 'شکل درستِ فعل ir برای سوم‌شخص مفرد در زمان حال کدام است؟',
      options: ['vou', 'vai', 'vamos', 'vão'],
      answer: 'vai',
      explanationFa:
        'ir در زمان حال: vou / vai / vamos / vão. برای «Maria» (سوم‌شخص مفرد) شکل درست «vai» است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q7',
      type: 'mcq',
      prompt: 'Complete o diálogo: — Qual é o seu nome? — Meu nome ___ Carol.',
      promptFa: 'فعل ser را برای سوم‌شخص مفرد در زمان حال انتخاب کنید.',
      options: ['sou', 'é', 'está', 'são'],
      answer: 'é',
      explanationFa:
        'برای نام و هویت از ser استفاده می‌کنیم؛ سوم‌شخص مفردِ ser در حال «é» است: «Meu nome é Carol».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-9-q8',
      type: 'fill-blank',
      prompt:
        'Transforme para o pretérito perfeito: "Eu vou ao parque." → "Ontem eu ___ ao parque."',
      promptFa:
        'جملهٔ حال را به گذشته تبدیل کنید: شکل گذشتهٔ فعل ir برای «eu».',
      options: [],
      answer: 'fui',
      explanationFa:
        'ir در گذشتهٔ کامل بی‌قاعده است: fui / foi / fomos / foram. اول‌شخص مفرد «fui» می‌شود (همین شکل برای ser هم به‌کار می‌رود).',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 9.',
};
