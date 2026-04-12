/**
 * [MASTER REGISTRY]: MASTER_SERVICE_INDEX v18.5.1 (STABLE_HARDENED)
 * [STRATEGY]: Centralized Data Aggregation | Pure Blueprint Services | SSG Core
 */

import type { TemplateMasterData, TemplateSlug, ServiceCategory } from "../types";

// --- 1. Infrastructure: Import Core Blueprint Services ---
import { SHARED_SITE_CONFIG } from "./site-config";
// Note: We use relative paths to avoid resolution issues within the package
import { seoAgencyService } from "./services/seo-agency";
import { salePageService } from "./services/salepage";
import { corporateService } from "./services/corporate";
import { catalogService } from "./services/catalog";
import { hotelResortService } from "./services/hotel-resort";
import { bioService } from "./services/bio";
import { localAuthorityService } from "./services/local-authority";
import { reputationFixService } from "./services/reputation-fix";

/**
 * [REGISTRY]: คลังข้อมูลบริการหลัก (Master Database)
 */
export const MASTER_REGISTRY: readonly TemplateMasterData[] = [
  reputationFixService,
  seoAgencyService,
  salePageService,
  corporateService,
  catalogService,
  hotelResortService,
  bioService,
  localAuthorityService,
]
  .filter(Boolean)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((service: any) => {
    return {
      ...service,
      expert: {
        displayName: SHARED_SITE_CONFIG.expert.displayName,
        jobTitle: SHARED_SITE_CONFIG.expert.jobTitle,
        avatar: SHARED_SITE_CONFIG.expert.avatar,
      },
      activeAreas: [], // Will be populated by specific app logic if needed
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

export const getServiceBySlug = (slug: string): TemplateMasterData | undefined => {
  return MASTER_REGISTRY.find((service) => service.templateSlug === slug);
};

export const getFeaturedServices = (): TemplateMasterData[] => {
  return MASTER_REGISTRY.filter((service) => service.isFeatured) as TemplateMasterData[];
};
