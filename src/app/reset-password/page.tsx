"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleResetPassword(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!password || !confirmPassword) {
      setError("请输入两次新密码。");
      return;
    }

    if (password.length < 6) {
      setError("新密码至少需要 6 位。");
      return;
    }

    if (password !== confirmPassword) {
      setError("两次输入的密码不一致。");
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {
      setError(
        "密码修改失败：" + error.message
      );

      setLoading(false);
      return;
    }

    setMessage(
      "密码修改成功，即将返回登录页面。"
    );

    setLoading(false);

    setTimeout(async () => {
      await supabase.auth.signOut();

      router.push("/login");
      router.refresh();
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </a>

          <a
            href="/login"
            className="text-sm text-slate-500 hover:text-blue-600"
          >
            返回登录
          </a>
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold text-blue-600">
            RESET PASSWORD
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            设置新密码
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            请输入新的登录密码。
          </p>

          <form
            onSubmit={handleResetPassword}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                新密码
              </label>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                再次输入新密码
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
                placeholder="再次输入密码"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg px-5 py-3 font-medium text-white ${
                loading
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-slate-900 hover:bg-slate-700"
              }`}
            >
              {loading
                ? "修改中..."
                : "修改密码"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}