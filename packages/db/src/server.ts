/**
 * [DATABASE_CLIENT]: SERVER_SUPABASE_CLIENT v1.1.0
 * [STRATEGY]: Server-side Only (SSR/RSC) | Cookie Managed
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createServerClient as createSupabaseServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./types";

export async function createServerClient() {
  const cookieStore = await cookies();

  return createSupabaseServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Handled via middleware
          }
        },
      },
    },
  );
}
