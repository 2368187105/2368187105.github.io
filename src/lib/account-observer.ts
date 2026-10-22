import type { SupabaseClient, User } from "@supabase/supabase-js";

// Auth callbacks remain synchronous; data loading happens after React renders.
export function observeAccount(client: SupabaseClient, receive: (user: User | null, failed: boolean) => void) {
  let active = true;
  let revision = 0;
  const initialRevision = revision;
  const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
    revision += 1;
    if (active) receive(session?.user ?? null, false);
  });
  void client.auth.getUser().then(({ data, error }) => {
    if (active && revision === initialRevision) receive(data.user, !!error && error.name !== "AuthSessionMissingError");
  }).catch(() => {
    if (active && revision === initialRevision) receive(null, true);
  });
  return () => { active = false; subscription.unsubscribe(); };
}
