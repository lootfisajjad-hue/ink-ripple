# SOURCES — Olá Brasil (citizenship track)

The citizenship module grounds any process/legal/factual claim in an official or
public source, recorded in the app database (`sources` table, seeded from
`src/content/seed/sources.ts`) and shown in-app with its review date and a
**"general information, not legal advice"** label.

> ⚠️ Requirements for naturalisation change over time. These sources ground
> *educational language content only*. Always re-verify against the live
> official source and, when needed, consult a qualified professional.

## Registered sources

Each source was reviewed on **2026-07-26** (see `accessedAt` in the data).

| id | Title | Publisher | URL |
| --- | --- | --- | --- |
| `src-govbr-naturalizacao` | Naturalização — Portal Gov.br | Governo Federal | https://www.gov.br/pt-br/servicos/obter-a-naturalizacao-brasileira |
| `src-pf-naturalizacao` | Migração / Imigração | Polícia Federal | https://www.gov.br/pf/pt-br/assuntos/imigracao |
| `src-mj` | Ministério da Justiça e Segurança Pública | MJSP | https://www.gov.br/mj/pt-br |
| `src-lei-migracao` | Lei nº 13.445/2017 (Lei de Migração) | Presidência da República | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm |
| `src-decreto-9199` | Decreto nº 9.199/2017 (Regulamento) | Presidência da República | https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9199.htm |
| `src-constituicao` | Constituição Federal de 1988 (Art. 12) | Presidência da República | https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm |
| `src-ibge` | Geografia, estados, população | IBGE | https://www.ibge.gov.br/ |
| `src-pla-acolhimento` | Português como Língua de Acolhimento | Public institutions | — |

## How sources are used

- Every `citizenshipTopic` and `documentTemplate` references a `sourceId`
  (enforced by `validate.ts`).
- Interview questions that touch process/records also carry a `sourceId`.
- The **anti-hallucination** rule (see `ARCHITECTURE.md`): the AI layer grounds
  citizenship answers in these verified sources and shows the source + date; if
  no verified source supports a claim, it should express uncertainty rather than
  invent one.

## Content authoring & copyright

- Educational content (vocabulary, phrases, dialogues, explanations) is
  **authored specifically for this app**; we do not copy full texts of
  copyrighted books or paid courses.
- Only official/public references, or purpose-built original content, are used.
- AI-generated content is marked as such (`verification: 'ai-generated'`) until
  a human reviews and promotes it to `human-verified` (see `CONTENT_STRATEGY.md`).
