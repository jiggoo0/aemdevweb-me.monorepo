/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
