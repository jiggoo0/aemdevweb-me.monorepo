/* @identity 9mza */

/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v19.1.0 (IDENTITY_HUB_READY)
 * [STRATEGY]: Strict Type Contract | E-E-A-T Knowledge Graph | UNLINK Ecosystem Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode } from "react";

// =========================================
// [00] GLOBAL AUGMENTATION
// =========================================

declare global {
  interface Window {
    /** [MARKETING]: Google Tag Manager Data Layer */
    dataLayer: unknown[];
  }
}

// =========================================
// [01] INFRASTRUCTURE & ADAPTERS
// =========================================

/** [NEXTJS_PROTOCOL]: Supporting Next.js 15/16 Async Parameters */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export interface LayoutProps {
  readonly children: ReactNode;
}

/** [ICON_SYSTEM]: Registry of Validated Lucide Icons */
export type IconName =
  | "Menu"
  | "X"
  | "Check"
  | "CheckCircle"
  | "CheckCircle2"
  | "Star"
  | "ChevronRight"
  | "ChevronDown"
  | "ArrowRight"
  | "ArrowUpRight"
  | "Search"
  | "SearchX"
  | "Zap"
  | "Target"
  | "Layers"
  | "Shield"
  | "ShieldCheck"
  | "Newspaper"
  | "Building2"
  | "FileText"
  | "FileDown"
  | "MousePointerClick"
  | "Smartphone"
  | "Globe"
  | "TrendingUp"
  | "Award"
  | "MapPin"
  | "Activity"
  | "UserCheck"
  | "Quote"
  | "Settings"
  | "Disc"
  | "Wifi"
  | "Code2"
  | "Network"
  | "User"
  | "Camera"
  | "CloudSun"
  | "Wind"
  | "Droplets"
  | "Eye"
  | "Cloud"
  | "AlertCircle"
  | "Sparkles"
  | "Database"
  | "Map"
  | "CalendarCheck"
  | "Lock"
  | "Phone"
  | "MessageCircle"
  | (string & {});

export type TemplateSlug =
  | "corporate"
  | "salepage"
  | "local"
  | "local-authority"
  | "catalog"
  | "bio"
  | "hotelresort"
  | "seo-agency"
  | (string & {});

export type ServiceCategory =
  | "landing"
  | "business"
  | "ecommerce"
  | "personal"
  | "area"
  | "authority"
  | "governance";

// =========================================
// [02] THEME & SITE CONFIGURATION
// =========================================

export interface ThemeConfig {
  readonly primary: string;
  readonly background: string;
  readonly mode: "light" | "dark" | "system";
  readonly foreground: string;
  readonly secondary?: string;
  readonly accent?: string;
  readonly gradient?: string;
  readonly token?: string;
  readonly radius?: string;
  readonly fontFamily?: string;
  readonly borderWidth?: string;
}

export interface SiteConfig {
  /** [IDENTITY]: Core Expert Information (E-E-A-T) */
  readonly expert: {
    readonly displayName: string;
    readonly alternateName?: string;
    readonly strategicAlias?: string;
    readonly legalNameThai: string;
    readonly legalNameEnglish: string;
    readonly role: string;
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bio: string;
    readonly bioUrl?: string;
    readonly googleMerchantId?: string;
    readonly twitterHandle?: string;
    readonly linkedinUrl?: string;
    readonly sameAs?: readonly string[];
    readonly skills?: {
      readonly technical: readonly string[];
      readonly seo: readonly string[];
      readonly governance: readonly string[];
    };
  };

  /** [BRANDING]: Institutional Visuals & Identity */
  readonly brand: {
    readonly name: string;
    readonly fullName: string;
    readonly legalName?: string;
    readonly siteUrl: string;
    readonly logo?: string;
    readonly ogImage?: string;
    readonly established: string;
    readonly foundingDate?: string;
    readonly industry: string;
    readonly taxId?: string;
    readonly isoCertified?: string;
    readonly location: string;
    readonly themeColor: string;
    readonly locale: string;
    readonly description: string;
    readonly areaServed?: readonly string[];
  };

  /** [MARKETING]: Strategic Messaging */
  readonly hero: {
    readonly title: string;
    readonly tagline?: string;
    readonly description: string;
    readonly primaryAction: string;
    readonly secondaryAction?: string;
  };

  /** [PERSONA]: AI & Communication Strategy */
  readonly persona: {
    readonly tone: string;
    readonly communicationStyle: string;
    readonly antiConnotation: string;
  };

  /** [SEO]: Authority Keywords */
  readonly keywords: readonly string[];

  /** [LOGISTICS]: Contact & Support */
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone: string;
    readonly address: string;
    readonly streetAddress: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl?: string;
  };

  /** [PARAMETERS]: Business Metadata */
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry?: string;
    readonly roiFocus: boolean;
    readonly established?: string;
    readonly status: string;
    readonly priceRange: string;
    readonly ids: {
      readonly businessProfileId?: string;
      readonly storeCode?: string;
      readonly [key: string]: string | undefined;
    };
  };

  /** [TECHNICAL]: Compliance & Tracking */
  readonly analytics?: {
    readonly gaId?: string;
    readonly pixelId?: string;
  };
  readonly verification: {
    readonly google: string;
    readonly facebook?: string;
  };

  /** [ECOSYSTEM]: UNLINK-GLOBAL Integration */
  readonly ecosystem?: {
    readonly masterHub: string;
    readonly commercialUrl?: string;
    readonly identityUrl?: string;
    readonly [key: string]: string | undefined;
  };

  /** [LINK_REGISTRY]: Authoritative Social Connections */
  readonly links: {
    readonly site: string;
    readonly me: string;
    readonly unlink: string;
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly linkedin: string;
    readonly twitter?: string;
    readonly youtube?: string;
    readonly googleMaps?: string;
    readonly googleReview?: string;
    readonly [key: string]: string | undefined;
  };
}

// =========================================
// [03] DATA MODELS (CMS & REGISTRY)
// =========================================

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly price?: string;
  readonly unit?: string;
  readonly image?: string;
  readonly url?: string;
  readonly technicalID?: string;
}

/** [E-E-A-T]: Author Identity for Expertise Verification */
export interface Author {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly description?: string;
  readonly coverImage: string;
  readonly thumbnail?: string;
  readonly category: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly content?: string;
  readonly author?: Author;
}

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly result: string;
  readonly results?: readonly string[];
  readonly description?: string;
  readonly date?: string;
  readonly image: string;
  readonly thumbnail?: string;
  readonly content?: string;
  readonly author?: Author;
}

export interface ImageBlurMetadata {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}
export type ImageBlurRegistry = Record<string, ImageBlurMetadata>;

// =========================================
// [04] CONTEXT & UNIVERSAL TEMPLATES
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  /** [NEW]: Unique characteristics or slogan of the province (e.g., "เมืองรถม้า", "ไข่มุกแห่งอันดามัน") */
  readonly localIdentity?: string;
  /** [NEW]: Personal observation from "นายเอ็มซ่ามากส์" about the local digital landscape */
  readonly expertObservation?: string;
  /** [NEW]: Specific business culture or behavior in this province */
  readonly localBusinessCulture?: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
  readonly nicheIndustries: readonly string[];
  readonly painPoints: readonly string[];
  readonly competitorLevel: "low" | "medium" | "high" | "extreme";
  readonly marketSaturation?: number; // 0-100 percentage
  readonly isTourismHeavy?: boolean;
  readonly socialProof?: {
    readonly rating: number;
    readonly reviewCount: number;
    readonly localClient?: string;
  };
  readonly regionalPricing?: {
    readonly startPrice: string;
    readonly timeline: string;
  };
  readonly localSuccessStory?: {
    readonly title: string;
    readonly result: string;
  };
  readonly hyperLocalKeywords?: readonly string[];
  readonly promotions?: readonly {
    readonly title: string;
    readonly description?: string;
    readonly discount?: string;
    readonly expiry?: string;
  }[];
  readonly regionalVisuals?: {
    readonly banner?: string;
    readonly gallery?: readonly string[];
  };
}

export interface BioProject {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly link?: string;
  readonly thumbnail?: string;
}

/** [STRICT]: มาตรฐานปุ่มกดและการนำทางทั่วทั้งระบบ */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * ทำหน้าที่รวม Master Data และ Area Nodes ให้เป็นก้อนเดียวที่ TemplateRenderer เข้าใจ
 */
export interface UniversalTemplateProps {
  readonly id: string;
  readonly tier: number; // [NEW]: ลำดับความสำคัญของพื้นที่
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly theme: ThemeConfig;
  readonly price: string;
  readonly priceValue: number;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly items?: readonly CatalogItem[];
  readonly clientTrust?: string;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly featuredProjects?: readonly BioProject[];
  readonly localContext?: LocalContext;
  readonly province?: string;
  readonly districts?: readonly string[];
  readonly coordinates?: { readonly lat: number; readonly lng: number };
  readonly aiSignal?: {
    readonly summary: string;
    readonly topBenefits: readonly string[];
    readonly expertRef: string;
    readonly expertNote?: string;
  };
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];
  readonly regionalVisuals?: LocalContext["regionalVisuals"];
  readonly promotions?: LocalContext["promotions"];
  readonly marketSaturation?: number;
  readonly isTourismHeavy?: boolean;
  readonly regionalLatency?: number;
  readonly layoutOrder?: string[]; // [PATCH]: Supports custom section ordering
  readonly regionalRoadmap?: readonly {
    readonly step: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly primaryAction: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Internal Linking & P-SEO Hub ---
  /** [NEW]: ลิงก์กลับไปยังหน้าบริการหลัก (สำหรับหน้าจังหวัด) */
  readonly masterServiceUrl?: string;
  /** [NEW]: รายชื่อพื้นที่ที่ให้บริการ (สำหรับหน้าบริการหลัก) */
  readonly servingAreas?: readonly string[];
}

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

// =========================================
// [05] REGISTRY SCHEMAS (CROSS-LINKED)
// =========================================

export interface TemplateMasterData {
  readonly id: string;
  readonly slug?: string;
  readonly title: string;
  readonly description: string;
  readonly templateSlug: TemplateSlug;
  readonly priority: number;
  readonly image?: string;
  readonly category: ServiceCategory;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly theme: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly clientTrust?: string;
  readonly socialProof?: {
    readonly rating: number;
    readonly reviewCount: number;
    readonly localClient?: string;
  };
  readonly items?: readonly CatalogItem[];
  readonly activeAreas?: readonly string[];
  readonly expert?: {
    readonly displayName: string;
    readonly jobTitle: string;
    readonly avatar: string;
  };
}

export interface AreaNode {
  readonly id?: string;
  readonly tier?: number; // [NEW]: ลำดับความสำคัญ (1 = Major City, 2 = Province)
  readonly slug: string;
  readonly province: string;
  readonly name_th: string; // [FACTORY]: Enforced Thai Name
  readonly name_en: string; // [FACTORY]: Enforced English Name
  readonly title: string;
  readonly description: string;
  readonly templateSlug: TemplateSlug;
  readonly priority: number;
  readonly region: "North" | "Northeast" | "Central" | "East" | "South" | "West";
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly longDescription?: string;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly localContext: LocalContext;
  readonly theme?: Partial<ThemeConfig> | ThemeConfig;
  readonly regionalVisuals?: LocalContext["regionalVisuals"];
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];
  readonly promotions?: LocalContext["promotions"];
  readonly marketSaturation?: number;
  readonly isTourismHeavy?: boolean;
  readonly regionalLatency?: number;
  readonly layoutOrder?: string[]; // [PATCH]: Custom section ordering per node
  readonly regionalRoadmap?: readonly {
    readonly step: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly price?: string;
  readonly priceValue?: number;
  readonly currency?: string;
  readonly unit?: string;
  readonly clientTrust?: string;
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[];
  readonly faqs?: readonly ServiceFaq[];
}
