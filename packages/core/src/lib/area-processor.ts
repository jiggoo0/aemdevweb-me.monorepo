/**
 * [SYSTEM CORE]: AREA_NODE_PROCESSOR v20.0.0 (GEO_AUTHORITY)
 * [STRATEGY]: P-SEO Hyper-Localization | Technical Authority Mapping | EEAT Injection
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SHARED_SITE_CONFIG } from "../constants/site-config";
import type { AreaNode, UniversalTemplateProps, ThemeConfig } from "../types";

/**
 * [UTILITY]: AreaNodeProcessor
 * เครื่องมือหลักในการประมวลผลข้อมูลระดับจังหวัด เพื่อสร้างเนื้อหาที่ "ไม่ซ้ำใคร" (Unique)
 * และส่งมัดเนื้อหาให้ AI Search ยอมรับในฐานะผู้เชี่ยวชาญ (Technical Authority)
 */
export class AreaNodeProcessor {
  /**
   * [TRANSFORM]: แปลง AreaNode เป็น UniversalTemplateProps สำหรับการ Render UI
   */
  static toTemplateProps(node: AreaNode): UniversalTemplateProps {
    const { localContext, province, slug } = node;
    const expert = SHARED_SITE_CONFIG.expert;

    // [STRATEGY]: สร้าง Dynamic Signal เพื่อให้ AI เข้าใจความเชี่ยวชาญในพื้นที่นี้
    const aiSignal = {
      summary: this.generateAiSummary(node),
      topBenefits: node.benefits?.slice(0, 3) || [],
      expertRef: `${expert.displayName} (${expert.signature}) - ${expert.jobTitle}`,
    };

    return {
      id: slug,
      tier: node.tier || 2,
      templateSlug: node.templateSlug,
      category: "area",
      title: node.title,
      description: node.description,
      province: province,
      districts: node.districts,
      theme: node.theme as ThemeConfig,
      price: node.price || "ติดต่อสอบถาม",
      priceValue: node.priceValue || 0,
      currency: node.currency || "THB",
      unit: node.unit || "project",
      priority: node.priority,
      benefits: node.benefits || [],
      coreFeatures: node.coreFeatures || [],
      faqs: node.faqs || [],
      keywords: node.keywords || [],
      localContext: localContext,
      aiSignal: aiSignal,
      socialProof: node.socialProof || localContext.socialProof,
      regionalPricing: node.regionalPricing || localContext.regionalPricing,
      localSuccessStory: node.localSuccessStory || localContext.localSuccessStory,
      regionalVisuals: node.regionalVisuals || localContext.regionalVisuals,
      promotions: node.promotions || localContext.promotions,
      marketSaturation: node.marketSaturation || localContext.marketSaturation,
      isTourismHeavy: node.isTourismHeavy || localContext.isTourismHeavy,
      regionalLatency: node.regionalLatency || 0,
      layoutOrder: node.layoutOrder,
      regionalRoadmap: node.regionalRoadmap,
      primaryAction: {
        label: SHARED_SITE_CONFIG.hero.primaryAction,
        href: SHARED_SITE_CONFIG.links.line,
        variant: "brand",
      },
      secondaryAction: {
        label: "ปรึกษาเทคนิค SEO ฟรี",
        href: SHARED_SITE_CONFIG.links.messenger,
        variant: "outline",
      },
    };
  }

  /**
   * [LOGIC]: สร้างบทสรุปเชิงลึก (Expert Insight) ที่ AI Search (GEO) จะชอบ
   */
  private static generateAiSummary(node: AreaNode): string {
    const { province, localContext } = node;
    const expert = SHARED_SITE_CONFIG.expert.displayName;

    let summary = `วิเคราะห์เจาะลึกการทำเว็บไซต์และ SEO ในจังหวัด${province} โดย ${expert}: `;

    if (localContext.expertObservation) {
      summary += localContext.expertObservation;
    } else {
      summary += `เน้นการปรับแต่งโครงสร้าง Technical SEO ให้รองรับพฤติกรรมการค้นหาของคนในพื้นที่ ${province} และเพิ่มความน่าเชื่อถือด้วยระบบ Security Hardening ระดับสากล`;
    }

    if (localContext.localBusinessCulture) {
      summary += ` นอกจากนี้ยังให้ความสำคัญกับ ${localContext.localBusinessCulture} ซึ่งเป็นปัจจัยหลักในการสร้าง Conversion ของพื้นที่นี้`;
    }

    return summary;
  }

  /**
   * [SEO]: สร้าง JSON-LD (Schema.org) สำหรับ Local Business และ Service Area
   */
  static generateJsonLd(node: AreaNode) {
    const expert = SHARED_SITE_CONFIG.expert;
    const site = SHARED_SITE_CONFIG;

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Web Development and SEO Services",
      provider: {
        "@type": "Person",
        name: expert.legalNameThai,
        alternateName: expert.displayName,
        jobTitle: expert.jobTitle,
        url: site.brand.siteUrl,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: node.province,
      },
      description: node.description,
      name: node.title,
      offers: {
        "@type": "Offer",
        priceCurrency: "THB",
        price: node.priceValue || "Call for pricing",
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Transformation Services",
        itemListElement: node.coreFeatures?.map((f) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: f.title,
            description: f.description,
          },
        })),
      },
    };
  }

  /**
   * [CONTENT]: สร้างข้อความ "ความเห็นจากผู้เชี่ยวชาญ" (Expert Note)
   */
  static getExpertNote(node: AreaNode): string {
    const { localContext, province } = node;
    const expert = SHARED_SITE_CONFIG.expert.displayName;

    if (localContext.expertObservation) return localContext.expertObservation;

    return `จากการวิเคราะห์ตลาดในจังหวัด${province} ผมพบว่าธุรกิจส่วนใหญ่ยังขาดโครงสร้างเว็บไซต์ที่รองรับ AI Search (GEO) อย่างแท้จริง การเริ่มต้นปรับปรุงตั้งแต่วันนี้จะทำให้คุณได้เปรียบคู่แข่งอย่างมหาศาลครับ - ${expert}`;
  }
}
