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
    title: "任意角与弧度制",
    description:
      "学习任意角、象限角、终边相同的角以及弧度制，掌握角度制与弧度制之间的转换。",
    href: "/grade1/trigonometric/angles-radians",
  },
  {
    number: "02",
    title: "三角函数的概念与基本关系",
    description:
      "利用单位圆定义正弦、余弦和正切，掌握三角函数值的象限符号以及同角三角函数基本关系。",
    href: "/grade1/trigonometric/definition-relations",
  },
  {
    number: "03",
    title: "诱导公式",
    description:
      "利用单位圆中的对称关系掌握常用诱导公式，将复杂角转化为熟悉角进行求值。",
    href: "/grade1/trigonometric/induction-formulas",
  },
  {
    number: "04",
    title: "三角函数的图象与性质",
    description:
      "学习正弦、余弦和正切函数的图象、周期性、奇偶性、单调性和值域。",
    href: "/grade1/trigonometric/graphs-properties",
  },
  {
    number: "05",
    title: "三角恒等变换",
    description:
      "学习两角和差公式、二倍角公式以及常见三角表达式的化简、求值和综合应用。",
    href: "/grade1/trigonometric/identities",
  },
];

export default function TrigonometricPage() {
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
            三角函数
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-blue-600">
                  高一数学 · 第 05 章
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已全部开放
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                三角函数
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
                从任意角与弧度制出发，
                系统学习三角函数的定义、诱导公式、
                三角函数图象与性质以及三角恒等变换。
                本章 5 个知识模块现已全部开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/trigonometric/identities"
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
                  5 / 5
                </span>

                <span className="text-sm font-medium text-emerald-600">
                  100%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-100">
                <div className="h-full w-full rounded-full bg-emerald-500" />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                本章五节课程已经全部开放，
                可以开始系统复习和专题训练。
              </p>
            </div>
          </div>
        </section>

        {/* 数据 */}
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

        {/* 完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-emerald-600">
                  MODULE COMPLETE
                </p>

                <h2 className="mt-2 text-lg font-bold text-slate-900">
                  第 05 章已完整开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  任意角与弧度制、三角函数定义与基本关系、
                  诱导公式、图象与性质以及三角恒等变换
                  已全部完成。
                </p>
              </div>

              <Link
                href="/grade1/trigonometric/identities"
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
              5 个知识模块已经全部开放，建议按照 01 → 05 的顺序学习。
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
              五个学习阶段均已开放。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <StageCard
                number="01"
                title="任意角与弧度制"
              />

              <StageCard
                number="02"
                title="三角函数的概念与基本关系"
              />

              <StageCard
                number="03"
                title="诱导公式"
              />

              <StageCard
                number="04"
                title="三角函数的图象与性质"
              />

              <StageCard
                number="05"
                title="三角恒等变换"
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
                从角的推广开始，
                逐步建立三角函数定义，
                再学习角的转换、图象性质和恒等变换，
                形成完整的三角函数知识体系。
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <PathCard
                number="1"
                title="任意角与弧度制"
                description="认识任意角、象限角以及角度与弧度之间的转换。"
              />

              <PathCard
                number="2"
                title="三角函数定义"
                description="利用单位圆建立正弦、余弦和正切，并掌握基本关系。"
              />

              <PathCard
                number="3"
                title="诱导公式"
                description="利用对称性研究不同角的三角函数值之间的关系。"
              />

              <PathCard
                number="4"
                title="图象与性质"
                description="掌握周期性、奇偶性、单调性、值域和关键图象。"
              />

              <PathCard
                number="5"
                title="恒等变换"
                description="掌握和差公式、二倍角公式以及常见三角式化简。"
              />
            </div>
          </div>
        </section>

        {/* 本章目标 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                完成本章后
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                应能够熟练进行角度与弧度转换，
                理解任意角三角函数定义，
                掌握诱导公式、三角函数图象与性质，
                并能够使用常用公式进行三角恒等变换。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <GoalItem text="掌握任意角与弧度制" />
                <GoalItem text="理解任意角三角函数定义" />
                <GoalItem text="掌握同角三角函数基本关系" />
                <GoalItem text="掌握常用诱导公式" />
                <GoalItem text="掌握三角函数图象与性质" />
                <GoalItem text="掌握常见三角恒等变换" />
              </div>
            </div>
          </div>
        </section>

        {/* 知识结构 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-7">
            <p className="text-sm font-medium text-blue-600">
              KNOWLEDGE MAP
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              第 05 章知识结构
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              五个模块不是彼此独立的内容，而是逐层建立联系。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            <KnowledgeMapCard
              number="01"
              title="任意角"
              text="建立角的推广"
            />

            <KnowledgeMapCard
              number="02"
              title="三角函数"
              text="建立函数定义"
            />

            <KnowledgeMapCard
              number="03"
              title="诱导公式"
              text="处理不同角"
            />

            <KnowledgeMapCard
              number="04"
              title="图象性质"
              text="研究函数变化"
            />

            <KnowledgeMapCard
              number="05"
              title="恒等变换"
              text="综合公式应用"
            />
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
                  下一步会把本章 5 个专题加入专题训练，
                  继续同步错题本和学习报告。
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

        {/* 工具 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习工具
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              课程、训练、错题和学习报告共同组成学习闭环。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <ToolCard
              href="/practice"
              title="专题训练"
              description="完成三角函数相关知识点的专项练习。"
            />

            <ToolCard
              href="/mistakes"
              title="我的错题"
              description="重新复习训练过程中答错的题目。"
            />

            <ToolCard
              href="/report"
              title="学习报告"
              description="查看不同专题的答题数量和正确率。"
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
   知识结构
========================= */

function KnowledgeMapCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-semibold text-emerald-600">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>

      <p className="mt-4 text-xs font-medium text-emerald-600">
        ✓ 已完成
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