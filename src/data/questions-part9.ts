import type { Question } from "./questions-part1";

// 高三第五模块；本站原创。既有 ID/topic 与历史记录关联，发布后保持稳定。
export const practiceTopics = [
  "高三数列·通项与递推",
  "高三数列·等差数列",
  "高三数列·等比数列",
  "高三数列·求和方法",
  "高三数列·递推转化",
  "高三数列·综合与不等式"
] as const;
export const practiceChapters = [{ title: "数列", topics: [...practiceTopics] }] as const;

export const questions: Question[] = [
  {
    "id": "g3-sequences-concept-recursion-choice-01",
    "topic": "高三数列·通项与递推",
    "kind": "choice",
    "title": "代入项号",
    "question": "已知 aₙ=2n−1，则第五项为：",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "11"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 第五项对应正整数项号 n=5。\n② a₅=2×5−1=9，故选 B；不能把项号与项值混淆。"
  },
  {
    "id": "g3-sequences-concept-recursion-choice-02",
    "topic": "高三数列·通项与递推",
    "kind": "choice",
    "title": "由和求项",
    "question": "已知前 n 项和 Sₙ=n²+2n，则适用于所有正整数 n 的通项为：",
    "options": [
      {
        "key": "A",
        "text": "2n"
      },
      {
        "key": "B",
        "text": "2n+1"
      },
      {
        "key": "C",
        "text": "n+2"
      },
      {
        "key": "D",
        "text": "n²+2n"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 首项 a₁=S₁=1+2=3。\n② n≥2 时，aₙ=Sₙ−Sₙ₋₁=n²+2n−[(n−1)²+2(n−1)]=2n+1。\n③ 2×1+1=3，与首项一致，可合并为 aₙ=2n+1，选 B。"
  },
  {
    "id": "g3-sequences-concept-recursion-choice-03",
    "topic": "高三数列·通项与递推",
    "kind": "choice",
    "title": "逐次递推",
    "question": "已知 a₁=2，aₙ₊₁=aₙ+2n（n≥1），则 a₃为：",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "8"
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
    "correctAnswer": "B",
    "explanation": "① 先用 n=1 得 a₂=2+2=4。\n② 再用 n=2 得 a₃=4+4=8，故选 B。递推式中的 n 是前一项的项号。"
  },
  {
    "id": "g3-sequences-concept-recursion-choice-04",
    "topic": "高三数列·通项与递推",
    "kind": "choice",
    "title": "项号必须为正整数",
    "question": "数列 aₙ=2n²−3n+1 中，值为零的项共有几项？",
    "options": [
      {
        "key": "A",
        "text": "0 项"
      },
      {
        "key": "B",
        "text": "1 项"
      },
      {
        "key": "C",
        "text": "2 项"
      },
      {
        "key": "D",
        "text": "3 项"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 令 2n²−3n+1=(2n−1)(n−1)=0，候选 n=1/2 或 n=1。\n② 项号必须是正整数，舍去 1/2，只保留 n=1，故恰有 1 项，选 B。"
  },
  {
    "id": "g3-sequences-concept-recursion-fill-01",
    "topic": "高三数列·通项与递推",
    "kind": "fill",
    "title": "相邻部分和相减",
    "question": "已知 Sₙ=3n²−n，填 a₄的值。",
    "options": [],
    "correctAnswer": "20",
    "explanation": "① a₄=S₄−S₃。\n② S₄=3×16−4=44，S₃=3×9−3=24。\n③ a₄=44−24=20。",
    "acceptedAnswers": [
      "20"
    ]
  },
  {
    "id": "g3-sequences-concept-recursion-fill-02",
    "topic": "高三数列·通项与递推",
    "kind": "fill",
    "title": "递推的次数",
    "question": "已知 a₁=1，aₙ₊₁=aₙ+3，填 a₄的值。",
    "options": [],
    "correctAnswer": "10",
    "explanation": "① 从第一项到第四项有 3 次递推。\n② a₄=1+3×3=10；也可依次算出 a₂=4、a₃=7、a₄=10。",
    "acceptedAnswers": [
      "10"
    ]
  },
  {
    "id": "g3-sequences-concept-recursion-fill-03",
    "topic": "高三数列·通项与递推",
    "kind": "fill",
    "title": "符号与整数筛选",
    "question": "数列 aₙ=n²−6n+8 的负项共有多少项？填项数。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① aₙ=(n−2)(n−4)<0 等价于 2<n<4。\n② 这个开区间中的正整数只有 n=3，a₃=−1。\n③ 两端 n=2、4 的项为零而非负数，因此共有 1 项。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-sequences-concept-recursion-written-01",
    "topic": "高三数列·通项与递推",
    "kind": "written",
    "title": "首项不能直接套差分",
    "question": "数列前 n 项和 Sₙ=n²+n+1。（1）求通项；（2）判断是否为等差数列；（3）由通项求和，核对原 Sₙ。",
    "options": [],
    "correctAnswer": "a₁=3；n≥2 时 aₙ=2n；不是等差数列；求和还原 n²+n+1。",
    "explanation": "（1）先单独求首项：a₁=S₁=1+1+1=3。\nn≥2 时，aₙ=Sₙ−Sₙ₋₁=(n²+n+1)−[(n−1)²+(n−1)+1]=2n。\n若把 n=1 代入 2n，只得到 2，与真实首项 3 不符。因此必须写成分段通项。\n（2）a₂=4、a₃=6；a₂−a₁=1，而 a₃−a₂=2。相邻差不恒定，所以不是等差数列。\n（3）n≥2 时，a₁+…+aₙ=3+2(2+3+…+n)=3+2[n(n+1)/2−1]=n²+n+1。\nn=1 时求和就是 3，也与原式一致，所有正整数均已核验。",
    "checkpoints": [
      "单独求出 a₁并正确得到 n≥2 的差分式",
      "比较前两个相邻差，说明非等差",
      "分离首项求和并检验 n=1"
    ],
    "hint": "先算 S₁，再只在 n≥2 时使用 Sₙ−Sₙ₋₁。"
  },
  {
    "id": "g3-sequences-concept-recursion-written-02",
    "topic": "高三数列·通项与递推",
    "kind": "written",
    "title": "累加法与单调性",
    "question": "已知 a₁=1，aₙ₊₁−aₙ=2n+1。（1）求通项；（2）证明数列严格递增；（3）求 aₙ>100 时最小的项号。",
    "options": [],
    "correctAnswer": "aₙ=n²；严格递增；最小项号为 11。",
    "explanation": "（1）n≥2 时，把 k=1 至 n−1 的递推式相加，左边相消得 aₙ−a₁=Σ(2k+1)。\n右边为 2×(n−1)n/2+(n−1)=n²−1，所以 aₙ=n²。n=1 时代入得 1，与初值相符。\n（2）任意正整数 n 都有 aₙ₊₁−aₙ=2n+1>0，因此数列严格递增。\n（3）aₙ>100 等价于 n²>100。因 n 为正整数，等价于 n>10，最小为 11。\n核验：a₁₀=100 不满足严格大于，a₁₁=121 满足，故边界无遗漏。",
    "checkpoints": [
      "累加时正确写出从 1 至 n−1 的范围",
      "化简得到 n²并检验首项",
      "用差值为正证明递增，并筛出最小项号 11"
    ],
    "hint": "从 a₂−a₁ 开始累加，最后一式是 aₙ−aₙ₋₁。"
  },
  {
    "id": "g3-sequences-arithmetic-choice-01",
    "topic": "高三数列·等差数列",
    "kind": "choice",
    "title": "由两项求公差",
    "question": "等差数列满足 a₃=7、a₈=22，其公差为：",
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
        "text": "5"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 相隔 8−3=5 个公差，a₈−a₃=5d。\n② 5d=22−7=15，得 d=3，故选 B。"
  },
  {
    "id": "g3-sequences-arithmetic-choice-02",
    "topic": "高三数列·等差数列",
    "kind": "choice",
    "title": "零项造成并列最大",
    "question": "等差数列首项 12，公差 −2，其前 n 项和最大时 n 为：",
    "options": [
      {
        "key": "A",
        "text": "仅 6"
      },
      {
        "key": "B",
        "text": "仅 7"
      },
      {
        "key": "C",
        "text": "6 或 7"
      },
      {
        "key": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① aₙ=12−2(n−1)=14−2n，前 6 项为正，第 7 项为零，第 8 项起为负。\n② Sₙ−Sₙ₋₁=aₙ，因此 S₆达到最大，加入零项后 S₇=S₆，之后严格下降。\n③ 两个最大取点为 n=6、7，选 C。"
  },
  {
    "id": "g3-sequences-arithmetic-choice-03",
    "topic": "高三数列·等差数列",
    "kind": "choice",
    "title": "对称项求和",
    "question": "等差数列中 a₂+a₈=20，则 S₉等于：",
    "options": [
      {
        "key": "A",
        "text": "90"
      },
      {
        "key": "B",
        "text": "100"
      },
      {
        "key": "C",
        "text": "180"
      },
      {
        "key": "D",
        "text": "45"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 因 2+8=1+9，所以 a₂+a₈=a₁+a₉=20。\n② S₉=9(a₁+a₉)/2=9×20/2=90，选 A。"
  },
  {
    "id": "g3-sequences-arithmetic-choice-04",
    "topic": "高三数列·等差数列",
    "kind": "choice",
    "title": "由两项还原通项",
    "question": "等差数列满足 a₂=4、a₅=13，则 a₁₀等于：",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "31"
      },
      {
        "key": "D",
        "text": "34"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① a₅−a₂=3d=9，得 d=3。\n② 从第 2 项到第 10 项相隔 8 个公差，a₁₀=4+8×3=28，选 B。"
  },
  {
    "id": "g3-sequences-arithmetic-fill-01",
    "topic": "高三数列·等差数列",
    "kind": "fill",
    "title": "通项中的 n−1",
    "question": "等差数列 a₁=−2、d=3，填 a₆。",
    "options": [],
    "correctAnswer": "13",
    "explanation": "① a₆=a₁+5d。\n② a₆=−2+5×3=13。",
    "acceptedAnswers": [
      "13"
    ]
  },
  {
    "id": "g3-sequences-arithmetic-fill-02",
    "topic": "高三数列·等差数列",
    "kind": "fill",
    "title": "首末配对",
    "question": "等差数列 a₁=3、a₁₀=21，填 S₁₀。",
    "options": [],
    "correctAnswer": "120",
    "explanation": "① 前 10 项可首末配对，每对和为 3+21=24。\n② S₁₀=10×24/2=120。",
    "acceptedAnswers": [
      "120"
    ]
  },
  {
    "id": "g3-sequences-arithmetic-fill-03",
    "topic": "高三数列·等差数列",
    "kind": "fill",
    "title": "正项的个数",
    "question": "数列 aₙ=17−3n 中正项共有多少项？",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 17−3n>0 等价于 n<17/3。\n② 正整数项号为 1、2、3、4、5，共 5 项。a₆=−1，已不是正项。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-sequences-arithmetic-written-01",
    "topic": "高三数列·等差数列",
    "kind": "written",
    "title": "对称项与乘积的两组解",
    "question": "等差数列满足 a₃+a₇=30、a₂a₈=144。（1）求所有可能的首项和公差；（2）分别求 S₁₀。",
    "options": [],
    "correctAnswer": "(a₁,d)=(3,3) 或 (27,−3)；S₁₀分别为 165、135。",
    "explanation": "（1）设公差 d，利用对称项关系 a₃+a₇=2a₅，得 a₅=15。\n于是 a₂=15−3d，a₈=15+3d。代入乘积：(15−3d)(15+3d)=144。\n展开得 225−9d²=144，即 d²=9，故 d=3 或 d=−3，两种符号都要保留。\n由 a₁=a₅−4d：d=3 时 a₁=3；d=−3 时 a₁=27。两组都使 a₃+a₇=30、a₂a₈=144，均有效。\n（2）S₁₀=10a₁+45d。第一组得 30+135=165；第二组得 270−135=135。\n本题未要求递增，因此不能无理由舍去负公差组。",
    "checkpoints": [
      "用对称项确定 a₅=15",
      "解出 d=±3并回代两组首项",
      "分别代入求和公式，不遗漏负公差组"
    ],
    "hint": "以中间项 a₅为中心表示 a₂、a₈，乘积可化成平方差。"
  },
  {
    "id": "g3-sequences-arithmetic-written-02",
    "topic": "高三数列·等差数列",
    "kind": "written",
    "title": "部分和最值与正值范围",
    "question": "已知 aₙ=20−3n。（1）求 Sₙ；（2）求 Sₙ的最大值及取点；（3）求 Sₙ>0 的全部正整数 n。",
    "options": [],
    "correctAnswer": "Sₙ=n(37−3n)/2；最大值 57，在 n=6 取得；Sₙ>0 时 n=1,…,12。",
    "explanation": "（1）a₁=17，公差 −3。Sₙ=n(a₁+aₙ)/2=n(17+20−3n)/2=n(37−3n)/2。\n（2）a₆=2>0，a₇=−1<0；aₙ随 n 递减。因此 Sₙ在 n=1 至 6 严格增加，n=7 起加入的项均为负，故从 S₆后严格下降。\n最大值为 S₆=6(37−18)/2=57，且唯一在 n=6 取得。也可配方后比较中心 37/6 两侧的整数 6、7：S₆=57>S₇=56。\n（3）因为 n>0，Sₙ>0 等价于 37−3n>0，即 n<37/3。\n筛正整数得 n=1、2、…、12。检查 S₁₂=6>0，S₁₃=−13<0，端点正确。",
    "checkpoints": [
      "正确求出首项和部分和表达式",
      "依据正负项或邻近整数比较确定最大值",
      "解不等式并筛出 1 至 12 的正整数"
    ],
    "hint": "Sₙ−Sₙ₋₁=aₙ。数列本身递减与部分和递减不是同一回事。"
  },
  {
    "id": "g3-sequences-geometric-choice-01",
    "topic": "高三数列·等比数列",
    "kind": "choice",
    "title": "由相隔项求公比",
    "question": "等比数列满足 a₂=6、a₅=48，公比 q 为：",
    "options": [
      {
        "key": "A",
        "text": "1/2"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "−2"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 等比数列各项非零，可相除得到 a₅/a₂=q³=48/6=8。\n② 实数立方方程只有实根 q=2，故选 B；不能把立方根写成 ±2。"
  },
  {
    "id": "g3-sequences-geometric-choice-02",
    "topic": "高三数列·等比数列",
    "kind": "choice",
    "title": "公比为一",
    "question": "等比数列首项 2，公比 1，则 S₅等于：",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① q=1 时每一项都等于首项 2。\n② S₅=5×2=10，选 C。不能在分母 1−q 为零时使用分式求和公式。"
  },
  {
    "id": "g3-sequences-geometric-choice-03",
    "topic": "高三数列·等比数列",
    "kind": "choice",
    "title": "负公比的符号",
    "question": "等比数列 a₁=3，q=−2，则 a₄为：",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "−12"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "−24"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① a₄=a₁q³=3×(−2)³。\n② 奇次幂为负，a₄=3×(−8)=−24，故选 D。"
  },
  {
    "id": "g3-sequences-geometric-choice-04",
    "topic": "高三数列·等比数列",
    "kind": "choice",
    "title": "等比中项的双符号",
    "question": "实数 −2、G、−8 依次成等比数列，则 G 为：",
    "options": [
      {
        "key": "A",
        "text": "仅 4"
      },
      {
        "key": "B",
        "text": "仅 −4"
      },
      {
        "key": "C",
        "text": "±4"
      },
      {
        "key": "D",
        "text": "±16"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 必须 G²=(−2)(−8)=16，所以候选 G=4 或 −4。\n② G=4 时公比 −2；G=−4 时公比 2，两种都成立，选 C。"
  },
  {
    "id": "g3-sequences-geometric-fill-01",
    "topic": "高三数列·等比数列",
    "kind": "fill",
    "title": "等比求和",
    "question": "等比数列 a₁=1/2、q=2，填 S₆。",
    "options": [],
    "correctAnswer": "63/2",
    "explanation": "① q≠1，可用 S₆=a₁(1−q⁶)/(1−q)。\n② S₆=(1/2)(1−64)/(1−2)=63/2，即 31.5。",
    "acceptedAnswers": [
      "63/2",
      "31.5"
    ]
  },
  {
    "id": "g3-sequences-geometric-fill-02",
    "topic": "高三数列·等比数列",
    "kind": "fill",
    "title": "先求公比再还原首项",
    "question": "等比数列满足 a₃=12、a₆=96，填 a₁。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① a₆/a₃=q³=8，得 q=2。\n② a₃=a₁q²=4a₁=12，故 a₁=3。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-sequences-geometric-fill-03",
    "topic": "高三数列·等比数列",
    "kind": "fill",
    "title": "交错符号的有限和",
    "question": "等比数列 a₁=2、q=−1，填 S₉。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 数列为 2、−2、2、−2、…，每两项相消。\n② 前 8 项和为零，第 9 项为 2，所以 S₉=2。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-sequences-geometric-written-01",
    "topic": "高三数列·等比数列",
    "kind": "written",
    "title": "等比数列的两种可能",
    "question": "等比数列满足 a₁+a₃=10、a₂=4。（1）求全部可能的 a₁、q；（2）分别求 S₅。",
    "options": [],
    "correctAnswer": "(a₁,q)=(2,2) 或 (8,1/2)；S₅分别为 62、31/2。",
    "explanation": "（1）由等比中项关系 a₁a₃=a₂²=16，结合 a₁+a₃=10，可把 a₁、a₃视为 x²−10x+16=0 的两根。\n因式分解得 (x−2)(x−8)=0，所以 (a₁,a₃)=(2,8) 或 (8,2)。\n第一组 q=a₂/a₁=4/2=2；第二组 q=4/8=1/2。分别回代可得第三项 8、2，都满足条件。\n（2）第一组 S₅=2(2⁵−1)/(2−1)=62。\n第二组 S₅=8[1−(1/2)⁵]/(1−1/2)=16×31/32=31/2。\n没有给定单调性，不能只保留公比大于 1 的一组。",
    "checkpoints": [
      "利用和与积求出首项和第三项的两种排列",
      "分别求公比并回代核验",
      "对两组分别完成有限和计算"
    ],
    "hint": "先用 a₁a₃=a₂²，再求二次方程的两根。"
  },
  {
    "id": "g3-sequences-geometric-written-02",
    "topic": "高三数列·等比数列",
    "kind": "written",
    "title": "增长次数与累计量",
    "question": "某公益计划第一个月投入 1000 元，以后每月投入额是上月的 1.1 倍，不另计利息。（1）求第 n 月投入额；（2）求前 n 月累计投入；（3）累计不少于 3000 元最少要几个月？",
    "options": [],
    "correctAnswer": "aₙ=1000(1.1)ⁿ⁻¹；Sₙ=10000[(1.1)ⁿ−1]；最少 3 个月。",
    "explanation": "（1）首月为初值，到第 n 月共增长 n−1 次，因此 aₙ=1000(1.1)ⁿ⁻¹。\n（2）这是首项 1000、公比 1.1 的等比数列，Sₙ=1000[(1.1)ⁿ−1]/(1.1−1)=10000[(1.1)ⁿ−1]。\n（3）每月投入为正，所以 Sₙ严格递增。S₁=1000<3000，S₂=1000+1100=2100<3000。\nS₃=2100+1210=3310≥3000，因此首次达到要求的项号为 n=3。\n累计的是各月投入额之和，不是第 n 月的单笔投入额；本模型没有复利账户余额。",
    "checkpoints": [
      "区分 n−1 次增长与 n 个月",
      "正确写出有限等比和与单位",
      "比较相邻累计值并用递增性说明最少月数"
    ],
    "hint": "分别列出每月投入 aₙ与累计投入 Sₙ，再比较 2100 与 3310。"
  },
  {
    "id": "g3-sequences-summation-choice-01",
    "topic": "高三数列·求和方法",
    "kind": "choice",
    "title": "相邻分母裂项",
    "question": "下列和式的结果是：",
    "options": [
      {
        "key": "A",
        "text": "n/(n+1)"
      },
      {
        "key": "B",
        "text": "1/(n+1)"
      },
      {
        "key": "C",
        "text": "n"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 1/[k(k+1)]=1/k−1/(k+1)。\n② 从 k=1 加到 n，中间项相消，剩 1−1/(n+1)=n/(n+1)，选 A。",
    "formula": "\\sum_{k=1}^{n}\\frac1{k(k+1)}"
  },
  {
    "id": "g3-sequences-summation-choice-02",
    "topic": "高三数列·求和方法",
    "kind": "choice",
    "title": "错位相减的边界项",
    "question": "Tₙ=2+2·2²+3·2³+…+n·2ⁿ，则 Tₙ为：",
    "options": [
      {
        "key": "A",
        "text": "n·2ⁿ⁺¹"
      },
      {
        "key": "B",
        "text": "(n−1)2ⁿ⁺¹+2"
      },
      {
        "key": "C",
        "text": "(n+1)2ⁿ⁺¹−2"
      },
      {
        "key": "D",
        "text": "2ⁿ−1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 2Tₙ−Tₙ=n·2ⁿ⁺¹−(2+2²+…+2ⁿ)。\n② 括号内等比和为 2(2ⁿ−1)=2ⁿ⁺¹−2。\n③ Tₙ=n·2ⁿ⁺¹−2ⁿ⁺¹+2=(n−1)2ⁿ⁺¹+2，选 B。"
  },
  {
    "id": "g3-sequences-summation-choice-03",
    "topic": "高三数列·求和方法",
    "kind": "choice",
    "title": "奇数项求和",
    "question": "前 n 个正奇数之和 1+3+…+(2n−1) 为：",
    "options": [
      {
        "key": "A",
        "text": "n(n+1)"
      },
      {
        "key": "B",
        "text": "n²"
      },
      {
        "key": "C",
        "text": "2n²"
      },
      {
        "key": "D",
        "text": "n²−1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 这是首项 1、末项 2n−1、项数 n 的等差数列。\n② 和为 n[1+(2n−1)]/2=n²，故选 B。"
  },
  {
    "id": "g3-sequences-summation-choice-04",
    "topic": "高三数列·求和方法",
    "kind": "choice",
    "title": "成对相消与奇偶项数",
    "question": "对任意正整数 m，1−1+1−1+…（共 2m 项）的和为：",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "−1"
      },
      {
        "key": "C",
        "text": "2m"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 按原顺序把相邻两项分为 m 对，每一对均为 1−1=0。\n② 总项数为偶数，没有多出来的一项，因此和为零，选 D。这里只讨论有限和。"
  },
  {
    "id": "g3-sequences-summation-fill-01",
    "topic": "高三数列·求和方法",
    "kind": "fill",
    "title": "分组求和",
    "question": "计算 (2×1+3)+(2×2+3)+…+(2×5+3)。",
    "options": [],
    "correctAnswer": "45",
    "explanation": "① 把和拆为 2(1+2+3+4+5)+3×5。\n② 2×15+15=45。常数项也出现 5 次。",
    "acceptedAnswers": [
      "45"
    ]
  },
  {
    "id": "g3-sequences-summation-fill-02",
    "topic": "高三数列·求和方法",
    "kind": "fill",
    "title": "错位和的数值核验",
    "question": "计算 1·2⁰+2·2¹+3·2²+4·2³。",
    "options": [],
    "correctAnswer": "49",
    "explanation": "① 逐项计算为 1、4、12、32。\n② 相加得 1+4+12+32=49；也与 (n−1)2ⁿ+1 在 n=4 时的值一致。",
    "acceptedAnswers": [
      "49"
    ]
  },
  {
    "id": "g3-sequences-summation-fill-03",
    "topic": "高三数列·求和方法",
    "kind": "fill",
    "title": "裂项系数不能遗漏",
    "question": "计算从 k=1 到 10 的 1/[(2k−1)(2k+1)] 之和。",
    "options": [],
    "correctAnswer": "10/21",
    "explanation": "① 1/[(2k−1)(2k+1)]=(1/2)[1/(2k−1)−1/(2k+1)]。\n② 相消后剩 (1/2)(1−1/21)=10/21。\n③ 相邻奇数相差 2，因此裂项时必须有系数 1/2。",
    "acceptedAnswers": [
      "10/21"
    ]
  },
  {
    "id": "g3-sequences-summation-written-01",
    "topic": "高三数列·求和方法",
    "kind": "written",
    "title": "隔项裂项的首尾保留",
    "question": "设 Tₙ为从 k=1 至 n 的 1/[k(k+2)] 之和。（1）求 Tₙ；（2）证明对所有正整数 n，0<Tₙ<3/4。",
    "options": [],
    "correctAnswer": "Tₙ=3/4−1/[2(n+1)]−1/[2(n+2)]，且 0<Tₙ<3/4。",
    "explanation": "（1）先裂项：1/[k(k+2)]=(1/2)[1/k−1/(k+2)]。\n逐项排列为 Tₙ=(1/2)[(1−1/3)+(1/2−1/4)+…+(1/n−1/(n+2))]。\n相减跨了两项，故首尾各保留两项：Tₙ=(1/2)[1+1/2−1/(n+1)−1/(n+2)]。\n化简为 Tₙ=3/4−1/[2(n+1)]−1/[2(n+2)]。当 n=1 时该式为 3/4−1/4−1/6=1/3，与原和一致；无需假设首尾项互不重叠。\n（2）原和中每项分母均为正，所以 Tₙ>0。显式公式中从 3/4 减去了两个严格正数，故 Tₙ<3/4。\n因此 0<Tₙ<3/4，对每个有限的正整数 n 都成立，两端均不能取等。",
    "checkpoints": [
      "正确裂项，保留系数 1/2",
      "保留首尾各两项并核验 n=1",
      "分别证明正性与严格上界"
    ],
    "hint": "把前两项和最后两项写出来，裂项跨两项，不能只剩一对首尾。"
  },
  {
    "id": "g3-sequences-summation-written-02",
    "topic": "高三数列·求和方法",
    "kind": "written",
    "title": "错位相减完整推导",
    "question": "设 Tₙ=1·3+2·3²+…+n·3ⁿ。（1）用错位相减求 Tₙ；（2）求 T₄并用直接相加核验。",
    "options": [],
    "correctAnswer": "Tₙ=[(2n−1)3ⁿ⁺¹+3]/4；T₄=426。",
    "explanation": "（1）写出 Tₙ=3+2·3²+3·3³+…+n·3ⁿ。\n两边乘 3：3Tₙ=3²+2·3³+…+(n−1)3ⁿ+n·3ⁿ⁺¹。\n对应幂次相减：3Tₙ−Tₙ=n·3ⁿ⁺¹−(3+3²+…+3ⁿ)。首项是 −3，最后一项是 n·3ⁿ⁺¹，都不能丢。\n括号中等比和为 3(3ⁿ−1)/2，因此 2Tₙ=n·3ⁿ⁺¹−3(3ⁿ−1)/2。\n再除以 2 并统一分母：Tₙ=[2n·3ⁿ⁺¹−3ⁿ⁺¹+3]/4=[(2n−1)3ⁿ⁺¹+3]/4。\n（2）代入 n=4，T₄=(7×243+3)/4=1704/4=426。\n直接计算 3+18+81+324=426，与公式相符。",
    "checkpoints": [
      "正确写出原和及乘 3 后的错位式",
      "对齐幂次相减，保留首尾并计算等比和",
      "化简通式并以 n=4 独立核验"
    ],
    "hint": "相减后左边是 2Tₙ，最后还需要再除以 2。"
  },
  {
    "id": "g3-sequences-recurrence-choice-01",
    "topic": "高三数列·递推转化",
    "kind": "choice",
    "title": "平移构造等比",
    "question": "已知 aₙ₊₁=2aₙ+3，选择哪种新数列可以满足 bₙ₊₁=2bₙ？",
    "options": [
      {
        "key": "A",
        "text": "bₙ=aₙ−3"
      },
      {
        "key": "B",
        "text": "bₙ=aₙ+3"
      },
      {
        "key": "C",
        "text": "bₙ=aₙ+1"
      },
      {
        "key": "D",
        "text": "bₙ=2aₙ"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 若设 bₙ=aₙ+c，则 bₙ₊₁=2aₙ+3+c，而 2bₙ=2aₙ+2c。\n② 比较常数项要求 3+c=2c，得 c=3，所以 bₙ=aₙ+3，选 B。"
  },
  {
    "id": "g3-sequences-recurrence-choice-02",
    "topic": "高三数列·递推转化",
    "kind": "choice",
    "title": "含常数递推的通项",
    "question": "已知 a₁=1，aₙ₊₁=2aₙ+1，则 aₙ为：",
    "options": [
      {
        "key": "A",
        "text": "2ⁿ"
      },
      {
        "key": "B",
        "text": "2ⁿ−1"
      },
      {
        "key": "C",
        "text": "2ⁿ⁻¹−1"
      },
      {
        "key": "D",
        "text": "n"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① aₙ₊₁+1=2(aₙ+1)，所以 bₙ=aₙ+1 是首项 2、公比 2 的等比数列。\n② bₙ=2·2ⁿ⁻¹=2ⁿ，故 aₙ=2ⁿ−1，选 B。n=1 时也为 1。"
  },
  {
    "id": "g3-sequences-recurrence-choice-03",
    "topic": "高三数列·递推转化",
    "kind": "choice",
    "title": "除以项号",
    "question": "已知 a₁=2，aₙ₊₁=(n+1)aₙ/n，则 aₙ为：",
    "options": [
      {
        "key": "A",
        "text": "2n"
      },
      {
        "key": "B",
        "text": "2/n"
      },
      {
        "key": "C",
        "text": "2ⁿ"
      },
      {
        "key": "D",
        "text": "n+1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 两边除以 n+1，得 aₙ₊₁/(n+1)=aₙ/n。\n② 数列 aₙ/n 是首项 2 的常数列，所以 aₙ=2n，选 A。n≥1，除数不会为零。"
  },
  {
    "id": "g3-sequences-recurrence-choice-04",
    "topic": "高三数列·递推转化",
    "kind": "choice",
    "title": "取倒数的前提",
    "question": "正项数列满足 aₙ₊₁=aₙ/(1+aₙ)，令 bₙ=1/aₙ，则 bₙ₊₁−bₙ为：",
    "options": [
      {
        "key": "A",
        "text": "−1"
      },
      {
        "key": "B",
        "text": "0"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 正项保证 aₙ和 1+aₙ均非零，允许取倒数。\n② bₙ₊₁=(1+aₙ)/aₙ=1+bₙ，所以差为 1，选 C。"
  },
  {
    "id": "g3-sequences-recurrence-fill-01",
    "topic": "高三数列·递推转化",
    "kind": "fill",
    "title": "减去不动点",
    "question": "已知 a₁=2，aₙ₊₁=3aₙ−2，填 a₄。",
    "options": [],
    "correctAnswer": "28",
    "explanation": "① aₙ₊₁−1=3(aₙ−1)，故 aₙ−1=3ⁿ⁻¹。\n② a₄=1+3³=28。也可递推得到 2、4、10、28。",
    "acceptedAnswers": [
      "28"
    ]
  },
  {
    "id": "g3-sequences-recurrence-fill-02",
    "topic": "高三数列·递推转化",
    "kind": "fill",
    "title": "同底指数消去",
    "question": "已知 a₁=1，aₙ₊₁=2aₙ+2ⁿ，填 a₅。",
    "options": [],
    "correctAnswer": "80",
    "explanation": "① 除以 2ⁿ：aₙ₊₁/2ⁿ=aₙ/2ⁿ⁻¹+1。\n② bₙ=aₙ/2ⁿ⁻¹ 是首项 1、公差 1 的等差数列，故 bₙ=n。\n③ a₅=5×2⁴=80。",
    "acceptedAnswers": [
      "80"
    ]
  },
  {
    "id": "g3-sequences-recurrence-fill-03",
    "topic": "高三数列·递推转化",
    "kind": "fill",
    "title": "倒数等差",
    "question": "已知 a₁=1，aₙ₊₁=aₙ/(1+2aₙ)，填 a₅。",
    "options": [],
    "correctAnswer": "1/9",
    "explanation": "① 初值为正，递推后分子、分母仍为正，由此所有项均为正，可逐项取倒数。\n② 1/aₙ₊₁=1/aₙ+2，所以 1/aₙ=1+2(n−1)=2n−1。\n③ a₅=1/(2×5−1)=1/9。",
    "acceptedAnswers": [
      "1/9"
    ]
  },
  {
    "id": "g3-sequences-recurrence-written-01",
    "topic": "高三数列·递推转化",
    "kind": "written",
    "title": "平移后求通项与和",
    "question": "已知 a₁=2，aₙ₊₁=3aₙ−2。（1）求 aₙ；（2）求 Sₙ；（3）求 aₙ>100 时最小的 n。",
    "options": [],
    "correctAnswer": "aₙ=1+3ⁿ⁻¹；Sₙ=n+(3ⁿ−1)/2；最小 n=6。",
    "explanation": "（1）把递推式改写为 aₙ₊₁−1=3(aₙ−1)。令 bₙ=aₙ−1，则 b₁=1，bₙ₊₁=3bₙ。\n因此 bₙ=3ⁿ⁻¹，还原 aₙ=1+3ⁿ⁻¹。代入 n=1 得 2，代入递推可得 1+3ⁿ=3(1+3ⁿ⁻¹)−2，核验完成。\n（2）分组求和：Sₙ=Σ1+Σ3ᵏ⁻¹=n+(3ⁿ−1)/(3−1)=n+(3ⁿ−1)/2。\n（3）aₙ>100 等价于 3ⁿ⁻¹>99。a₅=1+81=82≤100，a₆=1+243=244>100。\n因 aₙ₊₁−aₙ=2·3ⁿ⁻¹>0，所以 aₙ严格递增，第一次超过 100 的项号确为 6。",
    "checkpoints": [
      "构造 aₙ−1 为等比并还原通项",
      "分开常数项与等比项求和",
      "比较边界两项并证明首次超过的项号"
    ],
    "hint": "找满足 L=3L−2 的常数 L，再对 aₙ−L 处理。"
  },
  {
    "id": "g3-sequences-recurrence-written-02",
    "topic": "高三数列·递推转化",
    "kind": "written",
    "title": "除指数后等差，再错位求和",
    "question": "已知 a₁=1，aₙ₊₁=2aₙ+2ⁿ。（1）求 aₙ；（2）求 Sₙ；（3）证明数列严格递增。",
    "options": [],
    "correctAnswer": "aₙ=n·2ⁿ⁻¹；Sₙ=(n−1)2ⁿ+1；严格递增。",
    "explanation": "（1）两边除以 2ⁿ，得 aₙ₊₁/2ⁿ=aₙ/2ⁿ⁻¹+1。令 bₙ=aₙ/2ⁿ⁻¹，则 b₁=1、bₙ₊₁−bₙ=1。\n所以 bₙ=n，aₙ=n·2ⁿ⁻¹。初值为 1，且 2aₙ+2ⁿ=(n+1)2ⁿ，正好等于 aₙ₊₁。\n（2）Sₙ=1+2·2+3·2²+…+n·2ⁿ⁻¹；乘 2 得 2Sₙ=2+2·2²+…+(n−1)2ⁿ⁻¹+n·2ⁿ。\n相减并按幂次合并：Sₙ=n·2ⁿ−(1+2+…+2ⁿ⁻¹)。\n括号中等比和为 2ⁿ−1，因此 Sₙ=n·2ⁿ−2ⁿ+1=(n−1)2ⁿ+1。n=1 时给出 1，首项相符。\n（3）aₙ₊₁−aₙ=(n+1)2ⁿ−n·2ⁿ⁻¹=(n+2)2ⁿ⁻¹>0，所以严格递增。",
    "checkpoints": [
      "除以对应幂并构造等差数列",
      "写出错位相减的首尾项，求出 Sₙ",
      "用相邻差严格为正完成单调性证明"
    ],
    "hint": "bₙ的分母是 2ⁿ⁻¹，下一项的分母才是 2ⁿ。"
  },
  {
    "id": "g3-sequences-comprehensive-choice-01",
    "topic": "高三数列·综合与不等式",
    "kind": "choice",
    "title": "相邻比与并列最大",
    "question": "数列 aₙ=n/2ⁿ 的最大值及取点为：",
    "options": [
      {
        "key": "A",
        "text": "1/2，仅 n=1"
      },
      {
        "key": "B",
        "text": "1/2，n=1 或 2"
      },
      {
        "key": "C",
        "text": "1，n=2"
      },
      {
        "key": "D",
        "text": "1/4，仅 n=2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 各项为正，可比较 aₙ₊₁/aₙ=(n+1)/(2n)。\n② n=1 时比值等于 1；n≥2 时 n+1<2n，比值小于 1。\n③ a₁=a₂=1/2，此后严格递减，所以最大值 1/2 在 n=1、2 取得，选 B。"
  },
  {
    "id": "g3-sequences-comprehensive-choice-02",
    "topic": "高三数列·综合与不等式",
    "kind": "choice",
    "title": "有限部分和的严格上界",
    "question": "数列 aₙ=1/[n(n+1)] 的前 n 项和始终满足：",
    "options": [
      {
        "key": "A",
        "text": "Sₙ<1"
      },
      {
        "key": "B",
        "text": "Sₙ=1"
      },
      {
        "key": "C",
        "text": "Sₙ>1"
      },
      {
        "key": "D",
        "text": "Sₙ=n/(n−1)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 裂项相消得 Sₙ=1−1/(n+1)。\n② n 是有限正整数，1/(n+1)>0，所以 Sₙ严格小于 1，选 A；不能把趋近的数当成有限和。"
  },
  {
    "id": "g3-sequences-comprehensive-choice-03",
    "topic": "高三数列·综合与不等式",
    "kind": "choice",
    "title": "连续最值与整数取点",
    "question": "数列 aₙ=n²−6n 的最小值是：",
    "options": [
      {
        "key": "A",
        "text": "−6"
      },
      {
        "key": "B",
        "text": "−8"
      },
      {
        "key": "C",
        "text": "−9"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 配方 aₙ=(n−3)²−9。\n② 正整数范围内 n=3 可取，所以最小值为 −9，选 C。若配方中心不是整数，则还需比较相邻项号。"
  },
  {
    "id": "g3-sequences-comprehensive-choice-04",
    "topic": "高三数列·综合与不等式",
    "kind": "choice",
    "title": "未取到的上确界仍可为上界",
    "question": "对所有正整数 n 都有 n/(n+1)≤c，则实数 c 的范围为：",
    "options": [
      {
        "key": "A",
        "text": "c≥1"
      },
      {
        "key": "B",
        "text": "c>1"
      },
      {
        "key": "C",
        "text": "c≥1/2"
      },
      {
        "key": "D",
        "text": "c≤1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 每个 n 都有 n/(n+1)=1−1/(n+1)<1，因此 c≥1 一定可行，且 c=1 可以取到。\n② 若 c<1，可取正整数 n 使 n+1>1/(1−c)，则 1−1/(n+1)>c，违反条件。\n③ 因此充要条件是 c≥1，选 A。数列不取到 1，不代表参数不能等于 1。"
  },
  {
    "id": "g3-sequences-comprehensive-fill-01",
    "topic": "高三数列·综合与不等式",
    "kind": "fill",
    "title": "指数不等式的边界",
    "question": "已知 aₙ=1−1/2ⁿ，满足 aₙ≥31/32 的最小正整数 n 是多少？",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 不等式等价于 1/2ⁿ≤1/32，即 2ⁿ≥32。\n② 因 2⁵=32，最小 n=5，非严格不等号允许取等。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-sequences-comprehensive-fill-02",
    "topic": "高三数列·综合与不等式",
    "kind": "fill",
    "title": "部分和达到阈值",
    "question": "Tₙ为从 k=1 至 n 的 1/[k(k+1)] 之和，满足 Tₙ≥0.95 的最小 n 是多少？",
    "options": [],
    "correctAnswer": "19",
    "explanation": "① 裂项得 Tₙ=n/(n+1)，而 0.95=19/20。\n② 因 n+1>0，可同乘得 20n≥19(n+1)，即 n≥19。\n③ n=19 时 T₁₉=19/20，等号可取，故最小为 19。",
    "acceptedAnswers": [
      "19"
    ]
  },
  {
    "id": "g3-sequences-comprehensive-fill-03",
    "topic": "高三数列·综合与不等式",
    "kind": "fill",
    "title": "正项比值证明最值",
    "question": "数列 aₙ=n/3ⁿ 的最大值是多少？",
    "options": [],
    "correctAnswer": "1/3",
    "explanation": "① aₙ>0，且 aₙ₊₁/aₙ=(n+1)/(3n)≤2/3<1。\n② 所以从首项起严格递减，最大值为 a₁=1/3。",
    "acceptedAnswers": [
      "1/3"
    ]
  },
  {
    "id": "g3-sequences-comprehensive-written-01",
    "topic": "高三数列·综合与不等式",
    "kind": "written",
    "title": "累计量与恒成立参数",
    "question": "设 Sₙ=1/2+1/2²+…+1/2ⁿ。（1）求 Sₙ并证明 0<Sₙ<1；（2）求 Sₙ>0.99 的最小 n；（3）求使所有正整数 n 都满足 Sₙ≤c 的实数 c 范围。",
    "options": [],
    "correctAnswer": "Sₙ=1−2⁻ⁿ；最小 n=7；c≥1。",
    "explanation": "（1）有限等比和 Sₙ=(1/2)[1−(1/2)ⁿ]/(1−1/2)=1−2⁻ⁿ。\n因 n≥1，有 0<2⁻ⁿ<1，所以 0<Sₙ<1，不能写成 Sₙ=1。\n（2）Sₙ>99/100 等价于 2⁻ⁿ<1/100，即 2ⁿ>100。因 2⁶=64<100<128=2⁷，且 2ⁿ严格递增，最小 n=7。\n（3）充分性：由 Sₙ<1，当 c≥1 时必有 Sₙ≤c，特别是 c=1 可取。\n必要性：若 c<1，令 ε=1−c>0。由 2ⁿ≥n+1，可取正整数 n 使 n+1>1/ε，从而 2ⁿ>1/ε，即 2⁻ⁿ<ε。\n此时 Sₙ=1−2⁻ⁿ>1−ε=c，与恒成立矛盾。故只能 c≥1。这里 2ⁿ≥n+1 可由二项式展开 (1+1)ⁿ≥1+n 得到。",
    "checkpoints": [
      "求有限和并说明严格界",
      "严格不等式转化后比较 2⁶和 2⁷",
      "参数范围给出充分性与必要性，不漏 c=1"
    ],
    "hint": "数列虽不取 1，但可任意接近 1；可用 2ⁿ≥n+1 给出有限的反例项号。"
  },
  {
    "id": "g3-sequences-comprehensive-written-02",
    "topic": "高三数列·综合与不等式",
    "kind": "written",
    "title": "裂项、比较与严格阈值",
    "question": "已知 aₙ=n(n+1)，Tₙ=1/a₁+…+1/aₙ。（1）求 Tₙ；（2）证明 0<Tₙ<(n+1)/(n+2)<1；（3）求 Tₙ>99/100 的最小正整数 n。",
    "options": [],
    "correctAnswer": "Tₙ=n/(n+1)；比较链成立；最小 n=100。",
    "explanation": "（1）1/aₖ=1/[k(k+1)]=1/k−1/(k+1)，求和相消得 Tₙ=1−1/(n+1)=n/(n+1)。\n（2）n≥1，分子分母均正，故 Tₙ>0。\n比较中间两项：(n+1)/(n+2)−n/(n+1)=[(n+1)²−n(n+2)]/[(n+1)(n+2)]=1/[(n+1)(n+2)]>0。\n又因 n+1<n+2 且分母正，有 (n+1)/(n+2)<1，合并得到要求的严格比较链。\n（3）n/(n+1)>99/100，同乘正数 100(n+1)，得 100n>99n+99，即 n>99。\n正整数最小值为 100。n=99 时恰为 99/100，不满足严格大于；n=100 时为 100/101，确实大于 99/100。",
    "checkpoints": [
      "正确裂项求 Tₙ",
      "通分求差并逐段证明比较链",
      "同乘正数求解，排除等号处 n=99"
    ],
    "hint": "比较两个分式时先通分求差，不要凭分子分母同时增大判断。"
  }
];
