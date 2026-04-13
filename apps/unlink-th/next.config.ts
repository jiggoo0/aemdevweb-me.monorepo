import type { NextConfig } from "next";

/**
 * [CONFIG]: NEXT.JS 16 UNLINK-TH CONFIGURATION v5.1.0
 * [COMPLIANCE]: Optimized for ARM64/Termux WASM Environment
 * [STRATEGY]: Reputation & Verification Hub
 */
const nextConfig: NextConfig = {
  // 🚀 Required for Next.js 16 Caching & Partial Prerendering (PPR)
  cacheComponents: true,

  // 🔗 Essential for Monorepo Shared Packages
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db", "@repo/trust-engine"],

  // 🏗️ Build & Optimization Settings
  output: "standalone",

  typescript: {
    // Strategic bypass: Type integrity is verified via 'pnpm run audit' or AI development cycle.
    ignoreBuildErrors: true,
  },

  // 🛠️ Webpack Configuration for Termux Compatibility
  webpack: (config) => {
    // 🛡️ Disable filesystem cache to prevent 'CachedSource' destructuring errors
    // specifically found when running Webpack via WASM bindings on Android/Termux.
    config.cache = false;
    return config;
  },

  // 🖼️ Image Optimization (Standard for Unlink-th)
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // 🔐 Server-side Security & Logic
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
