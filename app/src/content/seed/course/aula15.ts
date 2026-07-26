import type { CourseLesson } from '@/domain/content/schema';

export const aula15: CourseLesson = {
  id: 'course-aula-15',
  order: 15,
  aula: 'Aula 15',
  titleFa: 'زبان و ارتباط؛ حکومت اسمی و فعلی (کدام حرف اضافه؟)',
  titlePt: 'Linguagem e Comunicação; Regência Nominal e Verbal',
  cefr: 'B1',
  summaryFa:
    'در این درس ابتدا مبانی «زبان و ارتباط» را مرور می‌کنیم (فرستنده، گیرنده، پیام، مجرا، رمز و تفاوت زبان کلامی و غیرکلامی، گفتار و نوشتار). سپس به مهم‌ترین بخش می‌رسیم: regência یا «حکومت»، یعنی این‌که برخی فعل‌ها و اسم‌ها/صفت‌ها در پرتغالی به حرف اضافهٔ مشخصی نیاز دارند. فارسی‌زبان‌ها اغلب همین حرف اضافه را اشتباه انتخاب می‌کنند؛ اینجا درست و نادرست را روشن می‌کنیم.',
  objectivesFa: [
    'شناخت عناصر ارتباط و تفاوت زبان کلامی/غیرکلامی و گفتار/نوشتار',
    'درک مفهوم regência (حکومت): وابستگی فعل یا اسم به یک حرف اضافه',
    'به‌خاطر سپردن حرف اضافهٔ درستِ پرکاربردترین فعل‌ها (gostar de، precisar de، ir a/para، morar em ...)',
    'به‌خاطر سپردن حرف اضافهٔ درستِ صفت‌ها و اسم‌ها (interessado em، ansioso para، capaz de ...)',
    'پرهیز از خطاهای رایجِ ناشی از ترجمهٔ ذهنی از فارسی',
  ],
  sections: [
    {
      headingFa: 'عناصر ارتباط',
      bodyFa:
        'برای این‌که ارتباط برقرار شود چند عنصر لازم است: emissor (فرستنده) کسی که پیام را می‌سازد، receptor (گیرنده) کسی که پیام را دریافت می‌کند، mensagem (خودِ پیام)، canal (مجرا، وسیلهٔ انتقال) و código (رمز؛ در گفتار و نوشتار همان «زبان» است). برای ارتباط مؤثر، فرستنده و گیرنده باید از یک رمز (زبان) مشترک استفاده کنند.',
      examples: [
        {
          pt: 'O emissor produz a mensagem.',
          fa: 'فرستنده پیام را تولید می‌کند.',
          pron: 'او امیسور پرودوز آ مِساژِم',
        },
        {
          pt: 'O receptor recebe a mensagem.',
          fa: 'گیرنده پیام را دریافت می‌کند.',
          pron: 'او هِسِپتور هِسِبی آ مِساژِم',
        },
        {
          pt: 'Emissor e receptor devem usar o mesmo código.',
          fa: 'فرستنده و گیرنده باید از یک رمز یکسان استفاده کنند.',
          pron: 'امیسور ای هِسِپتور دِوِم اوزار او مِزمو کُدیگو',
          note: 'código یعنی «رمز»؛ در گفت‌وگو همان زبان مشترک است.',
        },
      ],
    },
    {
      headingFa: 'زبان کلامی و غیرکلامی',
      bodyFa:
        'زبان (linguagem) فرایند انتقال پیام است و دو گونه دارد: linguagem não-verbal (غیرکلامی) که از کلمه استفاده نمی‌کند، مثل تابلوهای راهنمایی، رنگ‌ها، اشاره‌ها و سوت داور؛ و linguagem verbal یا língua (کلامی) که از کلمه‌های گفتاری یا نوشتاری استفاده می‌کند، مثل کتاب، روزنامه، ایمیل و گفت‌وگو.',
      examples: [
        {
          pt: 'A placa de trânsito é linguagem não-verbal.',
          fa: 'تابلوی راهنمایی و رانندگی زبان غیرکلامی است.',
          pron: 'آ پلاکا دِ ترانزیتو ای لینگواژِم نائو-وِربال',
        },
        {
          pt: 'A conversa é linguagem verbal.',
          fa: 'گفت‌وگو زبان کلامی است.',
          pron: 'آ کُنوِرسا ای لینگواژِم وِربال',
        },
      ],
    },
    {
      headingFa: 'گفتار و نوشتار',
      bodyFa:
        'língua falada (زبان گفتاری) خودجوش‌تر است و با لحن صدا، حرکات و اشاره همراه می‌شود. língua escrita (زبان نوشتاری) نظامی با قاعده است و به دستور زبان معیار پایبندتر است. مثلاً بسیاری از برزیلی‌ها می‌گویند «Eli mi ensinô» ولی در نوشتار معیار باید نوشت «Ele me ensinou». عامل‌های منطقه‌ای، فرهنگی و موقعیتی هم باعث تنوع زبان می‌شوند.',
      examples: [
        {
          pt: 'Ele me ensinou.',
          fa: 'او به من یاد داد.',
          pron: 'اِلی می اِنسینو',
          note: 'شکل نوشتاری معیار؛ در گفتار محاوره‌ای متفاوت تلفظ می‌شود.',
        },
        {
          pt: 'Falamos de um jeito e escrevemos de outro.',
          fa: 'به یک شکل حرف می‌زنیم و به شکلی دیگر می‌نویسیم.',
          pron: 'فالاموس دِ اوم ژِیتو ای اِسکرِوِموس دِ اوترو',
        },
      ],
    },
    {
      headingFa: 'regência چیست؟ (مفهوم حکومت)',
      bodyFa:
        'در پرتغالی برخی فعل‌ها و اسم‌ها/صفت‌ها خودشان تعیین می‌کنند که بعد از آن‌ها چه حرف اضافه‌ای بیاید. به این رابطه regência (حکومت) می‌گویند. اگر حرف اضافهٔ درست را نیاوریم، جمله ناقص می‌شود یا معنایش عوض می‌شود. نکتهٔ مهم برای فارسی‌زبان‌ها: حرف اضافهٔ پرتغالی همیشه با منطق فارسی یکی نیست؛ باید هر فعل/اسم را همراه با حرف اضافه‌اش حفظ کنید.',
      examples: [
        {
          pt: 'Eu moro no Rio de Janeiro.',
          fa: 'من در ریودوژانیرو زندگی می‌کنم.',
          pron: 'اِئو مورو نو هیو دِ ژانِیرو',
          note: 'فعل morar همیشه با em می‌آید: morar em. (no = em + o)',
        },
        {
          pt: 'Ele vai para a praia.',
          fa: 'او به ساحل می‌رود.',
          pron: 'اِلی وای پارا آ پرایا',
          note: 'با فعل ir هم به حرف اضافه نیاز داریم: a یا para.',
        },
      ],
    },
    {
      headingFa: 'حکومت فعلی (۱): فعل‌های پرکاربرد با de',
      bodyFa:
        'گروهی از فعل‌ها حرف اضافهٔ de می‌خواهند. مهم‌ترین‌ها: gostar de (دوست داشتن)، precisar de (نیاز داشتن)، lembrar-se de (به یاد آوردن)، terminar de و acabar de (تمام کردن). دقت کنید فارسی «چیزی را دوست دارم» می‌گوید بدون حرف اضافه، ولی پرتغالی حتماً de می‌خواهد.',
      examples: [
        {
          pt: 'Eu gosto de você.',
          fa: 'من تو را دوست دارم.',
          pron: 'اِئو گُستو دِ وُسه',
          note: 'درست: gostar de. نادرست: «gostar você» بدون de.',
        },
        {
          pt: 'Eu preciso de ajuda.',
          fa: 'من به کمک نیاز دارم.',
          pron: 'اِئو پرِسیزو دِ اَژودا',
        },
        {
          pt: 'Eu terminei de cozinhar cedo.',
          fa: 'من زود آشپزی را تمام کردم.',
          pron: 'اِئو تِرمینِی دِ کوزینیار سِدو',
        },
        {
          pt: 'Nós acabamos de jantar.',
          fa: 'ما همین الان شام خوردیم.',
          pron: 'نوس آکاباموس دِ ژانتار',
          note: 'acabar de + فعل یعنی «کاری را همین حالا تمام کردن».',
        },
      ],
    },
    {
      headingFa: 'حکومت فعلی (۲): فعل‌های با a و em',
      bodyFa:
        'گروهی دیگر a می‌خواهند: começar a (شروع کردن)، ensinar a (یاد دادن)، ajudar a (کمک کردن)، ir a (رفتن)، chegar a (رسیدن). فعل morar حرف em می‌خواهد. بعضی فعل‌ها دو گزینه دارند: ir a/para، concordar em/com، sonhar em/com، pensar em.',
      examples: [
        {
          pt: 'Eles começaram a estudar português.',
          fa: 'آن‌ها شروع به یادگیری پرتغالی کردند.',
          pron: 'اِلِس کومِساران آ اِستودار پورتوگِس',
          note: 'começar a + فعل. حرف اضافه a است، نه de.',
        },
        {
          pt: 'A professora me ensinou a ler.',
          fa: 'معلم به من خواندن یاد داد.',
          pron: 'آ پروفِسورا می اِنسینو آ لِر',
        },
        {
          pt: 'Elas pensam em comprar uma casa.',
          fa: 'آن‌ها به خریدن یک خانه فکر می‌کنند.',
          pron: 'اِلاس پِنسائو اِم کُمپرار اوما کازا',
          note: 'pensar em؛ در فارسی «فکر کردن به»، در پرتغالی با em.',
        },
        {
          pt: 'Nós concordamos em chegar cedo.',
          fa: 'ما توافق کردیم که زود برسیم.',
          pron: 'نوس کُنکورداموس اِم شِگار سِدو',
        },
      ],
    },
    {
      headingFa: 'حکومت اسمی: صفت‌ها و اسم‌ها + حرف اضافه',
      bodyFa:
        'regência nominal رابطهٔ میان اسم، صفت یا قید با متمم آن‌هاست. مثلاً صفت interessado حرف em می‌خواهد و ansioso حرف para. نمونه‌های دیگر: capaz de (توانا به)، fácil de (آسان برای)، perto de (نزدیک به)، contente em (خشنود از)، igual a (برابر با)، triste por (غمگین از)، admiração por (تحسین نسبت به)، bom/boa em (خوب در).',
      examples: [
        {
          pt: 'Ela está interessada em aprender línguas.',
          fa: 'او به یادگیری زبان‌ها علاقه‌مند است.',
          pron: 'اِلا اِستا اینتِرِسادا اِم آپرِندِر لینگواس',
          note: 'interessado همیشه با em می‌آید.',
        },
        {
          pt: 'Ele está ansioso para te ver.',
          fa: 'او بی‌تابِ دیدن توست.',
          pron: 'اِلی اِستا آنسیوزو پارا تی وِر',
          note: 'ansioso با para می‌آید، نه با de.',
        },
        {
          pt: 'Isso não é fácil de fazer.',
          fa: 'این کار آسان نیست.',
          pron: 'ایسو نائو ای فاسیل دِ فازِر',
        },
        {
          pt: 'Elas são boas em matemática.',
          fa: 'آن‌ها در ریاضی خوب هستند.',
          pron: 'اِلاس سائو بواَس اِم ماتِماتیکا',
          note: 'bom/boa em؛ «خوب بودن در چیزی».',
        },
      ],
    },
    {
      headingFa: 'خطاهای رایج فارسی‌زبان‌ها',
      bodyFa:
        'چون در فارسی حرف اضافه فرق دارد یا اصلاً نمی‌آید، این خطاها زیاد رخ می‌دهد. راه‌حل: فعل و صفت را همیشه همراه حرف اضافه‌اش حفظ کنید، نه تنها.',
      examples: [
        {
          pt: 'Eu gosto de música.',
          fa: 'من موسیقی را دوست دارم.',
          pron: 'اِئو گُستو دِ موزیکا',
          note: 'درست: gostar de música. نادرست: «gosto música».',
        },
        {
          pt: 'Eu moro em São Paulo.',
          fa: 'من در سائوپائولو زندگی می‌کنم.',
          pron: 'اِئو مورو اِم سائو پائولو',
          note: 'درست: morar em. نادرست: «morar a / morar para».',
        },
        {
          pt: 'Vou para a escola.',
          fa: 'به مدرسه می‌روم.',
          pron: 'وو پارا آ اِسکولا',
          note: 'با ir از a یا para استفاده کن؛ حذف حرف اضافه نادرست است.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'عناصر ارتباط: emissor، receptor، mensagem، canal، código.',
    'regência یعنی وابستگی فعل یا اسم به یک حرف اضافهٔ مشخص.',
    'de: gostar de، precisar de، lembrar-se de، terminar/acabar de.',
    'a: começar a، ensinar a، ajudar a، ir a، chegar a. em: morar em، pensar em.',
    'صفت‌ها: interessado em، ansioso para، capaz de، fácil de، bom em.',
    'فعل/صفت را همیشه همراه حرف اضافه‌اش حفظ کن تا خطای حرف اضافه نکنی.',
  ],
  quiz: [
    {
      id: 'course-aula-15-q1',
      type: 'mcq',
      prompt: 'Eu gosto ___ música brasileira.',
      promptFa: 'کدام حرف اضافه با فعل gostar درست است؟',
      options: ['de', 'a', 'em', 'para'],
      answer: 'de',
      explanationFa: 'فعل gostar همیشه حرف اضافهٔ de می‌گیرد: gostar de.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-15-q2',
      type: 'mcq',
      prompt: 'Eu moro ___ São Paulo.',
      promptFa: 'فعل morar کدام حرف اضافه را می‌خواهد؟',
      options: ['em', 'de', 'a', 'por'],
      answer: 'em',
      explanationFa:
        'فعل morar با em می‌آید (morar em)؛ اینجا em + a = na نیز رایج است، اما حرف اضافهٔ پایه em است.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-15-q3',
      type: 'fill-blank',
      prompt:
        'Eles começaram ___ estudar português. (حرف اضافهٔ درست را بنویسید)',
      promptFa: 'فعل começar پیش از فعل بعدی کدام حرف اضافه را می‌گیرد؟',
      options: [],
      answer: 'a',
      explanationFa:
        'começar a + فعل: começaram a estudar. حرف اضافه a است، نه de.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-15-q4',
      type: 'mcq',
      prompt: 'Ela está interessada ___ aprender línguas.',
      promptFa: 'صفت interessado کدام حرف اضافه را می‌خواهد؟',
      options: ['em', 'de', 'para', 'a'],
      answer: 'em',
      explanationFa: 'صفت interessado همیشه با em می‌آید: interessado em.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-15-q5',
      type: 'mcq',
      prompt: 'Ele está ansioso ___ te ver.',
      promptFa: 'صفت ansioso کدام حرف اضافه را می‌گیرد؟',
      options: ['para', 'de', 'em', 'com'],
      answer: 'para',
      explanationFa:
        'صفت ansioso با para می‌آید: ansioso para. اشتباه رایج استفاده از de است.',
      cefr: 'B1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 15.',
};
