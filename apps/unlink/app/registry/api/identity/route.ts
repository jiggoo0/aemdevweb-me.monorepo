/* @identity 9mza */
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { db } from "@/lib/shared-source/db";
import { z } from "zod";
import { isRateLimited } from "@/lib/rate-limit";
import { reportAudit } from "@/lib/audit-reporter";

// 🛡️ Identity Validation Schema (Institutional Standard)
const identitySchema = z.object({
  id: z
    .string()
    .min(3)
    .regex(/^[A-Z0-9-]+$/, "ID must be alphanumeric and uppercase"),
  type: z.enum(["person", "organization"]),
  name: z.string().min(2),
  gender: z.string().optional().nullable(),
  expertise: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  key_person_id: z.string().optional().nullable(),
  assets_summary: z.string().optional().nullable(),
  trust_level: z.number().min(1).max(10).default(1),
  last_verified_at: z.string().datetime().optional().nullable(),
  authority_score: z.number().min(0).max(100).default(0),
  verified_badge_url: z.string().url().optional().nullable(),
  sameAs: z.array(z.string()).optional().default([]),
  metadata: z.any().optional().default({}),
});

/**
 * 🆔 GET /api/identity
 */
export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  try {
    const { data, error } = await supabase
      .from("identities")
      .select(
        "id, type, name, expertise, industry, trust_level, last_checked, last_verified_at, authority_score, verified_badge_url",
      )
      .order("id", { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: "Internal Server Error", message: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

/**
 * 🆕 POST /api/identity
 */
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip, 5)) {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const validatedData = identitySchema.parse(body);

    // 1. Update Supabase
    const { data, error } = await supabase
      .from("identities")
      .insert([validatedData])
      .select()
      .single();

    // 2. Update Turso (LibSQL)
    try {
      const now = new Date().toISOString();
      const sameAsStr = validatedData.sameAs
        ? JSON.stringify(validatedData.sameAs)
        : "[]";
      const metadataStr = validatedData.metadata
        ? JSON.stringify(validatedData.metadata)
        : "{}";

      await db.execute({
        sql: `
          INSERT INTO identities (
            id, type, name, gender, expertise, bio, industry, 
            key_person_id, assets_summary, trust_level, 
            last_checked, last_verified_at, authority_score, 
            verified_badge_url, sameAs, metadata, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET
            type = excluded.type,
            name = excluded.name,
            gender = excluded.gender,
            expertise = excluded.expertise,
            bio = excluded.bio,
            industry = excluded.industry,
            key_person_id = excluded.key_person_id,
            assets_summary = excluded.assets_summary,
            trust_level = excluded.trust_level,
            last_checked = excluded.last_checked,
            last_verified_at = excluded.last_verified_at,
            authority_score = excluded.authority_score,
            verified_badge_url = excluded.verified_badge_url,
            sameAs = excluded.sameAs,
            metadata = excluded.metadata,
            updated_at = excluded.updated_at
        `,
        args: [
          validatedData.id,
          validatedData.type,
          validatedData.name,
          validatedData.gender || null,
          validatedData.expertise || null,
          validatedData.bio || null,
          validatedData.industry || null,
          validatedData.key_person_id || null,
          validatedData.assets_summary || null,
          validatedData.trust_level,
          now,
          validatedData.last_verified_at || now,
          validatedData.authority_score,
          validatedData.verified_badge_url || null,
          sameAsStr,
          metadataStr,
          now,
        ],
      });
    } catch (tursoError: any) {
      console.error("Turso Error:", tursoError.message);
    }

    if (error && !validatedData.id) {
      return NextResponse.json(
        { error: "Creation Failed", message: error.message },
        { status: 400 },
      );
    }

    // 📡 Report to UNLINK-AUDIT node
    await reportAudit({
      action: "identity-creation",
      actor_id: "system-registry",
      metadata: {
        entity_id: validatedData.id,
        type: validatedData.type,
        name: validatedData.name,
      },
    });

    return NextResponse.json(data || validatedData, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation Error", details: error.flatten() },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
