
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
    id: "pp-001",
    title: "两个平面的基本位置关系",
    question: "两个不同的平面有一个公共点，那么它们的位置关系是：",
    options: [
      { key: "A", text: "两个平面平行" },
      { key: "B", text: "两个平面相交，交集是一条直线" },
      { key: "C", text: "两个平面只有一个公共点" },
      { key: "D", text: "两个平面一定重合" },
    ],
    answer: "B",
    explanation:
      "两个不同的平面如果有公共点，就一定相交，且交集是一条直线。两个平面不可能只有一个公共点。",
  },
  {
    id: "pp-002",
    title: "平面平行的判定",
    question:
      "平面 α 内有两条相交直线 a、b，且 a ∥ β、b ∥ β，则 α 与 β 的位置关系是：",
    options: [
      { key: "A", text: "α 与 β 相交" },
      { key: "B", text: "α 与 β 垂直" },
      { key: "C", text: "α ∥ β" },
      { key: "D", text: "无法判断" },
    ],
    answer: "C",
    explanation:
      "如果一个平面内的两条相交直线都平行于另一个平面，那么这两个平面平行。这是平面与平面平行的判定定理。",
  },
  {
    id: "pp-003",
    title: "平面垂直的判定",
    question:
      "平面 α 经过直线 l，且 l ⊥ 平面 β，则 α 与 β 的位置关系是：",
    options: [
      { key: "A", text: "α ∥ β" },
      { key: "B", text: "α 与 β 重合" },
      { key: "C", text: "α 与 β 垂直" },
      { key: "D", text: "无法判断" },
    ],
    answer: "C",
    explanation:
      "如果一个平面经过另一平面的垂线，那么这两个平面互相垂直。这是平面与平面垂直的判定定理。",
  },
  {
    id: "pp-004",
    title: "面面垂直的性质",
    question:
      "已知 α ⊥ β，α 与 β 的交线为 m。直线 l 在平面 α 内，且 l ⊥ m，则：",
    options: [
      { key: "A", text: "l ∥ β" },
      { key: "B", text: "l ⊥ β" },
      { key: "C", text: "l ∥ m" },
      { key: "D", text: "无法判断" },
    ],
    answer: "B",
    explanation:
      "两个平面互相垂直时，一个平面内垂直于交线的直线垂直于另一个平面。因此 l ⊥ β。",
  },
];

const lessons = [
  {
    number: "01",
    title: "空间几何体",
    href: "/grade1/solid-geometry/spatial-solids",
  },
  {
    number: "02",
    title: "空间几何体的表面积与体积",
    href: "/grade1/solid-geometry/surface-volume",
  },
  {
    number: "03",
    title: "空间点、直线与平面的位置关系",
    href: "/grade1/solid-geometry/spatial-relations",
  },
  {
    number: "04",
    title: "直线与平面的位置关系",
    href: "/grade1/solid-geometry/line-plane-relations",
  },
  {
    number: "05",
    title: "平面与平面的位置关系",
    href: "/grade1/solid-geometry/plane-plane-relations",
  },
];

export default function PlanePlaneRelationsPage() {
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
            平面与平面的位置关系
          </span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 08
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 5 节 · 平面与平面
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            平面与平面的位置关系
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            学习两个平面平行、垂直的判定与性质，掌握面面关系的判断方法，
            并学会利用线面关系解决简单的空间几何证明问题。
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
                <li>• 了解两个平面的三种位置关系。</li>
                <li>• 掌握平面与平面平行的判定和性质。</li>
                <li>• 掌握平面与平面垂直的判定和性质。</li>
                <li>• 能够综合运用线线、线面和面面关系进行简单证明。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="BASIC CONCEPTS"
                title="二、两个平面的三种位置关系"
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                空间中两个平面可能重合、相交或平行。
                判断两个不同平面的位置关系，关键是看它们是否有公共点。
              </p>

              <div className="mt-5 space-y-4">
                <ConceptCard
                  number="01"
                  title="两个平面重合"
                  formula="α = β"
                  description="两个平面完全重合，具有相同的所有点。"
                  example="可以理解为两个完全重叠的平面。"
                />

                <ConceptCard
                  number="02"
                  title="两个平面相交"
                  formula="α ∩ β = l"
                  description="两个不同的平面有公共点时，它们相交，交集是一条直线 l。"
                  example="教室的墙面与地面相交，它们的交线可以帮助理解面面相交。"
                />

                <ConceptCard
                  number="03"
                  title="两个平面平行"
                  formula="α ∥ β"
                  description="两个平面没有公共点，称为两个平面平行。"
                  example="可以想象上下分离的两块水平桌面，它们没有公共点。"
                />
              </div>

              <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                注意：两个不同的平面，如果有一个公共点，就一定相交于一条直线，
                不可能只有一个公共点。
              </div>
              <GeometryFigures kind="plane-plane-positions" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="PLANE PARALLELISM"
                title="三、平面与平面平行"
              />

              <RuleCard
                number="01"
                title="判定定理"
                rule="如果一个平面内有两条相交直线都平行于另一个平面，那么这两个平面平行。"
                formula="a ⊂ α，b ⊂ α，a ∩ b ≠ ∅，a ∥ β，b ∥ β  ⇒  α ∥ β"
                example="证明两个平面平行时，可以先在其中一个平面内找到两条相交直线，再证明它们都平行于另一个平面。"
              />

              <div className="mt-4">
                <RuleCard
                  number="02"
                  title="性质定理"
                  rule="如果两个平面平行，那么一个平面内的任意一条直线都平行于另一个平面。"
                  formula="α ∥ β，l ⊂ α  ⇒  l ∥ β"
                  example="已知两个平面平行后，可以直接推出其中一个平面内的直线与另一个平面平行。"
                />
              </div>

              <div className="mt-4">
                <RuleCard
                  number="03"
                  title="平行平面的交线性质"
                  rule="如果两个平行平面同时与第三个平面相交，那么两条交线平行。"
                  formula="α ∥ β，α ∩ γ = a，β ∩ γ = b  ⇒  a ∥ b"
                  example="在空间证明两条直线平行时，可以寻找两个平行平面与同一平面的交线。"
                />
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
                <h3 className="font-bold text-slate-900">
                  解题思路
                </h3>
                <ol className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>1. 明确要证明的两个平面。</li>
                  <li>2. 在其中一个平面内寻找两条相交直线。</li>
                  <li>3. 分别证明这两条直线平行于另一个平面。</li>
                  <li>4. 检查相交条件后，使用面面平行判定定理。</li>
                </ol>
              </div>
              <GeometryFigures kind="plane-plane-parallel" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="PLANE PERPENDICULARITY"
                title="四、平面与平面垂直"
              />

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">
                  1. 定义
                </h3>

                <p className="mt-3 text-sm leading-8 text-slate-600">
                  两个平面相交，如果它们所成的二面角为直二面角，
                  即平面角为 90°，那么这两个平面互相垂直。
                </p>

                <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center font-serif text-lg text-slate-800">
                  α ⊥ β
                </div>
              </div>

              <div className="mt-4">
                <RuleCard
                  number="02"
                  title="判定定理"
                  rule="如果一个平面经过另一平面的一条垂线，那么这两个平面互相垂直。"
                  formula="l ⊂ α，l ⊥ β  ⇒  α ⊥ β"
                  example="证明面面垂直时，可以先找到一个平面内的直线，再证明这条直线垂直于另一个平面。"
                />
              </div>

              <div className="mt-4">
                <RuleCard
                  number="03"
                  title="性质定理"
                  rule="如果两个平面互相垂直，那么在一个平面内，垂直于它们交线的直线垂直于另一个平面。"
                  formula="α ⊥ β，m = α ∩ β，l ⊂ α，l ⊥ m  ⇒  l ⊥ β"
                  example="已知两个平面垂直后，可以通过证明直线垂直于交线，进一步推出直线垂直于另一个平面。"
                />
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-900">
                  证明两个平面垂直时，不能只证明它们相交。
                  还需要使用判定定理，找到其中一个平面内垂直于另一个平面的直线。
                </p>
              </div>
              <GeometryFigures kind="plane-plane-perpendicular" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="WORKED EXAMPLES"
                title="五、典型例题"
              />

              <div className="mt-5 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="利用判定定理证明面面平行"
                  question="平面 α 内有两条相交直线 a、b，且 a ∥ β、b ∥ β。证明 α ∥ β。"
                  steps={[
                    "因为 a、b 都在平面 α 内，所以 a ⊂ α，b ⊂ α。",
                    "已知 a、b 相交，满足两条直线相交的条件。",
                    "已知 a ∥ β 且 b ∥ β。",
                    "根据平面与平面平行的判定定理，得 α ∥ β。",
                  ]}
                  answer="α ∥ β。"
                  analysis="本题的关键是找到同一个平面内的两条相交直线，并分别证明它们平行于另一个平面。"
                />

                <ExampleCard
                  number="例题 2"
                  title="利用线面垂直证明面面垂直"
                  question="已知直线 l 在平面 α 内，且 l ⊥ 平面 β。证明 α ⊥ β。"
                  steps={[
                    "已知 l ⊂ α。",
                    "已知 l ⊥ β。",
                    "因此平面 α 经过平面 β 的一条垂线 l。",
                    "根据平面与平面垂直的判定定理，得 α ⊥ β。",
                  ]}
                  answer="α ⊥ β。"
                  analysis="面面垂直的判定可以转化为线面垂直问题。只要找到一个平面内垂直于另一个平面的直线，就可以使用判定定理。"
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
                <li>• 两个平面可能重合、相交或平行。</li>
                <li>• 两个不同的相交平面有且只有一条交线。</li>
                <li>• 面面平行的判定：一个平面内两条相交直线都平行于另一个平面。</li>
                <li>• 面面平行的性质：一个平面内的直线平行于另一个平面。</li>
                <li>• 面面垂直的判定：一个平面经过另一个平面的垂线。</li>
                <li>• 面面垂直的性质：一个平面内垂直于交线的直线垂直于另一个平面。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/solid-geometry/line-plane-relations"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                ← 上一节：直线与平面的位置关系
              </Link>

              <Link
                href="/grade1/solid-geometry"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                返回第08章目录 →
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
                本节是本章第五节。学完后，可以复习五节内容，再统一检查章节导航、题库和学习记录。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                课程页面：第 5 / 5 节
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
                      lesson.number === "05"
                        ? "border-blue-200 bg-blue-50/60"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 text-xs font-bold ${
                          lesson.number === "05"
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      >
                        {lesson.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <Link
                          href={lesson.href}
                          className="text-sm font-semibold leading-6 text-slate-800 hover:text-blue-600"
                        >
                          {lesson.title}
                        </Link>

                        {lesson.number === "05" && (
                          <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                            当前学习
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
                面面平行证明重点找两条相交直线；面面垂直证明重点找线面垂直关系。
                做证明题时，先写清已知条件，再选择合适的判定定理。
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

      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-4 text-center font-serif text-lg text-slate-800">
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
