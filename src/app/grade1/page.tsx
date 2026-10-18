
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { questions, practiceTopics } from "@/data/questions";

/* ========================================
   高一数学章节配置
======================================== */

type Chapter = {
  number: string;
  title: string;
  description: string;
  topics: string[];
  href?: string;
  status: "open" | "coming";
  lessons: number;
};

const chapters: Chapter[] = [
  {
    number: "01",
    title: "集合与常用逻辑用语",
    description:
      "学习集合的基本概念、集合间的关系与运算，以及充分必要条件和常用逻辑用语。",
    topics: [
      "集合概念",
      "集合关系",
      "集合运算",
      "充分必要条件",
      "逻辑量词",
    ],
    href: "/grade1/sets",
    status: "open",
    lessons: 5,
  },
  {
    number: "02",
    title: "一元二次函数、方程和不等式",
    description:
      "掌握不等式性质、基本不等式、二次函数、一元二次方程与一元二次不等式。",
    topics: [
      "不等式性质",
      "基本不等式",
      "二次函数",
      "一元二次方程",
      "一元二次不等式",
    ],
    href: "/grade1/quadratic",
    status: "open",
    lessons: 5,
  },
  {
    number: "03",
    title: "函数的概念与性质",
    description:
      "系统学习函数概念、定义域和值域、单调性、奇偶性以及函数的最值。",
    topics: [
      "函数概念",
      "定义域与值域",
      "单调性",
      "奇偶性",
      "函数最值",
    ],
    href: "/grade1/functions",
    status: "open",
    lessons: 5,
  },
  {
    number: "04",
    title: "指数函数与对数函数",
    description:
      "理解指数和对数的运算，掌握指数函数、对数函数的图像与性质及实际应用。",
    topics: [
      "指数运算",
      "指数函数",
      "对数运算",
      "对数函数",
      "综合应用",
    ],
    href: "/grade1/exponential-log",
    status: "open",
    lessons: 5,
  },
  {
    number: "05",
    title: "三角函数",
    description:
      "学习任意角与弧度制、三角函数的定义、诱导公式、图像和性质。",
    topics: [
      "任意角",
      "弧度制",
      "三角函数",
      "诱导公式",
      "图像与性质",
    ],
    href: "/grade1/trigonometric",
    status: "open",
    lessons: 5,
  },
  {
    number: "06",
    title: "平面向量",
    description:
      "掌握平面向量的概念与表示、线性运算、坐标表示、数量积及综合应用。",
    topics: [
      "向量概念",
      "线性运算",
      "坐标表示",
      "数量积",
      "综合应用",
    ],
    href: "/grade1/vectors",
    status: "open",
    lessons: 5,
  },
  {
    number: "07",
    title: "复数",
    description:
      "从虚数单位与复数的代数表示出发，学习复数的几何意义、四则运算和综合应用。",
    topics: [
      "复数概念",
      "复平面",
      "加减运算",
      "乘除运算",
      "综合应用",
    ],
    href: "/grade1/complex",
    status: "open",
    lessons: 5,
  },
  {
    number: "08",
    title: "立体几何初步",
    description:
      "认识基本空间几何体，理解空间中直线、平面之间的位置关系。",
    topics: [
      "空间几何体",
      "空间位置关系",
      "平行",
      "垂直",
      "综合应用",
    ],
    href: "/grade1/solid-geometry",
    status: "open",
    lessons: 5,
  },
  {
    number: "09",
    title: "统计",
    description:
      "学习随机抽样、数据的收集与整理、统计图表、数据的数字特征及统计综合应用。",
    topics: [
      "随机抽样",
      "数据的收集与整理",
      "统计图表",
      "数据的数字特征",
      "统计综合应用",
    ],
    href: "/grade1/statistics",
    status: "open",
    lessons: 5,
  },
  {
    number: "10",
    title: "概率",
    description:
      "认识随机事件与样本空间，学习事件关系、古典概型、概率的基本性质及综合应用。",
    topics: [
      "随机事件",
      "样本空间",
      "古典概型",
      "概率性质",
      "综合应用",
    ],
    href: "/grade1/probability",
    status: "open",
    lessons: 5,
  },
];

const openedChapters = chapters.filter(
  (chapter) => chapter.status === "open"
);

const comingChapters = chapters.filter(
  (chapter) => chapter.status === "coming"
);

const openedLessonCount = openedChapters.reduce(
  (sum, chapter) => sum + chapter.lessons,
  0
);

const plannedLessonCount = chapters.reduce(
  (sum, chapter) => sum + chapter.lessons,
  0
);

const openedPercent =
  (openedChapters.length / chapters.length) * 100;

/* ========================================
   高一数学总目录
======================================== */

export default function Grade1Page() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            首页
          </Link>

          <span>/</span>

          <span className="font-medium text-slate-700">
            高一数学
          </span>
        </nav>

        {/* ========================================
            顶部介绍
        ======================================== */}

        <section className="mt-9 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-7 sm:p-10">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                  GRADE 01
                </span>

                <span className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  高中数学 · 系统课程
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                高一数学知识体系
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                从集合、不等式和函数出发，
                逐步学习指数与对数、三角函数、
                平面向量、复数、立体几何初步、统计和概率，
                建立完整、清晰的高中数学基础知识体系。
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                当前已经开放前十章，共50节教学课程。
                每节课程包含知识讲解、典型例题和互动练习。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/probability"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  学习第10章 · 概率 →
                </Link>

                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  专题训练
                </Link>

                <Link
                  href="/mistakes"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  我的错题
                </Link>
              </div>
            </div>

            {/* 右侧建设进度 */}
            <div className="rounded-2xl border border-white bg-white/90 p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-400">
                课程建设进度
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-blue-600">
                  {openedChapters.length}
                </span>

                <span className="pb-1.5 text-sm text-slate-400">
                  / {chapters.length} 章
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${openedPercent}%`,
                  }}
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">
                    {openedLessonCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    已开放课程
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-900">
                    {comingChapters.length}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    待开发章节
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                这里显示的是网站课程建设进度，
                不是个人学习完成情况。
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
            数据概览
        ======================================== */}

        <section className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="已开放章节"
            value={String(openedChapters.length)}
            suffix={`/ ${chapters.length}`}
            description="十章课程均已开放"
          />

          <StatCard
            label="已开放课程"
            value={String(openedLessonCount)}
            suffix={`/ ${plannedLessonCount}`}
            description="每章规划五节课程"
          />

          <StatCard
            label="专题训练"
            value={String(practiceTopics.length)}
            suffix="个专题"
            description="与当前题库实时对应"
          />

          <StatCard
            label="题库练习"
            value={String(questions.length)}
            suffix="道题"
            description="支持自动判题与错题记录"
          />
        </section>

        {/* ========================================
            已开放章节
        ======================================== */}

        <section className="border-t border-slate-200 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-600">
                OPEN COURSES
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                已开放课程
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                已开放10个章节的教学内容，
                点击章节卡片即可查看对应的五节课程。
              </p>
            </div>

            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500">
              {openedChapters.length} 章 · {openedLessonCount} 节
            </span>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {openedChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                chapter={chapter}
              />
            ))}
          </div>
        </section>

        {/* ========================================
            最新开放章节
        ======================================== */}

        <section className="border-t border-slate-200 py-10">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
              <div>
                <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  CHAPTER 10
                </span>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  第十章 · 概率
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-500">
                  本章包含随机事件与样本空间、事件的关系与运算、古典概型、
                  概率的基本性质及概率综合应用五节课程，帮助你逐步掌握概率分析与计算方法。
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "随机事件与样本空间",
                    "事件的关系与运算",
                    "古典概型",
                    "概率的基本性质",
                    "概率综合应用",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/grade1/probability"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  进入概率课程 →
                </Link>
              </div>

              <div className="rounded-xl bg-blue-50/60 p-6">
                <p className="text-xs font-semibold text-blue-700">
                  章节教学进度
                </p>

                <p className="mt-4 text-3xl font-bold text-slate-900">
                  5 / 5
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full w-full rounded-full bg-blue-600" />
                </div>

                <p className="mt-4 text-sm text-slate-600">
                  五节教学课程全部开放
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  本章五节课程均已开放，可从课程目录逐节进入学习。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
            待开发章节：全部章节开放后自动隐藏
        ======================================== */}

        {comingChapters.length > 0 && (
        <section className="border-t border-slate-200 py-10">
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-400">
              COMING NEXT
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              后续课程
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              高一数学剩余1个章节将逐步开发，
              目前尚未开放学习入口。
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {comingChapters.map((chapter) => (
              <div
                key={chapter.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-400">
                    {chapter.number}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">
                    待开放
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-800">
                  {chapter.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-500">
                  {chapter.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {chapter.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-400">
                  课程准备中
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* ========================================
            完整课程目录
        ======================================== */}

        <section className="border-t border-slate-200 py-10">
          <div className="mb-7">
            <p className="text-xs font-semibold tracking-wide text-blue-600">
              CURRICULUM
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              高一数学完整目录
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              全部规划10个章节，
              已开放的章节可以直接进入学习。
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {chapters.map((chapter) => (
              <ChapterRow
                key={chapter.number}
                chapter={chapter}
              />
            ))}
          </div>
        </section>

        {/* ========================================
            学习工具
        ======================================== */}

        <section className="border-t border-slate-200 py-10">
          <div className="mb-7">
            <p className="text-xs font-semibold tracking-wide text-blue-600">
              STUDY TOOLS
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              配套学习工具
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              结合知识学习、专题训练、错题复习和学习报告，
              提高知识掌握程度。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ToolCard
              href="/practice"
              number="01"
              title="专题训练"
              description={`当前题库包含 ${practiceTopics.length} 个专题、${questions.length} 道练习题。支持在线作答及自动判题。`}
              action="开始做题"
            />

            <ToolCard
              href="/mistakes"
              number="02"
              title="我的错题"
              description="整理练习中答错的题目，可以按章节和专题查看，针对薄弱知识进行复习。"
              action="查看错题"
            />

            <ToolCard
              href="/report"
              number="03"
              title="学习报告"
              description="根据云端答题记录统计正确率，分析不同章节和专题的掌握情况。"
              action="查看报告"
            />
          </div>
        </section>

        {/* ========================================
            品牌区域
        ======================================== */}

        <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                彻凌数学
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                山海连云，巍巍交大。
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                从基础概念开始，
                通过知识讲解、典型例题、互动练习和错题复习，
                一步一步建立自己的数学知识体系。
              </p>
            </div>

            <Link
              href="/grade1/probability"
              className="shrink-0 rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700"
            >
              继续学习 →
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            ← 返回网站首页
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ========================================
   章节卡片
======================================== */

function ChapterCard({
  chapter,
}: {
  chapter: Chapter;
}) {
  if (!chapter.href) {
    return null;
  }

  const isLatest = chapter.number === "10";

  return (
    <Link
      href={chapter.href}
      className={`group flex h-full flex-col rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md ${
        isLatest
          ? "border-blue-200 hover:border-blue-300"
          : "border-slate-200 hover:border-blue-200"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-bold text-blue-600">
          {chapter.number}
        </span>

        <div className="flex items-center gap-2">
          {isLatest && (
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
              最新章节
            </span>
          )}

          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            5 / 5 已开放
          </span>
        </div>
      </div>

      <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900 transition group-hover:text-blue-700">
        {chapter.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
        {chapter.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {chapter.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">
          {chapter.lessons} 节课程
        </span>

        <span className="text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
          进入学习 →
        </span>
      </div>
    </Link>
  );
}

/* ========================================
   课程总目录行
======================================== */

function ChapterRow({
  chapter,
}: {
  chapter: Chapter;
}) {
  const open = chapter.status === "open";

  const content = (
    <div className="grid gap-4 px-3 py-6 sm:grid-cols-[45px_1fr_auto] sm:items-center">
      <span
        className={`text-sm font-semibold ${
          open ? "text-blue-600" : "text-slate-400"
        }`}
      >
        {chapter.number}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-semibold text-slate-900">
            {chapter.title}
          </h3>

          <span
            className={`rounded-full px-2.5 py-1 text-xs ${
              open
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {open ? "已开放" : "准备中"}
          </span>
        </div>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          {chapter.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {chapter.topics.map((topic) => (
            <span
              key={topic}
              className="text-xs text-slate-400"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div>
        <span
          className={`text-sm ${
            open
              ? "font-medium text-blue-600"
              : "text-slate-400"
          }`}
        >
          {open ? "进入学习 →" : "暂未开放"}
        </span>
      </div>
    </div>
  );

  if (open && chapter.href) {
    return (
      <Link
        href={chapter.href}
        className="block transition hover:bg-white"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}

/* ========================================
   数据卡片
======================================== */

function StatCard({
  label,
  value,
  suffix,
  description,
}: {
  label: string;
  value: string;
  suffix: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </span>

        <span className="pb-1 text-sm text-slate-400">
          {suffix}
        </span>
      </div>

      <p className="mt-3 text-xs leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* ========================================
   学习工具卡片
======================================== */

function ToolCard({
  href,
  number,
  title,
  description,
  action,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
  action: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm"
    >
      <p className="text-xs font-semibold text-blue-600">
        {number}
      </p>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
        {description}
      </p>

      <span className="mt-5 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
        {action} →
      </span>
    </Link>
  );
}
