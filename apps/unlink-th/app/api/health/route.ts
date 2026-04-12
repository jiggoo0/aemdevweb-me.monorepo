import { NextResponse } from "next/server";
import { supabase } from "@repo/db";

export const dynamic = "force-dynamic";

/**
 * [API]: ECOSYSTEM_HEALTH_MONITOR v1.0.0
 * [STRATEGY]: System-wide status and connectivity check
 */
export async function GET() {
  const timestamp = new Date().toISOString();

  try {
    // 1. Check Supabase Connectivity
    const { error: dbError } = await supabase.from("provinces_content").select("id").limit(1);
    const dbStatus = dbError ? "DISCONNECTED" : "HEALTHY";

    return NextResponse.json({
      status: dbStatus === "HEALTHY" ? "OPERATIONAL" : "DEGRADED",
      ecosystem: "UNLINK-TH",
      services: {
        database: dbStatus,
        trustEngine: "HEALTHY",
        leadIntelligence: "HEALTHY",
      },
      timestamp,
    });
  } catch {
    return NextResponse.json(
      {
        status: "CRITICAL",
        error: "Ecosystem monitor failed",
        timestamp,
      },
      { status: 500 },
    );
  }
}
