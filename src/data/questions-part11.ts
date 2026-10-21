import type { Question } from "./questions-part1";

// 高三第七模块；本站原创。已发布的 ID/topic 与练习记录关联，保持稳定。
export const practiceTopics = [
  "高三解析几何·直线与圆",
  "高三解析几何·椭圆",
  "高三解析几何·双曲线",
  "高三解析几何·抛物线",
  "高三解析几何·弦与中点",
  "高三解析几何·轨迹方程",
  "高三解析几何·综合与最值"
] as const;
export const practiceChapters = [{ title: "解析几何", topics: [...practiceTopics] }] as const;

export const questions: Question[] = [
  {
    "id": "g3-analytic-lines-circles-choice-01",
    "topic": "高三解析几何·直线与圆",
    "kind": "choice",
    "title": "竖直直线不能漏",
    "question": "过点 (2,−1) 且垂直于 x 轴的直线为：",
    "options": [
      {
        "key": "A",
        "text": "y=−1"
      },
      {
        "key": "B",
        "text": "x=2"
      },
      {
        "key": "C",
        "text": "y=2x−1"
      },
      {
        "key": "D",
        "text": "x=−1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 垂直于 x 轴的直线是竖直直线，所有点的横坐标相同。\n② 过给定点后方程为 x=2。它没有斜率，不能用 y=kx+b 的有限 k 表示。\n故选 B。"
  },
  {
    "id": "g3-analytic-lines-circles-choice-02",
    "topic": "高三解析几何·直线与圆",
    "kind": "choice",
    "title": "配方后确定圆",
    "question": "圆 x²+y²−2x+4y−4=0 的圆心和半径为：",
    "options": [
      {
        "key": "A",
        "text": "(−1,2)，3"
      },
      {
        "key": "B",
        "text": "(1,−2)，9"
      },
      {
        "key": "C",
        "text": "(1,2)，1"
      },
      {
        "key": "D",
        "text": "(1,−2)，3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 配方得 (x−1)²+(y+2)²=1+4+4=9。\n② 因此圆心为 (1,−2)，半径是 √9=3，不是 9。\n故选 D。"
  },
  {
    "id": "g3-analytic-lines-circles-choice-03",
    "topic": "高三解析几何·直线与圆",
    "kind": "choice",
    "title": "点面距离改为点线距离",
    "question": "直线 3x+4y−10=0 与单位圆 x²+y²=1 的位置关系是：",
    "options": [
      {
        "key": "A",
        "text": "相离"
      },
      {
        "key": "B",
        "text": "相切"
      },
      {
        "key": "C",
        "text": "相交"
      },
      {
        "key": "D",
        "text": "直线过圆心"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 圆心 O(0,0) 到直线距离为 |−10|/√(3²+4²)=2。\n② 2 大于半径 1，所以直线与圆相离。\n故选 A。"
  },
  {
    "id": "g3-analytic-lines-circles-choice-04",
    "topic": "高三解析几何·直线与圆",
    "kind": "choice",
    "title": "距离与半弦",
    "question": "圆 x²+y²=25 被直线 y=3 截得的弦长为：",
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
        "text": "8"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 圆心到直线的距离为 3，半径为 5。\n② 半弦长 √(25−9)=4，所以整条弦长为 8。\n故选 C。"
  },
  {
    "id": "g3-analytic-lines-circles-fill-01",
    "topic": "高三解析几何·直线与圆",
    "kind": "fill",
    "title": "点到直线距离",
    "question": "点 P(1,2) 到直线 3x+4y−5=0 的距离为多少？",
    "options": [],
    "correctAnswer": "6/5",
    "explanation": "① 距离为 |3×1+4×2−5|/√(3²+4²)。\n② 分子为 6，分母为 5，得到 6/5。",
    "acceptedAnswers": [
      "6/5",
      "1.2"
    ]
  },
  {
    "id": "g3-analytic-lines-circles-fill-02",
    "topic": "高三解析几何·直线与圆",
    "kind": "fill",
    "title": "一般式的半径",
    "question": "圆 x²+y²−4x+2y−4=0 的半径为多少？",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① 配方得 (x−2)²+(y+1)²=4+1+4=9。\n② 半径为 √9=3。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-analytic-lines-circles-fill-03",
    "topic": "高三解析几何·直线与圆",
    "kind": "fill",
    "title": "切线段长",
    "question": "点 P(5,0) 向圆 x²+y²=9 引切线，填切线段长。",
    "options": [],
    "correctAnswer": "4",
    "explanation": "① 圆心 O 到 P 的距离为 5，半径为 3，P 在圆外。\n② 半径垂直于切线段，直角三角形中切线段长为 √(5²−3²)=4。",
    "acceptedAnswers": [
      "4"
    ]
  },
  {
    "id": "g3-analytic-lines-circles-written-01",
    "topic": "高三解析几何·直线与圆",
    "kind": "written",
    "title": "圆心约束与截弦",
    "question": "圆经过 A(0,0)、B(4,0)，圆心在直线 x+y=2 上。（1）求圆的方程；（2）求直线 y=1 截该圆所得弦长。",
    "options": [],
    "correctAnswer": "圆为 (x−2)²+y²=4；弦长 2√3。",
    "explanation": "（1）设圆心为 (h,k)。因到 A、B 距离相等，有 h²+k²=(h−4)²+k²。\n展开得 8h=16，所以 h=2。再由 h+k=2 得 k=0。\n半径为到 A 的距离 2，故圆的方程为 (x−2)²+y²=4。回代 A、B 均成立。\n（2）代入 y=1，得 (x−2)²=3，因此两个交点横坐标为 2−√3、2+√3。\n两点纵坐标相同，弦长是横坐标差 2√3。也可由圆心到直线距离 1 得半弦长 √(4−1)=√3，再乘 2。",
    "checkpoints": [
      "用等距条件确定圆心横坐标",
      "联立圆心约束求圆方程并检验",
      "代入截线或用半弦三角形求整弦长"
    ],
    "hint": "圆心在 AB 的垂直平分线上，先求圆心，再求半径。"
  },
  {
    "id": "g3-analytic-lines-circles-written-02",
    "topic": "高三解析几何·直线与圆",
    "kind": "written",
    "title": "圆外一点的两条切线",
    "question": "求过 P(5,0) 且与圆 x²+y²=9 相切的全部直线，以及相应切点。",
    "options": [],
    "correctAnswer": "切线为 3x+4y−15=0、3x−4y−15=0；切点为 (9/5,12/5)、(9/5,−12/5)。",
    "explanation": "（1）先查竖直直线 x=5：它到圆心距离为 5，大于半径 3，因此不是切线。\n其余直线可设 y=k(x−5)，即 kx−y−5k=0。相切要求圆心到直线的距离等于半径：5|k|/√(k²+1)=3。\n两边非负且分母为正，平方得 25k²=9(k²+1)，即 16k²=9，k=±3/4。\n分别整理得 3x−4y−15=0、3x+4y−15=0，两条都过 P，且到圆心距离为 15/5=3，均为切线。\n（2）切点是圆心在切线上的垂足。对 3x+4y−15=0，垂足沿法线方向 (3,4)，设为 (3t,4t)。\n代入得 25t=15，t=3/5，所以切点为 (9/5,12/5)。同理另一条的切点为 (9/5,−12/5)。\n两点均满足 x²+y²=81/25+144/25=9，且分别在对应切线上，位置与切线条件核验完成。",
    "checkpoints": [
      "先排查斜率不存在的直线",
      "用距离等于半径列方程，求全体斜率并回代",
      "沿法线求两个切点，分别核验落圆与落线"
    ],
    "hint": "不要直接设斜率后认为已覆盖所有直线；先单独检查 x=5。"
  },
  {
    "id": "g3-analytic-ellipse-choice-01",
    "topic": "高三解析几何·椭圆",
    "kind": "choice",
    "title": "半焦距与焦距",
    "question": "椭圆 x²/25+y²/9=1 的焦距为：",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① a²=25、b²=9，半焦距 c 满足 c²=a²−b²=16，所以 c=4。\n② 焦距为 2c=8，不是 c 本身。\n故选 D。"
  },
  {
    "id": "g3-analytic-ellipse-choice-02",
    "topic": "高三解析几何·椭圆",
    "kind": "choice",
    "title": "焦点所在轴",
    "question": "椭圆 x²/9+y²/25=1 的焦点为：",
    "options": [
      {
        "key": "A",
        "text": "(0,±4)"
      },
      {
        "key": "B",
        "text": "(±4,0)"
      },
      {
        "key": "C",
        "text": "(0,±5)"
      },
      {
        "key": "D",
        "text": "(±3,0)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 较大的分母 25 在 y²下，长轴沿 y 轴。\n② c²=25−9=16，故焦点为 (0,±4)。\n故选 A。"
  },
  {
    "id": "g3-analytic-ellipse-choice-03",
    "topic": "高三解析几何·椭圆",
    "kind": "choice",
    "title": "离心率的范围",
    "question": "椭圆 x²/25+y²/9=1 的离心率为：",
    "options": [
      {
        "key": "A",
        "text": "3/5"
      },
      {
        "key": "B",
        "text": "5/4"
      },
      {
        "key": "C",
        "text": "4/5"
      },
      {
        "key": "D",
        "text": "4/3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① a=5，c=√(25−9)=4。\n② e=c/a=4/5，符合椭圆 0<e<1 的范围。\n故选 C。"
  },
  {
    "id": "g3-analytic-ellipse-choice-04",
    "topic": "高三解析几何·椭圆",
    "kind": "choice",
    "title": "距离和的退化边界",
    "question": "F₁(−3,0)、F₂(3,0)，满足 PF₁+PF₂=6 的点 P 的轨迹为：",
    "options": [
      {
        "key": "A",
        "text": "非退化椭圆"
      },
      {
        "key": "B",
        "text": "线段 F₁F₂（含端点）"
      },
      {
        "key": "C",
        "text": "双曲线"
      },
      {
        "key": "D",
        "text": "空集"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 两焦点间距离为 6，题给距离和也为 6。\n② 三角不等式取等当且仅当 P 在线段 F₁F₂上，因此轨迹是该线段。\n③ 非退化椭圆要求距离和严格大于焦距，不能把边界也算作椭圆。\n故选 B。"
  },
  {
    "id": "g3-analytic-ellipse-fill-01",
    "topic": "高三解析几何·椭圆",
    "kind": "fill",
    "title": "焦距开根后乘二",
    "question": "椭圆 x²/9+y²/4=1 的焦距是多少？",
    "options": [],
    "correctAnswer": "2√5",
    "explanation": "① c²=9−4=5，得 c=√5。\n② 焦距为 2c=2√5。",
    "acceptedAnswers": [
      "2√5",
      "2sqrt(5)",
      "2*sqrt(5)"
    ]
  },
  {
    "id": "g3-analytic-ellipse-fill-02",
    "topic": "高三解析几何·椭圆",
    "kind": "fill",
    "title": "轴长给出离心率",
    "question": "椭圆长轴长 8、短轴长 6，填离心率。",
    "options": [],
    "correctAnswer": "√7/4",
    "explanation": "① 半长轴 a=4、半短轴 b=3。\n② c=√(16−9)=√7，所以 e=c/a=√7/4。",
    "acceptedAnswers": [
      "√7/4",
      "sqrt(7)/4"
    ]
  },
  {
    "id": "g3-analytic-ellipse-fill-03",
    "topic": "高三解析几何·椭圆",
    "kind": "fill",
    "title": "点坐标的两种符号",
    "question": "点 (3,y) 在椭圆 x²/25+y²/16=1 上，填 |y|。",
    "options": [],
    "correctAnswer": "16/5",
    "explanation": "① 代入得 y²/16=1−9/25=16/25。\n② y²=256/25，y=±16/5，因此 |y|=16/5。",
    "acceptedAnswers": [
      "16/5",
      "3.2"
    ]
  },
  {
    "id": "g3-analytic-ellipse-written-01",
    "topic": "高三解析几何·椭圆",
    "kind": "written",
    "title": "焦点和过点条件求椭圆",
    "question": "椭圆焦点为 (±√5,0)，且经过 (0,2)。（1）求标准方程；（2）求离心率和长、短轴端点。",
    "options": [],
    "correctAnswer": "x²/9+y²/4=1；e=√5/3；端点为 (±3,0)、(0,±2)。",
    "explanation": "（1）焦点在 x 轴上，设标准方程为 x²/a²+y²/b²=1，a>b>0。\n代入 (0,2)，得 4/b²=1，故 b²=4。又 c²=5，椭圆关系 a²=b²+c²给出 a²=9。\n因此方程为 x²/9+y²/4=1。它的半焦距 √(9−4)=√5，且确过给定点。\n（2）a=3、b=2、c=√5，离心率 e=c/a=√5/3。\n令 y=0 得 x=±3，长轴端点为 (±3,0)；令 x=0 得 y=±2，短轴端点为 (0,±2)。\na>b>0 且 e<1，参数与椭圆类型均符合要求。",
    "checkpoints": [
      "根据焦点方向正确设标准式",
      "联立过点条件与 a²=b²+c²求参数并回代",
      "求离心率和四个轴端点，核对半轴与全轴区别"
    ],
    "hint": "焦点已给方向，不必再假设焦点在 y 轴的情况。"
  },
  {
    "id": "g3-analytic-ellipse-written-02",
    "topic": "高三解析几何·椭圆",
    "kind": "written",
    "title": "焦点距离比求点",
    "question": "椭圆 x²/25+y²/9=1 的左右焦点为 F₁、F₂。椭圆上点 P 满足 PF₁=2PF₂，求全部这样的 P。",
    "options": [],
    "correctAnswer": "P=(25/12,±√119/4)。",
    "explanation": "（1）a=5、c=4，F₁(−4,0)、F₂(4,0)。椭圆定义给出 PF₁+PF₂=10。\n设 PF₂=d，则 PF₁=2d，3d=10，故 PF₂=10/3、PF₁=20/3。\n（2）设 P(x,y)，两距离平方之差为 (x+4)²+y²−[(x−4)²+y²]=16x。\n另一方面，PF₁²−PF₂²=(20/3)²−(10/3)²=100/3，所以 16x=100/3，x=25/12。\n代入椭圆：y²=9[1−(25/12)²/25]=9(1−25/144)=119/16，因此 y=±√119/4。\n（3）两种符号均需保留。回代得 PF₂²=(25/12−4)²+119/16=100/9，PF₁²=400/9。\n距离非负，开根后分别为 10/3、20/3，确满足所需比例，所以两点均有效。",
    "checkpoints": [
      "由距离和与距离比求两个焦半径",
      "用距离平方差求横坐标，再求纵坐标双符号",
      "回到真实距离验证比例，不遗漏对称点"
    ],
    "hint": "利用两距离平方相减消掉 y²，不必直接处理两个根式。"
  },
  {
    "id": "g3-analytic-hyperbola-choice-01",
    "topic": "高三解析几何·双曲线",
    "kind": "choice",
    "title": "双曲线的勾股关系",
    "question": "双曲线 x²/9−y²/16=1 的半焦距 c 为：",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "√7"
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
    "correctAnswer": "A",
    "explanation": "① 双曲线有 c²=a²+b²，而不是两半轴平方之差。\n② c²=9+16=25，故 c=5。\n故选 A。"
  },
  {
    "id": "g3-analytic-hyperbola-choice-02",
    "topic": "高三解析几何·双曲线",
    "kind": "choice",
    "title": "渐近线的斜率",
    "question": "双曲线 x²/4−y²/9=1 的渐近线为：",
    "options": [
      {
        "key": "A",
        "text": "y=±(2/3)x"
      },
      {
        "key": "B",
        "text": "y=±(9/4)x"
      },
      {
        "key": "C",
        "text": "y=±(3/2)x"
      },
      {
        "key": "D",
        "text": "x=±2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 去掉常数项，x²/4−y²/9=0。\n② 得 y²=(9/4)x²，所以 y=±(3/2)x。斜率是 b/a，不是 a/b。\n故选 C。"
  },
  {
    "id": "g3-analytic-hyperbola-choice-03",
    "topic": "高三解析几何·双曲线",
    "kind": "choice",
    "title": "正项所在轴",
    "question": "双曲线 y²/9−x²/4=1 的实轴沿：",
    "options": [
      {
        "key": "A",
        "text": "x 轴"
      },
      {
        "key": "B",
        "text": "y 轴"
      },
      {
        "key": "C",
        "text": "直线 y=x"
      },
      {
        "key": "D",
        "text": "无法判断"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 等于 1 的标准式中，正号项是 y²/9。\n② 因此顶点和焦点在 y 轴上，实轴沿 y 轴。\n故选 B。"
  },
  {
    "id": "g3-analytic-hyperbola-choice-04",
    "topic": "高三解析几何·双曲线",
    "kind": "choice",
    "title": "双曲线离心率",
    "question": "双曲线 x²/9−y²/16=1 的离心率为：",
    "options": [
      {
        "key": "A",
        "text": "3/5"
      },
      {
        "key": "B",
        "text": "4/3"
      },
      {
        "key": "C",
        "text": "5/4"
      },
      {
        "key": "D",
        "text": "5/3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① a=3，c=√(9+16)=5。\n② e=c/a=5/3>1，符合双曲线的类型。\n故选 D。"
  },
  {
    "id": "g3-analytic-hyperbola-fill-01",
    "topic": "高三解析几何·双曲线",
    "kind": "fill",
    "title": "半轴平方和",
    "question": "双曲线 x²/4−y²/5=1 的离心率为多少？",
    "options": [],
    "correctAnswer": "3/2",
    "explanation": "① c²=4+5=9，所以 c=3，a=2。\n② e=c/a=3/2。",
    "acceptedAnswers": [
      "3/2",
      "1.5"
    ]
  },
  {
    "id": "g3-analytic-hyperbola-fill-02",
    "topic": "高三解析几何·双曲线",
    "kind": "fill",
    "title": "实轴是全长",
    "question": "双曲线 x²/9−y²/16=1 的实轴长为多少？",
    "options": [],
    "correctAnswer": "6",
    "explanation": "① a²=9，所以 a=3。\n② 实轴长是 2a=6。",
    "acceptedAnswers": [
      "6"
    ]
  },
  {
    "id": "g3-analytic-hyperbola-fill-03",
    "topic": "高三解析几何·双曲线",
    "kind": "fill",
    "title": "由焦点与顶点求渐近线",
    "question": "双曲线焦点为 (±5,0)，顶点为 (±3,0)，填正斜率渐近线的斜率。",
    "options": [],
    "correctAnswer": "4/3",
    "explanation": "① c=5、a=3，b²=c²−a²=25−9=16，b=4。\n② 正斜率渐近线为 y=(b/a)x，所以斜率为 4/3。",
    "acceptedAnswers": [
      "4/3"
    ]
  },
  {
    "id": "g3-analytic-hyperbola-written-01",
    "topic": "高三解析几何·双曲线",
    "kind": "written",
    "title": "焦点与顶点确定双曲线",
    "question": "双曲线焦点为 (±5,0)，右顶点为 (3,0)。（1）求标准方程；（2）求离心率和渐近线。",
    "options": [],
    "correctAnswer": "x²/9−y²/16=1；e=5/3；渐近线 y=±(4/3)x。",
    "explanation": "（1）焦点在 x 轴上，设 x²/a²−y²/b²=1，a、b 均为正。\n右顶点横坐标是 a，所以 a=3；半焦距为 c=5。\n由 c²=a²+b²，得 b²=25−9=16，因此方程为 x²/9−y²/16=1。\n（2）离心率为 e=c/a=5/3。\n令二次齐次部分为零：x²/9−y²/16=0，得渐近线 y=±(4/3)x。\n顶点、焦点方向及 e>1 均已核对；不能把椭圆的平方差关系用于双曲线。",
    "checkpoints": [
      "根据焦点方向与顶点求 a、c",
      "用平方和关系求 b 并写标准式",
      "求离心率与两条渐近线"
    ],
    "hint": "双曲线的 c²是 a²与 b²的和，顶点只给出 a。"
  },
  {
    "id": "g3-analytic-hyperbola-written-02",
    "topic": "高三解析几何·双曲线",
    "kind": "written",
    "title": "平行于渐近线不等于没有交点",
    "question": "双曲线为 x²/4−y²/9=1，直线 l 为 y=(3/2)x+b。（1）b=0 时有几个交点？（2）b≠0 时求交点并说明为何不能直接使用二次判别式。",
    "options": [],
    "correctAnswer": "b=0 时无交点；b≠0 时一个交点 (−(b²+9)/(3b),(b²−9)/(2b))。",
    "explanation": "（1）将 y=(3/2)x+b 代入，得 x²/4−[(3/2)x+b]²/9=1。\n展开后 x²项相消，整理为 −3bx−b²=9。b=0 时得到 0=9，矛盾，因此无交点；此时直线本身就是渐近线。\n（2）b≠0 时是一次方程，可以除以 b，得到 x=−(b²+9)/(3b)。\n代回直线得 y=(b²−9)/(2b)，所以恰有一个有限交点。\n检验双曲线左边为 [(b²+9)²−(b²−9)²]/(36b²)=36b²/(36b²)=1，交点有效。\n这里二次项系数已经为零，不能再把方程当成二次方程套判别式。\n例如 b=3 时交点是 (−2,0)，而双曲线在该顶点的切线是竖直直线 x=−2，所以“只有一个交点”并不自动说明相切。",
    "checkpoints": [
      "代入并发现二次项相消，单独讨论 b=0",
      "b≠0 时按一次方程求唯一交点并回代",
      "说明判别式前提与单交点不一定相切"
    ],
    "hint": "先整理方程并看次数，再考虑判别式；不要把已消掉的二次项当作仍存在。"
  },
  {
    "id": "g3-analytic-parabola-choice-01",
    "topic": "高三解析几何·抛物线",
    "kind": "choice",
    "title": "抛物线的系数",
    "question": "抛物线 y²=8x 的焦点和准线为：",
    "options": [
      {
        "key": "A",
        "text": "(4,0)，x=−4"
      },
      {
        "key": "B",
        "text": "(0,2)，y=−2"
      },
      {
        "key": "C",
        "text": "(2,0)，x=−2"
      },
      {
        "key": "D",
        "text": "(1,0)，x=−1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 与 y²=2px 比较，2p=8，故 p=4。\n② 焦点为 (p/2,0)=(2,0)，准线为 x=−p/2=−2。\n故选 C。"
  },
  {
    "id": "g3-analytic-parabola-choice-02",
    "topic": "高三解析几何·抛物线",
    "kind": "choice",
    "title": "开口方向与焦点",
    "question": "抛物线 x²=−12y 的焦点为：",
    "options": [
      {
        "key": "A",
        "text": "(0,3)"
      },
      {
        "key": "B",
        "text": "(0,−3)"
      },
      {
        "key": "C",
        "text": "(−3,0)"
      },
      {
        "key": "D",
        "text": "(0,−6)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① x²项在左，开口沿 y 轴；系数为负，开口向下。\n② 设 x²=−4ay，a>0，则 4a=12，a=3，焦点为 (0,−3)。\n故选 B。"
  },
  {
    "id": "g3-analytic-parabola-choice-03",
    "topic": "高三解析几何·抛物线",
    "kind": "choice",
    "title": "焦半径等于准线距离",
    "question": "点 P(2,4) 在 y²=8x 上，则 P 到焦点的距离为：",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 焦点为 (2,0)，准线为 x=−2。\n② 焦半径等于点到准线的距离 |2−(−2)|=4；直接求 P 到 (2,0) 的距离也为 4。\n故选 D。"
  },
  {
    "id": "g3-analytic-parabola-choice-04",
    "topic": "高三解析几何·抛物线",
    "kind": "choice",
    "title": "一个交点不必相切",
    "question": "直线 y=0 与抛物线 y²=4x 的关系，正确的是：",
    "options": [
      {
        "key": "A",
        "text": "一个交点，但不是切线"
      },
      {
        "key": "B",
        "text": "相切于顶点"
      },
      {
        "key": "C",
        "text": "没有交点"
      },
      {
        "key": "D",
        "text": "有两个不同交点"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 代入 y=0 得 x=0，所以只有顶点 (0,0) 一个有限交点。\n② 顶点处切线是 x=0，而 y=0 是抛物线的对称轴。\n③ 该联立消元成一次方程，不能仅凭一个交点判断相切。\n故选 A。"
  },
  {
    "id": "g3-analytic-parabola-fill-01",
    "topic": "高三解析几何·抛物线",
    "kind": "fill",
    "title": "焦点横坐标",
    "question": "抛物线 y²=4x 的焦点横坐标为多少？",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 标准式 y²=2px 给出 p=2。\n② 焦点横坐标 p/2=1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-analytic-parabola-fill-02",
    "topic": "高三解析几何·抛物线",
    "kind": "fill",
    "title": "通径长",
    "question": "抛物线 y²=12x 中，过焦点且垂直于对称轴的弦长为多少？",
    "options": [],
    "correctAnswer": "12",
    "explanation": "① 焦点为 (3,0)，对应直线 x=3。\n② 代入 y²=36，得 y=±6，因此弦长为 12。",
    "acceptedAnswers": [
      "12"
    ]
  },
  {
    "id": "g3-analytic-parabola-fill-03",
    "topic": "高三解析几何·抛物线",
    "kind": "fill",
    "title": "纵轴方向的焦半径",
    "question": "点 P(4,2) 在 x²=8y 上，填 P 到焦点的距离。",
    "options": [],
    "correctAnswer": "4",
    "explanation": "① 焦点为 (0,2)，准线为 y=−2。\n② 焦半径等于点到准线距离 2−(−2)=4。",
    "acceptedAnswers": [
      "4"
    ]
  },
  {
    "id": "g3-analytic-parabola-written-01",
    "topic": "高三解析几何·抛物线",
    "kind": "written",
    "title": "用重根核验给定切线",
    "question": "抛物线 y²=4x 上给定点 P(4,4)。（1）核验 P 在曲线上并求其焦半径；（2）证明 x−2y+4=0 是抛物线在 P 处的切线。",
    "options": [],
    "correctAnswer": "P 在曲线上，焦半径 5；给定直线在 P 处相切。",
    "explanation": "（1）4²=4×4，所以 P 在抛物线上。焦点为 F(1,0)，故 PF=√[(4−1)²+4²]=5。\n也可用准线 x=−1：P 到准线距离 4+1=5，结果一致。\n（2）给定直线可写为 y=x/2+2，代入抛物线，得 (x/2+2)²=4x。\n展开移项为 x²/4−2x+4=0，即 (x−4)²/4=0。\n二次项系数 1/4 非零，该二次方程有重根 x=4，对应 y=4，重合交点恰为 P。\n因此直线在 P 处相切。这里同时核对了方程次数和重根，不能把任意单交点情形都叫作切线。",
    "checkpoints": [
      "代入核验过点并用焦点或准线求距离",
      "联立消元并确认二次项非零",
      "由重根及对应点确认切线与切点"
    ],
    "hint": "代入给定直线，观察能否得到非零系数乘 (x−4)²=0。"
  },
  {
    "id": "g3-analytic-parabola-written-02",
    "topic": "高三解析几何·抛物线",
    "kind": "written",
    "title": "包含竖直方向的焦点弦",
    "question": "抛物线 y²=4x 的焦点为 F(1,0)。过 F 的直线用 x=my+1 表示，与抛物线交于 A、B。（1）证明对任意实数 m 都有两个不同交点；（2）求弦长并求最小值及对应直线。",
    "options": [],
    "correctAnswer": "弦长 4(m²+1)，最小值 4，在 m=0、直线 x=1 时取得。",
    "explanation": "（1）代入得 y²−4my−4=0，二次项系数为 1，判别式 Δ=16m²+16>0，故总有两个不同实根 y₁、y₂。\n由韦达定理，y₁+y₂=4m，y₁y₂=−4，因此两纵坐标异号。\n直线 x=my+1 在 y=0 时是 F，所以 F 位于 A、B 之间；m=0 时也成立，这正是竖直弦。\n（2）准线为 x=−1；曲线上点横坐标非负，故 AF=x₁+1、BF=x₂+1。\n因 F 在弦内，弦长 AB=AF+BF=x₁+x₂+2。又 x₁+x₂=m(y₁+y₂)+2=4m²+2。\n所以 AB=4m²+4≥4，等号当且仅当 m=0。\n对应直线 x=1，交点为 (1,2)、(1,−2)，弦长确为 4。参数式覆盖竖直直线，避免用 y=k(x−1) 时漏掉最短位置。",
    "checkpoints": [
      "确认二次方程与严格正判别式",
      "由根异号证明焦点在弦内，再使用焦半径求弦长",
      "求最小值并检查等号位置和竖直直线"
    ],
    "hint": "用 x=my+1 保留竖直方向；弦长等于两个焦半径之和，需要先说明 F 在 A、B 之间。"
  },
  {
    "id": "g3-analytic-chords-midpoints-choice-01",
    "topic": "高三解析几何·弦与中点",
    "kind": "choice",
    "title": "水平截线的弦长",
    "question": "椭圆 x²/9+y²/4=1 被 y=1 截得的弦长为：",
    "options": [
      {
        "key": "A",
        "text": "3√3/2"
      },
      {
        "key": "B",
        "text": "3√3"
      },
      {
        "key": "C",
        "text": "√3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 代入得 x²/9=3/4，所以横坐标为 ±3√3/2。\n② 两点纵坐标相等，横坐标差为 3√3。\n故选 B。"
  },
  {
    "id": "g3-analytic-chords-midpoints-choice-02",
    "topic": "高三解析几何·弦与中点",
    "kind": "choice",
    "title": "顶点处的竖直切线",
    "question": "椭圆 x²/9+y²/4=1 在 (3,0) 处的切线为：",
    "options": [
      {
        "key": "A",
        "text": "x=3"
      },
      {
        "key": "B",
        "text": "y=0"
      },
      {
        "key": "C",
        "text": "y=3"
      },
      {
        "key": "D",
        "text": "x=−3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 代入 x=3，椭圆方程给出 y=0，且是关于 y 的非退化二次方程的重根。\n② 这是右顶点的竖直切线，不能只用斜率式覆盖。\n故选 A。"
  },
  {
    "id": "g3-analytic-chords-midpoints-choice-03",
    "topic": "高三解析几何·弦与中点",
    "kind": "choice",
    "title": "中点弦斜率",
    "question": "椭圆 x²/9+y²/4=1 的一条非退化弦中点为 M(1,1/2)，弦所在直线斜率为：",
    "options": [
      {
        "key": "A",
        "text": "−9/8"
      },
      {
        "key": "B",
        "text": "8/9"
      },
      {
        "key": "C",
        "text": "4/9"
      },
      {
        "key": "D",
        "text": "−8/9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 两端点方程相减，得 (x₁−x₂)(x₁+x₂)/9+(y₁−y₂)(y₁+y₂)/4=0。\n② 由中点条件，x₁+x₂=2、y₁+y₂=1，故 (2/9)(x₁−x₂)+(1/4)(y₁−y₂)=0。\n③ 若横坐标差为零则纵坐标差也为零，与非退化弦矛盾；可相除，得到斜率 −8/9。\n故选 D。"
  },
  {
    "id": "g3-analytic-chords-midpoints-choice-04",
    "topic": "高三解析几何·弦与中点",
    "kind": "choice",
    "title": "消元后先看次数",
    "question": "将 y=(3/2)x+b 代入双曲线 x²/4−y²/9=1 后，应当：",
    "options": [
      {
        "key": "A",
        "text": "直接把判别式设为零"
      },
      {
        "key": "B",
        "text": "认定永远无交点"
      },
      {
        "key": "C",
        "text": "先按一次或常数方程分类"
      },
      {
        "key": "D",
        "text": "认定永远是切线"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 二次项系数为 1/4−(3/2)²/9=0。\n② 因此应根据 b 判断剩余的是一次方程还是矛盾的常数方程，不能套二次判别式。\n故选 C。"
  },
  {
    "id": "g3-analytic-chords-midpoints-fill-01",
    "topic": "高三解析几何·弦与中点",
    "kind": "fill",
    "title": "竖直截线",
    "question": "椭圆 x²/9+y²/4=1 被 x=1 截得的弦长是多少？",
    "options": [],
    "correctAnswer": "8√2/3",
    "explanation": "① 代入得 y²=4(1−1/9)=32/9，y=±4√2/3。\n② 两点横坐标相等，纵坐标差为 8√2/3。",
    "acceptedAnswers": [
      "8√2/3",
      "8sqrt(2)/3",
      "8*sqrt(2)/3"
    ]
  },
  {
    "id": "g3-analytic-chords-midpoints-fill-02",
    "topic": "高三解析几何·弦与中点",
    "kind": "fill",
    "title": "韦达定理求积",
    "question": "直线 y=x+1 与椭圆 x²/9+y²/4=1 交于两点，填两交点横坐标的乘积。",
    "options": [],
    "correctAnswer": "−27/13",
    "explanation": "① 代入并乘 36，得 4x²+9(x+1)²=36，即 13x²+18x−27=0。\n② 判别式为 18²+4×13×27>0，有两个不同实根。乘积为常数项除以二次项系数，即 −27/13。",
    "acceptedAnswers": [
      "−27/13",
      "-27/13"
    ]
  },
  {
    "id": "g3-analytic-chords-midpoints-fill-03",
    "topic": "高三解析几何·弦与中点",
    "kind": "fill",
    "title": "斜线上的距离因子",
    "question": "直线 y=2x+1 上两点的横坐标为 1、3，填两点距离。",
    "options": [],
    "correctAnswer": "2√5",
    "explanation": "① 两点为 (1,3)、(3,7)，横坐标差 2、纵坐标差 4。\n② 距离为 √(2²+4²)=√20=2√5，也等于横坐标差绝对值乘 √(1+2²)。",
    "acceptedAnswers": [
      "2√5",
      "2sqrt(5)",
      "2*sqrt(5)"
    ]
  },
  {
    "id": "g3-analytic-chords-midpoints-written-01",
    "topic": "高三解析几何·弦与中点",
    "kind": "written",
    "title": "弦长与三角形面积",
    "question": "椭圆 x²/9+y²/4=1 与直线 y=1 交于 A、B，O 为原点。（1）求 A、B；（2）求弦长；（3）求三角形 OAB 面积。",
    "options": [],
    "correctAnswer": "A、B 为 (±3√3/2,1)；弦长 3√3；面积 3√3/2。",
    "explanation": "（1）代入 y=1，得 x²/9+1/4=1，即 x²=27/4。\n因此两点为 (−3√3/2,1)、(3√3/2,1)，互换名称不影响结论。\n（2）两点纵坐标相同，AB=3√3/2−(−3√3/2)=3√3。\n（3）O 到直线 y=1 的垂直距离为 1，所以面积为 (1/2)×3√3×1=3√3/2。\ny=1 严格在椭圆上下顶点之间，两个交点不同且 O 不在线上，所以所求三角形非退化。",
    "checkpoints": [
      "正确求出两个交点并保留双符号",
      "用同纵坐标求整条弦长",
      "选弦为底、点线距离为高并核对非退化"
    ],
    "hint": "面积使用 O 到弦所在直线的距离，不是 OA 或 OB 的长度。"
  },
  {
    "id": "g3-analytic-chords-midpoints-written-02",
    "topic": "高三解析几何·弦与中点",
    "kind": "written",
    "title": "中点条件的必要性与充分性",
    "question": "椭圆 x²/9+y²/4=1 的非退化弦中点为 M(1,1/2)。求弦所在直线，并证明所得直线确实截得以 M 为中点的两个不同交点。",
    "options": [],
    "correctAnswer": "直线为 16x+18y=25。",
    "explanation": "（1）设端点 (x₁,y₁)、(x₂,y₂)，中点条件给出 x₁+x₂=2、y₁+y₂=1。\n两端点方程相减，得 (2/9)(x₁−x₂)+(1/4)(y₁−y₂)=0。\n若 x₁=x₂，则 y₁=y₂，弦会退化，因此 x₁−x₂非零，斜率 k=−8/9。\n过 M 的直线为 y−1/2=−(8/9)(x−1)，整理得 16x+18y=25。这只是必要候选，还需验证。\n（2）在该直线上令 x=1+s、y=1/2−8s/9。代入椭圆，线性项抵消，得 25/144+25s²/81=1。\n所以 s²=1071/400>0，存在两个不同实数 s=±3√119/20。\n两个交点对应相反的参数，平均坐标恰为 (1,1/2)，因而确以 M 为中点。所得直线既满足必要条件也满足充分性。",
    "checkpoints": [
      "方程作差并检查可除的横坐标差",
      "由中点条件求出候选直线",
      "重新联立得到一对相反非零参数，证实两个交点及中点"
    ],
    "hint": "点差法给出候选斜率后，还要联立检查交点存在且不重合。"
  },
  {
    "id": "g3-analytic-loci-equations-choice-01",
    "topic": "高三解析几何·轨迹方程",
    "kind": "choice",
    "title": "距离和轨迹",
    "question": "A(−2,0)、B(2,0)，动点 P 满足 PA+PB=6，其轨迹方程为：",
    "options": [
      {
        "key": "A",
        "text": "x²/9−y²/5=1"
      },
      {
        "key": "B",
        "text": "x²/4+y²/9=1"
      },
      {
        "key": "C",
        "text": "x²+y²=9"
      },
      {
        "key": "D",
        "text": "x²/9+y²/5=1"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 距离和 2a=6，焦距 2c=4，满足 a>c>0，因此为非退化椭圆。\n② a²=9、c²=4、b²=5，焦点在 x 轴，得到所列椭圆方程。\n故选 D。"
  },
  {
    "id": "g3-analytic-loci-equations-choice-02",
    "topic": "高三解析几何·轨迹方程",
    "kind": "choice",
    "title": "距离差轨迹",
    "question": "F₁(−3,0)、F₂(3,0)，动点满足 |PF₁−PF₂|=4，其轨迹为：",
    "options": [
      {
        "key": "A",
        "text": "x²/9−y²/4=1"
      },
      {
        "key": "B",
        "text": "x²/4+y²/5=1"
      },
      {
        "key": "C",
        "text": "x²/4−y²/5=1"
      },
      {
        "key": "D",
        "text": "仅右支双曲线"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 距离差绝对值 2a=4，焦距 2c=6，有 0<a<c，所以是双曲线两支。\n② a²=4、c²=9，b²=c²−a²=5，得到 x²/4−y²/5=1。\n故选 C。"
  },
  {
    "id": "g3-analytic-loci-equations-choice-03",
    "topic": "高三解析几何·轨迹方程",
    "kind": "choice",
    "title": "点线等距轨迹",
    "question": "动点到 F(1,0) 与直线 x=−1 的距离相等，其轨迹为：",
    "options": [
      {
        "key": "A",
        "text": "y²=4x"
      },
      {
        "key": "B",
        "text": "x²=4y"
      },
      {
        "key": "C",
        "text": "y²=−4x"
      },
      {
        "key": "D",
        "text": "x²+y²=1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 点与准线的垂直距离为 2，顶点为中间的原点，开口向右。\n② 等距方程平方后为 (x−1)²+y²=(x+1)²，整理得 y²=4x。两距离非负，反向也成立。\n故选 A。"
  },
  {
    "id": "g3-analytic-loci-equations-choice-04",
    "topic": "高三解析几何·轨迹方程",
    "kind": "choice",
    "title": "方程形式与真实轨迹",
    "question": "方程 x²+y²=0 在实平面内表示：",
    "options": [
      {
        "key": "A",
        "text": "半径为 1 的圆"
      },
      {
        "key": "B",
        "text": "一个点 (0,0)"
      },
      {
        "key": "C",
        "text": "一条直线"
      },
      {
        "key": "D",
        "text": "空集"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 两个平方均非负，其和为零只能 x=y=0。\n② 因此轨迹只有原点，不能把半径为零的退化情形称为通常的非退化圆。\n故选 B。"
  },
  {
    "id": "g3-analytic-loci-equations-fill-01",
    "topic": "高三解析几何·轨迹方程",
    "kind": "fill",
    "title": "等距直线的横坐标",
    "question": "P 到 A(−1,0)、B(3,0) 的距离相等，填 P 所在垂直平分线的横坐标。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 两距离平方相等：(x+1)²+y²=(x−3)²+y²。\n② 展开得 8x=8，故 x=1，y 任意。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-analytic-loci-equations-fill-02",
    "topic": "高三解析几何·轨迹方程",
    "kind": "fill",
    "title": "中点轨迹的半径",
    "question": "P 在圆 x²+y²=4 上，M 为 OP 中点，O 为原点。填 M 轨迹圆的半径。",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 设 M(u,v)，则 P(2u,2v)。\n② 代入得 4u²+4v²=4，所以 u²+v²=1，轨迹圆半径为 1。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-analytic-loci-equations-fill-03",
    "topic": "高三解析几何·轨迹方程",
    "kind": "fill",
    "title": "参数轨迹的长轴",
    "question": "P=(2cos t,3sin t)，t 取所有实数，填其轨迹椭圆的长轴长。",
    "options": [],
    "correctAnswer": "6",
    "explanation": "① 消参数得 x²/4+y²/9=cos²t+sin²t=1，且 t 遍历时能覆盖整条椭圆。\n② 半长轴为 3，长轴长为 6。",
    "acceptedAnswers": [
      "6"
    ]
  },
  {
    "id": "g3-analytic-loci-equations-written-01",
    "topic": "高三解析几何·轨迹方程",
    "kind": "written",
    "title": "轨迹消参后保留排除点",
    "question": "P 在圆 x²+y²=4 上运动，但 P≠A(2,0)。M 是 AP 的中点。（1）求 M 的轨迹；（2）证明轨迹上所有允许点都能取得。",
    "options": [],
    "correctAnswer": "(x−1)²+y²=1，但排除点 (2,0)。",
    "explanation": "（1）设 M(u,v)、P(x,y)。中点关系给出 x=2u−2、y=2v。\n代入 P 的圆方程，(2u−2)²+(2v)²=4，化简为 (u−1)²+v²=1。\n当 P=A(2,0) 时，中点也为 A(2,0)。原条件排除 P=A，因此 M 的轨迹必须从该圆上排除 (2,0)。\n（2）反过来，任取满足 (u−1)²+v²=1 且 (u,v)≠(2,0) 的点，令 P=(2u−2,2v)。\n由方程可知 P 的坐标平方和为 4，故 P 在原圆上；若 P=(2,0)，则 u=2、v=0，与允许条件矛盾，所以 P≠A。\nA 与该 P 的中点正是 (u,v)。因此每个允许点都能取得，轨迹完整而无多余点。",
    "checkpoints": [
      "由中点关系消参得到候选圆",
      "把 P≠A 转成轨迹上的排除点",
      "反向构造原动点并证明满足所有条件"
    ],
    "hint": "代数方程给出圆后不能结束，要把原先禁止的位置同步迁移到中点。"
  },
  {
    "id": "g3-analytic-loci-equations-written-02",
    "topic": "高三解析几何·轨迹方程",
    "kind": "written",
    "title": "平方等价与半支轨迹",
    "question": "P 到 F(1,0) 和直线 x=−1 距离相等，且 P 的纵坐标非负。（1）求轨迹；（2）给出覆盖整个轨迹的一个参数表示及参数范围。",
    "options": [],
    "correctAnswer": "y²=4x，y≥0；可设 P=(t²,2t)，t≥0。",
    "explanation": "（1）设 P(x,y)，等距条件为 √[(x−1)²+y²]=|x+1|，同时 y≥0。\n两边非负，平方是等价变形，得 (x−1)²+y²=(x+1)²，整理为 y²=4x。\n此方程自动给出 x≥0；但纵坐标非负不是平方自动带来的，仍须保留 y≥0。\n反过来，满足 y²=4x、y≥0 的点使两距离平方相等，因距离非负，两距离相等。因此轨迹是该抛物线的上半支，包含顶点。\n（2）令 t=y/2≥0，则 x=y²/4=t²、y=2t，所以可表示为 P=(t²,2t)，t≥0。\n任意 t≥0 都产生满足轨迹条件的点；任意轨迹点也能由 t=y/2 取得，所以参数表示既无多余点也无遗漏。",
    "checkpoints": [
      "写出带绝对值的点线等距条件",
      "解释平方等价，保留半支限制并反向核验",
      "给出参数形式与范围，证明覆盖性"
    ],
    "hint": "点到准线的距离是 |x+1|；消去根式后还要保留题目单独给的 y≥0。"
  },
  {
    "id": "g3-analytic-comprehensive-choice-01",
    "topic": "高三解析几何·综合与最值",
    "kind": "choice",
    "title": "水平弦的面积上界",
    "question": "椭圆 x²/9+y²/4=1 的水平弦 AB 与原点 O 构成非退化三角形，面积最大值为：",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "3/2"
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
    "correctAnswer": "A",
    "explanation": "① 设弦为 y=h，0<|h|<2。半弦长为 3√(1−h²/4)，面积 S=3|h|√(1−h²/4)。\n② S²=9−(9/4)(h²−2)²≤9，且 h=±√2 可取，因此 S 最大为 3。\n故选 A。"
  },
  {
    "id": "g3-analytic-comprehensive-choice-02",
    "topic": "高三解析几何·综合与最值",
    "kind": "choice",
    "title": "中心弦的最短长度",
    "question": "椭圆 x²/9+y²/4=1 的所有过原点的弦中，最短弦长为：",
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
        "text": "6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 设方向角 θ，中心弦长为 2/√(cos²θ/9+sin²θ/4)。\n② 分母最大为 1/2，在竖直方向达到，故最短弦长为 4，即短轴长。\n故选 C。"
  },
  {
    "id": "g3-analytic-comprehensive-choice-03",
    "topic": "高三解析几何·综合与最值",
    "kind": "choice",
    "title": "斜率法的覆盖范围",
    "question": "求过定点的所有直线所截弦的最值时，只设 y=kx+b 而不分类，可能漏掉：",
    "options": [
      {
        "key": "A",
        "text": "水平直线"
      },
      {
        "key": "B",
        "text": "正斜率直线"
      },
      {
        "key": "C",
        "text": "负斜率直线"
      },
      {
        "key": "D",
        "text": "竖直直线"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 有限斜率式能够表示水平直线和任意正、负有限斜率直线。\n② 竖直直线没有斜率，必须单独检查，或改用能覆盖它的参数表示。\n故选 D。"
  },
  {
    "id": "g3-analytic-comprehensive-choice-04",
    "topic": "高三解析几何·综合与最值",
    "kind": "choice",
    "title": "焦点弦最短取点",
    "question": "抛物线 y²=4x 的焦点弦中，最短弦所在直线为：",
    "options": [
      {
        "key": "A",
        "text": "y=0"
      },
      {
        "key": "B",
        "text": "x=1"
      },
      {
        "key": "C",
        "text": "y=x−1"
      },
      {
        "key": "D",
        "text": "x=0"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 用过焦点直线 x=my+1，焦点弦长为 4(m²+1)。\n② 最小值在 m=0 取得，对应 x=1。对称轴 y=0 仅有一个有限交点，不是由两个不同点构成的焦点弦。\n故选 B。"
  },
  {
    "id": "g3-analytic-comprehensive-fill-01",
    "topic": "高三解析几何·综合与最值",
    "kind": "fill",
    "title": "面积最大时的正高度",
    "question": "椭圆 x²/9+y²/4=1 的水平弦 y=h（0<h<2）使其与原点构成的三角形面积最大，填 h。",
    "options": [],
    "correctAnswer": "√2",
    "explanation": "① 面积平方 S²=9h²(1−h²/4)=9−(9/4)(h²−2)²。\n② 最大时 h²=2，因 h>0，取 h=√2，且在 (0,2) 内。",
    "acceptedAnswers": [
      "√2",
      "sqrt(2)"
    ]
  },
  {
    "id": "g3-analytic-comprehensive-fill-02",
    "topic": "高三解析几何·综合与最值",
    "kind": "fill",
    "title": "中心斜弦长",
    "question": "椭圆 x²/9+y²/4=1 被 y=2x 截得的弦长是多少？",
    "options": [],
    "correctAnswer": "3√2",
    "explanation": "① 代入得 x²/9+x²=1，所以 x²=9/10。\n② 两端点关于原点对称，横坐标差为 6/√10；弦长还需乘 √(1+2²)=√5。\n③ 因此弦长为 (6/√10)√5=3√2。",
    "acceptedAnswers": [
      "3√2",
      "3sqrt(2)",
      "3*sqrt(2)",
      "6/sqrt(2)"
    ]
  },
  {
    "id": "g3-analytic-comprehensive-fill-03",
    "topic": "高三解析几何·综合与最值",
    "kind": "fill",
    "title": "相切距离的参数检验",
    "question": "直线 y=kx+√(1+k²) 到原点的距离恒为多少？",
    "options": [],
    "correctAnswer": "1",
    "explanation": "① 改写为 kx−y+√(1+k²)=0。\n② 距离为 √(1+k²)/√(k²+1)=1，分子分母均为正；因此每条这样的直线都与单位圆相切。",
    "acceptedAnswers": [
      "1"
    ]
  },
  {
    "id": "g3-analytic-comprehensive-written-01",
    "topic": "高三解析几何·综合与最值",
    "kind": "written",
    "title": "水平弦面积的最大值与边界",
    "question": "椭圆 x²/9+y²/4=1 与 y=h 交于两个不同点 A、B，且三角形 OAB 非退化，O 为原点。（1）给出 h 的范围并求面积表达式；（2）求最大面积及全部取点。",
    "options": [],
    "correctAnswer": "h∈(−2,0)∪(0,2)；S=3|h|√(1−h²/4)；最大面积 3，在 h=±√2 取得。",
    "explanation": "（1）联立得 x²=9(1−h²/4)。要有两个不同交点，须 |h|<2；h=±2 时只剩一个切点，不能当成弦。\nO 不得在弦所在直线上，所以 h≠0。合并得 h∈(−2,0)∪(0,2)。\n两端点横坐标为 ±3√(1−h²/4)，弦长为 6√(1−h²/4)。O 到直线的距离为 |h|。\n面积 S=(1/2)×弦长×高=3|h|√(1−h²/4)，在允许范围内为正。\n（2）平方得到 S²=9h²−(9/4)h⁴=9−(9/4)(h²−2)²≤9。\n等号要求 h²=2，即 h=±√2。两值都在允许范围内，因此最大面积为 √9=3，两处均可取。\nh=0 虽有一条直径，但三角形退化；h=±2 虽在椭圆顶点，却没有两个不同端点。边界不能混入取点。",
    "checkpoints": [
      "同时检查两交点与三角形非退化的范围",
      "由弦长和点线距离建立含绝对值的面积式",
      "配方求最值并核对全部取等位置"
    ],
    "hint": "先写 h 的真实允许范围，平方求最值后仍要开根，并保留上下对称的两个取点。"
  },
  {
    "id": "g3-analytic-comprehensive-written-02",
    "topic": "高三解析几何·综合与最值",
    "kind": "written",
    "title": "用方向角覆盖竖直弦",
    "question": "求椭圆 x²/9+y²/4=1 的所有过原点弦的最短、最长长度，以及对应直线。",
    "options": [],
    "correctAnswer": "最短 4，对应 x=0；最长 6，对应 y=0。",
    "explanation": "（1）用方向角 θ∈[0,π) 表示过原点的直线，其点可写为 (s cosθ,s sinθ)，s 为任意实数。这覆盖竖直方向 θ=π/2。\n代入椭圆得 s²[cos²θ/9+sin²θ/4]=1。记方括号为 D，显然 D>0。\n交点对应 s=±1/√D，所以两端点距离为 L=2/√D。因为 (cosθ,sinθ) 是单位方向，这里 s 的差就是真实长度。\n（2）D=1/9+(5/36)sin²θ，在 [1/9,1/4] 内。因此 L 在 [4,6] 内。\n当 sin²θ=1 时，θ=π/2，直线为 x=0，最短弦长 4。\n当 sin²θ=0 时，在给定范围内 θ=0，直线为 y=0，最长弦长 6。\n两条坐标轴确与椭圆分别交于 (0,±2)、(±3,0)，取等条件均可实现；没有遗漏斜率不存在的直线。",
    "checkpoints": [
      "用方向角与实参数覆盖所有中心直线",
      "联立求参数差并解释为何等于长度",
      "求 D 的范围，给出长度上下界及对应直线"
    ],
    "hint": "直接用单位方向 (cosθ,sinθ) 参数化，避免斜率式漏掉最短的竖直弦。"
  }
];
