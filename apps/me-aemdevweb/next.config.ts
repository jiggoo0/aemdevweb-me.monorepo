import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { baseConfig } from "@repo/next-config";

/**
 * [CONFIG]: NEXT.JS 16 ARCHITECT IDENTITY CONFIGURATION v5.3.0
 * [COMPLIANCE]: Unified Monorepo Infrastructure | @repo/next-config
 * [STRATEGY]: Optimized for Liquid Glass & Tactile Depth
 */
const nextConfig: NextConfig = {
  ...baseConfig,
  // [APP_SPECIFIC]: MDX Support for Content Layers
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // [VERCEL_OPTIMIZATION]: Ensure output is compatible
  output: undefined,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
