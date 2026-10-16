export default function Grade1Page() {
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
            href="/"
            className="text-sm text-slate-500 hover:text-blue-600"
          >
            ← 返回首页
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-blue-600">
          高一数学
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          高一数学知识体系
        </h1>

        <p className="mt-4 text-slate-600">
          按知识模块系统学习高中数学基础内容。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          <MathCard
            title="集合与常用逻辑用语"
            description="集合关系、充分必要条件、逻辑用语"
          />

          <MathCard
            title="一元二次函数、方程和不等式"
            description="方程、不等式、二次函数基础"
          />

          <MathCard
            title="函数的概念与性质"
            description="定义域、值域、单调性、奇偶性、最值"
            href="/grade1/functions"
          />

          <MathCard
            title="指数函数与对数函数"
            description="指数、对数及其函数性质"
          />

          <MathCard
            title="三角函数"
            description="任意角、诱导公式、图像与性质"
          />

          <MathCard
            title="平面向量"
            description="向量运算、数量积与几何应用"
          />

        </div>
      </section>
    </main>
  );
}

function MathCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          开始学习 →
        </a>
      ) : (
        <span className="mt-5 inline-block text-sm text-slate-400">
          即将开放
        </span>
      )}
    </div>
  );
}