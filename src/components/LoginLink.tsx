"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { loginUrl } from "@/lib/login-return";

export default function LoginLink({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const [href, setHref] = useState("/login/");
  function currentHref() { return loginUrl(window.location.pathname + window.location.search + window.location.hash); }
  useEffect(() => { const update = () => setHref(currentHref()); const frame = requestAnimationFrame(update); window.addEventListener("popstate", update); return () => { cancelAnimationFrame(frame); window.removeEventListener("popstate", update); }; }, [pathname]);
  return <Link href={href} className={className} onFocus={() => setHref(currentHref())} onPointerEnter={() => setHref(currentHref())} onClick={event => { onClick?.(); if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) { event.preventDefault(); router.push(currentHref()); } }}>{children}</Link>;
}
