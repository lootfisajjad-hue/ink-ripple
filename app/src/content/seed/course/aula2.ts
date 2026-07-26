import type { CourseLesson } from '@/domain/content/schema';

export const aula2: CourseLesson = {
  id: 'course-aula-2',
  order: 2,
  aula: 'Aula 2',
  titleFa: 'معرفی خود و ضمایر شخصی',
  titlePt: 'Apresentação Pessoal e Pronomes Pessoais',
  cefr: 'A1',
  summaryFa:
    'در این درس یاد می‌گیرید چطور سلام و احوال‌پرسی رسمی و غیررسمی کنید، خودتان را معرفی کنید (نام، سن، ملیت، شغل و…)، ضمایر شخصی پرتغالی برزیلی را بشناسید و مهم‌ترین نکتهٔ گرامری این سطح یعنی تفاوت دو فعل «بودن» (SER و ESTAR) را درک کنید.',
  objectivesFa: [
    'سلام و احوال‌پرسی رسمی و غیررسمی به‌کار ببرید.',
    'با یک الگوی ساده خودتان را کامل معرفی کنید.',
    'ضمایر شخصی (eu, você, ele/ela, a gente, nós, vocês, eles/elas) را بشناسید.',
    'تفاوت SER (ثابت/هویت) و ESTAR (موقتی/حالت) را درک کنید و درست به‌کار ببرید.',
  ],
  sections: [
    {
      headingFa: '۱. احوال‌پرسی رسمی',
      bodyFa:
        'در موقعیت‌های رسمی (با غریبه، در اداره، محل کار) از این عبارت‌ها استفاده کنید. سلامِ بر اساس ساعت روز خیلی رایج است: صبح، بعدازظهر و شب هرکدام عبارت خودشان را دارند.',
      examples: [
        {
          pt: 'Bom dia!',
          fa: 'صبح بخیر!',
          pron: 'بُن جیا',
          note: 'تا حدود ظهر استفاده می‌شود.',
        },
        {
          pt: 'Boa tarde!',
          fa: 'بعدازظهر بخیر!',
          pron: 'بُووا تارجی',
          note: 'از ظهر تا غروب.',
        },
        {
          pt: 'Boa noite!',
          fa: 'شب بخیر!',
          pron: 'بُووا نُویتی',
          note: 'هم هنگام رسیدن و هم هنگام خداحافظی شبانه.',
        },
        {
          pt: 'Como vai? Tudo bem?',
          fa: 'حالتان چطور است؟ همه‌چیز خوب است؟',
          pron: 'کُمو وای؟ تودو بِین؟',
          note: '«Tudo bem?» هم سؤال است هم جواب: در پاسخ «Tudo bem!» یعنی «خوبم».',
        },
      ],
    },
    {
      headingFa: '۲. احوال‌پرسی غیررسمی و تعارفات',
      bodyFa:
        'با دوستان و افراد نزدیک از حالت غیررسمی استفاده می‌کنید. همچنین چند عبارت پرکاربرد ادب را یاد بگیرید.',
      examples: [
        {
          pt: 'Oi! / Olá! / E aí?',
          fa: 'سلام! / سلام! / چطوری؟',
          pron: 'اُی! / اُلا! / ای آیی؟',
          note: '«E aí?» خیلی خودمانی است، مثل «چه خبر؟».',
        },
        {
          pt: 'Obrigado! / Obrigada!',
          fa: 'ممنون!',
          pron: 'اُبریگادو / اُبریگادا',
          note: 'نکتهٔ مهم: مرد می‌گوید «obrigado» و زن می‌گوید «obrigada». این بستگی به جنسیتِ گوینده دارد، نه شنونده.',
        },
        {
          pt: 'De nada.',
          fa: 'خواهش می‌کنم.',
          pron: 'جی نادا',
          note: 'پاسخ به تشکر. «Por favor» یعنی «لطفاً» و «com licença» یعنی «با اجازه/ببخشید».',
        },
        {
          pt: 'Até logo! / Tchau!',
          fa: 'تا بعد! / خداحافظ!',
          pron: 'آته لوگو / چاو',
          note: '«Tchau» غیررسمی و بسیار رایج است.',
        },
      ],
    },
    {
      headingFa: '۳. معرفی خود: چه اطلاعاتی؟',
      bodyFa:
        'وقتی خودتان را معرفی می‌کنید معمولاً این موارد را می‌گویید: نام (nome)، سن (idade)، تاریخ تولد (data de nascimento)، وضعیت تأهل (estado civil)، شغل (profissão)، نشانی (endereço) و ملیت (nacionalidade).',
      examples: [
        {
          pt: 'Meu nome é Ana Maria.',
          fa: 'اسم من آنا ماریا است.',
          pron: 'مِئو نُمی اِ آنا ماریا',
        },
        {
          pt: 'Solteiro / Casado / Divorciado / Viúvo',
          fa: 'مجرد / متأهل / طلاق‌گرفته / بیوه',
          pron: 'سُلتِیرو / کازادو / جیوُرسیادو / ویووو',
          note: 'برای زن حرف پایانی به «a» تغییر می‌کند: solteira, casada, viúva.',
        },
        {
          pt: 'Minha profissão é vendedora.',
          fa: 'شغل من فروشندگی است.',
          pron: 'مینیا پروفیسائو اِ وِندِدورا',
        },
      ],
    },
    {
      headingFa: '۴. الگوی جملهٔ معرفی خود',
      bodyFa:
        'با این الگوی آماده می‌توانید خودتان را به‌طور کامل معرفی کنید. جای خالی‌ها را با اطلاعات خودتان پر کنید.',
      examples: [
        {
          pt: 'Meu nome é… Eu sou solteiro.',
          fa: 'اسم من… است. من مجرد هستم.',
          pron: 'مِئو نُمی اِ… اِئو سُ سُلتِیرو',
        },
        {
          pt: 'Eu sou de Teerã. Minha nacionalidade é iraniana.',
          fa: 'من اهل تهران هستم. ملیت من ایرانی است.',
          pron: 'اِئو سُ جی تِئِران. مینیا ناسیونالیدادی اِ ایرانیانا',
          note: '«Eu sou de…» یعنی اهلِ کجا بودن (naturalidade).',
        },
        {
          pt: 'Eu tenho trinta anos. Eu moro em São Paulo.',
          fa: 'من سی سال دارم. من در سائوپائولو زندگی می‌کنم.',
          pron: 'اِئو تِنیو ترینتا آنوس. اِئو مُرو اِین سائو پائولو',
          note: 'برای سن از فعل ter (داشتن) استفاده می‌شود، نه ser؛ درست: «tenho … anos».',
        },
        {
          pt: 'Eu trabalho como vendedora. Eu gosto de música.',
          fa: 'من به‌عنوان فروشنده کار می‌کنم. من موسیقی دوست دارم.',
          pron: 'اِئو ترابایو کُمو وِندِدورا. اِئو گُستو جی موزیکا',
        },
      ],
    },
    {
      headingFa: '۵. ضمایر شخصی',
      bodyFa:
        'در گفتار و نوشتار سه «شخص» وجود دارد: اول‌شخص (کسی که حرف می‌زند: eu, nós)، دوم‌شخص (کسی که با او حرف می‌زنیم: você, vocês) و سوم‌شخص (کسی که درباره‌اش حرف می‌زنیم: ele, ela, eles, elas). در برزیل بیشتر به‌جای «tu» از «você» و به‌جای «vós» از «vocês» استفاده می‌شود.',
      examples: [
        {
          pt: 'eu — tu / você — ele / ela',
          fa: 'من — تو / شما — او (مرد) / او (زن)',
          pron: 'اِئو — تو / وُسه — اِلی / اِلا',
          note: 'در برزیل «você» رایج‌ترین شکل «تو» است.',
        },
        {
          pt: 'nós — vós / vocês — eles / elas',
          fa: 'ما — شما — آن‌ها (مردانه) / آن‌ها (زنانه)',
          pron: 'نُس — وُس / وُسِس — اِلیس / اِلاس',
        },
        {
          pt: 'A gente vai ao cinema.',
          fa: 'ما به سینما می‌رویم.',
          pron: 'آ جِنتی وای آئو سینِما',
          note: '«a gente» یعنی «ما» به‌شکل غیررسمی و فقط در گفتار؛ اما فعل آن سوم‌شخص مفرد است (a gente vai، نه a gente vamos). در نوشتار رسمی از «nós» استفاده کنید.',
        },
      ],
    },
    {
      headingFa: '۶. فعل SER (بودنِ ثابت / هویت)',
      bodyFa:
        'پرتغالی دو فعل برای «بودن» دارد. SER برای چیزهای ثابت و همیشگی است: هویت، ملیت، شغل، ویژگی‌های ذاتی. صرف زمان حال: eu sou, você/ele/ela/a gente é, nós somos, vocês/eles/elas são.',
      examples: [
        {
          pt: 'Eu sou brasileiro.',
          fa: 'من برزیلی هستم.',
          pron: 'اِئو سُ برازیلِیرو',
          note: 'ملیت یک ویژگی ثابت است، پس SER.',
        },
        {
          pt: 'Nós somos amigos.',
          fa: 'ما دوست هستیم.',
          pron: 'نُس سُموس آمیگوس',
        },
        {
          pt: 'Eu sou gordinho (sempre).',
          fa: 'من (همیشه) کمی چاق هستم.',
          pron: 'اِئو سُ گُردینیو',
          note: 'وقتی یک ویژگی همیشگی است، SER می‌آید.',
        },
      ],
    },
    {
      headingFa: '۷. فعل ESTAR (بودنِ موقتی / حالت)',
      bodyFa:
        'ESTAR برای حالت‌های موقتی، احساس لحظه‌ای و مکان است. صرف زمان حال: eu estou, você/ele/ela/a gente está, nós estamos, vocês/eles/elas estão.',
      examples: [
        {
          pt: 'Eu estou no Brasil.',
          fa: 'من (الان) در برزیل هستم.',
          pron: 'اِئو اِستُ نو برازیل',
          note: 'مکان موقتی → ESTAR. مقایسه کنید با «sou brasileiro» (ملیت ثابت → SER).',
        },
        {
          pt: 'Eu estou resfriada.',
          fa: 'من سرما خورده‌ام.',
          pron: 'اِئو اِستُ رِسفریادا',
          note: 'حالت موقتی بدن → ESTAR.',
        },
        {
          pt: 'Eu estou aprendendo português.',
          fa: 'من در حال یادگیری پرتغالی هستم.',
          pron: 'اِئو اِستُ آپرِندِندو پُرتوگِس',
        },
      ],
    },
    {
      headingFa: '۸. SER یا ESTAR؟ تفاوت کلیدی',
      bodyFa:
        'اشتباه رایج فارسی‌زبانان این است که چون در فارسی فقط یک فعل «بودن» داریم، هر دو را قاطی می‌کنند. قاعده: اگر ویژگی همیشگی است SER، اگر حالت این لحظه است ESTAR. همان جمله با دو فعل معنای متفاوت پیدا می‌کند.',
      examples: [
        {
          pt: 'Eu sou feliz. / Eu estou feliz.',
          fa: 'من (آدمِ) شادی هستم. / من (الان) خوشحالم.',
          pron: 'اِئو سُ فِلیس / اِئو اِستُ فِلیس',
          note: 'sou feliz = ویژگی همیشگی؛ estou feliz = حسِ همین الان.',
        },
        {
          pt: 'Eu sou gordinho. / Eu estou gordinho.',
          fa: 'من (همیشه) چاق هستم. / من (این روزها) چاق شده‌ام.',
          pron: 'اِئو سُ گُردینیو / اِئو اِستُ گُردینیو',
          note: 'همیشگی → SER؛ موقتی/تازه → ESTAR.',
        },
        {
          pt: 'Eu sou estudante. / Eu estou estudando.',
          fa: 'من دانشجو هستم. / من در حال درس خواندن هستم.',
          pron: 'اِئو سُ اِستودانتی / اِئو اِستُ اِستودَندو',
          note: 'هویت/نقش → SER؛ کارِ در جریان → ESTAR.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'رسمی از ساعت روز استفاده کن (Bom dia/Boa tarde/Boa noite)؛ غیررسمی: Oi/Olá/E aí.',
    'تشکر بر اساس جنسیتِ گوینده: مرد obrigado، زن obrigada.',
    'برای سن از ter استفاده کن: «tenho … anos» نه «sou … anos».',
    '«a gente» یعنی «nós» غیررسمی، اما فعلش سوم‌شخص مفرد است (a gente é/vai).',
    'SER = ثابت/هویت/ملیت؛ ESTAR = موقتی/حالت/مکان. sou brasileiro ولی estou no Brasil.',
  ],
  quiz: [
    {
      id: 'course-aula-2-q1',
      type: 'mcq',
      prompt: 'Complete: Eu ___ brasileiro.',
      promptFa: 'جای خالی را با فعل درست پر کنید: ملیت یک ویژگی ثابت است.',
      options: ['sou', 'estou', 'é', 'estava'],
      answer: 'sou',
      explanationFa:
        'ملیت ویژگی ثابت و هویتی است، پس از SER استفاده می‌کنیم: «Eu sou brasileiro».',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-2-q2',
      type: 'mcq',
      prompt: 'Complete: Eu ___ no Brasil para trabalhar.',
      promptFa: 'کدام فعل برای «در برزیل بودن» (مکان/موقتی) درست است؟',
      options: ['sou', 'estou', 'tenho', 'são'],
      answer: 'estou',
      explanationFa:
        'بودن در یک مکان حالتی موقتی است، پس ESTAR: «Eu estou no Brasil». مقایسه کنید با «sou brasileiro» که ملیت ثابت است.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-2-q3',
      type: 'mcq',
      prompt: 'Escolha o pronome: ___ é secretária. [uma mulher]',
      promptFa: 'ضمیر مناسب برای «او یک منشی (زن) است» کدام است؟',
      options: ['ele', 'ela', 'nós', 'eu'],
      answer: 'ela',
      explanationFa:
        'برای سوم‌شخص مفرد مؤنث از «ela» استفاده می‌کنیم. «ele» برای مذکر است.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-2-q4',
      type: 'translate-fa-pt',
      prompt: '«اسم من آنا است. من سی سال دارم.» را به پرتغالی بنویسید.',
      promptFa: 'این جمله را به پرتغالی برزیلی ترجمه کنید.',
      options: [],
      answer: 'Meu nome é Ana. Eu tenho trinta anos.',
      explanationFa:
        'برای سن از فعل ter استفاده می‌شود: «tenho … anos». گفتن «sou trinta anos» اشتباه رایج است.',
      cefr: 'A1',
      skill: 'writing',
    },
    {
      id: 'course-aula-2-q5',
      type: 'translate-pt-fa',
      prompt: 'Traduza para o persa: "Obrigada! De nada."',
      promptFa:
        'این عبارت را به فارسی ترجمه کنید و به جنسیت گویندهٔ obrigada دقت کنید.',
      options: [],
      answer: 'ممنون! (گفتهٔ یک زن) خواهش می‌کنم.',
      explanationFa:
        '«obrigada» را یک زن می‌گوید (مرد «obrigado» می‌گوید) و «de nada» یعنی «خواهش می‌کنم».',
      cefr: 'A1',
      skill: 'vocab',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 2.',
};
