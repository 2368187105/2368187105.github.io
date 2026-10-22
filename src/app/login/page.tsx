"use client";

import { type FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { safeReturnPath } from "@/lib/login-return";
import { passwordResetPath } from "@/lib/password-recovery";

export default function LoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const busy = loading || resetLoading || redirecting;
  const inputClass = "w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setError("");
    setMessage("");

    const cleanEmail = email.trim();
    const cleanUsername = username.trim();
    if (!cleanEmail || !password) {
      setError("请输入邮箱和密码。");
      return;
    }
    if (mode === "register") {
      if (!/^[\u4e00-\u9fffA-Za-z0-9_-]{2,20}$/.test(cleanUsername)) {
        setError("用户名需为 2–20 个字符，可使用中文、字母、数字、下划线或短横线。");
        return;
      }
      if (password.length < 6) {
        setError("密码至少需要 6 位。");
        return;
      }
    }

    setLoading(true);
    try {
      if (mode === "register") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: { username: cleanUsername },
          },
        });
        if (signUpError) {
          setError("注册失败：" + signUpError.message);
          return;
        }
        if (!data.session) {
          setMessage("注册请求已提交，请检查邮箱并按邮件提示完成验证。如果已注册，可直接登录或找回密码。");
          setPassword("");
          return;
        }
        setMessage("注册成功，正在进入学习平台...");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });
        if (signInError) {
          setError("登录失败：" + signInError.message);
          return;
        }
        setMessage("登录成功，正在进入学习平台...");
      }
      setRedirecting(true);
      router.replace(safeReturnPath(new URLSearchParams(window.location.search).get("returnTo")));
      router.refresh();
    } catch {
      setRedirecting(false);
      setError("请求未完成，请检查网络后重试。");
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (busy) return;
    setError("");
    setMessage("");
    const cleanEmail = email.trim();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("请先在邮箱栏输入有效的注册邮箱。");
      return;
    }
    setResetLoading(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
        redirectTo: `${window.location.origin}${passwordResetPath}`,
      });
      if (resetError) {
        setError("发送失败：" + resetError.message);
        return;
      }
      setMessage("如果该邮箱已注册，你将收到密码重置邮件，请检查收件箱和垃圾邮件。在发起请求的同一浏览器中打开最新邮件；请勿从本地网站切换到正式网站完成验证。");
    } catch {
      setError("邮件请求未完成，请检查网络后重试。");
    } finally {
      setResetLoading(false);
    }
  }

  function switchMode() {
    if (busy) return;
    setMode((current) => current === "login" ? "register" : "login");
    setPassword("");
    setMessage("");
    setError("");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold text-slate-900">高中数学学习平台</Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600">← 返回首页</Link>
        </div>
      </header>

      <section className="mx-auto flex max-w-6xl justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-blue-600">STUDENT ACCOUNT</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {mode === "login" ? "学生登录" : "创建学生账号"}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {mode === "login"
              ? "使用邮箱登录，保存学习记录、错题和练习进度。"
              : "设置你的用户名，使用邮箱登录并找回密码。"}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-busy={busy}>
            {mode === "register" && (
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">用户名</label>
                <input
                  id="username" name="username" type="text" autoComplete="nickname"
                  value={username} onChange={(event) => setUsername(event.target.value)}
                  required minLength={2} maxLength={20} disabled={busy}
                  placeholder="例如：小孟同学" aria-describedby="username-help" className={inputClass}
                />
                <p id="username-help" className="mt-2 text-xs leading-5 text-slate-400">
                  2–20 个字符，支持中文、字母、数字、下划线和短横线。用户名作为显示名称，可重复。
                </p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">邮箱</label>
              <input
                id="email" name="email" type="email" autoComplete="username"
                value={email} onChange={(event) => setEmail(event.target.value)}
                required disabled={busy} placeholder="student@example.com" className={inputClass}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">密码</label>
                {mode === "login" && (
                  <button type="button" onClick={handleForgotPassword} disabled={busy}
                    className="text-sm font-medium text-blue-600 hover:underline disabled:text-slate-400">
                    {resetLoading ? "发送中..." : "忘记密码？"}
                  </button>
                )}
              </div>
              <input
                id="password" name="password" type="password"
                autoComplete={mode === "register" ? "new-password" : "current-password"}
                value={password} onChange={(event) => setPassword(event.target.value)}
                required minLength={mode === "register" ? 6 : undefined} disabled={busy}
                placeholder={mode === "register" ? "至少 6 位密码" : "请输入密码"} className={inputClass}
              />
            </div>

            {error && <div role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{error}</div>}
            {message && <div role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm leading-6 text-green-700">{message}</div>}

            <button type="submit" disabled={busy}
              className="w-full rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400">
              {redirecting ? "正在进入..." : loading ? "处理中..." : mode === "login" ? "登录" : "注册"}
            </button>
          </form>

          <div className="mt-6 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">{mode === "login" ? "还没有账号？" : "已经有账号？"}</p>
            <button type="button" onClick={switchMode} disabled={busy}
              className="mt-2 text-sm font-medium text-blue-600 hover:underline disabled:text-slate-400">
              {mode === "login" ? "立即注册" : "返回登录"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
