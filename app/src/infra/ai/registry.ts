/**
 * AI provider registry. Resolves the configured provider, falling back to the
 * always-available mock when the chosen provider has no credentials.
 *
 * To add a provider (Anthropic, Gemini, local): implement AIProvider and
 * register it here. See docs/adding-ai-provider.md.
 */
import type { AIProvider } from './types';
import { mockAIProvider } from './mock';
import { openAIProvider } from './openai';

const providers: AIProvider[] = [mockAIProvider, openAIProvider];

export function listProviders(): AIProvider[] {
  return providers;
}

export function listAvailableProviders(): AIProvider[] {
  return providers.filter((p) => p.available());
}

/** Resolve a provider by id, falling back to mock if unavailable. */
export function resolveProvider(id: string): AIProvider {
  const chosen = providers.find((p) => p.id === id);
  if (chosen && chosen.available()) return chosen;
  return mockAIProvider;
}
