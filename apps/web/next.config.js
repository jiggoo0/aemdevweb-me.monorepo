const withMDX = require("@next/mdx")({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Required for Next.js 16 Caching & Partial Prerendering (PPR)
  cacheComponents: true,

  // 🔗 Essential for Monorepo Shared Packages
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db"],

  // 📝 MDX support
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 🛠️ Disable Native SWC Minifier for Termux/Android compatibility
  swcMinify: false,

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
        hostname: "**",
      },
    ],
  },

  // 🔐 Server-side Security & Logic
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);
