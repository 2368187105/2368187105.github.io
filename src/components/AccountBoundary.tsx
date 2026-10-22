"use client";
import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import { createClient } from "@/lib/supabase/client";
import { observeAccount } from "@/lib/account-observer";

export default function AccountBoundary({ children, title }: { children: ReactNode; title: string }) {
  const client = useMemo(() => createClient(), []);
  const [account, setAccount] = useState<{ id: string | null; failed: boolean } | null>(null);
  useEffect(() => observeAccount(client, (user, failed) => setAccount({ id: user?.id ?? null, failed })), [client]);
  if (!account || account.failed) return <main className="min-h-screen bg-slate-50"><SiteHeader /><div className="mx-auto max-w-6xl px-4 py-10"><h1 className="text-3xl font-bold text-slate-900">{title}</h1><p role={account?.failed ? "alert" : "status"} className="mt-5">{account?.failed ? "账号读取失败，请刷新后重试。" : "正在确认账号…"}</p></div></main>;
  // An identity change unmounts all old records and cancels their pending effects.
  return <Fragment key={account.id ?? "guest"}>{children}</Fragment>;
}
