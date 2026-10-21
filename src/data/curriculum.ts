import { grade1Questions, grade1PracticeTopics, grade2Questions, grade2PracticeChapters, grade3Questions, grade3PracticeChapters } from "./questions";

export type CurriculumId = "grade1" | "grade2" | "grade3";
export type CurriculumChapter = { title: string; href: string; description: string; lessons: { title: string; href: string }[] };
export type Curriculum = { id: CurriculumId; label: string; english: string; description: string; chapters: CurriculumChapter[] };

// Routes and lesson names were checked against the existing chapter pages, not inferred from question topics.
const catalog: Curriculum[] = [
  {
    "id": "grade1",
    "label": "高一数学",
    "english": "GRADE 10",
    "description": "从集合、函数、三角到向量、几何与概率统计，系统学习高中数学基础。",
    "chapters": [
      {
        "title": "集合与常用逻辑用语",
        "description": "集合概念、集合关系与运算、充分必要条件及逻辑量词。",
        "href": "/grade1/sets",
        "lessons": [
          {
            "title": "集合的概念",
            "href": "/grade1/sets/concept"
          },
          {
            "title": "集合间的基本关系",
            "href": "/grade1/sets/relations"
          },
          {
            "title": "集合的基本运算",
            "href": "/grade1/sets/operations"
          },
          {
            "title": "充分条件与必要条件",
            "href": "/grade1/sets/conditions"
          },
          {
            "title": "全称量词与存在量词",
            "href": "/grade1/sets/quantifiers"
          }
        ]
      },
      {
        "title": "一元二次函数、方程和不等式",
        "description": "不等式性质、基本不等式、二次函数与方程及综合应用。",
        "href": "/grade1/quadratic",
        "lessons": [
          {
            "title": "等式与不等式的基本性质",
            "href": "/grade1/quadratic/properties"
          },
          {
            "title": "基本不等式",
            "href": "/grade1/quadratic/basic-inequality"
          },
          {
            "title": "一元二次函数与一元二次方程",
            "href": "/grade1/quadratic/equation"
          },
          {
            "title": "一元二次不等式",
            "href": "/grade1/quadratic/inequality"
          },
          {
            "title": "二次函数、方程与不等式的综合应用",
            "href": "/grade1/quadratic/applications"
          }
        ]
      },
      {
        "title": "函数的概念与性质",
        "description": "函数概念、定义域与值域、单调性、奇偶性及最值。",
        "href": "/grade1/functions",
        "lessons": [
          {
            "title": "函数的概念",
            "href": "/grade1/functions/concept"
          },
          {
            "title": "函数的定义域与值域",
            "href": "/grade1/functions/domain-range"
          },
          {
            "title": "函数的单调性",
            "href": "/grade1/functions/monotonicity"
          },
          {
            "title": "函数的奇偶性",
            "href": "/grade1/functions/parity"
          },
          {
            "title": "函数的最大值与最小值",
            "href": "/grade1/functions/extrema"
          }
        ]
      },
      {
        "title": "指数函数与对数函数",
        "description": "指数幂、指数函数、对数运算、对数函数及综合应用。",
        "href": "/grade1/exponential-log",
        "lessons": [
          {
            "title": "根式与分数指数幂",
            "href": "/grade1/exponential-log/powers"
          },
          {
            "title": "指数函数",
            "href": "/grade1/exponential-log/exponential-function"
          },
          {
            "title": "对数与对数运算",
            "href": "/grade1/exponential-log/logarithm"
          },
          {
            "title": "对数函数",
            "href": "/grade1/exponential-log/logarithmic-function"
          },
          {
            "title": "指数函数与对数函数的综合应用",
            "href": "/grade1/exponential-log/applications"
          }
        ]
      },
      {
        "title": "三角函数",
        "description": "任意角与弧度制、三角函数定义、诱导公式、图象性质和恒等变换。",
        "href": "/grade1/trigonometric",
        "lessons": [
          {
            "title": "任意角与弧度制",
            "href": "/grade1/trigonometric/angles-radians"
          },
          {
            "title": "三角函数的概念与基本关系",
            "href": "/grade1/trigonometric/definition-relations"
          },
          {
            "title": "诱导公式",
            "href": "/grade1/trigonometric/induction-formulas"
          },
          {
            "title": "三角函数的图象与性质",
            "href": "/grade1/trigonometric/graphs-properties"
          },
          {
            "title": "三角恒等变换",
            "href": "/grade1/trigonometric/identities"
          }
        ]
      },
      {
        "title": "平面向量",
        "description": "向量概念、线性运算、坐标表示、数量积及综合应用。",
        "href": "/grade1/vectors",
        "lessons": [
          {
            "title": "平面向量的概念与表示",
            "href": "/grade1/vectors/concept"
          },
          {
            "title": "平面向量的线性运算",
            "href": "/grade1/vectors/linear-operations"
          },
          {
            "title": "平面向量基本定理与坐标表示",
            "href": "/grade1/vectors/coordinates"
          },
          {
            "title": "平面向量的数量积",
            "href": "/grade1/vectors/dot-product"
          },
          {
            "title": "平面向量的综合应用",
            "href": "/grade1/vectors/applications"
          }
        ]
      },
      {
        "title": "复数",
        "description": "复数的概念与代数表示、复平面、复数的四则运算及综合应用。",
        "href": "/grade1/complex",
        "lessons": [
          {
            "title": "复数的概念与代数表示",
            "href": "/grade1/complex/concept"
          },
          {
            "title": "复数的几何意义",
            "href": "/grade1/complex/geometry"
          },
          {
            "title": "复数的加法与减法",
            "href": "/grade1/complex/addition-subtraction"
          },
          {
            "title": "复数的乘法与除法",
            "href": "/grade1/complex/multiplication-division"
          },
          {
            "title": "复数的综合应用",
            "href": "/grade1/complex/applications"
          }
        ]
      },
      {
        "title": "立体几何初步",
        "description": "空间几何体、空间点线面关系、平行与垂直的判定及应用。",
        "href": "/grade1/solid-geometry",
        "lessons": [
          {
            "title": "空间几何体",
            "href": "/grade1/solid-geometry/spatial-solids"
          },
          {
            "title": "空间几何体的表面积与体积",
            "href": "/grade1/solid-geometry/surface-volume"
          },
          {
            "title": "空间点、直线与平面的位置关系",
            "href": "/grade1/solid-geometry/spatial-relations"
          },
          {
            "title": "直线与平面的位置关系",
            "href": "/grade1/solid-geometry/line-plane-relations"
          },
          {
            "title": "平面与平面的位置关系",
            "href": "/grade1/solid-geometry/plane-plane-relations"
          }
        ]
      },
      {
        "title": "统计",
        "description": "随机抽样、数据的收集与整理、统计图表、数据的数字特征及统计综合应用。",
        "href": "/grade1/statistics",
        "lessons": [
          {
            "title": "随机抽样",
            "href": "/grade1/statistics/random-sampling"
          },
          {
            "title": "数据的收集与整理",
            "href": "/grade1/statistics/data-organization"
          },
          {
            "title": "统计图表",
            "href": "/grade1/statistics/statistical-graphs"
          },
          {
            "title": "数据的数字特征",
            "href": "/grade1/statistics/numerical-characteristics"
          },
          {
            "title": "统计综合应用",
            "href": "/grade1/statistics/statistical-application"
          }
        ]
      },
      {
        "title": "概率",
        "description": "随机事件与样本空间、事件关系与运算、古典概型、概率基本性质及综合应用。",
        "href": "/grade1/probability",
        "lessons": [
          {
            "title": "随机事件与样本空间",
            "href": "/grade1/probability/random-events"
          },
          {
            "title": "事件的关系与运算",
            "href": "/grade1/probability/event-relations"
          },
          {
            "title": "古典概型",
            "href": "/grade1/probability/classical-probability"
          },
          {
            "title": "概率的基本性质",
            "href": "/grade1/probability/probability-properties"
          },
          {
            "title": "概率综合应用",
            "href": "/grade1/probability/probability-application"
          }
        ]
      }
    ]
  },
  {
    "id": "grade2",
    "label": "高二数学",
    "english": "GRADE 11",
    "description": "学习解析几何、数列、导数、空间向量和概率统计，衔接基础知识与综合应用。",
    "chapters": [
      {
        "title": "直线与方程",
        "href": "/grade2/line-equation",
        "description": "学习直线的斜率、倾斜角、直线方程及两条直线的位置关系。",
        "lessons": [
          {
            "title": "直线的斜率与倾斜角",
            "href": "/grade2/line-equation/slope-angle"
          },
          {
            "title": "直线的方程",
            "href": "/grade2/line-equation/equation"
          },
          {
            "title": "两条直线的平行与垂直",
            "href": "/grade2/line-equation/parallel-perpendicular"
          },
          {
            "title": "两条直线的交点",
            "href": "/grade2/line-equation/intersection"
          },
          {
            "title": "平面上的距离",
            "href": "/grade2/line-equation/distance"
          }
        ]
      },
      {
        "title": "圆与方程",
        "href": "/grade2/circle-equation",
        "description": "掌握圆的方程，以及直线与圆、圆与圆的位置关系。",
        "lessons": [
          {
            "title": "圆的方程",
            "href": "/grade2/circle-equation/equation"
          },
          {
            "title": "直线与圆的位置关系",
            "href": "/grade2/circle-equation/line-circle"
          },
          {
            "title": "圆与圆的位置关系",
            "href": "/grade2/circle-equation/circle-circle"
          }
        ]
      },
      {
        "title": "圆锥曲线与方程",
        "href": "/grade2/conic-sections",
        "description": "学习椭圆、双曲线和抛物线的定义、方程及几何性质。",
        "lessons": [
          {
            "title": "椭圆",
            "href": "/grade2/conic-sections/ellipse"
          },
          {
            "title": "双曲线",
            "href": "/grade2/conic-sections/hyperbola"
          },
          {
            "title": "抛物线",
            "href": "/grade2/conic-sections/parabola"
          }
        ]
      },
      {
        "title": "数列",
        "href": "/grade2/sequences",
        "description": "学习数列、等差数列、等比数列及数学归纳法。",
        "lessons": [
          {
            "title": "数列",
            "href": "/grade2/sequences/concept"
          },
          {
            "title": "等差数列",
            "href": "/grade2/sequences/arithmetic"
          },
          {
            "title": "等比数列",
            "href": "/grade2/sequences/geometric"
          },
          {
            "title": "数学归纳法*",
            "href": "/grade2/sequences/induction"
          }
        ]
      },
      {
        "title": "导数及其应用",
        "href": "/grade2/derivatives",
        "description": "学习导数的概念与运算，以及导数在研究函数中的应用。",
        "lessons": [
          {
            "title": "导数的概念",
            "href": "/grade2/derivatives/concept"
          },
          {
            "title": "导数的运算",
            "href": "/grade2/derivatives/operations"
          },
          {
            "title": "导数在研究函数中的应用",
            "href": "/grade2/derivatives/applications"
          }
        ]
      },
      {
        "title": "空间向量与立体几何",
        "href": "/grade2/spatial-vectors",
        "description": "掌握空间向量的运算、坐标表示和几何应用。",
        "lessons": [
          {
            "title": "空间向量及其运算",
            "href": "/grade2/spatial-vectors/operations"
          },
          {
            "title": "空间向量的坐标表示",
            "href": "/grade2/spatial-vectors/coordinates"
          },
          {
            "title": "空间向量的应用",
            "href": "/grade2/spatial-vectors/applications"
          }
        ]
      },
      {
        "title": "计数原理",
        "href": "/grade2/counting",
        "description": "掌握两个基本计数原理、排列、组合和二项式定理。",
        "lessons": [
          {
            "title": "两个基本计数原理",
            "href": "/grade2/counting/principles"
          },
          {
            "title": "排列",
            "href": "/grade2/counting/permutations"
          },
          {
            "title": "组合",
            "href": "/grade2/counting/combinations"
          },
          {
            "title": "二项式定理",
            "href": "/grade2/counting/binomial"
          }
        ]
      },
      {
        "title": "概率",
        "href": "/grade2/probability",
        "description": "学习条件概率、离散型随机变量及正态分布。",
        "lessons": [
          {
            "title": "条件概率",
            "href": "/grade2/probability/conditional"
          },
          {
            "title": "离散型随机变量及其分布列",
            "href": "/grade2/probability/discrete-distributions"
          },
          {
            "title": "正态分布",
            "href": "/grade2/probability/normal-distribution"
          }
        ]
      },
      {
        "title": "统计",
        "href": "/grade2/statistics",
        "description": "学习线性回归分析与独立性检验。",
        "lessons": [
          {
            "title": "线性回归分析",
            "href": "/grade2/statistics/linear-regression"
          },
          {
            "title": "独立性检验",
            "href": "/grade2/statistics/independence-test"
          }
        ]
      }
    ]
  },
  {
    "id": "grade3",
    "label": "高三数学",
    "english": "GRADE 12",
    "description": "面向江苏考生开展一轮复习，以知识梳理、规范解题和分层训练查漏补缺。",
    "chapters": [
      {
        "title": "集合与逻辑",
        "href": "/grade3/sets-logic",
        "description": "围绕集合关系、集合运算、充分必要条件与量词，建立完整的推理链。",
        "lessons": [
          {
            "title": "集合的概念与表示",
            "href": "/grade3/sets-logic/concept"
          },
          {
            "title": "集合关系与参数范围",
            "href": "/grade3/sets-logic/relations"
          },
          {
            "title": "集合的交并补运算",
            "href": "/grade3/sets-logic/operations"
          },
          {
            "title": "充分条件与必要条件",
            "href": "/grade3/sets-logic/conditions"
          },
          {
            "title": "量词、命题否定与综合应用",
            "href": "/grade3/sets-logic/quantifiers"
          }
        ]
      },
      {
        "title": "函数与导数",
        "href": "/grade3/functions-derivatives",
        "description": "衔接函数性质、图象、零点与导数，训练切线、最值与含参不等式。",
        "lessons": [
          {
            "title": "函数的概念、定义域与值域",
            "href": "/grade3/functions-derivatives/domain-range"
          },
          {
            "title": "单调性、奇偶性与周期性",
            "href": "/grade3/functions-derivatives/properties"
          },
          {
            "title": "基本初等函数与图象变换",
            "href": "/grade3/functions-derivatives/elementary-functions"
          },
          {
            "title": "函数零点与方程根数",
            "href": "/grade3/functions-derivatives/zeros-equations"
          },
          {
            "title": "导数运算与切线方程",
            "href": "/grade3/functions-derivatives/rules-tangent"
          },
          {
            "title": "导数、单调性与极值最值",
            "href": "/grade3/functions-derivatives/monotonic-extrema"
          },
          {
            "title": "含参不等式与恒成立问题",
            "href": "/grade3/functions-derivatives/parameter-inequalities"
          },
          {
            "title": "导数综合与分类讨论",
            "href": "/grade3/functions-derivatives/comprehensive"
          }
        ]
      },
      {
        "title": "三角函数与解三角形",
        "href": "/grade3/trigonometry",
        "description": "梳理三角函数性质、恒等变换与解三角形，规范条件与范围检验。",
        "lessons": [
          {
            "title": "角、弧度与三角函数关系",
            "href": "/grade3/trigonometry/angles-relations"
          },
          {
            "title": "三角恒等变换与辅助角",
            "href": "/grade3/trigonometry/identities"
          },
          {
            "title": "三角函数图象与性质",
            "href": "/grade3/trigonometry/graphs-properties"
          },
          {
            "title": "三角方程与不等式",
            "href": "/grade3/trigonometry/equations-inequalities"
          },
          {
            "title": "正弦定理、余弦定理与多解",
            "href": "/grade3/trigonometry/sine-cosine-laws"
          },
          {
            "title": "三角形面积与综合应用",
            "href": "/grade3/trigonometry/triangle-applications"
          }
        ]
      },
      {
        "title": "平面向量",
        "href": "/grade3/plane-vectors",
        "description": "结合向量运算、数量积与坐标方法，处理平面几何与综合问题。",
        "lessons": [
          {
            "title": "向量概念与线性运算",
            "href": "/grade3/plane-vectors/operations"
          },
          {
            "title": "基底表示、共线与分点",
            "href": "/grade3/plane-vectors/basis-collinearity"
          },
          {
            "title": "平面向量的坐标表示",
            "href": "/grade3/plane-vectors/coordinates"
          },
          {
            "title": "数量积、夹角与投影",
            "href": "/grade3/plane-vectors/dot-product"
          },
          {
            "title": "向量的几何应用",
            "href": "/grade3/plane-vectors/geometry-applications"
          },
          {
            "title": "含参向量与模的最值",
            "href": "/grade3/plane-vectors/parameters-extrema"
          }
        ]
      },
      {
        "title": "数列",
        "href": "/grade3/sequences",
        "description": "联系通项、递推与前 n 项和，训练求和、最值与不等式。",
        "lessons": [
          {
            "title": "数列的通项、递推与前 n 项和",
            "href": "/grade3/sequences/concept-recursion"
          },
          {
            "title": "等差数列与前 n 项和",
            "href": "/grade3/sequences/arithmetic"
          },
          {
            "title": "等比数列与实际应用",
            "href": "/grade3/sequences/geometric"
          },
          {
            "title": "数列求和的常用方法",
            "href": "/grade3/sequences/summation"
          },
          {
            "title": "递推数列的转化",
            "href": "/grade3/sequences/recurrence"
          },
          {
            "title": "数列综合、最值与不等式",
            "href": "/grade3/sequences/comprehensive"
          }
        ]
      },
      {
        "title": "立体几何与空间向量",
        "href": "/grade3/solid-geometry",
        "description": "结合几何推理与空间向量，解决平行、垂直、角和距离问题。",
        "lessons": [
          {
            "title": "空间几何体与表面积、体积",
            "href": "/grade3/solid-geometry/solids-measurement"
          },
          {
            "title": "空间平行与垂直的证明",
            "href": "/grade3/solid-geometry/parallel-perpendicular"
          },
          {
            "title": "空间向量、坐标与法向量",
            "href": "/grade3/solid-geometry/coordinates-normals"
          },
          {
            "title": "异面直线角、线面角与二面角",
            "href": "/grade3/solid-geometry/angles"
          },
          {
            "title": "空间距离与体积的转化",
            "href": "/grade3/solid-geometry/distances-volume"
          },
          {
            "title": "立体几何综合与动点问题",
            "href": "/grade3/solid-geometry/moving-points"
          }
        ]
      },
      {
        "title": "解析几何",
        "href": "/grade3/analytic-geometry",
        "description": "从直线、圆到圆锥曲线，训练方程、位置关系与综合计算。",
        "lessons": [
          {
            "title": "直线与圆的综合复习",
            "href": "/grade3/analytic-geometry/lines-circles"
          },
          {
            "title": "椭圆的方程与几何性质",
            "href": "/grade3/analytic-geometry/ellipse"
          },
          {
            "title": "双曲线的方程与渐近线",
            "href": "/grade3/analytic-geometry/hyperbola"
          },
          {
            "title": "抛物线的方程与焦点弦",
            "href": "/grade3/analytic-geometry/parabola"
          },
          {
            "title": "直线与圆锥曲线、弦与中点",
            "href": "/grade3/analytic-geometry/chords-midpoints"
          },
          {
            "title": "轨迹方程与参数范围",
            "href": "/grade3/analytic-geometry/loci-equations"
          },
          {
            "title": "解析几何综合与最值",
            "href": "/grade3/analytic-geometry/comprehensive"
          }
        ]
      },
      {
        "title": "计数、概率与统计",
        "href": "/grade3/probability-statistics",
        "description": "衔接计数、概率分布与统计推断，写清模型条件和结论边界。",
        "lessons": [
          {
            "title": "计数原理与排列组合",
            "href": "/grade3/probability-statistics/counting-combinations"
          },
          {
            "title": "二项式定理与系数",
            "href": "/grade3/probability-statistics/binomial-theorem"
          },
          {
            "title": "概率、条件概率与全概率",
            "href": "/grade3/probability-statistics/conditional-probability"
          },
          {
            "title": "离散型随机变量与数字特征",
            "href": "/grade3/probability-statistics/discrete-variables"
          },
          {
            "title": "二项分布与超几何分布",
            "href": "/grade3/probability-statistics/binomial-hypergeometric"
          },
          {
            "title": "正态分布与标准化",
            "href": "/grade3/probability-statistics/normal-distribution"
          },
          {
            "title": "抽样、统计图表与总体估计",
            "href": "/grade3/probability-statistics/sampling-estimation"
          },
          {
            "title": "回归分析与独立性检验",
            "href": "/grade3/probability-statistics/regression-independence"
          }
        ]
      }
    ]
  }
];

export const curricula = catalog.map((grade, gradeIndex) => {
  const bank = [grade1Questions, grade2Questions, grade3Questions][gradeIndex];
  const chapters = grade.chapters.map((chapter, chapterIndex) => {
    // Grade 1's existing practice/report grouping uses five topics per chapter.
    const topics: readonly string[] = grade.id === "grade1"
      ? grade1PracticeTopics.slice(chapterIndex * 5, chapterIndex * 5 + 5)
      : grade.id === "grade2" ? grade2PracticeChapters[chapterIndex].topics : grade3PracticeChapters[chapterIndex].topics;
    return { ...chapter, questionCount: bank.filter(question => topics.includes(question.topic)).length };
  });
  return { ...grade, chapters, lessonCount: chapters.reduce((total, chapter) => total + chapter.lessons.length, 0), questionCount: bank.length };
});

export const curriculumTotals = {
  grades: curricula.length,
  chapters: curricula.reduce((total, grade) => total + grade.chapters.length, 0),
  lessons: curricula.reduce((total, grade) => total + grade.lessonCount, 0),
  questions: curricula.reduce((total, grade) => total + grade.questionCount, 0),
};

export function curriculumFor(id: CurriculumId) {
  return curricula.find(grade => grade.id === id)!;
}
