/**
 * MockAIProvider — a deterministic, rule-based assistant that works fully
 * offline with no API key. It is NOT a language model: it recognises common
 * patterns, plays simple personas, and offers light heuristic corrections.
 *
 * This keeps every AI-powered screen usable out of the box. Connect a real
 * provider in Settings for genuine conversational intelligence.
 */
import type {
  AIProvider,
  ChatMessage,
  ChatOptions,
  ChatResult,
  Correction,
} from './types';

const PERSONA_OPENERS: Record<string, string> = {
  teacher: 'Oi! Vamos praticar? Como você está hoje?',
  shopkeeper: 'Boa tarde! Pois não, o que você deseja?',
  doctor: 'Olá! O que você está sentindo hoje?',
  officer: 'Bom dia. Por favor, diga o seu nome completo.',
  neighbor: 'Oi, tudo bem? Que bom te ver!',
};

const FALLBACKS = [
  'Entendi! Pode me contar mais?',
  'Muito bem! E o que mais você quer dizer?',
  'Legal! Vamos continuar. Como você diria isso de outra forma?',
  'Certo. Pode repetir usando uma frase completa?',
];

/** Very light heuristic checks — honest, limited, never claims to be complete. */
function heuristicCorrections(text: string): Correction[] {
  const out: Correction[] = [];
  const t = text.toLowerCase();

  // "eu sou" + adjective of state that should use "estar"
  if (/\beu sou (bem|mal|cansad|feliz|triste|doente)/.test(t)) {
    out.push({
      original: text,
      corrected: text.replace(/\beu sou\b/i, 'eu estou'),
      explanationFa:
        'برای حال و وضعیت موقتی از «estar» استفاده کنید، نه «ser». مثلاً: «Eu estou bem».',
    });
  }
  // common: "muito bem obrigado" from a woman? cannot know gender; skip.
  // missing accent on "voce"
  if (/\bvoce\b/.test(t)) {
    out.push({
      original: text,
      corrected: text.replace(/\bvoce\b/gi, 'você'),
      explanationFa: 'املای درست: «você» با accent.',
    });
  }
  return out.slice(0, 2);
}

function personaReply(lastUser: string, opts?: ChatOptions): string {
  const persona = opts?.persona ?? 'teacher';
  const t = lastUser.toLowerCase();

  if (/\b(oi|olá|ola|bom dia|boa tarde|boa noite)\b/.test(t)) {
    return PERSONA_OPENERS[persona] ?? PERSONA_OPENERS.teacher!;
  }
  if (/\b(obrigad|valeu)\b/.test(t)) return 'De nada! Fico feliz em ajudar.';
  if (/\bnome\b/.test(t) || /\bme chamo\b/.test(t) || /\bmeu nome\b/.test(t)) {
    return 'Prazer em conhecer você! De onde você é?';
  }
  if (persona === 'doctor' && /\bdor|febre|doente|mal\b/.test(t)) {
    return 'Sinto muito. Há quanto tempo você está com esse sintoma?';
  }
  if (persona === 'shopkeeper' && /\bquero|gostaria|preciso\b/.test(t)) {
    return 'Claro! Mais alguma coisa? Posso ajudar com o pagamento.';
  }
  if (persona === 'officer') {
    return 'Certo. E há quanto tempo você mora no Brasil?';
  }
  // rotate a fallback deterministically by message length
  return FALLBACKS[lastUser.length % FALLBACKS.length]!;
}

export const mockAIProvider: AIProvider = {
  id: 'mock',
  label: 'آفلاین (بدون کلید)',
  available: () => true,
  async chat(messages: ChatMessage[], opts?: ChatOptions): Promise<ChatResult> {
    const lastUser =
      [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';
    if (!lastUser) {
      const persona = opts?.persona ?? 'teacher';
      return {
        reply: PERSONA_OPENERS[persona] ?? PERSONA_OPENERS.teacher!,
        providerId: 'mock',
      };
    }
    return {
      reply: personaReply(lastUser, opts),
      corrections: heuristicCorrections(lastUser),
      providerId: 'mock',
    };
  },
};
