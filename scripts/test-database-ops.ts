import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local from the root directory
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use Service Role for testing full CRUD

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabaseOps() {
  console.log("🚀 Starting Database Operational Test...");
  const testSlug = `test-province-${Date.now()}`;

  // 1. CREATE (เพิ่ม)
  console.log("\n--- [CREATE]: Adding test data...");
  const { data: insertedData, error: insertError } = await supabase
    .from("provinces_content")
    .insert([
      {
        province_slug: testSlug,
        title: "Test Operation: Gemini CLI",
        content: { message: "Operational test successful" },
        metadata: { status: "testing" },
      },
    ])
    .select();

  if (insertError) {
    console.error("❌ [CREATE] Failed:", insertError.message);
  } else {
    console.log("✅ [CREATE] Success: Data inserted with ID:", insertedData?.[0]?.id);
  }

  // 2. READ (อ่าน)
  console.log("\n--- [READ]: Fetching test data...");
  const { data: fetchedData, error: fetchError } = await supabase
    .from("provinces_content")
    .select("*")
    .eq("province_slug", testSlug)
    .single();

  if (fetchError) {
    console.error("❌ [READ] Failed:", fetchError.message);
  } else {
    console.log("✅ [READ] Success: Found record with title:", fetchedData?.title);
  }

  // 3. DELETE (ลบ)
  console.log("\n--- [DELETE]: Cleanup test data...");
  const { error: deleteError } = await supabase
    .from("provinces_content")
    .delete()
    .eq("province_slug", testSlug);

  if (deleteError) {
    console.error("❌ [DELETE] Failed:", deleteError.message);
  } else {
    console.log("✅ [DELETE] Success: Test record removed.");
  }

  console.log("\n🏆 Database Integrity Test: COMPLETED");
}

testDatabaseOps();
