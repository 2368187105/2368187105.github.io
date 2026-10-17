import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type CourseModule = {
  number: string;
  title: string;
  description: string;
  topics: string[];
  status: "open" | "coming";
  href?: string;
  progress?: string;
};

const courseModules: CourseModule[] = [
  {
    number: "01",
    title: "集合与常用逻辑用语",
    description:
      "学习集合的基本概念、集合之间的关系与运算，以及充分条件、必要条件和常用逻辑用语。",
    topics: [
      "集合",
      "集合关系",
      "集合运算",
      "充分条件",
      "必要条件",
      "逻辑量词",
    ],
    status: "open",
    href: "/grade1/sets",
    progress: "5 / 5",
  },
  {
    number: "02",
    title: "一元二次函数、方程和不等式",
    description:
      "学习等式与不等式基本性质、基本不等式、二次函数、一元二次方程、一元二次不等式及综合应用。",
    topics: [
      "不等式性质",
      "基本不等式",
      "二次函数",
      "一元二次方程",
      "一元二次不等式",
      "综合应用",
    ],
    status: "open",
    href: "/grade1/quadratic",
    progress: "5 / 5",
  },
  {
    number: "03",
    title: "函数的概念与性质",
    description:
      "系统学习函数概念、定义域和值域、单调性、奇偶性以及函数最大值与最小值。",
    topics: [
      "函数概念",
      "定义域",
      "值域",
      "单调性",
      "奇偶性",
      "最值",
    ],
    status: "open",
    href: "/grade1/functions",
    progress: "5 / 5",
  },
  {
    number: "04",
    title: "指数函数与对数函数",
    description:
      "学习指数与对数运算，理解指数函数、对数函数的图像、性质以及实际应用。",
    topics: [
      "指数",
      "指数函数",
      "对数",
      "对数函数",
      "函数应用",
    ],
    status: "coming",
  },
  {
    number: "05",
    title: "三角函数",
    description:
      "学习任意角、弧度制、三角函数定义、诱导公式以及三角函数图像和基本性质。",
    topics: [
      "任意角",
      "弧度制",
      "三角函数",
      "诱导公式",
      "图像与性质",
    ],
    status: "coming",
  },
  {
    number: "06",
    title: "平面向量",
    description:
      "理解平面向量的基本概念，掌握向量的线性运算、数量积以及相关应用。",
    topics: [
      "向量概念",
      "线性运算",
      "数量积",
      "向量应用",
    ],
    status: "coming",
  },
  {
    number: "07",
    title: "复数",
    description:
      "认识复数及复数的几何意义，掌握复数的表示方法和基本运算。",
    topics: [
      "复数概念",
      "复数表示",
      "复数运算",
      "几何意义",
    ],
    status: "coming",
  },
  {
    number: "08",
    title: "立体几何初步",
    description:
      "认识基本空间几何体，学习空间中直线、平面之间的平行与垂直关系。",
    topics: [
      "空间几何体",
      "直线与平面",
      "平行",
      "垂直",
    ],
    status: "coming",
  },
  {
    number: "09",
    title: "统计",
    description:
      "学习数据收集与整理、随机抽样、统计图表以及数据数字特征的分析方法。",
    topics: [
      "随机抽样",
      "数据分析",
      "统计图表",
      "数字特征",
    ],
    status: "coming",
  },
  {
    number: "10",
    title: "概率",
    description:
      "认识随机事件，学习古典概型、概率的基本性质以及简单随机事件的概率计算。",
    topics: [
      "随机事件",
      "古典概型",
      "概率性质",
      "概率计算",
    ],
    status: "coming",
  },
];

export default function Grade1Page() {
  const openModules = courseModules.filter(
    (module) => module.status === "open"
  );

  const completedModules = openModules.filter(
    (module) => module.progress === "5 / 5"
  );

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-slate-700"
          >
            首页
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            高一数学
          </span>
        </div>

        {/* 页面标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-600">
              高一数学
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              高一数学知识体系
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              按照高中数学知识模块进行系统学习。
              当前已经完整开放集合、一元二次函数方程与不等式、
              函数的概念与性质三个模块。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/grade1/quadratic"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                复习第 02 模块
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
        </section>

        {/* 已开放课程 */}
        <section className="py-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                已开放课程
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                当前前 3 个知识模块已经全部完成。
              </p>
            </div>

            <span className="hidden text-sm text-slate-400 sm:block">
              已开放 {openModules.length} / {courseModules.length}
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* 01 集合 */}
            <Link
              href="/grade1/sets"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-600">
                  01
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                集合与常用逻辑用语
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                集合概念、集合关系、集合运算、
                充分必要条件以及逻辑量词已经全部开放。
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-emerald-600">
                  模块已完整开放
                </span>

                <span className="text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
                  进入学习 →
                </span>
              </div>
            </Link>

            {/* 02 一元二次 */}
            <Link
              href="/grade1/quadratic"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-600">
                  02
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                一元二次函数、方程和不等式
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                不等式性质、基本不等式、二次函数与方程、
                一元二次不等式以及综合应用已经全部开放。
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-emerald-600">
                  模块已完整开放
                </span>

                <span className="text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
                  进入学习 →
                </span>
              </div>
            </Link>

            {/* 03 函数 */}
            <Link
              href="/grade1/functions"
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-600">
                  03
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                函数的概念与性质
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                函数概念、定义域与值域、单调性、
                奇偶性以及最大值与最小值已经全部开放。
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-emerald-600">
                  模块已完整开放
                </span>

                <span className="text-sm font-medium text-slate-900 transition group-hover:translate-x-1">
                  进入学习 →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* 学习进度 */}
        <section className="border-t border-slate-200 py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <ProgressCard
              label="已开放模块"
              value={String(openModules.length)}
              suffix="/ 10"
              description="集合、一元二次、函数"
            />

            <ProgressCard
              label="完整模块"
              value={String(completedModules.length)}
              suffix="个"
              description="当前三个开放模块均已完整开放"
            />

            <ProgressCard
              label="已开放知识点"
              value="15"
              suffix="节"
              description="3 个模块 × 每模块 5 节"
            />
          </div>
        </section>

        {/* 下一阶段 */}
        <section className="border-t border-slate-200 py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-blue-600">
                  下一模块
                </p>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  04 指数函数与对数函数
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  接下来将学习根式与指数幂、指数函数、
                  对数运算、对数函数以及指数和对数模型的应用。
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                准备中
              </span>
            </div>
          </div>
        </section>

        {/* 高一数学总目录 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              高一数学课程目录
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              共规划 10 个知识模块。
              当前第 01、02、03 模块已经完整开放，
              后续模块将按照课程顺序逐步完善。
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {courseModules.map((module) => (
              <CourseRow
                key={module.number}
                module={module}
              />
            ))}
          </div>
        </section>

        {/* 学习工具 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              学习工具
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              配合课程学习使用。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <ToolCard
              href="/practice"
              title="专题训练"
              description="当前已经接入 15 个专题和 45 道练习题。"
            />

            <ToolCard
              href="/mistakes"
              title="我的错题"
              description="自动整理错误题目，并支持重新作答。"
            />

            <ToolCard
              href="/report"
              title="学习报告"
              description="查看 15 个专题的正确率、薄弱项和练习情况。"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function CourseRow({
  module,
}: {
  module: CourseModule;
}) {
  const content = (
    <div
      className={`grid gap-4 py-6 sm:grid-cols-[55px_1fr_auto] sm:items-center ${
        module.status === "open"
          ? "transition group-hover:bg-white"
          : ""
      }`}
    >
      <div>
        <span
          className={`text-sm font-semibold ${
            module.status === "open"
              ? "text-blue-600"
              : "text-slate-300"
          }`}
        >
          {module.number}
        </span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-semibold text-slate-900">
            {module.title}
          </h3>

          {module.status === "open" ? (
            <>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
                已开放
              </span>

              {module.progress && (
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                  {module.progress}
                </span>
              )}
            </>
          ) : (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-400">
              准备中
            </span>
          )}
        </div>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
          {module.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {module.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs text-slate-400"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="sm:text-right">
        {module.status === "open" ? (
          <span className="text-sm font-medium text-slate-700">
            开始学习 →
          </span>
        ) : (
          <span className="text-xs text-slate-300">
            即将开放
          </span>
        )}
      </div>
    </div>
  );

  if (
    module.status === "open" &&
    module.href
  ) {
    return (
      <Link
        href={module.href}
        className="group block px-2"
      >
        {content}
      </Link>
    );
  }

  return <div className="px-2">{content}</div>;
}

function ProgressCard({
  label,
  value,
  suffix,
  description,
}: {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-bold text-slate-900">
          {value}
        </span>

        {suffix && (
          <span className="pb-0.5 text-sm text-slate-400">
            {suffix}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600">
          →
        </span>
      </div>
    </Link>
  );
}