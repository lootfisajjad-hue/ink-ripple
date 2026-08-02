/**
 * The placement quiz shown during onboarding. Each item has display data plus
 * the grading metadata consumed by src/domain/placement. Objective items have a
 * correct option index; self-assessed speaking/writing items have answerIndex
 * null and are graded on a 0..1 confidence the learner reports.
 */
import type { PlacementItem } from '@/domain/placement/placement';

export interface PlacementQuestion extends PlacementItem {
  promptFa: string;
  audioText?: string;
  options: string[]; // empty for self-assessed items
  selfAssess?: boolean;
}

export const placementQuestions: PlacementQuestion[] = [
  {
    id: 'pl-1',
    skill: 'vocab',
    cefr: 'A1',
    promptFa: 'معنی «obrigado» چیست؟',
    options: ['خواهش می‌کنم', 'ممنون', 'ببخشید', 'سلام'],
    answerIndex: 1,
  },
  {
    id: 'pl-2',
    skill: 'vocab',
    cefr: 'A1',
    promptFa: 'کدام واژه به معنی «آب» است؟',
    options: ['pão', 'leite', 'água', 'café'],
    answerIndex: 2,
  },
  {
    id: 'pl-3',
    skill: 'grammar',
    cefr: 'A1',
    promptFa: 'کامل کنید: «Eu ___ do Irã.» (بودن)',
    options: ['sou', 'é', 'somos', 'são'],
    answerIndex: 0,
  },
  {
    id: 'pl-4',
    skill: 'grammar',
    cefr: 'A2',
    promptFa: 'گذشتهٔ درست: «Ontem eu ___ português.» (falar)',
    options: ['falo', 'falei', 'falava', 'falar'],
    answerIndex: 1,
  },
  {
    id: 'pl-5',
    skill: 'reading',
    cefr: 'A2',
    promptFa: 'معنی «Moro no Brasil desde 2019» چیست؟',
    options: [
      'به برزیل سفر کردم',
      'از ۲۰۱۹ در برزیل زندگی می‌کنم',
      'می‌خواهم به برزیل بروم',
      'در ۲۰۱۹ به دنیا آمدم',
    ],
    answerIndex: 1,
  },
  {
    id: 'pl-6',
    skill: 'listening',
    cefr: 'A1',
    promptFa: 'گوش کنید و انتخاب کنید چه شنیدید.',
    audioText: 'Boa noite',
    options: ['Boa noite', 'Bom dia', 'Boa tarde', 'Obrigado'],
    answerIndex: 0,
  },
  {
    id: 'pl-7',
    skill: 'listening',
    cefr: 'A2',
    promptFa: 'گوش کنید: این جمله چه می‌گوید؟',
    audioText: 'Quanto custa?',
    options: ['ساعت چند است؟', 'قیمت چقدر است؟', 'کجاست؟', 'اسم شما چیست؟'],
    answerIndex: 1,
  },
  {
    id: 'pl-8',
    skill: 'reading',
    cefr: 'B1',
    promptFa: 'معنی «Gostaria de acompanhar o meu processo» چیست؟',
    options: [
      'می‌خواهم روند پرونده‌ام را پیگیری کنم',
      'می‌خواهم پرونده را ببندم',
      'پرونده‌ای ندارم',
      'می‌خواهم شکایت کنم',
    ],
    answerIndex: 0,
  },
  {
    id: 'pl-9',
    skill: 'speaking',
    cefr: 'A1',
    promptFa: 'خودتان را به پرتغالی معرفی کنید (نام، ملیت). چقدر مطمئن بودید؟',
    options: [],
    answerIndex: null,
    selfAssess: true,
  },
  {
    id: 'pl-10',
    skill: 'writing',
    cefr: 'A2',
    promptFa:
      'یک پیام کوتاه بنویسید که بگویید کجا زندگی می‌کنید. چقدر راحت بود؟',
    options: [],
    answerIndex: null,
    selfAssess: true,
  },
];
