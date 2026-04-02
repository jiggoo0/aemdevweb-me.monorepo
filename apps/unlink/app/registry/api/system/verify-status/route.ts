import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * 🌪️ E-E-A-T STATUS GATEWAY
 * Returns trust and verification status for a specific entity.
 * Usage: /api/system/verify-status?entity_id=UL-P-001
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const entityId = searchParams.get("entity_id");

  // 1. Parameter Validation
  if (!entityId) {
    return NextResponse.json(
      { error: "Bad Request", message: "entity_id is required" },
      { status: 400 },
    );
  }

  // 2. Security: Domain Restriction (UNLINK-TH network only)
  const origin = req.headers.get("origin") || req.headers.get("referer") || "";
  const allowedDomains = [
    "unlink-th.com",
    "unlink-portal.vercel.app",
    "jp-visual-docs.aemdevweb.com",
    "jpvisouldocs.website",
    "jpvisouldocs.shop",
    "localhost", // for development
  ];

  const isAllowed = allowedDomains.some((domain) => origin.includes(domain));
  if (!isAllowed && process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Forbidden", message: "Domain not authorized" },
      { status: 403 },
    );
  }

  try {
    // 3. Database Query
    const { data, error } = await supabase
      .from("identities")
      .select(
        "id, trust_level, verified_badge_url, last_verified_at, last_checked",
      )
      .eq("id", entityId)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Not Found", message: "Entity not found in Registry" },
        { status: 404 },
      );
    }

    // 4. Standardized Response (Mapping Fields)
    return NextResponse.json(
      {
        entity_id: data.id,
        trust_level: data.trust_level,
        verified_badge_url:
          data.verified_badge_url ||
          "https://assets.unlink-th.com/badges/standard.svg",
        last_audit_date: data.last_verified_at || data.last_checked || null,
        status: "verified",
        provider: "UNLINK-REGISTRY",
      },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

/* @identity 9mza */
