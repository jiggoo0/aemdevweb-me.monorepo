import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing credentials. Check .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedTrust() {
  console.log("🛡️ Generating Digital Signatures for Ecosystem...");

  const verifyData = [
    {
      site_id: "AEM-WEB-HUB",
      site_name: "AEMDEVWEB Engine",
      verification_tier: "verified",
      architect_signature: "AEMZA MACKS",
      core_web_vitals_status: { lcp: "0.8s", fid: "10ms", cls: "0.01" },
      security_headers_status: { hsts: true, csp: true, xfo: true },
      transparency_timeline: [
        {
          event: "Infrastructure Deployed",
          timestamp: new Date().toISOString(),
        },
        {
          event: "SEO Engine Orchestrated",
          timestamp: new Date().toISOString(),
        },
        { event: "Unlink Trust Verified", timestamp: new Date().toISOString() },
      ],
    },
    {
      site_id: "AEM-IDENTITY-HUB",
      site_name: "AEMZA MACKS Authority",
      verification_tier: "verified",
      architect_signature: "AEMZA MACKS",
      core_web_vitals_status: { lcp: "0.5s", fid: "5ms", cls: "0" },
      security_headers_status: { hsts: true, csp: true, xfo: true },
      transparency_timeline: [
        { event: "Authority Portal Live", timestamp: new Date().toISOString() },
      ],
    },
  ];

  for (const data of verifyData) {
    const { error } = await supabase
      .from("unlink_verification")
      .upsert(data, { onConflict: "site_id" });

    if (error) {
      console.error(`❌ Failed to sign ${data.site_id}:`, error.message);
    } else {
      console.log(`✅ Signed & Verified: ${data.site_name} (${data.site_id})`);
    }
  }

  console.log("\n🏆 Digital Signatures have been recorded in the Trust Ledger.");
}

seedTrust();
