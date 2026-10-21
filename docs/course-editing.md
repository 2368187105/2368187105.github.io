# 课程与题目维护位置

公式样式使用 `katex/dist/katex.min.css`，其版本必须与 `react-katex` 实际使用的 KaTeX 一致。当前统一为 0.16.47；升级时用 `npm ls katex` 核实，避免不等号斜线错位及分式、根号排版异常。

向量公式统一使用 `\overrightarrow{a}`、`\overrightarrow{AB}` 等顶部箭头。向量课程及训练、错题中的普通文字使用 `src/components/VectorText.tsx` 统一显示；点名、坐标参数和边长仍保持标量写法。遇到新符号或特殊语义时，应显式使用 `InlineMath` / `BlockMath`，不要把标量改成向量。

## 已核实的实际文件分组

当前文件名连续使用 `part1` 至 `part13`，没有另建 `part01` 命名。高一、高二沿用原四组，高三按各模块继续分组。

| 文件 | 实际范围 | 当前数量 |
| --- | --- | --- |
| `src/data/questions-part1.ts` | 高一第 1—5 章：集合与逻辑、二次函数方程不等式、函数、指数对数、三角函数 | 25 专题 / 75 题 |
| `src/data/questions-part2.ts` | 高一第 6—10 章：平面向量、复数、立体几何、统计、概率 | 25 专题 / 75 题 |
| `src/data/questions-part3.ts` | 高二已开放的第 1—5 章：直线与方程、圆与方程、圆锥曲线与方程、数列、导数及其应用 | 18 专题 / 54 题 |
| `src/data/questions-part4.ts` | 高二第 6 章起：空间向量与立体几何、计数原理、概率、统计（第 6—9 章已全部开放） | 12 专题 / 36 题 |
| `src/data/questions-part5.ts` | 高三集合与逻辑 | 5 专题 / 45 题 |
| `src/data/questions-part6.ts` | 高三函数与导数新课 | 8 专题 / 72 题 |
| `src/data/questions-part7.ts` | 高三三角函数与解三角形 | 6 专题 / 54 题 |
| `src/data/questions-part8.ts` | 高三平面向量 | 6 专题 / 54 题 |
| `src/data/questions-part9.ts` | 高三数列 | 6 专题 / 54 题 |
| `src/data/questions-part10.ts` | 高三立体几何与空间向量 | 6 专题 / 54 题 |
| `src/data/questions-part11.ts` | 高三解析几何 | 7 专题 / 63 题 |
| `src/data/questions-part12.ts` | 高三计数、概率与统计 | 8 专题 / 72 题 |
| `src/data/questions-part13.ts` | 高三八章综合训练，每章 6 选择、3 填空、3 解答 | 8 专题 / 96 题 |
| `src/data/questions-grade3.ts` | 高三合并入口，另保留 3 个函数复练专题、9 道旧题 | 63 专题 / 573 题 |
| `src/data/questions.ts` | 全年级统一合并入口 | 143 专题 / 813 题 |

`part2` 的 `vectorQuestions`、`vectorPracticeTopics` 是历史导出名称，实际内容是高一后五章，不仅是向量。
`src/data/questions-grade2.ts` 是保留的原有兼容入口，题目实际维护在 `questions-part3.ts`（前五章）和 `questions-part4.ts`（第六章起）；不要在兼容入口重复填写题目。

## 修改课程、例题、课内自测和图形

与高一一样，直接修改对应课程的 `page.tsx`。页面内的 `quizQuestions` 是课内自测，`CircleFigure` 、`ConicFigure` 、`SequenceFigure` 、`DerivativeFigure` 、`SpatialFigure` 、`CountingFigure` 、`ProbabilityFigure` 或 `StatisticsFigure` 是本节交互图形，正文和例题直接写在 JSX 中，不需要另一套课程配置或渲染器。

| 课程 | 文件 |
| --- | --- |
| 高二 1.1 斜率与倾斜角 | `src/app/grade2/line-equation/slope-angle/page.tsx` |
| 高二 1.2 直线的方程 | `src/app/grade2/line-equation/equation/page.tsx` |
| 高二 1.3 平行与垂直 | `src/app/grade2/line-equation/parallel-perpendicular/page.tsx` |
| 高二 1.4 两条直线的交点 | `src/app/grade2/line-equation/intersection/page.tsx` |
| 高二 1.5 平面上的距离 | `src/app/grade2/line-equation/distance/page.tsx` |
| 高二 2.1 圆的方程 | `src/app/grade2/circle-equation/equation/page.tsx` |
| 高二 2.2 直线与圆的位置关系 | `src/app/grade2/circle-equation/line-circle/page.tsx` |
| 高二 2.3 圆与圆的位置关系 | `src/app/grade2/circle-equation/circle-circle/page.tsx` |
| 高二 3.1 椭圆 | `src/app/grade2/conic-sections/ellipse/page.tsx` |
| 高二 3.2 双曲线 | `src/app/grade2/conic-sections/hyperbola/page.tsx` |
| 高二 3.3 抛物线 | `src/app/grade2/conic-sections/parabola/page.tsx` |
| 高二 4.1 数列 | `src/app/grade2/sequences/concept/page.tsx` |
| 高二 4.2 等差数列 | `src/app/grade2/sequences/arithmetic/page.tsx` |
| 高二 4.3 等比数列 | `src/app/grade2/sequences/geometric/page.tsx` |
| 高二 4.4 数学归纳法（拓展选学） | `src/app/grade2/sequences/induction/page.tsx` |
| 高二 5.1 导数的概念 | `src/app/grade2/derivatives/concept/page.tsx` |
| 高二 5.2 导数的运算 | `src/app/grade2/derivatives/operations/page.tsx` |
| 高二 5.3 导数在研究函数中的应用 | `src/app/grade2/derivatives/applications/page.tsx` |
| 高二 6.1 空间向量及其运算 | `src/app/grade2/spatial-vectors/operations/page.tsx` |
| 高二 6.2 空间向量的坐标表示 | `src/app/grade2/spatial-vectors/coordinates/page.tsx` |
| 高二 6.3 空间向量的应用 | `src/app/grade2/spatial-vectors/applications/page.tsx` |
| 高二 7.1 两个基本计数原理 | `src/app/grade2/counting/principles/page.tsx` |
| 高二 7.2 排列 | `src/app/grade2/counting/permutations/page.tsx` |
| 高二 7.3 组合 | `src/app/grade2/counting/combinations/page.tsx` |
| 高二 7.4 二项式定理 | `src/app/grade2/counting/binomial/page.tsx` |
| 高二 8.1 条件概率 | `src/app/grade2/probability/conditional/page.tsx` |
| 高二 8.2 离散型随机变量及其分布列 | `src/app/grade2/probability/discrete-distributions/page.tsx` |
| 高二 8.3 正态分布 | `src/app/grade2/probability/normal-distribution/page.tsx` |
| 高二 9.1 线性回归分析 | `src/app/grade2/statistics/linear-regression/page.tsx` |
| 高二 9.2 独立性检验 | `src/app/grade2/statistics/independence-test/page.tsx` |

高一仍在 `src/app/grade1/<章节>/<课时>/page.tsx`，例如集合概念是 `src/app/grade1/sets/concept/page.tsx`。

## 修改专题训练题与章节归属

高二前五章专题训练题打开 `src/data/questions-part3.ts`，第六章起打开 `src/data/questions-part4.ts`，编辑对应专题下的 `questions`。沿用 `id/topic/title/question/formula/options/correctAnswer/explanation` 字段；数学公式使用 `String.raw`。

已使用的题目 `id` 和专题 `topic` 与 Supabase 中的历史记录关联。修改题干、选项或解析时保留现有 ID；新题使用新的唯一 ID。

同一文件中的 `practiceTopics` 定义专题目录，`practiceChapters` 记录实际章节归属。目前第一章 5 个专题、第二章 3 个专题、第三章 3 个专题、第四章 4 个专题、第五章 3 个专题；`part4` 当前登记第六章 3 个专题、第七章 4 个专题、第八章 3 个专题、第九章 2 个专题；新增课程时显式调整各章范围，不假设高二每章都为 5 节。

课内自测与专题训练分别维护：前者只在课程页判题，后者通过 `/practice` 保存练习记录并自动收集错题。修改两处相同题目时，应分别核对课时 `page.tsx` 和所属 `questions-partN.ts`。

## 修改目录与学习功能

- 高二总目录：`src/app/grade2/page.tsx`。
- 第一章目录：`src/app/grade2/line-equation/page.tsx`。
- 第二章目录：`src/app/grade2/circle-equation/page.tsx`，与高一一样在本页 `lessons` 数组列出课时。
- 第三章目录：`src/app/grade2/conic-sections/page.tsx`。
- 第四章目录：`src/app/grade2/sequences/page.tsx`。
- 第五章目录：`src/app/grade2/derivatives/page.tsx`。
- 第六章目录：`src/app/grade2/spatial-vectors/page.tsx`。
- 第七章目录：`src/app/grade2/counting/page.tsx`。
- 第八章目录：`src/app/grade2/probability/page.tsx`。
- 第九章目录：`src/app/grade2/statistics/page.tsx`。

高二九章三十节、高一十章五十节均已开放；高一、高二合计八十个专题、二百四十道专题训练题；高三另行分组。
- 专题训练及保存：`src/app/practice/page.tsx`。
- 错题筛选与删除：`src/app/mistakes/page.tsx`。
- 学习报告：`src/app/report/page.tsx`。

## 迁移备份与核验

迁移前源码备份：`.backups/grade2-before-organization-20261019-142153.zip`，含 116 个源文件、资源与配置文件及逐文件 SHA-256 校验。
迁移内容比对结果：`.backups/grade2-organization-validation.json`。


## 高三一轮复习：第一模块“集合与逻辑”

修改课程正文、知识讲解、例题和交互探索，请打开对应的独立页面：

| 课程 | 页面文件 |
| --- | --- |
| 集合的概念与表示 | `src/app/grade3/sets-logic/concept/page.tsx` |
| 集合关系与参数范围 | `src/app/grade3/sets-logic/relations/page.tsx` |
| 集合的交并补运算 | `src/app/grade3/sets-logic/operations/page.tsx` |
| 充分条件与必要条件 | `src/app/grade3/sets-logic/conditions/page.tsx` |
| 量词、命题否定与综合应用 | `src/app/grade3/sets-logic/quantifiers/page.tsx` |

- 修改本模块训练题：`src/data/questions-part5.ts`。每节 4 选择 + 3 填空 + 2 解答，共 45 题；均为原创，不能标为高考真题。
- 第一模块目录：`src/app/grade3/sets-logic/page.tsx`；八模块总目录：`src/app/grade3/page.tsx`。
- 高三兼容汇总：`src/data/questions-grade3.ts`，合并 part6 的函数与导数八节新课题库，并保留此前的函数与导数复习内容和 9 道题；统一入口仍是 `src/data/questions.ts`。新增模块时按实际题库分组继续扩展，不改变既有 ID/topic。
- 题目类型在 `questions-part1.ts` 的原接口上兼容扩展：缺省 kind 为选择题；填空题使用 `kind: "fill"` 和 `acceptedAnswers`，解答题使用 `kind: "written"`、`checkpoints`、`hint`。所有题目的 `explanation` 都应提供完整过程，换行分步骤，`correctAnswer` 放精简结论。非选择题 `options` 保留为空数组。
- 填空与解答交互：`src/components/ConstructedQuestion.tsx`；判分与自评记录展示：`src/lib/answer-checking.ts`。只匹配明确支持的答案，未引入任意表达式求值。新增根式等形式必须显式补充 acceptedAnswers 并验证。
- 云端沿用原有 practice_attempts/mistakes 字段。解答题 selected_answer/user_answer 为 `self:` 开头的 JSON（草稿和逐步骤 0/1/2 自评），is_correct 表示是否所有步骤自评完整，不代表教师评分。报告通过题目 kind 与记录前缀将其从客观题正确率中剔除，独立展示。未登录只显示本地结果，不写云端。
- 修改前备份：`.backups/before-grade3-sets-20261020-192555.zip`，包含此前未提交的高三内容。


## 高三一轮复习：第二模块“函数与导数”

八节新课仍使用独立 `page.tsx`，正文、公式、例题与交互图形在同一页面维护：

| 课程 | 页面文件 |
| --- | --- |
| 函数的概念、定义域与值域 | `src/app/grade3/functions-derivatives/domain-range/page.tsx` |
| 单调性、奇偶性与周期性 | `src/app/grade3/functions-derivatives/properties/page.tsx` |
| 基本初等函数与图象变换 | `src/app/grade3/functions-derivatives/elementary-functions/page.tsx` |
| 函数零点与方程根数 | `src/app/grade3/functions-derivatives/zeros-equations/page.tsx` |
| 导数运算与切线方程 | `src/app/grade3/functions-derivatives/rules-tangent/page.tsx` |
| 导数、单调性与极值最值 | `src/app/grade3/functions-derivatives/monotonic-extrema/page.tsx` |
| 含参不等式与恒成立问题 | `src/app/grade3/functions-derivatives/parameter-inequalities/page.tsx` |
| 导数综合与分类讨论 | `src/app/grade3/functions-derivatives/comprehensive/page.tsx` |

- 新题库：`src/data/questions-part6.ts`，8 专题，每节 4 选择、3 填空、2 解答，共 72 题（32/24/16）；16 个课内例题另在页面内维护。
- 本模块目录：`src/app/grade3/functions-derivatives/page.tsx`。原有 4 个例题与 9 道选择题入口仍保留；旧题本体位于 `src/data/questions-grade3.ts`，原 ID/topic 不变。
- 高三汇总中的函数与导数章显式登记 8 个新专题和 3 个原有复练专题，不可把 11 个训练专题误计为 11 节新课。
- 当前高三八模块 52 节新复习课、468 道配套题，另有 96 道章末综合及原有 9 题；高三共 573 题，全站 813 题。
- 新课 SVG 坐标保留三位小数，避免服务器与浏览器浮点尾数造成 hydration 差异；数学计算仍用完整精度。有限窗口不保证显示所有交点，综合图象中的根数结论按全域解析计算。
- 修改前备份：`.backups/before-grade3-functions-20261020-200000.zip`。


## 高三一轮复习：第三模块“三角函数与解三角形”

每节正文、公式、例题和交互图形在对应独立页面维护：

| 课程 | 页面文件 |
| --- | --- |
| 角、弧度与三角函数关系 | `src/app/grade3/trigonometry/angles-relations/page.tsx` |
| 三角恒等变换与辅助角 | `src/app/grade3/trigonometry/identities/page.tsx` |
| 三角函数图象与性质 | `src/app/grade3/trigonometry/graphs-properties/page.tsx` |
| 三角方程与不等式 | `src/app/grade3/trigonometry/equations-inequalities/page.tsx` |
| 正弦定理、余弦定理与多解 | `src/app/grade3/trigonometry/sine-cosine-laws/page.tsx` |
| 三角形面积与综合应用 | `src/app/grade3/trigonometry/triangle-applications/page.tsx` |

- 新题库：`src/data/questions-part7.ts`，6 专题、54 道原创题（24 选择、18 填空、12 解答），每节 4+3+2；12 个例题另在课程页面内维护。
- 本模块目录：`src/app/grade3/trigonometry/page.tsx`。高三汇总仍为 `src/data/questions-grade3.ts`，统一入口为 `src/data/questions.ts`。
- 含 π、根式的填空题通过 `acceptedAnswers` 显式列出 pi、sqrt(...) 等键盘输入形式；判分不执行用户输入，也不推断任意三角表达式等价。修改题目后请同步答案别名和完整解析。
- SSA 多解图形固定 A=30°、b=2，按圆与正射线的有效交点计算解数：a<1 无解、a=1 一解、1<a<2 两解、a≥2 一解；a=2 时排除与 A 重合的退化顶点。
- 所有新 SVG 的计算坐标保留三位小数，数学判断仍用完整精度。图形、解析都明确角度或弧度单位。
- 当前八模块共 52 节新复习课、468 道配套训练，另有 96 道章末综合，并保留 9 道原有函数复练题；高三共 573 题，全站共 813 题。
- 修改前备份：`.backups/before-grade3-trigonometry-20261020-202029.zip`。


## 高三一轮复习：第四模块“平面向量”

| 课程 | 页面文件 |
| --- | --- |
| 向量概念与线性运算 | `src/app/grade3/plane-vectors/operations/page.tsx` |
| 基底表示、共线与分点 | `src/app/grade3/plane-vectors/basis-collinearity/page.tsx` |
| 平面向量的坐标表示 | `src/app/grade3/plane-vectors/coordinates/page.tsx` |
| 数量积、夹角与投影 | `src/app/grade3/plane-vectors/dot-product/page.tsx` |
| 向量的几何应用 | `src/app/grade3/plane-vectors/geometry-applications/page.tsx` |
| 含参向量与模的最值 | `src/app/grade3/plane-vectors/parameters-extrema/page.tsx` |

- 题库：`src/data/questions-part8.ts`，6 专题、54 道原创题（24 选择、18 填空、12 解答）；每节 4+3+2。12 个例题另在课程页面维护。
- 模块目录：`src/app/grade3/plane-vectors/page.tsx`；高三汇总：`src/data/questions-grade3.ts`；统一入口仍为 `src/data/questions.ts`。
- 正文与题目通过 `src/components/VectorText.tsx` 标注向量箭头；新增字母 w 的向量识别，t、λ、坐标分量等参数保持标量。SVG 用 vectorSvgLabel 分层放置普通箭头与字母，避免组合箭头字符缺字，并对非零线段绘制箭头，零向量不画方向。
- 填空、解答题中的参考答案、解析、提示、自评步骤也按题目所属向量专题应用格式；其他专题仍按原方式显示。不要把向量格式扩展到所有普通字母。
- 用竖线表示长度，例如 |AP|:|PB|，不要把有符号向量比例混作长度比；数量投影可为负，投影长度取绝对值，投影向量另行区分。
- 图形中坐标按同一比例映射，SVG 坐标取三位小数避免 hydration 尾数差异；数学计算保持完整精度。
- 当前八模块 52 节新复习课、468 道配套训练，另有 96 道章末综合，并保留原有 9 道函数复练题；高三 573 题，全站 813 题。
- 修改前备份：`.backups/before-grade3-vectors-20261020-204310.zip`。


## 高三一轮复习：第八模块“数列”

每节仍为独立页面，正文、公式、两个例题及本地 Explore 交互图形在同一文件维护。

| 课程 | 页面文件 |
| --- | --- |
| 数列的通项、递推与前 n 项和 | `src/app/grade3/sequences/concept-recursion/page.tsx` |
| 等差数列与前 n 项和 | `src/app/grade3/sequences/arithmetic/page.tsx` |
| 等比数列与实际应用 | `src/app/grade3/sequences/geometric/page.tsx` |
| 数列求和的常用方法 | `src/app/grade3/sequences/summation/page.tsx` |
| 递推数列的转化 | `src/app/grade3/sequences/recurrence/page.tsx` |
| 数列综合、最值与不等式 | `src/app/grade3/sequences/comprehensive/page.tsx` |

- 修改本模块题目：`src/data/questions-part9.ts`，6 专题、54 道原创题（24 选择、18 填空、12 解答）；每节 4+3+2。12 个课内例题另在页面维护。
- 模块目录：`src/app/grade3/sequences/page.tsx`；高三汇总：`src/data/questions-grade3.ts`；统一题库入口仍为 `src/data/questions.ts`。既有 ID/topic 和旧题保持不变。
- 首项与差分式分别核验，等比求和区分 q=1 与 q≠1，裂项保留跨距系数，错位相减保留首尾项。解答题需逐步自评，云端沿用原字段与 self: 记录格式，不混入客观题正确率。
- 填空题为精确数值；分数与有限小数由既有安全判分函数处理，不执行用户表达式。
- SVG 只绘制正整数项号，计算坐标取三位小数避免 hydration 尾数差异。纵轴动态或独立缩放会在图下注明，近似显示不参与精确阈值判断。
- 当前八模块共 52 节新复习课、468 道配套训练，另有 96 道章末综合，并保留 9 道原有函数复练题；高三 573 题，全站 813 题。
- 修改前源码备份：`.backups/before-grade3-sequences-20261020-210918.zip`。


## 高三一轮复习：第八模块“立体几何与空间向量”

每节依旧使用独立页面，正文、公式、两个例题及 Explore 交互图形直接在同一文件维护。

| 课程 | 页面文件 |
| --- | --- |
| 空间几何体与表面积、体积 | `src/app/grade3/solid-geometry/solids-measurement/page.tsx` |
| 空间平行与垂直的证明 | `src/app/grade3/solid-geometry/parallel-perpendicular/page.tsx` |
| 空间向量、坐标与法向量 | `src/app/grade3/solid-geometry/coordinates-normals/page.tsx` |
| 异面直线角、线面角与二面角 | `src/app/grade3/solid-geometry/angles/page.tsx` |
| 空间距离与体积的转化 | `src/app/grade3/solid-geometry/distances-volume/page.tsx` |
| 立体几何综合与动点问题 | `src/app/grade3/solid-geometry/moving-points/page.tsx` |

- 题库：`src/data/questions-part10.ts`，6 专题、54 道原创题（24 选择、18 填空、12 解答），每节 4+3+2。12 个课内例题另在页面维护。
- 模块目录：`src/app/grade3/solid-geometry/page.tsx`；高三汇总：`src/data/questions-grade3.ts`；统一题库入口仍为 `src/data/questions.ts`。既有 ID/topic 与旧题不变。
- 图形采用三维坐标到 SVG 的斜投影，旋转方位仅改变显示；屏幕角度和长度不能替代空间计算。SVG 计算坐标取三位小数。平面面片仅表示局部，垂足可在面片外。
- 分点 t=0 时线段退化；t=1 时位于底面，不能称线面平行；零向量不作法向量且不画方向箭头；点面距离为零时合并 P=H 标签。
- 空间角解析区分直线角、线面角及指定二面角；指定半平面的钝角不一律取绝对值。动点解答必须筛选范围、回代并检查非零与退化条件。
- `src/components/VectorText.tsx` 支持 `A₁P`、`AC₁`、`A₁B₁` 等有下标端点，箭头覆盖完整向量名；单点与整串正方体顶点名保持原样。标量参数 t、λ、x/y/z 和普通直线名 l、m 保持原样。
- 根式、π 等填空的键盘输入形式通过 acceptedAnswers 显式收录；分数继续使用现有安全等价匹配。练习、错题、报告与解答题 self: 自评记录沿用原流程。
- 当前八模块共 52 节新复习课、468 道配套训练，另有 96 道章末综合，并保留 9 道原有函数复练题；高三 573 题，全站 813 题。
- 修改前源码备份：`.backups/before-grade3-spatial-20261021-113528.zip`。


## 高三一轮复习：第八模块“解析几何”

七节独立页面；课程正文、公式、两个例题和本地 Explore 图形直接在对应页面维护。

| 课程 | 页面文件 |
| --- | --- |
| 直线与圆的综合复习 | `src/app/grade3/analytic-geometry/lines-circles/page.tsx` |
| 椭圆的方程与几何性质 | `src/app/grade3/analytic-geometry/ellipse/page.tsx` |
| 双曲线的方程与渐近线 | `src/app/grade3/analytic-geometry/hyperbola/page.tsx` |
| 抛物线的方程与焦点弦 | `src/app/grade3/analytic-geometry/parabola/page.tsx` |
| 直线与圆锥曲线、弦与中点 | `src/app/grade3/analytic-geometry/chords-midpoints/page.tsx` |
| 轨迹方程与参数范围 | `src/app/grade3/analytic-geometry/loci-equations/page.tsx` |
| 解析几何综合与最值 | `src/app/grade3/analytic-geometry/comprehensive/page.tsx` |

- 题库：`src/data/questions-part11.ts`，7 专题、63 道原创题（28 选择、21 填空、14 解答），每节 4+3+2。14 个课内例题另在页面维护。
- 模块目录：`src/app/grade3/analytic-geometry/page.tsx`；高三汇总：`src/data/questions-grade3.ts`；统一入口仍为 `src/data/questions.ts`。旧 ID/topic 与旧题保持不变。
- 解析先检查竖直方向、消元后方程次数和二次项系数，再使用判别式。双曲线渐近线方向与抛物线轴线上的单交点不自动代表相切。
- 轨迹保留原条件的排除点、半支与参数范围，并反向构造确认充分性。弦与三角形的非退化条件分别判断，最值保留全部可取位置。
- SVG 横纵坐标同一比例，计算坐标取三位小数防止 hydration 尾数差异。双曲线交点数按完整代数方程分类，并分别显示窗口内可见点数。
- 弦与中点图形的截距选项含精确 √7；面积最值图含精确 ±√2 选项，显示小数不替代精确参数。参数曲线图仅作有限窗口展示。
- 根式填空显式维护 acceptedAnswers，不执行用户输入的任意表达式。练习记录、错题和解答题 self: 自评继续沿用已有流程，报告客观题与自评分开统计。
- 当前八模块共 52 节新复习课、468 道配套训练，另有 96 道章末综合，并保留 9 道原有函数复练题；高三 573 题，全站 813 题。
- 修改前源码备份：`.backups/before-grade3-analytic-20261021-121009.zip`。


## 高三一轮复习：第八模块“计数、概率与统计”

仍沿用独立 `page.tsx`，每节知识、公式、两个例题及 Explore 交互直接在同一文件维护。

| 课程 | 页面文件 |
| --- | --- |
| 计数原理与排列组合 | `src/app/grade3/probability-statistics/counting-combinations/page.tsx` |
| 二项式定理与系数 | `src/app/grade3/probability-statistics/binomial-theorem/page.tsx` |
| 概率、条件概率与全概率 | `src/app/grade3/probability-statistics/conditional-probability/page.tsx` |
| 离散型随机变量与数字特征 | `src/app/grade3/probability-statistics/discrete-variables/page.tsx` |
| 二项分布与超几何分布 | `src/app/grade3/probability-statistics/binomial-hypergeometric/page.tsx` |
| 正态分布与标准化 | `src/app/grade3/probability-statistics/normal-distribution/page.tsx` |
| 抽样、统计图表与总体估计 | `src/app/grade3/probability-statistics/sampling-estimation/page.tsx` |
| 回归分析与独立性检验 | `src/app/grade3/probability-statistics/regression-independence/page.tsx` |

- 修改本模块题目：`src/data/questions-part12.ts`，8 专题、72 道原创题（32 选择、24 填空、16 解答），每节 4+3+2；16 个课内例题在页面维护。
- 模块目录：`src/app/grade3/probability-statistics/page.tsx`；高三汇总：`src/data/questions-grade3.ts`；全年级入口：`src/data/questions.ts`。既有题目、ID/topic 和页面保留。
- 当前一轮复习八模块 52 节新课、468 道配套题，另有 96 道章末综合，并保留 9 道原有函数复练题；高三共 573 题，全站共 813 题。课程开放不代表学生已完成学习。
- 二项模型核验独立同概率等前提；不放回使用超几何，写清取值整数范围。条件事件概率为零时，交互明确提示条件概率未定义。
- 描述统计样本方差用分母 n，题设另有定义时从其定义；分组用组中值近似。正态表、人数和分位点反推均标明近似，不把密度高度当概率。
- 统计检验临界值由题目给出；检查边际和与期望频数，规范区分拒绝/不拒绝、关联/因果、显著性水平/假设概率。
- SVG 计算坐标取三位小数，概率计算保留完整精度；变化坐标窗口和密度轴在图下注明，概率柱图注明高度含义。
- 分数和有限小数继续使用安全答案判分；解答题完整展开模型、列式、数值计算与解释，再以既有 self: 格式分步自评。原有练习、错题与报告功能继续复用。
- 修改前源码备份：`.backups/before-grade3-probability-statistics-20261021-124124.zip`。


## 根式文字的统一显示

- 题干、选项、参考答案、提示、解析和自评步骤中的根式统一经 `src/components/MathText.tsx` 的 `mathText(...)` 使用 KaTeX 显示，根号横线按被开方内容伸展。题库数据仍保持原始字符串；已发布 ID、答案别名和判分逻辑不变。
- 课程中的普通文字可写 `{mathText("半弦长为 √(r²−d²)，整弦再乘 2。")}`。复合被开方式必须用成对括号，写 `√(ab)`，避免无括号的 `√ab` 产生范围歧义。支持 `√2`、`√(x²+y²)`、`√[(x−1)²+y²]`、`⁴√(x⁴)` 等已有写法。
- 该工具只格式化根式，不计算表达式、不改写公式的数学含义。新写较长公式仍优先使用 `InlineMath` / `BlockMath` 和明确的 `\sqrt{...}`、`\frac{...}{...}`。
- 向量语境继续使用 `vectorText(...)`；它同时处理根式，根号外的既有向量箭头保持显示。根号内的距离平方分量等标量不自动添加向量箭头。
- 原生 `<option>` 不支持 KaTeX 的 HTML，根式选项名称写成“根号 2”“−根号 7”等，图下注释与正文继续显示规范根式。不要将 KaTeX 节点直接放入 SVG `<text>`、输入框或答案字符串。
- 全站在 `src/app/layout.tsx` 加载同一版本 KaTeX CSS；根式局部样式在 `src/app/globals.css`，不覆盖已有整段公式字号。
- 本次根式显示调整前备份：`.backups/before-radical-formatting-20261021-131404.zip`。


## 八章综合训练与上线验收

- 综合训练目录：`src/app/grade3/chapter-tests/page.tsx`。各模块原目录均已增加本章综合训练入口，原有 52 节课程保留。
- 修改章末题目：`src/data/questions-part13.ts`，八章每章 12 题，共 48 选择、24 填空、24 解答。可选 `difficulty` 为“基础巩固”“综合应用”“提升”，它只用于显示，不改变判分。
- 52 节课程仍配套 468 道课内专题题；另有 96 道章末综合、9 道原有函数复练题，高三共 573 题，全站 813 题。
- 保存逻辑：`src/lib/practice-records.ts`。沿用原表和列，重复错题更新最近答案/自评；网络失败保留本地结果并显示失败提示，不伪称已保存。
- 指定题目重练 URL：`/practice/?topic=专题名&question=题目ID`。错题本提供直接入口；无效 ID 回到当前专题第一题，不能跨专题误定位。
- 可重复运行 `npm run check:learning` 检查答案别名、自评统计分离、记录保存故障与重复错题处理。它使用隔离测试客户端，不代表实际 Supabase 写入验收。
