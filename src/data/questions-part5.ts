import type { Question } from "./questions-part1";

// 高三一轮复习第一模块；原创题。发布后请保持 ID、topic 稳定。
export const practiceTopics = [
  "高三集合与逻辑·集合的概念",
  "高三集合与逻辑·集合关系与参数",
  "高三集合与逻辑·集合运算",
  "高三集合与逻辑·充分必要条件",
  "高三集合与逻辑·量词与综合应用"
] as const;
export const practiceChapters = [{ title: "集合与逻辑", topics: practiceTopics }] as const;
export const questions: Question[] = [
  {
    "id": "g3-sets-concept-choice-01",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "choice",
    "title": "元素与子集",
    "question": "已知 A={0,1,2}，下列关系正确的是：",
    "options": [
      {
        "key": "A",
        "text": "{1}∈A"
      },
      {
        "key": "B",
        "text": "1⊆A"
      },
      {
        "key": "C",
        "text": "{1}⊆A"
      },
      {
        "key": "D",
        "text": "3∈A"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① A 的元素是数 0、1、2，因此 1∈A，而 {1} 不是 A 的元素。\n② {1} 的唯一元素 1 属于 A，因此 {1}⊆A。\n③ 数 1 不能在本题中当作集合使用包含符号，3 也不属于 A。故选 C。"
  },
  {
    "id": "g3-sets-concept-choice-02",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "choice",
    "title": "互异性",
    "question": "若 A={a,a²} 恰有一个元素，则 a 的取值为：",
    "options": [
      {
        "key": "A",
        "text": "仅 0"
      },
      {
        "key": "B",
        "text": "仅 1"
      },
      {
        "key": "C",
        "text": "0 或 1"
      },
      {
        "key": "D",
        "text": "任意实数"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 恰有一个元素，说明列举的两个表达式取相同值，即 a=a²。\n② 移项并因式分解：a(a−1)=0，得 a=0 或 a=1。\n③ 分别代入得到 {0}、{1}，均符合条件。故选 C。"
  },
  {
    "id": "g3-sets-concept-choice-03",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "choice",
    "title": "描述法",
    "question": "集合 {x∈Z | −1<x≤2} 等于：",
    "options": [
      {
        "key": "A",
        "text": "{−1,0,1,2}"
      },
      {
        "key": "B",
        "text": "{0,1,2}"
      },
      {
        "key": "C",
        "text": "(−1,2]"
      },
      {
        "key": "D",
        "text": "{1,2}"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① Z 限定元素为整数。\n② −1 不满足严格不等号；0、1、2 均满足。\n③ 其他整数不在范围内，所以集合为 {0,1,2}。区间 (−1,2] 含非整数，不等价。"
  },
  {
    "id": "g3-sets-concept-choice-04",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "choice",
    "title": "对象的区别",
    "question": "集合 A={x∈R | x²=1} 与 B={(x,y) | y=x²} 的元素类型分别为：",
    "options": [
      {
        "key": "A",
        "text": "数；有序数对"
      },
      {
        "key": "B",
        "text": "数；数"
      },
      {
        "key": "C",
        "text": "有序数对；数"
      },
      {
        "key": "D",
        "text": "有序数对；有序数对"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① A 中竖线左边的代表元素为 x，解方程得数 −1、1。\n② B 中代表元素为 (x,y)，例如 (0,0)、(1,1) 都是元素。\n③ 因而 A 是数集，B 是点集，选 A。"
  },
  {
    "id": "g3-sets-concept-fill-01",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "fill",
    "title": "去重后计数",
    "question": "集合 A={x∈R | (x−1)²(x+2)=0} 的元素个数为____。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① 由乘积为零，得 x−1=0 或 x+2=0。\n② 两个不同实根为 1、−2；重根 1 只作为一个元素。\n③ A={−2,1}，共有 2 个元素。"
  },
  {
    "id": "g3-sets-concept-fill-02",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "fill",
    "title": "有限集合",
    "question": "集合 {x∈N | x²<10} 的元素个数为____。（本题 N={0,1,2,…}）",
    "options": [],
    "correctAnswer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "explanation": "① x≥0，且 x²<10，得 0≤x<√10。\n② 满足条件的自然数为 0、1、2、3。\n③ 因而共有 4 个元素，不能漏掉 0。"
  },
  {
    "id": "g3-sets-concept-fill-03",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "fill",
    "title": "值集去重",
    "question": "集合 {y | y=x²，x∈{−2,−1,1,2}} 的元素个数为____。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① 将四个允许的 x 依次代入，得到 y=4、1、1、4。\n② 集合不重复记录相同元素，所以值集为 {1,4}。\n③ 元素个数为 2，不是 4。"
  },
  {
    "id": "g3-sets-concept-written-01",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "written",
    "title": "从方程到集合",
    "question": "设 A={x∈R | x²−(a+1)x+a=0}。\n（1）当 a=2 时，用列举法表示 A；\n（2）若 A 恰有一个元素，求 a。",
    "options": [],
    "correctAnswer": "（1）{1,2}；（2）a=1。",
    "explanation": "思路：把方程因式分解，再区分不同根与重根。\n（1）a=2 时，方程为 x²−3x+2=0。因式分解得 (x−1)(x−2)=0，因此 x=1 或 x=2，所以 A={1,2}。\n（2）对任意实数 a，x²−(a+1)x+a=(x−1)(x−a)。方程的根为 1 与 a。若 a≠1，两个根不同，A 有两个元素；若 a=1，两根重合，A={1}。因此 A 恰有一个元素的充要条件是 a=1。\n检验：a=1 代入原式得到 (x−1)²=0，确实只有元素 1。",
    "checkpoints": [
      "（1）代入 a=2、分解方程并写出集合",
      "（2）分解为 (x−1)(x−a)，讨论两根是否重合",
      "检验 a=1 并明确结论"
    ],
    "hint": "先尝试把多项式写成 (x−1)(x−a)。"
  },
  {
    "id": "g3-sets-concept-written-02",
    "topic": "高三集合与逻辑·集合的概念",
    "kind": "written",
    "title": "元素互异性的约束",
    "question": "设 A={a+1,a²−1}。\n（1）若 0∈A，求 a 的所有可能值；\n（2）在（1）的条件下，若 A 恰有两个元素，求 a，并写出 A。",
    "options": [],
    "correctAnswer": "（1）a=−1 或 1；（2）a=1，A={0,2}。",
    "explanation": "（1）0∈A 表示至少一个所列式子为 0。由 a+1=0 得 a=−1；由 a²−1=0 得 a=−1 或 a=1。合并得到 a∈{−1,1}。\n（2）逐一检验：a=−1 时，a+1=0、a²−1=0，两项相同，A={0}，只有一个元素，应排除。a=1 时，a+1=2、a²−1=0，A={0,2}，有两个元素，满足条件。\n因此 a=1，且 A={0,2}。",
    "checkpoints": [
      "（1）分别令两个表达式为零，合并候选值",
      "（2）逐个代入，检查元素是否重复",
      "排除 −1，写出 a=1 和 A={0,2}"
    ],
    "hint": "属于表示至少一个表达式等于 0；还要回代检查互异性。"
  },
  {
    "id": "g3-sets-relations-choice-01",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "choice",
    "title": "空集的地位",
    "question": "若 A⊆{1,2}，则 A 的可能个数为：",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 子集可以不选元素、选一个元素或选两个元素。\n② 全部子集为 ∅、{1}、{2}、{1,2}。\n③ 共 4 个，包含空集和原集合，故选 C。"
  },
  {
    "id": "g3-sets-relations-choice-02",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "choice",
    "title": "区间包含",
    "question": "使 [a,a+1]⊆[0,3] 成立的 a 的范围为：",
    "options": [
      {
        "key": "A",
        "text": "[0,2]"
      },
      {
        "key": "B",
        "text": "(0,2)"
      },
      {
        "key": "C",
        "text": "[0,3]"
      },
      {
        "key": "D",
        "text": "[−1,2]"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① [a,a+1] 对所有实数 a 都非空。\n② 包含关系要求左端 a≥0，右端 a+1≤3。\n③ 联立得 0≤a≤2，等号时仍包含，故选 A。"
  },
  {
    "id": "g3-sets-relations-choice-03",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "choice",
    "title": "解集的空集情形",
    "question": "设 A={x | x²=a}，B={−1,1}。使 A⊆B 成立的 a 满足：",
    "options": [
      {
        "key": "A",
        "text": "a=1"
      },
      {
        "key": "B",
        "text": "a≤0"
      },
      {
        "key": "C",
        "text": "a<0 或 a=1"
      },
      {
        "key": "D",
        "text": "a≥0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① a<0 时，实数方程无解，A=∅，满足 A⊆B。\n② a=0 时，A={0}，不满足。\n③ a>0 时 A={−√a,√a}；要包含于 B，必须 √a=1，即 a=1。合并为 a<0 或 a=1。"
  },
  {
    "id": "g3-sets-relations-choice-04",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "choice",
    "title": "真子集",
    "question": "下列集合是真子集关系的是：",
    "options": [
      {
        "key": "A",
        "text": "{1,2} 与 {2,1}"
      },
      {
        "key": "B",
        "text": "∅ 与 ∅"
      },
      {
        "key": "C",
        "text": "{1} 与 {1,2}"
      },
      {
        "key": "D",
        "text": "{1,3} 与 {1,2}"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 真子集要求所有元素都属于另一个集合，且两个集合不相等。\n② {1} 的元素属于 {1,2}，而 2 不属于 {1}，所以是真子集。\n③ 前两组相等；最后一组含不属于右边的元素 3。"
  },
  {
    "id": "g3-sets-relations-fill-01",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "fill",
    "title": "真子集计数",
    "question": "集合 {1,2,3} 的真子集共有____个。",
    "options": [],
    "correctAnswer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "explanation": "① 三个元素各有选与不选两种状态，子集共 2³=8 个。\n② 真子集需要排除原集合自身，但保留空集。\n③ 因而共有 8−1=7 个。"
  },
  {
    "id": "g3-sets-relations-fill-02",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "fill",
    "title": "端点约束",
    "question": "若 (−∞,a)⊆(−∞,2)，则 a 的最大值是____。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① a≤2 时，每个 x<a 都满足 x<2，包含关系成立。\n② a>2 时，可取 x=2，此时 x<a 却不满足 x<2，包含失败。\n③ 因而 a≤2，最大值为 2。"
  },
  {
    "id": "g3-sets-relations-fill-03",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "fill",
    "title": "集合相等",
    "question": "若 {1,a}={1,3}，则 a=____。",
    "options": [],
    "correctAnswer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "explanation": "① 右边含元素 3，而左边所列的 1 不能提供元素 3，因此 a=3。\n② 回代左边为 {1,3}，确实相等，故答案为 3。"
  },
  {
    "id": "g3-sets-relations-written-01",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "written",
    "title": "含空集的区间包含",
    "question": "设 A={x | a≤x≤2a+1}，B=[0,5]。\n（1）求 A=∅ 时 a 的范围；\n（2）求 A⊆B 时 a 的范围。",
    "options": [],
    "correctAnswer": "（1）a<−1；（2）a<−1 或 0≤a≤2。",
    "explanation": "（1）A 为空集当且仅当左端点大于右端点，即 a>2a+1。两边减去 2a 得 −a>1，故 a<−1。\n（2）分两类讨论。① a<−1 时，A=∅，空集是 B 的子集，满足条件。② a≥−1 时，A 非空。此时 A⊆[0,5] 当且仅当 a≥0 且 2a+1≤5。第二个不等式给出 a≤2；与非空条件联立得 0≤a≤2。\n合并两类：a∈(−∞,−1)∪[0,2]。边界 a=−1 时 A={−1}，不属于 B，应排除；a=0、2 时均满足。",
    "checkpoints": [
      "（1）由左端点大于右端点求出空集条件",
      "（2）分别处理空集和非空集的包含关系",
      "合并范围并检查 −1、0、2 三个边界"
    ],
    "hint": "先判断 A 有没有元素，再比较端点。"
  },
  {
    "id": "g3-sets-relations-written-02",
    "topic": "高三集合与逻辑·集合关系与参数",
    "kind": "written",
    "title": "包含与真包含",
    "question": "设 A=[−1,2]，B=[m,m+2]。\n（1）求 B⊆A 时 m 的范围；\n（2）在（1）的条件下，B 是否一定是 A 的真子集？说明理由。",
    "options": [],
    "correctAnswer": "（1）−1≤m≤0；（2）一定是真子集。",
    "explanation": "（1）区间 B 长度为 2，总是非空。B⊆A 需要 m≥−1 且 m+2≤2。化简第二式得 m≤0，因此 m∈[−1,0]。\n（2）若 B=A，两个闭区间的左右端点应分别相等，即同时有 m=−1 和 m+2=2，后式又给出 m=0，两者矛盾，所以不能相等。也可比较长度：A 长度为 3，B 长度为 2，必不相等。\n结合（1）中的包含关系，知每个 m∈[−1,0] 都使 B 成为 A 的真子集。",
    "checkpoints": [
      "（1）列出并解两端点不等式",
      "（2）证明两个区间不能相等",
      "由包含且不等推出真包含"
    ],
    "hint": "真包含是在包含的基础上排除集合相等。"
  },
  {
    "id": "g3-sets-operations-choice-01",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "choice",
    "title": "交集端点",
    "question": "A=(−∞,2]，B=(1,3)，则 A∩B=：",
    "options": [
      {
        "key": "A",
        "text": "(1,2]"
      },
      {
        "key": "B",
        "text": "[1,2]"
      },
      {
        "key": "C",
        "text": "(1,3)"
      },
      {
        "key": "D",
        "text": "(−∞,3)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 同时满足 x≤2 与 1<x<3。\n② 联立化简得 1<x≤2，因此交集为 (1,2]。\n③ 1 不在 B 中而 2 同时属于两集，故左开右闭。"
  },
  {
    "id": "g3-sets-operations-choice-02",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "choice",
    "title": "相接区间的并集",
    "question": "A=[−1,1)，B=[1,3]，则 A∪B=：",
    "options": [
      {
        "key": "A",
        "text": "[−1,3]"
      },
      {
        "key": "B",
        "text": "[−1,3] 去掉 1"
      },
      {
        "key": "C",
        "text": "(−1,3)"
      },
      {
        "key": "D",
        "text": "∅"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① A 包含 −1 到 1 左侧的点，B 包含 1 到 3 的点。\n② 接点 1 虽不属于 A，却属于 B，所以并集中不缺 1。\n③ 两端 −1、3 均包含，结果为 [−1,3]。"
  },
  {
    "id": "g3-sets-operations-choice-03",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "choice",
    "title": "相对补集",
    "question": "U=R，A=[−1,2)，则 A 在 U 中的补集为：",
    "options": [
      {
        "key": "A",
        "text": "(−∞,−1)∪[2,+∞)"
      },
      {
        "key": "B",
        "text": "(−∞,−1]∪(2,+∞)"
      },
      {
        "key": "C",
        "text": "[−1,2)"
      },
      {
        "key": "D",
        "text": "(−1,2]"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 补集由不满足 −1≤x<2 的实数组成。\n② 否定两边同时成立，得到 x<−1 或 x≥2。\n③ −1 已在 A 中，应排除；2 不在 A 中，应保留，故选 A。"
  },
  {
    "id": "g3-sets-operations-choice-04",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "choice",
    "title": "德摩根律",
    "question": "在全集 U 中，下列恒成立的是：",
    "options": [
      {
        "key": "A",
        "text": "补(A∩B)=补A∩补B"
      },
      {
        "key": "B",
        "text": "补(A∪B)=补A∩补B"
      },
      {
        "key": "C",
        "text": "A∩B=A∪B"
      },
      {
        "key": "D",
        "text": "补A=A"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① x 不属于 A∪B，等价于 x 不属于 A 且 x 不属于 B。\n② 后者等价于 x 同时属于补A和补B，因此补(A∪B)=补A∩补B。\n③ 注意补集运算把“或”换为“且”，选 B。"
  },
  {
    "id": "g3-sets-operations-fill-01",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "fill",
    "title": "有限集合的运算",
    "question": "U={1,2,3,4,5}，A={1,3,5}，B={2,3}，则 A∩(B 在 U 中的补集)=____。",
    "options": [],
    "correctAnswer": "{1,5}",
    "acceptedAnswers": [
      "{1,5}",
      "{5,1}"
    ],
    "explanation": "① B 的补集为 U 中去掉 2、3 后的集合 {1,4,5}。\n② 与 A={1,3,5} 取共同元素，得到 {1,5}。"
  },
  {
    "id": "g3-sets-operations-fill-02",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "fill",
    "title": "区间的交集",
    "question": "A=[−2,1]，B=(0,3)，则 A∩B=____。",
    "options": [],
    "correctAnswer": "(0,1]",
    "acceptedAnswers": [
      "(0,1]",
      "0<x<=1",
      "0<x≤1"
    ],
    "explanation": "① 交集需要同时满足 −2≤x≤1 与 0<x<3。\n② 合并约束为 0<x≤1，故答案为 (0,1]。"
  },
  {
    "id": "g3-sets-operations-fill-03",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "fill",
    "title": "并集计数",
    "question": "有限集 A 有 8 个元素，B 有 6 个元素，A∩B 有 3 个元素，则 A∪B 有____个元素。",
    "options": [],
    "correctAnswer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "explanation": "① 8+6 将公共的 3 个元素各数了两次。\n② 减去一次重复计数，得 |A∪B|=8+6−3=11。"
  },
  {
    "id": "g3-sets-operations-written-01",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "written",
    "title": "不等式解集的交并补",
    "question": "全集 U=R，A={x | x²−3x+2≤0}，B={x | x>0}。\n（1）求 A∩B；\n（2）求 A∪B；\n（3）求 A 在 U 中的补集。",
    "options": [],
    "correctAnswer": "（1）[1,2]；（2）(0,+∞)；（3）(−∞,1)∪(2,+∞)。",
    "explanation": "（1）先解二次不等式：(x−1)(x−2)≤0。二次项系数为正，乘积在两根之间非正，端点可取，所以 A=[1,2]。B=(0,+∞)，A 中每个数均大于 0，因此 A⊆B，从而 A∩B=A=[1,2]。\n（2）由 A⊆B，得 A∪B=B=(0,+∞)。注意 0 不属于任一集合，不包含在并集中。\n（3）补集取 R 中不属于 [1,2] 的点，即 x<1 或 x>2，所以补集为 (−∞,1)∪(2,+∞)。端点 1、2 已在 A 中，补集中不再包含。",
    "checkpoints": [
      "先正确求出 A=[1,2] 并判断 A⊆B",
      "分别写出交集与并集且端点正确",
      "写出补集并解释 1、2 不可取"
    ],
    "hint": "先解出 A 的区间形式，再利用包含关系化简。"
  },
  {
    "id": "g3-sets-operations-written-02",
    "topic": "高三集合与逻辑·集合运算",
    "kind": "written",
    "title": "交集为空的参数边界",
    "question": "设 A=[−1,2]，B=(a,a+1)。\n（1）当 a=1 时，求 A∩B；\n（2）若 A∩B=∅，求 a 的范围。",
    "options": [],
    "correctAnswer": "（1）(1,2)；（2）a≤−2 或 a≥2。",
    "explanation": "（1）a=1 时 B=(1,2)。B 的每个点均属于 A，所以 A∩B=(1,2)。虽然 2 属于 A，但不属于 B，不能写成闭端点。\n（2）B 长度为 1，总非空。若 B 完全位于 A 的左侧或只在 −1 处相接而不含 −1，则 a+1≤−1，即 a≤−2。若 B 完全位于 A 的右侧或只在 2 处相接而不含 2，则 a≥2。\n说明无遗漏：若 −2<a<2，则 a+1>−1 且 a<2，开区间 (a,a+1) 与闭区间 [−1,2] 存在公共点，不能使交集为空。\n综上，a∈(−∞,−2]∪[2,+∞)。a=−2 或 2 时接点不属于 B，所以等号保留。",
    "checkpoints": [
      "（1）取交集并检查开端点",
      "（2）分左侧、右侧两类列不等式",
      "证明中间情形有交点并核对两个边界"
    ],
    "hint": "在数轴上把 B 放在 A 左边或右边，特别检查相接时是否有公共点。"
  },
  {
    "id": "g3-sets-conditions-choice-01",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "choice",
    "title": "充分不必要",
    "question": "p：x=1，q：x²=1，则 p 是 q 的：",
    "options": [
      {
        "key": "A",
        "text": "充分不必要条件"
      },
      {
        "key": "B",
        "text": "必要不充分条件"
      },
      {
        "key": "C",
        "text": "充要条件"
      },
      {
        "key": "D",
        "text": "既不充分也不必要条件"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① x=1 可推出 x²=1，故 p⇒q，充分性成立。\n② x=−1 时 q 成立而 p 不成立，故 q 不能推出 p，必要性不成立。\n③ 因此为充分不必要条件。"
  },
  {
    "id": "g3-sets-conditions-choice-02",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "choice",
    "title": "必要不充分",
    "question": "p：x>0，q：x>2，则 p 是 q 的：",
    "options": [
      {
        "key": "A",
        "text": "充分不必要条件"
      },
      {
        "key": "B",
        "text": "必要不充分条件"
      },
      {
        "key": "C",
        "text": "充要条件"
      },
      {
        "key": "D",
        "text": "既不充分也不必要条件"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① q⇒p，因为 x>2 必有 x>0，故 p 是 q 的必要条件。\n② 取 x=1，满足 p 却不满足 q，充分性不成立。\n③ 所以 p 是 q 的必要不充分条件。"
  },
  {
    "id": "g3-sets-conditions-choice-03",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "choice",
    "title": "充要条件",
    "question": "对实数 x，“|x|<1”是“−1<x<1”的：",
    "options": [
      {
        "key": "A",
        "text": "充分不必要条件"
      },
      {
        "key": "B",
        "text": "必要不充分条件"
      },
      {
        "key": "C",
        "text": "充要条件"
      },
      {
        "key": "D",
        "text": "既不充分也不必要条件"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① |x|<1 表示 x 到原点的距离小于 1，等价于 −1<x<1。\n② 两个方向均成立，两个条件对应的解集相等。\n③ 故互为充要条件。"
  },
  {
    "id": "g3-sets-conditions-choice-04",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "choice",
    "title": "反例检验",
    "question": "p：xy>0，q：x>0 且 y>0，则 p 是 q 的：",
    "options": [
      {
        "key": "A",
        "text": "充分不必要条件"
      },
      {
        "key": "B",
        "text": "必要不充分条件"
      },
      {
        "key": "C",
        "text": "充要条件"
      },
      {
        "key": "D",
        "text": "既不充分也不必要条件"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 若 x>0 且 y>0，则 xy>0，所以 q⇒p。\n② 取 x=y=−1，xy=1>0，但 q 不成立，因此 p 不能推出 q。\n③ p 是 q 的必要不充分条件。"
  },
  {
    "id": "g3-sets-conditions-fill-01",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "fill",
    "title": "条件转化为包含",
    "question": "设 p：x>a，q：x>2。若 p 是 q 的充分条件，则 a 的最小值为____。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① p⇒q 要求 (a,+∞)⊆(2,+∞)。\n② a≥2 时包含成立；a<2 时取 x=2，满足 p 但不满足 q。\n③ 因而 a≥2，最小值为 2。"
  },
  {
    "id": "g3-sets-conditions-fill-02",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "fill",
    "title": "必要条件的方向",
    "question": "设 p：x>a，q：x>2。若 p 是 q 的必要条件，则 a 的最大值为____。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① p 是 q 的必要条件表示 q⇒p，要求 (2,+∞)⊆(a,+∞)。\n② a≤2 时成立；a>2 时取 x=a，满足 q 但不满足 p。\n③ 所以 a≤2，最大值为 2。"
  },
  {
    "id": "g3-sets-conditions-fill-03",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "fill",
    "title": "等价条件",
    "question": "“x²−4x+3=0”与“x∈{1,b}”互为充要条件，则 b=____。",
    "options": [],
    "correctAnswer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "explanation": "① 原方程分解为 (x−1)(x−3)=0，解集为 {1,3}。\n② 充要条件要求两个解集相等，所以 {1,b}={1,3}。\n③ 因而 b=3，回代可得相同解集。"
  },
  {
    "id": "g3-sets-conditions-written-01",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "written",
    "title": "充分与必要分别求参",
    "question": "设 p：−1≤x≤2，q：a≤x≤a+4。\n（1）若 p 是 q 的充分条件，求 a 的范围；\n（2）是否存在 a，使 p 是 q 的必要条件？说明理由。",
    "options": [],
    "correctAnswer": "（1）−2≤a≤−1；（2）不存在。",
    "explanation": "思路：先把命题写为区间，再严格按箭头方向列包含关系。\n（1）p⇒q，即 [−1,2]⊆[a,a+4]。左端需要 a≤−1，右端需要 a+4≥2，即 a≥−2。联立得 −2≤a≤−1。两个边界都满足包含关系。\n（2）q⇒p 要求 [a,a+4]⊆[−1,2]。必须同时满足 a≥−1 与 a+4≤2，后式即 a≤−2。不存在同时满足 a≥−1 和 a≤−2 的实数 a，所以不存在这样的参数。\n不能交换充分与必要对应的包含方向。",
    "checkpoints": [
      "把两个命题表示为对应区间并写对箭头",
      "（1）解得 −2≤a≤−1，保留边界",
      "（2）列出矛盾条件并得出不存在"
    ],
    "hint": "p 是 q 的充分条件对应 p⇒q；必要条件对应 q⇒p。"
  },
  {
    "id": "g3-sets-conditions-written-02",
    "topic": "高三集合与逻辑·充分必要条件",
    "kind": "written",
    "title": "双向证明与反例",
    "question": "对实数 x、y，设 p：x=y，q：x²=y²。\n（1）判断 p 是 q 的什么条件，并证明；\n（2）若增加 x≥0、y≥0，重新判断，并证明。",
    "options": [],
    "correctAnswer": "（1）充分不必要；（2）充要。",
    "explanation": "（1）若 x=y，两边平方得 x²=y²，故 p⇒q。反过来取 x=1、y=−1，有 x²=y²=1 而 x≠y，所以 q 不能推出 p。因此 p 是 q 的充分不必要条件。\n（2）在 x≥0、y≥0 下，p⇒q 仍然成立。若 q 成立，则 x²−y²=0，即 (x−y)(x+y)=0。于是 x=y 或 x+y=0。后一情形结合非负条件只能是 x=y=0，也满足 x=y。因此 q⇒p 也成立，p 是 q 的充要条件。\n新增的取值范围会改变条件关系，不能沿用（1）的反例。",
    "checkpoints": [
      "（1）证明正向并给出满足前提的反例",
      "（2）因式分解并处理 x+y=0 的情形",
      "根据非负条件完成反向证明和充要结论"
    ],
    "hint": "平方会丢失符号信息；非负条件能否消除这部分信息差？"
  },
  {
    "id": "g3-sets-quantifiers-choice-01",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "choice",
    "title": "全称命题的否定",
    "question": "“对任意实数 x，都有 x²≥x”的否定是：",
    "options": [
      {
        "key": "A",
        "text": "任意 x∈R，x²<x"
      },
      {
        "key": "B",
        "text": "存在 x∈R，x²<x"
      },
      {
        "key": "C",
        "text": "存在 x∈R，x²≥x"
      },
      {
        "key": "D",
        "text": "任意 x∈R，x²≤x"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 否定全称命题时，把“任意”改为“存在”。\n② 原结论 x²≥x 的否定为 x²<x。\n③ 定义范围 R 保持不变，故否定为存在 x∈R，使 x²<x。"
  },
  {
    "id": "g3-sets-quantifiers-choice-02",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "choice",
    "title": "存在命题的否定",
    "question": "“存在 x>0，使 ln x=0”的否定是：",
    "options": [
      {
        "key": "A",
        "text": "任意 x>0，ln x≠0"
      },
      {
        "key": "B",
        "text": "任意 x≤0，ln x≠0"
      },
      {
        "key": "C",
        "text": "存在 x>0，ln x≠0"
      },
      {
        "key": "D",
        "text": "任意 x>0，ln x>0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 否定存在命题，要把“存在”改为“任意”。\n② 等式的否定是不等于，不能只写大于或小于。\n③ 变量范围 x>0 不变，所以选 A。"
  },
  {
    "id": "g3-sets-quantifiers-choice-03",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "choice",
    "title": "反例的位置",
    "question": "要否定“任意 x∈R，x²≥x”，可取的反例是：",
    "options": [
      {
        "key": "A",
        "text": "x=−1"
      },
      {
        "key": "B",
        "text": "x=0"
      },
      {
        "key": "C",
        "text": "x=1/2"
      },
      {
        "key": "D",
        "text": "x=2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 反例应使 x²<x。移项得 x(x−1)<0，即 0<x<1。\n② 四个选项中只有 1/2 位于该区间。\n③ 此时 x²=1/4<1/2，确实使命题失败。"
  },
  {
    "id": "g3-sets-quantifiers-choice-04",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "choice",
    "title": "全称成立的参数",
    "question": "命题“对任意 x∈R，x²+a≥0”为真，当且仅当：",
    "options": [
      {
        "key": "A",
        "text": "a>0"
      },
      {
        "key": "B",
        "text": "a≥0"
      },
      {
        "key": "C",
        "text": "a≤0"
      },
      {
        "key": "D",
        "text": "a<0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 必要性：取 x=0，原式给出 a≥0。\n② 充分性：若 a≥0，由 x²≥0，得 x²+a≥0，对所有实数 x 成立。\n③ 两向合并，条件为 a≥0，包含等号。"
  },
  {
    "id": "g3-sets-quantifiers-fill-01",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "fill",
    "title": "存在性的参数阈值",
    "question": "存在 x∈R 使 x²−2x+a<0，实数 a 的范围是____。",
    "options": [],
    "correctAnswer": "a<1",
    "acceptedAnswers": [
      "a<1",
      "(-∞,1)"
    ],
    "explanation": "① 配方：x²−2x+a=(x−1)²+a−1。\n② 因为 (x−1)²≥0，最小值为 a−1，在 x=1 处取得。\n③ 存在函数值小于 0 等价于最小值 a−1<0，所以 a<1。"
  },
  {
    "id": "g3-sets-quantifiers-fill-02",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "fill",
    "title": "全称性的参数阈值",
    "question": "对任意 x∈R 都有 x²−2x+a≥0，则 a 的范围是____。",
    "options": [],
    "correctAnswer": "a≥1",
    "acceptedAnswers": [
      "a≥1",
      "a>=1",
      "[1,+∞)"
    ],
    "explanation": "① 配方为 (x−1)²+a−1。\n② 全体实数上的最小值为 a−1。\n③ 恒非负要求且只要求 a−1≥0，因此 a≥1。"
  },
  {
    "id": "g3-sets-quantifiers-fill-03",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "fill",
    "title": "有界区间的全称命题",
    "question": "对任意 x∈[0,2]，都有 x<a，则 a 的范围是____。",
    "options": [],
    "correctAnswer": "a>2",
    "acceptedAnswers": [
      "a>2",
      "(2,+∞)"
    ],
    "explanation": "① x 在给定闭区间上的最大值为 2，并且能取到。\n② 取 x=2 得必要条件 2<a。\n③ 若 a>2，则任意 x≤2<a，原命题成立。因此 a>2。"
  },
  {
    "id": "g3-sets-quantifiers-written-01",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "written",
    "title": "全称与存在的对照",
    "question": "设 f(x)=x²−2x+a，定义域为 R。\n（1）若对任意 x∈R，f(x)>0，求 a；\n（2）若存在 x∈R，f(x)≤0，求 a；\n（3）说明两问所对应命题的关系。",
    "options": [],
    "correctAnswer": "（1）a>1；（2）a≤1；（3）互为否定。",
    "explanation": "先配方得 f(x)=(x−1)²+a−1。因为平方项非负，并且在 x=1 时为 0，故全域最小值为 a−1，且可以取到。\n（1）若对任意 x 都有 f(x)>0，则特别在 x=1 时有 a−1>0，得 a>1。反之 a>1 时，f(x)≥a−1>0，对所有 x 成立。因此 a>1。\n（2）存在 x 使 f(x)≤0，要求最小值 a−1≤0，得到 a≤1。反之 a≤1 时，取 x=1 即有 f(1)=a−1≤0，所以条件也充分。因此 a≤1。\n（3）“任意 x∈R，f(x)>0”的否定是“存在 x∈R，f(x)≤0”。两问互为否定，参数范围分别为 (1,+∞) 与 (−∞,1]，在 R 内互为补集。边界 a=1 时最小值为 0，归入第（2）问。",
    "checkpoints": [
      "配方并说明最小值在 x=1 取得",
      "两问均证明条件的必要性与充分性",
      "写清命题否定及 a=1 的边界归属"
    ],
    "hint": "用同一个最小值分别处理“恒大于零”和“存在非正值”。"
  },
  {
    "id": "g3-sets-quantifiers-written-02",
    "topic": "高三集合与逻辑·量词与综合应用",
    "kind": "written",
    "title": "含参数的两种量词",
    "question": "设 P(a)：对任意 x∈[0,1]，x²≤a；Q(a)：存在 x∈[0,1]，使 x²≥a。\n（1）分别求 P(a)、Q(a) 为真时 a 的范围；\n（2）求 P(a)、Q(a) 同时为真时 a 的值；\n（3）写出 Q(a) 的否定，并求其为真时 a 的范围。",
    "options": [],
    "correctAnswer": "（1）P：a≥1，Q：a≤1；（2）a=1；（3）任意 x∈[0,1]，x²<a；a>1。",
    "explanation": "（1）在 [0,1] 上，x² 的最小值为 0，最大值为 1，且最大值在 x=1 处取得。P 要求所有函数值均不超过 a，因此需 a≥1；反之 a≥1 时 x²≤1≤a，故充分。Q 要求至少一个函数值不小于 a；必要条件是 a≤1，反之 a≤1 时取 x=1，就有 x²=1≥a，因此也充分。\n（2）同时为真要求 a≥1 且 a≤1，联立得 a=1。此时两命题均可直接检验成立。\n（3）Q 的否定为“对任意 x∈[0,1]，x²<a”，定义范围不变。由于最大值 1 可以取到，严格不等式恒成立要求 a>1；反之 a>1 时 x²≤1<a。故其参数范围为 (1,+∞)，恰是 Q 为真范围的补集。",
    "checkpoints": [
      "（1）找出可取到的最大值并分别证明两条件",
      "（2）求两参数范围的交集",
      "（3）正确否定量词与不等号，保留原定义范围"
    ],
    "hint": "存在性只需找到一个见证；否定时不能改变变量范围。"
  }
];
