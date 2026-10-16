"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import { questions } from "@/data/questions";
import { createClient } from "@/lib/supabase/client";

export default function PracticePage() {
  const supabase = createClient();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [attemptStatus, setAttemptStatus] = useState<
    "idle" | "saving" | "saved" | "login" | "error"
  >("idle");

  const [mistakeStatus, setMistakeStatus] = useState<
    "idle" | "saving" | "saved" | "duplicate" | "login" | "error"
  >("idle");

  const question = questions[currentIndex];

  const isCorrect =
    selected === question.correctAnswer;

  async function saveAttempt(
    userId: string,
    answer: string
  ) {
    const { error } = await supabase
      .from("practice_attempts")
      .insert({
        user_id: userId,
        question_id: question.id,
        topic: question.topic,
        selected_answer: answer,
        correct_answer: question.correctAnswer,
        is_correct:
          answer === question.correctAnswer,
      });

    if (error) {
      console.error(
        "保存答题记录失败：",
        error
      );

      setAttemptStatus("error");
      return false;
    }

    setAttemptStatus("saved");
    return true;
  }

  async function saveMistake(
    userId: string,
    answer: string
  ) {
    setMistakeStatus("saving");

    const { error } = await supabase
      .from("mistakes")
      .insert({
        user_id: userId,
        question_id: question.id,
        topic: question.topic,
        question: `${question.title}：${question.question}`,
        user_answer: answer,
        correct_answer:
          question.correctAnswer,
        explanation:
          question.explanation,
      });

    if (error) {
      // 23505 表示同一个学生已经保存过这道错题
      if (error.code === "23505") {
        setMistakeStatus("duplicate");
        return;
      }

      console.error(
        "保存错题失败：",
        error
      );

      setMistakeStatus("error");
      return;
    }

    setMistakeStatus("saved");
  }

  async function submitAnswer() {
    if (!selected) {
      return;
    }

    setSubmitted(true);
    setAttemptStatus("saving");

    const answer = selected;

    // 获取当前登录学生
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // 没登录也允许做题，只是不保存云端记录
    if (userError || !user) {
      setAttemptStatus("login");

      if (
        answer !== question.correctAnswer
      ) {
        setMistakeStatus("login");
      }

      return;
    }

    // 1. 每一次答题都保存
    await saveAttempt(
      user.id,
      answer
    );

    // 2. 如果答错，再保存到错题本
    if (
      answer !== question.correctAnswer
    ) {
      await saveMistake(
        user.id,
        answer
      );
    }
  }

  function resetQuestion() {
    setSelected(null);
    setSubmitted(false);

    setAttemptStatus("idle");
    setMistakeStatus("idle");
  }

  function nextQuestion() {
    if (
      currentIndex >=
      questions.length - 1
    ) {
      return;
    }

    setCurrentIndex(
      currentIndex + 1
    );

    setSelected(null);
    setSubmitted(false);

    setAttemptStatus("idle");
    setMistakeStatus("idle");
  }

  function previousQuestion() {
    if (currentIndex <= 0) {
      return;
    }

    setCurrentIndex(
      currentIndex - 1
    );

    setSelected(null);
    setSubmitted(false);

    setAttemptStatus("idle");
    setMistakeStatus("idle");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 顶部导航 */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </a>

          <nav className="flex items-center gap-7 text-sm text-slate-600">
            <a
              href="/"
              className="hover:text-blue-600"
            >
              首页
            </a>

            <a
              href="/grade1"
              className="hover:text-blue-600"
            >
              高一数学
            </a>

            <a
              href="/mistakes"
              className="hover:text-blue-600"
            >
              我的错题
            </a>
          </nav>
        </div>
      </header>

      {/* 主体 */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        {/* 标题 */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              PRACTICE
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              专题练习
            </h1>

            <p className="mt-3 text-slate-600">
              函数的单调性
            </p>
          </div>

          <div className="text-sm text-slate-500">
            第 {currentIndex + 1} 题
            {" / "}
            共 {questions.length} 题
          </div>
        </div>

        {/* 进度条 */}
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{
              width: `${
                ((currentIndex + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />
        </div>

        {/* 题目卡 */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-blue-600">
            {question.topic}
          </p>

          <h2 className="mt-3 text-xl font-bold text-slate-900">
            {question.title}
          </h2>

          {/* 公式 */}
          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <BlockMath
              math={question.formula}
            />
          </div>

          {/* 问题 */}
          <p className="mt-6 leading-7 text-slate-700">
            {question.question}
          </p>

          {/* 选项 */}
          <div className="mt-6 space-y-3">
            {question.options.map(
              (option) => {
                let optionStyle =
                  "border-slate-200 bg-white hover:border-slate-400";

                // 未提交时选中
                if (
                  !submitted &&
                  selected === option.id
                ) {
                  optionStyle =
                    "border-blue-500 bg-blue-50";
                }

                // 提交后标记正确答案
                if (
                  submitted &&
                  option.id ===
                    question.correctAnswer
                ) {
                  optionStyle =
                    "border-green-400 bg-green-50";
                }

                // 提交后标记学生错误答案
                if (
                  submitted &&
                  selected === option.id &&
                  selected !==
                    question.correctAnswer
                ) {
                  optionStyle =
                    "border-red-400 bg-red-50";
                }

                return (
                  <button
                    key={option.id}
                    disabled={submitted}
                    onClick={() =>
                      setSelected(
                        option.id
                      )
                    }
                    className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${optionStyle} ${
                      submitted
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                  >
                    <span className="font-bold text-slate-900">
                      {option.id}.
                    </span>

                    <span className="text-slate-700">
                      {option.text}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* 提交按钮 */}
          {!submitted && (
            <button
              onClick={submitAnswer}
              disabled={!selected}
              className={`mt-6 rounded-lg px-6 py-3 text-sm font-medium text-white transition ${
                selected
                  ? "bg-slate-900 hover:bg-slate-700"
                  : "cursor-not-allowed bg-slate-300"
              }`}
            >
              提交答案
            </button>
          )}

          {/* 提交结果 */}
          {submitted && (
            <div className="mt-6">
              {/* 正确 */}
              {isCorrect ? (
                <div className="rounded-xl bg-green-50 p-5">
                  <p className="text-lg font-bold text-green-700">
                    ✓ 回答正确
                  </p>

                  <p className="mt-2 text-slate-700">
                    正确答案：
                    {
                      question.correctAnswer
                    }
                  </p>
                </div>
              ) : (
                /* 错误 */
                <div className="rounded-xl bg-red-50 p-5">
                  <p className="text-lg font-bold text-red-700">
                    ✕ 回答错误
                  </p>

                  <p className="mt-2 text-slate-700">
                    你的答案：
                    {selected}
                  </p>

                  <p className="mt-1 text-slate-700">
                    正确答案：
                    {
                      question.correctAnswer
                    }
                  </p>
                </div>
              )}

              {/* 云端答题记录状态 */}
              <div className="mt-4">
                {attemptStatus ===
                  "saving" && (
                  <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    正在同步答题记录...
                  </div>
                )}

                {attemptStatus ===
                  "saved" && (
                  <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
                    ✓ 本次答题记录已同步到云端
                  </div>
                )}

                {attemptStatus ===
                  "login" && (
                  <div className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    当前未登录，本次答题不会同步到云端。
                    <a
                      href="/login"
                      className="ml-2 font-medium text-blue-600 hover:underline"
                    >
                      去登录 →
                    </a>
                  </div>
                )}

                {attemptStatus ===
                  "error" && (
                  <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    答题记录同步失败，请稍后重试。
                  </div>
                )}
              </div>

              {/* 错题同步状态 */}
              {!isCorrect && (
                <div className="mt-3">
                  {mistakeStatus ===
                    "saving" && (
                    <p className="text-sm text-slate-500">
                      正在加入云端错题本...
                    </p>
                  )}

                  {mistakeStatus ===
                    "saved" && (
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-green-700">
                        ✓ 已加入云端错题本
                      </span>

                      <a
                        href="/mistakes"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        查看错题 →
                      </a>
                    </div>
                  )}

                  {mistakeStatus ===
                    "duplicate" && (
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-600">
                        这道题已经在错题本里了
                      </span>

                      <a
                        href="/mistakes"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        查看错题 →
                      </a>
                    </div>
                  )}

                  {mistakeStatus ===
                    "login" && (
                    <p className="text-sm text-amber-700">
                      登录后才能同步错题。
                    </p>
                  )}

                  {mistakeStatus ===
                    "error" && (
                    <p className="text-sm text-red-600">
                      错题保存失败，请稍后再试。
                    </p>
                  )}
                </div>
              )}

              {/* 解析 */}
              <div className="mt-5 rounded-xl bg-slate-50 p-6">
                <p className="font-bold text-slate-900">
                  题目解析
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  {
                    question.explanation
                  }
                </p>
              </div>

              {/* 重做 */}
              <button
                onClick={resetQuestion}
                className="mt-5 rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                重新作答
              </button>
            </div>
          )}
        </div>

        {/* 翻题 */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={previousQuestion}
            disabled={
              currentIndex === 0
            }
            className={`rounded-lg border px-5 py-3 text-sm ${
              currentIndex === 0
                ? "cursor-not-allowed border-slate-200 text-slate-300"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            ← 上一题
          </button>

          <a
            href="/mistakes"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            查看我的错题
          </a>

          <button
            onClick={nextQuestion}
            disabled={
              currentIndex ===
              questions.length - 1
            }
            className={`rounded-lg px-5 py-3 text-sm text-white ${
              currentIndex ===
              questions.length - 1
                ? "cursor-not-allowed bg-slate-300"
                : "bg-slate-900 hover:bg-slate-700"
            }`}
          >
            下一题 →
          </button>
        </div>
      </section>
    </main>
  );
}