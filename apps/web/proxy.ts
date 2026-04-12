import { NextRequest, NextResponse } from "next/server";

/**
 * [MIDDLEWARE]: ECOSYSTEM INTELLIGENCE v2.0.0
 * [DOMAIN_STRATEGY]: Multi-Domain Authority Enforcement
 */
export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  // 1. Skip static assets and API routes
  if (path.startsWith("/_next") || path.startsWith("/api") || path.includes(".")) {
    return NextResponse.next();
  }

  // 2. Canonical Domain Enforcement (Production only)
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    // Example: Redirect non-www or legacy domains to canonical ones if needed
    // Currently, we let Vercel handle domain mapping, but we track the 'origin' here
  }

  // 3. Security & Trust Headers
  const response = NextResponse.next();

  // High-Level Security Directives
  response.headers.set("X-AEM-Identity-Verified", "true");
  response.headers.set("X-Monorepo-App", "AEMDEVWEB-ME");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
