
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { grade2PracticeChapters, grade2PracticeTopics } from "@/data/questions";
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

// 首页展示的全站已开放内容：高一 10 个模块 + 高二已开放章节
const totalOpenModules = openModules + grade2OpenChapters;
const totalOpenLessons = openLessons + grade2OpenLessons;

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
      setStatsLoading(false);
    }

    async function loadLearningStats(userId: string) {
      const requestId = ++requestNumber;

      setStatsLoading(true);

      const { data, error } = await supabase
        .from("practice_attempts")
        .select("is_correct, topic, created_at")
        .eq("user_id", userId)
        .order("created_at", {
          ascending: false,
        });

      if (!active || requestId !== requestNumber) {
        return;
      }

      if (error) {
        console.error("读取学习数据失败：", error);
        setStatsLoading(false);
        return;
      }

      const attempts = data ?? [];
      const total = attempts.length;

      const correct = attempts.filter(
        (item) => item.is_correct === true
      ).length;

      const wrong = total - correct;

      const rate =
        total === 0
          ? 0
          : Math.round((correct / total) * 100);

      setTotalAttempts(total);
      setCorrectAttempts(correct);
      setWrongAttempts(wrong);
      setAccuracy(rate);

      setLatestTopic(attempts[0]?.topic ?? null);

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
                通过知识讲解、典型例题、专题训练、
                错题复习和学习数据分析，
                帮助学生逐步建立完整的数学知识体系。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/grade1"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  开始学习
                </Link>

                <Link
                  href="/grade2"
                  className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                >
                  高二数学
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
                    已开放模块 / 章节
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {totalOpenLessons}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    已开放课程
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {grade2OpenChapters}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    高二已开放章节
                  </p>
                </div>
              </div>
            </div>

    <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
      <div className="flex items-center justify-between gap-3"><p className="text-xs font-medium text-slate-400">最新开放章节</p><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">第九章已开放</span></div>
      <p className="mt-5 text-xs font-medium text-blue-600">GRADE 11 · CHAPTER 09</p><h2 className="mt-2 text-xl font-bold text-slate-900">统计</h2><p className="mt-3 text-sm leading-7 text-slate-500">学习线性回归分析与独立性检验，通过散点、残差和列联表理解统计关联及其解释边界。</p>
      <div className="mt-5 flex flex-wrap gap-2">{["线性回归分析", "独立性检验"].map((title) => <span key={title} className="rounded-md bg-white px-2 py-1 text-xs text-slate-500">{title}</span>)}</div>
      <div className="mt-6 border-t border-blue-100 pt-5"><div className="flex justify-between text-xs"><span className="text-slate-400">本章课程开放情况</span><span className="font-medium text-emerald-600">2 / 2</span></div><div className="mt-3 h-2 rounded-full bg-blue-600" /></div>
      <Link href="/grade2/statistics" className="mt-6 inline-flex text-sm font-medium text-slate-900 hover:text-blue-600">进入高二第九章 →</Link>
    </div>
          </div>
        </div>
      </section>

      {/* =========================
          高一、高二、高三入口
      ========================= */}

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
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
            高一课程已全部开放 · 高二课程已全部开放
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
              直线与方程、圆与方程、圆锥曲线与方程、数列、导数及其应用、空间向量与立体几何、计数原理、概率、统计九章已全部开放，
              共三十节课程，覆盖解析几何、数列、导数、空间向量、计数、概率与统计。
              可按教材顺序学习，也可进入专题训练巩固。
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-slate-500">
                  当前开放内容
                </p>
                <span className="text-xs font-medium text-emerald-600">
                  {grade2OpenLessons}/{grade2OpenLessons} 节
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
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-slate-400">
                GRADE 12
              </span>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                建设中
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              高三数学
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
              计划提供高考一轮复习、
              专题突破、真题训练和综合提升内容，
              帮助学生建立系统的复习框架。
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">
                规划内容
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "一轮复习",
                  "专题突破",
                  "真题训练",
                  "综合提升",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white px-2 py-1 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-400">
              课程准备中 · 敬请期待
            </p>
          </div>
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
                  根据你的云端练习记录自动统计。
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
            ) : (
              <>
                <div className="grid grid-cols-2 border-y border-slate-200 bg-white sm:grid-cols-4">
                  <StatItem
                    label="累计答题"
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
                    label="正确率"
                    value={`${accuracy}%`}
                  />
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {/* 最近学习 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-xs text-slate-400">
                      最近学习
                    </p>

                    <p className="mt-2 font-semibold text-slate-800">
                      {latestTopic ?? "还没有练习记录"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {totalAttempts > 0
                        ? "可以继续完成相关专题练习，巩固刚刚学习过的内容。"
                        : "完成第一道练习后，这里会显示最近练习的专题。"}
                    </p>
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

                {totalAttempts === 0 && (
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
              href="/grade1"
              action="进入课程"
            />

            <EntryCard
              number="02"
              title="专题训练"
              description="在线选择答案，自动判题并查看详细解析。"
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
              description="查看答题次数、正确率和不同专题的表现。"
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

                {/* =========================
            最新开放模块
        ========================= */}


<section className="border-t border-slate-200 py-12">
  <div className="flex flex-col justify-between gap-6 rounded-2xl border border-blue-100 bg-white p-6 sm:flex-row sm:items-center sm:p-7">
    <div>
      <p className="text-xs font-medium text-blue-600">
        高二数学 · 第九章
      </p>

      <h2 className="mt-3 text-xl font-bold text-slate-900">
        统计
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
        从散点与列联表出发，学习回归拟合、残差与独立性检验，
        结合交互图形、典型例题与课堂自测解释统计证据和预测范围。
      </p>
    </div>

    <Link
      href="/grade2/statistics"
      className="shrink-0 rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
    >
      学习本章课程 →
    </Link>
  </div>
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
                href="/grade1"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                开始学习
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
