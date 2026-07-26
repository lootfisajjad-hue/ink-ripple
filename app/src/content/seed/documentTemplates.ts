/**
 * Common document *templates* for the citizenship checklist. These seed the
 * user's personal checklist with sensible starting items. Exact requirements
 * vary and change — each template points at an official source and the UI warns
 * the user to verify current requirements.
 */
import type { DocumentTemplate } from '@/domain/content/schema';

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'doc-rnm',
    name: 'RNM (Registro Nacional Migratório)',
    nameFa: 'کارت اقامت / ثبت ملی مهاجرتی',
    descFa: 'سند هویتی مهاجران در برزیل که جایگزین RNE قدیمی شده است.',
    sourceId: 'src-pf-naturalizacao',
  },
  {
    id: 'doc-cpf',
    name: 'CPF',
    nameFa: 'شمارهٔ مالیاتی (CPF)',
    descFa: 'شمارهٔ ثبت اشخاص حقیقی؛ برای اغلب امور اداری و مالی لازم است.',
    sourceId: 'src-govbr-naturalizacao',
  },
  {
    id: 'doc-certidao-nascimento',
    name: 'Certidão de nascimento',
    nameFa: 'شناسنامه / گواهی تولد',
    descFa: 'معمولاً همراه با ترجمهٔ رسمی (tradução juramentada) لازم است.',
    sourceId: 'src-govbr-naturalizacao',
  },
  {
    id: 'doc-comprovante-residencia',
    name: 'Comprovante de residência',
    nameFa: 'مدرک اثبات محل سکونت',
    descFa: 'مثل قبض آب/برق یا قرارداد اجاره به نام متقاضی.',
    sourceId: 'src-govbr-naturalizacao',
  },
  {
    id: 'doc-antecedentes',
    name: 'Certidão de antecedentes criminais',
    nameFa: 'گواهی عدم سوء‌پیشینه',
    descFa: 'ممکن است از برزیل و/یا کشور مبدأ خواسته شود.',
    sourceId: 'src-pf-naturalizacao',
  },
  {
    id: 'doc-traducao',
    name: 'Tradução juramentada',
    nameFa: 'ترجمهٔ رسمی (قسم‌خورده)',
    descFa: 'ترجمهٔ اسناد خارجی توسط مترجم رسمی مورد تأیید.',
    sourceId: 'src-govbr-naturalizacao',
  },
  {
    id: 'doc-passaporte',
    name: 'Passaporte',
    nameFa: 'گذرنامه',
    descFa: 'مدرک هویتی و سابقهٔ ورود/خروج.',
    sourceId: 'src-pf-naturalizacao',
  },
];
