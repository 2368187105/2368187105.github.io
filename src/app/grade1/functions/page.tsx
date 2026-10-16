export default function FunctionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </a>

          <a
            href="/grade1"
            className="text-sm text-slate-500 hover:text-blue-600"
          >
            ← 返回高一数学
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-blue-600">
          高一数学 · 函数
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          函数的概念与性质
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          系统学习函数的基本概念、定义域和值域、单调性、奇偶性以及最值等核心内容。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <TopicCard
            number="01"
            title="函数的概念"
            description="理解函数、对应关系、自变量与因变量"
          />

          <TopicCard
            number="02"
            title="定义域与值域"
            description="掌握常见函数定义域和值域的求法"
          />

          <TopicCard
            number="03"
            title="函数的单调性"
            description="增函数、减函数、单调区间与常见题型"
            href="/grade1/functions/monotonicity"
          />

          <TopicCard
            number="04"
            title="函数的奇偶性"
            description="奇函数、偶函数及图像对称性"
          />

          <TopicCard
            number="05"
            title="函数的最值"
            description="最大值、最小值及其综合应用"
          />

          <TopicCard
            number="06"
            title="函数性质综合"
            description="单调性、奇偶性与最值综合问题"
          />
        </div>
      </section>
    </main>
  );
}

function TopicCard({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-sm font-semibold text-blue-600">
        {number}
      </p>

      <h2 className="mt-2 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-6 inline-block font-medium text-blue-600 hover:underline"
        >
          开始学习 →
        </a>
      ) : (
        <span className="mt-6 inline-block text-sm text-slate-400">
          即将开放
        </span>
      )}
    </div>
  );
}