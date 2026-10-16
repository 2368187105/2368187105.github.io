"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Home() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState<string | null>(null);
  const [checkingUser, setCheckingUser] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  // 学习数据
  const [statsLoading, setStatsLoading] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

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
  }, []);

  async function loadLearningStats(userId: string) {
    setStatsLoading(true);

    const { data, error } = await supabase
      .from("practice_attempts")
      .select("is_correct")
      .eq("user_id", userId);

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

    setStatsLoading(false);
  }

  function resetStats() {
    setTotalAttempts(0);
    setCorrectAttempts(0);
    setWrongAttempts(0);
    setAccuracy(0);
  }

  async function handleLogout() {
    setLoggingOut(true);

    await supabase.auth.signOut();

    setEmail(null);
    resetStats();

    setLoggingOut(false);

    router.push("/");
    router.refresh();
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

          <div className="flex items-center gap-8">
            {/* 导航 */}
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

              <span className="cursor-not-allowed text-slate-400">
                高二数学
              </span>

              <span className="cursor-not-allowed text-slate-400">
                高三复习
              </span>

              <a
                href="/practice"
                className="hover:text-blue-600"
              >
                专题训练
              </a>

              <a
                href="/mistakes"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                我的错题
              </a>
            </nav>

            {/* 账号状态 */}
            <div className="border-l border-slate-200 pl-6">
              {checkingUser ? (
                <span className="text-sm text-slate-400">
                  检查登录状态...
                </span>
              ) : email ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      当前学生
                    </p>

                    <p className="max-w-44 truncate text-sm font-medium text-slate-700">
                      {email}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-400"
                  >
                    {loggingOut
                      ? "退出中..."
                      : "退出登录"}
                  </button>
                </div>
              ) : (
                <a
                  href="/login"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  登录 / 注册
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 首屏 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-wide text-blue-600">
            HIGH SCHOOL MATHEMATICS
          </p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            把零散的知识点，
            <br />
            变成完整的数学体系。
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            系统整理高中数学知识点、典型例题、专题训练与寒暑假学习资料，
            帮助学生建立清晰的知识结构。
          </p>

          {/* 登录欢迎 */}
          {email && (
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
              <p className="text-sm text-blue-700">
                欢迎回来，
                <span className="ml-1 font-semibold">
                  {email}
                </span>
              </p>
            </div>
          )}

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/grade1"
              className="rounded-lg bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              开始学习
            </a>

            <a
              href="/practice"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-slate-700 transition hover:bg-slate-100"
            >
              专题训练
            </a>

            <a
              href="/mistakes"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-slate-700 transition hover:bg-slate-100"
            >
              查看错题本
            </a>
          </div>
        </div>
      </section>

      {/* 个人学习数据 */}
      {email && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                LEARNING REPORT
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                我的学习数据
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                数据来自你的云端练习记录。
              </p>
            </div>

            <a
              href="/practice"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              继续练习 →
            </a>
          </div>

          {statsLoading ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-500 shadow-sm">
              正在读取学习数据...
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
              {/* 累计答题 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  累计答题
                </p>

                <p className="mt-3 text-4xl font-bold text-slate-900">
                  {totalAttempts}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  次
                </p>
              </div>

              {/* 答对 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  答对
                </p>

                <p className="mt-3 text-4xl font-bold text-green-600">
                  {correctAttempts}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  题次
                </p>
              </div>

              {/* 答错 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  答错
                </p>

                <p className="mt-3 text-4xl font-bold text-red-500">
                  {wrongAttempts}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  题次
                </p>
              </div>

              {/* 正确率 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  正确率
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-600">
                  {accuracy}%
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{
                      width: `${accuracy}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 第一次使用 */}
          {!statsLoading &&
            totalAttempts === 0 && (
              <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-5">
                <p className="text-sm text-slate-600">
                  你还没有云端答题记录。
                </p>

                <a
                  href="/practice"
                  className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  去完成第一道练习 →
                </a>
              </div>
            )}
        </section>
      )}

      {/* 三个核心入口 */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <a
            href="/grade1/functions"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-blue-600">
              知识学习
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              函数的概念与性质
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              单调性、奇偶性、定义域、值域和函数最值。
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              开始学习 →
            </p>
          </a>

          <a
            href="/practice"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-blue-600">
              在线练习
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              专题训练
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              在线选择答案、自动判题、查看解析并记录练习数据。
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              去做题 →
            </p>
          </a>

          <a
            href="/mistakes"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-semibold text-blue-600">
              错题整理
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              我的错题本
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              自动保存错误题目，并通过云端账号跨设备同步。
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              查看错题 →
            </p>
          </a>
        </div>
      </section>

      {/* 课程体系 */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            COURSE SYSTEM
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            课程体系
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* 高一 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                高一数学
              </h3>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                已开放
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              集合、函数、指数与对数、三角函数、平面向量等基础模块。
            </p>

            <a
              href="/grade1"
              className="mt-6 inline-block font-medium text-blue-600 hover:underline"
            >
              查看课程 →
            </a>
          </div>

          {/* 高二 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                高二数学
              </h3>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                开发中
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              数列、立体几何、解析几何、空间向量、导数等核心模块。
            </p>

            <span className="mt-6 inline-block text-sm font-medium text-slate-400">
              即将开放
            </span>
          </div>

          {/* 高三 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                高三复习
              </h3>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                开发中
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              一轮复习、专题突破、真题训练与高考压轴题提升。
            </p>

            <span className="mt-6 inline-block text-sm font-medium text-slate-400">
              即将开放
            </span>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <p className="text-sm text-slate-500">
            高中数学学习平台
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a
              href="/grade1"
              className="hover:text-blue-600"
            >
              知识学习
            </a>

            <a
              href="/practice"
              className="hover:text-blue-600"
            >
              专题训练
            </a>

            <a
              href="/mistakes"
              className="hover:text-blue-600"
            >
              我的错题
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}