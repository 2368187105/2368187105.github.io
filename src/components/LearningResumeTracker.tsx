"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { observeAccount } from "@/lib/account-observer";
import { lessonResumeKey } from "@/lib/learning-resume";
export default function LearningResumeTracker() {
  const client = useMemo(() => createClient(), []), pathname = usePathname();
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => observeAccount(client, user => setUserId(user?.id ?? null)), [client]);
  useEffect(() => { const title = document.querySelector("main h1")?.textContent?.trim(); if (userId && /^\/grade[123]\/[a-z0-9-]+\/[a-z0-9-]+\/?$/.test(pathname) && title) { try { localStorage.setItem(lessonResumeKey(userId), JSON.stringify({ href: pathname, title: title.slice(0, 200) })); } catch { /* Reading courses remains available when browser storage is disabled. */ } } }, [pathname, userId]);
  return null;
}
