"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import GeometryFigures from "@/components/GeometryFigures";

type QuizOption = {
  key: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  answer: string;
  explanation: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: "sg-001",
    question: "下列几何体中，一定属于旋转体的是：",
    options: [
      { key: "A", text: "正方体" },
      { key: "B", text: "三棱柱" },
      { key: "C", text: "圆锥" },
      { key: "D", text: "四棱锥" },
    ],
    answer: "C",
    explanation:
      "圆锥可以由直角三角形绕其一条直角边旋转形成，属于旋转体。正方体、三棱柱和四棱锥属于多面体。",
  },
  {
    id: "sg-002",
    question: "棱锥的侧面具有怎样的共同特点？",
    options: [
      { key: "A", text: "都是平行四边形" },
      { key: "B", text: "都是三角形，并且有一个公共顶点" },
      { key: "C", text: "都是圆面" },
      { key: "D", text: "都是梯形" },
    ],
    answer: "B",
    explanation:
      "棱锥有一个多边形底面，侧面都是有一个公共顶点的三角形，这个公共顶点称为棱锥的顶点。",
  },
  {
    id: "sg-003",
    question:
      "用一个平行于圆锥底面的平面截圆锥，截面与底面之间的部分截下后，得到的几何体通常称为：",
    options: [
      { key: "A", text: "棱台" },
      { key: "B", text: "棱柱" },
      { key: "C", text: "圆台" },
      { key: "D", text: "球" },
    ],
    answer: "C",
    explanation:
      "平行于圆锥底面的平面截去顶部后，剩余部分是圆台。棱台则来自棱锥被平行于底面的平面截取。",
  },
];

const lessonList = [
  {
    number: "01",
    title: "空间几何体",
    description: "认识多面体、旋转体及常见几何体的结构特征。",
    active: true,
  },
  {
    number: "02",
    title: "表面积与体积",
    description: "学习常见空间几何体的表面积和体积计算。",
    active: false,
  },
  {
    number: "03",
    title: "空间点、直线与平面",
    description: "理解空间中的基本对象及位置关系。",
    active: false,
  },
  {
    number: "04",
    title: "直线与平面的位置关系",
    description: "学习平行、垂直的判定与性质。",
    active: false,
  },
  {
    number: "05",
    title: "平面与平面的位置关系",
    description: "学习两个平面平行、垂直及相关应用。",
    active: false,
  },
];

export default function SolidGeometryPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = quizQuestions.reduce(
    (total, question) =>
      total + (answers[question.id] === question.answer ? 1 : 0),
    0
  );

  function selectAnswer(questionId: string, optionKey: string) {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionKey,
    }));
    setSubmitted(false);
  }

  function submitQuiz() {
    setSubmitted(true);
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
          <span className="text-slate-700">立体几何初步</span>
        </nav>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              CHAPTER 08
            </span>
            <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
              第 1 节 · 空间几何体
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            空间几何体
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
            从平面图形走向三维空间，认识棱柱、棱锥、棱台、圆柱、圆锥、圆台和球，
            学会根据组成元素与结构特征识别常见空间几何体。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#learning-goals"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              开始学习
            </a>

            <a
              href="#lesson-practice"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              课后练习
            </a>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-6">
            <section
              id="learning-goals"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <SectionHeading
                eyebrow="LEARNING GOALS"
                title="本节学习目标"
              />

              <ul className="mt-5 space-y-3">
                {[
                  "理解多面体与旋转体的基本区别。",
                  "认识棱柱、棱锥、棱台、圆柱、圆锥、圆台和球。",
                  "能够根据底面、侧面、棱和顶点等结构特征识别几何体。",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="CORE CONCEPTS"
                title="一、空间几何体的分类"
              />

              <p className="mt-4 text-sm leading-8 text-slate-600">
                空间几何体是由空间中的点、线、面构成的几何对象。按结构特征，
                常见空间几何体可以分为多面体和旋转体。
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
                  <h3 className="font-bold text-slate-900">多面体</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    由若干个平面多边形围成。围成多面体的各个多边形称为面，
                    相邻面的公共边称为棱，棱与棱的公共端点称为顶点。
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["棱柱", "棱锥", "棱台"].map((name) => (
                      <span
                        key={name}
                        className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-blue-700"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <h3 className="font-bold text-slate-900">旋转体</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    由一个平面图形绕它所在平面内的一条定直线旋转形成。
                    旋转过程中，定直线称为旋转轴。
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["圆柱", "圆锥", "圆台", "球"].map((name) => (
                      <span
                        key={name}
                        className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-indigo-700"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-600">
                  <strong className="text-slate-900">判断要点：</strong>
                  多面体的表面由平面多边形组成；圆柱、圆锥、圆台和球的表面含有曲面，
                  它们属于常见旋转体。
                </p>
              </div>
              <GeometryFigures kind="classification" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="POLYHEDRA"
                title="二、常见多面体"
              />

              <div className="mt-5 space-y-4">
                <ConceptCard
                  number="01"
                  title="棱柱"
                  definition="有两个互相平行的底面，且两个底面是全等的多边形；其余各面是四边形，称为侧面。"
                  example="三棱柱、四棱柱、正方体都属于棱柱。"
                />

                <ConceptCard
                  number="02"
                  title="棱锥"
                  definition="有一个多边形底面，其余各面是有一个公共顶点的三角形。"
                  example="根据底面边数，可分为三棱锥、四棱锥、五棱锥等。"
                />

                <ConceptCard
                  number="03"
                  title="棱台"
                  definition="棱锥被一个平行于底面的平面截去顶部后，底面与截面之间的部分称为棱台。"
                  example="棱台有两个互相平行的底面，侧面通常为梯形。"
                />
              </div>
              <GeometryFigures kind="polyhedra" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="SOLIDS OF REVOLUTION"
                title="三、常见旋转体"
              />

              <div className="mt-5 space-y-4">
                <ConceptCard
                  number="04"
                  title="圆柱"
                  definition="矩形绕它的一条边所在直线旋转一周形成的几何体。圆柱有两个平行且全等的圆形底面，以及一个侧面。"
                  example="观察圆柱时，注意两个圆形底面和连接它们的曲面侧面。"
                />

                <ConceptCard
                  number="05"
                  title="圆锥"
                  definition="直角三角形绕它的一条直角边所在直线旋转一周形成的几何体。圆锥有一个圆形底面和一个顶点。"
                  example="圆锥的侧面展开后是一个扇形。"
                />

                <ConceptCard
                  number="06"
                  title="圆台"
                  definition="圆锥被平行于底面的平面截去顶部后，底面与截面之间的部分称为圆台。"
                  example="圆台有两个半径通常不同的平行圆形底面。"
                />

                <ConceptCard
                  number="07"
                  title="球"
                  definition="半圆绕它的直径所在直线旋转一周形成的几何体。球面上各点到球心的距离相等。"
                  example="球体没有平面底面、棱或顶点。"
                />
              </div>
              <GeometryFigures kind="rotations" />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="WORKED EXAMPLE"
                title="四、典型例题"
              />

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <p className="text-xs font-semibold text-blue-600">
                  例题
                </p>

                <p className="mt-3 text-sm leading-8 text-slate-700">
                  判断下列说法是否正确：
                  <br />
                  （1）棱柱的两个底面一定平行且全等。
                  <br />
                  （2）棱锥的所有侧面都是三角形。
                  <br />
                  （3）圆柱是多面体。
                </p>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    解析
                  </p>

                  <p className="mt-2 text-sm leading-8 text-slate-600">
                    （1）正确，这是棱柱的基本结构特征。
                    （2）正确，棱锥的侧面都是共顶点的三角形。
                    （3）错误，圆柱的侧面是曲面，因此圆柱属于旋转体，而不是多面体。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  解题方法
                </p>

                <ol className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  <li>1. 先判断表面由平面多边形还是曲面构成。</li>
                  <li>2. 再观察底面数量、形状及其相互关系。</li>
                  <li>3. 最后检查侧面形状、顶点和棱等结构特征。</li>
                </ol>
              </div>
            </section>

            <section
              id="lesson-practice"
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <SectionHeading
                eyebrow="QUICK PRACTICE"
                title="五、课后练习"
              />

              <p className="mt-3 text-sm leading-7 text-slate-500">
                选择每道题的答案，完成后点击“提交答案”查看得分和解析。
              </p>

              <div className="mt-6 space-y-6">
                {quizQuestions.map((question, index) => {
                  const selected = answers[question.id];
                  const isCorrect = selected === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <p className="text-xs font-semibold text-blue-600">
                        练习 {index + 1}
                      </p>

                      <h3 className="mt-2 text-sm font-semibold leading-7 text-slate-900">
                        {question.question}
                      </h3>

                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {question.options.map((option) => {
                          const chosen = selected === option.key;
                          const correctOption =
                            submitted && option.key === question.answer;
                          const wrongChosen =
                            submitted && chosen && !isCorrect;

                          return (
                            <button
                              key={option.key}
                              type="button"
                              onClick={() =>
                                selectAnswer(question.id, option.key)
                              }
                              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                                correctOption
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                                  : wrongChosen
                                    ? "border-red-300 bg-red-50 text-red-700"
                                    : chosen
                                      ? "border-blue-300 bg-blue-50 text-blue-700"
                                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50"
                              }`}
                            >
                              <span className="mr-2 font-semibold">
                                {option.key}.
                              </span>
                              {option.text}
                            </button>
                          );
                        })}
                      </div>

                      {submitted && (
                        <div
                          className={`mt-4 rounded-lg p-4 ${
                            isCorrect
                              ? "bg-emerald-50"
                              : "bg-amber-50"
                          }`}
                        >
                          <p
                            className={`text-sm font-semibold ${
                              isCorrect
                                ? "text-emerald-700"
                                : "text-amber-800"
                            }`}
                          >
                            {isCorrect
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
                  onClick={submitQuiz}
                  disabled={
                    Object.keys(answers).length !== quizQuestions.length
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
                    本次得分：{score} / {quizQuestions.length}
                  </span>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
              <SectionHeading
                eyebrow="KEY TAKEAWAYS"
                title="本节小结"
              />

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>
                  • 多面体的表面由平面多边形构成，常见类型有棱柱、棱锥和棱台。
                </li>
                <li>
                  • 常见旋转体有圆柱、圆锥、圆台和球。
                </li>
                <li>
                  • 识别几何体时，要重点观察底面、侧面、棱、顶点及平行关系。
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/grade1"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                ← 返回高一目录
              </Link>

              <span className="rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-400">
                下一节：表面积与体积（开发中）
              </span>
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

              <p className="mt-2 text-sm leading-7 text-slate-500">
                本章计划5节课程。当前先完成第一节，后续课程完成后再统一开放章节入口。
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/5 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                1 / 5 节正在开发
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">
                本章课程目录
              </h2>

              <div className="mt-4 space-y-2">
                {lessonList.map((lesson) => (
                  <div
                    key={lesson.number}
                    className={`rounded-xl border p-3 ${
                      lesson.active
                        ? "border-blue-200 bg-blue-50/60"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 text-xs font-bold ${
                          lesson.active
                            ? "text-blue-600"
                            : "text-slate-300"
                        }`}
                      >
                        {lesson.number}
                      </span>

                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            lesson.active
                              ? "text-slate-900"
                              : "text-slate-500"
                          }`}
                        >
                          {lesson.title}
                        </p>

                        <p className="mt-1 text-xs leading-6 text-slate-400">
                          {lesson.description}
                        </p>

                        {lesson.active && (
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
                学习空间几何体时，可以先画出草图，再标注底面、侧面、棱和顶点。
                对旋转体，尝试想象平面图形绕轴旋转的过程。
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function SectionHeading({
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
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
          {number}
        </span>

        <h3 className="font-bold text-slate-900">
          {title}
        </h3>
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