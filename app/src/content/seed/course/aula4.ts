import type { CourseLesson } from '@/domain/content/schema';

export const aula4: CourseLesson = {
  id: 'course-aula-4',
  order: 4,
  aula: 'Aula 4',
  titleFa: 'اعداد و حروف تعریف',
  titlePt: 'Numeral e Artigos',
  cefr: 'A1',
  summaryFa:
    'در این درس دو موضوع کاربردی را یاد می‌گیرید: نخست «اعداد» (numerais) — شمارشی از صفر تا بالای صد و ترتیبی (اول، دوم…) و شیوهٔ درست خواندن عددها؛ سپس «حروف تعریف» (artigos) — معرفه (o, a, os, as) و نکره (um, uma, uns, umas). مهم‌ترین چالش برای فارسی‌زبانان مطابقتِ جنسیت است: پرتغالی هر اسم را مذکر یا مؤنث می‌داند، در حالی که فارسی اصلاً جنسیت دستوری ندارد. پس تمرکز اصلی ما روی همین مطابقت جنسیت و شمار است.',
  objectivesFa: [
    'اعداد شمارشی (cardinais) از ۰ تا بالای ۱۰۰ را بشناسید و درست بخوانید.',
    'اعداد ترتیبی (ordinais) مانند primeiro/segundo/terceiro را به‌کار ببرید.',
    'حروف تعریف معرفه (o, a, os, as) و نکره (um, uma, uns, umas) را بشناسید.',
    'حرف تعریف را در جنسیت (مذکر/مؤنث) و شمار (مفرد/جمع) با اسم مطابقت دهید.',
    'تفاوت «um» به‌عنوان عدد (۱) و «um» به‌عنوان حرف نکره را تشخیص دهید.',
  ],
  sections: [
    {
      headingFa: '۱. عدد چیست؟ شمارشی و ترتیبی',
      bodyFa:
        'عدد (numeral) کلمه‌ای است که «مقدار» یا «ترتیب» را نشان می‌دهد. دو دستهٔ اصلی داریم: عدد شمارشی (cardinal) که مقدار را می‌گوید (یک، دو، سه)، و عدد ترتیبی (ordinal) که جایگاه در یک ردیف را می‌گوید (اول، دوم، سوم). نکتهٔ مهم برای فارسی‌زبان: بعضی از این اعداد در پرتغالی جنسیت و شمار دارند و باید با اسم هماهنگ شوند.',
      examples: [
        {
          pt: 'Comprei cinco caixas de chocolate.',
          fa: 'پنج جعبه شکلات خریدم.',
          pron: 'کُمپرِی سینکو کایشاس جی شوکولاتی',
          note: 'cinco عدد شمارشی است و مقدار را می‌گوید.',
        },
        {
          pt: 'Mariana está sentada na segunda fileira.',
          fa: 'ماریانا در ردیف دوم نشسته است.',
          pron: 'ماریانا اِستا سِنتادا نا سِگوندا فیلِیرا',
          note: 'segunda عدد ترتیبی مؤنث است، چون fileira (ردیف) مؤنث است.',
        },
      ],
    },
    {
      headingFa: '۲. اعداد شمارشی از ۰ تا ۲۰',
      bodyFa:
        'این اعداد پایه را حفظ کنید؛ همه‌چیز روی آن‌ها ساخته می‌شود. فقط «um» (۱) و «dois» (۲) جنسیت دارند: um/uma و dois/duas. بقیه ثابت‌اند. عدد صفر «zero» است.',
      examples: [
        {
          pt: 'zero, um, dois, três, quatro, cinco',
          fa: 'صفر، یک، دو، سه، چهار، پنج',
          pron: 'زِرو، اوم، دُیس، ترِس، کواترو، سینکو',
        },
        {
          pt: 'seis, sete, oito, nove, dez',
          fa: 'شش، هفت، هشت، نه، ده',
          pron: 'سِیس، سِتی، اُیتو، نُوی، دِس',
        },
        {
          pt: 'onze, doze, treze, quatorze, quinze',
          fa: 'یازده، دوازده، سیزده، چهارده، پانزده',
          pron: 'اُنزی، دُزی، ترِزی، کواتُرزی، کینزی',
          note: 'quatorze گاهی catorze هم نوشته می‌شود.',
        },
        {
          pt: 'dezesseis, dezessete, dezoito, dezenove, vinte',
          fa: 'شانزده، هفده، هجده، نوزده، بیست',
          pron: 'دِزِسِیس، دِزِسِتی، دِزُیتو، دِزِنُوی، وینتی',
        },
      ],
    },
    {
      headingFa: '۳. دهگان‌ها، صدگان‌ها و خواندن عددهای بزرگ',
      bodyFa:
        'دهگان‌ها: vinte (۲۰)، trinta (۳۰)، quarenta (۴۰)، cinquenta (۵۰)، sessenta (۶۰)، setenta (۷۰)، oitenta (۸۰)، noventa (۹۰)، cem (۱۰۰). برای ساختن عدد از «e» (به‌معنی «و») استفاده می‌شود: vinte e um = ۲۱. نکتهٔ املایی: بین هزارگان و صدگان فقط وقتی «e» می‌آید که عدد به «صد گِرد» ختم شود (مثل seis mil e cem)، ولی در seis mil cento e dezoito «e» نمی‌آید. صدگان‌ها (۲۰۰ به بالا) جنسیت دارند: duzentos/duzentas.',
      examples: [
        {
          pt: '52 — cinquenta e dois',
          fa: '۵۲ — پنجاه و دو',
          pron: 'سینکوئنتا ای دُیس',
        },
        {
          pt: '127 — cento e vinte e sete',
          fa: '۱۲۷ — صد و بیست و هفت',
          pron: 'سِنتو ای وینتی ای سِتی',
          note: 'دقت کنید ۱۰۰ تنها «cem» است، اما در ترکیب «cento» می‌شود.',
        },
        {
          pt: '6.100 — seis mil e cem',
          fa: '۶۱۰۰ — شش هزار و صد',
          pron: 'سِیس میل ای سِین',
          note: 'اینجا «e» می‌آید چون عدد به صدِ گِرد ختم می‌شود.',
        },
        {
          pt: '6.118 — seis mil cento e dezoito',
          fa: '۶۱۱۸ — شش هزار و صد و هجده',
          pron: 'سِیس میل سِنتو ای دِزُیتو',
          note: 'اینجا بین mil و cento «e» نمی‌آید.',
        },
      ],
    },
    {
      headingFa: '۴. جنسیت در اعداد: um/uma و duzentos/duzentas',
      bodyFa:
        'این نکته برای فارسی‌زبان تازگی دارد: در فارسی «یک» و «دویست» هرگز تغییر نمی‌کنند، اما در پرتغالی عددهای ۱، ۲ و همهٔ صدگان‌ها باید با جنسیتِ اسمِ شمرده‌شده هماهنگ شوند. اگر اسم مؤنث است شکل مؤنث عدد را به کار ببرید.',
      examples: [
        {
          pt: 'um livro / uma casa',
          fa: 'یک کتاب / یک خانه',
          pron: 'اوم لیورو / اوما کازا',
          note: 'livro مذکر است (um)، casa مؤنث است (uma).',
        },
        {
          pt: 'vinte e um alunos / vinte e uma alunas',
          fa: 'بیست و یک دانش‌آموز (پسر) / بیست و یک دانش‌آموز (دختر)',
          pron: 'وینتی ای اوم آلونوس / وینتی ای اوما آلوناس',
        },
        {
          pt: 'duzentos reais / duzentas pessoas',
          fa: 'دویست رئال / دویست نفر',
          pron: 'دوزِنتوس رِئایس / دوزِنتاس پِسواس',
          note: 'real مذکر (duzentos)، pessoa مؤنث (duzentas).',
        },
      ],
    },
    {
      headingFa: '۵. اعداد ترتیبی (primeiro, segundo…)',
      bodyFa:
        'اعداد ترتیبی جایگاه در یک ردیف را نشان می‌دهند و معمولاً به‌شکل کوتاه با نشانهٔ º نوشته می‌شوند (1º, 2º…). این اعداد هم جنسیت و هم شمار دارند: primeiro/primeira. آن‌ها را حفظ کنید چون در طبقهٔ ساختمان، رتبه و تاریخ کاربرد دارند.',
      examples: [
        {
          pt: '1º primeiro(a), 2º segundo(a), 3º terceiro(a), 4º quarto(a), 5º quinto(a)',
          fa: 'اول، دوم، سوم، چهارم، پنجم',
          pron: 'پریمِیرو، سِگوندو، تِرسِیرو، کوارتو، کینتو',
        },
        {
          pt: '10º décimo, 20º vigésimo, 100º centésimo',
          fa: 'دهم، بیستم، صدم',
          pron: 'دِسیمو، ویژِزیمو، سِنتِزیمو',
        },
        {
          pt: 'Eu cheguei em primeiro lugar na maratona.',
          fa: 'من در ماراتن اول شدم (نفر اول).',
          pron: 'اِئو شِگِی اِین پریمِیرو لوگار نا ماراتُنا',
          note: 'lugar مذکر است، پس primeiro.',
        },
        {
          pt: 'O consultório fica no décimo andar.',
          fa: 'مطب در طبقهٔ دهم است.',
          pron: 'او کُنسولتُریو فیکا نو دِسیمو آندار',
          note: 'andar (طبقه) مذکر است، پس décimo.',
        },
      ],
    },
    {
      headingFa: '۶. حروف تعریف معرفه: o, a, os, as',
      bodyFa:
        'حرف تعریف کلمه‌ای است که همراه اسم می‌آید و جنسیت و شمار آن را نشان می‌دهد. حرف تعریف معرفه برای چیزِ «مشخص و معلوم» است (مثل «the» در انگلیسی). چهار شکل دارد: o (مذکر مفرد)، os (مذکر جمع)، a (مؤنث مفرد)، as (مؤنث جمع). این بزرگ‌ترین چالش فارسی‌زبان است، چون در فارسی اصلاً چنین چیزی نداریم؛ باید جنسیت هر اسم را همراهش یاد بگیرید.',
      examples: [
        {
          pt: 'o carro / a caneta',
          fa: 'ماشین / خودکار',
          pron: 'او کارو / آ کانِتا',
          note: 'carro مذکر (o)، caneta مؤنث (a).',
        },
        {
          pt: 'os nomes / as meninas',
          fa: 'نام‌ها / دخترها',
          pron: 'اوس نُمیس / آس مِنیناس',
          note: 'حالت جمع: os برای مذکر، as برای مؤنث.',
        },
        {
          pt: 'A casa do Paulo é muito grande.',
          fa: 'خانهٔ پائولو خیلی بزرگ است.',
          pron: 'آ کازا دو پائولو اِ مویتو گرَندی',
          note: 'اغلب کلمات پایان‌یافته به -a مؤنث و پایان‌یافته به -o مذکرند، اما استثنا هم هست.',
        },
        {
          pt: 'O sol está brilhando e as nuvens estão brancas.',
          fa: 'خورشید می‌درخشد و ابرها سفیدند.',
          pron: 'او سُل اِستا بریلیاندو ای آس نوونس اِستائو برَنکاس',
        },
      ],
    },
    {
      headingFa: '۷. حروف تعریف نکره: um, uma, uns, umas',
      bodyFa:
        'حرف تعریف نکره برای چیزِ «نامشخص و کلی» است (مثل «a/an» در انگلیسی). چهار شکل دارد: um (مذکر مفرد)، uns (مذکر جمع)، uma (مؤنث مفرد)، umas (مؤنث جمع). این‌ها هم باید با جنسیت و شمار اسم هماهنگ شوند. توجه: um/uma هم می‌توانند عدد «۱» باشند و هم حرف نکره؛ در بخش بعد تفاوت را می‌بینیم.',
      examples: [
        {
          pt: 'um nome / uma caneta',
          fa: 'یک نام / یک خودکار',
          pron: 'اوم نُمی / اوما کانِتا',
        },
        {
          pt: 'uns amigos / umas canetas',
          fa: 'چند دوست / چند خودکار',
          pron: 'اونس آمیگوس / اوماس کانِتاس',
          note: 'شکل جمع نکره یعنی «چندتا، یک‌سری»؛ uns مذکر، umas مؤنث.',
        },
        {
          pt: 'Um vizinho ganhou a loteria.',
          fa: 'یک همسایه (نامشخص) در لاتاری برنده شد.',
          pron: 'اوم ویزینیو گانیُ آ لوتِریا',
        },
        {
          pt: 'Comprei uns remédios na farmácia.',
          fa: 'چند دارو از داروخانه خریدم.',
          pron: 'کُمپرِی اونس رِمِجیوس نا فارماسیا',
        },
      ],
    },
    {
      headingFa: '۸. um: عدد یا حرف نکره؟ و ادغام حرف تعریف با حرف اضافه',
      bodyFa:
        'دو نکتهٔ پایانی. اول: «um» وقتی «عدد» است که مقدار دقیق را بگوید (جمعش dois می‌شود)، و وقتی «حرف نکره» است که به چیزِ نامشخص اشاره کند (جمعش uns می‌شود). دوم: حرف تعریف اغلب با حرف اضافه ادغام می‌شود و شکل کوتاه می‌سازد: de + o = do، de + a = da، em + o = no، em + a = na. این ادغام‌ها را در Aula 14 مفصل کار می‌کنیم؛ فعلاً فقط آن‌ها را بشناسید.',
      examples: [
        {
          pt: 'Apenas um garoto compareceu. (عدد ۱)',
          fa: 'فقط یک پسر حاضر شد. (تعداد دقیق)',
          pron: 'آپِناس اوم گاروتو کُمپارِسِئو',
          note: 'اینجا um یعنی «۱ نفر، نه بیشتر» → عدد.',
        },
        {
          pt: 'Um garoto estava no pátio. (حرف نکره)',
          fa: 'یک پسری (نامشخص) در حیاط بود.',
          pron: 'اوم گاروتو اِستاوا نو پاتیو',
          note: 'اینجا um یعنی «پسری» نامشخص → حرف نکره.',
        },
        {
          pt: 'A casa do Paulo / A secretária da escola',
          fa: 'خانهٔ پائولو / منشیِ مدرسه',
          pron: 'آ کازا دو پائولو / آ سِکرِتاریا دا اِسکولا',
          note: 'do = de + o، da = de + a.',
        },
        {
          pt: 'Eu moro no Brasil, na cidade de São Paulo.',
          fa: 'من در برزیل، در شهر سائوپائولو، زندگی می‌کنم.',
          pron: 'اِئو مُرو نو برازیل، نا سیدادی جی سائو پائولو',
          note: 'no = em + o، na = em + a. جزئیات در Aula 14.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'اعداد شمارشی مقدار را می‌گویند؛ فقط um/uma و dois/duas جنسیت دارند و صدگان‌ها (duzentos/duzentas…).',
    'در خواندن عدد از «e» استفاده کن؛ بین هزار و صد فقط وقتی به صدِ گِرد ختم شود (seis mil e cem).',
    'اعداد ترتیبی جنسیت و شمار دارند: primeiro/primeira، décimo andar.',
    'حرف معرفه (o, a, os, as) برای چیزِ مشخص؛ حرف نکره (um, uma, uns, umas) برای چیزِ نامشخص — همیشه با جنسیت و شمار اسم هماهنگ.',
    'چون فارسی جنسیت دستوری ندارد، جنسیت هر اسم را همراه خودش حفظ کن (o carro، a casa).',
    'ادغام حرف تعریف با حرف اضافه: do/da (de+o/a)، no/na (em+o/a) — جزئیات در Aula 14.',
  ],
  quiz: [
    {
      id: 'course-aula-4-q1',
      type: 'mcq',
      prompt: 'Complete: ___ casa é grande.',
      promptFa: 'کدام حرف تعریف معرفه درست است؟ توجه: casa مؤنث مفرد است.',
      options: ['o', 'a', 'os', 'as'],
      answer: 'a',
      explanationFa:
        'casa اسمِ مؤنث مفرد است، پس حرف تعریف معرفهٔ مؤنث مفرد یعنی «a» می‌آید: «A casa é grande».',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-4-q2',
      type: 'fill-blank',
      prompt: 'Complete com o artigo indefinido: Comprei ___ carro novo.',
      promptFa: 'با حرف تعریف نکرهٔ درست کامل کنید. carro مذکر مفرد است.',
      options: [],
      answer: 'um',
      explanationFa:
        'carro مذکر مفرد است و «یک ماشینِ نامشخص» موردنظر است، پس حرف نکرهٔ مذکر مفرد «um»: «Comprei um carro novo».',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-4-q3',
      type: 'mcq',
      prompt: 'Como se lê o número 127?',
      promptFa: 'عدد ۱۲۷ چطور خوانده می‌شود؟',
      options: [
        'cento e vinte e sete',
        'cem e vinte sete',
        'cento vinte sete',
        'cem vinte e sete',
      ],
      answer: 'cento e vinte e sete',
      explanationFa:
        '۱۰۰ در ترکیب «cento» می‌شود (نه cem) و با «e» به بقیهٔ اجزا وصل می‌شود: cento e vinte e sete.',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-4-q4',
      type: 'fill-blank',
      prompt: 'Complete: O escritório fica no ___ andar. (6º)',
      promptFa: 'عدد ترتیبی ۶ام را بنویسید. andar (طبقه) مذکر است.',
      options: [],
      answer: 'sexto',
      explanationFa:
        'عدد ترتیبی ۶ام «sexto» است و چون andar مذکر است شکل مذکر می‌آید: «no sexto andar».',
      cefr: 'A1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-4-q5',
      type: 'mcq',
      prompt: 'Complete: Ganhamos ___ bicicletas novas. [plural feminino]',
      promptFa: 'کدام حرف تعریف معرفه درست است؟ bicicletas مؤنث جمع است.',
      options: ['o', 'a', 'os', 'as'],
      answer: 'as',
      explanationFa:
        'bicicleta مؤنث است و اینجا جمع (bicicletas)، پس حرف تعریف معرفهٔ مؤنث جمع «as» می‌آید: «as bicicletas novas».',
      cefr: 'A1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 14,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 4.',
};
