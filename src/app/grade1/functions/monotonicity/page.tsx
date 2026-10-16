"use client";

import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export default function MonotonicityPage() {
  const [showAnswer, setShowAnswer] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [savedToMistakes, setSavedToMistakes] = useState(false);

  const correctAnswer = "B";

  const options = [
    {
      id: "A",
      text: "在整个实数范围内单调递增",
    },
    {
      id: "B",
      text: "在 (-∞, 1] 上递减，在 [1, +∞) 上递增",
    },
    {
      id: "C",
      text: "在 (-∞, 1] 上递增，在 [1, +∞) 上递减",
    },
    {
      id: "D",
      text: "在整个实数范围内单调递减",
    },
  ];

  const isCorrect = selected === correctAnswer;

  function saveMistake() {
    if (!selected || selected === correctAnswer) {
      return;
    }

    const mistake = {
      id: "function-monotonicity-question-1",
      topic: "高一数学 · 函数的单调性",
      question:
        "已知函数 f(x)=x²-2x+3，下列关于该函数单调性的说法正确的是？",
      yourAnswer: selected,
      correctAnswer: "B",
      explanation:
        "将函数配方为 f(x)=(x-1)²+2。二次函数开口向上，对称轴为 x=1，因此在 (-∞,1] 上单调递减，在 [1,+∞) 上单调递增。",
      createdAt: new Date().toLocaleString("zh-CN"),
    };

    const saved = localStorage.getItem("math_mistakes");

    let mistakes = [];

    if (saved) {
      try {
        mistakes = JSON.parse(saved);
      } catch {
        mistakes = [];
      }
    }

    // 避免同一道题反复加入错题本
    const alreadyExists = mistakes.some(
      (item: { id: string }) => item.id === mistake.id
    );

    if (!alreadyExists) {
      mistakes.push(mistake);

      localStorage.setItem(
        "math_mistakes",
        JSON.stringify(mistakes)
      );
    }

    setSavedToMistakes(true);
  }

  function submitAnswer() {
    if (!selected) {
      return;
    }

    setSubmitted(true);

    // 只要回答错误，自动加入错题本
    if (selected !== correctAnswer) {
      setTimeout(() => {
        saveMistake();
      }, 0);
    }
  }

  function resetQuestion() {
    setSelected(null);
    setSubmitted(false);
    setSavedToMistakes(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 顶部导航 */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </a>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="/grade1"
              className="hover:text-blue-600"
            >
              高一数学
            </a>

            <a
              href="/grade1/functions"
              className="hover:text-blue-600"
            >
              ← 函数的概念与性质
            </a>

            <a
              href="/mistakes"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              我的错题
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-sm font-semibold text-blue-600">
          函数的概念与性质
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          函数的单调性
        </h1>

        <p className="mt-4 text-slate-600">
          掌握函数单调性的定义、判断方法以及常见题型。
        </p>

        <div className="mt-10 space-y-6">

          {/* 01 核心概念 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              01
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              核心概念
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              设函数{" "}
              <InlineMath math="f(x)" />{" "}
              的定义域为{" "}
              <InlineMath math="D" />
              ，区间{" "}
              <InlineMath math="I\subseteq D" />
              。
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                增函数
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                对于区间{" "}
                <InlineMath math="I" />{" "}
                内任意两个值{" "}
                <InlineMath math="x_1" />{" "}
                和{" "}
                <InlineMath math="x_2" />
                ，当{" "}
                <InlineMath math="x_1<x_2" />{" "}
                时，都有：
              </p>

              <BlockMath math="f(x_1)<f(x_2)" />

              <p className="leading-7 text-slate-600">
                则称函数{" "}
                <InlineMath math="f(x)" />{" "}
                在区间{" "}
                <InlineMath math="I" />{" "}
                上是增函数。
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                减函数
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                当{" "}
                <InlineMath math="x_1<x_2" />{" "}
                时，都有：
              </p>

              <BlockMath math="f(x_1)>f(x_2)" />

              <p className="leading-7 text-slate-600">
                则称函数{" "}
                <InlineMath math="f(x)" />{" "}
                在区间{" "}
                <InlineMath math="I" />{" "}
                上是减函数。
              </p>
            </div>
          </section>

          {/* 02 必记结论 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              02
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              必记结论
            </h2>

            <div className="mt-5 space-y-4 leading-7 text-slate-700">
              <p>
                ① 判断函数单调性之前，首先确定函数的
                <strong className="mx-1">定义域</strong>。
              </p>

              <p>
                ② 函数的单调性必须在某一个
                <strong className="mx-1">区间</strong>
                上讨论。
              </p>

              <p>
                ③ 同一个函数在不同区间上的单调性可能不同。
              </p>

              <p>
                ④ 多个单调区间通常不能直接使用并集符号连接。
              </p>
            </div>
          </section>

          {/* 03 典型例题 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              03
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              典型例题
            </h2>

            <p className="mt-5 text-slate-700">
              判断函数
            </p>

            <BlockMath math="f(x)=x^2-2x+3" />

            <p className="text-slate-700">
              的单调区间。
            </p>

            <div className="mt-6 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="font-semibold text-slate-900">
                解题思路
              </p>

              <BlockMath math="f(x)=(x-1)^2+2" />

              <p className="leading-7 text-slate-700">
                对称轴为{" "}
                <InlineMath math="x=1" />
                ，因此：
              </p>

              <div className="mt-4 space-y-2 text-slate-700">
                <p>
                  <InlineMath math="(-\infty,1]" />{" "}
                  上单调递减；
                </p>

                <p>
                  <InlineMath math="[1,+\infty)" />{" "}
                  上单调递增。
                </p>
              </div>
            </div>
          </section>

          {/* 04 易错点 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              04
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              易错点
            </h2>

            <div className="mt-5 rounded-xl bg-red-50 p-5">
              <p className="font-semibold text-red-700">
                常见错误
              </p>

              <p className="mt-2">
                将两个不同单调区间直接用并集连接。
              </p>
            </div>

            <div className="mt-4 rounded-xl bg-green-50 p-5">
              <p className="font-semibold text-green-700">
                正确做法
              </p>

              <p className="mt-2">
                分别描述函数在各区间上的单调性。
              </p>
            </div>
          </section>

          {/* 05 配套练习 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              05
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              配套练习
            </h2>

            <p className="mt-5 text-slate-700">
              判断下列函数的单调区间：
            </p>

            <BlockMath math="f(x)=x^2+4x+1" />

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="mt-6 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              {showAnswer ? "收起答案" : "查看答案"}
            </button>

            {showAnswer && (
              <div className="mt-6 rounded-xl bg-slate-50 p-6">
                <p className="font-bold text-slate-900">
                  答案解析
                </p>

                <BlockMath math="f(x)=(x+2)^2-3" />

                <p className="text-slate-700">
                  对称轴为{" "}
                  <InlineMath math="x=-2" />。
                </p>

                <div className="mt-4 space-y-2 text-slate-700">
                  <p>
                    <InlineMath math="(-\infty,-2]" />{" "}
                    上单调递减；
                  </p>

                  <p>
                    <InlineMath math="[-2,+\infty)" />{" "}
                    上单调递增。
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* 06 在线自测 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">
              06
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              在线自测
            </h2>

            <p className="mt-5 text-slate-700">
              已知函数
            </p>

            <BlockMath math="f(x)=x^2-2x+3" />

            <p className="text-slate-700">
              下列关于该函数单调性的说法正确的是：
            </p>

            <div className="mt-6 space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    if (!submitted) {
                      setSelected(option.id);
                    }
                  }}
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                    selected === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-400"
                  }`}
                >
                  <span className="font-bold">
                    {option.id}.
                  </span>

                  <span>{option.text}</span>
                </button>
              ))}
            </div>

            {!submitted && (
              <button
                onClick={submitAnswer}
                disabled={!selected}
                className={`mt-6 rounded-lg px-6 py-3 text-sm font-medium text-white ${
                  selected
                    ? "bg-slate-900 hover:bg-slate-700"
                    : "cursor-not-allowed bg-slate-300"
                }`}
              >
                提交答案
              </button>
            )}

            {submitted && (
              <div className="mt-6">

                {isCorrect ? (
                  <div className="rounded-xl bg-green-50 p-5">
                    <p className="text-lg font-bold text-green-700">
                      ✓ 回答正确
                    </p>

                    <p className="mt-2 text-slate-700">
                      正确答案：B
                    </p>
                  </div>
                ) : (
                  <div className="rounded-xl bg-red-50 p-5">
                    <p className="text-lg font-bold text-red-700">
                      ✕ 回答错误
                    </p>

                    <p className="mt-2 text-slate-700">
                      你的答案：{selected}
                    </p>

                    <p className="mt-1 text-slate-700">
                      正确答案：B
                    </p>

                    {savedToMistakes && (
                      <div className="mt-4 flex items-center gap-4">
                        <span className="text-sm font-medium text-red-700">
                          已自动加入错题本
                        </span>

                        <a
                          href="/mistakes"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          查看错题本 →
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-4 rounded-xl bg-slate-50 p-6">
                  <p className="text-lg font-bold text-slate-900">
                    题目解析
                  </p>

                  <BlockMath math="f(x)=(x-1)^2+2" />

                  <p className="leading-7 text-slate-700">
                    二次函数开口向上，对称轴为{" "}
                    <InlineMath math="x=1" />
                    ，所以：
                  </p>

                  <div className="mt-4 space-y-2 text-slate-700">
                    <p>
                      <InlineMath math="(-\infty,1]" />{" "}
                      上单调递减；
                    </p>

                    <p>
                      <InlineMath math="[1,+\infty)" />{" "}
                      上单调递增。
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetQuestion}
                  className="mt-5 rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  重新作答
                </button>
              </div>
            )}
          </section>

        </div>
      </section>
    </main>
  );
}