"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = useMemo(() => createClient(), []);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let active = true;
    async function checkRecoverySession() {
      try {
        // The installed SDK exchanges the PKCE code automatically. Wait for it
        // instead of exchanging the same one-use code a second time.
        const { error: initializeError } = await supabase.auth.initialize();
        if (initializeError) {
          if (active) setError("重置链接未能完成验证。请在发起请求的同一浏览器中打开最新邮件；本地网站和正式网站不能交叉验证。");
          return;
        }
        const { data: { user }, error: sessionError } = await supabase.auth.getUser();
        if (!active) return;
        setSessionReady(!!user && !sessionError);
        if (!user || sessionError) setError("未取得有效的重置登录状态，链接可能已失效或在其他浏览器中打开。请返回登录页重新发送邮件，再在同一浏览器中打开。");
      } catch {
        if (active) setError("暂时无法验证重置链接，请检查网络后刷新重试。");
      } finally {
        if (active) setChecking(false);
      }
    }
    void checkRecoverySession();
    return () => { active = false; };
  }, [supabase]);

  async function handleResetPassword(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    if (loading || checking || completed) return;
    if (!sessionReady) {
      setError("请先通过最新的密码重置邮件完成验证。");
      return;
    }

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

    let passwordChanged = false;
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError("密码修改失败：" + updateError.message);
        return;
      }
      passwordChanged = true;
      setCompleted(true);
      setPassword("");
      setConfirmPassword("");
      setMessage("密码修改成功，请返回登录页，使用新密码登录。");
      const { error: signOutError } = await supabase.auth.signOut({ scope: "local" });
      if (signOutError) setError("密码已修改，但当前登录状态未能退出。请刷新后重新登录。");
    } catch {
      setError(passwordChanged ? "密码已修改，但退出请求未完成。请刷新后重新登录。" : "修改请求未完成，请检查网络后重试。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            高中数学学习平台
          </Link>

          <Link
            href="/login"
            className="text-sm text-slate-500 hover:text-blue-600"
          >
            返回登录
          </Link>
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
            {completed ? "新密码已保存。" : checking ? "正在验证密码重置链接…" : sessionReady ? "验证已完成，请输入新的登录密码。" : "请通过密码重置邮件验证身份后设置新密码。"}
          </p>

          {!completed && <form
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
                autoComplete="new-password" required minLength={6}
                disabled={loading || checking || !sessionReady}
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
                autoComplete="new-password" required minLength={6}
                disabled={loading || checking || !sessionReady}
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

            <button
              type="submit"
              disabled={loading || checking || !sessionReady}
              className={`w-full rounded-lg px-5 py-3 font-medium text-white ${
                loading || checking || !sessionReady
                  ? "cursor-not-allowed bg-slate-400"
                  : "bg-slate-900 hover:bg-slate-700"
              }`}
            >
              {checking ? "验证中..." : loading
                ? "修改中..."
                : "修改密码"}
            </button>
          </form>}
          {error && <div role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm leading-7 text-red-700">{error}</div>}
          {message && <div role="status" className="mt-5 rounded-lg bg-green-50 px-4 py-3 text-sm leading-7 text-green-700">{message}</div>}
          {(completed || (!checking && !sessionReady)) && <Link href="/login/" className="mt-6 inline-block text-sm font-medium text-blue-600 hover:underline">{completed ? "返回登录 →" : "返回登录页，重新发送重置邮件 →"}</Link>}
        </div>
      </section>
    </main>
  );
}
