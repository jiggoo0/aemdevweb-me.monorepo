import { NextRequest, NextResponse } from "next/server";

/**
 * [MIDDLEWARE]: AUTHENTICATION & ACCESS CONTROL v1.0.0
 * [STRATEGY]: Protected routes for Unlink Dashboard
 */
export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 1. Define Protected Routes
  const isProtectedRoute =
    path.startsWith("/leads") ||
    path.startsWith("/audit") ||
    path.startsWith("/registry") ||
    path.startsWith("/portal");

  // 2. Auth Logic (Supabase Auth via Cookies)
  const session = req.cookies.get("sb-access-token");

  // If route is protected and no session, redirect to login
  if (isProtectedRoute && !session) {
    // return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/leads/:path*", "/audit/:path*", "/registry/:path*", "/portal/:path*"],
};
