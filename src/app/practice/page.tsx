"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";
import { createClient } from "@/lib/supabase/client";
import {
  practiceTopics,
  questions,
} from "@/data/questions";

type Topic =
  (typeof practiceTopics)[number];

export default function PracticePage() {
  const supabase = useMemo(
    () => createClient(),
    []
  );

  const [selectedTopic, setSelectedTopic] =
    useState<Topic>(practiceTopics[0]);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [userId, setUserId] =
    useState<string | null>(null);

  const [email, setEmail] =
    useState<string | null>(null);

  const [authChecked, setAuthChecked] =
    useState(false);

  const [sessionTotal, setSessionTotal] =
    useState(0);

  const [sessionCorrect, setSessionCorrect] =
    useState(0);

  const [sessionWrong, setSessionWrong] =
    useState(0);

  const [saveMessage, setSaveMessage] =
    useState("");

  /* =========================
     登录状态
  ========================= */

  useEffect(() => {
    async function initializeAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserId(user?.id ?? null);
      setEmail(user?.email ?? null);
      setAuthChecked(true);
    }

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const user =
          session?.user ?? null;

        setUserId(user?.id ?? null);
        setEmail(user?.email ?? null);
        setAuthChecked(true);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  /* =========================
     当前专题题目
  ========================= */

  const topicQuestions = questions.filter(
    (question) =>
      question.topic === selectedTopic
  );

  const currentQuestion =
    topicQuestions[questionIndex];

  const progress =
    topicQuestions.length === 0
      ? 0
      : Math.round(
          ((questionIndex + 1) /
            topicQuestions.length) *
            100
        );

  const sessionAccuracy =
    sessionTotal === 0
      ? 0
      : Math.round(
          (sessionCorrect /
            sessionTotal) *
            100
        );

  const selectedOption =
    currentQuestion?.options.find(
      (option) =>
        option.key === selectedAnswer
    );

  const correctOption =
    currentQuestion?.options.find(
      (option) =>
        option.key ===
        currentQuestion.correctAnswer
    );

  const isCorrect =
    submitted &&
    selectedAnswer ===
      currentQuestion?.correctAnswer;

  /* =========================
     切换专题
  ========================= */

  function changeTopic(topic: Topic) {
    setSelectedTopic(topic);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     选择答案
  ========================= */

  function chooseAnswer(
    answerKey: string
  ) {
    if (submitted || submitting) {
      return;
    }

    setSelectedAnswer(answerKey);
  }

  /* =========================
     提交答案
  ========================= */

  async function submitAnswer() {
    if (
      !currentQuestion ||
      !selectedAnswer ||
      submitted ||
      submitting
    ) {
      return;
    }

    const answerKey = selectedAnswer;

    const answerIsCorrect =
      answerKey ===
      currentQuestion.correctAnswer;

    setSubmitting(true);
    setSaveMessage("");

    /*
      先本地显示结果，
      即使未登录也可以正常做题
    */
    setSubmitted(true);

    setSessionTotal(
      (value) => value + 1
    );

    if (answerIsCorrect) {
      setSessionCorrect(
        (value) => value + 1
      );
    } else {
      setSessionWrong(
        (value) => value + 1
      );
    }

    /*
      未登录：
      正常判题，但不保存云端
    */
    if (!userId) {
      setSaveMessage(
        "当前未登录，本次答题不会保存到云端。"
      );

      setSubmitting(false);
      return;
    }

    /* =========================
       保存练习记录
    ========================= */

    const { error: attemptError } =
      await supabase
        .from("practice_attempts")
        .insert({
          user_id: userId,
          question_id:
            currentQuestion.id,
          topic:
            currentQuestion.topic,
          selected_answer:
            answerKey,
          correct_answer:
            currentQuestion.correctAnswer,
          is_correct:
            answerIsCorrect,
        });

    if (attemptError) {
      console.error(
        "保存练习记录失败：",
        attemptError
      );

      setSaveMessage(
        "判题成功，但云端练习记录保存失败。"
      );

      setSubmitting(false);
      return;
    }

    /* =========================
       答错 → 自动加入错题本
    ========================= */

    if (!answerIsCorrect) {
      const { error: mistakeError } =
        await supabase
          .from("mistakes")
          .insert({
            user_id: userId,
            question_id:
              currentQuestion.id,
            topic:
              currentQuestion.topic,
            question:
              currentQuestion.question,
            user_answer:
              answerKey,
            correct_answer:
              currentQuestion.correctAnswer,
            explanation:
              currentQuestion.explanation,
          });

      /*
        23505 = 已经存在同一道错题
        这种情况不算真正错误
      */
      if (
        mistakeError &&
        mistakeError.code !== "23505"
      ) {
        console.error(
          "保存错题失败：",
          mistakeError
        );

        setSaveMessage(
          "练习记录已保存，但错题保存失败。"
        );

        setSubmitting(false);
        return;
      }

      setSaveMessage(
        "答题记录已保存，错误题目已加入错题本。"
      );
    } else {
      setSaveMessage(
        "答题记录已保存到云端。"
      );
    }

    setSubmitting(false);
  }

  /* =========================
     上一题
  ========================= */

  function previousQuestion() {
    if (questionIndex <= 0) {
      return;
    }

    setQuestionIndex(
      (index) => index - 1
    );

    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     下一题
  ========================= */

  function nextQuestion() {
    if (
      questionIndex >=
      topicQuestions.length - 1
    ) {
      return;
    }

    setQuestionIndex(
      (index) => index + 1
    );

    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     重新作答当前题
  ========================= */

  function resetCurrentQuestion() {
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* =====================
            页面标题
        ====================== */}
        <section className="border-b border-slate-200 pb-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                彻凌数学 · 专题训练
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                高一数学专题训练
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                选择一个专题进行练习。
                提交答案后自动判题，
                登录账号后练习记录和错题会保存到云端。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/mistakes"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                我的错题
              </Link>

              <Link
                href="/report"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                学习报告
              </Link>
            </div>
          </div>
        </section>

        {/* =====================
            主体
        ====================== */}
        <div className="grid gap-8 pt-8 lg:grid-cols-[280px_1fr]">
          {/* =====================
              左侧专题列表
          ====================== */}
          <aside>
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    训练专题
                  </p>

                  <span className="text-xs text-slate-400">
                    {practiceTopics.length} 个
                  </span>
                </div>

                <div className="mt-4 space-y-1">
                  {practiceTopics.map(
                    (topic, index) => {
                      const active =
                        topic ===
                        selectedTopic;

                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() =>
                            changeTopic(
                              topic
                            )
                          }
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                            active
                              ? "bg-blue-50 font-medium text-blue-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span
                            className={`w-6 text-xs ${
                              active
                                ? "text-blue-500"
                                : "text-slate-300"
                            }`}
                          >
                            {String(
                              index +
                                1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span>
                            {topic}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* 当前账号 */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-400">
                  当前账号
                </p>

                {!authChecked ? (
                  <p className="mt-2 text-sm text-slate-500">
                    正在检查登录状态...
                  </p>
                ) : email ? (
                  <>
                    <p className="mt-2 break-all text-sm font-medium text-slate-800">
                      {email}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-emerald-600">
                      练习记录将自动保存到云端
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      未登录也可以练习，
                      但记录不会保存。
                    </p>

                    <Link
                      href="/login"
                      className="mt-3 inline-block text-sm font-medium text-blue-600"
                    >
                      登录 / 注册 →
                    </Link>
                  </>
                )}
              </div>
            </div>
          </aside>

          {/* =====================
              右侧训练区域
          ====================== */}
          <div className="min-w-0">
            {/* 当前专题 */}
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs text-slate-400">
                  当前专题
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedTopic}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  本专题共{" "}
                  {topicQuestions.length}{" "}
                  道练习题
                </p>
              </div>

              <div className="text-sm text-slate-500">
                第{" "}
                <span className="font-semibold text-slate-900">
                  {topicQuestions.length ===
                  0
                    ? 0
                    : questionIndex +
                      1}
                </span>{" "}
                /{" "}
                {topicQuestions.length} 题
              </div>
            </div>

            {/* 进度条 */}
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {!currentQuestion ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <h2 className="text-lg font-bold text-slate-900">
                  当前专题暂无题目
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  请切换其他专题。
                </p>
              </div>
            ) : (
              <>
                {/* =====================
                    题目卡片
                ====================== */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                      第{" "}
                      {questionIndex +
                        1}{" "}
                      题
                    </span>

                    <span className="text-xs text-slate-400">
                      {
                        currentQuestion.title
                      }
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-8 text-slate-900">
                    {
                      currentQuestion.question
                    }
                  </h3>

                  {/* 数学公式 */}
                  {currentQuestion.formula && (
                    <div className="my-6 overflow-x-auto rounded-xl bg-slate-50 px-4 py-5 text-center">
                      <BlockMath
                        math={
                          currentQuestion.formula
                        }
                      />
                    </div>
                  )}

                  {/* =====================
                      选项
                  ====================== */}
                  <div className="mt-6 grid gap-3">
                    {currentQuestion.options.map(
                      (option) => {
                        const chosen =
                          selectedAnswer ===
                          option.key;

                        const correct =
                          submitted &&
                          option.key ===
                            currentQuestion.correctAnswer;

                        const wrong =
                          submitted &&
                          chosen &&
                          option.key !==
                            currentQuestion.correctAnswer;

                        return (
                          <button
                            key={
                              option.key
                            }
                            type="button"
                            disabled={
                              submitted
                            }
                            onClick={() =>
                              chooseAnswer(
                                option.key
                              )
                            }
                            className={`flex w-full items-start gap-3 rounded-xl border px-4 py-4 text-left text-sm transition ${
                              correct
                                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                : wrong
                                  ? "border-red-300 bg-red-50 text-red-600"
                                  : chosen
                                    ? "border-blue-400 bg-blue-50 text-blue-700"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-xs font-semibold ${
                                correct
                                  ? "border-emerald-300 bg-white text-emerald-600"
                                  : wrong
                                    ? "border-red-300 bg-white text-red-500"
                                    : chosen
                                      ? "border-blue-300 bg-white text-blue-600"
                                      : "border-slate-200 bg-slate-50 text-slate-500"
                              }`}
                            >
                              {
                                option.key
                              }
                            </span>

                            <span className="pt-0.5 leading-6">
                              {
                                option.text
                              }
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* =====================
                      提交
                  ====================== */}
                  {!submitted ? (
                    <button
                      type="button"
                      disabled={
                        !selectedAnswer ||
                        submitting
                      }
                      onClick={
                        submitAnswer
                      }
                      className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      {submitting
                        ? "正在提交..."
                        : "提交答案"}
                    </button>
                  ) : (
                    /* =====================
                       答题结果
                    ====================== */
                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <div
                        className={`rounded-xl p-5 ${
                          isCorrect
                            ? "bg-emerald-50/70"
                            : "bg-red-50/70"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <p
                            className={`font-semibold ${
                              isCorrect
                                ? "text-emerald-700"
                                : "text-red-600"
                            }`}
                          >
                            {isCorrect
                              ? "回答正确"
                              : "回答错误"}
                          </p>

                          {!isCorrect && (
                            <span className="text-sm text-slate-500">
                              正确答案：
                              {
                                currentQuestion.correctAnswer
                              }
                            </span>
                          )}
                        </div>

                        {!isCorrect &&
                          selectedOption && (
                            <p className="mt-3 text-sm leading-6 text-slate-500">
                              你的答案：
                              {
                                selectedOption.key
                              }
                              .{" "}
                              {
                                selectedOption.text
                              }
                            </p>
                          )}

                        {correctOption && (
                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            正确选项：
                            {
                              correctOption.key
                            }
                            .{" "}
                            {
                              correctOption.text
                            }
                          </p>
                        )}

                        <div className="mt-4 border-t border-black/5 pt-4">
                          <p className="text-xs font-medium text-slate-400">
                            解析
                          </p>

                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {
                              currentQuestion.explanation
                            }
                          </p>
                        </div>
                      </div>

                      {saveMessage && (
                        <p className="mt-3 text-xs text-slate-400">
                          {saveMessage}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={
                          resetCurrentQuestion
                        }
                        className="mt-4 text-sm text-slate-400 transition hover:text-slate-700"
                      >
                        重新作答
                      </button>
                    </div>
                  )}
                </section>

                {/* =====================
                    上一题 / 下一题
                ====================== */}
                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={
                      questionIndex === 0
                    }
                    onClick={
                      previousQuestion
                    }
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← 上一题
                  </button>

                  {questionIndex <
                  topicQuestions.length -
                    1 ? (
                    <button
                      type="button"
                      onClick={
                        nextQuestion
                      }
                      className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                    >
                      下一题 →
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <Link
                        href="/mistakes"
                        className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                      >
                        查看错题
                      </Link>

                      <Link
                        href="/report"
                        className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                      >
                        查看报告
                      </Link>
                    </div>
                  )}
                </div>

                {/* =====================
                    当前练习统计
                ====================== */}
                <section className="mt-8 border-t border-slate-200 pt-8">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-slate-900">
                      本次练习
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      当前打开专题训练页面后的答题统计。
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
                    <SessionStat
                      label="已答"
                      value={
                        sessionTotal
                      }
                      suffix="题"
                    />

                    <SessionStat
                      label="答对"
                      value={
                        sessionCorrect
                      }
                      suffix="题"
                    />

                    <SessionStat
                      label="答错"
                      value={
                        sessionWrong
                      }
                      suffix="题"
                    />

                    <SessionStat
                      label="正确率"
                      value={
                        sessionAccuracy
                      }
                      suffix="%"
                    />
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function SessionStat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  return (
    <div className="bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-2 flex items-end gap-1">
        <span className="text-xl font-bold text-slate-900">
          {value}
        </span>

        <span className="pb-0.5 text-xs text-slate-400">
          {suffix}
        </span>
      </div>
    </div>
  );
}