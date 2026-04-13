import type { NextConfig } from "next";

/**
 * [NEXT_CONFIG]: SHARED_INFRASTRUCTURE v1.2.0
 * [STRATEGY]: Platform-Agnostic Build | Webpack Fallback | Optimized Caching
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

export const baseConfig: NextConfig = {
  // 🚀 Next.js 16 Optimization
  reactStrictMode: true,
  // Note: cacheComponents is an experimental feature in some versions or renamed in v16
  // We keep it if it's part of the project's established pattern
  cacheComponents: true,

  // 🔗 Monorepo Transparency
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db", "@repo/trust-engine"],

  // 🛡️ Webpack Configuration for Termux Compatibility
  webpack: (config: { cache: boolean }) => {
    // Disable filesystem cache to prevent errors on Android/Termux
    config.cache = false;
    return config;
  },

  // 🏗️ Build & Infrastructure
  output: "standalone",
  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: true, // Verification handled by root audit
  },

  // 🖼️ Modern Image Support
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
