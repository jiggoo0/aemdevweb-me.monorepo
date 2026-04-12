import { getProvinceStrategy } from "./province-strategies";
import { SEOStrategy } from "./seo-strategy";

/**
 * [FACADE/STRATEGY_PICKER]: getSEOStrategy
 * Standardizes the strategy selection for the entire application.
 */
export const getSEOStrategy = (node: { slug: string }): SEOStrategy => {
  return getProvinceStrategy(node.slug);
};

export type { SEOStrategy };
