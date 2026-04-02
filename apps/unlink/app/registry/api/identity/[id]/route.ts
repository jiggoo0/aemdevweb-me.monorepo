/* @identity 9mza */
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/shared-source/db";
import { isRateLimited } from "@/lib/rate-limit";
import { safeErrorLog } from "@/lib/shared-source/utils";

/**
 * 🆔 GET /api/identity/[id]
 * -------------------------------------------------------------------------
 * ดึงข้อมูลตัวตนเชิงลึกรายบุคคล (Shared Core Registry Access)
 * มาตรฐาน: Shared Turso Core (Hrana-over-HTTP)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const ip = request.headers.get("x-forwarded-for") || "anonymous";

  // 🛡️ Bearer Token Enforcement
  const authHeader = request.headers.get("authorization");
  const apiKey = process.env.REGISTRY_API_KEY;

  if (!authHeader?.startsWith("Bearer ") || authHeader.split(" ")[1] !== apiKey) {
    console.warn(`Unauthorized registry access attempt from IP: ${ip}`);
    return NextResponse.json(
      { error: "Unauthorized access to registry" },
      { status: 401 },
    );
  }

  // 🛡️ Rate Limiting: 50 requests per minute
  if (isRateLimited(`identity-get-${ip}`, 50, 60000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    // 🛰️ ดึงข้อมูลจาก Shared Turso Core (Authoritative Source)
    const result = await db.execute({
      sql: "SELECT * FROM identities WHERE id = ?",
      args: [id.toUpperCase()]
    });

    const identity = result.rows[0];

    if (!identity) {
      return NextResponse.json(
        { error: "Registry entry not found", id: id.toUpperCase() },
        { status: 404 },
      );
    }

    // 🚀 Caching Headers for Performance
    return NextResponse.json({
      success: true,
      data: identity
    }, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
      },
    });
  } catch (error) {
    safeErrorLog("IDENTITY_GET_FATAL_ERROR", error);
    return NextResponse.json(
      { error: "Internal System Protocol Error" },
      { status: 500 },
    );
  }
}
