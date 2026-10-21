"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isStudyPath, isStudying, STUDY_HEARTBEAT_MS } from "@/lib/study-stats";
import { createStudyHeartbeat } from "@/lib/study-heartbeat";

// A server clock credits short active intervals; the browser never submits a duration.
export default function StudyTimeTracker() {
  const pathname = usePathname();
  const client = useMemo(() => createClient(), []);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let revision = 0;
    const initialRevision = revision;
    void client.auth.getUser().then(({ data }) => {
      if (mounted && revision === initialRevision) setUserId(data.user?.id ?? null);
    }).catch(() => {});
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      revision += 1;
      if (mounted) setUserId(session?.user.id ?? null);
    });
    return () => { mounted = false; subscription.unsubscribe(); };
  }, [client]);

  useEffect(() => {
    if (!userId || !isStudyPath(pathname)) return;
    let lastActivity = Date.now();
    const heartbeat = createStudyHeartbeat(async (session, active) =>
      await client.rpc("record_study_heartbeat", { p_session: session, p_active: active }), () => crypto.randomUUID());
    function ping(forceInactive = false) {
      const active = !forceInactive && isStudying(pathname, document.visibilityState === "visible",
        document.hasFocus(), Date.now() - lastActivity);
      void heartbeat.request(active);
    }

    function activity() {
      lastActivity = Date.now();
      // Input resets idle detection; the regular heartbeat controls write frequency.
    }
    function visibility() {
      if (document.visibilityState === "visible" && document.hasFocus()) { activity(); ping(); }
      else ping(true);
    }
    function blur() { ping(true); }
    function focus() { activity(); ping(); }
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach(event => window.addEventListener(event, activity, { passive: true }));
    window.addEventListener("focus", focus);
    window.addEventListener("blur", blur);
    window.addEventListener("pagehide", blur);
    document.addEventListener("visibilitychange", visibility);
    const timer = window.setInterval(() => void ping(), STUDY_HEARTBEAT_MS);
    void ping();
    return () => {
      // Not crediting the final partial interval prevents background/navigation overcounting.
      void heartbeat.request(false);
      window.clearInterval(timer);
      events.forEach(event => window.removeEventListener(event, activity));
      window.removeEventListener("focus", focus);
      window.removeEventListener("blur", blur);
      window.removeEventListener("pagehide", blur);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [client, pathname, userId]);

  return null;
}
