import { questions as reviewTestQuestions, practiceTopics as reviewTestTopics, practiceChapters as reviewTestChapters } from "./questions-part13";
import { questions as probstatsQuestions, practiceTopics as probstatsTopics, practiceChapters as probstatsChapters } from "./questions-part12";
import { questions as analyticQuestions, practiceTopics as analyticTopics, practiceChapters as analyticChapters } from "./questions-part11";
import { questions as spatialQuestions, practiceTopics as spatialTopics, practiceChapters as spatialChapters } from "./questions-part10";
import { questions as sequenceQuestions, practiceTopics as sequenceTopics, practiceChapters as sequenceChapters } from "./questions-part9";
import { questions as vectorQuestions, practiceTopics as vectorTopics, practiceChapters as vectorChapters } from "./questions-part8";
import { questions as trigQuestions, practiceTopics as trigTopics, practiceChapters as trigChapters } from "./questions-part7";
import { questions as newFunctionQuestions, practiceTopics as newFunctionTopics } from "./questions-part6";
import { questions as setsQuestions, practiceTopics as setsTopics, practiceChapters as setsChapters } from "./questions-part5";
import type { Question } from "./questions-part1";

const functionReviewTopics = [
  "高三函数与导数·基础巩固",
  "高三函数与导数·综合应用",
  "高三函数与导数·进阶挑战",
] as const;

const functionReviewChapters = [
  { title: "函数与导数", topics: [...newFunctionTopics, ...functionReviewTopics] },
] as const;

// 本站原创练习；ID 与云端练习记录关联，发布后保持稳定。
const functionReviewQuestions: Question[] = [
  {
    id: "g3-functions-basic-01", topic: functionReviewTopics[0], title: "定义域的交集",
    question: "下列函数的定义域是：", formula: String.raw`f(x)=\frac{\ln(x-1)}{\sqrt{3-x}}`,
    options: [{ key: "A", text: "(1，3)" }, { key: "B", text: "[1，3)" }, { key: "C", text: "(1，3]" }, { key: "D", text: "(−∞，3)" }],
    correctAnswer: "A", explanation: "对数真数要求 x−1>0；根式位于分母，要求 3−x>0。取交集得到 1<x<3。错因：只检查根号而忽略分母非零，会误选 C。",
  },
  {
    id: "g3-functions-basic-02", topic: functionReviewTopics[0], title: "切点与斜率",
    question: "曲线在 x=1 处的切线方程为：", formula: String.raw`f(x)=x^3-2x`,
    options: [{ key: "A", text: "y=x" }, { key: "B", text: "y=x−2" }, { key: "C", text: "y=−x" }, { key: "D", text: "y=3x−4" }],
    correctAnswer: "B", explanation: "f(1)=−1，f′(x)=3x²−2，f′(1)=1。用点斜式 y+1=x−1 得 y=x−2。错因：切线斜率是导数值，切点纵坐标是函数值，两者不能混用。",
  },
  {
    id: "g3-functions-basic-03", topic: functionReviewTopics[0], title: "驻点不一定是极值点",
    question: "关于函数在 x=0 处的性质，正确的是：", formula: String.raw`f(x)=x^3`,
    options: [{ key: "A", text: "有极大值" }, { key: "B", text: "有极小值" }, { key: "C", text: "导数不存在" }, { key: "D", text: "导数为零，但没有极值" }],
    correctAnswer: "D", explanation: "f′(x)=3x²，f′(0)=0，但零点两侧导数均为正，函数持续递增，因此没有极值。错因：把导数为零直接当作极值的充分条件。",
  },
  {
    id: "g3-functions-applied-01", topic: functionReviewTopics[1], title: "闭区间最值",
    question: "下列函数在 [−2，2] 上的最大值为：", formula: String.raw`f(x)=x^3-3x`,
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "4" }],
    correctAnswer: "C", explanation: "f′(x)=3(x²−1)，驻点为 −1 和 1。比较 f(−2)=−2、f(−1)=2、f(1)=−2、f(2)=2，最大值为 2。闭区间最值必须同时检查端点与区间内的候选点。",
  },
  {
    id: "g3-functions-applied-02", topic: functionReviewTopics[1], title: "零点个数与水平线",
    question: "方程有三个不同实根时，参数 a 的范围是：", formula: String.raw`x^3-3x=a`,
    options: [{ key: "A", text: "−2<a<2" }, { key: "B", text: "−2≤a≤2" }, { key: "C", text: "a>2" }, { key: "D", text: "a<−2" }],
    correctAnswer: "A", explanation: "函数在 (−∞，−1)、(1，+∞) 上递增，在 (−1，1) 上递减；极大值为 2，极小值为 −2。水平线 y=a 在两极值之间才有三个交点。a=±2 时仅有两个不同实根。",
  },
  {
    id: "g3-functions-applied-03", topic: functionReviewTopics[1], title: "含参函数的单调性",
    question: "函数在 R 上单调递增的充要条件是：", formula: String.raw`f(x)=x^3-ax`,
    options: [{ key: "A", text: "a<0" }, { key: "B", text: "a≥0" }, { key: "C", text: "a>0" }, { key: "D", text: "a≤0" }],
    correctAnswer: "D", explanation: "f′(x)=3x²−a。a≤0 时导数非负，且仅在 a=0、x=0 时为零，函数仍严格递增。a>0 时导数在原点附近为负，不满足条件。错因：要求导数处处严格大于零会漏掉 a=0。",
  },
  {
    id: "g3-functions-advanced-01", topic: functionReviewTopics[2], title: "分离参数与最值",
    question: "对任意 x>0，不等式恒成立，实数 a 的范围是：", formula: String.raw`\ln x\le ax`,
    options: [{ key: "A", text: "a≥0" }, { key: "B", text: "a≥1/e" }, { key: "C", text: "a≤1/e" }, { key: "D", text: "a≥1" }],
    correctAnswer: "B", explanation: "x>0，除以 x 得 a≥ln x/x。设 g(x)=ln x/x，则 g′(x)=(1−ln x)/x²。g 在 (0，e) 上递增，在 (e，+∞) 上递减，最大值为 1/e，故 a≥1/e。",
  },
  {
    id: "g3-functions-advanced-02", topic: functionReviewTopics[2], title: "对数方程的根数",
    question: "方程恰有两个不同正实根时，a 的范围是：", formula: String.raw`\ln x=ax`,
    options: [{ key: "A", text: "a<0" }, { key: "B", text: "a=1/e" }, { key: "C", text: "0<a<1/e" }, { key: "D", text: "a>1/e" }],
    correctAnswer: "C", explanation: "考察 g(x)=ln x/x。它在 (0，e) 上递增，在 (e，+∞) 上递减，最大值为 1/e；x→+∞ 时趋于 0 且在 x>1 时为正。故 0<a<1/e 时两段各有一个交点；a≤0 时仅一个交点，a=1/e 时一个，a>1/e 时没有。",
  },
  {
    id: "g3-functions-advanced-03", topic: functionReviewTopics[2], title: "恒成立与存在性",
    question: "存在 x>0 使不等式成立，实数 a 的范围是：", formula: String.raw`\ln x-x+1>a`,
    options: [{ key: "A", text: "a<0" }, { key: "B", text: "a≤0" }, { key: "C", text: "a>0" }, { key: "D", text: "a≥0" }],
    correctAnswer: "A", explanation: "h′(x)=1/x−1，h(x)=ln x−x+1 在 x=1 处取得最大值 0。存在 h(x)>a 等价于最大值 0>a，即 a<0。错因：忽略严格不等号会错误地包含 a=0；把存在条件当作恒成立也会改变问题。",
  },
];

export const grade3PracticeTopics = [...setsTopics, ...newFunctionTopics, ...functionReviewTopics, ...trigTopics, ...vectorTopics, ...sequenceTopics, ...spatialTopics, ...analyticTopics, ...probstatsTopics, ...reviewTestTopics] as const;
const lessonChapters = [...setsChapters, ...functionReviewChapters, ...trigChapters, ...vectorChapters, ...sequenceChapters, ...spatialChapters, ...analyticChapters, ...probstatsChapters] as const;
export const grade3PracticeChapters = lessonChapters.map(chapter => ({ title: chapter.title, topics: [...chapter.topics, ...(reviewTestChapters.find(test => test.title === chapter.title)?.topics ?? [])] }));
export const grade3Questions: Question[] = [...setsQuestions, ...newFunctionQuestions, ...functionReviewQuestions, ...trigQuestions, ...vectorQuestions, ...sequenceQuestions, ...spatialQuestions, ...analyticQuestions, ...probstatsQuestions, ...reviewTestQuestions];
