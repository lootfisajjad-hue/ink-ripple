/**
 * Citizenship interview practice questions.
 *
 * These are *language-practice* questions modelled on the kinds of things an
 * applicant is commonly asked when dealing with the naturalisation process
 * (personal data, residence, reasons, life in Brazil). They are NOT an official
 * question bank and getting them "right" does not predict any real outcome.
 * Sample answers are provided at multiple CEFR levels so learners can pick one
 * that fits their level and adapt it to their own truthful situation.
 */
import type { InterviewQuestion } from '@/domain/content/schema';

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'iq-nome',
    topic: 'personal',
    pt: 'Qual é o seu nome completo?',
    fa: 'نام و نام خانوادگی کامل شما چیست؟',
    pronunciation: 'کوآل ای او سِئو نومه کُم‌پلِتو',
    sampleAnswers: [
      { cefr: 'A1', pt: 'Meu nome é [nome].', fa: 'اسم من [نام] است.' },
      {
        cefr: 'A2',
        pt: 'Meu nome completo é [nome e sobrenome].',
        fa: 'نام کامل من [نام و نام خانوادگی] است.',
      },
    ],
    tips: [
      'نام کامل را واضح و آرام بگویید.',
      'می‌توانید حروف را spell کنید: soletrar.',
    ],
  },
  {
    id: 'iq-nascimento',
    topic: 'personal',
    pt: 'Onde e quando você nasceu?',
    fa: 'کجا و چه زمانی به دنیا آمدید؟',
    pronunciation: 'اُنجی ای کوآندو ووسه نَسِئو',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Eu nasci no Irã, em [cidade].',
        fa: 'من در ایران، در [شهر] به دنیا آمدم.',
      },
      {
        cefr: 'A2',
        pt: 'Nasci em [cidade], no Irã, em [dia] de [mês] de [ano].',
        fa: 'در [شهر]، در ایران، در [روز] [ماه] [سال] به دنیا آمدم.',
      },
    ],
    tips: ['«nasci» گذشتهٔ فعل nascer است.'],
  },
  {
    id: 'iq-nacionalidade',
    topic: 'personal',
    pt: 'Qual é a sua nacionalidade?',
    fa: 'ملیت شما چیست؟',
    pronunciation: 'کوآل ای آ سوآ ناسیونالیدَجی',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Sou iraniano. / Sou iraniana.',
        fa: 'من ایرانی هستم (مرد/زن).',
      },
    ],
    tips: ['مرد: iraniano، زن: iraniana.'],
  },
  {
    id: 'iq-estado-civil',
    topic: 'family',
    pt: 'Qual é o seu estado civil?',
    fa: 'وضعیت تأهل شما چیست؟',
    pronunciation: 'کوآل ای او سِئو اِستادو سیویل',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Sou casado. / Sou casada.',
        fa: 'متأهل هستم (مرد/زن).',
      },
      {
        cefr: 'A2',
        pt: 'Sou casado e moro com a minha esposa.',
        fa: 'متأهلم و با همسرم زندگی می‌کنم.',
      },
    ],
    tips: ['solteiro مجرد، casado متأهل، divorciado مطلقه.'],
  },
  {
    id: 'iq-filhos',
    topic: 'family',
    pt: 'Você tem filhos? Eles nasceram no Brasil?',
    fa: 'فرزند دارید؟ آیا در برزیل به دنیا آمده‌اند؟',
    pronunciation: 'ووسه تِین فیلیوس؟ اِلِس نَسِئرام نو برازیل',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Sim, tenho dois filhos.',
        fa: 'بله، دو فرزند دارم.',
      },
      {
        cefr: 'A2',
        pt: 'Tenho dois filhos e os dois nasceram no Brasil.',
        fa: 'دو فرزند دارم و هر دو در برزیل به دنیا آمده‌اند.',
      },
    ],
    tips: [
      'داشتن فرزند برزیلی می‌تواند در فرایند مهم باشد؛ جزئیات را از منبع رسمی بررسی کنید.',
    ],
    sourceId: 'src-govbr-naturalizacao',
  },
  {
    id: 'iq-desde-quando',
    topic: 'residence',
    pt: 'Desde quando você mora no Brasil?',
    fa: 'از چه زمانی در برزیل زندگی می‌کنید؟',
    pronunciation: 'دِزجی کوآندو ووسه مورا نو برازیل',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Moro no Brasil desde [ano].',
        fa: 'از سال [سال] در برزیل زندگی می‌کنم.',
      },
      {
        cefr: 'B1',
        pt: 'Moro no Brasil desde [ano], então já são [número] anos.',
        fa: 'از [سال] در برزیل هستم، یعنی [تعداد] سال می‌شود.',
      },
    ],
    tips: ['«desde» یعنی «از/از زمانِ».'],
  },
  {
    id: 'iq-entrada',
    topic: 'residence',
    pt: 'Quando você entrou no Brasil?',
    fa: 'چه زمانی وارد برزیل شدید؟',
    pronunciation: 'کوآندو ووسه اِن‌ترُئو نو برازیل',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Entrei no Brasil em [data].',
        fa: 'در [تاریخ] وارد برزیل شدم.',
      },
    ],
    tips: ['entrei گذشتهٔ entrar است.'],
  },
  {
    id: 'iq-endereco',
    topic: 'address',
    pt: 'Qual é o seu endereço atual?',
    fa: 'آدرس فعلی شما چیست؟',
    pronunciation: 'کوآل ای او سِئو اِن‌دِرِسو آتوآل',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Moro na [rua], número [x], em [cidade], estado de [estado].',
        fa: 'در خیابان [نام]، شمارهٔ [x]، در [شهر]، ایالت [ایالت] زندگی می‌کنم.',
      },
    ],
    tips: ['CEP همان کد پستی است.'],
  },
  {
    id: 'iq-profissao',
    topic: 'work',
    pt: 'Qual é a sua profissão? Onde você trabalha?',
    fa: 'شغل شما چیست؟ کجا کار می‌کنید؟',
    pronunciation: 'کوآل ای آ سوآ پروفیسائو؟ اُنجی ووسه ترابالیا',
    sampleAnswers: [
      { cefr: 'A1', pt: 'Sou [profissão].', fa: 'من [شغل] هستم.' },
      {
        cefr: 'B1',
        pt: 'Trabalho como [profissão] em [lugar] há [número] anos.',
        fa: 'به‌عنوان [شغل] در [محل] به مدت [تعداد] سال کار می‌کنم.',
      },
    ],
    tips: ['«há dois anos» یعنی «دو سال است که».'],
  },
  {
    id: 'iq-escolaridade',
    topic: 'education',
    pt: 'Qual é a sua escolaridade?',
    fa: 'تحصیلات شما چیست؟',
    pronunciation: 'کوآل ای آ سوآ اِسکولاریدَجی',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Tenho ensino superior completo.',
        fa: 'تحصیلات دانشگاهی کامل دارم.',
      },
    ],
    tips: ['ensino médio دبیرستان، ensino superior دانشگاه.'],
  },
  {
    id: 'iq-portugues',
    topic: 'language',
    pt: 'Você fala português? Onde aprendeu?',
    fa: 'پرتغالی صحبت می‌کنید؟ کجا یاد گرفتید؟',
    pronunciation: 'ووسه فالا پورتوگِس؟ اُنجی آپرِن‌دِئو',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Falo um pouco de português. Estudo todos os dias.',
        fa: 'کمی پرتغالی صحبت می‌کنم. هر روز مطالعه می‌کنم.',
      },
    ],
    tips: ['«um pouco» یعنی «کمی».'],
  },
  {
    id: 'iq-motivo',
    topic: 'reason',
    pt: 'Por que você quer se naturalizar brasileiro?',
    fa: 'چرا می‌خواهید تابعیت برزیل را بگیرید؟',
    pronunciation: 'پور که ووسه کِر سه ناتورالیزار برازیلِیرو',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Quero me naturalizar porque a minha vida está no Brasil.',
        fa: 'می‌خواهم تابعیت بگیرم چون زندگی‌ام در برزیل است.',
      },
      {
        cefr: 'B1',
        pt: 'Moro aqui há anos, meus filhos são brasileiros e pretendo construir o meu futuro no Brasil.',
        fa: 'سال‌هاست اینجا زندگی می‌کنم، فرزندانم برزیلی‌اند و می‌خواهم آینده‌ام را در برزیل بسازم.',
      },
    ],
    tips: ['صادق و ساده جواب دهید؛ دلیل واقعی خودتان را بگویید.'],
  },
  {
    id: 'iq-futuro',
    topic: 'future',
    pt: 'Quais são os seus planos para o futuro no Brasil?',
    fa: 'برنامه‌های شما برای آینده در برزیل چیست؟',
    pronunciation: 'کوآیس سائو اوس سِئوس پلانوس پارا او فوتورو',
    sampleAnswers: [
      {
        cefr: 'B1',
        pt: 'Pretendo continuar trabalhando e criando a minha família aqui.',
        fa: 'قصد دارم به کار ادامه دهم و خانواده‌ام را اینجا بزرگ کنم.',
      },
    ],
    tips: ['«pretendo» یعنی «قصد دارم».'],
  },
  {
    id: 'iq-leis',
    topic: 'law',
    pt: 'Você respeita as leis brasileiras?',
    fa: 'آیا به قوانین برزیل احترام می‌گذارید؟',
    pronunciation: 'ووسه رِسپِیتا آس لِیس برازیلِیراس',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Sim, respeito as leis do Brasil.',
        fa: 'بله، به قوانین برزیل احترام می‌گذارم.',
      },
    ],
    tips: [],
  },
  {
    id: 'iq-antecedentes',
    topic: 'records',
    pt: 'Você tem antecedentes criminais?',
    fa: 'آیا سابقهٔ کیفری دارید؟',
    pronunciation: 'ووسه تِین آنتِسِدِنتِس کریمینایس',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Não, não tenho antecedentes criminais.',
        fa: 'خیر، سابقهٔ کیفری ندارم.',
      },
    ],
    tips: ['گواهی عدم سوء‌پیشینه: certidão de antecedentes criminais.'],
    sourceId: 'src-pf-naturalizacao',
  },
  {
    id: 'iq-documentos',
    topic: 'documents',
    pt: 'Quais documentos você trouxe hoje?',
    fa: 'امروز چه مدارکی آورده‌اید؟',
    pronunciation: 'کوآیس دوکومِنتوس ووسه ترُئوسه اُجه',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Trouxe o meu RNM, o comprovante de residência e a certidão de nascimento.',
        fa: 'RNM، مدرک اقامت و شناسنامه را آورده‌ام.',
      },
    ],
    tips: ['RNM = Registro Nacional Migratório.'],
    sourceId: 'src-pf-naturalizacao',
  },
  {
    id: 'iq-viagens',
    topic: 'travel',
    pt: 'Você viajou para fora do Brasil recentemente?',
    fa: 'آیا اخیراً به خارج از برزیل سفر کرده‌اید؟',
    pronunciation: 'ووسه ویاژُئو پارا فورا دو برازیل رِسِنتِمِنته',
    sampleAnswers: [
      {
        cefr: 'A2',
        pt: 'Não viajei recentemente.',
        fa: 'اخیراً سفر نکرده‌ام.',
      },
    ],
    tips: [],
  },
  {
    id: 'iq-cidade',
    topic: 'city',
    pt: 'Em qual cidade e estado você mora?',
    fa: 'در کدام شهر و ایالت زندگی می‌کنید؟',
    pronunciation: 'اِین کوآل سیدَجی ای اِستادو ووسه مورا',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'Moro em [cidade], no estado de [estado].',
        fa: 'در [شهر]، در ایالت [ایالت] زندگی می‌کنم.',
      },
    ],
    tips: [],
  },
  {
    id: 'iq-social',
    topic: 'social',
    pt: 'Você participa da vida da sua comunidade?',
    fa: 'آیا در زندگی اجتماعی محلهٔ خود مشارکت دارید؟',
    pronunciation: 'ووسه پارتیسیپا دا ویدا دا سوآ کومونیدَجی',
    sampleAnswers: [
      {
        cefr: 'B1',
        pt: 'Sim, conheço os meus vizinhos e participo de atividades no bairro.',
        fa: 'بله، همسایه‌هایم را می‌شناسم و در فعالیت‌های محله شرکت می‌کنم.',
      },
    ],
    tips: [],
  },
  {
    id: 'iq-imposto',
    topic: 'taxes',
    pt: 'Você declara imposto de renda no Brasil?',
    fa: 'آیا در برزیل اظهارنامهٔ مالیاتی می‌دهید؟',
    pronunciation: 'ووسه دِکلارا اِمپوستو جی رِندا نو برازیل',
    sampleAnswers: [
      {
        cefr: 'B1',
        pt: 'Sim, declaro o imposto de renda todos os anos.',
        fa: 'بله، هر سال مالیات بر درآمد را اظهار می‌کنم.',
      },
    ],
    tips: ['imposto de renda = مالیات بر درآمد.'],
  },
  {
    id: 'iq-inesperada',
    topic: 'unexpected',
    pt: 'Pode me contar um pouco sobre o seu dia a dia?',
    fa: 'می‌توانید کمی دربارهٔ زندگی روزمرهٔ خود بگویید؟',
    pronunciation: 'پُجی می کُنتار اوم پوکو سوبره او سِئو دیا آ دیا',
    sampleAnswers: [
      {
        cefr: 'B1',
        pt: 'De manhã eu trabalho, à tarde estudo português e à noite fico com a minha família.',
        fa: 'صبح‌ها کار می‌کنم، بعدازظهرها پرتغالی می‌خوانم و شب‌ها با خانواده‌ام هستم.',
      },
    ],
    tips: ['برای سؤال‌های باز، چند جملهٔ ساده و مرتبط بگویید.'],
  },
  {
    id: 'iq-brasil-geral',
    topic: 'brazil',
    pt: 'Qual é a capital do Brasil?',
    fa: 'پایتخت برزیل کجاست؟',
    pronunciation: 'کوآل ای آ کاپیتال دو برازیل',
    sampleAnswers: [
      {
        cefr: 'A1',
        pt: 'A capital do Brasil é Brasília.',
        fa: 'پایتخت برزیل برازیلیا است.',
      },
    ],
    tips: ['برازیلیا در سال ۱۹۶۰ پایتخت شد.'],
    sourceId: 'src-ibge',
  },
];
