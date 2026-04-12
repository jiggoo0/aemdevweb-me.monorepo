import { Metadata } from "next";
import { SEOStrategy } from "./seo-strategy";

/**
 * [STRATEGY]: DefaultProvinceStrategy
 * Standard SEO for regular provinces.
 */
export class DefaultProvinceStrategy implements SEOStrategy {
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    return {
      title: `รับทำเว็บไซต์ ${name} | บริการดูแลเว็บครบวงจร - AEMDEVWEB`,
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
 * [STRATEGY]: CapitalProvinceStrategy (Bangkok)
 * High-competition, specialized SEO for the capital.
 */
export class CapitalProvinceStrategy implements SEOStrategy {
  generateMetadata(_slug: string, _data: unknown): Metadata {
    return {
      title: "AEM Digital Solutions Bangkok | ศูนย์กลางบริการเว็บระดับองค์กร",
      description:
        "บริการรับทำเว็บไซต์ระดับ Enterprise ในกรุงเทพมหานคร พัฒนาด้วย Next.js 16 ประสิทธิภาพสูงสุดสำหรับธุรกิจคุณ",
      keywords: [
        "รับทำเว็บ กรุงเทพ",
        "Enterprise Web Development Bangkok",
        "Next.js Agency Thailand",
      ],
    };
  }

  getLayoutType(): "premium" {
    return "premium";
  }
}

/**
 * [STRATEGY]: TourismProvinceStrategy (Phuket, Chiang Mai, etc.)
 * Tourism and International oriented SEO.
 */
export class TourismProvinceStrategy implements SEOStrategy {
  generateMetadata(slug: string, data: unknown): Metadata {
    const provinceData = data as { title?: string } | undefined;
    const name = provinceData?.title || slug;
    return {
      title: `Professional Web Design ${name} | International Standards`,
      description: `High-end web development services in ${name} for hotels, resorts, and tourism businesses. Global reach, local expertise.`,
    };
  }

  getLayoutType(): "dynamic" {
    return "dynamic";
  }
}

/**
 * [FACTORY/REGISTRY]: StrategyRegistry
 * Maps province slugs to their respective strategies.
 */
export const getProvinceStrategy = (slug: string): SEOStrategy => {
  const mapping: Record<string, SEOStrategy> = {
    bangkok: new CapitalProvinceStrategy(),
    phuket: new TourismProvinceStrategy(),
    "chiang-mai": new TourismProvinceStrategy(),
  };

  return mapping[slug] || new DefaultProvinceStrategy();
};
