import type { Question } from "./questions-part1";

/* 题库第四部分：高二第 6 章起；当前开放第 6 章空间向量与立体几何、第 7 章计数原理、第 8 章概率、第 9 章统计，12 专题 / 36 题。 */
export const practiceTopics = [
  "空间向量及其运算",
  "空间向量的坐标表示",
  "空间向量的应用",
  "两个基本计数原理",
  "排列",
  "组合",
  "二项式定理",
  "条件概率",
  "离散型随机变量及其分布列",
  "正态分布",
  "线性回归分析",
  "独立性检验"
] as const;

export const practiceChapters = [
  { title: "空间向量与立体几何", topics: practiceTopics.slice(0, 3) },
  { title: "计数原理", topics: practiceTopics.slice(3, 7) },
  { title: "概率", topics: practiceTopics.slice(7, 10) },
  { title: "统计", topics: practiceTopics.slice(10, 12) },
] as const;

export const questions: Question[] = [
  {
    id: "g2-spatial-operations-01",
    topic: "空间向量及其运算",
    title: "首尾向量化简",
    question: "四面体 ABCD 中，AB+BC+CD（均为向量）等于：",
    options: [
    {
      key: "A",
      text: "AC"
    },
    {
      key: "B",
      text: "AD"
    },
    {
      key: "C",
      text: "BD"
    },
    {
      key: "D",
      text: "DA"
    }
  ],
    correctAnswer: "B",
    explanation: "由首尾相接，AB+BC=AC，再加 CD 得 AD。"
  },
  {
    id: "g2-spatial-operations-02",
    topic: "空间向量及其运算",
    title: "数量积计算",
    question: "已知 |a|=2、|b|=3，夹角为 60°，则 a·b 为：",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "√3"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "0"
    }
  ],
    correctAnswer: "C",
    explanation: "a·b=|a||b|cos60°=2×3×1/2=3。"
  },
  {
    id: "g2-spatial-operations-03",
    topic: "空间向量及其运算",
    title: "计算和向量的模",
    question: "非零向量 a、b 垂直，且 |a|=3、|b|=4，则 |a+b| 为：",
    options: [
    {
      key: "A",
      text: "7"
    },
    {
      key: "B",
      text: "1"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "D",
    explanation: "垂直时 a·b=0，|a+b|²=9+16=25，所以模为 5。"
  },
  {
    id: "g2-spatial-coordinates-01",
    topic: "空间向量的坐标表示",
    title: "由点求向量",
    question: "A(1，−1，2)、B(3，2，6)，则 AB 的向量坐标是：",
    options: [
    {
      key: "A",
      text: "(2，3，4)"
    },
    {
      key: "B",
      text: "(−2，−3，−4)"
    },
    {
      key: "C",
      text: "(4，1，8)"
    },
    {
      key: "D",
      text: "(2，1，4)"
    }
  ],
    correctAnswer: "A",
    explanation: "终点减起点，AB=(3−1，2+1，6−2)=(2，3，4)。"
  },
  {
    id: "g2-spatial-coordinates-02",
    topic: "空间向量的坐标表示",
    title: "三维向量的模",
    question: "向量 a=(2，−1，2) 的模为：",
    options: [
    {
      key: "A",
      text: "9"
    },
    {
      key: "B",
      text: "3"
    },
    {
      key: "C",
      text: "√5"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "B",
    explanation: "|a|=√(4+1+4)=3。"
  },
  {
    id: "g2-spatial-coordinates-03",
    topic: "空间向量的坐标表示",
    title: "垂直求参数",
    question: "若 a=(1，t，2)、b=(2，−1，1) 垂直，则 t 为：",
    options: [
    {
      key: "A",
      text: "0"
    },
    {
      key: "B",
      text: "−4"
    },
    {
      key: "C",
      text: "4"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "C",
    explanation: "a·b=2−t+2=0，解得 t=4。"
  },
  {
    id: "g2-spatial-applications-01",
    topic: "空间向量的应用",
    title: "判断法向量",
    question: "平面内两个不共线方向为 (1，0，0) 和 (0，1，0)，可取的法向量为：",
    options: [
    {
      key: "A",
      text: "(1，1，0)"
    },
    {
      key: "B",
      text: "(1，0，0)"
    },
    {
      key: "C",
      text: "(0，1，0)"
    },
    {
      key: "D",
      text: "(0，0，1)"
    }
  ],
    correctAnswer: "D",
    explanation: "(0，0，1) 非零，且与两个平面方向向量的数量积均为 0。"
  },
  {
    id: "g2-spatial-applications-02",
    topic: "空间向量的应用",
    title: "计算线面角",
    question: "直线方向 u=(1，0，1)，平面法向量 n=(0，0，1)，线面角为：",
    options: [
    {
      key: "A",
      text: "30°"
    },
    {
      key: "B",
      text: "45°"
    },
    {
      key: "C",
      text: "60°"
    },
    {
      key: "D",
      text: "90°"
    }
  ],
    correctAnswer: "B",
    explanation: "sinθ=|u·n|/(|u||n|)=1/√2，因此 θ=45°。"
  },
  {
    id: "g2-spatial-applications-03",
    topic: "空间向量的应用",
    title: "点到平面距离",
    question: "点 P(1，2，3) 到平面 z=0 的距离为：",
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
      text: "√14"
    }
  ],
    correctAnswer: "C",
    explanation: "平面 z=0 为 xy 平面，点到它的距离为纵向高度 |3|=3。"
  }
,
  {
    id: "g2-counting-principles-01",
    topic: "两个基本计数原理",
    title: "分类计数",
    question: "3 本不同数学书与 2 本不同物理书中任选 1 本，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "5"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "B",
    explanation: "任选一本时两类均可独立完成，方法数为 3+2=5。"
  },
  {
    id: "g2-counting-principles-02",
    topic: "两个基本计数原理",
    title: "分步计数",
    question: "从 3 件不同上衣和 4 条不同裤子中各选一件搭配，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "7"
    },
    {
      key: "B",
      text: "24"
    },
    {
      key: "C",
      text: "12"
    },
    {
      key: "D",
      text: "16"
    }
  ],
    correctAnswer: "C",
    explanation: "上衣与裤子都要选择，按分步原理，3×4=12。"
  },
  {
    id: "g2-counting-principles-03",
    topic: "两个基本计数原理",
    title: "限制首位",
    question: "用 0、1、2、3 组成无重复数字的两位数，共有多少个？",
    options: [
    {
      key: "A",
      text: "12"
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
      text: "9"
    }
  ],
    correctAnswer: "D",
    explanation: "十位有 3 种非零选择，每种情况下个位有剩余 3 种，共 9 个。"
  },
  {
    id: "g2-counting-permutations-01",
    topic: "排列",
    title: "排列数计算",
    question: "从 5 人中选组长和副组长各 1 人，不能兼任，方案数为：",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "20"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "120"
    }
  ],
    correctAnswer: "B",
    explanation: "角色不同，使用排列数 A₅²=5×4=20。"
  },
  {
    id: "g2-counting-permutations-02",
    topic: "排列",
    title: "全排列",
    question: "4 本不同的书排成一列，共有多少种排法？",
    options: [
    {
      key: "A",
      text: "12"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "24"
    },
    {
      key: "D",
      text: "48"
    }
  ],
    correctAnswer: "C",
    explanation: "4 本不同书的全排列数为 4!=24。"
  },
  {
    id: "g2-counting-permutations-03",
    topic: "排列",
    title: "相邻限制",
    question: "5 人排一列，甲、乙相邻，排法数为：",
    options: [
    {
      key: "A",
      text: "24"
    },
    {
      key: "B",
      text: "72"
    },
    {
      key: "C",
      text: "120"
    },
    {
      key: "D",
      text: "48"
    }
  ],
    correctAnswer: "D",
    explanation: "甲乙捆绑后共有 4 个整体，内部再排甲乙，共 4!×2!=48。"
  },
  {
    id: "g2-counting-combinations-01",
    topic: "组合",
    title: "组合数计算",
    question: "6 人中选 3 名不设职务的代表，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "120"
    },
    {
      key: "C",
      text: "18"
    },
    {
      key: "D",
      text: "36"
    }
  ],
    correctAnswer: "A",
    explanation: "不考虑顺序，方法数 C₆³=6×5×4/6=20。"
  },
  {
    id: "g2-counting-combinations-02",
    topic: "组合",
    title: "至少条件",
    question: "3 名男生、2 名女生中选 3 人，至少有 1 名女生，共有多少种方法？",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "9"
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
    explanation: "全部 C₅³=10 种，减去全为男生的 C₃³=1 种，共 9 种。"
  },
  {
    id: "g2-counting-combinations-03",
    topic: "组合",
    title: "无标签分组",
    question: "4 人分成两个没有组名的两人组，有多少种分法？",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "12"
    },
    {
      key: "C",
      text: "3"
    },
    {
      key: "D",
      text: "4"
    }
  ],
    correctAnswer: "C",
    explanation: "先选两人有 C₄²=6 种，但两组互换会重复计数，因此除以 2 得 3。"
  },
  {
    id: "g2-counting-binomial-01",
    topic: "二项式定理",
    title: "指定幂次系数",
    question: "(x+2)⁴ 展开式中 x² 的系数为：",
    options: [
    {
      key: "A",
      text: "6"
    },
    {
      key: "B",
      text: "12"
    },
    {
      key: "C",
      text: "16"
    },
    {
      key: "D",
      text: "24"
    }
  ],
    correctAnswer: "D",
    explanation: "r=2，系数为 C₄²×2²=24。"
  },
  {
    id: "g2-counting-binomial-02",
    topic: "二项式定理",
    title: "常数项",
    question: "(x+1/x)⁶（x≠0）展开式的常数项为：",
    options: [
    {
      key: "A",
      text: "20"
    },
    {
      key: "B",
      text: "15"
    },
    {
      key: "C",
      text: "6"
    },
    {
      key: "D",
      text: "30"
    }
  ],
    correctAnswer: "A",
    explanation: "通项为 C₆ʳx⁶⁻²ʳ，r=3 时指数为零，常数项为 C₆³=20。"
  },
  {
    id: "g2-counting-binomial-03",
    topic: "二项式定理",
    title: "二项式系数和",
    question: "(a+b)⁵ 展开式的二项式系数之和为：",
    options: [
    {
      key: "A",
      text: "10"
    },
    {
      key: "B",
      text: "32"
    },
    {
      key: "C",
      text: "25"
    },
    {
      key: "D",
      text: "16"
    }
  ],
    correctAnswer: "B",
    explanation: "二项式系数之和为 2⁵=32，与 a、b 的具体取值无关。"
  }
,
  {
    id: "g2-probability-conditional-01",
    topic: "条件概率",
    title: "条件范围计数",
    question: "掷一枚均匀骰子，已知点数为偶数，则点数大于 3 的概率为：",
    options: [
    {
      key: "A",
      text: "1/2"
    },
    {
      key: "B",
      text: "2/3"
    },
    {
      key: "C",
      text: "1/3"
    },
    {
      key: "D",
      text: "3/4"
    }
  ],
    correctAnswer: "B",
    explanation: "偶数范围为 2、4、6，其中 4、6 大于 3，因此概率为 2/3。"
  },
  {
    id: "g2-probability-conditional-02",
    topic: "条件概率",
    title: "不放回抽样",
    question: "袋中 3 红 2 蓝，依次不放回取两球，已知第一球为红，则第二球为红的概率为：",
    options: [
    {
      key: "A",
      text: "3/5"
    },
    {
      key: "B",
      text: "2/5"
    },
    {
      key: "C",
      text: "1/2"
    },
    {
      key: "D",
      text: "3/4"
    }
  ],
    correctAnswer: "C",
    explanation: "第一红取走后剩 2 红 2 蓝，所以条件概率为 2/4=1/2。"
  },
  {
    id: "g2-probability-conditional-03",
    topic: "条件概率",
    title: "乘法公式",
    question: "若 P(A)=0.6，P(B|A)=0.5，则 P(A∩B) 为：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.6"
    },
    {
      key: "C",
      text: "1.1"
    },
    {
      key: "D",
      text: "0.3"
    }
  ],
    correctAnswer: "D",
    explanation: "由乘法公式，P(A∩B)=P(A)P(B|A)=0.6×0.5=0.3。"
  },
  {
    id: "g2-probability-discrete-01",
    topic: "离散型随机变量及其分布列",
    title: "概率归一",
    question: "随机变量 X 取 0、1、2，相应概率为 0.2、0.3、p，则 p 为：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.2"
    },
    {
      key: "C",
      text: "0.3"
    },
    {
      key: "D",
      text: "0.6"
    }
  ],
    correctAnswer: "A",
    explanation: "所有概率之和为 1，因此 p=1−0.2−0.3=0.5。"
  },
  {
    id: "g2-probability-discrete-02",
    topic: "离散型随机变量及其分布列",
    title: "计算期望",
    question: "P(X=0)=0.8，P(X=10)=0.2，则 E(X) 为：",
    options: [
    {
      key: "A",
      text: "5"
    },
    {
      key: "B",
      text: "2"
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
    correctAnswer: "B",
    explanation: "期望为 0×0.8+10×0.2=2。"
  },
  {
    id: "g2-probability-discrete-03",
    topic: "离散型随机变量及其分布列",
    title: "二项分布方差",
    question: "若 X~B(4，0.5)，则 D(X) 为：",
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
      text: "1"
    },
    {
      key: "D",
      text: "0.5"
    }
  ],
    correctAnswer: "C",
    explanation: "二项分布方差为 np(1−p)=4×0.5×0.5=1。"
  },
  {
    id: "g2-probability-normal-01",
    topic: "正态分布",
    title: "识别参数",
    question: "若 X~N(3，4)，则 X 的标准差为：",
    options: [
    {
      key: "A",
      text: "4"
    },
    {
      key: "B",
      text: "16"
    },
    {
      key: "C",
      text: "√3"
    },
    {
      key: "D",
      text: "2"
    }
  ],
    correctAnswer: "D",
    explanation: "第二个参数为方差 σ²=4，所以标准差 σ=2。"
  },
  {
    id: "g2-probability-normal-02",
    topic: "正态分布",
    title: "利用对称性",
    question: "若 X~N(10，4)，则 P(X>10) 等于：",
    options: [
    {
      key: "A",
      text: "0.5"
    },
    {
      key: "B",
      text: "0.6827"
    },
    {
      key: "C",
      text: "0.9545"
    },
    {
      key: "D",
      text: "0.25"
    }
  ],
    correctAnswer: "A",
    explanation: "曲线关于均值 10 对称，其右侧概率为一半。"
  },
  {
    id: "g2-probability-normal-03",
    topic: "正态分布",
    title: "标准差区间",
    question: "若 X~N(10，4)，则 P(6<X<14) 约为：",
    options: [
    {
      key: "A",
      text: "0.6827"
    },
    {
      key: "B",
      text: "0.9545"
    },
    {
      key: "C",
      text: "0.9973"
    },
    {
      key: "D",
      text: "0.5"
    }
  ],
    correctAnswer: "B",
    explanation: "σ=2，区间为 μ±2σ，对应概率约为 0.9545。"
  }
,
  {
    id: "g2-statistics-regression-01",
    topic: "线性回归分析",
    title: "均值点性质",
    question: "含截距的一元线性最小二乘回归直线一定经过：",
    options: [
    {
      key: "A",
      text: "原点"
    },
    {
      key: "B",
      text: "样本均值点 (x̄，ȳ)"
    },
    {
      key: "C",
      text: "每个观测点"
    },
    {
      key: "D",
      text: "第一个观测点"
    }
  ],
    correctAnswer: "B",
    explanation: "由 â=ȳ−b̂x̄ 可知，代入 x̄ 时预测值为 ȳ。"
  },
  {
    id: "g2-statistics-regression-02",
    topic: "线性回归分析",
    title: "计算残差",
    question: "回归方程 ŷ=1+2x，观测点为 (2，6)，该点残差为：",
    options: [
    {
      key: "A",
      text: "−1"
    },
    {
      key: "B",
      text: "0"
    },
    {
      key: "C",
      text: "1"
    },
    {
      key: "D",
      text: "5"
    }
  ],
    correctAnswer: "C",
    explanation: "x=2 时预测值为 5，残差为实际值 6 减预测值 5，即 1。"
  },
  {
    id: "g2-statistics-regression-03",
    topic: "线性回归分析",
    title: "解释相关系数",
    question: "若样本相关系数 r=−0.9，下列解释正确的是：",
    options: [
    {
      key: "A",
      text: "没有线性相关"
    },
    {
      key: "B",
      text: "x 必然导致 y 减少"
    },
    {
      key: "C",
      text: "强正线性相关"
    },
    {
      key: "D",
      text: "较强负线性相关"
    }
  ],
    correctAnswer: "D",
    explanation: "r 为负且绝对值较大，说明样本有较强负线性相关，但不能由相关直接推断因果。"
  },
  {
    id: "g2-statistics-independence-01",
    topic: "独立性检验",
    title: "期望频数",
    question: "2×2 表中某行合计为 50、某列合计为 40、总数为 100，独立假设下该格期望频数为：",
    options: [
    {
      key: "A",
      text: "90"
    },
    {
      key: "B",
      text: "10"
    },
    {
      key: "C",
      text: "40"
    },
    {
      key: "D",
      text: "20"
    }
  ],
    correctAnswer: "D",
    explanation: "期望频数为行合计×列合计/总数=50×40/100=20。"
  },
  {
    id: "g2-statistics-independence-02",
    topic: "独立性检验",
    title: "计算统计量",
    question: "2×2 表 a=30、b=20、c=20、d=30，则 K² 等于：",
    options: [
    {
      key: "A",
      text: "4"
    },
    {
      key: "B",
      text: "2"
    },
    {
      key: "C",
      text: "10"
    },
    {
      key: "D",
      text: "0"
    }
  ],
    correctAnswer: "A",
    explanation: "各格期望频数为 25，每格贡献 (5²)/25=1，四格合计 K²=4。"
  },
  {
    id: "g2-statistics-independence-03",
    topic: "独立性检验",
    title: "解释检验结果",
    question: "适用条件满足，K²=2，α=0.05 的临界值为 3.841。正确结论是：",
    options: [
    {
      key: "A",
      text: "证明两个变量独立"
    },
    {
      key: "B",
      text: "当前样本不足以拒绝独立假设"
    },
    {
      key: "C",
      text: "证明两个变量有因果关系"
    },
    {
      key: "D",
      text: "以 95% 概率认定独立"
    }
  ],
    correctAnswer: "B",
    explanation: "2<3.841，未达到拒绝标准，只能说明证据不足，不能证明独立或赋予假设成立概率。"
  }
];
