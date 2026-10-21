
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlockMath } from "react-katex";
import { vectorText } from "@/components/VectorText";
import { mathText } from "@/components/MathText";
import "katex/dist/katex.min.css";

import ConstructedQuestion from "@/components/ConstructedQuestion";
import { checkAnswer } from "@/lib/answer-checking";
import { savePracticeRecord } from "@/lib/practice-records";
import SiteHeader from "@/components/SiteHeader";
import { createClient } from "@/lib/supabase/client";
import {
  practiceTopics,
  questions,
} from "@/data/questions";
import { grade2PracticeTopics, grade2PracticeChapters, grade3PracticeTopics, grade3PracticeChapters } from "@/data/questions";

/* =========================
   类型定义
========================= */

type Topic = (typeof practiceTopics)[number];

/* =========================
   年级、题库与章节配置
   高一每章 5 个专题，高二按章节配置分组
========================= */

type Grade = "高一" | "高二" | "高三";
const grade3TopicSet = new Set<string>(grade3PracticeTopics);
const grade3ChapterNames = grade3PracticeChapters.map((chapter) => chapter.title);


const grade2TopicSet = new Set<string>(
  grade2PracticeTopics
);

const grade1PracticeTopics = practiceTopics.filter(
  (topic) => !grade2TopicSet.has(topic) && !grade3TopicSet.has(topic)
);

const grade1Questions = questions.filter(
  (question) => !grade2TopicSet.has(question.topic) && !grade3TopicSet.has(question.topic)
);

const grade2Questions = questions.filter(
  (question) => grade2TopicSet.has(question.topic)
);

const grade1ChapterNames = [
  "集合与常用逻辑用语",
  "一元二次函数、方程和不等式",
  "函数的概念与性质",
  "指数函数与对数函数",
  "三角函数",
  "平面向量",
  "复数",
  "立体几何初步",
  "统计",
  "概率",
] as const;

const grade2ChapterNames = grade2PracticeChapters.map((chapter) => chapter.title);

/* =========================
   页面主体
========================= */

export default function PracticePage() {
  const supabase = useMemo(
    () => createClient(),
    []
  );

  /* 当前选择 */
  const [selectedGrade, setSelectedGrade] =
    useState<Grade>("高一");

  const [selectedTopic, setSelectedTopic] =
    useState<Topic>(practiceTopics[0]);

  const [expandedChapter, setExpandedChapter] =
    useState<number | null>(0);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  /* 登录 */
  const [userId, setUserId] =
    useState<string | null>(null);

  const [email, setEmail] =
    useState<string | null>(null);

  const [authChecked, setAuthChecked] =
    useState(false);

  /* 本次练习数据 */
  const [sessionTotal, setSessionTotal] =
    useState(0);

  const [sessionCorrect, setSessionCorrect] =
    useState(0);

  const [sessionWrong, setSessionWrong] =
    useState(0);

  const [selfAssessments, setSelfAssessments] = useState(0);
  const [answerRevision, setAnswerRevision] = useState(0);

  const [saveMessage, setSaveMessage] =
    useState("");

  const currentPracticeTopics =
    selectedGrade === "高一"
      ? grade1PracticeTopics
      : selectedGrade === "高三" ? grade3PracticeTopics : grade2PracticeTopics;

  const currentQuestions =
    selectedGrade === "高一"
      ? grade1Questions
      : selectedGrade === "高三" ? questions.filter((question) => grade3TopicSet.has(question.topic)) : grade2Questions;

  const chapterNames =
    selectedGrade === "高一"
      ? grade1ChapterNames
      : selectedGrade === "高三" ? grade3ChapterNames : grade2ChapterNames;

  const chapters = chapterNames
    .map((name, index) => ({
      number: index + 1,
      name,
      topics: selectedGrade === "高三" ? [...grade3PracticeChapters[index].topics] : selectedGrade === "高二"
        ? [...grade2PracticeChapters[index].topics]
        : currentPracticeTopics.slice(index * 5, index * 5 + 5),
    }))
    .filter((chapter) => chapter.topics.length > 0);

  /* =========================
     登录状态
  ========================= */

  useEffect(() => {
    let active = true;

    async function initializeAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!active) return;

      setUserId(user?.id ?? null);
      setEmail(user?.email ?? null);
      setAuthChecked(true);
    }

    void initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!active) return;

        const user = session?.user ?? null;

        setUserId(user?.id ?? null);
        setEmail(user?.email ?? null);
        setAuthChecked(true);
      }
    );

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);
  /* =========================
     从课程页面接收专题名称
  ========================= */

  useEffect(() => {
    // 浏览器 URL 是外部状态：首帧读取，并同步前进/后退导航。
    function applyRequestedTopic() {
    const params = new URLSearchParams(
      window.location.search
    );

    const requestedTopic = params.get("topic");

    if (!requestedTopic) return;

    if (grade3TopicSet.has(requestedTopic)) {
      setSelectedGrade("高三");
      setSelectedTopic(requestedTopic as Topic);
    } else if (
      grade2PracticeTopics.some(
        (topic) => topic === requestedTopic
      )
    ) {
      setSelectedGrade("高二");
      setSelectedTopic(requestedTopic as Topic);
    } else if (
      grade1PracticeTopics.some(
        (topic) => topic === requestedTopic
      )
    ) {
      setSelectedGrade("高一");
      setSelectedTopic(requestedTopic as Topic);
    } else {
      return;
    }

    const requestedChapters = grade3TopicSet.has(requestedTopic)
      ? grade3PracticeChapters.map((chapter) => [...chapter.topics] as readonly string[])
      : grade2TopicSet.has(requestedTopic)
      ? grade2PracticeChapters.map((chapter) => [...chapter.topics] as readonly string[])
      : grade1ChapterNames.map((_, index) => grade1PracticeTopics.slice(index * 5, index * 5 + 5));
    setExpandedChapter(requestedChapters.findIndex((topics) => topics.includes(requestedTopic)));
    const requestedId = params.get("question");
    const requestedQuestions = questions.filter(question => question.topic === requestedTopic);
    setQuestionIndex(Math.max(0, requestedQuestions.findIndex(question => question.id === requestedId)));
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
    }
    const frame = window.requestAnimationFrame(applyRequestedTopic);
    window.addEventListener("popstate", applyRequestedTopic);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("popstate", applyRequestedTopic);
    };
  }, []);
  /* =========================
     题目统计
  ========================= */

  const topicQuestionCounts = useMemo(() => {
    const counts = new Map<string, number>();

    for (const question of currentQuestions) {
      counts.set(
        question.topic,
        (counts.get(question.topic) ?? 0) + 1
      );
    }

    return counts;
  }, [currentQuestions]);

  /* =========================
     当前专题的题目
  ========================= */

  const topicQuestions = currentQuestions.filter(
    (question) => question.topic === selectedTopic
  );

  const currentQuestion =
    topicQuestions[questionIndex];

  const currentChapterIndex =
    chapters.findIndex((chapter) =>
      chapter.topics.some(
        (topic) => topic === selectedTopic
      )
    );

  const currentChapter =
    chapters[currentChapterIndex];

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
          (sessionCorrect / sessionTotal) * 100
        );

  const selectedOption =
    currentQuestion?.options.find(
      (option) => option.key === selectedAnswer
    );

  const correctOption =
    currentQuestion?.options.find(
      (option) =>
        option.key === currentQuestion.correctAnswer
    );

  const isCorrect =
    submitted &&
    selectedAnswer === currentQuestion?.correctAnswer;

  /* =========================
     展开 / 收起章节
  ========================= */

  function toggleChapter(index: number) {
    setExpandedChapter((current) =>
      current === index ? null : index
    );
  }

  /* =========================
     切换年级
  ========================= */

  function changeGrade(grade: Grade) {
    if (submitting || grade === selectedGrade) return;

    const nextTopics =
      grade === "高一"
        ? grade1PracticeTopics
        : grade === "高三" ? grade3PracticeTopics : grade2PracticeTopics;

    setSelectedGrade(grade);
    setSelectedTopic(nextTopics[0] as Topic);
    setExpandedChapter(0);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     切换专题
  ========================= */

  function changeTopic(topic: Topic) {
    if (submitting) return;

    setSelectedTopic(topic);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     选择答案
  ========================= */

  function chooseAnswer(answerKey: string) {
    if (submitted || submitting) return;

    setSelectedAnswer(answerKey);
  }

  /* =========================
     提交答案
     保留原有 Supabase 保存逻辑
  ========================= */

  async function submitAnswer(assessment?: { answer: string; correct: boolean }) {
    if (
      !currentQuestion ||
      !authChecked ||
      (!assessment && !selectedAnswer) ||
      submitted ||
      submitting
    ) {
      return;
    }

    const answerKey = assessment?.answer ?? selectedAnswer!;

    const answerIsCorrect = assessment?.correct ?? checkAnswer(currentQuestion, answerKey);

    setSubmitting(true);
    setSaveMessage("");

    /* 先进行本地判题 */
    setSubmitted(true);

    if (currentQuestion.kind === "written") {
      setSelfAssessments(value => value + 1);
    } else {
    setSessionTotal((value) => value + 1);

    if (answerIsCorrect) {
      setSessionCorrect((value) => value + 1);
    } else {
      setSessionWrong((value) => value + 1);
    }

    }

    /* 未登录：只判题，不保存 */
    if (!userId) {
      setSaveMessage(
        "当前未登录，本次答题不会保存到云端。"
      );

      setSubmitting(false);
      return;
    }

    try {
      const result = await savePracticeRecord(supabase, userId, currentQuestion, answerKey, answerIsCorrect);
      setSaveMessage(result.message);
    } finally {
      setSubmitting(false);
    }
  }

  /* =========================
     上一题
  ========================= */

  function previousQuestion() {
    if (questionIndex <= 0 || submitting) return;

    setQuestionIndex((index) => index - 1);
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     下一题
  ========================= */

  function nextQuestion() {
    if (
      questionIndex >= topicQuestions.length - 1 ||
      submitting
    ) {
      return;
    }

    setQuestionIndex((index) => index + 1);
    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     重新作答
  ========================= */

  function resetCurrentQuestion() {
    if (submitting) return;
    setAnswerRevision(value => value + 1);

    setSelectedAnswer(null);
    setSubmitted(false);
    setSaveMessage("");
  }

  /* =========================
     页面内容
  ========================= */

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700"
          >
            首页
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            专题训练
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                彻凌数学 · 专题训练
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                高中数学专题训练
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                按照年级、章节和专题进行分类练习。
                客观题提交后自动判题，解答题核对解析后自评，
                登录后可将练习记录和错题保存到云端。
              </p>

              <p className="mt-3 text-sm text-slate-400">
                当前开放{selectedGrade}数学
                {" "}
                {chapters.length}
                {" "}
                个章节、
                {" "}
                {currentPracticeTopics.length}
                {" "}
                个专题、
                {" "}
                {currentQuestions.length}
                {" "}
                道题。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/mistakes"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                我的错题
              </Link>

              <Link
                href="/report"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                学习报告
              </Link>
            </div>
          </div>
        </section>

        {/* 主体布局 */}
        <div className="grid gap-8 pt-8 lg:grid-cols-[310px_minmax(0,1fr)]">
          {/* =========================
              左侧导航
          ========================= */}

          <aside className="min-w-0">
            <div className="space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
              {/* 年级选择 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">
                    选择年级
                  </h2>

                  <span className="text-xs text-slate-400">
                    高中数学
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => changeGrade("高一")}
                    disabled={submitting}
                    aria-pressed={selectedGrade === "高一"}
                    className={`rounded-lg border px-2 py-3 text-center transition disabled:opacity-50 ${
                      selectedGrade === "高一"
                        ? "border-blue-200 bg-blue-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${
                      selectedGrade === "高一"
                        ? "text-blue-700"
                        : "text-slate-600"
                    }`}>
                      高一
                    </p>
                    <p className={`mt-1 text-[10px] ${
                      selectedGrade === "高一"
                        ? "text-blue-500"
                        : "text-slate-400"
                    }`}>
                      已开放
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => changeGrade("高二")}
                    disabled={submitting}
                    aria-pressed={selectedGrade === "高二"}
                    className={`rounded-lg border px-2 py-3 text-center transition disabled:opacity-50 ${
                      selectedGrade === "高二"
                        ? "border-blue-200 bg-blue-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${
                      selectedGrade === "高二"
                        ? "text-blue-700"
                        : "text-slate-600"
                    }`}>
                      高二
                    </p>
                    <p className={`mt-1 text-[10px] ${
                      selectedGrade === "高二"
                        ? "text-blue-500"
                        : "text-slate-400"
                    }`}>
                      已开放
                    </p>
                  </button>

                  <button type="button" onClick={() => changeGrade("高三")} disabled={submitting}
                    aria-pressed={selectedGrade === "高三"}
                    className={`rounded-lg border px-2 py-3 text-center transition disabled:opacity-50 ${selectedGrade === "高三" ? "border-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>
                    <p className="text-sm font-semibold">高三</p>
                    <p className="mt-1 text-[10px]">一轮复习</p>
                  </button>
                </div>
              </div>

              {/* 章节与专题 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-sm font-semibold text-slate-900">
                    章节与专题
                  </h2>

                  <span className="text-xs text-slate-400">
                    {currentPracticeTopics.length} 个专题
                  </span>
                </div>

                <p className="mt-2 px-1 text-xs leading-6 text-slate-400">
                  点击章节名称展开专题，
                  再选择想要练习的知识点。
                </p>

                <div className="mt-4 space-y-2">
                  {chapters.map((chapter, index) => {
                    const isExpanded =
                      expandedChapter === index;

                    const isCurrentChapter =
                      currentChapterIndex === index;

                    const chapterQuestionCount =
                      chapter.topics.reduce(
                        (sum, topic) =>
                          sum +
                          (topicQuestionCounts.get(topic) ??
                            0),
                        0
                      );

                    return (
                      <div
                        key={chapter.number}
                        className={`overflow-hidden rounded-xl border transition ${
                          isCurrentChapter
                            ? "border-blue-100"
                            : "border-slate-100"
                        }`}
                      >
                        {/* 章节标题 */}
                        <button
                          type="button"
                          onClick={() =>
                            toggleChapter(index)
                          }
                          aria-expanded={isExpanded}
                          className={`flex w-full items-center gap-3 px-3 py-3.5 text-left transition ${
                            isExpanded
                              ? "bg-slate-50"
                              : "bg-white hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`shrink-0 text-xs font-semibold ${
                              isCurrentChapter
                                ? "text-blue-600"
                                : "text-slate-400"
                            }`}
                          >
                            {String(
                              chapter.number
                            ).padStart(2, "0")}
                          </span>

                          <span
                            className={`min-w-0 flex-1 text-sm font-medium leading-5 ${
                              isCurrentChapter
                                ? "text-blue-700"
                                : "text-slate-700"
                            }`}
                          >
                            {chapter.name}
                          </span>

                          <span className="shrink-0 text-xs text-slate-400">
                            {chapterQuestionCount} 题
                          </span>

                          <span className="shrink-0 text-slate-400">
                            {isExpanded ? "⌃" : "⌄"}
                          </span>
                        </button>

                        {/* 展开后的专题 */}
                        {isExpanded && (
                          <div className="space-y-1 border-t border-slate-100 bg-white px-2 py-2">
                            {chapter.topics.map(
                              (topic, topicIndex) => {
                                const active =
                                  selectedTopic === topic;

                                const count =
                                  topicQuestionCounts.get(
                                    topic
                                  ) ?? 0;

                                return (
                                  <button
                                    key={topic}
                                    type="button"
                                    title={topic}
                                    disabled={submitting}
                                    onClick={() =>
                                      changeTopic(topic)
                                    }
                                    className={`flex w-full items-start gap-2 rounded-lg px-3 py-3 text-left transition ${
                                      active
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    } disabled:cursor-wait`}
                                  >
                                    <span
                                      className={`mt-0.5 w-5 shrink-0 text-xs ${
                                        active
                                          ? "font-semibold text-blue-600"
                                          : "text-slate-400"
                                      }`}
                                    >
                                      {topicIndex + 1}.
                                    </span>

                                    <span
                                      className={`min-w-0 flex-1 text-xs leading-5 ${
                                        active
                                          ? "font-semibold"
                                          : ""
                                      }`}
                                    >
                                      {topic}
                                    </span>

                                    <span
                                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] ${
                                        active
                                          ? "bg-blue-100 text-blue-600"
                                          : "bg-slate-100 text-slate-400"
                                      }`}
                                    >
                                      {count}
                                    </span>
                                  </button>
                                );
                              }
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* 后续章节 */}
                {chapters.length < chapterNames.length && (
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <p className="px-1 text-xs text-slate-400">
                      后续章节
                    </p>

                    {chapterNames
                      .slice(chapters.length)
                      .map((chapterName, index) => (
                        <div
                          key={chapterName}
                          className="mt-3 flex items-center justify-between gap-3 px-2"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <span className="text-xs text-slate-300">
                              {String(
                                chapters.length +
                                  index +
                                  1
                              ).padStart(2, "0")}
                            </span>

                            <span className="text-xs text-slate-400">
                              {chapterName}
                            </span>
                          </div>

                          <span className="shrink-0 text-[10px] text-slate-400">
                            待开放
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* 登录状态 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
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

                    <p className="mt-2 text-xs leading-6 text-emerald-600">
                      练习记录将自动保存到云端
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      未登录也可以正常做题，
                      但练习记录不会保存。
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

          {/* =========================
              右侧答题区域
          ========================= */}

          <div className="min-w-0">
            {/* 当前章节与专题 */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span>{selectedGrade}数学</span>
                <span>/</span>

                <span>
                  第{" "}
                  {String(
                    currentChapter?.number ?? 1
                  ).padStart(2, "0")}
                  {" "}章
                </span>

                <span>/</span>

                <span>
                  {currentChapter?.name ?? ""}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">
                    当前训练专题
                  </p>

                  <h2 className="mt-2 text-xl font-bold leading-8 text-slate-900">
                    {selectedTopic}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    本专题共{" "}
                    {topicQuestions.length}
                    {" "}道练习题
                  </p>
                </div>

                <div className="text-sm text-slate-500">
                  第{" "}
                  <span className="font-semibold text-slate-900">
                    {topicQuestions.length === 0
                      ? 0
                      : questionIndex + 1}
                  </span>
                  {" "}/{" "}
                  {topicQuestions.length}
                  {" "}题
                </div>
              </div>
            </div>

            {/* 题目进度 */}
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
                  请从左侧选择其他专题。
                </p>
              </div>
            ) : (
              <>
                {/* 题目卡片 */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  {/* 题目序号与标题 */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                      第 {questionIndex + 1} 题
                    </span>

                    <span className="text-xs text-slate-400">
                      {currentQuestion.title}
                    </span>
                    {currentQuestion.difficulty && <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{currentQuestion.difficulty}</span>}
                  </div>

                  {/* 题干 */}
                  <h3 className="mt-5 whitespace-pre-wrap text-lg font-semibold leading-8 text-slate-900">
                    {currentQuestion.topic.includes("向量") ? vectorText(currentQuestion.question) : mathText(currentQuestion.question)}
                  </h3>

                  {/* 数学公式 */}
                  {currentQuestion.formula && (
                    <div className="my-6 overflow-x-auto rounded-xl bg-slate-50 px-4 py-5 text-center">
                      <BlockMath
                        math={currentQuestion.formula}
                      />
                    </div>
                  )}

                  {currentQuestion.kind === "fill" || currentQuestion.kind === "written" ? (
                    <ConstructedQuestion key={currentQuestion.id + ":" + answerRevision} question={currentQuestion} submitted={submitted} submitting={submitting} authReady={authChecked} saveMessage={saveMessage} onSubmit={submitAnswer} onReset={resetCurrentQuestion} />
                  ) : <>
                  {/* 选项 */}
                  <div className="mt-6 grid gap-3">
                    {currentQuestion.options.map(
                      (option) => {
                        const chosen =
                          selectedAnswer === option.key;

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
                            key={option.key}
                            type="button"
                            disabled={
                              submitted || submitting
                            }
                            onClick={() =>
                              chooseAnswer(option.key)
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
                              {option.key}
                            </span>

                            <span className="pt-0.5 leading-6">
                              {currentQuestion.topic.includes("向量") ? vectorText(option.text) : mathText(option.text)}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* 提交答案 */}
                  {!submitted ? (
                    <button
                      type="button"
                      disabled={
                        !selectedAnswer || submitting || !authChecked
                      }
                      onClick={() => submitAnswer()}
                      className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      {submitting
                        ? "正在提交..."
                        : "提交答案"}
                    </button>
                  ) : (
                    /* 答题结果 */
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
                              {currentQuestion.correctAnswer}
                            </span>
                          )}
                        </div>

                        {!isCorrect && selectedOption && (
                          <p className="mt-3 text-sm leading-6 text-slate-500">
                            你的答案：
                            {selectedOption.key}
                            .{" "}
                            {currentQuestion.topic.includes("向量") ? vectorText(selectedOption.text) : mathText(selectedOption.text)}
                          </p>
                        )}

                        {correctOption && (
                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            正确选项：
                            {correctOption.key}
                            .{" "}
                            {currentQuestion.topic.includes("向量") ? vectorText(correctOption.text) : mathText(correctOption.text)}
                          </p>
                        )}

                        {/* 解析 */}
                        <div className="mt-4 border-t border-black/5 pt-4">
                          <p className="text-xs font-medium text-slate-400">
                            解析
                          </p>

                          <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                            {currentQuestion.topic.includes("向量") ? vectorText(currentQuestion.explanation) : mathText(currentQuestion.explanation)}
                          </p>
                        </div>
                      </div>

                      {saveMessage && (
                        <p className="mt-3 text-xs text-slate-500">
                          {saveMessage}
                        </p>
                      )}

                      <button
                        type="button"
                        disabled={submitting}
                        onClick={resetCurrentQuestion}
                        className="mt-4 text-sm text-slate-400 transition hover:text-slate-700 disabled:opacity-40"
                      >
                        重新作答
                      </button>
                    </div>
                  )}
                  </>}
                </section>

                {/* 上一题 / 下一题 */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={
                      questionIndex === 0 ||
                      submitting
                    }
                    onClick={previousQuestion}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← 上一题
                  </button>

                  {questionIndex <
                  topicQuestions.length - 1 ? (
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={nextQuestion}
                      className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-40"
                    >
                      下一题 →
                    </button>
                  ) : (
                    <div className="flex flex-wrap gap-3">
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

                <p className="mt-6 text-sm text-slate-500">本次解答题自评：{selfAssessments} 题次，独立于下方客观题统计。</p>
                {/* 本次练习统计 */}
                <section className="mt-8 border-t border-slate-200 pt-8">
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-slate-900">
                      本次练习
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      客观题统计当前页面打开后的答题情况，
                      切换专题不会清空本次记录。
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
                    <SessionStat
                      label="已答"
                      value={sessionTotal}
                      suffix="题次"
                    />

                    <SessionStat
                      label="答对"
                      value={sessionCorrect}
                      suffix="题次"
                    />

                    <SessionStat
                      label="答错"
                      value={sessionWrong}
                      suffix="题次"
                    />

                    <SessionStat
                      label="正确率"
                      value={sessionAccuracy}
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

/* =========================
   本次练习统计组件
========================= */

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
