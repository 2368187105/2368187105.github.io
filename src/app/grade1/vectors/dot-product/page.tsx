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
      "已知两个平面向量 a=(2,-1)、b=(3,4)，则它们的数量积等于：",
    formula: String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=?`,
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "5" },
      { key: "C", text: "10" },
      { key: "D", text: "14" },
    ],
    answer: "A",
    explanation:
      "根据数量积的坐标公式，a·b=2×3+(-1)×4=6-4=2。",
  },
  {
    id: 2,
    question:
      "已知 a=(1,2)、b=(2,-1)，则两个向量之间的关系是：",
    options: [
      { key: "A", text: "两个向量平行" },
      { key: "B", text: "两个向量垂直" },
      { key: "C", text: "两个向量相等" },
      { key: "D", text: "两个向量互为相反向量" },
    ],
    answer: "B",
    explanation:
      "a·b=1×2+2×(-1)=0。两个向量均为非零向量，因此它们互相垂直。",
  },
  {
    id: 3,
    question:
      "两个非零向量的夹角为120°，那么它们的数量积：",
    options: [
      { key: "A", text: "一定大于 0" },
      { key: "B", text: "一定等于 0" },
      { key: "C", text: "一定小于 0" },
      { key: "D", text: "无法根据夹角判断正负" },
    ],
    answer: "C",
    explanation:
      "数量积等于两个向量模的乘积再乘夹角的余弦。120°是钝角，其余弦为负数，所以数量积小于0。",
  },
];

const sections = [
  ["definition", "01 数量积的定义"],
  ["meaning", "02 数量积的几何意义"],
  ["properties", "03 数量积的性质"],
  ["coordinates", "04 数量积的坐标运算"],
  ["applications", "05 夹角与垂直条件"],
  ["examples", "06 典型例题"],
  ["mistakes", "07 常见易错点"],
  ["quiz", "08 即时检测"],
];

/* =========================
   页面主体
========================= */

export default function VectorDotProductPage() {
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
            {vectorText("平面向量的数量积")}</span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-blue-600">
                {vectorText("第 06 章 · 第 04 节")}</span>

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                {vectorText("核心知识点")}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {vectorText("平面向量的数量积")}</h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              {vectorText("数量积是平面向量的重要运算。 它建立了向量的长度、夹角与坐标之间的联系， 可以帮助我们计算向量夹角、判断垂直关系， 并解决几何中的长度问题。")}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#definition"
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
          {/* 正文 */}
          <div className="min-w-0 space-y-10">
            {/* 第一部分 */}
            <section id="definition" className="scroll-mt-28">
              <SectionTitle
                number="01"
                title="平面向量数量积的定义"
                subtitle="两个向量经过数量积运算，结果是一个实数"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("已知两个非零向量 a、b， 它们的夹角为 θ。 我们把它们的模的乘积与夹角余弦的乘积， 叫作这两个向量的数量积。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}||\overrightarrow{b}|\cos\theta`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("其中，θ 表示两个非零向量之间的夹角， 其取值范围为：")}</p>

              <FormulaBox
                math={String.raw`0^\circ\leq\theta\leq180^\circ`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("数量积也叫作")}<strong className="text-slate-900">
                  {vectorText(" ")}{vectorText("点积或内积")}</strong>
                {vectorText("，通常用一个圆点表示。")}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoCard
                  title="运算对象"
                  description="两个平面向量。"
                />

                <InfoCard
                  title="运算结果"
                  description="一个实数，而不是向量。"
                />
              </div>

              <Note>
                {vectorText("数量积与向量加法不同。 向量加法的结果仍然是向量， 但两个向量的数量积是一个实数。 同时规定，零向量与任意向量的数量积为 0。")}</Note>
            </section>

            {/* 第二部分 */}
            <section
              id="meaning"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="02"
                title="数量积的几何意义"
                subtitle="理解向量模长、夹角与投影的联系"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("将两个非零向量的起点放在一起， 它们之间形成一个夹角 θ。 数量积的值不仅与两个向量的模有关， 还与夹角的大小有关。")}</p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
                <AngleDiagram />

                <p className="mt-3 text-center text-xs text-slate-400">
                  {vectorText("两个向量的夹角及一个向量在另一向量方向上的投影")}</p>
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("投影的概念")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("对非零向量 a 和 b， 向量 b 在向量 a 方向上的数量投影为：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{b}|\cos\theta`}
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                {vectorText("因此，数量积也可以理解为： 向量 a 的模乘以向量 b 在 a 方向上的数量投影。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}|(|\overrightarrow{b}|\cos\theta)`}
              />

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("夹角对数量积的影响")}</h3>

              <div className="mt-5 space-y-4">
                <RuleCard
                  title="两个向量方向相同"
                  formula={String.raw`\theta=0^\circ,\quad\cos\theta=1`}
                  explanation="数量积等于两个向量模的乘积，是正数。"
                />

                <RuleCard
                  title="两个向量垂直"
                  formula={String.raw`\theta=90^\circ,\quad\cos\theta=0`}
                  explanation="数量积等于 0。"
                />

                <RuleCard
                  title="两个向量方向相反"
                  formula={String.raw`\theta=180^\circ,\quad\cos\theta=-1`}
                  explanation="数量积等于两个向量模的乘积的相反数，是负数。"
                />
              </div>

              <Note>
                {vectorText("当两个向量都非零时， 数量积为正数，说明夹角为锐角或零角； 数量积为负数，说明夹角为钝角或平角； 数量积为零，说明两个向量垂直。")}</Note>
            </section>

            {/* 第三部分 */}
            <section
              id="properties"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="03"
                title="数量积的性质与运算律"
                subtitle="掌握常见公式以及运算规律"
              />

              <div className="mt-6 space-y-4">
                <RuleCard
                  title="交换律"
                  formula={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=\overrightarrow{b}\cdot\overrightarrow{a}`}
                  explanation="交换两个向量的顺序，数量积不变。"
                />

                <RuleCard
                  title="数乘结合律"
                  formula={String.raw`(\lambda\overrightarrow{a})\cdot\overrightarrow{b}=\lambda(\overrightarrow{a}\cdot\overrightarrow{b})`}
                  explanation="数乘系数可以提到数量积外面。"
                />

                <RuleCard
                  title="分配律"
                  formula={String.raw`(\overrightarrow{a}+\overrightarrow{b})\cdot\overrightarrow{c}=\overrightarrow{a}\cdot\overrightarrow{c}+\overrightarrow{b}\cdot\overrightarrow{c}`}
                  explanation="向量和的数量积可以分别计算再相加。"
                />

                <RuleCard
                  title="向量与自身的数量积"
                  formula={String.raw`\overrightarrow{a}\cdot\overrightarrow{a}=|\overrightarrow{a}|^2`}
                  explanation="向量与自身的数量积等于模的平方。"
                />

                <RuleCard
                  title="数量积的取值范围"
                  formula={String.raw`-|\overrightarrow{a}||\overrightarrow{b}|\leq\overrightarrow{a}\cdot\overrightarrow{b}\leq|\overrightarrow{a}||\overrightarrow{b}|`}
                  explanation="由于余弦函数的值介于 -1 和 1 之间，数量积也受到相应限制。"
                />
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("向量模长与数量积")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("利用向量与自身的数量积， 可以直接得到向量的模长公式：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{a}|=\sqrt{\overrightarrow{a}\cdot\overrightarrow{a}}`}
              />

              <Note>
                {vectorText("数量积满足交换律、数乘结合律和分配律， 但一般不满足结合律。 不要把三个向量的数量积直接写成普通实数乘法那样的结合形式。")}</Note>
            </section>

            {/* 第四部分 */}
            <section
              id="coordinates"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="04"
                title="数量积的坐标表示"
                subtitle="横坐标相乘加上纵坐标相乘"
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("在平面直角坐标系中， 设两个向量的坐标分别为：")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}=(x_1,y_1),\quad\overrightarrow{b}=(x_2,y_2)`}
              />

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("那么两个向量的数量积可以直接通过坐标计算：")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=x_1x_2+y_1y_2`}
              />

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  {vectorText("计算示例")}</p>

                <FormulaBox
                  math={String.raw`\overrightarrow{a}=(2,3),\quad\overrightarrow{b}=(4,-1)`}
                />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {vectorText("按照对应坐标分别相乘再相加：")}</p>

                <BlockMath
                  math={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=2\times4+3\times(-1)`}
                />

                <BlockMath math={String.raw`=8-3=5`} />
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-900">
                {vectorText("向量模长的坐标公式")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("对于向量 a=(x,y)， 由向量与自身的数量积可得：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{a}|=\sqrt{x^2+y^2}`}
              />

              <Note>
                {vectorText("计算数量积时不是“横坐标和纵坐标分别相乘后组成一个新向量”， 而是把两个乘积相加，得到一个实数。")}</Note>
            </section>

            {/* 第五部分 */}
            <section
              id="applications"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="05"
                title="数量积的三个重要应用"
                subtitle="判断垂直、求夹角、求模长"
              />

              <h3 className="mt-6 text-base font-semibold text-slate-900">
                {vectorText("1. 判断两个向量是否垂直")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("对于两个非零向量， 当且仅当它们的数量积等于 0 时， 两个向量互相垂直。")}</p>

              <FormulaBox
                math={String.raw`\overrightarrow{a}\perp\overrightarrow{b}\iff\overrightarrow{a}\cdot\overrightarrow{b}=0`}
              />

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <PerpendicularDiagram />
                <p className="mt-3 text-center text-xs text-slate-400">
                  {vectorText("两个非零向量互相垂直，夹角为 90°")}</p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {vectorText("对于两个非零向量的坐标：")}</p>

              <FormulaBox
                math={String.raw`x_1x_2+y_1y_2=0`}
              />

              <h3 className="mt-9 text-base font-semibold text-slate-900">
                {vectorText("2. 计算两个向量的夹角")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("对两个非零向量， 数量积公式可以变形成求夹角的公式：")}</p>

              <FormulaBox
                math={String.raw`\cos\theta=\frac{\overrightarrow{a}\cdot\overrightarrow{b}}{|\overrightarrow{a}||\overrightarrow{b}|}`}
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                {vectorText("如果已知两个向量的坐标， 则可以直接计算：")}</p>

              <FormulaBox
                math={String.raw`\cos\theta=\frac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\sqrt{x_2^2+y_2^2}}`}
              />

              <h3 className="mt-9 text-base font-semibold text-slate-900">
                {vectorText("3. 利用数量积求向量模长")}</h3>

              <p className="mt-3 text-sm leading-8 text-slate-600">
                {vectorText("利用数量积的分配律可以得到：")}</p>

              <FormulaBox
                math={String.raw`|\overrightarrow{a}+\overrightarrow{b}|^2=|\overrightarrow{a}|^2+2\overrightarrow{a}\cdot\overrightarrow{b}+|\overrightarrow{b}|^2`}
              />

              <FormulaBox
                math={String.raw`|\overrightarrow{a}-\overrightarrow{b}|^2=|\overrightarrow{a}|^2-2\overrightarrow{a}\cdot\overrightarrow{b}+|\overrightarrow{b}|^2`}
              />

              <Note>
                {vectorText("两个非零向量的夹角计算， 一般按照“先求数量积，再求模长，最后求余弦值”的顺序进行。 注意夹角范围是 0° 到 180°。")}</Note>
            </section>

            {/* 第六部分 */}
            <section
              id="examples"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="06"
                title="典型例题"
                subtitle="掌握数量积的常见解题方法"
              />

              <div className="mt-6 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="根据定义计算数量积"
                  formula={String.raw`|\overrightarrow{a}|=3,\quad|\overrightarrow{b}|=4,\quad\theta=60^\circ`}
                  explanation="根据定义，数量积等于两向量模的乘积与夹角余弦的乘积。因为 cos60°=1/2，所以结果为 6。"
                  result={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=3\times4\times\frac12=6`}
                />

                <ExampleCard
                  number="例题 2"
                  title="根据坐标计算数量积"
                  formula={String.raw`\overrightarrow{a}=(2,3),\quad\overrightarrow{b}=(4,-1)`}
                  explanation="对应横坐标相乘，再加上对应纵坐标的乘积：2×4+3×(-1)=5。"
                  result={String.raw`\overrightarrow{a}\cdot\overrightarrow{b}=5`}
                />

                <ExampleCard
                  number="例题 3"
                  title="根据垂直条件求参数"
                  formula={String.raw`\overrightarrow{a}=(2,k),\quad\overrightarrow{b}=(3,-4),\quad\overrightarrow{a}\perp\overrightarrow{b}`}
                  explanation="因为两个非零向量垂直，所以数量积为零。得到 2×3+k×(-4)=0，即 6-4k=0。"
                  result={String.raw`k=\frac32`}
                />

                <ExampleCard
                  number="例题 4"
                  title="求两个向量的夹角"
                  formula={String.raw`\overrightarrow{a}=(1,0),\quad\overrightarrow{b}=(1,\sqrt3)`}
                  explanation="数量积为 1，两个向量的模分别为 1 和 2。因此 cosθ=1/2，又因为夹角在0°到180°之间，所以θ=60°。"
                  result={String.raw`\theta=60^\circ`}
                />

                <ExampleCard
                  number="例题 5"
                  title="利用数量积求向量和的模"
                  formula={String.raw`|\overrightarrow{a}|=3,\quad|\overrightarrow{b}|=4,\quad\overrightarrow{a}\cdot\overrightarrow{b}=6`}
                  explanation="根据向量和的模长平方公式，|a+b|²=9+12+16=37。"
                  result={String.raw`|\overrightarrow{a}+\overrightarrow{b}|=\sqrt{37}`}
                />
              </div>
            </section>

            {/* 第七部分 */}
            <section
              id="mistakes"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="07"
                title="常见易错点"
                subtitle="数量积和普通数量运算并不完全一样"
              />

              <div className="mt-6 space-y-3">
                <MistakeTip
                  title="误认为数量积的结果是向量"
                  description="两个向量做数量积运算，结果是一个实数，而不是新的向量。"
                />

                <MistakeTip
                  title="忽略向量夹角"
                  description="根据定义计算数量积时，不仅需要两个模长，还需要夹角的余弦。"
                />

                <MistakeTip
                  title="混淆数量积与坐标乘法"
                  description="数量积的坐标计算是 x₁x₂+y₁y₂，而不是把两个乘积组成一个坐标。"
                />

                <MistakeTip
                  title="没有考虑零向量"
                  description="如果数量积等于0，不能直接断定任意两个向量都垂直；应用垂直判定时要注意两个向量均非零。"
                />

                <MistakeTip
                  title="求夹角时忘记计算模长"
                  description="两个向量的夹角余弦等于数量积除以两个向量模长的乘积，不能只计算数量积。"
                />

                <MistakeTip
                  title="错误套用结合律"
                  description="数量积一般不满足结合律，不能像三个实数相乘一样随意添加括号。"
                />
              </div>
            </section>

            {/* 第八部分 */}
            <section
              id="quiz"
              className="scroll-mt-28 border-t border-slate-200 pt-9"
            >
              <SectionTitle
                number="08"
                title="即时检测"
                subtitle="完成 3 道题，检查数量积的掌握情况"
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
                          const chosen =
                            selected === option.key;

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
                      ? "三个问题全部答对，可以继续学习平面向量的综合应用。"
                      : "建议复习数量积的坐标公式、夹角以及垂直条件，再重新作答。")}
                  </p>
                </div>
              ))}
            </section>

            {/* 底部导航 */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link
                href="/grade1/vectors/coordinates"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {vectorText("← 上一节：基本定理与坐标表示")}</Link>

              <span className="text-sm text-slate-400">
                {vectorText("下一节：平面向量的综合应用")}</span>
            </div>
          </div>

          {/* 右侧学习目录 */}
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
                    "数量积定义",
                    "夹角",
                    "投影",
                    "坐标运算",
                    "垂直条件",
                    "向量模长",
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
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-blue-600">
        {vectorText(title)}
      </p>

      <p className="mt-2 text-sm leading-7 text-slate-600">
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
   数量积夹角与投影示意图
========================= */

function AngleDiagram() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="h-auto w-full"
      role="img"
      aria-label="两个向量之间的夹角与投影示意图"
    >
      <defs>
        <marker
          id="dot-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>

        <marker
          id="dot-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>
      </defs>

      {/* 向量 a */}
      <line
        x1="110"
        y1="228"
        x2="390"
        y2="228"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#dot-blue)"
      />

      {/* 向量 b */}
      <line
        x1="110"
        y1="228"
        x2="225"
        y2="29"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#dot-green)"
      />

      {/* 投影辅助线 */}
      <line
        x1="225"
        y1="29"
        x2="225"
        y2="228"
        stroke="#94a3b8"
        strokeWidth="2"
        strokeDasharray="6 6"
      />

      {/* 垂足标记 */}
      <path
        d="M225 216 H237 V228"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.5"
      />

      {/* 夹角弧线 */}
      <path
        d="M167 228 A57 57 0 0 0 139 179"
        fill="none"
        stroke="#64748b"
        strokeWidth="2"
      />

      <circle cx="110" cy="228" r="4" fill="#334155" />

      <text x="93" y="249" fontSize="17" fill="#334155">
        {vectorSvgLabel("O")}</text>

      <text x="280" y="213" fontSize="19" fill="#2563eb">
        {vectorSvgLabel("a")}</text>

      <text x="143" y="112" fontSize="19" fill="#059669">
        {vectorSvgLabel("b")}</text>

      <text x="166" y="183" fontSize="21" fill="#64748b">
        {vectorSvgLabel("θ")}</text>

      <text x="230" y="252" fontSize="14" fill="#64748b">
        {vectorSvgLabel("投影位置")}</text>

      <text x="108" y="281" fontSize="14" fill="#64748b">
        {vectorSvgLabel("向量的数量积与模长、夹角有关")}</text>
    </svg>
  );
}

/* =========================
   垂直向量示意图
========================= */

function PerpendicularDiagram() {
  return (
    <svg
      viewBox="0 0 520 260"
      className="h-auto w-full"
      role="img"
      aria-label="两个非零向量互相垂直的示意图"
    >
      <defs>
        <marker
          id="perp-blue"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#2563eb" />
        </marker>

        <marker
          id="perp-green"
          markerWidth="9"
          markerHeight="9"
          refX="8"
          refY="4.5"
          orient="auto"
        >
          <path d="M0 0 L9 4.5 L0 9 Z" fill="#059669" />
        </marker>
      </defs>

      {/* 水平向量 */}
      <line
        x1="125"
        y1="205"
        x2="390"
        y2="205"
        stroke="#2563eb"
        strokeWidth="4"
        markerEnd="url(#perp-blue)"
      />

      {/* 竖直向量 */}
      <line
        x1="125"
        y1="205"
        x2="125"
        y2="35"
        stroke="#059669"
        strokeWidth="4"
        markerEnd="url(#perp-green)"
      />

      {/* 直角标记 */}
      <path
        d="M125 180 H150 V205"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      <circle cx="125" cy="205" r="4" fill="#334155" />

      <text x="106" y="226" fontSize="17" fill="#334155">
        {vectorSvgLabel("O")}</text>

      <text x="267" y="189" fontSize="19" fill="#2563eb">
        {vectorSvgLabel("a")}</text>

      <text x="106" y="113" fontSize="19" fill="#059669">
        {vectorSvgLabel("b")}</text>

      <text x="164" y="178" fontSize="18" fill="#64748b">
        {vectorSvgLabel("90°")}</text>

      <text x="280" y="246" fontSize="14" fill="#64748b">
        {vectorSvgLabel("数量积为 0")}</text>
    </svg>
  );
}
