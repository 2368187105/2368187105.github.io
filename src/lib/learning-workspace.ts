import type { SupabaseClient } from "@supabase/supabase-js";
// Page every result set; Supabase REST otherwise silently caps long histories.
export async function ownRows<T>(client: SupabaseClient, table: string, userId: string, order = "created_at"): Promise<T[]> {
    const result: T[] = [];
    for (let offset = 0;; offset += 500) {
        const { data, error } = await client.from(table).select("*").eq("user_id", userId).order(order, { ascending: false }).order("id", { ascending: false }).range(offset, offset + 499);
        if (error)
            throw error;
        result.push(...data as T[]);
        if (data.length < 500)
            return result;
    }
}
export const workspaceSetupMessage = "复习功能尚未连接：请先运行 docs/learning-workspace.sql；旧练习记录仍可使用。若已运行，请检查网络或刷新。";
