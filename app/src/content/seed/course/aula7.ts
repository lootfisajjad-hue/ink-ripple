import type { CourseLesson } from '@/domain/content/schema';

export const aula7: CourseLesson = {
  id: 'course-aula-7',
  order: 7,
  aula: 'Aula 7',
  track: 'federal',
  titleFa: 'فعل‌ها ۱ — وجه اخباری (افعال باقاعده)',
  titlePt: 'Verbos 1 — Indicativo (Regulares)',
  cefr: 'A2',
  summaryFa:
    'در این درس با فعل در زبان پرتغالی آشنا می‌شوید: فعل چیست و چگونه در شمار، شخص، وجه (modo)، زمان (tempo)، نمود (aspecto) و صدا/جهت (voz) صرف می‌شود. سپس روی «وجه اخباری» (modo indicativo) تمرکز می‌کنیم که برای بیان واقعیتِ قطعی به‌کار می‌رود و چهار زمان اصلی آن را یاد می‌گیریم: حال (Presente)، ماضی مطلق (Pretérito Perfeito)، ماضی استمراری (Pretérito Imperfeito) و آینده (Futuro). تفاوت افعال باقاعده و بی‌قاعده را می‌بینید و سپس صرف کاملِ سه گروه فعلی (پایانهٔ ‑ar با FALAR، ‑er با COMER، ‑ir با PARTIR) و چند فعل دیگر (ENTRAR, BEBER, ABRIR) را همراه با جدول کامل و تمرین‌های پرکردنی تمرین می‌کنید. یک نکتهٔ مهم تلفظ هم هست: تفاوت پایانهٔ ‑am (گذشته) و ‑ão (آینده).',
  objectivesFa: [
    'تعریف فعل و شش نوع صرف آن (شمار، شخص، وجه، زمان، نمود، صدا) را بشناسید.',
    'بدانید «وجه اخباری» (indicativo) برای بیان واقعیتِ قطعی است.',
    'کاربرد چهار زمانِ اخباری (حال، ماضی مطلق، ماضی استمراری، آینده) را تشخیص دهید.',
    'تفاوت افعال باقاعده (بدون تغییر ریشه) و بی‌قاعده (با تغییر ریشه) را درک کنید.',
    'سه گروه فعلی ‑ar / ‑er / ‑ir را در هر چهار زمان صرف کنید.',
    'تفاوت پایانهٔ گذشتهٔ ‑am و آیندهٔ ‑ão را در نوشتار و تلفظ رعایت کنید.',
  ],
  sections: [
    {
      headingFa: '۱. فعل چیست؟ (O que é um verbo?)',
      bodyFa:
        'فعل کلمه‌ای است که رویدادهایی را که در زمان اتفاق می‌افتند نشان می‌دهد؛ مانند یک کنش (ação)، یک حالت (estado)، یک فرایند (processo) یا یک پدیده (fenômeno). فعل‌ها در شش چیز صرف می‌شوند: شمار (número)، شخص (pessoa)، وجه (modo)، زمان (tempo)، نمود (aspecto) و صدا/جهت (voz). جمله‌ها و عبارت‌ها همیشه حول یک فعل ساخته می‌شوند.',
      examples: [
        {
          pt: 'A humanidade caminha para a sua extinção.',
          fa: 'بشریت به‌سوی نابودی خود گام برمی‌دارد.',
          pron: 'آ اومانیدادی کامینیا پارا آ سوآ اِستینسائو',
          note: 'در این جمله «caminha» فعل است و کل جمله حول آن ساخته شده است.',
        },
      ],
    },
    {
      headingFa: '۲. صرف در شمار و شخص (Flexão em número e pessoa)',
      bodyFa:
        'صرف در شمار (número):\n• مفرد (Singular): یک فاعل.\n• جمع (Plural): چند فاعل.\n\nصرف در شخص (pessoa):\n• اول‌شخص ۱.ª = کسی که حرف می‌زند: eu (من) و nós (ما).\n• دوم‌شخص ۲.ª = کسی که با او حرف می‌زنیم: tu و vós (شکل سنتی) / você و vocês (شکل رایج در برزیل).\n• سوم‌شخص ۳.ª = کسی که درباره‌اش حرف می‌زنیم: ele/ela (او) و eles/elas (آن‌ها).',
      examples: [
        {
          pt: 'eu, nós — você, vocês — ele/ela, eles/elas',
          fa: 'من، ما — تو/شما، شما — او، آن‌ها',
          pron: 'اِئو، نُس — وُسه، وُسِس — اِلی/اِلا، اِلیس/اِلاس',
          note: 'در برزیل معمولاً به‌جای tu از você و به‌جای vós از vocês استفاده می‌شود.',
        },
      ],
    },
    {
      headingFa: '۳. صرف در وجه (Flexão em modo)',
      bodyFa:
        'وجه (modo) نشان می‌دهد گوینده چگونه به کنش نگاه می‌کند. چهار حالت دارد:\n• اخباری (Indicativo): واقعیت را نشان می‌دهد.\n• التزامی/شرطی (Subjuntivo): امکان و احتمال را نشان می‌دهد.\n• امری (Imperativo): دستور را نشان می‌دهد.\n• صورت‌های اسمی (Formas nominais): مصدر (infinitivo)، اسم مفعول (particípio) و وجه وصفی/گِروندیو (gerúndio).\n\nموضوع اصلی این درس «وجه اخباری» است.',
      examples: [
        {
          pt: 'Indicativo, Subjuntivo, Imperativo, Formas nominais',
          fa: 'اخباری، التزامی، امری، صورت‌های اسمی',
          pron: 'ایندیکاتیوو، سوبژونتیوو، ایمپِراتیوو، فُرماس نُمینایس',
        },
      ],
    },
    {
      headingFa: '۴. صرف در زمان (Flexão em tempo)',
      bodyFa:
        'زمان (tempo) نشان می‌دهد کنش نسبت به لحظهٔ سخن‌گفتن کِی رخ می‌دهد:\n• زمان‌های گذشته (passado): رویدادِ پیش از لحظهٔ سخن‌گفتن.\n• زمان‌های حال (presente): رویدادِ هم‌زمان با لحظهٔ سخن‌گفتن.\n• زمان‌های آینده (futuro): رویدادِ پس از لحظهٔ سخن‌گفتن.',
      examples: [
        {
          pt: 'passado — presente — futuro',
          fa: 'گذشته — حال — آینده',
          pron: 'پاسادو — پرِزِنتی — فوتورو',
        },
      ],
    },
    {
      headingFa: '۵. صرف در نمود (Flexão em aspecto)',
      bodyFa:
        'نمود (aspecto) به مدت و مرحلهٔ کنش اشاره می‌کند:\n• معنای آغازی (incoativo): شروعِ کنش.\n• معنای جاری/مستمر (cursivo): در حالِ انجام و پیشرفتِ کنش.\n• معنای پایانی (conclusivo): به‌پایان‌رسیدنِ کنش.',
      examples: [
        {
          pt: 'incoativo (começo) — cursivo (desenvolvimento) — conclusivo (conclusão)',
          fa: 'آغازی (شروع) — جاری (پیشرفت) — پایانی (پایان)',
          pron: 'اینکوآتیوو — کورسیوو — کُنکلوزیوو',
        },
      ],
    },
    {
      headingFa: '۶. صرف در صدا/جهت (Flexão em voz)',
      bodyFa:
        'صدا (voz) رابطهٔ فاعلِ دستوری با کنش را نشان می‌دهد:\n• صدای معلوم (voz ativa): فاعلِ دستوری، انجام‌دهندهٔ کنش است.\n• صدای مجهول (voz passiva): فاعلِ دستوری، پذیرندهٔ کنش است.\n• صدای انعکاسی (voz reflexiva): فاعلِ دستوری هم انجام‌دهنده و هم پذیرندهٔ کنش است.',
      examples: [
        {
          pt: 'voz ativa — voz passiva — voz reflexiva',
          fa: 'صدای معلوم — صدای مجهول — صدای انعکاسی',
          pron: 'وُس آتیوا — وُس پاسیوا — وُس رِفلِکسیوا',
        },
      ],
    },
    {
      headingFa: '۷. وجه اخباری چیست؟ (O que é MODO INDICATIVO?)',
      bodyFa:
        'وجه اخباری برای بیان یک کنشِ قطعی و دقیق به‌کار می‌رود؛ کنشی که امکانِ واقعیِ رخ‌دادن در گذشته، حال یا آینده را دارد. در وجه اخباری گوینده باور دارد که آنچه بیان می‌کند بدون‌شک واقعی و درست است (نه یک فرض یا احتمال). برای مثال وقتی می‌گوییم «A humanidade caminha para a sua extinção» گوینده چیزی را به‌طور قطعی اظهار می‌کند، چون به گفتهٔ خود یقین دارد.',
      examples: [
        {
          pt: 'A humanidade caminha para a sua extinção.',
          fa: 'بشریت به‌سوی نابودی خود گام برمی‌دارد.',
          pron: 'آ اومانیدادی کامینیا پارا آ سوآ اِستینسائو',
          note: 'اظهارِ قطعی، نه فرض → وجه اخباری.',
        },
      ],
    },
    {
      headingFa: '۸. زمان حال (Presente do indicativo)',
      bodyFa:
        'زمان حالِ اخباری نشان می‌دهد که کنش در همان لحظهٔ روایت رخ می‌دهد. همچنین می‌تواند یک کنشِ عادتی (تکراری) یا یک حالتِ همیشگی را نشان دهد.',
      examples: [
        {
          pt: 'Agora eu estou na academia.',
          fa: 'الان من در باشگاه هستم.',
          pron: 'آگورا اِئو اِستُ نا آکادِمیا',
          note: 'کنشی که همین حالا در جریان است.',
        },
        {
          pt: 'Tomo banho todos os dias.',
          fa: 'هر روز دوش می‌گیرم.',
          pron: 'تُمو بانیو تُدوس اوس جیاس',
          note: 'کنشِ عادتی و تکراری.',
        },
        {
          pt: 'Meu filho adora viajar.',
          fa: 'پسرم عاشقِ سفر کردن است.',
          pron: 'مِئو فیلیو آدُرا ویاژار',
          note: 'حالت/ویژگیِ همیشگی.',
        },
      ],
    },
    {
      headingFa: '۹. ماضی مطلق (Pretérito Perfeito do indicativo)',
      bodyFa:
        'ماضی مطلقِ اخباری کنشی لحظه‌ای و مشخص در زمان را نشان می‌دهد؛ یعنی کنش در لحظه‌ای معیّن از گذشته رخ داده و تمام شده است. معمولاً با قیدهای زمانِ مشخص می‌آید: ontem (دیروز)، na segunda-feira passada (دوشنبهٔ گذشته)، no ano passado (سالِ گذشته).',
      examples: [
        {
          pt: 'Ele visitou seu irmão no hospital na segunda-feira passada.',
          fa: 'او دوشنبهٔ گذشته برادرش را در بیمارستان ملاقات کرد.',
          pron: 'اِلی ویزیتُو سِئو ایرمائو نو اُسپیتال نا سِگوندا-فِیرا پاسادا',
        },
        {
          pt: 'Comprei minha casa no ano passado.',
          fa: 'سالِ گذشته خانه‌ام را خریدم.',
          pron: 'کُمپرِی مینیا کازا نو آنو پاسادو',
        },
        {
          pt: 'Ontem eu vi sua mãe no supermercado.',
          fa: 'دیروز مادرت را در سوپرمارکت دیدم.',
          pron: 'اُنتِین اِئو وی سوآ مِین نو سوپِرمِرکادو',
        },
      ],
    },
    {
      headingFa: '۱۰. ماضی استمراری (Pretérito Imperfeito do indicativo)',
      bodyFa:
        'ماضی استمراریِ اخباری نشان می‌دهد که کنش در گذشته به‌صورت تکراری یا کِش‌دار (مستمر) رخ می‌داده و در زمان محدود نبوده است. همچنین می‌تواند عادتِ گذشته را نشان دهد. معمولاً با قیدهایی مثل sempre (همیشه) و antigamente (سابقاً/قدیم‌ها) می‌آید. تفاوتش با ماضی مطلق این است که ماضی مطلق یک‌بار و تمام‌شده است، اما ماضی استمراری تکراری یا در جریان بوده است.',
      examples: [
        {
          pt: 'Eu sempre via sua mãe no supermercado.',
          fa: 'من همیشه مادرت را در سوپرمارکت می‌دیدم.',
          pron: 'اِئو سِمپری ویا سوآ مِین نو سوپِرمِرکادو',
          note: 'عادتِ تکراری در گذشته → استمراری.',
        },
        {
          pt: 'Ele pegava dois ônibus para ir trabalhar.',
          fa: 'او برای رفتن به سرِ کار دو اتوبوس سوار می‌شد.',
          pron: 'اِلی پِگاوا دُیس اُنیبوس پارا ایر ترابایار',
        },
        {
          pt: 'Eu trabalhava de segunda a sexta, das 8h às 18h.',
          fa: 'من دوشنبه تا جمعه، از ساعت ۸ تا ۱۸ کار می‌کردم.',
          pron: 'اِئو ترابایاوا جی سِگوندا آ سِستا',
        },
      ],
    },
    {
      headingFa: '۱۱. آینده (Futuro do indicativo)',
      bodyFa:
        'آیندهٔ اخباری نشان می‌دهد کنش در لحظه‌ای در آینده رخ خواهد داد. می‌تواند لحظه‌ای معیّن یا لحظه‌ای نامعیّن در آینده باشد. معمولاً با amanhã (فردا) یا سؤال‌های مربوط به زمانِ نامشخص می‌آید.',
      examples: [
        {
          pt: 'A transportadora ainda não sabe quando chegará a encomenda.',
          fa: 'شرکت باربری هنوز نمی‌داند بسته چه زمانی خواهد رسید.',
          pron: 'آ ترانسپُرتادورا آیندا نائو سابی کواندو شِگارا آ اِنکُمِندا',
          note: 'زمانِ نامعیّن در آینده.',
        },
        {
          pt: 'Eles virão no voo das dez horas.',
          fa: 'آن‌ها با پروازِ ساعت ده خواهند آمد.',
          pron: 'اِلیس ویرائو نو وُئو داس دِس اُراس',
        },
        {
          pt: 'Farei minha lição de casa amanhã.',
          fa: 'فردا تکلیفِ خانه‌ام را انجام خواهم داد.',
          pron: 'فارِی مینیا لیسائو جی کازا آمانیا',
        },
      ],
    },
    {
      headingFa: '۱۲. افعال باقاعده (Verbos Regulares)',
      bodyFa:
        'افعال باقاعده افعالی هستند که ریشهٔ (radical) آن‌ها هنگام صرف تغییر نمی‌کند و فقط پایانه‌های مخصوص گروهِ خودشان را می‌گیرند. سه گروه فعلی وجود دارد که با پایانهٔ مصدر مشخص می‌شوند: ‑ar، ‑er، ‑ir.\n\nمثال (ریشه ثابت می‌ماند، فقط پایانه عوض می‌شود):\n\nمصدر      | حال (eu) | ماضی مطلق (eu) | آینده (eu)\nSonh‑ar   | sonho    | sonhei          | sonharei\nSofr‑er   | sofro    | sofri           | sofrerei\nDivid‑ir  | divido   | dividi          | dividirei\n\nمی‌بینید که ریشهٔ Sonh‑ / Sofr‑ / Divid‑ همیشه ثابت است.',
      examples: [
        {
          pt: 'sonhar → sonho, sonhei, sonharei',
          fa: 'خواب دیدن / آرزو کردن → خواب می‌بینم، خواب دیدم، خواب خواهم دید',
          pron: 'سُنیار → سُنیو، سُنیِی، سُنیارِی',
        },
        {
          pt: 'dividir → divido, dividi, dividirei',
          fa: 'تقسیم کردن → تقسیم می‌کنم، تقسیم کردم، تقسیم خواهم کرد',
          pron: 'جیویجیر → جیویدو، جیویجی، جیویجیرِی',
        },
      ],
    },
    {
      headingFa: '۱۳. افعال بی‌قاعده (Verbos Irregulares)',
      bodyFa:
        'افعال بی‌قاعده افعالی هستند که ریشهٔ آن‌ها هنگام صرف تغییر می‌کند و پایانه‌های معمولِ گروهِ خودشان را نمی‌گیرند؛ یعنی هر دو جزء (ریشه و پایانه) دگرگون می‌شوند. این افعال باید حفظ شوند. دو مثالِ بسیار پرکاربرد IR (رفتن) و PODER (توانستن) است:\n\nضمیر                  | IR    | PODER\nEU                    | VOU   | POSSO\nELE / ELA / VOCÊ      | VAI   | PODE\nA GENTE               | VAI   | PODE\nNÓS                   | VAMOS | PODEMOS\nELES / ELAS / VOCÊS   | VÃO   | PODEM\n\nتوجه: ریشهٔ IR در «vou/vai/vamos/vão» کاملاً عوض می‌شود؛ همین آن را بی‌قاعده می‌کند.',
      examples: [
        {
          pt: 'Eu vou, ele vai, nós vamos, eles vão.',
          fa: 'من می‌روم، او می‌رود، ما می‌رویم، آن‌ها می‌روند.',
          pron: 'اِئو وُ، اِلی وای، نُس واموس، اِلیس وائو',
          note: 'فعل بی‌قاعدهٔ IR.',
        },
        {
          pt: 'Eu posso, ele pode, nós podemos, eles podem.',
          fa: 'من می‌توانم، او می‌تواند، ما می‌توانیم، آن‌ها می‌توانند.',
          pron: 'اِئو پُسو، اِلی پُجی، نُس پُدِموس، اِلیس پُدِین',
          note: 'فعل بی‌قاعدهٔ PODER.',
        },
      ],
    },
    {
      headingFa: '۱۴. صرف کامل FALAR (گروه ‑ar)',
      bodyFa:
        'FALAR (حرف زدن) یک فعلِ باقاعدهٔ گروهِ ‑ar است. جدول کاملِ چهار زمان:\n\nضمیر                  | حال     | ماضی مطلق | ماضی استمراری | آینده\nEU                    | falo    | falei     | falava        | falarei\nELE/ELA/VOCÊ          | fala    | falou     | falava        | falará\nA GENTE               | fala    | falou     | falava        | falará\nNÓS                   | falamos | falamos   | falávamos     | falaremos\nELES/ELAS/VOCÊS       | falam   | falaram   | falavam       | falarão\n\nریشهٔ fal‑ همیشه ثابت است.',
      examples: [
        {
          pt: 'Eu falo com meu filho.',
          fa: 'من با پسرم حرف می‌زنم.',
          pron: 'اِئو فالو کُن مِئو فیلیو',
        },
        {
          pt: 'Você fala com sua filha. Ela fala com seus amigos.',
          fa: 'تو با دخترت حرف می‌زنی. او با دوستانش حرف می‌زند.',
          pron: 'وُسه فالا کُن سوآ فیلیا. اِلا فالا کُن سِئوس آمیگوس',
        },
        {
          pt: 'Nós falamos bem português.',
          fa: 'ما پرتغالی را خوب حرف می‌زنیم.',
          pron: 'نُس فالاموس بِین پُرتوگِس',
        },
        {
          pt: 'A gente fala com ele. Eles falam muito.',
          fa: 'ما با او حرف می‌زنیم. آن‌ها زیاد حرف می‌زنند.',
          pron: 'آ جِنتی فالا کُن اِلی. اِلیس فالام مویتو',
          note: '«a gente» با فعلِ سوم‌شخص مفرد (fala) می‌آید.',
        },
      ],
    },
    {
      headingFa: '۱۵. صرف کامل COMER (گروه ‑er)',
      bodyFa:
        'COMER (خوردن) یک فعلِ باقاعدهٔ گروهِ ‑er است. جدول کاملِ چهار زمان:\n\nضمیر                  | حال     | ماضی مطلق | ماضی استمراری | آینده\nEU                    | como    | comi      | comia         | comerei\nELE/ELA/VOCÊ          | come    | comeu     | comia         | comerá\nA GENTE               | come    | comeu     | comia         | comerá\nNÓS                   | comemos | comemos   | comíamos      | comeremos\nELES/ELAS/VOCÊS       | comem   | comeram   | comiam        | comerão\n\nتوجه: در گروه ‑er شکلِ حال و ماضی مطلقِ nós یکسان است (comemos).',
      examples: [
        {
          pt: 'Eu como meu jantar.',
          fa: 'من شامم را می‌خورم.',
          pron: 'اِئو کُمو مِئو ژانتار',
        },
        {
          pt: 'Você come seu lanche. Ele come um doce.',
          fa: 'تو میان‌وعده‌ات را می‌خوری. او یک شیرینی می‌خورد.',
          pron: 'وُسه کُمی سِئو لانشی. اِلی کُمی اوم دُسی',
        },
        {
          pt: 'Nós comemos o lanche. A gente come o churrasco.',
          fa: 'ما میان‌وعده را می‌خوریم. ما کباب (شوراسکو) را می‌خوریم.',
          pron: 'نُس کُمِموس او لانشی. آ جِنتی کُمی او شوهاسکو',
        },
        {
          pt: 'Eles comem as frutas.',
          fa: 'آن‌ها میوه‌ها را می‌خورند.',
          pron: 'اِلیس کُمِین آس فروتاس',
        },
      ],
    },
    {
      headingFa: '۱۶. صرف کامل PARTIR (گروه ‑ir)',
      bodyFa:
        'PARTIR (عزیمت کردن / رفتن) یک فعلِ باقاعدهٔ گروهِ ‑ir است. جدول کاملِ چهار زمان:\n\nضمیر                  | حال      | ماضی مطلق | ماضی استمراری | آینده\nEU                    | parto    | parti     | partia        | partirei\nELE/ELA/VOCÊ          | parte    | partiu    | partia        | partirá\nA GENTE               | parte    | partiu    | partia        | partirá\nNÓS                   | partimos | partimos  | partíamos     | partiremos\nELES/ELAS/VOCÊS       | partem   | partiram  | partiam       | partirão',
      examples: [
        {
          pt: 'Eu parto agora.',
          fa: 'من همین حالا می‌روم.',
          pron: 'اِئو پارتو آگورا',
        },
        {
          pt: 'Você parte agora. Ela parte agora.',
          fa: 'تو همین حالا می‌روی. او همین حالا می‌رود.',
          pron: 'وُسه پارتی آگورا. اِلا پارتی آگورا',
        },
        {
          pt: 'Nós partimos hoje. A gente parte hoje.',
          fa: 'ما امروز می‌رویم. ما (غیررسمی) امروز می‌رویم.',
          pron: 'نُس پارتیموس اُژی. آ جِنتی پارتی اُژی',
        },
        {
          pt: 'Elas partem hoje.',
          fa: 'آن‌ها (زنان) امروز می‌روند.',
          pron: 'اِلاس پارتِین اُژی',
        },
      ],
    },
    {
      headingFa: '۱۷. تفاوت پایانهٔ ‑am (گذشته) و ‑ão (آینده)',
      bodyFa:
        'در سوم‌شخص جمع (eles/elas/vocês) دو پایانهٔ نزدیک‌به‌هم وجود دارد که نباید قاطی شوند:\n• پایانهٔ ‑am → زمان گذشته (ماضی مطلق).\n• پایانهٔ ‑ão → زمان آینده.\n\nنکتهٔ کلیدیِ تلفظ: هجای تکیه‌دار (sílaba tônica) در این دو حالت فرق می‌کند. در گذشته تکیه روی هجای ماقبل‌آخر است و در آینده روی هجای آخر: coMEram ↔ comeRÃO / viaJAram ↔ viajaRÃO.',
      examples: [
        {
          pt: 'Eles comeram salada ontem. (passado)',
          fa: 'آن‌ها دیروز سالاد خوردند. (گذشته)',
          pron: 'اِلیس کوMEرام سالادا اُنتِین',
          note: 'پایانهٔ ‑am + قیدِ ontem → گذشته.',
        },
        {
          pt: 'Eles comerão salada amanhã. (futuro)',
          fa: 'آن‌ها فردا سالاد خواهند خورد. (آینده)',
          pron: 'اِلیس کومِRÃO سالادا آمانیا',
          note: 'پایانهٔ ‑ão + قیدِ amanhã → آینده.',
        },
        {
          pt: 'Meus pais viajaram ontem. / Meus pais viajarão amanhã.',
          fa: 'والدینم دیروز سفر کردند. / والدینم فردا سفر خواهند کرد.',
          pron: 'مِئوس پایس ویاژارام اُنتِین / ویاژاRÃO آمانیا',
          note: 'viaJAram (گذشته) ↔ viajaRÃO (آینده).',
        },
      ],
    },
    {
      headingFa: '۱۸. جدول ماضی: مصدر، ماضی مطلق و استمراریِ EU',
      bodyFa:
        'این جدول شکلِ اول‌شخص مفرد (EU) را در دو زمان گذشته برای چند فعلِ باقاعده نشان می‌دهد؛ برای تثبیت الگو مفید است:\n\nمصدر (Infinitivo) | ماضی مطلق (EU) | ماضی استمراری (EU)\nTrabalhar          | Trabalhei      | Trabalhava\nTomar              | Tomei          | Tomava\nGostar             | Gostei         | Gostava\nSonhar             | Sonhei         | Sonhava\nComer              | Comi           | Comia\nReceber            | Recebi         | Recebia\nEscrever           | Escrevi        | Escrevia\nDescer             | Desci          | Descia\nDividir            | Dividi         | Dividia\nDirigir            | Dirigi         | Dirigia\nAssistir           | Assisti        | Assistia\n\nالگو: در گروه ‑ar پایانهٔ ماضی مطلقِ EU برابر ‑ei و استمراری ‑ava است؛ در گروه‌های ‑er و ‑ir ماضی مطلق ‑i و استمراری ‑ia می‌شود.',
      examples: [
        {
          pt: 'trabalhar → trabalhei / trabalhava',
          fa: 'کار کردن → کار کردم / کار می‌کردم',
          pron: 'ترابایار → ترابایِی / ترابایاوا',
        },
        {
          pt: 'escrever → escrevi / escrevia',
          fa: 'نوشتن → نوشتم / می‌نوشتم',
          pron: 'اِسکرِوِر → اِسکرِوی / اِسکرِویا',
        },
      ],
    },
    {
      headingFa: '۱۹. فعل ENTRAR (ورود / داخل شدن)',
      bodyFa:
        'ENTRAR (وارد شدن) فعلِ باقاعدهٔ گروهِ ‑ar است. جدول کامل:\n\nضمیر                  | حال      | ماضی مطلق | ماضی استمراری | آینده\nEU                    | entro    | entrei    | entrava       | entrarei\nELE/ELA/VOCÊ          | entra    | entrou    | entrava       | entrará\nA GENTE               | entra    | entrou    | entrava       | entrará\nNÓS                   | entramos | entramos  | entrávamos    | entraremos\nELES/ELAS/VOCÊS       | entram   | entraram  | entravam      | entrarão\n\nاصطلاح: «entrar em contato» یعنی «تماس گرفتن / در ارتباط بودن».',
      examples: [
        {
          pt: 'Eu entrei na aula atrasado.',
          fa: 'من با تأخیر وارد کلاس شدم.',
          pron: 'اِئو اِنترِی نا آولا آتْرازادو',
        },
        {
          pt: 'Eles entraram em contato por telefone.',
          fa: 'آن‌ها از طریق تلفن تماس گرفتند.',
          pron: 'اِلیس اِنترارام اِین کُنتاتو پور تِلِفُنی',
        },
      ],
    },
    {
      headingFa: '۲۰. فعل BEBER (نوشیدن)',
      bodyFa:
        'BEBER (نوشیدن) فعلِ باقاعدهٔ گروهِ ‑er است. جدول کامل:\n\nضمیر                  | حال     | ماضی مطلق | ماضی استمراری | آینده\nEU                    | bebo    | bebi      | bebia         | beberei\nELE/ELA/VOCÊ          | bebe    | bebeu     | bebia         | beberá\nA GENTE               | bebe    | bebeu     | bebia         | beberá\nNÓS                   | bebemos | bebemos   | bebíamos      | beberemos\nELES/ELAS/VOCÊS       | bebem   | beberam   | bebiam        | beberão',
      examples: [
        {
          pt: 'Eu bebo muita água.',
          fa: 'من آب زیادی می‌نوشم.',
          pron: 'اِئو بِبو مویتا آگوا',
        },
        {
          pt: 'Minha mãe bebeu todo o café ontem.',
          fa: 'مادرم دیروز همهٔ قهوه را نوشید.',
          pron: 'مینیا مِین بِبِئو تُدو او کافه اُنتِین',
        },
        {
          pt: 'Antigamente eu bebia muito leite.',
          fa: 'قدیم‌ها من شیرِ زیادی می‌نوشیدم.',
          pron: 'آنتیگامِنتی اِئو بِبیا مویتو لِیتی',
          note: 'قیدِ antigamente → عادتِ گذشته → ماضی استمراری.',
        },
      ],
    },
    {
      headingFa: '۲۱. فعل ABRIR (باز کردن)',
      bodyFa:
        'ABRIR (باز کردن) فعلِ باقاعدهٔ گروهِ ‑ir است. جدول کامل:\n\nضمیر                  | حال      | ماضی مطلق | ماضی استمراری | آینده\nEU                    | abro     | abri      | abria         | abrirei\nELE/ELA/VOCÊ          | abre     | abriu     | abria         | abrirá\nA GENTE               | abre     | abriu     | abria         | abrirá\nNÓS                   | abrimos  | abrimos   | abríamos      | abriremos\nELES/ELAS/VOCÊS       | abrem    | abriram   | abriam        | abrirão',
      examples: [
        {
          pt: 'Ela abriu a porta para ele entrar.',
          fa: 'او در را باز کرد تا او وارد شود.',
          pron: 'اِلا آبریو آ پُرتا پارا اِلی اِنترار',
        },
        {
          pt: 'Nós abrimos as janelas todos os dias.',
          fa: 'ما هر روز پنجره‌ها را باز می‌کنیم.',
          pron: 'نُس آبریموس آس ژانِلاس تُدوس اوس جیاس',
        },
        {
          pt: 'Ontem eles abriram às 10h. Amanhã eles abrirão ao meio-dia.',
          fa: 'دیروز آن‌ها ساعت ۱۰ باز کردند. فردا آن‌ها ظهر باز خواهند کرد.',
          pron: 'اُنتِین اِلیس آبریرام / آمانیا اِلیس آبریرائو آئو مِیو-جیا',
          note: 'abriram (‑am، گذشته) ↔ abrirão (‑ão، آینده).',
        },
      ],
    },
  ],
  keyPointsFa: [
    'فعل در شش چیز صرف می‌شود: شمار، شخص، وجه، زمان، نمود، صدا.',
    'چهار وجه: اخباری (واقعیت)، التزامی (احتمال)، امری (دستور)، صورت‌های اسمی.',
    'وجه اخباری چهار زمان اصلی دارد: حال، ماضی مطلق، ماضی استمراری، آینده.',
    'ماضی مطلق = کنشِ یک‌بار و تمام‌شده؛ ماضی استمراری = کنشِ تکراری یا در جریانِ گذشته.',
    'افعال باقاعده ریشهٔ ثابت دارند؛ افعال بی‌قاعده مثل IR و PODER ریشه‌شان عوض می‌شود.',
    'سه گروه فعلی: ‑ar (falar)، ‑er (comer)، ‑ir (partir).',
    'در سوم‌شخص جمع: پایانهٔ ‑am گذشته است و ‑ão آینده؛ تکیه هم فرق می‌کند (coMEram / comeRÃO).',
  ],
  quiz: [
    {
      id: 'course-aula-7-q1',
      type: 'mcq',
      prompt: 'Qual modo verbal indica uma ação certa e real (realidade)?',
      promptFa: 'کدام وجه فعلی نشان‌دهندهٔ کنشِ قطعی و واقعی است؟',
      options: ['Indicativo', 'Subjuntivo', 'Imperativo', 'Infinitivo'],
      answer: 'Indicativo',
      explanationFa:
        'وجه اخباری (indicativo) واقعیت را نشان می‌دهد؛ التزامی احتمال و امری دستور را.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q2',
      type: 'mcq',
      prompt:
        'Em quantos aspectos um verbo pode flexionar-se? (número, pessoa, modo, tempo, aspecto, voz)',
      promptFa: 'فعل در چند چیز صرف می‌شود؟',
      options: ['seis', 'quatro', 'três', 'dois'],
      answer: 'seis',
      explanationFa:
        'فعل در شش چیز صرف می‌شود: شمار، شخص، وجه، زمان، نمود و صدا.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q3',
      type: 'mcq',
      prompt:
        'Que tempo do indicativo indica uma ação repetitiva ou habitual no passado?',
      promptFa: 'کدام زمانِ اخباری کنشِ تکراری یا عادتیِ گذشته را نشان می‌دهد؟',
      options: [
        'Pretérito Imperfeito',
        'Pretérito Perfeito',
        'Presente',
        'Futuro',
      ],
      answer: 'Pretérito Imperfeito',
      explanationFa:
        'ماضی استمراری (imperfeito) کنشِ تکراری/مستمرِ گذشته را نشان می‌دهد؛ ماضی مطلق کنشِ یک‌بار و تمام‌شده.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q4',
      type: 'mcq',
      prompt: 'Qual verbo é IRREGULAR (o radical muda)?',
      promptFa: 'کدام فعل بی‌قاعده است (ریشه‌اش عوض می‌شود)؟',
      options: ['ir', 'falar', 'comer', 'partir'],
      answer: 'ir',
      explanationFa:
        'IR بی‌قاعده است (vou/vai/vamos/vão)؛ falar، comer و partir باقاعده‌اند.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q5',
      type: 'fill-blank',
      prompt: 'Eu ______ na aula atrasado. (ENTRAR, pretérito perfeito)',
      promptFa:
        'با ماضی مطلقِ فعل ENTRAR کامل کنید: من با تأخیر وارد کلاس شدم.',
      options: [],
      answer: 'entrei',
      explanationFa: 'ماضی مطلقِ اول‌شخص مفردِ entrar می‌شود «entrei».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q6',
      type: 'fill-blank',
      prompt: 'Amanhã nós ______ para trabalhar às 8h. (ENTRAR, futuro)',
      promptFa:
        'با آیندهٔ فعل ENTRAR کامل کنید (قیدِ amanhã = فردا): ما فردا ساعت ۸ برای کار وارد می‌شویم.',
      options: [],
      answer: 'entraremos',
      explanationFa:
        'قیدِ «amanhã» زمانِ آینده می‌طلبد؛ آیندهٔ اول‌شخص جمعِ entrar = «entraremos».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q7',
      type: 'fill-blank',
      prompt:
        'Eles ______ em contato por telefone. (ENTRAR, pretérito perfeito)',
      promptFa:
        'با ماضی مطلقِ فعل ENTRAR کامل کنید: آن‌ها با تلفن تماس گرفتند.',
      options: [],
      answer: 'entraram',
      explanationFa:
        'ماضی مطلقِ سوم‌شخص جمعِ entrar = «entraram» (پایانهٔ ‑am → گذشته). «entrar em contato» یعنی تماس گرفتن.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q8',
      type: 'fill-blank',
      prompt: 'Eu ______ muita água. (BEBER, presente)',
      promptFa: 'با زمان حالِ فعل BEBER کامل کنید: من آب زیادی می‌نوشم.',
      options: [],
      answer: 'bebo',
      explanationFa: 'حالِ اول‌شخص مفردِ beber = «bebo» (کنشِ عادتی/همیشگی).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q9',
      type: 'fill-blank',
      prompt: 'Minha mãe ______ todo o café ontem. (BEBER, pretérito perfeito)',
      promptFa:
        'با ماضی مطلقِ فعل BEBER کامل کنید (قیدِ ontem = دیروز): مادرم دیروز همهٔ قهوه را نوشید.',
      options: [],
      answer: 'bebeu',
      explanationFa:
        'قیدِ «ontem» کنشِ تمام‌شده می‌طلبد؛ ماضی مطلقِ سوم‌شخص مفردِ beber = «bebeu».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q10',
      type: 'fill-blank',
      prompt:
        'Antigamente eu ______ muito leite. (BEBER, pretérito imperfeito)',
      promptFa:
        'با ماضی استمراریِ فعل BEBER کامل کنید (قیدِ antigamente = قدیم‌ها): قدیم‌ها من شیرِ زیادی می‌نوشیدم.',
      options: [],
      answer: 'bebia',
      explanationFa:
        'قیدِ «antigamente» عادتِ گذشته را می‌رساند → ماضی استمراری؛ اول‌شخص مفردِ beber = «bebia».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q11',
      type: 'fill-blank',
      prompt: 'Ela ______ a porta para ele entrar. (ABRIR, pretérito perfeito)',
      promptFa:
        'با ماضی مطلقِ فعل ABRIR کامل کنید: او در را باز کرد تا او وارد شود.',
      options: [],
      answer: 'abriu',
      explanationFa: 'ماضی مطلقِ سوم‌شخص مفردِ abrir = «abriu».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q12',
      type: 'fill-blank',
      prompt: 'Nós ______ as janelas todos os dias. (ABRIR, presente)',
      promptFa:
        'با زمان حالِ فعل ABRIR کامل کنید (todos os dias = هر روز): ما هر روز پنجره‌ها را باز می‌کنیم.',
      options: [],
      answer: 'abrimos',
      explanationFa: 'کنشِ عادتیِ حال؛ حالِ اول‌شخص جمعِ abrir = «abrimos».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q13',
      type: 'fill-blank',
      prompt: 'Ontem eles ______ às 10h. (ABRIR, pretérito perfeito)',
      promptFa:
        'با ماضی مطلقِ فعل ABRIR کامل کنید (قیدِ ontem = دیروز): دیروز آن‌ها ساعت ۱۰ باز کردند.',
      options: [],
      answer: 'abriram',
      explanationFa:
        'قیدِ «ontem» + سوم‌شخص جمعِ گذشته = «abriram» (پایانهٔ ‑am → گذشته).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q14',
      type: 'fill-blank',
      prompt: 'Amanhã eles ______ ao meio-dia. (ABRIR, futuro)',
      promptFa:
        'با آیندهٔ فعل ABRIR کامل کنید (قیدِ amanhã = فردا): فردا آن‌ها ظهر باز خواهند کرد.',
      options: [],
      answer: 'abrirão',
      explanationFa:
        'قیدِ «amanhã» + سوم‌شخص جمعِ آینده = «abrirão» (پایانهٔ ‑ão → آینده).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q15',
      type: 'mcq',
      prompt: 'Escolha a forma de FUTURO: "Eles ______ salada amanhã."',
      promptFa: 'شکلِ آینده را انتخاب کنید: «آن‌ها فردا سالاد ... .»',
      options: ['comerão', 'comeram', 'comem', 'comiam'],
      answer: 'comerão',
      explanationFa:
        'پایانهٔ ‑ão نشانهٔ آینده است (comeRÃO)، درحالی‌که ‑am (comeram) گذشته است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q16',
      type: 'mcq',
      prompt: 'Escolha a forma de PASSADO: "Meus pais ______ ontem."',
      promptFa: 'شکلِ گذشته را انتخاب کنید: «والدینم دیروز ... .»',
      options: ['viajaram', 'viajarão', 'viajam', 'viajarem'],
      answer: 'viajaram',
      explanationFa:
        'پایانهٔ ‑am + قیدِ «ontem» → گذشته (viaJAram)؛ viajaRÃO آینده است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q17',
      type: 'order-words',
      prompt: 'Ordene: [português / Nós / bem / falamos]',
      promptFa: 'کلمات را مرتب کنید تا جملهٔ درست ساخته شود.',
      options: ['português', 'Nós', 'bem', 'falamos'],
      answer: 'Nós falamos bem português.',
      explanationFa:
        'ترتیب: فاعل + فعل + قید + مفعول → «Nós falamos bem português» (ما پرتغالی را خوب حرف می‌زنیم).',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-7-q18',
      type: 'translate-fa-pt',
      prompt: '«من هر روز دوش می‌گیرم.» را به پرتغالی بنویسید (حال / TOMAR).',
      promptFa: 'با زمان حال ترجمه کنید (کنشِ عادتی).',
      options: [],
      answer: 'Tomo banho todos os dias.',
      explanationFa:
        'کنشِ عادتی با زمان حال بیان می‌شود؛ «tomar banho» یعنی دوش گرفتن.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-7-q19',
      type: 'translate-pt-fa',
      prompt: 'Traduza para o persa: "Comprei minha casa no ano passado."',
      promptFa: 'این جملهٔ ماضی مطلق را به فارسی ترجمه کنید.',
      options: [],
      answer: 'سالِ گذشته خانه‌ام را خریدم.',
      explanationFa:
        '«comprei» ماضی مطلقِ اول‌شخص است و کنشِ تمام‌شده در گذشته را نشان می‌دهد.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 28,
  sourceNoteFa: 'برگرفته از جزوهٔ آماده‌سازی فدرال — Aula 7 (کامل).',
};
