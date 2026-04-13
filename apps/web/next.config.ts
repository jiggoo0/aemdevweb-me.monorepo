import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { baseConfig } from "@repo/next-config";

/**
 * [CONFIG]: NEXT.JS 16 ENTERPRISE CONFIGURATION v5.2.0
 * [COMPLIANCE]: Unified Monorepo Infrastructure | @repo/next-config
 */
const nextConfig: NextConfig = {
  ...baseConfig,
  // [APP_SPECIFIC]: MDX Support
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
