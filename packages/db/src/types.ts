/**
 * [DATABASE_SCHEMA]: GENERATED_SUPABASE_TYPES v2.1.0
 * [STRATEGY]: Strict Schema Contract | JSON Validation Ready
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      provinces_content: {
        Row: {
          id: string;
          province_slug: string;
          title: string;
          content: Json;
          metadata: Json;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          province_slug: string;
          title: string;
          content?: Json;
          metadata?: Json;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          province_slug?: string;
          title?: string;
          content?: Json;
          metadata?: Json;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      unlink_verification: {
        Row: {
          id: string;
          site_id: string;
          site_name: string;
          last_audit_date: string;
          verification_tier: string;
          architect_signature: string;
          core_web_vitals_status: Json;
          security_headers_status: Json;
          transparency_timeline: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          site_id: string;
          site_name: string;
          last_audit_date: string;
          verification_tier: string;
          architect_signature: string;
          core_web_vitals_status: Json;
          security_headers_status: Json;
          transparency_timeline: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          site_id?: string;
          site_name?: string;
          last_audit_date?: string;
          verification_tier?: string;
          architect_signature?: string;
          core_web_vitals_status?: Json;
          security_headers_status?: Json;
          transparency_timeline?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      leads: {
        Row: {
          id: string;
          site_origin: string;
          name: string;
          contact: string;
          message: string;
          status: string;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          site_origin: string;
          name: string;
          contact: string;
          message: string;
          status?: string;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          site_origin?: string;
          name?: string;
          contact?: string;
          message?: string;
          status?: string;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          content: Json;
          thumbnail_url: string | null;
          category: string;
          tags: string[];
          is_featured: boolean;
          client_name: string | null;
          live_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          content?: Json;
          thumbnail_url?: string | null;
          category: string;
          tags?: string[];
          is_featured?: boolean;
          client_name?: string | null;
          live_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          content?: Json;
          thumbnail_url?: string | null;
          category?: string;
          tags?: string[];
          is_featured?: boolean;
          client_name?: string | null;
          live_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          thumbnail_url: string | null;
          author_id: string;
          category: string;
          tags: string[];
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          thumbnail_url?: string | null;
          author_id?: string;
          category: string;
          tags?: string[];
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          thumbnail_url?: string | null;
          author_id?: string;
          category?: string;
          tags?: string[];
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [key: string]: unknown;
    };
    Functions: {
      [key: string]: unknown;
    };
    Enums: {
      [key: string]: unknown;
    };
  };
};
