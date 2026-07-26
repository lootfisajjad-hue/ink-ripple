import type { CourseLesson } from '@/domain/content/schema';

export const aula7: CourseLesson = {
  id: 'course-aula-7',
  order: 7,
  aula: 'Aula 7',
  titleFa: 'افعال ۱ — وجه اخباری (افعال باقاعده)',
  titlePt: 'Verbos 1 — Indicativo (Regulares)',
  cefr: 'A2',
  summaryFa:
    'در این درس یاد می‌گیرید که فعل چیست و «وجه اخباری» (modo indicativo) یعنی چه. سپس افعال باقاعده را در سه گروه صرفی پرتغالی می‌شناسید: افعال ختم به ‎-AR‎ (مثل falar)، ختم به ‎-ER‎ (مثل comer) و ختم به ‎-IR‎ (مثل partir). با جدول‌های روشن، صرف این افعال را در چهار زمانِ حال (Presente)، گذشتهٔ ساده/کامل (Pretérito Perfeito)، گذشتهٔ استمراری (Pretérito Imperfeito) و آیندهٔ حال (Futuro do Presente) می‌آموزید. هدف این است که با یاد گرفتنِ «پایانه‌ها» بتوانید هر فعل باقاعده‌ای را خودتان صرف کنید.',
  objectivesFa: [
    'مفهوم فعل و وجه اخباری (indicativo) را درک کنید.',
    'سه گروه افعال باقاعده (‎-AR‎، ‎-ER‎، ‎-IR‎) و بُن (radical) و پایانه (terminação) را بشناسید.',
    'افعال باقاعده را در چهار زمان اصلیِ وجه اخباری صرف کنید.',
    'الگوی پایانه‌ها را حفظ کنید تا هر فعل باقاعدهٔ تازه‌ای را بتوانید صرف کنید.',
  ],
  sections: [
    {
      headingFa: '۱. فعل و وجه اخباری (Indicativo) چیست؟',
      bodyFa:
        'فعل کلمه‌ای است که رویدادی را در زمان نشان می‌دهد: یک کار، حالت، فرایند یا پدیده. افعال در پرتغالی بر اساس شخص، شمار، زمان و «وجه» (modo) تغییر می‌کنند. وجه اخباری (indicativo) برای بیانِ چیزی «واقعی و قطعی» به‌کار می‌رود؛ یعنی گوینده مطمئن است که آنچه می‌گوید در گذشته، حال یا آینده رخ داده یا رخ می‌دهد (برخلاف وجه التزامی که احتمال را نشان می‌دهد). در این درس فقط افعال باقاعده در همین وجه را می‌خوانیم.',
      examples: [
        {
          pt: 'Agora eu estou na academia.',
          fa: 'الان من در باشگاه هستم.',
          pron: 'آگورا اِئو اِستُ نا آکادِمیا',
          note: 'یک واقعیتِ همین لحظه → وجه اخباری، زمان حال.',
        },
        {
          pt: 'Tomo banho todos os dias.',
          fa: 'هر روز دوش می‌گیرم.',
          pron: 'تُمو بانیو تودوس اوس جیاس',
          note: 'کار عادتی و همیشگی هم با زمان حالِ اخباری بیان می‌شود.',
        },
      ],
    },
    {
      headingFa: '۲. سه گروه صرفی و افعال باقاعده',
      bodyFa:
        'هر فعل پرتغالی یک «بُن» (radical) دارد و یک «پایانهٔ مصدری». مصدرها به سه شکل تمام می‌شوند و همین سه گروه صرفی را می‌سازند: گروه اول ختم به ‎-AR‎ (مثل fal-ar)، گروه دوم ختم به ‎-ER‎ (مثل com-er) و گروه سوم ختم به ‎-IR‎ (مثل part-ir). فعل «باقاعده» فعلی است که بُنش تغییر نمی‌کند و فقط پایانهٔ مخصوص گروه خودش را می‌گیرد. کافی است بُن را جدا کنید و پایانهٔ درست را بچسبانید. فعل‌های الگوی ما در این درس: falar (حرف زدن)، comer (خوردن)، partir (رفتن/عزیمت کردن).',
      examples: [
        {
          pt: 'fal-ar → falo, falei, falarei',
          fa: 'حرف زدن → حرف می‌زنم، حرف زدم، حرف خواهم زد',
          pron: 'فالار → فالو، فالِی، فالارِی',
          note: 'بُن «fal-» ثابت می‌ماند؛ فقط پایانه عوض می‌شود.',
        },
        {
          pt: 'com-er → como, comi, comerei',
          fa: 'خوردن → می‌خورم، خوردم، خواهم خورد',
          pron: 'کُمِر → کُمو، کُمی، کُمِرِی',
        },
        {
          pt: 'divid-ir → divido, dividi, dividirei',
          fa: 'تقسیم کردن → تقسیم می‌کنم، تقسیم کردم، تقسیم خواهم کرد',
          pron: 'جیویدیر → جیویدو، جیویدی، جیویدیرِی',
          note: 'partir هم دقیقاً همین الگوی گروه ‎-IR‎ را دارد.',
        },
      ],
    },
    {
      headingFa: '۳. زمان حال (Presente do Indicativo)',
      bodyFa:
        'زمان حال کاری را نشان می‌دهد که همین حالا رخ می‌دهد، یا عادت و حالتی همیشگی است. پایانه‌ها برای شش شخص (eu / você / ele / nós / vocês / eles):\n‎-AR‎: ‎-o, -a, -amos, -am‎\n‎-ER‎: ‎-o, -e, -emos, -em‎\n‎-IR‎: ‎-o, -e, -imos, -em‎\nجدول کامل:\nfalar: eu falo · você fala · ele fala · nós falamos · vocês falam · eles falam\ncomer: eu como · você come · ele come · nós comemos · vocês comem · eles comem\npartir: eu parto · você parte · ele parte · nós partimos · vocês partem · eles partem\n(نکته: «a gente» با صیغهٔ سوم‌شخص مفرد می‌آید: a gente fala/come/parte.)',
      examples: [
        {
          pt: 'Eu falo com meu filho. / Nós falamos bem português.',
          fa: 'من با پسرم حرف می‌زنم. / ما پرتغالی را خوب حرف می‌زنیم.',
          pron: 'اِئو فالو کُم مِئو فیلیو / نُس فالاموس بِین پُرتوگِس',
        },
        {
          pt: 'Ele come um doce. / Eles comem as frutas.',
          fa: 'او یک شیرینی می‌خورد. / آن‌ها میوه‌ها را می‌خورند.',
          pron: 'اِلی کُمی اوم دُسی / اِلیس کُمِین آس فروتاس',
        },
        {
          pt: 'Eu parto agora. / Nós partimos hoje.',
          fa: 'من همین حالا می‌روم. / ما امروز می‌رویم.',
          pron: 'اِئو پارتو آگورا / نُس پارتیموس اُجی',
          note: 'به تفاوت nós comemos (گروه ‎-ER‎) و nós partimos (گروه ‎-IR‎) دقت کنید.',
        },
      ],
    },
    {
      headingFa: '۴. گذشتهٔ کامل/ساده (Pretérito Perfeito)',
      bodyFa:
        'این زمان کاری را نشان می‌دهد که در لحظه‌ای مشخص از گذشته رخ داد و تمام شد (کارِ به‌پایان‌رسیده). پایانه‌ها:\n‎-AR‎: ‎-ei, -ou, -amos, -aram‎\n‎-ER‎: ‎-i, -eu, -emos, -eram‎\n‎-IR‎: ‎-i, -iu, -imos, -iram‎\nجدول کامل:\nfalar: eu falei · você falou · ele falou · nós falamos · vocês falaram · eles falaram\ncomer: eu comi · você comeu · ele comeu · nós comemos · vocês comeram · eles comeram\npartir: eu parti · você partiu · ele partiu · nós partimos · vocês partiram · eles partiram',
      examples: [
        {
          pt: 'Comprei minha casa no ano passado.',
          fa: 'خانه‌ام را سال گذشته خریدم.',
          pron: 'کُمپرِی مینیا کازا نو آنو پاسادو',
          note: 'comprar (گروه ‎-AR‎): eu comprei؛ کارِ تمام‌شده در گذشته.',
        },
        {
          pt: 'Ontem eu comi um doce.',
          fa: 'دیروز یک شیرینی خوردم.',
          pron: 'اُنتِین اِئو کُمی اوم دُسی',
        },
        {
          pt: 'Ela partiu na segunda-feira passada.',
          fa: 'او دوشنبهٔ گذشته رفت.',
          pron: 'اِلا پارتیئو نا سِگوندا-فِیرا پاسادا',
          note: 'partir (گروه ‎-IR‎): ele/ela partiu.',
        },
      ],
    },
    {
      headingFa: '۵. گذشتهٔ استمراری (Pretérito Imperfeito)',
      bodyFa:
        'این زمان کاری را نشان می‌دهد که در گذشته به‌طور تکراری، ادامه‌دار یا عادتی رخ می‌داد (بدون آنکه لحظهٔ پایانش مهم باشد). پایانه‌ها:\n‎-AR‎: ‎-ava, -ava, -ávamos, -avam‎\n‎-ER‎ و ‎-IR‎ (یکسان): ‎-ia, -ia, -íamos, -iam‎\nجدول کامل:\nfalar: eu falava · você falava · ele falava · nós falávamos · vocês falavam · eles falavam\ncomer: eu comia · você comia · ele comia · nós comíamos · vocês comiam · eles comiam\npartir: eu partia · você partia · ele partia · nós partíamos · vocês partiam · eles partiam',
      examples: [
        {
          pt: 'Eu trabalhava de segunda a sexta, das 8h às 18h.',
          fa: 'من دوشنبه تا جمعه، از ساعت ۸ تا ۱۸ کار می‌کردم.',
          pron: 'اِئو ترابایاوا جی سِگوندا آ سِستا',
          note: 'trabalhar (گروه ‎-AR‎): عادتِ گذشته → imperfeito.',
        },
        {
          pt: 'Eu sempre via… → Eu sempre comia fora.',
          fa: 'من همیشه بیرون غذا می‌خوردم.',
          pron: 'اِئو سِمپری کُمیا فُرا',
          note: 'comer (گروه ‎-ER‎): کارِ تکراری در گذشته.',
        },
        {
          pt: 'Antigamente eu bebia muito leite.',
          fa: 'قدیم‌ها من خیلی شیر می‌خوردم.',
          pron: 'آنتیگامِنتی اِئو بِبیا موینتو لِیتی',
          note: 'beber (گروه ‎-ER‎): eu bebia؛ عادتِ گذشته.',
        },
      ],
    },
    {
      headingFa: '۶. آیندهٔ حال (Futuro do Presente)',
      bodyFa:
        'این زمان کاری را نشان می‌دهد که در آینده رخ خواهد داد. نکتهٔ آسان: در این زمان پایانه‌ها به کلِ «مصدر» چسبیده می‌شوند (نه به بُن)، و برای هر سه گروه یکسان‌اند:\nمصدر + ‎-ei, -á, -emos, -ão‎\nجدول کامل:\nfalar: eu falarei · você falará · ele falará · nós falaremos · vocês falarão · eles falarão\ncomer: eu comerei · você comerá · ele comerá · nós comeremos · vocês comerão · eles comerão\npartir: eu partirei · você partirá · ele partirá · nós partiremos · vocês partirão · eles partirão',
      examples: [
        {
          pt: 'Farei minha lição de casa amanhã.',
          fa: 'تکالیفم را فردا انجام خواهم داد.',
          pron: 'فارِی مینیا لیسائو جی کازا آمانیا',
          note: 'مثال کتاب برای مفهومِ آینده؛ توجه: خودِ fazer بی‌قاعده است، اما پایانه‌های آینده همان ‎-ei/-á/…‎ هستند.',
        },
        {
          pt: 'Amanhã eles abrirão ao meio-dia.',
          fa: 'فردا آن‌ها ظهر باز خواهند کرد.',
          pron: 'آمانیا اِلیس آبریرائو آئو مِیو-جیا',
          note: 'abrir (گروه ‎-IR‎): eles abrirão.',
        },
        {
          pt: 'Amanhã nós comeremos no restaurante.',
          fa: 'فردا در رستوران غذا خواهیم خورد.',
          pron: 'آمانیا نُس کُمِرِموس نو رِستائورانتی',
          note: 'comer (گروه ‎-ER‎): nós comeremos.',
        },
      ],
    },
    {
      headingFa: '۷. جمع‌بندی: با الگو هر فعل باقاعده را صرف کنید',
      bodyFa:
        'رمزِ کار این است: فقط بُن + پایانهٔ درست. اگر پایانه‌های هر گروه را حفظ کنید، می‌توانید هر فعل باقاعده‌ای را بسازید؛ مثلاً trabalhar, tomar, gostar (گروه ‎-AR‎)؛ receber, escrever, beber (گروه ‎-ER‎)؛ abrir, dividir, assistir (گروه ‎-IR‎). فقط یادتان باشد که این قاعده‌ها برای افعال «باقاعده» است؛ افعالی مانند ir (رفتن) یا poder (توانستن) بی‌قاعده‌اند و بُنشان تغییر می‌کند (eu vou، eu posso) و جداگانه یاد گرفته می‌شوند.',
      examples: [
        {
          pt: 'entrar → eu entro, entrei, entrava, entrarei',
          fa: 'وارد شدن → وارد می‌شوم، وارد شدم، وارد می‌شدم، وارد خواهم شد',
          pron: 'اِنترار → اِنترو، اِنترِی، اِنتراوا، اِنترارِی',
          note: 'گروه ‎-AR‎، کاملاً باقاعده.',
        },
        {
          pt: 'escrever → eu escrevo, escrevi, escrevia, escreverei',
          fa: 'نوشتن → می‌نویسم، نوشتم، می‌نوشتم، خواهم نوشت',
          pron: 'اِسکرِوِر → اِسکرِوو، اِسکرِوی، اِسکرِویا، اِسکرِوِرِی',
          note: 'گروه ‎-ER‎.',
        },
        {
          pt: 'assistir → eu assisto, assisti, assistia, assistirei',
          fa: 'تماشا کردن → تماشا می‌کنم، تماشا کردم، تماشا می‌کردم، تماشا خواهم کرد',
          pron: 'آسیستیر → آسیستو، آسیستی، آسیستیا، آسیستیرِی',
          note: 'گروه ‎-IR‎.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'فعل باقاعده = بُن ثابت + پایانهٔ مخصوص گروه؛ سه گروه: ‎-AR‎، ‎-ER‎، ‎-IR‎.',
    'حال: ‎-AR‎ (o/a/amos/am)، ‎-ER‎ (o/e/emos/em)، ‎-IR‎ (o/e/imos/em).',
    'گذشتهٔ کامل: ‎-AR‎ (ei/ou/amos/aram)، ‎-ER‎ (i/eu/emos/eram)، ‎-IR‎ (i/iu/imos/iram).',
    'گذشتهٔ استمراری: ‎-AR‎ (ava/…/ávamos/avam)؛ ‎-ER‎ و ‎-IR‎ یکسان (ia/…/íamos/iam).',
    'آینده: مصدرِ کامل + (ei/á/emos/ão) و برای هر سه گروه یکسان است.',
  ],
  quiz: [
    {
      id: 'course-aula-7-q1',
      type: 'fill-blank',
      prompt: 'Presente: Eu ___ português com meu filho. (falar)',
      promptFa:
        'فعل falar را برای «eu» در زمان حال صرف کنید (گروه ‎-AR‎، پایانهٔ ‎-o‎).',
      options: [],
      answer: 'falo',
      explanationFa:
        'گروه ‎-AR‎ در زمان حال برای eu پایانهٔ ‎-o‎ می‌گیرد: fal- + o = «falo».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q2',
      type: 'mcq',
      prompt: 'Presente: Nós ___ hoje de manhã. (partir)',
      promptFa: 'فعل partir را برای «nós» در زمان حال صرف کنید (گروه ‎-IR‎).',
      options: ['partimos', 'partem', 'parto', 'partiram'],
      answer: 'partimos',
      explanationFa:
        'گروه ‎-IR‎ در زمان حال برای nós پایانهٔ ‎-imos‎ می‌گیرد: part- + imos = «partimos». دقت کنید که گروه ‎-ER‎ به‌جای آن ‎-emos‎ دارد (comemos).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q3',
      type: 'fill-blank',
      prompt: 'Pretérito Perfeito: Ontem eu ___ um doce. (comer)',
      promptFa:
        'فعل comer را برای «eu» در گذشتهٔ کامل (Pretérito Perfeito) صرف کنید.',
      options: [],
      answer: 'comi',
      explanationFa:
        'گروه ‎-ER‎ در گذشتهٔ کامل برای eu پایانهٔ ‎-i‎ می‌گیرد: com- + i = «comi».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q4',
      type: 'mcq',
      prompt:
        'Pretérito Imperfeito: Antigamente eu ___ de segunda a sexta. (trabalhar)',
      promptFa:
        'فعل trabalhar را برای «eu» در گذشتهٔ استمراری (کارِ عادتیِ گذشته) صرف کنید.',
      options: ['trabalhava', 'trabalhei', 'trabalho', 'trabalharei'],
      answer: 'trabalhava',
      explanationFa:
        'برای عادتِ گذشته از گذشتهٔ استمراری استفاده می‌کنیم؛ گروه ‎-AR‎ برای eu پایانهٔ ‎-ava‎ می‌گیرد: trabalh- + ava = «trabalhava». گزینهٔ trabalhei گذشتهٔ کامل است (کارِ یک‌بارهٔ تمام‌شده).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q5',
      type: 'fill-blank',
      prompt: 'Futuro do Presente: Amanhã nós ___ português juntos. (estudar)',
      promptFa:
        'فعل estudar را برای «nós» در آیندهٔ حال صرف کنید (مصدر + پایانهٔ آینده).',
      options: [],
      answer: 'estudaremos',
      explanationFa:
        'در آینده، پایانه به کلِ مصدر می‌چسبد؛ برای nós پایانهٔ ‎-emos‎ است: estudar + emos = «estudaremos».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q6',
      type: 'mcq',
      prompt: 'Presente: Eles ___ as frutas no café da manhã. (comer)',
      promptFa: 'فعل comer را برای «eles» در زمان حال صرف کنید (گروه ‎-ER‎).',
      options: ['comem', 'come', 'comemos', 'comeram'],
      answer: 'comem',
      explanationFa:
        'گروه ‎-ER‎ در زمان حال برای eles پایانهٔ ‎-em‎ می‌گیرد: com- + em = «comem». گزینهٔ comeram گذشتهٔ کامل است.',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 7.',
};
