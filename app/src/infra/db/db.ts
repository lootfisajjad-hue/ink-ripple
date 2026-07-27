/**
 * Local-first database (IndexedDB via Dexie).
 *
 * The app is offline-first: every learner-facing feature reads and writes here,
 * and an optional SyncProvider (see src/infra/sync) can later mirror selected
 * tables to a backend. No network is required for the app to function.
 */
import Dexie, { type EntityTable } from 'dexie';
import type {
  Vocab,
  Phrase,
  Lesson,
  Dialogue,
  InterviewQuestion,
  CitizenshipTopic,
  CityContent,
  DocumentTemplate,
  Source,
  CourseLesson,
} from '@/domain/content/schema';
import type { MemoryState } from '@/domain/srs/fsrs';
import type { Skill } from '@/domain/placement/placement';

/** A learner profile — the app supports multiple independent profiles. */
export interface Profile {
  id: string;
  displayName: string;
  interfaceLang: 'fa' | 'pt' | 'en';
  goal: string;
  dailyMinutes: number;
  cefr: string;
  createdAt: string;
  onboarded: boolean;
}

/** A flashcard = a content item tracked by the SRS scheduler, per profile. */
export interface Flashcard {
  id: string; // `${profileId}:${itemId}`
  profileId: string;
  itemId: string;
  itemType: 'vocab' | 'phrase' | 'interview' | 'mistake';
  deck: string;
  front: string;
  back: string;
  pronunciation?: string;
  memory: MemoryState;
  /** user-set importance, 1 (low) .. 5 (high); 0 or undefined = unrated */
  importance?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewLog {
  id?: number;
  profileId: string;
  cardId: string;
  rating: string;
  reviewedAt: string;
  scheduledDays: number;
}

export interface ProgressRecord {
  id: string; // `${profileId}:${lessonId}`
  profileId: string;
  lessonId: string;
  completed: boolean;
  score: number;
  mastery: number; // 0..1
  updatedAt: string;
}

export interface SkillScoreRecord {
  id: string; // `${profileId}:${skill}`
  profileId: string;
  skill: Skill;
  score: number;
  cefr: string;
  updatedAt: string;
}

export interface MistakeRecord {
  id?: number;
  profileId: string;
  context: string; // 'lesson' | 'interview' | 'conversation'
  pt: string;
  correctionPt: string;
  noteFa?: string;
  createdAt: string;
  turnedIntoCard: boolean;
}

export interface InterviewSessionRecord {
  id: string;
  profileId: string;
  mode: string;
  startedAt: string;
  endedAt?: string;
  turns: Array<{
    questionId?: string;
    questionPt: string;
    answer: string;
    feedbackFa?: string;
    score?: number;
  }>;
  report?: {
    overallScore: number;
    strengths: string[];
    weaknesses: string[];
  };
}

export interface ConversationRecord {
  id: string;
  profileId: string;
  role: string;
  startedAt: string;
  messages: Array<{ role: 'user' | 'assistant'; text: string; ts: string }>;
}

/** A user-owned document checklist item (citizenship). Local by default. */
export interface DocumentItem {
  id: string;
  profileId: string;
  templateId?: string;
  name: string;
  status: 'ready' | 'missing' | 'expired' | 'translation';
  issuedAt?: string;
  expiresAt?: string;
  note?: string;
  updatedAt: string;
}

export interface PronunciationAttempt {
  id?: number;
  profileId: string;
  phraseId: string;
  createdAt: string;
  durationMs: number;
}

export interface DailyActivity {
  id: string; // `${profileId}:${yyyy-mm-dd}`
  profileId: string;
  date: string;
  minutes: number;
  reviews: number;
  lessons: number;
}

export class OlaBrasilDB extends Dexie {
  // content (shared, seeded)
  sources!: EntityTable<Source, 'id'>;
  vocab!: EntityTable<Vocab, 'id'>;
  phrases!: EntityTable<Phrase, 'id'>;
  lessons!: EntityTable<Lesson, 'id'>;
  dialogues!: EntityTable<Dialogue, 'id'>;
  interviewQuestions!: EntityTable<InterviewQuestion, 'id'>;
  citizenshipTopics!: EntityTable<CitizenshipTopic, 'id'>;
  cities!: EntityTable<CityContent, 'id'>;
  documentTemplates!: EntityTable<DocumentTemplate, 'id'>;
  courseLessons!: EntityTable<CourseLesson, 'id'>;

  // per-profile state
  profiles!: EntityTable<Profile, 'id'>;
  flashcards!: EntityTable<Flashcard, 'id'>;
  reviewLogs!: EntityTable<ReviewLog, 'id'>;
  progress!: EntityTable<ProgressRecord, 'id'>;
  skillScores!: EntityTable<SkillScoreRecord, 'id'>;
  mistakes!: EntityTable<MistakeRecord, 'id'>;
  interviewSessions!: EntityTable<InterviewSessionRecord, 'id'>;
  conversations!: EntityTable<ConversationRecord, 'id'>;
  documents!: EntityTable<DocumentItem, 'id'>;
  pronunciationAttempts!: EntityTable<PronunciationAttempt, 'id'>;
  dailyActivity!: EntityTable<DailyActivity, 'id'>;

  constructor(name = 'ola-brasil') {
    super(name);
    this.version(1).stores({
      sources: 'id',
      vocab: 'id, cefr, category',
      phrases: 'id, cefr, category',
      lessons: 'id, track, cefr, order',
      dialogues: 'id, scenario, cefr',
      interviewQuestions: 'id, topic',
      citizenshipTopics: 'id, category',
      cities: 'id, city',
      documentTemplates: 'id',

      profiles: 'id',
      flashcards: 'id, profileId, deck, [profileId+deck], memory.due',
      reviewLogs: '++id, profileId, cardId, reviewedAt',
      progress: 'id, profileId, lessonId',
      skillScores: 'id, profileId, skill',
      mistakes: '++id, profileId, context, turnedIntoCard',
      interviewSessions: 'id, profileId',
      conversations: 'id, profileId',
      documents: 'id, profileId',
      pronunciationAttempts: '++id, profileId, phraseId',
      dailyActivity: 'id, profileId, date',
    });

    // v2: add the Federal Prep Course content table.
    this.version(2).stores({
      courseLessons: 'id, order',
    });

    // v3: index flashcard importance (user-set star rating).
    this.version(3).stores({
      flashcards:
        'id, profileId, deck, [profileId+deck], memory.due, importance',
    });
  }
}

export const db = new OlaBrasilDB();
