/**
 * [API_UTILITIES]: SECURITY_HUB v1.0.0
 * [STRATEGY]: Domain Whitelisting | API Key Validation | Standardized Responses
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { NextResponse } from "next/server";

const ALLOWED_DOMAINS = [
  "aemdevweb.com",
  "unlink-th.com",
  "unlink-global.com",
  "localhost", // For development
];

// In production, this should be in environment variables
const API_KEY = process.env.IDENTITY_HUB_API_KEY || "9mza-dev-key-2026";

export function validateRequest(request: Request) {
  const origin = request.headers.get("origin");
  const apiKey = request.headers.get("x-api-key");

  // 1. Validate API Key
  if (apiKey !== API_KEY) {
    return { isValid: false, error: "Unauthorized: Invalid API Key", status: 401 };
  }

  // 2. Validate Origin (Domain Whitelisting)
  if (origin) {
    try {
      const domain = new URL(origin).hostname;
      const isAllowed = ALLOWED_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`));
      if (!isAllowed) {
        return { isValid: false, error: "Forbidden: Domain not whitelisted", status: 403 };
      }
    } catch {
      return { isValid: false, error: "Bad Request: Invalid Origin header", status: 400 };
    }
  }

  return { isValid: true };
}

export function apiResponse(data: unknown, status = 200) {
  return NextResponse.json(
    {
      success: status >= 200 && status < 300,
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      data,
    },
    {
      status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-api-key",
      },
    },
  );
}

export function apiError(message: string, status = 400) {
  return apiResponse({ error: message }, status);
}
