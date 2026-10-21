import { isDashboardUnavailable } from "./study-stats";

type SendHeartbeat = (session: string, active: boolean) => Promise<{ error: { code?: string } | null }>;

// Serialize transitions so a blur during an in-flight request is never lost.
// Each resumed interval has a new ID: a failed pause cannot credit a background gap.
export function createStudyHeartbeat(send: SendHeartbeat, newSession: () => string) {
  let desiredActive = false;
  let session = "";
  let pending = false;
  let unavailable = false;
  let flight: Promise<void> | null = null;
  const pauses: string[] = [];

  async function drain() {
    while (!unavailable && (pauses.length > 0 || pending)) {
      const pausedSession = pauses.shift();
      let result;
      try {
        if (pausedSession) result = await send(pausedSession, false);
        else {
          pending = false;
          if (!desiredActive) continue;
          result = await send(session, true);
        }
        if (isDashboardUnavailable(result.error)) unavailable = true;
      } catch { /* Retry on the next timer tick; never invent unconfirmed time. */ }
    }
  }

  return {
    request(active: boolean): Promise<void> {
      if (unavailable) return Promise.resolve();
      if (active !== desiredActive) {
        if (desiredActive) pauses.push(session);
        if (active) session = newSession();
        desiredActive = active;
      }
      pending = active;
      if (!flight) flight = Promise.resolve().then(drain).finally(() => { flight = null; });
      return flight;
    },
  };
}
