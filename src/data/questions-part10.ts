import type { Question } from "./questions-part1";

// 高三第六模块；本站原创。发布后保留 ID/topic，兼容练习记录、错题与报告。
export const practiceTopics = [
  "高三立体几何与空间向量·几何体度量",
  "高三立体几何与空间向量·平行与垂直",
  "高三立体几何与空间向量·坐标与法向量",
  "高三立体几何与空间向量·空间角",
  "高三立体几何与空间向量·距离与体积",
  "高三立体几何与空间向量·动点综合"
] as const;
export const practiceChapters = [{ title: "立体几何与空间向量", topics: [...practiceTopics] }] as const;

export const questions: Question[] = [
  {
    "id": "g3-spatial-solids-measurement-choice-01",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "choice",
    "title": "圆柱体积",
    "question": "圆柱底面半径为 2，高为 3，其体积为：",
    "options": [
      {
        "key": "A",
        "text": "6π"
      },
      {
        "key": "B",
        "text": "12π"
      },
      {
        "key": "C",
        "text": "18π"
      },
      {
        "key": "D",
        "text": "24π"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 圆柱体积等于底面积乘高，V=πr²h。\n② 代入 r=2、h=3，得 V=π×4×3=12π。\n故选 B。"
  },
  {
    "id": "g3-spatial-solids-measurement-choice-02",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "choice",
    "title": "圆锥的高与母线",
    "question": "圆锥底面半径为 3，高为 4，其侧面积为：",
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
        "text": "9π"
      },
      {
        "key": "D",
        "text": "15π"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 轴截面的一半是直角三角形，母线长 l=√(3²+4²)=5。\n② 侧面积为 πrl=π×3×5=15π。侧面积不包含底面，不能再加 9π。\n故选 D。"
  },
  {
    "id": "g3-spatial-solids-measurement-choice-03",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "choice",
    "title": "球的截面",
    "question": "半径为 3 的球被一个距球心为 1 的平面所截，截面面积为：",
    "options": [
      {
        "key": "A",
        "text": "8π"
      },
      {
        "key": "B",
        "text": "9π"
      },
      {
        "key": "C",
        "text": "π"
      },
      {
        "key": "D",
        "text": "4π"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 球心到截面的垂足为截面圆心。设截面半径 ρ，直角三角形给出 ρ²+1²=3²。\n② ρ²=8，故截面面积为 8π。\n故选 A。"
  },
  {
    "id": "g3-spatial-solids-measurement-choice-04",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "choice",
    "title": "正方体的体对角线",
    "question": "棱长为 2 的正方体，其体对角线长为：",
    "options": [
      {
        "key": "A",
        "text": "2√2"
      },
      {
        "key": "B",
        "text": "4"
      },
      {
        "key": "C",
        "text": "2√3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 先由底面勾股得面对角线长 2√2。\n② 再与高 2 作勾股，体对角线平方为 8+4=12，长度为 2√3。\n故选 C。"
  },
  {
    "id": "g3-spatial-solids-measurement-fill-01",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "fill",
    "title": "三维勾股",
    "question": "长方体长、宽、高分别为 2、3、6，填体对角线长。",
    "options": [],
    "correctAnswer": "7",
    "explanation": "① 体对角线平方为 2²+3²+6²=4+9+36=49。\n② 长度为正，故体对角线长为 7。",
    "acceptedAnswers": [
      "7"
    ]
  },
  {
    "id": "g3-spatial-solids-measurement-fill-02",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "fill",
    "title": "球体积",
    "question": "球半径为 2，填球的体积（精确值）。",
    "options": [],
    "correctAnswer": "32π/3",
    "explanation": "① 球体积 V=4πR³/3。\n② 代入 R=2，得 V=4π×8/3=32π/3。",
    "acceptedAnswers": [
      "32π/3",
      "32pi/3",
      "32*pi/3",
      "(32/3)π",
      "(32/3)pi"
    ]
  },
  {
    "id": "g3-spatial-solids-measurement-fill-03",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "fill",
    "title": "锥体的三分之一",
    "question": "圆锥底面半径 2、高 3，填体积（精确值）。",
    "options": [],
    "correctAnswer": "4π",
    "explanation": "① 底面积为 π×2²=4π。\n② 圆锥体积是等底等高圆柱体积的三分之一，V=4π×3/3=4π。",
    "acceptedAnswers": [
      "4π",
      "4pi",
      "4*pi"
    ]
  },
  {
    "id": "g3-spatial-solids-measurement-written-01",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "written",
    "title": "正四棱锥的侧面积与体积",
    "question": "正四棱锥 S-ABCD 的底面为边长 4 的正方形，顶点 S 在底面中心 O 的正上方，SO=3。（1）求侧面斜高；（2）求侧面积；（3）求体积。",
    "options": [],
    "correctAnswer": "斜高 √13；侧面积 8√13；体积 16。",
    "explanation": "（1）取底边 AB 的中点 M。正方形中心到边的距离 OM=4/2=2；SO 垂直底面，所以 SO⊥OM。\n在直角三角形 SOM 中，SM²=SO²+OM²=9+4=13，得侧面斜高 SM=√13。\n因为 SA=SB，侧面三角形 SAB 中的中线 SM 也是高，故可以用 SM 计算侧面面积。\n（2）一个侧面面积为 (1/2)×4×√13=2√13；四个侧面全等，所以侧面积为 8√13。\n（3）底面积为 4²=16，锥体高为 SO=3，故 V=(1/3)×16×3=16。\n注意体积所用的高是 SO，不是侧面斜高 SM；若求总表面积，才需要再加底面积 16。",
    "checkpoints": [
      "由 SO⊥底面构造直角三角形，求斜高",
      "说明 SM 为侧面高并求四个侧面面积",
      "用垂直高度 SO 求体积，区分斜高"
    ],
    "hint": "取底边中点 M，先区分 SO、SM 与侧棱这三个长度。"
  },
  {
    "id": "g3-spatial-solids-measurement-written-02",
    "topic": "高三立体几何与空间向量·几何体度量",
    "kind": "written",
    "title": "长方体的外接球",
    "question": "长方体三条相邻棱长为 2、3、6。（1）说明其外接球球心的位置并求半径；（2）求该球体积。",
    "options": [],
    "correctAnswer": "球心为体对角线中点；半径 7/2；球体积 343π/6。",
    "explanation": "（1）取长方体中心为原点，三组相对面分别平行坐标面，则八个顶点可写成 (±1,±3/2,±3)。\n每个顶点到中心的距离平方均为 1+9/4+9=49/4。因此以中心为球心、7/2 为半径的球通过所有八个顶点。\n该中心也是任一体对角线中点；体对角线长 √(2²+3²+6²)=7，半径为其一半 7/2。\n（2）球体积 V=(4/3)π(7/2)³=(4/3)π×343/8=343π/6。\n不能把面对角线的一半当成这个外接球的半径；还必须包含第三个垂直方向的长度。",
    "checkpoints": [
      "确定中心并说明八个顶点等距",
      "三维勾股求出半径 7/2",
      "代入球体积公式并化简"
    ],
    "hint": "以长方体中心建系，八个顶点坐标只有符号不同。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-choice-01",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "choice",
    "title": "线面平行的完整前提",
    "question": "已知直线 l 不在平面 α 内，m 在 α 内。能保证 l∥α 的条件是：",
    "options": [
      {
        "key": "A",
        "text": "l⊥m"
      },
      {
        "key": "B",
        "text": "l 与 m 相交"
      },
      {
        "key": "C",
        "text": "l 与 m 异面"
      },
      {
        "key": "D",
        "text": "l∥m"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 线面平行判定需要：一条直线不在该平面内，且平行于平面内一条直线。\n② 题干已给出位置前提，因此补上 l∥m 即可。若漏掉 l 不在 α 内，可能只是 l 也在 α 内。\n故选 D。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-choice-02",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "choice",
    "title": "线面垂直的两条直线",
    "question": "直线 l 过平面 α 内的点 O。要用判定定理证明 l⊥α，下列哪组条件充分？",
    "options": [
      {
        "key": "A",
        "text": "l 垂直 α 内过 O 的两条相交直线"
      },
      {
        "key": "B",
        "text": "l 垂直 α 内任意一条直线"
      },
      {
        "key": "C",
        "text": "l 垂直 α 内两条平行直线"
      },
      {
        "key": "D",
        "text": "l 与 α 内两条直线都不平行"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 平面内过 O 的两条相交直线提供两个不共线方向。\n② 若 l 同时与这两个方向垂直，就垂直于该平面。两条平行直线只提供同一个方向，条件不足。\n故选 A。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-choice-03",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "choice",
    "title": "同一平面的两条法线",
    "question": "两条不同直线 l、m 都垂直于平面 α，则必有：",
    "options": [
      {
        "key": "A",
        "text": "l⊥m"
      },
      {
        "key": "B",
        "text": "l、m 必异面"
      },
      {
        "key": "C",
        "text": "l∥m"
      },
      {
        "key": "D",
        "text": "l、m 相交但不垂直"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 垂直于同一平面的直线具有相同的法线方向。\n② 两条直线又不重合，因此它们互相平行。\n故选 C。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-choice-04",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "choice",
    "title": "面面平行需要两个方向",
    "question": "平面 α 内两条相交直线 l、m 均平行于平面 β，则：",
    "options": [
      {
        "key": "A",
        "text": "α⊥β"
      },
      {
        "key": "B",
        "text": "α∥β"
      },
      {
        "key": "C",
        "text": "α 与 β 必相交"
      },
      {
        "key": "D",
        "text": "无法判断"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① l、m 是 α 内两条相交直线，已经给出两个独立方向。\n② 两条直线都平行于 β，符合面面平行判定定理，因此 α∥β。只有一条直线平行于 β 时不够。\n故选 B。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-fill-01",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "fill",
    "title": "中位线长度",
    "question": "三角形 ABC 中 M、N 分别为 AB、AC 的中点，BC=6，填 MN 的长度。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① 三角形中位线定理给出 MN∥BC，且长度为 BC 的一半。\n② 因 BC=6，所以 MN=3。这里 MN、BC 表示线段长度。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-spatial-parallel-perpendicular-fill-02",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "fill",
    "title": "垂直关系连接勾股",
    "question": "四棱锥 S-ABCD 的底面为边长 4 的正方形，SA⊥底面且 SA=3。填侧棱 SC 的长度。",
    "options": [],
    "correctAnswer": "√41",
    "explanation": "① 底面对角线 AC=4√2；SA 垂直底面，故 SA⊥AC。\n② 在直角三角形 SAC 中，SC²=3²+(4√2)²=9+32=41。\n③ 侧棱长 SC=√41。",
    "acceptedAnswers": [
      "√41",
      "sqrt(41)"
    ]
  },
  {
    "id": "g3-spatial-parallel-perpendicular-fill-03",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "fill",
    "title": "垂直于侧面的棱",
    "question": "正方体 ABCD-A₁B₁C₁D₁ 中，直线 AB 与平面 BCC₁B₁ 所成角为多少度？只填度数。",
    "options": [],
    "correctAnswer": "90",
    "explanation": "① AB⊥BC，且 AB⊥BB₁；BC 与 BB₁在侧面内相交于 B。\n② 由线面垂直判定，AB⊥平面 BCC₁B₁，因此线面角为 90°。",
    "acceptedAnswers": [
      "90",
      "90°"
    ]
  },
  {
    "id": "g3-spatial-parallel-perpendicular-written-01",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "written",
    "title": "从中位线到线面平行",
    "question": "四棱锥 S-ABCD 的底面为正方形，SA⊥底面，E、F 分别为 SC、SD 的中点。（1）证明 EF∥平面 ABCD；（2）证明 BC⊥平面 SAB。",
    "options": [],
    "correctAnswer": "EF∥平面 ABCD；BC⊥平面 SAB。",
    "explanation": "（1）在三角形 SCD 中，E、F 是两边中点，所以 EF∥CD。\nE 是 SC 的内部点，且 S 不在底面、C 在底面，所以 E 不在底面；否则直线 SC 的两个不同点 E、C 都在底面内，便推出 S 也在底面内，矛盾。\n因此 EF 不在平面 ABCD 内；又 CD 在该平面内，EF∥CD，由线面平行判定得 EF∥平面 ABCD。\n（2）正方形中 BC⊥AB。由 SA⊥底面，得 BC 的方向与 SA 的方向垂直。\n为使两条判定用直线都过 B，在平面 SAB 内过 B 作直线 m∥SA。则 BC⊥m，且 m 与 AB 在 B 相交。\nAB、m 均在平面 SAB 内，BC 同时垂直这两条相交直线，故 BC⊥平面 SAB。",
    "checkpoints": [
      "用中位线证明 EF∥CD",
      "证明 EF 不在底面并应用线面平行判定",
      "在 B 点构造两条相交垂线方向，完成线面垂直证明"
    ],
    "hint": "线面平行要补位置前提；线面垂直要找平面内两个相交方向。"
  },
  {
    "id": "g3-spatial-parallel-perpendicular-written-02",
    "topic": "高三立体几何与空间向量·平行与垂直",
    "kind": "written",
    "title": "垂足问题中的线面转化",
    "question": "三棱锥 S-ABC 中，SA⊥平面 ABC，AB⊥BC，H 为 A 到直线 SB 的垂足。（1）证明 BC⊥平面 SAB；（2）证明 AH⊥平面 SBC。",
    "options": [],
    "correctAnswer": "BC⊥平面 SAB；AH⊥平面 SBC。",
    "explanation": "（1）由 SA⊥平面 ABC，BC 在底面内，得 BC 的方向垂直于 SA。题设又给出 BC⊥AB。\n在平面 SAB 内过 B 作 m∥SA，则 BC⊥m；m 与 AB 相交于 B，所以 BC⊥平面 SAB。\n（2）A、H 都在平面 SAB 内，所以 AH 在平面 SAB 内。由（1）可知 AH 的方向与 BC 的方向垂直。\n又因为 H 是垂足，所以 AH⊥SB。SB 与 BC 在平面 SBC 内相交于 B。\n也可在平面 SBC 内过 H 作 k∥BC，则 AH⊥k，且 k 与 SB 在 H 相交。\nAH 同时垂直平面 SBC 内两条相交直线 SB、k，因此 AH⊥平面 SBC。\n本题 S 不在底面，A 不在直线 SB 上，故 AH 为非零线段，垂线确有定义。",
    "checkpoints": [
      "先建立 BC⊥平面 SAB，补足两条相交直线",
      "结合 AH 所在平面推出 AH 与 BC 方向垂直",
      "使用垂足条件 AH⊥SB，完成 AH⊥平面 SBC"
    ],
    "hint": "先证明 BC 垂直 AH 所在的平面，再结合垂足给出的第二个垂直关系。"
  },
  {
    "id": "g3-spatial-coordinates-normals-choice-01",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "choice",
    "title": "空间数量积",
    "question": "已知向量 u=(1,2,−1)、v=(2,−1,3)，则 u·v 为：",
    "options": [
      {
        "key": "A",
        "text": "−3"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "−1"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 对应坐标相乘再相加：u·v=1×2+2×(−1)+(−1)×3。\n② 得 2−2−3=−3，数量积为实数，不是向量。\n故选 A。"
  },
  {
    "id": "g3-spatial-coordinates-normals-choice-02",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "choice",
    "title": "终点减起点",
    "question": "点 A(1,−2,3)、B(3,1,−1)，则向量 AB 为：",
    "options": [
      {
        "key": "A",
        "text": "(−2,−3,4)"
      },
      {
        "key": "B",
        "text": "(4,−1,2)"
      },
      {
        "key": "C",
        "text": "(2,3,−4)"
      },
      {
        "key": "D",
        "text": "(2,−3,4)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 向量 AB 的坐标由终点 B 减去起点 A。\n② AB=(3−1,1−(−2),−1−3)=(2,3,−4)。\n故选 C。"
  },
  {
    "id": "g3-spatial-coordinates-normals-choice-03",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "choice",
    "title": "法向量的两个方程",
    "question": "平面内两个不共线方向为 u=(1,0,1)、v=(0,1,1)，可取法向量为：",
    "options": [
      {
        "key": "A",
        "text": "(1,1,1)"
      },
      {
        "key": "B",
        "text": "(−1,−1,1)"
      },
      {
        "key": "C",
        "text": "(1,−1,1)"
      },
      {
        "key": "D",
        "text": "(0,0,1)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 设法向量 n=(x,y,z)，需满足 n·u=x+z=0、n·v=y+z=0。\n② 取 z=1 得 x=y=−1，且所得向量非零。因此 n=(−1,−1,1) 可用。\n故选 B。"
  },
  {
    "id": "g3-spatial-coordinates-normals-choice-04",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "choice",
    "title": "零向量不能作法向量",
    "question": "下列关于平面法向量的说法正确的是：",
    "options": [
      {
        "key": "A",
        "text": "零向量也可以作法向量"
      },
      {
        "key": "B",
        "text": "只需垂直平面内一个方向"
      },
      {
        "key": "C",
        "text": "每个平面只有一个法向量"
      },
      {
        "key": "D",
        "text": "须非零且垂直平面内两个不共线方向"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 零向量没有确定方向，不能用来定义垂直方向，也会使角度公式分母为零。\n② 需要同时垂直于两个不共线平面方向。一个法向量的任意非零倍数也都是法向量。\n故选 D。"
  },
  {
    "id": "g3-spatial-coordinates-normals-fill-01",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "fill",
    "title": "空间向量的模",
    "question": "向量 u=(2,−1,2)，填 |u|。",
    "options": [],
    "correctAnswer": "3",
    "explanation": "① |u|²=2²+(−1)²+2²=9。\n② 模为非负数，因此 |u|=3。",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": "g3-spatial-coordinates-normals-fill-02",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "fill",
    "title": "平面系数与法向量",
    "question": "已知 n=(1,2,t) 是平面 x+2y−2z=5 的法向量，填 t。",
    "options": [],
    "correctAnswer": "−2",
    "explanation": "① 该平面可取法向量 (1,2,−2)，其他法向量必须与其成非零倍数。\n② 已知向量的第一坐标同为 1，倍数只能为 1，所以 t=−2。",
    "acceptedAnswers": [
      "−2",
      "-2"
    ]
  },
  {
    "id": "g3-spatial-coordinates-normals-fill-03",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "fill",
    "title": "两点间距离的平方",
    "question": "已知 P(1,0,2)、Q(3,4,1)，填 |PQ|²。",
    "options": [],
    "correctAnswer": "21",
    "explanation": "① PQ=(2,4,−1)。\n② |PQ|²=2²+4²+(−1)²=4+16+1=21；本题问平方，不再开根。",
    "acceptedAnswers": [
      "21"
    ]
  },
  {
    "id": "g3-spatial-coordinates-normals-written-01",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "written",
    "title": "由截距点建立平面方程",
    "question": "已知 A(1,0,0)、B(0,2,0)、C(0,0,2)。（1）求平面 ABC 的一个法向量；（2）求平面方程并判断 P(1,1,1) 是否在该平面内。",
    "options": [],
    "correctAnswer": "可取 n=(2,1,1)；平面为 2x+y+z=2；P 不在平面内。",
    "explanation": "（1）取平面内方向 AB=(−1,2,0)、AC=(−1,0,2)，两者不共线。\n设 n=(x,y,z)，列 n·AB=−x+2y=0、n·AC=−x+2z=0。\n取 y=z=1，得到 x=2，所以可取非零法向量 n=(2,1,1)。\n（2）平面过 A(1,0,0)，任意点 X(x,y,z) 在平面内当且仅当 AX·n=0。\n因此 2(x−1)+y+z=0，整理得 2x+y+z=2。代入 B、C 均得 2，方程通过三个给定点。\n代入 P 得 2×1+1+1=4≠2，故 P 不在平面内。",
    "checkpoints": [
      "取两个不共线平面方向并建立数量积方程",
      "选取非零解得到法向量",
      "用过点法向式写方程，再逐点检验"
    ],
    "hint": "不要把三个点坐标直接当作三个法向量；先求 AB、AC。"
  },
  {
    "id": "g3-spatial-coordinates-normals-written-02",
    "topic": "高三立体几何与空间向量·坐标与法向量",
    "kind": "written",
    "title": "中点与平面法向量",
    "question": "四面体 OABC 中，O(0,0,0)、A(2,0,0)、B(0,3,0)、C(0,0,4)。M、N 分别为 AB、AC 的中点。（1）求 M、N；（2）证明 MN∥平面 OBC；（3）求平面 OMN 的一个法向量。",
    "options": [],
    "correctAnswer": "M(1,3/2,0)、N(1,0,2)；MN∥平面 OBC；可取 n=(6,−4,−3)。",
    "explanation": "（1）中点坐标逐分量平均：M(1,3/2,0)、N(1,0,2)。\n（2）MN=(0,−3/2,2)，其第一坐标为零。平面 OBC 是 x=0，法向量可取 (1,0,0)。\nMN 与该法向量数量积为零，说明 MN 的方向平行于该平面；还需检查位置。\nM、N 的 x 坐标都是 1，因此整条 MN 的 x 坐标恒为 1，不与 x=0 相交，故 MN∥平面 OBC。\n（3）OM=(1,3/2,0)、ON=(1,0,2) 不共线。设 n=(x,y,z)，则 x+3y/2=0、x+2z=0。\n取 x=6，得到 y=−4、z=−3，故 n=(6,−4,−3)。\n核验 n·OM=6−6=0，n·ON=6−6=0，且 n 非零，所以确为法向量。",
    "checkpoints": [
      "求出中点坐标并写出 MN",
      "方向条件之外检验 x=1 与平面 x=0 不相交",
      "联立两数量积方程求非零法向量并回代"
    ],
    "hint": "直线方向平行于平面不代表直线一定在平面外，需再看点的位置。"
  },
  {
    "id": "g3-spatial-angles-choice-01",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "choice",
    "title": "直线方向正交",
    "question": "两条异面直线的方向向量分别为 u=(1,1,0)、v=(1,−1,1)，它们所成角为：",
    "options": [
      {
        "key": "A",
        "text": "30°"
      },
      {
        "key": "B",
        "text": "45°"
      },
      {
        "key": "C",
        "text": "90°"
      },
      {
        "key": "D",
        "text": "60°"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① u·v=1−1+0=0，且两个方向向量都非零。\n② 因而两条直线方向垂直，异面直线所成角为 90°。\n故选 C。"
  },
  {
    "id": "g3-spatial-angles-choice-02",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "choice",
    "title": "线面角用正弦",
    "question": "直线方向 u=(1,0,1)，平面法向量 n=(0,0,1)，线面角为：",
    "options": [
      {
        "key": "A",
        "text": "30°"
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
        "text": "90°"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 线面角 θ∈[0°,90°]，sinθ=|u·n|/(|u||n|)。\n② u·n=1，|u|=√2，|n|=1，所以 sinθ=1/√2，θ=45°。\n故选 B。"
  },
  {
    "id": "g3-spatial-angles-choice-03",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "choice",
    "title": "两平面所成锐角",
    "question": "两平面的法向量分别为 n₁=(1,0,0)、n₂=(1,1,0)，两平面所成锐角为：",
    "options": [
      {
        "key": "A",
        "text": "30°"
      },
      {
        "key": "B",
        "text": "60°"
      },
      {
        "key": "C",
        "text": "90°"
      },
      {
        "key": "D",
        "text": "45°"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 两平面所成的锐角 φ 满足 cosφ=|n₁·n₂|/(|n₁||n₂|)。\n② 数量积为 1，两个模为 1、√2，所以 cosφ=√2/2，φ=45°。题目未指定某一对半平面。\n故选 D。"
  },
  {
    "id": "g3-spatial-angles-choice-04",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "choice",
    "title": "向量角不是直线角",
    "question": "两条直线的某组方向向量夹角为 120°，则两直线所成角为：",
    "options": [
      {
        "key": "A",
        "text": "60°"
      },
      {
        "key": "B",
        "text": "120°"
      },
      {
        "key": "C",
        "text": "30°"
      },
      {
        "key": "D",
        "text": "90°"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 直线没有固定正向，所成角规定取不超过 90°的那个角。\n② 120°的补角为 60°，故所求为 60°。相当于在余弦公式中取数量积绝对值。\n故选 A。"
  },
  {
    "id": "g3-spatial-angles-fill-01",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "fill",
    "title": "体对角线与底面",
    "question": "正方体 ABCD-A₁B₁C₁D₁ 棱长为 1，填直线 AC₁与底面 ABCD 所成角的正弦值。",
    "options": [],
    "correctAnswer": "√3/3",
    "explanation": "① 以 AB、AD、AA₁为三个坐标轴，可取方向 AC₁=(1,1,1)，底面法向量 n=(0,0,1)。\n② sinθ=|AC₁·n|/(|AC₁||n|)=1/√3=√3/3。",
    "acceptedAnswers": [
      "√3/3",
      "sqrt(3)/3",
      "1/sqrt(3)",
      "sqrt(1/3)"
    ]
  },
  {
    "id": "g3-spatial-angles-fill-02",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "fill",
    "title": "法向量求锐角余弦",
    "question": "两平面法向量为 n₁=(1,1,0)、n₂=(1,0,1)，填两平面所成锐角的余弦值。",
    "options": [],
    "correctAnswer": "1/2",
    "explanation": "① 两法向量数量积为 1，模均为 √2。\n② 所成锐角的余弦为 |1|/(√2×√2)=1/2。",
    "acceptedAnswers": [
      "1/2"
    ]
  },
  {
    "id": "g3-spatial-angles-fill-03",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "fill",
    "title": "坐标到线面角",
    "question": "直线方向 u=(2,1,2)，平面法向量 n=(0,0,1)，填线面角的正弦值。",
    "options": [],
    "correctAnswer": "2/3",
    "explanation": "① |u|=√(4+1+4)=3，|n|=1，u·n=2。\n② 所以 sinθ=|2|/(3×1)=2/3。",
    "acceptedAnswers": [
      "2/3"
    ]
  },
  {
    "id": "g3-spatial-angles-written-01",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "written",
    "title": "同一正方体中的两种角",
    "question": "正方体 ABCD-A₁B₁C₁D₁ 棱长为 2。（1）求 AC₁与底面 ABCD 所成角的正弦；（2）求直线 AC₁与 BD₁所成角的余弦。",
    "options": [],
    "correctAnswer": "线面角正弦 √3/3；直线角余弦 1/3。",
    "explanation": "取 A(0,0,0)，以 AB、AD、AA₁方向为 x、y、z 轴，得 B(2,0,0)、C₁(2,2,2)、D₁(0,2,2)。\n（1）AC₁=(2,2,2)，模为 2√3；底面法向量 n=(0,0,1)，模为 1。\nAC₁·n=2，所以线面角 θ 的正弦 sinθ=2/(2√3)=√3/3。\n（2）BD₁=D₁−B=(−2,2,2)，模同样为 2√3。\n两方向的数量积为 2×(−2)+2×2+2×2=4。\n两直线所成角 φ 的余弦 cosφ=|4|/[(2√3)(2√3)]=4/12=1/3。\n两小问分别用线面角正弦与直线角余弦，不可因为数据相同就混用。",
    "checkpoints": [
      "正确建系并求 AC₁、BD₁",
      "以底面法向量求线面角正弦",
      "数量积取绝对值，求直线角余弦"
    ],
    "hint": "AC₁是从 A 指向 C₁的向量；BD₁必须用 D₁坐标减 B 坐标。"
  },
  {
    "id": "g3-spatial-angles-written-02",
    "topic": "高三立体几何与空间向量·空间角",
    "kind": "written",
    "title": "指定二面角可能是钝角",
    "question": "已知 A(0,0,0)、B(2,0,0)、C(0,1,0)、P(0,−1,1)。（1）求平面 ABC 与 ABP 所成的锐角；（2）求二面角 C-AB-P，并说明两结果为何不同。",
    "options": [],
    "correctAnswer": "两平面锐角为 45°；二面角 C-AB-P 为 135°。",
    "explanation": "（1）平面 ABC 是 z=0，可取法向量 n₁=(0,0,1)。\n平面 ABP 的两个方向为 AB=(2,0,0)、AP=(0,−1,1)。法向量 (x,y,z) 需满足 2x=0、−y+z=0，可取 n₂=(0,1,1)。\n两平面所成锐角 φ 的余弦为 |n₁·n₂|/(|n₁||n₂|)=1/√2，所以 φ=45°。\n（2）二面角 C-AB-P 指定了棱 AB 两侧分别含 C、P 的半平面。AC、AP 都过棱上的点 A，并且都垂直 AB，且分别指向对应半平面内。\n因此其平面角就是射线 AC 与 AP 的夹角。AC=(0,1,0)、AP=(0,−1,1)，数量积 −1，模分别为 1、√2。\ncosθ=−1/√2=−√2/2，θ∈[0°,180°]，故 θ=135°。\n两平面所成锐角不指定半平面，取 45°；本题指定二面角的两条射线实际相背，得到补角 135°。这里不能一律给数量积加绝对值。",
    "checkpoints": [
      "求两平面法向量并得到锐角 45°",
      "选取垂直棱且指向指定半平面的 AC、AP",
      "保留数量积负号，得到指定二面角 135°"
    ],
    "hint": "指定二面角看半平面方向；先核对 AC、AP 都垂直 AB，再算射线夹角。"
  },
  {
    "id": "g3-spatial-distances-volume-choice-01",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "choice",
    "title": "点到平面距离",
    "question": "点 P(1,2,3) 到平面 2x−y+2z−3=0 的距离为：",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "√3"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 平面法向量为 (2,−1,2)，模为 3。\n② 距离为 |2×1−2+2×3−3|/3=|3|/3=1。分子须取绝对值。\n故选 B。"
  },
  {
    "id": "g3-spatial-distances-volume-choice-02",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "choice",
    "title": "点到坐标轴距离",
    "question": "点 P(1,2,3) 到 z 轴的距离为：",
    "options": [
      {
        "key": "A",
        "text": "√5"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "√14"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① z 轴上垂足为 H(0,0,3)，不是原点。\n② PH 的长度为 √[(1−0)²+(2−0)²+(3−3)²]=√5。\n故选 A。"
  },
  {
    "id": "g3-spatial-distances-volume-choice-03",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "choice",
    "title": "锥体体积",
    "question": "三棱锥底面积为 6，对应高为 4，体积为：",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "12"
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
    "explanation": "① 棱锥体积 V=底面积×高/3。\n② V=6×4/3=8。这里的高必须垂直于所选底面。\n故选 D。"
  },
  {
    "id": "g3-spatial-distances-volume-choice-04",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "choice",
    "title": "平行平面间距离",
    "question": "平面 x+2y+2z=3 与 x+2y+2z=9 之间的距离为：",
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
        "text": "2"
      },
      {
        "key": "D",
        "text": "√6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① 两平面法向量同为 (1,2,2)，模为 3，因此两平面平行。\n② 方程左边系数已经统一，距离为 |9−3|/3=2。\n故选 C。"
  },
  {
    "id": "g3-spatial-distances-volume-fill-01",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "fill",
    "title": "坐标轴上的三棱锥",
    "question": "O 为原点，A(2,0,0)、B(0,3,0)、C(0,0,4)，填四面体 OABC 的体积。",
    "options": [],
    "correctAnswer": "4",
    "explanation": "① 选三角形 OAB 为底，其面积为 2×3/2=3。\n② C 到底面 z=0 的距离为 4，故体积为 3×4/3=4。",
    "acceptedAnswers": [
      "4"
    ]
  },
  {
    "id": "g3-spatial-distances-volume-fill-02",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "fill",
    "title": "平行坐标面的距离",
    "question": "点 P(2,−1,3) 到平面 z=1 的距离为多少？",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① 沿 z 方向的垂足为 (2,−1,1)。\n② 距离为 |3−1|=2，x、y 分量不参与该距离。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-spatial-distances-volume-fill-03",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "fill",
    "title": "换底求高",
    "question": "某棱锥体积为 20，所选底面面积为 12，填对应的高。",
    "options": [],
    "correctAnswer": "5",
    "explanation": "① 由 V=Sh/3，得 h=3V/S。\n② 代入 V=20、S=12，得 h=60/12=5。",
    "acceptedAnswers": [
      "5"
    ]
  },
  {
    "id": "g3-spatial-distances-volume-written-01",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "written",
    "title": "点到平面的垂足与距离",
    "question": "点 P(1,2,3)，平面 α 为 x+y+z=3。（1）求 P 到 α 的垂足 H；（2）求距离，并检查 H 确实是垂足。",
    "options": [],
    "correctAnswer": "H(0,1,2)，距离 √3。",
    "explanation": "（1）平面法向量 n=(1,1,1)。垂足 H 在过 P 且沿法向量方向的直线上，设 H=P−t n=(1−t,2−t,3−t)。\nH 在平面内，故 (1−t)+(2−t)+(3−t)=3，得 6−3t=3，t=1。\n所以 H=(0,1,2)。\n（2）PH=H−P=(−1,−1,−1)，长度为 √3，即点到平面距离。\n位置核验：0+1+2=3，所以 H 在 α 内；方向核验：PH=−n，与法向量平行，故 PH⊥α。\n也可由距离公式 |1+2+3−3|/√3=3/√3=√3 再次核验。位置与垂直方向同时满足，才能确认所求点是垂足。",
    "checkpoints": [
      "沿法向量设垂足坐标",
      "代入平面方程求参数和垂足",
      "同时检查落在平面内与垂直方向，并求距离"
    ],
    "hint": "垂足坐标不能只把一个分量改为零；沿 (1,1,1) 方向移动后再求交点。"
  },
  {
    "id": "g3-spatial-distances-volume-written-02",
    "topic": "高三立体几何与空间向量·距离与体积",
    "kind": "written",
    "title": "同一四面体换底求距离",
    "question": "四面体 OABS 中 O(0,0,0)、A(3,0,0)、B(0,4,0)、S(0,0,6)。（1）求体积；（2）求 O 到平面 SAB 的距离；（3）求三角形 SAB 面积，并以换底公式核验。",
    "options": [],
    "correctAnswer": "体积 12；距离 12/√29；三角形 SAB 面积 3√29。",
    "explanation": "（1）底面 OAB 是直角三角形，面积为 3×4/2=6；S 到该底面的高为 6，所以四面体体积 V=6×6/3=12。\n（2）平面 SAB 过三个截距点，可写成 x/3+y/4+z/6=1，即 4x+3y+2z=12。逐点代入 A、B、S 都成立。\n法向量为 n=(4,3,2)，模 √29，因此 O 到该平面的距离 d=|0−12|/√29=12/√29。\n（3）在三角形 SAB 中取 AB=(−3,4,0)、AS=(−3,0,6)，有 |AB|²=25、|AS|²=45、AB·AS=9。\n由面积为 (1/2)|AB||AS|sin∠BAS，且 sin²=1−cos²，得面积平方为 [25×45−9²]/4=1044/4=261。\n面积为正，所以面积为 √261=3√29。这个公式由数量积与三角形面积公式推出，不需要额外的向量叉积。\n换底核验：以 SAB 为底、O 为顶点，V=(1/3)×3√29×(12/√29)=12，与（1）一致。",
    "checkpoints": [
      "选择易算的直角底面求体积",
      "建立侧面方程并求点面距离",
      "由数量积求侧面面积，用同体积换底核验"
    ],
    "hint": "先选坐标面上的直角三角形作底，再把同一个四面体换成侧面作底。"
  },
  {
    "id": "g3-spatial-moving-points-choice-01",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "choice",
    "title": "动点最短线段",
    "question": "A(0,0,0)、B(2,0,0)、C(0,2,0)、S(0,0,2)，P 在线段 BC 上。SP 的最小长度为：",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "√2"
      },
      {
        "key": "C",
        "text": "2√2"
      },
      {
        "key": "D",
        "text": "√6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "① 设 P=(2−2t,2t,0)，0≤t≤1，则 SP=(2−2t,2t,−2)。\n② |SP|²=4(1−t)²+4t²+4=8(t−1/2)²+6。\n③ t=1/2 在线段参数范围内，所以最小长度为 √6，不是最小平方 6。\n故选 D。"
  },
  {
    "id": "g3-spatial-moving-points-choice-02",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "choice",
    "title": "代数解还需筛线段参数",
    "question": "单位正方体以 A 为原点、AB、AD、AA₁为坐标轴。P 在线段 BC 上，P=(1,t,0)，0≤t≤1。是否存在 P，使 A₁P 与 AC 垂直？",
    "options": [
      {
        "key": "A",
        "text": "存在，t=0"
      },
      {
        "key": "B",
        "text": "存在，t=1"
      },
      {
        "key": "C",
        "text": "不存在"
      },
      {
        "key": "D",
        "text": "存在，t=1/2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "① A₁P=(1,t,−1)，AC=(1,1,0)，数量积为 1+t。\n② 垂直要求 1+t=0，即 t=−1，但不在 [0,1] 内。\n③ 因此在线段 BC 上不存在这样的点；整条直线上存在候选不能替代线段结论。\n故选 C。"
  },
  {
    "id": "g3-spatial-moving-points-choice-03",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "choice",
    "title": "动点落在平面内",
    "question": "点 P(t,1−t,0)，0≤t≤1。P 在平面 x−y=0 内时，t 为：",
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
        "text": "−1/2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "① 把点坐标代入平面方程，t−(1−t)=0。\n② 解得 2t−1=0，所以 t=1/2，且符合参数范围。\n故选 A。"
  },
  {
    "id": "g3-spatial-moving-points-choice-04",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "choice",
    "title": "体积条件求高度",
    "question": "A(0,0,0)、B(2,0,0)、C(0,2,0)，S(0,0,h)，h>0。四面体 SABC 的体积为 2，则 h 为：",
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
        "text": "2"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "B",
    "explanation": "① 底面 ABC 面积为 2×2/2=2，高为 h。\n② 由 2h/3=2，得 h=3，符合 h>0。\n故选 B。"
  },
  {
    "id": "g3-spatial-moving-points-fill-01",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "fill",
    "title": "求最小平方",
    "question": "P=(1−t,t,0)，0≤t≤1，Q=(0,0,1)。填 |QP|²的最小值。",
    "options": [],
    "correctAnswer": "3/2",
    "explanation": "① QP=(1−t,t,−1)，模平方为 (1−t)²+t²+1。\n② 配方为 2(t−1/2)²+3/2，在允许的 t=1/2 取得最小值 3/2。\n③ 本题问模的平方，不应再开根。",
    "acceptedAnswers": [
      "3/2",
      "1.5"
    ]
  },
  {
    "id": "g3-spatial-moving-points-fill-02",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "fill",
    "title": "整条直线的参数",
    "question": "单位正方体中 A(0,0,0)、C₁(1,1,1)、D₁(0,1,1)。P(t,0,0) 在整条直线 AB 上。使 D₁P⊥AC₁的参数 t 为多少？",
    "options": [],
    "correctAnswer": "2",
    "explanation": "① D₁P=(t,−1,−1)，AC₁=(1,1,1)。\n② 垂直要求 t−1−1=0，得到 t=2。两向量非零，条件成立。\n③ 题目允许整条直线，所以 2 可取；若改为线段 AB，参数只能在 [0,1]，则无解。",
    "acceptedAnswers": [
      "2"
    ]
  },
  {
    "id": "g3-spatial-moving-points-fill-03",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "fill",
    "title": "同底体积比",
    "question": "三棱锥 S-ABC 中 P 在 SC 上，SP/SC=t，0≤t≤1。若四面体 PABC 的体积是 SABC 的 1/3，填 t。",
    "options": [],
    "correctAnswer": "2/3",
    "explanation": "① S、P 向底面 ABC 的垂直高度分别为 h、(1−t)h，因为 C 在底面上。\n② 两棱锥同底，体积比等于高度比，故 1−t=1/3。\n③ 解得 t=2/3，在线段范围内。SP/SC 是沿边的长度比，不能直接当作体积比。",
    "acceptedAnswers": [
      "2/3"
    ]
  },
  {
    "id": "g3-spatial-moving-points-written-01",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "written",
    "title": "最短位置与垂直条件相互核验",
    "question": "四棱锥 S-ABCD 的底面为边长 2 的正方形，SA⊥底面且 SA=2。P 在线段 BD 上。（1）求使 SP⊥BD 的点 P；（2）求该位置时 SP 与 AC 所成角的余弦；（3）证明此 P 也使 SP 最短并求最短长度。",
    "options": [],
    "correctAnswer": "P 为 BD 中点；直线角余弦 √3/3；SP 最小长度 √6。",
    "explanation": "以 A 为原点，AB、AD、AS 为坐标轴，得 B(2,0,0)、D(0,2,0)、C(2,2,0)、S(0,0,2)。\n设 P=B+t(D−B)=(2−2t,2t,0)，0≤t≤1，因此 SP=(2−2t,2t,−2)，BD=(−2,2,0)。\n（1）SP·BD=−4+8t，垂直时 t=1/2，符合范围。故 P=(1,1,0)，为 BD 中点。两方向均非零。\n（2）该位置 SP=(1,1,−2)，AC=(2,2,0)，数量积为 4，模分别为 √6、2√2。\n两直线角余弦为 |4|/(√6×2√2)=1/√3=√3/3。\n（3）任意允许参数下，|SP|²=(2−2t)²+(2t)²+4=8(t−1/2)²+6。\n因此最小平方为 6，恰在 t=1/2 取得；最短长度为 √6。该点在线段内且与（1）的垂足位置相同，完成互相核验。",
    "checkpoints": [
      "设线段参数并由数量积求出合法垂足",
      "正确区分直线角余弦并计算",
      "配方求最短模，检查取点在范围内"
    ],
    "hint": "把线段参数限定为 [0,1]；垂直条件给出的点应与最短距离位置一致。"
  },
  {
    "id": "g3-spatial-moving-points-written-02",
    "topic": "高三立体几何与空间向量·动点综合",
    "kind": "written",
    "title": "线面角存在性与范围筛选",
    "question": "单位正方体以 A 为原点、AB、AD、AA₁为坐标轴，P 在线段 BC 上，P=(1,t,0)，0≤t≤1。（1）求平面 ADC₁的一个法向量；（2）是否存在 P，使 A₁P 与该平面的夹角为 60°？若存在求 P；（3）夹角能否为 45°？",
    "options": [],
    "correctAnswer": "可取 n=(1,0,−1)；60°时 P=(1,√6/3,0)；45°无解。",
    "explanation": "（1）AD=(0,1,0)，AC₁=(1,1,1)。设 n=(x,y,z)，列 y=0、x+y+z=0，可取 n=(1,0,−1)，非零。\n（2）A₁=(0,0,1)，所以 A₁P=(1,t,−1)，模为 √(2+t²)，与 n 的数量积恒为 2。\n设线面角 θ∈[0°,90°]，则 sinθ=|2|/[√(2+t²)√2]=√2/√(2+t²)。\n若 θ=60°，有 √2/√(2+t²)=√3/2。两边都为正，可等价平方，得 2/(2+t²)=3/4。\n解得 8=6+3t²，即 t²=2/3。候选 t=±√6/3；由 0≤t≤1，只保留 t=√6/3。\n代回该值后 sinθ=√3/2，且 θ 在规定范围内，确为 60°。故唯一点 P=(1,√6/3,0)。\n（3）若 θ=45°，平方得 2/(2+t²)=1/2，解得 t²=2，即 t=±√2。\n这两值均不在 [0,1] 内，所以线段 BC 上不存在 45°的位置。原方向向量始终非零，且平方两边均为正，本题没有额外的零向量或符号解。",
    "checkpoints": [
      "建立平面内两方向并求非零法向量",
      "用线面角正弦列方程，筛出并回代 60°的点",
      "对 45°也解方程并完整排除范围外候选"
    ],
    "hint": "线面角使用正弦，先求代数候选，再筛 0≤t≤1，最后回代原式。"
  }
];
