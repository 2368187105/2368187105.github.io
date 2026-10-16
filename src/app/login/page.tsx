"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("请输入邮箱和密码。");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("密码至少需要 6 位。");
      setLoading(false);
      return;
    }

    // 注册
    if (mode === "register") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        setMessage("注册成功，已经自动登录。");

        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 800);
      } else {
        setMessage(
          "注册成功，请前往邮箱完成验证，然后再回来登录。"
        );
      }

      setLoading(false);
      return;
    }

    // 登录
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError("登录失败：" + error.message);
      setLoading(false);
      return;
    }

    setMessage("登录成功，正在进入学习平台...");

    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 600);

    setLoading(false);
  }

  // 忘记密码
  async function handleForgotPassword() {
    setError("");
    setMessage("");

    if (!email) {
      setError("请先在邮箱栏输入你的注册邮箱。");
      return;
    }

    setResetLoading(true);

    const redirectUrl =
      `${window.location.origin}/reset-password`;

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo: redirectUrl,
        }
      );

    if (error) {
      setError("发送失败：" + error.message);
      setResetLoading(false);
      return;
    }

    setMessage(
      "密码重置邮件已发送，请检查邮箱并点击邮件中的重置链接。"
    );

    setResetLoading(false);
  }

  function switchMode() {
    setMode(
      mode === "login" ? "register" : "login"
    );

    setMessage("");
    setError("");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 顶部 */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
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

      {/* 登录区域 */}
      <section className="mx-auto flex max-w-6xl justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold text-blue-600">
            STUDENT ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {mode === "login"
              ? "学生登录"
              : "创建学生账号"}
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {mode === "login"
              ? "登录后可以保存学习记录、错题和练习进度。"
              : "注册账号后，你的学习数据可以跨设备保存。"}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* 邮箱 */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                邮箱
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="student@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* 密码 */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  密码
                </label>

                {mode === "login" && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={resetLoading}
                    className="text-sm font-medium text-blue-600 hover:underline disabled:text-slate-400"
                  >
                    {resetLoading
                      ? "发送中..."
                      : "忘记密码？"}
                  </button>
                )}
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="至少 6 位密码"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* 错误 */}
            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                {error}
              </div>
            )}

            {/* 成功 */}
            {message && (
              <div className="rounded-lg bg-green-50 px-4 py-3 text-sm leading-6 text-green-700">
                {message}
              </div>
            )}

            {/* 提交 */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg px-5 py-3 font-medium text-white transition ${
                loading
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-slate-900 hover:bg-slate-700"
              }`}
            >
              {loading
                ? "处理中..."
                : mode === "login"
                  ? "登录"
                  : "注册"}
            </button>
          </form>

          {/* 切换登录/注册 */}
          <div className="mt-6 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">
              {mode === "login"
                ? "还没有账号？"
                : "已经有账号？"}
            </p>

            <button
              type="button"
              onClick={switchMode}
              className="mt-2 text-sm font-medium text-blue-600 hover:underline"
            >
              {mode === "login"
                ? "立即注册"
                : "返回登录"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}