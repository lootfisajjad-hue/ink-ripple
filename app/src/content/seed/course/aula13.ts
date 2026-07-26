import type { CourseLesson } from '@/domain/content/schema';

export const aula13: CourseLesson = {
  id: 'course-aula-13',
  order: 13,
  aula: 'Aula 13',
  titleFa: 'قیدها',
  titlePt: 'Advérbios',
  cefr: 'A2',
  summaryFa:
    'در این درس با «قید» (advérbio) آشنا می‌شوید: کلمه‌ای که معنای فعل، صفت یا قید دیگر را تغییر می‌دهد و برخلاف صفت، تغییرناپذیر است. یاد می‌گیرید قیدها را بر اساس معنا دسته‌بندی کنید — حالت (modo)، زمان (tempo)، مکان (lugar)، شدت (intensidade)، تأکید/نفی/تردید و قیدهای پرسشی — و می‌بینید چطور با پسوند «-mente» از یک صفت، قید بسازید.',
  objectivesFa: [
    'تعریف قید و تفاوت آن با صفت را بفهمید (قید تغییرناپذیر است).',
    'قیدهای حالت، زمان، مکان و شدت را بشناسید و به‌کار ببرید.',
    'قیدهای تأکید، نفی و تردید را از هم تشخیص دهید.',
    'با پسوند «-mente» از صفت مؤنث، قید بسازید.',
    'با قیدهای پرسشی (onde, quando, como, por quê) سؤال بسازید.',
  ],
  sections: [
    {
      headingFa: '۱. قید چیست؟ تفاوتش با صفت',
      bodyFa:
        'قید (advérbio) کلمه‌ای است که معنای فعل، صفت یا قید دیگری را تغییر می‌دهد و به جمله اطلاعات بیشتری می‌افزاید. نکتهٔ کلیدی: قید «تغییرناپذیر» است، یعنی با جنسیت و شمار عوض نمی‌شود؛ اما صفت با اسم هماهنگ می‌شود (مذکر/مؤنث، مفرد/جمع). پس صفت اسم را وصف می‌کند، ولی قید معمولاً فعل یا صفت را.',
      examples: [
        {
          pt: 'Ela dorme pouco.',
          fa: 'او کم می‌خوابد.',
          pron: 'اِلا دُرمی پُوکو',
          note: 'اینجا «pouco» قید است و فعل «dorme» را تغییر می‌دهد.',
        },
        {
          pt: 'Esta aula é muito boa.',
          fa: 'این کلاس خیلی خوب است.',
          pron: 'اِستا آئولا اِ مویتو بُآ',
          note: '«muito» قید است و صفت «boa» را تشدید می‌کند.',
        },
        {
          pt: 'Ele cantou muito bem.',
          fa: 'او خیلی خوب آواز خواند.',
          pron: 'اِلی کانتُ مویتو بِین',
          note: 'اینجا «muito» قیدِ «bem» است؛ یعنی قید، قیدِ دیگر را تغییر می‌دهد.',
        },
        {
          pt: 'menino alto / menina alta',
          fa: 'پسرِ قدبلند / دخترِ قدبلند',
          pron: 'مِنینو آلتو / مِنینا آلتا',
          note: 'مقایسه: «alto» صفت است و با جنسیت عوض می‌شود (alto/alta)، اما قید هرگز تغییر نمی‌کند.',
        },
      ],
    },
    {
      headingFa: '۲. قیدهای حالت (modo)',
      bodyFa:
        'قیدهای حالت نشان می‌دهند کاری «چگونه» انجام می‌شود. رایج‌ترین‌ها: bem (خوب)، mal (بد)، devagar (آهسته)، depressa (تند)، assim (این‌طور). دقت کنید: «bem» قید است و نباید با صفت «bom/boa» (خوب) اشتباه شود.',
      examples: [
        {
          pt: 'A cantora canta bem.',
          fa: 'خواننده خوب می‌خواند.',
          pron: 'آ کانتُرا کانتا بِین',
          note: '«bem» قید است؛ فعل canta را وصف می‌کند. نگویید «canta bom».',
        },
        {
          pt: 'Ela dança mal.',
          fa: 'او بد می‌رقصد.',
          pron: 'اِلا دانسا مال',
        },
        {
          pt: 'Por favor, fale devagar.',
          fa: 'لطفاً آهسته صحبت کنید.',
          pron: 'پور فاوُر، فالی دِواگار',
          note: 'عبارتی بسیار کاربردی وقتی هنوز پرتغالی‌تان کامل نیست.',
        },
      ],
    },
    {
      headingFa: '۳. ساختن قید با پسوند «-mente»',
      bodyFa:
        'بیشتر قیدهای حالت با افزودن «-mente» به «شکل مؤنثِ» صفت ساخته می‌شوند؛ درست مثل «-ly» در انگلیسی. اگر صفت به «-o» ختم شود، اول آن را مؤنث کنید (o ← a) و بعد -mente بیفزایید: rápido ← rápida ← rapidamente. اگر صفت به «-e» یا حروف دیگر ختم شود، مستقیم -mente اضافه کنید: fácil ← facilmente.',
      examples: [
        {
          pt: 'Consigo falar naturalmente.',
          fa: 'می‌توانم طبیعی صحبت کنم.',
          pron: 'کُنسیگو فالار ناتورالمِنتی',
          note: 'natural + mente. صفت به l ختم شده، پس مستقیم اضافه می‌شود.',
        },
        {
          pt: 'Eu compreendo português facilmente.',
          fa: 'من پرتغالی را به‌راحتی می‌فهمم.',
          pron: 'اِئو کُمپری‌اِندو پُرتوگِس فاسیلمِنتی',
          note: 'fácil ← facilmente.',
        },
        {
          pt: 'O rio secou rapidamente.',
          fa: 'رودخانه به‌سرعت خشک شد.',
          pron: 'او هیو سِکُ هاپیدامِنتی',
          note: 'rápido ← rápida ← rapidamente. اول مؤنث، بعد پسوند.',
        },
      ],
    },
    {
      headingFa: '۴. قیدهای زمان (tempo)',
      bodyFa:
        'این قیدها نشان می‌دهند کاری «کِی» رخ می‌دهد. مهم‌ترین‌ها: hoje (امروز)، ontem (دیروز)، amanhã (فردا)، agora (الان)، sempre (همیشه)، nunca (هرگز)، já (دیگر/همین‌حالا)، ainda (هنوز)، cedo (زود)، tarde (دیر).',
      examples: [
        {
          pt: 'Ontem estava chovendo muito.',
          fa: 'دیروز باران زیادی می‌بارید.',
          pron: 'اُنتِین اِستاوا شُوِندو مویتو',
        },
        {
          pt: 'Volto já para a nossa reunião.',
          fa: 'همین‌الان برای جلسه‌مان برمی‌گردم.',
          pron: 'وُلتو ژا پارا آ نُسا هِئونیائو',
          note: '«já» یعنی «همین حالا / بی‌درنگ» و در نفی یعنی «دیگر».',
        },
        {
          pt: 'Eu ainda não terminei.',
          fa: 'من هنوز تمام نکرده‌ام.',
          pron: 'اِئو آیندا نائو ترمینِی',
          note: '«ainda» = هنوز.',
        },
        {
          pt: 'Eu sempre acordo cedo.',
          fa: 'من همیشه زود بیدار می‌شوم.',
          pron: 'اِئو سِمپری آکُردو سِدو',
        },
      ],
    },
    {
      headingFa: '۵. قیدهای مکان (lugar)',
      bodyFa:
        'این قیدها نشان می‌دهند کاری «کجا» رخ می‌دهد: aqui (اینجا)، ali/lá (آنجا)، aí (آنجا، نزدیک مخاطب)، perto (نزدیک)، longe (دور)، dentro (داخل)، fora (بیرون). نکتهٔ ظریف: «aqui» نزدیک گوینده، «aí» نزدیک شنونده، «lá» دور از هر دو، و «ali» نزدیک یک نقطهٔ مرجع است.',
      examples: [
        {
          pt: 'Aqui na minha cidade chove muito.',
          fa: 'اینجا در شهر من زیاد باران می‌بارد.',
          pron: 'آکی نا مینیا سیدادی شُوی مویتو',
          note: '«aqui» = نزدیک گوینده.',
        },
        {
          pt: 'Tenho amigos lá na Alemanha.',
          fa: 'من آنجا در آلمان دوستانی دارم.',
          pron: 'تِنیو آمیگوس لا نا آلِمانیا',
          note: '«lá» = دور از هر دو طرف گفتگو.',
        },
        {
          pt: 'O professor mora muito longe da escola.',
          fa: 'معلم خیلی دور از مدرسه زندگی می‌کند.',
          pron: 'او پروفِسور مُرا مویتو لُنژی دا اِسکُلا',
        },
        {
          pt: 'Ali perto do centro tem um metrô.',
          fa: 'آنجا نزدیک مرکز شهر یک مترو هست.',
          pron: 'آلی پِرتو دو سِنترو تِین اون مِترُ',
        },
      ],
    },
    {
      headingFa: '۶. قیدهای شدت (intensidade)',
      bodyFa:
        'این قیدها «درجه یا شدت» را بیان می‌کنند: muito (خیلی)، pouco (کم)، bastante (زیاد/به‌قدر کافی)، demais (بیش از حد)، quase (تقریباً)، tão (چنان/این‌قدر). «demais» معمولاً بعد از فعل یا صفت می‌آید و بار منفیِ «زیادی» دارد.',
      examples: [
        {
          pt: 'Eu estou muito feliz.',
          fa: 'من خیلی خوشحالم.',
          pron: 'اِئو اِستُ مویتو فِلیس',
          note: '«muito» شدتِ صفت «feliz» را بالا می‌برد.',
        },
        {
          pt: 'Eu estudei pouco.',
          fa: 'من کم درس خواندم.',
          pron: 'اِئو اِستودِی پُوکو',
        },
        {
          pt: 'Eu almocei bastante.',
          fa: 'من زیاد ناهار خوردم.',
          pron: 'اِئو آلمُسِی باستانتی',
          note: '«bastante» یعنی «به‌اندازهٔ کافی/زیاد».',
        },
        {
          pt: 'O rio secou demais.',
          fa: 'رودخانه بیش از حد خشک شد.',
          pron: 'او هیو سِکُ دِمایس',
          note: '«demais» = بیش از حد؛ بعد از فعل می‌آید.',
        },
      ],
    },
    {
      headingFa: '۷. قیدهای تأکید، نفی و تردید',
      bodyFa:
        'سه دستهٔ کوتاه اما پرکاربرد: تأکید (afirmação) مثل sim (بله)، certamente/com certeza (حتماً)، realmente (واقعاً)؛ نفی (negação) مثل não (نه)، nunca/jamais (هرگز)، nem (نه حتی)؛ و تردید (dúvida) مثل talvez (شاید)، provavelmente (احتمالاً)، possivelmente (احتمالاً/ممکن است).',
      examples: [
        {
          pt: 'Com certeza eles serão aprovados.',
          fa: 'حتماً آن‌ها قبول خواهند شد.',
          pron: 'کُن سِرتِزا اِلیس سِرائو آپروادوس',
          note: 'تأکید.',
        },
        {
          pt: 'Ela nunca vai à praia durante a semana.',
          fa: 'او هرگز در طول هفته به ساحل نمی‌رود.',
          pron: 'اِلا نونکا وای آ پرایا دورانتی آ سِمانا',
          note: 'نفی؛ «nunca» = هرگز.',
        },
        {
          pt: 'Amanhã talvez faça sol.',
          fa: 'فردا شاید آفتابی باشد.',
          pron: 'آمانیا تالوِس فاسا سُل',
          note: 'تردید؛ «talvez» معمولاً فعل را به حالت التزامی می‌برد (faça).',
        },
        {
          pt: 'Possivelmente a empresa entrará em contato.',
          fa: 'احتمالاً شرکت تماس خواهد گرفت.',
          pron: 'پُسیوِلمِنتی آ اِمپرِزا اِنترارا اِین کُنتاتو',
        },
      ],
    },
    {
      headingFa: '۸. قیدهای پرسشی (interrogativos)',
      bodyFa:
        'برای پرسیدن دربارهٔ مکان، زمان، شیوه و علت از قیدهای پرسشی استفاده می‌کنیم: onde (کجا)، quando (کِی)، como (چطور)، por quê / por que (چرا). دقت کنید: در پایان جمله «por quê» با accent نوشته می‌شود، اما در آغاز جمله «por que».',
      examples: [
        {
          pt: 'Onde você mora?',
          fa: 'کجا زندگی می‌کنی؟',
          pron: 'اُنجی وُسه مُرا؟',
        },
        {
          pt: 'Quando você chegou ao Brasil?',
          fa: 'کِی به برزیل رسیدی؟',
          pron: 'کواندو وُسه شِگُ آئو برازیل؟',
        },
        {
          pt: 'Como você está?',
          fa: 'حالت چطور است؟',
          pron: 'کُمو وُسه اِستا؟',
        },
        {
          pt: 'Por que você quer morar aqui?',
          fa: 'چرا می‌خواهی اینجا زندگی کنی؟',
          pron: 'پور که وُسه کِر مُرار آکی؟',
          note: 'در آغاز سؤال «por que» (بدون accent).',
        },
      ],
    },
  ],
  keyPointsFa: [
    'قید تغییرناپذیر است؛ صفت با جنسیت و شمار هماهنگ می‌شود (alto/alta) ولی قید نه.',
    '«bem» قید است و «bom/boa» صفت؛ نگویید «canta bom» بلکه «canta bem».',
    'ساخت قید با -mente: از شکل مؤنثِ صفت بساز (rápida ← rapidamente).',
    'aqui = نزدیک گوینده، aí = نزدیک شنونده، lá = دور از هر دو، ali = نزدیک یک مرجع.',
    '«já» = همین‌حالا، «ainda» = هنوز، «nunca/jamais» = هرگز، «talvez» = شاید.',
  ],
  quiz: [
    {
      id: 'course-aula-13-q1',
      type: 'mcq',
      prompt: 'Complete: A cantora canta ___.',
      promptFa: 'کدام گزینه درست است؟ اینجا به قیدِ حالت نیاز داریم، نه صفت.',
      options: ['bom', 'bem', 'boa', 'boas'],
      answer: 'bem',
      explanationFa:
        'فعل «canta» را باید با قید توصیف کرد، پس «bem» (خوب) درست است. «bom/boa» صفت‌اند و برای وصف اسم به‌کار می‌روند.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-13-q2',
      type: 'fill-blank',
      prompt: 'Transforme em advérbio: rápido → ___',
      promptFa:
        'از صفت «rápido» یک قید با پسوند -mente بسازید (اول مؤنث کنید، بعد پسوند بیفزایید).',
      options: [],
      answer: 'rapidamente',
      explanationFa:
        'ابتدا صفت را مؤنث می‌کنیم (rápido ← rápida) و بعد -mente اضافه می‌کنیم: «rapidamente».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-13-q3',
      type: 'mcq',
      prompt: 'Escolha o advérbio de lugar: Tenho amigos ___ na Alemanha.',
      promptFa: 'برای جایی «دور از هر دو طرف گفتگو» کدام قید مکان درست است؟',
      options: ['aqui', 'aí', 'lá', 'perto'],
      answer: 'lá',
      explanationFa:
        '«lá» برای مکانِ دور از گوینده و شنونده به‌کار می‌رود. «aqui» نزدیک گوینده و «aí» نزدیک شنونده است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-13-q4',
      type: 'fill-blank',
      prompt:
        'Complete com um advérbio de dúvida: ___ eu vá viajar para a praia.',
      promptFa: 'جای خالی را با قیدِ تردید (شاید) پر کنید.',
      options: [],
      answer: 'Talvez',
      explanationFa:
        '«Talvez» یعنی «شاید» و تردید را نشان می‌دهد؛ معمولاً فعل بعد از آن به حالت التزامی می‌آید (vá).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-13-q5',
      type: 'mcq',
      prompt:
        'Qual advérbio interrogativo pergunta sobre o tempo? ___ você chegou?',
      promptFa: 'کدام قید پرسشی دربارهٔ «زمان» می‌پرسد؟',
      options: ['Onde', 'Como', 'Quando', 'Por que'],
      answer: 'Quando',
      explanationFa:
        '«Quando» یعنی «کِی» و دربارهٔ زمان می‌پرسد. «Onde» = کجا، «Como» = چطور، «Por que» = چرا.',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 13.',
};
