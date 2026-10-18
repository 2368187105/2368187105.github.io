export type QuestionOption = {
  key: string;
  text: string;
};

export type Question = {
  id: string;
  topic: string;
  title: string;
  question: string;
  formula?: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
};

export const practiceTopics = [
  "集合的概念",
  "集合间的基本关系",
  "集合的基本运算",
  "充分条件与必要条件",
  "全称量词与存在量词",

  "等式与不等式的基本性质",
  "基本不等式",
  "一元二次函数与一元二次方程",
  "一元二次不等式",
  "二次函数、方程与不等式的综合应用",

  "函数的概念",
  "定义域与值域",
  "函数的单调性",
  "函数的奇偶性",
  "函数的最大值与最小值",

  "根式与分数指数幂",
  "指数函数",
  "对数与对数运算",
  "对数函数",
  "指数函数与对数函数的综合应用",

  "任意角与弧度制",
  "三角函数的概念与基本关系",
  "诱导公式",
  "三角函数的图象与性质",
  "三角恒等变换",
] as const;

export const questions: Question[] = [
  /* =========================================================
     01 集合的概念
  ========================================================= */

  {
    id: "sets-concept-01",
    topic: "集合的概念",
    title: "元素与集合",
    question: "设集合 A={1,2,3}，下列关系正确的是：",
    options: [
      { key: "A", text: "4 ∈ A" },
      { key: "B", text: "2 ∈ A" },
      { key: "C", text: "3 ∉ A" },
      { key: "D", text: "1 ∉ A" },
    ],
    correctAnswer: "B",
    explanation:
      "集合 A 中包含元素 1、2、3，因此 2∈A。",
  },

  {
    id: "sets-concept-02",
    topic: "集合的概念",
    title: "空集判断",
    question:
      "在实数范围内，集合 A={x | x²+1=0} 是：",
    options: [
      { key: "A", text: "空集" },
      { key: "B", text: "{0}" },
      { key: "C", text: "{1}" },
      { key: "D", text: "{−1,1}" },
    ],
    correctAnswer: "A",
    explanation:
      "任意实数 x 都有 x²≥0，因此 x²+1>0，方程没有实数解，所以 A 是空集。",
  },

  {
    id: "sets-concept-03",
    topic: "集合的概念",
    title: "集合元素个数",
    question: "集合 A={a,b,c} 中元素的个数为：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    correctAnswer: "C",
    explanation:
      "集合 A 中有 a、b、c 三个不同元素，因此元素个数为 3。",
  },

  /* =========================================================
     02 集合间的基本关系
  ========================================================= */

  {
    id: "sets-relations-01",
    topic: "集合间的基本关系",
    title: "子集",
    question:
      "若 A={1,2}，B={1,2,3}，则下列关系正确的是：",
    options: [
      { key: "A", text: "A⊂B" },
      { key: "B", text: "B⊂A" },
      { key: "C", text: "A=B" },
      { key: "D", text: "A∩B=∅" },
    ],
    correctAnswer: "A",
    explanation:
      "A 中的每一个元素都属于 B，并且 A≠B，因此 A 是 B 的真子集。",
  },

  {
    id: "sets-relations-02",
    topic: "集合间的基本关系",
    title: "集合相等",
    question:
      "设 A={1,2,3}，B={3,2,1}，则 A 与 B 的关系是：",
    options: [
      { key: "A", text: "A⊂B" },
      { key: "B", text: "B⊂A" },
      { key: "C", text: "A=B" },
      { key: "D", text: "A∩B=∅" },
    ],
    correctAnswer: "C",
    explanation:
      "集合中的元素没有顺序，A 与 B 含有完全相同的元素，所以 A=B。",
  },

  {
    id: "sets-relations-03",
    topic: "集合间的基本关系",
    title: "子集个数",
    question: "一个含有 3 个元素的集合共有多少个子集？",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "6" },
      { key: "C", text: "8" },
      { key: "D", text: "9" },
    ],
    correctAnswer: "C",
    explanation:
      "含有 n 个元素的集合共有 2ⁿ 个子集，因此共有 2³=8 个子集。",
  },

  /* =========================================================
     03 集合的基本运算
  ========================================================= */

  {
    id: "sets-operations-01",
    topic: "集合的基本运算",
    title: "交集",
    question:
      "若 A={1,2,3}，B={2,3,4}，则 A∩B 等于：",
    options: [
      { key: "A", text: "{1,4}" },
      { key: "B", text: "{2,3}" },
      { key: "C", text: "{1,2,3,4}" },
      { key: "D", text: "∅" },
    ],
    correctAnswer: "B",
    explanation:
      "交集由同时属于 A 和 B 的元素组成，因此 A∩B={2,3}。",
  },

  {
    id: "sets-operations-02",
    topic: "集合的基本运算",
    title: "并集",
    question:
      "若 A={1,2}，B={2,3}，则 A∪B 等于：",
    options: [
      { key: "A", text: "{2}" },
      { key: "B", text: "{1,3}" },
      { key: "C", text: "{1,2,3}" },
      { key: "D", text: "∅" },
    ],
    correctAnswer: "C",
    explanation:
      "并集由至少属于 A 或 B 之一的元素组成，因此 A∪B={1,2,3}。",
  },

  {
    id: "sets-operations-03",
    topic: "集合的基本运算",
    title: "补集",
    question:
      "设全集 U={1,2,3,4}，A={1,3}，则 A 在 U 中的补集为：",
    options: [
      { key: "A", text: "{1,3}" },
      { key: "B", text: "{2,4}" },
      { key: "C", text: "{1,2,3}" },
      { key: "D", text: "{4}" },
    ],
    correctAnswer: "B",
    explanation:
      "补集由全集 U 中不属于 A 的元素组成，因此为 {2,4}。",
  },

  /* =========================================================
     04 充分条件与必要条件
  ========================================================= */

  {
    id: "conditions-01",
    topic: "充分条件与必要条件",
    title: "充分必要条件判断",
    question:
      "设 p：x>2，q：x>1，则 p 是 q 的：",
    options: [
      { key: "A", text: "充分不必要条件" },
      { key: "B", text: "必要不充分条件" },
      { key: "C", text: "充要条件" },
      { key: "D", text: "既不充分也不必要条件" },
    ],
    correctAnswer: "A",
    explanation:
      "x>2 一定能推出 x>1，但 x>1 不能保证 x>2，因此 p 是 q 的充分不必要条件。",
  },

  {
    id: "conditions-02",
    topic: "充分条件与必要条件",
    title: "平方关系",
    question:
      "设 p：x=2，q：x²=4，则 p 是 q 的：",
    options: [
      { key: "A", text: "充分不必要条件" },
      { key: "B", text: "必要不充分条件" },
      { key: "C", text: "充要条件" },
      { key: "D", text: "既不充分也不必要条件" },
    ],
    correctAnswer: "A",
    explanation:
      "x=2 可以推出 x²=4，但 x²=4 还可能有 x=−2，因此 p 是 q 的充分不必要条件。",
  },

  {
    id: "conditions-03",
    topic: "充分条件与必要条件",
    title: "代数关系",
    question:
      "设 p：a=b，q：a²=b²，则 p 是 q 的：",
    options: [
      { key: "A", text: "充分不必要条件" },
      { key: "B", text: "必要不充分条件" },
      { key: "C", text: "充要条件" },
      { key: "D", text: "既不充分也不必要条件" },
    ],
    correctAnswer: "A",
    explanation:
      "a=b 一定能推出 a²=b²，但 a²=b² 还可能有 a=−b，因此不是必要条件。",
  },

  /* =========================================================
     05 全称量词与存在量词
  ========================================================= */

  {
    id: "quantifiers-01",
    topic: "全称量词与存在量词",
    title: "全称命题",
    question: "下列命题中正确的是：",
    options: [
      { key: "A", text: "∀x∈R，x²≥0" },
      { key: "B", text: "∀x∈R，x²<0" },
      { key: "C", text: "∀x∈R，x>0" },
      { key: "D", text: "∀x∈R，x≠0" },
    ],
    correctAnswer: "A",
    explanation:
      "任意实数的平方都大于或等于 0，因此命题 ∀x∈R，x²≥0 正确。",
  },

  {
    id: "quantifiers-02",
    topic: "全称量词与存在量词",
    title: "全称命题的否定",
    question:
      "命题“∀x∈R，x²≥0”的否定是：",
    options: [
      { key: "A", text: "∀x∈R，x²<0" },
      { key: "B", text: "∃x∈R，x²<0" },
      { key: "C", text: "∃x∈R，x²≥0" },
      { key: "D", text: "∀x∈R，x²>0" },
    ],
    correctAnswer: "B",
    explanation:
      "全称命题的否定要把“∀”改为“∃”，同时否定结论，因此得到 ∃x∈R，x²<0。",
  },

  {
    id: "quantifiers-03",
    topic: "全称量词与存在量词",
    title: "存在命题的否定",
    question:
      "命题“∃x>0，使 x²=2”的否定是：",
    options: [
      { key: "A", text: "∃x>0，使 x²≠2" },
      { key: "B", text: "∀x>0，都有 x²≠2" },
      { key: "C", text: "∀x>0，都有 x²=2" },
      { key: "D", text: "∃x<0，使 x²=2" },
    ],
    correctAnswer: "B",
    explanation:
      "存在命题的否定，要把“存在”改成“任意”，并否定后面的结论。",
  },

  /* =========================================================
     06 等式与不等式的基本性质
  ========================================================= */

  {
    id: "inequality-properties-01",
    topic: "等式与不等式的基本性质",
    title: "不等式加法性质",
    question:
      "若 a>b，则对于任意实数 c，下列一定成立的是：",
    options: [
      { key: "A", text: "a+c>b+c" },
      { key: "B", text: "a+c<b+c" },
      { key: "C", text: "ac>bc" },
      { key: "D", text: "a−c<b−c" },
    ],
    correctAnswer: "A",
    explanation:
      "不等式两边同时加上同一个实数，不等号方向不改变。",
  },

  {
    id: "inequality-properties-02",
    topic: "等式与不等式的基本性质",
    title: "负数乘法",
    question:
      "若 a>b，且 c<0，则下列关系正确的是：",
    options: [
      { key: "A", text: "ac>bc" },
      { key: "B", text: "ac<bc" },
      { key: "C", text: "ac=bc" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "B",
    explanation:
      "不等式两边同时乘以负数时，不等号方向需要改变。",
  },

  {
    id: "inequality-properties-03",
    topic: "等式与不等式的基本性质",
    title: "倒数关系",
    question:
      "若 a>b>0，则下列关系正确的是：",
    options: [
      { key: "A", text: "1/a > 1/b" },
      { key: "B", text: "1/a < 1/b" },
      { key: "C", text: "1/a = 1/b" },
      { key: "D", text: "无法比较" },
    ],
    correctAnswer: "B",
    explanation:
      "对于正数，数越大其倒数越小。因此 a>b>0 时，1/a<1/b。",
  },

  /* =========================================================
     07 基本不等式
  ========================================================= */

  {
    id: "basic-inequality-01",
    topic: "基本不等式",
    title: "基本不等式",
    question:
      "当 x>0 时，x+1/x 的最小值是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    correctAnswer: "B",
    explanation:
      "由基本不等式 x+1/x≥2，当且仅当 x=1 时等号成立。",
  },

  {
    id: "basic-inequality-02",
    topic: "基本不等式",
    title: "和定积最大",
    question:
      "若 a>0，b>0，且 a+b=10，则 ab 的最大值为：",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "20" },
      { key: "C", text: "25" },
      { key: "D", text: "100" },
    ],
    correctAnswer: "C",
    explanation:
      "由 ab≤[(a+b)/2]²=25，当且仅当 a=b=5 时取得最大值 25。",
  },

  {
    id: "basic-inequality-03",
    topic: "基本不等式",
    title: "配凑基本不等式",
    question:
      "当 x>0 时，x+4/x 的最小值是：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
    ],
    correctAnswer: "C",
    explanation:
      "x+4/x≥2√(x·4/x)=4，当 x=2 时等号成立。",
  },

  /* =========================================================
     08 一元二次函数与一元二次方程
  ========================================================= */

  {
    id: "quadratic-equation-01",
    topic: "一元二次函数与一元二次方程",
    title: "方程的根",
    question: "方程 x²−5x+6=0 的两个根是：",
    options: [
      { key: "A", text: "1，6" },
      { key: "B", text: "2，3" },
      { key: "C", text: "−2，−3" },
      { key: "D", text: "3，5" },
    ],
    correctAnswer: "B",
    explanation:
      "x²−5x+6=(x−2)(x−3)，因此两个根为 2 和 3。",
  },

  {
    id: "quadratic-equation-02",
    topic: "一元二次函数与一元二次方程",
    title: "判别式",
    question: "方程 x²−4x+4=0 的实数根情况是：",
    options: [
      { key: "A", text: "没有实数根" },
      { key: "B", text: "有两个不相等实数根" },
      { key: "C", text: "有两个相等实数根" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "C",
    explanation:
      "判别式 Δ=(−4)²−4×1×4=0，因此有两个相等的实数根。",
  },

  {
    id: "quadratic-equation-03",
    topic: "一元二次函数与一元二次方程",
    title: "韦达定理",
    question:
      "方程 2x²−3x−2=0 的两个根之和为：",
    options: [
      { key: "A", text: "−3/2" },
      { key: "B", text: "3/2" },
      { key: "C", text: "−1" },
      { key: "D", text: "1" },
    ],
    correctAnswer: "B",
    explanation:
      "由韦达定理 x₁+x₂=−b/a=3/2。",
  },

  /* =========================================================
     09 一元二次不等式
  ========================================================= */

  {
    id: "quadratic-inequality-01",
    topic: "一元二次不等式",
    title: "二次不等式",
    question: "不等式 x²−5x+6<0 的解集是：",
    options: [
      { key: "A", text: "x<2 或 x>3" },
      { key: "B", text: "2<x<3" },
      { key: "C", text: "x≤2" },
      { key: "D", text: "x≥3" },
    ],
    correctAnswer: "B",
    explanation:
      "x²−5x+6=(x−2)(x−3)，开口向上，在两个根之间函数值小于 0。",
  },

  {
    id: "quadratic-inequality-02",
    topic: "一元二次不等式",
    title: "恒成立不等式",
    question: "不等式 x²+1>0 的解集为：",
    options: [
      { key: "A", text: "x>0" },
      { key: "B", text: "x<0" },
      { key: "C", text: "x≠0" },
      { key: "D", text: "R" },
    ],
    correctAnswer: "D",
    explanation:
      "任意实数 x 都有 x²≥0，因此 x²+1≥1>0，对所有实数成立。",
  },

  {
    id: "quadratic-inequality-03",
    topic: "一元二次不等式",
    title: "开口向下",
    question: "不等式 −x²+x+2>0 的解集为：",
    options: [
      { key: "A", text: "−1<x<2" },
      { key: "B", text: "x<−1 或 x>2" },
      { key: "C", text: "x>2" },
      { key: "D", text: "x<−1" },
    ],
    correctAnswer: "A",
    explanation:
      "−x²+x+2>0 等价于 x²−x−2<0，即 (x−2)(x+1)<0，所以 −1<x<2。",
  },

  /* =========================================================
     10 二次函数、方程与不等式综合
  ========================================================= */

  {
    id: "quadratic-applications-01",
    topic: "二次函数、方程与不等式的综合应用",
    title: "参数与根",
    question:
      "方程 x²−2x+m=0 有两个不相等的实数根，则 m 应满足：",
    options: [
      { key: "A", text: "m<1" },
      { key: "B", text: "m=1" },
      { key: "C", text: "m>1" },
      { key: "D", text: "m≤1" },
    ],
    correctAnswer: "A",
    explanation:
      "有两个不相等实数根需要 Δ>0，即 4−4m>0，所以 m<1。",
  },

  {
    id: "quadratic-applications-02",
    topic: "二次函数、方程与不等式的综合应用",
    title: "二次函数最值",
    question: "函数 y=x²−4x+7 的最小值为：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "C",
    explanation:
      "y=(x−2)²+3，因此当 x=2 时取得最小值 3。",
  },

  {
    id: "quadratic-applications-03",
    topic: "二次函数、方程与不等式的综合应用",
    title: "实际最值问题",
    question:
      "一个矩形周长为 20，则其面积的最大值为：",
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "24" },
      { key: "C", text: "25" },
      { key: "D", text: "100" },
    ],
    correctAnswer: "C",
    explanation:
      "设一边为 x，则另一边为 10−x，面积 S=x(10−x)=−(x−5)²+25，最大值为 25。",
  },

  /* =========================================================
     11 函数的概念
  ========================================================= */

  {
    id: "function-concept-01",
    topic: "函数的概念",
    title: "函数判断",
    question: "下列对应关系能够表示函数的是：",
    options: [
      { key: "A", text: "一个 x 对应两个不同的 y" },
      { key: "B", text: "每一个 x 都唯一对应一个 y" },
      { key: "C", text: "有些 x 没有对应的 y" },
      { key: "D", text: "同一个 x 可以任意对应多个 y" },
    ],
    correctAnswer: "B",
    explanation:
      "函数要求定义域中的每一个自变量 x 都有唯一确定的函数值 y。",
  },

  {
    id: "function-concept-02",
    topic: "函数的概念",
    title: "函数值",
    question: "若 f(x)=2x−1，则 f(3) 等于：",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "B",
    explanation:
      "将 x=3 代入 f(x)=2x−1，得到 f(3)=6−1=5。",
  },

  {
    id: "function-concept-03",
    topic: "函数的概念",
    title: "相同函数",
    question:
      "在实数范围内，f(x)=x² 与下列哪个函数表示同一个函数？",
    options: [
      { key: "A", text: "g(x)=|x|²" },
      { key: "B", text: "g(x)=x" },
      { key: "C", text: "g(x)=|x|" },
      { key: "D", text: "g(x)=x²+1" },
    ],
    correctAnswer: "A",
    explanation:
      "对于任意实数 x，都有 |x|²=x²，并且两者定义域均为 R，因此表示同一个函数。",
  },

  /* =========================================================
     12 定义域与值域
  ========================================================= */

  {
    id: "domain-range-01",
    topic: "定义域与值域",
    title: "根式定义域",
    question: "函数 y=√(2x−4) 的定义域为：",
    options: [
      { key: "A", text: "x>2" },
      { key: "B", text: "x≥2" },
      { key: "C", text: "x≤2" },
      { key: "D", text: "R" },
    ],
    correctAnswer: "B",
    explanation:
      "根号内必须满足 2x−4≥0，因此 x≥2。",
  },

  {
    id: "domain-range-02",
    topic: "定义域与值域",
    title: "分式定义域",
    question: "函数 y=1/(x²−4) 的定义域为：",
    options: [
      { key: "A", text: "x≠2" },
      { key: "B", text: "x≠−2" },
      { key: "C", text: "x≠±2" },
      { key: "D", text: "R" },
    ],
    correctAnswer: "C",
    explanation:
      "分母不能为 0。x²−4=(x−2)(x+2)，所以 x≠2 且 x≠−2。",
  },

  {
    id: "domain-range-03",
    topic: "定义域与值域",
    title: "值域",
    question:
      "函数 y=x²，x∈[−2,3] 的值域为：",
    options: [
      { key: "A", text: "[0,4]" },
      { key: "B", text: "[0,9]" },
      { key: "C", text: "[4,9]" },
      { key: "D", text: "[−2,3]" },
    ],
    correctAnswer: "B",
    explanation:
      "区间包含 0，所以最小值为 0；端点平方最大为 3²=9，因此值域为 [0,9]。",
  },

  /* =========================================================
     13 函数的单调性
  ========================================================= */

  {
    id: "monotonicity-01",
    topic: "函数的单调性",
    title: "一次函数单调性",
    question: "函数 y=3x−2 在 R 上：",
    options: [
      { key: "A", text: "单调递增" },
      { key: "B", text: "单调递减" },
      { key: "C", text: "先增后减" },
      { key: "D", text: "不是单调函数" },
    ],
    correctAnswer: "A",
    explanation:
      "一次函数 y=kx+b 中 k=3>0，因此在 R 上单调递增。",
  },

  {
    id: "monotonicity-02",
    topic: "函数的单调性",
    title: "二次函数区间单调性",
    question: "函数 y=−x² 在区间 [0,+∞) 上：",
    options: [
      { key: "A", text: "单调递增" },
      { key: "B", text: "单调递减" },
      { key: "C", text: "先增后减" },
      { key: "D", text: "恒为常数" },
    ],
    correctAnswer: "B",
    explanation:
      "当 x≥0 时，x 增大，−x² 不断减小，因此在 [0,+∞) 上单调递减。",
  },

  {
    id: "monotonicity-03",
    topic: "函数的单调性",
    title: "单调性应用",
    question:
      "若函数 f(x) 在 R 上单调递增，则下列一定正确的是：",
    options: [
      { key: "A", text: "f(−1)<f(2)" },
      { key: "B", text: "f(−1)>f(2)" },
      { key: "C", text: "f(−1)=f(2)" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "A",
    explanation:
      "因为 −1<2，且 f(x) 单调递增，所以 f(−1)<f(2)。",
  },

  /* =========================================================
     14 函数的奇偶性
  ========================================================= */

  {
    id: "parity-01",
    topic: "函数的奇偶性",
    title: "偶函数",
    question: "下列函数中是偶函数的是：",
    options: [
      { key: "A", text: "f(x)=x²+1" },
      { key: "B", text: "f(x)=x³" },
      { key: "C", text: "f(x)=x+1" },
      { key: "D", text: "f(x)=x²+x" },
    ],
    correctAnswer: "A",
    explanation:
      "f(−x)=(−x)²+1=x²+1=f(x)，因此 f(x)=x²+1 是偶函数。",
  },

  {
    id: "parity-02",
    topic: "函数的奇偶性",
    title: "奇函数",
    question: "下列函数中是奇函数的是：",
    options: [
      { key: "A", text: "f(x)=x²" },
      { key: "B", text: "f(x)=x³−x" },
      { key: "C", text: "f(x)=x²+1" },
      { key: "D", text: "f(x)=|x|" },
    ],
    correctAnswer: "B",
    explanation:
      "f(−x)=−x³+x=−(x³−x)=−f(x)，因此是奇函数。",
  },

  {
    id: "parity-03",
    topic: "函数的奇偶性",
    title: "非奇非偶函数",
    question: "函数 f(x)=x²+x 在 R 上是：",
    options: [
      { key: "A", text: "奇函数" },
      { key: "B", text: "偶函数" },
      { key: "C", text: "既是奇函数又是偶函数" },
      { key: "D", text: "非奇非偶函数" },
    ],
    correctAnswer: "D",
    explanation:
      "f(−x)=x²−x，既不等于 f(x)，也不等于 −f(x)，所以是非奇非偶函数。",
  },

  /* =========================================================
     15 函数的最大值与最小值
  ========================================================= */

  {
    id: "extrema-01",
    topic: "函数的最大值与最小值",
    title: "二次函数最小值",
    question: "函数 y=(x−2)²+1 的最小值为：",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1" },
      { key: "C", text: "2" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "B",
    explanation:
      "(x−2)²≥0，所以当 x=2 时函数取得最小值 1。",
  },

  {
    id: "extrema-02",
    topic: "函数的最大值与最小值",
    title: "二次函数最大值",
    question: "函数 y=−(x+1)²+4 的最大值为：",
    options: [
      { key: "A", text: "−1" },
      { key: "B", text: "1" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
    ],
    correctAnswer: "C",
    explanation:
      "−(x+1)²≤0，当 x=−1 时取得最大值 4。",
  },

  {
    id: "extrema-03",
    topic: "函数的最大值与最小值",
    title: "绝对值函数最值",
    question: "函数 y=|x−3|+2 的最小值为：",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1" },
      { key: "C", text: "2" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "C",
    explanation:
      "|x−3|≥0，当 x=3 时等号成立，因此函数最小值为 2。",
  },

  /* =========================================================
     16 根式与分数指数幂
  ========================================================= */

  {
    id: "powers-01",
    topic: "根式与分数指数幂",
    title: "分数指数幂",
    question: "16^(3/4) 的值为：",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6" },
      { key: "C", text: "8" },
      { key: "D", text: "12" },
    ],
    correctAnswer: "C",
    explanation:
      "16^(1/4)=2，所以 16^(3/4)=(16^(1/4))³=2³=8。",
  },

  {
    id: "powers-02",
    topic: "根式与分数指数幂",
    title: "分数指数幂计算",
    question: "27^(2/3) 的值为：",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "6" },
      { key: "C", text: "9" },
      { key: "D", text: "18" },
    ],
    correctAnswer: "C",
    explanation:
      "27^(1/3)=3，因此 27^(2/3)=3²=9。",
  },

  {
    id: "powers-03",
    topic: "根式与分数指数幂",
    title: "负指数幂",
    question: "2^(−3) 的值为：",
    options: [
      { key: "A", text: "−8" },
      { key: "B", text: "−1/8" },
      { key: "C", text: "1/6" },
      { key: "D", text: "1/8" },
    ],
    correctAnswer: "D",
    explanation:
      "负指数幂满足 a^(−n)=1/aⁿ，因此 2^(−3)=1/2³=1/8。",
  },

  /* =========================================================
     17 指数函数
  ========================================================= */

  {
    id: "exponential-function-01",
    topic: "指数函数",
    title: "指数函数定义",
    question: "下列函数中属于指数函数的是：",
    options: [
      { key: "A", text: "y=x²" },
      { key: "B", text: "y=2ˣ" },
      { key: "C", text: "y=2x" },
      { key: "D", text: "y=x+2" },
    ],
    correctAnswer: "B",
    explanation:
      "指数函数的标准形式为 y=aˣ，其中 a>0 且 a≠1。y=2ˣ 符合定义。",
  },

  {
    id: "exponential-function-02",
    topic: "指数函数",
    title: "指数函数单调性",
    question: "函数 y=(1/3)ˣ 在 R 上：",
    options: [
      { key: "A", text: "单调递增" },
      { key: "B", text: "单调递减" },
      { key: "C", text: "先增后减" },
      { key: "D", text: "没有单调性" },
    ],
    correctAnswer: "B",
    explanation:
      "底数满足 0<1/3<1，因此指数函数在 R 上单调递减。",
  },

  {
    id: "exponential-function-03",
    topic: "指数函数",
    title: "指数不等式",
    question: "若 2ˣ>8，则 x 应满足：",
    options: [
      { key: "A", text: "x<3" },
      { key: "B", text: "x≤3" },
      { key: "C", text: "x>3" },
      { key: "D", text: "x≥3" },
    ],
    correctAnswer: "C",
    explanation:
      "8=2³，且底数 2>1，指数函数单调递增，因此 2ˣ>2³ 等价于 x>3。",
  },

  /* =========================================================
     18 对数与对数运算
  ========================================================= */

  {
    id: "logarithm-01",
    topic: "对数与对数运算",
    title: "对数定义",
    question: "log₂8 的值为：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "8" },
    ],
    correctAnswer: "B",
    explanation:
      "因为 2³=8，所以 log₂8=3。",
  },

  {
    id: "logarithm-02",
    topic: "对数与对数运算",
    title: "对数运算法则",
    question: "log₂4 + log₂8 的值为：",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "6" },
    ],
    correctAnswer: "C",
    explanation:
      "log₂4=2，log₂8=3，所以两者之和为 5。也可用积的对数得到 log₂32=5。",
  },

  {
    id: "logarithm-03",
    topic: "对数与对数运算",
    title: "负对数值",
    question: "log₃(1/27) 的值为：",
    options: [
      { key: "A", text: "−3" },
      { key: "B", text: "−1/3" },
      { key: "C", text: "1/3" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "A",
    explanation:
      "1/27=3^(−3)，因此 log₃(1/27)=−3。",
  },

  /* =========================================================
     19 对数函数
  ========================================================= */

  {
    id: "logarithmic-function-01",
    topic: "对数函数",
    title: "对数函数定义域",
    question: "函数 y=log₂(x−1) 的定义域为：",
    options: [
      { key: "A", text: "x>0" },
      { key: "B", text: "x≥1" },
      { key: "C", text: "x>1" },
      { key: "D", text: "R" },
    ],
    correctAnswer: "C",
    explanation:
      "对数真数必须大于 0，因此 x−1>0，即 x>1。",
  },

  {
    id: "logarithmic-function-02",
    topic: "对数函数",
    title: "对数函数单调性",
    question: "函数 y=log₁/₂x 在定义域上：",
    options: [
      { key: "A", text: "单调递增" },
      { key: "B", text: "单调递减" },
      { key: "C", text: "先增后减" },
      { key: "D", text: "没有单调性" },
    ],
    correctAnswer: "B",
    explanation:
      "底数满足 0<1/2<1，因此对数函数在 (0,+∞) 上单调递减。",
  },

  {
    id: "logarithmic-function-03",
    topic: "对数函数",
    title: "对数不等式",
    question: "若 log₂x>1，则 x 应满足：",
    options: [
      { key: "A", text: "0<x<1" },
      { key: "B", text: "1<x<2" },
      { key: "C", text: "x>2" },
      { key: "D", text: "x<2" },
    ],
    correctAnswer: "C",
    explanation:
      "1=log₂2，且底数 2>1，对数函数单调递增，因此 log₂x>log₂2 等价于 x>2。",
  },

  /* =========================================================
     20 指数函数与对数函数综合应用
  ========================================================= */

  {
    id: "exp-log-applications-01",
    topic: "指数函数与对数函数的综合应用",
    title: "指数方程",
    question: "方程 2^(x+1)=8 的解为：",
    options: [
      { key: "A", text: "x=1" },
      { key: "B", text: "x=2" },
      { key: "C", text: "x=3" },
      { key: "D", text: "x=4" },
    ],
    correctAnswer: "B",
    explanation:
      "8=2³，所以 x+1=3，得到 x=2。",
  },

  {
    id: "exp-log-applications-02",
    topic: "指数函数与对数函数的综合应用",
    title: "对数方程",
    question: "方程 log₂(x−1)=3 的解为：",
    options: [
      { key: "A", text: "x=7" },
      { key: "B", text: "x=8" },
      { key: "C", text: "x=9" },
      { key: "D", text: "x=10" },
    ],
    correctAnswer: "C",
    explanation:
      "log₂(x−1)=3 等价于 x−1=2³=8，因此 x=9，并且满足真数条件 x−1>0。",
  },

  {
    id: "exp-log-applications-03",
    topic: "指数函数与对数函数的综合应用",
    title: "指数增长模型",
    question:
      "某数量初始为 100，每期增长 10%，经过 2 期后的数量为：",
    options: [
      { key: "A", text: "110" },
      { key: "B", text: "120" },
      { key: "C", text: "121" },
      { key: "D", text: "130" },
    ],
    correctAnswer: "C",
    explanation:
      "指数增长模型为 N=100×(1+10%)²=100×1.1²=121。",
  },

  /* =========================================================
     21 任意角与弧度制
  ========================================================= */

  {
    id: "trig-angles-radians-01",
    topic: "任意角与弧度制",
    title: "角度制与弧度制",
    question: "180° 等于多少弧度？",
    options: [
      { key: "A", text: "π/2" },
      { key: "B", text: "π" },
      { key: "C", text: "2π" },
      { key: "D", text: "3π/2" },
    ],
    correctAnswer: "B",
    explanation:
      "角度制与弧度制的基本对应关系是 180°=π rad。",
  },

  {
    id: "trig-angles-radians-02",
    topic: "任意角与弧度制",
    title: "终边相同的角",
    question: "与 30° 终边相同的角可以表示为：",
    options: [
      { key: "A", text: "30°+180°k，k∈Z" },
      { key: "B", text: "30°+360°k，k∈Z" },
      { key: "C", text: "30°+90°k，k∈Z" },
      { key: "D", text: "30°+270°k，k∈Z" },
    ],
    correctAnswer: "B",
    explanation:
      "终边相同的角相差整数个周角，因此可表示为 30°+360°k，k∈Z。",
  },

  {
    id: "trig-angles-radians-03",
    topic: "任意角与弧度制",
    title: "象限角判断",
    question: "角 120° 是：",
    options: [
      { key: "A", text: "第一象限角" },
      { key: "B", text: "第二象限角" },
      { key: "C", text: "第三象限角" },
      { key: "D", text: "第四象限角" },
    ],
    correctAnswer: "B",
    explanation:
      "90°<120°<180°，因此 120° 的终边位于第二象限。",
  },

  /* =========================================================
     22 三角函数的概念与基本关系
  ========================================================= */

  {
    id: "trig-definition-relations-01",
    topic: "三角函数的概念与基本关系",
    title: "单位圆定义",
    question:
      "角 α 的终边与单位圆交于点 P(1/2，√3/2)，则 sin α 等于：",
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "√3/2" },
      { key: "C", text: "√3" },
      { key: "D", text: "2" },
    ],
    correctAnswer: "B",
    explanation:
      "在单位圆中，点 P 的横坐标为 cos α，纵坐标为 sin α，因此 sin α=√3/2。",
  },

  {
    id: "trig-definition-relations-02",
    topic: "三角函数的概念与基本关系",
    title: "象限符号",
    question: "若 α 是第二象限角，则下列关系正确的是：",
    options: [
      { key: "A", text: "sin α>0，cos α>0" },
      { key: "B", text: "sin α>0，cos α<0" },
      { key: "C", text: "sin α<0，cos α<0" },
      { key: "D", text: "sin α<0，cos α>0" },
    ],
    correctAnswer: "B",
    explanation:
      "第二象限中横坐标为负、纵坐标为正，所以 cos α<0，sin α>0。",
  },

  {
    id: "trig-definition-relations-03",
    topic: "三角函数的概念与基本关系",
    title: "同角三角函数关系",
    question:
      "若 sin α=3/5，cos α=4/5，则 tan α 等于：",
    options: [
      { key: "A", text: "3/4" },
      { key: "B", text: "4/3" },
      { key: "C", text: "5/3" },
      { key: "D", text: "5/4" },
    ],
    correctAnswer: "A",
    explanation:
      "tan α=sin α/cos α=(3/5)/(4/5)=3/4。",
  },

  /* =========================================================
     23 诱导公式
  ========================================================= */

  {
    id: "trig-induction-formulas-01",
    topic: "诱导公式",
    title: "负角公式",
    question: "sin(−30°) 的值为：",
    options: [
      { key: "A", text: "1/2" },
      { key: "B", text: "−1/2" },
      { key: "C", text: "√3/2" },
      { key: "D", text: "−√3/2" },
    ],
    correctAnswer: "B",
    explanation:
      "sin(−α)=−sin α，所以 sin(−30°)=−sin30°=−1/2。",
  },

  {
    id: "trig-induction-formulas-02",
    topic: "诱导公式",
    title: "π−α 型公式",
    question: "cos150° 的值为：",
    options: [
      { key: "A", text: "√3/2" },
      { key: "B", text: "−√3/2" },
      { key: "C", text: "1/2" },
      { key: "D", text: "−1/2" },
    ],
    correctAnswer: "B",
    explanation:
      "150°=180°−30°，而 cos(180°−α)=−cos α，所以 cos150°=−√3/2。",
  },

  {
    id: "trig-induction-formulas-03",
    topic: "诱导公式",
    title: "2π−α 型公式",
    question: "tan315° 的值为：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "−1" },
      { key: "C", text: "√3" },
      { key: "D", text: "−√3" },
    ],
    correctAnswer: "B",
    explanation:
      "315°=360°−45°，第四象限正切为负，所以 tan315°=−tan45°=−1。",
  },

  /* =========================================================
     24 三角函数的图象与性质
  ========================================================= */

  {
    id: "trig-graphs-properties-01",
    topic: "三角函数的图象与性质",
    title: "正弦函数周期",
    question: "函数 y=sin x 的最小正周期是：",
    options: [
      { key: "A", text: "π/2" },
      { key: "B", text: "π" },
      { key: "C", text: "2π" },
      { key: "D", text: "4π" },
    ],
    correctAnswer: "C",
    explanation:
      "sin(x+2π)=sin x，因此正弦函数的最小正周期为 2π。",
  },

  {
    id: "trig-graphs-properties-02",
    topic: "三角函数的图象与性质",
    title: "余弦函数奇偶性",
    question: "函数 y=cos x 是：",
    options: [
      { key: "A", text: "奇函数" },
      { key: "B", text: "偶函数" },
      { key: "C", text: "非奇非偶函数" },
      { key: "D", text: "常函数" },
    ],
    correctAnswer: "B",
    explanation:
      "cos(−x)=cos x，因此余弦函数是偶函数，图象关于 y 轴对称。",
  },

  {
    id: "trig-graphs-properties-03",
    topic: "三角函数的图象与性质",
    title: "正切函数周期",
    question: "函数 y=tan x 的最小正周期是：",
    options: [
      { key: "A", text: "π/2" },
      { key: "B", text: "π" },
      { key: "C", text: "2π" },
      { key: "D", text: "4π" },
    ],
    correctAnswer: "B",
    explanation:
      "tan(x+π)=tan x，因此正切函数的最小正周期为 π。",
  },

  /* =========================================================
     25 三角恒等变换
  ========================================================= */

  {
    id: "trig-identities-01",
    topic: "三角恒等变换",
    title: "正弦和角公式",
    question: "sin75° 的值为：",
    options: [
      { key: "A", text: "(√6+√2)/4" },
      { key: "B", text: "(√6−√2)/4" },
      { key: "C", text: "√3/2" },
      { key: "D", text: "1/2" },
    ],
    correctAnswer: "A",
    explanation:
      "75°=45°+30°，利用 sin(α+β)=sinαcosβ+cosαsinβ，可得 sin75°=(√6+√2)/4。",
  },

  {
    id: "trig-identities-02",
    topic: "三角恒等变换",
    title: "正弦二倍角",
    question:
      "若 sin α=3/5，cos α=4/5，则 sin2α 等于：",
    options: [
      { key: "A", text: "7/25" },
      { key: "B", text: "12/25" },
      { key: "C", text: "24/25" },
      { key: "D", text: "1" },
    ],
    correctAnswer: "C",
    explanation:
      "sin2α=2sinαcosα=2×3/5×4/5=24/25。",
  },

  {
    id: "trig-identities-03",
    topic: "三角恒等变换",
    title: "余弦二倍角",
    question: "cos²α−sin²α 可以化为：",
    options: [
      { key: "A", text: "sin2α" },
      { key: "B", text: "cos2α" },
      { key: "C", text: "tan2α" },
      { key: "D", text: "1" },
    ],
    correctAnswer: "B",
    explanation:
      "余弦二倍角公式为 cos2α=cos²α−sin²α。",
  },
];