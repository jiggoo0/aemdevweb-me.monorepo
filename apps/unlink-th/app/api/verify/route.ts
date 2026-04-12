import { NextRequest, NextResponse } from "next/server";
import { getVerificationData } from "@repo/trust-engine";
import { connection } from "next/server";

/**
 * [API]: TRUST_VERIFICATION_ENDPOINT v1.1.0
 */
export async function GET(req: NextRequest) {
  await connection();
  const { searchParams } = new URL(req.url);
  const siteId = searchParams.get("siteId");

  if (!siteId) {
    return NextResponse.json({ error: "Missing siteId parameter" }, { status: 400 });
  }

  try {
    const data = await getVerificationData(siteId);

    if (!data) {
      return NextResponse.json({ error: "Site not found in Trust Ledger" }, { status: 404 });
    }

    return NextResponse.json({
      siteId: data.site_id,
      siteName: data.site_name,
      status: "VERIFIED",
      verificationTier: data.verification_tier,
      lastAuditDate: data.last_audit_date,
      architectSignature: data.architect_signature,
      metrics: {
        coreWebVitals: data.core_web_vitals_status,
        securityHeaders: data.security_headers_status,
      },
      ledgerHistory: data.transparency_timeline,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Failed to retrieve trust data" }, { status: 500 });
  }
}
