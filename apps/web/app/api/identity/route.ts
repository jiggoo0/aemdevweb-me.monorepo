/**
 * [IDENTITY_HUB_API]: AUTHORITY_SYNC_ENDPOINT v1.0.0
 * [STRATEGY]: Export Master Identity & GEO-Authority for UNLINK Ecosystem
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { AREA_NODES } from "@repo/core";
import { validateRequest, apiResponse, apiError } from "@/lib/api-utils";
import { generatePersonSchema, generateOrganizationSchema } from "@/lib/schema";

export async function GET(request: Request) {
  const validation = validateRequest(request);
  if (!validation.isValid) {
    return apiError(validation.error || "Unauthorized", validation.status);
  }

  try {
    // 1. Prepare Identity Data
    const identity = {
      siteConfig: SITE_CONFIG,
      expert: SITE_CONFIG.expert,
      ecosystem: SITE_CONFIG.ecosystem,
    };

    // 2. Prepare Schema Graph (Authority Metadata)
    const schemas = {
      person: generatePersonSchema(),
      organization: generateOrganizationSchema(),
    };

    // 3. Prepare GEO-Authority (77 Provinces)
    const geoAuthority = AREA_NODES.map((node) => ({
      slug: node.slug,
      province: node.province,
      region: node.region,
      coordinates: node.coordinates,
      priority: node.priority,
      tier: node.tier,
    }));

    return apiResponse({
      identity,
      schemas,
      geoAuthority,
      syncMetadata: {
        source: "AEMDEVWEB",
        lastUpdated: new Date().toISOString(),
        integrityHash: "sha256-9mza-identity-hub-v1", // Placeholder
      },
    });
  } catch (error) {
    console.error("[IDENTITY_HUB_ERROR]:", error);
    return apiError("Internal Server Error", 500);
  }
}

// Handle CORS Preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-api-key",
    },
  });
}
