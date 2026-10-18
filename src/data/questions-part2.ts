
import type { Question } from "./questions";

/*
 * 彻凌数学 · 题库第二部分
 *
 * 第 06 章：平面向量
 * 第 07 章：复数
 * 第 08 章：立体几何初步
 * 第 09 章：统计
 * 第 10 章：概率
 *
 * 共 25 个专题，每个专题 3 道题，共 75 道题。
 *
 * 注意：
 * 1. 题目 ID 必须唯一。
 * 2. topic 必须与专题名称完全一致。
 * 3. 数学公式统一使用 String.raw。
 * 4. 向量符号统一使用 \overrightarrow{}。
 * 5. 选项 key 使用 A、B、C、D。
 * 6. 保留 vectorQuestions 和 vectorPracticeTopics
 *    导出名称，以兼容现有 questions.ts。
 */

/* ========================================
   专题目录
======================================== */

export const vectorPracticeTopics = [
  // 第 06 章：平面向量
  "平面向量的概念与表示",
  "平面向量的线性运算",
  "平面向量基本定理与坐标表示",
  "平面向量的数量积",
  "平面向量的综合应用",

  // 第 07 章：复数
  "复数的概念与代数表示",
  "复数的几何意义",
  "复数的加减运算",
  "复数的乘除运算",
  "复数综合应用",

  // 第 08 章：立体几何初步
  "空间几何体",
  "空间几何体的表面积与体积",
  "空间点、直线与平面的位置关系",
  "直线与平面的位置关系",
  "平面与平面的位置关系",

    // 第 09 章：统计
  "随机抽样",
  "数据的收集与整理",
  "统计图表",
  "数据的数字特征",
  "统计综合应用",

  // 第 10 章：概率
  "随机事件与样本空间",
  "事件的关系与运算",
  "古典概型",
  "概率的基本性质",
  "概率综合应用",
] as const;

/* ========================================
   题目
======================================== */

export const vectorQuestions: Question[] = [
  // ==================================================
  // 第 26 专题：平面向量的概念与表示
  // ==================================================

  {
    id: "vector-concept-001",
    topic: "平面向量的概念与表示",
    title: "向量与数量的区别",
    question: "下列各量中，属于向量的是：",
    options: [
      { key: "A", text: "路程" },
      { key: "B", text: "质量" },
      { key: "C", text: "位移" },
      { key: "D", text: "时间" },
    ],
    correctAnswer: "C",
    explanation:
      "位移既有大小又有方向，因此属于向量。路程、质量和时间只有大小，没有方向。",
  },

  {
    id: "vector-concept-002",
    topic: "平面向量的概念与表示",
    title: "相等向量的判断",
    question:
      "对于两个非零向量 a、b，下列哪项条件可以保证它们相等？",
    options: [
      { key: "A", text: "长度相等，方向相同" },
      { key: "B", text: "长度相等，方向可以不同" },
      { key: "C", text: "方向相同，长度可以不同" },
      { key: "D", text: "它们具有相同的起点" },
    ],
    correctAnswer: "A",
    explanation:
      "相等向量必须同时满足两个条件：模相等、方向相同。向量的起点是否相同不影响向量相等的判断。",
  },

  {
    id: "vector-concept-003",
    topic: "平面向量的概念与表示",
    title: "零向量与单位向量",
    question:
      "关于零向量和单位向量，下列说法正确的是：",
    options: [
      { key: "A", text: "所有单位向量都相等" },
      { key: "B", text: "零向量的模等于 1" },
      { key: "C", text: "单位向量的模等于 1" },
      { key: "D", text: "模相等的两个向量一定相等" },
    ],
    correctAnswer: "C",
    explanation:
      "单位向量的模等于1，但方向可以不同；零向量的模等于0。两个向量只有在模相等且方向相同时才相等。",
  },

  // ==================================================
  // 第 27 专题：平面向量的线性运算
  // ==================================================

  {
    id: "vector-linear-001",
    topic: "平面向量的线性运算",
    title: "向量加法的三角形法则",
    question: "下列向量加法的结果是：",
    formula: String.raw`\overrightarrow{AB}+\overrightarrow{BC}`,
    options: [
      { key: "A", text: "向量 BA" },
      { key: "B", text: "向量 AC" },
      { key: "C", text: "向量 CB" },
      { key: "D", text: "向量 CA" },
    ],
    correctAnswer: "B",
    explanation:
      "根据向量加法的三角形法则，向量AB与向量BC首尾相接，和为从A指向C的向量AC。",
  },

  {
    id: "vector-linear-002",
    topic: "平面向量的线性运算",
    title: "向量减法的方向",
    question: "下列向量减法的结果是：",
    formula: String.raw`\overrightarrow{AB}-\overrightarrow{AC}`,
    options: [
      { key: "A", text: "向量 AB" },
      { key: "B", text: "向量 BC" },
      { key: "C", text: "向量 CB" },
      { key: "D", text: "向量 CA" },
    ],
    correctAnswer: "C",
    explanation:
      "向量AB减去向量AC，等于向量CB。两个向量同起点相减时，结果从被减去向量的终点C指向第一个向量的终点B。",
  },

  {
    id: "vector-linear-003",
    topic: "平面向量的线性运算",
    title: "负数与向量的数乘",
    question:
      "设 a 是非零向量，关于向量 -3a，下列说法正确的是：",
    formula: String.raw`-3\overrightarrow{a}`,
    options: [
      { key: "A", text: "方向相同，模长为原来的 3 倍" },
      { key: "B", text: "方向相反，模长为原来的 1/3" },
      { key: "C", text: "方向相同，模长为原来的 1/3" },
      { key: "D", text: "方向相反，模长为原来的 3 倍" },
    ],
    correctAnswer: "D",
    explanation:
      "数乘系数-3小于0，所以结果与原向量方向相反；系数绝对值为3，所以结果的模是原向量模的3倍。",
  },

  // ==================================================
  // 第 28 专题：基本定理与坐标表示
  // ==================================================

  {
    id: "vector-coordinate-001",
    topic: "平面向量基本定理与坐标表示",
    title: "根据两点坐标求向量",
    question:
      "已知 A(-2,3)、B(1,7)，求向量 AB 的坐标。",
    formula: String.raw`\overrightarrow{AB}=?`,
    options: [
      { key: "A", text: "(3,4)" },
      { key: "B", text: "(-3,-4)" },
      { key: "C", text: "(-1,10)" },
      { key: "D", text: "(1,7)" },
    ],
    correctAnswer: "A",
    explanation:
      "向量AB的坐标等于终点B的坐标减去起点A的坐标，即(1-(-2),7-3)=(3,4)。",
  },

  {
    id: "vector-coordinate-002",
    topic: "平面向量基本定理与坐标表示",
    title: "向量加法的坐标运算",
    question:
      "已知向量 a=(2,-1)、b=(-3,4)，则向量 a+b 的坐标为：",
    formula: String.raw`\overrightarrow{a}+\overrightarrow{b}=?`,
    options: [
      { key: "A", text: "(5,-5)" },
      { key: "B", text: "(-1,3)" },
      { key: "C", text: "(-5,5)" },
      { key: "D", text: "(1,-3)" },
    ],
    correctAnswer: "B",
    explanation:
      "向量相加时对应坐标分别相加，因此a+b=(2+(-3),-1+4)=(-1,3)。",
  },

  {
    id: "vector-coordinate-003",
    topic: "平面向量基本定理与坐标表示",
    title: "向量共线的坐标条件",
    question:
      "已知向量 a=(2,k)、b=(6,9)，若两个向量共线，则 k 的值为：",
    formula: String.raw`2\times9-6k=0`,
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "6" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "D",
    explanation:
      "利用平面向量共线的坐标条件，得到2×9-6k=0，即18-6k=0，因此k=3。",
  },

  // ==================================================
  // 第 29 专题：平面向量的数量积
  // ==================================================

  {
    id: "vector-dot-001",
    topic: "平面向量的数量积",
    title: "数量积的坐标计算",
    question:
      "已知向量 a=(2,-1)、b=(3,4)，则两个向量的数量积为：",
    formula: String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=?`,
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "5" },
      { key: "C", text: "10" },
      { key: "D", text: "14" },
    ],
    correctAnswer: "A",
    explanation:
      "利用数量积坐标公式，a·b=2×3+(-1)×4=6-4=2。数量积的结果是实数。",
  },

  {
    id: "vector-dot-002",
    topic: "平面向量的数量积",
    title: "向量垂直的判断",
    question:
      "已知非零向量 a=(1,2)、b=(2,-1)，则两个向量：",
    options: [
      { key: "A", text: "平行" },
      { key: "B", text: "垂直" },
      { key: "C", text: "相等" },
      { key: "D", text: "互为相反向量" },
    ],
    correctAnswer: "B",
    explanation:
      "a·b=1×2+2×(-1)=0，且两个向量均非零，所以它们互相垂直。",
  },

  {
    id: "vector-dot-003",
    topic: "平面向量的数量积",
    title: "数量积的正负",
    question:
      "若两个非零向量的夹角为120°，则它们的数量积：",
    formula: String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}||\overrightarrow{b}|\cos120^\circ`,
    options: [
      { key: "A", text: "一定大于 0" },
      { key: "B", text: "一定等于 0" },
      { key: "C", text: "一定小于 0" },
      { key: "D", text: "无法判断正负" },
    ],
    correctAnswer: "C",
    explanation:
      "120°是钝角，cos120°=-1/2。由于两个非零向量的模均大于0，所以数量积一定小于0。",
  },

  // ==================================================
  // 第 30 专题：平面向量的综合应用
  // ==================================================

  {
    id: "vector-application-001",
    topic: "平面向量的综合应用",
    title: "线段中点与向量",
    question:
      "已知 A(2,1)、B(6,5)，M 是线段 AB 的中点，则向量 AM 的坐标为：",
    formula: String.raw`\overrightarrow{AM}=?`,
    options: [
      { key: "A", text: "(4,4)" },
      { key: "B", text: "(2,2)" },
      { key: "C", text: "(-2,-2)" },
      { key: "D", text: "(8,6)" },
    ],
    correctAnswer: "B",
    explanation:
      "线段AB中点M的坐标为((2+6)/2,(1+5)/2)=(4,3)，所以向量AM=(4-2,3-1)=(2,2)。",
  },

  {
    id: "vector-application-002",
    topic: "平面向量的综合应用",
    title: "利用向量求距离",
    question:
      "已知 A(0,0)、B(3,0)、C(0,4)，则线段 BC 的长度为：",
    formula: String.raw`BC=?`,
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "C",
    explanation:
      "向量BC=(-3,4)，其模为√((-3)²+4²)=5，因此线段BC的长度为5。",
  },

  {
    id: "vector-application-003",
    topic: "平面向量的综合应用",
    title: "三角形重心坐标",
    question:
      "已知三角形的三个顶点分别为 A(0,0)、B(6,0)、C(0,3)，则重心 G 的坐标为：",
    options: [
      { key: "A", text: "(2,1)" },
      { key: "B", text: "(3,1.5)" },
      { key: "C", text: "(6,3)" },
      { key: "D", text: "(1,2)" },
    ],
    correctAnswer: "A",
    explanation:
      "三角形重心的坐标等于三个顶点对应坐标的平均值，因此G=((0+6+0)/3,(0+0+3)/3)=(2,1)。",
  },

  // ==================================================
  // 第 31 专题：复数的概念与代数表示
  // ==================================================

  {
    id: "complex-concept-001",
    topic: "复数的概念与代数表示",
    title: "复数的实部与虚部",
    question:
      "已知复数 z=3−2i，则 z 的实部和虚部分别是：",
    formula: String.raw`z=3-2i`,
    options: [
      { key: "A", text: "3，−2" },
      { key: "B", text: "3，−2i" },
      { key: "C", text: "−2，3" },
      { key: "D", text: "−3，2" },
    ],
    correctAnswer: "A",
    explanation:
      "复数z=a+bi的实部为a，虚部为b。因此实部为3，虚部为−2。虚部不包含虚数单位i。",
  },

  {
    id: "complex-concept-002",
    topic: "复数的概念与代数表示",
    title: "虚数单位的性质",
    question: "虚数单位 i 满足下列哪个等式？",
    formula: String.raw`i^2=?`,
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "−1" },
      { key: "C", text: "i" },
      { key: "D", text: "−i" },
    ],
    correctAnswer: "B",
    explanation:
      "根据虚数单位i的定义，i²=−1，这是复数运算的基本依据。",
  },

  {
    id: "complex-concept-003",
    topic: "复数的概念与代数表示",
    title: "复数相等求参数",
    question:
      "已知x、y均为实数，若2x+(y−1)i=4+3i，则x、y分别为：",
    formula: String.raw`2x+(y-1)i=4+3i`,
    options: [
      { key: "A", text: "2，4" },
      { key: "B", text: "4，2" },
      { key: "C", text: "2，3" },
      { key: "D", text: "4，4" },
    ],
    correctAnswer: "A",
    explanation:
      "两个复数相等，实部与虚部分别相等。由2x=4得x=2，由y−1=3得y=4。",
  },

  // ==================================================
  // 第 32 专题：复数的几何意义
  // ==================================================

  {
    id: "complex-geometry-001",
    topic: "复数的几何意义",
    title: "复数对应的点",
    question:
      "复数 z=−2+3i 在复平面内对应的点是：",
    formula: String.raw`z=-2+3i`,
    options: [
      { key: "A", text: "(−2，3)" },
      { key: "B", text: "(3，−2)" },
      { key: "C", text: "(2，3)" },
      { key: "D", text: "(−2，−3)" },
    ],
    correctAnswer: "A",
    explanation:
      "复数a+bi在复平面内对应点(a,b)，所以z=−2+3i对应点(−2,3)。",
  },

  {
    id: "complex-geometry-002",
    topic: "复数的几何意义",
    title: "复数的模",
    question: "复数 z=3+4i 的模等于：",
    formula: String.raw`|z|=?`,
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "7" },
    ],
    correctAnswer: "C",
    explanation:
      "复数z=a+bi的模为√(a²+b²)。所以|z|=√(3²+4²)=5。",
  },

  {
    id: "complex-geometry-003",
    topic: "复数的几何意义",
    title: "复数对应点的象限",
    question:
      "复数 z=1−2i 对应的点位于复平面的哪个象限？",
    formula: String.raw`z=1-2i`,
    options: [
      { key: "A", text: "第一象限" },
      { key: "B", text: "第二象限" },
      { key: "C", text: "第三象限" },
      { key: "D", text: "第四象限" },
    ],
    correctAnswer: "D",
    explanation:
      "对应点为(1,−2)，横坐标为正，纵坐标为负，位于第四象限。",
  },

  // ==================================================
  // 第 33 专题：复数的加减运算
  // ==================================================

  {
    id: "complex-addsub-001",
    topic: "复数的加减运算",
    title: "复数加法",
    question: "计算 (2+3i)+(1−5i)，结果为：",
    formula: String.raw`(2+3i)+(1-5i)`,
    options: [
      { key: "A", text: "3−2i" },
      { key: "B", text: "3+8i" },
      { key: "C", text: "1−2i" },
      { key: "D", text: "2−5i" },
    ],
    correctAnswer: "A",
    explanation:
      "复数加法中实部、虚部分别相加：(2+1)+(3−5)i=3−2i。",
  },

  {
    id: "complex-addsub-002",
    topic: "复数的加减运算",
    title: "复数减法",
    question: "计算 (4+2i)−(1−3i)，结果为：",
    formula: String.raw`(4+2i)-(1-3i)`,
    options: [
      { key: "A", text: "3−i" },
      { key: "B", text: "3+5i" },
      { key: "C", text: "5−i" },
      { key: "D", text: "5+5i" },
    ],
    correctAnswer: "B",
    explanation:
      "去括号后为4+2i−1+3i，合并得到3+5i。注意减号作用于整个第二个复数。",
  },

  {
    id: "complex-addsub-003",
    topic: "复数的加减运算",
    title: "复数混合加减",
    question:
      "计算 (1+2i)+(3+i)−(2−4i)，结果为：",
    formula: String.raw`(1+2i)+(3+i)-(2-4i)`,
    options: [
      { key: "A", text: "2+3i" },
      { key: "B", text: "2+7i" },
      { key: "C", text: "6−i" },
      { key: "D", text: "4+7i" },
    ],
    correctAnswer: "B",
    explanation:
      "合并实部：1+3−2=2；合并虚部：2+1+4=7，因此结果为2+7i。",
  },

  // ==================================================
  // 第 34 专题：复数的乘除运算
  // ==================================================

  {
    id: "complex-muldiv-001",
    topic: "复数的乘除运算",
    title: "复数乘法",
    question: "计算 (1+2i)(3+i)，结果为：",
    formula: String.raw`(1+2i)(3+i)`,
    options: [
      { key: "A", text: "1+7i" },
      { key: "B", text: "5+7i" },
      { key: "C", text: "1+5i" },
      { key: "D", text: "3+7i" },
    ],
    correctAnswer: "A",
    explanation:
      "展开得3+i+6i+2i²=3+7i−2=1+7i。",
  },

  {
    id: "complex-muldiv-002",
    topic: "复数的乘除运算",
    title: "共轭复数相乘",
    question: "计算 (2+i)(2−i)，结果为：",
    formula: String.raw`(2+i)(2-i)`,
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "5" },
      { key: "D", text: "4−4i" },
    ],
    correctAnswer: "C",
    explanation:
      "利用平方差公式，(2+i)(2−i)=4−i²=4+1=5。",
  },

  {
    id: "complex-muldiv-003",
    topic: "复数的乘除运算",
    title: "复数除法",
    question: "计算 (3+i)/(1−i)，结果为：",
    formula: String.raw`\frac{3+i}{1-i}`,
    options: [
      { key: "A", text: "1+2i" },
      { key: "B", text: "2+i" },
      { key: "C", text: "2−i" },
      { key: "D", text: "3+i" },
    ],
    correctAnswer: "A",
    explanation:
      "分子分母同乘1+i，得到(3+i)(1+i)/2=(2+4i)/2=1+2i。",
  },

  // ==================================================
  // 第 35 专题：复数综合应用
  // ==================================================

  {
    id: "complex-applications-001",
    topic: "复数综合应用",
    title: "根据等式求复数",
    question:
      "已知 z+(2−3i)=5+i，则复数 z 等于：",
    formula: String.raw`z+(2-3i)=5+i`,
    options: [
      { key: "A", text: "3+4i" },
      { key: "B", text: "7−2i" },
      { key: "C", text: "3−4i" },
      { key: "D", text: "7+4i" },
    ],
    correctAnswer: "A",
    explanation:
      "移项得到z=(5+i)−(2−3i)=3+4i。",
  },

  {
    id: "complex-applications-002",
    topic: "复数综合应用",
    title: "纯虚数与参数",
    question:
      "若 z=(m−2)+(m+3)i 为纯虚数，其中 m 为实数，则 m 等于：",
    formula: String.raw`z=(m-2)+(m+3)i`,
    options: [
      { key: "A", text: "−3" },
      { key: "B", text: "−2" },
      { key: "C", text: "2" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "C",
    explanation:
      "纯虚数要求实部等于0、虚部不等于0。令m−2=0，得m=2，此时虚部为5，符合要求。",
  },

  {
    id: "complex-applications-003",
    topic: "复数综合应用",
    title: "复数模与参数",
    question:
      "已知 z=3+bi，且 |z|=5，其中 b 为实数，则 b 的值为：",
    formula: String.raw`z=3+bi,\qquad |z|=5`,
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "−4" },
      { key: "C", text: "±4" },
      { key: "D", text: "±3" },
    ],
    correctAnswer: "C",
    explanation:
      "由复数模的计算公式，得到9+b²=25，即b²=16，所以b=±4。",
  },

  // ==================================================
  // 第 36 专题：空间几何体
  // ==================================================

  {
    id: "solid-geometry-001",
    topic: "空间几何体",
    title: "多面体与旋转体的区别",
    question: "下列几何体中，属于旋转体的是：",
    options: [
      { key: "A", text: "正方体" },
      { key: "B", text: "三棱柱" },
      { key: "C", text: "圆柱" },
      { key: "D", text: "四棱锥" },
    ],
    correctAnswer: "C",
    explanation:
      "圆柱可以由矩形绕其一条边所在直线旋转形成，属于旋转体。正方体、三棱柱和四棱锥均属于多面体。",
  },

  {
    id: "solid-geometry-002",
    topic: "空间几何体",
    title: "棱柱的侧面数量",
    question: "一个三棱柱有几个侧面？",
    options: [
      { key: "A", text: "2 个" },
      { key: "B", text: "3 个" },
      { key: "C", text: "4 个" },
      { key: "D", text: "5 个" },
    ],
    correctAnswer: "B",
    explanation:
      "棱柱的侧面数量等于底面多边形的边数。三棱柱的底面是三角形，因此有 3 个侧面。",
  },

  {
    id: "solid-geometry-003",
    topic: "空间几何体",
    title: "旋转体的形成",
    question: "将一个矩形绕其一条边所在的直线旋转一周，可以形成：",
    options: [
      { key: "A", text: "圆锥" },
      { key: "B", text: "球" },
      { key: "C", text: "棱柱" },
      { key: "D", text: "圆柱" },
    ],
    correctAnswer: "D",
    explanation:
      "矩形绕其一条边所在直线旋转一周，矩形扫过的空间形成圆柱。",
  },

  // ==================================================
  // 第 37 专题：空间几何体的表面积与体积
  // ==================================================

  {
    id: "solid-geometry-004",
    topic: "空间几何体的表面积与体积",
    title: "正方体的表面积",
    question: "一个正方体的棱长为 3，则它的表面积为：",
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "18" },
      { key: "C", text: "27" },
      { key: "D", text: "54" },
    ],
    correctAnswer: "D",
    explanation:
      "正方体有 6 个全等的正方形面，每个面的面积为 3²=9，因此表面积为 6×9=54。",
  },

  {
    id: "solid-geometry-005",
    topic: "空间几何体的表面积与体积",
    title: "圆柱的体积",
    question: "一个圆柱的底面半径为 2，高为 3，则它的体积为：",
    formula: String.raw`V=\pi r^2h`,
    options: [
      { key: "A", text: "6π" },
      { key: "B", text: "8π" },
      { key: "C", text: "12π" },
      { key: "D", text: "16π" },
    ],
    correctAnswer: "C",
    explanation:
      "圆柱的体积公式为 V=πr²h。代入 r=2、h=3，得 V=π×2²×3=12π。",
  },

  {
    id: "solid-geometry-006",
    topic: "空间几何体的表面积与体积",
    title: "圆锥的体积",
    question: "一个圆锥的底面半径为 3，高为 4，则它的体积为：",
    formula: String.raw`V=\frac{1}{3}\pi r^2h`,
    options: [
      { key: "A", text: "12π" },
      { key: "B", text: "24π" },
      { key: "C", text: "36π" },
      { key: "D", text: "48π" },
    ],
    correctAnswer: "A",
    explanation:
      "圆锥的体积公式为 V=⅓πr²h。代入 r=3、h=4，得 V=⅓×π×9×4=12π。",
  },

  // ==================================================
  // 第 38 专题：空间点、直线与平面的位置关系
  // ==================================================

  {
    id: "solid-geometry-007",
    topic: "空间点、直线与平面的位置关系",
    title: "确定平面的条件",
    question: "下列条件中，能够唯一确定一个平面的是：",
    options: [
      { key: "A", text: "一条直线" },
      { key: "B", text: "两个不同的点" },
      { key: "C", text: "不在同一直线上的三个点" },
      { key: "D", text: "同一直线上的三个点" },
    ],
    correctAnswer: "C",
    explanation:
      "经过不在同一直线上的三个点，有且只有一个平面。三个共线的点不能唯一确定一个平面。",
  },

  {
    id: "solid-geometry-008",
    topic: "空间点、直线与平面的位置关系",
    title: "直线在平面内的判定",
    question:
      "直线 l 上有两个不同的点 A、B，且 A、B 都在平面 α 内，则：",
    options: [
      { key: "A", text: "l 与 α 平行" },
      { key: "B", text: "l 在 α 内" },
      { key: "C", text: "l 与 α 只有一个公共点" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "B",
    explanation:
      "如果一条直线上的两个不同点都在一个平面内，那么这条直线就在该平面内。",
  },

  {
    id: "solid-geometry-009",
    topic: "空间点、直线与平面的位置关系",
    title: "两个平面的交线",
    question: "两个不同的平面有公共点，那么它们的交集是：",
    options: [
      { key: "A", text: "一个点" },
      { key: "B", text: "一条直线" },
      { key: "C", text: "一个圆" },
      { key: "D", text: "一个三角形" },
    ],
    correctAnswer: "B",
    explanation:
      "两个不同的平面如果有公共点，就一定相交，且交集是一条直线。",
  },

  // ==================================================
  // 第 39 专题：直线与平面的位置关系
  // ==================================================

  {
    id: "solid-geometry-010",
    topic: "直线与平面的位置关系",
    title: "线面平行的判定",
    question:
      "已知直线 l 不在平面 α 内，直线 m 在平面 α 内，且 l ∥ m，则：",
    options: [
      { key: "A", text: "l 与 α 相交" },
      { key: "B", text: "l ∥ α" },
      { key: "C", text: "l ⊥ α" },
      { key: "D", text: "l 在 α 内" },
    ],
    correctAnswer: "B",
    explanation:
      "如果平面外的一条直线与这个平面内的一条直线平行，那么这条直线与该平面平行。",
  },

  {
    id: "solid-geometry-011",
    topic: "直线与平面的位置关系",
    title: "线面垂直的判定",
    question:
      "直线 l 与平面 α 内的两条相交直线 m、n 都垂直，则：",
    options: [
      { key: "A", text: "l ∥ α" },
      { key: "B", text: "l 在 α 内" },
      { key: "C", text: "l ⊥ α" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "C",
    explanation:
      "如果一条直线与一个平面内的两条相交直线都垂直，那么这条直线与该平面垂直。",
  },

  {
    id: "solid-geometry-012",
    topic: "直线与平面的位置关系",
    title: "线面平行的性质",
    question:
      "已知 l ∥ α，平面 β 经过直线 l，且 α 与 β 相交于直线 m，则：",
    formula: String.raw`l\parallel\alpha,\quad \alpha\cap\beta=m`,
    options: [
      { key: "A", text: "l 与 m 相交" },
      { key: "B", text: "l 与 m 异面" },
      { key: "C", text: "l ∥ m" },
      { key: "D", text: "l ⊥ m" },
    ],
    correctAnswer: "C",
    explanation:
      "根据直线与平面平行的性质定理，经过平行于平面的直线的平面与该平面相交时，交线平行于这条直线。",
  },

  // ==================================================
  // 第 40 专题：平面与平面的位置关系
  // ==================================================

  {
    id: "solid-geometry-013",
    topic: "平面与平面的位置关系",
    title: "面面垂直的判定",
    question:
      "平面 α 经过直线 l，且 l ⊥ 平面 β，则 α 与 β 的位置关系是：",
    options: [
      { key: "A", text: "α ∥ β" },
      { key: "B", text: "α 与 β 重合" },
      { key: "C", text: "α ⊥ β" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "C",
    explanation:
      "如果一个平面经过另一平面的一条垂线，那么这两个平面互相垂直。",
  },

  {
    id: "solid-geometry-014",
    topic: "平面与平面的位置关系",
    title: "面面平行的性质",
    question:
      "已知平面 α ∥ β，直线 l 在平面 α 内，则 l 与平面 β 的位置关系是：",
    formula: String.raw`\alpha\parallel\beta,\quad l\subset\alpha`,
    options: [
      { key: "A", text: "l 在 β 内" },
      { key: "B", text: "l 与 β 相交" },
      { key: "C", text: "l ∥ β" },
      { key: "D", text: "l ⊥ β" },
    ],
    correctAnswer: "C",
    explanation:
      "两个平面平行时，一个平面内的任意一条直线都平行于另一个平面。",
  },

  {
    id: "solid-geometry-015",
    topic: "平面与平面的位置关系",
    title: "面面垂直的性质",
    question:
      "已知 α ⊥ β，交线为 m。直线 l 在平面 α 内且 l ⊥ m，则：",
    formula: String.raw`\alpha\perp\beta,\quad \alpha\cap\beta=m,\quad l\perp m`,
    options: [
      { key: "A", text: "l ∥ β" },
      { key: "B", text: "l ⊥ β" },
      { key: "C", text: "l ∥ m" },
      { key: "D", text: "无法判断" },
    ],
    correctAnswer: "B",
    explanation:
      "两个平面互相垂直时，一个平面内垂直于交线的直线垂直于另一个平面。因此 l ⊥ β。",
  },
  
  // ==================================================
  // 第 41 专题：随机抽样
  // ==================================================

  {
    id: "sampling-01",
    topic: "随机抽样",
    title: "认识总体与样本",
    question:
      "某学校有 1200 名学生，现随机抽取 60 名学生调查睡眠时间。下列说法正确的是：",
    options: [
      { key: "A", text: "总体是被抽取的 60 名学生" },
      { key: "B", text: "样本是全校 1200 名学生" },
      {
        key: "C",
        text: "总体是全校 1200 名学生，样本是抽取的 60 名学生",
      },
      { key: "D", text: "个体是被抽取的 60 名学生" },
    ],
    correctAnswer: "C",
    explanation:
      "总体是调查对象的全体，样本是从总体中抽取的一部分个体。本题中总体为全校 1200 名学生，样本为抽取的 60 名学生。",
  },

  {
    id: "sampling-02",
    topic: "随机抽样",
    title: "理解样本量",
    question:
      "从一个班级中随机抽取 15 名学生调查身高，这次抽样的样本量是：",
    options: [
      { key: "A", text: "班级总人数" },
      { key: "B", text: "15" },
      { key: "C", text: "学生的平均身高" },
      { key: "D", text: "学生身高的最大值" },
    ],
    correctAnswer: "B",
    explanation:
      "样本量是样本中包含的个体数量。本题抽取了 15 名学生，因此样本量为 15。",
  },

  {
    id: "sampling-03",
    topic: "随机抽样",
    title: "选择抽样方法",
    question:
      "一所学校想调查学生对食堂的满意度，已知不同年级的学生人数差异较大，希望每个年级都得到合理代表。较合适的方法是：",
    options: [
      { key: "A", text: "只调查食堂附近的学生" },
      { key: "B", text: "只调查一个班级" },
      { key: "C", text: "由调查者随意挑选学生" },
      {
        key: "D",
        text: "按年级分层，再在各层中随机抽样",
      },
    ],
    correctAnswer: "D",
    explanation:
      "当总体由具有不同特征的群体组成，且需要保证各群体都有代表时，可以先按年级分层，再在各层中随机抽样。这属于分层随机抽样。",
  },

  // ==================================================
  // 第 42 专题：数据的收集与整理
  // ==================================================

  {
    id: "organization-01",
    topic: "数据的收集与整理",
    title: "数据整理的目的",
    question:
      "收集到一组杂乱的数据后，首先进行分类、排序和整理，主要目的是：",
    options: [
      { key: "A", text: "保证所有数据都相等" },
      {
        key: "B",
        text: "让数据更有规律，便于分析和描述",
      },
      { key: "C", text: "使数据的总量自动增加" },
      { key: "D", text: "保证调查结果一定正确" },
    ],
    correctAnswer: "B",
    explanation:
      "整理数据可以使数据结构更加清晰，便于统计数量、制作表格和图表，并进一步分析数据特征，但不能保证调查结果一定正确。",
  },

  {
    id: "organization-02",
    topic: "数据的收集与整理",
    title: "理解频数",
    question:
      "一组数据中，数值 80 出现了 6 次，那么数值 80 的频数是：",
    options: [
      { key: "A", text: "80" },
      { key: "B", text: "6" },
      { key: "C", text: "6%" },
      { key: "D", text: "数据的平均数" },
    ],
    correctAnswer: "B",
    explanation:
      "频数是某个数值或某类数据出现的次数。80 出现了 6 次，因此对应的频数是 6。",
  },

  {
    id: "organization-03",
    topic: "数据的收集与整理",
    title: "计算频率",
    question:
      "某个数值在一组共 40 个数据中出现了 10 次，它的频率是：",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "40%" },
      { key: "C", text: "25%" },
      { key: "D", text: "4%" },
    ],
    correctAnswer: "C",
    explanation:
      "频率等于频数除以数据总数，即 10÷40=0.25=25%。",
  },

  // ==================================================
  // 第 43 专题：统计图表
  // ==================================================

  {
    id: "graphs-01",
    topic: "统计图表",
    title: "选择合适的统计图",
    question:
      "为了比较某班四个小组的数学测验平均成绩，最直观、合适的统计图是：",
    options: [
      { key: "A", text: "条形统计图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只记录最大值的表格" },
      { key: "D", text: "不需要整理数据" },
    ],
    correctAnswer: "A",
    explanation:
      "条形统计图适合比较不同类别之间的数量大小。四个小组属于不同类别，因此可以用条形统计图进行比较。",
  },

  {
    id: "graphs-02",
    topic: "统计图表",
    title: "理解折线统计图",
    question:
      "为了观察某城市一周内每天最高气温的变化趋势，最适合使用：",
    options: [
      { key: "A", text: "饼图" },
      { key: "B", text: "折线统计图" },
      { key: "C", text: "只显示总数的统计表" },
      { key: "D", text: "没有横轴的图" },
    ],
    correctAnswer: "B",
    explanation:
      "折线统计图用点和线段表示数据，适合观察气温、销量等数据随时间变化的趋势。",
  },

  {
    id: "graphs-03",
    topic: "统计图表",
    title: "扇形统计图的计算",
    question:
      "某班有 40 名学生，其中 10 名学生最喜欢篮球。若用扇形统计图表示喜好情况，篮球对应扇形的圆心角为：",
    options: [
      { key: "A", text: "45°" },
      { key: "B", text: "60°" },
      { key: "C", text: "90°" },
      { key: "D", text: "120°" },
    ],
    correctAnswer: "C",
    explanation:
      "篮球所占比例为 10÷40=25%，对应圆心角为 360°×25%=90°。",
  },

  // ==================================================
  // 第 44 专题：数据的数字特征
  // ==================================================

  {
    id: "characteristics-01",
    topic: "数据的数字特征",
    title: "平均数的计算",
    question:
      "一组数据为 4、6、8、10，这组数据的平均数是：",
    options: [
      { key: "A", text: "6" },
      { key: "B", text: "7" },
      { key: "C", text: "8" },
      { key: "D", text: "28" },
    ],
    correctAnswer: "B",
    explanation:
      "平均数等于所有数据之和除以数据个数，即 (4+6+8+10)÷4=7。",
  },

  {
    id: "characteristics-02",
    topic: "数据的数字特征",
    title: "中位数的判断",
    question:
      "一组数据为 2、4、7、9、12，其中位数是：",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "6.8" },
      { key: "C", text: "7" },
      { key: "D", text: "9" },
    ],
    correctAnswer: "C",
    explanation:
      "这组数据已经按从小到大的顺序排列，共有 5 个数据，中间第 3 个数是 7，因此中位数为 7。",
  },

  {
    id: "characteristics-03",
    topic: "数据的数字特征",
    title: "众数的判断",
    question:
      "一组数据为 1、2、2、3、4，其中众数是：",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    correctAnswer: "B",
    explanation:
      "众数是出现次数最多的数据。数值 2 出现了两次，其余数值各出现一次，因此众数是 2。",
  },

  // ==================================================
  // 第 45 专题：统计综合应用
  // ==================================================

  {
    id: "application-01",
    topic: "统计综合应用",
    title: "设计调查方案",
    question:
      "学校想了解全校学生每天的课外阅读时间。以下哪种调查方式更合理？",
    options: [
      {
        key: "A",
        text: "只调查图书馆里正在阅读的学生",
      },
      {
        key: "B",
        text: "只调查自己班级的学生",
      },
      {
        key: "C",
        text: "从全校学生中合理抽取具有代表性的样本",
      },
      {
        key: "D",
        text: "只调查阅读时间最长的学生",
      },
    ],
    correctAnswer: "C",
    explanation:
      "调查对象应尽可能具有代表性。只调查图书馆中的学生或阅读时间较长的学生，容易产生选择偏差，不能充分代表全校学生。",
  },

  {
    id: "application-02",
    topic: "统计综合应用",
    title: "计算样本比例",
    question:
      "随机调查 200 名学生，其中 50 人每天课外阅读不少于 30 分钟。样本中符合条件的学生所占比例为：",
    options: [
      { key: "A", text: "15%" },
      { key: "B", text: "20%" },
      { key: "C", text: "25%" },
      { key: "D", text: "40%" },
    ],
    correctAnswer: "C",
    explanation:
      "样本比例为 50÷200=0.25，即 25%。这里计算的是样本中符合条件的学生所占比例。",
  },

  {
    id: "application-03",
    topic: "统计综合应用",
    title: "选择统计图表",
    question:
      "为了观察某班学生连续 7 天每天的平均阅读时间如何变化，最适合使用：",
    options: [
      { key: "A", text: "折线统计图" },
      { key: "B", text: "扇形统计图" },
      { key: "C", text: "只显示总人数的表格" },
      { key: "D", text: "不整理数据，直接判断" },
    ],
    correctAnswer: "A",
    explanation:
      "折线统计图适合观察数据随时间变化的趋势。连续 7 天的阅读时间具有时间顺序，因此可以用折线统计图呈现。",
  },


  // ==================================================
  // 第 46 专题：随机事件与样本空间（第 10 章）
  // ==================================================
  {
    id: "probability-events-01",
    topic: "随机事件与样本空间",
    title: "随机事件的判断",
    question: "抛掷一枚六面骰子，事件 A 表示点数为 4，事件 B 表示点数为 8。下列判断正确的是：",
    options: [
      { key: "A", text: "A 是必然事件" },
      { key: "B", text: "A 是不可能事件" },
      { key: "C", text: "A 是随机事件，B 是不可能事件" },
      { key: "D", text: "A 和 B 都是随机事件" },
    ],
    correctAnswer: "C",
    explanation: "骰子的点数可能为 4，也可能不是 4，因此 A 是随机事件。骰子的点数只能为 1 至 6，不可能为 8，因此 B 是不可能事件。",
  },
  {
    id: "probability-events-02",
    topic: "随机事件与样本空间",
    title: "确定样本空间",
    question: "连续抛掷一枚硬币两次，用正、反分别表示两种结果，则样本空间为：",
    options: [
      { key: "A", text: "{正，反}" },
      { key: "B", text: "{正正，正反，反正，反反}" },
      { key: "C", text: "{正正，反反}" },
      { key: "D", text: "{正反，反正}" },
    ],
    correctAnswer: "B",
    explanation: "每次抛掷都有正、反两种结果，连续抛掷两次共有四种有序结果：正正、正反、反正、反反。",
  },
  {
    id: "probability-events-03",
    topic: "随机事件与样本空间",
    title: "表示随机事件",
    question: "抛掷一枚六面骰子，样本空间为 Ω={1,2,3,4,5,6}。事件 A 表示点数为偶数，则 A 等于：",
    options: [
      { key: "A", text: "{2,4,6}" },
      { key: "B", text: "{1,3,5}" },
      { key: "C", text: "{2,3,4}" },
      { key: "D", text: "{1,2,3,4,5,6}" },
    ],
    correctAnswer: "A",
    explanation: "六面骰子的偶数点数为 2、4、6，因此事件 A={2,4,6}。",
  },

  // ==================================================
  // 第 47 专题：事件的关系与运算
  // ==================================================
  {
    id: "probability-relations-01",
    topic: "事件的关系与运算",
    title: "求事件的交集",
    question: "已知 A={1,2,3}，B={3,4,5}，则 A∩B 等于：",
    options: [
      { key: "A", text: "{1,2,3,4,5}" },
      { key: "B", text: "{3}" },
      { key: "C", text: "{1,2}" },
      { key: "D", text: "{4,5}" },
    ],
    correctAnswer: "B",
    explanation: "交集表示同时属于两个集合的元素。A 和 B 只有元素 3 相同，因此 A∩B={3}。",
  },
  {
    id: "probability-relations-02",
    topic: "事件的关系与运算",
    title: "判断对立事件",
    question: "抛掷一枚六面骰子，A 表示点数为奇数，B 表示点数为偶数。A 与 B 的关系是：",
    options: [
      { key: "A", text: "A 包含于 B" },
      { key: "B", text: "A 与 B 相等" },
      { key: "C", text: "A 与 B 可以同时发生" },
      { key: "D", text: "A 与 B 互为对立事件" },
    ],
    correctAnswer: "D",
    explanation: "骰子的点数不是奇数就是偶数，二者不能同时发生，且必有一个发生，因此 A 与 B 互为对立事件。",
  },
  {
    id: "probability-relations-03",
    topic: "事件的关系与运算",
    title: "集合包含与交集",
    question: "若事件 A 包含于事件 B，即 A⊆B，则下列结论正确的是：",
    options: [
      { key: "A", text: "A∪B=A" },
      { key: "B", text: "A∩B=B" },
      { key: "C", text: "A∩B=A" },
      { key: "D", text: "A 与 B 一定互斥" },
    ],
    correctAnswer: "C",
    explanation: "因为 A 中的所有结果都属于 B，所以 A 与 B 的公共部分就是 A，即 A∩B=A。",
  },

  // ==================================================
  // 第 48 专题：古典概型
  // ==================================================
  {
    id: "probability-classical-01",
    topic: "古典概型",
    title: "计算简单概率",
    question: "一个袋子中有 3 个红球和 2 个蓝球，除颜色外完全相同。随机取出 1 个球，取到红球的概率为：",
    options: [
      { key: "A", text: "2/5" },
      { key: "B", text: "1/2" },
      { key: "C", text: "3/5" },
      { key: "D", text: "3/2" },
    ],
    correctAnswer: "C",
    explanation: "共有 5 个等可能的球，其中 3 个是红球，因此取到红球的概率为 3/5。",
  },
  {
    id: "probability-classical-02",
    topic: "古典概型",
    title: "整数抽取问题",
    question: "从 1、2、3、4、5、6、7、8 这 8 个整数中随机选取一个数，选到 3 的倍数的概率为：",
    options: [
      { key: "A", text: "1/8" },
      { key: "B", text: "1/4" },
      { key: "C", text: "3/8" },
      { key: "D", text: "1/2" },
    ],
    correctAnswer: "B",
    explanation: "8 个整数中，3 的倍数为 3 和 6，共 2 个。因此所求概率为 2/8=1/4。",
  },
  {
    id: "probability-classical-03",
    topic: "古典概型",
    title: "掷骰子的概率",
    question: "抛掷一枚均匀的六面骰子，点数大于 3 的概率为：",
    options: [
      { key: "A", text: "1/6" },
      { key: "B", text: "1/3" },
      { key: "C", text: "1/2" },
      { key: "D", text: "2/3" },
    ],
    correctAnswer: "C",
    explanation: "点数大于 3 的结果为 4、5、6，共 3 种；样本空间共有 6 种等可能结果，所以概率为 3/6=1/2。",
  },

  // ==================================================
  // 第 49 专题：概率的基本性质
  // ==================================================
  {
    id: "probability-properties-01",
    topic: "概率的基本性质",
    title: "必然事件的概率",
    question: "设 Ω 为样本空间，则必然事件 Ω 的概率为：",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1/2" },
      { key: "C", text: "1" },
      { key: "D", text: "无法确定" },
    ],
    correctAnswer: "C",
    explanation: "必然事件一定发生，因此其概率为 1；不可能事件的概率为 0。",
  },
  {
    id: "probability-properties-02",
    topic: "概率的基本性质",
    title: "互斥事件的概率加法",
    question: "事件 A 与 B 互斥，且 P(A)=0.3，P(B)=0.4，则 P(A∪B) 等于：",
    options: [
      { key: "A", text: "0.1" },
      { key: "B", text: "0.12" },
      { key: "C", text: "0.7" },
      { key: "D", text: "1.2" },
    ],
    correctAnswer: "C",
    explanation: "A 与 B 互斥，不能同时发生，因此 P(A∪B)=P(A)+P(B)=0.3+0.4=0.7。",
  },
  {
    id: "probability-properties-03",
    topic: "概率的基本性质",
    title: "对立事件的概率",
    question: "事件 A 的概率为 0.35，则其对立事件的概率为：",
    options: [
      { key: "A", text: "0.35" },
      { key: "B", text: "0.55" },
      { key: "C", text: "0.65" },
      { key: "D", text: "1.35" },
    ],
    correctAnswer: "C",
    explanation: "事件 A 与其对立事件的概率之和为 1，所以对立事件的概率为 1−0.35=0.65。",
  },

  // ==================================================
  // 第 50 专题：概率综合应用
  // ==================================================
  {
    id: "probability-application-01",
    topic: "概率综合应用",
    title: "抽取社团成员",
    question: "某班有 10 名学生参加数学社团，其余学生不参加。随机从这 25 名学生中选出 1 人，选到数学社团成员的概率为：",
    options: [
      { key: "A", text: "2/5" },
      { key: "B", text: "1/2" },
      { key: "C", text: "3/5" },
      { key: "D", text: "2/3" },
    ],
    correctAnswer: "A",
    explanation: "25 名学生中有 10 名数学社团成员，随机选取每名学生的机会相同，因此概率为 10/25=2/5。",
  },
  {
    id: "probability-application-02",
    topic: "概率综合应用",
    title: "转盘中的概率",
    question: "一个转盘被平均分成 8 个扇形，其中 3 个红色、2 个蓝色、3 个黄色。随机转动一次，指针停在非蓝色区域的概率为：",
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "3/8" },
      { key: "C", text: "5/8" },
      { key: "D", text: "3/4" },
    ],
    correctAnswer: "D",
    explanation: "非蓝色区域有 3+3=6 个扇形，总共有 8 个等可能扇形，因此概率为 6/8=3/4。",
  },
  {
    id: "probability-application-03",
    topic: "概率综合应用",
    title: "利用对立事件求概率",
    question: "某事件 A 发生的概率为 0.8，则事件 A 不发生的概率为：",
    options: [
      { key: "A", text: "0.2" },
      { key: "B", text: "0.4" },
      { key: "C", text: "0.8" },
      { key: "D", text: "1.8" },
    ],
    correctAnswer: "A",
    explanation: "A 不发生是 A 的对立事件，其概率为 1−P(A)=1−0.8=0.2。",
  },
];
