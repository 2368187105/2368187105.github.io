
/*
 * 彻凌数学 · 高一数学统一题库
 *
 * questions-part1.ts
 * 第 01～05 章，共 75 道题
 *
 * questions-part2.ts
 * 第 06～10 章，逐步增加题目
 *
 * 所有练习页面统一从本文件读取题目。
 */

import {
  questions as part1Questions,
  practiceTopics as part1Topics,
} from "./questions-part1";

import {
  vectorQuestions,
  vectorPracticeTopics,
} from "./questions-part2";

/* 保留原有的题目类型接口 */
export type {
  Question,
  QuestionOption,
} from "./questions-part1";

/* 合并全部题目 */
export const questions = [
  ...part1Questions,
  ...vectorQuestions,
];

/* 合并全部专题 */
export const practiceTopics = [
  ...part1Topics,
  ...vectorPracticeTopics,
] as const;
