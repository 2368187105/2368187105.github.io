
"use client";
import PracticeBatch from "@/components/PracticeBatch";
import AccountBoundary from "@/components/AccountBoundary";
import { practiceQueue, practiceHref } from "@/lib/daily-learning";
import type { Question } from "@/data/questions";
import LoginLink from "@/components/LoginLink";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import "katex/dist/katex.min.css";

import SiteHeader from "@/components/SiteHeader";
import GradeSelector from "@/components/GradeSelector";
import { gradeFromQuery, gradeUrl } from "@/lib/grade-query";
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

export default function PracticePage() { return <AccountBoundary title="高中数学专题训练"><PracticeContent /></AccountBoundary>; }
function PracticeContent() {
  const [queueItems, setQueueItems] = useState<Question[]>([]);
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

  const [submitting, setSubmitting] =
    useState(false);

  /* 登录 */
  const [userId, setUserId] =
    useState<string | null>(null);

  const [email, setEmail] =
    useState<string | null>(null);

  const [authChecked, setAuthChecked] =
    useState(false);

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

    const loadedQueue = practiceQueue(params.get("queue"));
    setQueueItems(loadedQueue);
    const requestedId = params.get("question");
    const queued = loadedQueue.find(q => q.id === requestedId) ?? loadedQueue[0];
    const requestedTopic = queued?.topic ?? params.get("topic");

    if (!requestedTopic) {
      const grade = gradeFromQuery(window.location.search);
      if (grade) {
        setSelectedGrade(grade);
        const topics = grade === "高一" ? grade1PracticeTopics : grade === "高二" ? grade2PracticeTopics : grade3PracticeTopics;
        setSelectedTopic(topics[0] as Topic);
        setExpandedChapter(0);
        setQuestionIndex(0);
      }
      return;
    }

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
    const requestedQuestions = loadedQueue.length ? loadedQueue : questions.filter(question => question.topic === requestedTopic);
    setQuestionIndex(Math.max(0, requestedQuestions.findIndex(question => question.id === requestedId)));
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

  const topicQuestions = queueItems.length ? queueItems : currentQuestions.filter(
    (question) => question.topic === selectedTopic
  );

  const currentQuestion =
    topicQuestions[questionIndex];

  useEffect(() => {
    if (!queueItems.length) return;
    const frame = requestAnimationFrame(() => document.getElementById("practice-question")?.scrollIntoView({ block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, [queueItems.length, currentQuestion?.id]);

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

    setQueueItems([]);
    setSelectedGrade(grade);
    setSelectedTopic(nextTopics[0] as Topic);
    setExpandedChapter(0);
    setQuestionIndex(0);
  }

  /* =========================
     切换专题
  ========================= */

  function changeTopic(topic: Topic) {
    if (submitting) return;

    setQueueItems([]);
    const first = questions.find(q => q.topic === topic);
    if (first) window.history.replaceState(null, "", practiceHref(first));
    setSelectedTopic(topic);
    setQuestionIndex(0);
  }

  function moveToQuestion(index: number) {
    const question = topicQuestions[index];
    if (!question) return;
    setQuestionIndex(index);
    setSelectedTopic(question.topic as Topic);
    setExpandedChapter(chapters.findIndex(chapter => chapter.topics.some(topic => topic === question.topic)));
    window.history.replaceState(null, "", practiceHref(question, queueItems.map(q => q.id)));
    document.getElementById("practice-question")?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  /* =========================
     页面内容
  ========================= */

  return (
    <main className="math-copy min-h-screen bg-[#fafafa]">
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
                整组完成后统一提交，客观题自动判题，解答题核对解析后自评，
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
                href={gradeUrl("/mistakes", selectedGrade)}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                我的错题
              </Link>

              <Link
                href={gradeUrl("/report", selectedGrade)}
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                学习报告
              </Link>
            </div>
          </div>
        </section>

        {/* 主体布局 */}
        <div className={queueItems.length ? "mx-auto grid max-w-4xl gap-8 pt-8" : "grid gap-8 pt-8 lg:grid-cols-[310px_minmax(0,1fr)]"}>
          {/* =========================
              左侧导航
          ========================= */}

          <aside className={queueItems.length ? "hidden" : "min-w-0"}>
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

                <div className="mt-4"><GradeSelector value={selectedGrade} onChange={changeGrade} disabled={submitting} /></div>
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
                      整组提交后，练习记录保存到云端
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      未登录也可以正常做题，
                      但练习记录不会保存。
                    </p>

                    <LoginLink
                      className="mt-3 inline-block text-sm font-medium text-blue-600"
                    >
                      登录 / 注册 →
                    </LoginLink>
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
                    {queueItems.length ? (queueItems.length === 1 ? "单题练习 · " : "今日训练 · ") + selectedTopic : selectedTopic}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {queueItems.length ? "本组共" : "本专题共"}{" "}
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

            {queueItems.length > 0 && <p className="mb-4 text-sm text-slate-600">本组练习 {queueItems.length} 题；题目来自现有题库。<Link href="/#today" className="ml-3 text-blue-600">返回今日安排 →</Link><button onClick={() => changeTopic(selectedTopic)} className="ml-3 text-blue-600">改为自主选题</button></p>}
            <Link href={queueItems.length ? "/print/?ids="+encodeURIComponent(queueItems.map(q=>q.id).join(",")) : "/print/?topic="+encodeURIComponent(selectedTopic)} className="mb-5 inline-block text-sm text-blue-600">{queueItems.length ? "打印本组题目 / 完整解析 →" : "打印本专题题目 / 完整解析 →"}</Link>
            {/* 题目进度 */}
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {authChecked && <PracticeBatch key={(userId ?? "guest") + ":" + topicQuestions.map(q => q.id).join(",")} items={topicQuestions} index={questionIndex} onNavigate={moveToQuestion} userId={userId} client={supabase} onBusy={setSubmitting} />}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-600"><Link href={gradeUrl("/mistakes", selectedGrade)}>查看错题 →</Link><Link href={gradeUrl("/report", selectedGrade)}>查看报告 →</Link></div>
          </div>
        </div>
      </div>
    </main>
  );
}
