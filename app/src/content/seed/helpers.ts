/**
 * Authoring helpers. They fill the boilerplate fields (timestamps, version,
 * defaults) so seed content stays concise and readable while every record
 * still validates against the Zod schema in src/domain/content/schema.ts.
 */
import type {
  Vocab,
  Phrase,
  Verification,
  Cefr,
  Formality,
} from '@/domain/content/schema';

// A fixed authoring date keeps seed output deterministic (important for tests
// and for reproducible builds). Update when content is substantially revised.
export const SEED_DATE = '2026-07-26T00:00:00.000Z';

type VocabInput = {
  id: string;
  pt: string;
  faLiteral: string;
  faNatural?: string;
  en?: string;
  pron: string;
  cefr: Cefr;
  category: string;
  pos?: Vocab['pos'];
  gender?: Vocab['gender'];
  plural?: string;
  tags?: string[];
  formality?: Formality;
  notes?: string;
  examples?: Array<{ pt: string; fa: string }>;
  commonMistakes?: string[];
  verification?: Verification;
};

export function mkVocab(v: VocabInput): Vocab {
  return {
    id: v.id,
    pt: v.pt,
    faLiteral: v.faLiteral,
    faNatural: v.faNatural ?? v.faLiteral,
    en: v.en,
    pronunciation: v.pron,
    cefr: v.cefr,
    category: v.category,
    pos: v.pos ?? 'other',
    gender: v.gender ?? 'none',
    plural: v.plural,
    tags: v.tags ?? [],
    formality: v.formality ?? 'neutral',
    notes: v.notes,
    commonMistakes: v.commonMistakes ?? [],
    examples: v.examples ?? [],
    verification: v.verification ?? 'ai-generated',
    createdAt: SEED_DATE,
    updatedAt: SEED_DATE,
    version: 1,
  };
}

type PhraseInput = {
  id: string;
  pt: string;
  faLiteral: string;
  faNatural?: string;
  en?: string;
  pron: string;
  cefr: Cefr;
  category: string;
  tags?: string[];
  formality?: Formality;
  notes?: string;
  examples?: Array<{ pt: string; fa: string }>;
  commonMistakes?: string[];
  sourceId?: string;
  verification?: Verification;
};

export function mkPhrase(p: PhraseInput): Phrase {
  return {
    id: p.id,
    pt: p.pt,
    faLiteral: p.faLiteral,
    faNatural: p.faNatural ?? p.faLiteral,
    en: p.en,
    pronunciation: p.pron,
    cefr: p.cefr,
    category: p.category,
    tags: p.tags ?? [],
    formality: p.formality ?? 'neutral',
    notes: p.notes,
    commonMistakes: p.commonMistakes ?? [],
    examples: p.examples ?? [],
    sourceId: p.sourceId,
    verification: p.verification ?? 'ai-generated',
    createdAt: SEED_DATE,
    updatedAt: SEED_DATE,
    version: 1,
  };
}
