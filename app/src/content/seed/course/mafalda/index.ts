/**
 * "Curso Popular Mafalda" book track — each lesson re-teaches (in Persian,
 * with Brazilian-Portuguese examples) one chapter of the book *Português do
 * Brasil para Refugiadas e Refugiados* (Curso Popular Mafalda, São Paulo
 * 2015), which the learner provided.
 */
import type { CourseLesson } from '@/domain/content/schema';
import { mafalda1 } from './ch1';
import { mafalda2 } from './ch2';
import { mafalda3 } from './ch3';
import { mafalda4 } from './ch4';
import { mafalda5 } from './ch5';
import { mafalda6 } from './ch6';
import { mafalda7 } from './ch7';
import { mafalda8 } from './ch8';
import { mafalda9 } from './ch9';
import { mafalda10 } from './ch10';
import { mafalda11 } from './ch11';
import { mafalda12 } from './ch12';
import { mafalda13 } from './ch13';

export const mafaldaLessons: CourseLesson[] = [
  mafalda1,
  mafalda2,
  mafalda3,
  mafalda4,
  mafalda5,
  mafalda6,
  mafalda7,
  mafalda8,
  mafalda9,
  mafalda10,
  mafalda11,
  mafalda12,
  mafalda13,
].sort((a, b) => a.order - b.order);
