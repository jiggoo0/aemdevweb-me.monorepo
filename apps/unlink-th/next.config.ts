import type { NextConfig } from "next";
import { baseConfig } from "@repo/next-config";

/**
 * [CONFIG]: NEXT.JS 16 UNLINK-TH CONFIGURATION v5.2.0
 * [COMPLIANCE]: Unified Monorepo Infrastructure | @repo/next-config
 */
const nextConfig: NextConfig = {
  ...baseConfig,
  // [VERCEL_OPTIMIZATION]: Serverless deployment output
  output: undefined,
};

export default nextConfig;
