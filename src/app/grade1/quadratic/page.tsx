import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Lesson = {
  number: string;
  title: string;
  description: string;
  topics: string[];
  href: string;
};

const lessons: Lesson[] = [
  {
    number: "01",
    title: "等式与不等式的基本性质",
    description:
      "理解实数大小关系以及等式、不等式的基本性质，为后续不等式运算打基础。",
    topics: [
      "大小关系",
      "等式性质",
      "不等式性质",
      "性质应用",
    ],
    href: "/grade1/quadratic/properties",
  },
  {
    number: "02",
    title: "基本不等式",
    description:
      "掌握基本不等式及其成立条件，并能够利用基本不等式解决常见最值问题。",
    topics: [
      "基本不等式",
      "算术平均数",
      "几何平均数",
      "和定积最大",
      "积定和最小",
    ],
    href: "/grade1/quadratic/basic-inequality",
  },
  {
    number: "03",
    title: "一元二次函数与一元二次方程",
    description:
      "理解二次函数图像、一元二次方程实数根、函数零点和判别式之间的联系。",
    topics: [
      "二次函数",
      "一元二次方程",
      "函数零点",
      "判别式",
      "求根公式",
      "根与系数",
    ],
    href: "/grade1/quadratic/equation",
  },
  {
    number: "04",
    title: "一元二次不等式",
    description:
      "掌握一元二次不等式的解法，并能够利用二次函数图像、方程根和判别式判断解集。",
    topics: [
      "一元二次不等式",
      "图像法",
      "解集",
      "判别式",
      "函数正负",
    ],
    href: "/grade1/quadratic/inequality",
  },
  {
    number: "05",
    title: "二次函数、方程与不等式的综合应用",
    description:
      "综合运用二次函数、判别式、根与系数关系和不等式解决参数、最值与实际应用问题。",
    topics: [
      "参数问题",
      "根与系数",
      "最值问题",
      "区间最值",
      "实际应用",
    ],
    href: "/grade1/quadratic/applications",
  },
];

export default function QuadraticPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-700">
            首页
          </Link>

          <span>/</span>

          <Link
            href="/grade1"
            className="hover:text-slate-700"
          >
            高一数学
          </Link>

          <span>/</span>

          <span className="text-slate-600">
            一元二次函数、方程和不等式
          </span>
        </div>

        {/* 标题 */}
        <section className="border-b border-slate-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
                第 02 模块
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                一元二次函数、方程和不等式
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                从等式与不等式性质出发，
                系统学习基本不等式、二次函数、
                一元二次方程、一元二次不等式以及综合应用。
                本模块全部内容现在已经开放。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/grade1/quadratic/applications"
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  学习最后一节
                </Link>

                <Link
                  href="/practice"
                  className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  专题训练
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              <Stat
                label="知识点"
                value="5"
                suffix="个"
              />

              <Stat
                label="已开放"
                value="5"
                suffix="个"
              />

              <Stat
                label="完成度"
                value="100%"
              />

              <Stat
                label="学习方式"
                value="学 + 练"
              />
            </div>
          </div>
        </section>

        {/* 完成提示 */}
        <section className="py-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  5 / 5 已开放
                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  第二模块已经全部开放
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  可以按照章节顺序完整学习，
                  也可以进入专题训练检查函数、方程和不等式的综合掌握情况。
                </p>
              </div>

              <Link
                href="/practice"
                className="shrink-0 text-sm font-medium text-slate-900"
              >
                开始专题训练 →
              </Link>
            </div>
          </div>
        </section>

        {/* 章节目录 */}
        <section className="border-t border-slate-200 pt-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  章节目录
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  五个知识点已经全部开放，建议按照顺序学习。
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
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-400">
                  模块进度
                </p>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-2xl font-bold text-slate-900">
                    5
                  </span>

                  <span className="pb-0.5 text-sm text-slate-400">
                    / 5
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs font-medium text-emerald-600">
                  全部知识点已开放
                </p>
              </div>

              <Link
                href="/practice"
                className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  专题训练
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  通过题目检查本模块掌握情况。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  去做题 →
                </p>
              </Link>

              <Link
                href="/mistakes"
                className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  错题复习
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  重新练习本模块中的错误题目。
                </p>

                <p className="mt-4 text-sm font-medium text-slate-700">
                  查看错题 →
                </p>
              </Link>
            </aside>
          </div>
        </section>

        {/* 模块总结 */}
        <section className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              本模块核心能力
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              完成本模块后，你应该能够：
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Goal
              number="01"
              title="正确进行不等式变形"
              description="掌握不等式加减、乘除以及变号规则。"
            />

            <Goal
              number="02"
              title="利用基本不等式求最值"
              description="理解一正、二定、三相等以及常见最值模型。"
            />

            <Goal
              number="03"
              title="联系函数与方程"
              description="理解函数零点、方程实数根和图像交点之间的关系。"
            />

            <Goal
              number="04"
              title="利用判别式判断根"
              description="根据 Δ 的正负判断方程根的个数及图像位置。"
            />

            <Goal
              number="05"
              title="解决一元二次不等式"
              description="利用二次函数图像判断函数正负并写出解集。"
            />

            <Goal
              number="06"
              title="解决综合与实际问题"
              description="综合使用参数、最值、根与系数和二次函数模型。"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="bg-white p-4">
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <div className="mt-2 flex items-end gap-1">
        <span className="font-semibold text-slate-900">
          {value}
        </span>

        {suffix && (
          <span className="text-xs text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function LessonRow({
  lesson,
}: {
  lesson: Lesson;
}) {
  return (
    <Link
      href={lesson.href}
      className="group block px-2"
    >
      <div className="grid gap-4 py-6 transition group-hover:bg-white sm:grid-cols-[55px_1fr_auto] sm:items-center">
        <span className="text-sm font-semibold text-blue-600">
          {lesson.number}
        </span>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-slate-900">
              {lesson.title}
            </h3>

            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
              已开放
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {lesson.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {lesson.topics.map((topic) => (
              <span
                key={topic}
                className="text-xs text-slate-400"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <span className="text-sm font-medium text-slate-700 transition group-hover:translate-x-1">
          开始学习 →
        </span>
      </div>
    </Link>
  );
}

function Goal({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <span className="text-xs font-semibold text-slate-300">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}