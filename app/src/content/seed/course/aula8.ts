import type { CourseLesson } from '@/domain/content/schema';

export const aula8: CourseLesson = {
  id: 'course-aula-8',
  order: 8,
  aula: 'Aula 8',
  titleFa: 'افعال ۲ — وجه اخباری (افعال بی‌قاعده)',
  titlePt: 'Verbos 2 — Indicativo (Irregulares)',
  cefr: 'A2',
  summaryFa:
    'در این درس مهم‌ترین افعال بی‌قاعدهٔ پرتغالی برزیلی را در وجه اخباری یاد می‌گیرید؛ افعالی که ریشه یا شناسه‌شان هنگام صرف تغییر می‌کند و باید حفظ شوند. تمرکز روی زمان حال (Presente) و گذشتهٔ کامل (Pretérito Perfeito) برای پرکاربردترین افعال زندگی روزمره و مصاحبهٔ شهروندی است: ser، estar، ter، ir و fazer، و سپس dar و گروهی از افعال مهم دیگر (poder, querer, ver, vir, saber, pôr).',
  objectivesFa: [
    'بدانید فعل بی‌قاعده چیست و چرا باید صرف آن را حفظ کنید.',
    'صرف ser، estar، ter، ir و fazer را در زمان حال و گذشتهٔ کامل به‌کار ببرید.',
    'یکسان بودن گذشتهٔ ser و ir (fui, foi, fomos, foram) را بشناسید.',
    'افعال dar، poder، querer، ver، vir، saber و pôr را در جمله‌های روزمره استفاده کنید.',
    'اشتباه‌های رایج فارسی‌زبانان در صرف این افعال را تشخیص دهید و از آن‌ها پرهیز کنید.',
  ],
  sections: [
    {
      headingFa: '۱. فعل بی‌قاعده یعنی چه؟',
      bodyFa:
        'فعل بی‌قاعده فعلی است که هنگام صرف، ریشه یا شناسه‌اش تغییر می‌کند و از الگوی منظمِ افعال باقاعده (ar/er/ir) پیروی نمی‌کند. برای همین نمی‌توان آن‌ها را «ساخت»، بلکه باید حفظشان کرد. خبر خوب این است که پرکاربردترین افعال زبان دقیقاً همین‌ها هستند، پس با حفظ چند فعل، بخش بزرگی از گفتار روزمره را پوشش می‌دهید. در این درس دو زمان کلیدی را می‌بینیم: زمان حال (اکنون) و گذشتهٔ کامل (کارِ تمام‌شده در گذشته).',
      examples: [
        {
          pt: 'Eu vou ao mercado. / Eu fui ao mercado.',
          fa: 'من به بازار می‌روم. / من به بازار رفتم.',
          pron: 'اِئو وُ آئو مِرکادو / اِئو فویی آئو مِرکادو',
          note: 'همان فعل ir در حال «vou» و در گذشته «fui» است؛ ریشه کاملاً عوض می‌شود.',
        },
        {
          pt: 'Ela faz um bolo. / Ela fez um bolo.',
          fa: 'او یک کیک می‌پزد. / او یک کیک پخت.',
          pron: 'اِلا فایس اوم بُلو / اِلا فِس اوم بُلو',
          note: 'fazer در حال «faz» و در گذشته «fez»؛ حفظ کنید.',
        },
      ],
    },
    {
      headingFa: '۲. فعل SER (بودن — ثابت/هویت)',
      bodyFa:
        'SER پرکاربردترین فعل «بودن» برای هویت، ملیت، شغل و ویژگی‌های ثابت است و در مصاحبهٔ شهروندی مدام تکرار می‌شود.\n\nزمان حال (Presente):\neu sou / você é / ele é / nós somos / vocês são / eles são\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu fui / você foi / ele foi / nós fomos / vocês foram / eles foram\n\nتوجه: صرف گذشتهٔ SER دقیقاً مثل فعل IR است (fui, foi, fomos, foram) و از روی معنای جمله تشخیص داده می‌شود.',
      examples: [
        {
          pt: 'Eu sou iraniano e sou pedreiro.',
          fa: 'من ایرانی هستم و بنّا هستم.',
          pron: 'اِئو سُ ایرانیانو ای سُ پِدرِیرو',
          note: 'ملیت و شغل هر دو ویژگی ثابت‌اند → SER.',
        },
        {
          pt: 'O livro foi muito interessante.',
          fa: 'کتاب خیلی جالب بود.',
          pron: 'اُ لیورو فویی مویتو اینترِسانتی',
          note: 'foi = گذشتهٔ ser (سوم‌شخص مفرد).',
        },
        {
          pt: 'Nós fomos bons amigos na escola.',
          fa: 'ما در مدرسه دوستان خوبی بودیم.',
          pron: 'نُس فُموس بُنس آمیگوس نا اِسکُلا',
          note: 'fomos = «بودیم»؛ همین شکل در ir یعنی «رفتیم».',
        },
      ],
    },
    {
      headingFa: '۳. فعل ESTAR (بودن — موقتی/حالت/مکان)',
      bodyFa:
        'ESTAR برای حالت‌های موقتی، احساس همین لحظه و مکان به‌کار می‌رود. در پرتغالی برخلاف فارسی دو فعل «بودن» داریم؛ SER برای ثابت و ESTAR برای موقتی.\n\nزمان حال (Presente):\neu estou / você está / ele está / nós estamos / vocês estão / eles estão\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu estive / você esteve / ele esteve / nós estivemos / vocês estiveram / eles estiveram',
      examples: [
        {
          pt: 'Eu estou no Brasil há dois anos.',
          fa: 'من دو سال است که در برزیل هستم.',
          pron: 'اِئو اِستُ نو برازیل آ دُیس آنوس',
          note: 'مکان → ESTAR. مقایسه: «sou iraniano» (ملیت ثابت → SER).',
        },
        {
          pt: 'Hoje eu estou muito cansado.',
          fa: 'امروز من خیلی خسته‌ام.',
          pron: 'اُجی اِئو اِستُ مویتو کانسادو',
          note: 'حالت موقتی همین امروز → ESTAR.',
        },
        {
          pt: 'Ontem eu estive no hospital.',
          fa: 'دیروز من در بیمارستان بودم.',
          pron: 'اُنتِین اِئو اِستیوی نو اُسپیتال',
          note: 'estive = گذشتهٔ estar (اول‌شخص). با «fui» اشتباه نگیرید.',
        },
      ],
    },
    {
      headingFa: '۴. فعل TER (داشتن)',
      bodyFa:
        'TER یعنی «داشتن» و یکی از پرکاربردترین افعال است؛ هم برای مالکیت، هم برای سن (برخلاف فارسی که «سن دارم» نمی‌گوییم، در پرتغالی سن را با ter می‌گویند).\n\nزمان حال (Presente):\neu tenho / você tem / ele tem / nós temos / vocês têm / eles têm\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu tive / você teve / ele teve / nós tivemos / vocês tiveram / eles tiveram\n\nنکته: سوم‌شخص جمع در نوشتار «têm» با علامت است تا از مفرد «tem» جدا شود.',
      examples: [
        {
          pt: 'Eu tenho trinta anos e tenho dois filhos.',
          fa: 'من سی سال دارم و دو فرزند دارم.',
          pron: 'اِئو تِنیو ترینتا آنوس ای تِنیو دُیس فیلیوس',
          note: 'سن با ter گفته می‌شود، نه ser. «sou trinta anos» غلط است.',
        },
        {
          pt: 'Vocês têm documento de identidade?',
          fa: 'شما کارت شناسایی دارید؟',
          pron: 'وُسِس تِین دُکومِنتو جی ایدِنتیدادی؟',
          note: 'têm = سوم‌شخص جمع (شما/آن‌ها).',
        },
        {
          pt: 'Ontem eu tive uma reunião importante.',
          fa: 'دیروز من یک جلسهٔ مهم داشتم.',
          pron: 'اُنتِین اِئو تیوی اوما رِئونیائو ایمپورتانتی',
          note: 'tive = گذشتهٔ ter (اول‌شخص).',
        },
      ],
    },
    {
      headingFa: '۵. فعل IR (رفتن)',
      bodyFa:
        'IR یعنی «رفتن» و برای بیان مقصد و همچنین ساختن آیندهٔ نزدیک (ir + مصدر) بسیار مهم است.\n\nزمان حال (Presente):\neu vou / você vai / ele vai / nós vamos / vocês vão / eles vão\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu fui / você foi / ele foi / nós fomos / vocês foram / eles foram\n\nهمان‌طور که گفتیم، گذشتهٔ IR کاملاً شبیه گذشتهٔ SER است و فقط از روی معنا تشخیص داده می‌شود.',
      examples: [
        {
          pt: 'Todos os domingos nós vamos à igreja.',
          fa: 'هر یکشنبه ما به کلیسا می‌رویم.',
          pron: 'تُدوس اوس دُمینگوس نُس واموس آ ایگرِژا',
          note: 'vamos = «می‌رویم».',
        },
        {
          pt: 'Amanhã eu vou trabalhar cedo.',
          fa: 'فردا من زود سرِ کار می‌روم.',
          pron: 'آمانیا اِئو وُ ترابایار سِدو',
          note: 'ir + مصدر (vou trabalhar) = آیندهٔ نزدیک، مثل «خواهم رفت کار کنم».',
        },
        {
          pt: 'No ano passado eu fui ao Rio de Janeiro.',
          fa: 'سال گذشته من به ریو دو ژانیرو رفتم.',
          pron: 'نو آنو پاسادو اِئو فویی آئو ریو جی ژانِیرو',
          note: 'fui اینجا یعنی «رفتم» (ir)، نه «بودم».',
        },
      ],
    },
    {
      headingFa: '۶. فعل FAZER (کردن/انجام دادن/ساختن)',
      bodyFa:
        'FAZER یعنی «کردن، انجام دادن، ساختن» و در پرسش‌های روزمره («چه کار می‌کنی؟») و مصاحبه بسیار پرکاربرد است.\n\nزمان حال (Presente):\neu faço / você faz / ele faz / nós fazemos / vocês fazem / eles fazem\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu fiz / você fez / ele fez / nós fizemos / vocês fizeram / eles fizeram',
      examples: [
        {
          pt: 'O que você faz no Brasil?',
          fa: 'تو در برزیل چه کار می‌کنی؟',
          pron: 'اُ کی وُسه فایس نو برازیل؟',
          note: 'پرسش پرتکرار در مصاحبه؛ faz = «می‌کند/می‌کنی».',
        },
        {
          pt: 'Nós fazemos a lição de casa depois da aula.',
          fa: 'ما تکالیف را بعد از کلاس انجام می‌دهیم.',
          pron: 'نُس فازِموس آ لیسائو جی کازا دِپُیس دا آولا',
        },
        {
          pt: 'O que vocês fizeram no domingo passado?',
          fa: 'شما یکشنبهٔ گذشته چه کار کردید؟',
          pron: 'اُ کی وُسِس فیزِرام نو دُمینگو پاسادو؟',
          note: 'fizeram = گذشتهٔ سوم‌شخص جمع.',
        },
      ],
    },
    {
      headingFa: '۷. فعل DAR (دادن)',
      bodyFa:
        'DAR یعنی «دادن» و در عبارت‌های روزمرهٔ فراوانی به‌کار می‌رود (dar um abraço = بغل کردن، dar certo = درست از آب درآمدن).\n\nزمان حال (Presente):\neu dou / você dá / ele dá / nós damos / vocês dão / eles dão\n\nگذشتهٔ کامل (Pretérito Perfeito):\neu dei / você deu / ele deu / nós demos / vocês deram / eles deram',
      examples: [
        {
          pt: 'Eu dou um presente para ela.',
          fa: 'من به او یک هدیه می‌دهم.',
          pron: 'اِئو دُ اوم پرِزِنتی پارا اِلا',
        },
        {
          pt: 'A enfermeira deu o remédio ao paciente.',
          fa: 'پرستار دارو را به بیمار داد.',
          pron: 'آ اِنفِرمِیرا دِئو اُ رِمِجیو آئو پاسیِنتی',
          note: 'deu = گذشتهٔ سوم‌شخص مفرد.',
        },
        {
          pt: 'A gente deu um abraço nele.',
          fa: 'ما او را بغل کردیم.',
          pron: 'آ جِنتی دِئو اوم آبراسو نِلی',
          note: '«a gente» فعل سوم‌شخص مفرد می‌گیرد (deu، نه demos).',
        },
      ],
    },
    {
      headingFa: '۸. چند فعل بی‌قاعدهٔ مهم دیگر',
      bodyFa:
        'این افعال هم پرکاربردند؛ زمان حال و اول‌شخصِ گذشتهٔ کامل را حفظ کنید:\n\n• PODER (توانستن): eu posso / você pode / nós podemos / eles podem — گذشته: eu pude\n• QUERER (خواستن): eu quero / você quer / nós queremos / eles querem — گذشته: eu quis\n• VER (دیدن): eu vejo / você vê / nós vemos / eles veem — گذشته: eu vi\n• VIR (آمدن): eu venho / você vem / nós vimos / eles vêm — گذشته: eu vim\n• SABER (دانستن): eu sei / você sabe / nós sabemos / eles sabem — گذشته: eu soube\n• PÔR (گذاشتن): eu ponho / você põe / nós pomos / eles põem — گذشته: eu pus\n\nنکته: VIR در حال «venho/vem» است، اما گذشتهٔ نوشتاری «vim» شبیه حالِ «vimos» نیست؛ دقت کنید.',
      examples: [
        {
          pt: 'Eu não posso ir hoje, mas eu quero ir amanhã.',
          fa: 'من امروز نمی‌توانم بروم، اما فردا می‌خواهم بروم.',
          pron: 'اِئو نائو پُسو ایر اُجی، ماس اِئو کِرو ایر آمانیا',
          note: 'poder و querer معمولاً با یک مصدر می‌آیند (posso ir، quero ir).',
        },
        {
          pt: 'Eu sei falar um pouco de português.',
          fa: 'من بلدم کمی پرتغالی صحبت کنم.',
          pron: 'اِئو سِی فالار اوم پُکو جی پُرتوگِس',
          note: 'saber = دانستن/بلد بودنِ یک مهارت.',
        },
        {
          pt: 'Ontem eu vim de ônibus e vi meus amigos.',
          fa: 'دیروز من با اتوبوس آمدم و دوستانم را دیدم.',
          pron: 'اُنتِین اِئو وین جی اُنیبوس ای وی مِئوس آمیگوس',
          note: 'vim = گذشتهٔ vir؛ vi = گذشتهٔ ver.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'افعال بی‌قاعده ریشه‌شان تغییر می‌کند و باید حفظ شوند؛ پرکاربردترین افعال زبان همین‌ها هستند.',
    'گذشتهٔ ser و ir یکی است (fui, foi, fomos, foram) و فقط از روی معنا فرق می‌کند.',
    'سن را با ter می‌گویند: «tenho … anos»، نه با ser.',
    'estar گذشته‌اش estive/esteve است، نه fui؛ این دو را قاطی نکنید.',
    'ir + مصدر = آیندهٔ نزدیک: «vou trabalhar» یعنی «کار خواهم کرد».',
    'با «a gente» همیشه فعل سوم‌شخص مفرد بیاورید (a gente vai / deu / fez).',
  ],
  quiz: [
    {
      id: 'course-aula-8-q1',
      type: 'fill-blank',
      prompt: 'Complete no presente: O que você ___ no Brasil? (fazer)',
      promptFa: 'جای خالی را با صرف درست فعل fazer در زمان حال پر کنید.',
      options: [],
      answer: 'faz',
      explanationFa:
        'برای «você» سوم‌شخص مفرد فعل fazer در زمان حال «faz» است: «O que você faz no Brasil?».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-8-q2',
      type: 'mcq',
      prompt: 'Complete: No ano passado eu ___ ao Rio de Janeiro.',
      promptFa:
        'کدام گزینه برای «سال گذشته من به ریو رفتم» درست است؟ (گذشتهٔ ir)',
      options: ['vou', 'fui', 'estive', 'vai'],
      answer: 'fui',
      explanationFa:
        'گذشتهٔ کاملِ ir برای اول‌شخص «fui» است. اینجا معنای «رفتن» مدنظر است، نه «بودن».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-8-q3',
      type: 'fill-blank',
      prompt: 'Complete no presente: Eu ___ trinta anos. (ter)',
      promptFa: 'جای خالی را با صرف درست فعل ter پر کنید (سن).',
      options: [],
      answer: 'tenho',
      explanationFa:
        'سن با فعل ter بیان می‌شود و اول‌شخصِ حال آن «tenho» است: «Eu tenho trinta anos». «sou trinta anos» غلط است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-8-q4',
      type: 'mcq',
      prompt: 'Complete: Ontem eu ___ no hospital. (estar, passado)',
      promptFa: 'برای «دیروز در بیمارستان بودم» (گذشتهٔ estar) کدام درست است؟',
      options: ['fui', 'estive', 'sou', 'estou'],
      answer: 'estive',
      explanationFa:
        'گذشتهٔ کاملِ estar برای اول‌شخص «estive» است. با «fui» (گذشتهٔ ser/ir) اشتباه نگیرید.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-8-q5',
      type: 'mcq',
      prompt: 'Complete no presente: Vocês ___ documento de identidade? (ter)',
      promptFa: 'صرف درست ter برای «vocês» در زمان حال کدام است؟',
      options: ['tem', 'têm', 'tenho', 'temos'],
      answer: 'têm',
      explanationFa:
        'سوم‌شخص جمع (vocês/eles) در زمان حال «têm» است؛ در نوشتار با علامت می‌آید تا از مفرد «tem» جدا شود.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-8-q6',
      type: 'fill-blank',
      prompt:
        'Complete no passado: O que vocês ___ no domingo passado? (fazer)',
      promptFa: 'جای خالی را با گذشتهٔ کاملِ fazer برای «vocês» پر کنید.',
      options: [],
      answer: 'fizeram',
      explanationFa:
        'گذشتهٔ کاملِ fazer برای سوم‌شخص جمع «fizeram» است: «O que vocês fizeram no domingo passado?».',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 8.',
};
