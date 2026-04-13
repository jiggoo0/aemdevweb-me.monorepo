/**
 * [DATABASE_PROVIDER]: CENTRALIZED_DATA_FACADE v2.4.0
 * [STRATEGY]: Pure Boundary Alignment | Runtime-Safe Proxy | DNA Synchronized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createClient } from "@supabase/supabase-js";
import { AREA_NODES } from "@repo/core";
import type { Database } from "./types";
import { createBrowserClient } from "./client";

// Re-export types and CSR factory
export type { Database, Json } from "./types";
export * from "./client";

export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];
export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type PostInsert = Database["public"]["Tables"]["posts"]["Insert"];
export type ProvinceContent = Database["public"]["Tables"]["provinces_content"]["Row"];
export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];
export type UnlinkVerification = Database["public"]["Tables"]["unlink_verification"]["Row"];

type SupabaseClientInstance = ReturnType<typeof createClient<Database>>;

/**
 * [INIT]: Safe Supabase Proxy
 * Binds to Browser Client if in window, or a static client if in Node (safe for build)
 * For dynamic Server features (cookies), use createServerClient() from '@repo/db/server' directly
 */
let _supabase: SupabaseClientInstance | null = null;

export const supabase = new Proxy({} as unknown as SupabaseClientInstance, {
  get(target, prop) {
    if (typeof window !== "undefined") {
      if (!_supabase) _supabase = createBrowserClient();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (_supabase as unknown as Record<string | symbol, any>)[prop];
    }

    // Node/Build Environment: Provide a non-cookie-dependent client
    if (!_supabase) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
      const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

      _supabase = createClient<Database>(
        supabaseUrl || "https://placeholder.supabase.co",
        supabaseKey || "placeholder",
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (_supabase as unknown as Record<string | symbol, any>)[prop];
  },
});

/**
 * [REGISTRY]: DataRegistry Facade
 */
export const DataRegistry = {
  async getProvinceData(slug: string) {
    const { data, error } = await supabase
      .from("provinces_content")
      .select("*")
      .eq("province_slug", slug)
      .single();

    if (error || !data) {
      const staticNode = AREA_NODES.find((n) => n.slug === slug);
      if (staticNode) {
        return {
          data: {
            title: staticNode.title,
            content: staticNode.description,
            metadata: { description: staticNode.seoDescription },
            is_fallback: true,
          },
          error: null,
        };
      }
      return { data: null, error };
    }
    return { data, error: null };
  },

  async getProjects(category?: string): Promise<{ data: Project[]; error: unknown }> {
    let query = supabase.from("projects").select("*");
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("created_at", { ascending: false });
    return { data: (data as Project[]) || [], error };
  },

  async getProjectBySlug(slug: string): Promise<{ data: Project | null; error: unknown }> {
    const { data, error } = await supabase.from("projects").select("*").eq("slug", slug).single();
    return { data: data as Project | null, error };
  },

  async getPosts(category?: string): Promise<{ data: Post[]; error: unknown }> {
    let query = supabase.from("posts").select("*").eq("is_published", true);
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("published_at", { ascending: false });
    return { data: (data as Post[]) || [], error };
  },

  async getPostBySlug(slug: string): Promise<{ data: Post | null; error: unknown }> {
    const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
    return { data: data as Post | null, error };
  },

  async getLeads(): Promise<{ data: Lead[]; error: unknown }> {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    return { data: (data as Lead[]) || [], error };
  },

  async submitLead(lead: LeadInsert) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (supabase.from("leads") as unknown as Record<string, any>).insert(lead);
  },

  async updateLeadStatus(id: string, status: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (supabase.from("leads") as unknown as Record<string, any>)
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);
  },

  async getVerifiedNode(siteId: string) {
    const [verificationResult, projectsResult] = await Promise.all([
      supabase.from("unlink_verification").select("*").eq("site_id", siteId).single(),
      supabase.from("projects").select("*").limit(1),
    ]);

    const { data: verification, error: vError } = verificationResult;
    const { data: projects } = projectsResult;

    if (vError || !verification) return { data: null, error: vError };

    return {
      data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(verification as unknown as Record<string, any>),
        linkedProjects: projects || [],
      },
      error: null,
    };
  },

  async checkSystemHealth() {
    try {
      const { error } = await supabase.from("provinces_content").select("id").limit(1);
      return { status: error ? "DEGRADED" : "HEALTHY", error };
    } catch (err) {
      return { status: "CRITICAL", error: err };
    }
  },
};

export const {
  getProvinceData,
  getProjects,
  getProjectBySlug,
  getPosts,
  getPostBySlug,
  submitLead,
  getLeads,
  updateLeadStatus,
  getVerifiedNode,
  checkSystemHealth,
} = DataRegistry;
