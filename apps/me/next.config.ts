/**
 * [SYSTEM CORE]: HYBRID_ENGINE v18.5.0 (SYNCED)
 * [STRATEGY]: Environment-Aware Logic | Full SEO Redirects | Security Hardening
 */

import nextMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const isVercel = process.env.VERCEL === "1";
const isDev = process.env.NODE_ENV === "development";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  reactCompiler: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  compiler: {
    removeConsole: !isDev ? { exclude: ["error", "warn"] } : false,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "me.aemdevweb.com" }],
        destination: "https://me.aemdevweb.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://www.aemdevweb.com https://me.aemdevweb.com https://www.unlink-th.com; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-ancestors 'none';",
      },
    ];
    if (process.env.VERCEL_ENV !== "production") {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  output: "standalone",
  experimental: {
    mdxRs: isVercel,
    optimizePackageImports: ["lucide-react", "sonner", "@radix-ui/react-slot"],
  },
  cacheComponents: true,
//   webpack: (config, { dev }) => {
//     if (!isVercel && dev) {
//       config.watchOptions = { poll: 1000, aggregateTimeout: 300 };
//     }
//     if (!dev) {
//       config.cache = false;
//     }
//     return config;
//   },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "me.aemdevweb.com" },
      { protocol: "https", hostname: "www.aemdevweb.com" },
      { protocol: "https", hostname: "www.unlink-th.com" },
    ],
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
