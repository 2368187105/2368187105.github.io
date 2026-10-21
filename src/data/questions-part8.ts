import type { Question } from "./questions-part1";

// 高三一轮复习第四模块；本站原创，ID/topic 发布后保持稳定。
export const practiceTopics = [
  "高三平面向量·概念与运算",
  "高三平面向量·基底与共线",
  "高三平面向量·坐标表示",
  "高三平面向量·数量积与投影",
  "高三平面向量·几何应用",
  "高三平面向量·参数与最值"
] as const;
export const practiceChapters = [{ title: "平面向量", topics: practiceTopics }] as const;
export const questions: Question[] = [
  {
    "id": "g3-vectors-operations-choice-01",
    "topic": "高三平面向量·概念与运算",
    "kind": "choice",
    "title": "首尾相接",
    "question": "任意三点 A、B、C，向量 AB+BC 等于：",
    "options": [
      {
        "key": "A",
        "text": "AC"
      },
      {
        "key": "B",
        "text": "CA"
      },
      {
        "key": "C",
        "text": "AB"
      },
      {
        "key": "D",
        "text": "CB"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 将 AB 的终点 B 与 BC 的起点 B 接在一起。\n② 合向量从第一条的起点 A 指向第二条的终点 C，所以 AB+BC=AC。\n③ 即使某两点重合，零向量也不破坏此等式。"
  },
  {
    "id": "g3-vectors-operations-choice-02",
    "topic": "高三平面向量·概念与运算",
    "kind": "choice",
    "title": "同起点相减",
    "question": "向量 OA−OB 等于：",
    "options": [
      {
        "key": "A",
        "text": "AB"
      },
      {
        "key": "B",
        "text": "BA"
      },
      {
        "key": "C",
        "text": "OA"
      },
      {
        "key": "D",
        "text": "OB"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① −OB=BO，所以 OA−OB=BO+OA。\n② BO 的终点 O 与 OA 的起点 O 相接，合向量为 BA，故选 B。\n③ 注意顺序是从被减向量 OB 的终点 B 指向 OA 的终点 A。"
  },
  {
    "id": "g3-vectors-operations-choice-03",
    "topic": "高三平面向量·概念与运算",
    "kind": "choice",
    "title": "负倍数的方向",
    "question": "非零向量 u 满足 |u|=3，则 −2u 的模与方向分别是：",
    "options": [
      {
        "key": "A",
        "text": "6，与 u 同向"
      },
      {
        "key": "B",
        "text": "−6，与 u 反向"
      },
      {
        "key": "C",
        "text": "6，与 u 反向"
      },
      {
        "key": "D",
        "text": "3，与 u 反向"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 数乘后的模为 |−2u|=|−2||u|=2×3=6，模不能为负。\n② 系数 −2<0，所以 −2u 与非零向量 u 方向相反，选 C。"
  },
  {
    "id": "g3-vectors-operations-choice-04",
    "topic": "高三平面向量·概念与运算",
    "kind": "choice",
    "title": "零向量的夹角",
    "question": "下列说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "零向量与任何向量的夹角均为 0°"
      },
      {
        "key": "B",
        "text": "零向量有确定方向"
      },
      {
        "key": "C",
        "text": "向量相等必须起点相同"
      },
      {
        "key": "D",
        "text": "零向量的模为 0"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 零向量的模为 0，其方向不作确定规定。\n② 本课程中的夹角只对两个非零向量定义，不能给零向量指定夹角。\n③ 向量相等只要求大小相等、方向相同，不要求起点相同，所以只有 D 正确。"
  },
  {
    "id": "g3-vectors-operations-fill-01",
    "topic": "高三平面向量·概念与运算",
    "kind": "fill",
    "title": "数乘后的模",
    "question": "非零向量 u 的模为 2，则 |−3u|=____。",
    "options": [],
    "correctAnswer": "6",
    "explanation": "① 数乘的模公式为 |λu|=|λ||u|。\n② 代入 λ=−3、|u|=2，得到 |−3u|=3×2=6。",
    "acceptedAnswers": [
      "6"
    ]
  },
  {
    "id": "g3-vectors-operations-fill-02",
    "topic": "高三平面向量·概念与运算",
    "kind": "fill",
    "title": "分量线性运算",
    "question": "若 u=(1,2)、v=(2,−1)，则 2u+v=____。",
    "options": [],
    "correctAnswer": "(4,3)",
    "explanation": "① 先数乘：2u=(2,4)。\n② 再逐分量相加：(2,4)+(2,−1)=(4,3)。\n③ 坐标的横纵顺序不能交换。",
    "acceptedAnswers": [
      "(4,3)",
      "4,3"
    ]
  },
  {
    "id": "g3-vectors-operations-fill-03",
    "topic": "高三平面向量·概念与运算",
    "kind": "fill",
    "title": "封闭折线",
    "question": "对三角形 ABC，|AB+BC+CA|=____。",
    "options": [],
    "correctAnswer": "0",
    "explanation": "① AB+BC=AC。\n② 再加 CA，得 AC+CA=0，即零向量。\n③ 零向量的模为 0，所以填 0。",
    "acceptedAnswers": [
      "0"
    ]
  },
  {
    "id": "g3-vectors-operations-written-01",
    "topic": "高三平面向量·概念与运算",
    "kind": "written",
    "title": "平行四边形中的向量运算",
    "question": "在平行四边形 ABCD 中，令 AB=u、AD=v，M 为 BC 的中点。\n（1）用 u、v 表示 AC、AM；\n（2）用 u、v 表示 DM，并说明 DM 与 AM 的关系式。",
    "options": [],
    "correctAnswer": "（1）AC=u+v，AM=u+v/2；（2）DM=u−v/2，DM=AM−v。",
    "explanation": "（1）平行四边形对边向量相等，BC=AD=v。因此 AC=AB+BC=u+v。M 为 BC 中点，所以 BM=BC/2=v/2，故 AM=AB+BM=u+v/2。\n（2）从 D 经过 A 到 M，有 DM=DA+AM。因为 DA=−AD=−v，代入得 DM=−v+(u+v/2)=u−v/2。\n又因为 AM=u+v/2，故 AM−v=u−v/2=DM。关系式 DM=AM−v 描述有方向的位移，不能把它改为两个线段长度的加减。",
    "checkpoints": [
      "用平行四边形与中点关系求 AC、AM",
      "按路径 D→A→M 求 DM",
      "代入检验 DM=AM−v 并区分向量与长度"
    ],
    "hint": "把所有路径统一经过点 A，注意 DA=−AD。"
  },
  {
    "id": "g3-vectors-operations-written-02",
    "topic": "高三平面向量·概念与运算",
    "kind": "written",
    "title": "模不能直接分配",
    "question": "已知非零向量 u、v 满足 |u|=3、|v|=4，且 u⊥v。\n（1）求 |u+v|；\n（2）求 |2u−v|；\n（3）解释为何不能用 |u+v|=|u|+|v|。",
    "options": [],
    "correctAnswer": "（1）5；（2）2√13；（3）u、v 不同向，三角不等式不能取等。",
    "explanation": "（1）由 u⊥v，数量积 u·v=0。展开 |u+v|²=|u|²+2u·v+|v|²=9+0+16=25，模非负，所以 |u+v|=5。\n（2）|2u−v|²=4|u|²−4u·v+|v|²=36+16=52。因此 |2u−v|=√52=2√13。\n（3）三角不等式给出 |u+v|≤|u|+|v|，两个非零向量同向时才能取等。本题 u、v 垂直，不同向，所以严格小于：5<3+4=7。模不是线性运算，不能直接拆成模的和。",
    "checkpoints": [
      "由垂直得数量积为零，展开并求第一问",
      "正确处理数乘及减号，求第二问",
      "说明三角不等式的取等条件并用数值核对"
    ],
    "hint": "先求模的平方，展开数量积后再开非负平方根。"
  },
  {
    "id": "g3-vectors-basis-collinearity-choice-01",
    "topic": "高三平面向量·基底与共线",
    "kind": "choice",
    "title": "不共线基底的唯一性",
    "question": "u、v 不共线，若 mu+2v=3u+nv，则 (m,n)=：",
    "options": [
      {
        "key": "A",
        "text": "(2,3)"
      },
      {
        "key": "B",
        "text": "(3,2)"
      },
      {
        "key": "C",
        "text": "(1,5)"
      },
      {
        "key": "D",
        "text": "不能确定"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 移项得到 (m−3)u+(2−n)v=0。\n② u、v 不共线，所以线性表示唯一，只能两个系数都为零。\n③ m−3=0、2−n=0，得 (m,n)=(3,2)。"
  },
  {
    "id": "g3-vectors-basis-collinearity-choice-02",
    "topic": "高三平面向量·基底与共线",
    "kind": "choice",
    "title": "向量共线的判据",
    "question": "u≠0，向量 v 与 u 共线的充要条件是：",
    "options": [
      {
        "key": "A",
        "text": "|v|=|u|"
      },
      {
        "key": "B",
        "text": "存在实数 λ 使 v=λu"
      },
      {
        "key": "C",
        "text": "u·v=0"
      },
      {
        "key": "D",
        "text": "v≠0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 与非零向量 u 共线的向量，都能写成某个实数倍 λu，含 λ=0 对应的零向量。\n② 反过来，实数倍只改变长度或反转方向，故与 u 共线。\n③ 长度相等、垂直或非零本身均不能保证共线。"
  },
  {
    "id": "g3-vectors-basis-collinearity-choice-03",
    "topic": "高三平面向量·基底与共线",
    "kind": "choice",
    "title": "中点的线性表示",
    "question": "M 为点 A、B 的中点，O 为任意点，则向量 OM=：",
    "options": [
      {
        "key": "A",
        "text": "OA+OB"
      },
      {
        "key": "B",
        "text": "(OA+OB)/2"
      },
      {
        "key": "C",
        "text": "(OA−OB)/2"
      },
      {
        "key": "D",
        "text": "OB−OA"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① OM=OA+AM，且 AM=AB/2=(OB−OA)/2。\n② 代入得 OM=OA+(OB−OA)/2=(OA+OB)/2，故选 B。"
  },
  {
    "id": "g3-vectors-basis-collinearity-choice-04",
    "topic": "高三平面向量·基底与共线",
    "kind": "choice",
    "title": "两点共线的系数和",
    "question": "u=OA、v=OB 不共线，OP=2u−v，则点 A、B、P：",
    "options": [
      {
        "key": "A",
        "text": "一定共线"
      },
      {
        "key": "B",
        "text": "一定不共线"
      },
      {
        "key": "C",
        "text": "只能在直角三角形中共线"
      },
      {
        "key": "D",
        "text": "无法判断"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① OP=2OA−OB=OA−(OB−OA)=OA−AB。\n② 因此 AP=OP−OA=−AB，两个位移共线，所以 A、B、P 共线。\n③ P 在 A 的外侧，不一定在线段 AB 内。"
  },
  {
    "id": "g3-vectors-basis-collinearity-fill-01",
    "topic": "高三平面向量·基底与共线",
    "kind": "fill",
    "title": "唯一线性表示",
    "question": "u、v 不共线，若 tu+3v=2u+sv，则 t+s=____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 不共线基底下表示唯一，得 t=2、s=3。\n② 相加得 t+s=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-vectors-basis-collinearity-fill-02",
    "topic": "高三平面向量·基底与共线",
    "kind": "fill",
    "title": "内分点系数",
    "question": "点 P 在线段 AB 上且 |AP|:|PB|=1:2，若 OP=(1−t)OA+tOB，则 t=____。",
    "options": [],
    "correctAnswer": "1/3",
    "explanation": "① |AP|:|PB|=1:2，所以 AP=AB/3。\n② OP=OA+AP=OA+(OB−OA)/3=(2/3)OA+(1/3)OB。\n③ 与给定形式比较，t=1/3。",
    "acceptedAnswers": [
      "1/3"
    ]
  },
  {
    "id": "g3-vectors-basis-collinearity-fill-03",
    "topic": "高三平面向量·基底与共线",
    "kind": "fill",
    "title": "共线系数",
    "question": "u、v 不共线，向量 a=u+2v、b=3u+tv 共线，则 t=____。",
    "options": [],
    "correctAnswer": "6",
    "explanation": "① a 非零，设 b=λa=λu+2λv。\n② 逐项比较：λ=3、t=2λ=6。\n③ 此时 b=3a，确实共线。",
    "acceptedAnswers": [
      "6"
    ]
  },
  {
    "id": "g3-vectors-basis-collinearity-written-01",
    "topic": "高三平面向量·基底与共线",
    "kind": "written",
    "title": "分点与中线交点",
    "question": "在 △ABC 中，以 AB=u、AC=v 为基底，M 为 BC 中点。点 G 在 AM 上且 |AG|:|GM|=2:1。\n（1）表示 AM、AG；\n（2）设 N 为 AC 中点，证明 B、G、N 共线。",
    "options": [],
    "correctAnswer": "（1）AM=(u+v)/2，AG=(u+v)/3；（2）BG=(2/3)BN。",
    "explanation": "（1）M 为 BC 中点，以 A 为起点的中点公式给出 AM=(AB+AC)/2=(u+v)/2。由 |AG|:|GM|=2:1 且 G 在线段 AM 上，AG=(2/3)AM=(u+v)/3。\n（2）BG=BA+AG=−u+(u+v)/3=(−2u+v)/3。又 N 为 AC 中点，AN=v/2，所以 BN=BA+AN=−u+v/2=(−2u+v)/2。\n比较两式，BG=(2/3)BN。BN 非零，因为 B 不在边 AC 上；故 BG 与 BN 共线，且有公共起点 B，所以 B、G、N 共线。系数在 (0,1) 内，也说明 G 在线段 BN 内。",
    "checkpoints": [
      "利用中点和内分比例表示 AM、AG",
      "统一起点表示 BG、BN",
      "比较比例，说明基向量非零与三点共线"
    ],
    "hint": "把 BG、BN 都写为 u、v 的组合后比较。"
  },
  {
    "id": "g3-vectors-basis-collinearity-written-02",
    "topic": "高三平面向量·基底与共线",
    "kind": "written",
    "title": "共线参数与外分位置",
    "question": "u=OA、v=OB 不共线，且 OP=(t+1)u+(2t−1)v。\n（1）求 A、B、P 共线时的 t；\n（2）在该参数下判断 P 在线段 AB 内还是在延长线上，并求 |AP|:|PB|。",
    "options": [],
    "correctAnswer": "（1）t=1/3；（2）在 BA 越过 A 的延长线上，|AP|:|PB|=1:4。",
    "explanation": "（1）因为 OA、OB 不共线，A≠B。P 在直线 AB 上当且仅当存在实数 λ 使 OP=OA+λAB=(1−λ)u+λv，两个基底系数和等于 1。\n由 (t+1)+(2t−1)=1，得 3t=1，所以 t=1/3。反之代入得到 OP=(4/3)u−v/3，系数和为 1，确实共线。\n（2）此时 λ=−1/3，AP=λAB=−AB/3，说明从 A 出发朝 B 的反方向到达 P，故 P 在 BA 越过 A 的延长线上。PB=AB−AP=(4/3)AB。\n取模得到 |AP|=|AB|/3、|PB|=4|AB|/3，因此 |AP|:|PB| 的长度比为 1:4。负的向量系数不能直接写成负的线段长度比。",
    "checkpoints": [
      "证明直线 AB 上的基底系数和为 1",
      "解参数并回代验证",
      "根据负系数判断外分方向，取模求长度比"
    ],
    "hint": "共线不等于在线段内；线段内还需 0≤λ≤1。"
  },
  {
    "id": "g3-vectors-coordinates-choice-01",
    "topic": "高三平面向量·坐标表示",
    "kind": "choice",
    "title": "终点减起点",
    "question": "A(−1,2)、B(3,−1)，则向量 AB=：",
    "options": [
      {
        "key": "A",
        "text": "(2,1)"
      },
      {
        "key": "B",
        "text": "(4,−3)"
      },
      {
        "key": "C",
        "text": "(−4,3)"
      },
      {
        "key": "D",
        "text": "(−3,4)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 位移坐标按终点减起点计算。\n② AB=(3−(−1),−1−2)=(4,−3)。\n③ 反向的 BA 才是 (−4,3)，故选 B。"
  },
  {
    "id": "g3-vectors-coordinates-choice-02",
    "topic": "高三平面向量·坐标表示",
    "kind": "choice",
    "title": "分量数乘",
    "question": "u=(2,−1)、v=(−1,3)，则 2u−v=：",
    "options": [
      {
        "key": "A",
        "text": "(3,1)"
      },
      {
        "key": "B",
        "text": "(5,−5)"
      },
      {
        "key": "C",
        "text": "(5,1)"
      },
      {
        "key": "D",
        "text": "(−5,5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 2u=(4,−2)。\n② 逐分量相减：(4−(−1),−2−3)=(5,−5)。\n③ 减去负的横分量会变为加，选 B。"
  },
  {
    "id": "g3-vectors-coordinates-choice-03",
    "topic": "高三平面向量·坐标表示",
    "kind": "choice",
    "title": "坐标共线判据",
    "question": "u=(2,1)、v=(t,3)，若 u∥v，则 t=：",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "−6"
      },
      {
        "key": "D",
        "text": "2/3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 二维共线判据为 2×3−1×t=0。\n② 得 6−t=0，即 t=6。\n③ 回代 v=(6,3)=3u，确实共线，判据不需除以分量。"
  },
  {
    "id": "g3-vectors-coordinates-choice-04",
    "topic": "高三平面向量·坐标表示",
    "kind": "choice",
    "title": "坐标中点",
    "question": "A(−2,1)、B(4,5)，AB 中点坐标为：",
    "options": [
      {
        "key": "A",
        "text": "(2,4)"
      },
      {
        "key": "B",
        "text": "(1,3)"
      },
      {
        "key": "C",
        "text": "(3,1)"
      },
      {
        "key": "D",
        "text": "(6,4)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 中点横坐标为 (−2+4)/2=1。\n② 纵坐标为 (1+5)/2=3。\n③ 所以中点为 (1,3)，不是两端点的位移差。"
  },
  {
    "id": "g3-vectors-coordinates-fill-01",
    "topic": "高三平面向量·坐标表示",
    "kind": "fill",
    "title": "模的坐标公式",
    "question": "u=(3,−4)，则 |u|=____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① |u|=√(3²+(−4)²)。\n② 根号内为 9+16=25，取非负平方根得 5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-vectors-coordinates-fill-02",
    "topic": "高三平面向量·坐标表示",
    "kind": "fill",
    "title": "由位移还原终点",
    "question": "已知 A(1,−2)、AB=(3,4)，则 B 的坐标为____。",
    "options": [],
    "correctAnswer": "(4,2)",
    "explanation": "① 设 B=(x,y)，则 AB=(x−1,y+2)=(3,4)。\n② 解得 x=4、y=2，所以 B=(4,2)。",
    "acceptedAnswers": [
      "(4,2)",
      "4,2"
    ]
  },
  {
    "id": "g3-vectors-coordinates-fill-03",
    "topic": "高三平面向量·坐标表示",
    "kind": "fill",
    "title": "点间距离",
    "question": "A(−1,1)、B(2,5)，则两点距离为____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① AB=(2−(−1),5−1)=(3,4)。\n② 距离为 |AB|=√(3²+4²)=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-vectors-coordinates-written-01",
    "topic": "高三平面向量·坐标表示",
    "kind": "written",
    "title": "坐标向量与平行四边形",
    "question": "平行四边形 ABCD 的顶点按顺序排列，A(1,1)、B(4,2)、D(0,3)。\n（1）求 C 的坐标；\n（2）求两条对角线交点 O 的坐标；\n（3）求 |AC|。",
    "options": [],
    "correctAnswer": "（1）C(3,4)；（2）O(2,5/2)；（3）√13。",
    "explanation": "（1）AB=(4−1,2−1)=(3,1)，AD=(0−1,3−1)=(−1,2)。平行四边形满足 AC=AB+AD=(2,3)。因此 C=A+AC=(1+2,1+3)=(3,4)。\n（2）对角线互相平分，所以 O 为 AC 中点，O=((1+3)/2,(1+4)/2)=(2,5/2)。用 BD 的中点检验：((4+0)/2,(2+3)/2)=(2,5/2)，一致。\n（3）AC=(2,3)，所以 |AC|=√(2²+3²)=√13。顶点坐标、向量坐标与长度是三种对象，应分别写清。",
    "checkpoints": [
      "先求边向量，再由 AC=AB+AD 求顶点",
      "用对角线中点公式并交叉检查",
      "按向量模公式求长度"
    ],
    "hint": "C 的坐标可以由 B+D−A 得到，但要说明来自平行四边形关系。"
  },
  {
    "id": "g3-vectors-coordinates-written-02",
    "topic": "高三平面向量·坐标表示",
    "kind": "written",
    "title": "不除分量的共线分类",
    "question": "设 u=(t,2)、v=(3,t+1)。\n（1）求 u、v 共线时 t 的值；\n（2）分别判断两参数下 u、v 同向还是反向。",
    "options": [],
    "correctAnswer": "（1）t=2 或 −3；（2）t=2 同向，t=−3 反向。",
    "explanation": "（1）u 的第二分量为 2，v 的第一分量为 3，所以两向量始终非零。共线条件为 t(t+1)−2×3=0，即 t²+t−6=0。因式分解得 (t+3)(t−2)=0，所以 t=2 或 t=−3。\n（2）t=2 时，u=(2,2)、v=(3,3)=(3/2)u，比例系数为正，故同向。\nt=−3 时，u=(−3,2)、v=(3,−2)=−u，比例系数为负，故反向。\n两值回代均满足判据；采用行列式条件，不会因直接除以某个可能为零的分量而漏解。",
    "checkpoints": [
      "确认非零并用二维行列式列方程",
      "分解二次方程求全体参数",
      "逐个回代，用比例系数正负判断方向"
    ],
    "hint": "先用交叉乘积等于零求参数，再求实际比例。"
  },
  {
    "id": "g3-vectors-dot-product-choice-01",
    "topic": "高三平面向量·数量积与投影",
    "kind": "choice",
    "title": "数量积的坐标计算",
    "question": "u=(1,2)、v=(3,−1)，则 u·v=：",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "(3,−2)"
      },
      {
        "key": "D",
        "text": "−1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 数量积是实数，计算式为 1×3+2×(−1)。\n② 得 3−2=1，选 A。\n③ 不能把逐分量乘积 (3,−2) 当作数量积。"
  },
  {
    "id": "g3-vectors-dot-product-choice-02",
    "topic": "高三平面向量·数量积与投影",
    "kind": "choice",
    "title": "夹角公式",
    "question": "非零向量 u、v 满足 |u|=2、|v|=3，夹角 60°，则 u·v=：",
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
        "text": "√3"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① u·v=|u||v|cosθ。\n② 代入得 2×3×cos60°=6×(1/2)=3，故选 B。"
  },
  {
    "id": "g3-vectors-dot-product-choice-03",
    "topic": "高三平面向量·数量积与投影",
    "kind": "choice",
    "title": "垂直条件",
    "question": "u=(t,1)、v=(2,−4)，若 u⊥v，则 t=：",
    "options": [
      {
        "key": "A",
        "text": "−2"
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
        "text": "−4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 两向量始终非零，可用数量积为 0 表示垂直。\n② u·v=2t−4=0，得到 t=2。"
  },
  {
    "id": "g3-vectors-dot-product-choice-04",
    "topic": "高三平面向量·数量积与投影",
    "kind": "choice",
    "title": "投影保留方向符号",
    "question": "向量 v 在非零向量 u 方向的数量投影为：",
    "options": [
      {
        "key": "A",
        "text": "v·u"
      },
      {
        "key": "B",
        "text": "(v·u)/|u|"
      },
      {
        "key": "C",
        "text": "(v·u)/|v|"
      },
      {
        "key": "D",
        "text": "|v·u|/|u|"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 先取 u 方向单位向量 e=u/|u|。\n② 数量投影为 v·e=(v·u)/|u|，可以为负。\n③ 若要求投影长度才取绝对值，故不能一般使用 D。"
  },
  {
    "id": "g3-vectors-dot-product-fill-01",
    "topic": "高三平面向量·数量积与投影",
    "kind": "fill",
    "title": "垂直时的模",
    "question": "u⊥v，|u|=3、|v|=4，则 |u−v|=____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 垂直得 u·v=0。\n② |u−v|²=9−2×0+16=25，因此模为 5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-vectors-dot-product-fill-02",
    "topic": "高三平面向量·数量积与投影",
    "kind": "fill",
    "title": "数量积与钝角",
    "question": "|u|=|v|=2，u·v=−2，则夹角为____°。（只填数值）",
    "options": [],
    "correctAnswer": "120",
    "explanation": "① 两向量非零，cosθ=(−2)/(2×2)=−1/2。\n② θ∈[0°,180°]，对应 θ=120°，不能取周期范围外的角。",
    "acceptedAnswers": [
      "120"
    ]
  },
  {
    "id": "g3-vectors-dot-product-fill-03",
    "topic": "高三平面向量·数量积与投影",
    "kind": "fill",
    "title": "有符号投影",
    "question": "u=(1,0)、v=(−3,4)，v 在 u 方向的数量投影为____。",
    "options": [],
    "correctAnswer": "−3",
    "explanation": "① |u|=1，u·v=−3。\n② 数量投影为 (u·v)/|u|=−3，负号表示与 u 指向相反。\n③ 投影长度为 3，与本题的数量投影不同。",
    "acceptedAnswers": [
      "−3",
      "-3"
    ]
  },
  {
    "id": "g3-vectors-dot-product-written-01",
    "topic": "高三平面向量·数量积与投影",
    "kind": "written",
    "title": "从数量积到夹角与模",
    "question": "已知 |u|=2、|v|=3、u·v=3。\n（1）求 u、v 的夹角；\n（2）求 |u−v|、|u+2v|；\n（3）求 v 在 u 方向的数量投影。",
    "options": [],
    "correctAnswer": "（1）60°；（2）√7、2√13；（3）3/2。",
    "explanation": "（1）两模非零，cosθ=(u·v)/(|u||v|)=3/(2×3)=1/2。由 θ∈[0°,180°]，得 θ=60°。\n（2）|u−v|²=|u|²−2u·v+|v|²=4−6+9=7，所以 |u−v|=√7。\n|u+2v|²=|u|²+4u·v+4|v|²=4+12+36=52，所以 |u+2v|=2√13。展开时交叉项系数为 4，不能漏乘 2。\n（3）u 方向单位向量为 u/2，v 在该方向数量投影为 v·(u/2)=(u·v)/2=3/2。这里得到实数投影，不是投影向量。",
    "checkpoints": [
      "按非零夹角公式确定角度范围",
      "分别展开两模的平方并开非负根",
      "用方向单位向量求数量投影"
    ],
    "hint": "数量积连接夹角、模的平方与投影，三个公式可相互检验。"
  },
  {
    "id": "g3-vectors-dot-product-written-02",
    "topic": "高三平面向量·数量积与投影",
    "kind": "written",
    "title": "平行与垂直分别求参",
    "question": "设 u=(t,1)、v=(2,−1)。\n（1）求 u、v 垂直时的 t；\n（2）求 u、v 共线时的 t，并判断同向或反向；\n（3）说明为什么不能把两个判据混用。",
    "options": [],
    "correctAnswer": "（1）t=1/2；（2）t=−2，反向；（3）数量积为零判垂直，行列式为零判共线。",
    "explanation": "（1）两向量始终非零。垂直等价于 u·v=2t−1=0，所以 t=1/2。回代 u=(1/2,1)，与 v 的数量积为 1−1=0。\n（2）共线条件为 t×(−1)−1×2=0，即 −t−2=0，得到 t=−2。此时 u=(−2,1)，v=(2,−1)=−u，比例系数为负，所以反向。\n（3）数量积 x₁x₂+y₁y₂=0 描述两非零向量夹角 90°；行列式 x₁y₂−y₁x₂=0 描述共线。两式结构与几何意义不同，本题求出的参数也不同，不能交换使用。",
    "checkpoints": [
      "以数量积为零解垂直参数并检验",
      "以行列式为零解共线参数并判方向",
      "区分两个判据的前提和意义"
    ],
    "hint": "写判据前先用文字说明要判的是垂直还是共线。"
  },
  {
    "id": "g3-vectors-geometry-applications-choice-01",
    "topic": "高三平面向量·几何应用",
    "kind": "choice",
    "title": "重心的向量特征",
    "question": "G 为 △ABC 的重心，则 GA+GB+GC=：",
    "options": [
      {
        "key": "A",
        "text": "0（零向量）"
      },
      {
        "key": "B",
        "text": "AB"
      },
      {
        "key": "C",
        "text": "AC"
      },
      {
        "key": "D",
        "text": "3GA"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 对任意原点 O，重心满足 3OG=OA+OB+OC。\n② GA+GB+GC=(OA−OG)+(OB−OG)+(OC−OG)=OA+OB+OC−3OG=0。"
  },
  {
    "id": "g3-vectors-geometry-applications-choice-02",
    "topic": "高三平面向量·几何应用",
    "kind": "choice",
    "title": "中线比例",
    "question": "G 为 △ABC 重心，M 为 BC 中点，则 |CG|:|GM| 的长度比为：",
    "options": [
      {
        "key": "A",
        "text": "1:1"
      },
      {
        "key": "B",
        "text": "1:2"
      },
      {
        "key": "C",
        "text": "2:1"
      },
      {
        "key": "D",
        "text": "3:1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 重心把每条中线按靠顶点一段与靠边中点一段为 2:1 分割。\n② 在中线 CM 上有 CG=(2/3)CM、GM=(1/3)CM，所以长度比为 2:1。"
  },
  {
    "id": "g3-vectors-geometry-applications-choice-03",
    "topic": "高三平面向量·几何应用",
    "kind": "choice",
    "title": "垂直的几何转化",
    "question": "在 △ABC 中，向量 AB 与 AC 垂直等价于：",
    "options": [
      {
        "key": "A",
        "text": "AB·AC=0"
      },
      {
        "key": "B",
        "text": "AB∥AC"
      },
      {
        "key": "C",
        "text": "|AB|=|AC|"
      },
      {
        "key": "D",
        "text": "AB+AC=0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 三角形相邻边向量都非零。\n② 两向量垂直当且仅当数量积为 0，故 AB·AC=0 与条件等价。\n③ 长度相等描述等腰，并不能代替直角。"
  },
  {
    "id": "g3-vectors-geometry-applications-choice-04",
    "topic": "高三平面向量·几何应用",
    "kind": "choice",
    "title": "坐标求三角形面积",
    "question": "A(0,0)、B(4,0)、C(1,3)，则 △ABC 面积为：",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① AB 所在直线为 x 轴，底长为 4。\n② C 到该直线的距离为 |3|=3。\n③ 面积为 4×3/2=6，选 B。"
  },
  {
    "id": "g3-vectors-geometry-applications-fill-01",
    "topic": "高三平面向量·几何应用",
    "kind": "fill",
    "title": "重心坐标",
    "question": "△ABC 的 A(0,0)、B(6,0)、C(0,3)，重心 G 的坐标为____。",
    "options": [],
    "correctAnswer": "(2,1)",
    "explanation": "① 重心横坐标为 (0+6+0)/3=2。\n② 纵坐标为 (0+0+3)/3=1，所以 G=(2,1)。",
    "acceptedAnswers": [
      "(2,1)",
      "2,1"
    ]
  },
  {
    "id": "g3-vectors-geometry-applications-fill-02",
    "topic": "高三平面向量·几何应用",
    "kind": "fill",
    "title": "中点与位移的模",
    "question": "A(0,0)、B(6,0)、C(0,8)，M 为 BC 中点，则 |AM|=____。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 中点 M=((6+0)/2,(0+8)/2)=(3,4)。\n② AM=(3,4)，模为 √(9+16)=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-vectors-geometry-applications-fill-03",
    "topic": "高三平面向量·几何应用",
    "kind": "fill",
    "title": "向量等式决定垂直",
    "question": "非零向量 u、v 满足 |u+v|=|u−v|，则 u·v=____。",
    "options": [],
    "correctAnswer": "0",
    "explanation": "① 两模相等，两边平方仍相等。\n② 展开并消去 |u|²+|v|²，得到 2u·v=−2u·v，即 4u·v=0。\n③ 所以 u·v=0，两非零向量垂直。",
    "acceptedAnswers": [
      "0"
    ]
  },
  {
    "id": "g3-vectors-geometry-applications-written-01",
    "topic": "高三平面向量·几何应用",
    "kind": "written",
    "title": "重心向量关系的证明",
    "question": "在 △ABC 中，M 为 BC 中点，G 在线段 AM 上，且 |AG|:|GM|=2:1。\n（1）证明 GA+GB+GC=0；\n（2）反过来，若点 P 满足 PA+PB+PC=0，证明 P=G。",
    "options": [],
    "correctAnswer": "（1）三向量之和为零向量；（2）AP=(AB+AC)/3=AG，所以 P=G。",
    "explanation": "（1）以 A 为起点，AM=(AB+AC)/2，由中线分点关系，AG=(2/3)AM=(AB+AC)/3。\nGA=−AG，GB=AB−AG，GC=AC−AG，所以 GA+GB+GC=AB+AC−3AG=0。\n（2）对点 P，PA=−AP，PB=AB−AP，PC=AC−AP。代入 PA+PB+PC=0，得 AB+AC−3AP=0，从而 AP=(AB+AC)/3。\n由（1）已知 AG=(AB+AC)/3，所以 AP=AG。两向量起点同为 A，向量相等意味着终点相同，故 P=G。\n正反两个方向都给出了推导，说明该向量等式唯一刻画三角形重心。",
    "checkpoints": [
      "从中线分点关系表示 AG",
      "统一起点展开三向量并证明和为零",
      "反向求出 AP，利用同起点等向量证明点重合"
    ],
    "hint": "把所有位移都写成 AB、AC 与 AP 或 AG 的组合。"
  },
  {
    "id": "g3-vectors-geometry-applications-written-02",
    "topic": "高三平面向量·几何应用",
    "kind": "written",
    "title": "坐标求垂足与距离",
    "question": "设 A(0,0)、B(4,0)、C(1,3)，H 为 A 到直线 BC 的垂足。\n（1）设 BH=tBC，求 H 的坐标表达式；\n（2）求 t 和 H；\n（3）求 |AH| 与三角形面积，并相互检验。",
    "options": [],
    "correctAnswer": "（1）H(4−3t,3t)；（2）t=2/3，H(2,2)；（3）|AH|=2√2，面积 6。",
    "explanation": "（1）BC=C−B=(−3,3)。由 BH=tBC，得到 H=B+tBC=(4−3t,3t)，其中 t 暂取任意实数，因为垂足可在线段外。\n（2）AH=(4−3t,3t)。垂直条件 AH·BC=0，得到 (4−3t)(−3)+(3t)3=0，即 −12+18t=0，所以 t=2/3。代回得 H=(2,2)。此时 0<t<1，垂足确在线段 BC 内。\n（3）|AH|=√(2²+2²)=2√2，|BC|=√(9+9)=3√2。因此以 BC 为底的面积为 (1/2)(3√2)(2√2)=6。\n以 AB 为底检验：底长 4，C 到 x 轴距离 3，面积为 4×3/2=6，与前式一致。",
    "checkpoints": [
      "先用直线参数表示 H，不先限制 t",
      "用数量积垂直求参数并代回",
      "求高和面积，用另一底高验证"
    ],
    "hint": "垂足是“在直线上”与“连线垂直”的联合条件。"
  },
  {
    "id": "g3-vectors-parameters-extrema-choice-01",
    "topic": "高三平面向量·参数与最值",
    "kind": "choice",
    "title": "模的最小值",
    "question": "u=(t,2−t)，t∈R，则 |u| 的最小值为：",
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
        "text": "√2"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① |u|²=t²+(2−t)²=2t²−4t+4=2(t−1)²+2。\n② 平方项非负，最小平方为 2，在 t=1 取得。\n③ 模非负，最小值为 √2，选 C。"
  },
  {
    "id": "g3-vectors-parameters-extrema-choice-02",
    "topic": "高三平面向量·参数与最值",
    "kind": "choice",
    "title": "数量积含参",
    "question": "u=(1,t)、v=(t,−2)，若 u·v=0，则 t=：",
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
        "text": "−1"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① u·v=1×t+t×(−2)=−t。\n② 令 −t=0，得 t=0。\n③ 此时 u=(1,0)、v=(0,−2) 均非零，确实垂直。"
  },
  {
    "id": "g3-vectors-parameters-extrema-choice-03",
    "topic": "高三平面向量·参数与最值",
    "kind": "choice",
    "title": "坐标距离轨迹",
    "question": "点 P(x,y) 满足 |PA|=|PB|，其中 A(−1,0)、B(1,0)，则轨迹为：",
    "options": [
      {
        "key": "A",
        "text": "x=0"
      },
      {
        "key": "B",
        "text": "y=0"
      },
      {
        "key": "C",
        "text": "x=1"
      },
      {
        "key": "D",
        "text": "单位圆"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 距离均非负，可以等价平方：(x+1)²+y²=(x−1)²+y²。\n② 展开消去同类项得 4x=0，所以 x=0。\n③ 这就是 AB 的垂直平分线，y 任意。"
  },
  {
    "id": "g3-vectors-parameters-extrema-choice-04",
    "topic": "高三平面向量·参数与最值",
    "kind": "choice",
    "title": "非零前提必须保留",
    "question": "u=(t,0)、v=(1,1)。若要求两向量均非零且共线，则 t：",
    "options": [
      {
        "key": "A",
        "text": "只能为 0"
      },
      {
        "key": "B",
        "text": "任意实数"
      },
      {
        "key": "C",
        "text": "只能为 1"
      },
      {
        "key": "D",
        "text": "不存在"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 共线判据 t×1−0×1=0，得到 t=0。\n② 但 t=0 会使 u 成为零向量，违反“均非零”的题设。\n③ 唯一候选被排除，所以不存在符合条件的 t。"
  },
  {
    "id": "g3-vectors-parameters-extrema-fill-01",
    "topic": "高三平面向量·参数与最值",
    "kind": "fill",
    "title": "配方后的参数",
    "question": "u=(t−2,3)，t∈R，则 |u| 取最小值时 t=____。",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① |u|²=(t−2)²+9。\n② 平方项在 t=2 时唯一取零，因此模也在 t=2 取得最小值 3。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-vectors-parameters-extrema-fill-02",
    "topic": "高三平面向量·参数与最值",
    "kind": "fill",
    "title": "共线参数",
    "question": "u=(1,2)、v=(t,6)，共线时 t=____。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① 共线条件为 1×6−2t=0。\n② 解得 t=3，回代 v=(3,6)=3u，符合条件。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-vectors-parameters-extrema-fill-03",
    "topic": "高三平面向量·参数与最值",
    "kind": "fill",
    "title": "点到固定点的最短距离",
    "question": "点 P(t,1−t)，O 为原点，则 |OP| 的最小值为____。",
    "options": [],
    "correctAnswer": "√2/2",
    "explanation": "① |OP|²=t²+(1−t)²=2(t−1/2)²+1/2。\n② 最小平方为 1/2，在 t=1/2 取得。\n③ 最小距离为 √(1/2)=√2/2。",
    "acceptedAnswers": [
      "√2/2",
      "sqrt(2)/2",
      "1/√2",
      "1/sqrt(2)"
    ]
  },
  {
    "id": "g3-vectors-parameters-extrema-written-01",
    "topic": "高三平面向量·参数与最值",
    "kind": "written",
    "title": "模的最值与正交条件",
    "question": "设 u=(1,2)、v=(2,−1)，t∈R，令 w=u+tv。\n（1）求 |w|² 的表达式与最小值；\n（2）证明最小值取点处 w⊥v；\n（3）说明最小模是多少。",
    "options": [],
    "correctAnswer": "（1）|w|²=5+5t²，最小值 5，t=0；（2）此时 w·v=0；（3）最小模 √5。",
    "explanation": "（1）u·v=1×2+2×(−1)=0，|u|²=1+4=5，|v|²=4+1=5。展开 |u+tv|²=|u|²+2t(u·v)+t²|v|²，得 |w|²=5+5t²。最小平方为 5，在 t=0 唯一取得。\n（2）一般有 w·v=(u+tv)·v=u·v+t|v|²=5t。在最小值取点 t=0 时，该值为 0。此时 w=u≠0 且 v≠0，所以可判定 w⊥v。\n（3）模是非负平方根，平方函数在非负数上保序，因此最小模为 √5，也在 t=0 取得。不能把模的最小值和模平方的最小值都写成 5。",
    "checkpoints": [
      "先计算三个数量积并展开平方",
      "在极小参数下检验数量积为零且非零",
      "区分最小平方与最小模，写出取点"
    ],
    "hint": "先求模平方；参数对应的最近位置通常能用垂直关系解释。"
  },
  {
    "id": "g3-vectors-parameters-extrema-written-02",
    "topic": "高三平面向量·参数与最值",
    "kind": "written",
    "title": "垂直轨迹与非退化筛选",
    "question": "A(−1,0)、B(1,0)，点 P(x,y) 满足 PA·PB=0。\n（1）求所有满足等式的点的轨迹方程；\n（2）若进一步要求 △APB 为非退化直角三角形，轨迹中须排除哪些点？\n（3）求这些三角形面积的最大值及取点。",
    "options": [],
    "correctAnswer": "（1）x²+y²=1；（2）排除 A、B；（3）最大面积 1，在 P(0,1)、P(0,−1) 取得。",
    "explanation": "（1）PA=A−P=(−1−x,−y)，PB=B−P=(1−x,−y)。数量积为 (−1−x)(1−x)+(−y)(−y)=x²−1+y²。令其为零，得到 x²+y²=1，所以满足代数等式的轨迹是单位圆。\n（2）P=A 或 P=B 时，PA、PB 中有一个为零向量，代数等式仍成立，但不能形成非退化三角形，须排除这两点。圆上 y=0 只有 A、B，排除后 y≠0，A、P、B 不共线，且 PA、PB 均非零；数量积为零才确实对应直角。\n（3）固定底边 AB 长为 2，P 到 x 轴的高为 |y|，故面积 S=(1/2)×2×|y|=|y|。单位圆上 |y|≤1，等号要求 y=±1，由圆方程得到 x=0。\nP(0,±1) 不在排除点中，确实形成直角三角形，所以最大面积 1 能取得。",
    "checkpoints": [
      "展开坐标数量积，得到完整代数轨迹",
      "排除零向量及退化点，说明剩余点均成立",
      "用固定底高求最大面积并核对取点有效"
    ],
    "hint": "先求等式的全部解，再用几何题设筛掉退化情形。"
  }
];
