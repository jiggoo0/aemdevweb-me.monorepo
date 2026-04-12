import { Metadata } from "next";

/**
 * [INTERFACE]: SEOStrategy
 * Defines the standard contract for SEO generation across different province types.
 */
export interface SEOStrategy {
  generateMetadata(slug: string, data: unknown): Metadata;
  getLayoutType(): "standard" | "premium" | "dynamic";
}
