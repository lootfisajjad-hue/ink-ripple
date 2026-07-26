import type { CourseLesson } from '@/domain/content/schema';

export const aula12: CourseLesson = {
  id: 'course-aula-12',
  order: 12,
  aula: 'Aula 12',
  titleFa: 'مطابقت اسمی و فعلی',
  titlePt: 'Concordância Nominal e Verbal',
  cefr: 'B1',
  summaryFa:
    'در پرتغالی کلمه‌ها باید با هم «هماهنگ» شوند. در مطابقت اسمی (concordância nominal) صفت و حرف تعریف باید در جنس (مذکر/مؤنث) و شمار (مفرد/جمع) با اسم هماهنگ باشند. در مطابقت فعلی (concordância verbal) فعل باید در شخص و شمار با فاعل هماهنگ باشد. این درس هر دو را با نکته‌های ویژه و اشتباه‌های رایج فارسی‌زبانان توضیح می‌دهد؛ چون در فارسی صفت‌ها اصلاً برای جنس و شمار تغییر نمی‌کنند، این بخش برای ما سخت است.',
  objectivesFa: [
    'قاعدهٔ مطابقت صفت و حرف تعریف با اسم را در جنس و شمار به‌کار ببرید.',
    'حالت‌های ویژه مانند muito، anexo، meio و só را بشناسید.',
    'فعل را به‌درستی با فاعل در شخص و شمار هماهنگ کنید.',
    'موارد دشوار مانند «a gente»، فاعلِ دور از فعل و فاعل جمع را مدیریت کنید.',
    'اشتباه‌های رایجِ ناشی از تفاوت با زبان فارسی را تشخیص دهید و اصلاح کنید.',
  ],
  sections: [
    {
      headingFa: '۱. مطابقت اسمی چیست؟',
      bodyFa:
        'در پرتغالی، حرف تعریف (o, a, os, as) و صفت (adjetivo) باید از نظر جنس (مذکر یا مؤنث) و شمار (مفرد یا جمع) با اسمی که توصیف می‌کنند هماهنگ باشند. نکتهٔ کلیدی برای فارسی‌زبانان: در فارسی می‌گوییم «پسرِ بلند» و «دخترِ بلند» و «پسرهای بلند» و صفت هیچ تغییری نمی‌کند؛ اما در پرتغالی خودِ صفت هم عوض می‌شود.',
      examples: [
        {
          pt: 'o menino alto',
          fa: 'پسرِ قدبلند',
          pron: 'او مِنینو آلتو',
          note: 'مذکر مفرد: هم حرف تعریف (o) و هم صفت (alto) مذکرِ مفردند.',
        },
        {
          pt: 'a menina alta',
          fa: 'دخترِ قدبلند',
          pron: 'آ مِنینا آلتا',
          note: 'مؤنث مفرد: پایانهٔ صفت از -o به -a تغییر کرد.',
        },
        {
          pt: 'os meninos altos',
          fa: 'پسرهای قدبلند',
          pron: 'اوس مِنینوس آلتوس',
          note: 'مذکر جمع: به همهٔ اجزا -s اضافه شد.',
        },
        {
          pt: 'as meninas altas',
          fa: 'دخترهای قدبلند',
          pron: 'آس مِنیناس آلتاس',
          note: 'مؤنث جمع: هم مؤنث (-a) و هم جمع (-s).',
        },
      ],
    },
    {
      headingFa: '۲. صفت با چند اسم',
      bodyFa:
        'وقتی یک صفت بعد از چند اسم بیاید، معمولاً به شکل جمع می‌آید؛ و اگر اسم‌ها جنس متفاوت داشته باشند، صفت مذکرِ جمع می‌شود (مذکر بر مؤنث «غلبه» می‌کند). اگر صفت پیش از اسم‌ها بیاید، اغلب فقط با نزدیک‌ترین اسم هماهنگ می‌شود.',
      examples: [
        {
          pt: 'Comprei abacate e melão maduros.',
          fa: 'آووکادو و خربزهٔ رسیده خریدم.',
          pron: 'کُمپری آباکاتی ای مِلائو مادوروس',
          note: 'صفت maduros بعد از دو اسم مذکر آمده، پس جمع است.',
        },
        {
          pt: 'Ele só usa roupa e carro novos.',
          fa: 'او فقط لباس و ماشینِ نو استفاده می‌کند.',
          pron: 'اِلی سُ اوزا هُپا ای کاهو نُووس',
          note: 'roupa مؤنث و carro مذکر است؛ چون جنس‌ها فرق دارند، صفت مذکرِ جمع (novos) می‌شود.',
        },
        {
          pt: 'Os dois meninos estudiosos leram muitas revistas científicas.',
          fa: 'آن دو پسرِ کوشا مجله‌های علمی زیادی خواندند.',
          pron: 'اوس دُیس مِنینوس اِستودیوزوس لِرام مویتاس هِویستاس سیِنتیفیکاس',
          note: 'همهٔ صفت‌ها با اسم خودشان در جنس و شمار هماهنگ‌اند.',
        },
      ],
    },
    {
      headingFa: '۳. حالت ویژه: MUITO (ضمیر یا قید؟)',
      bodyFa:
        'کلمهٔ muito دو کاربرد دارد. اگر به معنای «مقدار/تعداد» باشد و اسم را همراهی کند، ضمیر است و باید هماهنگ شود (muito, muita, muitos, muitas). اما اگر به معنای «شدت» باشد و صفت یا قید دیگری را تشدید کند (مثل «خیلی»)، قید است و هرگز تغییر نمی‌کند.',
      examples: [
        {
          pt: 'Eu tenho muitos amigos estrangeiros.',
          fa: 'من دوستان خارجیِ زیادی دارم.',
          pron: 'اِئو تِنیو مویتوس آمیگوس اِسترانژِیروس',
          note: 'اینجا muitos = مقدار، پس با amigos (مذکر جمع) هماهنگ شد.',
        },
        {
          pt: 'Eu tenho muita saúde.',
          fa: 'من سلامتیِ زیادی دارم.',
          pron: 'اِئو تِنیو مویتا سائوجی',
          note: 'saúde مؤنث مفرد است، پس muita.',
        },
        {
          pt: 'Minhas filhas são muito bonitas.',
          fa: 'دخترهای من خیلی زیبا هستند.',
          pron: 'مینیاس فیلیاس سائو مویتو بونیتاس',
          note: 'اینجا muito = شدت («خیلی») و صفت bonitas را تشدید می‌کند؛ پس ثابت می‌ماند (نه muitos).',
        },
      ],
    },
    {
      headingFa: '۴. حالت ویژه: ANEXO، MEIO، SÓ',
      bodyFa:
        'چند کلمه هستند که در نقش صفت باید هماهنگ شوند اما در نقش قید تغییر نمی‌کنند. anexo (ضمیمه) وقتی صفت است با اسم هماهنگ می‌شود، ولی در عبارت ثابت «em anexo» هرگز تغییر نمی‌کند. meio به معنای «نیمه/نصف» صفت است و هماهنگ می‌شود، اما به معنای «کمی/تا حدی» قید است و ثابت می‌ماند. só نیز به معنای «تنها» صفت است (sós در جمع) ولی به معنای «فقط» قید است.',
      examples: [
        {
          pt: 'Seguem anexas as duas vias do documento.',
          fa: 'دو نسخهٔ سند به‌پیوست ارسال می‌شود.',
          pron: 'سِگِین آنِکساس آس دواس ویاس دو دوکومِنتو',
          note: 'anexas با «vias» (مؤنث جمع) هماهنگ شد. اما «Os documentos seguem em anexo» ثابت می‌ماند.',
        },
        {
          pt: 'Ela é meio engraçada.',
          fa: 'او تا حدی بامزه است.',
          pron: 'اِلا اِ مِیو اِنگراسادا',
          note: 'اینجا meio = «تا حدی» (قید) و ثابت است؛ گفتن «meia engraçada» اشتباه است.',
        },
        {
          pt: 'Cintia e Angélica vieram sós.',
          fa: 'سینتیا و آنژلیکا تنها آمدند.',
          pron: 'سینتیا ای آنژِلیکا ویِرام سُس',
          note: 'اینجا só = «تنها» (صفت)، پس در جمع sós می‌شود. اما «só» به‌معنای «فقط» ثابت است.',
        },
      ],
    },
    {
      headingFa: '۵. مطابقت فعلی چیست؟',
      bodyFa:
        'در مطابقت فعلی، فعل باید در شخص (اول/دوم/سوم) و شمار (مفرد/جمع) با فاعل هماهنگ باشد. اگر فاعل جمع باشد، فعل هم جمع می‌شود. این برای فارسی‌زبانان آشناست چون در فارسی هم فعل با فاعل مطابقت می‌کند، اما صرف‌های پرتغالی متفاوت‌اند و باید دقیق حفظ شوند.',
      examples: [
        {
          pt: 'Os alunos estudam todos os dias.',
          fa: 'دانش‌آموزان هر روز درس می‌خوانند.',
          pron: 'اوس آلونوس اِستودام تودوس اوس دیاس',
          note: 'فاعل جمع (os alunos) → فعل سوم‌شخص جمع (estudam).',
        },
        {
          pt: 'Nós estudamos português.',
          fa: 'ما پرتغالی می‌خوانیم.',
          pron: 'نُس اِستوداموس پُرتوگِس',
          note: 'nós → پایانهٔ اول‌شخص جمع -amos.',
        },
        {
          pt: 'As pessoas ainda não chegaram.',
          fa: 'مردم هنوز نرسیده‌اند.',
          pron: 'آس پِسوآس آیندا نائو شِگارام',
          note: 'pessoas جمع است، پس chegaram (نه chegou).',
        },
      ],
    },
    {
      headingFa: '۶. مورد دشوار: A GENTE و اسم‌های جمعی',
      bodyFa:
        'یک تلهٔ رایج: «a gente» از نظر معنا یعنی «ما»، اما از نظر دستوری سوم‌شخص مفرد است. پس فعل آن مثل ele/ela صرف می‌شود، نه مثل nós. همچنین اسم‌های جمعی مانند «a família» (خانواده) یا «o pessoal» (جمعیت/بچه‌ها) مفردند و فعلشان مفرد می‌آید، هرچند اشاره به گروهی از افراد دارند.',
      examples: [
        {
          pt: 'A gente precisa comprar mais roupas novas.',
          fa: 'ما باید لباس‌های نوِ بیشتری بخریم.',
          pron: 'آ جِنتی پرِسیزا کُمپرار مایس هُپاس نُواس',
          note: 'درست: a gente precisa (سوم‌شخص مفرد). غلط: «a gente precisamos».',
        },
        {
          pt: 'A família toda mora na mesma casa.',
          fa: 'تمام خانواده در یک خانه زندگی می‌کنند.',
          pron: 'آ فامیلیا تُدا مُرا نا مِسما کازا',
          note: 'família اسم جمعیِ مفرد است، پس mora (مفرد).',
        },
        {
          pt: 'Nós desejamos um bom final de semana.',
          fa: 'ما آخرِهفتهٔ خوبی برایتان آرزو می‌کنیم.',
          pron: 'نُس دِزِژاموس اوم بُم فینال جی سِمانا',
          note: 'مقایسه کنید: با nós فعل جمع می‌شود (desejamos)، اما با «a gente» مفرد (a gente deseja).',
        },
      ],
    },
    {
      headingFa: '۷. اشتباه‌های رایج فارسی‌زبانان (درست/غلط)',
      bodyFa:
        'چون در فارسی صفت برای جنس و شمار تغییر نمی‌کند و فاصلهٔ فاعل با فعل ما را گیج می‌کند، این اشتباه‌ها خیلی تکرار می‌شوند. به مقایسهٔ درست و غلط دقت کنید. یادتان باشد فاعلِ دور از فعل هم باید مطابقت را کنترل کند.',
      examples: [
        {
          pt: 'As duas amigas americanas visitaram o Brasil. (não: americanos)',
          fa: 'آن دو دوستِ آمریکایی از برزیل بازدید کردند.',
          pron: 'آس دواس آمیگاس آمِریکاناس ویزیتارام او برازیل',
          note: 'غلط رایج: «amigas americanos». صفت باید با amigas (مؤنث جمع) هماهنگ شود → americanas.',
        },
        {
          pt: 'Cachorros e gatos são animais obedientes. (não: é)',
          fa: 'سگ‌ها و گربه‌ها حیوانات مطیعی هستند.',
          pron: 'کاشوهوس ای گاتوس سائو آنیمایس اوبِدیِنتِس',
          note: 'دو فاعل جمع → فعل جمع são، نه é.',
        },
        {
          pt: 'O carro tinha um dos faróis queimados. (não: uma dos faróis)',
          fa: 'ماشین یکی از چراغ‌هایش سوخته بود.',
          pron: 'او کاهو تینیا اوم دوس فارُیس کِیمادوس',
          note: 'farol مذکر است، پس «um» (نه «uma») و queimados با faróis (جمع) هماهنگ است.',
        },
        {
          pt: 'Eu vou sempre aos parques no domingo. (não: eu vai)',
          fa: 'من یکشنبه‌ها همیشه به پارک‌ها می‌روم.',
          pron: 'اِئو وُ سِمپری آوس پارکِس نو دومینگو',
          note: 'با eu فعل اول‌شخص است (vou)؛ «vai» برای سوم‌شخص (ele/ela) است.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'مطابقت اسمی: حرف تعریف و صفت با اسم در جنس و شمار هماهنگ می‌شوند (a menina alta / os meninos altos).',
    'با دو اسمِ جنسِ متفاوت، صفتِ جمعِ مذکر می‌آید (roupa e carro novos).',
    'muito وقتی مقدار است هماهنگ می‌شود (muitas amigas)، وقتی شدت است ثابت می‌ماند (muito bonita).',
    'anexo/meio/só در نقش صفت هماهنگ می‌شوند اما در نقش قید ثابت‌اند.',
    'مطابقت فعلی: فعل با فاعل در شخص و شمار هماهنگ است؛ فاعل جمع → فعل جمع.',
    '«a gente» یعنی «ما» ولی فعلش سوم‌شخص مفرد است (a gente precisa، نه precisamos).',
  ],
  quiz: [
    {
      id: 'course-aula-12-q1',
      type: 'mcq',
      prompt: 'Escolha a forma correta: As duas amigas ___ visitaram o Brasil.',
      promptFa:
        'شکل درست صفت را انتخاب کنید. صفت باید با «amigas» (مؤنث جمع) هماهنگ شود.',
      options: ['americanos', 'americana', 'americanas', 'americano'],
      answer: 'americanas',
      explanationFa:
        '«amigas» مؤنث و جمع است، پس صفت هم باید مؤنثِ جمع باشد: americanas. گفتن «americanos» اشتباه رایج فارسی‌زبانان است چون در فارسی صفت تغییر نمی‌کند.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-12-q2',
      type: 'fill-blank',
      prompt:
        'Complete com o verbo correto: A gente ___ comprar mais roupas. (precisar)',
      promptFa:
        'فعل «precisar» را با فاعل «a gente» به‌درستی صرف کنید. یادتان باشد «a gente» سوم‌شخص مفرد است.',
      options: [],
      answer: 'precisa',
      explanationFa:
        '«a gente» با اینکه معنایش «ما» است، از نظر دستوری سوم‌شخص مفرد است؛ پس فعل مثل ele/ela می‌آید: «a gente precisa». صرف «a gente precisamos» غلط است.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-12-q3',
      type: 'mcq',
      prompt: 'Escolha a opção correta: Minhas filhas são ___ bonitas.',
      promptFa:
        'کدام شکل درست است؟ اینجا muito به‌معنای «خیلی» (شدت) است و صفت را تشدید می‌کند.',
      options: ['muitas', 'muito', 'muitos', 'muita'],
      answer: 'muito',
      explanationFa:
        'وقتی muito به معنای «خیلی» (شدت) صفتی دیگر را تشدید می‌کند، قید است و هرگز تغییر نمی‌کند: «muito bonitas». فقط وقتی مقدار را نشان دهد (muitas filhas) هماهنگ می‌شود.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-12-q4',
      type: 'mcq',
      prompt:
        'Escolha o verbo correto: Cachorros e gatos ___ animais muito obedientes.',
      promptFa: 'فعل درست را انتخاب کنید. فاعل دو اسمِ جمع است.',
      options: ['é', 'são', 'está', 'foi'],
      answer: 'são',
      explanationFa:
        'دو فاعل (cachorros e gatos) با هم جمع هستند، پس فعل باید سوم‌شخص جمع باشد: são. گفتن «é» (مفرد) اشتباه است.',
      cefr: 'B1',
      skill: 'grammar',
    },
    {
      id: 'course-aula-12-q5',
      type: 'fill-blank',
      prompt:
        'Corrija a concordância: Segue anexo a fatura. → Segue ___ a fatura.',
      promptFa:
        'مطابقت را اصلاح کنید. «fatura» (صورت‌حساب) مؤنث مفرد است؛ anexo باید با آن هماهنگ شود.',
      options: [],
      answer: 'anexa',
      explanationFa:
        'در نقش صفت، anexo با اسم هماهنگ می‌شود. چون «a fatura» مؤنث مفرد است، درست «Segue anexa a fatura» است. توجه: در عبارت ثابت «em anexo» هیچ تغییری نمی‌کند.',
      cefr: 'B1',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 12.',
};
