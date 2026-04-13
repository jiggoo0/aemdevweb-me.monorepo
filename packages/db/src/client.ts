/**
 * [DATABASE_CLIENT]: BROWSER_SUPABASE_CLIENT v1.1.0
 * [STRATEGY]: Client-side Only (CSR) | Safe for hydration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

export function createBrowserClient() {
  return createSupabaseBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
