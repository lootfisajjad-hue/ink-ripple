import type { CourseLesson } from '@/domain/content/schema';

export const aula11: CourseLesson = {
  id: 'course-aula-11',
  order: 11,
  aula: 'Aula 11',
  titleFa: 'فهم و تفسیر متن',
  titlePt: 'Compreensão e Interpretação de Texto',
  cefr: 'A2',
  summaryFa:
    'در این درس ابتدا شش راهبرد اصلی خواندن (estratégias de leitura) را یاد می‌گیرید تا متن‌ها را بهتر بفهمید. سپس تفاوت مهم میان «فهم متن» (compreensão) و «تفسیر متن» (interpretação) را با جدول مقایسه‌ای می‌آموزید. در بخش دوم، پنج متن واقعی پرتغالی برزیلی می‌خوانید: معرفی شخصی فلاویو، افسانهٔ لاک‌پشت و خرگوش، متنی دربارهٔ نام‌های برزیلی، متنی دربارهٔ حرفه‌ها، و دو گفت‌وگو (مصاحبهٔ شغلی و در رستوران). هر متن با پرسش‌های فهم مطلب همراه است تا مهارت خواندن و درک شما در سطح A2 تقویت شود.',
  objectivesFa: [
    'شش راهبرد اصلی خواندن را بشناسید و در خواندن به‌کار ببرید.',
    'تفاوت میان فهم متن (compreensão) و تفسیر متن (interpretação) را توضیح دهید.',
    'اطلاعات صریح یک متن (نام‌ها، حرفه‌ها، رویدادها) را استخراج کنید.',
    'به پرسش‌های فهم مطلب دربارهٔ متن‌های کوتاه پاسخ دهید.',
    'گفت‌وگوهای روزمره (مصاحبهٔ شغلی، سفارش در رستوران) را بخوانید و بفهمید.',
    'واژگان مربوط به حرفه‌ها، خانواده و زندگی روزمره را گسترش دهید.',
  ],
  sections: [
    {
      headingFa: '۱. راهبردهای خواندن (Estratégias de Leitura) ـ مقدمه',
      bodyFa:
        'راهبردهای خواندن مجموعهٔ فنون و روش‌هایی هستند که خواندن و در نتیجه فهمِ متن را آسان‌تر می‌کنند. ما با هدف‌های مشخصی می‌خوانیم: برای درس خواندن (estudar)، یاد گرفتن (aprender)، سرگرمی (entreter)، یا به‌دست‌آوردن اطلاعات (obter informação) و مانند این‌ها. در ادامه شش فنِ اصلی که به فرایند خواندن کمک می‌کنند معرفی می‌شوند.',
      examples: [
        {
          pt: 'As estratégias de leitura facilitam a compreensão dos textos.',
          fa: 'راهبردهای خواندن فهم متن‌ها را آسان می‌کنند.',
          pron: 'آز اِستراتِژیاس جی لِیتورا فاسیلیتام آ کُمپرِئِنسائو دوس تِکستوس',
        },
        {
          pt: 'Lemos para estudar, aprender, entreter ou obter informação.',
          fa: 'ما برای درس خواندن، یاد گرفتن، سرگرمی یا کسب اطلاعات می‌خوانیم.',
          pron: 'لِموس پارا اِستودار، آپرِندِر، اِنترِتِر او اُبتِر اینفورماسائو',
        },
      ],
    },
    {
      headingFa: '۲. فن اول: با دقت خواندن (Ler com atenção)',
      bodyFa:
        'برای بهتر فهمیدن یک متن مهم است که هر پاراگراف را با آرامش (com calma) بخوانید. اگر چیزی را نفهمیدید، برگردید و دوباره بخوانید (releia). و اگر واژه‌ای دیدید که معنی‌اش را نمی‌دانید، بهترین کار این است که به دیکشنری (dicionário) مراجعه کنید و بعد به متن برگردید.',
      examples: [
        {
          pt: 'Leia com calma cada parágrafo.',
          fa: 'هر پاراگراف را با آرامش بخوان.',
          pron: 'لِیا کُن کالما کادا پاراگرافو',
        },
        {
          pt: 'Se não compreender, volte e releia.',
          fa: 'اگر نفهمیدی، برگرد و دوباره بخوان.',
          pron: 'سی نائو کُمپرِئِندِر، وُلتی ای رِلِیا',
        },
        {
          pt: 'Recorra ao dicionário e volte ao texto.',
          fa: 'به دیکشنری مراجعه کن و به متن برگرد.',
          pron: 'رِکُها آئو دیسیوناریو ای وُلتی آئو تِکستو',
          note: 'recorrer ao = مراجعه کردن به.',
        },
      ],
    },
    {
      headingFa:
        '۳. فن دوم: خلاصه‌کردن ایده‌های اصلی (Sintetizar as principais ideias)',
      bodyFa:
        'خلاصه‌ای (resumo) بسازید که موضوع‌ها یا مطالب اصلیِ متن را نشان بدهد. برای این کار فنِ قبلی (با دقت خواندن) خیلی مهم است و مکمل این فن است. بنابراین با دقت بخوانید و کم‌کم واژه‌های کلیدی (palavras-chave) متن را علامت بزنید.',
      examples: [
        {
          pt: 'Faça um resumo apontando os principais temas do texto.',
          fa: 'خلاصه‌ای بساز که موضوع‌های اصلی متن را نشان دهد.',
          pron: 'فاسا اون رِزومو آپُنتاندو اوس پرینسیپایس تِماس دو تِکستو',
        },
        {
          pt: 'Vá assinalando as palavras-chave do texto.',
          fa: 'واژه‌های کلیدی متن را علامت بزن.',
          pron: 'وا آسینالاندو آز پالاوراس-شاوی دو تِکستو',
          note: 'palavra-chave = واژهٔ کلیدی.',
        },
      ],
    },
    {
      headingFa: '۴. فن سوم: خواندن بین سطرها (Ler nas entrelinhas)',
      bodyFa:
        'این مفهوم بر پایهٔ حدس‌ها و استنتاج‌هایی (adivinhações e deduções) است که انجام می‌دهیم؛ یعنی چیزهایی که با واژه در متن نوشته نشده‌اند، اما در بافت (contexto) وجود دارند. برای این کار می‌توانیم از دانشِ زندگی، تجربه‌ها و دیدگاه‌های خودمان استفاده کنیم.',
      examples: [
        {
          pt: 'Ler nas entrelinhas é entender o que não está escrito.',
          fa: 'خواندن بین سطرها یعنی فهمیدن آنچه نوشته نشده است.',
          pron: 'لِر ناس اِنترِلینیاس اِ اِنتِندِر او کی نائو اِستا اِسکریتو',
        },
        {
          pt: 'Usamos nossas experiências e pontos de vista.',
          fa: 'ما از تجربه‌ها و دیدگاه‌های خودمان استفاده می‌کنیم.',
          pron: 'اوزاموس نُساس اِکسپِریِنسیاس ای پُنتوس جی ویستا',
        },
      ],
    },
    {
      headingFa: '۵. فن چهارم: حفظ عادت به خواندن (Manter o hábito da leitura)',
      bodyFa:
        'به‌دست‌آوردن عادت به خواندن، فهم متن‌ها را روزبه‌روز آسان‌تر می‌کند. از این راه واژگان (vocabulário)، تخیل (imaginação) و خلاقیت (criatividade) بیشتر می‌شوند و نه‌تنها متنِ نوشتاری، بلکه تولید متن شفاهی (produção de texto oral) هم خیلی بهتر می‌شود.',
      examples: [
        {
          pt: 'O hábito da leitura facilita a compreensão dos textos.',
          fa: 'عادت به خواندن فهم متن‌ها را آسان می‌کند.',
          pron: 'او آبیتو دا لِیتورا فاسیلیتا آ کُمپرِئِنسائو دوس تِکستوس',
        },
        {
          pt: 'O vocabulário, a imaginação e a criatividade aumentam.',
          fa: 'واژگان، تخیل و خلاقیت بیشتر می‌شوند.',
          pron: 'او ووکابولاریو، آ ایماژیناسائو ای آ کریاتیویدادی آومِنتام',
        },
      ],
    },
    {
      headingFa: '۶. فن پنجم: بلند خواندن (Praticar a leitura em voz alta)',
      bodyFa:
        'در بسیاری از موارد، بلند خواندن (em voz alta) خواندن و فهم متن را آسان می‌کند. با این حال بعضی افراد ترجیح می‌دهند در سکوت (em silêncio) بخوانند. پس امتحان کنید و ببینید کدام را ترجیح می‌دهید.',
      examples: [
        {
          pt: 'Ler em voz alta facilita a compreensão.',
          fa: 'بلند خواندن فهم را آسان می‌کند.',
          pron: 'لِر اِین وُیس آلتا فاسیلیتا آ کُمپرِئِنسائو',
        },
        {
          pt: 'Algumas pessoas preferem ler em silêncio.',
          fa: 'بعضی افراد ترجیح می‌دهند در سکوت بخوانند.',
          pron: 'آلگوماس پِسوآس پرِفِرِم لِر اِین سیلِنسیو',
        },
      ],
    },
    {
      headingFa: '۷. فن ششم: متنوع خواندن (Variar a leitura dos textos)',
      bodyFa:
        'کتاب (livros)، روزنامه (jornais)، مجله (revistas)، متن‌های دانشگاهی (textos acadêmicos) و مانند این‌ها را بخوانید. این کار هم تفسیر متن را آسان می‌کند و هم واژگانتان را بیشتر می‌کند. توجه کنید که زبان می‌تواند از رسمی (formal) به غیررسمی (informal) و نیز از کلامی (verbal) به غیرکلامی (não-verbal) ـ مانند تصویر و عکس ـ بسته به نوع متن تغییر کند.',
      examples: [
        {
          pt: 'Leia livros, jornais, revistas e textos acadêmicos.',
          fa: 'کتاب، روزنامه، مجله و متن‌های دانشگاهی بخوان.',
          pron: 'لِیا لیوروس، ژورنایس، رِویستاس ای تِکستوس آکادِمیکوس',
        },
        {
          pt: 'A linguagem pode ser formal, informal, verbal ou não-verbal.',
          fa: 'زبان می‌تواند رسمی، غیررسمی، کلامی یا غیرکلامی باشد.',
          pron: 'آ لینگواژِن پُدی سِر فورمال، اینفورمال، وِربال او نائو-وِربال',
          note: 'زبان غیرکلامی = تصویر، عکس و مانند این‌ها.',
        },
      ],
    },
    {
      headingFa: '۸. فهم و تفسیر متن ـ تفاوت چیست؟',
      bodyFa:
        'فهمِ متن (compreensão) یعنی تحلیل و رمزگشاییِ آنچه واقعاً نوشته شده است، چه جمله‌ها و چه ایده‌های موجود در متن. اما تفسیرِ متن (interpretação) به نتیجه‌هایی مربوط می‌شود که با پیوند دادن ایده‌های متن به واقعیت به آن‌ها می‌رسیم؛ یعنی فهمِ ذهنی و شخصیِ (subjetivo) خواننده از متن. نکتهٔ کلیدی: ممکن است متنی را بفهمیم بدون آنکه آن را تفسیر کنیم، اما نمی‌توان متنی را تفسیر کرد بدون آنکه آن را فهمیده باشیم.',
      examples: [
        {
          pt: 'A compreensão é a análise do que está escrito.',
          fa: 'فهم، تحلیلِ آن چیزی است که نوشته شده است.',
          pron: 'آ کُمپرِئِنسائو اِ آ آنالیزی دو کی اِستا اِسکریتو',
        },
        {
          pt: 'A interpretação é o entendimento subjetivo do leitor.',
          fa: 'تفسیر، فهمِ ذهنیِ خواننده است.',
          pron: 'آ اینتِرپرِتاسائو اِ او اِنتِنجیمِنتو سوبژِتیوو دو لِیتور',
        },
        {
          pt: 'Não é possível interpretar um texto sem compreendê-lo.',
          fa: 'نمی‌توان متنی را تفسیر کرد بدون آنکه آن را بفهمیم.',
          pron: 'نائو اِ پُسیوِل اینتِرپرِتار اون تِکستو سِن کُمپرِئِنده-لو',
        },
      ],
    },
    {
      headingFa: '۹. جدول مقایسه: فهم در برابر تفسیر',
      bodyFa:
        'این جدول سه تفاوت اصلیِ فهم متن (COMPREENSÃO) و تفسیر متن (INTERPRETAÇÃO) را نشان می‌دهد:\n\nمعیار | فهم متن (Compreensão) | تفسیر متن (Interpretação)\nچیست؟ | تحلیلِ آنچه در متن نوشته شده؛ فهمِ جمله‌ها و ایده‌های موجود. | آنچه می‌توانیم دربارهٔ نوشتهٔ متن نتیجه بگیریم؛ شیوهٔ برداشتِ ما از محتوا.\nاطلاعات | اطلاعات درونِ خودِ متن است. | اطلاعات بیرونِ متن است اما با آن پیوند دارد.\nتحلیل | با عینیت (objetividade) و با جمله‌ها و واژه‌های نوشته‌شده کار می‌کند. | با ذهنیت (subjetividade) و با آنچه شما از متن فهمیدید کار می‌کند.',
      examples: [
        {
          pt: 'Compreensão → objetividade. Interpretação → subjetividade.',
          fa: 'فهم ← عینیت. تفسیر ← ذهنیت.',
          pron: 'کُمپرِئِنسائو اُبژِتیویدادی. اینتِرپرِتاسائو سوبژِتیویدادی',
        },
      ],
    },
    {
      headingFa: '۱۰. متن ۱: معرفی فلاویو (Sou Flávio)',
      bodyFa:
        'متن اول یک معرفی شخصی است. آن را با دقت بخوانید و اطلاعات صریح (نام، سن، شهر، دوستان، سرگرمی‌ها) را پیدا کنید.\n\nمتن کامل:\n«من فلاویو هستم، ۱۷ سال دارم و در کامپیناس زندگی می‌کنم. آخر هفته‌ها بیرون می‌روم و به مرکز خرید، سینما یا مهمانی می‌روم. چهار دوست خاص دارم: ادواردو، سوفیا، مایا و آدریانا. همیشه با هم هستیم. سوفیا و ادواردو خیلی ورزش دوست دارند؛ آن‌ها در باشگاهی در همین شهر والیبال بازی می‌کنند. مایا و آدریانا هیچ ورزشی نمی‌کنند؛ آن‌ها ترجیح می‌دهند بخوانند و موسیقی گوش کنند. ساعت ۷ بیدار می‌شوم و هر روز در مدرسه کلاس پرتغالی دارم. نام معلم پرتغالی‌ام لوئیزا است و او برزیلی است. خیلی دوستش دارم چون خیلی مهربان است.»',
      examples: [
        {
          pt: 'Sou Flávio, tenho 17 anos e moro em Campinas.',
          fa: 'من فلاویو هستم، ۱۷ سال دارم و در کامپیناس زندگی می‌کنم.',
          pron: 'سُ فلاویو، تِنیو دِزِسِتی آنوس ای مُرو اِین کامپیناس',
        },
        {
          pt: 'A Sofia e o Eduardo jogam vôlei num clube da cidade.',
          fa: 'سوفیا و ادواردو در باشگاهی در شهر والیبال بازی می‌کنند.',
          pron: 'آ سوفیا ای او اِدواردو ژُگام وُلِی نون کلوبی دا سیدادی',
        },
        {
          pt: 'A Maya e a Adriana não praticam nenhum esporte.',
          fa: 'مایا و آدریانا هیچ ورزشی نمی‌کنند.',
          pron: 'آ مایا ای آ آدریانا نائو پراتیکام نِنیون اِسپورتی',
        },
        {
          pt: 'Acordo às 7 horas e tenho aula de português na escola.',
          fa: 'ساعت ۷ بیدار می‌شوم و در مدرسه کلاس پرتغالی دارم.',
          pron: 'آکوردو آس سِتی اوراس ای تِنیو آولا جی پُرتوگِس نا اِسکولا',
        },
        {
          pt: 'A minha professora se chama Luiza e ela é brasileira.',
          fa: 'معلم من لوئیزا نام دارد و او برزیلی است.',
          pron: 'آ مینیا پروفِسورا سی شاما لوئیزا ای اِلا اِ برازیلِیرا',
        },
      ],
    },
    {
      headingFa: '۱۱. متن ۲: لاک‌پشت و خرگوش (O Jabuti e o Coelho)',
      bodyFa:
        'این یک افسانهٔ کوتاه (fábula) است. متن را بخوانید و رویدادها را دنبال کنید.\n\nمتن کامل:\n«لاک‌پشت (o jabuti) تصمیم گرفت با خرگوش (o coelho) مسابقهٔ دو بگذارد. مسابقه شروع شد. خرگوش جلو افتاد و اصلاً لاک‌پشت را ندید. خرگوش با خودش فکر کرد: ‹فکر کنم می‌توانم کمی بخوابم. او دیر به من می‌رسد.› خرگوش خوابش برد و اصلاً ندید که لاک‌پشت از کنارش رد شد. لاک‌پشت فریاد می‌زد: ‹بردم! بردم!›»\n\nاین افسانه همان داستان معروف «لاک‌پشت و خرگوش» است که درس آن پشتکار و پیوستگی است.',
      examples: [
        {
          pt: 'O jabuti resolveu apostar uma corrida com o coelho.',
          fa: 'لاک‌پشت تصمیم گرفت با خرگوش مسابقهٔ دو بگذارد.',
          pron: 'او ژابوتی رِزُلوِئو آپُستار اوما کُهیدا کُن او کُئِلیو',
          note: 'jabuti = لاک‌پشت خشکی؛ coelho = خرگوش؛ corrida = مسابقهٔ دو.',
        },
        {
          pt: 'O coelho saiu na frente e nem enxergou o jabuti.',
          fa: 'خرگوش جلو افتاد و اصلاً لاک‌پشت را ندید.',
          pron: 'او کُئِلیو سایو نا فرِنتی ای نِن اِنشِرگو او ژابوتی',
        },
        {
          pt: 'O coelho pegou no sono e nem viu o jabuti passar.',
          fa: 'خرگوش خوابش برد و ندید که لاک‌پشت رد شد.',
          pron: 'او کُئِلیو پِگو نو سُنو ای نِن ویو او ژابوتی پاسار',
        },
        {
          pt: '– Venci! Venci! – gritava o jabuti.',
          fa: '«بردم! بردم!» ـ لاک‌پشت فریاد می‌زد.',
          pron: 'وِنسی! وِنسی! گریتاوا او ژابوتی',
          note: 'venci = بردم (گذشتهٔ فعل vencer).',
        },
      ],
    },
    {
      headingFa: '۱۲. متن ۳: نام‌های افراد در برزیل (Nomes de pessoas)',
      bodyFa:
        'این متن دربارهٔ نام‌گذاری در برزیل است. برزیلی‌ها نام‌های گوناگونی روی فرزندانشان می‌گذارند، اما بعضی نام‌ها پرکاربردترند. نام‌های João و Maria رایج‌ترین هستند. پدر و مادرهای جوان‌تر معمولاً فرزندشان را با یکی از این نام‌ها همراه یک نام دیگر ثبت می‌کنند، مثلاً João Pedro یا Maria Vitória.\n\nبعضی افراد ترجیح می‌دهند فرزندشان را با نام‌های پدربزرگ‌ها و عموها/دایی‌ها ثبت کنند. در پایانِ نام خانوادگی از واژه‌های «Filho» (پسر)، «Neto» (نوه)، «Sobrinho» (برادرزاده/خواهرزاده) یا «Júnior» استفاده می‌شود. معمولاً بچه‌ها به‌عنوان ادای احترام (homenagem) به بزرگ‌ترها با همان نام بستگان ثبت می‌شوند.\n\nبعضی والدین دوست دارند فرزندشان را با نام‌های افراد مشهور نام‌گذاری کنند. رایج است که بچه‌هایی با نام «Michael Jackson»، «Mike Tyson» یا «Elvis Presley» پیدا شوند. بعضی دفاتر ثبت (cartórios) دیگر اجازه نمی‌دهند بچه‌ها با نام‌های خیلی عجیب ثبت شوند.\n\nلقب‌ها (apelidos) در زندگی روزمرهٔ برزیلی‌ها خیلی به‌کار می‌روند. بعضی لقب‌ها از خودِ نام ساخته می‌شوند، مثل «Zé» برای کسی که «José» نام دارد. بعضی لقب‌ها هم شیوه‌ای محبت‌آمیز برای خطاب‌اند، مثل «Aninha» برای دخترهایی به‌نام «Ana».',
      examples: [
        {
          pt: 'Os nomes João e Maria são os mais comuns.',
          fa: 'نام‌های ژوائو و ماریا رایج‌ترین هستند.',
          pron: 'اوس نُمیس ژوائو ای ماریا سائو اوس مایس کُمونس',
        },
        {
          pt: 'Usa-se "Filho", "Neto", "Sobrinho" ou "Júnior".',
          fa: 'از «فیلیو»، «نتو»، «سوبرینیو» یا «ژونیور» استفاده می‌شود.',
          pron: 'اوزا-سی فیلیو، نِتو، سوبرینیو او ژونیور',
        },
        {
          pt: '"Zé" é o apelido de "José".',
          fa: '«زه» لقبِ «ژوزه» است.',
          pron: 'زه اِ او آپِلیدو جی ژوزه',
          note: 'apelido = لقب.',
        },
        {
          pt: '"Aninha" é uma forma carinhosa para "Ana".',
          fa: '«آنینیا» شکلی محبت‌آمیز برای «آنا» است.',
          pron: 'آنینیا اِ اوما فورما کارینیوزا پارا آنا',
        },
      ],
    },
    {
      headingFa: '۱۳. متن ۴: حرفه‌ها (As Profissões)',
      bodyFa:
        'این متن حرفه‌های مختلف را معرفی می‌کند. آن را بخوانید و رابطهٔ هر فرد با شغلش را پیدا کنید.\n\nمتن کامل:\nژوائو معلم (professor) است و در مدرسه‌ای دولتی در شهر ریودوژانیرو تدریس می‌کند. دوستش هنریکه تصمیم گرفت خواننده (cantor) شود و در بارها و رستوران‌های کشور اجرا دارد. آمالیا دوست هنریکه است و به‌عنوان پزشک (médica) کار می‌کند، اما دوست هم دارد در مراسم خانوادگی بخواند. خواهرش آنا دانشجو (estudante) است و می‌خواهد در آینده معمار (arquiteta) شود. دوست‌پسر آنا هم دانشجو است؛ نامش فِلیپه است و می‌خواهد وقتی دانشکدهٔ حقوق را تمام کند وکیل (advogado) شود. اِوا در همان دانشگاهی که آنا و فلیپه هستند درس می‌خواند و در سال آخر رشتهٔ دندان‌پزشکی (odontologia) است؛ به‌محض اتمام دانشگاه، دندان‌پزشک (dentista) خواهد شد. ریکاردو سال گذشته در رشتهٔ تبلیغات (publicidade) فارغ‌التحصیل شد، اما فهمید که واقعاً روزنامه‌نگاری (jornalismo) را دوست دارد و می‌خواهد دانشگاه دیگری بخواند.\n\nروز اول ماه مه (primeiro de maio) روز کارگر (Dia do Trabalho) جشن گرفته می‌شود. این تاریخ در تقویم برزیل تعطیل (feriado) است و شاغلان معمولاً یک روز مرخصی دارند. بعضی افراد در این روز اعتراض (protestos) برگزار می‌کنند تا کارگران بیشتر توسط شرکت‌ها احترام دیده شوند.',
      examples: [
        {
          pt: 'João é professor e trabalha em uma escola pública.',
          fa: 'ژوائو معلم است و در مدرسه‌ای دولتی کار می‌کند.',
          pron: 'ژوائو اِ پروفِسور ای ترابالیا اِن اوما اِسکولا پوبلیکا',
        },
        {
          pt: 'Amália trabalha como médica.',
          fa: 'آمالیا به‌عنوان پزشک کار می‌کند.',
          pron: 'آمالیا ترابالیا کُمو مِدیکا',
        },
        {
          pt: 'Felipe quer ser advogado quando concluir a faculdade de Direito.',
          fa: 'فِلیپه می‌خواهد وقتی دانشکدهٔ حقوق را تمام کند وکیل شود.',
          pron: 'فِلیپی کِر سِر آدووگادو کواندو کُنکلویر آ فاکولدادی جی جیرِیتو',
        },
        {
          pt: 'Assim que terminar a faculdade, ela será dentista.',
          fa: 'به‌محض اتمام دانشگاه، او دندان‌پزشک خواهد شد.',
          pron: 'آسین کی تِرمینار آ فاکولدادی، اِلا سِرا دِنتیستا',
        },
        {
          pt: 'No dia primeiro de maio é comemorado o Dia do Trabalho.',
          fa: 'روز اول ماه مه، روز کارگر جشن گرفته می‌شود.',
          pron: 'نو جیا پریمِیرو جی مایو اِ کُمِمورادو او جیا دو ترابالیو',
          note: 'feriado = تعطیل رسمی؛ folga = روز مرخصی.',
        },
      ],
    },
    {
      headingFa: '۱۴. متن ۵ (گفت‌وگو): مصاحبهٔ شغلی (Entrevista de emprego)',
      bodyFa:
        'این گفت‌وگو بین آندریا (مصاحبه‌گر) و آقای روبرتو (متقاضی کار) است. به شکل رسمیِ خطاب (o senhor / a senhora) دقت کنید.\n\nآندریا: صبح بخیر، آقای روبرتو!\nروبرتو: صبح بخیر، خانم آندریا.\nآندریا: لطفاً بنشینید. رزومه‌تان را آوردید؟\nروبرتو: بله. بفرمایید، این‌جاست.\nآندریا: خیلی ممنون. خب، شما آشپز (cozinheiro) هستید؟ کمی از آخرین تجربه‌تان بگویید.\nروبرتو: بله، در کشورم آشپز بودم و رستوران خودم را داشتم. از بچگی با خانواده‌ام آشپزی می‌کردم و حتی کتابی با دستورهای غذایی خودم دارم.\nآندریا: عجب! چه جالب. ما این‌جا در رستوران یک جای خالی (vaga) داریم و به آشپزهایی که دستورهای غذایی خودشان را دارند ارزش می‌دهیم. ضمناً، شما بلدید گروهی کار کنید (trabalhar em equipe)؟\nروبرتو: بله! به‌نظرم نتیجهٔ کار وقتی گروهی انجام شود همیشه بهتر است.\nآندریا: عالی! می‌توانید هفتهٔ آینده شروع به کار کنید؟\nروبرتو: بله می‌توانم.\nآندریا: باشه، هفتهٔ آینده می‌بینیم! به تیم خوش آمدید!\nروبرتو: باعث افتخار است. تا بعد. خداحافظ!',
      examples: [
        {
          pt: 'O senhor trouxe o seu currículo?',
          fa: 'شما رزومه‌تان را آوردید؟',
          pron: 'او سِنیور ترووسی او سِئو کوریکولو؟',
          note: 'o senhor / a senhora = شکل خیلی رسمیِ «شما».',
        },
        {
          pt: 'No meu país eu era cozinheiro e tinha o meu próprio restaurante.',
          fa: 'در کشورم آشپز بودم و رستوران خودم را داشتم.',
          pron: 'نو مِئو پایس اِئو اِرا کوزینیِیرو ای تینیا او مِئو پروپریو رِستائورانتی',
        },
        {
          pt: 'O senhor sabe trabalhar em equipe?',
          fa: 'شما بلدید گروهی کار کنید؟',
          pron: 'او سِنیور سابی ترابالیار اِین اِکیپی؟',
        },
        {
          pt: 'Seja bem-vindo à equipe!',
          fa: 'به تیم خوش آمدید!',
          pron: 'سِژا بِن-ویندو آ اِکیپی',
        },
      ],
    },
    {
      headingFa: '۱۵. متن ۶ (گفت‌وگو): در رستوران (No restaurante)',
      bodyFa:
        'این گفت‌وگو بین ژولیو (پیشخدمت ـ garçom) و خانم داندارا (که از عصا استفاده می‌کند و به رستوران می‌رود) است.\n\nژولیو (پیشخدمت): بعدازظهر بخیر، چطور می‌توانم به شما (خانم) کمک کنم؟\nخانم داندارا: بعدازظهر بخیر، میز خالی دارید؟\nاو (ژولیو): بله داریم. فقط برای خودتان است؟\nاو (داندارا): بله.\nژولیو: اجازه بدهید شما را تا یکی از میزها همراهی کنم.\nداندارا: البته، ممنون.\nژولیو: بفرمایید، این‌جاست. مایل هستید منو را ببینید؟\nداندارا: لازم نیست. هفتهٔ گذشته این‌جا غذا خوردم و همان غذا را می‌خواهم: فیله مرغ با برنج و پورهٔ سیب‌زمینی.\nژولیو: بله خانم. و برای نوشیدنی؟\nداندارا: لطفاً یک آب‌آناناس.\nژولیو: خیلی خوب. راحت باشید، سفارشتان را همین حالا می‌آورم.',
      examples: [
        {
          pt: 'Boa tarde, tem mesa disponível?',
          fa: 'بعدازظهر بخیر، میز خالی دارید؟',
          pron: 'بُووا تارجی، تِن مِزا جیسپونیوِل؟',
        },
        {
          pt: 'Permita-me que eu leve a senhora até uma das mesas.',
          fa: 'اجازه بدهید شما را تا یکی از میزها همراهی کنم.',
          pron: 'پِرمیتا-می کی اِئو لِوی آ سِنیورا آته اوما داس مِزاس',
        },
        {
          pt: 'Quero filé de frango com arroz e purê de batata.',
          fa: 'فیله مرغ با برنج و پورهٔ سیب‌زمینی می‌خواهم.',
          pron: 'کِرو فیله جی فرانگو کُن آهُز ای پورِ جی باتاتا',
        },
        {
          pt: 'Pode ser um suco de abacaxi, por favor.',
          fa: 'لطفاً یک آب‌آناناس.',
          pron: 'پُدی سِر اون سوکو جی آباکاشی، پور فاوُر',
          note: 'abacaxi = آناناس؛ suco = آب‌میوه.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'شش راهبرد خواندن: با دقت خواندن، خلاصه‌کردن، خواندن بین سطرها، حفظ عادت خواندن، بلند خواندن، و متنوع خواندن.',
    'اگر واژه‌ای را نفهمیدی به دیکشنری مراجعه کن و به متن برگرد.',
    'فهم (compreensão) = عینی و درونِ متن؛ تفسیر (interpretação) = ذهنی و بیرونِ متن اما پیوسته با آن.',
    'می‌توان متنی را فهمید بدون تفسیر، اما نمی‌توان تفسیر کرد بدون فهمیدن.',
    'برای استخراج اطلاعات صریح، به نام‌ها، حرفه‌ها و رویدادهای گفته‌شده در متن دقت کن.',
    'در گفت‌وگوهای رسمی از «o senhor / a senhora» به‌جای «você» استفاده می‌شود.',
    'واژگان کلیدی این درس: profissões (حرفه‌ها)، corrida (مسابقه)، apelido (لقب)، feriado (تعطیل)، currículo (رزومه).',
  ],
  quiz: [
    {
      id: 'course-aula-11-q1',
      type: 'mcq',
      prompt: 'Qual NÃO é uma estratégia de leitura citada no texto?',
      promptFa: 'کدام یک از راهبردهای خواندن در متن ذکر نشده است؟',
      options: [
        'Escrever o texto de novo',
        'Ler com atenção',
        'Ler em voz alta',
        'Manter o hábito da leitura',
      ],
      answer: 'Escrever o texto de novo',
      explanationFa:
        'شش راهبرد ذکر شده: با دقت خواندن، خلاصه‌کردن، خواندن بین سطرها، حفظ عادت، بلند خواندن و متنوع خواندن. «دوباره نوشتن متن» جزو آن‌ها نیست.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q2',
      type: 'mcq',
      prompt: 'O que fazer quando aparece uma palavra que você não conhece?',
      promptFa: 'وقتی واژه‌ای می‌بینید که معنی‌اش را نمی‌دانید چه باید کرد؟',
      options: [
        'Recorrer ao dicionário e voltar ao texto',
        'Parar de ler',
        'Pular o parágrafo inteiro',
        'Escrever a palavra várias vezes',
      ],
      answer: 'Recorrer ao dicionário e voltar ao texto',
      explanationFa: 'متن می‌گوید به دیکشنری مراجعه کن و بعد به متن برگرد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q3',
      type: 'mcq',
      prompt: 'A compreensão de texto trabalha com...',
      promptFa: 'فهم متن با چه چیزی سروکار دارد؟',
      options: [
        'a objetividade, com o que está escrito',
        'a subjetividade, com opiniões',
        'informações fora do texto',
        'adivinhações e deduções',
      ],
      answer: 'a objetividade, com o que está escrito',
      explanationFa:
        'فهم متن با عینیت (objetividade) و آنچه واقعاً در متن نوشته شده کار می‌کند؛ تفسیر با ذهنیت.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q4',
      type: 'mcq',
      prompt:
        'Complete: "É possível compreender um texto sem interpretá-lo, porém não é possível interpretá-lo sem ___."',
      promptFa: 'جملهٔ کلیدی را کامل کنید.',
      options: [
        'compreendê-lo',
        'lê-lo em voz alta',
        'resumi-lo',
        'traduzi-lo',
      ],
      answer: 'compreendê-lo',
      explanationFa: 'نمی‌توان متنی را تفسیر کرد بدون آنکه آن را فهمیده باشیم.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q5',
      type: 'translate-pt-fa',
      prompt: 'Texto 1 (Flávio): "Quem joga vôlei no clube da cidade?"',
      promptFa:
        'به این پرسش دربارهٔ متن فلاویو پاسخ دهید: چه کسانی در باشگاه شهر والیبال بازی می‌کنند؟',
      options: [],
      answer: 'A Sofia e o Eduardo.',
      explanationFa:
        'در متن: «A Sofia e o Eduardo jogam vôlei num clube da cidade» ← سوفیا و ادواردو.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q6',
      type: 'mcq',
      prompt: 'Texto 1 (Flávio): A Adriana pratica algum esporte?',
      promptFa: 'آدریانا ورزشی می‌کند؟',
      options: [
        'Não, ela prefere ler e escutar músicas.',
        'Sim, ela joga vôlei.',
        'Sim, ela pratica futebol.',
        'Sim, com a Sofia.',
      ],
      answer: 'Não, ela prefere ler e escutar músicas.',
      explanationFa:
        'متن می‌گوید مایا و آدریانا هیچ ورزشی نمی‌کنند و ترجیح می‌دهند بخوانند و موسیقی گوش کنند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q7',
      type: 'mcq',
      prompt: 'Texto 1 (Flávio): Quem é Luiza?',
      promptFa: 'لوئیزا کیست؟',
      options: [
        'É a professora de português do Flávio.',
        'É uma amiga do Flávio.',
        'É a mãe do Flávio.',
        'É a irmã da Sofia.',
      ],
      answer: 'É a professora de português do Flávio.',
      explanationFa:
        'متن: «O nome da minha professora de português é Luiza e ela é brasileira».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q8',
      type: 'translate-pt-fa',
      prompt: 'Texto 2 (Jabuti): "Quais são os animais que aparecem no texto?"',
      promptFa: 'کدام حیوانات در متن ظاهر می‌شوند؟',
      options: [],
      answer: 'O jabuti e o coelho.',
      explanationFa: 'دو حیوان داستان: لاک‌پشت (o jabuti) و خرگوش (o coelho).',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q9',
      type: 'mcq',
      prompt: 'Texto 2 (Jabuti): Quem teve a ideia de apostar uma corrida?',
      promptFa: 'چه کسی ایدهٔ مسابقه گذاشتن را داشت؟',
      options: ['O jabuti', 'O coelho', 'Os dois juntos', 'Ninguém'],
      answer: 'O jabuti',
      explanationFa:
        'متن: «O jabuti resolveu apostar uma corrida com o coelho».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q10',
      type: 'mcq',
      prompt: 'Texto 2 (Jabuti): Quem saiu na frente quando a corrida começou?',
      promptFa: 'وقتی مسابقه شروع شد چه کسی جلو افتاد؟',
      options: ['O coelho', 'O jabuti', 'Os dois', 'Nenhum'],
      answer: 'O coelho',
      explanationFa: 'متن: «O coelho saiu na frente e nem enxergou o jabuti».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q11',
      type: 'translate-pt-fa',
      prompt:
        'Texto 2 (Jabuti): "O que aconteceu com o coelho durante a corrida?"',
      promptFa: 'در طول مسابقه چه اتفاقی برای خرگوش افتاد؟',
      options: [],
      answer: 'Ele pegou no sono (dormiu) e não viu o jabuti passar.',
      explanationFa: 'خرگوش خوابش برد و ندید که لاک‌پشت از کنارش رد شد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q12',
      type: 'mcq',
      prompt: 'Texto 2 (Jabuti): Quem venceu a corrida?',
      promptFa: 'چه کسی برندهٔ مسابقه شد؟',
      options: ['O jabuti', 'O coelho', 'Empataram', 'Ninguém venceu'],
      answer: 'O jabuti',
      explanationFa:
        'در پایان لاک‌پشت فریاد می‌زد: «Venci! Venci!» ← لاک‌پشت برد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q13',
      type: 'mcq',
      prompt: 'Texto 3 (Nomes): Quais são os nomes mais comuns no Brasil?',
      promptFa: 'رایج‌ترین نام‌ها در برزیل کدام‌اند؟',
      options: [
        'João e Maria',
        'Pedro e Ana',
        'Michael e Elvis',
        'Zé e Aninha',
      ],
      answer: 'João e Maria',
      explanationFa: 'متن: «Os nomes João e Maria são os mais comuns».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q14',
      type: 'translate-pt-fa',
      prompt:
        'Texto 3 (Nomes): "Por que algumas pessoas registram seus filhos com os mesmos nomes de parentes?"',
      promptFa: 'چرا بعضی افراد فرزندشان را با نام بستگان ثبت می‌کنند؟',
      options: [],
      answer: 'Como forma de homenagem aos mais velhos.',
      explanationFa: 'به‌عنوان ادای احترام (homenagem) به بزرگ‌ترها.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q15',
      type: 'mcq',
      prompt:
        'Texto 3 (Nomes): É comum encontrar crianças com nomes iguais aos de pessoas famosas?',
      promptFa: 'آیا رایج است بچه‌هایی با نام افراد مشهور پیدا شوند؟',
      options: [
        'Sim, como "Michael Jackson" ou "Elvis Presley".',
        'Não, é proibido por lei.',
        'Não, ninguém faz isso.',
        'Apenas nomes de políticos.',
      ],
      answer: 'Sim, como "Michael Jackson" ou "Elvis Presley".',
      explanationFa:
        'متن می‌گوید رایج است بچه‌هایی با نام «Michael Jackson»، «Mike Tyson» یا «Elvis Presley» پیدا شوند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q16',
      type: 'mcq',
      prompt: 'Texto 3 (Nomes): A qual nome o apelido "Zé" se refere?',
      promptFa: 'لقب «Zé» به کدام نام اشاره دارد؟',
      options: ['José', 'João', 'Júnior', 'Ana'],
      answer: 'José',
      explanationFa: 'متن: «"Zé" para quem se chama "José"».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q17',
      type: 'mcq',
      prompt: 'Texto 4 (Profissões): Qual é a profissão de Henrique?',
      promptFa: 'حرفهٔ هنریکه چیست؟',
      options: ['Cantor', 'Professor', 'Médico', 'Advogado'],
      answer: 'Cantor',
      explanationFa:
        'متن: «Henrique decidiu ser cantor e faz apresentações em bares e restaurantes».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q18',
      type: 'mcq',
      prompt: 'Texto 4 (Profissões): A Amália é estudante, médica ou cantora?',
      promptFa: 'آمالیا دانشجو، پزشک یا خواننده است؟',
      options: [
        'Médica (mas também gosta de cantar)',
        'Estudante',
        'Cantora profissional',
        'Arquiteta',
      ],
      answer: 'Médica (mas também gosta de cantar)',
      explanationFa:
        'متن: «Amália trabalha como médica, mas também gosta de cantar em eventos familiares».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q19',
      type: 'translate-pt-fa',
      prompt: 'Texto 4 (Profissões): "Quem é Felipe?"',
      promptFa: 'فِلیپه کیست؟',
      options: [],
      answer: 'É o namorado da Ana; é estudante e quer ser advogado.',
      explanationFa:
        'فلیپه دوست‌پسر آنا و دانشجوست و می‌خواهد وکیل (advogado) شود.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q20',
      type: 'mcq',
      prompt: 'Texto 4 (Profissões): Quem quer ser dentista?',
      promptFa: 'چه کسی می‌خواهد دندان‌پزشک شود؟',
      options: ['Eva', 'Ana', 'Amália', 'Ricardo'],
      answer: 'Eva',
      explanationFa:
        'متن: «Eva está no último ano de odontologia... ela será dentista».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q21',
      type: 'mcq',
      prompt: 'Texto 4 (Profissões): O Ricardo estuda jornalismo?',
      promptFa: 'ریکاردو روزنامه‌نگاری می‌خواند؟',
      options: [
        'Ainda não; ele se formou em publicidade e planeja cursar jornalismo.',
        'Sim, já é jornalista formado.',
        'Não, ele estuda Direito.',
        'Sim, terminou o curso este ano.',
      ],
      answer:
        'Ainda não; ele se formou em publicidade e planeja cursar jornalismo.',
      explanationFa:
        'ریکاردو در تبلیغات فارغ‌التحصیل شد و برنامه دارد روزنامه‌نگاری بخواند؛ هنوز آن را نمی‌خواند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q22',
      type: 'mcq',
      prompt:
        'Texto 4 (Profissões): O que se comemora no dia primeiro de maio?',
      promptFa: 'روز اول ماه مه چه چیزی جشن گرفته می‌شود؟',
      options: [
        'O Dia do Trabalho',
        'O Dia das Mães',
        'O Dia da Independência',
        'O Dia do Professor',
      ],
      answer: 'O Dia do Trabalho',
      explanationFa:
        'متن: «No dia primeiro de maio é comemorado o Dia do Trabalho».',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q23',
      type: 'mcq',
      prompt: 'Texto 5 (Entrevista): Qual é a profissão de Roberto?',
      promptFa: 'حرفهٔ روبرتو چیست؟',
      options: ['Cozinheiro', 'Garçom', 'Médico', 'Professor'],
      answer: 'Cozinheiro',
      explanationFa:
        'روبرتو در کشورش آشپز (cozinheiro) بود و رستوران خودش را داشت.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q24',
      type: 'mcq',
      prompt: 'Texto 5 (Entrevista): Ele conseguiu o emprego?',
      promptFa: 'آیا او کار را گرفت؟',
      options: [
        'Sim, foi bem-vindo à equipe.',
        'Não, foi recusado.',
        'Ainda não sabe.',
        'Só se trouxer o currículo.',
      ],
      answer: 'Sim, foi bem-vindo à equipe.',
      explanationFa:
        'آندریا گفت «Seja bem-vindo à equipe!» و از او خواست هفتهٔ بعد شروع کند ← بله، کار را گرفت.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q25',
      type: 'translate-fa-pt',
      prompt:
        'Sobre VOCÊ: «شغل من در کشورم ... بود.» را به پرتغالی کامل کنید (نمونه با معلم).',
      promptFa: 'به پرتغالی دربارهٔ خودتان بنویسید (نمونه با شغل معلم).',
      options: [],
      answer: 'No meu país eu era professor(a).',
      explanationFa:
        'برای شغل گذشته از فعل «era» (بودم) استفاده کن؛ نمونه پاسخ به پرسش «Qual era a sua profissão no seu país?».',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-11-q26',
      type: 'translate-fa-pt',
      prompt:
        'Sobre VOCÊ: «می‌خواهم در برزیل به‌عنوان آشپز کار کنم.» را به پرتغالی بنویسید.',
      promptFa:
        'پاسخ به پرسش «Que profissão gostaria de exercer no Brasil?» را بنویسید (نمونه: آشپز).',
      options: [],
      answer: 'Eu gostaria de trabalhar como cozinheiro(a) no Brasil.',
      explanationFa:
        '«gostaria de + مصدر» برای بیان آرزو/تمایل مؤدبانه به‌کار می‌رود.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-11-q33',
      type: 'translate-fa-pt',
      prompt:
        'Sobre VOCÊ: «شغل فعلی من ... است.» را به پرتغالی بنویسید (پاسخ به "Qual seu emprego atual?").',
      promptFa:
        'به پرسش «Qual seu emprego atual?» (شغل فعلی شما چیست؟) دربارهٔ خودتان به پرتغالی پاسخ دهید (نمونه: آشپز).',
      options: [],
      answer:
        'Meu emprego atual é cozinheiro(a). / Atualmente eu trabalho como cozinheiro(a).',
      explanationFa:
        'برای شغل فعلی از زمان حال استفاده کن: «Meu emprego atual é...» یا «Atualmente eu trabalho como...». این پاسخ به دومین پرسشِ بخش «Responda sobre VOCÊ» است.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-11-q27',
      type: 'mcq',
      prompt: 'Texto 6 (Restaurante): Onde a Sra. Dandara chegou?',
      promptFa: 'خانم داندارا به کجا رسید؟',
      options: [
        'A um restaurante',
        'A um hospital',
        'A uma escola',
        'A um clube',
      ],
      answer: 'A um restaurante',
      explanationFa: 'گفت‌وگو در رستوران است؛ او دنبال میز خالی و منو بود.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q28',
      type: 'mcq',
      prompt: 'Texto 6 (Restaurante): Quem a recebeu?',
      promptFa: 'چه کسی از او پذیرایی کرد؟',
      options: ['Júlio, o garçom', 'Andreia', 'Roberto', 'A cozinheira'],
      answer: 'Júlio, o garçom',
      explanationFa:
        'ژولیو که پیشخدمت (garçom) است او را همراهی کرد و سفارش گرفت.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q29',
      type: 'translate-pt-fa',
      prompt:
        'Texto 6 (Restaurante): "Por que a senhora não precisou ver o cardápio?"',
      promptFa: 'چرا خانم لازم نداشت منو را ببیند؟',
      options: [],
      answer: 'Porque já comeu ali na semana passada e queria o mesmo prato.',
      explanationFa:
        'او هفتهٔ قبل همان‌جا غذا خورده بود و همان غذا (filé de frango com arroz e purê) را می‌خواست.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q30',
      type: 'mcq',
      prompt: 'Texto 6 (Restaurante): O que ela pediu para beber?',
      promptFa: 'برای نوشیدنی چه سفارش داد؟',
      options: ['Suco de abacaxi', 'Suco de laranja', 'Água com gás', 'Café'],
      answer: 'Suco de abacaxi',
      explanationFa:
        'متن: «Pode ser um suco de abacaxi, por favor» ← آب‌آناناس.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-11-q31',
      type: 'order-words',
      prompt: 'Ordene: "vôlei / jogam / e / o / Sofia / a / Eduardo"',
      promptFa: 'کلمات را مرتب کنید تا جملهٔ درست بسازید.',
      options: ['vôlei', 'jogam', 'e', 'o', 'Sofia', 'a', 'Eduardo'],
      answer: 'A Sofia e o Eduardo jogam vôlei',
      explanationFa:
        'ساختار: فاعل (A Sofia e o Eduardo) + فعل (jogam) + مفعول (vôlei). در برزیل معمولاً پیش از نام حرف تعریف می‌آید.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-11-q32',
      type: 'fill-blank',
      prompt:
        'A informação da compreensão está ___ do texto; a da interpretação está ___ do texto.',
      promptFa:
        'جای خالی را با «dentro/fora» پر کنید: اطلاعاتِ فهم درونِ ... و اطلاعاتِ تفسیر بیرونِ ... متن است.',
      options: [],
      answer: 'dentro / fora',
      explanationFa:
        'در فهم، اطلاعات درونِ (dentro) متن است؛ در تفسیر، اطلاعات بیرونِ (fora) متن اما پیوسته با آن است.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 30,
  sourceNoteFa: 'برگرفته از جزوهٔ آماده‌سازی فدرال — Aula 11 (کامل).',
};
