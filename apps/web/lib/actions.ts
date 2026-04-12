"use server";

import { submitLead } from "@repo/db";
import { revalidatePath } from "next/cache";

/**
 * [ACTION]: HANDLE_LEAD_SUBMISSION v1.0.0
 * [STRATEGY]: Server Action for high-integrity lead capture
 */
export async function handleLeadSubmission(formData: FormData) {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const message = formData.get("message") as string;
  const siteOrigin = formData.get("siteOrigin") as string;
  const province = formData.get("province") as string;

  try {
    const { error } = await submitLead({
      site_origin: siteOrigin || "web:marketing",
      name,
      contact,
      message,
      metadata: {
        province: province || "central",
        submittedAt: new Date().toISOString(),
      },
    });

    if (error) throw error;

    revalidatePath("/leads"); // Update admin dashboard
    return { success: true };
  } catch (err) {
    console.error("Action Error:", err);
    return {
      success: false,
      error: "Failed to transmit lead. Please try again.",
    };
  }
}
