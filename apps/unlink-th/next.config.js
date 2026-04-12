/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 Required for "use cache" directive
  cacheComponents: true,
  // 🔗 Essential for Monorepo Shared Packages
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db"],

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
