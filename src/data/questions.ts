export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  topic: string;
  title: string;
  formula: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: "monotonicity-001",
    topic: "高一数学 · 函数的单调性",
    title: "二次函数单调性基础题",
    formula: "f(x)=x^2-2x+3",
    question: "下列关于该函数单调性的说法正确的是：",
    options: [
      {
        id: "A",
        text: "在整个实数范围内单调递增",
      },
      {
        id: "B",
        text: "在 (-∞, 1] 上递减，在 [1, +∞) 上递增",
      },
      {
        id: "C",
        text: "在 (-∞, 1] 上递增，在 [1, +∞) 上递减",
      },
      {
        id: "D",
        text: "在整个实数范围内单调递减",
      },
    ],
    correctAnswer: "B",
    explanation:
      "将函数配方为 f(x)=(x-1)²+2。函数开口向上，对称轴为 x=1，因此在 (-∞,1] 上单调递减，在 [1,+∞) 上单调递增。",
  },

  {
    id: "monotonicity-002",
    topic: "高一数学 · 函数的单调性",
    title: "开口向下二次函数",
    formula: "f(x)=-x^2+4x+1",
    question: "该函数的单调性为：",
    options: [
      {
        id: "A",
        text: "在整个实数范围内单调递增",
      },
      {
        id: "B",
        text: "在 (-∞, 2] 上递减，在 [2, +∞) 上递增",
      },
      {
        id: "C",
        text: "在 (-∞, 2] 上递增，在 [2, +∞) 上递减",
      },
      {
        id: "D",
        text: "在整个实数范围内单调递减",
      },
    ],
    correctAnswer: "C",
    explanation:
      "函数开口向下，对称轴为 x=2，因此在 (-∞,2] 上单调递增，在 [2,+∞) 上单调递减。",
  },

  {
    id: "monotonicity-003",
    topic: "高一数学 · 函数的单调性",
    title: "顶点式函数单调性",
    formula: "f(x)=(x+3)^2+2",
    question: "该函数的单调区间正确的是：",
    options: [
      {
        id: "A",
        text: "在 (-∞, -3] 上递减，在 [-3, +∞) 上递增",
      },
      {
        id: "B",
        text: "在 (-∞, -3] 上递增，在 [-3, +∞) 上递减",
      },
      {
        id: "C",
        text: "在整个实数范围内递增",
      },
      {
        id: "D",
        text: "在整个实数范围内递减",
      },
    ],
    correctAnswer: "A",
    explanation:
      "函数已经是顶点式，对称轴为 x=-3，且开口向上，因此左侧递减，右侧递增。",
  },
];