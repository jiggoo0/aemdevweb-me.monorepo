/* @identity 9mza */
/**
 * 📡 UNLINK-REGISTRY: AUDIT NODE REPORTER
 * Mandatory reporting to UNLINK-AUDIT (Compliance Sentinel).
 * Ref: .gemini/rules/audit-reporting.md
 */

export async function reportAudit(payload: {
  action: string;
  actor_id?: string;
  metadata?: any;
}) {
  const AUDIT_ENDPOINT =
    process.env.AUDIT_ENDPOINT || "https://audit.unlink-th.com/api/logs";
  const AUDIT_SECRET = process.env.AUDIT_SECRET_KEY;

  if (!AUDIT_SECRET) {
    console.warn("⚠️ AUDIT_SECRET_KEY is missing. Skipping audit reporting.");
    return;
  }

  try {
    const response = await fetch(AUDIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUDIT_SECRET}`,
      },
      body: JSON.stringify({
        domain: "unlink-registry",
        action: payload.action,
        actor_id: payload.actor_id || "system",
        metadata: payload.metadata || {},
      }),
    });

    if (!response.ok) {
      console.error(`❌ Audit Node Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("❌ Failed to send Audit Log:", error);
  }
}
