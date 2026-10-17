"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  {
    label: "首页",
    href: "/",
  },
  {
    label: "高一数学",
    href: "/grade1",
  },
  {
    label: "专题训练",
    href: "/practice",
  },
  {
    label: "我的错题",
    href: "/mistakes",
  },
  {
    label: "学习报告",
    href: "/report",
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState<string | null>(null);
  const [checkingUser, setCheckingUser] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setEmail(user?.email ?? null);
      setCheckingUser(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
      setCheckingUser(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  async function handleLogout() {
    setLoggingOut(true);

    await supabase.auth.signOut();

    setEmail(null);
    setLoggingOut(false);
    setMobileOpen(false);

    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
            M
          </div>

<div>
  <div className="text-xl font-bold text-slate-900">
    彻凌数学
  </div>
  <div className="text-xs tracking-[0.2em] text-slate-400">
    山海连云，巍巍交大。
  </div>
</div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 桌面账号 */}
        <div className="hidden items-center gap-3 lg:flex">
          {checkingUser ? (
            <span className="text-sm text-slate-400">加载中...</span>
          ) : email ? (
            <>
              <div className="max-w-40 text-right">
                <p className="text-[11px] text-slate-400">当前学生</p>
                <p className="truncate text-sm font-medium text-slate-700">
                  {email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loggingOut ? "退出中..." : "退出"}
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              登录 / 注册
            </Link>
          )}
        </div>

        {/* 手机菜单按钮 */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
          aria-label="打开导航菜单"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* 手机菜单 */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mx-auto mt-3 max-w-7xl border-t border-slate-100 pt-4">
            {checkingUser ? (
              <p className="text-sm text-slate-400">正在读取账号...</p>
            ) : email ? (
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">当前学生</p>
                  <p className="truncate text-sm font-medium text-slate-700">
                    {email}
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="shrink-0 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600"
                >
                  {loggingOut ? "退出中..." : "退出登录"}
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
              >
                登录 / 注册
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}