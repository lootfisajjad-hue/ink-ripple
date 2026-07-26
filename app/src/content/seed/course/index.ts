/**
 * The "Federal Prep Course" — each lesson is a step-by-step, simplified
 * re-teaching (in Persian, with Brazilian Portuguese examples) of a source
 * "Aula" from the federal-preparation materials the learner provided.
 */
import type { CourseLesson } from '@/domain/content/schema';
import { aula1 } from './aula1';
import { aula2 } from './aula2';
import { aula11 } from './aula11';
import { aula14 } from './aula14';
import { aula15 } from './aula15';

export const courseLessons: CourseLesson[] = [
  aula1,
  aula2,
  aula11,
  aula14,
  aula15,
].sort((a, b) => a.order - b.order);
