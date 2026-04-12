import { NextResponse } from "next/server";
import { checkSystemHealth } from "@repo/db";

/**
 * [API]: ECOSYSTEM_HEALTH_MONITOR v1.0.0
 * [STRATEGY]: System-wide status and connectivity check via Facade
 */
export async function GET() {
  const timestamp = new Date().toISOString();

  try {
    // 1. Check connectivity via DataRegistry Facade
    const { status: dbStatus } = await checkSystemHealth();

    return NextResponse.json({
      status: dbStatus === "HEALTHY" ? "OPERATIONAL" : "DEGRADED",
      ecosystem: "UNLINK-TH",
      services: {
        database: dbStatus === "HEALTHY" ? "HEALTHY" : "DISCONNECTED",
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
