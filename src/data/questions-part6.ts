import type { Question } from "./questions-part1";

// 高三一轮复习第二模块；本站原创。ID/topic 发布后保持稳定。
export const practiceTopics = [
  "高三函数与导数·定义域与值域",
  "高三函数与导数·函数性质",
  "高三函数与导数·基本初等函数",
  "高三函数与导数·零点与方程",
  "高三函数与导数·导数运算与切线",
  "高三函数与导数·单调性与最值",
  "高三函数与导数·含参不等式",
  "高三函数与导数·导数综合"
] as const;
export const practiceChapters = [{ title: "函数与导数", topics: practiceTopics }] as const;
export const questions: Question[] = [
  {
    "id": "g3-functions-domain-range-choice-01",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "choice",
    "title": "定义域条件取交集",
    "question": "f(x)=ln(2−x)/√(x+1) 的定义域是：",
    "options": [
      {
        "key": "A",
        "text": "(−1,2)"
      },
      {
        "key": "B",
        "text": "[−1,2)"
      },
      {
        "key": "C",
        "text": "(−1,2]"
      },
      {
        "key": "D",
        "text": "(−∞,2)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 对数要求 2−x>0，即 x<2。\n② 根式在分母，要求 x+1>0，即 x>−1。\n③ 两个条件同时满足，得到 −1<x<2。两个端点都不能取，故选 A。"
  },
  {
    "id": "g3-functions-domain-range-choice-02",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "choice",
    "title": "闭区间二次函数值域",
    "question": "f(x)=x²−4x+1，x∈[0,3]，其值域是：",
    "options": [
      {
        "key": "A",
        "text": "[−3,1]"
      },
      {
        "key": "B",
        "text": "[−2,1]"
      },
      {
        "key": "C",
        "text": "[−3,+∞)"
      },
      {
        "key": "D",
        "text": "[−3,−2]"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 配方 f(x)=(x−2)²−3，顶点 x=2 在定义区间内，最小值为 −3。\n② 端点 f(0)=1、f(3)=−2，最大值为 1。\n③ 函数连续，中间的值均能取到，值域为 [−3,1]。"
  },
  {
    "id": "g3-functions-domain-range-choice-03",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "choice",
    "title": "分段函数代入",
    "question": "f(x)=x²（x<0），f(x)=2x+1（x≥0），则 f(−1)+f(2)=：",
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
        "text": "6"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① −1<0，代入第一段，得 f(−1)=(−1)²=1。\n② 2≥0，代入第二段，得 f(2)=2×2+1=5。\n③ 两值相加为 1+5=6，故选 C。"
  },
  {
    "id": "g3-functions-domain-range-choice-04",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "choice",
    "title": "水平与竖直平移",
    "question": "由 y=f(x) 得到 y=f(x−2)+1，应将原图象：",
    "options": [
      {
        "key": "A",
        "text": "左移 2，再上移 1"
      },
      {
        "key": "B",
        "text": "右移 2，再上移 1"
      },
      {
        "key": "C",
        "text": "右移 1，再上移 2"
      },
      {
        "key": "D",
        "text": "右移 2，再下移 1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 原图象上的点 (t,f(t)) 在新图象中需满足 x−2=t，所以新横坐标为 t+2。\n② 新纵坐标为 f(t)+1。\n③ 每个点向右移动 2、向上移动 1，故选 B。"
  },
  {
    "id": "g3-functions-domain-range-fill-01",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "fill",
    "title": "基本不等式求最值",
    "question": "x>0 时，x+1/x 的最小值为____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① x 与 1/x 都为正，基本不等式给出 x+1/x≥2√(x·1/x)=2。\n② 等号要求 x=1/x，结合 x>0 得 x=1。\n③ x=1 在定义域内且能取到，因此最小值为 2。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-domain-range-fill-02",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "fill",
    "title": "受限定义域的值域",
    "question": "f(x)=x²，x∈[−1,2]，其值域为____。",
    "options": [],
    "correctAnswer": "[0,4]",
    "explanation": "① 区间包含 0，所以平方最小值为 0。\n② |x| 在区间上的最大值为 2，故平方最大值为 4。\n③ 函数连续，值域为 [0,4]。",
    "acceptedAnswers": [
      "[0,4]"
    ]
  },
  {
    "id": "g3-functions-domain-range-fill-03",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "fill",
    "title": "函数值与自变量",
    "question": "若 f(x)=ln x，且 f(a)=0，则 a=____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 先由定义域知 a>0。\n② ln a=0 等价于 a=e⁰=1。\n③ a=1 满足定义域且 ln 1=0，因此答案为 1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-domain-range-written-01",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "written",
    "title": "双根式的定义域和值域",
    "question": "设 f(x)=√(x−1)+√(3−x)。\n（1）求定义域；\n（2）求值域，并说明最值在何处取得。",
    "options": [],
    "correctAnswer": "（1）[1,3]；（2）[√2,2]，最小值在 x=1、3，最大值在 x=2 取得。",
    "explanation": "思路：两个根式同时有意义；求值域时利用平方后的乘积范围。\n（1）x−1≥0 且 3−x≥0，分别得 x≥1、x≤3，取交集为 [1,3]。\n（2）在定义域内 f(x)≥0。平方得 f(x)²=(x−1)+(3−x)+2√((x−1)(3−x))=2+2√(1−(x−2)²)。\n当 1≤x≤3 时，0≤(x−2)²≤1，所以 0≤1−(x−2)²≤1，进而 0≤√(1−(x−2)²)≤1。因此 2≤f(x)²≤4。由 f(x)≥0，得 √2≤f(x)≤2。\nx=1 或 3 时乘积为 0，f(x)=√2；x=2 时乘积为 1，f(x)=2。f 在 [1,3] 上连续，故两端最值之间的每个值都可取得，值域为 [√2,2]。",
    "checkpoints": [
      "联立两个根式条件，写出定义域",
      "平方、配方并求乘积范围，利用非负性开方",
      "检查最值取点，并说明值域无空缺"
    ],
    "hint": "先将 f(x) 平方，注意 f(x) 本身非负。"
  },
  {
    "id": "g3-functions-domain-range-written-02",
    "topic": "高三函数与导数·定义域与值域",
    "kind": "written",
    "title": "约分不改变原定义域",
    "question": "设 f(x)=(x²−1)/(x−1)。\n（1）求定义域和值域；\n（2）若仅取 x∈[−1,3] 且 x≠1，求相应值域。",
    "options": [],
    "correctAnswer": "（1）定义域 R\\{1}，值域 R\\{2}；（2）[0,2)∪(2,4]。",
    "explanation": "（1）分母要求 x−1≠0，所以定义域为 R\\{1}。当 x≠1 时，分子分解为 (x−1)(x+1)，约分得 f(x)=x+1，但限制 x≠1 仍须保留。\n若输出 y=2，则 x+1=2 给出 x=1，不允许；若 y≠2，取 x=y−1≠1，就能得到该输出。所以值域为 R\\{2}。\n（2）x 的允许范围为 [−1,1)∪(1,3]。在每一段上 y=x+1，第一段对应 y∈[0,2)，第二段对应 y∈(2,4]。\n合并得 [0,2)∪(2,4]。端点 y=0、4 分别由 x=−1、3 取得；y=2 始终不能取。",
    "checkpoints": [
      "保留分母非零条件，正确约分",
      "证明 y=2 不可取且其他实数可取",
      "分两段求像集，核对所有开闭端点"
    ],
    "hint": "约分前先记录 x≠1，再追踪这个缺失的输入对应哪个输出。"
  },
  {
    "id": "g3-functions-properties-choice-01",
    "topic": "高三函数与导数·函数性质",
    "kind": "choice",
    "title": "奇偶性与单调性",
    "question": "f(x)=x³+x 在 R 上是：",
    "options": [
      {
        "key": "A",
        "text": "奇函数且严格递增"
      },
      {
        "key": "B",
        "text": "偶函数且递增"
      },
      {
        "key": "C",
        "text": "奇函数但不单调"
      },
      {
        "key": "D",
        "text": "偶函数且递减"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 定义域 R 关于原点对称，f(−x)=−x³−x=−f(x)，所以是奇函数。\n② f′(x)=3x²+1>0，对任意 x 都成立，所以在 R 上严格递增。\n③ 两个结论合并，选 A。"
  },
  {
    "id": "g3-functions-properties-choice-02",
    "topic": "高三函数与导数·函数性质",
    "kind": "choice",
    "title": "先检查对称定义域",
    "question": "f(x)=ln((1+x)/(1−x)) 的定义域和奇偶性是：",
    "options": [
      {
        "key": "A",
        "text": "(−1,1)，奇函数"
      },
      {
        "key": "B",
        "text": "R，奇函数"
      },
      {
        "key": "C",
        "text": "(−1,1)，偶函数"
      },
      {
        "key": "D",
        "text": "(1,+∞)，奇函数"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 对数真数为正，分式 (1+x)/(1−x)>0，解得 −1<x<1；分母在该区间不为零。\n② 定义域关于原点对称，f(−x)=ln((1−x)/(1+x))=−ln((1+x)/(1−x))=−f(x)。\n③ 所以定义域为 (−1,1)，且是奇函数。"
  },
  {
    "id": "g3-functions-properties-choice-03",
    "topic": "高三函数与导数·函数性质",
    "kind": "choice",
    "title": "周期归约",
    "question": "函数 f 满足 f(x+4)=f(x)，且 f(1)=3，则 f(9)=：",
    "options": [
      {
        "key": "A",
        "text": "1"
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
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 9=1+2×4。\n② 连续使用两次周期关系，f(9)=f(5)=f(1)。\n③ 因 f(1)=3，故 f(9)=3。此处不要求 4 是最小正周期。"
  },
  {
    "id": "g3-functions-properties-choice-04",
    "topic": "高三函数与导数·函数性质",
    "kind": "choice",
    "title": "奇函数的函数值",
    "question": "f 是定义在 R 上的奇函数，且 f(2)=−3，则 f(−2)=：",
    "options": [
      {
        "key": "A",
        "text": "−3"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "2"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 奇函数满足 f(−x)=−f(x)。\n② 取 x=2，得 f(−2)=−f(2)=−(−3)=3，故选 D。"
  },
  {
    "id": "g3-functions-properties-fill-01",
    "topic": "高三函数与导数·函数性质",
    "kind": "fill",
    "title": "偶函数对称值",
    "question": "f(x)=x⁴−2x²+5，则 f(−1)=____。",
    "options": [],
    "correctAnswer": "4",
    "explanation": "① 直接代入得 (−1)⁴−2(−1)²+5=1−2+5。\n② 计算结果为 4；也可先利用偶函数 f(−1)=f(1)。",
    "acceptedAnswers": [
      "4"
    ]
  },
  {
    "id": "g3-functions-properties-fill-02",
    "topic": "高三函数与导数·函数性质",
    "kind": "fill",
    "title": "递增函数比较",
    "question": "f 在 R 上严格递增。若 f(2a−1)<f(3)，则 a 的范围是____。",
    "options": [],
    "correctAnswer": "a<2",
    "explanation": "① 严格递增意味着输入和输出大小方向一致。\n② 因此 2a−1<3，移项得 2a<4，除以正数 2 得 a<2。",
    "acceptedAnswers": [
      "a<2",
      "(-∞,2)"
    ]
  },
  {
    "id": "g3-functions-properties-fill-03",
    "topic": "高三函数与导数·函数性质",
    "kind": "fill",
    "title": "对称与周期的联合使用",
    "question": "f 为 R 上偶函数，且 f(x+6)=f(x)，f(2)=5，则 f(−8)=____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 周期关系给出 f(−8)=f(−2)。\n② 偶函数性质给出 f(−2)=f(2)。\n③ 所以 f(−8)=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-functions-properties-written-01",
    "topic": "高三函数与导数·函数性质",
    "kind": "written",
    "title": "按定义证明单调性",
    "question": "设 f(x)=x+1/x，定义域为 (0,+∞)。\n（1）用作差法证明 f 在 [1,+∞) 上严格递增；\n（2）求 f 在 (0,1] 上的单调性，并说明。",
    "options": [],
    "correctAnswer": "（1）严格递增；（2）严格递减。",
    "explanation": "（1）任取 1≤x₁<x₂。f(x₂)−f(x₁)=(x₂−x₁)+(1/x₂−1/x₁)=(x₂−x₁)(1−1/(x₁x₂))。\n因为 x₂−x₁>0，且 x₁≥1、x₂>x₁，从而 x₁x₂>1，所以 1−1/(x₁x₂)>0。两因子均正，故 f(x₂)−f(x₁)>0，即 f 在 [1,+∞) 上严格递增。\n（2）任取 0<x₁<x₂≤1。相同作差式仍成立。此时 0<x₁x₂<1，所以 1−1/(x₁x₂)<0，而 x₂−x₁>0，故 f(x₂)−f(x₁)<0。由定义知 f 在 (0,1] 上严格递减。\n注意两个区间分别证明，不能跨越 x=1 断言同向单调。",
    "checkpoints": [
      "任取有序的两个自变量，正确作差因式分解",
      "在 [1,+∞) 上证明两因子均正",
      "在 (0,1] 上判断乘积符号并给出结论"
    ],
    "hint": "把两函数值之差提取因子 x₂−x₁，剩余因子的符号由 x₁x₂ 决定。"
  },
  {
    "id": "g3-functions-properties-written-02",
    "topic": "高三函数与导数·函数性质",
    "kind": "written",
    "title": "奇函数与不等式转化",
    "question": "设 f 是 R 上严格递增的奇函数。\n（1）证明 f(0)=0；\n（2）解关于 x 的不等式 f(2x−1)+f(x+1)>0。",
    "options": [],
    "correctAnswer": "（1）f(0)=0；（2）x>0。",
    "explanation": "（1）由奇函数性质，f(−0)=−f(0)。因为 −0=0，得 f(0)=−f(0)，所以 2f(0)=0，即 f(0)=0。\n（2）原不等式等价于 f(2x−1)>−f(x+1)。利用奇函数性质 −f(x+1)=f(−x−1)，所以化为 f(2x−1)>f(−x−1)。\nf 在整个 R 上严格递增，因此该不等式等价于 2x−1>−x−1。移项得 3x>0，即 x>0。\n反之 x>0 时，上述变形均可逆，故确实满足原式；x=0 时两项互为相反数，和为 0，不符合严格大于零。解集为 (0,+∞)。",
    "checkpoints": [
      "用奇函数性质证明 f(0)=0",
      "将负的函数值转为相反自变量的函数值",
      "利用全域严格递增得到等价不等式并检查边界"
    ],
    "hint": "先把一个函数值移到右边，再用 −f(t)=f(−t)。"
  },
  {
    "id": "g3-functions-elementary-functions-choice-01",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "choice",
    "title": "指数函数单调方向",
    "question": "不等式 (1/2)^(x−1)>1/4 的解为：",
    "options": [
      {
        "key": "A",
        "text": "x>3"
      },
      {
        "key": "B",
        "text": "x<3"
      },
      {
        "key": "C",
        "text": "x>−1"
      },
      {
        "key": "D",
        "text": "x<−1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 1/4=(1/2)²，两边化为同底幂。\n② 底数 1/2 在 (0,1) 内，指数函数严格递减，因此 x−1<2。\n③ 得 x<3；指数减函数比较时方向必须反转。"
  },
  {
    "id": "g3-functions-elementary-functions-choice-02",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "choice",
    "title": "对数先看真数",
    "question": "log₂(x−1)>1 的解集是：",
    "options": [
      {
        "key": "A",
        "text": "(1,3)"
      },
      {
        "key": "B",
        "text": "(2,+∞)"
      },
      {
        "key": "C",
        "text": "(3,+∞)"
      },
      {
        "key": "D",
        "text": "[3,+∞)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 定义域要求 x−1>0，即 x>1。\n② 底数 2>1，函数递增，故 x−1>2¹=2，得 x>3。\n③ 与定义域取交集仍为 (3,+∞)，严格不等号不含 3。"
  },
  {
    "id": "g3-functions-elementary-functions-choice-03",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "choice",
    "title": "含绝对值的图象",
    "question": "y=|x−2| 的图象顶点为：",
    "options": [
      {
        "key": "A",
        "text": "(−2,0)"
      },
      {
        "key": "B",
        "text": "(0,2)"
      },
      {
        "key": "C",
        "text": "(2,0)"
      },
      {
        "key": "D",
        "text": "(0,−2)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 绝对值表达式最小为 0，发生在 x−2=0，即 x=2。\n② 该点两侧分别为 y=2−x 与 y=x−2，形成折线顶点。\n③ 顶点为 (2,0)，选 C。"
  },
  {
    "id": "g3-functions-elementary-functions-choice-04",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "choice",
    "title": "复合单调性",
    "question": "f(x)=ln(4−x²) 的递增区间为：",
    "options": [
      {
        "key": "A",
        "text": "(−2,0]"
      },
      {
        "key": "B",
        "text": "[0,2)"
      },
      {
        "key": "C",
        "text": "(−∞,0]"
      },
      {
        "key": "D",
        "text": "(−2,2)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 真数为正要求 −2<x<2。\n② 内层 4−x² 在 (−2,0] 上严格递增，在 [0,2) 上严格递减。\n③ 外层 ln t 在 t>0 上严格递增，复合后方向不变，因此递增区间为 (−2,0]。"
  },
  {
    "id": "g3-functions-elementary-functions-fill-01",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "fill",
    "title": "指数方程",
    "question": "若 2^(x+1)=8，则 x=____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 8=2³，原式写成 2^(x+1)=2³。\n② 同底指数函数为一一对应，所以 x+1=3。\n③ 解得 x=2，回代可验证。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-elementary-functions-fill-02",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "fill",
    "title": "对数运算",
    "question": "log₂8+ln(e²) 的值为____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 2³=8，所以 log₂8=3。\n② ln(e²)=2。\n③ 相加得 3+2=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-functions-elementary-functions-fill-03",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "fill",
    "title": "图象平移后的最小值",
    "question": "f(x)=(x−3)²+2 的最小值为____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 平方项恒非负，所以 f(x)≥2。\n② 当 x=3 时平方项为 0，等号成立，故最小值为 2。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-elementary-functions-written-01",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "written",
    "title": "复合对数函数的性质",
    "question": "设 f(x)=ln(4−x²)。\n（1）求定义域并判断奇偶性；\n（2）求单调区间和最大值。",
    "options": [],
    "correctAnswer": "（1）(−2,2)，偶函数；（2）(−2,0] 递增，[0,2) 递减，最大值 ln4。",
    "explanation": "（1）由 4−x²>0 得 x²<4，即 −2<x<2，定义域为 (−2,2)。此区间关于原点对称，且 f(−x)=ln(4−(−x)²)=ln(4−x²)=f(x)，所以为偶函数。\n（2）f′(x)=−2x/(4−x²)。定义域内分母严格为正，所以导数符号由 −x 决定：−2<x<0 时 f′>0；0<x<2 时 f′<0；x=0 时 f′=0。\n因此 f 在 (−2,0] 上严格递增，在 [0,2) 上严格递减。函数先增后减，最大值在 x=0 取得，为 f(0)=ln4。\n边界 ±2 不属于定义域，不能代入；最大值对应的 x=0 属于定义域。",
    "checkpoints": [
      "求真数正的范围，并按定义证明偶性",
      "正确求导，分区间判断符号",
      "写出单调区间及最大值取点，排除定义域外端点"
    ],
    "hint": "先确定 4−x² 的正负，再观察导数分子 −2x。"
  },
  {
    "id": "g3-functions-elementary-functions-written-02",
    "topic": "高三函数与导数·基本初等函数",
    "kind": "written",
    "title": "指数换元后的值域",
    "question": "设 f(x)=4^x−2^(x+1)+3，且 x≥0。\n（1）令 t=2^x，写出 t 的范围并化简 f；\n（2）求 f 的值域和最小值取点。",
    "options": [],
    "correctAnswer": "（1）t≥1，f=(t−1)²+2；（2）[2,+∞)，x=0 取得最小值 2。",
    "explanation": "（1）因为 x≥0 且 2^x 严格递增，所以 t=2^x≥1。4^x=(2^x)²=t²，2^(x+1)=2t，故 f=t²−2t+3=(t−1)²+2。\n（2）在 t≥1 上，平方项 (t−1)² 取遍 [0,+∞)。所以 f 取遍 [2,+∞)，最小值为 2。\n等号要求 t=1，即 2^x=1，得到 x=0，满足 x≥0。进一步，对任意 y≥2，取 t=1+√(y−2)≥1，再取 x=log₂t≥0，便有 f(x)=y，说明值域中没有遗漏。",
    "checkpoints": [
      "换元时同时写出 t≥1，并正确整理",
      "由平方项确定最小值与取点",
      "说明 [2,+∞) 中所有值均可取得"
    ],
    "hint": "把 4^x 看成 (2^x)²，换元时不能丢掉 x≥0 的限制。"
  },
  {
    "id": "g3-functions-zeros-equations-choice-01",
    "topic": "高三函数与导数·零点与方程",
    "kind": "choice",
    "title": "零点与纵坐标",
    "question": "函数 f(x) 的零点是指：",
    "options": [
      {
        "key": "A",
        "text": "使 f(x)=0 的自变量 x"
      },
      {
        "key": "B",
        "text": "图象上一切点"
      },
      {
        "key": "C",
        "text": "坐标原点"
      },
      {
        "key": "D",
        "text": "f(0) 的值"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 零点是方程 f(x)=0 的解，即自变量的取值。\n② 图象与 x 轴交点的横坐标才是零点，不是交点本身，也不一定是 0。\n③ 因而选 A。"
  },
  {
    "id": "g3-functions-zeros-equations-choice-02",
    "topic": "高三函数与导数·零点与方程",
    "kind": "choice",
    "title": "变号与连续性",
    "question": "f 在 [1,2] 上连续，f(1)=−1、f(2)=3，则一定成立的是：",
    "options": [
      {
        "key": "A",
        "text": "恰有一个零点"
      },
      {
        "key": "B",
        "text": "至少有一个零点在 (1,2)"
      },
      {
        "key": "C",
        "text": "有两个零点"
      },
      {
        "key": "D",
        "text": "零点为 3/2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 已知连续，且 f(1)f(2)=−3<0。\n② 由介值定理，存在 ξ∈(1,2)，使 f(ξ)=0。\n③ 没有单调性信息，不能断言唯一，也不能求出精确位置，故选 B。"
  },
  {
    "id": "g3-functions-zeros-equations-choice-03",
    "topic": "高三函数与导数·零点与方程",
    "kind": "choice",
    "title": "偶重根不变号",
    "question": "f(x)=(x−1)² 的不同零点个数为：",
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
        "text": "无穷多个"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 方程 (x−1)²=0 只有 x=1。\n② 它是二重根，但不同零点只计一次。\n③ 两侧函数值均非负，说明有零点不一定发生符号变化，选 B。"
  },
  {
    "id": "g3-functions-zeros-equations-choice-04",
    "topic": "高三函数与导数·零点与方程",
    "kind": "choice",
    "title": "严格单调控制根数",
    "question": "f 在 R 上严格递增，则方程 f(x)=0 的实根个数：",
    "options": [
      {
        "key": "A",
        "text": "一定为 1"
      },
      {
        "key": "B",
        "text": "至少为 2"
      },
      {
        "key": "C",
        "text": "至多为 1"
      },
      {
        "key": "D",
        "text": "一定为 0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 若有两个不同根 x₁<x₂，则严格递增给出 f(x₁)<f(x₂)。\n② 两者又都为 0，形成矛盾，故至多一个。\n③ 例如 e^x 没有实根，x 有一个实根，所以不能说一定存在。"
  },
  {
    "id": "g3-functions-zeros-equations-fill-01",
    "topic": "高三函数与导数·零点与方程",
    "kind": "fill",
    "title": "二次方程的根数",
    "question": "方程 x²−4x+4=0 的不同实根个数为____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 配方为 (x−2)²=0，得 x=2。\n② 虽为重根，但只有一个不同实根，所以答案为 1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-zeros-equations-fill-02",
    "topic": "高三函数与导数·零点与方程",
    "kind": "fill",
    "title": "水平线与抛物线",
    "question": "方程 x²−2x=a 有两个不同实根，则 a 的范围为____。",
    "options": [],
    "correctAnswer": "a>−1",
    "explanation": "① 移项配方得 (x−1)²=a+1。\n② 平方等于正数时有两个不同实根，等于 0 时一个，负数时没有。\n③ 因而 a+1>0，即 a>−1。",
    "acceptedAnswers": [
      "a>−1",
      "a>-1",
      "(-1,+∞)"
    ]
  },
  {
    "id": "g3-functions-zeros-equations-fill-03",
    "topic": "高三函数与导数·零点与方程",
    "kind": "fill",
    "title": "指数与常数的交点",
    "question": "方程 2^x=4 的实根为____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 4=2²，且函数 2^x 严格递增，故方程至多一个根。\n② x=2 满足原式，所以唯一实根为 2。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-zeros-equations-written-01",
    "topic": "高三函数与导数·零点与方程",
    "kind": "written",
    "title": "证明根的存在与唯一",
    "question": "设 f(x)=ln x+x−2，x>0。\n（1）证明 f 在 (0,+∞) 上严格递增；\n（2）证明方程 f(x)=0 有且仅有一个实根，且该根位于 (1,2)。",
    "options": [],
    "correctAnswer": "（1）严格递增；（2）唯一实根在 (1,2)。",
    "explanation": "（1）定义域内 f′(x)=1/x+1。因为 x>0，有 1/x>0，所以 f′(x)>0，故 f 在 (0,+∞) 上严格递增。\n（2）f 由连续函数相加得到，在 [1,2] 上连续。计算 f(1)=ln1+1−2=−1<0；f(2)=ln2+2−2=ln2>0。因此 f(1)f(2)<0，由介值定理至少有一个根 ξ∈(1,2)。\n再证唯一性：若存在另一根 η≠ξ，不妨设 η>ξ，则由严格递增知 f(η)>f(ξ)=0，与 η 为根矛盾。所以在整个定义域只有一个根。\n存在性与唯一性分别证明，不能仅凭两端异号断言恰好一个根。",
    "checkpoints": [
      "求导并利用 x>0 证明全域严格递增",
      "核对连续性、端点异号，证明存在",
      "利用严格单调证明唯一，写明根所在区间"
    ],
    "hint": "异号负责存在，严格单调负责唯一，两个环节都要写。"
  },
  {
    "id": "g3-functions-zeros-equations-written-02",
    "topic": "高三函数与导数·零点与方程",
    "kind": "written",
    "title": "含参方程分类计数",
    "question": "讨论方程 x²−2|x|=a 的不同实根个数。\n（1）令 t=|x|，把方程转化为关于 t 的方程；\n（2）按 a 的取值完整分类。",
    "options": [],
    "correctAnswer": "a<−1：0；a=−1：2；−1<a<0：4；a=0：3；a>0：2。",
    "explanation": "（1）令 t=|x|≥0，则 x²=t²，方程变为 t²−2t=a，即 (t−1)²=a+1。t>0 时对应 x=±t 两个实根；t=0 只对应 x=0 一个根。\n（2）若 a<−1，右边为负，无实数 t，故无实根。\n若 a=−1，仅有 t=1>0，对应 x=±1，共 2 个根。\n若 −1<a<0，则 0<√(a+1)<1，得到 t₁=1−√(a+1)>0、t₂=1+√(a+1)>0，二者不同，每个对应两个 x，共 4 个。\n若 a=0，得 t=0 或 2，分别对应 x=0 与 x=±2，共 3 个不同根。\n若 a>0，则 √(a+1)>1，t₁<0 应舍去，只有 t₂>0，对应两个 x，共 2 个。\n以上情况覆盖全部 a，临界值 −1、0 必须单列。",
    "checkpoints": [
      "换元写出 t≥0，并说明 t 到 x 的根数对应",
      "分清 a=−1、a=0 与两侧情形",
      "舍去负 t，完整给出五类根数"
    ],
    "hint": "换元后的每个根不一定都对应两个 x，t=0 是特殊情况。"
  },
  {
    "id": "g3-functions-rules-tangent-choice-01",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "choice",
    "title": "乘积求导",
    "question": "f(x)=x²e^x，则 f′(x)=：",
    "options": [
      {
        "key": "A",
        "text": "2xe^x"
      },
      {
        "key": "B",
        "text": "x²e^x"
      },
      {
        "key": "C",
        "text": "e^x(x²+2x)"
      },
      {
        "key": "D",
        "text": "2xe^x+x²"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 由乘积法则，f′=(x²)′e^x+x²(e^x)′。\n② 代入得 2xe^x+x²e^x。\n③ 提取公因式 e^x 得 e^x(x²+2x)，故选 C。"
  },
  {
    "id": "g3-functions-rules-tangent-choice-02",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "choice",
    "title": "复合函数链式法则",
    "question": "f(x)=ln(2x+1)，则 f′(x)=：",
    "options": [
      {
        "key": "A",
        "text": "1/(2x+1)"
      },
      {
        "key": "B",
        "text": "2/(2x+1)"
      },
      {
        "key": "C",
        "text": "2ln(2x+1)"
      },
      {
        "key": "D",
        "text": "1/x"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 定义域为 2x+1>0，即 x>−1/2。\n② 外层 ln u 的导数为 1/u，内层 u=2x+1 的导数为 2。\n③ 相乘得 f′(x)=2/(2x+1)，不能漏掉内层导数。"
  },
  {
    "id": "g3-functions-rules-tangent-choice-03",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "choice",
    "title": "切线的点斜式",
    "question": "y=x² 在 x=2 处的切线方程是：",
    "options": [
      {
        "key": "A",
        "text": "y=2x"
      },
      {
        "key": "B",
        "text": "y=4x−4"
      },
      {
        "key": "C",
        "text": "y=4x+4"
      },
      {
        "key": "D",
        "text": "y=2x+2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 切点为 (2,f(2))=(2,4)。\n② f′(x)=2x，所以切线斜率为 f′(2)=4。\n③ 点斜式 y−4=4(x−2)，整理为 y=4x−4。"
  },
  {
    "id": "g3-functions-rules-tangent-choice-04",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "choice",
    "title": "商法则",
    "question": "f(x)=ln x/x（x>0），则 f′(x)=：",
    "options": [
      {
        "key": "A",
        "text": "1/x²"
      },
      {
        "key": "B",
        "text": "(1−ln x)/x²"
      },
      {
        "key": "C",
        "text": "(1+ln x)/x²"
      },
      {
        "key": "D",
        "text": "1−ln x"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 分子 u=ln x，u′=1/x；分母 v=x，v′=1。\n② 商法则给出 f′=(u′v−uv′)/v²=((1/x)x−ln x)/x²。\n③ 化简为 (1−ln x)/x²，选 B。"
  },
  {
    "id": "g3-functions-rules-tangent-fill-01",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "fill",
    "title": "切线斜率",
    "question": "f(x)=x³−3x，则在 x=1 处的切线斜率为____。",
    "options": [],
    "correctAnswer": "0",
    "explanation": "① f′(x)=3x²−3。\n② 代入 x=1，得 f′(1)=3−3=0。\n③ 斜率为 0，切线为水平线；函数值 f(1)=−2 不是斜率。",
    "acceptedAnswers": [
      "0"
    ]
  },
  {
    "id": "g3-functions-rules-tangent-fill-02",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "fill",
    "title": "三角函数与链式法则",
    "question": "f(x)=sin(2x)（角度采用弧度制），则 f′(0)=____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 外层 sin u 的导数为 cos u，内层 u=2x 的导数为 2。\n② 链式法则给出 f′(x)=2cos(2x)。\n③ x=0 时 cos0=1，所以 f′(0)=2。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-rules-tangent-fill-03",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "fill",
    "title": "由切线求参数",
    "question": "f(x)=x²+ax，若在 x=1 处切线斜率为 5，则 a=____。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① f′(x)=2x+a，在 x=1 处为 2+a。\n② 已知斜率为 5，所以 2+a=5，得 a=3。\n③ 回代导数值为 5，满足条件。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-functions-rules-tangent-written-01",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "written",
    "title": "求导与指定点切线",
    "question": "设 f(x)=ln x+x²，x>0。\n（1）求 f′(x)；\n（2）求曲线在 x=1 处的切线方程；\n（3）判断此切线是否经过点 (0,−2)。",
    "options": [],
    "correctAnswer": "（1）1/x+2x；（2）y=3x−2；（3）经过。",
    "explanation": "（1）在 x>0 上，(ln x)′=1/x，(x²)′=2x，所以 f′(x)=1/x+2x。\n（2）先求切点纵坐标：f(1)=ln1+1²=1。再求斜率：f′(1)=1+2=3。由点斜式得 y−1=3(x−1)，展开为 y−1=3x−3，整理得 y=3x−2。\n（3）把 x=0 代入切线方程，得 y=−2，所以切线经过 (0,−2)。注意曲线本身的定义域不含 0，但切线作为一条直线可以经过横坐标为 0 的点。",
    "checkpoints": [
      "在正确的定义域上逐项求导",
      "分别求切点与斜率，用点斜式整理",
      "代点检验，区分切线与原曲线定义域"
    ],
    "hint": "函数值决定切点纵坐标，导数值决定斜率。"
  },
  {
    "id": "g3-functions-rules-tangent-written-02",
    "topic": "高三函数与导数·导数运算与切线",
    "kind": "written",
    "title": "经过点的切线不一定在该点相切",
    "question": "设曲线 y=x²。\n（1）写出在横坐标 t 处的切线方程；\n（2）求经过点 P(0,−1) 的所有切线方程，并写出切点。",
    "options": [],
    "correctAnswer": "（1）y=2tx−t²；（2）y=2x−1，切点 (1,1)；y=−2x−1，切点 (−1,1)。",
    "explanation": "（1）设切点 T(t,t²)。由 f′(x)=2x 得切线斜率为 2t。因此 y−t²=2t(x−t)，展开后 y=2tx−t²。\n（2）切线经过 P(0,−1)，代入得 −1=2t·0−t²，即 t²=1。所以 t=1 或 t=−1。\nt=1 时，切点为 (1,1)，切线为 y=2x−1。t=−1 时，切点为 (−1,1)，切线为 y=−2x−1。\n两直线分别在切点满足曲线的导数斜率，并且把 x=0 代入均得 y=−1，因此两条均符合。t²=1 已给出所有解，所以没有其他切线。",
    "checkpoints": [
      "设未知切点，利用导数写出一般切线",
      "将已知经过点代入，解出全部 t",
      "分别写切线、切点，并检验没有遗漏"
    ],
    "hint": "“经过 P”只说明切线经过 P，并不说明 P 就是切点。"
  },
  {
    "id": "g3-functions-monotonic-extrema-choice-01",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "choice",
    "title": "导数符号与单调区间",
    "question": "f(x)=x³−3x 的递减区间为：",
    "options": [
      {
        "key": "A",
        "text": "(−∞,−1]"
      },
      {
        "key": "B",
        "text": "[−1,1]"
      },
      {
        "key": "C",
        "text": "[1,+∞)"
      },
      {
        "key": "D",
        "text": "R"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① f′(x)=3x²−3=3(x−1)(x+1)。\n② 当 −1<x<1 时，两因子异号，导数为负。\n③ 在端点导数为 0，不改变该段的严格递减，故可写递减区间 [−1,1]。"
  },
  {
    "id": "g3-functions-monotonic-extrema-choice-02",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "choice",
    "title": "驻点不是极值的充分条件",
    "question": "f(x)=x³ 在 x=0 处：",
    "options": [
      {
        "key": "A",
        "text": "有极大值"
      },
      {
        "key": "B",
        "text": "有极小值"
      },
      {
        "key": "C",
        "text": "导数为零但无极值"
      },
      {
        "key": "D",
        "text": "导数不存在"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① f′(x)=3x²，故 f′(0)=0。\n② 0 两侧导数均为正，函数一直严格递增，没有发生增减方向改变。\n③ 因此该点不是极值点，选 C。"
  },
  {
    "id": "g3-functions-monotonic-extrema-choice-03",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "choice",
    "title": "闭区间别漏端点",
    "question": "f(x)=x³−3x 在 [0,2] 上的最大值为：",
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
        "text": "−2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① f′(x)=3(x−1)(x+1)，区间内驻点为 1。\n② 比较 f(0)=0、f(1)=−2、f(2)=2。\n③ 最大值为 2，在右端点取得。"
  },
  {
    "id": "g3-functions-monotonic-extrema-choice-04",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "choice",
    "title": "导数恒非负与严格递增",
    "question": "f(x)=x³−ax 在 R 上严格递增的充要条件是：",
    "options": [
      {
        "key": "A",
        "text": "a<0"
      },
      {
        "key": "B",
        "text": "a≤0"
      },
      {
        "key": "C",
        "text": "a≥0"
      },
      {
        "key": "D",
        "text": "a>0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① f′(x)=3x²−a。a<0 时处处为正；a=0 时 f=x³ 仍严格递增。\n② a>0 时在 |x|<√(a/3) 上导数为负，存在递减区间，不符合。\n③ 故条件为 a≤0，不能漏掉 a=0。"
  },
  {
    "id": "g3-functions-monotonic-extrema-fill-01",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "fill",
    "title": "极小值",
    "question": "f(x)=x²−4x+5 的极小值为____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① f′(x)=2x−4，在 x<2 时为负，x>2 时为正。\n② 在 x=2 处由减到增，取得极小值。\n③ f(2)=4−8+5=1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-monotonic-extrema-fill-02",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "fill",
    "title": "驻点个数",
    "question": "f(x)=x³−3x 的满足 f′(x)=0 的实数 x 共有____个。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① f′(x)=3x²−3=0，等价于 x²=1。\n② 解得 x=−1 或 x=1，为两个不同驻点。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-functions-monotonic-extrema-fill-03",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "fill",
    "title": "端点与驻点比较",
    "question": "f(x)=x²−2x 在 [0,3] 上的最大值为____。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① f′=2x−2，区间内驻点为 1。\n② f(0)=0、f(1)=−1、f(3)=3。\n③ 比较可得最大值 3，在 x=3 取得。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-functions-monotonic-extrema-written-01",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "written",
    "title": "完整符号分析与闭区间最值",
    "question": "设 f(x)=x³−3x，x∈[−2,2]。\n（1）求单调区间及极值；\n（2）求最大值、最小值及所有取值点。",
    "options": [],
    "correctAnswer": "（1）[−2,−1]、[1,2] 递增，[−1,1] 递减；极大值 2、极小值 −2；（2）最大值 2 在 x=−1、2，最小值 −2 在 x=−2、1。",
    "explanation": "（1）求导得 f′(x)=3x²−3=3(x−1)(x+1)，令 f′=0 得 x=−1、1。\n在 (−2,−1) 内，两因子均负，导数为正；在 (−1,1) 内一负一正，导数为负；在 (1,2) 内两因子均正，导数为正。\n所以 f 在 [−2,−1]、[1,2] 上分别严格递增，在 [−1,1] 上严格递减。x=−1 处由增到减，极大值 f(−1)=−1+3=2；x=1 处由减到增，极小值 f(1)=1−3=−2。\n（2）连续函数在闭区间上比较端点与内部驻点：f(−2)=−8+6=−2，f(−1)=2，f(1)=−2，f(2)=8−6=2。\n因此最大值为 2，在 x=−1、2 取得；最小值为 −2，在 x=−2、1 取得。不能只报告内部极值点，也不能遗漏相同最值的另一个取点。",
    "checkpoints": [
      "求出全部驻点并逐段分析导数符号",
      "写单调区间与极值，说明变号方向",
      "比较四个候选点，列出所有最值取点"
    ],
    "hint": "先列导数正负顺序“正、负、正”，再把两端点也放入比较。"
  },
  {
    "id": "g3-functions-monotonic-extrema-written-02",
    "topic": "高三函数与导数·单调性与最值",
    "kind": "written",
    "title": "含参函数的单调性分类",
    "question": "设 fₐ(x)=x³−3ax，a∈R。\n（1）讨论其在 R 上的单调性；\n（2）当 a>0 时，求极大值与极小值。",
    "options": [],
    "correctAnswer": "（1）a≤0 时 R 上严格递增；a>0 时在 (−∞,−√a]、[√a,+∞) 递增，在 [−√a,√a] 递减；（2）极大值 2a√a，极小值 −2a√a。",
    "explanation": "（1）fₐ′(x)=3(x²−a)。若 a<0，则 x²−a>0，函数全域严格递增。若 a=0，则 fₐ=x³，也在 R 上严格递增，虽然 x=0 处导数为 0。\n若 a>0，方程 fₐ′=0 有两个不同实根 −√a、√a。|x|>√a 时 x²−a>0，|x|<√a 时 x²−a<0，所以在 (−∞,−√a]、[√a,+∞) 上分别严格递增，在 [−√a,√a] 上严格递减。\n（2）在 x=−√a 处导数由正到负，有极大值 fₐ(−√a)=−a√a+3a√a=2a√a。\n在 x=√a 处导数由负到正，有极小值 fₐ(√a)=a√a−3a√a=−2a√a。\na≤0 时无极值；不能在 a<0 时使用实数 √a 来分区间。",
    "checkpoints": [
      "按 a<0、a=0、a>0 分类",
      "a>0 时正确排列临界点并给出单调区间",
      "逐一代入求极值并说明 a≤0 无极值"
    ],
    "hint": "参数决定导数方程有几个实根，先按 a 的符号分情况。"
  },
  {
    "id": "g3-functions-parameter-inequalities-choice-01",
    "topic": "高三函数与导数·含参不等式",
    "kind": "choice",
    "title": "恒成立看最小值",
    "question": "对任意 x>0，都有 ln x≤x−1，等号成立当且仅当：",
    "options": [
      {
        "key": "A",
        "text": "x=0"
      },
      {
        "key": "B",
        "text": "x=1"
      },
      {
        "key": "C",
        "text": "x=e"
      },
      {
        "key": "D",
        "text": "任意 x>0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 设 h(x)=x−1−ln x，h′(x)=1−1/x=(x−1)/x。\n② x>0 时分母为正，h 在 (0,1] 递减，在 [1,+∞) 递增，所以最小值 h(1)=0。\n③ 等号仅在最小点 x=1 成立，选 B。"
  },
  {
    "id": "g3-functions-parameter-inequalities-choice-02",
    "topic": "高三函数与导数·含参不等式",
    "kind": "choice",
    "title": "存在性与最值",
    "question": "存在 x>0，使 ln x−x+1>a，则参数范围为：",
    "options": [
      {
        "key": "A",
        "text": "a≤0"
      },
      {
        "key": "B",
        "text": "a>0"
      },
      {
        "key": "C",
        "text": "a<0"
      },
      {
        "key": "D",
        "text": "a≥0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① h=ln x−x+1，h′=(1−x)/x，所以在 x=1 取得全域最大值 0。\n② 存在 h(x)>a 等价于最大值 0>a。\n③ 因而 a<0；a=0 时所有 h(x)≤0，不能满足严格大于，故选 C。"
  },
  {
    "id": "g3-functions-parameter-inequalities-choice-03",
    "topic": "高三函数与导数·含参不等式",
    "kind": "choice",
    "title": "分离参数先看因子符号",
    "question": "对任意 x>0，ln x≤ax 恒成立的条件为：",
    "options": [
      {
        "key": "A",
        "text": "a≥1/e"
      },
      {
        "key": "B",
        "text": "a≤1/e"
      },
      {
        "key": "C",
        "text": "a≥0"
      },
      {
        "key": "D",
        "text": "a≤0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 因 x>0，可两边除以 x，得到 a≥ln x/x。\n② g(x)=ln x/x，g′=(1−ln x)/x²，在 (0,e] 递增，在 [e,+∞) 递减。\n③ 全域最大值为 g(e)=1/e，所以 a≥1/e，包含等号。"
  },
  {
    "id": "g3-functions-parameter-inequalities-choice-04",
    "topic": "高三函数与导数·含参不等式",
    "kind": "choice",
    "title": "最值能否取到",
    "question": "对任意 x∈(0,1)，x<a 恒成立，a 的范围是：",
    "options": [
      {
        "key": "A",
        "text": "a>1"
      },
      {
        "key": "B",
        "text": "a≥1"
      },
      {
        "key": "C",
        "text": "a≤1"
      },
      {
        "key": "D",
        "text": "a<1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 若 a≥1，因 x<1≤a，恒有 x<a，所以充分。\n② 若 a<1，取 x∈(max{0,a},1)，就有 x>a，原命题失败。\n③ 因而 a≥1。1 不是定义区间内可取的最大值，所以 a=1 仍可成立。"
  },
  {
    "id": "g3-functions-parameter-inequalities-fill-01",
    "topic": "高三函数与导数·含参不等式",
    "kind": "fill",
    "title": "对数不等式取等点",
    "question": "不等式 x−1−ln x≥0（x>0）的等号成立时 x=____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 设 h=x−1−ln x，导数为 (x−1)/x。\n② h 在 x=1 左减右增，且 h(1)=0。\n③ 因而等号仅在 x=1 成立。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-parameter-inequalities-fill-02",
    "topic": "高三函数与导数·含参不等式",
    "kind": "fill",
    "title": "全域二次不等式",
    "question": "若对任意 x∈R，x²−2x+a≥0，则 a 的范围是____。",
    "options": [],
    "correctAnswer": "a≥1",
    "explanation": "① 配方为 (x−1)²+a−1，最小值 a−1 在 x=1 取到。\n② 恒非负要求 a−1≥0，所以 a≥1。\n③ 反之 a≥1 时平方项非负，原不等式对所有 x 成立。",
    "acceptedAnswers": [
      "a≥1",
      "a>=1",
      "[1,+∞)"
    ]
  },
  {
    "id": "g3-functions-parameter-inequalities-fill-03",
    "topic": "高三函数与导数·含参不等式",
    "kind": "fill",
    "title": "存在解的参数范围",
    "question": "若存在 x∈R，使 x²+2x+a<0，则 a 的范围是____。",
    "options": [],
    "correctAnswer": "a<1",
    "explanation": "① 配方为 (x+1)²+a−1，最小值为 a−1，在 x=−1 取得。\n② 存在函数值小于 0，等价于最小值 a−1<0。\n③ 因而 a<1，反之取 x=−1 即满足。",
    "acceptedAnswers": [
      "a<1",
      "(-∞,1)"
    ]
  },
  {
    "id": "g3-functions-parameter-inequalities-written-01",
    "topic": "高三函数与导数·含参不等式",
    "kind": "written",
    "title": "证明对数不等式并讨论严格性",
    "question": "设 h(x)=x−1−ln x，x>0。\n（1）证明 h(x)≥0，并求等号条件；\n（2）求使 h(x)>b 对所有 x>0 恒成立的 b 的范围；\n（3）求使存在 x>0 满足 h(x)≤b 的 b 的范围。",
    "options": [],
    "correctAnswer": "（1）h≥0，x=1 取等；（2）b<0；（3）b≥0。",
    "explanation": "（1）h′(x)=1−1/x=(x−1)/x。因 x>0，x<1 时 h′<0，x>1 时 h′>0，所以 h 先减后增，在 x=1 取得全域最小值 h(1)=1−1−ln1=0。因此 h(x)≥0，且等号仅在 x=1 成立。\n（2）若 h(x)>b 对所有 x 成立，取 x=1 得 0>b，所以 b<0 必要。反之 b<0 时，h(x)≥0>b，所以充分，范围为 (−∞,0)。\n（3）若存在 h(x)≤b，则由 h(x)≥0 得 b≥0。反之 b≥0 时，取 x=1，有 h(1)=0≤b，满足存在性。所以 b∈[0,+∞)。\n两个命题互为否定，参数范围在 R 中互补。最小值可取，严格不等号的边界必须排除。",
    "checkpoints": [
      "用导数求全域最小值和唯一取等点",
      "（2）证明必要与充分，排除 b=0",
      "（3）给出具体见证并核对互补关系"
    ],
    "hint": "所有参数判断围绕能取到的最小值 0 展开。"
  },
  {
    "id": "g3-functions-parameter-inequalities-written-02",
    "topic": "高三函数与导数·含参不等式",
    "kind": "written",
    "title": "分离参数的完整证明",
    "question": "设 g(x)=ln x/x，x>0。\n（1）求 g 的单调区间与最大值；\n（2）求 ln x≤ax 对所有 x>0 恒成立时 a 的范围，并求边界参数下的取等点。",
    "options": [],
    "correctAnswer": "（1）(0,e] 递增，[e,+∞) 递减，最大值 1/e；（2）a≥1/e，a=1/e 时仅 x=e 取等。",
    "explanation": "（1）商法则给出 g′(x)=((1/x)x−ln x)/x²=(1−ln x)/x²。分母 x²>0；当 0<x<e 时 ln x<1，导数为正；当 x>e 时导数为负。因此 g 在 (0,e] 上严格递增，在 [e,+∞) 上严格递减，全域最大值为 g(e)=ln e/e=1/e，且唯一取点为 e。\n（2）x>0，故 ln x≤ax 等价于 g(x)≤a。若原式恒成立，取 x=e 得 1≤ae，所以 a≥1/e 必要。\n若 a≥1/e，由（1）得 g(x)≤1/e≤a，乘以正数 x，得到 ln x≤ax，对所有 x>0 成立，条件充分。\n因此 a∈[1/e,+∞)。边界 a=1/e 时，取等要求 g(x)=1/e，由（1）的严格增减知仅 x=e；若 a>1/e，则 g(x)<a，对所有 x>0 为严格不等式。",
    "checkpoints": [
      "正确求导、判号并确定全域最大值",
      "除以正数分离参数，证明范围必要充分",
      "完整讨论边界参数的唯一取等点"
    ],
    "hint": "先说明 x 为正，再把 a 放在不等式单独一侧。"
  },
  {
    "id": "g3-functions-comprehensive-choice-01",
    "topic": "高三函数与导数·导数综合",
    "kind": "choice",
    "title": "对数方程的根数分类",
    "question": "方程 ln x=ax 恰有两个不同正实根的条件是：",
    "options": [
      {
        "key": "A",
        "text": "a<0"
      },
      {
        "key": "B",
        "text": "a=1/e"
      },
      {
        "key": "C",
        "text": "0<a<1/e"
      },
      {
        "key": "D",
        "text": "a>1/e"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 化为 ln x/x=a。g=ln x/x 在 (0,e] 递增、[e,+∞) 递减，最大值为 1/e。\n② 左支从负无穷升至 1/e；右支始终为正并趋于 0，所以 0<a<1/e 时两支各有一个交点。\n③ a=1/e 时两交点合为 x=e；a≤0 时右支没有交点，不能有两个根，故选 C。"
  },
  {
    "id": "g3-functions-comprehensive-choice-02",
    "topic": "高三函数与导数·导数综合",
    "kind": "choice",
    "title": "指数函数与水平线",
    "question": "f(x)=e^x−x，方程 f(x)=a 有两个不同实根的条件是：",
    "options": [
      {
        "key": "A",
        "text": "a>1"
      },
      {
        "key": "B",
        "text": "a=1"
      },
      {
        "key": "C",
        "text": "a<1"
      },
      {
        "key": "D",
        "text": "a≥1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① f′=e^x−1，在 x<0 时负、x>0 时正，全域最小值 f(0)=1。\n② x→−∞ 时 e^x−x→+∞，x→+∞ 时也趋于 +∞，两侧分别严格单调。\n③ 所以 a>1 时两侧各一个根，a=1 只有根 0，a<1 无根。"
  },
  {
    "id": "g3-functions-comprehensive-choice-03",
    "topic": "高三函数与导数·导数综合",
    "kind": "choice",
    "title": "分类依据来自导数根",
    "question": "f(x)=x³−3ax 有两个不同极值点，当且仅当：",
    "options": [
      {
        "key": "A",
        "text": "a<0"
      },
      {
        "key": "B",
        "text": "a=0"
      },
      {
        "key": "C",
        "text": "a>0"
      },
      {
        "key": "D",
        "text": "任意 a"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① f′=3(x²−a)。a>0 时有两个不同根 ±√a，且导数正、负、正，均发生变号。\n② a=0 时只有驻点 0 且不变号；a<0 时没有驻点。\n③ 所以条件为 a>0。"
  },
  {
    "id": "g3-functions-comprehensive-choice-04",
    "topic": "高三函数与导数·导数综合",
    "kind": "choice",
    "title": "重根边界的不同根数",
    "question": "方程 x³−3x=2 的不同实根个数为：",
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
        "text": "0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 移项为 x³−3x−2=0。\n② 因式分解得 (x−2)(x+1)²=0。\n③ 根为 x=2 和 x=−1，后者是重根但只算一个不同根，所以共 2 个。"
  },
  {
    "id": "g3-functions-comprehensive-fill-01",
    "topic": "高三函数与导数·导数综合",
    "kind": "fill",
    "title": "指数不等式取等点",
    "question": "e^x≥1+x 对所有 x∈R 成立，等号仅在 x=____ 时成立。",
    "options": [],
    "correctAnswer": "0",
    "explanation": "① 设 H=e^x−1−x，H′=e^x−1。\n② x<0 时 H′<0，x>0 时 H′>0，全域最小值在 0 取得。\n③ H(0)=1−1−0=0，故取等点为 0。",
    "acceptedAnswers": [
      "0"
    ]
  },
  {
    "id": "g3-functions-comprehensive-fill-02",
    "topic": "高三函数与导数·导数综合",
    "kind": "fill",
    "title": "二重根的参数",
    "question": "若方程 x²−2x+a=0 恰有一个不同实根，则 a=____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 配方为 (x−1)²=1−a。\n② 右边为 0 时恰有一个不同实根，故 1−a=0。\n③ 得 a=1，此时唯一根为 1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-comprehensive-fill-03",
    "topic": "高三函数与导数·导数综合",
    "kind": "fill",
    "title": "参数边界的根数",
    "question": "方程 ln x=x/e 的不同正实根个数为____。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 化为 g(x)=ln x/x=1/e。\n② g 在 (0,e] 递增、[e,+∞) 递减，且唯一最大值为 1/e，在 x=e 取得。\n③ 因而只有一个不同正实根。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-functions-comprehensive-written-01",
    "topic": "高三函数与导数·导数综合",
    "kind": "written",
    "title": "对数方程的全参数根数",
    "question": "讨论方程 ln x=ax（x>0）的不同实根个数，并说明各临界参数的情况。\n（1）研究 g(x)=ln x/x 的单调性与两端变化；\n（2）按 a 分类给出根数。",
    "options": [],
    "correctAnswer": "a≤0：1；0<a<1/e：2；a=1/e：1；a>1/e：0。",
    "explanation": "（1）g′=(1−ln x)/x²，在 (0,e) 为正，在 (e,+∞) 为负，所以 g 在 (0,e] 严格递增，在 [e,+∞) 严格递减，最大值为 1/e；g(1)=0。\nx→0+ 时令 t=1/x→+∞，g(x)=−t ln t→−∞。x→+∞ 时 g(x)→0+：例如 x≥1 时 ln x=2ln√x≤2(√x−1)，所以 0≤ln x/x≤2/√x，右边趋于 0；在 x>1 时 ln x>0。\n（2）方程等价于 g(x)=a。若 a<0，左支在 (0,1) 连续严格递增且从 −∞ 变到 0，恰一个交点；右支为正，无交点。若 a=0，唯一根 x=1，右支趋于 0 但不能取到 0。\n若 0<a<1/e，左支在 (1,e) 与水平线交一次；右支在 (e,+∞) 由 1/e 严格降向 0，也交一次，共两个不同根。\n若 a=1/e，只有最大点 x=e 一个根。若 a>1/e，超过全域最大值，无根。\n上述分类覆盖全部参数，特别注意趋于 0 不等于取得 0。",
    "checkpoints": [
      "求导判单调，说明最大值与端点变化",
      "完整讨论 a<0、a=0、0<a<1/e",
      "处理 a=1/e 与 a>1/e，区分趋近值与可取值"
    ],
    "hint": "将根数转化为 g 图象与水平线 y=a 的交点数。"
  },
  {
    "id": "g3-functions-comprehensive-written-02",
    "topic": "高三函数与导数·导数综合",
    "kind": "written",
    "title": "指数不等式与根数综合",
    "question": "设 F(x)=e^x−x，x∈R。\n（1）证明 e^x≥1+x，并求等号条件；\n（2）讨论方程 F(x)=a 的不同实根个数。",
    "options": [],
    "correctAnswer": "（1）恒成立，x=0 取等；（2）a<1：0；a=1：1；a>1：2。",
    "explanation": "（1）F′(x)=e^x−1。由于指数函数严格递增且 e⁰=1，当 x<0 时导数为负，x>0 时导数为正，所以 F 在 (−∞,0] 上严格递减，在 [0,+∞) 上严格递增，全域最小值为 F(0)=1。因而 e^x−x≥1，即 e^x≥1+x，等号仅在 x=0。\n（2）当 a<1 时低于最小值，方程无根；a=1 时只有 x=0 一个根。\n若 a>1，负半轴上 F(x)≥−x，随 x→−∞ 趋于 +∞，而 F(0)=1；结合连续性及严格递减，在 (−∞,0) 恰有一根。\n还需说明正半轴的函数值无上界。令 K(x)=e^x−1−x−x²/2（x≥0）。由（1）可知 K′(x)=e^x−1−x≥0，且 K(0)=0，所以 K(x)≥0，进而 F(x)≥1+x²/2→+∞。结合 F 在 [0,+∞) 连续严格递增，在 (0,+∞) 恰有一根。\n两个区间不相交，所以 a>1 时恰有两个不同实根。不能只由最小值断言两侧都有根，还需说明两侧能覆盖所需高度。",
    "checkpoints": [
      "求导判断先减后增，证明不等式及取等",
      "处理 a≤1，并证明负支覆盖所有大于 1 的高度",
      "完整证明正支无上界，结合连续与单调确定根数"
    ],
    "hint": "最小值决定哪些高度不可达，两支的单调性和无界性决定每支交点数。"
  }
];
