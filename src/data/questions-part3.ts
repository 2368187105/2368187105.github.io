import type { Question } from "./questions-part1";

/*
 * 彻凌数学 · 题库第三部分
 *
 * 高二已开放章节：第 01 章 直线与方程；第 02 章 圆与方程；第 03 章 圆锥曲线与方程；第 04 章 数列；第 05 章 导数及其应用。
 * 共 18 个专题、54 道题。题目 ID 和专题名沿用迁移前数据，兼容云端记录。
 * 高一题库仍为 questions-part1.ts（第 01—05 章）、questions-part2.ts（第 06—10 章）。
 */

export const practiceTopics = [
  "直线的斜率与倾斜角",
  "直线的方程",
  "两条直线的平行与垂直",
  "两条直线的交点",
  "平面上的距离",
  "圆的方程",
  "直线与圆的位置关系",
  "圆与圆的位置关系",
  "椭圆",
  "双曲线",
  "抛物线",
  "数列",
  "等差数列",
  "等比数列",
  "数学归纳法",
  "导数的概念",
  "导数的运算",
  "导数在研究函数中的应用"
] as const;

/** 这里只登记实际已开放的章节。五章分别为 5 节、3 节、3 节、4 节、3 节。 */
export const practiceChapters = [
  { title: "直线与方程", topics: practiceTopics.slice(0, 5) },
  { title: "圆与方程", topics: practiceTopics.slice(5, 8) },
  { title: "圆锥曲线与方程", topics: practiceTopics.slice(8, 11) },
  { title: "数列", topics: practiceTopics.slice(11, 15) },
  { title: "导数及其应用", topics: practiceTopics.slice(15, 18) },
] as const;

export const questions: Question[] = [
  // 第 01 章 · 直线与方程 / 直线的斜率与倾斜角
  {
    id: "g2-line-slope-angle-01",
    topic: "直线的斜率与倾斜角",
    title: "根据两点坐标求斜率",
    question: "经过点 A、B 的直线斜率 k 等于：",
    formula: String.raw`A(1,2),\quad B(3,6)`,
    options: [
      {
        key: "A",
        text: "1"
      },
      {
        key: "B",
        text: "2"
      },
      {
        key: "C",
        text: "3"
      },
      {
        key: "D",
        text: "−2"
      }
    ],
    correctAnswer: "B",
    explanation: "由两点求斜率公式 k=(y₂−y₁)/(x₂−x₁)，得 k=(6−2)/(3−1)=2。"
  },

  {
    id: "g2-line-slope-angle-02",
    topic: "直线的斜率与倾斜角",
    title: "由倾斜角求斜率",
    question: "一条直线的倾斜角为 135°，则它的斜率为：",
    formula: String.raw`k=\tan\alpha`,
    options: [
      {
        key: "A",
        text: "1"
      },
      {
        key: "B",
        text: "√3"
      },
      {
        key: "C",
        text: "−1"
      },
      {
        key: "D",
        text: "不存在"
      }
    ],
    correctAnswer: "C",
    explanation: "当直线倾斜角 α 不等于 90° 时，斜率 k=tanα。因为 tan135°=−1，所以斜率为 −1。"
  },

  {
    id: "g2-line-slope-angle-03",
    topic: "直线的斜率与倾斜角",
    title: "竖直直线的斜率",
    question: "直线 x=4 的斜率是：",
    options: [
      {
        key: "A",
        text: "0"
      },
      {
        key: "B",
        text: "4"
      },
      {
        key: "C",
        text: "1"
      },
      {
        key: "D",
        text: "不存在"
      }
    ],
    correctAnswer: "D",
    explanation: "直线 x=4 是竖直直线，倾斜角为 90°，此时 tan90° 不存在，因此直线斜率不存在。"
  },

  // 第 01 章 · 直线与方程 / 直线的方程
  {
    id: "g2-line-equation-01",
    topic: "直线的方程",
    title: "利用点斜式写方程",
    question: "经过点 (1，3)，斜率为 2 的直线方程是：",
    formula: String.raw`y-y_0=k(x-x_0)`,
    options: [
      {
        key: "A",
        text: "y=2x+1"
      },
      {
        key: "B",
        text: "y=2x+3"
      },
      {
        key: "C",
        text: "y=x+2"
      },
      {
        key: "D",
        text: "y=−2x+5"
      }
    ],
    correctAnswer: "A",
    explanation: "代入点斜式得 y−3=2(x−1)，整理可得 y=2x+1。"
  },

  {
    id: "g2-line-equation-02",
    topic: "直线的方程",
    title: "识别斜截式参数",
    question: "直线 y=−3x+4 的斜率和纵截距分别是：",
    formula: String.raw`y=kx+b`,
    options: [
      {
        key: "A",
        text: "3，4"
      },
      {
        key: "B",
        text: "−3，−4"
      },
      {
        key: "C",
        text: "−3，4"
      },
      {
        key: "D",
        text: "4，−3"
      }
    ],
    correctAnswer: "C",
    explanation: "与斜截式 y=kx+b 对照可知，斜率 k=−3，纵截距 b=4。"
  },

  {
    id: "g2-line-equation-03",
    topic: "直线的方程",
    title: "由两点求直线方程",
    question: "经过点 (0，2) 和 (2，0) 的直线方程是：",
    options: [
      {
        key: "A",
        text: "y=x+2"
      },
      {
        key: "B",
        text: "x+y−2=0"
      },
      {
        key: "C",
        text: "2x+y−2=0"
      },
      {
        key: "D",
        text: "x−y−2=0"
      }
    ],
    correctAnswer: "B",
    explanation: "斜率 k=(0−2)/(2−0)=−1，且直线经过 (0，2)，所以 y=−x+2，即 x+y−2=0。"
  },

  // 第 01 章 · 直线与方程 / 两条直线的平行与垂直
  {
    id: "g2-line-parallel-perpendicular-01",
    topic: "两条直线的平行与垂直",
    title: "利用斜率判断平行",
    question: "直线 y=2x+1 与 y=2x−3 的位置关系是：",
    options: [
      {
        key: "A",
        text: "平行"
      },
      {
        key: "B",
        text: "垂直"
      },
      {
        key: "C",
        text: "重合"
      },
      {
        key: "D",
        text: "相交但不垂直"
      }
    ],
    correctAnswer: "A",
    explanation: "两条直线斜率均为 2，但纵截距不同，因此两直线平行且不重合。"
  },

  {
    id: "g2-line-parallel-perpendicular-02",
    topic: "两条直线的平行与垂直",
    title: "利用斜率判断垂直",
    question: "一条直线的斜率为 2，与它垂直的另一条非竖直直线的斜率为：",
    formula: String.raw`k_1k_2=-1`,
    options: [
      {
        key: "A",
        text: "2"
      },
      {
        key: "B",
        text: "−1/2"
      },
      {
        key: "C",
        text: "1/2"
      },
      {
        key: "D",
        text: "−2"
      }
    ],
    correctAnswer: "B",
    explanation: "两条斜率都存在的互相垂直直线满足 k₁k₂=−1，所以 k₂=−1/2。"
  },

  {
    id: "g2-line-parallel-perpendicular-03",
    topic: "两条直线的平行与垂直",
    title: "判断水平线与竖直线",
    question: "直线 x=2 与直线 y=3 的位置关系是：",
    options: [
      {
        key: "A",
        text: "平行"
      },
      {
        key: "B",
        text: "重合"
      },
      {
        key: "C",
        text: "垂直"
      },
      {
        key: "D",
        text: "相交但不垂直"
      }
    ],
    correctAnswer: "C",
    explanation: "x=2 是竖直直线，y=3 是水平直线，二者相交且互相垂直。判断时不能直接套用两条斜率均存在的 k₁k₂=−1。"
  },

  // 第 01 章 · 直线与方程 / 两条直线的交点
  {
    id: "g2-line-intersection-01",
    topic: "两条直线的交点",
    title: "联立斜截式求交点",
    question: "直线 y=2x+1 与 y=−x+4 的交点坐标是：",
    options: [
      {
        key: "A",
        text: "(1，3)"
      },
      {
        key: "B",
        text: "(2，5)"
      },
      {
        key: "C",
        text: "(3，1)"
      },
      {
        key: "D",
        text: "(0，4)"
      }
    ],
    correctAnswer: "A",
    explanation: "联立方程 2x+1=−x+4，得 3x=3，所以 x=1，代入得 y=3，交点为 (1，3)。"
  },

  {
    id: "g2-line-intersection-02",
    topic: "两条直线的交点",
    title: "联立一般式求交点",
    question: "方程组 x+y=5，x−y=1 的解对应的交点坐标是：",
    options: [
      {
        key: "A",
        text: "(2，3)"
      },
      {
        key: "B",
        text: "(4，1)"
      },
      {
        key: "C",
        text: "(3，2)"
      },
      {
        key: "D",
        text: "(1，4)"
      }
    ],
    correctAnswer: "C",
    explanation: "两式相加得 2x=6，所以 x=3；代入 x+y=5 得 y=2，交点为 (3，2)。"
  },

  {
    id: "g2-line-intersection-03",
    topic: "两条直线的交点",
    title: "判断两直线是否相交",
    question: "直线 2x−y+1=0 与 4x−2y+3=0 的位置关系是：",
    options: [
      {
        key: "A",
        text: "相交于原点"
      },
      {
        key: "B",
        text: "重合"
      },
      {
        key: "C",
        text: "垂直"
      },
      {
        key: "D",
        text: "平行且不重合"
      }
    ],
    correctAnswer: "D",
    explanation: "第一条直线可写成 y=2x+1，第二条可写成 y=2x+3/2。两条直线斜率相同、截距不同，因此平行且不重合，没有交点。"
  },

  // 第 01 章 · 直线与方程 / 平面上的距离
  {
    id: "g2-line-distance-01",
    topic: "平面上的距离",
    title: "两点间距离",
    question: "点 A、B 之间的距离为：",
    formula: String.raw`A(1,2),\quad B(4,6)`,
    options: [
      {
        key: "A",
        text: "4"
      },
      {
        key: "B",
        text: "5"
      },
      {
        key: "C",
        text: "6"
      },
      {
        key: "D",
        text: "7"
      }
    ],
    correctAnswer: "B",
    explanation: "由两点间距离公式，AB=√((4−1)²+(6−2)²)=√(9+16)=5。"
  },

  {
    id: "g2-line-distance-02",
    topic: "平面上的距离",
    title: "点到直线的距离",
    question: "点 P(1，2) 到直线 3x+4y−10=0 的距离为：",
    formula: String.raw`d=\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}`,
    options: [
      {
        key: "A",
        text: "1/5"
      },
      {
        key: "B",
        text: "1"
      },
      {
        key: "C",
        text: "5"
      },
      {
        key: "D",
        text: "2"
      }
    ],
    correctAnswer: "A",
    explanation: "代入点到直线距离公式，d=|3×1+4×2−10|/√(3²+4²)=|1|/5=1/5。"
  },

  {
    id: "g2-line-distance-03",
    topic: "平面上的距离",
    title: "两条平行直线间的距离",
    question: "两条平行直线之间的距离为：",
    formula: String.raw`3x+4y+1=0,\quad 3x+4y-9=0`,
    options: [
      {
        key: "A",
        text: "1"
      },
      {
        key: "B",
        text: "3"
      },
      {
        key: "C",
        text: "2"
      },
      {
        key: "D",
        text: "10"
      }
    ],
    correctAnswer: "C",
    explanation: "两条平行直线 Ax+By+C₁=0 与 Ax+By+C₂=0 的距离为 |C₁−C₂|/√(A²+B²)，所以 d=|1−(−9)|/√(3²+4²)=10/5=2。"
  },

  // 第 02 章 · 圆与方程 / 圆的方程
  {
    id: "g2-circle-equation-01",
    topic: "圆的方程",
    title: "由标准方程读出圆心与半径",
    question: "圆的圆心和半径分别是：",
    formula: String.raw`(x-2)^2+(y+1)^2=9`,
    options: [
      {
        key: "A",
        text: "(2，−1)，3"
      },
      {
        key: "B",
        text: "(−2，1)，3"
      },
      {
        key: "C",
        text: "(2，−1)，9"
      },
      {
        key: "D",
        text: "(2，1)，3"
      }
    ],
    correctAnswer: "A",
    explanation: "与 (x−a)²+(y−b)²=r² 对照，圆心为 (2，−1)，半径为 √9=3。注意 y+1=y−(−1)。"
  },

  {
    id: "g2-circle-equation-02",
    topic: "圆的方程",
    title: "一般方程配方",
    question: "下列方程表示的圆，其半径为：",
    formula: String.raw`x^2+y^2-6x+4y-12=0`,
    options: [
      {
        key: "A",
        text: "√12"
      },
      {
        key: "B",
        text: "13"
      },
      {
        key: "C",
        text: "5"
      },
      {
        key: "D",
        text: "25"
      }
    ],
    correctAnswer: "C",
    explanation: "配方得 (x−3)²+(y+2)²=12+9+4=25，所以圆心为 (3，−2)，半径为 5。"
  },

  {
    id: "g2-circle-equation-03",
    topic: "圆的方程",
    title: "方程表示圆的条件",
    question: "若方程表示一个半径大于零的圆，则 m 的取值范围是：",
    formula: String.raw`x^2+y^2+2x-4y+m=0`,
    options: [
      {
        key: "A",
        text: "m ≤ 5"
      },
      {
        key: "B",
        text: "m < 5"
      },
      {
        key: "C",
        text: "m > 5"
      },
      {
        key: "D",
        text: "m ≥ 5"
      }
    ],
    correctAnswer: "B",
    explanation: "配方得 (x+1)²+(y−2)²=5−m。表示圆需要半径平方 5−m>0，即 m<5；m=5 时仅表示一个点。"
  },

  // 第 02 章 · 圆与方程 / 直线与圆的位置关系
  {
    id: "g2-line-circle-01",
    topic: "直线与圆的位置关系",
    title: "距离法判断相切",
    question: "直线与圆的位置关系是：",
    formula: String.raw`3x+4y-25=0,\qquad x^2+y^2=25`,
    options: [
      {
        key: "A",
        text: "相交"
      },
      {
        key: "B",
        text: "相离"
      },
      {
        key: "C",
        text: "无法确定"
      },
      {
        key: "D",
        text: "相切"
      }
    ],
    correctAnswer: "D",
    explanation: "圆心为原点，半径 r=5。圆心到直线的距离 d=25/√(3²+4²)=5，与半径相等，因此相切。"
  },

  {
    id: "g2-line-circle-02",
    topic: "直线与圆的位置关系",
    title: "利用半弦直角三角形求弦长",
    question: "直线 x=3 截圆所得的弦长为：",
    formula: String.raw`x^2+y^2=25`,
    options: [
      {
        key: "A",
        text: "4"
      },
      {
        key: "B",
        text: "6"
      },
      {
        key: "C",
        text: "8"
      },
      {
        key: "D",
        text: "10"
      }
    ],
    correctAnswer: "C",
    explanation: "圆半径 r=5，圆心到直线的距离 d=3。半弦长为 √(25−9)=4，所以整条弦长为 8。"
  },

  {
    id: "g2-line-circle-03",
    topic: "直线与圆的位置关系",
    title: "含参数直线与圆相交",
    question: "若直线 y=x+b 与圆有两个不同交点，则 b 的取值范围是：",
    formula: String.raw`x^2+y^2=2`,
    options: [
      {
        key: "A",
        text: "−2 < b < 2"
      },
      {
        key: "B",
        text: "−2 ≤ b ≤ 2"
      },
      {
        key: "C",
        text: "b > 2"
      },
      {
        key: "D",
        text: "b=±2"
      }
    ],
    correctAnswer: "A",
    explanation: "直线写为 x−y+b=0，圆心到直线距离为 |b|/√2。两个不同交点要求 |b|/√2<√2，即 |b|<2。等号对应相切，不能取到。"
  },

  // 第 02 章 · 圆与方程 / 圆与圆的位置关系
  {
    id: "g2-circle-circle-01",
    topic: "圆与圆的位置关系",
    title: "外切的条件",
    question: "两圆半径分别为 3 和 2，圆心距为 5，则两圆：",
    options: [
      {
        key: "A",
        text: "相交"
      },
      {
        key: "B",
        text: "外切"
      },
      {
        key: "C",
        text: "内切"
      },
      {
        key: "D",
        text: "外离"
      }
    ],
    correctAnswer: "B",
    explanation: "圆心距 d=5，半径和 R+r=3+2=5，因此 d=R+r，两圆外切，有一个公共点。"
  },

  {
    id: "g2-circle-circle-02",
    topic: "圆与圆的位置关系",
    title: "从方程判断内含",
    question: "下列两圆的位置关系是：",
    formula: String.raw`x^2+y^2=16,\qquad (x-1)^2+y^2=1`,
    options: [
      {
        key: "A",
        text: "外离"
      },
      {
        key: "B",
        text: "相交"
      },
      {
        key: "C",
        text: "内切"
      },
      {
        key: "D",
        text: "内含（无公共点）"
      }
    ],
    correctAnswer: "D",
    explanation: "圆心分别为 (0，0)、(1，0)，圆心距 d=1，半径为 4 和 1。因为 1<|4−1|=3，小圆在大圆内部且不相切，无公共点。"
  },

  {
    id: "g2-circle-circle-03",
    topic: "圆与圆的位置关系",
    title: "相减求公共弦所在直线",
    question: "两相交圆的公共弦所在直线方程为：",
    formula: String.raw`x^2+y^2=9,\qquad (x-4)^2+y^2=9`,
    options: [
      {
        key: "A",
        text: "y=2"
      },
      {
        key: "B",
        text: "x=4"
      },
      {
        key: "C",
        text: "x=2"
      },
      {
        key: "D",
        text: "x+y=2"
      }
    ],
    correctAnswer: "C",
    explanation: "将第二个方程展开后减去第一个，得 −8x+16=0，所以公共弦所在直线是 x=2。代回可得公共点 (2，√5)、(2，−√5)。"
  },

  // 第 03 章 · 圆锥曲线与方程 / 椭圆
  {
    id: "g2-ellipse-01",
    topic: "椭圆",
    title: "识别焦点坐标",
    question: "下列椭圆的焦点坐标为：",
    formula: String.raw`\frac{x^2}{25}+\frac{y^2}{9}=1`,
    options: [
      {
        key: "A",
        text: "(−4，0)、(4，0)"
      },
      {
        key: "B",
        text: "(−5，0)、(5，0)"
      },
      {
        key: "C",
        text: "(0，−4)、(0，4)"
      },
      {
        key: "D",
        text: "(−3，0)、(3，0)"
      }
    ],
    correctAnswer: "A",
    explanation: "a²=25、b²=9，所以 c²=25−9=16，c=4。较大的分母在 x² 下，焦点为 (±4，0)。"
  },

  {
    id: "g2-ellipse-02",
    topic: "椭圆",
    title: "计算离心率",
    question: "下列椭圆的离心率为：",
    formula: String.raw`\frac{x^2}{16}+\frac{y^2}{12}=1`,
    options: [
      {
        key: "A",
        text: "1/4"
      },
      {
        key: "B",
        text: "1/2"
      },
      {
        key: "C",
        text: "√3/2"
      },
      {
        key: "D",
        text: "2"
      }
    ],
    correctAnswer: "B",
    explanation: "a=4，c=√(16−12)=2，因此 e=c/a=1/2。"
  },

  {
    id: "g2-ellipse-03",
    topic: "椭圆",
    title: "由定义求标准方程",
    question: "椭圆的焦点为 (−3，0)、(3，0)，圆锥曲线上任一点到两焦点的距离和为 10，其方程是：",
    options: [
      {
        key: "A",
        text: "x²/16+y²/25=1"
      },
      {
        key: "B",
        text: "x²/25+y²/9=1"
      },
      {
        key: "C",
        text: "x²/25+y²/16=1"
      },
      {
        key: "D",
        text: "x²/16+y²/9=1"
      }
    ],
    correctAnswer: "C",
    explanation: "距离和为 2a=10，所以 a=5，c=3，b²=25−9=16。焦点在 x 轴上，因此方程为 x²/25+y²/16=1。"
  },

  // 第 03 章 · 圆锥曲线与方程 / 双曲线
  {
    id: "g2-hyperbola-01",
    topic: "双曲线",
    title: "计算焦点",
    question: "下列双曲线的焦点坐标是：",
    formula: String.raw`\frac{x^2}{9}-\frac{y^2}{16}=1`,
    options: [
      {
        key: "A",
        text: "(±3，0)"
      },
      {
        key: "B",
        text: "(±5，0)"
      },
      {
        key: "C",
        text: "(0，±5)"
      },
      {
        key: "D",
        text: "(±4，0)"
      }
    ],
    correctAnswer: "B",
    explanation: "正平方项为 x²，焦点在 x 轴上。c²=a²+b²=9+16=25，所以焦点为 (±5，0)。"
  },

  {
    id: "g2-hyperbola-02",
    topic: "双曲线",
    title: "写出渐近线",
    question: "下列双曲线的渐近线方程为：",
    formula: String.raw`\frac{x^2}{16}-\frac{y^2}{9}=1`,
    options: [
      {
        key: "A",
        text: "y=±4x/3"
      },
      {
        key: "B",
        text: "y=±16x/9"
      },
      {
        key: "C",
        text: "y=±3x/4"
      },
      {
        key: "D",
        text: "y=±9x/16"
      }
    ],
    correctAnswer: "C",
    explanation: "a=4、b=3，x 轴型双曲线的渐近线为 y=±(b/a)x，即 y=±3x/4。"
  },

  {
    id: "g2-hyperbola-03",
    topic: "双曲线",
    title: "计算双曲线离心率",
    question: "下列双曲线的离心率为：",
    formula: String.raw`\frac{x^2}{4}-\frac{y^2}{5}=1`,
    options: [
      {
        key: "A",
        text: "2/3"
      },
      {
        key: "B",
        text: "√5/2"
      },
      {
        key: "C",
        text: "1/2"
      },
      {
        key: "D",
        text: "3/2"
      }
    ],
    correctAnswer: "D",
    explanation: "a=2，c=√(4+5)=3，所以 e=c/a=3/2，大于 1。"
  },

  // 第 03 章 · 圆锥曲线与方程 / 抛物线
  {
    id: "g2-parabola-01",
    topic: "抛物线",
    title: "辨认焦点",
    question: "抛物线的焦点坐标为：",
    formula: String.raw`y^2=8x`,
    options: [
      {
        key: "A",
        text: "(2，0)"
      },
      {
        key: "B",
        text: "(4，0)"
      },
      {
        key: "C",
        text: "(8，0)"
      },
      {
        key: "D",
        text: "(0，2)"
      }
    ],
    correctAnswer: "A",
    explanation: "与 y²=2px 比较，2p=8，p=4，焦点为 (p/2，0)=(2，0)。"
  },

  {
    id: "g2-parabola-02",
    topic: "抛物线",
    title: "辨认开口与准线",
    question: "下列抛物线的焦点和准线分别为：",
    formula: String.raw`x^2=-12y`,
    options: [
      {
        key: "A",
        text: "(0，3)，y=−3"
      },
      {
        key: "B",
        text: "(0，−3)，y=3"
      },
      {
        key: "C",
        text: "(0，−6)，y=6"
      },
      {
        key: "D",
        text: "(−3，0)，x=3"
      }
    ],
    correctAnswer: "B",
    explanation: "这是向下开口的抛物线 x²=−2py，2p=12，p=6。因此焦点为 (0，−3)，准线为 y=3。"
  },

  {
    id: "g2-parabola-03",
    topic: "抛物线",
    title: "用定义计算焦半径",
    question: "P 在抛物线上，横坐标为 3，则 P 到焦点的距离为：",
    formula: String.raw`y^2=4x`,
    options: [
      {
        key: "A",
        text: "2"
      },
      {
        key: "B",
        text: "3"
      },
      {
        key: "C",
        text: "4"
      },
      {
        key: "D",
        text: "5"
      }
    ],
    correctAnswer: "C",
    explanation: "2p=4，所以 p=2，准线为 x=−1。由抛物线定义，PF 等于点 P 到准线的距离，即 3−(−1)=4。"
  },

  // 第 04 章 · 数列 / 数列
  {
    id: "g2-sequence-01",
    topic: "数列",
    title: "由通项求项",
    question: "已知 aₙ=2n²−1，则 a₃ 等于：",
    options: [
    {
      key: "A",
      text: "11"
    },
    {
      key: "B",
      text: "17"
    },
    {
      key: "C",
      text: "18"
    },
    {
      key: "D",
      text: "7"
    }
  ],
    correctAnswer: "B",
    explanation: "代入 n=3，a₃=2×9−1=17。"
  },
  {
    id: "g2-sequence-02",
    topic: "数列",
    title: "递推计算",
    question: "a₁=2，aₙ₊₁=3aₙ−1，则 a₃ 等于：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "13"
    },
    {
      key: "C",
      text: "14"
    },
    {
      key: "D",
      text: "17"
    }
  ],
    correctAnswer: "C",
    explanation: "a₂=3×2−1=5，a₃=3×5−1=14。"
  },
  {
    id: "g2-sequence-03",
    topic: "数列",
    title: "部分和求项",
    question: "若 Sₙ=n²+n，则 a₄ 等于：",
    options: [
    {
      key: "A",
      text: "4"
    },
    {
      key: "B",
      text: "6"
    },
    {
      key: "C",
      text: "10"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "D",
    explanation: "a₄=S₄−S₃=20−12=8。"
  },

  // 第 04 章 · 数列 / 等差数列
  {
    id: "g2-arithmetic-01",
    topic: "等差数列",
    title: "通项计算",
    question: "等差数列 a₁=3，d=2，则 a₁₀ 等于：",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "21"
    },
    {
      key: "C",
      text: "23"
    },
    {
      key: "D",
      text: "18"
    }
  ],
    correctAnswer: "B",
    explanation: "a₁₀=3+(10−1)×2=21。"
  },
  {
    id: "g2-arithmetic-02",
    topic: "等差数列",
    title: "前 n 项和",
    question: "等差数列 a₁=2，d=3，前 8 项和为：",
    options: [
    {
      key: "A",
      text: "92"
    },
    {
      key: "B",
      text: "96"
    },
    {
      key: "C",
      text: "100"
    },
    {
      key: "D",
      text: "104"
    }
  ],
    correctAnswer: "C",
    explanation: "a₈=2+7×3=23，S₈=8×(2+23)/2=100。"
  },
  {
    id: "g2-arithmetic-03",
    topic: "等差数列",
    title: "下标和性质",
    question: "等差数列中 a₃+a₇=20，则 a₅ 等于：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "8"
    },
    {
      key: "C",
      text: "20"
    },
    {
      key: "D",
      text: "10"
    }
  ],
    correctAnswer: "D",
    explanation: "3+7=5+5，因此 2a₅=20，a₅=10。"
  },

  // 第 04 章 · 数列 / 等比数列
  {
    id: "g2-geometric-01",
    topic: "等比数列",
    title: "通项计算",
    question: "等比数列 a₁=2，q=3，则 a₄ 等于：",
    options: [
    {
      key: "A",
      text: "18"
    },
    {
      key: "B",
      text: "36"
    },
    {
      key: "C",
      text: "54"
    },
    {
      key: "D",
      text: "162"
    }
  ],
    correctAnswer: "C",
    explanation: "a₄=2×3³=54。"
  },
  {
    id: "g2-geometric-02",
    topic: "等比数列",
    title: "有限项求和",
    question: "等比数列首项为 1，公比为 2，前 5 项和为：",
    options: [
    {
      key: "A",
      text: "15"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "32"
    },
    {
      key: "D",
      text: "31"
    }
  ],
    correctAnswer: "D",
    explanation: "S₅=(1−2⁵)/(1−2)=31。"
  },
  {
    id: "g2-geometric-03",
    topic: "等比数列",
    title: "等比中项的符号",
    question: "在 2 和 8 中间插入一个实数 G，使 2、G、8 成等比数列，则 G 为：",
    options: [
    {
      key: "A",
      text: "±4"
    },
    {
      key: "B",
      text: "4"
    },
    {
      key: "C",
      text: "−4"
    },
    {
      key: "D",
      text: "±16"
    }
  ],
    correctAnswer: "A",
    explanation: "G²=2×8=16，所以 G=±4，两种取值分别对应公比 2 与 −2。"
  },

  // 第 04 章 · 数列 / 数学归纳法
  {
    id: "g2-induction-01",
    topic: "数学归纳法",
    title: "确定归纳起点",
    question: "用归纳法证明命题对所有整数 n≥4 成立，通常首先验证：",
    options: [
    {
      key: "A",
      text: "n=1"
    },
    {
      key: "B",
      text: "n=4"
    },
    {
      key: "C",
      text: "n=k"
    },
    {
      key: "D",
      text: "n=k+1"
    }
  ],
    correctAnswer: "B",
    explanation: "命题的最小允许整数为 4，应先验证 P(4)。"
  },
  {
    id: "g2-induction-02",
    topic: "数学归纳法",
    title: "找出新增项",
    question: "证明 1+3+…+(2n−1)=n² 时，从 n=k 到 n=k+1 左边需增加：",
    options: [
    {
      key: "A",
      text: "2k−1"
    },
    {
      key: "B",
      text: "2k"
    },
    {
      key: "C",
      text: "2k+1"
    },
    {
      key: "D",
      text: "k+1"
    }
  ],
    correctAnswer: "C",
    explanation: "第 k+1 个奇数为 2(k+1)−1=2k+1。"
  },
  {
    id: "g2-induction-03",
    topic: "数学归纳法",
    title: "理解递推证明",
    question: "完成起点验证后，归纳递推步骤需要证明：",
    options: [
    {
      key: "A",
      text: "P(k+1) 成立即可，无需推导"
    },
    {
      key: "B",
      text: "只要 P(2) 成立即可"
    },
    {
      key: "C",
      text: "P(k+1) 推出 P(k)"
    },
    {
      key: "D",
      text: "对任意 k≥n₀，由 P(k) 推出 P(k+1)"
    }
  ],
    correctAnswer: "D",
    explanation: "归纳递推必须对任意允许的 k 建立 P(k)⇒P(k+1)，再与起点结合覆盖所有下标。"
  },

  // 第 05 章 · 导数及其应用 / 导数的概念
  {
    id: "g2-derivative-concept-01",
    topic: "导数的概念",
    title: "平均变化率",
    question: "f(x)=x² 在区间 [1，3] 上的平均变化率为：",
    options: [
    {
      key: "A",
      text: "2"
    },
    {
      key: "B",
      text: "4"
    },
    {
      key: "C",
      text: "6"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "B",
    explanation: "平均变化率为 (9−1)/(3−1)=4。"
  },
  {
    id: "g2-derivative-concept-02",
    topic: "导数的概念",
    title: "导数定义",
    question: "f(x)=x²，则 f′(2) 等于：",
    options: [
    {
      key: "A",
      text: "2"
    },
    {
      key: "B",
      text: "3"
    },
    {
      key: "C",
      text: "4"
    },
    {
      key: "D",
      text: "8"
    }
  ],
    correctAnswer: "C",
    explanation: "差商 [(2+h)²−4]/h=4+h，h 趋近 0 时得到 4。"
  },
  {
    id: "g2-derivative-concept-03",
    topic: "导数的概念",
    title: "切线方程",
    question: "曲线 y=x² 在点 (1，1) 处的切线方程是：",
    options: [
    {
      key: "A",
      text: "y=x"
    },
    {
      key: "B",
      text: "y=2x+1"
    },
    {
      key: "C",
      text: "y=x+1"
    },
    {
      key: "D",
      text: "y=2x−1"
    }
  ],
    correctAnswer: "D",
    explanation: "切线斜率为 2，经过 (1，1)，故 y−1=2(x−1)，即 y=2x−1。"
  },

  // 第 05 章 · 导数及其应用 / 导数的运算
  {
    id: "g2-derivative-operations-01",
    topic: "导数的运算",
    title: "多项式求导",
    question: "若 f(x)=x³−2x+1，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "3x²−2"
    },
    {
      key: "B",
      text: "3x²+1"
    },
    {
      key: "C",
      text: "x²−2"
    },
    {
      key: "D",
      text: "3x−2"
    }
  ],
    correctAnswer: "A",
    explanation: "逐项求导：x³ 的导数为 3x²，−2x 的导数为 −2，常数 1 的导数为 0。"
  },
  {
    id: "g2-derivative-operations-02",
    topic: "导数的运算",
    title: "乘积法则",
    question: "f(x)=xeˣ，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "eˣ"
    },
    {
      key: "B",
      text: "(x+1)eˣ"
    },
    {
      key: "C",
      text: "xeˣ"
    },
    {
      key: "D",
      text: "(x−1)eˣ"
    }
  ],
    correctAnswer: "B",
    explanation: "(xeˣ)′=1×eˣ+x×eˣ=(x+1)eˣ。"
  },
  {
    id: "g2-derivative-operations-03",
    topic: "导数的运算",
    title: "链式法则",
    question: "f(x)=(2x+1)³，则 f′(x) 为：",
    options: [
    {
      key: "A",
      text: "3(2x+1)²"
    },
    {
      key: "B",
      text: "6(2x+1)"
    },
    {
      key: "C",
      text: "6(2x+1)²"
    },
    {
      key: "D",
      text: "(2x+1)²"
    }
  ],
    correctAnswer: "C",
    explanation: "先对外层三次方求导，再乘内层导数 2，结果为 3(2x+1)²×2。"
  },

  // 第 05 章 · 导数及其应用 / 导数在研究函数中的应用
  {
    id: "g2-derivative-applications-01",
    topic: "导数在研究函数中的应用",
    title: "导数判断单调性",
    question: "f(x)=x³−3x 的递减区间是：",
    options: [
    {
      key: "A",
      text: "(−∞，−1)"
    },
    {
      key: "B",
      text: "(−1，1)"
    },
    {
      key: "C",
      text: "(1，+∞)"
    },
    {
      key: "D",
      text: "(−∞，+∞)"
    }
  ],
    correctAnswer: "B",
    explanation: "f′(x)=3(x²−1)<0 的解为 −1<x<1，故递减区间为 (−1，1)。"
  },
  {
    id: "g2-derivative-applications-02",
    topic: "导数在研究函数中的应用",
    title: "零导数与极值",
    question: "关于 f(x)=x³ 在 x=0 处，下列说法正确的是：",
    options: [
    {
      key: "A",
      text: "取得极大值"
    },
    {
      key: "B",
      text: "取得极小值"
    },
    {
      key: "C",
      text: "导数为零但不取得极值"
    },
    {
      key: "D",
      text: "导数不存在"
    }
  ],
    correctAnswer: "C",
    explanation: "f′(0)=0，但函数在原点两侧都递增，导数不变号，因此没有极值。"
  },
  {
    id: "g2-derivative-applications-03",
    topic: "导数在研究函数中的应用",
    title: "闭区间最值",
    question: "f(x)=x³−3x 在 [0，2] 上的最小值为：",
    options: [
    {
      key: "A",
      text: "0"
    },
    {
      key: "B",
      text: "2"
    },
    {
      key: "C",
      text: "−1"
    },
    {
      key: "D",
      text: "−2"
    }
  ],
    correctAnswer: "D",
    explanation: "区间内驻点为 x=1。比较 f(0)=0、f(1)=−2、f(2)=2，得最小值 −2。"
  },
];
