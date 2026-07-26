import type { CourseLesson } from '@/domain/content/schema';

export const aula3: CourseLesson = {
  id: 'course-aula-3',
  order: 3,
  aula: 'Aula 3',
  titleFa: 'ضمایر و صفات ملکی و صفت‌ها',
  titlePt: 'Pronomes Possessivos e Adjetivos',
  cefr: 'A1',
  summaryFa:
    'در این درس یاد می‌گیرید در پرتغالی برزیلی مالکیت را چطور بیان کنید (meu, minha, seu, sua, nosso, dele…). مهم‌ترین نکته و دشوارترین بخش برای فارسی‌زبانان این است: در پرتغالی صفتِ ملکی با «چیزی که مالکِ آن هستیم» هماهنگ می‌شود، نه با صاحبِ آن. سپس با صفت‌ها (adjetivos) و هماهنگی صفت با اسم در جنس و شمار (gênero e número) آشنا می‌شوید.',
  objectivesFa: [
    'صفت‌ها و ضمایر ملکی را برای eu, você, ele/ela, nós بشناسید.',
    'قاعدهٔ کلیدی را درک کنید: ملکی با اسمِ ملک هماهنگ می‌شود، نه با مالک.',
    'برای سوم‌شخص از dele/dela/deles برای رفع ابهام استفاده کنید.',
    'بدانید صفت (adjetivo) چیست و چطور در جنس و شمار با اسم هماهنگ می‌شود.',
  ],
  sections: [
    {
      headingFa: '۱. صفت ملکی چیست؟',
      bodyFa:
        'صفت ملکی نشان می‌دهد چیزی به چه کسی تعلق دارد؛ مثل «مالِ من»، «مالِ تو». در پرتغالی معمولاً پیش از اسم می‌آید: «meu carro» (ماشینِ من). نکتهٔ اصلی که در ادامه بارها تکرار می‌کنیم: شکل ملکی به جنس و شمارِ همان چیزِ ملک بستگی دارد، نه به گوینده.',
      examples: [
        {
          pt: 'meu carro',
          fa: 'ماشینِ من',
          pron: 'مِئو کارو',
          note: 'carro مذکر مفرد است، پس meu.',
        },
        {
          pt: 'minha casa',
          fa: 'خانهٔ من',
          pron: 'مینیا کازا',
          note: 'casa مؤنث مفرد است، پس minha؛ نه meu.',
        },
      ],
    },
    {
      headingFa: '۲. مالِ من: meu / minha / meus / minhas',
      bodyFa:
        'برای «مالِ من» چهار شکل وجود دارد که بر اساس جنس (مذکر/مؤنث) و شمار (مفرد/جمع)ِ اسم انتخاب می‌شود. توجه کنید: جنسیتِ خودِ من (زن یا مرد) هیچ تأثیری ندارد؛ فقط اسمِ بعد از آن مهم است.',
      examples: [
        {
          pt: 'meu filho / meus filhos',
          fa: 'پسرِ من / پسرهای من',
          pron: 'مِئو فیلیو / مِئوس فیلیوس',
          note: 'مذکر: مفرد meu، جمع meus.',
        },
        {
          pt: 'minha irmã / minhas irmãs',
          fa: 'خواهرِ من / خواهرهای من',
          pron: 'مینیا ایرمان / مینیاس ایرمانس',
          note: 'مؤنث: مفرد minha، جمع minhas.',
        },
        {
          pt: 'O carro é meu.',
          fa: 'ماشین مالِ من است.',
          pron: 'او کارو اِ مِئو',
          note: 'اینجا meu ضمیر ملکی است (اسم را تکرار نمی‌کنیم).',
        },
      ],
    },
    {
      headingFa: '۳. مالِ تو (خودمانی): teu / tua',
      bodyFa:
        'شکل «teu/tua» متعلق به ضمیر «tu» است و در بعضی مناطق برزیل و در گفتار صمیمی به‌کار می‌رود. مثل قبل با اسم هماهنگ می‌شود: teu (مذکر)، tua (مؤنث) و جمع‌ها teus/tuas. اما در برزیل رایج‌تر است که برای «تو» هم از شکل بخش بعد (seu/sua) استفاده شود.',
      examples: [
        {
          pt: 'teu livro',
          fa: 'کتابِ تو',
          pron: 'تِئو لیورو',
          note: 'livro مذکر → teu.',
        },
        {
          pt: 'tua mochila',
          fa: 'کوله‌پشتیِ تو',
          pron: 'توآ موشیلا',
          note: 'mochila مؤنث → tua.',
        },
      ],
    },
    {
      headingFa: '۴. مالِ شما/او: seu / sua / seus / suas',
      bodyFa:
        'در برزیل «seu/sua» هم برای «مالِ شما (você)» و هم برای «مالِ او (ele/ela)» به‌کار می‌رود. باز هم با اسمِ ملک هماهنگ است، نه با صاحبش. چون این شکل می‌تواند مبهم باشد (شما؟ او؟)، در بخش بعد راه رفع ابهام را می‌بینیم.',
      examples: [
        {
          pt: 'Seu filho é pequeno.',
          fa: 'پسرِ شما کوچک است.',
          pron: 'سِئو فیلیو اِ پِکِنو',
          note: 'filho مذکر مفرد → seu.',
        },
        {
          pt: 'Sua casa é grande.',
          fa: 'خانهٔ شما بزرگ است.',
          pron: 'سوآ کازا اِ گرَنجی',
          note: 'casa مؤنث مفرد → sua.',
        },
        {
          pt: 'Suas vozes serão ouvidas.',
          fa: 'صداهای شما شنیده خواهند شد.',
          pron: 'سوآس ووزیس سِرائو اُویداس',
          note: 'vozes مؤنث جمع → suas.',
        },
      ],
    },
    {
      headingFa: '۵. رفع ابهام سوم‌شخص: dele / dela / deles',
      bodyFa:
        'چون «seu/sua» مبهم است، برزیلی‌ها برای «مالِ او/آن‌ها» اغلب از «dele» (مالِ او-مرد)، «dela» (مالِ او-زن)، «deles/delas» (مالِ آن‌ها) استفاده می‌کنند. نکتهٔ مهم: این شکل‌ها با جنسِ صاحب هماهنگ‌اند و بعد از اسم می‌آیند و خودِ اسم حرف تعریف می‌گیرد.',
      examples: [
        {
          pt: 'o carro dele',
          fa: 'ماشینِ او (مرد)',
          pron: 'او کارو دِلی',
          note: 'dele = de + ele. اینجا برخلاف بقیه، جنسیتِ صاحب (مرد) تعیین‌کننده است.',
        },
        {
          pt: 'a casa dela',
          fa: 'خانهٔ او (زن)',
          pron: 'آ کازا دِلا',
          note: 'dela = de + ela.',
        },
        {
          pt: 'os pais deles',
          fa: 'والدینِ آن‌ها',
          pron: 'اوس پایس دِلیس',
          note: 'deles برای گروهی که دست‌کم یک مرد دارد؛ delas برای گروه کاملاً زنانه.',
        },
      ],
    },
    {
      headingFa: '۶. مالِ ما: nosso / nossa / nossos / nossas',
      bodyFa:
        'برای «مالِ ما» چهار شکل داریم که مثل همیشه با اسمِ ملک هماهنگ می‌شوند. یادآوری: «a gente» هم یعنی «ما»، اما ملکیِ آن هم nosso/nossa است.',
      examples: [
        {
          pt: 'nosso apartamento',
          fa: 'آپارتمانِ ما',
          pron: 'نُسو آپارتامِنتو',
          note: 'apartamento مذکر مفرد → nosso.',
        },
        {
          pt: 'nossa loja',
          fa: 'مغازهٔ ما',
          pron: 'نُسا لُژا',
          note: 'loja مؤنث مفرد → nossa.',
        },
        {
          pt: 'Queremos melhorar nossa comunicação.',
          fa: 'می‌خواهیم ارتباطِ خود را بهتر کنیم.',
          pron: 'کِرِموس مِلیورار نُسا کُمونیکاسائو',
          note: 'comunicação مؤنث → nossa.',
        },
      ],
    },
    {
      headingFa: '۷. صفت چیست و چطور با اسم هماهنگ می‌شود؟',
      bodyFa:
        'صفت (adjetivo) واژه‌ای است که ویژگیِ یک اسم را بیان می‌کند: bonito (زیبا)، educado (باادب). در پرتغالی صفت هم مثل ملکی در جنس و شمار (gênero e número) با اسم هماهنگ می‌شود و معمولاً بعد از اسم می‌آید. صفت‌هایی که به «o» ختم می‌شوند در مؤنث به «a» تبدیل می‌شوند و در جمع «s» می‌گیرند.',
      examples: [
        {
          pt: 'um lugar bonito',
          fa: 'یک جای زیبا',
          pron: 'اوم لوگار بونیتو',
          note: 'اسم مذکر مفرد → صفت bonito.',
        },
        {
          pt: 'uma menina educada',
          fa: 'یک دخترِ باادب',
          pron: 'اوما مِنینا اِدوکادا',
          note: 'اسم مؤنث مفرد → educada (پایانه به a).',
        },
        {
          pt: 'umas flores perfumadas',
          fa: 'چند گلِ خوشبو',
          pron: 'اوماس فلوریس پِرفوماداس',
          note: 'مؤنث جمع → perfumadas.',
        },
        {
          pt: 'uns livros interessantes',
          fa: 'چند کتابِ جالب',
          pron: 'اونس لیوروس اینتِرِسانتیس',
          note: 'صفت‌های پایان‌یافته به e مثل interessante در مذکر/مؤنث یکسان‌اند و فقط s جمع می‌گیرند.',
        },
      ],
    },
    {
      headingFa: '۸. تمرین هماهنگی: پایانهٔ درست صفت',
      bodyFa:
        'برای انتخاب پایانهٔ صفت، اول جنس و شمارِ اسم را پیدا کنید، سپس صفت را با آن هماهنگ کنید. این همان قاعده‌ای است که در ملکی هم دیدیم؛ پس یک بار یاد بگیرید، همه‌جا به‌کار می‌رود.',
      examples: [
        {
          pt: 'aviões rápidos',
          fa: 'هواپیماهای سریع',
          pron: 'آویُنس هاپیدوس',
          note: 'مذکر جمع → rápidos.',
        },
        {
          pt: 'blusa velha',
          fa: 'بلوزِ کهنه',
          pron: 'بلوزا وِلیا',
          note: 'مؤنث مفرد → velha.',
        },
        {
          pt: 'camas macias',
          fa: 'تخت‌های نرم',
          pron: 'کاماس ماسیاس',
          note: 'مؤنث جمع → macias.',
        },
        {
          pt: 'dia frio',
          fa: 'روزِ سرد',
          pron: 'جیا فریو',
          note: 'مذکر مفرد → frio.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'قاعدهٔ طلایی: ملکی با «چیزِ ملک» هماهنگ می‌شود، نه با صاحبش. minha casa حتی اگر گوینده مرد باشد.',
    'مالِ من: meu/minha/meus/minhas؛ مالِ ما: nosso/nossa/nossos/nossas.',
    'در برزیل seu/sua هم برای você و هم برای ele/ela است؛ برای رفع ابهام از dele/dela/deles استفاده کن.',
    'dele/dela برعکسِ بقیه با جنسِ صاحب هماهنگ‌اند و بعد از اسم می‌آیند: o carro dele.',
    'صفت هم در جنس و شمار با اسم هماهنگ است: menina educada، livros interessantes.',
  ],
  quiz: [
    {
      id: 'course-aula-3-q1',
      type: 'fill-blank',
      prompt: 'Complete: Eu tenho uma moto. Essa moto é ___.',
      promptFa:
        'ملکیِ «مالِ من» را برای moto (مؤنث مفرد) انتخاب کنید. یادتان باشد با اسم هماهنگ می‌شود، نه با گوینده.',
      options: ['meu', 'minha', 'meus', 'minhas'],
      answer: 'minha',
      explanationFa:
        'moto مؤنث مفرد است، پس «minha». حتی اگر گوینده مرد باشد باز minha است، چون ملکی با اسمِ ملک هماهنگ می‌شود.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-3-q2',
      type: 'fill-blank',
      prompt: 'Complete: Nós temos um apartamento. Esse apartamento é ___.',
      promptFa: 'ملکیِ «مالِ ما» را برای apartamento (مذکر مفرد) انتخاب کنید.',
      options: ['nossa', 'nosso', 'nossos', 'meu'],
      answer: 'nosso',
      explanationFa:
        'apartamento مذکر مفرد است، پس «nosso». nossa برای اسم مؤنث است (مثل nossa loja).',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-3-q3',
      type: 'mcq',
      prompt: 'Escolha: o carro ___ (o carro pertence a ele — um homem).',
      promptFa: 'برای «ماشینِ او (مرد)» و رفع ابهام کدام گزینه درست است؟',
      options: ['dela', 'dele', 'sua', 'seus'],
      answer: 'dele',
      explanationFa:
        'برای «مالِ او (مرد)» از «dele» (de + ele) استفاده می‌کنیم و بعد از اسم می‌آید: «o carro dele». برای زن dela می‌شود.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-3-q4',
      type: 'fill-blank',
      prompt: 'Complete o adjetivo: uma menina educad__.',
      promptFa: 'پایانهٔ درست صفت را برای menina (مؤنث مفرد) بنویسید.',
      options: ['a', 'o', 'os', 'as'],
      answer: 'a',
      explanationFa:
        'menina مؤنث مفرد است، پس صفت هم به «a» ختم می‌شود: «educada». صفت در جنس و شمار با اسم هماهنگ می‌شود.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-3-q5',
      type: 'mcq',
      prompt: 'Escolha a forma correta: ___ vozes serão ouvidas. (de você)',
      promptFa: 'ملکیِ درست برای vozes (مؤنث جمع، «مالِ شما») کدام است؟',
      options: ['seu', 'sua', 'suas', 'seus'],
      answer: 'suas',
      explanationFa:
        'vozes مؤنث جمع است، پس «suas». seu/seus مذکرند و sua مفرد است. باز هم هماهنگی با اسمِ ملک.',
      cefr: 'A1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 3.',
};
