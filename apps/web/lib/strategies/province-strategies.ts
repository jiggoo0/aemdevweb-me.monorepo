import { Metadata } from "next";
import { SEOStrategy } from "./seo-strategy";
import { SEO_CONSTANTS } from "../constants/seo";

/**
 * [STRATEGY]: DefaultProvinceStrategy
 */
export class DefaultProvinceStrategy implements SEOStrategy {
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    const mainKeyword = SEO_CONSTANTS.KEYWORDS.STANDARD[0];

    return {
      title: `${mainKeyword} ${name} | บริการดูแลเว็บครบวงจร - AEMDEVWEB`,
      description: `บริการรับทำเว็บไซต์ในพื้นที่ ${name} ออกแบบทันสมัย รองรับ SEO และ Mobile-Friendly โดยทีมงานมืออาชีพ AEMDEVWEB`,
    };
  }

  getLayoutType(): "standard" {
    return "standard";
  }

  getSuggestedIndustry(): "retail" {
    return "retail";
  }
}

/**
 * [STRATEGY]: CapitalProvinceStrategy
 */
export class CapitalProvinceStrategy implements SEOStrategy {
  generateMetadata(_slug: string, _data: unknown): Metadata {
    return {
      title: "AEM Digital Solutions Bangkok | ศูนย์กลางบริการเว็บระดับองค์กร",
      description:
        "บริการรับทำเว็บไซต์ระดับ Enterprise ในกรุงเทพมหานคร พัฒนาด้วย Next.js 16 ประสิทธิภาพสูงสุด",
    };
  }

  getLayoutType(): "premium" {
    return "premium";
  }

  getSuggestedIndustry(): "professional" {
    return "professional";
  }
}

/**
 * [STRATEGY]: TourismProvinceStrategy
 */
export class TourismProvinceStrategy implements SEOStrategy {
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    return {
      title: `Professional Web Design ${name} | International Standards`,
      description: `High-end web development services in ${name} for hotels and tourism.`,
    };
  }

  getLayoutType(): "dynamic" {
    return "dynamic";
  }

  getSuggestedIndustry(): "hospitality" {
    return "hospitality";
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
