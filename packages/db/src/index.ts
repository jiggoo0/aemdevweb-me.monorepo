import { createClient } from "@supabase/supabase-js";
import { AREA_NODES } from "@repo/core";
import type { Database } from "./types";

/**
 * [TYPES]: Model Definitions derived from Database Schema
 */
export type Project = Database["public"]["Tables"]["projects"]["Row"];
export type ProjectInsert = Database["public"]["Tables"]["projects"]["Insert"];

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type PostInsert = Database["public"]["Tables"]["posts"]["Insert"];

export type ProvinceContent = Database["public"]["Tables"]["provinces_content"]["Row"];
export type ProvinceContentInsert = Database["public"]["Tables"]["provinces_content"]["Insert"];

export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type LeadInsert = Database["public"]["Tables"]["leads"]["Insert"];

export type UnlinkVerification = Database["public"]["Tables"]["unlink_verification"]["Row"];
export type UnlinkVerificationInsert = Database["public"]["Tables"]["unlink_verification"]["Insert"];
/**
 * [MASTER DB CLIENT]: UNLINK-TH Core Supabase Integration (Safe for Build-time)
 */
let _supabase: any = null;

export const supabase = new Proxy({} as any, {
  get(target, prop) {
    if (!_supabase) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        // Safe fallback during build-time
        if (typeof window === "undefined") {
          console.warn("[REPO-DB] Supabase URL or Key missing. Using mock client for build safety.");
          return () => ({ from: () => ({ select: () => ({ limit: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }) }) });
        }
      }

      _supabase = createClient<Database>(supabaseUrl || "https://placeholder.supabase.co", supabaseKey || "placeholder");
    }
    return _supabase[prop];
  }
});

/**
 * [FACADE]: DataRegistry
...
 * Centralized data access layer. Caching is deferred to the App layer to ensure
 * compatibility with different rendering environments in the monorepo.
 */
export const DataRegistry = {
  /**
   * [FETCH]: Province content with institutional fallback
   */
  async getProvinceData(slug: string): Promise<{ data: Record<string, unknown> | null; error: any }> {
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
            content: staticNode.description as unknown as Record<string, unknown>,
            metadata: { description: staticNode.seoDescription } as unknown as Record<
              string,
              unknown
            >,
          } as unknown as Record<string, unknown>,
          error: null,
        };
      }
      return { data: null, error };
    }

    return { data: data as Record<string, unknown>, error: null };
  },

  /**
   * [FETCH]: Projects for portfolio feed
   */
  async getProjects(category?: string): Promise<{ data: Project[] | null; error: any }> {
    let query = supabase.from("projects").select("*");
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("created_at", { ascending: false });
    return { data: (data as Project[] | null) || [], error };
  },

  /**
   * [FETCH]: Specific project by slug
   */
  async getProjectBySlug(slug: string): Promise<{ data: Project | null; error: any }> {
    const { data, error } = await supabase.from("projects").select("*").eq("slug", slug).single();
    return { data: data as Project | null, error };
  },

  /**
   * [FETCH]: Blog posts
   */
  async getPosts(category?: string): Promise<{ data: Post[] | null; error: any }> {
    let query = supabase.from("posts").select("*").eq("is_published", true);
    if (category) query = query.eq("category", category);
    const { data, error } = await query.order("published_at", { ascending: false });
    return { data: (data as Post[] | null) || [], error };
  },

  /**
   * [FETCH]: Specific blog post by slug
   */
  async getPostBySlug(slug: string): Promise<{ data: Post | null; error: any }> {
    const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
    return { data: data as Post | null, error };
  },

  /**
   * [FETCH]: Leads (Admin)
   */
  async getLeads(): Promise<{ data: Lead[] | null; error: any }> {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    return { data: (data as Lead[] | null) || [], error };
  },

  /**
   * [MUTATION]: Lead submission
   */
  async submitLead(lead: LeadInsert) {
    return (supabase.from("leads") as any).insert(lead);
  },

  /**
   * [MUTATION]: Update Lead Status (Admin)
   */
  async updateLeadStatus(id: string, status: string) {
    return (supabase.from("leads") as any)
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);
  },

  /**
   * [STRATEGIC]: Verified Node verification data
   */
  async getVerifiedNode(siteId: string) {
    const { data: verification, error: vError } = await supabase
      .from("unlink_verification")
      .select("*")
      .eq("site_id", siteId)
      .single();

    if (vError || !verification) return { data: null, error: vError };

    const { data: projects } = await supabase.from("projects").select("*").limit(1);

    return {
      data: {
        ...(verification as object),
        linkedProjects: (projects as Record<string, unknown>[]) || [],
      } as Record<string, unknown>,
      error: null,
    };
  },
};

// Backward Compatibility Exports
export const getProvinceData = DataRegistry.getProvinceData;
export const getProjects = DataRegistry.getProjects;
export const getProjectBySlug = DataRegistry.getProjectBySlug;
export const getPosts = DataRegistry.getPosts;
export const getPostBySlug = DataRegistry.getPostBySlug;
export const submitLead = DataRegistry.submitLead;
export const getLeads = DataRegistry.getLeads;
export const updateLeadStatus = DataRegistry.updateLeadStatus;
export const getVerifiedNode = DataRegistry.getVerifiedNode;

export type { Database } from "./types";
