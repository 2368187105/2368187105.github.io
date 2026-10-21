import type { Question } from "./questions-part1";

// 高三第八模块；本站原创，已发布的 ID/topic 与学习记录关联，保持稳定。
export const practiceTopics = [
  "高三计数概率统计·计数与排列组合",
  "高三计数概率统计·二项式定理",
  "高三计数概率统计·条件概率与全概率",
  "高三计数概率统计·离散型随机变量",
  "高三计数概率统计·二项与超几何分布",
  "高三计数概率统计·正态分布",
  "高三计数概率统计·抽样与总体估计",
  "高三计数概率统计·回归与独立性检验"
] as const;
export const practiceChapters = [{ title: "计数、概率与统计", topics: [...practiceTopics] }] as const;

export const questions: Question[] = [
  {
    "id": "g3-probstats-counting-combinations-choice-01",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "choice",
    "title": "分类还是分步",
    "question": "从甲地到乙地可任选一种交通方式：2 班直达车或 3 班直达船，共有多少种选法？",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
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
    "correctAnswer": "A",
    "explanation": "① 一次出行只选一班，车和船是互不重叠的两类。\n② 分类相加，2+3=5；这里不需要先乘车再乘船。\n故选 A。"
  },
  {
    "id": "g3-probstats-counting-combinations-choice-02",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "choice",
    "title": "有顺序的选择",
    "question": "从 4 名不同学生中选班长和副班长各一人，有多少种方案？",
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
        "text": "8"
      },
      {
        "key": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 两个职务不同，先选班长有 4 种，副班长只能从余下 3 人选。\n② 分步相乘为 4×3=12，不能只算无序的二人集合。\n故选 B。"
  },
  {
    "id": "g3-probstats-counting-combinations-choice-03",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "choice",
    "title": "不计顺序的组合",
    "question": "6 名学生中选 2 人参加同一种活动，有多少种选法？",
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 只选二人集合，不区分先后。\n② C(6,2)=6×5/2=15；除以 2 是去掉每对的两个排列。\n故选 C。"
  },
  {
    "id": "g3-probstats-counting-combinations-choice-04",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "choice",
    "title": "相邻捆绑",
    "question": "5 人排成一列，指定的 A、B 必须相邻，排法数为：",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "120"
      },
      {
        "key": "D",
        "text": "48"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 将 A、B 捆成一块，与其他 3 人组成 4 个单位，共 4!=24 种。\n② 块内 AB、BA 有 2 种，所以 24×2=48。\n故选 D。"
  },
  {
    "id": "g3-probstats-counting-combinations-fill-01",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "fill",
    "title": "排列计算",
    "question": "从 5 个不同元素中依次取 3 个，不重复，填排列数。",
    "options": [],
    "correctAnswer": "60",
    "acceptedAnswers": [
      "60"
    ],
    "explanation": "① 三个位置依次有 5、4、3 种选择。\n② 5×4×3=60。"
  },
  {
    "id": "g3-probstats-counting-combinations-fill-02",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "fill",
    "title": "分步组合",
    "question": "4 名女生与 3 名男生中各选 2 人组成四人组，填选法数。",
    "options": [],
    "correctAnswer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "explanation": "① 女生 C(4,2)=6 种，男生 C(3,2)=3 种。\n② 两步缺一不可，相乘得 18。"
  },
  {
    "id": "g3-probstats-counting-combinations-fill-03",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "fill",
    "title": "零不能作首位",
    "question": "用数字 0、1、2、3、4 组成无重复数字的三位数，填个数。",
    "options": [],
    "correctAnswer": "48",
    "acceptedAnswers": [
      "48"
    ],
    "explanation": "① 百位不能为 0，有 4 种。\n② 十位从余下 4 个数字选，个位再从 3 个选，得到 4×4×3=48。"
  },
  {
    "id": "g3-probstats-counting-combinations-written-01",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "written",
    "title": "不相邻的两种方法",
    "question": "6 名不同学生排成一列，指定 A、B。（1）用补集法求 A、B 不相邻的排法；（2）用插空法复核。",
    "options": [],
    "correctAnswer": "480 种；两种方法一致。",
    "explanation": "（1）全部排法为 6!=720。\nA、B 相邻时捆绑成一块，与其他四人共 5 个单位，有 5! 种，块内再乘 2，共 240 种。\n所以不相邻的排法为 720−240=480。\n（2）先排除 A、B 外的四人，有 4!=24 种。\n四人前后及中间共有 5 个空位。把 A、B 放进两个不同空位，按身份区分有 5×4=20 种。\n合计 24×20=480。若让两人放入同一空位就会相邻，应排除。",
    "checkpoints": [
      "列出全部与相邻排法，说明块内排列",
      "用差得到不相邻数",
      "明确五个空位与有序放置并复核"
    ],
    "hint": "补集法减去相邻；插空法先排其余四人。"
  },
  {
    "id": "g3-probstats-counting-combinations-written-02",
    "topic": "高三计数概率统计·计数与排列组合",
    "kind": "written",
    "title": "选人后再定职务",
    "question": "4 名男生、3 名女生中选 3 人。（1）至少一名女生的选法数；（2）在所选三人中指定一名组长，求方案数。",
    "options": [],
    "correctAnswer": "31 种；93 种。",
    "explanation": "（1）全部三人组为 C(7,3)=35。\n全是男生的组有 C(4,3)=4。补集得 35−4=31。\n也可按女生人数 1、2、3 分类：C(3,1)C(4,2)+C(3,2)C(4,1)+C(3,3)=18+12+1=31。\n（2）每一个符合条件的三人组均可从三人中指定组长，有 3 种。\n所以共有 31×3=93 种。\n这里先选无序小组再指定职务；不能把所有三人的全排列都计入。",
    "checkpoints": [
      "用补集或互斥分类计数",
      "解释选组与指定组长的区别",
      "分步相乘并核对是否重复"
    ],
    "hint": "先计算符合条件的无序三人组，再为每组指定组长。"
  },
  {
    "id": "g3-probstats-binomial-theorem-choice-01",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "choice",
    "title": "一般项中的次数",
    "question": "(1+2x)⁵ 中 x² 的系数为：",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "40"
      },
      {
        "key": "D",
        "text": "80"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 一般项为 C(5,r)2ʳxʳ。\n② r=2 时系数 C(5,2)×4=40。\n故选 C。"
  },
  {
    "id": "g3-probstats-binomial-theorem-choice-02",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "choice",
    "title": "负号随指数变化",
    "question": "(x−1/x)⁶（x≠0）的常数项为：",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "−15"
      },
      {
        "key": "D",
        "text": "−20"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 一般项 C(6,r)(−1)ʳx⁶⁻²ʳ。\n② 常数要求 6−2r=0，得 r=3，项为 −C(6,3)=−20。\n故选 D。"
  },
  {
    "id": "g3-probstats-binomial-theorem-choice-03",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "choice",
    "title": "系数和代入一",
    "question": "(2x−1)⁴ 展开式各项系数之和为：",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "81"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 多项式各项系数之和等于在 x=1 时的值。\n② (2−1)⁴=1；不能只把 2⁴ 当作总和。\n故选 A。"
  },
  {
    "id": "g3-probstats-binomial-theorem-choice-04",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "choice",
    "title": "项数和指数",
    "question": "(1+x)⁷ 展开并合并后的非零项数为：",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 一般项对应 r=0,1,…,7。\n② 共 8 个不同次数，系数均非零。\n故选 B。"
  },
  {
    "id": "g3-probstats-binomial-theorem-fill-01",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "fill",
    "title": "指定项系数",
    "question": "填 (1−2x)⁵ 中 x³ 的系数。",
    "options": [],
    "correctAnswer": "−80",
    "acceptedAnswers": [
      "−80"
    ],
    "explanation": "① 取 r=3，一般项为 C(5,3)(−2)³x³。\n② 系数 10×(−8)=−80。"
  },
  {
    "id": "g3-probstats-binomial-theorem-fill-02",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "fill",
    "title": "两项都有系数",
    "question": "填 (2+x)⁴ 中 x² 的系数。",
    "options": [],
    "correctAnswer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "explanation": "① 一般项 C(4,r)2⁴⁻ʳxʳ。\n② r=2，系数 6×4=24。"
  },
  {
    "id": "g3-probstats-binomial-theorem-fill-03",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "fill",
    "title": "整除条件筛选常数项",
    "question": "填 (x²+1/x)⁶（x≠0）的常数项。",
    "options": [],
    "correctAnswer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "explanation": "① 一般项 C(6,r)x¹²⁻³ʳ。\n② 12−3r=0 得 r=4，在 0 到 6 的整数范围内，常数项 C(6,4)=15。"
  },
  {
    "id": "g3-probstats-binomial-theorem-written-01",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "written",
    "title": "系数与系数和",
    "question": "对 (x−2)⁵ 的展开式：（1）求 x³ 的系数；（2）求全部系数之和，并解释二项式系数与项系数的区别。",
    "options": [],
    "correctAnswer": "40；−1。",
    "explanation": "（1）一般项为 C(5,r)x⁵⁻ʳ(−2)ʳ，r=0,…,5。\nx³ 要求 5−r=3，得 r=2。\n项系数为 C(5,2)(−2)²=10×4=40。\n（2）设多项式为 a₀+a₁x+…+a₅x⁵，令 x=1 得系数和。\n因此全部系数之和是 (1−2)⁵=−1。\n二项式系数只指 C(5,r)，它们之和为 2⁵=32；实际项系数还包括 (−2)ʳ，二者不能混同。",
    "checkpoints": [
      "写一般项并解次数条件",
      "保留负号与幂计算系数",
      "用代入求系数和并区分两类系数"
    ],
    "hint": "令 5−r=3；求全部实际系数和时令 x=1。"
  },
  {
    "id": "g3-probstats-binomial-theorem-written-02",
    "topic": "高三计数概率统计·二项式定理",
    "kind": "written",
    "title": "由系数反求参数",
    "question": "(ax+1)⁴ 中 x² 的系数为 54。（1）求 a；（2）若 x³ 的系数为正，求 a 与该系数。",
    "options": [],
    "correctAnswer": "a=±3；第二问 a=3，x³ 的系数为 108。",
    "explanation": "（1）x² 来自选择两个 ax，系数 C(4,2)a²=6a²。\n由 6a²=54 得 a²=9，所以 a=3 或 −3，不能遗漏负值。\n（2）x³ 的系数为 C(4,3)a³=4a³。\n条件 4a³>0 推出 a>0，与第一问的两解取交集得 a=3。\n代入得到 4×27=108。\n回代 x² 的系数 6×9=54，符合原条件。",
    "checkpoints": [
      "从一般项列出 x² 的系数方程",
      "完整解出正负参数",
      "利用新条件筛选并回代系数"
    ],
    "hint": "平方条件会有正负两解，再用三次项系数的符号筛选。"
  },
  {
    "id": "g3-probstats-conditional-probability-choice-01",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "choice",
    "title": "和事件不能重复计算",
    "question": "P(A)=0.4，P(B)=0.5，P(AB)=0.2，P(A∪B) 为：",
    "options": [
      {
        "key": "A",
        "text": "0.7"
      },
      {
        "key": "B",
        "text": "0.9"
      },
      {
        "key": "C",
        "text": "0.2"
      },
      {
        "key": "D",
        "text": "0.1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① P(A∪B)=P(A)+P(B)−P(AB)。\n② 0.4+0.5−0.2=0.7，交集只应计一次。\n故选 A。"
  },
  {
    "id": "g3-probstats-conditional-probability-choice-02",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "choice",
    "title": "条件概率的分母",
    "question": "P(B)=0.5，P(AB)=0.2，则 P(A|B) 为：",
    "options": [
      {
        "key": "A",
        "text": "0.1"
      },
      {
        "key": "B",
        "text": "0.4"
      },
      {
        "key": "C",
        "text": "0.2"
      },
      {
        "key": "D",
        "text": "0.5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 已知 B 发生，样本空间缩到 B，P(A|B)=P(AB)/P(B)。\n② 0.2/0.5=0.4，分母是条件 B 的概率。\n故选 B。"
  },
  {
    "id": "g3-probstats-conditional-probability-choice-03",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "choice",
    "title": "独立不是互斥",
    "question": "A、B 独立，P(A)=0.3，P(B)=0.4，则 P(AB) 为：",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "0.7"
      },
      {
        "key": "C",
        "text": "0.12"
      },
      {
        "key": "D",
        "text": "0.1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 独立给出乘法 P(AB)=P(A)P(B)。\n② 0.3×0.4=0.12。正概率的独立事件不可能同时互斥。\n故选 C。"
  },
  {
    "id": "g3-probstats-conditional-probability-choice-04",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "choice",
    "title": "不放回改变条件",
    "question": "袋中 3 红 2 蓝，随机不放回依次取两球。已知第一球为红，第二球为红的概率是：",
    "options": [
      {
        "key": "A",
        "text": "3/5"
      },
      {
        "key": "B",
        "text": "9/25"
      },
      {
        "key": "C",
        "text": "3/10"
      },
      {
        "key": "D",
        "text": "1/2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 已知先取红后，袋内剩下 2 红 2 蓝。\n② 第二次红的条件概率为 2/4=1/2，不能仍用 3/5。\n故选 D。"
  },
  {
    "id": "g3-probstats-conditional-probability-fill-01",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "fill",
    "title": "等可能无序样本",
    "question": "3 红 2 蓝五球有不同编号，等可能抽取两球，填两球均红的概率。",
    "options": [],
    "correctAnswer": "3/10",
    "acceptedAnswers": [
      "3/10"
    ],
    "explanation": "① 总样本数 C(5,2)=10。\n② 有利样本数 C(3,2)=3，所以概率 3/10。"
  },
  {
    "id": "g3-probstats-conditional-probability-fill-02",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "fill",
    "title": "全概率加权",
    "question": "甲、乙线分别生产 60%、40% 的产品，各自次品率为 2%、5%。随机抽一件，填次品概率。",
    "options": [],
    "correctAnswer": "4/125",
    "acceptedAnswers": [
      "4/125",
      "0.032"
    ],
    "explanation": "① 甲、乙来源互斥且覆盖全部产品。\n② 次品概率为 0.6×0.02+0.4×0.05=0.032=4/125。"
  },
  {
    "id": "g3-probstats-conditional-probability-fill-03",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "fill",
    "title": "倒推来源",
    "question": "甲、乙线产量占比 60%、40%，次品率 2%、5%。已知随机产品是次品，填它来自乙线的概率。",
    "options": [],
    "correctAnswer": "5/8",
    "acceptedAnswers": [
      "5/8",
      "0.625"
    ],
    "explanation": "① 乙线且次品的概率为 0.4×0.05=0.02。\n② 次品总概率为 0.032；条件概率 0.02/0.032=5/8。"
  },
  {
    "id": "g3-probstats-conditional-probability-written-01",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "written",
    "title": "改变样本空间",
    "question": "独立掷两枚均匀六面骰子，按先后记录点数。（1）求点数和为 8 的概率；（2）已知第一枚为偶数，求点数和为 8 的条件概率。",
    "options": [],
    "correctAnswer": "5/36；1/6。",
    "explanation": "（1）有序样本共有 6×6=36 个，等可能。\n和为 8 的样本为 (2,6)、(3,5)、(4,4)、(5,3)、(6,2)，共 5 个，所以概率为 5/36。\n（2）令 A 为和为 8，B 为第一枚偶数。B 有 3×6=18 个样本，P(B)=1/2>0。\nAB 的样本为 (2,6)、(4,4)、(6,2)，共有 3 个，P(AB)=3/36。\nP(A|B)=(3/36)/(18/36)=3/18=1/6。\n不能将第一问的 5 个有利样本全部保留，条件 B 已经排除了第一枚为奇数的样本。",
    "checkpoints": [
      "建立等可能有序样本并列举和为八",
      "按条件筛选样本与交集",
      "以条件事件为分母计算"
    ],
    "hint": "分别数出 A、B、AB 的有序样本。"
  },
  {
    "id": "g3-probstats-conditional-probability-written-02",
    "topic": "高三计数概率统计·条件概率与全概率",
    "kind": "written",
    "title": "报警与实际次品",
    "question": "某检测装置：产品次品率为 0.1；次品报警概率为 0.8，合格品报警概率为 0.2。（1）求报警概率；（2）已知报警，求产品为次品的概率，并判断报警是否必为次品。",
    "options": [],
    "correctAnswer": "报警概率 13/50；报警后次品概率 4/13，报警不等于必为次品。",
    "explanation": "（1）令 D 为次品，S 为报警。P(D)=0.1，P(非D)=0.9。\n全概率给出 P(S)=P(D)P(S|D)+P(非D)P(S|非D)。\n代入得 0.1×0.8+0.9×0.2=0.08+0.18=0.26=13/50。\n（2）P(DS)=0.1×0.8=0.08。\nP(D|S)=P(DS)/P(S)=0.08/0.26=4/13。\n它小于 1，因合格品也可能报警，所以不能将报警当作次品的必然证据；也不能把 P(S|D)=0.8 颠倒成 P(D|S)。",
    "checkpoints": [
      "按次品与合格品划分并计算全概率",
      "用交集除以报警概率倒推",
      "解释条件方向和非必然结论"
    ],
    "hint": "用次品、合格品两条路径汇总报警，再倒推来源。"
  },
  {
    "id": "g3-probstats-discrete-variables-choice-01",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "choice",
    "title": "期望加权而非平均取值",
    "question": "X 取 0、1、2，对应概率 0.2、0.5、0.3，E(X) 为：",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "0.5"
      },
      {
        "key": "C",
        "text": "1.1"
      },
      {
        "key": "D",
        "text": "1.6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① E(X)=0×0.2+1×0.5+2×0.3。\n② 结果为 1.1；不能无视概率直接平均三个取值。\n故选 C。"
  },
  {
    "id": "g3-probstats-discrete-variables-choice-02",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "choice",
    "title": "方差的平方距离",
    "question": "X 等概率取 0 或 2，D(X) 为：",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① E(X)=1。\n② D(X)=(0−1)²/2+(2−1)²/2=1。\n故选 D。"
  },
  {
    "id": "g3-probstats-discrete-variables-choice-03",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "choice",
    "title": "线性变换的期望",
    "question": "E(X)=2，Y=3X−2，则 E(Y) 为：",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "16"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① E(aX+b)=aE(X)+b。\n② E(Y)=3×2−2=4。\n故选 A。"
  },
  {
    "id": "g3-probstats-discrete-variables-choice-04",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "choice",
    "title": "方差的平移和倍数",
    "question": "D(X)=3，Y=2X+3，则 D(Y) 为：",
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
        "text": "9"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 平移不改变方差，乘以 2 后偏差平方乘以 4。\n② D(Y)=2²D(X)=12。\n故选 B。"
  },
  {
    "id": "g3-probstats-discrete-variables-fill-01",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "fill",
    "title": "概率之和为一",
    "question": "X 的三个取值概率为 0.2、p、0.4，填 p。",
    "options": [],
    "correctAnswer": "2/5",
    "acceptedAnswers": [
      "2/5",
      "0.4"
    ],
    "explanation": "① 所有概率之和为 1。\n② p=1−0.2−0.4=0.4=2/5，且非负。"
  },
  {
    "id": "g3-probstats-discrete-variables-fill-02",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "fill",
    "title": "对称分布的期望",
    "question": "X 取 1、2、3，概率依次为 1/4、1/2、1/4，填 E(X)。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① E(X)=1/4+2×1/2+3/4。\n② 结果为 2，也符合关于 2 的对称性。"
  },
  {
    "id": "g3-probstats-discrete-variables-fill-03",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "fill",
    "title": "由平方期望求方差",
    "question": "X 取 1、2、3，概率依次为 1/4、1/2、1/4，填 D(X)。",
    "options": [],
    "correctAnswer": "1/2",
    "acceptedAnswers": [
      "1/2",
      "0.5"
    ],
    "explanation": "① E(X)=2，E(X²)=1/4+4/2+9/4=9/2。\n② D(X)=E(X²)−[E(X)]²=9/2−4=1/2。"
  },
  {
    "id": "g3-probstats-discrete-variables-written-01",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "written",
    "title": "不放回分布列与数字特征",
    "question": "2 红 3 蓝五球均有编号，等可能抽两球，X 为红球数。（1）列分布列；（2）求 E(X)、D(X)。",
    "options": [],
    "correctAnswer": "X=0,1,2 的概率为 3/10、3/5、1/10；E(X)=4/5，D(X)=9/25。",
    "explanation": "（1）X 的取值为 0、1、2，总样本数 C(5,2)=10。\nP(X=0)=C(3,2)/10=3/10；P(X=1)=C(2,1)C(3,1)/10=6/10；P(X=2)=C(2,2)/10=1/10。\n概率均非负，和为 3/10+6/10+1/10=1，分布完整。\n（2）E(X)=0×3/10+1×6/10+2×1/10=4/5。\nE(X²)=0+1×6/10+4×1/10=1。\nD(X)=1−(4/5)²=9/25。方差是概率加权的平方偏差，不能用 E(X²) 直接替代。",
    "checkpoints": [
      "列全取值并用组合计数求概率",
      "核对归一性后求期望",
      "求平方期望并计算方差"
    ],
    "hint": "先写 X 的三个可能值，再按红蓝数量分类。"
  },
  {
    "id": "g3-probstats-discrete-variables-written-02",
    "topic": "高三计数概率统计·离散型随机变量",
    "kind": "written",
    "title": "相同期望不代表相同波动",
    "question": "独立掷均匀硬币两次，每次正面得 2 分，参加先扣 2 分，X 为净得分。（1）列 X 分布并求期望方差；（2）与始终净得 0 分的方案 Y 比较。",
    "options": [],
    "correctAnswer": "X=−2,0,2 的概率 1/4,1/2,1/4；E(X)=0，D(X)=2；E(Y)=D(Y)=0。",
    "explanation": "（1）正面数 H=0、1、2，概率分别为 1/4、1/2、1/4。\n净得分 X=2H−2，因此 X=−2、0、2，对应概率不变。\nE(X)=−2/4+0+2/4=0；E(X²)=4/4+0+4/4=2，所以 D(X)=2。\n（2）Y 恒等于 0，因此 E(Y)=0，D(Y)=0。\n两方案平均净得分相同，但 X 有正负波动，Y 没有波动。\n期望为零不表示每次得零，方差不同也不自动决定个人应选哪一种；需明确对波动的要求。",
    "checkpoints": [
      "从正面次数映射净得分并列分布",
      "计算期望与方差",
      "比较相同期望下的波动含义"
    ],
    "hint": "先扣的分数属于净得分中的常数项，影响期望但不改变方差。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-choice-01",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "choice",
    "title": "二项概率中的组合数",
    "question": "X～B(4,1/2)，P(X=2) 为：",
    "options": [
      {
        "key": "A",
        "text": "3/8"
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
        "text": "1/2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① P(X=2)=C(4,2)(1/2)²(1/2)²。\n② 六种成功位置需计入，得 6/16=3/8。\n故选 A。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-choice-02",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "choice",
    "title": "模型前提先于公式",
    "question": "下列哪项足以把成功总次数建模为 B(n,p)？",
    "options": [
      {
        "key": "A",
        "text": "只知道每次成功概率都是 p"
      },
      {
        "key": "B",
        "text": "固定 n 次独立试验，每次只有成功或失败，成功概率均为 p"
      },
      {
        "key": "C",
        "text": "从有限总体不放回抽样，成功率随抽取改变"
      },
      {
        "key": "D",
        "text": "只知道总成功次数的期望是 np"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 二项模型要求固定试验次数、独立性、二分类结果、相同成功概率。\n② 只有边际概率相同不能推出独立；不放回一般应使用超几何模型。\n故选 B。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-choice-03",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "choice",
    "title": "超几何期望",
    "question": "5 件产品中 2 件次品，不放回等可能取 2 件，次品数 X 的期望为：",
    "options": [
      {
        "key": "A",
        "text": "2/5"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "4/5"
      },
      {
        "key": "D",
        "text": "3/5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 超几何期望为抽取数×总体目标比例。\n② E(X)=2×(2/5)=4/5，不需要把两次抽取假设为独立。\n故选 C。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-choice-04",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "choice",
    "title": "二项方差",
    "question": "X～B(5,0.2)，D(X) 为：",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "0.2"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "0.8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① D(X)=np(1−p)。\n② 5×0.2×0.8=0.8。\n故选 D。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-fill-01",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "fill",
    "title": "至少一次用对立",
    "question": "独立试验三次，每次成功概率 1/5，填至少成功一次的概率。",
    "options": [],
    "correctAnswer": "61/125",
    "acceptedAnswers": [
      "61/125",
      "0.488"
    ],
    "explanation": "① 对立事件是三次全失败，概率 (4/5)³=64/125。\n② 所求 1−64/125=61/125。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-fill-02",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "fill",
    "title": "不放回抽取零目标",
    "question": "6 件中有 2 件次品，不放回等可能取 3 件，填没有次品的概率。",
    "options": [],
    "correctAnswer": "1/5",
    "acceptedAnswers": [
      "1/5",
      "0.2"
    ],
    "explanation": "① 全部样本数 C(6,3)=20。\n② 从 4 件合格品中取 3 件，共 C(4,3)=4，概率 4/20=1/5。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-fill-03",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "fill",
    "title": "二项期望",
    "question": "X～B(10,0.3)，填 E(X)。",
    "options": [],
    "correctAnswer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "explanation": "① 二项分布的期望为 np。\n② 10×0.3=3；期望不表示每次都恰好成功三次。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-written-01",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "written",
    "title": "至少两次成功",
    "question": "三次独立操作，每次成功概率 4/5，X 为成功次数。（1）求至少成功两次的概率；（2）求 E(X)、D(X)。",
    "options": [],
    "correctAnswer": "112/125；E(X)=12/5，D(X)=12/25。",
    "explanation": "（1）固定三次、独立、成功率均为 4/5，因此 X～B(3,4/5)。\nP(X=2)=C(3,2)(4/5)²(1/5)=48/125。\nP(X=3)=(4/5)³=64/125。两事件互斥，所以 P(X≥2)=112/125。\n（2）E(X)=np=3×4/5=12/5。\nD(X)=np(1−p)=3×4/5×1/5=12/25。\n至少两次包括两次和三次，不能只保留 C(3,2) 对应的一项。",
    "checkpoints": [
      "核验二项模型的全部前提",
      "把至少两次拆为互斥事件相加",
      "正确使用二项期望方差"
    ],
    "hint": "先判断能否用二项分布，再把至少两次展开。"
  },
  {
    "id": "g3-probstats-binomial-hypergeometric-written-02",
    "topic": "高三计数概率统计·二项与超几何分布",
    "kind": "written",
    "title": "放回与不放回的比较",
    "question": "3 红 2 蓝五球有不同编号，各取两次，X 为红球数。（1）不放回时列分布并求期望方差；（2）每次放回并重新混匀时做同样计算并比较。",
    "options": [],
    "correctAnswer": "不放回概率 1/10,3/5,3/10，E=6/5，D=9/25；放回概率 4/25,12/25,9/25，E=6/5，D=12/25。",
    "explanation": "（1）不放回等可能样本数 C(5,2)=10；X=0、1、2。\n相应概率为 C(2,2)/10=1/10、C(3,1)C(2,1)/10=6/10、C(3,2)/10=3/10。\nE(X)=6/10+6/10=6/5；E(X²)=6/10+12/10=9/5，D(X)=9/5−36/25=9/25。\n（2）放回并混匀后，两次独立且红球概率恒为 3/5，X～B(2,3/5)。\nX=0、1、2 的概率分别是 (2/5)²=4/25、2×3/5×2/5=12/25、(3/5)²=9/25，和为 1。\nE(X)=2×3/5=6/5，D(X)=2×3/5×2/5=12/25。\n两个模型期望相同，但不放回的方差较小。抽取方式改变相关性，不能仅因抽取数相同就套同一分布。",
    "checkpoints": [
      "不放回用组合列全分布并求数字特征",
      "放回确认独立同概率并计算",
      "比较期望方差并解释模型差异"
    ],
    "hint": "不放回用组合概率；放回并混匀后才可用二项模型。"
  },
  {
    "id": "g3-probstats-normal-distribution-choice-01",
    "topic": "高三计数概率统计·正态分布",
    "kind": "choice",
    "title": "第二参数是方差",
    "question": "X～N(50,4²)，X 的标准差和方差分别为：",
    "options": [
      {
        "key": "A",
        "text": "16，4"
      },
      {
        "key": "B",
        "text": "4，4"
      },
      {
        "key": "C",
        "text": "4，16"
      },
      {
        "key": "D",
        "text": "50，16"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① N(μ,σ²) 的第二个参数是方差。\n② 此处 σ=4，σ²=16。\n故选 C。"
  },
  {
    "id": "g3-probstats-normal-distribution-choice-02",
    "topic": "高三计数概率统计·正态分布",
    "kind": "choice",
    "title": "一个标准差区间",
    "question": "X～N(μ,σ²)，σ>0。已知标准正态变量 Z 满足 P(|Z|≤1)≈0.6827，则 P(μ−σ≤X≤μ+σ) 约为：",
    "options": [
      {
        "key": "A",
        "text": "0.9545"
      },
      {
        "key": "B",
        "text": "0.9973"
      },
      {
        "key": "C",
        "text": "0.5"
      },
      {
        "key": "D",
        "text": "0.6827"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 标准化 Z=(X−μ)/σ，区间对应 −1≤Z≤1。\n② 直接使用题给概率，得到约 0.6827。\n故选 D。"
  },
  {
    "id": "g3-probstats-normal-distribution-choice-03",
    "topic": "高三计数概率统计·正态分布",
    "kind": "choice",
    "title": "关于均值对称",
    "question": "X 服从非退化正态分布，P(X≥E(X)) 为：",
    "options": [
      {
        "key": "A",
        "text": "1/2"
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
        "text": "无法确定"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 正态密度关于均值 μ 对称，左右面积相同。\n② 连续分布单点概率为零，P(X≥μ)=1/2。\n故选 A。"
  },
  {
    "id": "g3-probstats-normal-distribution-choice-04",
    "topic": "高三计数概率统计·正态分布",
    "kind": "choice",
    "title": "先减均值再除标准差",
    "question": "X～N(60,5²)，当 X=70 时，标准化数值 (X−60)/5 为：",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "1/2"
      },
      {
        "key": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 先算与均值之差 70−60=10。\n② 再除以标准差 5，得到 2，不是除以方差 25。\n故选 B。"
  },
  {
    "id": "g3-probstats-normal-distribution-fill-01",
    "topic": "高三计数概率统计·正态分布",
    "kind": "fill",
    "title": "对应标准区间",
    "question": "X～N(100,10²)，已知 P(|Z|≤1)≈0.6827，填 P(90≤X≤110) 的近似值。",
    "options": [],
    "correctAnswer": "0.6827",
    "acceptedAnswers": [
      "0.6827"
    ],
    "explanation": "① 两端标准化为 (90−100)/10=−1、(110−100)/10=1。\n② 对应 P(|Z|≤1)，约为 0.6827。"
  },
  {
    "id": "g3-probstats-normal-distribution-fill-02",
    "topic": "高三计数概率统计·正态分布",
    "kind": "fill",
    "title": "两侧尾部先平分",
    "question": "X～N(20,3²)，已知 P(|Z|≤2)≈0.9545，填 P(X>26) 的近似值。",
    "options": [],
    "correctAnswer": "0.02275",
    "acceptedAnswers": [
      "0.02275"
    ],
    "explanation": "① 26=20+2×3，所以所求是右侧超过两个标准差的尾部。\n② 两尾总概率 1−0.9545=0.0455，按对称性除以 2，得 0.02275。"
  },
  {
    "id": "g3-probstats-normal-distribution-fill-03",
    "topic": "高三计数概率统计·正态分布",
    "kind": "fill",
    "title": "线性变换的方差",
    "question": "X～N(0,9)，Y=2X+1，填 D(Y)。",
    "options": [],
    "correctAnswer": "36",
    "acceptedAnswers": [
      "36"
    ],
    "explanation": "① 这里 D(X)=9，不是标准差为 9。\n② D(Y)=2²×9=36，平移 1 不影响方差。"
  },
  {
    "id": "g3-probstats-normal-distribution-written-01",
    "topic": "高三计数概率统计·正态分布",
    "kind": "written",
    "title": "概率转化为预估人数",
    "question": "某大样本群体的测量值近似服从 N(100,15²)，共 1200 人。给定 P(|Z|≤1)≈0.6827、P(|Z|≤2)≈0.9545。（1）估计 85 到 115 之间人数；（2）估计超过 130 的人数，并说明估计含义。",
    "options": [],
    "correctAnswer": "约 819 人；约 27 人，均为模型估计，实际人数可有波动。",
    "explanation": "（1）85=100−15，115=100+15，标准化区间是 [−1,1]。\n模型给出区间概率约 0.6827，预估人数为 1200×0.6827=819.24，取约 819 人。\n（2）130=100+2×15，对应标准正态右尾 Z>2。\n右尾概率约 (1−0.9545)/2=0.02275。\n预估人数为 1200×0.02275=27.3，取约 27 人。\n测量值近似正态与表中概率本身均是近似；乘总人数给出平均水平的预估，不能断言实际人数必恰好为 819 或 27。",
    "checkpoints": [
      "按均值和标准差转换区间",
      "用对称性算单侧尾概率",
      "换算人数并说明近似与波动"
    ],
    "hint": "先标准化，再乘人数；右尾概率要把两尾总量除以二。"
  },
  {
    "id": "g3-probstats-normal-distribution-written-02",
    "topic": "高三计数概率统计·正态分布",
    "kind": "written",
    "title": "用两个分位点反推参数",
    "question": "X～N(μ,σ²)，σ>0。P(X≤70)=0.8413，P(X≤50)=0.1587；题设采用 Φ(1)=0.8413、Φ(−1)=0.1587、P(|Z|≤2)=0.9545 的表值。（1）按给定表值估计 μ、σ；（2）估计 P(40≤X≤80)。",
    "options": [],
    "correctAnswer": "μ≈60，σ≈10；概率约 0.9545。",
    "explanation": "（1）标准化后正态分布函数严格递增。按题设表值对应关系，有 (70−μ)/σ≈1、(50−μ)/σ≈−1。\n等价地，70−μ≈σ，50−μ≈−σ。\n两式相加得 120−2μ≈0，故 μ≈60；相减得 20≈2σ，故 σ≈10>0。\n（2）以估计参数计算，40 对应 (40−60)/10=−2，80 对应 2。\n所以 P(40≤X≤80)≈P(|Z|≤2)≈0.9545。\n表值经过四舍五入，因此这里反推参数写估计或近似，不把四位表值当作无限精度的恒等式。",
    "checkpoints": [
      "利用标准化和表值建立两个关系",
      "联立求参数并检查标准差为正",
      "将新区间标准化并标明近似"
    ],
    "hint": "两个端点分别对应约 μ+σ 和 μ−σ。"
  },
  {
    "id": "g3-probstats-sampling-estimation-choice-01",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "choice",
    "title": "分层抽样按比例",
    "question": "总体 1000 人，甲层 300 人、乙层 700 人，按比例分层随机抽样 100 人，应从甲层抽多少人？",
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "70"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "50"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 甲层占总体 300/1000=0.3。\n② 样本甲层人数为 100×0.3=30，且各层内部仍应随机抽取。\n故选 A。"
  },
  {
    "id": "g3-probstats-sampling-estimation-choice-02",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "choice",
    "title": "直方图面积是频率",
    "question": "频率分布直方图某组组距为 5，纵轴为频率/组距，矩形高为 0.04，该组频率为：",
    "options": [
      {
        "key": "A",
        "text": "0.04"
      },
      {
        "key": "B",
        "text": "0.2"
      },
      {
        "key": "C",
        "text": "0.008"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 组频率等于矩形面积，而不是纵轴高度。\n② 频率为 5×0.04=0.2。\n故选 B。"
  },
  {
    "id": "g3-probstats-sampling-estimation-choice-03",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "choice",
    "title": "整体平移统计量",
    "question": "一组数据每个数都加 3，均值和方差如何变化？",
    "options": [
      {
        "key": "A",
        "text": "均值不变，方差加 3"
      },
      {
        "key": "B",
        "text": "均值加 3，方差加 9"
      },
      {
        "key": "C",
        "text": "均值加 3，方差不变"
      },
      {
        "key": "D",
        "text": "均值和方差均加 3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 每个数及均值都加 3，所以偏差 (xᵢ+3)−(均值+3)=xᵢ−均值。\n② 偏差平方不变，因此方差不变。\n故选 C。"
  },
  {
    "id": "g3-probstats-sampling-estimation-choice-04",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "choice",
    "title": "抽样结论的适用范围",
    "question": "只调查某校篮球队成员的身高，用来估计全校学生平均身高，主要问题是：",
    "options": [
      {
        "key": "A",
        "text": "样本均值必定等于总体均值"
      },
      {
        "key": "B",
        "text": "只要会计算均值就没有问题"
      },
      {
        "key": "C",
        "text": "样本方差必定为零"
      },
      {
        "key": "D",
        "text": "样本选择可能缺乏总体代表性"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 篮球队成员可能经过身高相关筛选，不能代表全校学生结构。\n② 计算方法正确也不能消除选择偏差，应改进抽样方案。\n故选 D。"
  },
  {
    "id": "g3-probstats-sampling-estimation-fill-01",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "fill",
    "title": "样本平均数",
    "question": "数据 2、4、4、6 的平均数为多少？",
    "options": [],
    "correctAnswer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "explanation": "① 数据和为 16，共 4 个数。\n② 平均数 16/4=4。"
  },
  {
    "id": "g3-probstats-sampling-estimation-fill-02",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "fill",
    "title": "明确方差分母",
    "question": "按 s²=(1/n)Σ(xᵢ−平均数)²，求数据 2、4、4、6 的样本方差。",
    "options": [],
    "correctAnswer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "explanation": "① 平均数为 4，偏差平方为 4、0、0、4。\n② 以题设分母 n=4 计算，s²=8/4=2；这里不用 n−1。"
  },
  {
    "id": "g3-probstats-sampling-estimation-fill-03",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "fill",
    "title": "合并均值按人数加权",
    "question": "甲组 20 人均值 70，乙组 30 人均值 80，求合并 50 人的均值。",
    "options": [],
    "correctAnswer": "76",
    "acceptedAnswers": [
      "76"
    ],
    "explanation": "① 两组总量分别为 20×70=1400、30×80=2400。\n② 合并均值 (1400+2400)/50=76，不能直接将 70、80 平均。"
  },
  {
    "id": "g3-probstats-sampling-estimation-written-01",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "written",
    "title": "分组数据的近似估计",
    "question": "某样本共 10 个数据，分组 [0,10)、[10,20)、[20,30] 的频数分别为 2、5、3。（1）用组中值估计均值；（2）按分母 n=10，用组中值估计方差，说明与原始数据精确统计量的区别。",
    "options": [],
    "correctAnswer": "均值估计为 16，方差估计为 49；不能由分组数据断定真实值恰好相等。",
    "explanation": "（1）各组组中值为 5、15、25，频率为 0.2、0.5、0.3。\n均值估计为 (2×5+5×15+3×25)/10=160/10=16。\n（2）使用同一组中值与估计均值，方差估计为 [2(5−16)²+5(15−16)²+3(25−16)²]/10。\n分子为 2×121+5×1+3×81=242+5+243=490，除以 10 得 49。\n也可用组中值平方的加权均值 305 减去 16²=256，得到 49。\n分组只保留每组人数，组内真实位置未知；组中值代替每个原始值是一种近似，实际均值和方差可能不同。",
    "checkpoints": [
      "用组中值和频数进行加权",
      "以同一口径求平方偏差与方差",
      "说明分组近似不能恢复全部原始信息"
    ],
    "hint": "先用 5、15、25 代替各组数据，再以频数加权。"
  },
  {
    "id": "g3-probstats-sampling-estimation-written-02",
    "topic": "高三计数概率统计·抽样与总体估计",
    "kind": "written",
    "title": "分层抽样与总体均值",
    "question": "总体 1200 人，甲层 800 人、乙层 400 人，计划按比例分层随机抽 60 人。抽得甲层均值 75、乙层均值 60。（1）求各层抽取人数；（2）估计总体均值并说明抽样要求。",
    "options": [],
    "correctAnswer": "甲 40 人、乙 20 人；总体均值估计 70。",
    "explanation": "（1）抽样比例为 60/1200=1/20。\n甲层抽 800/20=40 人，乙层抽 400/20=20 人，和为 60。\n（2）总体两层权重为 800/1200=2/3、400/1200=1/3。\n均值估计为 (2/3)×75+(1/3)×60=50+20=70。\n由于本题按比例抽取，也可将样本均值合并：(40×75+20×60)/60=70。\n各层内部应随机抽取并尽量减少未回应偏差。样本估计存在误差，不能因为采用分层法就宣称必等于总体真值；若不按比例抽样，不能盲目直接合并样本均值。",
    "checkpoints": [
      "按总体比例分配样本并核对人数",
      "按总体权重估计均值并与合并法核对",
      "说明随机抽样及估计误差"
    ],
    "hint": "人数按层比例分配；总体估计也要使用总体层权重。"
  },
  {
    "id": "g3-probstats-regression-independence-choice-01",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "choice",
    "title": "最小二乘直线经过均值点",
    "question": "回归直线为 ŷ=2x+1，样本 x 均值为 3，则样本 y 均值为：",
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
        "text": "无法确定"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 含截距的一元最小二乘回归直线经过样本均值点。\n② y 均值为 2×3+1=7。\n故选 C。"
  },
  {
    "id": "g3-probstats-regression-independence-choice-02",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "choice",
    "title": "斜率解释的是趋势",
    "question": "回归直线斜率为正，可以作出的合理描述是：",
    "options": [
      {
        "key": "A",
        "text": "x 每增大 1，所有实际 y 必精确增加同一个数"
      },
      {
        "key": "B",
        "text": "已经证明 x 是 y 变化的原因"
      },
      {
        "key": "C",
        "text": "所有点必在回归直线上"
      },
      {
        "key": "D",
        "text": "样本呈正向线性变化趋势"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 正斜率表示拟合值随 x 增大而增大，是统计趋势。\n② 实际值仍有残差；相关或回归不能单独证明因果。\n故选 D。"
  },
  {
    "id": "g3-probstats-regression-independence-choice-03",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "choice",
    "title": "按题给临界值判断",
    "question": "2×2 列联表独立性检验统计量为 8，给定显著性水平 0.01 的临界值 6.635，结论是：",
    "options": [
      {
        "key": "A",
        "text": "在 0.01 显著性水平下拒绝独立性假设"
      },
      {
        "key": "B",
        "text": "已证明两个变量存在因果关系"
      },
      {
        "key": "C",
        "text": "独立性假设为假的概率恰为 99%"
      },
      {
        "key": "D",
        "text": "统计量必须小于临界值才能拒绝"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 8>6.635，落入题设拒绝域。\n② 拒绝独立性假设，认为有统计关联证据；显著性水平不是假设为假的后验概率。\n故选 A。"
  },
  {
    "id": "g3-probstats-regression-independence-choice-04",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "choice",
    "title": "相关不等于因果",
    "question": "观察数据发现学习时长与成绩正相关，合理的是：",
    "options": [
      {
        "key": "A",
        "text": "已证明任何人多学一小时必提高相同分数"
      },
      {
        "key": "B",
        "text": "可作为关联证据，但还需考虑基础水平等其他因素"
      },
      {
        "key": "C",
        "text": "正相关意味着两变量完全相等"
      },
      {
        "key": "D",
        "text": "相关系数必须大于 1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 观察数据可能受到基础水平、学习方法等混杂因素影响。\n② 正相关只支持一定的关联趋势，不能据此直接断言因果或个体精确增量。\n故选 B。"
  },
  {
    "id": "g3-probstats-regression-independence-fill-01",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "fill",
    "title": "由离差求斜率",
    "question": "数据点 (1,2)、(2,3)、(3,7)，求含截距最小二乘回归直线的斜率。",
    "options": [],
    "correctAnswer": "5/2",
    "acceptedAnswers": [
      "5/2",
      "2.5"
    ],
    "explanation": "① x 均值 2，y 均值 4。\n② 离差乘积和为 (−1)(−2)+0(−1)+1×3=5；x 离差平方和为 1+0+1=2。\n③ 斜率为 5/2。"
  },
  {
    "id": "g3-probstats-regression-independence-fill-02",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "fill",
    "title": "由均值点求截距",
    "question": "数据点 (1,2)、(2,3)、(3,7)，已求斜率 5/2，填回归直线截距。",
    "options": [],
    "correctAnswer": "−1",
    "acceptedAnswers": [
      "−1",
      "-1"
    ],
    "explanation": "① x 均值 2，y 均值 4。\n② 截距为 4−(5/2)×2=−1。"
  },
  {
    "id": "g3-probstats-regression-independence-fill-03",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "fill",
    "title": "列联表统计量",
    "question": "2×2 列联表两行分别为 (30,20)、(10,40)，n=100。按 χ²=n(ad−bc)²/[(a+b)(c+d)(a+c)(b+d)]，求 χ²。",
    "options": [],
    "correctAnswer": "50/3",
    "acceptedAnswers": [
      "50/3"
    ],
    "explanation": "① a=30,b=20,c=10,d=40，ad−bc=1200−200=1000。\n② 两行和为 50、50，两列和为 40、60，均非零。\n③ χ²=100×1000²/(50×50×40×60)=100000000/6000000=50/3。"
  },
  {
    "id": "g3-probstats-regression-independence-written-01",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "written",
    "title": "拟合、预测与残差",
    "question": "数据点 (1,2)、(2,3)、(3,7)。（1）求含截距最小二乘回归直线；（2）求 x=4 的预测值和点 (2,3) 的残差，并说明预测限制。",
    "options": [],
    "correctAnswer": "ŷ=(5/2)x−1；预测值 9；点 (2,3) 残差 −1。",
    "explanation": "（1）x 均值为 (1+2+3)/3=2，y 均值为 (2+3+7)/3=4。\n斜率分子 Σ(xᵢ−2)(yᵢ−4)=2+0+3=5，分母 Σ(xᵢ−2)²=2>0。\n因此 b=5/2，截距 a=4−(5/2)×2=−1，直线为 ŷ=(5/2)x−1。\n（2）x=4 时预测 ŷ=10−1=9。该值超出样本 x 的 [1,3]，属于外推，应谨慎。\nx=2 时拟合值为 4，实际 y=3，残差按 实际−拟合 定义，为 3−4=−1。\n回归给出趋势预测而非每个个体的确定值，三个观测点不足以保证区间外线性关系继续成立。",
    "checkpoints": [
      "计算均值与离差得到斜率截距",
      "分别计算预测与按约定定义的残差",
      "辨认外推并说明统计预测限制"
    ],
    "hint": "先中心化求斜率，再用均值点求截距；残差是实际值减拟合值。"
  },
  {
    "id": "g3-probstats-regression-independence-written-02",
    "topic": "高三计数概率统计·回归与独立性检验",
    "kind": "written",
    "title": "独立性检验的规范结论",
    "question": "调查表：参加训练组通过 30、未通过 20；未参加训练组通过 10、未通过 40。给定 χ²=n(ad−bc)²/[(a+b)(c+d)(a+c)(b+d)]，0.01 显著性水平临界值 6.635。（1）计算统计量并检验独立性；（2）能否直接宣称训练导致通过率提高？说明理由。",
    "options": [],
    "correctAnswer": "χ²=50/3≈16.667，拒绝独立性假设；观察调查不能直接证明因果。",
    "explanation": "（1）原假设 H₀：是否参加训练与是否通过相互独立。n=100，a=30,b=20,c=10,d=40。\n行和为 50、50，列和为 40、60。独立假设下四格期望频数为 20、30、20、30，均不小，符合本题近似检验使用情形。\nad−bc=1000，χ²=100×1000²/(50×50×40×60)=50/3≈16.667。\n因为 16.667>6.635，在题给 0.01 显著性水平下拒绝 H₀，数据提供两变量有关联的统计证据。\n（2）参加组通过比例 30/50=0.6，未参加组为 10/50=0.2，样本确实呈现差异。\n但这是观察调查，可能受原有能力、选择参加的意愿等因素影响，不能直接断言差异由训练造成。\n0.01 是检验程序在独立性成立时误拒的控制水平，不表示 H₀ 为假的概率是 99%，更不表示因果结论有 99% 概率正确。",
    "checkpoints": [
      "建立原假设、列边际和并核对期望频数",
      "代入统计量并按给定临界值判断",
      "区分关联、因果和显著性水平的含义"
    ],
    "hint": "先计算四个边际和；拒绝独立性不能替代因果论证。"
  }
];
