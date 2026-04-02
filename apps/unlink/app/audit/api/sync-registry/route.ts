/** @format */

import { NextRequest, NextResponse } from "next/server";
import { syncRegistryToAudit } from "@/lib/compliance";

export async function GET(request: NextRequest) {
  // 🛡️ Security Check
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const token = authHeader.substring(7);

  if (token !== process.env.AUDIT_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const actorId = request.nextUrl.searchParams.get("actor") || "SYSTEM-TRIGGER";
    const report = await syncRegistryToAudit(actorId);

    return NextResponse.json({
      status: "Success",
      message: "Registry Sync Completed",
      timestamp: new Date().toISOString(),
      report,
    });
  } catch (error) {
    console.error("[Sync Registry Error]:", error);
    return NextResponse.json(
      {
        status: "Error",
        message: "Internal Server Error during registry sync",
      },
      { status: 500 },
    );
  }
}
