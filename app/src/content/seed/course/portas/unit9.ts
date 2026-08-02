import type { CourseLesson } from '@/domain/content/schema';

export const portas9: CourseLesson = {
  id: 'course-portas-9',
  order: 9,
  aula: 'Unidade 9',
  track: 'portas',
  pagesKey: 'portas9',
  titleFa: 'کمی جغرافیا و تاریخ برزیل — مناطق، حروف اضافه، وجه التزامی و جامعه',
  titlePt: 'Um pouco de Geografia e História do Brasil',
  cefr: 'B1',
  summaryFa:
    'این فصلِ پایانی و پیشرفته‌ترین بخش کتاب است: جغرافیا و پنج منطقهٔ برزیل و آب‌وهوایشان، حروف اضافهٔ POR/PARA/ATÉ، تاریخ برزیل و چرخه‌های اقتصادی (از استعمار ۱۵۰۰ و برده‌داری تا چرخهٔ لاستیک)، گفت‌وگوی انتقادی دربارهٔ نژادپرستی و «سیاست سفیدسازی» و حقوق مردمان بومی (قانون ۱۱۶۴۵)، عبارت‌های استدلال، وجه التزامی حال (Subjuntivo)، و ضمایر مفعولی مستقیم O/A/LO/LA. در پایان، پیام خداحافظی نویسندگان و اطلاعات مرکز CRAI آمده است.',
  objectivesFa: [
    'پنج منطقهٔ برزیل و ویژگی‌های آب‌وهوایی‌شان را بشناسید.',
    'حروف اضافهٔ POR (از میان)، PARA (مقصد) و ATÉ (حد/تا) را درست به‌کار ببرید.',
    'خطوط اصلی تاریخ برزیل و چرخه‌های اقتصادی (از جمله چرخهٔ لاستیک) را بدانید.',
    'دربارهٔ نژادپرستی و حقوق مردمان بومی با نگاه انتقادی و محترمانه صحبت کنید.',
    'وجه التزامی حال و ضمایر مفعولی O/A/LO/LA را به‌کار ببرید.',
  ],
  sections: [
    {
      headingFa: '۱. جغرافیا و مناطق برزیل (Regiões)',
      bodyFa:
        'برزیل پنج منطقه دارد و آب‌وهوایشان بسیار متفاوت است. این تنوع اقلیمی و طبیعی، برزیل را کشوری قاره‌ای می‌کند.',
      examples: [
        {
          pt: 'Região Norte',
          fa: 'شمال — گرم و مرطوب، جنگل آمازون',
          pron: 'هِژیائو نُرتی',
        },
        {
          pt: 'Região Nordeste',
          fa: 'شمال‌شرق — گرم و خشک (sertão)، ساحل‌های زیبا',
          pron: 'نُردِستی',
        },
        {
          pt: 'Região Centro-Oeste',
          fa: 'مرکز-غرب — پایتخت برازیلیا، دشت پانتانال',
          pron: 'سِنترو-اُئِستی',
        },
        {
          pt: 'Região Sudeste',
          fa: 'جنوب‌شرق — پرجمعیت و صنعتی (سائوپائولو، ریو)',
          pron: 'سودِستی',
        },
        {
          pt: 'Região Sul',
          fa: 'جنوب — سردترین منطقه، زمستان سرد',
          pron: 'سول',
        },
      ],
    },
    {
      headingFa: '۲. حروف اضافهٔ POR، PARA، ATÉ',
      bodyFa:
        'POR = «از میان/از طریق» (و با حرف تعریف: pelo/pela). PARA = «مقصد/برای». ATÉ = «تا/حد زمانی یا مکانی».',
      examples: [
        {
          pt: 'O ônibus passa pela zona sul e pelo zoológico.',
          fa: 'اتوبوس از منطقهٔ جنوب و از کنار باغ‌وحش می‌گذرد.',
          pron: 'پاسا پِلا... پِلو',
          note: 'por + a/o = pela/pelo',
        },
        {
          pt: 'Eu vim para o Brasil.',
          fa: 'من به برزیل آمدم (مقصد).',
          pron: 'ویم پارا او برازیل',
          note: 'PARA = مقصد',
        },
        {
          pt: 'Vou trabalhar até as 5 da tarde. / Vou ficar até dezembro.',
          fa: 'تا ساعت ۵ کار می‌کنم / تا دسامبر می‌مانم.',
          pron: 'آته',
          note: 'ATÉ = حد زمان',
        },
      ],
    },
    {
      headingFa: '۳. تاریخ و چرخه‌های اقتصادی',
      bodyFa:
        'تاریخ برزیل با استعمار پرتغال آغاز شد و با «چرخه‌های اقتصادی» پیش رفت. اینجا تفاوت دو زمان گذشته مهم است: گذشتهٔ ساده برای رویداد یک‌باره، گذشتهٔ استمراری برای کارِ تکراری/طولانی.',
      examples: [
        {
          pt: 'Os colonizadores portugueses chegaram ao Brasil em 1500.',
          fa: 'استعمارگران پرتغالی در سال ۱۵۰۰ به برزیل رسیدند. (رویداد یک‌باره)',
          pron: 'شِگارام',
          note: 'گذشتهٔ ساده',
        },
        {
          pt: 'Os escravizados africanos chegavam primeiro na Bahia.',
          fa: 'بردگان آفریقایی ابتدا به باهیا می‌رسیدند. (تکرارشونده)',
          pron: 'شِگاوام',
          note: 'گذشتهٔ استمراری',
        },
        {
          pt: 'ciclos econômicos: pau-brasil, cana-de-açúcar, ouro, borracha, café',
          fa: 'چرخه‌های اقتصادی: چوب‌برزیل، نیشکر، طلا، لاستیک، قهوه',
          pron: 'سیکلوس',
        },
        {
          pt: 'O Ciclo da Borracha entrou em declínio no início do século XX.',
          fa: 'چرخهٔ لاستیک در آغاز قرن بیستم افول کرد.',
          pron: 'سیکلو دا بُهاشا',
        },
      ],
    },
    {
      headingFa: '۴. جامعه: نژادپرستی و مردمان بومی',
      bodyFa:
        'کتاب با نگاهی انتقادی به تاریخ می‌پردازد. در اواخر قرن نوزدهم، دولت برزیل «سیاست سفیدسازی» (branqueamento) را دنبال کرد که بر پایهٔ نظریه‌های نادرست و نژادپرستانه بود و مهاجرت اروپایی‌ها را ترجیح می‌داد. امروز دربارهٔ وجود «نژادپرستی پنهان» بحث می‌شود. قانون ۱۱۶۴۵ (۲۰۰۸) آموزش تاریخ و فرهنگ آفریقایی و بومی را در مدارس اجباری کرد. (این مطالب آموزشی و برای فهم جامعهٔ برزیل است.)',
      examples: [
        {
          pt: 'Política de "branqueamento" (fim do séc. XIX)',
          fa: 'سیاست «سفیدسازی» جمعیت؛ بر پایهٔ نظریه‌های نژادپرستانهٔ نادرست.',
          pron: 'برانکِآمِنتو',
          note: 'نقدشده در متن',
        },
        {
          pt: 'Há quem afirme haver um racismo velado no Brasil.',
          fa: 'برخی می‌گویند در برزیل نژادپرستیِ پنهان وجود دارد.',
          pron: 'هاسیزمو وِلادو',
        },
        {
          pt: 'Lei 11.645/2008 — ensino obrigatório da história e cultura africana e indígena.',
          fa: 'قانون ۱۱۶۴۵؛ آموزش اجباری تاریخ و فرهنگ آفریقایی و بومی.',
          pron: 'لِی',
          note: 'حق فرهنگی',
        },
      ],
    },
    {
      headingFa: '۵. عبارت‌های استدلال (Argumentação)',
      bodyFa: 'برای بیان نظر و بحث محترمانه این عبارت‌ها را به‌کار ببرید.',
      examples: [
        {
          pt: 'Na minha opinião… / Eu acho que…',
          fa: 'به نظر من… / فکر می‌کنم که…',
          pron: 'نا مینیا اوپینیائو',
        },
        {
          pt: 'De acordo com o texto… / Por um lado…, por outro lado…',
          fa: 'طبق متن… / از یک سو…، از سوی دیگر…',
          pron: 'جی آکُردو کُن او تِکستو',
        },
        {
          pt: 'Discordo do texto… / Ao contrário do autor…',
          fa: 'با متن مخالفم… / برخلاف نویسنده…',
          pron: 'جیسکُردو',
        },
        {
          pt: 'Portanto… / Por fim… / Sem dúvida…',
          fa: 'بنابراین… / در پایان… / بی‌شک…',
          pron: 'پورتانتو',
        },
      ],
    },
    {
      headingFa: '۶. وجه التزامی حال (Presente do Subjuntivo)',
      bodyFa:
        'برای بیان شک، آرزو، خواست و احتمال به‌کار می‌رود و معمولاً پس از عبارت‌هایی مثل «espero que» (امیدوارم که)، «quero que» (می‌خواهم که)، «talvez» (شاید) می‌آید. صرف از اول‌شخصِ حالِ اخباری ساخته می‌شود (falo → que eu fale).',
      examples: [
        {
          pt: 'Eu espero que você esteja bem.',
          fa: 'امیدوارم حالت خوب باشد.',
          pron: 'اِسپِرو کی وُسه اِستِژا بِین',
          note: 'estar → esteja',
        },
        {
          pt: 'É importante que você fale português todos os dias.',
          fa: 'مهم است که هر روز پرتغالی صحبت کنی.',
          pron: 'کی وُسه فالی',
          note: 'falar → fale',
        },
        {
          pt: 'Talvez eles tenham razão.',
          fa: 'شاید حق با آن‌ها باشد.',
          pron: 'تالوِز... تِنیام',
          note: 'ter → tenham',
        },
        {
          pt: 'Tomara que dê tudo certo!',
          fa: 'کاش همه‌چیز خوب پیش برود!',
          pron: 'تومارا کی ده',
          note: 'آرزو',
        },
      ],
    },
    {
      headingFa: '۷. ضمایر مفعولی (O, A, LO, LA)',
      bodyFa:
        'برای جای‌گزینی مفعولِ مستقیم به‌کار می‌روند: o/a (او/آن را). بعد از فعلی که به r/s/z ختم شود، به lo/la تبدیل می‌شوند و آن حرف حذف می‌شود: entender + a → entendê-la.',
      examples: [
        {
          pt: 'Eu vi os meninos. → Eu os vi.',
          fa: 'بچه‌ها را دیدم → آن‌ها را دیدم.',
          pron: 'اِئو اوس وی',
          note: 'os = آن‌ها را',
        },
        {
          pt: 'Quero entender a Ana. → Quero entendê-la.',
          fa: 'می‌خواهم آنا را بفهمم → می‌خواهم او را بفهمم.',
          pron: 'اِنتِندِلا',
          note: 'r حذف → lá',
        },
        {
          pt: 'Vou comprar os ingressos. → Vou comprá-los.',
          fa: 'بلیت‌ها را می‌خرم → آن‌ها را می‌خرم.',
          pron: 'کُمپرالوس',
        },
      ],
    },
  ],
  keyPointsFa: [
    'پنج منطقه: شمال، شمال‌شرق، مرکز-غرب، جنوب‌شرق، جنوب.',
    'POR (از میان، pelo/pela)، PARA (مقصد)، ATÉ (تا/حد).',
    'چرخه‌های اقتصادی برزیل شامل نیشکر، طلا، لاستیک و قهوه بود.',
    'قانون ۱۱۶۴۵: آموزش اجباری تاریخ و فرهنگ آفریقایی و بومی.',
    'وجه التزامی پس از espero que / talvez؛ ضمایر O/A و پس از r/s/z → LO/LA.',
  ],
  quiz: [
    {
      id: 'q-portas9-1',
      type: 'mcq',
      prompt: 'سردترین منطقهٔ برزیل کدام است؟',
      options: [
        'شمال (Norte)',
        'شمال‌شرق (Nordeste)',
        'جنوب (Sul)',
        'مرکز-غرب',
      ],
      answer: 'جنوب (Sul)',
      explanationFa: 'منطقهٔ جنوب سردترین است و زمستان سرد دارد.',
      cefr: 'B1',
      skill: 'reading',
    },
    {
      id: 'q-portas9-2',
      type: 'mcq',
      prompt: 'کدام حرف اضافه «مقصد» را نشان می‌دهد؟ «به برزیل آمدم.»',
      options: ['por', 'para', 'até', 'pela'],
      answer: 'para',
      explanationFa: 'PARA = مقصد: Eu vim para o Brasil.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'q-portas9-3',
      type: 'mcq',
      prompt: 'قانون ۱۱۶۴۵ (۲۰۰۸) چه چیزی را اجباری کرد؟',
      options: [
        'آموزش زبان انگلیسی',
        'آموزش تاریخ و فرهنگ آفریقایی و بومی',
        'خدمت سربازی',
        'بیمهٔ سلامت',
      ],
      answer: 'آموزش تاریخ و فرهنگ آفریقایی و بومی',
      explanationFa:
        'این قانون تدریس تاریخ و فرهنگ آفریقایی-برزیلی و بومی را در مدارس الزامی کرد.',
      cefr: 'B1',
      skill: 'reading',
    },
    {
      id: 'q-portas9-4',
      type: 'mcq',
      prompt: '«Quero entender a Ana» با ضمیر مفعولی چه می‌شود؟',
      options: [
        'Quero a entender',
        'Quero entendê-la',
        'Quero entender-lo',
        'Quero la entender',
      ],
      answer: 'Quero entendê-la',
      explanationFa: 'r حذف و a → la می‌شود: entendê-la.',
      cefr: 'B1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 24,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۹ (Geografia e História). بخش‌های تاریخی/اجتماعی (سیاست سفیدسازی، نژادپرستی، حقوق بومیان) آموزشی و برای درک جامعهٔ برزیل است و بازتاب متن اصلی است. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
