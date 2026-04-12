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

const projects = [
  {
    slug: "ceo-identity-cleanup",
    title: "Executive Digital Identity Detox",
    description:
      "10-year historical audit and cleansing for a high-profile Tech CEO. Removed 40+ negative nodes.",
    category: "authority",
    tags: ["Reputation", "Detox", "Privacy"],
    thumbnail_url: "/images/case-studies/phuket-luxury-seo.webp",
    is_featured: true,
    client_name: "Classified Tech Entrepreneur",
    live_url: null,
    content: {
      metrics: { RemovedNodes: 42, TrustScore: "+85%", Timeframe: "90 Days" },
      mission: "Establish absolute digital sovereignty for the executive.",
    },
  },
  {
    slug: "dubai-golden-visa-alignment",
    title: "Dubai Golden Visa Strategy",
    description:
      "Aligning digital footprint for international financial transactions and residency applications.",
    category: "authority",
    tags: ["Global", "Finance", "Identity"],
    thumbnail_url: "/images/case-studies/industrial-catalog.webp",
    is_featured: true,
    client_name: "Strategic Investor",
    live_url: null,
    content: {
      metrics: { PassRate: "100%", AuditReady: "Verified", Latency: "Zero" },
      mission: "Ensuring zero friction in international background checks.",
    },
  },
  {
    slug: "blacklist-purge-protocol",
    title: "Strategic Blacklist Elimination",
    description:
      "Purging a hospitality brand from non-verified industry blacklists and consumer complaints.",
    category: "authority",
    tags: ["Blacklist", "Hospitality", "Legal"],
    thumbnail_url: "/images/case-studies/provincial-domination.webp",
    is_featured: true,
    client_name: "Luxury Resort Group",
    live_url: null,
    content: {
      metrics: {
        Clearance: "Complete",
        SearchVisibility: "+200%",
        ROI: "High",
      },
      mission: "Recovering brand authority in the tourism sector.",
    },
  },
];

async function seed() {
  console.log("🚀 Seeding Strategic Projects...");
  const { error } = await supabase.from("projects").upsert(projects, { onConflict: "slug" });

  if (error) console.error("❌ Seeding Failed:", error.message);
  else console.log("✅ Seeding Successful.");
}

seed();
