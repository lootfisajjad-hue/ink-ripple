import type { CourseLesson } from '@/domain/content/schema';

export const aula14: CourseLesson = {
  id: 'course-aula-14',
  order: 14,
  aula: 'Aula 14',
  titleFa: 'حروف اضافه (Preposições)',
  titlePt: 'Preposições',
  cefr: 'A2',
  summaryFa:
    'در این درس با حروف اضافه در پرتغالی آشنا می‌شویم؛ کلمه‌هایی که دو کلمه را به هم ربط می‌دهند. مهم‌ترین بخش برای فارسی‌زبان‌ها «ادغام حرف اضافه با حرف تعریف» است (مثل de + o = do یا em + a = na) که بسیار پرکاربرد است و اگر آن را یاد بگیرید، جمله‌های روزمره مثل «در برزیل زندگی می‌کنم» را درست می‌سازید.',
  objectivesFa: [
    'بفهمید حرف اضافه چیست و چه کاری انجام می‌دهد.',
    'حروف اضافهٔ اصلی (a، de، em، com، por، para و…) را بشناسید.',
    'ادغام حرف اضافه با حرف تعریف را یاد بگیرید (do, da, no, na, ao, à, pelo…).',
    'جمله‌های روزمرهٔ درست بسازید: moro no Brasil، sou do Irã، vou para… .',
    'اشتباه‌های رایج فارسی‌زبان‌ها را بشناسید و از آن‌ها پرهیز کنید.',
  ],
  sections: [
    {
      headingFa: 'حرف اضافه چیست؟',
      bodyFa:
        'حرف اضافه (preposição) کلمه‌ای است که دو کلمه را به هم ربط می‌دهد و رابطهٔ میان آن‌ها را نشان می‌دهد؛ یکی معنای دیگری را کامل یا روشن می‌کند. این کلمه‌ها هیچ‌وقت تغییر شکل نمی‌دهند (invariável). در فارسی هم چیزهایی مثل «با»، «بدون»، «تا»، «از»، «در» داریم.',
      examples: [
        {
          pt: 'Estou com medo.',
          fa: 'می‌ترسم. (تحت‌اللفظی: با ترس هستم)',
          pron: 'اِستُو کُم مِدو',
          note: 'com (با) فعل estou را به medo (ترس) وصل می‌کند.',
        },
        {
          pt: 'Ele ficou sem dinheiro.',
          fa: 'او بی‌پول شد.',
          pron: 'اِلی فیکُو سِن دینیِرو',
          note: 'sem یعنی «بدون».',
        },
        {
          pt: 'Mariana foi até a sala.',
          fa: 'ماریانا تا سالن رفت.',
          pron: 'ماریانا فُی آته آ سالا',
          note: 'até یعنی «تا».',
        },
      ],
    },
    {
      headingFa: 'حروف اضافهٔ اصلی (essenciais)',
      bodyFa:
        'حروف اضافهٔ اصلی کلمه‌هایی هستند که فقط نقش حرف اضافه دارند. مهم‌ترین‌ها این‌ها هستند: a (به)، ante (پیشِ)، após (پس از)، até (تا)، com (با)، contra (علیه)، de (از/مالِ)، desde (از هنگامِ)، em (در)، entre (میانِ)، para (برای/به‌سوی)، por/per (به‌خاطرِ/از راهِ)، perante (در برابرِ)، sem (بدون)، sob (زیرِ)، sobre (دربارهٔ/روی)، trás (پشت). لازم نیست همه را یک‌جا حفظ کنید؛ کاربردی‌ترین‌ها a, de, em, com, por, para هستند.',
      examples: [
        {
          pt: 'Hoje vou sair com meus amigos.',
          fa: 'امروز با دوستانم بیرون می‌روم.',
          pron: 'اُژه وُ سائیر کُم مِئوس آمیگوس',
          note: 'com = همراهی.',
        },
        {
          pt: 'O Flamengo jogou contra o Fluminense.',
          fa: 'فلامنگو در برابر فلومیننسه بازی کرد.',
          pron: 'او فلامِنگو ژوگُو کُنترا او فلومینِنسی',
          note: 'contra = مخالفت/رویارویی.',
        },
        {
          pt: 'Não gosto de falar sobre política.',
          fa: 'دوست ندارم دربارهٔ سیاست حرف بزنم.',
          pron: 'نَون گُستو دی فالار سُبری پولیتیکا',
          note: 'sobre = دربارهٔ.',
        },
      ],
    },
    {
      headingFa: 'حرف اضافهٔ de: مبدأ، تعلق و جنس',
      bodyFa:
        'حرف اضافهٔ de سه کاربرد اصلی دارد: نشان‌دادن مبدأ (اهل کجا)، تعلق (مالِ چه‌کسی) و جنس (از چه ساخته شده). برای «اهل کجا هستی؟» می‌گوییم De onde você é؟ و پاسخ با de می‌آید.',
      examples: [
        {
          pt: 'De onde você é? Eu sou de São Paulo.',
          fa: 'اهل کجایی؟ من اهل سائوپائولو هستم.',
          pron: 'دی اُنجی وُسه اِ؟ اِئو سُو دی سَون پائولو',
          note: 'برای شهرها و ایالت‌ها معمولاً فقط de می‌آید.',
        },
        {
          pt: 'Este é o carro do meu pai.',
          fa: 'این ماشینِ پدرم است.',
          pron: 'اِستی اِ او کارّو دو مِئو پای',
          note: 'de + o = do (تعلق).',
        },
        {
          pt: 'Esta casa é de madeira.',
          fa: 'این خانه از چوب است.',
          pron: 'اِستا کازا اِ دی مادِیرا',
          note: 'برای جنس، de تغییر نمی‌کند و ادغام نمی‌شود.',
        },
      ],
    },
    {
      headingFa: 'ادغام de و em با حرف تعریف (do/da و no/na)',
      bodyFa:
        'مهم‌ترین نکتهٔ این درس برای فارسی‌زبان‌ها همین‌جاست. وقتی de یا em پیش از حرف تعریف (o, a, os, as) بیاید، با آن یکی می‌شود:\nde + o = do، de + a = da، de + os = dos، de + as = das.\nem + o = no، em + a = na، em + os = nos، em + as = nas.\nقاعدهٔ کلی: نامِ کشورها معمولاً حرف تعریف می‌گیرند، اما بیشتر شهرها و ایالت‌ها فقط de/em می‌گیرند (استثناها: o Rio de Janeiro، a Bahia).',
      examples: [
        {
          pt: 'Eu sou do Irã.',
          fa: 'من اهل ایران هستم.',
          pron: 'اِئو سُو دو ایرَن',
          note: 'de + o = do (کشور مذکر).',
        },
        {
          pt: 'Ela é da Alemanha e ele é dos Estados Unidos.',
          fa: 'او اهل آلمان است و او اهل ایالات متحده است.',
          pron: 'اِلا اِ دا آلِمانیا ای اِلی اِ دوس اِستادوس اونیدوس',
          note: 'de + a = da؛ de + os = dos.',
        },
        {
          pt: 'Moro no Brasil, na cidade de Salvador.',
          fa: 'در برزیل، در شهر سالوادور زندگی می‌کنم.',
          pron: 'مُرو نو برازیل، نا سیدادی دی سالوادور',
          note: 'em + o = no؛ em + a = na.',
        },
        {
          pt: 'Ele mora no Rio de Janeiro, na Bahia não.',
          fa: 'او در ریودوژانیرو زندگی می‌کند، در باهیا نه.',
          pron: 'اِلی مُرا نو هیو دی ژانِیرو، نا باهیا نَون',
          note: 'استثناها: o Rio de Janeiro و a Bahia حرف تعریف می‌گیرند.',
        },
      ],
    },
    {
      headingFa: 'ادغام a و por (ao/à و pelo/pela)',
      bodyFa:
        'حرف اضافهٔ a (به‌سوی/به) و por (از راهِ/به‌خاطرِ) هم با حرف تعریف ادغام می‌شوند:\na + o = ao، a + os = aos، a + a = à، a + as = às (نشانهٔ ` علامت crase است).\npor + o = pelo، por + a = pela، por + os = pelos، por + as = pelas.\nا حرف اضافهٔ a برای مقصد به‌کار می‌رود و اغلب با para هم‌معنی است.',
      examples: [
        {
          pt: 'Fui ao Rio de Janeiro três vezes.',
          fa: 'سه بار به ریودوژانیرو رفتم.',
          pron: 'فوی آاو هیو دی ژانِیرو ترِس وِزِس',
          note: 'a + o = ao (مقصد).',
        },
        {
          pt: 'Vou à escola pela manhã.',
          fa: 'صبح‌ها به مدرسه می‌روم.',
          pron: 'وُ آ اِسکولا پِلا مانیَن',
          note: 'a + a = à (crase)؛ por + a = pela.',
        },
        {
          pt: 'Você precisa passar pelo túnel.',
          fa: 'باید از تونل رد شوی.',
          pron: 'وُسه پرِسیزا پاسار پِلو تونِل',
          note: 'por + o = pelo (مسیری که از آن می‌گذریم).',
        },
      ],
    },
    {
      headingFa: 'para و por: مقصد، هدف و علت',
      bodyFa:
        'para یعنی «برای» یا «به‌سوی» و برای مقصد، هدف و گیرندهٔ چیزی به‌کار می‌رود. por برای زمان، قیمت، علت و مسیر است. در گفتار روزمره para اغلب pra تلفظ می‌شود (pra = para یا para a، و pro = para o)، اما در نوشتار رسمی همان para و para o را بنویسید.',
      examples: [
        {
          pt: 'Eu vou para a escola.',
          fa: 'به مدرسه می‌روم.',
          pron: 'اِئو وُ پارا آ اِسکولا',
          note: 'para = حرکت به‌سوی مقصد.',
        },
        {
          pt: 'Comprei um presente para você.',
          fa: 'یک هدیه برای تو خریدم.',
          pron: 'کُمپرِی اون پرِزِنتی پارا وُسه',
          note: 'para = گیرندهٔ چیزی.',
        },
        {
          pt: 'Comprei essa blusa por 30 reais.',
          fa: 'این بلوز را ۳۰ رئال خریدم.',
          pron: 'کُمپرِی اِسا بلوزا پور ترینتا هیایس',
          note: 'por = قیمت.',
        },
        {
          pt: 'Ele não veio por medo da chuva.',
          fa: 'او به‌خاطر ترس از باران نیامد.',
          pron: 'اِلی نَون وِیو پور مِدو دا شووا',
          note: 'por = علت؛ de + a = da.',
        },
      ],
    },
    {
      headingFa: 'کاربردهای روزمره و اشتباه‌های رایج',
      bodyFa:
        'چند الگوی پرکاربرد را حفظ کنید: moro NO Brasil / NA cidade (کجا زندگی می‌کنم)، sou DO Irã / DA cidade (اهل کجایم)، vou A/PARA… (کجا می‌روم)، falar COM… (با کسی حرف زدن)، gostar DE… (چیزی را دوست داشتن). اشتباه رایج فارسی‌زبان‌ها این است که چون در فارسی می‌گوییم «در برزیل»، سعی می‌کنند em Brasil بگویند؛ اما چون Brasil کشور مذکر است باید no Brasil گفت. همچنین gostar همیشه با de می‌آید (نه بدون آن).',
      examples: [
        {
          pt: 'Eu gosto de música brasileira.',
          fa: 'من موسیقی برزیلی را دوست دارم.',
          pron: 'اِئو گُستو دی موزیکا برازیلِیرا',
          note: 'gostar همیشه de می‌خواهد: gostar DE.',
        },
        {
          pt: 'Preciso falar com o médico.',
          fa: 'باید با پزشک صحبت کنم.',
          pron: 'پرِسیزو فالار کُم او مِدیکو',
          note: 'falar com = با کسی حرف زدن.',
        },
        {
          pt: 'Moro no Brasil. (نه: moro em Brasil)',
          fa: 'در برزیل زندگی می‌کنم.',
          pron: 'مُرو نو برازیل',
          note: 'اشتباه رایج: کشورها حرف تعریف می‌گیرند، پس em + o = no.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'حرف اضافه دو کلمه را به هم ربط می‌دهد و تغییر شکل نمی‌دهد.',
    'de + o/a/os/as = do/da/dos/das ؛ em + o/a/os/as = no/na/nos/nas.',
    'a + o = ao، a + a = à ؛ por + o = pelo، por + a = pela.',
    'کشورها معمولاً حرف تعریف می‌گیرند (no Brasil, da França)؛ بیشتر شهرها نه (em/de São Paulo).',
    'الگوهای کلیدی: moro no…، sou do…، vou para…، falar com…، gostar de… .',
  ],
  quiz: [
    {
      id: 'course-aula-14-q1',
      type: 'fill-blank',
      prompt: 'Eu moro ___ Brasil.',
      promptFa: 'جای خالی را با ادغام درست پر کنید (em + o).',
      options: ['em', 'no', 'na', 'do'],
      answer: 'no',
      explanationFa:
        'Brasil کشور مذکر است و حرف تعریف o می‌گیرد؛ پس em + o = no. گفتن «em Brasil» اشتباه رایج است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-14-q2',
      type: 'fill-blank',
      prompt: 'Eu sou ___ Irã.',
      promptFa: 'جای خالی را با ادغام درست پر کنید (de + o).',
      options: ['de', 'do', 'da', 'no'],
      answer: 'do',
      explanationFa:
        'Irã کشور مذکر است؛ برای مبدأ de به‌کار می‌رود و de + o = do. پس «sou do Irã».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-14-q3',
      type: 'fill-blank',
      prompt: 'Ela é ___ Alemanha.',
      promptFa: 'جای خالی را با ادغام درست پر کنید (de + a).',
      options: ['do', 'da', 'na', 'de'],
      answer: 'da',
      explanationFa:
        'Alemanha کشور مؤنث است و حرف تعریف a می‌گیرد؛ de + a = da. پس «da Alemanha».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-14-q4',
      type: 'mcq',
      prompt: 'Qual preposição completa: "Não gosto ___ acordar cedo."?',
      promptFa:
        'کدام حرف اضافه جمله را کامل می‌کند؟ فعل gostar کدام حرف اضافه را می‌خواهد؟',
      options: ['com', 'de', 'para', 'em'],
      answer: 'de',
      explanationFa:
        'فعل gostar همیشه با حرف اضافهٔ de می‌آید: gostar DE. پس «Não gosto de acordar cedo».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-14-q5',
      type: 'fill-blank',
      prompt: 'Vou ___ escola pela manhã.',
      promptFa: 'جای خالی را با ادغام درست پر کنید (a + a = crase).',
      options: ['a', 'à', 'na', 'para'],
      answer: 'à',
      explanationFa:
        'escola مؤنث است و با حرف اضافهٔ a ترکیب می‌شود: a + a = à (crase). پس «Vou à escola».',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 14.',
};
