
"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import GeometryFigures from "@/components/GeometryFigures";

type Option = {
  key: string;
  text: string;
};

type Question = {
  id: string;
  title: string;
  question: string;
  options: Option[];
  answer: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: "lp-001",
    title: "直线与平面平行的判定",
    question:
      "已知直线 l 不在平面 α 内，直线 m 在平面 α 内，且 l ∥ m，则 l 与平面 α 的位置关系是：",
    options: [
      { key: "A", text: "l 与 α 相交" },
      { key: "B", text: "l ∥ α" },
      { key: "C", text: "l 垂直于 α" },
      { key: "D", text: "无法判断" },
    ],
    answer: "B",
    explanation:
      "直线 l 不在平面 α 内，且 l 平行于平面 α 内的一条直线 m，根据直线与平面平行的判定定理，l ∥ α。",
  },
  {
    id: "lp-002",
    title: "直线与平面垂直的判定",
    question:
      "若直线 l 与平面 α 内两条相交直线 m、n 都垂直，则下列结论正确的是：",
    options: [
      { key: "A", text: "l ∥ α" },
      { key: "B", text: "l 在平面 α 内" },
      { key: "C", text: "l ⊥ α" },
      { key: "D", text: "l 与 α 没有公共点" },
    ],
    answer: "C",
    explanation:
      "直线与平面垂直的判定定理：如果一条直线与平面内两条相交直线都垂直，那么这条直线与该平面垂直。",
  },
  {
    id: "lp-003",
    title: "平行关系的性质",
    question:
      "已知 l ∥ α，平面 β 经过直线 l，且平面 α 与 β 相交于直线 m，则：",
    options: [
      { key: "A", text: "l 与 m 相交" },
      { key: "B", text: "l 与 m 异面" },
      { key: "C", text: "l ∥ m" },
      { key: "D", text: "l ⊥ m" },
    ],
    answer: "C",
    explanation:
      "根据直线与平面平行的性质定理，若直线 l 平行于平面 α，平面 β 经过 l 并与 α 相交于 m，则 l ∥ m。",
  },
  {
    id: "lp-004",
    title: "垂直关系的理解",
    question:
      "如果直线 l 垂直于平面 α，垂足为 O，直线 m 在平面 α 内且经过 O，那么：",
    options: [
      { key: "A", text: "l ∥ m" },
      { key: "B", text: "l ⊥ m" },
      { key: "C", text: "l 与 m 异面" },
      { key: "D", text: "无法判断" },
    ],
    answer: "B",
    explanation:
      "直线 l 垂直于平面 α，因此它垂直于平面 α 内经过垂足 O 的任意直线，故 l ⊥ m。",
  },
];

const lessons = [
  {
    number: "01",
    title: "空间几何体",
    href: "/grade1/solid-geometry/spatial-solids",
    ready: true,
  },
  {
    number: "02",
    title: "空间几何体的表面积与体积",
    href: "/grade1/solid-geometry/surface-volume",
    ready: true,
  },
  {
    number: "03",
    title: "空间点、直线与平面的位置关系",
    href: "/grade1/solid-geometry/spatial-relations",
    ready: true,
  },
  {
    number: "04",
    title: "直线与平面的位置关系",
    href: "/grade1/solid-geometry/line-plane-relations",
    ready: true,
  },
  {
    number: "05",
    title: "平面与平面的位置关系",
    href: "/grade1/solid-geometry/plane-plane-relations",
    ready: false,
  },
];

export default function LinePlaneRelationsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter(
    (question) => answers[question.id] === question.answer
  ).length;

  function selectAnswer(id: string, key: string) {
    setAnswers((previous) => ({
      ...previous,
      [id]: key,
    }));
    setSubmitted(false);
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade1" className="hover:text-blue-600">
            高一数学
          </Link>
          <span>/</span>
          <Link
            href="/grade1/solid-geometry"
            className="hover:text-blue-600"
          >
            立体几何初步
          </Link>
          <span>/</span>
          <span className="text-slate-700">
            直线与平面的位置关系
          </span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 08
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 4 节 · 直线与平面
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            直线与平面的位置关系
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            学习直线与平面平行、垂直的判定定理和性质定理，
            理解空间中的平行与垂直关系，掌握常见证明题的基本思路。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#goals"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              开始学习
            </a>
            <a
              href="#practice"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              课后练习
            </a>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-6">
            <section
              id="goals"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <Heading
                eyebrow="LEARNING GOALS"
                title="一、本节学习目标"
              />

              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <li>• 掌握直线与平面平行的判定和性质。</li>
                <li>• 掌握直线与平面垂直的判定和性质。</li>
                <li>• 能够区分判定定理与性质定理。</li>
                <li>• 能够利用线面关系解决简单的空间几何问题。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="POSITION RELATIONSHIPS"
                title="二、直线与平面的三种位置关系"
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                空间中，一条直线与一个平面的位置关系有三种。
                判断时，关键是看直线与平面有多少个公共点。
              </p>

              <div className="mt-5 space-y-4">
                <ConceptCard
                  number="01"
                  title="直线在平面内"
                  formula="l ⊂ α"
                  description="直线上的所有点都在平面 α 内，因此直线与平面有无数个公共点。"
                  example="平面内的一条直线，完全位于该平面中。"
                />

                <ConceptCard
                  number="02"
                  title="直线与平面相交"
                  formula="l ∩ α = {P}"
                  description="直线与平面只有一个公共点 P。直线与平面垂直是相交关系中的特殊情况。"
                  example="一根竖直杆穿过水平桌面，杆与桌面的交点就是公共点。"
                />

                <ConceptCard
                  number="03"
                  title="直线与平面平行"
                  formula="l ∥ α"
                  description="直线与平面没有公共点。按照高中立体几何的定义，直线不在平面内且与平面内的一条直线平行时，可以判定直线与平面平行。"
                  example="想象桌面上方一根水平直杆，它与桌面平行且不接触桌面。"
                />
              </div>

              <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                注意：直线与平面平行，要求直线不在该平面内。
                不能只凭图形看起来没有交点就直接下结论，通常需要使用判定定理。
              </div>
              <GeometryFigures kind="line-plane-positions" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="LINE-PLANE PARALLELISM"
                title="三、直线与平面平行"
              />

              <RuleCard
                number="01"
                title="判定定理"
                rule="如果平面外的一条直线与这个平面内的一条直线平行，那么这条直线与该平面平行。"
                formula="l ∉ α，m ⊂ α，l ∥ m  ⇒  l ∥ α"
                example="先在平面 α 内找到直线 m，再证明平面外的直线 l 与 m 平行，即可证明 l ∥ α。"
              />

              <RuleCard
                number="02"
                title="性质定理"
                rule="如果一条直线与一个平面平行，经过这条直线的平面与已知平面相交，那么交线与这条直线平行。"
                formula="l ∥ α，l ⊂ β，α ∩ β = m  ⇒  l ∥ m"
                example="证明两条空间直线平行时，可以构造一个平面，利用平面交线把空间问题转化为平面内的平行问题。"
              />

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                <h3 className="font-bold text-slate-900">
                  解题步骤
                </h3>
                <ol className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>1. 明确需要证明哪条直线与哪个平面平行。</li>
                  <li>2. 在已知平面内寻找一条合适的直线。</li>
                  <li>3. 证明两条直线平行。</li>
                  <li>4. 检查平面外的条件，再使用判定定理。</li>
                </ol>
              </div>
              <GeometryFigures kind="line-plane-parallel" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="LINE-PLANE PERPENDICULARITY"
                title="四、直线与平面垂直"
              />

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">
                  1. 定义
                </h3>

                <p className="mt-3 text-sm leading-8 text-slate-600">
                  如果一条直线与一个平面内经过垂足的任意直线都垂直，
                  那么这条直线与该平面垂直。
                </p>

                <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center text-lg text-slate-800">
                  l ⊥ α
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  直线与平面垂直时，直线和平面的公共点称为垂足。
                </p>
              </div>

              <div className="mt-4">
                <RuleCard
                  number="02"
                  title="判定定理"
                  rule="如果一条直线与一个平面内的两条相交直线都垂直，那么这条直线与该平面垂直。"
                  formula="m ⊂ α，n ⊂ α，m ∩ n = O，l ⊥ m，l ⊥ n  ⇒  l ⊥ α"
                  example="证明线面垂直时，通常先找出平面内相交的两条直线，再分别证明已知直线与它们垂直。"
                />
              </div>

              <div className="mt-4">
                <RuleCard
                  number="03"
                  title="性质定理"
                  rule="如果一条直线垂直于一个平面，那么它垂直于该平面内经过垂足的任意直线。"
                  formula="l ⊥ α，m ⊂ α，O ∈ l ∩ α，O ∈ m  ⇒  l ⊥ m"
                  example="已知直线垂直于平面后，可以直接推出它与平面内经过垂足的直线垂直。"
                />
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-900">
                  判定直线与平面垂直，需要证明直线与平面内两条相交直线都垂直。
                  只有两条直线平行，不能使用这个判定定理。
                </p>
              </div>
              <GeometryFigures kind="line-plane-perpendicular" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="WORKED EXAMPLES"
                title="五、典型例题"
              />

              <div className="mt-5 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="利用线面平行判定定理"
                  question="已知直线 l 不在平面 α 内，直线 m 在平面 α 内，且 l ∥ m。证明 l ∥ α。"
                  steps={[
                    "由题意，m ⊂ α。",
                    "已知 l ∥ m。",
                    "又因为 l 不在平面 α 内。",
                    "根据直线与平面平行的判定定理，得到 l ∥ α。",
                  ]}
                  answer="l ∥ α。"
                  analysis="关键是同时使用两个条件：直线 l 平行于平面 α 内的直线 m，且直线 l 不在平面 α 内。"
                />

                <ExampleCard
                  number="例题 2"
                  title="利用线面垂直判定定理"
                  question="已知 m、n 是平面 α 内相交的两条直线，直线 l 同时垂直于 m、n。证明 l ⊥ α。"
                  steps={[
                    "已知 m、n 都在平面 α 内。",
                    "已知 m、n 相交。",
                    "已知 l ⊥ m 且 l ⊥ n。",
                    "根据直线与平面垂直的判定定理，得到 l ⊥ α。",
                  ]}
                  answer="l ⊥ α。"
                  analysis="证明线面垂直时，必须确认平面内的两条直线相交。仅有两条平行直线不满足该判定定理的条件。"
                />
              </div>
            </section>

            <section
              id="practice"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <Heading
                eyebrow="QUICK PRACTICE"
                title="六、课后练习"
              />

              <p className="mt-3 text-sm leading-7 text-slate-500">
                完成四道选择题后提交，查看得分和逐题解析。
              </p>

              <div className="mt-6 space-y-6">
                {questions.map((question, index) => {
                  const selected = answers[question.id];
                  const correct = selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <p className="text-xs font-semibold text-blue-600">
                        练习 {index + 1} · {question.title}
                      </p>

                      <h3 className="mt-3 text-sm font-semibold leading-7 text-slate-900">
                        {question.question}
                      </h3>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {question.options.map((option) => {
                          const chosen = selected === option.key;
                          const isCorrectOption =
                            submitted && option.key === question.answer;
                          const isWrongChoice =
                            submitted && chosen && !correct;

                          let style =
                            "border-slate-200 bg-white text-slate-600 hover:bg-slate-50";

                          if (isCorrectOption) {
                            style =
                              "border-emerald-300 bg-emerald-50 text-emerald-800";
                          } else if (isWrongChoice) {
                            style =
                              "border-red-300 bg-red-50 text-red-700";
                          } else if (chosen) {
                            style =
                              "border-blue-300 bg-blue-50 text-blue-700";
                          }

                          return (
                            <button
                              key={option.key}
                              type="button"
                              onClick={() =>
                                selectAnswer(question.id, option.key)
                              }
                              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${style}`}
                            >
                              <strong className="mr-2">
                                {option.key}.
                              </strong>
                              {option.text}
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-4 rounded-lg bg-slate-50 p-4">
                          <p
                            className={`text-sm font-semibold ${
                              correct
                                ? "text-emerald-700"
                                : "text-red-700"
                            }`}
                          >
                            {correct
                              ? "回答正确"
                              : `回答错误，正确答案是 ${question.answer}`}
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  disabled={
                    Object.keys(answers).length !== questions.length
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  提交答案
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  重新作答
                </button>

                {submitted && (
                  <span className="text-sm font-semibold text-slate-700">
                    本次得分：{score} / {questions.length}
                  </span>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
              <Heading
                eyebrow="KEY TAKEAWAYS"
                title="七、本节小结"
              />

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 直线与平面有三种位置关系：在平面内、相交、平行。</li>
                <li>• 线面平行的判定：平面外的直线平行于平面内的一条直线。</li>
                <li>• 线面平行的性质：通过该直线的平面与已知平面的交线平行于该直线。</li>
                <li>• 线面垂直的判定：直线垂直于平面内两条相交直线。</li>
                <li>• 线面垂直的性质：直线垂直于平面内经过垂足的直线。</li>
                <li>• 证明题中先核对定理的适用条件，再写出结论。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/solid-geometry/spatial-relations"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                ← 上一节：空间点、直线与平面
              </Link>

              <Link
                href="/grade1/solid-geometry/plane-plane-relations"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                下一节：平面与平面的位置关系 →
              </Link>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CHAPTER 08
              </p>

              <h2 className="mt-2 text-lg font-bold text-slate-900">
                立体几何初步
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                本节重点掌握线面平行与线面垂直的判定、性质及其证明方法。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 4 / 5 节
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                本章课程目录
              </h2>

              <div className="mt-4 space-y-2">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.number}
                    className={`rounded-xl border p-3 ${
                      lesson.number === "04"
                        ? "border-blue-200 bg-blue-50/60"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 text-xs font-bold ${
                          lesson.number === "04"
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {lesson.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        {lesson.ready ? (
                          <Link
                            href={lesson.href}
                            className="text-sm font-semibold leading-6 text-slate-800 hover:text-blue-600"
                          >
                            {lesson.title}
                          </Link>
                        ) : (
                          <p className="text-sm font-semibold leading-6 text-slate-500">
                            {lesson.title}
                          </p>
                        )}

                        {lesson.number === "04" && (
                          <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                            当前学习
                          </span>
                        )}

                        {!lesson.ready && (
                          <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-400">
                            待开发
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                学习建议
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                线面平行证明通常先寻找平面内的平行线；
                线面垂直证明通常先寻找平面内的两条相交直线。
                做题时尤其注意判定定理的前提条件。
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Heading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function ConceptCard({
  number,
  title,
  formula,
  description,
  example,
}: {
  number: string;
  title: string;
  formula: string;
  description: string;
  example: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
          {number}
        </span>
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>

      <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center font-serif text-lg text-slate-800">
        {formula}
      </div>

      <p className="mt-3 text-sm leading-8 text-slate-600">
        {description}
      </p>

      <p className="mt-3 rounded-lg bg-blue-50/60 px-4 py-3 text-sm leading-7 text-slate-600">
        <strong className="text-slate-800">理解示例：</strong>
        {example}
      </p>
    </div>
  );
}

function RuleCard({
  number,
  title,
  rule,
  formula,
  example,
}: {
  number: string;
  title: string;
  rule: string;
  formula: string;
  example: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
          {number}
        </span>
        <h3 className="font-bold text-slate-900">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-8 text-slate-700">
        {rule}
      </p>

      <div className="mt-3 overflow-x-auto rounded-lg bg-slate-50 px-4 py-4 text-center font-serif text-base leading-8 text-slate-800">
        {formula}
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        <strong className="text-slate-700">应用示例：</strong>
        {example}
      </p>
    </div>
  );
}

function ExampleCard({
  number,
  title,
  question,
  steps,
  answer,
  analysis,
}: {
  number: string;
  title: string;
  question: string;
  steps: string[];
  answer: string;
  analysis: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-5">
      <p className="text-xs font-semibold text-blue-600">
        {number}
      </p>

      <h3 className="mt-2 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {question}
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">
          解题步骤
        </p>

        <ol className="mt-3 space-y-2">
          {steps.map((step, index) => (
            <li
              key={index}
              className="text-sm leading-7 text-slate-600"
            >
              {index + 1}. {step}
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-emerald-800">
        结论：{answer}
      </p>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        <strong className="text-slate-700">解析：</strong>
        {analysis}
      </p>
    </div>
  );
}
