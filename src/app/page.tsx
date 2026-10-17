"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { createClient } from "@/lib/supabase/client";

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

  useEffect(() => {
    async function initializePage() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setEmail(user?.email ?? null);
      setCheckingUser(false);

      if (user) {
        await loadLearningStats(user.id);
      }
    }

    initializePage();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const user = session?.user ?? null;

        setEmail(user?.email ?? null);
        setCheckingUser(false);

        if (user) {
          await loadLearningStats(user.id);
        } else {
          resetStats();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function loadLearningStats(
    userId: string
  ) {
    setStatsLoading(true);

    const { data, error } = await supabase
      .from("practice_attempts")
      .select(
        "is_correct, topic, created_at"
      )
      .eq("user_id", userId)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "读取学习数据失败：",
        error
      );

      setStatsLoading(false);
      return;
    }

    const attempts = data ?? [];

    const total = attempts.length;

    const correct = attempts.filter(
      (item) =>
        item.is_correct === true
    ).length;

    const wrong = total - correct;

    const rate =
      total === 0
        ? 0
        : Math.round(
            (correct / total) * 100
          );

    setTotalAttempts(total);
    setCorrectAttempts(correct);
    setWrongAttempts(wrong);
    setAccuracy(rate);

    setLatestTopic(
      attempts[0]?.topic ?? null
    );

    setStatsLoading(false);
  }

  function resetStats() {
    setTotalAttempts(0);
    setCorrectAttempts(0);
    setWrongAttempts(0);
    setAccuracy(0);
    setLatestTopic(null);
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      {/* 首屏 */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            {/* 左侧 */}
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
                系统学习高中数学知识点，
                通过知识讲解、典型例题、专题训练、
                错题复习和学习数据，
                逐步建立清晰、完整的数学知识结构。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/grade1"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  开始学习
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
            </div>

            {/* 右侧推荐 */}
            <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-6">
              <p className="text-xs font-medium text-slate-400">
                当前推荐
              </p>

              <h2 className="mt-3 text-lg font-bold text-slate-900">
                一元二次函数、方程和不等式
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                系统理解不等式、基本不等式、
                二次函数、方程根与一元二次不等式之间的联系。
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "基本不等式",
                  "判别式",
                  "二次方程",
                  "二次不等式",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white px-2 py-1 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/grade1/quadratic"
                className="mt-6 inline-flex text-sm font-medium text-slate-900 transition hover:text-blue-600"
              >
                进入模块 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* 登录后的学习概览 */}
        {email && (
          <section className="py-10">
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
                    value={String(
                      totalAttempts
                    )}
                    suffix="题次"
                  />

                  <StatItem
                    label="答对"
                    value={String(
                      correctAttempts
                    )}
                    suffix="题次"
                  />

                  <StatItem
                    label="答错"
                    value={String(
                      wrongAttempts
                    )}
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
                      {latestTopic ??
                        "还没有练习记录"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {totalAttempts > 0
                        ? "可以继续完成相关专题练习，巩固刚刚学习过的内容。"
                        : "完成第一道练习后，这里会显示你最近学习的专题。"}
                    </p>
                  </div>

                  {/* 当前正确率 */}
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

                    <p className="mt-3 text-sm text-slate-500">
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
          <section className="py-10">
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold text-slate-900">
                  登录彻凌数学，保存学习记录
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  登录账号后，
                  练习记录、错题和学习数据都会保存到云端，
                  可以在不同设备之间同步。
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

        {/* 学习入口 */}
        <section className="pb-12">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习入口
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              学知识、做练习、整理错题，
              再通过学习数据回顾掌握情况。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <EntryCard
              number="01"
              title="知识学习"
              description="按照课程目录系统学习高一数学知识点。"
              href="/grade1"
              action="进入课程"
            />

            <EntryCard
              number="02"
              title="专题训练"
              description="在线选择答案、自动判题并查看详细解析。"
              href="/practice"
              action="开始做题"
            />

            <EntryCard
              number="03"
              title="我的错题"
              description="自动保存答错题目，针对薄弱内容集中复习。"
              href="/mistakes"
              action="查看错题"
            />

            <EntryCard
              number="04"
              title="学习报告"
              description="查看答题数据、正确率和不同专题表现。"
              href="/report"
              action="查看报告"
            />
          </div>
        </section>

        {/* 当前课程 */}
        <section className="border-t border-slate-200 py-12">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              课程体系
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              彻凌数学当前优先建设高一数学课程，
              高二、高三内容将在后续逐步开放。
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            <CourseRow
              grade="高一数学"
              description="集合、一元二次函数方程与不等式、函数、指数与对数、三角函数、平面向量、统计与概率等基础模块。"
              status="已开放"
              href="/grade1"
            />

            <CourseRow
              grade="高二数学"
              description="数列、空间向量、解析几何、导数等内容。"
              status="准备中"
            />

            <CourseRow
              grade="高三复习"
              description="一轮复习、专题突破、真题训练与综合提升。"
              status="准备中"
            />
          </div>
        </section>

        {/* 当前建设进度 */}
        <section className="border-t border-slate-200 py-12">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              当前建设进度
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              高一数学当前已经完整开放前 3 个知识模块。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ModuleCard
              number="01"
              title="集合与常用逻辑用语"
              status="5 / 5"
              href="/grade1/sets"
            />

            <ModuleCard
              number="02"
              title="一元二次函数、方程和不等式"
              status="5 / 5"
              href="/grade1/quadratic"
            />

            <ModuleCard
              number="03"
              title="函数的概念与性质"
              status="5 / 5"
              href="/grade1/functions"
            />
          </div>
        </section>

        {/* 学习方法 */}
        <section className="border-t border-slate-200 pt-12">
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
                description="通过题目判断自己是否真正掌握。"
              />

              <MethodItem
                number="3"
                title="整理错误原因"
                description="不要只记答案，要找到错误发生的位置。"
              />

              <MethodItem
                number="4"
                title="再次复习"
                description="隔一段时间回看错题与薄弱知识点。"
              />
            </div>
          </div>
        </section>

        {/* 品牌区域 */}
        <section className="mt-14 border-t border-slate-200 pt-12">
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

      {/* 页脚 */}
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

function CourseRow({
  grade,
  description,
  status,
  href,
}: {
  grade: string;
  description: string;
  status: string;
  href?: string;
}) {
  const content = (
    <div className="grid gap-3 py-6 sm:grid-cols-[160px_1fr_auto] sm:items-center">
      <div className="font-semibold text-slate-900">
        {grade}
      </div>

      <p className="text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div>
        {href ? (
          <span className="text-sm font-medium text-slate-700">
            查看课程 →
          </span>
        ) : (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-400">
            {status}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block px-2 transition hover:bg-white"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="px-2">
      {content}
    </div>
  );
}

function ModuleCard({
  number,
  title,
  status,
  href,
}: {
  number: string;
  title: string;
  status: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
          {status} 已开放
        </span>
      </div>

      <h3 className="mt-4 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-sm font-medium text-slate-700 transition group-hover:text-blue-600">
        查看模块 →
      </p>
    </Link>
  );
}

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