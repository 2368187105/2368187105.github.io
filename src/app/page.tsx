
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { grade2PracticeChapters, grade2PracticeTopics, questions } from "@/data/questions";
import { practiceTopics as setsReviewTopics } from "@/data/questions-part5";
import { practiceTopics as functionsReviewTopics } from "@/data/questions-part6";
import { practiceTopics as trigReviewTopics } from "@/data/questions-part7";
import { practiceTopics as vectorReviewTopics } from "@/data/questions-part8";
import { practiceTopics as sequenceReviewTopics } from "@/data/questions-part9";
import { practiceTopics as spatialReviewTopics } from "@/data/questions-part10";
import { practiceTopics as analyticReviewTopics } from "@/data/questions-part11";
import { practiceTopics as reviewTopics, questions as reviewQuestions } from "@/data/questions-part12";
import { summarizeLearning } from "@/lib/learning-summary";
import { createClient } from "@/lib/supabase/client";

/* =========================
   已开放的高一数学模块
========================= */

const modules = [
  {
    number: "01",
    title: "集合与常用逻辑用语",
    description:
      "集合概念、集合关系与运算、充分必要条件及逻辑量词。",
    href: "/grade1/sets",
  },
  {
    number: "02",
    title: "一元二次函数、方程和不等式",
    description:
      "不等式性质、基本不等式、二次函数与方程及综合应用。",
    href: "/grade1/quadratic",
  },
  {
    number: "03",
    title: "函数的概念与性质",
    description:
      "函数概念、定义域与值域、单调性、奇偶性及最值。",
    href: "/grade1/functions",
  },
  {
    number: "04",
    title: "指数函数与对数函数",
    description:
      "指数幂、指数函数、对数运算、对数函数及综合应用。",
    href: "/grade1/exponential-log",
  },
  {
    number: "05",
    title: "三角函数",
    description:
      "任意角与弧度制、三角函数定义、诱导公式、图象性质和恒等变换。",
    href: "/grade1/trigonometric",
  },
  {
    number: "06",
    title: "平面向量",
    description:
      "向量概念、线性运算、坐标表示、数量积及综合应用。",
    href: "/grade1/vectors",
  },
  {
    number: "07",
    title: "复数",
    description:
      "复数的概念与代数表示、复平面、复数的四则运算及综合应用。",
    href: "/grade1/complex",
  },
  {
    number: "08",
    title: "立体几何初步",
    description:
      "空间几何体、空间点线面关系、平行与垂直的判定及应用。",
    href: "/grade1/solid-geometry",
  },
  
  {
    number: "09",
    title: "统计",
    description:
      "随机抽样、数据的收集与整理、统计图表、数据的数字特征及统计综合应用。",
    href: "/grade1/statistics",
  },
  {
    number: "10",
    title: "概率",
    description:
      "随机事件与样本空间、事件关系与运算、古典概型、概率基本性质及综合应用。",
    href: "/grade1/probability",
  },
];

// 高一：10 个模块、每个模块 5 节课程，均已开放
const totalModules = 10;
const openModules = modules.length;
const openLessons = openModules * 5;
const openPercent = Math.round(
  (openModules / totalModules) * 100
);

// 高二：直线与方程、圆与方程、圆锥曲线与方程、数列、导数及其应用、空间向量与立体几何、计数原理、概率、统计九章已全部开放
const grade2OpenChapters = grade2PracticeChapters.length;
const grade2TotalChapters = 9;
const grade2OpenLessons = grade2PracticeTopics.length;
const grade2TotalLessons = 30;
const grade2Percent = Math.round(
  (grade2OpenLessons / grade2TotalLessons) * 100
);

// 高一、高二基础内容单独计数；高三新复习课在首屏另列
const totalOpenModules = openModules + grade2OpenChapters;
const totalOpenLessons = openLessons + grade2OpenLessons;

const reviewLessonCount = reviewTopics.length;
const writtenIds = new Set(questions.filter(question => question.kind === "written").map(question => question.id));
const reviewQuestionCounts = {
  choice: reviewQuestions.filter(question => question.kind === "choice").length,
  fill: reviewQuestions.filter(question => question.kind === "fill").length,
  written: reviewQuestions.filter(question => question.kind === "written").length,
};
const reviewModules = [
  { title: "集合与逻辑", href: "/grade3/sets-logic", status: "已开放", detail: "5 节复习课 · 45 道配套训练" },
  { title: "函数与导数", href: "/grade3/functions-derivatives", status: "已开放", detail: "8 节复习课 · 72 道配套训练" },
  { title: "三角函数与解三角形", href: "/grade3/trigonometry", status: "已开放", detail: "6 节复习课 · 54 道配套训练" },
  { title: "平面向量", href: "/grade3/plane-vectors", status: "已开放", detail: "6 节复习课 · 54 道配套训练" },
  { title: "数列", href: "/grade3/sequences", status: "已开放", detail: "6 节复习课 · 54 道配套训练" },
  { title: "立体几何与空间向量", href: "/grade3/solid-geometry", status: "已开放", detail: "6 节复习课 · 54 道配套训练" },
  { title: "解析几何", href: "/grade3/analytic-geometry", status: "已开放", detail: "7 节复习课 · 63 道配套训练" },
  { title: "计数、概率与统计", href: "/grade3/probability-statistics", status: "已开放", detail: "8 节复习课 · 72 道配套训练" },
];

/* =========================
   首页
========================= */

export default function Home() {
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] =
    useState<string | null>(null);

  const [checkingUser, setCheckingUser] =
    useState(true);

  const [statsLoading, setStatsLoading] =
    useState(false);

  const [selfAssessed, setSelfAssessed] = useState(0);
  const [statsError, setStatsError] = useState("");

  const [totalAttempts, setTotalAttempts] =
    useState(0);

  const [correctAttempts, setCorrectAttempts] =
    useState(0);

  const [wrongAttempts, setWrongAttempts] =
    useState(0);

  const [accuracy, setAccuracy] =
    useState(0);

  const [latestTopic, setLatestTopic] =
    useState<string | null>(null);

  /* =========================
     登录与学习数据
  ========================= */

  useEffect(() => {
    let active = true;
    let requestNumber = 0;
    let currentUserId: string | null = null;

    function resetStats() {
      setTotalAttempts(0);
      setCorrectAttempts(0);
      setWrongAttempts(0);
      setAccuracy(0);
      setLatestTopic(null);
      setSelfAssessed(0);
      setStatsError("");
      setStatsLoading(false);
    }

    async function loadLearningStats(userId: string) {
      const requestId = ++requestNumber;

      setStatsLoading(true);
      setStatsError("");

      const { data, error } = await supabase
        .from("practice_attempts")
        .select("question_id, selected_answer, is_correct, topic, created_at")
        .eq("user_id", userId)
        .order("created_at", {
          ascending: false,
        });

      if (!active || requestId !== requestNumber) {
        return;
      }

      if (error) {
        console.error("读取学习数据失败：", error);
        setStatsError("学习数据暂时读取失败，请刷新重试。");
        setStatsLoading(false);
        return;
      }

      const summary = summarizeLearning(data ?? [], writtenIds);
      setTotalAttempts(summary.total);
      setCorrectAttempts(summary.correct);
      setWrongAttempts(summary.wrong);
      setAccuracy(summary.accuracy);
      setSelfAssessed(summary.selfAssessed);
      setLatestTopic(summary.latestTopic);

      setStatsLoading(false);
    }

    function applyUser(
      user: {
        id: string;
        email?: string | null;
      } | null
    ) {
      if (!active) return;

      const userId = user?.id ?? null;

      setEmail(user?.email ?? null);
      setCheckingUser(false);

      if (userId === currentUserId) {
        return;
      }

      currentUserId = userId;

      if (userId) {
        void loadLearningStats(userId);
      } else {
        requestNumber += 1;
        resetStats();
      }
    }

    void supabase.auth.getUser().then(
      ({ data: { user } }) => {
        applyUser(user);
      },
      () => {
        if (active) {
          setCheckingUser(false);
        }
      }
    );

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        applyUser(session?.user ?? null);
      }
    );

    return () => {
      active = false;
      requestNumber += 1;
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      {/* =========================
          首屏
      ========================= */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            {/* 左侧介绍 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-600">
                  彻凌数学
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-sm text-slate-400">
                  高中数学学习平台
                </span>
              </div>

              <p className="mt-4 text-sm font-medium tracking-wide text-slate-500">
                山海连云，巍巍交大。
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.15]">
                把零散的知识点，
                <br className="hidden sm:block" />
                变成完整的数学体系。
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                面向高中三个年级，
                系统整理数学知识点，
                从高一、高二基础课程到高三一轮复习，
                通过知识讲解、典型例题、专题训练、
                错题复习和学习数据分析，
                帮助学生逐步建立完整的数学知识体系。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/grade1"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  高一数学
                </Link>

                <Link
                  href="/grade2"
                  className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                >
                  高二数学
                </Link>

                <Link href="/grade3" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
                  高三一轮复习
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  专题训练
                </Link>

                <Link
                  href="/mistakes"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  查看错题
                </Link>
              </div>

              {/* 当前课程开放数据 */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {totalOpenModules}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    高一、高二基础章节
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {totalOpenLessons}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    高一、高二基础课程
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {reviewLessonCount + setsReviewTopics.length + functionsReviewTopics.length + trigReviewTopics.length + vectorReviewTopics.length + sequenceReviewTopics.length + spatialReviewTopics.length + analyticReviewTopics.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    高三一轮复习课
                  </p>
                </div>
                <div><p className="text-2xl font-bold text-slate-900">{questions.length}</p><p className="mt-1 text-xs text-slate-400">全站训练题</p></div>
              </div>
            </div>

            <aside aria-label="最新开放课程" className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-medium text-blue-700">最新开放 · 高三一轮复习</p><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">第八模块已开放</span></div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">计数、概率与统计</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">从排列组合、二项式定理到条件概率、随机变量、常用分布与统计推断，八节课程逐步衔接。完整说明模型前提、计算步骤和结论边界。</p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-blue-100 py-4"><div><p className="text-2xl font-bold text-slate-900">{reviewLessonCount}<span className="ml-1 text-sm font-normal">节</span></p><p className="mt-1 text-xs text-slate-500">系统复习课</p></div><div><p className="text-2xl font-bold text-slate-900">{reviewQuestions.length}<span className="ml-1 text-sm font-normal">道</span></p><p className="mt-1 text-xs text-slate-500">分层训练题</p></div></div>
              <div className="mt-4 flex flex-wrap gap-2">{[["选择题",reviewQuestionCounts.choice],["填空题",reviewQuestionCounts.fill],["解答题",reviewQuestionCounts.written]].map(([name,count])=><span key={name} className="rounded-md bg-white px-2.5 py-1 text-xs text-slate-600">{name} {count} 道</span>)}</div>
              <Link href="/grade3/probability-statistics" className="mt-6 flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">开始计数、概率与统计复习 →</Link>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================
          高一、高二、高三入口
      ========================= */}

      <section id="curriculum" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-wide text-blue-600">
              MATHEMATICS CURRICULUM
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              高中数学课程
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              覆盖高一、高二、高三三个学习阶段，
              按照知识体系逐步开放课程。
            </p>
          </div>

          <span className="text-xs text-slate-400">
            高一、高二基础内容已开放 · 高三一轮复习八模块已开放
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* 高一数学 */}
          <Link
            href="/grade1"
            className="group flex flex-col rounded-2xl border border-blue-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-blue-600">
                GRADE 10
              </span>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                已开放
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              高一数学
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
              集合与逻辑、函数、不等式、指数与对数、三角函数、
              平面向量、复数、立体几何初步、统计与概率，
              逐步构建高中数学基础。
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  {openModules}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  已开放模块
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  {openLessons}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  已开放课程
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-slate-900 transition group-hover:text-blue-600">
              进入高一数学 →
            </p>
          </Link>

          {/* 高二数学：九章全部开放 */}
          <Link
            href="/grade2"
            className="group flex flex-col rounded-2xl border border-blue-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-blue-600">
                GRADE 11
              </span>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                九章全部开放
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              高二数学
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
              解析几何、数列、导数、空间向量、计数原理、概率与统计，
              九章三十节课程全部开放。结合交互图形和典型例题，完成知识学习与专题巩固。
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-slate-500">
                  当前开放内容
                </p>
                <span className="text-xs font-medium text-emerald-600">
                  {grade2OpenLessons}/{grade2TotalLessons} 节
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {["直线与方程 · 5 节", "圆与方程 · 3 节", "圆锥曲线 · 3 节", "数列 · 4 节", "导数 · 3 节", "空间向量 · 3 节", "计数原理 · 4 节", "概率 · 3 节", "统计 · 2 节"].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white px-2 py-1 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-slate-700 transition group-hover:text-blue-600">
              进入高二数学 →
            </p>
          </Link>

          {/* 高三数学 */}
          <Link href="/grade3" className="group flex flex-col rounded-2xl border border-blue-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-blue-600">GRADE 12</span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">一轮复习八模块已开放</span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">高三数学</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">衔接高一、高二基础内容，通过知识梳理、典型题型与分层练习查漏补缺。集合与逻辑、函数与导数、三角函数与解三角形、平面向量、数列、立体几何与空间向量、解析几何、计数概率与统计八个模块已开放，共五十二节复习课，支持三种题型与完整解析。</p>
            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">当前开放内容</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">8 个模块 · 52 节课程 · 468 道配套训练<br />另有 96 道章末综合训练，保留 9 道原有函数复练题</p>
              <p className="mt-2 text-xs leading-6 text-slate-400">专题突破与真题训练将分阶段补充</p>
            </div>
            <p className="mt-6 border-t border-slate-100 pt-4 text-sm font-medium text-slate-900 group-hover:text-blue-600">进入高三复习 →</p>
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* =========================
            登录后的学习概览
        ========================= */}

        {email && (
          <section className="py-12">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  我的学习概览
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  根据云端记录统计客观题表现，解答题自评单独展示。
                </p>
              </div>

              <Link
                href="/report"
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                查看完整学习报告 →
              </Link>
            </div>

            {statsLoading ? (
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-400">
                正在读取学习数据...
              </div>
            ) : statsError ? (<p role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">{statsError}</p>) : (
              <>
                <div className="grid grid-cols-2 border-y border-slate-200 bg-white sm:grid-cols-4">
                  <StatItem
                    label="客观题答题"
                    value={String(totalAttempts)}
                    suffix="题次"
                  />

                  <StatItem
                    label="答对"
                    value={String(correctAttempts)}
                    suffix="题次"
                  />

                  <StatItem
                    label="答错"
                    value={String(wrongAttempts)}
                    suffix="题次"
                  />

                  <StatItem
                    label="客观题正确率"
                    value={`${accuracy}%`}
                  />
                </div>

                <p className="mt-4 text-sm text-slate-500">解答题自评 {selfAssessed} 题次，未计入客观题正确率。<Link href="/report" className="ml-2 text-blue-600">查看分步自评 →</Link></p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {/* 最近学习 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-xs text-slate-400">
                      最近练习
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      {latestTopic ?? "还没有练习记录"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {latestTopic
                        ? "可以继续完成相关专题练习，巩固刚刚学习过的内容。"
                        : "完成第一道练习后，这里会显示最近练习的专题。"}
                    </p>
                    {latestTopic && <Link href={"/practice/?topic=" + encodeURIComponent(latestTopic)} className="mt-4 inline-flex text-sm font-medium text-blue-600">继续该专题 →</Link>}
                  </div>

                  {/* 正确率 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-400">
                        当前正确率
                      </p>

                      <span className="text-sm font-semibold text-slate-800">
                        {accuracy}%
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all"
                        style={{
                          width: `${accuracy}%`,
                        }}
                      />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {getAccuracyMessage(
                        accuracy,
                        totalAttempts
                      )}
                    </p>
                  </div>
                </div>

                {!latestTopic && (
                  <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-4">
                    <p className="text-sm text-slate-500">
                      你还没有答题记录。
                      <Link
                        href="/practice"
                        className="ml-1 font-medium text-blue-600"
                      >
                        去完成第一道练习 →
                      </Link>
                    </p>
                  </div>
                )}
              </>
            )}
          </section>
        )}

        {/* 未登录提示 */}
        {!checkingUser && !email && (
          <section className="py-12">
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold text-slate-900">
                  登录彻凌数学，保存学习记录
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  登录账号后，
                  练习记录、错题和学习数据将保存到云端，
                  方便在不同设备之间同步。
                </p>
              </div>

              <Link
                href="/login"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                登录 / 注册
              </Link>
            </div>
          </section>
        )}

        {/* =========================
            学习工具
        ========================= */}

        <section className="border-t border-slate-200 py-12">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习工具
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              从知识学习到专题训练，
              再通过错题复习和学习报告检查掌握情况。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <EntryCard
              number="01"
              title="知识学习"
              description="按照完整课程目录，系统学习高中数学知识点。"
              href="#curriculum"
              action="选择年级"
            />

            <EntryCard
              number="02"
              title="专题训练"
              description="选择、填空自动判题；解答题对照完整解析分步自评。"
              href="/practice"
              action="开始做题"
            />

            <EntryCard
              number="03"
              title="我的错题"
              description="保存答错的题目，针对薄弱内容集中复习。"
              href="/mistakes"
              action="查看错题"
            />

            <EntryCard
              number="04"
              title="学习报告"
              description="查看客观题表现、薄弱专题和独立记录的解答题自评。"
              href="/report"
              action="查看报告"
            />
          </div>
        </section>



        {/* =========================
            高一、高二课程建设进度
        ========================= */}

        <section className="border-t border-slate-200 py-12">
          <div className="grid gap-4 md:grid-cols-2">
            {/* 高一课程进度 */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div>
                <p className="text-xs font-semibold text-blue-600">
                  CURRICULUM PROGRESS · GRADE 10
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  高一数学课程建设进度
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  高一数学共规划十个模块，目前十个模块均已开放，
                  共五十节知识课程，涵盖从集合、函数到统计与概率的主要内容。
                </p>

                <p className="mt-4 text-xs text-slate-400">
                  这里显示的是课程开放进度，不代表学生个人的学习完成度。
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-slate-900">
                    {openPercent}%
                  </span>

                  <span className="pb-1 text-sm text-slate-400">
                    {openModules} / {totalModules} 模块
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${openPercent}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  已开放 {openLessons} 节课程
                </p>

                <Link
                  href="/grade1"
                  className="mt-4 inline-flex text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  查看高一课程 →
                </Link>
              </div>
            </div>

            {/* 高二课程进度 */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <div>
                <p className="text-xs font-semibold text-blue-600">
                  CURRICULUM PROGRESS · GRADE 11
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  高二数学课程建设进度
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  高二数学九章三十节课程已全部开放，覆盖直线与方程、圆与方程、圆锥曲线、数列、导数、空间向量、计数、概率与统计。
                </p>

                <p className="mt-4 text-xs text-slate-400">
                  当前进度按已开放课程节数统计。
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-slate-900">
                    {grade2Percent}%
                  </span>

                  <span className="pb-1 text-sm text-slate-400">
                    {grade2OpenLessons} / {grade2TotalLessons} 节
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${grade2Percent}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  已开放 {grade2OpenChapters} / {grade2TotalChapters} 章
                </p>

                <Link
                  href="/grade2"
                  className="mt-4 inline-flex text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  查看高二课程 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="review-path-heading" className="border-t border-slate-200 py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-medium text-blue-600">高三一轮复习</p><h2 id="review-path-heading" className="mt-3 text-2xl font-bold text-slate-900">八个模块，串起复习主线</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">面向江苏考生，一轮复习八个模块均已开放。由集合与函数出发，逐步衔接三角、向量、数列、几何与概率统计，配套三类题型和完整分步解析。</p></div><Link href="/grade3" className="text-sm font-medium text-blue-600">查看高三复习目录 →</Link></div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{reviewModules.map((module,index)=><li key={module.title} className={`rounded-xl border p-5 ${module.href ? "border-blue-200 bg-white" : "border-slate-200 bg-slate-50"}`}>
            <div className="flex items-center justify-between gap-2"><span className="text-xs font-semibold text-slate-400">{String(index+1).padStart(2,"0")}</span><span className={`rounded-full px-2 py-1 text-xs ${module.href ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{module.status}</span></div>
            <h3 className="mt-4 font-semibold leading-7 text-slate-900">{module.href ? <Link className="hover:text-blue-600" href={module.href}>{module.title} →</Link> : module.title}</h3>
            <p className="mt-2 text-xs leading-6 text-slate-500">{module.detail ?? "课程与训练准备中"}</p>
          </li>)}</ol>
          <Link href="/grade3/chapter-tests" className="mt-6 block rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-700"><strong>八章综合训练已开放 →</strong><br />每章 12 题，共 96 题，含 24 道完整解析的解答题。按基础巩固、综合应用与提升检验章节掌握情况。</Link><p className="mt-5 text-xs leading-6 text-slate-500">选择题与填空题用于客观判分；解答题先独立书写，再按关键步骤自评。课程开放状态与个人学习进度分别记录。</p>
        </section>

        {/* =========================
            学习方法
        ========================= */}

        <section className="border-t border-slate-200 py-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium text-blue-600">
                彻凌数学学习方法
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-900">
                一个简单的学习循环
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                不需要一次学习很多内容。
                把每个知识点按照
                “理解—练习—纠错—复习”
                的顺序完成，
                学习效果会更加稳定。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <MethodItem
                number="1"
                title="先理解知识点"
                description="明确定义、性质和基本方法。"
              />

              <MethodItem
                number="2"
                title="完成对应练习"
                description="通过题目检查是否真正掌握知识。"
              />

              <MethodItem
                number="3"
                title="整理错误原因"
                description="不仅记录答案，还要找到错误原因。"
              />

              <MethodItem
                number="4"
                title="再次复习"
                description="定期回看错题与薄弱知识点。"
              />
            </div>
          </div>
        </section>

        {/* =========================
            品牌区域
        ========================= */}

        <section className="border-t border-slate-200 pt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  彻凌数学
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  山海连云，巍巍交大。
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  从一个知识点开始，
                  通过理解、练习、纠错和复习，
                  一步一步建立属于自己的数学知识体系。
                </p>
              </div>

              <Link
                href="#curriculum"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                选择年级，开始学习
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =========================
          页脚
      ========================= */}

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              彻凌数学
            </p>

            <p className="mt-1 text-xs text-slate-400">
              山海连云，巍巍交大。
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <Link
              href="/grade1"
              className="hover:text-slate-700"
            >
              高一数学
            </Link>

            <Link
              href="/grade2"
              className="hover:text-slate-700"
            >
              高二数学
            </Link>

            <Link href="/grade3" className="hover:text-slate-700">高三复习</Link>

            <Link
              href="/practice"
              className="hover:text-slate-700"
            >
              专题训练
            </Link>

            <Link
              href="/mistakes"
              className="hover:text-slate-700"
            >
              我的错题
            </Link>

            <Link
              href="/report"
              className="hover:text-slate-700"
            >
              学习报告
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   统计组件
========================= */

function StatItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="border-b border-r border-slate-200 p-5 last:border-r-0 sm:border-b-0 sm:p-6">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-1.5">
        <span className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </span>

        {suffix && (
          <span className="pb-1 text-xs text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

/* =========================
   学习工具卡片
========================= */

function EntryCard({
  number,
  title,
  description,
  href,
  action,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
    >
      <p className="text-xs font-semibold text-slate-300">
        {number}
      </p>

      <h3 className="mt-4 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-5 text-sm font-medium text-slate-700 transition group-hover:text-blue-600">
        {action} →
      </p>
    </Link>
  );
}

/* =========================
   学习方法
========================= */

function MethodItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-500">
        {number}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================
   正确率提示
========================= */

function getAccuracyMessage(
  accuracy: number,
  total: number
) {
  if (total === 0) {
    return "完成练习后，这里会自动分析你的正确率。";
  }

  if (accuracy >= 90) {
    return "掌握情况很好，可以尝试更综合的题目。";
  }

  if (accuracy >= 75) {
    return "基础掌握较稳定，继续巩固易错题型。";
  }

  if (accuracy >= 60) {
    return "还有一些知识点需要加强，建议结合错题复习。";
  }

  return "建议先回到知识点学习，再针对错题进行练习。";
}
