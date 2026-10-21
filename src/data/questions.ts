
/*
 * 彻凌数学 · 统一数学题库
 *
 * part1：高一前五章；part2：高一后五章；part3：高二前五章；part4：高二第六章起
 * part5：高三集合与逻辑；part6：高三函数与导数（经 questions-grade3 汇总并保留旧题）
 * part7：高三三角函数与解三角形
 * part8：高三平面向量；part9：高三数列；part10：高三立体几何与空间向量；part11：高三解析几何
 * part12：高三计数、概率与统计；part13：高三八章综合训练
 * 各年级可以独立使用，也可以使用全年级合并数据。
 */

import {
  questions as part1Questions,
  practiceTopics as part1Topics,
} from "./questions-part1";

import {
  vectorQuestions,
  vectorPracticeTopics,
} from "./questions-part2";

import {
  questions as part3Questions,
  practiceTopics as part3Topics,
  practiceChapters as part3Chapters,
} from "./questions-part3";

import {
  questions as part4Questions,
  practiceTopics as part4Topics,
  practiceChapters as part4Chapters,
} from "./questions-part4";
import { grade3Questions, grade3PracticeTopics } from "./questions-grade3";
export { grade3Questions, grade3PracticeTopics, grade3PracticeChapters } from "./questions-grade3";

export const grade2Questions = [...part3Questions, ...part4Questions];
export const grade2PracticeTopics = [...part3Topics, ...part4Topics] as const;
export const grade2PracticeChapters = [...part3Chapters, ...part4Chapters] as const;

/* 保留原有题目类型接口 */
export type {
  Question,
  QuestionOption,
} from "./questions-part1";

/* =========================
   高一专属题库
   前五章题库 + 后五章题库
========================= */

export const grade1Questions = [
  ...part1Questions,
  ...vectorQuestions,
];

export const grade1PracticeTopics = [
  ...part1Topics,
  ...vectorPracticeTopics,
] as const;

/* =========================
   全年级题库
   保持原有兼容性
========================= */

export const allQuestions = [
  ...grade1Questions,
  ...grade2Questions,
  ...grade3Questions,
];

export const allPracticeTopics = [
  ...grade1PracticeTopics,
  ...grade2PracticeTopics,
  ...grade3PracticeTopics,
] as const;

/* 保留原有导出，避免其他页面报错 */
export const questions = allQuestions;
export const practiceTopics = allPracticeTopics;
