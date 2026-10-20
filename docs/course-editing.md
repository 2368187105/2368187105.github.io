# 课程与题目维护位置

公式样式使用 `katex/dist/katex.min.css`，其版本必须与 `react-katex` 实际使用的 KaTeX 一致。当前统一为 0.16.47；升级时用 `npm ls katex` 核实，避免不等号斜线错位及分式、根号排版异常。

向量公式统一使用 `\overrightarrow{a}`、`\overrightarrow{AB}` 等顶部箭头。向量课程及训练、错题中的普通文字使用 `src/components/VectorText.tsx` 统一显示；点名、坐标参数和边长仍保持标量写法。遇到新符号或特殊语义时，应显式使用 `InlineMath` / `BlockMath`，不要把标量改成向量。

## 已核实的实际文件分组

当前文件名使用 `part1`、`part2`、`part3`、`part4`，没有另建 `part01` 命名。

| 文件 | 实际范围 | 当前数量 |
| --- | --- | --- |
| `src/data/questions-part1.ts` | 高一第 1—5 章：集合与逻辑、二次函数方程不等式、函数、指数对数、三角函数 | 25 专题 / 75 题 |
| `src/data/questions-part2.ts` | 高一第 6—10 章：平面向量、复数、立体几何、统计、概率 | 25 专题 / 75 题 |
| `src/data/questions-part3.ts` | 高二已开放的第 1—5 章：直线与方程、圆与方程、圆锥曲线与方程、数列、导数及其应用 | 18 专题 / 54 题 |
| `src/data/questions-part4.ts` | 高二第 6 章起：空间向量与立体几何、计数原理、概率、统计（第 6—9 章已全部开放） | 12 专题 / 36 题 |
| `src/data/questions.ts` | 四组题库的统一合并入口，提供高一、高二及全站导出 | 80 专题 / 240 题 |

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

高二九章三十节、高一十章五十节均已开放；全站共八十个专题、二百四十道专题训练题。
- 专题训练及保存：`src/app/practice/page.tsx`。
- 错题筛选与删除：`src/app/mistakes/page.tsx`。
- 学习报告：`src/app/report/page.tsx`。

## 迁移备份与核验

迁移前源码备份：`.backups/grade2-before-organization-20261019-142153.zip`，含 116 个源文件、资源与配置文件及逐文件 SHA-256 校验。
迁移内容比对结果：`.backups/grade2-organization-validation.json`。
