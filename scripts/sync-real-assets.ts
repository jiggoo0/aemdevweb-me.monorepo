import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncAssets() {
  console.log("🚀 Synchronizing Real Visual Assets to DB...");

  // 1. Sync Blog Posts Images
  const blogUpdates = [
    {
      slug: "future-of-technical-seo-2026",
      thumbnail_url: "/images/blog/adapt-to-ai-vs-stone-age.webp",
    },
    {
      slug: "monorepo-architectural-integrity",
      thumbnail_url: "/images/blog/nextjs-speed-optimization-025s-performance.webp",
    },
  ];

  for (const post of blogUpdates) {
    await supabase
      .from("posts")
      .update({ thumbnail_url: post.thumbnail_url })
      .eq("slug", post.slug);
  }

  // 2. Sync Project Images
  const projectUpdates = [
    {
      slug: "ceo-identity-cleanup",
      thumbnail_url: "/images/blog/digital-identity-eeat-google-presence.webp",
    },
    {
      slug: "dubai-golden-visa-alignment",
      thumbnail_url: "/images/performance-results-16x9.webp",
    },
    {
      slug: "blacklist-purge-protocol",
      thumbnail_url: "/images/blog/police-report.webp",
    },
  ];

  for (const project of projectUpdates) {
    await supabase
      .from("projects")
      .update({ thumbnail_url: project.thumbnail_url })
      .eq("slug", project.slug);
  }

  console.log("✅ Assets Synchronized Successfully.");
}

syncAssets();
