"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { questions } from "@/data/questions";

type Attempt = {
  id: number;
  question_id: string;
  topic: string;
  selected_answer: string;
  correct_answer: string;
  is_correct: boolean;
  created_at: string;
};

type TopicStat = {
  topic: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
};

export default function ReportPage() {
  const supabase = createClient();

  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    loadReport();
  }, []);

  async function loadReport() {
    setLoading(true);
    setError("");

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

    const { data, error } = await supabase
      .from("practice_attempts")
      .select(
        "id, question_id, topic, selected_answer, correct_answer, is_correct, created_at"
      )
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setError("学习数据读取失败，请稍后重试。");
      setLoading(false);
      return;
    }

    setAttempts(data ?? []);
    setLoading(false);
  }

  const totalAttempts = attempts.length;

  const correctAttempts = attempts.filter(
    (item) => item.is_correct
  ).length;

  const wrongAttempts =
    totalAttempts - correctAttempts;

  const totalAccuracy =
    totalAttempts === 0
      ? 0
      : Math.round(
          (correctAttempts / totalAttempts) * 100
        );

  const topicStats = useMemo(() => {
    const map = new Map<
      string,
      {
        total: number;
        correct: number;
      }
    >();

    attempts.forEach((attempt) => {
      const current = map.get(attempt.topic) ?? {
        total: 0,
        correct: 0,
      };

      current.total += 1;

      if (attempt.is_correct) {
        current.correct += 1;
      }

      map.set(attempt.topic, current);
    });

    const result: TopicStat[] = [];

    map.forEach((value, topic) => {
      const wrong =
        value.total - value.correct;

      const accuracy =
        value.total === 0
          ? 0
          : Math.round(
              (value.correct / value.total) * 100
            );

      result.push({
        topic,
        total: value.total,
        correct: value.correct,
        wrong,
        accuracy,
      });
    });

    return result.sort(
      (a, b) => a.accuracy - b.accuracy
    );
  }, [attempts]);

  const weakestTopic =
    topicStats.length > 0
      ? topicStats[0]
      : null;

  function getQuestionTitle(
    questionId: string
  ) {
    const question = questions.find(
      (item) => item.id === questionId
    );

    return question?.title ?? questionId;
  }

  function formatTime(time: string) {
    return new Date(time).toLocaleString(
      "zh-CN"
    );
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

            <span className="font-medium text-blue-600">
              学习报告
            </span>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        {/* 标题 */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            LEARNING REPORT
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            我的学习报告
          </h1>

          <p className="mt-4 text-slate-600">
            根据你的云端练习数据自动生成学习情况分析。
          </p>

          {email && (
            <p className="mt-2 text-sm text-slate-400">
              当前账号：{email}
            </p>
          )}
        </div>

        {/* 加载 */}
        {loading && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-slate-500">
              正在生成学习报告...
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
              登录后才能查看你的个人学习报告。
            </p>

            <a
              href="/login"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
            >
              登录 / 注册
            </a>
          </div>
        )}

        {/* 错误 */}
        {!loading && error && (
          <div className="mt-10 rounded-xl bg-red-50 p-5 text-red-700">
            {error}
          </div>
        )}

        {/* 正常报告 */}
        {!loading &&
          loggedIn &&
          !error && (
            <>
              {/* 总览 */}
              <section className="mt-10">
                <h2 className="text-2xl font-bold text-slate-900">
                  学习概览
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-4">
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

                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm text-slate-500">
                      总正确率
                    </p>

                    <p className="mt-3 text-4xl font-bold text-blue-600">
                      {totalAccuracy}%
                    </p>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full bg-blue-600"
                        style={{
                          width: `${totalAccuracy}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* 没有记录 */}
              {totalAttempts === 0 && (
                <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-14 text-center">
                  <h2 className="text-xl font-bold text-slate-900">
                    还没有练习记录
                  </h2>

                  <p className="mt-3 text-slate-500">
                    完成专题练习后，这里会自动生成分析。
                  </p>

                  <a
                    href="/practice"
                    className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
                  >
                    去做练习
                  </a>
                </div>
              )}

              {totalAttempts > 0 && (
                <>
                  {/* 薄弱知识点 */}
                  <section className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-900">
                      学习诊断
                    </h2>

                    {weakestTopic && (
                      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                        <p className="text-sm font-semibold text-amber-700">
                          当前最需要巩固
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          {weakestTopic.topic}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-700">
                          当前正确率为{" "}
                          <strong>
                            {weakestTopic.accuracy}%
                          </strong>
                          ，共完成{" "}
                          {weakestTopic.total} 次练习。
                        </p>

                        <a
                          href="/practice"
                          className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
                        >
                          去针对练习 →
                        </a>
                      </div>
                    )}
                  </section>

                  {/* 各知识点 */}
                  <section className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-900">
                      知识点掌握情况
                    </h2>

                    <div className="mt-6 space-y-4">
                      {topicStats.map(
                        (item) => (
                          <div
                            key={item.topic}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-bold text-slate-900">
                                  {item.topic}
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                  共 {item.total} 次 ·
                                  答对 {item.correct} ·
                                  答错 {item.wrong}
                                </p>
                              </div>

                              <p
                                className={`text-2xl font-bold ${
                                  item.accuracy >=
                                  80
                                    ? "text-green-600"
                                    : item.accuracy >=
                                        60
                                      ? "text-amber-600"
                                      : "text-red-500"
                                }`}
                              >
                                {item.accuracy}%
                              </p>
                            </div>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full bg-blue-600"
                                style={{
                                  width: `${item.accuracy}%`,
                                }}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </section>

                  {/* 最近练习 */}
                  <section className="mt-12">
                    <div className="flex items-end justify-between">
                      <h2 className="text-2xl font-bold text-slate-900">
                        最近练习记录
                      </h2>

                      <a
                        href="/practice"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        继续练习 →
                      </a>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      {attempts
                        .slice(0, 10)
                        .map(
                          (
                            attempt,
                            index
                          ) => (
                            <div
                              key={
                                attempt.id
                              }
                              className={`flex items-center justify-between px-6 py-5 ${
                                index !==
                                Math.min(
                                  attempts.length,
                                  10
                                ) -
                                  1
                                  ? "border-b border-slate-100"
                                  : ""
                              }`}
                            >
                              <div>
                                <p className="font-medium text-slate-900">
                                  {getQuestionTitle(
                                    attempt.question_id
                                  )}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                  {
                                    attempt.topic
                                  }
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                  {formatTime(
                                    attempt.created_at
                                  )}
                                </p>
                              </div>

                              <div className="text-right">
                                <span
                                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    attempt.is_correct
                                      ? "bg-green-50 text-green-700"
                                      : "bg-red-50 text-red-700"
                                  }`}
                                >
                                  {attempt.is_correct
                                    ? "回答正确"
                                    : "回答错误"}
                                </span>

                                <p className="mt-2 text-xs text-slate-400">
                                  选择：
                                  {
                                    attempt.selected_answer
                                  }
                                  {" / "}
                                  正确：
                                  {
                                    attempt.correct_answer
                                  }
                                </p>
                              </div>
                            </div>
                          )
                        )}
                    </div>
                  </section>
                </>
              )}
            </>
          )}
      </section>
    </main>
  );
}