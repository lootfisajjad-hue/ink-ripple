/**
 * "Portas Abertas" book track — each lesson is a step-by-step, simplified
 * re-teaching (in Persian, with Brazilian-Portuguese examples) of one unit of
 * the book *Portas Abertas: Português para Imigrantes* (USP Language Center &
 * the São Paulo city government), which the learner provided.
 */
import type { CourseLesson } from '@/domain/content/schema';
import { portas1 } from './unit1';
import { portas2 } from './unit2';
import { portas3 } from './unit3';
import { portas4 } from './unit4';
import { portas5 } from './unit5';
import { portas6 } from './unit6';
import { portas7 } from './unit7';
import { portas8 } from './unit8';
import { portas9 } from './unit9';
import { portas10 } from './unit10';

export const portasLessons: CourseLesson[] = [
  portas1,
  portas2,
  portas3,
  portas4,
  portas5,
  portas6,
  portas7,
  portas8,
  portas9,
  portas10,
].sort((a, b) => a.order - b.order);
