"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Mistake = {
  id: number;
  user_id: string;
  question_id: string;
  topic: string;
  question: string;
  user_answer: string;
  correct_answer: string;
  explanation: string | null;
  created_at: string;
};

export default function MistakesPage() {
  const supabase = createClient();

  const [mistakes, setMistakes] = useState<Mistake[]>(
    []
  );

  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(
    null
  );
  const [error, setError] = useState("");

  useEffect(() => {
    loadMistakes();
  }, []);

  async function loadMistakes() {
    setLoading(true);
    setError("");

    // 获取当前用户
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }

    setLoggedIn(true);
    setEmail(user.email ?? null);

    // RLS 会自动只返回这个学生自己的错题
    const { data, error } = await supabase
      .from("mistakes")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setError("错题读取失败，请稍后再试。");
      setLoading(false);
      return;
    }

    setMistakes(data ?? []);
    setLoading(false);
  }

  async function deleteMistake(id: number) {
    const { error } = await supabase
      .from("mistakes")
      .delete()
      .eq("id", id);

    if (error) {
      alert("删除失败：" + error.message);
      return;
    }

    setMistakes(
      mistakes.filter(
        (mistake) => mistake.id !== id
      )
    );
  }

  async function clearMistakes() {
    const confirmClear = window.confirm(
      "确定要清空全部错题吗？"
    );

    if (!confirmClear) {
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const { error } = await supabase
      .from("mistakes")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      alert("清空失败：" + error.message);
      return;
    }

    setMistakes([]);
  }

  function formatTime(time: string) {
    return new Date(time).toLocaleString("zh-CN");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 顶部 */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </a>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="/"
              className="text-slate-500 hover:text-blue-600"
            >
              首页
            </a>

            <a
              href="/grade1"
              className="text-slate-500 hover:text-blue-600"
            >
              高一数学
            </a>

            <a
              href="/practice"
              className="text-slate-500 hover:text-blue-600"
            >
              专题训练
            </a>

            <span className="font-medium text-blue-600">
              我的错题
            </span>
          </nav>
        </div>
      </header>

      {/* 主体 */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            MY MISTAKES
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            我的错题本
          </h1>

          <p className="mt-4 text-slate-600">
            登录后，错题会保存在云端，
            在不同设备登录同一账号都可以查看。
          </p>

          {email && (
            <p className="mt-2 text-sm text-slate-400">
              当前账号：{email}
            </p>
          )}
        </div>

        {/* 加载 */}
        {loading && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-500">
              正在加载云端错题...
            </p>
          </div>
        )}

        {/* 未登录 */}
        {!loading && !loggedIn && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
            <div className="text-4xl">
              🔒
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              请先登录
            </h2>

            <p className="mt-3 text-slate-500">
              登录后才能查看和同步你的云端错题。
            </p>

            <a
              href="/login"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              登录 / 注册
            </a>
          </div>
        )}

        {/* 报错 */}
        {!loading && error && (
          <div className="mt-10 rounded-xl bg-red-50 p-5 text-red-700">
            {error}
          </div>
        )}

        {/* 已登录 */}
        {!loading && loggedIn && !error && (
          <>
            {/* 数量 */}
            <div className="mt-10 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-sm text-slate-500">
                  当前错题数量
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {mistakes.length}
                </p>
              </div>

              {mistakes.length > 0 && (
                <button
                  onClick={clearMistakes}
                  className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  清空错题
                </button>
              )}
            </div>

            {/* 没错题 */}
            {mistakes.length === 0 && (
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center">
                <div className="text-5xl">
                  ✓
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  暂时没有错题
                </h2>

                <p className="mt-3 text-slate-500">
                  专题训练中回答错误的题目会自动同步到这里。
                </p>

                <a
                  href="/practice"
                  className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
                >
                  去做练习
                </a>
              </div>
            )}

            {/* 错题列表 */}
            {mistakes.length > 0 && (
              <div className="mt-6 space-y-5">
                {mistakes.map(
                  (mistake, index) => (
                    <article
                      key={mistake.id}
                      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-blue-600">
                            错题 {index + 1}
                          </p>

                          <p className="mt-2 text-sm text-slate-500">
                            {mistake.topic}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            deleteMistake(
                              mistake.id
                            )
                          }
                          className="text-sm text-slate-400 hover:text-red-600"
                        >
                          删除
                        </button>
                      </div>

                      <h2 className="mt-5 text-lg font-semibold leading-8 text-slate-900">
                        {mistake.question}
                      </h2>

                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl bg-red-50 p-5">
                          <p className="text-sm font-medium text-red-700">
                            我的答案
                          </p>

                          <p className="mt-2 text-slate-700">
                            {
                              mistake.user_answer
                            }
                          </p>
                        </div>

                        <div className="rounded-xl bg-green-50 p-5">
                          <p className="text-sm font-medium text-green-700">
                            正确答案
                          </p>

                          <p className="mt-2 text-slate-700">
                            {
                              mistake.correct_answer
                            }
                          </p>
                        </div>
                      </div>

                      {mistake.explanation && (
                        <div className="mt-4 rounded-xl bg-slate-50 p-5">
                          <p className="font-semibold text-slate-900">
                            解析
                          </p>

                          <p className="mt-2 leading-7 text-slate-600">
                            {
                              mistake.explanation
                            }
                          </p>
                        </div>
                      )}

                      <p className="mt-4 text-xs text-slate-400">
                        加入时间：
                        {formatTime(
                          mistake.created_at
                        )}
                      </p>
                    </article>
                  )
                )}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}