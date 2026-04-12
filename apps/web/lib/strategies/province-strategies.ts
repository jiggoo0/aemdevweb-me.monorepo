import { Metadata } from "next";
import { SEOStrategy } from "./seo-strategy";
import { SEO_CONSTANTS } from "../constants/seo";

/**
 * [STRATEGY]: DefaultProvinceStrategy
 * Standard SEO implementation for common provinces.
 * Focuses on local authority and general service keywords.
 */
export class DefaultProvinceStrategy implements SEOStrategy {
  /**
   * Generates localized metadata based on province title and slug.
   * @param slug - The province URL slug.
   * @param data - Raw database content for the province.
   */
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    const mainKeyword = SEO_CONSTANTS.KEYWORDS.STANDARD[0];

    return {
      title: `${mainKeyword} ${name} | บริการดูแลเว็บครบวงจร - AEMDEVWEB`,
      description: `บริการรับทำเว็บไซต์ในพื้นที่ ${name} ออกแบบทันสมัย รองรับ SEO และ Mobile-Friendly โดยทีมงานมืออาชีพ AEMDEVWEB`,
      openGraph: {
        title: `AEMDEVWEB บริการรับทำเว็บ ${name}`,
        description: `ยกระดับธุรกิจของคุณใน ${name} ด้วยเว็บไซต์คุณภาพสูง`,
      },
    };
  }

  getLayoutType(): "standard" {
    return "standard";
  }
}

/**
 * [STRATEGY]: CapitalProvinceStrategy
 * Optimized for High-Competition areas like Bangkok.
 * Focuses on Enterprise-grade keywords and Institutional authority.
 */
export class CapitalProvinceStrategy implements SEOStrategy {
  /**
   * Generates high-authority metadata for capital cities.
   */
  generateMetadata(_slug: string, _data: unknown): Metadata {
    return {
      title: "AEM Digital Solutions Bangkok | ศูนย์กลางบริการเว็บระดับองค์กร",
      description:
        "บริการรับทำเว็บไซต์ระดับ Enterprise ในกรุงเทพมหานคร พัฒนาด้วย Next.js 16 ประสิทธิภาพสูงสุดสำหรับธุรกิจคุณ",
      keywords: SEO_CONSTANTS.KEYWORDS.ENTERPRISE,
    };
  }

  getLayoutType(): "premium" {
    return "premium";
  }
}

/**
 * [STRATEGY]: TourismProvinceStrategy
 * Specialized for tourist-heavy provinces (Phuket, Samui).
 * Focuses on International standards and Luxury hospitality.
 */
export class TourismProvinceStrategy implements SEOStrategy {
  /**
   * Generates English-friendly metadata for global reach.
   */
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    return {
      title: `Professional Web Design ${name} | International Standards`,
      description: `High-end web development services in ${name} for hotels, resorts, and tourism businesses. Global reach, local expertise.`,
      keywords: SEO_CONSTANTS.KEYWORDS.TOURISM,
    };
  }

  getLayoutType(): "dynamic" {
    return "dynamic";
  }
}

/**
 * [FACTORY/REGISTRY]: StrategyRegistry
 * Resolves the appropriate strategy instance based on the province slug.
 * @param slug - Province slug identifier.
 * @returns An instance of SEOStrategy.
 */
export const getProvinceStrategy = (slug: string): SEOStrategy => {
  const mapping: Record<string, SEOStrategy> = {
    bangkok: new CapitalProvinceStrategy(),
    phuket: new TourismProvinceStrategy(),
    "chiang-mai": new TourismProvinceStrategy(),
  };

  return mapping[slug] || new DefaultProvinceStrategy();
};
