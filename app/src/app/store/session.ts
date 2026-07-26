/**
 * Session store — which learner profile is active. The active profile id is
 * persisted (device-level) but the profile records themselves live in the
 * local database (src/infra/db). Supports multiple independent family profiles.
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { db, type Profile } from '@/infra/db/db';

interface SessionState {
  activeProfileId: string | null;
  profile: Profile | null;
  profiles: Profile[];
  loaded: boolean;
  loadProfiles: () => Promise<void>;
  setActiveProfile: (id: string) => Promise<void>;
  createProfile: (p: Omit<Profile, 'id' | 'createdAt'>) => Promise<Profile>;
  updateProfile: (patch: Partial<Profile>) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
  refresh: () => Promise<void>;
}

function uid(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export const useSession = create<SessionState>()(
  persist(
    (set, get) => ({
      activeProfileId: null,
      profile: null,
      profiles: [],
      loaded: false,

      loadProfiles: async () => {
        const profiles = await db.profiles.toArray();
        let { activeProfileId } = get();
        if (!activeProfileId && profiles.length > 0) {
          activeProfileId = profiles[0]!.id;
        }
        const profile = profiles.find((p) => p.id === activeProfileId) ?? null;
        set({ profiles, profile, activeProfileId, loaded: true });
      },

      setActiveProfile: async (id) => {
        const profile = (await db.profiles.get(id)) ?? null;
        set({ activeProfileId: id, profile });
      },

      createProfile: async (input) => {
        const profile: Profile = {
          ...input,
          id: uid('profile'),
          createdAt: new Date().toISOString(),
        };
        await db.profiles.put(profile);
        const profiles = await db.profiles.toArray();
        set({ profiles, profile, activeProfileId: profile.id });
        return profile;
      },

      updateProfile: async (patch) => {
        const current = get().profile;
        if (!current) return;
        const updated = { ...current, ...patch };
        await db.profiles.put(updated);
        const profiles = await db.profiles.toArray();
        set({ profile: updated, profiles });
      },

      deleteProfile: async (id) => {
        await db.profiles.delete(id);
        const profiles = await db.profiles.toArray();
        const next = profiles[0] ?? null;
        set({
          profiles,
          profile: next,
          activeProfileId: next?.id ?? null,
        });
      },

      refresh: async () => {
        await get().loadProfiles();
      },
    }),
    {
      name: 'ola-brasil-session',
      partialize: (s) => ({ activeProfileId: s.activeProfileId }),
    },
  ),
);
