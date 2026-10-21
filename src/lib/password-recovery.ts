import type { AuthChangeEvent } from "@supabase/supabase-js";

export const passwordResetPath = "/reset-password/";

// Navigate only after Supabase has verified the recovery link and saved the
// session. A URL parameter alone must not be treated as successful recovery.
export function passwordRecoveryDestination(event: AuthChangeEvent, pathname: string): string | null {
  return event === "PASSWORD_RECOVERY" && pathname.replace(/\/+$/, "") !== "/reset-password"
    ? passwordResetPath
    : null;
}
