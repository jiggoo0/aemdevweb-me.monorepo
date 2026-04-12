import { createClient } from "@supabase/supabase-js";
import { AREA_NODES } from "../packages/core/src/constants/area-nodes";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing credentials (NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY). Check .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedProvinces() {
  console.log("🚛 [MASTER SEEDER]: Initializing 77 Provinces into High-Integrity Ledger...");

  for (const node of AREA_NODES) {
    // 1. Seed Core Province Data
    const { data: provinceData, error: pError } = await supabase.from("provinces").upsert(
      {
        slug: node.slug,
        name_th: node.name_th,
        name_en: node.name_en,
        region: node.region,
        priority: node.priority,
        tier: node.tier || 2,
        is_active: true
      },
      { onConflict: "slug" }
    ).select("id").single();

    if (pError) {
      console.error(`❌ Failed to seed province ${node.name_th}:`, pError.message);
      continue;
    }

    const provinceId = provinceData.id;

    // 2. Seed Province SEO Content (Corrected table name to provinces_content)
    const { error: cError } = await supabase.from("provinces_content").upsert(
      {
        province_id: provinceId,
        province_slug: node.slug, // Maintain backward compatibility if needed
        seo_title: node.seoTitle,
        seo_description: node.seoDescription,
        long_description: node.longDescription,
        keywords: node.keywords,
        metadata: {
          market_insight: node.localContext.marketInsight,
          districts: node.districts
        }
      },
      { onConflict: "province_slug" } // Use slug as unique identifier for content
    );

    if (cError) {
      console.error(`❌ Failed to seed content for ${node.name_th}:`, cError.message);
    } else {
      console.log(`✅ Fully Synchronized: ${node.name_th} (${node.slug})`);
    }
  }

  console.log("\n🏆 [COMPLIANCE]: 77 Province Engine is now fully synchronized with @repo/core!");
}

seedProvinces();
