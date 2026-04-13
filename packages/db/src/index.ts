/**
 * [DATABASE_PROVIDER]: CENTRALIZED_DATA_FACADE v2.2.0
 * [STRATEGY]: Platform-Agnostic Proxy | Strict Type Safety | Fallback Support
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createClient } from "@supabase/supabase-js";
import { AREA_NODES } from "@repo/core";
import type { Database } from "./types";

// Re-export types for consumer packages
export type { Database, Json } from "./types";

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
 * [INIT]: Lazy-initialized Supabase Client
 * Managed via Proxy to handle build-time environments without crashing
 */
let _supabase: SupabaseClientInstance | null = null;

export const supabase = new Proxy({} as unknown as SupabaseClientInstance, {
  get(target, prop) {
    if (!_supabase) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
      const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        // Fallback for CI/CD and Build-time
        if (typeof window === "undefined") {
          const mockQuery: any = {
            select: () => mockQuery,
            eq: () => mockQuery,
            order: () => mockQuery,
            limit: () => mockQuery,
            single: () => Promise.resolve({ data: null, error: null }),
            then: (cb: any) => cb({ data: [], error: null }),
          };
          const mockClient: any = {
            from: () => mockQuery,
            auth: { getSession: () => Promise.resolve({ data: { session: null }, error: null }) },
          };
          return mockClient[prop as string];
        }
      }

      _supabase = createClient<Database>(
        supabaseUrl || "https://placeholder.supabase.co",
        supabaseKey || "placeholder",
      );
    }
    return (_supabase as any)[prop];
  },
});

/**
 * [REGISTRY]: DataRegistry Facade
 * Provides high-level methods for data access across the monorepo
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

  async getProjects(category?: string) {
    let query = supabase.from("projects").select("*");
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("created_at", { ascending: false });
    return { data: data || [], error };
  },

  async getProjectBySlug(slug: string) {
    return supabase.from("projects").select("*").eq("slug", slug).single();
  },

  async getPosts(category?: string) {
    let query = supabase.from("posts").select("*").eq("is_published", true);
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("published_at", { ascending: false });
    return { data: data || [], error };
  },

  async getPostBySlug(slug: string) {
    return supabase.from("posts").select("*").eq("slug", slug).single();
  },

  async getLeads() {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    return { data: data || [], error };
  },

  async submitLead(lead: LeadInsert) {
    return supabase.from("leads").insert(lead);
  },

  async updateLeadStatus(id: string, status: string) {
    return supabase
      .from("leads")
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
        ...verification,
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

// Simplified Exports
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
