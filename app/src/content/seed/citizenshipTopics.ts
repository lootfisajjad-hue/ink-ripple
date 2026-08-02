/**
 * Educational topics about Brazil's geography, history, government, rights and
 * the naturalisation process. Content is neutral and educational (not political
 * or promotional). Every topic carries a source id and shows the
 * "general information, not legal advice" disclaimer in the UI.
 */
import type { CitizenshipTopic } from '@/domain/content/schema';

export const citizenshipTopics: CitizenshipTopic[] = [
  {
    id: 'ct-geografia',
    category: 'geography',
    title: 'جغرافیای برزیل',
    bodyFa:
      'برزیل بزرگ‌ترین کشور آمریکای جنوبی و پنجمین کشور بزرگ جهان از نظر مساحت است. این کشور به ۲۶ ایالت (estados) و یک ناحیهٔ فدرال (Distrito Federal) تقسیم می‌شود و به پنج منطقهٔ اصلی تقسیم‌بندی می‌گردد: شمال (Norte)، شمال‌شرق (Nordeste)، مرکز-غرب (Centro-Oeste)، جنوب‌شرق (Sudeste) و جنوب (Sul).',
    keyTermsPt: [
      { pt: 'estado', fa: 'ایالت' },
      { pt: 'região', fa: 'منطقه' },
      { pt: 'Distrito Federal', fa: 'ناحیهٔ فدرال' },
    ],
    sourceId: 'src-ibge',
    disclaimer: true,
  },
  {
    id: 'ct-capital',
    category: 'geography',
    title: 'پایتخت و نمادهای ملی',
    bodyFa:
      'پایتخت برزیل شهر برازیلیا (Brasília) است که در سال ۱۹۶۰ رسماً پایتخت شد. زبان رسمی کشور پرتغالی است. پرچم برزیل سبز و زرد با دایره‌ای آبی و عبارت «Ordem e Progresso» (نظم و پیشرفت) است.',
    keyTermsPt: [
      { pt: 'capital', fa: 'پایتخت' },
      { pt: 'bandeira', fa: 'پرچم' },
      { pt: 'língua oficial', fa: 'زبان رسمی' },
    ],
    sourceId: 'src-ibge',
    disclaimer: true,
  },
  {
    id: 'ct-governo',
    category: 'government',
    title: 'ساختار کلی حکومت',
    bodyFa:
      'برزیل یک جمهوری فدرال با نظام ریاستی است. قدرت به سه قوه تقسیم می‌شود: مجریه (Executivo)، مقننه (Legislativo) و قضاییه (Judiciário). حکومت در سه سطح سازمان یافته است: فدرال (União)، ایالتی (estado) و شهرداری (município).',
    keyTermsPt: [
      { pt: 'Executivo', fa: 'قوهٔ مجریه' },
      { pt: 'Legislativo', fa: 'قوهٔ مقننه' },
      { pt: 'Judiciário', fa: 'قوهٔ قضاییه' },
      { pt: 'município', fa: 'شهرداری' },
    ],
    sourceId: 'src-constituicao',
    disclaimer: true,
  },
  {
    id: 'ct-constituicao',
    category: 'government',
    title: 'قانون اساسی و شهروندی',
    bodyFa:
      'قانون اساسی برزیل مصوب ۱۹۸۸ بالاترین سند حقوقی کشور است. اصل ۱۲ (Art. 12) به موضوع ملیت (nacionalidade) می‌پردازد و میان برزیلیِ مادرزاد (nato) و برزیلیِ تابعیت‌یافته (naturalizado) تمایز قائل می‌شود. جزئیات و شرایط دقیق را همیشه از منبع رسمی روز بررسی کنید.',
    keyTermsPt: [
      { pt: 'Constituição', fa: 'قانون اساسی' },
      { pt: 'nacionalidade', fa: 'ملیت' },
      { pt: 'naturalizado', fa: 'تابعیت‌یافته' },
    ],
    sourceId: 'src-constituicao',
    disclaimer: true,
  },
  {
    id: 'ct-processo',
    category: 'process',
    title: 'کلیات فرایند تابعیت',
    bodyFa:
      'درخواست تابعیت (naturalização) از طریق درگاه رسمی دولت (gov.br) ثبت و توسط پلیس فدرال (Polícia Federal) بررسی می‌شود؛ تصمیم نهایی بر عهدهٔ وزارت دادگستری و امنیت عمومی است. شرایط عمومی معمولاً شامل اقامت قانونی، توانایی برقراری ارتباط به زبان پرتغالی و نداشتن محکومیت کیفری مرتبط است. شرایط دقیق، مدت اقامت لازم و مدارک بسته به نوع درخواست متفاوت است و ممکن است تغییر کند — این‌ها را از منابع رسمی بررسی کنید.',
    keyTermsPt: [
      { pt: 'naturalização', fa: 'تابعیت' },
      { pt: 'residência', fa: 'اقامت' },
      { pt: 'requerimento', fa: 'درخواست' },
    ],
    sourceId: 'src-govbr-naturalizacao',
    disclaimer: true,
  },
  {
    id: 'ct-direitos',
    category: 'rights',
    title: 'حقوق و مسئولیت‌های عمومی',
    bodyFa:
      'قانون اساسی حقوق بنیادین مانند آزادی، برابری و دسترسی به خدمات عمومی را تضمین می‌کند. در کنار حقوق، مسئولیت‌هایی مانند احترام به قوانین و مشارکت مدنی نیز وجود دارد. این بخش آموزشی است؛ برای وضعیت شخصی خود از مشاورهٔ معتبر استفاده کنید.',
    keyTermsPt: [
      { pt: 'direitos', fa: 'حقوق' },
      { pt: 'deveres', fa: 'مسئولیت‌ها' },
      { pt: 'cidadania', fa: 'شهروندی' },
    ],
    sourceId: 'src-constituicao',
    disclaimer: true,
  },
  {
    id: 'ct-cultura',
    category: 'culture',
    title: 'تنوع فرهنگی و مهاجرت',
    bodyFa:
      'جامعهٔ برزیل از آمیزش مردمان بومی، پرتغالی، آفریقایی و موج‌های مهاجرت از سراسر جهان شکل گرفته است. این تنوع در زبان، غذا، موسیقی و آداب اجتماعی دیده می‌شود. آشنایی با این تنوع به زندگی روزمره و ارتباط اجتماعی کمک می‌کند.',
    keyTermsPt: [
      { pt: 'diversidade', fa: 'تنوع' },
      { pt: 'imigração', fa: 'مهاجرت' },
      { pt: 'cultura', fa: 'فرهنگ' },
    ],
    sourceId: 'src-ibge',
    disclaimer: true,
  },
  {
    id: 'ct-historia',
    category: 'history',
    title: 'کلیات تاریخ برزیل',
    bodyFa:
      'برزیل در سال ۱۸۲۲ از پرتغال استقلال یافت و در سال ۱۸۸۹ به جمهوری تبدیل شد. قانون اساسی کنونی در سال ۱۹۸۸ پس از دورهٔ بازگشت به دموکراسی تصویب شد. این خط زمانی کلی برای درک بافت اجتماعی و مدنی مفید است.',
    keyTermsPt: [
      { pt: 'independência', fa: 'استقلال' },
      { pt: 'república', fa: 'جمهوری' },
      { pt: 'democracia', fa: 'دموکراسی' },
    ],
    sourceId: 'src-constituicao',
    disclaimer: true,
  },
];
