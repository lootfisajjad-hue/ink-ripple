import type { CourseLesson } from '@/domain/content/schema';

export const aula5: CourseLesson = {
  id: 'course-aula-5',
  order: 5,
  aula: 'Aula 5',
  titleFa: 'انشا و فنون نگارش (Redação)',
  titlePt: 'Redação',
  cefr: 'A2',
  summaryFa:
    'در این درس با فنون نگارش (Técnicas de Redação) در پرتغالی برزیلی آشنا می‌شوید. یاد می‌گیرید که متن‌ها سه گونهٔ اصلی دارند: استدلالی/انشایی (Dissertativo)، توصیفی (Descritivo) و روایی (Narrativo). ساختار سه‌بخشی هر متن (مقدمه، تنه، نتیجه‌گیری) را می‌شناسید، نمونه‌های کامل هر نوع متن (استدلالی، تشریحی، توصیفِ ذهنی و عینی) را می‌خوانید، تفاوت گفتار مستقیم و غیرمستقیم در متن روایی را یاد می‌گیرید و در پایان با قواعد آزمون نگارش و موضوع آزمون آنلاین آشنا می‌شوید.',
  objectivesFa: [
    'سه نوع اصلی متن (Dissertativo, Descritivo, Narrativo) را بشناسید و کاربردشان را تشخیص دهید.',
    'ویژگی‌های متن استدلالی، روایی و توصیفی را بدانید.',
    'ساختار سه‌بخشی یک انشا (مقدمه، تنه، نتیجه‌گیری) را به‌کار ببرید.',
    'تفاوت متن استدلالیِ استدلال‌محور (argumentativo) و تشریحی (expositivo) را بفهمید.',
    'تفاوت توصیف ذهنی (subjetiva) و عینی (objetiva) را تشخیص دهید.',
    'گفتار مستقیم (discurso direto) و غیرمستقیم (discurso indireto) را در متن روایی به‌کار ببرید.',
    'با قواعد و الزامات آزمون نگارش و موضوع آزمون آنلاین آشنا شوید.',
  ],
  sections: [
    {
      headingFa: '۱. فنون نگارش و سه نوع متن (Técnicas de Redação)',
      bodyFa:
        'فنون نگارش بسته به نوع متنی که به‌کار می‌بریم تغییر می‌کند. سه نوع اصلی متن وجود دارد:\n\n۱) Dissertativo (استدلالی/انشایی) → بیان نظر و عقیدهٔ شما.\n۲) Descritivo (توصیفی) → دادن جزئیات.\n۳) Narrativo (روایی) → تعریف کردن یک داستان.\n\nهر موضوع را می‌توان با هر یک از این سه شیوه نوشت؛ انتخاب نوع متن به هدف نویسنده بستگی دارد.',
      examples: [
        {
          pt: 'texto dissertativo — Sua opinião',
          fa: 'متن استدلالی — نظر شما',
          pron: 'تِکستو دیسِرتاتیوو',
          note: 'در این نوع، نویسنده دیدگاه خود را بیان و از آن دفاع می‌کند.',
        },
        {
          pt: 'texto descritivo — Dar detalhes',
          fa: 'متن توصیفی — دادن جزئیات',
          pron: 'تِکستو دِسکریتیوو',
          note: 'برای توصیف دقیق یک چیز، شخص یا مکان.',
        },
        {
          pt: 'texto narrativo — História',
          fa: 'متن روایی — داستان',
          pron: 'تِکستو ناراتیوو',
          note: 'برای تعریف کردن یک داستان یا رویداد.',
        },
      ],
    },
    {
      headingFa: '۲. متن استدلالی (Dissertação)',
      bodyFa:
        'یک متن استدلالی باید نظرمحور (opinativo) باشد. در آن یک یا چند استدلال (argumento) ارائه می‌شود که با یک ایده به پایان می‌رسد. علاوه بر ساختاردهیِ خوبِ متن و تضمین پیشرفت موضوعی آن (progressão temática)، انسجام و پیوستگی (coerência) یکی از مهم‌ترین عوامل در این نوع نگارش است.',
      examples: [
        {
          pt: 'Um texto dissertativo deve ser opinativo.',
          fa: 'یک متن استدلالی باید نظرمحور باشد.',
          pron: 'اوم تِکستو دیسِرتاتیوو دِوی سِر اوپیناتیوو',
        },
        {
          pt: 'A coerência é um dos fatores mais importantes.',
          fa: 'انسجام یکی از مهم‌ترین عوامل است.',
          pron: 'آ کوئِرِنسیا اِ اوم دوس فاتورِس مایس ایمپورتانتِس',
          note: 'coerência = پیوستگی منطقی میان ایده‌ها.',
        },
      ],
    },
    {
      headingFa: '۳. متن روایی (Narração)',
      bodyFa:
        'هنگام استفاده از متن روایی مهم است توجه کنید که هر آنچه برای فهمیده‌شدن داستان لازم است، در انشا حاضر باشد. دلیلش این است که در روایت، یک داستان تعریف می‌شود یا یک واقعه نقل می‌گردد.',
      examples: [
        {
          pt: 'Na narração conta-se uma história ou narra-se um fato.',
          fa: 'در روایت، یک داستان تعریف می‌شود یا یک واقعه نقل می‌گردد.',
          pron: 'نا ناراسائو کُنتا-سی اوما ایستوریا او نارا-سی اوم فاتو',
        },
        {
          pt: 'Tudo o que seja necessário para entender a história deve estar presente.',
          fa: 'هر آنچه برای فهم داستان لازم است باید حاضر باشد.',
          pron: 'تودو او کی سِژا نِسِساریو پارا اِنتِندِر آ ایستوریا',
        },
      ],
    },
    {
      headingFa: '۴. متن توصیفی (Descrição)',
      bodyFa:
        'توصیف کردن یعنی چیزی را به‌شکل مفصل تعریف کردن. این کار از راه بیان جزئیات (detalhes)، ویژگی‌ها (qualidades)، برداشت‌ها (impressões) و احساس‌هایی (sensações) انجام می‌شود که نویسنده دربارهٔ موضوع دارد. پیشرفت موضوعی با یک معرفی (apresentação) آغاز می‌شود؛ سپس توصیف و مشخصه‌سازی می‌آید و در پایان با خلاصه‌ای از آنچه ارائه شده به پایان می‌رسد.',
      examples: [
        {
          pt: 'Descrever é contar algo de forma detalhada.',
          fa: 'توصیف کردن یعنی چیزی را به‌شکل مفصل تعریف کردن.',
          pron: 'دِسکرِوِر اِ کُنتار آلگو جی فُرما دِتالیادا',
        },
        {
          pt: 'a exposição de detalhes, das qualidades, das impressões e das sensações',
          fa: 'بیان جزئیات، ویژگی‌ها، برداشت‌ها و احساس‌ها',
          pron: 'آ اِسپوزیسائو جی دِتالیِس، داس کوالیدادِس',
        },
      ],
    },
    {
      headingFa: '۵. ساختار سه‌بخشی متن (Introdução, Desenvolvimento, Conclusão)',
      bodyFa:
        'هر نوع متنی که به‌کار برود، محتوا در طول متن گسترش می‌یابد و به این بخش‌ها تقسیم می‌شود:\n\n۱. Introdução (مقدمه) — تعیین حدود موضوع (delimitação do tema). موضوعی را که انشا درباره‌اش است نشان می‌دهد.\n\n۲. Desenvolvimento (تنه/گسترش) — استدلال‌آوری یا پیشرفت موضوعی (argumentação ou progressão temática). ایده‌ها گسترش می‌یابند و در همان حال نظرها بیان و از آن‌ها دفاع می‌شود.\n\n۳. Conclusão (نتیجه‌گیری) — سرانجام و جمع‌بندیِ استدلال‌های ارائه‌شده (desfecho para os argumentos apresentados).',
      examples: [
        {
          pt: 'Introdução: delimitação do tema.',
          fa: 'مقدمه: تعیین حدود موضوع.',
          pron: 'اینترودوسائو: دِلیمیتاسائو دو تِما',
        },
        {
          pt: 'Desenvolvimento: argumentação ou progressão temática.',
          fa: 'تنه: استدلال‌آوری یا پیشرفت موضوعی.',
          pron: 'دِزِنوُلویمِنتو: آرگومِنتاسائو',
        },
        {
          pt: 'Conclusão: desfecho para os argumentos apresentados.',
          fa: 'نتیجه‌گیری: سرانجام برای استدلال‌های ارائه‌شده.',
          pron: 'کُنکلوزائو: دِسفِشو',
        },
      ],
    },
    {
      headingFa: '۶. نمونهٔ متن استدلالیِ استدلال‌محور (Dissertativo Argumentativo)',
      bodyFa:
        'در این نمونه، نویسنده دربارهٔ اهمیت حفظ محیط‌زیست نظر می‌دهد و از آن دفاع می‌کند. متن کامل:\n\n«Em pleno século XXI é salutar refletir sobre a importância de preservação do meio ambiente bem como atuar em prol de uma sociedade mais consciente e limpa. Já ficou mais que claro que a maioria dos problemas os quais enfrentamos atualmente nas grandes cidades, foram gerados pela ação humana. De tal modo, podemos pensar nas grandes construções, alicerçadas na urbanização desenfreada, ou no simples ato de jogar lixo nas ruas.\n\nA poluição gerada e impregnada nas grandes cidades foi em grande parte fruto da urbanização desenfreada ou da atuação de indústrias; porém, deveres não cumpridos pelos homens também proporcionaram toda essa "sujidade". Nesse sentido, vale lembrar que pequenos atos podem produzir grandes mudanças se realizados por todos os cidadãos.\n\nPortanto, um conselho deveras importante: ao invés de jogar o lixo (seja um papelzinho de bala, ou uma anotação de um telefone) nas ruas, guarde-o no bolso e atire somente quando encontrar uma lixeira. Seja um cidadão consciente! Não jogue lixo nas ruas!»',
      examples: [
        {
          pt: 'Seja um cidadão consciente! Não jogue lixo nas ruas!',
          fa: 'یک شهروند آگاه باش! زباله در خیابان نریز!',
          pron: 'سِژا اوم سیدادائو کُنسیِنتی! نائو ژُگی لیکسو ناس هوآس!',
          note: 'جملهٔ پایانیِ نتیجه‌گیری که خواننده را به عمل دعوت می‌کند.',
        },
        {
          pt: 'a maioria dos problemas foram gerados pela ação humana',
          fa: 'بیشتر مشکلات را کنشِ انسانی پدید آورده است',
          pron: 'آ مایوریا دوس پروبلِماس فورام ژِرادوس پِلا آسائو اومانا',
          note: 'استدلال اصلیِ متن.',
        },
      ],
    },
    {
      headingFa: '۷. نمونهٔ متن استدلالیِ تشریحی (Dissertativo Expositivo)',
      bodyFa:
        'برخلاف متن استدلال‌محور، متن تشریحی موضوعی را به‌شکل بی‌طرفانه و بر پایهٔ اطلاعات توضیح می‌دهد. موضوع این نمونه گرمایش جهانی است. متن کامل:\n\n«O aquecimento global é o aumento da temperatura média do planeta. Ele é causado principalmente pela emissão de gases de efeito estufa, liberados na queima de combustíveis fósseis, no desmatamento e em processos industriais. Dados divulgados por instituições científicas internacionais indicam que a temperatura média global tem aumentado nas últimas décadas. Foram observadas alterações no clima em várias regiões, incluindo ondas de calor mais longas, mudanças nos padrões de chuva e derretimento de geleiras.\n\nOrganizações internacionais relatam que esses eventos climáticos estão associados ao aumento da concentração de gases na atmosfera. O aquecimento global é um problema que afeta todos os países. Por isso, organizações internacionais e cientistas alertam para a necessidade de reduzir a poluição, proteger as florestas e investir em fontes de energia limpa.»',
      examples: [
        {
          pt: 'O aquecimento global é o aumento da temperatura média do planeta.',
          fa: 'گرمایش جهانی افزایش دمای میانگین سیّاره است.',
          pron: 'او آکِسیمِنتو گلوبال اِ او آومِنتو دا تِمپِراتورا مِدیا دو پلانِتا',
          note: 'جملهٔ تعریفیِ آغازِ متن تشریحی.',
        },
        {
          pt: 'reduzir a poluição, proteger as florestas e investir em energia limpa',
          fa: 'کاهش آلودگی، حفاظت از جنگل‌ها و سرمایه‌گذاری در انرژی پاک',
          pron: 'هِدوزیر آ پولویسائو، پروتِژِر آس فلورِستاس',
        },
      ],
    },
    {
      headingFa: '۸. نمونهٔ متن توصیفی ـ توصیف ذهنی (Descrição Subjetiva)',
      bodyFa:
        'در توصیف ذهنی، نویسنده برداشت‌ها و احساس‌های شخصی خود را وارد توصیف می‌کند و زبان ادبی و پرجزئیات به‌کار می‌برد. این نمونه از رمان «O Primo Basílio» نوشتهٔ اسا دِ کِیروش (Eça de Queiroz) است:\n\n«Ficara sentada à mesa a ler o Diário de Notícias, no seu roupão de manhã de fazenda preta, bordado a sutache, com largos botões de madrepérola; o cabelo louro um pouco desmanchado, com um tom seco do calor do travesseiro, enrolava-se, torcido no alto da cabeça pequenina, de perfil bonito; a sua pele tinha a brancura tenra e láctea das louras; com o cotovelo encostado à mesa acariciava a orelha, e, no movimento lento e suave dos seus dedos, dois anéis de rubis miudinhos davam cintilações escarlates.»',
      examples: [
        {
          pt: 'a sua pele tinha a brancura tenra e láctea das louras',
          fa: 'پوستِ او سفیدیِ لطیف و شیری‌رنگِ بلوندها را داشت',
          pron: 'آ سوا پِلی تینیا آ برانکورا تِنرا اِ لاکتِئا داس لوراس',
          note: 'زبان ذهنی و احساسی؛ نشانهٔ توصیف subjetiva.',
        },
        {
          pt: 'dois anéis de rubis miudinhos davam cintilações escarlates',
          fa: 'دو انگشترِ یاقوتِ ریز، درخشش‌هایی سرخ‌فام می‌تاباندند',
          pron: 'دویس آنِیس جی هوبیس میودینیوس',
        },
      ],
    },
    {
      headingFa: '۹. نمونهٔ متن توصیفی ـ توصیف عینی (Descrição Objetiva)',
      bodyFa:
        'در توصیف عینی، نویسنده فقط واقعیت‌ها و داده‌های قابل‌مشاهده را بدون احساس شخصی گزارش می‌کند (مثلاً در گزارش خبری یا پلیسی). نمونه:\n\n«A vítima, Solange dos Santos (22 anos), moradora da cidade de Marília, era magra, alta (1,75), cabelos pretos e curtos; nariz fino e rosto ligeiramente alongado.»',
      examples: [
        {
          pt: 'A vítima era magra, alta (1,75), cabelos pretos e curtos.',
          fa: 'قربانی لاغر، بلندقد (۱٬۷۵)، با موهای مشکی و کوتاه بود.',
          pron: 'آ ویتیما اِرا ماگرا، آلتا، کابِلوس پرِتوس اِ کورتوس',
          note: 'داده‌های عینی و قابل‌اندازه‌گیری؛ نشانهٔ توصیف objetiva.',
        },
        {
          pt: 'nariz fino e rosto ligeiramente alongado',
          fa: 'بینیِ باریک و صورتی اندکی کشیده',
          pron: 'ناریز فینو اِ هوستو لیژِیرامِنتی آلونگادو',
        },
      ],
    },
    {
      headingFa: '۱۰. متن روایی ـ گفتار مستقیم (Discurso Direto)',
      bodyFa:
        'در گفتار مستقیم، راوی دقیقاً حرف‌ها و کلمات شخصیت‌ها را بازتولید می‌کند. معمولاً با دو نقطه (:) و خط تیرهٔ گفت‌وگو (–) نشان داده می‌شود. نمونه:\n\n«O professor chegou e perguntou:\n– Vocês fizeram a atividade que eu pedi?\nToda a turma respondeu:\n– Sim, professor!\nEntão, o professor disse:\n– Isso é ótimo, então podemos começar a correção!»',
      examples: [
        {
          pt: '– Vocês fizeram a atividade que eu pedi?',
          fa: '— شما تمرینی را که خواستم انجام دادید؟',
          pron: 'وُسِس فیزِرام آ آتیویدادی کی اِئو پِدی؟',
          note: 'نقلِ عینِ گفتهٔ شخصیت با خط تیره.',
        },
        {
          pt: '– Isso é ótimo, então podemos começar a correção!',
          fa: '— این عالی است، پس می‌توانیم تصحیح را شروع کنیم!',
          pron: 'ایسو اِ اُتیمو، اِنتائو پودِموس کومِسار آ کوهِسائو',
        },
      ],
    },
    {
      headingFa: '۱۱. متن روایی ـ گفتار غیرمستقیم (Discurso Indireto)',
      bodyFa:
        'گفتار غیرمستقیم گفته‌ها را به‌شکل غیرمستقیم بازگو می‌کند؛ یعنی راوی آن‌ها را با واژه‌های خودش و بدون تغییر معنای پیام توصیف می‌کند. در این حالت خط تیره حذف می‌شود و از حرف ربط «que» و افعالِ گزارشی استفاده می‌شود. همان صحنهٔ بخش پیش، این بار به‌صورت غیرمستقیم:\n\n«Quando o professor chegou e perguntou se os alunos haviam feito a atividade que ele tinha pedido, toda a turma respondeu que sim. Então, o professor disse que isso era ótimo e que, então, poderiam começar a correção.»',
      examples: [
        {
          pt: '...perguntou se os alunos haviam feito a atividade...',
          fa: '...پرسید که آیا دانش‌آموزان تمرین را انجام داده‌اند...',
          pron: 'پِرگونتو سی اوس آلونوس آویام فِیتو',
          note: 'به‌جای پرسش مستقیم، از «se» و تغییر زمان فعل استفاده شده.',
        },
        {
          pt: 'o professor disse que isso era ótimo',
          fa: 'معلم گفت که این عالی است',
          pron: 'او پروفِسور دیسی کی ایسو اِرا اُتیمو',
          note: 'مقایسه کنید با گفتار مستقیم «disse: – Isso é ótimo»؛ فعل é به era تبدیل شده.',
        },
      ],
    },
    {
      headingFa: '۱۲. نمونه‌های موضوعیِ انشا (Exemplos)',
      bodyFa:
        'در جزوه دو نمونهٔ دست‌نویسِ دانش‌آموزی برای تمرین آورده شده تا ساختار و لحن یک انشای واقعی را ببینید:\n\nExemplo 1 — Tema: Pandemia (نمونهٔ ۱ — موضوع: همه‌گیری/پاندمی، برای مثال کووید-۱۹: علائم مانند تب و سردرد، راه‌های پیشگیری و اهمیت واکسیناسیون).\n\nExemplo 2 — Tema: Meio Ambiente (نمونهٔ ۲ — موضوع: محیط‌زیست: مراقبت از سیّاره، درخت‌کاری، پرهیز از ریختن زباله).\n\nاین دو نمونه نشان می‌دهند که یک انشای خوب باید موضوع را در مقدمه معرفی کند، در تنه دلیل و جزئیات بیاورد و در نتیجه‌گیری جمع‌بندی و توصیه ارائه دهد.',
      examples: [
        {
          pt: 'Tema: Pandemia (Covid-19)',
          fa: 'موضوع: همه‌گیری (کووید-۱۹)',
          pron: 'تِما: پاندِمیا',
          note: 'نمونهٔ ۱ دربارهٔ ویروس، علائم و واکسن.',
        },
        {
          pt: 'Tema: Meio Ambiente',
          fa: 'موضوع: محیط‌زیست',
          pron: 'تِما: مِیو آمبیِنتی',
          note: 'نمونهٔ ۲ دربارهٔ مراقبت از سیّاره و زباله.',
        },
      ],
    },
    {
      headingFa: '۱۳. قواعد آزمون نگارش (Para a Nossa Avaliação)',
      bodyFa:
        'برای ارزیابی نگارش، این قواعد را رعایت کنید:\n\n۱) انشای شما باید ۲۰ خط داشته باشد (Sua redação precisa ter 20 linhas).\n۲) موضوع انشا را ما به شما می‌دهیم (Nós daremos o tema da redação).\n۳) یک نوع انشا را انتخاب کنید (Escolha um tipo de redação) — استدلالی، توصیفی یا روایی.\n۴) با خودکار بنویسید (Escreva à caneta).\n۵) پیش از آن یک پیش‌نویس تهیه کنید (Faça um rascunho antes).',
      examples: [
        {
          pt: 'Sua redação precisa ter 20 linhas.',
          fa: 'انشای شما باید ۲۰ خط داشته باشد.',
          pron: 'سوا هِداسائو پرِسیزا تِر وینتی لینیاس',
        },
        {
          pt: 'Escreva à caneta. Faça um rascunho antes.',
          fa: 'با خودکار بنویسید. پیش از آن پیش‌نویس تهیه کنید.',
          pron: 'اِسکرِوا آ کانِتا. فاسا اوم هاسکونیو آنتِس',
          note: 'caneta = خودکار؛ rascunho = پیش‌نویس/چرک‌نویس.',
        },
      ],
    },
    {
      headingFa: '۱۴. آزمون آنلاین ـ تحویل اجباری (Avaliação Online)',
      bodyFa:
        'ارزیابی آنلاین، تحویل آن اجباری است (entrega obrigatória). یک انشا (Redação) با این موضوع بنویسید:\n\n«DIFERENÇAS E SEMELHANÇAS ENTRE O SEU PAÍS E O BRASIL»\n(تفاوت‌ها و شباهت‌ها میان کشورِ شما و برزیل)\n\nیک نوع متن را انتخاب کنید و ساختار سه‌بخشی (مقدمه، تنه، نتیجه‌گیری) و قواعد بخش پیش را رعایت کنید.',
      examples: [
        {
          pt: 'Diferenças e semelhanças entre o seu país e o Brasil.',
          fa: 'تفاوت‌ها و شباهت‌ها میان کشورِ شما و برزیل.',
          pron: 'دیفِرِنساس اِ سِمِلیانساس اِنتری او سِئو پاییس اِ او برازیل',
          note: 'diferenças = تفاوت‌ها؛ semelhanças = شباهت‌ها.',
        },
        {
          pt: 'entrega obrigatória',
          fa: 'تحویل اجباری',
          pron: 'اِنترِگا اوبریگاتوریا',
        },
      ],
    },
  ],
  keyPointsFa: [
    'سه نوع متن: Dissertativo (نظر)، Descritivo (جزئیات)، Narrativo (داستان).',
    'ساختار هر انشا سه بخش دارد: Introdução (مقدمه)، Desenvolvimento (تنه)، Conclusão (نتیجه‌گیری).',
    'متن استدلالی باید نظرمحور باشد و coerência (انسجام) مهم‌ترین ویژگی آن است.',
    'Dissertativo دو گونه دارد: argumentativo (استدلال‌محور) و expositivo (تشریحیِ بی‌طرف).',
    'توصیف دو گونه دارد: subjetiva (ذهنی/احساسی) و objetiva (عینی/واقعی).',
    'گفتار مستقیم عینِ کلمات شخصیت را با خط تیره می‌آورد؛ گفتار غیرمستقیم با «que» و تغییر زمان فعل بازگو می‌کند.',
    'در آزمون: ۲۰ خط، انتخاب یک نوع متن، نوشتن با خودکار، تهیهٔ پیش‌نویس؛ موضوع آنلاین: تفاوت‌ها و شباهت‌های کشور شما و برزیل.',
  ],
  quiz: [
    {
      id: 'course-aula-5-q1',
      type: 'mcq',
      prompt: 'Qual tipo de texto serve para dar a sua opinião?',
      promptFa: 'کدام نوع متن برای بیان نظر شما به‌کار می‌رود؟',
      options: ['Dissertativo', 'Descritivo', 'Narrativo', 'Poético'],
      answer: 'Dissertativo',
      explanationFa: 'متن Dissertativo (استدلالی) برای بیان و دفاع از نظر نویسنده است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q2',
      type: 'mcq',
      prompt: 'Qual tipo de texto conta uma história ou narra um fato?',
      promptFa: 'کدام نوع متن یک داستان تعریف می‌کند یا واقعه‌ای را نقل می‌کند؟',
      options: ['Narrativo', 'Dissertativo', 'Descritivo', 'Argumentativo'],
      answer: 'Narrativo',
      explanationFa: 'در متن Narrativo (روایی) یک داستان تعریف یا یک فاکت نقل می‌شود.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q3',
      type: 'mcq',
      prompt: 'Descrever é...',
      promptFa: 'توصیف کردن یعنی...',
      options: [
        'contar algo de forma detalhada',
        'dar a sua opinião',
        'defender um argumento',
        'narrar um fato do passado',
      ],
      answer: 'contar algo de forma detalhada',
      explanationFa: 'توصیف یعنی تعریف چیزی به‌شکل مفصل با جزئیات، ویژگی‌ها و احساس‌ها.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q4',
      type: 'order-words',
      prompt: 'Ordene as três partes de uma redação:',
      promptFa: 'سه بخش یک انشا را به ترتیب درست بچینید.',
      options: ['Conclusão', 'Introdução', 'Desenvolvimento'],
      answer: 'Introdução / Desenvolvimento / Conclusão',
      explanationFa: 'ترتیب درست: مقدمه، سپس تنه (گسترش)، و در پایان نتیجه‌گیری.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q5',
      type: 'mcq',
      prompt: 'Em que parte da redação se faz a delimitação do tema?',
      promptFa: 'تعیین حدود موضوع در کدام بخش انشا انجام می‌شود؟',
      options: ['Introdução', 'Desenvolvimento', 'Conclusão', 'Título'],
      answer: 'Introdução',
      explanationFa: 'Introdução (مقدمه) موضوع را معرفی و حدود آن را تعیین می‌کند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q6',
      type: 'mcq',
      prompt: 'Onde se apresenta o desfecho para os argumentos?',
      promptFa: 'سرانجام و جمع‌بندیِ استدلال‌ها در کدام بخش ارائه می‌شود؟',
      options: ['Conclusão', 'Introdução', 'Desenvolvimento', 'Rascunho'],
      answer: 'Conclusão',
      explanationFa: 'Conclusão (نتیجه‌گیری) سرانجام استدلال‌های ارائه‌شده را می‌آورد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q7',
      type: 'mcq',
      prompt: 'Qual é um dos fatores mais importantes no texto dissertativo?',
      promptFa: 'کدام مورد یکی از مهم‌ترین عوامل در متن استدلالی است؟',
      options: ['A coerência', 'O número de páginas', 'A cor da caneta', 'O tamanho da letra'],
      answer: 'A coerência',
      explanationFa: 'coerência (انسجام و پیوستگی منطقی) مهم‌ترین عوامل متن استدلالی است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q8',
      type: 'mcq',
      prompt: 'O texto sobre "aquecimento global" que só explica o assunto é do tipo:',
      promptFa: 'متن دربارهٔ «گرمایش جهانی» که فقط موضوع را توضیح می‌دهد از چه نوعی است؟',
      options: [
        'Dissertativo expositivo',
        'Dissertativo argumentativo',
        'Descritivo subjetivo',
        'Narrativo',
      ],
      answer: 'Dissertativo expositivo',
      explanationFa: 'متن تشریحی (expositivo) موضوع را بی‌طرفانه و بر پایهٔ اطلاعات توضیح می‌دهد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q9',
      type: 'mcq',
      prompt: 'A descrição "era magra, alta (1,75), cabelos pretos e curtos" é uma descrição:',
      promptFa: 'توصیف «لاغر، بلندقد (۱٬۷۵)، موهای مشکی و کوتاه» چه نوع توصیفی است؟',
      options: ['Objetiva', 'Subjetiva', 'Narrativa', 'Argumentativa'],
      answer: 'Objetiva',
      explanationFa: 'داده‌های عینی و قابل‌اندازه‌گیری بدون احساس شخصی → توصیف objetiva.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q10',
      type: 'mcq',
      prompt: 'No discurso direto, o narrador...',
      promptFa: 'در گفتار مستقیم، راوی...',
      options: [
        'reproduz exatamente as falas das personagens',
        'usa as próprias palavras para descrever a fala',
        'não usa travessão',
        'esconde as falas',
      ],
      answer: 'reproduz exatamente as falas das personagens',
      explanationFa: 'گفتار مستقیم عینِ کلمات شخصیت‌ها را (معمولاً با خط تیره) بازتولید می‌کند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q11',
      type: 'mcq',
      prompt: 'Qual frase está no discurso indireto?',
      promptFa: 'کدام جمله در گفتار غیرمستقیم است؟',
      options: [
        'O professor disse que isso era ótimo.',
        '– Isso é ótimo!',
        'O professor perguntou: – Vocês fizeram a atividade?',
        '– Sim, professor!',
      ],
      answer: 'O professor disse que isso era ótimo.',
      explanationFa: 'استفاده از «que» و فعلِ گزارشی و تبدیل é به era نشانهٔ گفتار غیرمستقیم است.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-5-q12',
      type: 'translate-pt-fa',
      prompt: 'Traduza para o persa: "Seja um cidadão consciente! Não jogue lixo nas ruas!"',
      promptFa: 'این جملهٔ پایانیِ متن استدلالی را به فارسی ترجمه کنید.',
      options: [],
      answer: 'یک شهروند آگاه باش! زباله در خیابان نریز!',
      explanationFa: 'این جمله نمونه‌ای از نتیجه‌گیریِ دعوت‌کننده به عمل در متن استدلال‌محور است.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q13',
      type: 'fill-blank',
      prompt: 'Sua redação precisa ter ____ linhas.',
      promptFa: 'بر اساس قواعد آزمون، جای خالی را با عدد درست پر کنید.',
      options: [],
      answer: '20',
      explanationFa: 'طبق قاعدهٔ ارزیابی، انشا باید ۲۰ خط داشته باشد.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q14',
      type: 'mcq',
      prompt: 'Segundo as regras da avaliação, você deve escrever...',
      promptFa: 'طبق قواعد آزمون، باید با چه چیزی بنویسید؟',
      options: ['à caneta', 'a lápis', 'no computador', 'a giz'],
      answer: 'à caneta',
      explanationFa: 'قاعده می‌گوید «Escreva à caneta» یعنی با خودکار بنویسید (و پیش‌نویس تهیه کنید).',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-5-q15',
      type: 'translate-fa-pt',
      prompt: '«موضوع انشای آنلاین: تفاوت‌ها و شباهت‌ها میان کشور شما و برزیل.» را به پرتغالی بنویسید.',
      promptFa: 'موضوع آزمون آنلاین را به پرتغالی برزیلی بنویسید.',
      options: [],
      answer: 'Diferenças e semelhanças entre o seu país e o Brasil.',
      explanationFa: 'diferenças = تفاوت‌ها، semelhanças = شباهت‌ها؛ این موضوعِ تحویلِ اجباریِ آزمون آنلاین است.',
      cefr: 'A2',
      skill: 'writing',
    },
    {
      id: 'course-aula-5-q16',
      type: 'mcq',
      prompt: 'O que deve ser feito ANTES de escrever a redação final?',
      promptFa: 'پیش از نوشتن انشای نهایی چه کاری باید انجام شود؟',
      options: ['um rascunho', 'uma conclusão', 'um título longo', 'uma descrição objetiva'],
      answer: 'um rascunho',
      explanationFa: 'قاعده می‌گوید «Faça um rascunho antes» یعنی ابتدا یک پیش‌نویس تهیه کنید.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 25,
  sourceNoteFa: 'برگرفته از جزوهٔ آماده‌سازی فدرال — Aula 5 (کامل).',
};
