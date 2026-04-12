// @ts-expect-error - Missing types for pg in Termux environment
import pg from "pg";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const connectionString = process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
  console.error("❌ Missing POSTGRES_URL_NON_POOLING in .env.local");
  process.exit(1);
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const { Client } = pg;
const schemaSql = fs.readFileSync(path.resolve(__dirname, "../store/schema.sql"), "utf8");

async function setupDatabase() {
  console.log("🛠️  Connecting to Supabase (jiggoo's projects) via Postgres...");

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    console.log("✅ Connected. Executing Master Schema SQL...");
    await client.query(schemaSql);
    console.log("🎉 Database Schema Deployed Successfully!");
  } catch (err: unknown) {
    console.error("❌ Schema Deployment Failed:", (err as Error).message || err);
  } finally {
    await client.end();
  }
}

setupDatabase();
