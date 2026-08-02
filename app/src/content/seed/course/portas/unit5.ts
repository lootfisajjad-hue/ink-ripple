import type { CourseLesson } from '@/domain/content/schema';

export const portas5: CourseLesson = {
  id: 'course-portas-5',
  order: 5,
  aula: 'Unidade 5',
  track: 'portas',
  pagesKey: 'portas5',
  titleFa: 'حالا چطور برسم؟ — حمل‌ونقل، آینده، فعل‌های رفتن/آمدن و حق حمل‌ونقل',
  titlePt:
    'Como eu chego? — Transporte, Futuro, IR e VIR, Direito ao Transporte',
  cefr: 'A2',
  summaryFa:
    'در این فصل یاد می‌گیرید در شهر جابه‌جا شوید: نام وسایل نقلیه، پرسیدن آدرس و مسیر مترو/اتوبوس در سائوپائولو، زمان آینده (با فعل «رفتن» + مصدر)، تفاوت دو فعل IR (رفتن به…) و VIR (آمدن از…)، و «حق حمل‌ونقل» شامل بلیت واحد (Bilhete Único) و قانون رانندگی خارجی‌ها در برزیل.',
  objectivesFa: [
    'محله‌ها و مکان‌های شهر و وسایل نقلیه را نام ببرید.',
    'مؤدبانه آدرس و مسیر بپرسید و راهنمایی کنید.',
    'زمان آینده را با «vou + مصدر» بسازید.',
    'تفاوت IR (رفتن به) و VIR (آمدن از) را به‌کار ببرید.',
    'انواع بلیت واحد و قانون گواهی‌نامهٔ رانندگی خارجی را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. محله و مکان (Localização)',
      bodyFa:
        'شهر سائوپائولو به مناطق شمال، جنوب، شرق، غرب و مرکز تقسیم می‌شود. برای گفتن «کجا قرار دارد» از فعل ficar استفاده کنید و برای «چه چیزی نزدیک است» از ter (وجود دارد).',
      examples: [
        {
          pt: 'Meu bairro fica na zona norte / no centro.',
          fa: 'محلهٔ من در منطقهٔ شمال/مرکز است.',
          pron: 'فیکا نا زُنا نُرتی',
        },
        {
          pt: 'Perto da minha casa tem uma padaria e um banco.',
          fa: 'نزدیک خانه‌ام نانوایی و بانک هست.',
          pron: 'تِین اوما پاداریا',
        },
        {
          pt: 'Tem uma estação de metrô perto?',
          fa: 'ایستگاه مترو نزدیک هست؟',
          pron: 'اِستاسائو جی مِترو',
        },
      ],
    },
    {
      headingFa: '۲. وسایل نقلیه (Meios de transporte)',
      bodyFa:
        'برای گفتن «با چه وسیله‌ای می‌روم» از «Eu vou de…» استفاده کنید (استثنا: پیاده = a pé).',
      examples: [
        {
          pt: 'ônibus / metrô / trem',
          fa: 'اتوبوس / مترو / قطار',
          pron: 'اُنیبوس / مِترو / ترِین',
        },
        {
          pt: 'carro / moto / bicicleta',
          fa: 'ماشین / موتور / دوچرخه',
          pron: 'کارو / مُتو / بیسیکلِتا',
        },
        {
          pt: 'avião / navio / táxi / van',
          fa: 'هواپیما / کشتی / تاکسی / ون',
          pron: 'آویائو / ناویو / تاکسی',
        },
        {
          pt: 'Para o trabalho, eu vou de ônibus.',
          fa: 'برای کار، با اتوبوس می‌روم.',
          pron: 'اِئو وُو جی اُنیبوس',
        },
      ],
    },
    {
      headingFa: '۳. پرسیدن مسیر و رابط‌ها',
      bodyFa:
        'برای مسیر مترو از «pegar a linha» (سوار خط شدن)، «descer na estação» (پیاده شدن در ایستگاه) و «fazer baldeação» (تعویض خط) استفاده کنید. رابط‌ها: mas (اما)، porque (چون)، então (پس).',
      examples: [
        {
          pt: 'Oi, você pode me dar uma informação?',
          fa: 'سلام، می‌توانید راهنمایی‌ام کنید؟',
          pron: 'وُسه پُدی می دار',
        },
        {
          pt: 'Você tem que pegar a Linha Azul e descer na Sé.',
          fa: 'باید سوار خط آبی شوی و در ایستگاه «سه» پیاده شوی.',
          pron: 'پِگار آ لینیا آزول',
        },
        {
          pt: 'Eu tenho que fazer baldeação? — Não, é direto.',
          fa: 'باید خط عوض کنم؟ — نه، مستقیم است.',
          pron: 'فازِر بالدِآسائو',
        },
        {
          pt: 'Eu fui ao parque porque queria natureza.',
          fa: 'به پارک رفتم چون طبیعت می‌خواستم.',
          pron: 'پورکی',
        },
      ],
    },
    {
      headingFa: '۴. زمان آینده (Futuro)',
      bodyFa:
        'ساده‌ترین آینده در پرتغالی برزیلی: فعل «ir» در زمان حال + مصدر. صرف ir: eu vou / você vai / nós vamos / vocês vão.',
      examples: [
        {
          pt: 'Eu vou jantar depois da aula.',
          fa: 'بعد از کلاس شام می‌خورم.',
          pron: 'اِئو وُو ژانتار',
          note: 'vou + مصدر',
        },
        {
          pt: 'No fim de semana, eu vou sair com amigas.',
          fa: 'آخر هفته با دوستان بیرون می‌روم.',
          pron: 'وُو سایر',
        },
        {
          pt: 'Nós vamos conhecer um bairro novo.',
          fa: 'می‌رویم یک محلهٔ جدید را ببینیم.',
          pron: 'نوس واموس کُنیِسِر',
        },
      ],
    },
    {
      headingFa: '۵. رفتن و آمدن (IR e VIR)',
      bodyFa:
        'IR = رفتن «به» جایی (vou para o trabalho). VIR = آمدن «از» جایی (venho de casa). این دو را با هم اشتباه نکنید.',
      examples: [
        {
          pt: 'Eu vou para o trabalho.',
          fa: 'به سرِ کار می‌روم.',
          pron: 'وُو پارا او ترابالیو',
          note: 'IR + para',
        },
        {
          pt: 'Eu venho de casa.',
          fa: 'از خانه می‌آیم.',
          pron: 'وِنیو جی کازا',
          note: 'VIR + de',
        },
        {
          pt: 'Nós viemos de São Paulo.',
          fa: 'ما از سائوپائولو می‌آییم/آمدیم.',
          pron: 'نوس ویِموس',
        },
      ],
    },
    {
      headingFa: '۶. حق حمل‌ونقل (Direito ao transporte)',
      bodyFa:
        'برای جابه‌جایی ارزان‌تر، بلیت واحد بگیرید؛ برای رانندگی، قانون گواهی‌نامهٔ خارجی را بدانید. (اطلاعات آموزشی؛ برای مراحل روز به سایت رسمی مراجعه کنید.)',
      examples: [
        {
          pt: 'Bilhete Único da SPTrans',
          fa: 'بلیت واحد سائوپائولو؛ ارزان‌تر از پرداخت تک‌تک است.',
          pron: 'بیلیِتی اونیکو',
          note: 'انواع: عادی، سالمند، دانشجو، مادر',
        },
        {
          pt: 'Migrante habilitado pode dirigir por 180 dias.',
          fa: 'مهاجرِ دارای گواهی‌نامهٔ کشورش تا ۱۸۰ روز می‌تواند رانندگی کند.',
          pron: 'اِبیلیتادو',
          note: 'از تاریخ ورود',
        },
        {
          pt: 'Depois disso, trocar pela CNH de Estrangeiro (Detran).',
          fa: 'پس از آن باید گواهی‌نامه را با «CNH خارجی» عوض کند (Detran).',
          pron: 'سِ‌اِنه‌آگا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'آینده = «vou + مصدر» (Eu vou jantar).',
    'IR + para (رفتن به)؛ VIR + de (آمدن از).',
    'مسیر مترو: pegar a linha، descer na estação، fazer baldeação (تعویض خط).',
    'رانندگی خارجی: تا ۱۸۰ روز با گواهی کشور خود، بعد تعویض با CNH خارجی در Detran.',
  ],
  quiz: [
    {
      id: 'q-portas5-1',
      type: 'mcq',
      prompt: '«فردا شام می‌خورم» را چطور می‌گویید (آینده)؟',
      options: [
        'Eu jantei amanhã',
        'Eu vou jantar amanhã',
        'Eu janto ontem',
        'Eu jantava amanhã',
      ],
      answer: 'Eu vou jantar amanhã',
      explanationFa: 'آینده = vou + مصدر: vou jantar.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-portas5-2',
      type: 'mcq',
      prompt: '«fazer baldeação» یعنی چه؟',
      options: ['سوار شدن', 'پیاده شدن', 'تعویض خط مترو', 'خرید بلیت'],
      answer: 'تعویض خط مترو',
      explanationFa: 'baldeação یعنی عوض‌کردن خط/وسیله در مسیر.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'q-portas5-3',
      type: 'mcq',
      prompt:
        'مهاجرِ دارای گواهی‌نامهٔ کشورش تا چند روز می‌تواند در برزیل رانندگی کند؟',
      options: ['۳۰ روز', '۹۰ روز', '۱۸۰ روز', 'نامحدود'],
      answer: '۱۸۰ روز',
      explanationFa: 'تا ۱۸۰ روز از تاریخ ورود؛ بعد باید CNH خارجی بگیرد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas5-4',
      type: 'mcq',
      prompt: 'کدام درست است؟ «از خانه می‌آیم.»',
      options: [
        'Eu vou de casa',
        'Eu venho de casa',
        'Eu vou para casa',
        'Eu venho para casa',
      ],
      answer: 'Eu venho de casa',
      explanationFa: 'VIR + de = آمدن از.',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۵ (Como eu chego?)، شامل «حق حمل‌ونقل». اطلاعات آموزشی است؛ برای مراحل به‌روز به سایت رسمی (SPTrans/Detran) مراجعه کنید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
