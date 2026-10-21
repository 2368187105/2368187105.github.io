import { createBrowserClient } from "@supabase/ssr";
import { passwordRecoveryDestination } from "@/lib/password-recovery";

const recoveryClients = new WeakSet<object>();

export function createClient() {
  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  if (typeof window !== "undefined" && !recoveryClients.has(client)) {
    recoveryClients.add(client);
    // Install once on the shared browser client, before its asynchronous URL
    // recovery completes. This also handles emails that land on the home page.
    client.auth.onAuthStateChange((event) => {
      const destination = passwordRecoveryDestination(event, window.location.pathname);
      if (destination) window.location.replace(destination);
    });
  }
  return client;
}
