import type { CourseLesson } from '@/domain/content/schema';

export const aula6: CourseLesson = {
  id: 'course-aula-6',
  order: 6,
  aula: 'Aula 6',
  titleFa: 'علائم نگارشی (نشانه‌های سجاوندی)',
  titlePt: 'Sinais de Pontuação',
  cefr: 'A2',
  summaryFa:
    'در این درس با علائم نگارشی زبان پرتغالی آشنا می‌شوید: نشانه‌هایی گرافیکی که در نوشتار به‌کار می‌روند تا امکاناتِ زبانِ گفتاری مانند لحن، مکث، احساس و مقصود را بازسازی کنند. یاد می‌گیرید نقطه (.) کجا و چگونه به‌کار می‌رود (از جمله در اختصارها و در عنوان‌ها)، ویرگول (,) که پرکاربردترین علامت با بیشترین نقش‌هاست در چه موقعیت‌هایی می‌آید (هم‌نقشی، بدل، منادا، حروف ربطِ تقابلی، و توضیح/اصلاح)، دو نقطه (:) برای توضیح و نقل‌قول و فهرست، علامت پرسش (؟) برای پرسیدن، و علامت تعجب (!) برای بیانِ احساس. در پایان، همهٔ تمرین‌های جزوه را حل می‌کنید.',
  objectivesFa: [
    'تعریف علائم نگارشی و کارکرد کلیِ آن‌ها را بدانید و پنج علامت اصلی را نام ببرید.',
    'نقطه (.) را در پایان جمله و در اختصارها درست به‌کار ببرید و قاعدهٔ نقطه در عنوان‌ها را بدانید.',
    'همهٔ کاربردهای اصلی ویرگول (,) را تشخیص دهید و به‌کار ببرید.',
    'دو نقطه (:) را برای توضیح، نقل‌قول و فهرست‌کردن به‌کار ببرید.',
    'علامت پرسش (؟) و علامت تعجب (!) را در جای درست بگذارید.',
    'جمله‌های بدونِ نشانه را به‌درستی نقطه‌گذاری کنید.',
  ],
  sections: [
    {
      headingFa: '۱. علائم نگارشی چیستند؟',
      bodyFa:
        'علائم نگارشی (Sinais de pontuação) نشانه‌هایی گرافیکی هستند که در زبانِ نوشتاری به‌کار می‌روند تا امکاناتِ ویژهٔ زبانِ گفتاری را بازسازی کنند؛ چیزهایی مانند لحن و آهنگ کلام (entonação)، مقصود و نیت (intenções)، خواسته‌ها و اشتیاق (anseios) و مانند این‌ها.\n\nبه‌طور کلی این نشانه‌ها یا نشان‌دهندهٔ مکث در گفتار هستند (مانند نقطهٔ پایانی و ویرگول) یا نشان‌دهندهٔ لحن و آهنگ (مانند علامت تعجب و علامت پرسش).\n\nمهم‌ترین علائم نگارشی:\n\n• نقطهٔ پایانی (ponto-final) — .\n• ویرگول (vírgula) — ,\n• دو نقطه (dois-pontos) — :\n• علامت پرسش (ponto de interrogação) — ?\n• علامت تعجب (ponto de exclamação) — !',
      examples: [
        {
          pt: 'Os sinais de pontuação representam pausas ou entonações na fala.',
          fa: 'علائم نگارشی نمایندهٔ مکث‌ها یا لحن‌ها در گفتار هستند.',
          pron: 'اوس سینایس جی پونتواسائو رِپرِزِنتام پاوزاس او اِنتوناسویس نا فالا',
          note: 'نوشتار می‌کوشد چیزی را بازسازی کند که در گفتار با صدا و مکث منتقل می‌شود.',
        },
      ],
    },
    {
      headingFa: '۲. نقطه یا نقطهٔ پایانی (Ponto / Ponto final) — .',
      bodyFa:
        'نقطه، یا نقطهٔ پایانی، همان‌طور که از نامش پیداست، برای تمام‌کردنِ یک اندیشه یا گفتار و نشان‌دادنِ پایانِ یک دوره (بند) به‌کار می‌رود؛ یعنی در پایانِ جمله‌ها گذاشته می‌شود و مکثی نسبتاً طولانی را نشان می‌دهد. نقطه همچنین در اختصارها (abreviações) به‌کار می‌رود.',
      examples: [
        {
          pt: 'Visitamos o museu na semana passada. Foi muito divertido, mas passou muito rápido.',
          fa: 'هفتهٔ گذشته از موزه بازدید کردیم. خیلی سرگرم‌کننده بود، اما خیلی زود گذشت.',
          pron: 'ویزیتاموس او موزِئو نا سِمانا پاسادا. فُوی مویتو جیوِرتیدو، مَس پاسو مویتو هاپیدو',
          note: 'هر جمله با نقطه تمام می‌شود و یک اندیشهٔ کامل را می‌بندد.',
        },
        {
          pt: 'No mês que vem, haverá outro passeio. Dessa vez, será para um parque.',
          fa: 'ماه آینده گردشِ دیگری خواهد بود. این‌بار، به یک پارک خواهد بود.',
          pron: 'نو مِس کی وِین، آوِرا اوترو پاسِیو. دِسا وِس، سِرا پارا اوم پارکی',
        },
      ],
    },
    {
      headingFa: '۳. نقطه در اختصارها (Abreviaturas) — فهرست کامل',
      bodyFa:
        'یکی از کاربردهای نقطه گذاشتنِ آن پس از کلمهٔ کوتاه‌شده (اختصار) است. فهرست کاملِ اختصارهای این درس:\n\nAv. — avenida (بلوار / خیابان بزرگ)\nR. — rua (خیابان)\nV. Ex.ª — vossa excelência (جنابعالی / عالیجناب)\nSr. — senhor (آقا)\nSr.ª یا Sra. — senhora (خانم)\nObs. — observação (توضیح / یادداشت)\nDr. — doutor (دکتر ـ مرد)\nDra. — doutora (دکتر ـ زن)\nEtc. — et cetera (و غیره)\nPág. — página (صفحه)\nTel. — telefone (تلفن)',
      examples: [
        {
          pt: 'Sr. João mora na Av. Paulista.',
          fa: 'آقای ژوائو در بلوار پائولیستا زندگی می‌کند.',
          pron: 'سِنیور ژوائو مُرا نا آوِنیدا پائولیستا',
          note: '«Sr.» کوتاه‌شدهٔ senhor و «Av.» کوتاه‌شدهٔ avenida است.',
        },
        {
          pt: 'A Dra. Ana atende no consultório. (Obs.: só de manhã.)',
          fa: 'خانم دکتر آنا در مطب ویزیت می‌کند. (توضیح: فقط صبح‌ها.)',
          pron: 'آ دوتُرا آنا آتِنجی نو کونسولتُریو',
          note: '«Dra.» برای پزشکِ زن و «Obs.» برای «توضیح».',
        },
      ],
    },
    {
      headingFa: '۴. آیا عنوان نقطهٔ پایانی می‌گیرد؟',
      bodyFa:
        'به‌طور کلی عنوانِ کتاب‌ها یا فصل‌ها و زیرعنوان‌ها نقطه‌گذاری نمی‌شوند. قاعدهٔ ساده این است:\n\n• اگر عنوان یک جمله (oração) باشد، یعنی حتماً یک فعل داشته باشد، می‌توان نقطهٔ پایانی گذاشت (و توصیه می‌شود نقطه‌گذاری شود).\n• اگر عنوان فعل نداشته باشد، با نقطهٔ پایانی تمام نمی‌شود.\n\nخلاصه: وقتی فعل نیست، گذاشتنِ نقطهٔ پایانی الزامی نیست؛ وقتی فعل هست، نقطه‌گذاری توصیه می‌شود.',
      examples: [
        {
          pt: 'Sinais de Pontuação',
          fa: '«علائم نگارشی» (عنوان بدون فعل ← بدون نقطه)',
          pron: 'سینایس جی پونتواسائو',
          note: 'این عنوان فعل ندارد، پس نقطهٔ پایانی نمی‌گیرد.',
        },
        {
          pt: 'A vírgula muda o sentido da frase.',
          fa: '«ویرگول معنای جمله را تغییر می‌دهد.» (عنوانِ دارای فعل ← نقطه‌پذیر)',
          pron: 'آ ویرگولا مودا او سِنتیدو دا فرازی',
          note: 'چون فعل «muda» دارد، می‌توان نقطهٔ پایانی گذاشت.',
        },
      ],
    },
    {
      headingFa: '۵. ویرگول (Vírgula) — , — معرفی',
      bodyFa:
        'ویرگول پرکاربردترین علامتِ نگارشی است و بیشترین شمار نقش‌ها را دارد، به همین دلیل در موقعیت‌های گوناگون ظاهر می‌شود. ویرگول نشان‌دهندهٔ یک مکثِ کوتاه در گفتار یا خواندن است. اهمیت آن به‌قدری است که اگر به‌کار نرود یا نادرست به‌کار رود می‌تواند معنای جمله را عوض کند. در بخش‌های بعدی کاربردهای اصلیِ ویرگول را یک‌به‌یک می‌بینیم.',
      examples: [
        {
          pt: 'A vírgula indica uma pausa leve na fala ou na leitura.',
          fa: 'ویرگول یک مکثِ سبک در گفتار یا خواندن را نشان می‌دهد.',
          pron: 'آ ویرگولا اینجیکا اوما پاوزا لِوی نا فالا او نا لِیتورا',
          note: 'جای درستِ ویرگول می‌تواند معنای کل جمله را تغییر دهد.',
        },
      ],
    },
    {
      headingFa: '۶. ویرگول ـ جداکردنِ اجزای هم‌نقش (Mesma função sintática)',
      bodyFa:
        'وقتی چند کلمه یا عبارت نقشِ دستوریِ یکسانی دارند (مثلاً فهرستی از اشیا یا اسم‌ها)، آن‌ها را با ویرگول از هم جدا می‌کنیم. توجه: پیش از آخرین عضوِ فهرست معمولاً به‌جای ویرگول از حرف ربط «e» (و) استفاده می‌شود.',
      examples: [
        {
          pt: 'Para o início das aulas, vou precisar de cadernos, lápis, borracha e agenda.',
          fa: 'برای شروع کلاس‌ها به دفتر، مداد، پاک‌کن و سررسید نیاز خواهم داشت.',
          pron: 'پارا او اینیسیو داس آولاس، وُ پرِسیزار جی کادِرنوس، لاپیس، بوهاشا ای آژِندا',
          note: 'عضوهای فهرست با ویرگول جدا می‌شوند و پیش از آخری «e» می‌آید.',
        },
        {
          pt: 'Ela comprará farinha, ovos, leite e açúcar.',
          fa: 'او آرد، تخم‌مرغ، شیر و شکر خواهد خرید.',
          pron: 'اِلا کومپرارا فارینیا، اُووس، لِیتی ای آسوکار',
        },
      ],
    },
    {
      headingFa: '۷. ویرگول ـ جداکردنِ بدل (Aposto)',
      bodyFa:
        'بدل (aposto) جزئی است که برای توضیح، توصیف یا افزودنِ اطلاعات دربارهٔ یک اسم می‌آید. بدل را با ویرگول از دو طرف جدا می‌کنیم.',
      examples: [
        {
          pt: 'Valdete, minha antiga empregada, esteve aqui ontem.',
          fa: 'والدِتی، خدمتکارِ سابقِ من، دیروز اینجا بود.',
          pron: 'والدِتی، مینیا آنتیگا اِمپرِگادا، اِستِوی آکی اونتِین',
          note: '«minha antiga empregada» بدل است و توضیح می‌دهد والدِتی کیست.',
        },
        {
          pt: 'O João, ex-integrante da comissão, veio assistir à reunião.',
          fa: 'ژوائو، عضوِ پیشینِ کمیسیون، برای شرکت در جلسه آمد.',
          pron: 'او ژوائو، اِکس-اینتِگرانتی دا کومیسائو، وِیو آسیستیر آ هِئونیائو',
        },
        {
          pt: 'Camila, minha filha caçula, tem quatro anos.',
          fa: 'کامیلا، دخترِ کوچکِ من، چهار سال دارد.',
          pron: 'کامیلا، مینیا فیلیا کاسولا، تِین کواترو آنوس',
        },
      ],
    },
    {
      headingFa: '۸. ویرگول ـ جداکردنِ منادا (Vocativo)',
      bodyFa:
        'منادا (vocativo) کسی یا چیزی را که مورد خطاب قرار می‌گیرد برجسته می‌کند (کسی که رو به او سخن می‌گوییم). منادا با ویرگول از بقیهٔ جمله جدا می‌شود.',
      examples: [
        {
          pt: 'Júlia, vá à padaria comprar pães para o lanche.',
          fa: 'ژولیا، برو نانوایی برای میان‌وعده نان بخر.',
          pron: 'ژولیا، وا آ پادِریا کومپرار پائیس پارا او لانشی',
          note: '«Júlia» منادا است: مخاطبِ جمله را نشان می‌دهد.',
        },
        {
          pt: 'A educação, meus amigos, é fundamental para o progresso do país.',
          fa: 'آموزش، دوستانِ من، برای پیشرفتِ کشور بنیادی است.',
          pron: 'آ اِدوکاسائو، مِئوس آمیگوس، اِ فوندامِنتال پارا او پروگرِسو دو پاییس',
          note: '«meus amigos» منادا است و در میانهٔ جمله با دو ویرگول جدا شده.',
        },
        {
          pt: 'Sr. João, lamentamos informar que o seu voo foi cancelado.',
          fa: 'آقای ژوائو، متأسفانه اطلاع می‌دهیم که پروازِ شما لغو شد.',
          pron: 'سِنیور ژوائو، لامِنتاموس اینفورمار کی او سِئو وُئو فُوی کانسِلادو',
        },
      ],
    },
    {
      headingFa: '۹. ویرگول ـ پس از حروفِ ربطِ تقابلی (mas, porém, entretanto)',
      bodyFa:
        'وقتی دو بخشِ جمله با رابطهٔ تقابل/تضاد به هم وصل می‌شوند، پیش از حرف ربطِ تقابلی ویرگول می‌گذاریم. مهم‌ترینِ این حروف: mas (اما)، porém (ولی/اما)، entretanto (با این حال) و مانند این‌ها.',
      examples: [
        {
          pt: 'João adora música clássica, porém, seus amigos preferem rock.',
          fa: 'ژوائو موسیقی کلاسیک را می‌پرستد، اما دوستانش راک را ترجیح می‌دهند.',
          pron: 'ژوائو آدُرا موزیکا کلاسیکا، پورِین، سِئوس آمیگوس پرِفِرِین هاک',
          note: '«porém» رابطهٔ تقابل ایجاد می‌کند و پیش از آن ویرگول می‌آید.',
        },
        {
          pt: 'Rafaela precisava ir embora, mas estava chovendo muito.',
          fa: 'رافائلا باید می‌رفت، اما باران شدیدی می‌بارید.',
          pron: 'هافائلا پرِسیزاوا ایر اِمبورا، مَس اِستاوا شووِندو مویتو',
          note: 'پیش از «mas» ویرگول گذاشته می‌شود.',
        },
      ],
    },
    {
      headingFa:
        '۱۰. ویرگول ـ برای توضیح و اصلاح (isto é, ou seja, na verdade)',
      bodyFa:
        'برای جداکردنِ کلمه‌ها یا عبارت‌هایی که توضیح یا اصلاح می‌آورند از ویرگول استفاده می‌کنیم؛ عبارت‌هایی مانند isto é (یعنی)، ou seja (به عبارت دیگر / یعنی)، na verdade (در واقع).',
      examples: [
        {
          pt: 'Ela mora em São Paulo, isto é, na capital do estado.',
          fa: 'او در سائوپائولو زندگی می‌کند، یعنی در پایتختِ ایالت.',
          pron: 'اِلا مُرا اِین سائو پائولو، ایستو اِ، نا کاپیتال دو اِستادو',
          note: '«isto é» توضیحی افزوده می‌کند و با ویرگول جدا می‌شود.',
        },
        {
          pt: 'Comprei um presente para você, na verdade, dois presentes.',
          fa: 'برای تو یک هدیه خریدم، در واقع، دو هدیه.',
          pron: 'کومپرِی اوم پرِزِنتی پارا وُسه، نا وِردادی، دُیس پرِزِنتِس',
          note: '«na verdade» یک اصلاح می‌آورد.',
        },
        {
          pt: 'A aula foi cancelada, ou seja, adiada para a próxima semana.',
          fa: 'کلاس لغو شد، یعنی به هفتهٔ آینده موکول شد.',
          pron: 'آ آولا فُوی کانسِلادا، او سِژا، آجیادا پارا آ پروسیما سِمانا',
        },
      ],
    },
    {
      headingFa: '۱۱. دو نقطه (Dois pontos) — :',
      bodyFa:
        'این علامتِ گرافیکی پیش از یک توضیح، برای معرفیِ یک گفته (نقل‌قول) یا برای آغازِ یک برشماری (فهرست) به‌کار می‌رود.',
      examples: [
        {
          pt: 'E foi isso que aconteceu: elas foram embora mais cedo.',
          fa: 'و همین اتفاق افتاد: آن‌ها زودتر رفتند.',
          pron: 'ای فُوی ایسو کی آکونتِسِئو: اِلاس فورام اِمبورا مایس سِدو',
          note: 'دو نقطه پیش از توضیح می‌آید.',
        },
        {
          pt: 'Resumindo: será necessário um esforço por parte de todos para que tudo funcione corretamente.',
          fa: 'خلاصه اینکه: تلاشی از سوی همه لازم خواهد بود تا همه‌چیز درست کار کند.',
          pron: 'هِزومیندو: سِرا نِسِساریو اوم اِسفُرسو پور پارتی جی تودوس',
        },
        {
          pt: 'Na matemática as quatro operações essenciais são: adição, subtração, multiplicação e divisão.',
          fa: 'در ریاضیات چهار عملِ اصلی عبارت‌اند از: جمع، تفریق، ضرب و تقسیم.',
          pron: 'نا ماتِماتیکا آس کواترو اوپِراسویس اِسِنسیایس سائو: آجیسائو، سوبتراسائو، مولتیپلیکاسائو ای جیویزائو',
          note: 'دو نقطه یک فهرست (برشماری) را آغاز می‌کند.',
        },
        {
          pt: 'Joana explicou: “Não devemos pisar na grama do parque”.',
          fa: 'ژوانا توضیح داد: «نباید روی چمنِ پارک پا بگذاریم».',
          pron: 'ژوانا اِسپلیکو: نائو دِوِموس پیزار نا گراما دو پارکی',
          note: 'دو نقطه پیش از نقل‌قولِ مستقیم می‌آید.',
        },
      ],
    },
    {
      headingFa: '۱۲. علامت پرسش (Ponto de interrogação) — ?',
      bodyFa:
        'علامت پرسش نشانه‌ای است که با نماد (?) نمایش داده می‌شود و هنگامی به‌کار می‌رود که می‌خواهیم پرسشی مطرح کنیم یا شکّی را برطرف کنیم. این علامت در پایانِ جملهٔ پرسشی می‌آید.',
      examples: [
        {
          pt: 'Onde será a palestra do professor de biologia?',
          fa: 'سخنرانیِ استادِ زیست‌شناسی کجا خواهد بود؟',
          pron: 'اونجی سِرا آ پالِسترا دو پروفِسور جی بیولوژیا؟',
        },
        {
          pt: 'Como podemos deixar as pessoas sem aulas?',
          fa: 'چطور می‌توانیم مردم را بدونِ کلاس رها کنیم؟',
          pron: 'کُمو پودِموس دِیشار آس پِسواس سِین آولاس؟',
        },
        {
          pt: 'Qual a importância da água no planeta?',
          fa: 'اهمیتِ آب در این سیاره چیست؟',
          pron: 'کوال آ ایمپورتانسیا دا آگوا نو پلانِتا؟',
        },
        {
          pt: 'Ele chegou. O que faço agora?',
          fa: 'او رسید. حالا چه کار کنم؟',
          pron: 'اِلی شِگو. او کی فاسو آگُرا؟',
        },
      ],
    },
    {
      headingFa: '۱۳. علامت تعجب (Ponto de exclamação) — !',
      bodyFa:
        'علامت تعجب برای «تعجب کردن»/بیانِ چیزی به‌کار می‌رود. بنابراین در جمله‌هایی گذاشته می‌شود که احساس‌هایی مانند شگفتی، هیجان، تحسین، خشم و اعتراض، آرزو، عصبانیت، دستور، ترس، شور و اشتیاق، حیرت و مانند این‌ها را نشان می‌دهند.',
      examples: [
        {
          pt: 'Que belo dia de sol!',
          fa: 'چه روزِ آفتابیِ زیبایی!',
          pron: 'کی بِلو جیا جی سُل!',
          note: 'بیانِ تحسین.',
        },
        {
          pt: 'Quem me dera ficar em primeiro lugar!',
          fa: 'ای کاش اول می‌شدم!',
          pron: 'کِین می دِرا فیکار اِین پریمِیرو لوگار!',
          note: 'بیانِ آرزو.',
        },
        {
          pt: 'Que horror! Não esperava tal atitude.',
          fa: 'چه وحشتناک! انتظارِ چنین رفتاری را نداشتم.',
          pron: 'کی اُهُر! نائو اِسپِراوا تال آتیتودی',
          note: 'بیانِ اعتراض/حیرت.',
        },
        {
          pt: 'Estou furiosa com você!',
          fa: 'از دستِ تو خیلی عصبانی‌ام!',
          pron: 'اِستُ فوریوزا کُن وُسه!',
          note: 'بیانِ خشم (گوینده زن).',
        },
        {
          pt: 'Ganhei!',
          fa: 'بردم!',
          pron: 'گانیِی!',
          note: 'بیانِ هیجان.',
        },
        {
          pt: 'Seja rápido!',
          fa: 'سریع باش!',
          pron: 'سِژا هاپیدو!',
          note: 'بیانِ دستور.',
        },
      ],
    },
    {
      headingFa: '۱۴. جمع‌بندی: هر علامت چه کاری می‌کند؟',
      bodyFa:
        'یک نگاهِ کلی به نقشِ هر علامت پیش از تمرین‌ها:\n\n• نقطه (.) — پایانِ جمله را نشان می‌دهد (مکثِ طولانی) و در اختصارها به‌کار می‌رود.\n• ویرگول (,) — جدایی یا مکثِ سبک؛ جداکردنِ اجزای هم‌نقش، بدل، منادا و حروفِ ربطِ تقابلی و عبارت‌های توضیحی.\n• دو نقطه (:) — پیش از توضیح، نقل‌قول یا فهرست.\n• علامت پرسش (?) — نشانِ یک پرسش.\n• علامت تعجب (!) — نشانِ شگفتی، احساس یا تعجب.',
      examples: [
        {
          pt: 'Ponto (.) = final de frase; vírgula (,) = pausa/separação; interrogação (?) = pergunta; exclamação (!) = espanto.',
          fa: 'نقطه = پایانِ جمله؛ ویرگول = مکث/جدایی؛ پرسش = سؤال؛ تعجب = شگفتی.',
          pron: 'پونتو ایگوال فینال جی فرازی؛ ویرگولا ایگوال پاوزا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'علائم نگارشی لحن و مکثِ گفتار را در نوشتار بازسازی می‌کنند.',
    'نقطه (.) پایانِ جمله را نشان می‌دهد و در اختصارها هم می‌آید (Sr., Av., Dr., Etc.).',
    'عنوان بدونِ فعل نقطهٔ پایانی نمی‌گیرد؛ عنوانِ دارای فعل نقطه‌پذیر است.',
    'ویرگول پرکاربردترین علامت است: هم‌نقش‌ها، بدل، منادا، mas/porém/entretanto و isto é/ou seja/na verdade.',
    'در فهرست، پیش از عضوِ آخر به‌جای ویرگول حرف ربطِ «e» می‌آید.',
    'دو نقطه (:) پیش از توضیح، نقل‌قول یا فهرست می‌آید.',
    'علامت پرسش (?) برای سؤال و علامت تعجب (!) برای احساس و شگفتی به‌کار می‌رود.',
  ],
  quiz: [
    {
      id: 'course-aula-6-q1',
      type: 'mcq',
      prompt: 'Qual sinal indica o final de uma frase e marca uma pausa longa?',
      promptFa: 'کدام علامت پایانِ جمله و مکثی طولانی را نشان می‌دهد؟',
      options: [
        'Ponto final (.)',
        'Vírgula (,)',
        'Dois pontos (:)',
        'Ponto de interrogação (?)',
      ],
      answer: 'Ponto final (.)',
      explanationFa:
        'نقطهٔ پایانی (.) جمله را می‌بندد و مکثی نسبتاً طولانی را نشان می‌دهد.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q2',
      type: 'mcq',
      prompt: 'Qual é a abreviatura de "senhor"?',
      promptFa: 'اختصارِ «senhor» (آقا) کدام است؟',
      options: ['Sr.', 'Sra.', 'Dr.', 'Av.'],
      answer: 'Sr.',
      explanationFa:
        '«Sr.» اختصارِ senhor و «Sra.» یا «Sr.ª» اختصارِ senhora (خانم) است.',
      cefr: 'A2',
      skill: 'vocab',
    },
    {
      id: 'course-aula-6-q3',
      type: 'mcq',
      prompt:
        'O título "Sinais de Pontuação" (sem verbo) deve levar ponto final?',
      promptFa:
        'عنوانِ «Sinais de Pontuação» که فعل ندارد، آیا نقطهٔ پایانی می‌گیرد؟',
      options: [
        'Não, pois não tem verbo.',
        'Sim, todo título leva ponto.',
        'Sim, porque é longo.',
        'Nunca se usa ponto em frases.',
      ],
      answer: 'Não, pois não tem verbo.',
      explanationFa:
        'عنوانِ بدون فعل نقطهٔ پایانی نمی‌گیرد؛ فقط عنوانِ دارای فعل نقطه‌پذیر است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q4',
      type: 'mcq',
      prompt:
        'Em "Valdete, minha antiga empregada, esteve aqui", a vírgula separa um(a):',
      promptFa:
        'در جملهٔ «Valdete, minha antiga empregada, esteve aqui» ویرگول چه چیزی را جدا کرده؟',
      options: ['Aposto', 'Vocativo', 'Oposição', 'Enumeração'],
      answer: 'Aposto',
      explanationFa:
        '«minha antiga empregada» بدل (aposto) است و توضیح می‌دهد والدِتی کیست.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q5',
      type: 'mcq',
      prompt: 'Em "Júlia, vá à padaria", a vírgula separa um(a):',
      promptFa: 'در جملهٔ «Júlia, vá à padaria» ویرگول چه چیزی را جدا کرده؟',
      options: ['Vocativo', 'Aposto', 'Enumeração', 'Explicação'],
      answer: 'Vocativo',
      explanationFa: '«Júlia» منادا (vocativo) است؛ کسی که خطاب قرار گرفته.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q6',
      type: 'fill-blank',
      prompt: 'Ela comprará farinha, ovos, leite ___ açúcar.',
      promptFa: 'در فهرست، پیش از عضوِ آخر چه کلمه‌ای می‌آید؟',
      options: [],
      answer: 'e',
      explanationFa:
        'در برشماری، پیش از آخرین عضو به‌جای ویرگول حرف ربطِ «e» (و) می‌آید.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q7',
      type: 'mcq',
      prompt: 'Qual sinal se usa antes de uma enumeração, explicação ou fala?',
      promptFa: 'پیش از فهرست، توضیح یا نقل‌قول از کدام علامت استفاده می‌شود؟',
      options: [
        'Dois pontos (:)',
        'Ponto final (.)',
        'Ponto de exclamação (!)',
        'Vírgula (,)',
      ],
      answer: 'Dois pontos (:)',
      explanationFa:
        'دو نقطه (:) پیش از توضیح، نقل‌قول یا شروعِ فهرست به‌کار می‌رود.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q8',
      type: 'mcq',
      prompt: 'Que sinal completa: "Estou furiosa com você___"',
      promptFa: 'کدام علامت جملهٔ «Estou furiosa com você___» را کامل می‌کند؟',
      options: ['!', '.', '?', ':'],
      answer: '!',
      explanationFa:
        'این جمله خشم را بیان می‌کند، پس با علامت تعجب (!) تمام می‌شود.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q9',
      type: 'mcq',
      prompt: 'Que sinal completa: "Qual a importância da água no planeta___"',
      promptFa:
        'کدام علامت جملهٔ «Qual a importância da água no planeta___» را کامل می‌کند؟',
      options: ['?', '!', '.', ','],
      answer: '?',
      explanationFa: 'این یک پرسش است، پس با علامت پرسش (?) تمام می‌شود.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q10',
      type: 'match',
      prompt:
        'Relacione os sinais aos seus significados: (?) pergunta / (!) espanto, surpresa / (,) pausa ou separação / (.) final de frase.',
      promptFa:
        'هر علامت را به معنایش وصل کنید: پرسش، شگفتی/سورپرایز، مکث یا جدایی، پایانِ جمله. (تمرینِ «Relacione» جزوه)',
      options: [
        '(?) Indica uma pergunta.',
        '(!) Indica um espanto, uma surpresa.',
        '(,) Indica uma pausa ou separação de elementos.',
        '(.) Indica final de uma frase.',
      ],
      answer: [
        '(?) Indica uma pergunta.',
        '(!) Indica um espanto, uma surpresa.',
        '(,) Indica uma pausa ou separação de elementos.',
        '(.) Indica final de uma frase.',
      ],
      explanationFa:
        'علامت پرسش = سؤال؛ علامت تعجب = شگفتی/سورپرایز؛ ویرگول = مکث یا جداییِ اجزا؛ نقطه = پایانِ جمله.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q11',
      type: 'fill-blank',
      prompt:
        'Pontue: "É necessário ir ao supermercado___ ao açougue___ à farmácia e à padaria___" (indique os três sinais na ordem)',
      promptFa:
        'جملهٔ ۱ تمرینِ نقطه‌گذاری: سه علامتِ خالی را به‌ترتیب بگذارید (سوپرمارکت، قصابی، ... نانوایی).',
      options: [],
      answer: ', , .',
      explanationFa:
        'اعضای هم‌نقشِ فهرست با ویرگول جدا می‌شوند و جمله با نقطه بسته می‌شود: «...supermercado, ao açougue, à farmácia e à padaria.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q12',
      type: 'fill-blank',
      prompt:
        'Pontue: "A verdade___ minha querida amiga___ é que já não sou a mesma pessoa___"',
      promptFa:
        'جملهٔ ۲ تمرینِ نقطه‌گذاری: سه علامت را بگذارید (توجه به منادا).',
      options: [],
      answer: ', , .',
      explanationFa:
        '«minha querida amiga» منادا است و با دو ویرگول جدا می‌شود؛ جمله با نقطه تمام می‌شود: «A verdade, minha querida amiga, é que já não sou a mesma pessoa.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q13',
      type: 'fill-blank',
      prompt: 'Pontue: "Bom dia___ André___"',
      promptFa:
        'جملهٔ ۳ تمرینِ نقطه‌گذاری: دو علامت را بگذارید (احوال‌پرسی + منادا).',
      options: [],
      answer: ', !',
      explanationFa:
        '«André» منادا است و با ویرگول جدا می‌شود؛ سلامِ گرم با علامت تعجب: «Bom dia, André!» (نقطه هم پذیرفتنی است.)',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q14',
      type: 'fill-blank',
      prompt:
        'Pontue: "Como dizia Raul Seixas___ “Eu prefiro ser essa metamorfose ambulante___ do que ter aquela velha opinião formada sobre tudo”___"',
      promptFa: 'جملهٔ ۴ تمرینِ نقطه‌گذاری: سه علامت را بگذارید (نقل‌قول).',
      options: [],
      answer: ': , .',
      explanationFa:
        'پیش از نقل‌قول دو نقطه، داخلِ نقل‌قول یک ویرگول و پایانِ جمله نقطه: «Como dizia Raul Seixas: “Eu prefiro ser essa metamorfose ambulante, do que ter aquela velha opinião formada sobre tudo”.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q15',
      type: 'fill-blank',
      prompt: 'Pontue: "Que dia é hoje___"',
      promptFa: 'جملهٔ ۵ تمرینِ نقطه‌گذاری: یک علامت بگذارید.',
      options: [],
      answer: '?',
      explanationFa: 'این یک پرسش است: «Que dia é hoje?»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q16',
      type: 'fill-blank',
      prompt: 'Pontue: "Que filme maravilhoso___"',
      promptFa: 'جملهٔ ۶ تمرینِ نقطه‌گذاری: یک علامت بگذارید.',
      options: [],
      answer: '!',
      explanationFa: 'این جمله تحسین را بیان می‌کند: «Que filme maravilhoso!»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q17',
      type: 'fill-blank',
      prompt: 'Pontue: "Gosto de brincar com meus filhos___"',
      promptFa: 'جملهٔ ۷ تمرینِ نقطه‌گذاری: یک علامت بگذارید.',
      options: [],
      answer: '.',
      explanationFa:
        'یک جملهٔ خبریِ ساده است و با نقطه تمام می‌شود: «Gosto de brincar com meus filhos.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q18',
      type: 'fill-blank',
      prompt:
        'Pontue: "No dia da prova___ não esqueça de levar___ documento de identidade com foto___ caneta preta ou azul___ lápis___ borracha___ lanche e água."',
      promptFa:
        'جملهٔ ۸ تمرینِ نقطه‌گذاری: شش علامتِ خالی را به‌ترتیب بگذارید (منادا/فهرست).',
      options: [],
      answer: ', : , , , ,',
      explanationFa:
        'پس از «No dia da prova» ویرگول، پیش از فهرست دو نقطه، سپس اعضای فهرست با ویرگول: «No dia da prova, não esqueça de levar: documento de identidade com foto, caneta preta ou azul, lápis, borracha, lanche e água.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q19',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto final (.): "Eu acho ___" — escreva uma frase completa.',
      promptFa:
        'تمرینِ «Complete»: با نقطهٔ پایانی جمله را کامل کنید: «Eu acho ___» (یک جملهٔ خبری بنویسید).',
      options: [],
      answer: 'Eu acho que o português é uma língua bonita.',
      explanationFa:
        'جملهٔ خبری با نقطهٔ پایانی تمام می‌شود؛ هر جملهٔ کاملِ درست پذیرفته است. نمونه: «Eu acho que o português é uma língua bonita.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q20',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto de interrogação (?): "Qual é ___" — escreva uma pergunta completa.',
      promptFa:
        'تمرینِ «Complete»: با علامت پرسش جمله را کامل کنید: «Qual é ___» (یک پرسش کامل بنویسید).',
      options: [],
      answer: 'Qual é o seu nome?',
      explanationFa:
        'جملهٔ پرسشی با علامت پرسش تمام می‌شود؛ هر پرسشِ درست پذیرفته است. نمونه: «Qual é o seu nome?»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q21',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto de exclamação (!): "Nossa, como ___" — escreva uma exclamação completa.',
      promptFa:
        'تمرینِ «Complete»: با علامت تعجب جمله را کامل کنید: «Nossa, como ___» (یک جملهٔ تعجبی کامل بنویسید).',
      options: [],
      answer: 'Nossa, como você cresceu!',
      explanationFa:
        'جملهٔ تعجبی با علامت تعجب تمام می‌شود؛ هر جملهٔ درست پذیرفته است. نمونه: «Nossa, como você cresceu!»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q22',
      type: 'mcq',
      prompt: 'Antes de "porém" numa relação de oposição, o que usamos?',
      promptFa: 'پیش از «porém» در رابطهٔ تقابل، چه چیزی می‌گذاریم؟',
      options: ['Vírgula (,)', 'Ponto final (.)', 'Dois pontos (:)', 'Nada'],
      answer: 'Vírgula (,)',
      explanationFa:
        'پیش از حروفِ ربطِ تقابلی مانند mas و porém و entretanto ویرگول می‌آید.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q23',
      type: 'order-words',
      prompt:
        'Ordene: "clássica / João / adora / música / , / porém / rock / , / seus / amigos / preferem"',
      promptFa:
        'کلمه‌ها را مرتب کنید تا جملهٔ درست با ویرگول و «porém» ساخته شود.',
      options: [],
      answer: 'João adora música clássica, porém, seus amigos preferem rock.',
      explanationFa:
        'جملهٔ درست: «João adora música clássica, porém, seus amigos preferem rock.» ویرگول پیش از حرف ربطِ تقابلیِ porém می‌آید.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-6-q24',
      type: 'translate-pt-fa',
      prompt:
        'Traduza para o persa: "Na matemática as quatro operações essenciais são: adição, subtração, multiplicação e divisão."',
      promptFa: 'این جملهٔ دارای دو نقطه و فهرست را به فارسی ترجمه کنید.',
      options: [],
      answer:
        'در ریاضیات چهار عملِ اصلی عبارت‌اند از: جمع، تفریق، ضرب و تقسیم.',
      explanationFa:
        'دو نقطه پیش از فهرست می‌آید و اعضای فهرست با ویرگول و «e» جدا می‌شوند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-6-q25',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto final (.): "A gente sempre ___" — escreva uma frase completa.',
      promptFa:
        'تمرینِ «Complete»: با نقطهٔ پایانی جمله را کامل کنید: «A gente sempre ___» (یک جملهٔ خبری بنویسید).',
      options: [],
      answer: 'A gente sempre estuda português à noite.',
      explanationFa:
        'جملهٔ خبری با نقطهٔ پایانی تمام می‌شود؛ هر جملهٔ کاملِ درست پذیرفته است. نمونه: «A gente sempre estuda português à noite.»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q26',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto de interrogação (?): "Por que ___" — escreva uma pergunta completa.',
      promptFa:
        'تمرینِ «Complete»: با علامت پرسش جمله را کامل کنید: «Por que ___» (یک پرسش کامل بنویسید).',
      options: [],
      answer: 'Por que você não veio à aula?',
      explanationFa:
        'جملهٔ پرسشی با علامت پرسش تمام می‌شود؛ هر پرسشِ درست پذیرفته است. نمونه: «Por que você não veio à aula?»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q27',
      type: 'translate-fa-pt',
      prompt:
        'Complete com ponto de exclamação (!): "Que ___" — escreva uma exclamação completa.',
      promptFa:
        'تمرینِ «Complete»: با علامت تعجب جمله را کامل کنید: «Que ___» (یک جملهٔ تعجبی کامل بنویسید).',
      options: [],
      answer: 'Que dia maravilhoso!',
      explanationFa:
        'جملهٔ تعجبی با علامت تعجب تمام می‌شود؛ هر جملهٔ درست پذیرفته است. نمونه: «Que dia maravilhoso!»',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-6-q28',
      type: 'speak',
      prompt:
        'Atividade de vídeo (avaliação oral, entrega obrigatória): grave um único vídeo de aproximadamente 30 segundos, de frente para a câmera, sem máscara, sem fones de ouvido e sem chapéu/capuz/boné, respondendo a todas as perguntas: Qual é o seu nome completo? O que você fazia em seu país? Qual sua profissão? O que você faz hoje no Brasil? Onde você mora (cidade e estado)?',
      promptFa:
        'فعالیتِ ویدیویی (ارزیابیِ شفاهی، تحویلِ اجباری): یک ویدیوی حدوداً ۳۰ ثانیه‌ای بگیرید؛ رو به دوربین، بدون ماسک، بدون هدفون و بدون کلاه/کلاهِ روسری/کلاهِ لبه‌دار، و به همهٔ پرسش‌ها پاسخ دهید: نام کاملِ شما چیست؟ در کشورتان چه کاری می‌کردید؟ شغلتان چیست؟ امروز در برزیل چه کار می‌کنید؟ کجا زندگی می‌کنید (شهر و ایالت)؟',
      audioText:
        'Meu nome completo é Ana Silva. No meu país, eu era professora. Minha profissão é professora e hoje no Brasil eu trabalho como cuidadora. Eu moro em São Paulo, estado de São Paulo.',
      options: [],
      answer:
        'Meu nome completo é ___. No meu país, eu ___. Minha profissão é ___ e hoje no Brasil eu ___. Eu moro em ___ (cidade), estado de ___.',
      explanationFa:
        'این فعالیتِ گفتاریِ اجباریِ جزوه است. با جمله‌های کامل و علائم نگارشیِ درست به هر پنج پرسش پاسخ دهید: نام کامل، کاری که در کشورتان می‌کردید، شغل، کارِ کنونی در برزیل، و محلِ زندگی (شهر و ایالت).',
      cefr: 'A2',
      skill: 'speaking',
    },
  ],
  estimatedMinutes: 26,
  sourceNoteFa: 'برگرفته از جزوهٔ آماده‌سازی فدرال — Aula 6 (کامل).',
};
