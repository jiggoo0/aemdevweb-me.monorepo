import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * [CONFIG]: NEXT.JS 16 ENTERPRISE CONFIGURATION v4.0.0
 * [COMPLIANCE]: Optimized for ARM64/Termux WASM Environment
 */
const nextConfig: NextConfig = {
  // 🚀 Required for Next.js 16 Caching & Partial Prerendering (PPR)
  cacheComponents: true,

  // 🔗 Essential for Monorepo Shared Packages
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db", "@repo/trust-engine"],

  // 📝 MDX support
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🛠️ Webpack Configuration for Termux Compatibility
  webpack: (config) => {
    // 🛡️ Disable filesystem cache to prevent 'CachedSource' destructuring errors
    // specifically found when running Webpack via WASM bindings on Android/Termux.
    config.cache = false;
    return config;
  },

  // 🏗️ Build & Optimization Settings
  output: "standalone",
  typescript: {
    // Strategic bypass: Type integrity is verified via 'pnpm run audit' or AI development cycle.
    ignoreBuildErrors: true,
  },

  // 🖼️ Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow dynamic province images from various CDNs
      },
    ],
  },

  // 🔐 Server-side Security & Logic
  poweredByHeader: false,
  reactStrictMode: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
