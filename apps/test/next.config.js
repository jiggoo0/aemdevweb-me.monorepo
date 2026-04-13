/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  transpilePackages: ["@repo/ui", "@repo/core", "@repo/seo", "@repo/db"],
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
