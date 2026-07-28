import type { CourseLesson } from '@/domain/content/schema';

export const portas4: CourseLesson = {
  id: 'course-portas-4',
  order: 4,
  aula: 'Unidade 4',
  track: 'portas',
  pagesKey: 'portas4',
  titleFa: 'وقت کار است! — مشاغل، زمان گذشته، رزومه، مصاحبه و حق کار',
  titlePt:
    'É hora de trabalhar! — Profissões, Pretéritos, Currículo, Direito ao Trabalho',
  cefr: 'A2',
  summaryFa:
    'این فصل دربارهٔ کار است: نام مشاغل و شرح کاری که انجام می‌دهید، دو زمان گذشته (گذشتهٔ ساده برای کارِ یک‌بار انجام‌شده و گذشتهٔ استمراری برای عادت‌های گذشته)، ساختن رزومه (Currículo)، آمادگی برای مصاحبهٔ کاری، و مهم‌تر از همه «حق کار شایسته» و قوانین کار برزیل که هر مهاجری باید بداند.',
  objectivesFa: [
    'نام مشاغل رایج و توصیف فعالیت‌های هر شغل را بدانید.',
    'گذشتهٔ ساده (Pretérito Perfeito) را برای رویداد یک‌بارهٔ گذشته به‌کار ببرید.',
    'گذشتهٔ استمراری (Pretérito Imperfeito) را برای عادت‌های گذشته به‌کار ببرید.',
    'یک رزومهٔ ساده بنویسید و برای مصاحبهٔ کاری آماده شوید.',
    'حقوق پایهٔ کار در برزیل (حداقل حقوق، ساعت کار، اضافه‌کاری، مرخصی…) را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. مشاغل (Profissões)',
      bodyFa:
        'مشاغل هم شکل مذکر و مؤنث دارند. برای گفتن شغلتان از «Eu sou…» و برای شرح کارتان از فعل حال استفاده کنید.',
      examples: [
        {
          pt: 'médico / médica',
          fa: 'پزشک — از سلامت مردم مراقبت می‌کند',
          pron: 'مِجیکو / مِجیکا',
        },
        {
          pt: 'professor / professora',
          fa: 'معلم — به دانش‌آموزان آموزش می‌دهد',
          pron: 'پروفِسور / پروفِسورا',
        },
        {
          pt: 'pedreiro / pedreira',
          fa: 'بنّا — خانه و ساختمان می‌سازد',
          pron: 'پِدرِیرو',
        },
        {
          pt: 'mecânico / mecânica',
          fa: 'مکانیک — ماشین و موتور تعمیر می‌کند',
          pron: 'مِکانیکو',
        },
        {
          pt: 'cabeleireiro / cabeleireira',
          fa: 'آرایشگر — مو کوتاه و رنگ می‌کند',
          pron: 'کابِلِرِیرو',
        },
        {
          pt: 'advogado / advogada',
          fa: 'وکیل — بر اساس قانون دفاع می‌کند',
          pron: 'آدووگادو',
        },
        {
          pt: 'Eu sou cabeleireiro. Eu corto e pinto cabelo.',
          fa: 'من آرایشگرم. مو کوتاه و رنگ می‌کنم.',
          pron: 'اِئو کُرتو ای پینتو کابِلو',
        },
      ],
    },
    {
      headingFa: '۲. گذشتهٔ ساده (Pretérito Perfeito)',
      bodyFa:
        'برای کاری که در گذشته «یک‌بار و در لحظه‌ای مشخص» انجام شده. الگوی اول‌شخص افعال باقاعده: -ar → -ei، -er → -i، -ir → -i. مثال: trabalhei (کار کردم)، vendi (فروختم)، dividi (تقسیم کردم).',
      examples: [
        {
          pt: 'Eu trabalhei como garçom no ano passado.',
          fa: 'پارسال به‌عنوان گارسون کار کردم.',
          pron: 'اِئو ترابالیِی',
          note: '-ar → -ei',
        },
        {
          pt: 'Eu vendi a minha casa no começo do ano.',
          fa: 'اوایل سال خانه‌ام را فروختم.',
          pron: 'اِئو وِندی',
          note: '-er → -i',
        },
        {
          pt: 'Eu tive que vir para o Brasil.',
          fa: 'مجبور شدم به برزیل بیایم.',
          pron: 'اِئو تیوی کی ویر',
          note: 'ter بی‌قاعده: eu tive',
        },
        {
          pt: 'Eu fiz duas horas extras ontem.',
          fa: 'دیروز دو ساعت اضافه‌کاری کردم.',
          pron: 'اِئو فیز',
          note: 'fazer بی‌قاعده: eu fiz',
        },
      ],
    },
    {
      headingFa: '۳. گذشتهٔ استمراری (Pretérito Imperfeito)',
      bodyFa:
        'برای عادت‌ها و کارهای تکرارشوندهٔ گذشته («در کشورم هر روز…»). الگوی باقاعده: -ar → -ava، -er/-ir → -ia. مثال: trabalhava (کار می‌کردم)، comia (می‌خوردم)، dividia (تقسیم می‌کردم).',
      examples: [
        {
          pt: 'No meu país, eu trabalhava como professor.',
          fa: 'در کشورم معلم بودم/کار می‌کردم.',
          pron: 'اِئو ترابالاوا',
          note: 'عادت گذشته',
        },
        {
          pt: 'Eu comia arroz e feijão todos os dias.',
          fa: 'هر روز برنج و لوبیا می‌خوردم.',
          pron: 'اِئو کُمیا',
        },
        {
          pt: 'Eu tinha que chegar cedo e usar uniforme.',
          fa: 'باید زود می‌رسیدم و لباس فرم می‌پوشیدم.',
          pron: 'اِئو تینیا کی',
          note: 'tinha que = مجبور بودم',
        },
      ],
    },
    {
      headingFa: '۴. رزومه و مصاحبه (Currículo e Entrevista)',
      bodyFa:
        'رزومه با «مشخصات فردی» شروع می‌شود (نام، ملیت، RNE/گذرنامه، CPF، نشانی، تلفن) و بعد «تحصیلات»، «زبان‌ها» و «مهارت‌ها». در مصاحبه: دربارهٔ شرکت تحقیق کنید، به‌موقع برسید، لباس مرتب بپوشید، صادق باشید و از زبان عامیانه (gíria) استفاده نکنید؛ زبان رسمی به کار ببرید.',
      examples: [
        {
          pt: 'Por que devemos contratar você?',
          fa: 'چرا باید شما را استخدام کنیم؟',
          pron: 'پور کی دِوِموس کُنتراتار وُسه؟',
        },
        {
          pt: 'Eu sou pontual, responsável e trabalho bem em equipe.',
          fa: 'من وقت‌شناس، مسئول و اهل کار تیمی هستم.',
          pron: 'اِئو سُو پونتوال',
        },
        {
          pt: 'Quais são os seus pontos fortes?',
          fa: 'نقاط قوت شما چیست؟',
          pron: 'کوایس سائو اوس سِئوس پونتوس فُرتِس؟',
        },
        {
          pt: 'Não use gírias na entrevista.',
          fa: 'در مصاحبه از زبان عامیانه استفاده نکنید.',
          pron: 'نائو اوزی ژیریاس',
        },
      ],
    },
    {
      headingFa: '۵. حق کار شایسته (Direito ao Trabalho)',
      bodyFa:
        'قوانین کار برزیل (CLT) از کارگر محافظت می‌کند. مهم‌ترین حقوق را بدانید تا استثمار نشوید. (اطلاعات آموزشی؛ ارقام به‌مرور تغییر می‌کنند.)',
      examples: [
        {
          pt: 'Carteira de Trabalho + Contrato (CLT)',
          fa: 'دفترچهٔ کار و قرارداد رسمی — پایهٔ کار قانونی.',
          pron: 'کارتِیرا جی ترابالیو',
        },
        {
          pt: 'Jornada: 8 horas por dia (44h por semana).',
          fa: 'ساعت کار: ۸ ساعت در روز (۴۴ ساعت در هفته).',
          pron: 'ژورنادا',
        },
        {
          pt: 'Hora extra: no máximo 2h/dia, com +50%.',
          fa: 'اضافه‌کاری: حداکثر ۲ ساعت در روز، با ۵۰٪ اضافه.',
          pron: 'اُرا اِسترا',
        },
        {
          pt: 'Adicional noturno: +20% (trabalho à noite).',
          fa: 'فوق‌العادهٔ شب‌کاری: ۲۰٪ بیشتر.',
          pron: 'آدیسیونال نوتورنو',
        },
        {
          pt: 'Férias remuneradas, 13º salário, FGTS, INSS.',
          fa: 'مرخصی با حقوق، حقوق سیزدهم، صندوق FGTS و بیمهٔ INSS.',
          pron: 'فِریاس، دِسیمو تِرسِیرو',
        },
        {
          pt: 'MEI = Micro Empreendedor Individual.',
          fa: 'خوداشتغالی خُرد؛ برای فروش/تولید کوچک تا سقف ماهانه، با حفظ حقوق کاری.',
          pron: 'مِی',
          note: 'کمک شغلی: CATe',
        },
      ],
    },
  ],
  keyPointsFa: [
    'گذشتهٔ ساده = رویداد یک‌بارهٔ گذشته (trabalhei)؛ گذشتهٔ استمراری = عادت گذشته (trabalhava).',
    'در مصاحبه زبان رسمی به کار ببرید، نه عامیانه (gíria).',
    'کار قانونی: ۸ ساعت در روز، اضافه‌کاری با ۵۰٪، شب‌کاری با ۲۰٪.',
    'حقوق کارگر: مرخصی با حقوق، حقوق سیزدهم، FGTS و INSS.',
  ],
  quiz: [
    {
      id: 'q-portas4-1',
      type: 'mcq',
      prompt: '«پارسال یک بار به‌عنوان گارسون کار کردم.» کدام زمان؟',
      options: [
        'Eu trabalhava como garçom',
        'Eu trabalhei como garçom',
        'Eu trabalho como garçom',
        'Eu vou trabalhar como garçom',
      ],
      answer: 'Eu trabalhei como garçom',
      explanationFa: 'رویداد یک‌بارهٔ گذشته → گذشتهٔ ساده: trabalhei.',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-portas4-2',
      type: 'mcq',
      prompt: 'طبق قانون کار برزیل، ساعت کار عادی چند ساعت در روز است؟',
      options: ['۶ ساعت', '۸ ساعت', '۱۰ ساعت', '۱۲ ساعت'],
      answer: '۸ ساعت',
      explanationFa: 'روزانه ۸ ساعت (۴۴ ساعت در هفته).',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas4-3',
      type: 'mcq',
      prompt: 'اضافه‌کاری (hora extra) چند درصد بیشتر پرداخت می‌شود؟',
      options: ['۱۰٪', '۲۰٪', '۵۰٪', '۱۰۰٪'],
      answer: '۵۰٪',
      explanationFa: 'هر ساعت اضافه‌کاری دست‌کم ۵۰٪ بیشتر از ساعت عادی.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas4-4',
      type: 'mcq',
      prompt: '«در کشورم هر روز برنج می‌خوردم» (عادت گذشته). کدام درست است؟',
      options: ['eu comi', 'eu como', 'eu comia', 'eu vou comer'],
      answer: 'eu comia',
      explanationFa: 'عادت تکرارشوندهٔ گذشته → گذشتهٔ استمراری: comia.',
      cefr: 'A2',
      skill: 'grammar',
    },
  ],
  estimatedMinutes: 20,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۴ (É hora de trabalhar!)، شامل «حق کار». ارقام و قوانین آموزشی‌اند و ممکن است تغییر کنند؛ منبع رسمی را بررسی کنید. تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
