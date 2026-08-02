import type { CourseLesson } from '@/domain/content/schema';

export const portas3: CourseLesson = {
  id: 'course-portas-3',
  order: 3,
  aula: 'Unidade 3',
  track: 'portas',
  pagesKey: 'portas3',
  titleFa: 'من کی هستم؟ — معرفی، ملیت، حروف اضافه، SER/ESTAR و حق مدارک',
  titlePt:
    'Quem sou eu? — Apresentação, Nacionalidades, Preposições, SER/ESTAR',
  cefr: 'A1',
  summaryFa:
    'در این فصل خودتان را کامل معرفی می‌کنید (نام، سن، اهل کجا، محل زندگی، شغل، علاقه‌ها)، ملیت‌ها را با شکل مذکر و مؤنث یاد می‌گیرید، دو حرف اضافهٔ مهم DE (مبدأ) و EM (مکان) و ترکیب‌هایشان (da/do، na/no) را می‌آموزید، تفاوت دو فعل «بودن» یعنی SER و ESTAR را تمرین می‌کنید، و در پایان با «حق مدارک» و مدارک کلیدی مهاجران در برزیل (CPF، RNE، دفترچهٔ کار و مرکز CRAI) آشنا می‌شوید.',
  objectivesFa: [
    'خودتان را با یک الگوی کامل معرفی کنید و فرم ثبت‌نام را پر کنید.',
    'ملیت‌ها را با شکل مذکر/مؤنث بشناسید و بگویید اهل کجا هستید.',
    'حروف اضافهٔ DE و EM و ترکیب‌های da/do و na/no را درست به‌کار ببرید.',
    'تفاوت SER (ثابت) و ESTAR (موقتی) را بدانید.',
    'مدارک ضروری مهاجر در برزیل و مرجع کمک (CRAI) را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. معرفی شخصی (Apresentação pessoal)',
      bodyFa:
        'این الگو را حفظ کنید و با اطلاعات خودتان پر کنید. این جمله‌ها پایهٔ هر معرفی‌ای هستند.',
      examples: [
        {
          pt: 'Meu nome é _____.',
          fa: 'اسم من ... است.',
          pron: 'مِئو نُمی اِ',
        },
        {
          pt: 'Eu sou do/da/de _____.',
          fa: 'من اهل ... هستم.',
          pron: 'اِئو سُو دو/دا/جی',
        },
        {
          pt: 'Eu tenho _____ anos.',
          fa: 'من ... سال دارم.',
          pron: 'اِئو تِنیو ... آنوس',
        },
        {
          pt: 'Eu moro em/no/na _____.',
          fa: 'من در ... زندگی می‌کنم.',
          pron: 'اِئو مُرو',
        },
        {
          pt: 'Eu trabalho como _____.',
          fa: 'من به‌عنوان ... کار می‌کنم.',
          pron: 'اِئو ترابالیو کُمو',
        },
        {
          pt: 'Eu gosto de _____.',
          fa: 'من ... را دوست دارم.',
          pron: 'اِئو گُستو جی',
        },
      ],
    },
    {
      headingFa: '۲. ملیت‌ها (Nacionalidades)',
      bodyFa:
        'ملیت‌ها معمولاً دو شکل دارند: مذکر و مؤنث (مرد/زن). صفت ملیت با جنسیت گوینده هماهنگ می‌شود.',
      examples: [
        {
          pt: 'brasileiro / brasileira',
          fa: 'برزیلی (مرد/زن)',
          pron: 'برازیلِیرو / برازیلِیرا',
        },
        { pt: 'sírio / síria', fa: 'سوری (مرد/زن)', pron: 'سیریو / سیریا' },
        {
          pt: 'italiano / italiana',
          fa: 'ایتالیایی',
          pron: 'ایتالیانو / ایتالیانا',
        },
        {
          pt: 'português / portuguesa',
          fa: 'پرتغالی',
          pron: 'پورتوگِس / پورتوگِزا',
        },
        {
          pt: 'árabe (بدون تغییر)',
          fa: 'عرب (برای مرد و زن یکسان)',
          pron: 'آرابی',
        },
        {
          pt: 'Eu sou síria. Estou no Brasil há oito meses.',
          fa: 'من سوری‌ام. هشت ماه است در برزیل هستم.',
          pron: 'اِئو سُو سیریا',
        },
      ],
    },
    {
      headingFa: '۳. حرف اضافهٔ DE (مبدأ/اهل کجا)',
      bodyFa:
        'برای گفتن «اهل کجایم» از DE استفاده می‌کنیم. اگر بعدش اسمِ مؤنثِ همراهِ حرف تعریف بیاید، de + a = da؛ اگر مذکر باشد، de + o = do؛ با بیشتر کشورها/شهرهای بدون حرف تعریف فقط «de» می‌آید.',
      examples: [
        {
          pt: 'Eu sou do Haiti. / do México.',
          fa: 'من اهل هائیتی/مکزیک هستم.',
          pron: 'دو آاِیتی',
          note: 'de + o = do',
        },
        {
          pt: 'Eu sou da Nigéria. / da Argentina.',
          fa: 'من اهل نیجریه/آرژانتین هستم.',
          pron: 'دا نیژِریا',
          note: 'de + a = da',
        },
        {
          pt: 'Eu sou de Angola. / de São Paulo.',
          fa: 'من اهل آنگولا/سائوپائولو هستم.',
          pron: 'جی آنگولا',
          note: 'فقط de',
        },
      ],
    },
    {
      headingFa: '۴. حرف اضافهٔ EM (مکان/محل زندگی)',
      bodyFa:
        'برای گفتن «کجا زندگی می‌کنم» از EM استفاده می‌کنیم. ترکیب‌ها: em + a = na، em + o = no، و با بعضی شهرها فقط «em».',
      examples: [
        {
          pt: 'Eu moro no Centro. / no Canindé.',
          fa: 'من در مرکز شهر/محلهٔ کانینده زندگی می‌کنم.',
          pron: 'نو سِنترو',
          note: 'em + o = no',
        },
        {
          pt: 'Eu moro na rua Francisca, número 6.',
          fa: 'من در خیابان فرانسیسکا، پلاک ۶ زندگی می‌کنم.',
          pron: 'نا هوآ',
          note: 'em + a = na',
        },
        {
          pt: 'Eu moro em São Paulo.',
          fa: 'من در سائوپائولو زندگی می‌کنم.',
          pron: 'اِین سائو پائولو',
          note: 'فقط em',
        },
      ],
    },
    {
      headingFa: '۵. SER یا ESTAR؟ (دو فعل «بودن»)',
      bodyFa:
        'مهم‌ترین نکتهٔ گرامری این سطح: SER برای چیزهای ثابت و همیشگی (ملیت، شغل، شخصیت) و ESTAR برای حالت‌های موقتی (احساس، مکان لحظه‌ای، بیماری). صرف حال: SER → eu sou / você é / nós somos / vocês são؛ ESTAR → eu estou / você está / nós estamos / vocês estão.',
      examples: [
        {
          pt: 'Eu sou da África. / Eu sou estudante.',
          fa: 'من اهل آفریقا هستم / من دانشجو هستم.',
          pron: 'اِئو سُو',
          note: 'ثابت → SER',
        },
        {
          pt: 'Eu estou resfriada. / Eu estou feliz.',
          fa: 'من سرما خورده‌ام / خوشحالم.',
          pron: 'اِئو اِستُو',
          note: 'موقتی → ESTAR',
        },
        {
          pt: 'Eu estou no Brasil para trabalhar.',
          fa: 'من (الان) برای کار در برزیل هستم.',
          pron: 'اِئو اِستُو نو برازیل',
          note: 'مکان لحظه‌ای → ESTAR',
        },
        {
          pt: 'A gente = nós (A gente trabalha = nós trabalhamos)',
          fa: '«a gente» یعنی «ما»، ولی با فعل مفرد می‌آید.',
          pron: 'آ ژِنتی',
          note: 'خیلی رایج در گفتار',
        },
      ],
    },
    {
      headingFa: '۶. زمان، روز، فصل و پرسش‌واژه‌ها',
      bodyFa:
        'روزهای هفته، ساعت، فصل‌ها و ماه‌ها را می‌آموزید. پرسش‌واژه‌های مهم: Qual (کدام/چه)، De onde (اهل کجا)، Onde (کجا)، Como (چطور)، Quando (کِی)، Quantos (چند تا).',
      examples: [
        {
          pt: 'segunda, terça, quarta, quinta, sexta, sábado, domingo',
          fa: 'دوشنبه تا یکشنبه (هفتهٔ برزیلی از دوشنبه شروع می‌شود)',
          pron: 'سِگوندا... دومینگو',
        },
        {
          pt: 'Eu acordo às cinco da manhã.',
          fa: 'ساعت پنجِ صبح بیدار می‌شوم.',
          pron: 'آس سینکو دا مانیا',
        },
        {
          pt: 'primavera, verão, outono, inverno',
          fa: 'بهار، تابستان، پاییز، زمستان',
          pron: 'پریماوِرا، وِرائو، اوتونو، اینوِرنو',
        },
        {
          pt: 'De onde você é? — Quantos anos você tem?',
          fa: 'اهل کجایی؟ — چند سالته؟',
          pron: 'جی اُندی وُسه اِ؟',
        },
        {
          pt: 'Por que falamos "tudo bem" e não "todo bem"?',
          fa: 'چرا می‌گوییم tudo bem نه todo bem؟ (tudo = همه‌چیز، به‌صورت کل)',
          pron: 'تودو بِین',
        },
      ],
    },
    {
      headingFa: '۷. حق مدارک (Direito à documentação)',
      bodyFa:
        'کتاب یک بخش مهم به حق داشتن مدارک قانونی اختصاص می‌دهد. سه مدرک کلیدیِ مهاجر در برزیل و مرجع کمک را بشناسید. (این اطلاعات آموزشی است؛ برای مراحل روز، همیشه به منبع رسمی مراجعه کنید.)',
      examples: [
        {
          pt: 'CPF = Cadastro de Pessoa Física (Receita Federal)',
          fa: 'شمارهٔ مالیاتی فردی؛ از «رسیتا فدرال» گرفته می‌شود.',
          pron: 'سِ‌پِ‌اِفی',
          note: 'برای کارهای اداری/تجاری لازم است',
        },
        {
          pt: 'RNE = Registro Nacional de Estrangeiro (Polícia Federal)',
          fa: 'کارت شناسایی اتباع خارجی؛ از «پلیس فدرال» گرفته می‌شود.',
          pron: 'اِ‌رِ‌نِ‌اِ',
        },
        {
          pt: 'Carteira de Trabalho (Superintendência do Trabalho)',
          fa: 'دفترچهٔ کار؛ برای اشتغال قانونی لازم است.',
          pron: 'کارتِیرا جی ترابالیو',
        },
        {
          pt: 'CRAI = Centro de Referência e Acolhida para Imigrantes',
          fa: 'مرکز مرجع و پذیرش مهاجران؛ راهنمایی و مشاورهٔ حقوقی رایگان می‌دهد.',
          pron: 'کرای',
          note: 'Rua Japurá, 212 – Bela Vista · تلفن ۳۵۹۸-۷۲۰۰',
        },
      ],
    },
  ],
  keyPointsFa: [
    'de + o = do، de + a = da؛ em + o = no، em + a = na.',
    'SER = ثابت (ملیت، شغل)؛ ESTAR = موقتی (احساس، مکان لحظه‌ای، بیماری).',
    '«a gente» یعنی «ما» ولی فعلش مفرد است.',
    'مدارک کلیدی مهاجر: CPF (رسیتا فدرال)، RNE (پلیس فدرال)، دفترچهٔ کار؛ کمک: CRAI.',
  ],
  quiz: [
    {
      id: 'q-portas3-1',
      type: 'mcq',
      prompt: 'کدام جمله درست است؟ «من اهل آرژانتین هستم.»',
      options: [
        'Eu sou do Argentina',
        'Eu sou da Argentina',
        'Eu sou na Argentina',
        'Eu sou de Argentina',
      ],
      answer: 'Eu sou da Argentina',
      explanationFa: 'Argentina مؤنث است: de + a = da.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'q-portas3-2',
      type: 'mcq',
      prompt: '«من سرما خورده‌ام» (حالت موقتی). کدام فعل؟',
      options: [
        'Eu sou resfriada',
        'Eu estou resfriada',
        'Eu tenho resfriada',
        'Eu vou resfriada',
      ],
      answer: 'Eu estou resfriada',
      explanationFa: 'بیماری حالت موقتی است → ESTAR.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'q-portas3-3',
      type: 'mcq',
      prompt: 'برای گرفتن RNE به کدام نهاد باید مراجعه کرد؟',
      options: ['Receita Federal', 'Polícia Federal', 'CRAI', 'شهرداری'],
      answer: 'Polícia Federal',
      explanationFa: 'RNE (کارت اتباع خارجی) را پلیس فدرال صادر می‌کند.',
      cefr: 'A1',
      skill: 'reading',
    },
    {
      id: 'q-portas3-4',
      type: 'mcq',
      prompt: '«a gente trabalha» یعنی چه؟',
      options: [
        'او کار می‌کند',
        'ما کار می‌کنیم',
        'آن‌ها کار می‌کنند',
        'تو کار می‌کنی',
      ],
      answer: 'ما کار می‌کنیم',
      explanationFa: '«a gente» = «ما»، اما با فعل مفرد می‌آید.',
      cefr: 'A1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 18,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۳ (Quem sou eu?)، شامل بخش «حق مدارک». اطلاعاتِ اداری آموزشی است؛ برای مراحل به‌روز به منابع رسمی مراجعه کنید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
