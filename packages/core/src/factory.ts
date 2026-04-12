import { AreaNode } from "./types";

/**
 * [FACTORY]: defineAreaNode
 * Mandates the structure of AreaNodes to ensure system integrity.
 * Enforces name_th and name_en presence as per constitutional v4.0.0 requirements.
 */
export function defineAreaNode(config: Partial<AreaNode>): AreaNode {
  if (!config.name_th || !config.name_en) {
    throw new Error(
      `[CORE-FACTORY]: Architectural Mandate Violation - AreaNode must have both name_th and name_en. Provided: ${JSON.stringify(config)}`,
    );
  }

  const slug = config.slug || config.name_en.toLowerCase().replace(/\s+/g, "-");

  return {
    slug,
    province: config.province || config.name_th,
    title: config.title || `รับทำเว็บไซต์ ${config.name_th} | SEO & High-Performance`,
    description: config.description || `ยกระดับธุรกิจใน ${config.name_th} ด้วยเว็บไซต์มาตรฐานสากล`,
    districts: config.districts || [],
    heroImage: config.heroImage || "/images/common/hero-main.webp",
    tier: config.tier || 2,
    priority: config.priority || 50,
    benefits: config.benefits || [],
    coreFeatures: config.coreFeatures || [],
    faqs: config.faqs || [],
    keywords: config.keywords || [],
    localContext: {
      expertObservation: "",
      localBusinessCulture: "",
      socialProof: [],
      regionalPricing: "Standard",
      localSuccessStory: "",
      regionalVisuals: [],
      promotions: [],
      marketSaturation: "Moderate",
      isTourismHeavy: false,
      ...config.localContext,
    },
    ...config,
  } as AreaNode;
}
