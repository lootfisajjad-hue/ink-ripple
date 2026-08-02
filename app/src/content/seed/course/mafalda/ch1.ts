import type { CourseLesson } from '@/domain/content/schema';

export const mafalda1: CourseLesson = {
  id: 'course-mafalda-1',
  order: 1,
  aula: 'Capítulo 1',
  track: 'mafalda',
  pagesKey: 'mafalda1',
  titleFa: 'به برزیل رسیدم! — معرفی، الفبا، اعداد و ضمایر',
  titlePt: 'Cheguei ao Brasil! — Apresentação, Alfabeto, Números, Pronomes',
  cefr: 'A1',
  summaryFa:
    'این نخستین فصلِ کتاب «پرتغالی برزیل برای پناهندگان» (Curso Popular Mafalda) است. فصل با یک گفت‌وگوی واقعی در ادارهٔ پلیس فدرال برای گرفتن مدرک RNE شروع می‌شود، سپس الفبا، اعداد ۰ تا ۱۰، سلام و احوال‌پرسی، ضمایر شخصی، صفت‌های ملکی و صرف حال سه فعل کلیدی (SER، ESTAR، IR) را می‌آموزید. در پایان با مدارک CPF و RNE آشنا می‌شوید.',
  objectivesFa: [
    'خودتان را معرفی کنید و اسمتان را هجّی کنید.',
    'الفبا و اعداد ۰ تا ۱۰ را بشناسید.',
    'ضمایر شخصی و صفت‌های ملکی را به‌کار ببرید.',
    'صرف حال SER، ESTAR و IR را بدانید.',
    'کاربرد و مدارک CPF و RNE را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. گفت‌وگو در پلیس فدرال (Diálogo)',
      bodyFa:
        'آلیس در ادارهٔ پلیس فدرال منتظر است تا برای مدرک RNE اقدام کند. این گفت‌وگو نشان می‌دهد در چنین موقعیتی چه می‌پرسند و چه باید پاسخ داد.',
      examples: [
        {
          pt: 'Qual é o seu nome completo? — Meu nome completo é Alice Schaim.',
          fa: 'نام کاملتان چیست؟ — نام کامل من آلیس شایم است.',
          pron: 'کوال اِ او سِئو نُمی کُمپلِتو',
        },
        {
          pt: 'Como se escreve seu sobrenome? — S-C-H-A-I-M.',
          fa: 'نام خانوادگی‌تان چطور نوشته می‌شود؟ (هجّی)',
          pron: 'کُمو سی اِسکرِوی',
        },
        {
          pt: 'Qual é a data e o local de seu nascimento?',
          fa: 'تاریخ و محل تولدتان کِی و کجاست؟',
          pron: 'داتا ای لوکال جی ناسیمِنتو',
        },
        {
          pt: 'Eu nasci em 27 de janeiro de 1968, na Síria.',
          fa: 'من در ۲۷ ژانویهٔ ۱۹۶۸ در سوریه به دنیا آمدم.',
          pron: 'اِئو ناسی',
        },
      ],
    },
    {
      headingFa: '۲. الفبا و اعداد (۰ تا ۱۰)',
      bodyFa:
        'نام حرف‌ها را برای هجّی‌کردن اسم لازم دارید. اعداد ۰ تا ۱۰ پایهٔ شمردن‌اند.',
      examples: [
        {
          pt: 'A(á), B(bê), C(cê), H(agá), J(jota), R(erre), W(dábliu)',
          fa: 'نمونهٔ نام حرف‌ها',
          pron: 'آ، بِ، سِ، آگا، ژُتا، اِری، دابلیو',
        },
        {
          pt: '0 zero, 1 um, 2 dois, 3 três, 4 quatro, 5 cinco',
          fa: 'صفر تا پنج',
          pron: 'زِرو، اوم، دویس، ترِیس، کواترو، سینکو',
        },
        {
          pt: '6 seis, 7 sete, 8 oito, 9 nove, 10 dez',
          fa: 'شش تا ده',
          pron: 'سِیس، سِتی، اُیتو، نُوی، دِز',
        },
      ],
    },
    {
      headingFa: '۳. سلام و احوال‌پرسی (Saudações)',
      bodyFa: 'عبارت‌های روزمرهٔ سلام، تشکر، خواهش و خداحافظی.',
      examples: [
        {
          pt: 'Oi! / Olá! / Bom dia! / Boa tarde! / Boa noite!',
          fa: 'سلام! / صبح/بعدازظهر/شب بخیر!',
          pron: 'اُی / اُلا / بُن جیا',
        },
        {
          pt: 'Muito prazer! — Prazer é meu!',
          fa: 'خوشوقتم! — افتخار از من است!',
          pron: 'مویتو پرازِر',
        },
        {
          pt: 'Por favor / Obrigado(a) / Desculpe-me / Com licença',
          fa: 'لطفاً / ممنون / ببخشید / اجازه',
          pron: 'پور فاوُر / اوبریگادو',
        },
        {
          pt: 'Tchau! / Até logo! / Até amanhã! / Adeus!',
          fa: 'خداحافظ! / تا بعد! / تا فردا! / بدرود!',
          pron: 'چاو / آته لُگو',
        },
      ],
    },
    {
      headingFa: '۴. ضمایر شخصی و صفت ملکی',
      bodyFa:
        'ضمایر شخصی: eu, você, ele/ela, nós, vocês, eles/elas و «a gente» (= ما، با فعل مفرد). صفت ملکی با «چیز» هماهنگ می‌شود: meu/minha، seu/sua، nosso/nossa؛ برای رفع ابهام dele/dela.',
      examples: [
        {
          pt: 'Eu sou do Ceará. / Nós somos do Ceará.',
          fa: 'من اهل سِئارا هستم / ما اهل سِئارا هستیم.',
          pron: 'اِئو سُو / نوس سُموس',
        },
        {
          pt: 'A gente trabalha de segunda a sexta.',
          fa: 'ما دوشنبه تا جمعه کار می‌کنیم. (a gente = nós)',
          pron: 'آ ژِنتی ترابالیا',
        },
        {
          pt: 'minha casa (خانه‌ام) / meu livro (کتابم)',
          fa: 'ملکی با جنسیتِ چیز هماهنگ می‌شود.',
          pron: 'مینیا / مِئو',
        },
      ],
    },
    {
      headingFa: '۵. سه فعل کلیدی: SER، ESTAR، IR (حال)',
      bodyFa:
        'SER = توصیف/ثابت، ESTAR = حالت/موقعیت موقتی، IR = حرکت. صرف حال را حفظ کنید.',
      examples: [
        {
          pt: 'SER: eu sou, você é, nós somos, eles são',
          fa: 'بودن (ثابت): هستم، هستی، هستیم، هستند',
          pron: 'سُو، اِ، سُموس، سائو',
        },
        {
          pt: 'ESTAR: eu estou, você está, nós estamos, eles estão',
          fa: 'بودن (موقتی): هستم…',
          pron: 'اِستُو، اِستا، اِستاموس',
        },
        {
          pt: 'IR: eu vou, você vai, nós vamos, eles vão',
          fa: 'رفتن: می‌روم…',
          pron: 'وُو، وای، واموس، وائو',
        },
      ],
    },
    {
      headingFa: '۶. آیا می‌دانستید؟ — CPF و RNE',
      bodyFa:
        'CPF (شمارهٔ مالیاتی فردی) یکی از مهم‌ترین مدارک برای ساکنان برزیل است و دسترسی به سلامت (SUS)، آموزش و بانک را ممکن می‌کند. هر فردی — داخلی یا خارجی — می‌تواند CPF بگیرد. RNE مدرک شناسایی اتباع خارجی است و در پلیس فدرال صادر/تمدید می‌شود.',
      examples: [
        {
          pt: 'CPF = Cadastro de Pessoa Física',
          fa: 'شمارهٔ مالیاتی فردی؛ کلید دسترسی به خدمات.',
          pron: 'سِ‌پِ‌اِفی',
        },
        {
          pt: 'RNE emitido/renovado na Polícia Federal.',
          fa: 'RNE در پلیس فدرال صادر و تمدید می‌شود.',
          pron: 'پولیسیا فِدِرال',
          note: 'برای پناهنده پس از تأیید Conare',
        },
      ],
    },
  ],
  keyPointsFa: [
    'اسم را با نام حرف‌ها هجّی کنید؛ اعداد ۰ تا ۱۰ را حفظ کنید.',
    '«a gente» = «ما» ولی فعلش مفرد است.',
    'SER (ثابت)، ESTAR (موقتی)، IR (حرکت).',
    'CPF کلید دسترسی به SUS، آموزش و بانک است؛ RNE در پلیس فدرال.',
  ],
  quiz: [
    {
      id: 'q-mafalda1-1',
      type: 'mcq',
      prompt: 'کدام فعل «حرکت/رفتن» را نشان می‌دهد؟',
      options: ['SER', 'ESTAR', 'IR', 'TER'],
      answer: 'IR',
      explanationFa: 'IR = رفتن/حرکت (eu vou).',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'q-mafalda1-2',
      type: 'mcq',
      prompt: 'CPF برای چه چیزهایی لازم است؟',
      options: [
        'فقط رانندگی',
        'دسترسی به سلامت، آموزش و بانک',
        'فقط سفر خارجی',
        'هیچ‌کدام',
      ],
      answer: 'دسترسی به سلامت، آموزش و بانک',
      explanationFa: 'CPF کلید دسترسی به SUS، آموزش و خدمات بانکی است.',
      cefr: 'A1',
      skill: 'reading',
    },
    {
      id: 'q-mafalda1-3',
      type: 'mcq',
      prompt: 'RNE را کدام نهاد صادر می‌کند؟',
      options: ['Receita Federal', 'Polícia Federal', 'شهرداری', 'بانک'],
      answer: 'Polícia Federal',
      explanationFa: 'صدور و تمدید RNE در پلیس فدرال انجام می‌شود.',
      cefr: 'A1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Português do Brasil para Refugiadas e Refugiados» (Curso Popular Mafalda، سائوپائولو ۲۰۱۵) — فصل ۱. اطلاعات اداری آموزشی است؛ برای مراحل روز به منبع رسمی مراجعه کنید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
