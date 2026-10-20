"use client";

import { vectorText, vectorSvgLabel } from "@/components/VectorText";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";

/* =========================
   即时检测题库
========================= */

type QuickQuestion = {
  id: number;
  question: string;
  formula?: string;
  options: {
    key: string;
    text: string;
  }[];
  answer: string;
  explanation: string;
};

const questions: QuickQuestion[] = [
  {
    id: 1,
    question:
      "已知 A(2,1)、B(6,5)，M 是线段 AB 的中点，则向量 AM 的坐标为：",
    options: [
      { key: "A", text: "(4,4)" },
      { key: "B", text: "(2,2)" },
      { key: "C", text: "(-2,-2)" },
      { key: "D", text: "(8,6)" },
    ],
    answer: "B",
    explanation:
      "M 的坐标为 (4,3)，因此向量 AM=(4-2,3-1)=(2,2)。",
  },
  {
    id: 2,
    question:
      "已知非零向量 a=(2,k)、b=(3,-4)，若两个向量互相垂直，则 k 等于：",
    formula: String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=0`,
    options: [
      { key: "A", text: "-3/2" },
      { key: "B", text: "2" },
      { key: "C", text: "3/2" },
      { key: "D", text: "6" },
    ],
    answer: "C",
    explanation:
      "根据垂直条件，2×3+k×(-4)=0，得到 6-4k=0，因此 k=3/2。",
  },
  {
    id: 3,
    question:
      "在三角形 ABC 中，AB=3，AC=4，∠BAC=60°，则 BC 的长度为：",
    formula: String.raw`BC^2=AB^2+AC^2-2AB\cdot AC\cos60^\circ`,
    options: [
      { key: "A", text: "5" },
      { key: "B", text: "√37" },
      { key: "C", text: "7" },
      { key: "D", text: "√13" },
    ],
    answer: "D",
    explanation:
      "由余弦定理，BC²=3²+4²-2×3×4×1/2=13，所以 BC=√13。",
  },
];

const sections = [
  ["methods", "01 向量综合应用思路"],
  ["triangle", "02 三角形中的向量"],
  ["midpoint", "03 中点与重心"],
  ["length", "04 长度与夹角"],
  ["realworld", "05 向量与实际问题"],
  ["examples", "06 典型例题"],
  ["mistakes", "07 常见易错点"],
  ["quiz", "08 即时检测"],
];

/* =========================
   页面主体
========================= */

export default function VectorApplicationsPage() {
  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [submitted, setSubmitted] =
    useState<Record<number, boolean>>({});

  function chooseAnswer(id: number, key: string) {
    if (submitted[id]) return;

    setAnswers((prev) => ({
      ...prev,
      [id]: key,
    }));
  }

  function submitAnswer(id: number) {
    if (!answers[id]) return;

    setSubmitted((prev) => ({
      ...prev,
      [id]: true,
    }));
  }

  function resetQuestion(id: number) {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setSubmitted((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  const completedCount = questions.filter(
    (question) => submitted[question.id]
  ).length;

  const correctCount = questions.filter(
    (question) =>
      submitted[question.id] &&
      answers[question.id] === question.answer
  ).length;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-700">
            {vectorText("首页")}</Link>

          <span>{vectorText("/")}</span>

          <Link href="/grade1" className="hover:text-slate-700">
            {vectorText("高一数学")}</Link>

          <span>{vectorText("/")}</span>

          <Link
            href="/grade1/vectors"
            className="hover:text-slate-700"
          >
            {vectorText("平面向量")}</Link>

          <span>{vectorText("/")}</span>

          <span className="text-slate-600">
            {vectorText("平面向量的综合应用")}</span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                {vectorText("第 06 章 · 第 05 节")}</span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                {vectorText("综合应用")}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {vectorText("平面向量的综合应用")}</h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              {vectorText("在前四节中，我们已经学习了向量的概念、 线性运算、坐标表示和数量积。 本节将这些知识结合起来， 通过向量方法研究三角形、线段中点、 重心、长度、夹角以及实际位移问题。")}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#methods"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                {vectorText("开始学习")}</a>

              <a
                href="#quiz"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {vectorText("即时检测")}</a>
            </div>
          </div>
        </section>

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="min-w-0 space-y-10">
            {/* 01 综合思路 */}
            <section id="methods" className="scroll-mt-28">
              <SectionTitle
                number="01"
                title="向量综合应用的基本思路"
                subtitle="把几何问题转化为向量运算"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("平面向量的一个重要作用， 是将几何图形中的长度、方向和位置关系， 转化成可以计算的代数表达式。")}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <InfoCard
                  number="01"
                  title="建立向量"
                  description="根据图形确定起点、终点和向量关系。"
                />

                <InfoCard
                  number="02"
                  title="选择方法"
                  description="利用线性运算、坐标或数量积建立等式。"
                />

                <InfoCard
                  number="03"
                  title="计算与解释"
                  description="求出数值，再回到几何问题解释结果。"
                />
              </div>

              <div className="mt-6 space-y-4">
                <RuleCard
                  title="研究向量的和"
                  formula={String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}`}
                  explanation="利用首尾相接的三角形法则。"
                />

                <RuleCard
                  title="研究两个向量是否平行"
                  formula={String.raw`x_1y_2-x_2y_1=0`}
                  explanation="使用坐标共线条件。"
                />

                <RuleCard
                  title="研究两个非零向量是否垂直"
                  formula={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=0`}
                  explanation="利用数量积的垂直判定。"
                />

                <RuleCard
                  title="计算向量的长度"
                  formula={String.raw`|\overrightarrow{a}|=\sqrt{x^2+y^2}`}
                  explanation="通过向量坐标和勾股定理计算。"
                />
              </div>

              <Note>
                {vectorText("向量解题的关键并不是套公式， 而是先找到图形中的向量关系。 需要计算时，再选择几何方法或坐标方法。")}</Note>
            </section>

            {/* 02 三角形 */}
            <section
              id="triangle"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="02"
                title="平面向量在三角形中的应用"
                subtitle="用向量描述三角形的边和角"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("对于三角形 ABC， 三条边可以看作有向线段， 从而建立向量之间的关系。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("如果沿三角形的三条边首尾相接走一周， 最终回到起点， 那么三个向量的和为零向量。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}=\overrightarrow{0}`}
              />

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <TriangleDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  {vectorText("三角形的边向量与首尾相接关系")}</p>
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("利用向量表示三角形的边长")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("三角形的边长， 就等于对应有向线段所表示向量的模。")}</p>

              <FormulaBox
                math={String.raw`AB=|\overrightarrow{AB}|`}
              />

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("利用数量积求角")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("如果需要计算角 BAC， 可以研究从 A 出发的两个非零向量 AB 和 AC。")}</p>

              <FormulaBox
                math={String.raw`\cos\angle BAC=\frac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{|\overrightarrow{AB}||\overrightarrow{AC}|}`}
              />

              <Note>
                {vectorText("求三角形的内角时， 应选择以对应顶点为共同起点的两个向量。 例如求角 BAC，就使用向量 AB 与 AC。")}</Note>
            </section>

            {/* 03 中点重心 */}
            <section
              id="midpoint"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="03"
                title="线段中点与三角形重心"
                subtitle="利用向量描述特殊点的位置"
              />

              <h3 className="mt-6 text-base font-semibold text-slate-900">
                {vectorText("线段的中点")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("设 M 是线段 AB 的中点， 则从 A 指向 M 的向量是从 A 指向 B 的向量的一半。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{AM}=\frac12\overrightarrow{AB}`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("如果已知 A、B 两点的坐标：")}</p>

              <FormulaBox
                math={String.raw`A(x_1,y_1),\quad B(x_2,y_2)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("中点 M 的坐标为：")}</p>

              <FormulaBox
                math={String.raw`M\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`}
              />

              <h3 className="mt-9 text-base font-semibold text-slate-900">
                {vectorText("三角形的重心")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("三角形三条中线交于一点， 这个点叫作三角形的重心，记作 G。 重心把每条中线分成 2:1 的两部分， 靠近顶点的部分是较长的一段。")}</p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <CentroidDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  {vectorText("三角形的重心 G 位于中线上，AG:GM=2:1")}</p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("设 M 是 BC 的中点，则：")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{AG}=\frac23\overrightarrow{AM}`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("如果三个顶点坐标分别为 A、B、C， 重心坐标等于三个顶点对应坐标的平均值。")}</p>

              <FormulaBox
                math={String.raw`G\left(\frac{x_A+x_B+x_C}{3},\frac{y_A+y_B+y_C}{3}\right)`}
              />

              <Note>
                {vectorText("中点是两个端点坐标的平均值， 重心是三个顶点坐标的平均值。 这两个公式很相似，但不能混淆。")}</Note>
            </section>

            {/* 04 长度夹角 */}
            <section
              id="length"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="04"
                title="利用向量求长度与夹角"
                subtitle="数量积可以解决常见平面几何计算问题"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("向量数量积将两个向量的模与夹角联系起来。 当已知部分边长和角度时， 可以利用数量积求未知边长。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}||\overrightarrow{b}|\cos\theta`}
              />

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("向量差的模长")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("利用数量积的运算规律：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{a}-\overrightarrow{b}|^2=|\overrightarrow{a}|^2+|\overrightarrow{b}|^2-2\overrightarrow{a}\cdot\overrightarrow{b}`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("在三角形 ABC 中， 因为向量 BC 等于向量 AC 减去向量 AB， 因此：")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("再利用数量积定义， 就可以得到三角形中的余弦定理：")}</p>

              <FormulaBox
                math={String.raw`BC^2=AB^2+AC^2-2AB\cdot AC\cos\angle BAC`}
              />

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("两条线段是否垂直")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("若两条线段对应的方向向量均非零， 那么它们互相垂直， 当且仅当对应向量的数量积为零。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{AB}\perp\overrightarrow{CD}\iff\overrightarrow{AB}\cdot\overrightarrow{CD}=0`}
              />

              <Note>
                {vectorText("处理三角形长度问题时， 先画出图形并找准夹角， 再决定使用勾股定理、 数量积还是余弦定理。")}</Note>
            </section>

            {/* 05 实际问题 */}
            <section
              id="realworld"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="05"
                title="平面向量在实际问题中的应用"
                subtitle="用向量描述位移与合运动"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("位移既具有大小，又具有方向， 因此可以使用向量表示。 当物体连续发生多个位移时， 可以通过向量加法计算合位移。")}</p>

              <h3 className="mt-7 text-base font-semibold text-slate-900">
                {vectorText("示例：向东与向北的位移")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("某人先向东移动 3 km， 再向北移动 4 km。 求他从出发点到终点的位移大小。")}</p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <DisplacementDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  {vectorText("两次相互垂直的位移与合位移")}</p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("建立坐标系，取正东方向为 x 轴正方向， 正北方向为 y 轴正方向。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=(3,0),\qquad\overrightarrow{b}=(0,4)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("合位移向量：")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{s}=\overrightarrow{a}+\overrightarrow{b}=(3,4)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("合位移的大小：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{s}|=\sqrt{3^2+4^2}=5\ \mathrm{km}`}
              />

              <Note>
                {vectorText("路程和位移并不相同。 本例的路程是 3+4=7 km， 而从起点到终点的位移大小是 5 km。")}</Note>
            </section>

            {/* 06 例题 */}
            <section
              id="examples"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="06"
                title="典型例题"
                subtitle="综合运用前四节所学知识"
              />

              <div className="mt-6 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="利用向量加法化简"
                  formula={String.raw`\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}`}
                  explanation="根据三角形法则，AB 与 BC 相加得到 AC，再与 CD 相加得到 AD。"
                  result={String.raw`\overrightarrow{AD}`}
                />

                <ExampleCard
                  number="例题 2"
                  title="求线段中点"
                  formula={String.raw`A(2,1),\quad B(6,5)`}
                  explanation="中点的坐标等于两个端点坐标的平均值，横坐标为 4，纵坐标为 3。"
                  result={String.raw`M(4,3)`}
                />

                <ExampleCard
                  number="例题 3"
                  title="求三角形重心"
                  formula={String.raw`A(0,0),\ B(6,0),\ C(0,3)`}
                  explanation="重心的横坐标为 (0+6+0)/3=2，纵坐标为 (0+0+3)/3=1。"
                  result={String.raw`G(2,1)`}
                />

                <ExampleCard
                  number="例题 4"
                  title="利用垂直条件求参数"
                  formula={String.raw`\overrightarrow{a}=(2,k),\quad\overrightarrow{b}=(3,-4),\quad\overrightarrow{a}\perp\overrightarrow{b}`}
                  explanation="由数量积等于0，得到 2×3-4k=0，因此 k=3/2。"
                  result={String.raw`k=\frac32`}
                />

                <ExampleCard
                  number="例题 5"
                  title="利用余弦定理求边长"
                  formula={String.raw`AB=3,\quad AC=4,\quad\angle BAC=60^\circ`}
                  explanation="先计算 BC²=3²+4²-2×3×4×cos60°，再取算术平方根。"
                  result={String.raw`BC=\sqrt{13}`}
                />
              </div>
            </section>

            {/* 07 易错点 */}
            <section
              id="mistakes"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="07"
                title="常见易错点"
                subtitle="特别注意起点、终点、方向和夹角"
              />

              <div className="mt-6 space-y-3">
                <MistakeTip
                  title="混淆向量与向量的模"
                  description="向量包含大小和方向，而模只是一个非负实数。不能把向量直接当作长度来计算。"
                />

                <MistakeTip
                  title="求向量坐标时写反顺序"
                  description="从 A 指向 B 的向量坐标应为 B 的坐标减去 A 的坐标。"
                />

                <MistakeTip
                  title="混淆中点与重心"
                  description="线段中点取两个端点坐标的平均值，三角形重心取三个顶点坐标的平均值。"
                />

                <MistakeTip
                  title="数量积为零时忽略非零条件"
                  description="根据数量积判断两个向量垂直时，应确认两个向量均为非零向量。"
                />

                <MistakeTip
                  title="余弦定理选错夹角"
                  description="求 BC 的长度时，使用边 AB 与 AC 之间的夹角 BAC。"
                />

                <MistakeTip
                  title="把实际路程与合位移混淆"
                  description="路程是运动路径的总长度；位移描述起点到终点的位置变化，具有方向。"
                />
              </div>
            </section>

            {/* 08 即时检测 */}
            <section
              id="quiz"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="08"
                title="即时检测"
                subtitle="完成 3 道综合题，检查本章知识掌握情况"
              />

              <div className="mt-6 space-y-5">
                {vectorText(questions.map((question) => {
                  const selected = answers[question.id];
                  const isSubmitted = Boolean(
                    submitted[question.id]
                  );
                  const correct =
                    selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                    >
                      <p className="text-xs font-medium text-blue-600">
                        {vectorText("第 ")}{vectorText(question.id)} {vectorText("题 / 共 3 题")}</p>

                      <h3 className="mt-4 text-base font-semibold leading-8 text-slate-900">
                        {vectorText(question.question)}
                      </h3>

                      {vectorText(question.formula && (
                        <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4">
                          <BlockMath math={question.formula} />
                        </div>
                      ))}

                      <div className="mt-5 grid gap-3">
                        {vectorText(question.options.map((option) => {
                          const chosen = selected === option.key;

                          const showCorrect =
                            isSubmitted &&
                            option.key === question.answer;

                          const showWrong =
                            isSubmitted &&
                            chosen &&
                            option.key !== question.answer;

                          return (
                            <button
                              key={option.key}
                              type="button"
                              disabled={isSubmitted}
                              onClick={() =>
                                chooseAnswer(
                                  question.id,
                                  option.key
                                )
                              }
                              className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-6 transition ${
                                showCorrect
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                  : showWrong
                                    ? "border-red-300 bg-red-50 text-red-600"
                                    : chosen
                                      ? "border-blue-400 bg-blue-50 text-blue-800"
                                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-current text-xs font-semibold">
                                {vectorText(option.key)}
                              </span>

                              <span className="pt-0.5">
                                {vectorText(option.text)}
                              </span>
                            </button>
                          );
                        }))}
                      </div>

                      {vectorText(!isSubmitted ? (
                        <button
                          type="button"
                          disabled={!selected}
                          onClick={() =>
                            submitAnswer(question.id)
                          }
                          className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          {vectorText("提交答案")}</button>
                      ) : (
                        <div
                          className={`mt-5 rounded-xl p-4 ${
                            correct
                              ? "bg-emerald-50"
                              : "bg-red-50"
                          }`}
                        >
                          <p
                            className={`text-sm font-semibold ${
                              correct
                                ? "text-emerald-700"
                                : "text-red-600"
                            }`}
                          >
                            {vectorText(correct
                              ? "回答正确"
                              : `回答错误，正确答案：${question.answer}`)}
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {vectorText(question.explanation)}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              resetQuestion(question.id)
                            }
                            className="mt-3 text-sm font-medium text-slate-600 hover:text-slate-900"
                          >
                            {vectorText("重新作答 →")}</button>
                        </div>
                      ))}
                    </div>
                  );
                }))}
              </div>

              {vectorText(completedCount === questions.length && (
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">
                    {vectorText("本节检测已完成")}</p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {vectorText(correctCount)} {vectorText("/ ")}{vectorText(questions.length)} {vectorText("题正确")}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {vectorText(correctCount === questions.length
                      ? "三道综合题全部答对，说明你已经掌握了本节的主要方法。"
                      : "建议复习中点坐标、数量积和余弦定理，再重新作答。")}
                  </p>
                </div>
              ))}
            </section>

            {/* 底部导航 */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link
                href="/grade1/vectors/dot-product"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {vectorText("← 上一节：平面向量的数量积")}</Link>

              <Link
                href="/grade1/vectors"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                {vectorText("返回平面向量章节 →")}</Link>
            </div>
          </div>

          {/* 右侧目录 */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-400">
                {vectorText("本节学习目录")}</p>

              <nav className="mt-5 space-y-3 text-sm">
                {vectorText(sections.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-slate-500 transition hover:text-blue-600"
                  >
                    {vectorText(label)}
                  </a>
                )))}
              </nav>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-400">
                  {vectorText("本节核心知识")}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {vectorText([
                    "向量化简",
                    "三角形",
                    "中点",
                    "重心",
                    "数量积",
                    "余弦定理",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
                    >
                      {vectorText(item)}
                    </span>
                  )))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* =========================
   通用组件
========================= */

function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-blue-600">
          {vectorText(number)}
        </span>

        <h2 className="text-xl font-bold text-slate-900">
          {vectorText(title)}
        </h2>
      </div>

      <p className="mt-2 pl-7 text-sm text-slate-400">
        {vectorText(subtitle)}
      </p>
    </div>
  );
}

function FormulaBox({ math }: { math: string }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-xl bg-slate-50 px-4 py-5">
      <BlockMath math={math} />
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/40 px-5 py-4">
      <p className="text-xs font-semibold text-blue-600">
        {vectorText("理解提示")}</p>

      <div className="mt-2 text-sm leading-7 text-slate-600">
        {vectorText(children)}
      </div>
    </div>
  );
}

function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold text-blue-600">
        {vectorText(number)}
      </p>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">
        {vectorText(title)}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        {vectorText(description)}
      </p>
    </div>
  );
}

function RuleCard({
  title,
  formula,
  explanation,
}: {
  title: string;
  formula: string;
  explanation: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {vectorText(title)}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 px-3 py-3">
        <BlockMath math={formula} />
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {vectorText(explanation)}
      </p>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  formula,
  explanation,
  result,
}: {
  number: string;
  title: string;
  formula: string;
  explanation: string;
  result: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-blue-600">
        {vectorText(number)}
      </p>

      <h3 className="mt-3 font-semibold text-slate-900">
        {vectorText(title)}
      </h3>

      <div className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4">
        <BlockMath math={formula} />
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-700">
        {vectorText("分析与解答")}</p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
        {vectorText(explanation)}
      </p>

      <div className="mt-4 overflow-x-auto rounded-xl border border-emerald-100 bg-emerald-50/40 p-3">
        <BlockMath math={result} />
      </div>
    </div>
  );
}

function MistakeTip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">
        {vectorText(title)}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-500">
        {vectorText(description)}
      </p>
    </div>
  );
}

/* =========================
   三角形向量示意图
========================= */

function TriangleDiagram() {
  return (
    <svg
      viewBox="0 0 520 280"
      className="h-auto w-full"
      role="img"
      aria-label="三角形中的向量首尾相接示意图"
    >
      <defs>
        <marker
          id="app-tri-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>

        <marker
          id="app-tri-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>

        <marker
          id="app-tri-purple"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#7c3aed" />
        </marker>
      </defs>

      <line
        x1="90"
        y1="220"
        x2="405"
        y2="220"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#app-tri-blue)"
      />

      <line
        x1="405"
        y1="220"
        x2="280"
        y2="55"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#app-tri-green)"
      />

      <line
        x1="90"
        y1="220"
        x2="280"
        y2="55"
        stroke="#7c3aed"
        strokeWidth="4"
        markerEnd="url(#app-tri-purple)"
      />

      <circle cx="90" cy="220" r="4" fill="#334155" />
      <circle cx="405" cy="220" r="4" fill="#334155" />
      <circle cx="280" cy="55" r="4" fill="#334155" />

      <text x="70" y="242" fontSize="17" fill="#334155">
        {vectorSvgLabel("A")}</text>
      <text x="412" y="240" fontSize="17" fill="#334155">
        {vectorSvgLabel("B")}</text>
      <text x="277" y="39" fontSize="17" fill="#334155">
        {vectorSvgLabel("C")}</text>

      <text x="240" y="246" fontSize="16" fill="#2563eb">
        {vectorSvgLabel("AB")}</text>
      <text x="366" y="135" fontSize="16" fill="#059669">
        {vectorSvgLabel("BC")}</text>
      <text x="153" y="121" fontSize="16" fill="#7c3aed">
        {vectorSvgLabel("AC")}</text>
    </svg>
  );
}

/* =========================
   三角形重心示意图
========================= */

function CentroidDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="h-auto w-full"
      role="img"
      aria-label="三角形的中线和重心示意图"
    >
      <polygon
        points="75,250 435,250 295,55"
        fill="#f8fafc"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      {/* BC中点M=(365,152.5) */}
      <line
        x1="75"
        y1="250"
        x2="365"
        y2="152.5"
        stroke="#2563eb"
        strokeWidth="2.5"
      />

      {/* 重心G=(268.33,185) */}
      <circle
        cx="268.33"
        cy="185"
        r="5"
        fill="#2563eb"
      />

      <circle cx="75" cy="250" r="4" fill="#334155" />
      <circle cx="435" cy="250" r="4" fill="#334155" />
      <circle cx="295" cy="55" r="4" fill="#334155" />
      <circle cx="365" cy="152.5" r="4" fill="#059669" />

      <text x="56" y="268" fontSize="17" fill="#334155">
        {vectorSvgLabel("A")}</text>
      <text x="440" y="268" fontSize="17" fill="#334155">
        {vectorSvgLabel("B")}</text>
      <text x="288" y="39" fontSize="17" fill="#334155">
        {vectorSvgLabel("C")}</text>
      <text x="376" y="151" fontSize="17" fill="#059669">
        {vectorSvgLabel("M")}</text>
      <text x="258" y="171" fontSize="17" fill="#2563eb">
        {vectorSvgLabel("G")}</text>

      <text x="145" y="197" fontSize="14" fill="#64748b">
        {vectorSvgLabel("AG")}</text>
      <text x="324" y="203" fontSize="14" fill="#64748b">
        {vectorSvgLabel("GM")}</text>

      <text x="170" y="289" fontSize="14" fill="#64748b">
        {vectorSvgLabel("AG : GM = 2 : 1")}</text>
    </svg>
  );
}

/* =========================
   位移示意图
========================= */

function DisplacementDiagram() {
  return (
    <svg
      viewBox="0 0 520 320"
      className="h-auto w-full"
      role="img"
      aria-label="向东3公里向北4公里，合位移5公里的示意图"
    >
      <defs>
        <marker
          id="app-displace-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>

        <marker
          id="app-displace-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>

        <marker
          id="app-displace-purple"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#7c3aed" />
        </marker>
      </defs>

      {/* 东 */}
      <line
        x1="120"
        y1="270"
        x2="300"
        y2="270"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#app-displace-blue)"
      />

      {/* 北 */}
      <line
        x1="300"
        y1="270"
        x2="300"
        y2="30"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#app-displace-green)"
      />

      {/* 合位移 */}
      <line
        x1="120"
        y1="270"
        x2="300"
        y2="30"
        stroke="#7c3aed"
        strokeWidth="4"
        markerEnd="url(#app-displace-purple)"
      />

      <circle cx="120" cy="270" r="4" fill="#334155" />
      <circle cx="300" cy="270" r="4" fill="#334155" />
      <circle cx="300" cy="30" r="4" fill="#334155" />

      <text x="85" y="289" fontSize="16" fill="#334155">
        {vectorSvgLabel("出发点")}</text>

      <text x="308" y="31" fontSize="16" fill="#334155">
        {vectorSvgLabel("终点")}</text>

      <text x="194" y="292" fontSize="16" fill="#2563eb">
        {vectorSvgLabel("3 km")}</text>

      <text x="314" y="158" fontSize="16" fill="#059669">
        {vectorSvgLabel("4 km")}</text>

      <text x="167" y="133" fontSize="17" fill="#7c3aed">
        {vectorSvgLabel("5 km")}</text>

      <text x="367" y="102" fontSize="14" fill="#64748b">
        {vectorSvgLabel("北")}</text>

      <text x="371" y="271" fontSize="14" fill="#64748b">
        {vectorSvgLabel("东")}</text>
    </svg>
  );
}
