/**
 * The "Federal Prep Course" — each lesson is a step-by-step, simplified
 * re-teaching (in Persian, with Brazilian Portuguese examples) of a source
 * "Aula" from the federal-preparation materials the learner provided.
 */
import type { CourseLesson } from '@/domain/content/schema';
import { aula1 } from './aula1';
import { aula2 } from './aula2';
import { aula3 } from './aula3';
import { aula4 } from './aula4';
import { aula5 } from './aula5';
import { aula6 } from './aula6';
import { aula7 } from './aula7';
import { aula8 } from './aula8';
import { aula9 } from './aula9';
import { aula10 } from './aula10';
import { aula11 } from './aula11';
import { aula12 } from './aula12';
import { aula13 } from './aula13';
import { aula14 } from './aula14';
import { aula15 } from './aula15';
import { aula16 } from './aula16';

export const courseLessons: CourseLesson[] = [
  aula1,
  aula2,
  aula3,
  aula4,
  aula5,
  aula6,
  aula7,
  aula8,
  aula9,
  aula10,
  aula11,
  aula12,
  aula13,
  aula14,
  aula15,
  aula16,
].sort((a, b) => a.order - b.order);
