/**
 * City-specific content. The learner picks their city and gets relevant
 * vocabulary and phrases (describing their address, local offices, etc.).
 * The architecture allows adding more cities without code changes.
 */
import type { CityContent } from '@/domain/content/schema';

export const cities: CityContent[] = [
  {
    id: 'city-sao-paulo',
    city: 'São Paulo',
    state: 'São Paulo (SP)',
    region: 'Sudeste',
    overviewFa:
      'سائوپائولو پرجمعیت‌ترین شهر برزیل و یکی از بزرگ‌ترین کلان‌شهرهای جهان است؛ مرکز اقتصادی کشور با حمل‌ونقل عمومی گسترده (مترو و اتوبوس).',
    phrases: [
      { pt: 'Eu moro em São Paulo.', fa: 'من در سائوپائولو زندگی می‌کنم.' },
      { pt: 'Vou pegar o metrô.', fa: 'می‌خواهم مترو سوار شوم.' },
      {
        pt: 'Onde fica a estação mais próxima?',
        fa: 'نزدیک‌ترین ایستگاه کجاست؟',
      },
    ],
    offices: [
      {
        name: 'Polícia Federal (SP)',
        descFa: 'رسیدگی به امور مهاجرت و مدارک.',
      },
      { name: 'Cartório', descFa: 'ثبت اسناد و تأیید امضا.' },
    ],
  },
  {
    id: 'city-brasilia',
    city: 'Brasília',
    state: 'Distrito Federal (DF)',
    region: 'Centro-Oeste',
    overviewFa:
      'برازیلیا پایتخت برزیل و مرکز نهادهای فدرال است. شهری برنامه‌ریزی‌شده با معماری مدرن و بخش‌های اداری مشخص.',
    phrases: [
      {
        pt: 'Brasília é a capital do Brasil.',
        fa: 'برازیلیا پایتخت برزیل است.',
      },
      {
        pt: 'Preciso ir a um órgão federal.',
        fa: 'باید به یک نهاد فدرال بروم.',
      },
    ],
    offices: [
      {
        name: 'Ministério da Justiça',
        descFa: 'مرجع تصمیم‌گیری دربارهٔ تابعیت.',
      },
    ],
  },
  {
    id: 'city-londrina',
    city: 'Londrina',
    state: 'Paraná (PR)',
    region: 'Sul',
    overviewFa:
      'لوندرینا شهری در شمال ایالت پارانا در جنوب برزیل است؛ شهری متوسط با کیفیت زندگی خوب و جامعهٔ مهاجر متنوع.',
    phrases: [
      {
        pt: 'Moro em Londrina, no Paraná.',
        fa: 'در لوندرینا، در پارانا زندگی می‌کنم.',
      },
      { pt: 'O clima aqui é agradável.', fa: 'آب‌وهوای اینجا دلپذیر است.' },
    ],
    offices: [
      { name: 'Cartório de Registro Civil', descFa: 'ثبت احوال و اسناد.' },
    ],
  },
  {
    id: 'city-curitiba',
    city: 'Curitiba',
    state: 'Paraná (PR)',
    region: 'Sul',
    overviewFa:
      'کوریتیبا پایتخت ایالت پارانا و نمونه‌ای شناخته‌شده از برنامه‌ریزی شهری و حمل‌ونقل عمومی کارآمد (سیستم اتوبوس BRT) است.',
    phrases: [
      {
        pt: 'Curitiba é conhecida pelo transporte público.',
        fa: 'کوریتیبا به خاطر حمل‌ونقل عمومی‌اش معروف است.',
      },
      {
        pt: 'Vou de ônibus para o trabalho.',
        fa: 'با اتوبوس به سرِ کار می‌روم.',
      },
    ],
    offices: [
      { name: 'Polícia Federal (PR)', descFa: 'امور مهاجرت در ایالت پارانا.' },
    ],
  },
  {
    id: 'city-rio',
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro (RJ)',
    region: 'Sudeste',
    overviewFa:
      'ریودوژانیرو شهری ساحلی و از نمادهای فرهنگی برزیل است؛ با سواحل مشهور و جاذبه‌های گردشگری فراوان.',
    phrases: [
      { pt: 'Moro no Rio de Janeiro.', fa: 'در ریودوژانیرو زندگی می‌کنم.' },
      {
        pt: 'A praia fica perto da minha casa.',
        fa: 'ساحل نزدیک خانهٔ من است.',
      },
    ],
    offices: [{ name: 'Cartório', descFa: 'ثبت اسناد و تأیید مدارک.' }],
  },
];
