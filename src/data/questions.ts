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

export const questions: Question[] = [
  // ==================================================
  // 第一模块：集合与常用逻辑用语
  // ==================================================

  {
    id: "set-concept-001",
    topic: "集合的概念",
    title: "元素与集合",
    question: "已知集合 A={1,2,3}，下列说法正确的是：",
    options: [
      { key: "A", text: "1 ∉ A" },
      { key: "B", text: "2 ∈ A" },
      { key: "C", text: "4 ∈ A" },
      { key: "D", text: "5 ∈ A" },
    ],
    correctAnswer: "B",
    explanation:
      "集合 A 中含有元素 1、2、3，因此 2 属于集合 A，写作 2 ∈ A。",
  },
  {
    id: "set-concept-002",
    topic: "集合的概念",
    title: "集合的确定性",
    question: "下列对象能够组成集合的是：",
    options: [
      { key: "A", text: "班级中比较高的同学" },
      { key: "B", text: "比较漂亮的数字" },
      { key: "C", text: "小于 5 的正整数" },
      { key: "D", text: "比较难的数学题" },
    ],
    correctAnswer: "C",
    explanation:
      "集合中的元素必须具有确定性。“小于 5 的正整数”有明确判断标准。",
  },
  {
    id: "set-concept-003",
    topic: "集合的概念",
    title: "集合的表示方法",
    question: "集合 {1,2,3,4} 用描述法表示正确的是：",
    options: [
      {
        key: "A",
        text: "{x | x 是小于 5 的正整数}",
      },
      {
        key: "B",
        text: "{x | x > 5}",
      },
      {
        key: "C",
        text: "{x | x 是负整数}",
      },
      {
        key: "D",
        text: "{1,2,3}",
      },
    ],
    correctAnswer: "A",
    explanation:
      "1、2、3、4 正好是所有小于 5 的正整数。",
  },

  {
    id: "set-relations-001",
    topic: "集合间的基本关系",
    title: "子集判断",
    question: "已知 A={1,2}，B={1,2,3}，则下列关系正确的是：",
    options: [
      { key: "A", text: "A ⊆ B" },
      { key: "B", text: "B ⊆ A" },
      { key: "C", text: "A = B" },
      { key: "D", text: "A ∈ B" },
    ],
    correctAnswer: "A",
    explanation:
      "A 中的元素 1、2 都属于 B，因此 A 是 B 的子集。",
  },
  {
    id: "set-relations-002",
    topic: "集合间的基本关系",
    title: "空集",
    question: "下列关于空集 ∅ 的说法正确的是：",
    options: [
      { key: "A", text: "空集不属于任何集合" },
      { key: "B", text: "空集是任何集合的子集" },
      { key: "C", text: "空集中有一个元素 0" },
      { key: "D", text: "∅={0}" },
    ],
    correctAnswer: "B",
    explanation:
      "空集是任何集合的子集。空集 ∅ 与只含元素 0 的集合 {0} 不相同。",
  },
  {
    id: "set-relations-003",
    topic: "集合间的基本关系",
    title: "集合相等",
    question: "若 A⊆B 且 B⊆A，则一定有：",
    options: [
      { key: "A", text: "A∈B" },
      { key: "B", text: "A≠B" },
      { key: "C", text: "A=B" },
      { key: "D", text: "A=∅" },
    ],
    correctAnswer: "C",
    explanation:
      "两个集合互为子集，说明它们所含元素完全相同，因此 A=B。",
  },

  {
    id: "set-operations-001",
    topic: "集合的基本运算",
    title: "交集",
    question: "已知 A={1,2,3}，B={2,3,4}，则 A∩B 等于：",
    options: [
      { key: "A", text: "{1,2,3,4}" },
      { key: "B", text: "{2,3}" },
      { key: "C", text: "{1,4}" },
      { key: "D", text: "∅" },
    ],
    correctAnswer: "B",
    explanation:
      "交集由两个集合共同具有的元素组成，因此 A∩B={2,3}。",
  },
  {
    id: "set-operations-002",
    topic: "集合的基本运算",
    title: "并集",
    question: "已知 A={1,2,3}，B={2,3,4}，则 A∪B 等于：",
    options: [
      { key: "A", text: "{2,3}" },
      { key: "B", text: "{1,4}" },
      { key: "C", text: "{1,2,3,4}" },
      { key: "D", text: "{1,2,2,3,3,4}" },
    ],
    correctAnswer: "C",
    explanation:
      "并集包含两个集合的所有元素，相同元素只写一次。",
  },
  {
    id: "set-operations-003",
    topic: "集合的基本运算",
    title: "补集",
    question:
      "全集 U={1,2,3,4,5}，A={1,3,5}，则 A 在 U 中的补集为：",
    options: [
      { key: "A", text: "{1,3,5}" },
      { key: "B", text: "{2,4}" },
      { key: "C", text: "{1,2,3,4,5}" },
      { key: "D", text: "∅" },
    ],
    correctAnswer: "B",
    explanation:
      "全集 U 中不属于 A 的元素为 2、4。",
  },

  {
    id: "conditions-001",
    topic: "充分条件与必要条件",
    title: "充分不必要条件",
    question:
      "设 p：x=2，q：x²=4。则 p 是 q 的什么条件？",
    options: [
      { key: "A", text: "充分不必要条件" },
      { key: "B", text: "必要不充分条件" },
      { key: "C", text: "充要条件" },
      { key: "D", text: "既不充分也不必要条件" },
    ],
    correctAnswer: "A",
    explanation:
      "x=2 能推出 x²=4，但 x²=4 还可能有 x=-2，因此是充分不必要条件。",
  },
  {
    id: "conditions-002",
    topic: "充分条件与必要条件",
    title: "推出关系",
    question: "若 p⇒q 成立，则下列说法一定正确的是：",
    options: [
      { key: "A", text: "p 是 q 的必要条件" },
      { key: "B", text: "q 是 p 的充分条件" },
      { key: "C", text: "p 是 q 的充分条件" },
      { key: "D", text: "p 与 q 一定等价" },
    ],
    correctAnswer: "C",
    explanation:
      "p⇒q 时，p 是 q 的充分条件，同时 q 是 p 的必要条件。",
  },
  {
    id: "conditions-003",
    topic: "充分条件与必要条件",
    title: "必要不充分条件",
    question:
      "设 p：x>2，q：x>1。则 q 是 p 的什么条件？",
    options: [
      { key: "A", text: "充分不必要条件" },
      { key: "B", text: "必要不充分条件" },
      { key: "C", text: "充要条件" },
      { key: "D", text: "既不充分也不必要条件" },
    ],
    correctAnswer: "B",
    explanation:
      "x>2 可以推出 x>1，但 x>1 不能保证 x>2，所以 q 是 p 的必要不充分条件。",
  },

  {
    id: "quantifiers-001",
    topic: "全称量词与存在量词",
    title: "全称量词",
    question: "命题“任意实数 x，都有 x²≥0”属于：",
    options: [
      { key: "A", text: "全称量词命题" },
      { key: "B", text: "存在量词命题" },
      { key: "C", text: "假命题" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "A",
    explanation:
      "“任意实数 x”表示对所有实数都成立，因此是全称量词命题。",
  },
  {
    id: "quantifiers-002",
    topic: "全称量词与存在量词",
    title: "存在量词",
    question: "命题“存在实数 x，使 x²=4”属于：",
    options: [
      { key: "A", text: "全称量词命题" },
      { key: "B", text: "存在量词命题" },
      { key: "C", text: "假命题" },
      { key: "D", text: "没有量词" },
    ],
    correctAnswer: "B",
    explanation:
      "“存在实数 x”表示至少有一个实数满足条件。",
  },
  {
    id: "quantifiers-003",
    topic: "全称量词与存在量词",
    title: "命题的否定",
    question:
      "命题“所有实数 x 都满足 x²>0”的否定是：",
    options: [
      { key: "A", text: "所有实数 x 都满足 x²≤0" },
      { key: "B", text: "存在实数 x，使 x²≤0" },
      { key: "C", text: "存在实数 x，使 x²>0" },
      { key: "D", text: "所有实数 x 都满足 x²=0" },
    ],
    correctAnswer: "B",
    explanation:
      "全称命题的否定要把“所有”改为“存在”，同时否定后面的结论。",
  },

  // ==================================================
  // 第二模块：一元二次函数、方程和不等式
  // ==================================================

  {
    id: "quadratic-properties-001",
    topic: "等式与不等式的基本性质",
    title: "不等式加减性质",
    question: "若 a>b，则下列关系一定正确的是：",
    options: [
      { key: "A", text: "a+3>b+3" },
      { key: "B", text: "a−2<b−2" },
      { key: "C", text: "−a>−b" },
      { key: "D", text: "2a<2b" },
    ],
    correctAnswer: "A",
    explanation:
      "不等式两边同时加上同一个数，不等号方向不变，所以 a+3>b+3。",
  },
  {
    id: "quadratic-properties-002",
    topic: "等式与不等式的基本性质",
    title: "乘负数变号",
    question:
      "若 a>b，将不等式两边同时乘以 −2 后得到：",
    options: [
      { key: "A", text: "−2a>−2b" },
      { key: "B", text: "−2a<−2b" },
      { key: "C", text: "−2a=−2b" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "B",
    explanation:
      "不等式两边同时乘以负数时，不等号方向必须改变。",
  },
  {
    id: "quadratic-properties-003",
    topic: "等式与不等式的基本性质",
    title: "乘正数性质",
    question:
      "若 a>b，c>0，则下列关系一定正确的是：",
    options: [
      { key: "A", text: "ac>bc" },
      { key: "B", text: "ac<bc" },
      { key: "C", text: "ac=bc" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "A",
    explanation:
      "不等式两边同时乘以正数，不等号方向不变。",
  },

  {
    id: "basic-inequality-001",
    topic: "基本不等式",
    title: "基本不等式标准形式",
    question:
      "已知 a>0，b>0，则下列不等式正确的是：",
    options: [
      { key: "A", text: "(a+b)/2 ≥ √(ab)" },
      { key: "B", text: "(a+b)/2 ≤ √(ab)" },
      { key: "C", text: "a+b ≤ 2√(ab)" },
      { key: "D", text: "ab ≥ (a+b)²/4" },
    ],
    correctAnswer: "A",
    explanation:
      "正数 a、b 满足基本不等式：(a+b)/2≥√(ab)，等号在 a=b 时成立。",
  },
  {
    id: "basic-inequality-002",
    topic: "基本不等式",
    title: "分式型最值",
    question:
      "已知 x>0，则 x+4/x 的最小值为：",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "4" },
      { key: "C", text: "6" },
      { key: "D", text: "8" },
    ],
    correctAnswer: "B",
    explanation:
      "x+4/x≥2√4=4，当 x=2 时等号成立，所以最小值为 4。",
  },
  {
    id: "basic-inequality-003",
    topic: "基本不等式",
    title: "和定积最大",
    question:
      "若正数 a、b 满足 a+b=10，则 ab 的最大值为：",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "20" },
      { key: "C", text: "25" },
      { key: "D", text: "100" },
    ],
    correctAnswer: "C",
    explanation:
      "和一定时积有最大值。当 a=b=5 时，ab 取得最大值 25。",
  },

  {
    id: "quadratic-equation-001",
    topic: "一元二次函数与一元二次方程",
    title: "判别式计算",
    question:
      "对于方程 x²−5x+6=0，其判别式 Δ 的值为：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "5" },
      { key: "C", text: "13" },
      { key: "D", text: "25" },
    ],
    correctAnswer: "A",
    explanation:
      "a=1，b=-5，c=6，所以 Δ=b²−4ac=25−24=1。",
  },
  {
    id: "quadratic-equation-002",
    topic: "一元二次函数与一元二次方程",
    title: "判别式与根",
    question:
      "若一元二次方程 ax²+bx+c=0 的 Δ<0，则：",
    options: [
      { key: "A", text: "有两个不相等实数根" },
      { key: "B", text: "有两个相等实数根" },
      { key: "C", text: "没有实数根" },
      { key: "D", text: "一定有根 x=0" },
    ],
    correctAnswer: "C",
    explanation:
      "Δ<0 时，一元二次方程没有实数根。",
  },
  {
    id: "quadratic-equation-003",
    topic: "一元二次函数与一元二次方程",
    title: "函数零点",
    question:
      "函数 f(x)=x²−3x+2 的零点是：",
    options: [
      { key: "A", text: "1 和 2" },
      { key: "B", text: "−1 和 −2" },
      { key: "C", text: "0 和 3" },
      { key: "D", text: "只有 1" },
    ],
    correctAnswer: "A",
    explanation:
      "令 f(x)=0，得到 (x−1)(x−2)=0，所以零点为 1 和 2。",
  },

  {
    id: "quadratic-inequality-001",
    topic: "一元二次不等式",
    title: "大于零取两边",
    question:
      "不等式 x²−5x+6>0 的解集是：",
    options: [
      { key: "A", text: "2<x<3" },
      { key: "B", text: "x<2 或 x>3" },
      { key: "C", text: "x≤2 或 x≥3" },
      { key: "D", text: "2≤x≤3" },
    ],
    correctAnswer: "B",
    explanation:
      "两个根为 2、3，抛物线开口向上。函数值大于 0 时取两个根外侧。",
  },
  {
    id: "quadratic-inequality-002",
    topic: "一元二次不等式",
    title: "小于零取中间",
    question:
      "不等式 x²−4x+3<0 的解集是：",
    options: [
      { key: "A", text: "x<1 或 x>3" },
      { key: "B", text: "1<x<3" },
      { key: "C", text: "x≤1 或 x≥3" },
      { key: "D", text: "1≤x≤3" },
    ],
    correctAnswer: "B",
    explanation:
      "两个根为 1、3，抛物线开口向上，函数值小于 0 时取两个根之间。",
  },
  {
    id: "quadratic-inequality-003",
    topic: "一元二次不等式",
    title: "Δ等于零",
    question:
      "不等式 x²−2x+1≤0 的解集是：",
    options: [
      { key: "A", text: "R" },
      { key: "B", text: "x=1" },
      { key: "C", text: "x≠1" },
      { key: "D", text: "无解" },
    ],
    correctAnswer: "B",
    explanation:
      "x²−2x+1=(x−1)²≥0，要使其≤0，只能等于 0，所以 x=1。",
  },

  {
    id: "quadratic-applications-001",
    topic: "二次函数、方程与不等式的综合应用",
    title: "参数与判别式",
    question:
      "若方程 x²−2x+m=0 有两个不相等实数根，则 m 的取值范围是：",
    options: [
      { key: "A", text: "m<1" },
      { key: "B", text: "m≤1" },
      { key: "C", text: "m>1" },
      { key: "D", text: "m≥1" },
    ],
    correctAnswer: "A",
    explanation:
      "两个不相等实数根要求 Δ>0。4−4m>0，解得 m<1。",
  },
  {
    id: "quadratic-applications-002",
    topic: "二次函数、方程与不等式的综合应用",
    title: "二次函数最值",
    question:
      "函数 f(x)=x²−4x+7 的最小值是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "C",
    explanation:
      "f(x)=(x−2)²+3，因此最小值为 3。",
  },
  {
    id: "quadratic-applications-003",
    topic: "二次函数、方程与不等式的综合应用",
    title: "根与系数",
    question:
      "已知方程 x²−5x+6=0 的两根为 x₁、x₂，则 x₁+x₂ 等于：",
    options: [
      { key: "A", text: "−5" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "−6" },
    ],
    correctAnswer: "B",
    explanation:
      "根据根与系数关系，x₁+x₂=−b/a=5。",
  },

  // ==================================================
  // 第三模块：函数的概念与性质
  // ==================================================

  {
    id: "concept-001",
    topic: "函数的概念",
    title: "函数对应关系判断",
    question: "下列对应关系中，能够构成函数的是：",
    options: [
      {
        key: "A",
        text: "每个学生对应自己喜欢的所有学科",
      },
      {
        key: "B",
        text: "每个实数 x 对应它的平方 x²",
      },
      {
        key: "C",
        text: "每个正数对应它的两个平方根",
      },
      {
        key: "D",
        text: "每个学生对应班级里的所有同学",
      },
    ],
    correctAnswer: "B",
    explanation:
      "函数要求定义域中的每一个 x 都有唯一确定的函数值与它对应。",
  },
  {
    id: "concept-002",
    topic: "函数的概念",
    title: "同一函数判断",
    question: "判断两个函数是否为同一个函数，最重要的是比较：",
    options: [
      { key: "A", text: "函数名称是否相同" },
      { key: "B", text: "解析式外观是否相同" },
      {
        key: "C",
        text: "定义域和对应关系是否相同",
      },
      { key: "D", text: "函数值是否都是正数" },
    ],
    correctAnswer: "C",
    explanation:
      "两个函数相同，需要定义域相同，同时对应关系也相同。",
  },
  {
    id: "concept-003",
    topic: "函数的概念",
    title: "函数值计算",
    question: "已知函数如下，则 f(3) 的值为：",
    formula: "f(x)=2x-1",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "B",
    explanation:
      "将 x=3 代入，得到 f(3)=2×3−1=5。",
  },

  {
    id: "domain-range-001",
    topic: "定义域与值域",
    title: "根式函数定义域",
    question: "下列函数的定义域是：",
    formula: String.raw`f(x)=\sqrt{2x-4}`,
    options: [
      { key: "A", text: "x>2" },
      { key: "B", text: "x≥2" },
      { key: "C", text: "x≤2" },
      { key: "D", text: "R" },
    ],
    correctAnswer: "B",
    explanation:
      "偶次根式要求被开方数≥0，所以 2x−4≥0，解得 x≥2。",
  },
  {
    id: "domain-range-002",
    topic: "定义域与值域",
    title: "分式函数定义域",
    question: "下列函数的定义域是：",
    formula: String.raw`f(x)=\frac{1}{x^2-4}`,
    options: [
      { key: "A", text: "R" },
      { key: "B", text: "x≠2" },
      { key: "C", text: "x≠−2" },
      { key: "D", text: "x≠±2" },
    ],
    correctAnswer: "D",
    explanation:
      "分母不能为 0，因此排除 x=2 和 x=−2。",
  },
  {
    id: "domain-range-003",
    topic: "定义域与值域",
    title: "二次函数区间值域",
    question: "当 x∈[0,3] 时，该函数的值域是：",
    formula: "f(x)=x^2+1",
    options: [
      { key: "A", text: "[0,9]" },
      { key: "B", text: "[1,10]" },
      { key: "C", text: "[1,9]" },
      { key: "D", text: "[0,10]" },
    ],
    correctAnswer: "B",
    explanation:
      "x²∈[0,9]，因此 x²+1∈[1,10]。",
  },

  {
    id: "monotonicity-001",
    topic: "函数的单调性",
    title: "二次函数单调性",
    question: "下列关于该函数单调性的说法正确的是：",
    formula: "f(x)=x^2-2x+3",
    options: [
      { key: "A", text: "在 R 上递增" },
      {
        key: "B",
        text: "在 (-∞,1] 上递减，在 [1,+∞) 上递增",
      },
      {
        key: "C",
        text: "在 (-∞,1] 上递增，在 [1,+∞) 上递减",
      },
      { key: "D", text: "在 R 上递减" },
    ],
    correctAnswer: "B",
    explanation:
      "f(x)=(x−1)²+2，开口向上，对称轴为 x=1。",
  },
  {
    id: "monotonicity-002",
    topic: "函数的单调性",
    title: "开口向下二次函数",
    question: "下列关于该函数单调性的说法正确的是：",
    formula: "f(x)=-x^2+4x+1",
    options: [
      { key: "A", text: "在 R 上递增" },
      {
        key: "B",
        text: "在 (-∞,2] 上递减，在 [2,+∞) 上递增",
      },
      {
        key: "C",
        text: "在 (-∞,2] 上递增，在 [2,+∞) 上递减",
      },
      { key: "D", text: "在 R 上递减" },
    ],
    correctAnswer: "C",
    explanation:
      "抛物线开口向下，对称轴为 x=2。",
  },
  {
    id: "monotonicity-003",
    topic: "函数的单调性",
    title: "顶点式函数单调性",
    question: "下列关于该函数单调性的说法正确的是：",
    formula: "f(x)=(x+3)^2+2",
    options: [
      {
        key: "A",
        text: "在 (-∞,-3] 上递减，在 [-3,+∞) 上递增",
      },
      {
        key: "B",
        text: "在 (-∞,-3] 上递增，在 [-3,+∞) 上递减",
      },
      { key: "C", text: "在 R 上递增" },
      { key: "D", text: "在 R 上递减" },
    ],
    correctAnswer: "A",
    explanation:
      "抛物线开口向上，顶点横坐标为 −3。",
  },

  {
    id: "parity-001",
    topic: "函数的奇偶性",
    title: "偶函数判断",
    question: "下列函数中属于偶函数的是：",
    options: [
      { key: "A", text: "f(x)=x³" },
      { key: "B", text: "f(x)=x²+1" },
      { key: "C", text: "f(x)=x²+x" },
      { key: "D", text: "f(x)=2x+1" },
    ],
    correctAnswer: "B",
    explanation:
      "f(-x)=(-x)²+1=x²+1=f(x)，所以是偶函数。",
  },
  {
    id: "parity-002",
    topic: "函数的奇偶性",
    title: "奇函数定义",
    question:
      "若定义域关于原点对称，并且 f(-x)=-f(x)，则该函数是：",
    options: [
      { key: "A", text: "奇函数" },
      { key: "B", text: "偶函数" },
      { key: "C", text: "一定递增" },
      { key: "D", text: "一定递减" },
    ],
    correctAnswer: "A",
    explanation:
      "这正是奇函数的定义。",
  },
  {
    id: "parity-003",
    topic: "函数的奇偶性",
    title: "奇函数计算",
    question: "该函数的奇偶性为：",
    formula: "f(x)=x^3-x",
    options: [
      { key: "A", text: "奇函数" },
      { key: "B", text: "偶函数" },
      { key: "C", text: "非奇非偶函数" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "A",
    explanation:
      "f(-x)=-f(x)，因此该函数为奇函数。",
  },

  {
    id: "extrema-001",
    topic: "函数的最大值与最小值",
    title: "二次函数最小值",
    question: "该函数在 R 上的最小值是：",
    formula: "f(x)=x^2-4x+7",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "C",
    explanation:
      "f(x)=(x−2)²+3，所以最小值为 3。",
  },
  {
    id: "extrema-002",
    topic: "函数的最大值与最小值",
    title: "闭区间最值",
    question: "该函数在区间 [0,3] 上的最大值是：",
    formula: "f(x)=x^2-2x+3",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "5" },
      { key: "D", text: "6" },
    ],
    correctAnswer: "D",
    explanation:
      "f(0)=3，f(1)=2，f(3)=6，因此最大值为 6。",
  },
  {
    id: "extrema-003",
    topic: "函数的最大值与最小值",
    title: "利用单调性求最值",
    question:
      "若 f(x) 在闭区间 [1,5] 上单调递增，则最大值在什么位置取得？",
    options: [
      { key: "A", text: "x=1" },
      { key: "B", text: "x=2" },
      { key: "C", text: "x=3" },
      { key: "D", text: "x=5" },
    ],
    correctAnswer: "D",
    explanation:
      "单调递增函数在闭区间右端点取得最大值。",
  },
];

export const practiceTopics = [
  // 第一模块
  "集合的概念",
  "集合间的基本关系",
  "集合的基本运算",
  "充分条件与必要条件",
  "全称量词与存在量词",

  // 第二模块
  "等式与不等式的基本性质",
  "基本不等式",
  "一元二次函数与一元二次方程",
  "一元二次不等式",
  "二次函数、方程与不等式的综合应用",

  // 第三模块
  "函数的概念",
  "定义域与值域",
  "函数的单调性",
  "函数的奇偶性",
  "函数的最大值与最小值",
] as const;