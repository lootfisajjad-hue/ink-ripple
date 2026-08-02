import type { CourseLesson } from '@/domain/content/schema';

export const portas2: CourseLesson = {
  id: 'course-portas-2',
  order: 2,
  aula: 'Unidade 2',
  track: 'portas',
  pagesKey: 'portas2',
  titleFa: 'رسیدم! — الفبا، سلام و احوال‌پرسی، خداحافظی، ادب و اعداد',
  titlePt: 'Cheguei! — Alfabeto, Saudações, Despedidas, Polidez, Numerais',
  cefr: 'A1',
  summaryFa:
    'عنوان این فصل «Cheguei!» یعنی «رسیدم!» است؛ خوش‌آمدگویی به تازه‌واردها. اینجا الفبای پرتغالی را با یک روش زیبای برزیلی (هر حرف با نام یک شخصیت یا نماد فرهنگی) یاد می‌گیرید، اسم خود را هجّی (spell) می‌کنید، سلام و احوال‌پرسی و خداحافظی و عبارت‌های ادب را می‌آموزید و شمردن اعداد از ۱ تا یک میلیون را تمرین می‌کنید.',
  objectivesFa: [
    'الفبای پرتغالی و نام حرف‌ها را بشناسید و اسمتان را هجّی کنید.',
    'سلام و احوال‌پرسی رسمی و غیررسمی و خداحافظی را به‌کار ببرید.',
    'عبارت‌های ادب (تشکر، خواهش، عذرخواهی) را درست استفاده کنید.',
    'اعداد را از ۱ تا ۱٬۰۰۰٬۰۰۰ بخوانید و بنویسید.',
  ],
  sections: [
    {
      headingFa: '۱. الفبای فرهنگی برزیل (O alfabeto cultural)',
      bodyFa:
        'پرتغالی ۲۶ حرف دارد: ۲۱ همخوان (consoante) و ۵ واکه/مصوت (vogal). کتاب هر حرف را با یک نماد فرهنگی برزیل معرفی می‌کند (مثلاً A مثل Ayrton Senna). نکتهٔ مهم: «نام حرف» با «صدای حرف» فرق دارد؛ اینجا نام حرف‌ها را یاد می‌گیرید تا بتوانید اسمتان را هجّی کنید.',
      examples: [
        {
          pt: 'A — a',
          fa: 'حرف A، نامش «آ»',
          pron: 'آ',
          note: 'مثل Ayrton Senna',
        },
        {
          pt: 'B — bê',
          fa: 'حرف B، نامش «بِ»',
          pron: 'بِ',
          note: 'مثل Berimbau',
        },
        {
          pt: 'C — cê',
          fa: 'حرف C، نامش «سِ»',
          pron: 'سِ',
          note: 'مثل Carnaval',
        },
        {
          pt: 'H — agá',
          fa: 'حرف H، نامش «آگا»',
          pron: 'آگا',
          note: 'در پرتغالی معمولاً خوانده نمی‌شود',
        },
        {
          pt: 'J — jota',
          fa: 'حرف J، نامش «ژُتا»',
          pron: 'ژُتا',
          note: 'صدایش مثل «ژ» فارسی',
        },
        {
          pt: 'R — erre',
          fa: 'حرف R، نامش «اِ‌ری»',
          pron: 'اِری',
          note: 'اول کلمه صدای «ه» می‌دهد',
        },
        { pt: 'W — dábliu', fa: 'حرف W، نامش «دابلیو»', pron: 'دابلیو' },
        { pt: 'Y — ípsilon', fa: 'حرف Y، نامش «ایپسیلون»', pron: 'ایپسیلون' },
      ],
    },
    {
      headingFa: '۲. ترکیب‌های صدایی خاص',
      bodyFa:
        'برخی صداها با ترکیب دو حرف ساخته می‌شوند و در الفبا حرف جدا ندارند. این‌ها را بشناسید چون در نوشتن خیلی پیش می‌آیند.',
      examples: [
        {
          pt: 'nh',
          fa: 'صدای «نی» نرم',
          pron: 'نی',
          note: 'مثل «senhor» = آقا',
        },
        {
          pt: 'lh',
          fa: 'صدای «لی» نرم',
          pron: 'لی',
          note: 'مثل «filho» = پسر',
        },
        { pt: 'ch', fa: 'صدای «ش»', pron: 'ش', note: 'مثل «chave» = کلید' },
        {
          pt: 'ç (cedilha)',
          fa: 'صدای «س»',
          pron: 'س',
          note: 'مثل «coração» = قلب',
        },
        {
          pt: 'rr',
          fa: 'صدای «ه/خ» قوی',
          pron: 'ه',
          note: 'مثل «carro» = ماشین',
        },
      ],
    },
    {
      headingFa: '۳. سلام و احوال‌پرسی (Saudações)',
      bodyFa:
        'دو حالت داریم: رسمی (با غریبه و در اداره) و غیررسمی (با دوستان). «Tudo bem?» هم پرسش است هم پاسخ.',
      examples: [
        { pt: 'Bom dia!', fa: 'صبح بخیر!', pron: 'بُن جیا', note: 'تا ظهر' },
        {
          pt: 'Boa tarde!',
          fa: 'بعدازظهر بخیر!',
          pron: 'بُووا تارجی',
          note: 'ظهر تا غروب',
        },
        {
          pt: 'Boa noite!',
          fa: 'شب بخیر!',
          pron: 'بُووا نُویتی',
          note: 'شب — هم هنگام رسیدن هم خداحافظی',
        },
        {
          pt: 'Oi! / Olá!',
          fa: 'سلام!',
          pron: 'اُی / اُلا',
          note: 'غیررسمی و صمیمی',
        },
        {
          pt: 'E aí? Beleza? Tudo bem?',
          fa: 'چطوری؟ خوبی؟ همه‌چی خوبه؟',
          pron: 'ای آیی؟ بِلِزا؟ تودو بِین؟',
          note: 'خودمانی',
        },
        {
          pt: 'Como vai? — Eu estou bem, obrigado.',
          fa: 'حالت چطوره؟ — خوبم، ممنون.',
          pron: 'کُمو وای؟ اِئو اِستُو بِین اوبریگادو',
        },
        {
          pt: 'Qual é o seu nome? — Meu nome é William.',
          fa: 'اسمت چیه؟ — اسمم ویلیام است.',
          pron: 'کوال اِ او سِئو نُمی؟',
        },
      ],
    },
    {
      headingFa: '۴. خداحافظی و عبارت‌های ادب',
      bodyFa:
        'برای خداحافظی و برای تشکر/خواهش/عذرخواهی این عبارت‌ها را به‌کار ببرید. یادتان باشد تشکر به جنسیتِ گوینده بستگی دارد: مرد «obrigado»، زن «obrigada».',
      examples: [
        {
          pt: 'Tchau! / Até logo! / Até mais!',
          fa: 'خداحافظ! / تا بعد!',
          pron: 'چاو / آته لُگو / آته مایس',
        },
        { pt: 'Adeus!', fa: 'بدرود! (خداحافظی طولانی‌تر)', pron: 'آدِئوس' },
        {
          pt: 'Obrigado! / Obrigada!',
          fa: 'ممنون! (مرد/زن)',
          pron: 'اوبریگادو / اوبریگادا',
        },
        {
          pt: 'De nada! / Por nada!',
          fa: 'خواهش می‌کنم!',
          pron: 'جی نادا / پور نادا',
        },
        { pt: 'Por favor!', fa: 'لطفاً!', pron: 'پور فاوُر' },
        {
          pt: 'Com licença!',
          fa: 'ببخشید! (برای رد شدن/شروع صحبت)',
          pron: 'کُن لیسِنسا',
        },
        {
          pt: 'Desculpa! / Sinto muito!',
          fa: 'معذرت! / خیلی متأسفم!',
          pron: 'جِسکولپا / سینتو مویتو',
        },
        {
          pt: 'Muito prazer! — O prazer é meu!',
          fa: 'خوشوقتم! — افتخار از من است!',
          pron: 'مویتو پرازِر',
        },
      ],
    },
    {
      headingFa: '۵. اعداد (Numerais)',
      bodyFa:
        'الگوی اعداد ساده است: بعد از بیست، عددها را با «e» (و) به هم می‌چسبانید: vinte e um (بیست‌ویک). دهگان‌ها و صدگان‌ها را حفظ کنید و بقیه را بسازید.',
      examples: [
        {
          pt: '1 um, 2 dois, 3 três, 4 quatro, 5 cinco',
          fa: 'یک، دو، سه، چهار، پنج',
          pron: 'اوم، دویس، ترِیس، کواترو، سینکو',
        },
        {
          pt: '6 seis, 7 sete, 8 oito, 9 nove, 10 dez',
          fa: 'شش تا ده',
          pron: 'سِیس، سِتی، اُیتو، نُوی، دِز',
        },
        {
          pt: '21 vinte e um, 32 trinta e dois',
          fa: 'بیست‌ویک، سی‌ودو',
          pron: 'وینتی ای اوم، ترینتا ای دویس',
          note: 'الگوی «e»',
        },
        {
          pt: '40 quarenta, 50 cinquenta, 60 sessenta',
          fa: 'چهل، پنجاه، شصت',
          pron: 'کوارِنتا، سینکوئنتا، سِسِنتا',
        },
        {
          pt: '100 cem, 200 duzentos, 500 quinhentos',
          fa: 'صد، دویست، پانصد',
          pron: 'سِن، دوزِنتوس، کینیِنتوس',
        },
        {
          pt: '1.000 mil, 1.000.000 um milhão',
          fa: 'هزار، یک میلیون',
          pron: 'میل، اوم میلیائو',
        },
      ],
    },
  ],
  keyPointsFa: [
    'الفبا ۲۶ حرف دارد؛ «نام حرف» با «صدای حرف» فرق می‌کند.',
    'H معمولاً تلفظ نمی‌شود؛ J صدای «ژ» و ch صدای «ش» دارد.',
    'تشکر به جنسیت گوینده بستگی دارد: مرد obrigado، زن obrigada.',
    'بعد از بیست، اعداد را با «e» می‌سازید: vinte e um.',
  ],
  quiz: [
    {
      id: 'q-portas2-1',
      type: 'mcq',
      prompt: 'یک خانم می‌خواهد تشکر کند. کدام درست است؟',
      options: ['Obrigado', 'Obrigada', 'De nada', 'Por favor'],
      answer: 'Obrigada',
      explanationFa:
        'تشکر به جنسیت گوینده بستگی دارد؛ خانم‌ها «obrigada» می‌گویند.',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-portas2-2',
      type: 'mcq',
      prompt: '«vinte e um» یعنی چند؟',
      options: ['۱۲', '۲۱', '۲۰', '۱۱'],
      answer: '۲۱',
      explanationFa: 'vinte (۲۰) + e + um (۱) = ۲۱.',
      cefr: 'A1',
      skill: 'vocab',
    },
    {
      id: 'q-portas2-3',
      type: 'mcq',
      prompt: 'برای رد شدن از میان جمعیت یا شروع مؤدبانهٔ صحبت چه می‌گویید؟',
      options: ['Com licença!', 'Tchau!', 'Boa noite!', 'De nada!'],
      answer: 'Com licença!',
      explanationFa: '«Com licença» یعنی «ببخشید/اجازه بدهید».',
      cefr: 'A1',
      skill: 'speaking',
    },
    {
      id: 'q-portas2-4',
      type: 'mcq',
      prompt: 'حرف «J» در پرتغالی چه صدایی دارد؟',
      options: ['«ج» انگلیسی', '«ژ» فارسی', '«ی»', 'صدایی ندارد'],
      answer: '«ژ» فارسی',
      explanationFa: 'J در پرتغالی برزیلی صدای «ژ» می‌دهد (مثل jota).',
      cefr: 'A1',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 16,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۲ (Cheguei!). تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
