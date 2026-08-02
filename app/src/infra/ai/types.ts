/**
 * Provider-agnostic AI contract. The app depends only on this interface; the
 * concrete provider (mock, OpenAI, Anthropic, Gemini, or a local model) is
 * chosen at runtime. See docs/adding-ai-provider.md.
 */

export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface ChatOptions {
  /** conversational persona, e.g. 'teacher' | 'officer' | 'shopkeeper' */
  persona?: string;
  /** learner CEFR level so the assistant matches difficulty */
  level?: string;
  /** desired reply language for explanations */
  explainLang?: 'fa' | 'pt' | 'en';
  temperature?: number;
  signal?: AbortSignal;
}

export interface Correction {
  original: string;
  corrected: string;
  explanationFa: string;
}

export interface ChatResult {
  /** the assistant's Portuguese reply */
  reply: string;
  /** optional gentle corrections of the user's last message */
  corrections?: Correction[];
  /** which provider produced this (for UI transparency) */
  providerId: string;
}

export interface AIProvider {
  id: string;
  label: string;
  /** true when the provider is usable in the current environment */
  available(): boolean;
  chat(messages: ChatMessage[], opts?: ChatOptions): Promise<ChatResult>;
}
