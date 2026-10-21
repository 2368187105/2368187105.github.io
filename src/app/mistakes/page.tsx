"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlockMath } from "react-katex";
import { vectorText } from "@/components/VectorText";
import { mathText } from "@/components/MathText";
import "katex/dist/katex.min.css";

import { answerLabel as constructedAnswerLabel } from "@/lib/answer-checking";
import SiteHeader from "@/components/SiteHeader";
import GradeSelector from "@/components/GradeSelector";
import { gradeUrl } from "@/lib/grade-query";
import { useGradeQuery } from "@/components/useGradeQuery";
import { createClient } from "@/lib/supabase/client";
import {
  practiceTopics,
  questions,
} from "@/data/questions";

import { grade2PracticeTopics, grade2PracticeChapters, grade3PracticeTopics, grade3PracticeChapters } from "@/data/questions";

/* =========================
   数据类型
========================= */

type Mistake = {
  id: number | string;
  user_id: string;
  question_id: string;
  topic: string;
  question: string;
  user_answer: string;
  correct_answer: string;
  explanation: string | null;
  created_at: string;
};

type Filter =
  | { kind: "all" }
  | { kind: "chapter"; index: number }
  | { kind: "topic"; topic: string }
  | { kind: "other" };

/* =========================
   章节与专题
========================= */

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
];

type Grade = "高一" | "高二" | "高三";
const grade3TopicSet = new Set<string>(grade3PracticeTopics);
const grade3ChapterNames = grade3PracticeChapters.map((chapter) => chapter.title);
function topicGrade(topic: string): Grade {
  return grade3TopicSet.has(topic) ? "高三" : grade2TopicSet.has(topic) ? "高二" : "高一";
}
const grade2TopicSet = new Set<string>(grade2PracticeTopics);
const grade1Topics = practiceTopics.filter((topic) => !grade2TopicSet.has(topic) && !grade3TopicSet.has(topic));
const allTopics: readonly string[] = [...new Set<string>([...practiceTopics, ...grade2PracticeTopics])];
const knownTopics = new Set<string>(allTopics);
const grade2ChapterNames = grade2PracticeChapters.map((chapter) => chapter.title);

const questionMap = new Map(
  questions.map((question) => [
    question.id,
    question,
  ])
);

/* =========================
   识别错题所属专题
   兼容已有云端错题记录
========================= */

function resolveTopic(mistake: Mistake): string {
  const savedTopic = (mistake.topic ?? "").trim();

  if (knownTopics.has(savedTopic)) {
    return savedTopic;
  }

  const question = questionMap.get(
    mistake.question_id
  );

  if (question && knownTopics.has(question.topic)) {
    return question.topic;
  }

  const matchedTopic = allTopics.find(
    (topic) => savedTopic.includes(topic)
  );

  return matchedTopic ?? savedTopic;
}

function formatTime(value: string) {
  return new Date(value).toLocaleString("zh-CN");
}

function answerLabel(
  questionId: string,
  answer: string
) {
  const question = questionMap.get(questionId);

  const option = question?.options.find(
    (item) => item.key === answer
  );

  return option
    ? `${answer}. ${option.text}`
    : constructedAnswerLabel(answer);
}

/* =========================
   错题本
========================= */

export default function MistakesPage() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("高一");
  useGradeQuery(setSelectedGrade);
  const currentPracticeTopics: readonly string[] = selectedGrade === "高一" ? grade1Topics : selectedGrade === "高三" ? grade3PracticeTopics : grade2PracticeTopics;
  const chapterNames = selectedGrade === "高一" ? grade1ChapterNames : selectedGrade === "高三" ? grade3ChapterNames : grade2ChapterNames;
  const supabase = useMemo(
    () => createClient(),
    []
  );

  const [mistakes, setMistakes] =
    useState<Mistake[]>([]);

  const [userId, setUserId] =
    useState<string | null>(null);

  const [email, setEmail] =
    useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const [filter, setFilter] = useState<Filter>({
    kind: "all",
  });

  const [expandedChapter, setExpandedChapter] =
    useState<number | null>(null);

  /* =========================
     从 Supabase 加载错题
  ========================= */

  useEffect(() => {
    let active = true;

    async function loadMistakes() {
      setLoading(true);
      setError("");

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (!active) return;

        if (authError || !user) {
          setUserId(null);
          setEmail(null);
          setMistakes([]);

          if (authError && authError.name !== "AuthSessionMissingError") {
            setError("登录状态检查失败，请刷新页面。");
          }

          return;
        }

        setUserId(user.id);
        setEmail(user.email ?? null);

        const { data, error: fetchError } =
          await supabase
            .from("mistakes")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", {
              ascending: false,
            });

        if (!active) return;

        if (fetchError) {
          console.error(fetchError);
          setError("错题读取失败，请稍后刷新页面。");
          setMistakes([]);
          return;
        }

        setMistakes((data ?? []) as Mistake[]);
      } catch {
        if (active) {
          setError(
            "无法读取云端错题，请检查网络后刷新页面。"
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadMistakes();

    return () => {
      active = false;
    };
  }, [supabase]);

  const gradeMistakes = useMemo(() => mistakes.filter((item) =>
    topicGrade(resolveTopic(item)) === selectedGrade
  ), [mistakes, selectedGrade]);
  const chapters = chapterNames.map((name, index) => ({
    name, index, topics: selectedGrade === "高三" ? [...grade3PracticeChapters[index].topics] : selectedGrade === "高二"
      ? [...grade2PracticeChapters[index].topics]
      : currentPracticeTopics.slice(index * 5, index * 5 + 5),
  })).filter((chapter) => chapter.topics.length > 0);

  /* =========================
     专题错题数量
  ========================= */

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();

    for (const mistake of gradeMistakes) {
      const topic = resolveTopic(mistake);

      counts.set(
        topic,
        (counts.get(topic) ?? 0) + 1
      );
    }

    return counts;
  }, [gradeMistakes]);

  const otherCount = gradeMistakes.filter(
    (mistake) => !knownTopics.has(
      resolveTopic(mistake)
    )
  ).length;

  /* =========================
     按当前条件筛选
  ========================= */

  const filteredMistakes = gradeMistakes.filter(
    (mistake) => {
      const topic = resolveTopic(mistake);

      if (filter.kind === "all") {
        return true;
      }

      if (filter.kind === "other") {
        return !knownTopics.has(topic);
      }

      if (filter.kind === "topic") {
        return topic === filter.topic;
      }

      return (
        chapters[filter.index]?.topics.includes(
          topic
        ) ?? false
      );
    }
  );

  let filterTitle = "全部错题";

  if (filter.kind === "chapter") {
    filterTitle =
      chapters[filter.index]?.name ?? "章节错题";
  } else if (filter.kind === "topic") {
    filterTitle = filter.topic;
  } else if (filter.kind === "other") {
    filterTitle = "历史未分类错题";
  }

  const coveredTopics = [...topicCounts.keys()]
    .filter((topic) => knownTopics.has(topic))
    .length;

  /* =========================
     删除单道错题
  ========================= */

  async function deleteMistake(id: number | string) {
    if (!userId || busy) return;

    setBusy(true);
    setError("");

    const { error: deleteError } =
      await supabase
        .from("mistakes")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

    if (deleteError) {
      setError(
        `删除失败：${deleteError.message}`
      );
    } else {
      setMistakes((previous) =>
        previous.filter(
          (mistake) => mistake.id !== id
        )
      );
    }

    setBusy(false);
  }

  /* =========================
     清空全部错题
  ========================= */

  async function clearMistakes() {
    if (!userId || busy || gradeMistakes.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      `确定永久删除${selectedGrade}全部 ${gradeMistakes.length} 道错题吗？此操作无法撤销。`
    );

    if (!confirmed) return;

    setBusy(true);
    setError("");

    const { error: clearError } =
      await supabase
        .from("mistakes")
        .delete()
        .eq("user_id", userId)
        .in("id", gradeMistakes.map((item) => item.id));

    if (clearError) {
      setError(
        `清空失败：${clearError.message}`
      );
    } else {
      const removed = new Set(gradeMistakes.map((item) => item.id));
      setMistakes((previous) => previous.filter((item) => !removed.has(item.id)));
    }

    setBusy(false);
  }

  /* =========================
     选择章节
  ========================= */

  function selectChapter(index: number) {
    setExpandedChapter((current) =>
      current === index ? null : index
    );

    setFilter({
      kind: "chapter",
      index,
    });
  }

  /* =========================
     页面
  ========================= */

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-slate-700"
          >
            首页
          </Link>
          <span>/</span>
          <span className="text-slate-600">
            我的错题
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                彻凌数学 · 错题复习
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                我的错题本
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                按照年级、章节和专题整理错题，
                集中复习薄弱知识点。
                登录后错题将保存在云端。
              </p>

              {email && (
                <p className="mt-3 text-sm text-slate-400">
                  当前账号：{email}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={gradeUrl("/practice", selectedGrade)}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                去专题训练
              </Link>

              <Link
                href={gradeUrl("/report", selectedGrade)}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                查看学习报告
              </Link>
            </div>
          </div>
        </section>

        {/* 加载中 */}
        {loading ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            正在加载云端错题...
          </div>
        ) : !userId ? (
          /* 未登录 */
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              登录后查看错题本
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              登录账号后，可以查看以前保存的错题，
              并按章节和专题进行复习。
            </p>

            {error && (
              <p className="mt-4 text-sm text-red-600">
                {error}
              </p>
            )}

            <Link
              href="/login"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              登录 / 注册
            </Link>
          </div>
        ) : (
          <>
            {/* 统计卡片 */}
            <section className="grid gap-4 py-8 sm:grid-cols-3">
              <StatCard
                label="当前错题"
                value={gradeMistakes.length}
                suffix="道"
              />

              <StatCard
                label="涉及章节"
                value={
                  chapters.filter((chapter) =>
                    chapter.topics.some(
                      (topic) =>
                        (topicCounts.get(topic) ?? 0) > 0
                    )
                  ).length
                }
                suffix="章"
              />

              <StatCard
                label="涉及专题"
                value={coveredTopics}
                suffix="个"
              />
            </section>

            {error && (
              <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* 主体：左侧筛选 + 右侧错题 */}
            <div className="grid gap-8 lg:grid-cols-[310px_minmax(0,1fr)]">
              {/* 左侧 */}
              <aside className="min-w-0">
                <div className="space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
<div className="my-5"><GradeSelector value={selectedGrade} onChange={grade => { setSelectedGrade(grade); setExpandedChapter(null); setFilter({ kind: "all" }); }} /></div>                  {/* 章节导航 */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="px-1">
                      <h2 className="text-sm font-semibold text-slate-900">
                        章节与专题
                      </h2>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        点击章节可查看该章的全部错题，
                        展开后可进一步筛选专题。
                      </p>
                    </div>

                    {/* 全部错题 */}
                    <button
                      type="button"
                      onClick={() =>
                        setFilter({ kind: "all" })
                      }
                      className={`mt-4 flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition ${
                        filter.kind === "all"
                          ? "bg-blue-50 font-semibold text-blue-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>全部错题</span>

                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                        {gradeMistakes.length}
                      </span>
                    </button>

                    {/* 各章节 */}
                    <div className="mt-3 space-y-2">
                      {chapters.map((chapter) => {
                        const expanded =
                          expandedChapter === chapter.index;

                        const chapterCount =
                          chapter.topics.reduce(
                            (total, topic) =>
                              total +
                              (topicCounts.get(topic) ?? 0),
                            0
                          );

                        const chapterActive =
                          filter.kind === "chapter" &&
                          filter.index === chapter.index;

                        return (
                          <div
                            key={chapter.index}
                            className="overflow-hidden rounded-xl border border-slate-100"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                selectChapter(chapter.index)
                              }
                              aria-expanded={expanded}
                              className={`flex w-full items-center gap-3 px-3 py-3.5 text-left transition ${
                                chapterActive
                                  ? "bg-blue-50"
                                  : expanded
                                    ? "bg-slate-50"
                                    : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="shrink-0 text-xs font-semibold text-slate-400">
                                {String(
                                  chapter.index + 1
                                ).padStart(2, "0")}
                              </span>

                              <span
                                className={`min-w-0 flex-1 text-sm leading-5 ${
                                  chapterActive
                                    ? "font-semibold text-blue-700"
                                    : "font-medium text-slate-700"
                                }`}
                              >
                                {chapter.name}
                              </span>

                              <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                                {chapterCount}
                              </span>

                              <span className="text-xs text-slate-400">
                                {expanded ? "⌃" : "⌄"}
                              </span>
                            </button>

                            {expanded && (
                              <div className="space-y-1 border-t border-slate-100 px-2 py-2">
                                {chapter.topics.map(
                                  (topic, index) => {
                                    const active =
                                      filter.kind === "topic" &&
                                      filter.topic === topic;

                                    return (
                                      <button
                                        type="button"
                                        key={topic}
                                        onClick={() =>
                                          setFilter({
                                            kind: "topic",
                                            topic,
                                          })
                                        }
                                        title={topic}
                                        className={`flex w-full items-start gap-2 rounded-lg px-3 py-3 text-left transition ${
                                          active
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                      >
                                        <span className="mt-0.5 w-5 shrink-0 text-xs text-slate-400">
                                          {index + 1}.
                                        </span>

                                        <span className="min-w-0 flex-1 text-xs leading-5">
                                          {topic}
                                        </span>

                                        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">
                                          {topicCounts.get(topic) ?? 0}
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

                    {/* 未分类历史错题 */}
                    {otherCount > 0 && (
                      <button
                        type="button"
                        onClick={() =>
                          setFilter({ kind: "other" })
                        }
                        className={`mt-4 flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm ${
                          filter.kind === "other"
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        <span>历史未分类错题</span>
                        <span>{otherCount}</span>
                      </button>
                    )}
                  </div>
                </div>
              </aside>

              {/* 右侧错题区域 */}
              <section className="min-w-0">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400">
                      当前筛选
                    </p>

                    <h2 className="mt-2 text-xl font-bold text-slate-900">
                      {filterTitle}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      当前共 {filteredMistakes.length} 道错题
                    </p>
                  </div>

                  {filter.kind === "all" &&
                    gradeMistakes.length > 0 && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={clearMistakes}
                        className="rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm text-red-600 transition hover:bg-red-50 disabled:opacity-40"
                      >
                        {busy
                          ? "正在处理..."
                          : "清空当前年级错题"}
                      </button>
                    )}
                </div>

                {/* 当前筛选无错题 */}
                {filteredMistakes.length === 0 ? (
                  <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center">
                    <p className="text-sm font-medium text-blue-600">
                      当前没有错题
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {gradeMistakes.length === 0
                        ? "继续保持，巩固知识"
                        : "这个专题暂时没有错题"}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      可以切换其他章节或专题，
                      也可以去完成新的训练。
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFilter({ kind: "all" })
                        }
                        className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700"
                      >
                        查看全部错题
                      </button>

                      <Link
                        href={gradeUrl("/practice", selectedGrade)}
                        className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
                      >
                        去专题训练
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* 错题列表 */
                  <div className="space-y-5">
                    {filteredMistakes.map(
                      (mistake, index) => {
                        const sourceQuestion =
                          questionMap.get(
                            mistake.question_id
                          );

                        const explanation =
                          mistake.explanation ||
                          sourceQuestion?.explanation;

                        const displayText = (text: string) =>
                          (sourceQuestion?.topic ?? resolveTopic(mistake)).includes("向量")
                            ? vectorText(text)
                            : mathText(text);

                        return (
                          <article
                            key={mistake.id}
                            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
                          >
                            {/* 错题标题 */}
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <span className="text-xs font-semibold text-blue-600">
                                  错题 {index + 1}
                                </span>

                                <p className="mt-2 text-sm text-slate-500">
                                  {resolveTopic(mistake)}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {formatTime(
                                    mistake.created_at
                                  )}
                                </p>
                              </div>

                              <button
                                type="button"
                                disabled={busy}
                                onClick={() =>
                                  deleteMistake(mistake.id)
                                }
                                className="shrink-0 text-sm text-slate-400 transition hover:text-red-600 disabled:opacity-40"
                              >
                                删除
                              </button>
                            </div>

                            {/* 题目 */}
                            <h3 className="mt-6 whitespace-pre-wrap text-base font-semibold leading-8 text-slate-900">
                              {displayText(mistake.question)}
                            </h3>

                            {/* 数学公式 */}
                            {sourceQuestion?.formula && (
                              <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 px-4 py-5 text-center">
                                <BlockMath
                                  math={
                                    sourceQuestion.formula
                                  }
                                />
                              </div>
                            )}

                            {/* 原题选项 */}
                            {sourceQuestion && (
                              <div className="mt-5 space-y-2">
                                {sourceQuestion.options.map(
                                  (option) => {
                                    const isWrong =
                                      option.key ===
                                        mistake.user_answer &&
                                      mistake.user_answer !==
                                        mistake.correct_answer;

                                    const isRight =
                                      option.key ===
                                      mistake.correct_answer;

                                    return (
                                      <div
                                        key={option.key}
                                        className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
                                          isRight
                                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                            : isWrong
                                              ? "border-red-200 bg-red-50 text-red-700"
                                              : "border-slate-100 bg-white text-slate-600"
                                        }`}
                                      >
                                        <span className="mr-3 font-semibold">
                                          {option.key}.
                                        </span>

                                        {displayText(option.text)}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            )}

                            {/* 我的答案和正确答案 */}
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                              <div className="rounded-xl bg-red-50 p-4">
                                <p className="text-xs font-medium text-red-600">
                                  我的答案
                                </p>

                                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                                  {displayText(answerLabel(
                                    mistake.question_id,
                                    mistake.user_answer
                                  ))}
                                </p>
                              </div>

                              <div className="rounded-xl bg-emerald-50 p-4">
                                <p className="text-xs font-medium text-emerald-700">
                                  参考答案
                                </p>

                                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                                  {displayText(answerLabel(
                                    mistake.question_id,
                                    mistake.correct_answer
                                  ))}
                                </p>
                              </div>
                            </div>

                            {sourceQuestion && <Link href={"/practice/?topic=" + encodeURIComponent(sourceQuestion.topic) + "&question=" + encodeURIComponent(sourceQuestion.id)} className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white">重新练习这道题 →</Link>}

                            {/* 解析 */}
                            {explanation && (
                              <div className="mt-4 rounded-xl bg-slate-50 p-5">
                                <p className="text-sm font-semibold text-slate-800">
                                  题目解析
                                </p>

                                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                                  {displayText(explanation)}
                                </p>
                              </div>
                            )}
                          </article>
                        );
                      }
                    )}
                  </div>
                )}
              </section>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

/* =========================
   统计卡片
========================= */

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-900">
          {value}
        </span>

        <span className="pb-1 text-xs text-slate-400">
          {suffix}
        </span>
      </div>
    </div>
  );
}
