import { Metadata } from "next";

/**
 * [INTERFACE]: SEOStrategy
 * The foundational contract for all localized SEO strategies.
 * v5.1.0: Added getSuggestedIndustry for P-SEO matching.
 */
export interface SEOStrategy {
  /**
   * Generates dynamic metadata for the given context.
   */
  generateMetadata(slug: string, data: unknown): Metadata;

  /**
   * Determines the layout type to be used.
   */
  getLayoutType(): "standard" | "premium" | "dynamic" | string;

  /**
   * Returns the recommended industry for business template showcase.
   */
  getSuggestedIndustry(): string;
}
