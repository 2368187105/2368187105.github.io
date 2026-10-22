export function safeReturnPath(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\u0000-\u0020]|%2f|%5c/i.test(value)) return "/";
  try {
    const url = new URL(value, "https://cheling.invalid");
    if (url.origin !== "https://cheling.invalid" || !/^\/(?:$|(?:grade[123]|practice|mistakes|report|assessment|print)(?:\/|$))/.test(url.pathname)) return "/";
    if (/access_token|refresh_token|type=recovery/i.test(url.hash)) return "/";
    return url.pathname + url.search + url.hash;
  } catch { return "/"; }
}
export function loginUrl(path: string) {
  return "/login/?returnTo=" + encodeURIComponent(safeReturnPath(path));
}
