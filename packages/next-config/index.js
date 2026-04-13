/**
 * [NEXT_CONFIG]: SHARED_INFRASTRUCTURE v1.1.0
 * [STRATEGY]: Platform-Agnostic Build | Webpack Fallback | Optimized Caching
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

module.exports = {
  /** @type {import('next').NextConfig} */
  baseConfig: {
    // 🚀 Next.js 16 Optimization
    reactStrictMode: true,
    cacheComponents: true,

    // 🔗 Monorepo Transparency
    transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db"],

    // 🛡️ Webpack Configuration for Termux Compatibility
    webpack: (config) => {
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
  },
};
