/**
 * Citable sources for legally/factually sensitive content (the citizenship
 * track). Every citizenship topic, document template, and officer question that
 * touches process or law references one of these by id.
 *
 * IMPORTANT: These are official/public references used to ground *educational*
 * content. Requirements for naturalisation change over time; the app always
 * shows the source and its review date and labels content as general
 * information, not legal advice. Re-verify against the live official source.
 */
import type { Source } from '@/domain/content/schema';

const ACCESSED = '2026-07-26';

export const sources: Source[] = [
  {
    id: 'src-govbr-naturalizacao',
    title: 'Naturalização — Portal Gov.br',
    publisher: 'Governo Federal do Brasil',
    url: 'https://www.gov.br/pt-br/servicos/obter-a-naturalizacao-brasileira',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'Página oficial de serviço sobre a naturalização brasileira.',
  },
  {
    id: 'src-pf-naturalizacao',
    title: 'Polícia Federal — Naturalização / Migração',
    publisher: 'Polícia Federal',
    url: 'https://www.gov.br/pf/pt-br/assuntos/imigracao',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'A Polícia Federal instrui e recebe pedidos relacionados à migração.',
  },
  {
    id: 'src-mj',
    title: 'Ministério da Justiça e Segurança Pública',
    publisher: 'MJSP',
    url: 'https://www.gov.br/mj/pt-br',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'Órgão federal responsável por decidir pedidos de naturalização.',
  },
  {
    id: 'src-lei-migracao',
    title: 'Lei nº 13.445/2017 — Lei de Migração',
    publisher: 'Presidência da República',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'Marco legal da migração, inclui regras gerais de naturalização.',
  },
  {
    id: 'src-decreto-9199',
    title: 'Decreto nº 9.199/2017 — Regulamento da Lei de Migração',
    publisher: 'Presidência da República',
    url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9199.htm',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
  },
  {
    id: 'src-constituicao',
    title: 'Constituição da República Federativa do Brasil de 1988',
    publisher: 'Presidência da República',
    url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'Art. 12 trata da nacionalidade brasileira.',
  },
  {
    id: 'src-ibge',
    title: 'IBGE — Instituto Brasileiro de Geografia e Estatística',
    publisher: 'IBGE',
    url: 'https://www.ibge.gov.br/',
    sourceType: 'official',
    official: true,
    accessedAt: ACCESSED,
    note: 'Dados oficiais de geografia, estados e população.',
  },
  {
    id: 'src-pla-acolhimento',
    title: 'Português como Língua de Acolhimento (PLAc) — material público',
    publisher: 'Instituições públicas de ensino',
    sourceType: 'academic',
    official: false,
    accessedAt: ACCESSED,
    note: 'Abordagem de ensino de português para migrantes.',
  },
];
