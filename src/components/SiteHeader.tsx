"use client";
import LoginLink from "@/components/LoginLink";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { label: "首页", href: "/" },
  { label: "高一数学", href: "/grade1" },
  { label: "高二数学", href: "/grade2" },
  { label: "高三数学", href: "/grade3" },
  { label: "专题训练", href: "/practice" },
  { label: "我的错题", href: "/mistakes" },
  { label: "学习报告", href: "/report" },
];

type AccountUser = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
};

function getDisplayName(user: AccountUser | null) {
  const username = user?.user_metadata?.username;
  return (typeof username === "string" ? username.trim() : "")
    || user?.email
    || "同学";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<AccountUser | null>(null);
  const [checkingUser, setCheckingUser] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const displayName = getDisplayName(user);

  useEffect(() => {
    let active = true;
    let authRevision = 0;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      authRevision += 1;
      setUser(session?.user ?? null);
      setCheckingUser(false);
      setAuthError("");
    });

    async function loadUser() {
      const revision = authRevision;
      try {
        const { data: { user: currentUser }, error } = await supabase.auth.getUser();
        // 登录、退出或更新资料后，忽略此前请求的旧结果。
        if (!active || revision !== authRevision) return;
        if (error) {
          setUser(null);
          if (error.name !== "AuthSessionMissingError") {
            setAuthError("账号信息读取失败，请刷新后重试。");
          }
          return;
        }
        setUser(currentUser);
      } catch {
        if (active && revision === authRevision) {
          setAuthError("账号信息读取失败，请检查网络后刷新。");
        }
      } finally {
        if (active && revision === authRevision) setCheckingUser(false);
      }
    }

    void loadUser();
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    setAuthError("");
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        setAuthError("退出失败，请稍后重试。");
        return;
      }
      setUser(null);
      setMobileOpen(false);
      router.push("/");
      router.refresh();
    } catch {
      setAuthError("退出失败，请检查网络后重试。");
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">M</div>
          <div>
            <div className="text-xl font-bold text-slate-900">彻凌数学</div>
            <div className="text-xs tracking-[0.2em] text-slate-400">山海连云，巍巍交大。</div>
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 桌面账号 */}
        <div className="hidden items-center gap-3 xl:flex">
          {checkingUser ? (
            <span className="text-sm text-slate-400">加载中...</span>
          ) : user ? (
            <>
              <div className="max-w-40 text-right">
                <p className="text-[11px] text-slate-400">当前账号</p>
                <p title={displayName} className="truncate text-sm font-medium text-slate-700">{displayName}</p>
              </div>
              <button type="button" onClick={handleLogout} disabled={loggingOut}
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
                {loggingOut ? "退出中..." : "退出登录"}
              </button>
            </>
          ) : (
            <LoginLink className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">登录 / 注册</LoginLink>
          )}
        </div>

        {/* 手机菜单按钮 */}
        <button type="button" onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 xl:hidden"
          aria-label={mobileOpen ? "关闭导航菜单" : "打开导航菜单"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* 手机菜单 */}
      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mx-auto mt-3 max-w-7xl border-t border-slate-100 pt-4">
            {checkingUser ? (
              <p className="text-sm text-slate-400">正在读取账号...</p>
            ) : user ? (
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">当前账号</p>
                  <p title={displayName} className="truncate text-sm font-medium text-slate-700">{displayName}</p>
                </div>
                <button type="button" onClick={handleLogout} disabled={loggingOut}
                  className="shrink-0 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50">
                  {loggingOut ? "退出中..." : "退出登录"}
                </button>
              </div>
            ) : (
              <LoginLink onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white">登录 / 注册</LoginLink>
            )}
          </div>
        </div>
      )}

      {authError && (
        <div role="alert" className="border-t border-red-100 bg-red-50 px-4 py-2 text-center text-sm text-red-700">{authError}</div>
      )}
    </header>
  );
}
