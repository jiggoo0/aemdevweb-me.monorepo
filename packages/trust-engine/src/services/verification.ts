import { supabase } from "@repo/db";

// Define the TypeScript interface for the unlink_verification table
export interface UnlinkVerification {
  id: string; // UUID
  site_id: string;
  site_name: string;
  last_audit_date: string;
  verification_tier: string;
  architect_signature: string;
  core_web_vitals_status: {
    lcp: string;
    fid: string;
    cls: string;
    fcp: string;
    inp: string;
  };
  security_headers_status: { hsts: string; xfo: string; csp: string };
  transparency_timeline: Array<{ timestamp: string; event: string }>;
  created_at: string;
  updated_at: string;
}

/**
 * Fetches verification data for a given site_id.
 */
export async function getVerificationData(siteId: string): Promise<UnlinkVerification | null> {
  const { data, error } = await supabase
    .from("unlink_verification")
    .select("*")
    .eq("site_id", siteId)
    .single();

  if (error) {
    console.error("Error fetching verification data:", error);
    return null;
  }
  return data as UnlinkVerification;
}

/**
 * Inserts a new verification log.
 */
export async function insertVerificationLog(data: unknown): Promise<UnlinkVerification | null> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: insertedData, error } = await (supabase.from("unlink_verification") as any)
    .insert(data)
    .select()
    .single();

  if (error) {
    console.error("Error inserting verification log:", error);
    return null;
  }
  return insertedData as UnlinkVerification;
}

/**
 * Updates existing verification data.
 */
export async function updateVerificationData(
  siteId: string,
  data: unknown,
): Promise<UnlinkVerification | null> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: updatedData, error } = await (supabase.from("unlink_verification") as any)
    .update(data)
    .eq("site_id", siteId)
    .select()
    .single();

  if (error) {
    console.error("Error updating verification data:", error);
    return null;
  }
  return updatedData as UnlinkVerification;
}
