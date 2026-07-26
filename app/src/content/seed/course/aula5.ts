import type { CourseLesson } from '@/domain/content/schema';

export const aula5: CourseLesson = {
  id: 'course-aula-5',
  order: 5,
  aula: 'Aula 5',
  titleFa: 'نگارش (Redação): چطور یک متن کوتاه بنویسیم',
  titlePt: 'Redação',
  cefr: 'A2',
  summaryFa:
    'در این درس یاد می‌گیرید چگونه برای آزمون بسندگی فدرال یک «redação» (متنِ نگارشی) کوتاه بنویسید. با سه نوع متن (استدلالی، توصیفی و روایی)، ساختار سه‌بخشی هر متن (مقدمه، بدنه، نتیجه)، بندنویسی (پاراگراف‌بندی)، کلمات ربط پرکاربرد (conectivos)، تفاوت زبان رسمی و غیررسمی، و نکته‌های عملی مثل طول لازم (حدود ۲۰ خط) آشنا می‌شوید. یک پاراگراف نمونهٔ کوتاه هم با ترجمهٔ فارسی می‌بینید.',
  objectivesFa: [
    'سه نوع متن (dissertativo, descritivo, narrativo) را از هم تشخیص بدهید.',
    'متن خود را در سه بخشِ مقدمه، بدنه و نتیجه سازمان بدهید.',
    'کلمات ربط (portanto, porque, além disso, por isso, então, mas) را درست به‌کار ببرید.',
    'تفاوت زبان رسمی و غیررسمی را در نوشتار بشناسید و رسمی بنویسید.',
    'قواعد عملی آزمون (حدود ۲۰ خط، نوشتن پیش‌نویس، خط‌خوانا) را رعایت کنید.',
  ],
  sections: [
    {
      headingFa: '۱. redação چیست و چند نوع متن داریم؟',
      bodyFa:
        'واژهٔ «redação» یعنی «انشا» یا «متنِ نگارشی». تکنیک نوشتن بسته به نوع متن فرق می‌کند. سه نوع اصلی وجود دارد: متنِ استدلالی (dissertativo) که در آن نظر خود را می‌دهید؛ متنِ توصیفی (descritivo) که در آن جزئیات را شرح می‌دهید؛ و متنِ روایی (narrativo) که در آن یک داستان یا ماجرا تعریف می‌کنید. برای آزمون معمولاً یک موضوع (tema) به شما می‌دهند و شما یک نوع را انتخاب می‌کنید.',
      examples: [
        {
          pt: 'texto dissertativo',
          fa: 'متنِ استدلالی (نظر و برهان)',
          pron: 'تِکستو جیسِرتاتیوو',
          note: 'در آن یک یا چند argumento (برهان) می‌آورید و با یک ایده جمع‌بندی می‌کنید.',
        },
        {
          pt: 'texto descritivo',
          fa: 'متنِ توصیفی (شرح جزئیات)',
          pron: 'تِکستو جِسکریتیوو',
          note: 'توصیف یعنی چیزی را با جزئیات، ویژگی‌ها و احساس‌ها بیان کنید.',
        },
        {
          pt: 'texto narrativo',
          fa: 'متنِ روایی (تعریف یک داستان)',
          pron: 'تِکستو نارّاتیوو',
          note: 'در آن یک história (داستان) یا fato (ماجرا) را روایت می‌کنید.',
        },
      ],
    },
    {
      headingFa: '۲. ساختار متن: مقدمه، بدنه، نتیجه',
      bodyFa:
        'هر نوع متنی که انتخاب کنید، محتوا در طول متن گسترش می‌یابد و به سه بخش تقسیم می‌شود: introdução (مقدمه)، desenvolvimento (بدنه/گسترش) و conclusão (نتیجه). در مقدمه موضوع را معرفی و محدود می‌کنید؛ در بدنه ایده‌ها و برهان‌ها را می‌پرورانید و از نظر خود دفاع می‌کنید؛ در نتیجه بحث را جمع‌بندی می‌کنید.',
      examples: [
        {
          pt: 'Introdução — delimitação do tema.',
          fa: 'مقدمه — محدود کردن و معرفی موضوع.',
          pron: 'اینتْرودوسائو',
          note: 'می‌گوید متن دربارهٔ چیست.',
        },
        {
          pt: 'Desenvolvimento — argumentação e progressão temática.',
          fa: 'بدنه — استدلال و پیشرفت موضوع.',
          pron: 'دِزِنوُلویمِنتو',
          note: 'اینجا ایده‌ها گسترش می‌یابند و نظرها مطرح و دفاع می‌شوند.',
        },
        {
          pt: 'Conclusão — desfecho para os argumentos apresentados.',
          fa: 'نتیجه — جمع‌بندیِ برهان‌های ارائه‌شده.',
          pron: 'کُنکلوزائو',
          note: 'پایانِ متن که برهان‌ها را می‌بندد.',
        },
      ],
    },
    {
      headingFa: '۳. بندنویسی (پاراگراف‌بندی)',
      bodyFa:
        'متن خود را در چند پاراگراف بنویسید، نه یک تودهٔ به‌هم‌چسبیده. یک راهنمای ساده: پاراگراف اول = مقدمه؛ یک یا دو پاراگراف میانی = بدنه (هر پاراگراف یک ایدهٔ اصلی)؛ پاراگراف آخر = نتیجه. هر پاراگراف را با کمی تورفتگی یا فاصله شروع کنید و هر ایدهٔ تازه را در پاراگراف تازه بیاورید.',
      examples: [
        {
          pt: '1º parágrafo: introdução do tema.',
          fa: 'پاراگراف اول: معرفی موضوع.',
          pron: 'پریمِیرو پاراگرافو',
        },
        {
          pt: '2º e 3º parágrafos: seus argumentos.',
          fa: 'پاراگراف دوم و سوم: برهان‌های شما.',
          pron: 'سِگوندو ای تِرسِیرو پاراگرافوس',
          note: 'هر پاراگراف یک ایدهٔ اصلی.',
        },
        {
          pt: 'Último parágrafo: conclusão.',
          fa: 'پاراگراف آخر: نتیجه‌گیری.',
          pron: 'اولتیمو پاراگرافو',
        },
      ],
    },
    {
      headingFa: '۴. کلمات ربط (conectivos)',
      bodyFa:
        'کلمات ربط، جمله‌ها و ایده‌ها را به هم وصل می‌کنند و متن را «منسجم» (coerente) می‌کنند. انسجام یکی از مهم‌ترین عامل‌ها در نمرهٔ redação است. این‌ها را حفظ کنید و درست به‌کار ببرید: «portanto/por isso» (بنابراین) برای نتیجه، «porque» (زیرا) برای دلیل، «além disso» (علاوه بر این) برای افزودن، «então» (پس/آنگاه) و «mas» (اما) برای تضاد.',
      examples: [
        {
          pt: 'portanto / por isso',
          fa: 'بنابراین / به همین دلیل',
          pron: 'پورتانتو / پور ایسو',
          note: 'برای بیان نتیجه؛ معمولاً در پاراگراف نتیجه می‌آید.',
        },
        {
          pt: 'porque',
          fa: 'زیرا / چون',
          pron: 'پورکه',
          note: 'دلیل را توضیح می‌دهد: «... porque a ação humana polui».',
        },
        {
          pt: 'além disso',
          fa: 'علاوه بر این',
          pron: 'آلِین جیسو',
          note: 'برای افزودن یک برهان تازه در بدنه.',
        },
        {
          pt: 'mas / então',
          fa: 'اما / پس (آنگاه)',
          pron: 'مایس / اِنتائو',
          note: '«mas» تضاد را نشان می‌دهد؛ «então» نتیجه یا ادامهٔ زمانی.',
        },
      ],
    },
    {
      headingFa: '۵. زبان رسمی در برابر غیررسمی',
      bodyFa:
        'در redاçãoِ آزمون باید رسمی (formal) بنویسید. یعنی از واژه‌های خودمانی و شکسته، اختصارها و اموجی پرهیز کنید، جمله‌های کامل بنویسید و لحن محترمانه داشته باشید. زبان غیررسمی (informal) مناسب پیامک و گفت‌وگو با دوستان است، نه متن آزمون.',
      examples: [
        {
          pt: 'Formal: É necessário preservar o meio ambiente.',
          fa: 'رسمی: لازم است که محیط زیست حفظ شود.',
          pron: 'اِ نِسِساریو پرِزِروار او مِیو آمبیِنتی',
          note: 'ساختار کامل و بی‌طرف؛ مناسب آزمون.',
        },
        {
          pt: 'Informal: A gente tem que cuidar do meio ambiente, né?',
          fa: 'غیررسمی: ما باید حواسمون به محیط زیست باشه، نه؟',
          pron: 'آ جِنتی تِین کی کویدار دو مِیو آمبیِنتی، نه',
          note: '«a gente» و «né?» خودمانی‌اند؛ در متن رسمی از «nós» و جملهٔ کامل استفاده کنید.',
        },
      ],
    },
    {
      headingFa: '۶. پاراگراف نمونه (مقدمهٔ استدلالی)',
      bodyFa:
        'این یک مقدمهٔ کوتاه برای یک متن استدلالی دربارهٔ محیط زیست است. دقت کنید که موضوع معرفی می‌شود و با کلمهٔ ربط «por isso» به سمت نتیجه راه باز می‌کند. همین ساختار را می‌توانید برای موضوع خودتان به‌کار ببرید.',
      examples: [
        {
          pt: 'É salutar refletir sobre a preservação do meio ambiente. A maioria dos problemas das grandes cidades foi gerada pela ação humana. Por isso, pequenos atos podem produzir grandes mudanças.',
          fa: 'اندیشیدن دربارهٔ حفاظت از محیط زیست سودمند است. بیشترِ مشکلاتِ شهرهای بزرگ ناشی از کنشِ انسان بوده است. به همین دلیل، کارهای کوچک می‌توانند تغییرهای بزرگی پدید آورند.',
          pron: 'اِ سالوتار رِفلِتیر سُبری آ پرِزِرواسائو دو مِیو آمبیِنتی...',
          note: 'ساختار: جملهٔ معرفیِ موضوع + یک برهان + جمع‌بندی با «Por isso».',
        },
        {
          pt: 'Portanto, devemos ser cidadãos conscientes e não jogar lixo nas ruas.',
          fa: 'بنابراین، باید شهروندانی آگاه باشیم و زباله در خیابان نریزیم.',
          pron: 'پورتانتو، دِوِموس سِر سیدادائوس کُنسیِنتیس...',
          note: 'یک جملهٔ نتیجهٔ نمونه که با «Portanto» شروع می‌شود.',
        },
      ],
    },
    {
      headingFa: '۷. قواعد عملی آزمون',
      bodyFa:
        'برای ارزیابیِ فدرال این قاعده‌ها را رعایت کنید: redação شما باید حدود ۲۰ خط (20 linhas) باشد؛ موضوع را به شما می‌دهند و شما نوع متن را انتخاب می‌کنید؛ با خودکار (à caneta) بنویسید؛ و پیش از پاک‌نویس یک پیش‌نویس (rascunho) تهیه کنید تا اشتباه‌ها را بگیرید.',
      examples: [
        {
          pt: 'Sua redação precisa ter 20 linhas.',
          fa: 'انشای شما باید ۲۰ خط داشته باشد.',
          pron: 'سوآ رِداسائو پرِسیزا تِر وینتی لینیاس',
        },
        {
          pt: 'Escreva à caneta e faça um rascunho antes.',
          fa: 'با خودکار بنویسید و پیش از آن یک پیش‌نویس تهیه کنید.',
          pron: 'اِسکرِوا آ کانِتا ای فاسا اوم راسکونیو آنتیس',
        },
        {
          pt: 'Nós daremos o tema; escolha um tipo de redação.',
          fa: 'ما موضوع را می‌دهیم؛ شما یک نوع متن را انتخاب کنید.',
          pron: 'نُس دارِموس او تِما؛ اِسکولیا اوم تیپو جی رِداسائو',
        },
      ],
    },
  ],
  keyPointsFa: [
    'سه نوع متن: dissertativo (استدلالی)، descritivo (توصیفی)، narrativo (روایی).',
    'ساختار همیشگی: introdução → desenvolvimento → conclusão.',
    'در چند پاراگراف بنویس؛ هر پاراگراف یک ایدهٔ اصلی.',
    'کلمات ربط انسجام می‌سازند: portanto/por isso (نتیجه)، porque (دلیل)، além disso (افزودن)، mas (تضاد)، então (پس).',
    'رسمی بنویس: بدون واژهٔ خودمانی؛ به‌جای «a gente» از «nós» استفاده کن.',
    'قاعده‌های آزمون: حدود ۲۰ خط، با خودکار، و اول پیش‌نویس.',
  ],
  quiz: [
    {
      id: 'course-aula-5-q1',
      type: 'mcq',
      prompt: 'Qual parte do texto apresenta e delimita o tema?',
      promptFa: 'کدام بخش از متن موضوع را معرفی و محدود می‌کند؟',
      options: ['introdução', 'desenvolvimento', 'conclusão', 'rascunho'],
      answer: 'introdução',
      explanationFa:
        'مقدمه (introdução) موضوع را معرفی و محدود می‌کند. بدنه ایده‌ها را می‌پروراند و نتیجه جمع‌بندی می‌کند.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q2',
      type: 'mcq',
      prompt:
        'Escolha o melhor conectivo: "Devemos reciclar; ___, produzimos menos lixo."',
      promptFa:
        'بهترین کلمهٔ ربط را برای بیانِ «نتیجه» انتخاب کنید: «باید بازیافت کنیم؛ ___ زبالهٔ کمتری تولید می‌کنیم».',
      options: ['portanto', 'porque', 'mas', 'embora'],
      answer: 'portanto',
      explanationFa:
        '«portanto» (بنابراین) نتیجه را نشان می‌دهد. «porque» دلیل است، «mas» تضاد، و «embora» یعنی «اگرچه».',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q3',
      type: 'mcq',
      prompt:
        'Complete com o conectivo de adição: "O carro polui o ar; ___, causa barulho."',
      promptFa:
        'با کلمهٔ ربطِ «افزودن» کامل کنید: «ماشین هوا را آلوده می‌کند؛ ___ سروصدا هم ایجاد می‌کند».',
      options: ['além disso', 'por isso', 'porque', 'então'],
      answer: 'além disso',
      explanationFa:
        '«além disso» (علاوه بر این) برای افزودن یک برهان تازه به‌کار می‌رود. «por isso/então» نتیجه‌اند و «porque» دلیل.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q4',
      type: 'mcq',
      prompt: 'Qual frase é mais adequada para uma redação formal?',
      promptFa: 'کدام جمله برای یک redação رسمی مناسب‌تر است؟',
      options: [
        'É necessário preservar o meio ambiente.',
        'A gente tem que cuidar da natureza, né?',
        'Nossa, o clima tá muito louco!',
        'Ó, precisa parar de poluir, viu?',
      ],
      answer: 'É necessário preservar o meio ambiente.',
      explanationFa:
        'گزینهٔ درست جملهٔ کامل و بی‌طرف است. بقیه خودمانی‌اند (a gente، né، tá، viu) و برای متن رسمی مناسب نیستند.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q5',
      type: 'mcq',
      prompt: 'Segundo as regras da avaliação, a redação precisa ter:',
      promptFa: 'بر اساس قواعد ارزیابی، redação باید چند خط باشد؟',
      options: ['cerca de 20 linhas', '5 linhas', '100 linhas', '2 páginas'],
      answer: 'cerca de 20 linhas',
      explanationFa:
        'در جزوه آمده که redação باید حدود ۲۰ خط (20 linhas) باشد، با خودکار نوشته شود و اول پیش‌نویس داشته باشد.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 5.',
};
