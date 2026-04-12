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

const posts = [
  {
    slug: "future-of-technical-seo-2026",
    title: "The Future of Technical SEO in the AI Era",
    excerpt:
      "Why Entity Linking and Schema Hardening are the only ways to survive the shift from Search to Generation.",
    content: `
      <h2>The Shift to GEO</h2>
      <p>As we move into 2026, standard SEO is no longer enough. We must focus on <strong>Generative Engine Optimization (GEO)</strong>. This means making our data highly structured so that AI agents like Gemini and GPT can parse and recommend our business with high confidence.</p>
      
      <blockquote>"The entity is the new keyword." - AEMZA MACKS</blockquote>
      
      <h2>Core Strategies</h2>
      <ul>
        <li><strong>Entity Linking:</strong> Connecting the founder (Person) to the business (Organization) through verified JSON-LD.</li>
        <li><strong>Structural Purity:</strong> Minimizing DOM depth and maximizing Core Web Vitals for crawler efficiency.</li>
        <li><strong>Authority Signaling:</strong> Using Trust Ledgers and verified digital signatures.</li>
      </ul>
      
      <p>In our AEM Monorepo, we've automated these signals through the @repo/seo package, ensuring every province node is an authority in its own right.</p>
    `,
    category: "analysis",
    tags: ["SEO", "AI", "Future"],
    thumbnail_url: null,
    is_published: true,
    published_at: new Date().toISOString(),
  },
  {
    slug: "monorepo-architectural-integrity",
    title: "Monorepo Excellence: Scaling to 77 Provinces",
    excerpt:
      "How a unified codebase allows for hyper-localized SEO without the technical debt of traditional multi-site setups.",
    content: `
      <h2>Scaling with Turborepo</h2>
      <p>Managing 77 individual sites would be a nightmare. By using a <strong>Monorepo</strong>, we share the core logic, UI components, and database schema across all nodes.</p>
      
      <h2>Why Node 22?</h2>
      <p>The latest LTS provides the memory safety and performance needed for our heavy dynamic routing logic. We've seen a 30% reduction in response time after standardizing on Node 22.</p>
      
      <p>Our architecture ensures that a change in the central 'LeadForm' component instantly propagates to every province in Thailand, maintaining a 100% consistent brand identity.</p>
    `,
    category: "architecture",
    tags: ["Monorepo", "NodeJS", "Scaling"],
    thumbnail_url: null,
    is_published: true,
    published_at: new Date().toISOString(),
  },
];

async function seed() {
  console.log("🚀 Seeding Strategic Blog Posts...");
  const { error } = await supabase.from("posts").upsert(posts, { onConflict: "slug" });

  if (error) console.error("❌ Seeding Failed:", error.message);
  else console.log("✅ Seeding Successful.");
}

seed();
