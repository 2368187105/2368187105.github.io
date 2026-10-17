"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { createClient } from "@/lib/supabase/client";
import { practiceTopics } from "@/data/questions";

type Attempt = {
  id: number;
  user_id: string;
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

const reviewAdvice: Record<string, string> = {
  集合的概念:
    "重点复习集合与元素、确定性、互异性、无序性，以及 ∈、∉ 的正确使用。",

  集合间的基本关系:
    "重点复习子集、真子集、集合相等和空集，注意区分元素属于和集合包含。",

  集合的基本运算:
    "重点复习交集、并集和补集。可以记住：交集找共同，并集找全部，补集依赖全集。",

  充分条件与必要条件:
    "建议先判断 p⇒q，再判断 q⇒p，根据两个方向区分充分、必要和充要关系。",

  全称量词与存在量词:
    "重点复习 ∀、∃ 和含量词命题的否定，注意否定时既要改变量词，也要否定结论。",

  等式与不等式的基本性质:
    "重点复习不等式变形规则。两边同时加减同一个数方向不变；乘除负数时必须改变不等号方向。",

  基本不等式:
    "重点复习基本不等式的使用条件和等号成立条件。求最值时检查“一正、二定、三相等”。",

  一元二次函数与一元二次方程:
    "重点复习判别式 Δ、函数零点、方程实数根以及抛物线与 x 轴交点之间的联系。",

  一元二次不等式:
    "建议结合抛物线图像复习函数正负。重点掌握 a>0、有两个实根时“大于取两边，小于取中间”的适用条件。",

  "二次函数、方程与不等式的综合应用":
    "重点练习参数与判别式、根与系数、二次函数最值和实际应用题，先判断题目需要使用哪一种工具。",

  函数的概念:
    "重点重新检查函数定义、对应关系、定义域以及“同一函数”的判断。",

  定义域与值域:
    "建议重点复习分母不能为 0、偶次根式限制，以及二次函数值域的求法。",

  函数的单调性:
    "建议结合函数图像重新理解递增、递减和单调区间，并复习二次函数的对称轴。",

  函数的奇偶性:
    "重点复习定义域关于原点对称这一前提，以及 f(-x) 与 f(x) 的比较。",

  函数的最大值与最小值:
    "建议复习二次函数配方法、闭区间端点比较以及利用单调性求最值。",
};

function normalizeTopic(topic: string) {
  const value = topic.trim();

  // 当前标准专题名称
  if (
    practiceTopics.some(
      (practiceTopic) => practiceTopic === value
    )
  ) {
    return value;
  }

  // 集合旧数据兼容
  if (value.includes("集合的概念")) {
    return "集合的概念";
  }

  if (
    value.includes("集合间") ||
    value.includes("集合关系")
  ) {
    return "集合间的基本关系";
  }

  if (
    value.includes("集合的基本运算") ||
    value.includes("集合运算")
  ) {
    return "集合的基本运算";
  }

  if (
    value.includes("充分条件") ||
    value.includes("必要条件")
  ) {
    return "充分条件与必要条件";
  }

  if (
    value.includes("全称量词") ||
    value.includes("存在量词")
  ) {
    return "全称量词与存在量词";
  }

  // 第二模块旧数据兼容
  if (
    value.includes("等式与不等式的基本性质") ||
    value.includes("不等式基本性质")
  ) {
    return "等式与不等式的基本性质";
  }

  if (value.includes("基本不等式")) {
    return "基本不等式";
  }

  if (
    value.includes("一元二次函数与一元二次方程") ||
    value.includes("二次函数与方程")
  ) {
    return "一元二次函数与一元二次方程";
  }

  if (value.includes("一元二次不等式")) {
    return "一元二次不等式";
  }

  if (
    value.includes("二次函数、方程与不等式") ||
    value.includes("综合应用")
  ) {
    return "二次函数、方程与不等式的综合应用";
  }

  // 函数旧数据兼容
  if (value.includes("函数的概念")) {
    return "函数的概念";
  }

  if (
    value.includes("定义域") ||
    value.includes("值域")
  ) {
    return "定义域与值域";
  }

  if (value.includes("单调")) {
    return "函数的单调性";
  }

  if (value.includes("奇偶")) {
    return "函数的奇偶性";
  }

  if (
    value.includes("最大值") ||
    value.includes("最小值") ||
    value.includes("最值")
  ) {
    return "函数的最大值与最小值";
  }

  return value;
}

export default function ReportPage() {
  const supabase = useMemo(
    () => createClient(),
    []
  );

  const [attempts, setAttempts] =
    useState<Attempt[]>([]);

  const [email, setEmail] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [authChecked, setAuthChecked] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {
    async function loadReport() {
      setLoading(true);
      setErrorMessage("");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setAuthChecked(true);

      if (!user) {
        setEmail(null);
        setAttempts([]);
        setLoading(false);
        return;
      }

      setEmail(user.email ?? null);

      const { data, error } = await supabase
        .from("practice_attempts")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        setErrorMessage(
          "学习记录加载失败，请稍后刷新页面。"
        );
        setAttempts([]);
        setLoading(false);
        return;
      }

      setAttempts(
        (data ?? []) as Attempt[]
      );

      setLoading(false);
    }

    loadReport();
  }, [supabase]);

  const total = attempts.length;

  const correct = attempts.filter(
    (attempt) => attempt.is_correct
  ).length;

  const wrong = total - correct;

  const accuracy =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);

  const topicStats: TopicStat[] =
    practiceTopics.map((topic) => {
      const topicAttempts =
        attempts.filter(
          (attempt) =>
            normalizeTopic(attempt.topic) ===
            topic
        );

      const topicCorrect =
        topicAttempts.filter(
          (attempt) => attempt.is_correct
        ).length;

      const topicTotal =
        topicAttempts.length;

      return {
        topic,
        total: topicTotal,
        correct: topicCorrect,
        wrong:
          topicTotal - topicCorrect,
        accuracy:
          topicTotal === 0
            ? 0
            : Math.round(
                (topicCorrect / topicTotal) *
                  100
              ),
      };
    });

  const studiedTopics =
    topicStats.filter(
      (item) => item.total > 0
    );

  const weakestTopic =
    studiedTopics.length === 0
      ? null
      : [...studiedTopics].sort(
          (a, b) => {
            if (
              a.accuracy !== b.accuracy
            ) {
              return (
                a.accuracy - b.accuracy
              );
            }

            return b.total - a.total;
          }
        )[0];

  const strongestTopic =
    studiedTopics.length === 0
      ? null
      : [...studiedTopics].sort(
          (a, b) => {
            if (
              a.accuracy !== b.accuracy
            ) {
              return (
                b.accuracy - a.accuracy
              );
            }

            return b.total - a.total;
          }
        )[0];

  const recentAttempts =
    attempts.slice(0, 10);

  if (!authChecked || loading) {
    return (
      <main className="min-h-screen bg-[#fafafa]">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm text-slate-500">
              正在加载学习报告...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!email) {
    return (
      <main className="min-h-screen bg-[#fafafa]">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-sm font-medium text-blue-600">
              学习报告
            </p>

            <h1 className="mt-3 text-2xl font-bold text-slate-900">
              登录后查看学习报告
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              登录后可以查看答题次数、正确率、薄弱专题以及最近练习情况。
            </p>

            <Link
              href="/login"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
            >
              去登录
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                学习数据
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                学习报告
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                根据专题训练记录统计学习情况，
                帮助你发现已经掌握的内容和需要重点复习的专题。
              </p>

              <p className="mt-3 text-sm text-slate-400">
                当前账号：{email}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/practice"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                继续训练
              </Link>

              <Link
                href="/mistakes"
                className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                查看错题
              </Link>
            </div>
          </div>
        </section>

        {errorMessage && (
          <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        {total === 0 ? (
          <section className="py-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <h2 className="text-xl font-bold text-slate-900">
                还没有练习记录
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                完成专题训练后，这里会自动生成正确率、
                各专题掌握情况和复习建议。
              </p>

              <Link
                href="/practice"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
              >
                开始专题训练
              </Link>
            </div>
          </section>
        ) : (
          <>
            {/* 总体统计 */}
            <section className="py-10">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  label="累计答题"
                  value={String(total)}
                  suffix="题"
                />

                <StatCard
                  label="答对"
                  value={String(correct)}
                  suffix="题"
                />

                <StatCard
                  label="答错"
                  value={String(wrong)}
                  suffix="题"
                />

                <StatCard
                  label="正确率"
                  value={`${accuracy}%`}
                />
              </div>
            </section>

            {/* 强弱项 */}
            <section className="border-t border-slate-200 py-10">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-medium text-emerald-600">
                    当前优势专题
                  </p>

                  {strongestTopic ? (
                    <>
                      <h2 className="mt-3 text-xl font-bold text-slate-900">
                        {strongestTopic.topic}
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        已练习{" "}
                        {strongestTopic.total} 题，
                        正确率{" "}
                        {strongestTopic.accuracy}%。
                      </p>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-slate-500">
                      暂无数据
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-medium text-blue-600">
                    优先复习专题
                  </p>

                  {weakestTopic ? (
                    <>
                      <h2 className="mt-3 text-xl font-bold text-slate-900">
                        {weakestTopic.topic}
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        已练习{" "}
                        {weakestTopic.total} 题，
                        正确率{" "}
                        {weakestTopic.accuracy}%。
                      </p>

                      <div className="mt-5 rounded-xl bg-slate-50 p-4">
                        <p className="text-xs text-slate-400">
                          复习建议
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {reviewAdvice[
                            weakestTopic.topic
                          ] ??
                            "建议重新学习对应章节，并完成一组专题练习。"}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-slate-500">
                      暂无数据
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* 专题统计 */}
            <section className="border-t border-slate-200 py-10">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-slate-900">
                  各专题掌握情况
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  当前共包含 15 个训练专题。
                </p>
              </div>

              <div className="space-y-3">
                {topicStats.map((item) => (
                  <TopicRow
                    key={item.topic}
                    item={item}
                  />
                ))}
              </div>
            </section>

            {/* 最近记录 */}
            <section className="border-t border-slate-200 py-10">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-slate-900">
                  最近练习
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  显示最近 10 次答题记录。
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                {recentAttempts.map(
                  (attempt, index) => (
                    <div
                      key={attempt.id}
                      className={`flex flex-col justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center ${
                        index ===
                        recentAttempts.length - 1
                          ? ""
                          : "border-b border-slate-100"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {normalizeTopic(
                            attempt.topic
                          )}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {formatDate(
                            attempt.created_at
                          )}
                        </p>
                      </div>

                      <span
                        className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                          attempt.is_correct
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        {attempt.is_correct
                          ? "回答正确"
                          : "回答错误"}
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* 底部 */}
            <section className="border-t border-slate-200 pt-10">
              <div className="grid gap-4 sm:grid-cols-3">
                <ActionCard
                  href="/practice"
                  title="继续专题训练"
                  description="通过更多练习提高各专题掌握程度。"
                />

                <ActionCard
                  href="/mistakes"
                  title="复习错题"
                  description="重新完成之前答错的题目。"
                />

                <ActionCard
                  href="/grade1"
                  title="返回课程"
                  description="重新学习薄弱知识点对应的课程。"
                />
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-2xl font-bold text-slate-900">
          {value}
        </span>

        {suffix && (
          <span className="pb-0.5 text-sm text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function TopicRow({
  item,
}: {
  item: TopicStat;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium text-slate-900">
            {item.topic}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {item.total === 0
              ? "暂未练习"
              : `已练习 ${item.total} 题 · 答对 ${item.correct} 题 · 答错 ${item.wrong} 题`}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${
                  item.total === 0
                    ? 0
                    : item.accuracy
                }%`,
              }}
            />
          </div>

          <span className="w-12 text-right text-sm font-semibold text-slate-700">
            {item.total === 0
              ? "—"
              : `${item.accuracy}%`}
          </span>
        </div>
      </div>
    </div>
  );
}

function ActionCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
    >
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-4 text-sm font-medium text-slate-700">
        进入 →
      </p>
    </Link>
  );
}

function formatDate(value: string) {
  const date = new Date(value);

  return date.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}