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
    id: "sr-001",
    title: "确定平面的条件",
    question: "下列条件中，能够确定一个平面的是：",
    options: [
      { key: "A", text: "一条直线" },
      { key: "B", text: "空间中任意三个点" },
      { key: "C", text: "不在同一直线上的三个点" },
      { key: "D", text: "两个不同的点" },
    ],
    answer: "C",
    explanation:
      "经过不在同一直线上的三个点，有且只有一个平面。三个点如果在同一直线上，就不能唯一确定一个平面。",
  },
  {
    id: "sr-002",
    title: "直线与平面的关系",
    question:
      "直线 l 上有两个不同的点 A、B，且 A、B 都在平面 α 内，那么直线 l 与平面 α 的关系是：",
    options: [
      { key: "A", text: "直线 l 与平面 α 平行" },
      { key: "B", text: "直线 l 在平面 α 内" },
      { key: "C", text: "直线 l 与平面 α 只有一个公共点" },
      { key: "D", text: "无法判断" },
    ],
    answer: "B",
    explanation:
      "如果一条直线上的两个不同点都在一个平面内，那么这条直线就在这个平面内。",
  },
  {
    id: "sr-003",
    title: "两个平面的交线",
    question: "如果两个不同的平面有一个公共点，那么它们的交集是：",
    options: [
      { key: "A", text: "只有一个公共点" },
      { key: "B", text: "一个圆" },
      { key: "C", text: "一条直线" },
      { key: "D", text: "一定没有公共点" },
    ],
    answer: "C",
    explanation:
      "两个不同的平面如果相交，它们的公共部分是一条直线，这条直线称为两个平面的交线。",
  },
];

const lessons = [
  {
    number: "01",
    title: "空间几何体",
    description: "认识多面体、旋转体及其结构特征。",
    href: "/grade1/solid-geometry/spatial-solids",
    ready: true,
  },
  {
    number: "02",
    title: "空间几何体的表面积与体积",
    description: "掌握常见几何体的表面积与体积公式。",
    href: "/grade1/solid-geometry/surface-volume",
    ready: true,
  },
  {
    number: "03",
    title: "空间点、直线与平面的位置关系",
    description: "学习空间基本对象、平面确定条件与基本性质。",
    href: "/grade1/solid-geometry/spatial-relations",
    ready: true,
  },
  {
    number: "04",
    title: "直线与平面的位置关系",
    description: "学习直线与平面平行、垂直的判定与性质。",
    href: "/grade1/solid-geometry/line-plane-relations",
    ready: true,
  },
  {
    number: "05",
    title: "平面与平面的位置关系",
    description: "学习两个平面平行、垂直的判定与性质。",
    href: "/grade1/solid-geometry/plane-plane-relations",
    ready: true,
  },
];

export default function SpatialRelationsPage() {
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
          <Link href="/" className="transition hover:text-blue-600">
            首页
          </Link>
          <span>/</span>
          <Link href="/grade1" className="transition hover:text-blue-600">
            高一数学
          </Link>
          <span>/</span>
          <Link
            href="/grade1/solid-geometry"
            className="transition hover:text-blue-600"
          >
            立体几何初步
          </Link>
          <span>/</span>
          <span className="text-slate-700">
            空间点、直线与平面的位置关系
          </span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 08
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 3 节 · 空间点、直线与平面
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            空间点、直线与平面的位置关系
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从平面几何走向立体几何，认识空间中的点、直线和平面，
            掌握确定平面的基本条件，理解直线与平面、两个平面之间的基本关系。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#goals"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              开始学习
            </a>
            <a
              href="#practice"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
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
                <li>• 认识空间中的点、直线和平面。</li>
                <li>• 理解三种基本的平面确定条件。</li>
                <li>• 掌握直线在平面内的基本判定方法。</li>
                <li>• 了解空间中直线与直线、直线与平面、平面与平面的基本位置关系。</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="BASIC CONCEPTS"
                title="二、空间中的基本对象"
              />

              <div className="mt-5 space-y-4">
                <ConceptCard
                  number="01"
                  title="点"
                  definition="点表示空间中的一个位置，没有大小。通常用大写英文字母 A、B、C 等表示。"
                  example="教室中的一个固定位置，可以用一个点来表示。"
                />

                <ConceptCard
                  number="02"
                  title="直线"
                  definition="直线可以看作由无数个点组成，向两个方向无限延伸。通常用小写字母 l、m、n 表示，也可以用直线上两个点表示。"
                  example="空间中的一条直线可以经过点 A 和点 B，记作直线 AB。"
                />

                <ConceptCard
                  number="03"
                  title="平面"
                  definition="平面是向四周无限延伸的二维图形。通常用希腊字母 α、β、γ 表示，也可以用平面内不共线的三个点来表示。"
                  example="画图时通常用平行四边形表示平面，但它实际向四周无限延伸。"
                />
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm leading-7 text-blue-900">
                注意：画出的平面只是平面的一部分。不能因为图上画了一个有限大小的平行四边形，就认为平面有边界。
              </div>
              <GeometryFigures kind="spatial-objects" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="DETERMINING A PLANE"
                title="三、确定平面的基本条件"
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                确定一个平面，指的是这些条件能够唯一确定一个平面。
                高中立体几何中，常用以下三种方式。
              </p>

              <div className="mt-5 space-y-4">
                <RuleCard
                  number="01"
                  title="不在同一直线上的三个点"
                  rule="经过不在同一直线上的三个点，有且只有一个平面。"
                  example="三个不共线的点 A、B、C，可以唯一确定平面 ABC。"
                />

                <RuleCard
                  number="02"
                  title="一条直线和直线外一点"
                  rule="经过一条直线和直线外一点，有且只有一个平面。"
                  example="直线 l 外有一点 P，那么直线 l 与点 P 可以唯一确定一个平面。"
                />

                <RuleCard
                  number="03"
                  title="两条相交直线"
                  rule="经过两条相交直线，有且只有一个平面。"
                  example="两条直线相交于点 O，它们可以唯一确定一个平面。"
                />
              </div>

              <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  易错提醒
                </p>
                <p className="mt-2 text-sm leading-7 text-amber-900">
                  任意三个点不一定能唯一确定一个平面。如果三个点在同一条直线上，
                  就不符合第一个条件。两条平行直线也可以唯一确定一个平面，但这属于另一种常用判定方式。
                </p>
              </div>
              <GeometryFigures kind="plane-conditions" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="BASIC PROPERTIES"
                title="四、空间图形的基本性质"
              />

              <div className="space-y-4 mt-5">
                <RuleCard
                  number="01"
                  title="直线在平面内的判定"
                  rule="如果一条直线上的两个不同点都在一个平面内，那么这条直线就在这个平面内。"
                  example="若 A、B 是直线 l 上的两个不同点，且 A、B 都在平面 α 内，则直线 l 在平面 α 内。"
                />

                <RuleCard
                  number="02"
                  title="两个平面的相交"
                  rule="如果两个不同的平面有一个公共点，那么它们有且只有一条经过该公共点的公共直线。"
                  example="墙面与地面相交时，它们的交线可以用来理解两个平面的交线。"
                />

                <RuleCard
                  number="03"
                  title="空间直线的基本关系"
                  rule="空间中两条直线可能相交、平行或异面。"
                  example="同一墙面内相交的两条线可以相交；同一方向且不相交的两条线可以平行；空间中不共面且不相交的两条直线是异面直线。"
                />
              </div>
              <GeometryFigures kind="basic-properties" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="POSITION RELATIONSHIPS"
                title="五、空间中的位置关系"
              />

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    点与直线
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    一个点可能在直线上，也可能在直线外。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    判断时，要看该点是否属于这条直线。
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    直线与平面
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    直线与平面的基本位置关系有三种：直线在平面内、直线与平面相交、直线与平面平行。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    本节先认识这三种关系。下一节将重点学习直线与平面平行、垂直的判定与性质。
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">
                    两个平面
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    两个平面可能重合、相交或平行。两个不同的相交平面有且只有一条交线。
                  </p>
                  <div className="mt-3 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                    下一节学习完直线与平面的关系后，再进一步学习两个平面的平行与垂直。
                  </div>
                </div>
              </div>
              <GeometryFigures kind="spatial-positions" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <Heading
                eyebrow="WORKED EXAMPLE"
                title="六、典型例题"
              />

              <div className="mt-5 space-y-5">
                <ExampleCard
                  number="例题 1"
                  title="判断平面能否被唯一确定"
                  question="判断下列条件能否唯一确定一个平面："
                  steps={[
                    "三个不在同一直线上的点。",
                    "同一直线上的三个点。",
                    "一条直线和直线外一点。",
                  ]}
                  answer="（1）能；（2）不能仅凭这三个点唯一确定平面；（3）能。"
                  analysis="根据确定平面的基本条件，三个不共线的点，以及直线和直线外一点，都能唯一确定一个平面。"
                />

                <ExampleCard
                  number="例题 2"
                  title="判断直线是否在平面内"
                  question="已知 A、B 是直线 l 上两个不同的点，且 A、B 都属于平面 α。能否判断直线 l 在平面 α 内？"
                  steps={[
                    "确认 A、B 是直线 l 上的两个不同点。",
                    "确认 A、B 都在平面 α 内。",
                    "根据直线在平面内的判定性质，得出结论。",
                  ]}
                  answer="可以判断直线 l 在平面 α 内。"
                  analysis="一条直线上的两个不同点都在一个平面内，这条直线就在该平面内。"
                />
              </div>
            </section>

            <section
              id="practice"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <Heading
                eyebrow="QUICK PRACTICE"
                title="七、课后练习"
              />

              <p className="mt-3 text-sm leading-7 text-slate-500">
                完成三道选择题后提交，系统会显示得分和每题解析。
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
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  提交答案
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
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
                title="八、本节小结"
              />

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• 不共线的三个点可以唯一确定一个平面。</li>
                <li>• 一条直线和直线外一点可以唯一确定一个平面。</li>
                <li>• 两条相交直线可以唯一确定一个平面。</li>
                <li>• 一条直线上的两个不同点都在平面内，则整条直线在该平面内。</li>
                <li>• 两个不同的相交平面有且只有一条交线。</li>
                <li>• 空间中两条直线可能相交、平行或异面。</li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1/solid-geometry/surface-volume"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                ← 上一节：表面积与体积
              </Link>

              <Link
                href="/grade1/solid-geometry/line-plane-relations"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                下一节：直线与平面的位置关系 →
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
                本章共五节。当前完成第三节的课程页面，后续继续学习直线与平面、平面与平面的关系。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-3/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                当前课程：第 3 / 5 节
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
                      lesson.number === "03"
                        ? "border-blue-200 bg-blue-50/60"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 text-xs font-bold ${
                          lesson.number === "03"
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

                        <p className="mt-1 text-xs leading-6 text-slate-400">
                          {lesson.description}
                        </p>

                        {lesson.number === "03" && (
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
                学习空间位置关系时，建议先画图，再标出已知点、直线和平面。
                判断题中要特别注意“两个不同的点”和“不在同一直线上”等条件。
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
  definition,
  example,
}: {
  number: string;
  title: string;
  definition: string;
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

      <p className="mt-3 text-sm leading-8 text-slate-600">
        {definition}
      </p>

      <p className="mt-3 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-500">
        <strong className="text-slate-700">例：</strong>
        {example}
      </p>
    </div>
  );
}

function RuleCard({
  number,
  title,
  rule,
  example,
}: {
  number: string;
  title: string;
  rule: string;
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

      <p className="mt-3 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-500">
        <strong className="text-slate-700">理解示例：</strong>
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
          分析步骤
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
        答案：{answer}
      </p>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        <strong className="text-slate-700">解析：</strong>
        {analysis}
      </p>
    </div>
  );
}