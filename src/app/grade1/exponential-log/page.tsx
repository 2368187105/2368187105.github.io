import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Lesson = {
  number: string;
  title: string;
  description: string;
  href: string;
};

const lessons: Lesson[] = [
  {
    number: "01",
    title: "根式与分数指数幂",
    description:
      "学习根式的基本性质、分数指数幂的意义，以及指数幂的运算法则。",
    href: "/grade1/exponential-log/powers",
  },
  {
    number: "02",
    title: "指数函数",
    description:
      "认识指数函数的定义、图象和性质，理解底数变化对函数图象的影响。",
    href: "/grade1/exponential-log/exponential-function",
  },
  {
    number: "03",
    title: "对数与对数运算",
    description:
      "理解对数的定义，掌握指数式与对数式互化、常用对数、自然对数以及基本运算法则。",
    href: "/grade1/exponential-log/logarithm",
  },
  {
    number: "04",
    title: "对数函数",
    description:
      "学习对数函数的定义、图象、定义域和值域、单调性，以及与指数函数之间的联系。",
    href: "/grade1/exponential-log/logarithmic-function",
  },
  {
    number: "05",
    title: "指数函数与对数函数的综合应用",
    description:
      "综合运用指数、对数及相关函数知识解决方程、不等式和实际应用问题。",
    href: "/grade1/exponential-log/applications",
  },
];

export default function ExponentialLogPage() {
  const openCount = lessons.length;
  const progress = 100;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-slate-700"
          >
            首页
          </Link>

          <span>/</span>

          <Link
            href="/grade1"
            className="transition hover:text-slate-700"
          >
            高一数学
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            指数函数与对数函数
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-blue-600">
                  高一数学 · 第 04 章
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已全部开放
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                指数函数与对数函数
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
                从根式与指数幂出发，
                系统学习指数函数、对数与对数运算、
                对数函数以及综合应用。
                本章 5 个知识点现已全部开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/exponential-log/applications"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  进入第 05 节
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  专题训练
                </Link>
              </div>
            </div>

            {/* 完成进度 */}
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
              <p className="text-xs font-medium text-emerald-600">
                本章开放进度
              </p>

              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-bold text-slate-900">
                  {openCount} / 5
                </span>

                <span className="text-sm font-medium text-emerald-600">
                  {progress}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-100">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{
                    width: "100%",
                  }}
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                本章 5 节内容已经全部开放，
                可以开始系统复习与专题训练。
              </p>
            </div>
          </div>
        </section>

        {/* 统计 */}
        <section className="grid gap-px overflow-hidden border-b border-slate-200 bg-slate-200 sm:grid-cols-4">
          <StatItem
            label="知识点"
            value="5"
          />

          <StatItem
            label="已开放"
            value="5"
          />

          <StatItem
            label="开放进度"
            value="100%"
          />

          <StatItem
            label="学习方式"
            value="学 + 练"
          />
        </section>

        {/* 本章完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-emerald-600">
                  MODULE COMPLETE
                </p>

                <h2 className="mt-2 text-lg font-bold text-slate-900">
                  第 04 章已完整开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  根式与分数指数幂、指数函数、
                  对数与对数运算、对数函数和综合应用
                  已全部完成。
                </p>
              </div>

              <Link
                href="/grade1/exponential-log/applications"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                学习最后一节
              </Link>
            </div>
          </div>
        </section>

        {/* 本章课程 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              本章课程
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              5 个知识点已经全部开放，建议按照 01 → 05 的顺序学习。
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {lessons.map((lesson) => (
              <LessonRow
                key={lesson.number}
                lesson={lesson}
              />
            ))}
          </div>
        </section>

        {/* 学习阶段 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              本章学习阶段
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              五个阶段均已开放。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <StageCard
                number="01"
                title="根式与分数指数幂"
              />

              <StageCard
                number="02"
                title="指数函数"
              />

              <StageCard
                number="03"
                title="对数与对数运算"
              />

              <StageCard
                number="04"
                title="对数函数"
              />

              <StageCard
                number="05"
                title="指数函数与对数函数的综合应用"
              />
            </div>
          </div>
        </section>

        {/* 学习路线 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium text-blue-600">
                LEARNING PATH
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                本章完整学习路线
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                从指数运算出发，
                依次建立指数函数、对数运算、
                对数函数和综合应用之间的完整联系。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <PathCard
                number="1"
                title="指数运算"
                description="理解根式、负指数和分数指数幂。"
              />

              <PathCard
                number="2"
                title="指数函数"
                description="掌握指数函数的图象、性质和单调性。"
              />

              <PathCard
                number="3"
                title="对数运算"
                description="理解对数定义、互化以及运算法则。"
              />

              <PathCard
                number="4"
                title="对数函数"
                description="掌握定义域、值域、图象和单调性。"
              />

              <PathCard
                number="5"
                title="综合应用"
                description="解决指数、对数方程、不等式及实际应用问题。"
              />
            </div>
          </div>
        </section>

        {/* 核心能力 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                完成本章后
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                应能够熟练进行指数与对数运算，
                掌握指数函数、对数函数的图象和性质，
                并利用这些知识解决基础方程、
                不等式及实际应用问题。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <GoalItem text="掌握根式与分数指数幂运算" />
                <GoalItem text="掌握指数函数图象与性质" />
                <GoalItem text="掌握对数定义与运算法则" />
                <GoalItem text="掌握对数函数图象与性质" />
                <GoalItem text="理解指数函数与对数函数的联系" />
                <GoalItem text="解决指数与对数综合问题" />
              </div>
            </div>
          </div>
        </section>

        {/* 推荐复习 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  REVIEW
                </p>

                <h2 className="mt-2 text-lg font-bold text-slate-900">
                  完成本章后进入专题训练
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  下一步我们会把第 04 章对应的 5 个专题加入专题训练，
                  让课程学习、错题本和学习报告继续同步。
                </p>
              </div>

              <Link
                href="/practice"
                className="shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-slate-700"
              >
                专题训练
              </Link>
            </div>
          </div>
        </section>

        {/* 学习工具 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习工具
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              学习、练习、错题和报告组成完整闭环。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <ToolCard
              href="/practice"
              title="专题训练"
              description="完成知识点对应的专项练习。"
            />

            <ToolCard
              href="/mistakes"
              title="我的错题"
              description="集中复习训练过程中出现的错误。"
            />

            <ToolCard
              href="/report"
              title="学习报告"
              description="查看各专题的答题数量和正确率。"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================
   课程
========================= */

function LessonRow({
  lesson,
}: {
  lesson: Lesson;
}) {
  return (
    <Link
      href={lesson.href}
      className="group block"
    >
      <div className="grid gap-4 py-6 transition group-hover:bg-white sm:grid-cols-[60px_1fr_auto] sm:items-center">
        <div>
          <span className="text-sm font-semibold text-blue-600">
            {lesson.number}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-semibold text-slate-900">
              {lesson.title}
            </h3>

            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
              已开放
            </span>

            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
              已完成
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            {lesson.description}
          </p>
        </div>

        <div className="sm:text-right">
          <span className="text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
            进入学习 →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================
   统计
========================= */

function StatItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white p-5 sm:p-6">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

/* =========================
   学习阶段
========================= */

function StageCard({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50/30 p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-xs font-bold text-emerald-600">
        {number}
      </span>

      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs font-medium text-emerald-600">
          ✓ 已开放
        </p>
      </div>
    </div>
  );
}

/* =========================
   学习路线
========================= */

function PathCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-xs font-semibold text-emerald-600">
            {number}
          </span>

          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>
        </div>

        <span className="text-xs font-medium text-emerald-600">
          已开放
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* =========================
   目标
========================= */

function GoalItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600">
        ✓
      </span>

      <p className="text-sm leading-6 text-slate-700">
        {text}
      </p>
    </div>
  );
}

/* =========================
   工具
========================= */

function ToolCard({
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

      <p className="mt-4 text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
        进入 →
      </p>
    </Link>
  );
}