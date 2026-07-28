import type { CourseLesson } from '@/domain/content/schema';

export const portas7: CourseLesson = {
  id: 'course-portas-7',
  order: 7,
  aula: 'Unidade 7',
  track: 'portas',
  pagesKey: 'portas7',
  titleFa: 'بدن من، قانون من! — بدن، سلامت، ضمایر و حق سلامت و حقوق زن',
  titlePt:
    'Meu corpo, minha lei! — Corpo, Saúde, Pronomes, Direito à Saúde e da Mulher',
  cefr: 'A2',
  summaryFa:
    'در این فصل اعضای بدن و صورت، توصیف ظاهری (با مقایسه)، سلامت و بیماری و علائم، مراجعه به اورژانس، ضمایر انعکاسی و ملکی را می‌آموزید. سپس دو حق مهم را می‌شناسید: «حق سلامت» (کارت SUS و درمان رایگان برای همهٔ مهاجران بدون توجه به وضعیت اقامت) و «حقوق زن و حمایت در برابر خشونت» (قانون ماریا دا پِنیا و خط اضطراری ۱۸۰).',
  objectivesFa: [
    'اعضای بدن و صورت را نام ببرید.',
    'ظاهر افراد را توصیف کنید و با «mais … do que» مقایسه کنید.',
    'علائم و بیماری‌ها را بگویید و در اورژانس صحبت کنید.',
    'ضمایر انعکاسی (me/se) و ملکی (meu/minha…) را به‌کار ببرید.',
    'کارت SUS، خط اورژانس ۱۹۲ و حمایت از زنان (خط ۱۸۰) را بشناسید.',
  ],
  sections: [
    {
      headingFa: '۱. بدن و صورت (Corpo humano)',
      bodyFa:
        'اعضای اصلی بدن و صورت را حفظ کنید؛ هنگام مراجعه به پزشک لازمشان دارید.',
      examples: [
        {
          pt: 'a cabeça, o braço, a mão, a perna, o pé',
          fa: 'سر، بازو، دست، پا (ران)، پا (کف)',
          pron: 'کابِسا، براسو، مائو، پِرنا، په',
        },
        {
          pt: 'o olho, o nariz, a boca, a orelha',
          fa: 'چشم، بینی، دهان، گوش',
          pron: 'اُلیو، ناریز، بُکا، اورِلیا',
        },
        {
          pt: 'a barriga, as costas, o coração',
          fa: 'شکم، پشت (کمر)، قلب',
          pron: 'باهیگا، کُستاس، کوراسائو',
        },
      ],
    },
    {
      headingFa: '۲. توصیف ظاهری و مقایسه',
      bodyFa:
        'برای توصیف از SER استفاده کنید و صفت را با جنسیت هماهنگ کنید. برای مقایسه: «mais + صفت + do que» (…تر از).',
      examples: [
        {
          pt: 'Eu sou alto / alta. Ela é magra.',
          fa: 'من قدبلندم / او لاغر است.',
          pron: 'آلتو، مَگرا',
        },
        {
          pt: 'nem alto, nem baixo',
          fa: 'نه بلند، نه کوتاه (قد متوسط)',
          pron: 'نِین آلتو نِین بایشو',
        },
        {
          pt: 'O meu irmão é mais velho do que eu.',
          fa: 'برادرم از من بزرگ‌تر است.',
          pron: 'مایس وِلیو دو کی اِئو',
          note: 'مقایسه',
        },
        {
          pt: 'criança, jovem, adulto/adulta, idoso/idosa',
          fa: 'کودک، جوان، بزرگسال، سالمند',
          pron: 'کریانسا، ژُوِین، آدولتو، ایدُزو',
        },
      ],
    },
    {
      headingFa: '۳. سلامت، علائم و بیماری',
      bodyFa:
        'saúde = سلامت، doença = بیماری. برای گفتن درد از «estar com dor de…» استفاده کنید. در موارد اورژانسی به pronto-socorro (اورژانس) بروید.',
      examples: [
        {
          pt: 'Estou com dor de cabeça e febre.',
          fa: 'سردرد و تب دارم.',
          pron: 'اِستُو کُن دُر جی کابِسا',
          note: 'estar com dor = درد داشتن',
        },
        {
          pt: 'Estou gripado / resfriada.',
          fa: 'سرماخورده/آنفلوانزا دارم.',
          pron: 'گریپادو / هِسفریادا',
        },
        {
          pt: 'medir a pressão, tomar injeção, tomar soro',
          fa: 'فشار گرفتن، آمپول زدن، سِرُم گرفتن',
          pron: 'مِجیر آ پرِسائو',
        },
        {
          pt: 'O que você está sentindo? — Estou com muita dor no corpo.',
          fa: 'چه احساسی داری؟ — بدنم خیلی درد می‌کند.',
          pron: 'او کی وُسه اِستا سِنتیندو؟',
        },
      ],
    },
    {
      headingFa: '۴. ضمایر انعکاسی و ملکی',
      bodyFa:
        'ضمیر انعکاسی وقتی است که فاعل روی خودش عمل می‌کند (me, se): «machucar-se» (خود را زخمی کردن). ضمیر ملکی مالکیت را می‌رساند و با جنسیت هماهنگ می‌شود: meu/minha (مالِ من)، seu/sua (مالِ او/شما).',
      examples: [
        {
          pt: 'Eu me machuquei. / Eu me queimei.',
          fa: 'زخمی شدم / سوختم.',
          pron: 'اِئو می ماشوکِی',
          note: 'انعکاسی: me',
        },
        {
          pt: 'Ela se sente mal.',
          fa: 'او حالش بد است.',
          pron: 'اِلا سی سِنتی مال',
          note: 'انعکاسی: se',
        },
        {
          pt: 'o meu pai, a minha mãe',
          fa: 'پدرِ من، مادرِ من',
          pron: 'مِئو پای، مینیا مائی',
          note: 'ملکی مذکر/مؤنث',
        },
        {
          pt: 'o seu documento, a sua casa',
          fa: 'مدرکِ شما، خانهٔ شما',
          pron: 'سِئو، سوآ',
        },
      ],
    },
    {
      headingFa: '۵. حق سلامت (Direito à Saúde — SUS)',
      bodyFa:
        'همهٔ مهاجران، بدون توجه به وضعیت اقامتشان، حق درمان رایگان در بیمارستان‌ها و مراکز بهداشتی دولتی را دارند. کارت SUS رایگان است. واکسیناسیون کودکان اجباری و رایگان است.',
      examples: [
        {
          pt: 'Cartão SUS = Sistema Único de Saúde (gratuito).',
          fa: 'کارت SUS؛ نظام سلامت همگانی، رایگان.',
          pron: 'کارتائو سوس',
          note: 'با CPF و RNE/پروتکل بگیرید',
        },
        {
          pt: 'Todos podem ser atendidos, independentemente da situação migratória.',
          fa: 'همه، فارغ از وضعیت مهاجرتی، درمان می‌شوند.',
          pron: 'ایندِپِندِنتی',
        },
        {
          pt: 'SAMU — urgência: 192',
          fa: 'آمبولانس اورژانس: شمارهٔ ۱۹۲',
          pron: 'سامو',
          note: 'خدمت سیّار اورژانس',
        },
        {
          pt: 'Vacinas das crianças são obrigatórias e gratuitas.',
          fa: 'واکسن کودکان اجباری و رایگان است.',
          pron: 'واسیناس',
        },
      ],
    },
    {
      headingFa: '۶. حقوق زن و حمایت (Direito da Mulher)',
      bodyFa:
        'برزیل قوانینی برای حمایت از زنان در برابر خشونت دارد. مهم‌ترینشان «قانون ماریا دا پِنیا» است که خشونت خانگی را جرم می‌داند — نه فقط خشونت جسمی، بلکه روانی، جنسی و مالی. خط تلفن حمایت از زنان ۱۸۰ است و شبانه‌روزی کار می‌کند.',
      examples: [
        {
          pt: 'Lei Maria da Penha — contra a violência doméstica.',
          fa: 'قانون ماریا دا پِنیا؛ علیه خشونت خانگی.',
          pron: 'لِی ماریا دا پِنیا',
        },
        {
          pt: 'A lei protege contra violência física, psicológica, sexual e patrimonial.',
          fa: 'قانون در برابر خشونت جسمی، روانی، جنسی و مالی حمایت می‌کند.',
          pron: 'پروتِژی',
        },
        {
          pt: 'Central de Atendimento à Mulher: Ligue 180.',
          fa: 'مرکز کمک به زنان: شمارهٔ ۱۸۰ را بگیرید.',
          pron: 'لیگی سِنتو ای اُیتِنتا',
          note: 'شبانه‌روزی، سراسری، محرمانه',
        },
        {
          pt: 'O agressor não precisa ser o marido.',
          fa: 'آزارگر لازم نیست شوهر باشد (هر کسی می‌تواند باشد).',
          pron: 'آگرِسور',
        },
      ],
    },
  ],
  keyPointsFa: [
    'درد داشتن: estar com dor de… (Estou com dor de cabeça).',
    'مقایسه: mais + صفت + do que (…تر از).',
    'انعکاسی me/se؛ ملکی meu/minha، seu/sua.',
    'حق سلامت: کارت SUS رایگان برای همهٔ مهاجران؛ اورژانس SAMU = ۱۹۲.',
    'حمایت از زن: قانون ماریا دا پِنیا؛ خط کمک ۱۸۰ (شبانه‌روزی).',
  ],
  quiz: [
    {
      id: 'q-portas7-1',
      type: 'mcq',
      prompt: '«سردرد دارم» را چطور می‌گویید؟',
      options: [
        'Eu sou dor de cabeça',
        'Estou com dor de cabeça',
        'Eu tenho cabeça',
        'Eu vou dor de cabeça',
      ],
      answer: 'Estou com dor de cabeça',
      explanationFa: 'درد داشتن = estar com dor de…',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'q-portas7-2',
      type: 'mcq',
      prompt: 'شمارهٔ آمبولانس اورژانس (SAMU) در برزیل چند است؟',
      options: ['۱۸۰', '۱۹۰', '۱۹۲', '۹۱۱'],
      answer: '۱۹۲',
      explanationFa: 'SAMU (اورژانس سیّار) = ۱۹۲.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas7-3',
      type: 'mcq',
      prompt:
        'آیا مهاجر بدون مدرک اقامت هم می‌تواند از SUS درمان رایگان بگیرد؟',
      options: [
        'نه، فقط شهروندان',
        'بله، همهٔ مهاجران فارغ از وضعیت اقامت',
        'فقط با پرداخت پول',
        'فقط کودکان',
      ],
      answer: 'بله، همهٔ مهاجران فارغ از وضعیت اقامت',
      explanationFa:
        'SUS برای همهٔ مهاجران، فارغ از وضعیت مهاجرتی، رایگان است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'q-portas7-4',
      type: 'mcq',
      prompt: 'خط تلفن کمک به زنان در برابر خشونت چند است؟',
      options: ['۱۰۰', '۱۸۰', '۱۹۲', '۱۹۰'],
      answer: '۱۸۰',
      explanationFa: 'مرکز کمک به زنان: Ligue 180 (شبانه‌روزی).',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 20,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از کتاب «Portas Abertas: Português para Imigrantes» — فصل ۷ (Meu corpo, minha lei!)، شامل «حق سلامت» و «حقوق زن». اطلاعات حقوقی/بهداشتی آموزشی است و مشاورهٔ حقوقی/پزشکی نیست؛ در موارد واقعی با نهاد رسمی تماس بگیرید (اورژانس ۱۹۲، حمایت زنان ۱۸۰). تصاویر صفحات اصلی در پایین درس آمده‌اند.',
};
