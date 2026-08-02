/**
 * Situational dialogues for real-life scenarios in Brazil. Each is a short,
 * natural exchange with Persian translations, usable for reading, listening,
 * and role-play.
 */
import type { Dialogue } from '@/domain/content/schema';

export const dialogues: Dialogue[] = [
  {
    id: 'dlg-padaria',
    title: 'در نانوایی',
    scenario: 'bakery',
    cefr: 'A1',
    lines: [
      {
        speaker: 'Atendente',
        pt: 'Bom dia! Pois não?',
        fa: 'صبح بخیر! بفرمایید؟',
        pronunciation: 'بُن جیا! پویس نائو',
      },
      {
        speaker: 'Cliente',
        pt: 'Bom dia! Eu quero dois pães, por favor.',
        fa: 'صبح بخیر! دو تا نان می‌خواهم، لطفاً.',
      },
      {
        speaker: 'Atendente',
        pt: 'Mais alguma coisa?',
        fa: 'چیز دیگری هم می‌خواهید؟',
      },
      {
        speaker: 'Cliente',
        pt: 'Um café, por favor. Quanto é?',
        fa: 'یک قهوه، لطفاً. چقدر می‌شود؟',
      },
      { speaker: 'Atendente', pt: 'São oito reais.', fa: 'هشت رئال می‌شود.' },
    ],
    notesFa: '«Pois não?» تعارفی مؤدبانه یعنی «بفرمایید».',
  },
  {
    id: 'dlg-farmacia',
    title: 'در داروخانه',
    scenario: 'pharmacy',
    cefr: 'A2',
    lines: [
      {
        speaker: 'Farmacêutico',
        pt: 'Boa tarde! Como posso ajudar?',
        fa: 'بعدازظهر بخیر! چطور می‌توانم کمک کنم؟',
      },
      {
        speaker: 'Cliente',
        pt: 'Boa tarde. Estou com dor de cabeça.',
        fa: 'بعدازظهر بخیر. سردرد دارم.',
      },
      { speaker: 'Farmacêutico', pt: 'Você tem receita?', fa: 'نسخه دارید؟' },
      {
        speaker: 'Cliente',
        pt: 'Não. O que você recomenda?',
        fa: 'نه. چه چیزی توصیه می‌کنید؟',
      },
      {
        speaker: 'Farmacêutico',
        pt: 'Pode tomar este analgésico.',
        fa: 'می‌توانید این مسکن را مصرف کنید.',
      },
    ],
    notesFa: '«Estou com dor de...» ساختار رایج برای بیان درد است.',
  },
  {
    id: 'dlg-policia-federal',
    title: 'در پلیس فدرال',
    scenario: 'policia-federal',
    cefr: 'B1',
    lines: [
      {
        speaker: 'Atendente',
        pt: 'Bom dia. Você tem agendamento?',
        fa: 'صبح بخیر. وقت قبلی دارید؟',
      },
      {
        speaker: 'Requerente',
        pt: 'Tenho, sim. Meu horário é às dez.',
        fa: 'بله دارم. ساعت من ده است.',
      },
      {
        speaker: 'Atendente',
        pt: 'Trouxe todos os documentos?',
        fa: 'همهٔ مدارک را آورده‌اید؟',
      },
      {
        speaker: 'Requerente',
        pt: 'Sim, trouxe. Gostaria de acompanhar o meu processo.',
        fa: 'بله آورده‌ام. می‌خواهم روند پرونده‌ام را پیگیری کنم.',
      },
      {
        speaker: 'Atendente',
        pt: 'Certo. Aguarde ser chamado, por favor.',
        fa: 'باشد. لطفاً منتظر بمانید تا صدایتان بزنند.',
      },
    ],
    notesFa:
      'agendamento یعنی «وقت قبلی/نوبت». برای امور اداری معمولاً لازم است.',
  },
  {
    id: 'dlg-mercado',
    title: 'در سوپرمارکت',
    scenario: 'supermarket',
    cefr: 'A1',
    lines: [
      {
        speaker: 'Cliente',
        pt: 'Com licença, onde fica o arroz?',
        fa: 'ببخشید، برنج کجاست؟',
      },
      {
        speaker: 'Funcionário',
        pt: 'Fica no corredor três.',
        fa: 'در راهروی شماره سه است.',
      },
      {
        speaker: 'Cliente',
        pt: 'Obrigado! E o leite?',
        fa: 'ممنون! و شیر کجاست؟',
      },
      {
        speaker: 'Funcionário',
        pt: 'Ao lado, no corredor quatro.',
        fa: 'کنارش، در راهروی چهار.',
      },
    ],
    notesFa: '«Com licença» برای جلب توجه مؤدبانه به کار می‌رود.',
  },
];
