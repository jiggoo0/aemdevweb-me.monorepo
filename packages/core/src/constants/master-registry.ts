/**
 * [MASTER REGISTRY]: MASTER_SERVICE_INDEX v18.5.0 (STABLE_HARDENED)
 * [STRATEGY]: Centralized Data Aggregation | Pure Blueprint Services | SSG Core
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { TemplateMasterData, TemplateSlug, ServiceCategory } from "@/types";

// --- 1. Infrastructure: Import Core Blueprint Services ---
import { SITE_CONFIG } from "./site-config";
import { AREA_NODES } from "@repo/core";
import { seoAgencyService } from "./services/seo-agency";
import { salePageService } from "./services/salepage";
import { corporateService } from "./services/corporate";
import { catalogService } from "./services/catalog";
import { hotelResortService } from "./services/hotel-resort";
import { bioService } from "./services/bio";
import { localAuthorityService } from "./services/local-authority";

/**
 * [REGISTRY]: คลังข้อมูลบริการหลัก (Master Database)
 * ทำหน้าที่เป็นหัวใจการเรนเดอร์สำหรับหน้า Hub และการสร้าง Static Paths
 * [LOGIC]: ดึงข้อมูลจาก Blueprint Services โดยตรง เพื่อรักษาเอกลักษณ์ของดีไซน์
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  seoAgencyService,
  salePageService,
  corporateService,
  catalogService,
  hotelResortService,
  bioService,
  localAuthorityService,
]
  .map((service) => {
    // Determine activeAreas: Inferred from AREA_NODES based on templateSlug.
    const finalActiveAreas = AREA_NODES.filter(
      (area) => area.templateSlug === service.templateSlug,
    ).map((area) => area.slug);

    return {
      ...service,
      expert: {
        displayName: SITE_CONFIG.expert.displayName,
        jobTitle: SITE_CONFIG.expert.jobTitle,
        avatar: SITE_CONFIG.expert.avatar,
      },
      activeAreas: finalActiveAreas || [],
      benefits: service.benefits || [],
      coreFeatures: service.coreFeatures || [],
      faqs: service.faqs || [],
      keywords: service.keywords || [],
      category: service.category || ("business" as ServiceCategory),
      templateSlug: service.templateSlug || ("business" as TemplateSlug),
      priceValue: service.priceValue || 10000,
      price: service.price || "10000",
      currency: service.currency || "THB",
      unit: service.unit || "service",
      priority: service.priority ?? 50,
    } as TemplateMasterData;
  })
  .sort((a, b) => (a.priority ?? 50) - (b.priority ?? 50));

/**
 * [HELPER]: getServiceBySlug
 */
export const getServiceBySlug = (slug: string): TemplateMasterData | undefined => {
  return MASTER_REGISTRY.find((service) => service.templateSlug === slug);
};

/**
 * [HELPER]: getFeaturedServices
 */
export const getFeaturedServices = (): TemplateMasterData[] => {
  return MASTER_REGISTRY.filter((service) => service.isFeatured);
};
