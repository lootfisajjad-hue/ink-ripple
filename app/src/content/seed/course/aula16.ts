import type { CourseLesson } from '@/domain/content/schema';

export const aula16: CourseLesson = {
  id: 'course-aula-16',
  order: 16,
  aula: 'Aula 16',
  titleFa: 'گونه‌های متنی و کاربردهای واژهٔ QUE',
  titlePt: 'Gêneros Textuais e Usos da palavra QUE',
  cefr: 'B1',
  summaryFa:
    'این درس دو موضوع مهم آزمون‌های فدرال را پوشش می‌دهد. اول: «گونه‌های متنی» (gêneros textuais) یعنی این که هر متن بسته به هدف و موقعیتِ ارتباطی‌اش شکل و ساختار مشخصی دارد — خبر، ایمیل، نامه، دستور پخت، یادداشت و…. دوم: کاربردهای گوناگون واژهٔ پرکاربرد «QUE» در پرتغالی برزیلی — پرسشی، تعجبی، قیدی، به‌جای حرف اضافهٔ DE، ضمیر موصولی و حرف ربط — به‌همراه تفاوت مهم املایی por que / por quê / porque / porquê.',
  objectivesFa: [
    'مفهوم «گونهٔ متنی» و نقش ارتباطی آن را توضیح دهید.',
    'ساختار و هدف چند گونهٔ رایج (خبر، یادداشت، دستور پخت، ایمیل/نامه) را بشناسید.',
    'کاربردهای اصلی واژهٔ QUE را از هم تشخیص دهید.',
    'تفاوت املایی و معناییِ por que / por quê / porque / porquê را درست به‌کار ببرید.',
  ],
  sections: [
    {
      headingFa: '۱. گونهٔ متنی (gênero textual) چیست؟',
      bodyFa:
        'گونهٔ متنی به متن‌هایی گفته می‌شود که یک «نقش اجتماعی» مشخص دارند؛ یعنی در موقعیت‌های روزمرهٔ ارتباط به‌کار می‌روند و هدف ارتباطیِ روشنی دارند. هر گونه بسته به هدفش زبان، لحن و ساختار خاص خودش را دارد: هدفِ خبر «اطلاع‌رسانی» است، هدفِ دستور پخت «آموزش انجام کاری»، و هدفِ نامه یا ایمیل «برقراری ارتباط شخصی یا کاری». پس پیش از نوشتن باید بپرسیم: این متن برای چه کسی و با چه هدفی نوشته می‌شود؟',
      examples: [
        {
          pt: 'A notícia informa; a receita instrui; a carta comunica.',
          fa: 'خبر اطلاع می‌دهد؛ دستور پخت آموزش می‌دهد؛ نامه ارتباط برقرار می‌کند.',
          pron: 'آ نوتیسیا اینفورما؛ آ هِسِیتا اینسترویی؛ آ کارتا کومونیکا',
          note: 'هر گونه یک هدفِ ارتباطی (intenção comunicativa) دارد.',
        },
        {
          pt: 'Cada gênero tem uma função social específica.',
          fa: 'هر گونه یک نقش اجتماعیِ مشخص دارد.',
          pron: 'کادا ژِنِرو تِین اوما فونسائو سوسیال اِسپِسیفیکا',
        },
      ],
    },
    {
      headingFa: '۲. خبر (a notícia)',
      bodyFa:
        'خبر از گونهٔ روزنامه‌نگاری است، زبانی روایی و توصیفی دارد و هدفش این است که یک رویداد را با «عینیت» گزارش کند. سه بخش اصلی دارد: MANCHETE (تیتر اصلی؛ کوتاه و جذاب که موضوع را نشان می‌دهد)، LIDE (سرخبر؛ باید به پرسش‌های چه؟ چه‌کسی؟ کجا؟ کِی؟ چگونه؟ پاسخ دهد) و CORPO DA NOTÍCIA (متنِ خبر؛ جزئیات مهم رویداد).',
      examples: [
        {
          pt: 'A manchete é o título principal da notícia.',
          fa: 'مانشِته همان تیترِ اصلی خبر است.',
          pron: 'آ مانشِتی اِ او تیتولو پرینسیپال دا نوتیسیا',
        },
        {
          pt: 'O lide responde: o quê, quem, onde, quando e como.',
          fa: 'سرخبر پاسخ می‌دهد: چه، چه‌کسی، کجا، کِی و چگونه.',
          pron: 'او لایدی هِسپُندی: او که، کِین، اُنجی، کوآندو اِ کومو',
          note: 'واژهٔ lide از انگلیسیِ lead گرفته شده است.',
        },
        {
          pt: 'No corpo da notícia estão os detalhes do fato.',
          fa: 'در متنِ خبر جزئیات رویداد آمده است.',
          pron: 'نو کُرپو دا نوتیسیا اِستائو اوس دِتالیِس دو فاتو',
        },
      ],
    },
    {
      headingFa: '۳. یادداشت (o bilhete) و دستور پخت (a receita)',
      bodyFa:
        'یادداشت متنی کوتاه و ساده است؛ ساختارش شامل نامِ گیرنده، پیامِ کوتاه و روشن، خداحافظی، امضا و تاریخ است. دستور پخت یک متنِ آموزشی (instrucional) است؛ هدفش این است که خواننده را برای انجام کاری — معمولاً پخت غذا — راهنمایی کند و به همین دلیل از افعالِ امری (imperativo) استفاده می‌کند تا خواننده دستورها را دقیق دنبال کند.',
      examples: [
        {
          pt: 'Maria, saí para o mercado. Volto logo. Beijos, Ana.',
          fa: 'ماریا، برای خرید رفتم. زود برمی‌گردم. بوسه، آنا.',
          pron: 'ماریا، سایی پارا او مِرکادو. وُلتو لُگو. بِیژوس، آنا',
          note: 'یک یادداشتِ نمونه: کوتاه، با امضا و خداحافظی.',
        },
        {
          pt: 'Misture os ovos, adicione a farinha e leve ao forno.',
          fa: 'تخم‌مرغ‌ها را مخلوط کنید، آرد را اضافه کنید و در فر بگذارید.',
          pron: 'میستوره اوس اُووس، آدیسیونی آ فارینیا اِ لِوی آئو فُرنو',
          note: 'افعال امری: Misture, adicione, leve — ویژگیِ دستور پخت.',
        },
      ],
    },
    {
      headingFa: '۴. ایمیل و نامه (o e-mail e a carta)',
      bodyFa:
        'ایمیل تا حدی جای نامه‌های کاغذیِ قدیمی را گرفته است. عناصر ساختاریِ آن: VOCATIVO (خطاب به گیرنده)، TEXTO (خودِ پیام) و DESPEDIDA به‌همراه امضا (assinatura). لحنِ ایمیل بسته به میزان صمیمیتِ طرفین تغییر می‌کند و در حالت غیررسمی حتی ممکن است اختصارات (abreviações) به‌کار رود.',
      examples: [
        {
          pt: 'Prezado senhor, venho por meio deste solicitar…',
          fa: 'جناب آقا، بدین‌وسیله درخواست می‌کنم…',
          pron: 'پرِزادو سِنیُر، وِنیو پور مِیو دِستی سولیسیتار',
          note: 'خطابِ رسمی (vocativo formal) در ایمیلِ کاری.',
        },
        {
          pt: 'Oi, tudo bem? Só passando pra avisar…',
          fa: 'سلام، خوبی؟ فقط خواستم خبر بدهم…',
          pron: 'اُی، تودو بِین؟ سُ پاسّاندو پرا آویزار',
          note: 'لحنِ غیررسمی با اختصار: «pra» به‌جای «para».',
        },
        {
          pt: 'Atenciosamente, João Silva.',
          fa: 'با احترام، ژوآئو سیلوا.',
          pron: 'آتِنسیوزامِنتی، ژوآئو سیلوا',
          note: 'خداحافظیِ رسمی (despedida) + امضا.',
        },
      ],
    },
    {
      headingFa: '۵. QUE پرسشی (interrogativo)',
      bodyFa:
        'برای پرسش، QUE در آغاز جمله می‌آید و معنای «چه/چه چیزی» می‌دهد. وقتی پیش از فعل یا ضمیر بیاید، می‌تواند با حرفِ «O» همراه باشد یا نباشد؛ «O que…?» و «Que…?» هر دو درست‌اند، ولی در گفتار برزیلی «O que…?» رایج‌تر است. وقتی پیش از اسم بیاید (Que + اسم)، معنای «کدام/چه» می‌دهد.',
      examples: [
        {
          pt: 'O que você vai fazer hoje? = Que você vai fazer hoje?',
          fa: 'امروز چه کار می‌خواهی بکنی؟',
          pron: 'او که وُسه وای فازِر اُژی؟',
          note: 'پیش از فعل، «O» اختیاری است؛ هر دو درست است.',
        },
        {
          pt: 'O que aconteceu?',
          fa: 'چه اتفاقی افتاد؟',
          pron: 'او که آکُنتِسِئو؟',
        },
        {
          pt: 'Que comida você quer comer?',
          fa: 'چه غذایی می‌خواهی بخوری؟',
          pron: 'که کومیدا وُسه کِر کومِر؟',
          note: 'پیش از اسم: Que + comida = «چه/کدام غذا».',
        },
      ],
    },
    {
      headingFa: '۶. QUE تعجبی و قیدی (advérbio / exclamação)',
      bodyFa:
        'QUE می‌تواند مانند یک قید عمل کند و معنای «چقدر/چه‌قدرِ» تشدیدکننده بدهد؛ در این حالت هم‌معنیِ quão یا quanto است و صفت یا قید را شدت می‌بخشد: «Que bonito!» یعنی «چقدر زیبا!». حالتِ خاصِ آن تعجبی (interjeição) است؛ در این‌جا QUE تنها و همراه علامت تعجب می‌آید و نشانهٔ حیرت است — در این کاربرد نوشتنِ «Quê!» یا «O quê!» با accent (accent) دیده می‌شود.',
      examples: [
        {
          pt: 'Que bonito você é!',
          fa: 'چقدر زیبایی!',
          pron: 'که بونیتو وُسه اِ!',
          note: 'QUE به‌عنوان قیدِ تشدید = «چقدر».',
        },
        {
          pt: 'Que legal! Que interessante!',
          fa: 'چه باحال! چه جالب!',
          pron: 'که لِگال! که اینتِرِسانتی!',
        },
        {
          pt: 'Quê! Você ainda não está pronto?',
          fa: 'چی! هنوز آماده نشده‌ای؟',
          pron: 'که! وُسه آیندا نائو اِستا پرُنتو؟',
          note: 'تعجبی و تنها → «Quê!» با accent و علامت تعجب.',
        },
      ],
    },
    {
      headingFa: '۷. QUE به‌جای DE، ضمیر موصولی و حرف ربط',
      bodyFa:
        'سه کاربرد پرتکرارِ دیگر: (۱) QUE گاهی جانشینِ حرف اضافهٔ DE می‌شود، به‌ویژه در «ter que = ter de» (مجبور بودن). (۲) QUE ضمیر موصولی است و دو جمله را به هم وصل می‌کند و به اسمِ پیش از خودش برمی‌گردد، معادلِ «که» در فارسی: «o livro que eu li» (کتابی که خواندم). (۳) QUE حرف ربط است و جملهٔ پیرو را می‌آورد: «Eu sei que você veio» (می‌دانم که آمدی).',
      examples: [
        {
          pt: 'Tenho que parar de fumar. = Tenho de parar de fumar.',
          fa: 'باید سیگار را ترک کنم.',
          pron: 'تِنیو که پارار جی فومار',
          note: 'ter que = ter de؛ اینجا QUE نقشِ DE را دارد (مجبور بودن).',
        },
        {
          pt: 'O livro que eu li é ótimo.',
          fa: 'کتابی که خواندم عالی است.',
          pron: 'او لیورو که اِئو لی اِ اُتیمو',
          note: 'ضمیر موصولی: que به «o livro» برمی‌گردد.',
        },
        {
          pt: 'Eu sei que você veio.',
          fa: 'می‌دانم که تو آمدی.',
          pron: 'اِئو سِی که وُسه وِیو',
          note: 'حرف ربط: que جملهٔ پیرو را معرفی می‌کند.',
        },
      ],
    },
    {
      headingFa: '۸. por que / por quê / porque / porquê',
      bodyFa:
        'این چهار شکل در آزمون‌ها همیشه سؤال می‌شوند. قاعدهٔ ساده: «por que» (جدا، بدون accent) برای پرسش = «چرا»: Por que você não veio? — «por quê» (جدا، با accent) در پایانِ جمله یا پیش از نقطه: Você não veio, por quê? — «porque» (سرِهم، بدون accent) برای پاسخ/علت = «چون/زیرا»: Não vim porque estava doente. — «porquê» (سرِهم، با accent) اسم است و معمولاً با «o» می‌آید = «دلیل»: Não sei o porquê da briga.',
      examples: [
        {
          pt: 'Por que você não veio à aula?',
          fa: 'چرا به کلاس نیامدی؟',
          pron: 'پور که وُسه نائو وِیو آ آئولا؟',
          note: 'پرسش، جدا و بدون accent: por que.',
        },
        {
          pt: 'Você não estudou, por quê?',
          fa: 'درس نخواندی، چرا؟',
          pron: 'وُسه نائو اِستودُ، پور که؟',
          note: 'پایانِ جمله → با accent: por quê.',
        },
        {
          pt: 'Não fui porque estava doente.',
          fa: 'نرفتم چون مریض بودم.',
          pron: 'نائو فویی پورکه اِستاوا دوئِنتی',
          note: 'پاسخ/علت → سرِهم و بدون accent: porque.',
        },
        {
          pt: 'Ninguém sabe o porquê da decisão.',
          fa: 'هیچ‌کس دلیلِ آن تصمیم را نمی‌داند.',
          pron: 'نینگِین سابی او پورکه دا دِسیزائو',
          note: 'اسم (= دلیل) → سرِهم و با accent، همراه o: o porquê.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'گونهٔ متنی = متنی با نقش اجتماعی و هدفِ ارتباطیِ مشخص؛ خبر اطلاع می‌دهد، دستور پخت آموزش می‌دهد.',
    'خبر سه بخش دارد: manchete (تیتر)، lide (سرخبر با چه/که/کجا/کِی/چگونه) و corpo (متن).',
    'دستور پخت از فعل امری استفاده می‌کند؛ یادداشت و ایمیل ساختارِ خطاب + پیام + امضا دارند.',
    'QUE چند نقش دارد: پرسشی (O que…?)، قیدی/تعجبی (Que bonito! / Quê!)، جانشینِ DE (ter que)، ضمیر موصولی (o livro que…) و حرف ربط (sei que…).',
    'por que = پرسش | por quê = پایانِ جمله | porque = چون/زیرا | porquê = دلیل (اسم).',
  ],
  quiz: [
    {
      id: 'course-aula-16-q1',
      type: 'mcq',
      prompt: 'Complete: ___ você não veio à festa ontem?',
      promptFa: 'کدام شکل برای پرسشِ «چرا» در آغاز جمله درست است؟',
      options: ['Por que', 'Por quê', 'Porque', 'Porquê'],
      answer: 'Por que',
      explanationFa:
        'در پرسش و در آغاز/میانهٔ جمله از «por que» جدا و بدون accent استفاده می‌کنیم: «Por que você não veio?».',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-16-q2',
      type: 'mcq',
      prompt: 'Complete: Não fui à aula ___ estava doente.',
      promptFa: 'برای بیانِ علت (= چون/زیرا) کدام شکل درست است؟',
      options: ['porque', 'por que', 'por quê', 'porquê'],
      answer: 'porque',
      explanationFa:
        'برای پاسخ و بیانِ علت از «porque» سرِهم و بدون accent استفاده می‌شود (= چون/زیرا).',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-16-q3',
      type: 'mcq',
      prompt: 'Qual é a função de QUE em: "O livro que eu comprei é ótimo"?',
      promptFa: 'در این جمله واژهٔ QUE چه نقشی دارد؟',
      options: [
        'pronome relativo (ضمیر موصولی)',
        'advérbio (قید)',
        'interjeição (شبه‌جمله/تعجب)',
        'interrogativo (پرسشی)',
      ],
      answer: 'pronome relativo (ضمیر موصولی)',
      explanationFa:
        'اینجا QUE ضمیر موصولی است و به اسمِ «o livro» برمی‌گردد و دو جمله را به هم وصل می‌کند (= «که»).',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-16-q4',
      type: 'fill-blank',
      prompt: 'Complete a exclamação: "___ bonito você é!"',
      promptFa:
        'جای خالی را با واژه‌ای پر کنید که در جملهٔ تعجبی معنای «چقدر» بدهد.',
      options: [],
      answer: 'Que',
      explanationFa:
        'در جملهٔ تعجبی، QUE نقشِ قیدِ تشدید دارد و معنای «چقدر» می‌دهد: «Que bonito!».',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-16-q5',
      type: 'mcq',
      prompt:
        'Um texto instrucional, com verbos no imperativo, que ensina a preparar um prato é qual gênero?',
      promptFa:
        'متنی آموزشی با افعالِ امری که پختِ یک غذا را یاد می‌دهد، کدام گونهٔ متنی است؟',
      options: ['a receita', 'a notícia', 'o bilhete', 'a carta'],
      answer: 'a receita',
      explanationFa:
        'دستور پخت (receita) متنی آموزشی است و برای راهنماییِ خواننده از افعالِ امری استفاده می‌کند.',
      cefr: 'B1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 16.',
};
