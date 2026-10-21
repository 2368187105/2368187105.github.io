import type { Question } from "./questions-part1";

// 一轮复习八章综合训练，本站原创；已发布 ID/topic 保持稳定。
export const practiceTopics = [
  "高三集合与逻辑·章末综合",
  "高三函数与导数·章末综合",
  "高三三角函数与解三角形·章末综合",
  "高三平面向量·章末综合",
  "高三数列·章末综合",
  "高三立体几何与空间向量·章末综合",
  "高三解析几何·章末综合",
  "高三计数、概率与统计·章末综合"
] as const;
export const practiceChapters = practiceTopics.map((topic,index) => ({ title: ["集合与逻辑", "函数与导数", "三角函数与解三角形", "平面向量", "数列", "立体几何与空间向量", "解析几何", "计数、概率与统计"][index], topics: [topic] }));
export const questions: Question[] = [
  {
    "id": "g3-review-sets-logic-choice-01",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "二次不等式与交集",
    "question": "A={x∈R：x²−5x+6≤0}，B={x∈R：x>2}，A∩B 是：",
    "options": [
      {
        "key": "A",
        "text": "[2,3]"
      },
      {
        "key": "B",
        "text": "(2,3]"
      },
      {
        "key": "C",
        "text": "[2,3)"
      },
      {
        "key": "D",
        "text": "(2,3)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 因式分解 (x−2)(x−3)≤0，得 A=[2,3]。\n② 与 x>2 取交集，左端 2 不取、右端 3 可取，得 (2,3]。\n故选 B。"
  },
  {
    "id": "g3-review-sets-logic-choice-02",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "并集的端点",
    "question": "A=[−1,2)，B=[1,4]，A∪B 是：",
    "options": [
      {
        "key": "A",
        "text": "[−1,4)"
      },
      {
        "key": "B",
        "text": "[1,2)"
      },
      {
        "key": "C",
        "text": "[−1,4]"
      },
      {
        "key": "D",
        "text": "(−1,4]"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 两区间在 [1,2) 重叠，并集连续覆盖 −1 到 4。\n② 两端分别在 A、B 中，均取等，结果为 [−1,4]。\n故选 C。"
  },
  {
    "id": "g3-review-sets-logic-choice-03",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "充分必要条件",
    "question": "p：x>2；q：x²>4。在实数范围内，p 是 q 的：",
    "options": [
      {
        "key": "A",
        "text": "必要不充分条件"
      },
      {
        "key": "B",
        "text": "充要条件"
      },
      {
        "key": "C",
        "text": "既不充分也不必要条件"
      },
      {
        "key": "D",
        "text": "充分不必要条件"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① x>2 时必有 x²>4，所以 p⇒q。\n② x=−3 满足 q 但不满足 p，q 不能推出 p。\n故选 D。"
  },
  {
    "id": "g3-review-sets-logic-choice-04",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "嵌套量词的否定",
    "question": "命题“∀x∈R，∃y∈R，x+y=0”的否定是：",
    "options": [
      {
        "key": "A",
        "text": "∃x∈R，∀y∈R，x+y≠0"
      },
      {
        "key": "B",
        "text": "∀x∈R，∃y∈R，x+y≠0"
      },
      {
        "key": "C",
        "text": "∃x∈R，∃y∈R，x+y≠0"
      },
      {
        "key": "D",
        "text": "∀x∈R，∀y∈R，x+y≠0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 否定全称变存在，否定内部存在变全称，量词顺序不交换。\n② 同时把等式否定为不等式，得到所列 ∃x∀y 命题。\n故选 A。"
  },
  {
    "id": "g3-review-sets-logic-choice-05",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "子集计数",
    "question": "集合 A={1,2,3} 的二元素子集共有多少个？",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 子集不计元素顺序，二元素子集为 {1,2}、{1,3}、{2,3}。\n② 共 3 个，不把交换排列另计。\n故选 B。"
  },
  {
    "id": "g3-review-sets-logic-choice-06",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "choice",
    "difficulty": "提升",
    "title": "含参闭区间的包含",
    "question": "A={x∈R：(x−1)(x−a)≤0}，A⊆[0,3] 的充要条件是：",
    "options": [
      {
        "key": "A",
        "text": "1≤a≤3"
      },
      {
        "key": "B",
        "text": "0<a<3"
      },
      {
        "key": "C",
        "text": "0≤a≤3"
      },
      {
        "key": "D",
        "text": "a≤3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 不论 a 与 1 的大小，A 均为以 a、1 为端点的闭区间，a=1 时为单点。\n② 已知 1∈[0,3]，整个区间被包含当且仅当另一端 a 也在 [0,3]。\n故选 C。"
  },
  {
    "id": "g3-review-sets-logic-fill-01",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "参数集合",
    "question": "若 {1,a}⊆{1,2,3}，填 a 的所有可能值组成的集合。",
    "options": [],
    "correctAnswer": "{1,2,3}",
    "acceptedAnswers": [
      "{1,2,3}"
    ],
    "explanation": "① 子集中的每个元素都要在右侧集合中，所以 a 只能为 1、2 或 3。\n② a=1 时左侧集合只有一个元素，仍符合，不应漏掉。"
  },
  {
    "id": "g3-review-sets-logic-fill-02",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "定义域的交集",
    "question": "填 f(x)=log₂(x−1)+√(4−x) 的定义域。",
    "options": [],
    "correctAnswer": "(1,4]",
    "acceptedAnswers": [
      "(1,4]",
      "1<x≤4",
      "4≥x>1",
      "x∈(1,4]"
    ],
    "explanation": "① 对数要求 x−1>0，即 x>1。\n② 根式要求 4−x≥0，即 x≤4。取交集得 (1,4]。"
  },
  {
    "id": "g3-review-sets-logic-fill-03",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "整数元素个数",
    "question": "集合 {x∈Z：x²<10} 有多少个元素？",
    "options": [],
    "correctAnswer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "explanation": "① 不等式等价于 −√10<x<√10。\n② 整数为 −3、−2、−1、0、1、2、3，共 7 个。"
  },
  {
    "id": "g3-review-sets-logic-written-01",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "包含与不相交的参数",
    "question": "A=[a,a+2]，B=[−1,3]。（1）求 A⊆B 的参数范围；（2）求 A∩B=∅ 的参数范围。",
    "options": [],
    "correctAnswer": "（1）−1≤a≤1；（2）a<−3 或 a>3。",
    "explanation": "（1）A 的长度恒为 2，不为空集。要整个 A 在 B 内，左端满足 a≥−1，右端满足 a+2≤3。\n第二个条件给出 a≤1，与第一个取交集，得到 a∈[−1,1]。\n两个边界 a=−1、1 均只使端点重合，仍被包含。\n（2）两个闭区间不相交，要么 A 完全在 B 左侧，要么完全在右侧。\n左侧情形要求 a+2<−1，即 a<−3；右侧情形要求 a>3。\n因此 a∈(−∞,−3)∪(3,+∞)。\na=−3 时共有点 −1，a=3 时共有点 3，均不得计入空交集。",
    "checkpoints": [
      "写出包含的两个端点条件并取交集",
      "将空交集分成左右互斥位置",
      "单独核对闭端点接触情形"
    ],
    "hint": "画出两个闭区间，先判断位置再列条件。"
  },
  {
    "id": "g3-review-sets-logic-written-02",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "绝对值区间与双向蕴含",
    "question": "设 r≥0，p：(x−1)(x−3)≤0，q：|x−2|≤r。（1）分别求 p⇒q、q⇒p 对 r 的要求；（2）求 p、q 等价时的 r。",
    "options": [],
    "correctAnswer": "p⇒q 要求 r≥1；q⇒p 要求 0≤r≤1；等价时 r=1。",
    "explanation": "（1）p 的解集是 [1,3]，q 的解集是 [2−r,2+r]，r=0 时 q 为单点 {2}。\np⇒q 等价于 [1,3]⊆[2−r,2+r]。\n列 2−r≤1、2+r≥3，两条件均给出 r≥1。\nq⇒p 等价于 [2−r,2+r]⊆[1,3]。\n列 2−r≥1、2+r≤3，得 r≤1，再与已知 r≥0 合并得 0≤r≤1。\n（2）两方向同时成立，取交集只有 r=1。\n此时 q 的解集恰为 [1,3]，与 p 相同，回代验证完成。",
    "checkpoints": [
      "分别写出两个非空解集",
      "用正确的包含方向列充分必要条件",
      "取双向条件交集并回代"
    ],
    "hint": "蕴含方向对应解集包含方向；不要把两个方向写反。"
  },
  {
    "id": "g3-review-sets-logic-written-03",
    "topic": "高三集合与逻辑·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "量词与最值的联系",
    "question": "f(x)=x²−2x+a，x∈[1,3]。（1）求“∀x∈[1,3]，f(x)≥0”成立的 a；（2）写出该命题的否定并求其成立的 a。",
    "options": [],
    "correctAnswer": "（1）a≥1；（2）∃x∈[1,3]，f(x)<0，成立条件 a<1。",
    "explanation": "（1）配方 f(x)=(x−1)²+a−1。\n在 [1,3] 上，(x−1)² 的最小值为 0，在 x=1 取得，所以 f 的最小值为 a−1。\n全区间非负当且仅当最小值 a−1≥0，即 a≥1。\n当 a=1 时 f(1)=0，原命题允许取等，边界应保留。\n（2）否定全称命题得到“存在 x∈[1,3]，使 f(x)<0”，不能只把 ≥ 改成 ≤。\n存在负值当且仅当可取得的最小值 a−1<0，所以 a<1。\n任取 a<1，用 x=1 即有 f(1)=a−1<0，给出存在性的具体见证。两参数范围互为补集。",
    "checkpoints": [
      "配方并在给定闭区间取得最小值",
      "把全称条件化为最小值条件",
      "正确否定量词及不等号并给出见证"
    ],
    "hint": "全称非负看最小值；否定命题必须变为存在严格负值。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-01",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "对数与分母根式",
    "question": "f(x)=ln(x²−1)/√(3−x) 的定义域是：",
    "options": [
      {
        "key": "A",
        "text": "(−∞,−1]∪[1,3)"
      },
      {
        "key": "B",
        "text": "(1,3]"
      },
      {
        "key": "C",
        "text": "(−∞,−1)∪(1,3)"
      },
      {
        "key": "D",
        "text": "(−1,3)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 对数要求 x²−1>0，得 x<−1 或 x>1。\n② 根式位于分母，要求 3−x>0；取交集为 (−∞,−1)∪(1,3)。\n故选 C。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-02",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "闭区间最值",
    "question": "f(x)=x³−3x 在 [−2,1] 上的最大值为：",
    "options": [
      {
        "key": "A",
        "text": "−2"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① f′=3(x²−1)，驻点 −1、1 均在区间内或端点。\n② 比较 f(−2)=−2、f(−1)=2、f(1)=−2，最大值 2。\n故选 D。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-03",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "三根的参数范围",
    "question": "方程 x³−3x=m 恰有三个不同实根时，m 的范围为：",
    "options": [
      {
        "key": "A",
        "text": "−2<m<2"
      },
      {
        "key": "B",
        "text": "−2≤m≤2"
      },
      {
        "key": "C",
        "text": "m>2"
      },
      {
        "key": "D",
        "text": "m<−2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 曲线 y=x³−3x 的极大值为 2，极小值为 −2。\n② 水平线只有严格介于两极值之间才有三个不同交点；边界只有两个不同根。\n故选 A。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-04",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "对数函数的全域最值",
    "question": "ln x−x（x>0）的最大值为：",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "−1"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "不存在"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 导数 1/x−1 在 (0,1) 为正、(1,+∞) 为负。\n② 在 x=1 取得全域最大值 ln1−1=−1。\n故选 B。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-05",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "提升",
    "title": "导数为零的边界",
    "question": "x³−3ax 在 R 上严格递增的充要条件是：",
    "options": [
      {
        "key": "A",
        "text": "a<0"
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
        "text": "a>0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 导数 3(x²−a)。a≤0 时非负；a=0 仅在 0 处为零，x³ 仍严格递增。\n② a>0 时原点附近导数为负，不能全域递增。\n故选 C。"
  },
  {
    "id": "g3-review-functions-derivatives-choice-06",
    "topic": "高三函数与导数·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "函数值与切线斜率",
    "question": "曲线 y=x ln x−x 在 x=1 处的切线是：",
    "options": [
      {
        "key": "A",
        "text": "y=x−1"
      },
      {
        "key": "B",
        "text": "y=0"
      },
      {
        "key": "C",
        "text": "y=−x"
      },
      {
        "key": "D",
        "text": "y=−1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 函数在 1 处的值为 −1。\n② 导数为 ln x，切线斜率在 1 处为 0，所以是水平直线 y=−1。\n故选 D。"
  },
  {
    "id": "g3-review-functions-derivatives-fill-01",
    "topic": "高三函数与导数·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "分离参数的上界",
    "question": "填 ln x/x（x>0）的最大值。",
    "options": [],
    "correctAnswer": "1/e",
    "acceptedAnswers": [
      "1/e"
    ],
    "explanation": "① 导数为 (1−ln x)/x²，在 x=e 两侧先正后负。\n② 最大值为 ln e/e=1/e，在 x=e 取得。"
  },
  {
    "id": "g3-review-functions-derivatives-fill-02",
    "topic": "高三函数与导数·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "指数换元的最值",
    "question": "填 2ˣ+2⁻ˣ（x∈R）的最小值。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① 令 t=2ˣ>0，原式为 t+1/t。\n② 基本不等式得 t+1/t≥2，t=1 即 x=0 时取等。"
  },
  {
    "id": "g3-review-functions-derivatives-fill-03",
    "topic": "高三函数与导数·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "极值的差",
    "question": "f(x)=x³−3x 的极大值与极小值之差为多少？",
    "options": [],
    "correctAnswer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "explanation": "① 驻点为 −1、1，导数分别由正变负、由负变正。\n② 极大值 f(−1)=2，极小值 f(1)=−2，差为 4。"
  },
  {
    "id": "g3-review-functions-derivatives-written-01",
    "topic": "高三函数与导数·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "根式函数的值域与取点",
    "question": "f(x)=√(x−1)+√(5−x)。（1）求定义域；（2）求值域及全部最值取点。",
    "options": [],
    "correctAnswer": "定义域 [1,5]；值域 [2,2√2]；最小值在 x=1、5，最大值在 x=3。",
    "explanation": "（1）两个被开方数须同时非负，x≥1 且 x≤5，定义域为 [1,5]。\n（2）定义域内 f≥0，可以先求平方：f²=4+2√((x−1)(5−x))。\n乘积 (x−1)(5−x)=4−(x−3)²，在 [1,5] 上的范围为 [0,4]。\n因此根式的范围为 [0,2]，f² 的范围为 [4,8]。\n由 f 非负，得 2≤f≤√8=2√2。\nx=1 或 5 时乘积为 0，取得最小值 2；x=3 时乘积为 4，取得最大值 2√2。\nf 在闭区间连续，所以两端最值之间均可取得，值域确为 [2,2√2]，而非只给上下界。",
    "checkpoints": [
      "对两个根式同时列定义域条件",
      "平方与配方求出完整范围",
      "回到非负函数并列全取点、说明连续性"
    ],
    "hint": "先平方，再把两根式的乘积配方。"
  },
  {
    "id": "g3-review-functions-derivatives-written-02",
    "topic": "高三函数与导数·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "参数、单调与零点",
    "question": "fₐ(x)=x³−3ax。（1）讨论单调性和极值；（2）讨论 fₐ(x)=0 的不同实根数。",
    "options": [],
    "correctAnswer": "a≤0 时全域递增且无极值；a>0 时极值为 ±2a√a；零点数 a>0 为 3，否则为 1。",
    "explanation": "（1）fₐ′=3(x²−a)。a<0 时处处为正；a=0 时 f=x³ 仍严格递增，虽然在 0 处导数为零，但不变号。\na>0 时导数零点为 −√a、√a，依次分成正、负、正三段。\n所以在 (−∞,−√a]、[√a,+∞) 递增，在 [−√a,√a] 递减。\n在 −√a 处取得极大值 (−√a)³−3a(−√a)=2a√a；在 √a 处取得极小值 −2a√a。\na≤0 时导数不变号，没有极值。\n（2）零点方程分解为 x(x²−3a)=0。\na>0 时零点为 0、±√(3a)，三个不同实根。\na=0 时只有 x=0；a<0 时 x²=3a 无实解，也只有 x=0。注意参数取零的重根只计一次。",
    "checkpoints": [
      "分类导数符号，包含 a=0 边界",
      "由变号求极值并代入",
      "因式分解并按不同实根计数"
    ],
    "hint": "导数控制单调，函数本身的因式分解控制零点，两者不要混用。"
  },
  {
    "id": "g3-review-functions-derivatives-written-03",
    "topic": "高三函数与导数·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "恒成立与方程根数",
    "question": "x>0，实数 a。（1）求 ln x≤ax 对所有 x>0 成立的 a；（2）按 a 讨论方程 ln x=ax 的不同正根数。",
    "options": [],
    "correctAnswer": "恒成立条件 a≥1/e；根数依次为 a≤0 时 1，0<a<1/e 时 2，a=1/e 时 1，a>1/e 时 0。",
    "explanation": "（1）因 x>0，可除以 x，条件变为 a≥g(x)=ln x/x 对所有 x>0 成立。\ng′=(1−ln x)/x²，所以在 (0,e] 递增，在 [e,+∞) 递减，最大值为 1/e。因此 a≥1/e，且边界在 x=e 取等。\n（2）g(x) 在 (0,1) 从 −∞ 严格增到 0，在 x=1 取 0；在 (1,+∞) 为正，右支趋向 0 但不取 0。\na<0 时仅左段有一次交点；a=0 时只有 x=1。\n0<a<1/e 时在 (1,e)、(e,+∞) 各交一次，所以有两个不同正根。\na=1/e 时只有最大点 x=e；a>1/e 时超过最大值，没有根。\n每个存在的交点由连续性和严格单调性保证且唯一。不能把右支趋向 0 当作 a=0 时的另一个根。",
    "checkpoints": [
      "先利用正数 x 分离参数并求最大值",
      "说明各分支的范围、端点和极限",
      "分清 a<0、a=0、两根区间与临界值"
    ],
    "hint": "把不等式和方程都转化为 g(x)=ln x/x 与水平线。"
  },
  {
    "id": "g3-review-trigonometry-choice-01",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "辅助角的振幅",
    "question": "√3sinx+cosx 可写成：",
    "options": [
      {
        "key": "A",
        "text": "2sin(x+π/3)"
      },
      {
        "key": "B",
        "text": "sin(x+π/6)"
      },
      {
        "key": "C",
        "text": "2cos(x+π/6)"
      },
      {
        "key": "D",
        "text": "2sin(x+π/6)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 展开 2sin(x+π/6)=2sinx×√3/2+2cosx×1/2。\n② 恰好得到原式；振幅为 2，两个系数都应匹配。\n故选 D。"
  },
  {
    "id": "g3-review-trigonometry-choice-02",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "复合角周期",
    "question": "sin(2x−π/3) 的最小正周期为：",
    "options": [
      {
        "key": "A",
        "text": "π"
      },
      {
        "key": "B",
        "text": "2π"
      },
      {
        "key": "C",
        "text": "π/2"
      },
      {
        "key": "D",
        "text": "4π"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 自变量增加 T 时，内部角增加 2T。\n② 最小正变化量为 2π，所以 2T=2π，T=π。\n故选 A。"
  },
  {
    "id": "g3-review-trigonometry-choice-03",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "规定区间的根数",
    "question": "sinx=1/2 在 [0,2π] 内有几个不同解？",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 基本解为 x=π/6、5π/6，再加 2kπ。\n② 在题给区间仅这两值，端点 0、2π 均不满足。\n故选 B。"
  },
  {
    "id": "g3-review-trigonometry-choice-04",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "余弦定理的对边",
    "question": "三角形中 b=3、c=5、A=60°，a 为 A 对边，则 a 为：",
    "options": [
      {
        "key": "A",
        "text": "√34"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "√19"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① a²=b²+c²−2bc cosA=9+25−30×1/2=19。\n② 边长为正，a=√19。\n故选 C。"
  },
  {
    "id": "g3-review-trigonometry-choice-05",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "钝角候选的排除",
    "question": "△ABC 中 A=60°、a=√3、b=1，则 B 为：",
    "options": [
      {
        "key": "A",
        "text": "150°"
      },
      {
        "key": "B",
        "text": "60°"
      },
      {
        "key": "C",
        "text": "有两种可能"
      },
      {
        "key": "D",
        "text": "30°"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 正弦定理给出 sinB=b sinA/a=1/2，候选为 30°、150°。\n② 150° 与 A 相加超过 180°，无效，所以仅 30°。\n故选 D。"
  },
  {
    "id": "g3-review-trigonometry-choice-06",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "三边与面积",
    "question": "边长为 3、4、5 的三角形面积为：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "15/2"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 3²+4²=5²，所以 3、4 为直角边。\n② 面积为 (1/2)×3×4=6。\n故选 A。"
  },
  {
    "id": "g3-review-trigonometry-fill-01",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "和角根式",
    "question": "填 sin75° 的精确值。",
    "options": [],
    "correctAnswer": "(√6+√2)/4",
    "acceptedAnswers": [
      "(√6+√2)/4",
      "(sqrt(6)+sqrt(2))/4"
    ],
    "explanation": "① 75°=45°+30°，用两角和正弦公式。\n② sin75°=(√2/2)(√3/2)+(√2/2)(1/2)=(√6+√2)/4。"
  },
  {
    "id": "g3-review-trigonometry-fill-02",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "二倍角上界",
    "question": "填 sinx cosx（x∈R）的最大值。",
    "options": [],
    "correctAnswer": "1/2",
    "acceptedAnswers": [
      "1/2",
      "0.5"
    ],
    "explanation": "① sinx cosx=(1/2)sin2x≤1/2。\n② x=π/4 时 sin2x=1，可以取得上界。"
  },
  {
    "id": "g3-review-trigonometry-fill-03",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "锐角的正弦符号",
    "question": "α 为锐角，cosα=3/5，填 sin2α。",
    "options": [],
    "correctAnswer": "24/25",
    "acceptedAnswers": [
      "24/25",
      "0.96"
    ],
    "explanation": "① 锐角正弦为正，sinα=√(1−9/25)=4/5。\n② sin2α=2×4/5×3/5=24/25。"
  },
  {
    "id": "g3-review-trigonometry-written-01",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "恒等变换与区间最值",
    "question": "f(x)=2sinx cosx+√3cos2x，x∈[0,π/2]。（1）化为单个正弦函数；（2）求值域与全部最值取点。",
    "options": [],
    "correctAnswer": "f=2sin(2x+π/3)；值域 [−√3,2]；最大在 π/12，最小在 π/2。",
    "explanation": "（1）二倍角公式把 2sinx cosx 化成 sin2x。\n2sin(2x+π/3)=2sin2x×1/2+2cos2x×√3/2，等于 sin2x+√3cos2x。\n所以 f(x)=2sin(2x+π/3)。\n（2）令 t=2x+π/3，则 t∈[π/3,4π/3]。\n正弦在 [π/3,π/2] 递增，在 [π/2,4π/3] 递减，最大值 1 在 t=π/2 取得。\n比较两端 sin(π/3)=√3/2、sin(4π/3)=−√3/2，最小值为 −√3/2。\n乘 2 得最大值 2、最小值 −√3。反解 t，最大时 x=π/12，最小时 x=π/2，均在原区间。\n函数连续，故值域为 [−√3,2]。不能不看区间就写 [−2,2]。",
    "checkpoints": [
      "完整展开辅助角以核对系数",
      "把 x 区间准确映成新角区间",
      "比较驻点和端点并反解取点"
    ],
    "hint": "注意复合角区间不恰好覆盖一个完整周期。"
  },
  {
    "id": "g3-review-trigonometry-written-02",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "SSA 两解对应边",
    "question": "△ABC 中 A=30°、a=1、b=√2。（1）求全部 B、C；（2）分别求 c，并保持对应关系。",
    "options": [],
    "correctAnswer": "B=45°、C=105°，c=(√6+√2)/2；或 B=135°、C=15°，c=(√6−√2)/2。",
    "explanation": "（1）正弦定理得 sinB=b sinA/a=√2/2。\nB∈(0,180°)，候选为 45°、135°。\nA+B 分别为 75°、165°，均小于 180°，所以两解均为非退化三角形。\n对应 C 分别是 105°、15°。\n（2）公共正弦定理比值 a/sinA=1/(1/2)=2，因此 c=2sinC。\nC=105° 时，sin105°=(√6+√2)/4，故 c=(√6+√2)/2。\nC=15° 时，sin15°=(√6−√2)/4，故 c=(√6−√2)/2>0。\n两个 c 必须分别与对应角配对，不能把一个角解与另一边解混成一组三角形。",
    "checkpoints": [
      "用正弦定理并列出所有角候选",
      "核对角和并求对应第三角",
      "逐一求第三边并保持配对"
    ],
    "hint": "反三角函数只给主值时会漏掉钝角候选。"
  },
  {
    "id": "g3-review-trigonometry-written-03",
    "topic": "高三三角函数与解三角形·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "面积最值与双角解",
    "question": "固定三角形两边 b=2、c=3，夹角 A∈(0,π)。（1）求面积最大值及此时第三边；（2）若面积为 3√3/2，求全部 A 与 a。",
    "options": [],
    "correctAnswer": "最大面积 3，A=π/2、a=√13；第二问 A=π/3、a=√7，或 A=2π/3、a=√19。",
    "explanation": "（1）面积 S=(1/2)bc sinA=3sinA≤3。\nA=π/2 时可取等，属于允许区间。余弦定理给出 a²=4+9−12cosA=13，所以 a=√13。\n（2）由 3sinA=3√3/2，得 sinA=√3/2。\nA∈(0,π)，所有解为 π/3、2π/3，均可构成非退化三角形。\nA=π/3 时 cosA=1/2，a²=13−6=7，所以 a=√7。\nA=2π/3 时 cosA=−1/2，a²=13+6=19，所以 a=√19。\n两组角和边分别对应；面积相同不代表三角形形状相同。",
    "checkpoints": [
      "利用正弦上界并检查取等角",
      "按允许内角范围列全正弦方程解",
      "对每个角用余弦定理求边长"
    ],
    "hint": "内角正弦相同可以对应锐角和钝角，第三边不必相同。"
  },
  {
    "id": "g3-review-plane-vectors-choice-01",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "垂直的坐标条件",
    "question": "a=(1,2)、b=(2,−1)，a 与 b 的关系为：",
    "options": [
      {
        "key": "A",
        "text": "垂直"
      },
      {
        "key": "B",
        "text": "同向共线"
      },
      {
        "key": "C",
        "text": "反向共线"
      },
      {
        "key": "D",
        "text": "夹角 60°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① a·b=1×2+2×(−1)=0。\n② 两向量均非零，数量积为零即垂直。\n故选 A。"
  },
  {
    "id": "g3-review-plane-vectors-choice-02",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "模的非负性",
    "question": "向量 (3,4) 的模为：",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "−5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 模平方为 3²+4²=25。\n② 模取非负平方根，得 5。\n故选 B。"
  },
  {
    "id": "g3-review-plane-vectors-choice-03",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "共线参数",
    "question": "向量 (1,t) 与 (2,6) 共线，t 为：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "−3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 二维共线的行列式条件为 1×6−2t=0。\n② 解得 t=3，两向量均非零。\n故选 C。"
  },
  {
    "id": "g3-review-plane-vectors-choice-04",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "数量投影",
    "question": "a=(3,4) 在单位向量 e=(1,0) 方向上的数量投影为：",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "3/5"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 数量投影为 a·e，因为 |e|=1。\n② a·e=3，注意它与夹角余弦 3/5 不同。\n故选 D。"
  },
  {
    "id": "g3-review-plane-vectors-choice-05",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "位移与距离",
    "question": "A(1,−2)、B(4,2)，线段 AB 长为：",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "√13"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① AB=(4−1,2−(−2))=(3,4)。\n② 长度为 √(3²+4²)=5。\n故选 A。"
  },
  {
    "id": "g3-review-plane-vectors-choice-06",
    "topic": "高三平面向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "夹角计算",
    "question": "a=(1,1)、b=(1,−1)，夹角为：",
    "options": [
      {
        "key": "A",
        "text": "0°"
      },
      {
        "key": "B",
        "text": "90°"
      },
      {
        "key": "C",
        "text": "45°"
      },
      {
        "key": "D",
        "text": "180°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 数量积 1−1=0，两模都是 √2，分母不为零。\n② cosθ=0，θ∈[0°,180°]，所以 θ=90°。\n故选 B。"
  },
  {
    "id": "g3-review-plane-vectors-fill-01",
    "topic": "高三平面向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "正交与平方展开",
    "question": "a⊥b，|a|=3、|b|=4，填 |a+b|。",
    "options": [],
    "correctAnswer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "explanation": "① |a+b|²=|a|²+2a·b+|b|²=9+0+16=25。\n② 模非负，得到 |a+b|=5。"
  },
  {
    "id": "g3-review-plane-vectors-fill-02",
    "topic": "高三平面向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "内分点参数",
    "question": "A(0,0)、B(4,6)，P=(4t,6t) 在线段 AB 内，AP:PB=1:2，填 t。",
    "options": [],
    "correctAnswer": "1/3",
    "acceptedAnswers": [
      "1/3"
    ],
    "explanation": "① AP/AB=t，PB/AB=1−t，0<t<1。\n② t/(1−t)=1/2，解得 3t=1，t=1/3。"
  },
  {
    "id": "g3-review-plane-vectors-fill-03",
    "topic": "高三平面向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "线段上的最短模",
    "question": "P=(t,1−t)，0≤t≤1，O 为原点，填 |OP| 最小值。",
    "options": [],
    "correctAnswer": "√2/2",
    "acceptedAnswers": [
      "√2/2",
      "sqrt(2)/2",
      "1/sqrt(2)",
      "1/√2"
    ],
    "explanation": "① |OP|²=t²+(1−t)²=2(t−1/2)²+1/2。\n② 允许的 t=1/2 时平方最小为 1/2，开根得 √2/2。"
  },
  {
    "id": "g3-review-plane-vectors-written-01",
    "topic": "高三平面向量·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "垂足与面积双重核验",
    "question": "A(0,0)、B(4,0)、C(0,3)，H 为 A 到直线 BC 的垂足。（1）求 H；（2）求 AH 和三角形 ABC 面积，用两种底高核对。",
    "options": [],
    "correctAnswer": "H=(36/25,48/25)，AH=12/5，面积为 6。",
    "explanation": "（1）BC=(−4,3)，设 H=B+tBC=(4−4t,3t)，t∈R。\nAH=(4−4t,3t)，垂直要求 AH·BC=−16+16t+9t=−16+25t=0。\n所以 t=16/25，H=(36/25,48/25)。t∈(0,1)，垂足恰在线段内。\n（2）AH=√((36/25)²+(48/25)²)=60/25=12/5。\nBC=√(16+9)=5，以 BC 为底，面积 (1/2)×5×12/5=6。\n以 AB 为底，AB=4，C 到 x 轴距离为 3，面积 (1/2)×4×3=6。\n两个结果一致；数量积条件、坐标范围和底高计算相互核验。",
    "checkpoints": [
      "参数化垂足并用数量积解参数",
      "代回点位并开根求实际距离",
      "用两种底高计算面积并核对"
    ],
    "hint": "垂足先允许在整条直线上，算完再判断是否落在线段内。"
  },
  {
    "id": "g3-review-plane-vectors-written-02",
    "topic": "高三平面向量·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "数量积与参数最值",
    "question": "|a|=2，|b|=3，a·b=3，u=a+tb，t∈R。（1）求 a、b 夹角；（2）求 |u| 最小值，并证明此时 u⊥b。",
    "options": [],
    "correctAnswer": "夹角 60°；t=−1/3 时最小模 √3，且 u⊥b。",
    "explanation": "（1）两模非零，cosθ=(a·b)/(|a||b|)=3/(2×3)=1/2，θ=60°。\n（2）|u|²=|a|²+2t(a·b)+t²|b|²=4+6t+9t²。\n配方得 9(t+1/3)²+3≥3，t=−1/3 可以取到。\n因此最小模为 √3，而不是最小平方 3。\n此时 u·b=a·b+t|b|²=3−(1/3)×9=0。\n因为 |u|=√3>0 且 |b|=3>0，可据数量积为零判断 u⊥b。\n这也说明参数最短位置对应于正交条件；若 t 另有限制，需重新核对该值是否允许。",
    "checkpoints": [
      "由数量积计算夹角并限定范围",
      "展开配方后从平方回到模",
      "代回正交条件并核对非零"
    ],
    "hint": "展开模平方时交叉项是 2t(a·b)。"
  },
  {
    "id": "g3-review-plane-vectors-written-03",
    "topic": "高三平面向量·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "有范围的最值与不等式",
    "question": "P=(t,2−t)，t∈[0,3]，O 为原点。（1）求 |OP| 的最小值、最大值及取点；（2）求 |OP|≤2 的全部 t。",
    "options": [],
    "correctAnswer": "最小 √2 在 t=1，最大 √10 在 t=3；第二问 t∈[0,2]。",
    "explanation": "（1）|OP|²=t²+(2−t)²=2(t−1)²+2。\n配方中心 t=1 在允许区间内，最小平方为 2，最小长度 √2，点 P=(1,1)。\n闭区间最大平方值应比较端点，t=0 时平方为 4，t=3 时平方为 10。\n所以最大长度 √10，在 t=3、P=(3,−1) 取得。\n（2）两边非负，|OP|≤2 等价于 |OP|²≤4。\n由 2(t−1)²+2≤4 得 (t−1)²≤1，即 0≤t≤2。\n与原允许区间 [0,3] 取交集仍为 [0,2]；两端对应距离 2，均取等。",
    "checkpoints": [
      "在给定区间检查配方中心与端点",
      "给出长度而非平方以及具体点位",
      "等价平方解不等式并与原范围取交集"
    ],
    "hint": "开口向上二次式在闭区间求最大值必须比较两个端点。"
  },
  {
    "id": "g3-review-sequences-choice-01",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "等差通项",
    "question": "等差数列 a₁=2，公差 3，a₅ 为：",
    "options": [
      {
        "key": "A",
        "text": "17"
      },
      {
        "key": "B",
        "text": "14"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① aₙ=a₁+(n−1)d。\n② a₅=2+4×3=14，公差只加四次。\n故选 B。"
  },
  {
    "id": "g3-review-sequences-choice-02",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "等比前项和",
    "question": "等比数列 a₁=3，q=2，前 4 项和为：",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "48"
      },
      {
        "key": "C",
        "text": "45"
      },
      {
        "key": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 前四项为 3、6、12、24。\n② 相加得 45，也等于 3(2⁴−1)/(2−1)。\n故选 C。"
  },
  {
    "id": "g3-review-sequences-choice-03",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "通项要单独检查首项",
    "question": "数列前 n 项和 Sₙ=n²+n，则 aₙ 为：",
    "options": [
      {
        "key": "A",
        "text": "2n+1"
      },
      {
        "key": "B",
        "text": "n+1"
      },
      {
        "key": "C",
        "text": "n²"
      },
      {
        "key": "D",
        "text": "2n"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① n≥2 时 aₙ=Sₙ−Sₙ₋₁=n²+n−[(n−1)²+n−1]=2n。\n② n=1 时 a₁=S₁=2，也符合 2n，故通式对所有正整数成立。\n故选 D。"
  },
  {
    "id": "g3-review-sequences-choice-04",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "正项等比中项",
    "question": "正项等比数列 a₂=4、a₄=16，则 a₃ 为：",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "−8"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① a₃²=a₂a₄=64。\n② 因各项为正，取 a₃=8，不保留负根。\n故选 A。"
  },
  {
    "id": "g3-review-sequences-choice-05",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "裂项求和",
    "question": "Σₖ₌₁ⁿ 1/[k(k+1)] 等于：",
    "options": [
      {
        "key": "A",
        "text": "1/(n+1)"
      },
      {
        "key": "B",
        "text": "n/(n+1)"
      },
      {
        "key": "C",
        "text": "n/(n−1)"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 每项为 1/k−1/(k+1)。\n② 相加中间项抵消，留下 1−1/(n+1)=n/(n+1)。\n故选 B。"
  },
  {
    "id": "g3-review-sequences-choice-06",
    "topic": "高三数列·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "交错项配对",
    "question": "数列 aₙ=(−1)ⁿ 的前 20 项和为：",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "−20"
      },
      {
        "key": "C",
        "text": "0"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 每两项依次为 −1、1，和为 0。\n② 20 项恰有 10 对，因此总和 0。\n故选 C。"
  },
  {
    "id": "g3-review-sequences-fill-01",
    "topic": "高三数列·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "两项求公差",
    "question": "等差数列 a₃=8、a₇=20，填公差 d。",
    "options": [],
    "correctAnswer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "explanation": "① a₇−a₃=(7−3)d=4d。\n② 20−8=12，所以 d=3。"
  },
  {
    "id": "g3-review-sequences-fill-02",
    "topic": "高三数列·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "负公比的符号",
    "question": "等比数列 a₁=2，q=−2，填 a₄。",
    "options": [],
    "correctAnswer": "−16",
    "acceptedAnswers": [
      "−16",
      "-16"
    ],
    "explanation": "① a₄=a₁q³=2×(−2)³。\n② 指数 3 为奇数，结果为 −16。"
  },
  {
    "id": "g3-review-sequences-fill-03",
    "topic": "高三数列·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "带次数的等比求和",
    "question": "填 Σₖ₌₁¹⁰ k·2ᵏ。",
    "options": [],
    "correctAnswer": "18434",
    "acceptedAnswers": [
      "18434"
    ],
    "explanation": "① 设 S=2+2×2²+…+10×2¹⁰；2S=2²+2×2³+…+10×2¹¹。\n② 相减 2S−S=10×2¹¹−(2+2²+…+2¹⁰)。\n③ 等比和为 2¹¹−2，因此 S=9×2¹¹+2=18434。"
  },
  {
    "id": "g3-review-sequences-written-01",
    "topic": "高三数列·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "由和求项再裂项",
    "question": "Sₙ=3n²+2n，bₙ=1/(aₙaₙ₊₁)。（1）求 aₙ；（2）求 b₁+…+bₙ，并给出严格上界。",
    "options": [],
    "correctAnswer": "aₙ=6n−1；和为 n/[5(6n+5)]，严格小于 1/30。",
    "explanation": "（1）n≥2 时 aₙ=Sₙ−Sₙ₋₁=3n²+2n−[3(n−1)²+2(n−1)]=6n−1。\nn=1 时 a₁=S₁=5，与通式相同，故对所有 n≥1 成立。\n（2）aₙ₊₁=6n+5，bₙ=1/[(6n−1)(6n+5)]。\n两分母相差 6，裂项为 bₙ=(1/6)[1/(6n−1)−1/(6n+5)]。\n累加时相邻项抵消，得和为 (1/6)[1/5−1/(6n+5)]。\n通分化简为 n/[5(6n+5)]。n=1 时为 1/55，可回代首项核验。\n因为 n 为正整数，1/[6(6n+5)]>0，所以和严格小于 1/30，该上界不能在有限 n 取得。",
    "checkpoints": [
      "用差分求通项并单独检查首项",
      "保留跨度系数完成裂项",
      "准确抵消首尾并解释严格上界"
    ],
    "hint": "分母差为 6，裂项前必须有 1/6。"
  },
  {
    "id": "g3-review-sequences-written-02",
    "topic": "高三数列·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "常数平移的递推",
    "question": "a₁=1，aₙ₊₁=2aₙ+3。（1）求通项；（2）求前 n 项和并核对 n=1。",
    "options": [],
    "correctAnswer": "aₙ=2ⁿ⁺¹−3；Sₙ=2ⁿ⁺²−4−3n。",
    "explanation": "（1）希望把常数项并入平移。两边加 3，得到 aₙ₊₁+3=2(aₙ+3)。\n令 bₙ=aₙ+3，则 b₁=4，且 bₙ₊₁=2bₙ，是公比 2 的等比数列。\n所以 bₙ=4×2ⁿ⁻¹=2ⁿ⁺¹，返回原数列 aₙ=2ⁿ⁺¹−3。\n代入 n=1 得 4−3=1，代入递推也有 2(2ⁿ⁺¹−3)+3=2ⁿ⁺²−3。\n（2）Sₙ=Σₖ₌₁ⁿ 2ᵏ⁺¹−3n。\n等比部分首项为 4、项数 n、公比 2，和为 4(2ⁿ−1)=2ⁿ⁺²−4。\n因此 Sₙ=2ⁿ⁺²−4−3n；n=1 时为 8−4−3=1，与首项相符。",
    "checkpoints": [
      "选择平移量并建立真正的等比递推",
      "从辅助数列返回原数列并核验",
      "分别求指数部分和常数部分的和"
    ],
    "hint": "寻找满足 c=2c−3 的平移量，使 aₙ+c 成为等比数列。"
  },
  {
    "id": "g3-review-sequences-written-03",
    "topic": "高三数列·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "零项导致最大和并列",
    "question": "aₙ=n(11−n)，n 为正整数。（1）求 Sₙ 并找出最大值与全部 n；（2）求 Sₙ>0 的所有正整数 n。",
    "options": [],
    "correctAnswer": "Sₙ=n(n+1)(16−n)/3；最大值 220，在 n=10、11；正和对应 n=1,…,15。",
    "explanation": "（1）aₖ=11k−k²，故 Sₙ=11n(n+1)/2−n(n+1)(2n+1)/6。\n通分得 Sₙ=n(n+1)(16−n)/3。\n先看每次累加的增量：aₙ 在 n=1,…,10 为正，a₁₁=0，n≥12 为负。\n因此 Sₙ 增加至 n=10，n=11 与前一项和相同，之后严格下降。\nS₁₀=10×11×6/3=220，S₁₁=11×12×5/3=220，所以最大值在两个相邻项号取得。\n（2）n(n+1)>0，Sₙ 的符号由 16−n 决定。\n故 Sₙ>0 等价于 n<16，正整数解为 1 到 15。n=16 时和为零，必须排除。",
    "checkpoints": [
      "用常见和公式得到前项和",
      "由增量符号找到全部最大和项号",
      "用因式符号筛选正整数并检查零边界"
    ],
    "hint": "项为零时，前后两个部分和相等，最大值可能并列。"
  },
  {
    "id": "g3-review-solid-geometry-choice-01",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "母线与侧面积",
    "question": "圆锥底面半径 3、高 4，侧面积为：",
    "options": [
      {
        "key": "A",
        "text": "12π"
      },
      {
        "key": "B",
        "text": "24π"
      },
      {
        "key": "C",
        "text": "15π"
      },
      {
        "key": "D",
        "text": "9π"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 母线长 l=√(3²+4²)=5。\n② 侧面积 πrl=15π；若求总面积才再加底面积。\n故选 C。"
  },
  {
    "id": "g3-review-solid-geometry-choice-02",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "正方体空间对角线",
    "question": "棱长为 2 的正方体，体对角线长为：",
    "options": [
      {
        "key": "A",
        "text": "2√2"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "√6"
      },
      {
        "key": "D",
        "text": "2√3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 三维坐标差可取 (2,2,2)。\n② 长度 √(4+4+4)=2√3。\n故选 D。"
  },
  {
    "id": "g3-review-solid-geometry-choice-03",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "线面角用正弦",
    "question": "直线方向向量 u=(1,1,1)，平面法向量 n=(0,0,1)，线面角 θ 的正弦为：",
    "options": [
      {
        "key": "A",
        "text": "√3/3"
      },
      {
        "key": "B",
        "text": "1/3"
      },
      {
        "key": "C",
        "text": "√2/2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① sinθ=|u·n|/(|u||n|)。\n② 数量积为 1，两模为 √3、1，得 1/√3=√3/3。\n故选 A。"
  },
  {
    "id": "g3-review-solid-geometry-choice-04",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "平面所成锐角",
    "question": "两平面法向量为 (1,0,1)、(0,0,1)，两平面所成锐角为：",
    "options": [
      {
        "key": "A",
        "text": "90°"
      },
      {
        "key": "B",
        "text": "45°"
      },
      {
        "key": "C",
        "text": "60°"
      },
      {
        "key": "D",
        "text": "30°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 两法向量夹角余弦为 1/(√2×1)=√2/2。\n② 法向量夹角是锐角 45°，即两平面所成锐角。\n故选 B。"
  },
  {
    "id": "g3-review-solid-geometry-choice-05",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "点面距离",
    "question": "P(1,2,3) 到平面 x+2y+2z−4=0 的距离是：",
    "options": [
      {
        "key": "A",
        "text": "11/3"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "7/3"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 代入分子 |1+4+6−4|=7。\n② 法向量模为 √(1+4+4)=3，距离为 7/3。\n故选 C。"
  },
  {
    "id": "g3-review-solid-geometry-choice-06",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "三棱锥体积",
    "question": "A(0,0,0)、B(2,0,0)、C(0,2,0)、S(0,0,3)，四面体 SABC 的体积为：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 底面直角三角形面积为 (1/2)×2×2=2，高为 3。\n② 体积 (1/3)×2×3=2。\n故选 D。"
  },
  {
    "id": "g3-review-solid-geometry-fill-01",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "球体积",
    "question": "半径为 2 的球，填体积。",
    "options": [],
    "correctAnswer": "32π/3",
    "acceptedAnswers": [
      "32π/3",
      "32pi/3",
      "(32/3)pi"
    ],
    "explanation": "① 球体积为 (4/3)πr³。\n② 代入 r=2，得到 (4/3)π×8=32π/3。"
  },
  {
    "id": "g3-review-solid-geometry-fill-02",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "平面距离的根式",
    "question": "填原点到平面 x+y+z=1 的距离。",
    "options": [],
    "correctAnswer": "√3/3",
    "acceptedAnswers": [
      "√3/3",
      "sqrt(3)/3",
      "1/sqrt(3)",
      "1/√3"
    ],
    "explanation": "① 分子为 |−1|=1，法向量模为 √3。\n② 距离为 1/√3=√3/3。"
  },
  {
    "id": "g3-review-solid-geometry-fill-03",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "线面角的范围",
    "question": "一条直线与平面成 45°，填线面角的正弦。",
    "options": [],
    "correctAnswer": "√2/2",
    "acceptedAnswers": [
      "√2/2",
      "sqrt(2)/2",
      "1/sqrt(2)",
      "1/√2"
    ],
    "explanation": "① 线面角按 0° 到 90° 取值，这里为给定的 45°。\n② sin45°=√2/2。"
  },
  {
    "id": "g3-review-solid-geometry-written-01",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "法向量、距离与等体积",
    "question": "A(0,0,0)、B(2,0,0)、C(0,2,0)、S(0,0,2)。（1）求平面 SBC 方程和 A 到该面的距离；（2）求 SBC 面积，用它为底复核四面体体积。",
    "options": [],
    "correctAnswer": "平面 x+y+z=2，距离 2√3/3；SBC 面积 2√3，体积 4/3。",
    "explanation": "（1）SB=(2,0,−2)，SC=(0,2,−2)，是两个不共线方向。\nn=(1,1,1) 与两方向数量积均为零，且不为零，可取为平面法向量。\n平面过 S(0,0,2)，方程为 x+y+z−2=0。A 到平面距离 |−2|/√3=2√3/3。\n（2）SB、SC、BC 的长度均为 2√2，因此 SBC 是等边三角形。\n其面积为 (√3/4)(2√2)²=2√3。\n以 SBC 为底、A 为顶点，体积为 (1/3)×2√3×2/√3=4/3。\n以 ABC 为底时面积 2、高 SA=2，体积也是 (1/3)×2×2=4/3。两种计算一致。",
    "checkpoints": [
      "由两个不共线方向核对法向量并求平面",
      "使用规范点面距离公式",
      "正确求侧面面积并以两种底高核对体积"
    ],
    "hint": "法向量须同时垂直两个不共线方向，体积公式始终含 1/3。"
  },
  {
    "id": "g3-review-solid-geometry-written-02",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "动点最短与体积退化",
    "question": "底面 ABCD 是边长 2 的正方形，A 为原点，AB、AD 为 x、y 轴，S=(0,0,3)。P 在线段 BD 上，P=(2−2t,2t,0)，0≤t≤1。（1）求 SP 的最小长度；（2）求四面体 S-APC 体积为 1 时的全部 t、P。",
    "options": [],
    "correctAnswer": "SP 最小 √11，t=1/2；体积为 1 时 t=1/4、3/4，P=(3/2,1/2,0)、(1/2,3/2,0)。",
    "explanation": "（1）SP=(2−2t,2t,−3)，|SP|²=4(1−t)²+4t²+9=8(t−1/2)²+11。\nt=1/2 在 [0,1]，所以最小长度为 √11，P=(1,1,0)。\n（2）C=(2,2,0)。底面三角形 APC 面积为 (1/2)|(2−2t)×2−(2t)×2|=2|1−2t|。\nS 到底面 z=0 的高为 3，所以体积 V=(1/3)×2|1−2t|×3=2|1−2t|。\n令 V=1，得 |1−2t|=1/2，分成 1−2t=1/2 或 −1/2。\n解得 t=1/4 或 3/4，都在 [0,1]。代回 P 分别为 (3/2,1/2,0)、(1/2,3/2,0)。\n两值体积均为 1，且底面不退化。t=1/2 时 P 落在 AC 上，底面面积及体积为零，不能混入第二问。",
    "checkpoints": [
      "模平方配方并检查允许参数",
      "以有向面积的绝对值计算真实底面积",
      "解绝对值方程、回代并排除退化点"
    ],
    "hint": "体积必须非负；P 越过 AC 后行列式变号，应保留绝对值。"
  },
  {
    "id": "g3-review-solid-geometry-written-03",
    "topic": "高三立体几何与空间向量·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "空间位置与定距离",
    "question": "平面 α：x+y+z=2，β：x−y=0，直线 l：(x,y,z)=(t,t,−2t)，t∈R。（1）判断两平面的夹角及 l 与两平面的位置；（2）求 l 上任一点到 α 的距离和垂足坐标。",
    "options": [],
    "correctAnswer": "α⊥β；l∥α 且 l⊂β；距离 2√3/3；垂足 (t+2/3,t+2/3,−2t+2/3)。",
    "explanation": "（1）两个法向量为 n=(1,1,1)、m=(1,−1,0)，数量积为 0，故两平面垂直。\nl 的方向 u=(1,1,−2)，u·n=0，且 l 上点的坐标和恒为 0，不满足 α 的常数 2。\n所以 l 与 α 没有交点且方向平行，l∥α，不能说 l 在 α 内。\nl 上所有点满足 x−y=t−t=0，所以 l 整条包含在 β 内。\n（2）P=(t,t,−2t)，点面距离为 |t+t−2t−2|/√3=2/√3，与 t 无关。\n垂足 H 应在法向量方向，设 H=P+λ(1,1,1)。\n代入 α 得 0+3λ=2，λ=2/3，故 H=(t+2/3,t+2/3,−2t+2/3)。\nH 的坐标和为 2，且 PH 沿法向量；其长度 (2/3)√3=2/√3，再次验证。",
    "checkpoints": [
      "由法向量和方向判断角与平行条件",
      "区分方向平行、直线包含和严格平行",
      "沿法向量构造垂足并回代核验"
    ],
    "hint": "方向垂直法向量还不足以区分直线平行平面还是包含于平面。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-01",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "椭圆焦点",
    "question": "椭圆 x²/9+y²/4=1 的焦点为：",
    "options": [
      {
        "key": "A",
        "text": "(±3,0)"
      },
      {
        "key": "B",
        "text": "(0,±√5)"
      },
      {
        "key": "C",
        "text": "(±√13,0)"
      },
      {
        "key": "D",
        "text": "(±√5,0)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 长轴在 x 轴，a²=9、b²=4。\n② c²=a²−b²=5，所以焦点为 (±√5,0)。\n故选 D。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-02",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "双曲线渐近线",
    "question": "双曲线 x²/4−y²/9=1 的渐近线为：",
    "options": [
      {
        "key": "A",
        "text": "y=±(3/2)x"
      },
      {
        "key": "B",
        "text": "y=±(2/3)x"
      },
      {
        "key": "C",
        "text": "y=±(9/4)x"
      },
      {
        "key": "D",
        "text": "x=±2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 标准式有 a=2、b=3，实轴沿 x 轴。\n② 渐近线由 x²/4−y²/9=0 得 y=±(3/2)x。\n故选 A。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-03",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "抛物线参数",
    "question": "抛物线 y²=8x 的焦点为：",
    "options": [
      {
        "key": "A",
        "text": "(4,0)"
      },
      {
        "key": "B",
        "text": "(2,0)"
      },
      {
        "key": "C",
        "text": "(0,2)"
      },
      {
        "key": "D",
        "text": "(−2,0)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 对照 y²=2px，得 p=4。\n② 焦点为 (p/2,0)=(2,0)，不是 (p,0)。\n故选 B。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-04",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "圆的一般式",
    "question": "圆 x²+y²−2x+4y−4=0 的半径为：",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "√5"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 配方得 (x−1)²+(y+2)²=9。\n② 半径是平方根 3，不是半径平方 9。\n故选 C。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-05",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "弦与三角形分别判断",
    "question": "椭圆 x²/9+y²/4=1 被 y=0 截于 A、B。关于三角形 OAB（O 为原点），正确的是：",
    "options": [
      {
        "key": "A",
        "text": "没有实交点"
      },
      {
        "key": "B",
        "text": "三角形面积为 6"
      },
      {
        "key": "C",
        "text": "只有一个切点"
      },
      {
        "key": "D",
        "text": "A、B 不同，但三角形退化，面积为零"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 交点为 (−3,0)、(3,0)，确有两个不同端点。\n② 原点也在直线 y=0 上，三点共线，所以不是非退化三角形。\n故选 D。"
  },
  {
    "id": "g3-review-analytic-geometry-choice-06",
    "topic": "高三解析几何·章末综合",
    "kind": "choice",
    "difficulty": "提升",
    "title": "渐近线方向的降次",
    "question": "直线 y=(3/2)x 与 x²/4−y²/9=1 的有限实交点数为：",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "无数个"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 代入后左边为 x²/4−[(3/2)x]²/9=0。\n② 得矛盾式 0=1，故没有有限实交点；不能直接套非零二次项的判别式。\n故选 A。"
  },
  {
    "id": "g3-review-analytic-geometry-fill-01",
    "topic": "高三解析几何·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "竖直焦点弦",
    "question": "抛物线 y²=4x 的直线 x=1 截弦长为多少？",
    "options": [],
    "correctAnswer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "explanation": "① 代入 x=1 得 y²=4，端点为 (1,−2)、(1,2)。\n② 竖直方向直接取纵坐标差，弦长 4。"
  },
  {
    "id": "g3-review-analytic-geometry-fill-02",
    "topic": "高三解析几何·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "椭圆水平弦",
    "question": "填椭圆 x²/9+y²/4=1 被 y=1 截得的弦长。",
    "options": [],
    "correctAnswer": "3√3",
    "acceptedAnswers": [
      "3√3",
      "3sqrt(3)",
      "3*sqrt(3)"
    ],
    "explanation": "① 代入后 x²/9=3/4，横坐标为 ±3√3/2。\n② 两点纵坐标相同，弦长为横坐标差 3√3。"
  },
  {
    "id": "g3-review-analytic-geometry-fill-03",
    "topic": "高三解析几何·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "圆的半弦三角形",
    "question": "圆 x²+y²=25 被 y=3 截得的弦长为多少？",
    "options": [],
    "correctAnswer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "explanation": "① 半径 5，圆心到直线距离 3，半弦长 √(25−9)=4。\n② 整弦长须乘 2，得 8。"
  },
  {
    "id": "g3-review-analytic-geometry-written-01",
    "topic": "高三解析几何·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "椭圆方程与中点弦的充分性",
    "question": "椭圆焦点为 (±√5,0)，且经过 (0,2)。（1）求标准方程及离心率；（2）求以 M(1,1) 为中点的弦所在直线，并验证确实存在这样的弦。",
    "options": [],
    "correctAnswer": "x²/9+y²/4=1，e=√5/3；直线 4x+9y=13，确有两个不同交点且中点为 M。",
    "explanation": "（1）设椭圆为 x²/a²+y²/b²=1，a>b>0，已知 c²=5。\n代入 (0,2) 得 b²=4，由 a²=b²+c² 得 a²=9，方程为 x²/9+y²/4=1。\n半焦距 √5，离心率 e=c/a=√5/3，且 0<e<1。\n（2）设两个不同端点 (x₁,y₁)、(x₂,y₂)，中点条件给出 x₁+x₂=2、y₁+y₂=2。\n两椭圆方程相减，得 2(x₁−x₂)/9+2(y₁−y₂)/4=0，即 4(x₁−x₂)+9(y₁−y₂)=0。\n所以弦方向垂直 (4,9)，过 M 的候选直线为 4(x−1)+9(y−1)=0，即 4x+9y=13。\n为验证充分性，参数化直线为 x=1+9u，y=1−4u，代入椭圆得 13/36+13u²=1。\n于是 u²=23/468>0，有一正一负两个不同实根。对应点均在椭圆上且参数互为相反数，中点为 u=0 的 M，故候选确实可取。",
    "checkpoints": [
      "由焦点关系和过点条件求方程",
      "点差法推导中点弦的必要直线",
      "实际联立验证两不同交点及中点"
    ],
    "hint": "点差法给候选直线，不能替代存在性检验。"
  },
  {
    "id": "g3-review-analytic-geometry-written-02",
    "topic": "高三解析几何·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "焦点弦覆盖竖直方向",
    "question": "抛物线 y²=4x，焦点 F(1,0)，直线 x=my+1 交抛物线于 A、B。（1）证明有两个不同交点，求弦长最小值；（2）弦长为 8 时求全部直线。",
    "options": [],
    "correctAnswer": "弦长 4(m²+1)，最小 4 在 x=1；长度 8 时 x=y+1 或 x=−y+1。",
    "explanation": "（1）联立得到 y²−4my−4=0，判别式 16m²+16>0，对每个实数 m 均有两个不同实根。\n根积 y₁y₂=−4<0，所以两端点分居 y=0 两侧；直线上的 F 位于弦内。\n抛物线焦半径 |AF|=x₁+1、|BF|=x₂+1，由 F 在弦内，|AB|=x₁+x₂+2。\n根和 y₁+y₂=4m，且 xᵢ=myᵢ+1，所以 x₁+x₂=4m²+2。\n因此弦长 4m²+4≥4，m=0 时取等，对应竖直直线 x=1。\n（2）令 4m²+4=8，得 m²=1，因此 m=1 或 −1。\n对应直线为 x=y+1、x=−y+1。两者的判别式均为 32>0，且回代长度确为 8。\n用 x=my+1 的表示保留了竖直最短弦；与抛物线轴重合的水平直线不构成两个交点，原题已用交于 A、B 排除。",
    "checkpoints": [
      "联立方程证明两交点且焦点在弦内",
      "由焦半径和韦达定理得到弦长",
      "求最值及指定弦长的所有参数并检验"
    ],
    "hint": "先证明焦点在弦内，再把两个焦半径相加。"
  },
  {
    "id": "g3-review-analytic-geometry-written-03",
    "topic": "高三解析几何·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "面积最值与四个允许高度",
    "question": "椭圆 x²/9+y²/4=1 的水平弦 y=h 与原点构成非退化三角形。（1）求 h 范围、面积最大值及取点；（2）若面积为 9/4，求全部 h。",
    "options": [],
    "correctAnswer": "0<|h|<2；最大面积 3，在 h=±√2；面积 9/4 时 h=±√(2+√7/2) 或 ±√(2−√7/2)。",
    "explanation": "（1）两不同交点要求 |h|<2，三角形非退化还须 h≠0，所以 0<|h|<2。\n横坐标为 ±3√(1−h²/4)，弦长 6√(1−h²/4)，到原点距离为 |h|。\n面积 S=3|h|√(1−h²/4)>0，平方得 S²=9−(9/4)(h²−2)²≤9。\n最大面积为 3，h=±√2 都在允许范围，两处均可取。\n（2）S=9/4，两边非负，可以等价平方，得 9h²−(9/4)h⁴=81/16。\n令 u=h²，则 4u²−16u+9=0，判别式为 112，解得 u=2±√7/2。\n因 0<√7/2<2，两根均在 (0,4)，对应 h=±√(2+√7/2)、±√(2−√7/2)，共有四个不同值。\n四值均满足非退化范围，代入面积平方为 81/16，又面积为正，回到原面积确为 9/4，没有因平方引入负面积解。",
    "checkpoints": [
      "分别核对两交点与非退化条件",
      "平方配方求最大值并列全取等位置",
      "解关于 h² 的方程、列全正负 h 并回代"
    ],
    "hint": "面积平方可以消根，但必须先明确正性并保留所有对称高度。"
  },
  {
    "id": "g3-review-probability-statistics-choice-01",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "分类组合的系数",
    "question": "5 名女生、4 名男生中选 3 人，恰有 2 名女生的选法数为：",
    "options": [
      {
        "key": "A",
        "text": "40"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "80"
      },
      {
        "key": "D",
        "text": "60"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 女生选 C(5,2)=10 种，男生选 C(4,1)=4 种。\n② 两步相乘得 40，组内不再排列。\n故选 A。"
  },
  {
    "id": "g3-review-probability-statistics-choice-02",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "基础巩固",
    "title": "展开式的负号",
    "question": "(1−2x)⁵ 中 x² 的系数为：",
    "options": [
      {
        "key": "A",
        "text": "−40"
      },
      {
        "key": "B",
        "text": "40"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "−20"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 一般项为 C(5,r)(−2)ʳxʳ。\n② r=2，系数 C(5,2)×4=40，偶次幂为正。\n故选 B。"
  },
  {
    "id": "g3-review-probability-statistics-choice-03",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "分母是条件事件",
    "question": "P(A)=0.4，P(AB)=0.1，则 P(B|A) 为：",
    "options": [
      {
        "key": "A",
        "text": "2/5"
      },
      {
        "key": "B",
        "text": "1/10"
      },
      {
        "key": "C",
        "text": "1/4"
      },
      {
        "key": "D",
        "text": "1/2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① P(A)>0，条件概率为 P(AB)/P(A)。\n② 0.1/0.4=1/4，不能颠倒条件方向。\n故选 C。"
  },
  {
    "id": "g3-review-probability-statistics-choice-04",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "分布列的期望",
    "question": "X 取 0、1、2，概率依次为 1/4、1/2、1/4，E(X) 为：",
    "options": [
      {
        "key": "A",
        "text": "1/2"
      },
      {
        "key": "B",
        "text": "3/2"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① E(X)=0×1/4+1×1/2+2×1/4。\n② 得 1，符合关于 1 的对称性。\n故选 D。"
  },
  {
    "id": "g3-review-probability-statistics-choice-05",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "二项分布至少事件",
    "question": "X～B(4,1/2)，P(X≥3) 为：",
    "options": [
      {
        "key": "A",
        "text": "5/16"
      },
      {
        "key": "B",
        "text": "1/16"
      },
      {
        "key": "C",
        "text": "1/4"
      },
      {
        "key": "D",
        "text": "3/8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 至少三次包含 X=3 与 X=4 两个互斥事件。\n② [C(4,3)+C(4,4)]/16=(4+1)/16=5/16。\n故选 A。"
  },
  {
    "id": "g3-review-probability-statistics-choice-06",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "choice",
    "difficulty": "综合应用",
    "title": "频率分布直方图",
    "question": "直方图纵轴为频率/组距，某组宽 10、高 0.03，该组频率为：",
    "options": [
      {
        "key": "A",
        "text": "0.03"
      },
      {
        "key": "B",
        "text": "0.3"
      },
      {
        "key": "C",
        "text": "0.003"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 频率等于矩形面积。\n② 10×0.03=0.3，不能直接使用柱高。\n故选 B。"
  },
  {
    "id": "g3-review-probability-statistics-fill-01",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "对立事件",
    "question": "独立试验四次，每次成功概率 1/4，填四次全失败的概率。",
    "options": [],
    "correctAnswer": "81/256",
    "acceptedAnswers": [
      "81/256"
    ],
    "explanation": "① 单次失败概率 3/4，四次独立，相乘。\n② (3/4)⁴=81/256。"
  },
  {
    "id": "g3-review-probability-statistics-fill-02",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "不放回期望",
    "question": "6 件中有 2 件次品，不放回等可能抽 2 件，填次品数的期望。",
    "options": [],
    "correctAnswer": "2/3",
    "acceptedAnswers": [
      "2/3"
    ],
    "explanation": "① 超几何期望等于抽取数乘总体目标比例。\n② 2×2/6=2/3；不需要假设两次抽样独立。"
  },
  {
    "id": "g3-review-probability-statistics-fill-03",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "fill",
    "difficulty": "综合应用",
    "title": "回归均值点",
    "question": "含截距回归直线 ŷ=a+3x，样本均值 x̄=2、ȳ=5，填 a。",
    "options": [],
    "correctAnswer": "−1",
    "acceptedAnswers": [
      "−1",
      "-1"
    ],
    "explanation": "① 回归直线经过样本均值点，5=a+3×2。\n② 解得 a=−1。"
  },
  {
    "id": "g3-review-probability-statistics-written-01",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "来源、条件与重复试验",
    "question": "每次试验独立进行：以 2/5 概率选甲箱、3/5 概率选乙箱；两箱红球比例分别为 3/4、1/3，抽球后放回混匀。（1）求红球概率及已知红球时来自甲箱的概率；（2）独立重复两次，列红球次数 X 的分布并求期望方差。",
    "options": [],
    "correctAnswer": "P(红)=1/2，P(甲|红)=3/5；X=0,1,2 概率 1/4,1/2,1/4，E=1，D=1/2。",
    "explanation": "（1）甲且红的路径概率为 (2/5)(3/4)=3/10；乙且红为 (3/5)(1/3)=1/5。\n两来源互斥且覆盖全部试验，红球总概率为 3/10+1/5=1/2。\n条件概率 P(甲|红)=(3/10)/(1/2)=3/5，不能直接使用甲箱红球率。\n（2）题设每次独立，重新选箱、抽球后放回且混匀，每次红球概率恒为 1/2，所以 X～B(2,1/2)。\nP(X=0)=1/4，P(X=1)=C(2,1)/4=1/2，P(X=2)=1/4，和为 1。\nE(X)=2×1/2=1，D(X)=2×1/2×1/2=1/2。\n若两次共用一次选箱而不重新独立选箱，不能直接沿用本题的独立模型；这里使用了题设的每次试验方式。",
    "checkpoints": [
      "全概率汇总路径并正确倒推来源",
      "核对重复试验的独立同概率前提",
      "列完整分布并计算数字特征"
    ],
    "hint": "选箱也是每次独立试验的一部分，不能悄悄更改抽取机制。"
  },
  {
    "id": "g3-review-probability-statistics-written-02",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "written",
    "difficulty": "综合应用",
    "title": "放回方式影响波动",
    "question": "4 件合格品、2 件次品，共 6 件，X 为抽 3 次的次品数。（1）不放回时列分布、求期望方差；（2）每次放回并混匀时求同样数字特征并比较。",
    "options": [],
    "correctAnswer": "不放回 X=0,1,2 概率 1/5,3/5,1/5，E=1，D=2/5；放回 E=1，D=2/3。",
    "explanation": "（1）不放回时最多抽中 2 件次品，所以 X=0、1、2，总等可能样本数 C(6,3)=20。\n相应概率为 C(4,3)/20=1/5，C(2,1)C(4,2)/20=3/5，C(2,2)C(4,1)/20=1/5，和为 1。\nE(X)=0+3/5+2/5=1；E(X²)=3/5+4/5=7/5，所以 D(X)=7/5−1=2/5。\n（2）放回混匀且各次独立，次品率恒为 1/3，X～B(3,1/3)，取值为 0、1、2、3。\n对应概率为 8/27、12/27、6/27、1/27，均非负且和为 1。\nE(X)=3×1/3=1，D(X)=3×1/3×2/3=2/3。\n两模型期望相同，但不放回方差 2/5 小于放回的 2/3。取值范围也不同，不放回时 X=3 不可能，不能照搬二项分布。",
    "checkpoints": [
      "按超几何范围列分布并核对归一性",
      "用平方期望计算不放回方差",
      "列放回二项分布并比较范围与方差"
    ],
    "hint": "优先确定能否取到 3，再判断该用哪一个模型。"
  },
  {
    "id": "g3-review-probability-statistics-written-03",
    "topic": "高三计数、概率与统计·章末综合",
    "kind": "written",
    "difficulty": "提升",
    "title": "回归与检验的规范结论",
    "question": "（1）数据点 (1,2)、(2,4)、(3,5)，求含截距回归直线、x=4 的预测值及点 (2,4) 残差。（2）另有独立性检验表两行为 (28,12)、(12,28)，题给 0.01 水平临界值 6.635；计算 χ²=n(ad−bc)²/[(a+b)(c+d)(a+c)(b+d)] 并解释结论，能否直接认定因果？",
    "options": [],
    "correctAnswer": "ŷ=(3/2)x+2/3；预测值 20/3、残差 1/3；χ²=64/5=12.8，拒绝独立性，不能直接认定因果。",
    "explanation": "（1）x̄=2，ȳ=11/3。离差乘积和为 (−1)(−5/3)+0×1/3+1×4/3=3，x 离差平方和为 2。\n斜率 b=3/2，截距 a=11/3−(3/2)×2=2/3，故 ŷ=(3/2)x+2/3。\nx=4 时预测值为 6+2/3=20/3；它超出样本 x 的 [1,3]，属于需谨慎的外推。\nx=2 时拟合值为 11/3，残差是实际减拟合，为 4−11/3=1/3。\n（2）H₀ 为两分类变量独立。n=80，行和、列和都为 40，H₀ 下每格期望频数为 20，适合题设近似检验。\nad−bc=28²−12²=640，χ²=80×640²/40⁴=12.8=64/5。\n12.8>6.635，在题给 0.01 显著性水平下拒绝独立性假设，认为有统计关联证据。\n若为观察资料，仍可能存在混杂因素，关联不能直接证明因果。显著性水平也不表示原假设为假的概率就是 99%。",
    "checkpoints": [
      "由离差完整求回归直线、预测和残差",
      "核对列联表边际和与期望频数并计算",
      "按题给阈值判断并规范解释统计边界"
    ],
    "hint": "回归负责趋势预测，独立性检验负责关联证据，两者都不自动给出因果关系。"
  }
];
