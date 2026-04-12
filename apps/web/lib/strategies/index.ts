import type { AreaNode } from "@repo/core";
import type { Metadata } from "next";

/**
 * [STRATEGY]: SEOStrategy Interface
 */
export interface SEOStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generateMetadata(node: AreaNode, dbContent: any): Metadata;
}

/**
 * [CONCRETE]: IndustrialSEOStrategy (Focus on B2B/Expertise)
 */
export class IndustrialSEOStrategy implements SEOStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generateMetadata(node: AreaNode, dbContent: any): Metadata {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const title = ((dbContent?.title as any) || `${node.seoTitle} | AEM Industrial`) as any;
    return {
      title,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      description: ((dbContent?.metadata as any)?.description || node.seoDescription) as any,
      keywords: [...node.keywords, "Industrial Web", "B2B", node.province] as string[],
    };
  }
}

/**
 * [CONCRETE]: StandardSEOStrategy (Fallback)
 */
export class StandardSEOStrategy implements SEOStrategy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generateMetadata(node: AreaNode, dbContent: any): Metadata {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const title = ((dbContent?.title as any) || node.seoTitle) as any;
    return {
      title,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      description: ((dbContent?.metadata as any)?.description || node.seoDescription) as any,
      keywords: [...node.keywords] as string[],
    };
  }
}

/**
 * [STRATEGY_FACTORY]: Get the right strategy based on node tier/region
 */
export function getSEOStrategy(node: AreaNode): SEOStrategy {
  if (node.tier === 1) return new IndustrialSEOStrategy();
  return new StandardSEOStrategy();
}
