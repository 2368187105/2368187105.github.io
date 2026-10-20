"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { createClient } from "@/lib/supabase/client";
import {
  practiceTopics,
  questions,
} from "@/data/questions";

import { grade2PracticeTopics, grade2PracticeChapters } from "@/data/questions";

/* =========================
   数据类型
========================= */

type Attempt = {
  id: number | string;
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

/* =========================
   章节名称
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

type Grade = "高一" | "高二";
const grade2TopicSet = new Set<string>(grade2PracticeTopics);
const grade1Topics = practiceTopics.filter((topic) => !grade2TopicSet.has(topic));
const allTopics: readonly string[] = [...new Set<string>([...practiceTopics, ...grade2PracticeTopics])];
const knownTopics = new Set<string>(allTopics);
const grade2ChapterNames = grade2PracticeChapters.map((chapter) => chapter.title);

const questionTopicMap = new Map(
  questions.map((question) => [
    question.id,
    question.topic,
  ])
);

/* =========================
   专题复习建议
========================= */

const reviewAdvice: Record<string, string> = {
  "线性回归分析": "先看散点图，再求回归系数；残差用实际值减预测值，相关不等于因果，外推需核对适用范围。",
  "独立性检验": "列出观测与期望频数，检查随机抽样、独立观察和期望频数条件；未拒绝独立并不等于证明独立。",
  "条件概率": "明确条件事件及其非零概率，区分独立与互斥；不放回抽样须更新剩余构成，逆向条件不能直接交换。",
  "离散型随机变量及其分布列": "先列出全部取值并检查概率总和，再计算期望与方差；套用二项分布前核对独立、同概率等条件。",
  "正态分布": "N(μ，σ²) 的第二个参数为方差，标准化除以标准差；结合对称性与常用标准差区间计算近似概率。",
  "两个基本计数原理": "先明确完整方案，区分分类与分步，检查类别是否重叠以及步骤限制是否改变可选数量。",
  "排列": "判断顺序是否影响结果，复习特殊位置优先、相邻捆绑与不相邻插空，避免漏排内部顺序。",
  "组合": "只选元素时使用组合；至少条件可用补集，无标签等人数分组注意排除整组交换造成的重复。",
  "二项式定理": "用通项整理指数，第 k 项对应 r=k−1，区分二项式系数与实际项的系数。",
  "空间向量及其运算": "复习向量首尾相接、数乘与共面表示，注意数量积是实数，夹角公式要求非零向量。",
  "空间向量的坐标表示": "由终点减起点求位移，逐分量运算，再用模与数量积公式计算距离、夹角和垂直条件。",
  "空间向量的应用": "先找方向向量和法向量。两直线夹角用余弦，线面角用正弦；指定二面角需结合实际半平面位置。",
  "导数的概念": "复习平均变化率、导数定义与切线方程，区分增量趋近零和增量等于零。",
  "导数的运算": "先辨认函数结构，复习乘积、商与链式法则，注意定义域和内层导数。",
  "导数在研究函数中的应用": "先确定定义域，再列表判断导数符号；极值检查变号，闭区间最值必须比较端点。",
  "数列": "复习通项与递推关系；由部分和求通项时，分别检查首项与 n≥2 的情况。",
  "等差数列": "核对首项、公差和项数，复习通项及首末配对求和，注意 n−1 个公差。",
  "等比数列": "复习非零项、公比和通项；求和先区分 q=1 与 q≠1，增长题核对变化次数。",
  "数学归纳法": "按起点验证、归纳假设、递推证明与结论四个环节复习，不能用有限次验证替代证明。",
  "椭圆": "先用较大分母确定焦点方向，再复习 a²=b²+c² 与 e=c/a。焦点距离题优先使用距离和的定义。",
  "双曲线": "检查正平方项对应的焦点方向，区分 c²=a²+b² 与椭圆参数关系，并按方程方向写渐近线。",
  "抛物线": "先比较系数求 p，明确焦点到顶点为 p/2。焦半径题可转化为点到准线的距离。",
  "圆的方程": "重点复习标准方程与一般方程的转换，检查圆心坐标的符号和半径平方为正的条件。",
  "直线与圆的位置关系": "先求圆心到直线的距离，再与半径比较；求弦长时注意半弦与整弦的区别。",
  "圆与圆的位置关系": "同时比较圆心距、半径和与半径差，注意内切与重合的区别，再练习相减求公共弦直线。",
  "集合的概念":
    "重点复习集合元素的确定性、互异性和无序性，区分元素属于与集合包含。",

  "集合间的基本关系":
    "重点复习子集、真子集、空集和集合相等，注意相关数学符号的正确使用。",

  "集合的基本运算":
    "重点复习交集、并集和补集，可以结合数轴与韦恩图理解集合运算。",

  "充分条件与必要条件":
    "分别判断两个命题之间能否相互推出，明确充分、必要和充要条件的区别。",

  "全称量词与存在量词":
    "复习全称量词与存在量词，重点掌握含量词命题的否定方法。",

  "等式与不等式的基本性质":
    "重点掌握不等式变形规律，特别是两边同乘负数时不等号需要改变方向。",

  "基本不等式":
    "复习基本不等式的使用条件，以及等号成立的条件。",

  "一元二次函数与一元二次方程":
    "结合抛物线图象复习判别式、方程根和函数零点之间的关系。",

  "一元二次不等式":
    "重点掌握二次函数图象与不等式解集的关系，注意抛物线开口方向。",

  "二次函数、方程与不等式的综合应用":
    "重点练习二次函数最值、根与系数关系及含参数的综合问题。",

  "函数的概念":
    "复习函数定义、对应关系以及同一函数的判断条件。",

  "定义域与值域":
    "重点检查函数定义域中的分母、根式等限制条件，复习值域求法。",

  "函数的单调性":
    "结合图象理解单调递增、单调递减以及单调区间。",

  "函数的奇偶性":
    "先检查定义域是否关于原点对称，再比较 f(-x) 与 f(x)。",

  "函数的最大值与最小值":
    "复习配方法、闭区间端点比较以及通过单调性求最值的方法。",

  "平面向量的概念与表示":
    "复习零向量、单位向量、相等向量和相反向量。判断向量相等时，既要比较模，也要比较方向。",

  "平面向量的线性运算":
    "重点复习向量加减法的三角形法则、平行四边形法则及数乘运算，注意方向。",

  "平面向量基本定理与坐标表示":
    "复习平面向量基本定理、向量坐标运算和共线条件。根据两点求向量时，用终点坐标减去起点坐标。",

  "平面向量的数量积":
    "重点复习数量积公式、模长计算及向量垂直的判断方法。",

  "平面向量的综合应用":
    "重点练习向量在三角形、中点、重心、长度和夹角等问题中的综合应用。",
};

function getReviewAdvice(topic: string) {
  if (reviewAdvice[topic]) {
    return reviewAdvice[topic];
  }

  if (
    topic.includes("指数") ||
    topic.includes("根式")
  ) {
    return "复习指数运算法则以及指数函数的图象与性质，注意底数的取值范围。";
  }

  if (topic.includes("对数")) {
    return "重点复习对数定义、对数运算法则和对数函数的单调性，注意真数必须大于零。";
  }

  if (
    topic.includes("任意角") ||
    topic.includes("弧度")
  ) {
    return "复习任意角、终边相同的角以及角度与弧度的换算。";
  }

  if (topic.includes("诱导公式")) {
    return "复习三角函数诱导公式，重点掌握角度变化时的符号判断。";
  }

  if (
    topic.includes("三角") ||
    topic.includes("正弦") ||
    topic.includes("余弦")
  ) {
    return "结合单位圆和函数图象，复习三角函数的定义、性质及恒等变换。";
  }

  return "建议重新学习对应章节，整理公式和易错知识点，再完成一组专题练习。";
}

/* =========================
   历史专题名称兼容
========================= */

function normalizeTopic(
  topic: string,
  questionId?: string
) {
  const value = (topic ?? "").trim();

  // 新题库的标准名称直接使用
  if (
    practiceTopics.some(
      (item) => item === value
    )
  ) {
    return value;
  }

  // 通过题目 ID 识别已有记录
  if (questionId) {
    const mappedTopic =
      questionTopicMap.get(questionId);

    if (mappedTopic) {
      return mappedTopic;
    }
  }

  // 旧版专题名称兼容
  if (value.includes("集合的概念")) {
    return "集合的概念";
  }

  if (
    value.includes("集合关系") ||
    value.includes("集合间")
  ) {
    return "集合间的基本关系";
  }

  if (value.includes("集合运算")) {
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

  if (value.includes("不等式基本性质")) {
    return "等式与不等式的基本性质";
  }

  if (value.includes("二次函数与方程")) {
    return "一元二次函数与一元二次方程";
  }

  if (value.includes("函数的单调")) {
    return "函数的单调性";
  }

  if (value.includes("函数的奇偶")) {
    return "函数的奇偶性";
  }

  if (value.includes("函数的最值")) {
    return "函数的最大值与最小值";
  }

  return value;
}

/* =========================
   学习报告页面
========================= */

export default function ReportPage() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>("高一");
  const currentPracticeTopics: readonly string[] = selectedGrade === "高一" ? grade1Topics : grade2PracticeTopics;
  const chapterNames = selectedGrade === "高一" ? grade1ChapterNames : grade2ChapterNames;
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

  const [errorMessage, setErrorMessage] =
    useState("");

  // 默认展开第一章
  const [expandedChapter, setExpandedChapter] =
    useState<number | null>(0);

  /* =========================
     读取 Supabase 学习记录
  ========================= */

  useEffect(() => {
    let active = true;

    async function loadReport() {
      setLoading(true);
      setErrorMessage("");

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (!active) return;

        if (authError && authError.name !== "AuthSessionMissingError") {
          setErrorMessage(
            "登录状态读取失败，请刷新页面。"
          );
          setEmail(null);
          setAttempts([]);
          return;
        }

        if (!user) {
          setEmail(null);
          setAttempts([]);
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

        if (!active) return;

        if (error) {
          setErrorMessage(
            "学习数据读取失败，请稍后刷新页面。"
          );
          setAttempts([]);
          return;
        }

        setAttempts((data ?? []) as Attempt[]);
      } catch {
        if (active) {
          setErrorMessage(
            "连接学习数据失败，请检查网络。"
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadReport();

    return () => {
      active = false;
    };
  }, [supabase]);

  /* =========================
     总体统计
  ========================= */

  const gradeAttempts = attempts.filter((item) =>
    grade2TopicSet.has(normalizeTopic(item.topic, item.question_id)) === (selectedGrade === "高二")
  );

  const total = gradeAttempts.length;

  const correct = gradeAttempts.filter(
    (item) => item.is_correct
  ).length;

  const wrong = total - correct;

  const accuracy =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);

  /* =========================
     各专题统计
  ========================= */

  const topicStats: TopicStat[] =
    currentPracticeTopics.map((topic) => {
      const matches = gradeAttempts.filter(
        (attempt) =>
          normalizeTopic(
            attempt.topic,
            attempt.question_id
          ) === topic
      );

      const topicCorrect = matches.filter(
        (attempt) => attempt.is_correct
      ).length;

      return {
        topic,
        total: matches.length,
        correct: topicCorrect,
        wrong: matches.length - topicCorrect,
        accuracy:
          matches.length === 0
            ? 0
            : Math.round(
                (topicCorrect / matches.length) *
                  100
              ),
      };
    });

  /* =========================
     章节分组
  ========================= */

  const chapters = Array.from(
    {
      length: chapterNames.length,
    },
    (_, index) => {
      const chapterTopics: readonly string[] = selectedGrade === "高二"
        ? grade2PracticeChapters[index].topics
        : currentPracticeTopics.slice(index * 5, index * 5 + 5);
      const topics = topicStats.filter((item) => chapterTopics.includes(item.topic));

      const chapterTotal = topics.reduce(
        (sum, item) => sum + item.total,
        0
      );

      const chapterCorrect = topics.reduce(
        (sum, item) => sum + item.correct,
        0
      );

      return {
        index,
        number: String(index + 1).padStart(
          2,
          "0"
        ),
        name:
          chapterNames[index] ??
          `第 ${index + 1} 章`,
        topics,
        total: chapterTotal,
        correct: chapterCorrect,
        accuracy:
          chapterTotal === 0
            ? 0
            : Math.round(
                (chapterCorrect / chapterTotal) *
                  100
              ),
      };
    }
  );

  /* =========================
     强项 / 薄弱专题
  ========================= */

  const studiedTopics = topicStats.filter(
    (item) => item.total > 0
  );

  const strongestTopic =
    studiedTopics.length === 0
      ? null
      : [...studiedTopics].sort(
          (a, b) =>
            b.accuracy - a.accuracy ||
            b.total - a.total
        )[0];

  const weakestTopic =
    studiedTopics.length === 0
      ? null
      : [...studiedTopics].sort(
          (a, b) =>
            a.accuracy - b.accuracy ||
            b.total - a.total
        )[0];

  const recentAttempts = gradeAttempts.slice(0, 10);

  /* =========================
     加载中
  ========================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fafafa]">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-sm text-slate-500">
            正在加载学习报告...
          </div>
        </div>
      </main>
    );
  }

  /* =========================
     未登录
  ========================= */

  if (!email) {
    return (
      <main className="min-h-screen bg-[#fafafa]">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              登录后查看学习报告
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              登录后可查看各章节掌握情况、
              个人正确率和针对性的复习建议。
            </p>

            {errorMessage && (
              <p className="mt-4 text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <Link
              href="/login"
              className="mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              登录 / 注册
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* =========================
     主页面
  ========================= */

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
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
            学习报告
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-9">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                彻凌数学 · 学习分析
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                我的学习报告
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                按年级、章节和专题查看学习情况，
                了解已经掌握的知识点与需要加强的内容。
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
                我的错题
              </Link>
            </div>
          </div>
        </section>

<div className="my-5 flex gap-3" aria-label="选择年级">
{(["高一", "高二"] as const).map((grade) => (
<button key={grade} type="button" aria-pressed={selectedGrade === grade}
onClick={() => { setSelectedGrade(grade); setExpandedChapter(null);  }}
className={`rounded-xl border px-6 py-3 text-sm font-semibold ${selectedGrade === grade ? "border-blue-400 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600"}`}>
{grade}数学
</button>))}
<span className="self-center text-xs text-slate-400">高三建设中</span>
</div>        {errorMessage && (
          <div className="mb-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        {/* 总体统计 */}
        <section className="border-t border-slate-200 py-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习数据概览
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              根据账号已保存的练习记录进行统计。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard
              label="累计答题"
              value={total}
              suffix="题次"
            />

            <StatCard
              label="答对"
              value={correct}
              suffix="题次"
            />

            <StatCard
              label="答错"
              value={wrong}
              suffix="题次"
            />

            <StatCard
              label="正确率"
              value={`${accuracy}%`}
            />
          </div>
        </section>

        {/* 暂无数据 */}
        {total === 0 && !errorMessage && (
          <section className="pb-10">
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-7">
              <h2 className="text-lg font-bold text-slate-900">
                还没有练习记录
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                完成专题训练后，系统会自动统计正确率，
                并生成各章节掌握情况。
              </p>

              <Link
                href="/practice"
                className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white"
              >
                开始专题训练
              </Link>
            </div>
          </section>
        )}

        {/* 强弱专题 */}
        {studiedTopics.length > 0 && (
          <section className="border-t border-slate-200 py-10">
            <h2 className="text-xl font-bold text-slate-900">
              学习表现分析
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              根据已完成专题的正确率分析。
              练习次数较少时，结果仅供参考。
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-emerald-600">
                  当前优势专题
                </p>

                {strongestTopic && (
                  <>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {strongestTopic.topic}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      已练习 {strongestTopic.total} 题次
                      {" · "}
                      正确率 {strongestTopic.accuracy}%
                    </p>

                    <ProgressBar
                      value={strongestTopic.accuracy}
                      color="green"
                    />
                  </>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-medium text-blue-600">
                  优先复习专题
                </p>

                {weakestTopic && (
                  <>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {weakestTopic.topic}
                    </h3>

                    <p className="mt-3 text-sm text-slate-500">
                      已练习 {weakestTopic.total} 题次
                      {" · "}
                      正确率 {weakestTopic.accuracy}%
                    </p>

                    <div className="mt-5 rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-400">
                        复习建议
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {getReviewAdvice(
                          weakestTopic.topic
                        )}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 章节统计 */}
        <section className="border-t border-slate-200 py-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {selectedGrade}数学 · 章节掌握情况
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                点击章节展开对应专题，
                收起后可以快速查看各章节正确率。
              </p>
            </div>

            <span className="text-xs text-slate-400">
              {chapters.length} 章 · {currentPracticeTopics.length} 个专题
            </span>
          </div>

          <div className="space-y-3">
            {chapters.map((chapter) => {
              const expanded =
                expandedChapter === chapter.index;

              return (
                <div
                  key={chapter.index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  {/* 章节标题 */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedChapter(
                        expanded
                          ? null
                          : chapter.index
                      )
                    }
                    aria-expanded={expanded}
                    className="flex w-full flex-wrap items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="text-sm font-semibold text-blue-600">
                        {chapter.number}
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold leading-6 text-slate-900">
                          {chapter.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                          {chapter.topics.length} 个专题 · 已练习 {chapter.total} 题次
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="hidden w-20 sm:block">
                        <ProgressBar
                          value={chapter.accuracy}
                        />
                      </div>

                      <span className="w-16 text-right text-sm font-semibold text-slate-700">
                        {chapter.total === 0
                          ? "未练习"
                          : `${chapter.accuracy}%`}
                      </span>

                      <span className="text-sm text-slate-400">
                        {expanded ? "⌃" : "⌄"}
                      </span>
                    </div>
                  </button>

                  {/* 展开后的专题 */}
                  {expanded && (
                    <div className="divide-y divide-slate-100 border-t border-slate-100">
                      {chapter.topics.map((item) => (
                        <TopicRow
                          key={item.topic}
                          item={item}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 最近练习 */}
        {recentAttempts.length > 0 && (
          <section className="border-t border-slate-200 py-10">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                最近练习
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                最近 10 次答题记录。
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              {recentAttempts.map(
                (attempt, index) => (
                  <div
                    key={attempt.id}
                    className={`flex flex-wrap items-center justify-between gap-4 px-5 py-4 ${
                      index ===
                      recentAttempts.length - 1
                        ? ""
                        : "border-b border-slate-100"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {normalizeTopic(
                          attempt.topic,
                          attempt.question_id
                        )}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {formatDate(
                          attempt.created_at
                        )}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        attempt.is_correct
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-600"
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
        )}

        {/* 底部导航 */}
        <section className="grid gap-4 border-t border-slate-200 pt-10 sm:grid-cols-3">
          <ActionCard
            title="继续专题训练"
            description="选择知识点，通过练习进一步巩固。"
            href="/practice"
          />

          <ActionCard
            title="复习错题"
            description="查看历史错题，针对薄弱专题复习。"
            href="/mistakes"
          />

          <ActionCard
            title="返回课程"
            description={`回到${selectedGrade}课程目录重新学习。`}
            href={selectedGrade === "高一" ? "/grade1" : "/grade2"}
          />
        </section>
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
  value: number | string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-1.5">
        <span className="text-2xl font-bold text-slate-900">
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
   进度条
========================= */

function ProgressBar({
  value,
  color = "blue",
}: {
  value: number;
  color?: "blue" | "green";
}) {
  return (
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full ${
          color === "green"
            ? "bg-emerald-500"
            : "bg-blue-600"
        }`}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}

/* =========================
   专题统计行
========================= */

function TopicRow({
  item,
}: {
  item: TopicStat;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
      <div>
        <p className="text-sm font-medium text-slate-800">
          {item.topic}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {item.total === 0
            ? "暂未练习"
            : `练习 ${item.total} 题次 · 答对 ${item.correct} · 答错 ${item.wrong}`}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24">
          <ProgressBar
            value={item.accuracy}
          />
        </div>

        <span className="w-12 text-right text-sm font-semibold text-slate-700">
          {item.total === 0
            ? "—"
            : `${item.accuracy}%`}
        </span>
      </div>
    </div>
  );
}

/* =========================
   底部功能卡片
========================= */

function ActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
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

      <p className="mt-4 text-sm font-medium text-slate-700 group-hover:text-blue-600">
        进入 →
      </p>
    </Link>
  );
}

/* =========================
   日期格式
========================= */

function formatDate(value: string) {
  return new Date(value).toLocaleString(
    "zh-CN",
    {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
}
