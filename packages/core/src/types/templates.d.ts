/**
 * [TEMPLATE ARCHITECTURE]: MASTER_TEMPLATE_BLUEPRINT v20.1.0
 * [STRATEGY]: Schema-Driven UI | High-Performance Hydration | Zero-CLS Strategy
 */

import { ProfessionalService, Product } from "schema-dts";

export type TemplateTheme = "dark" | "light" | "glass" | "neon" | "minimal";

export interface TemplateStyleConfig {
  theme: TemplateTheme;
  primaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  borderRadius?: "none" | "sm" | "md" | "lg" | "full";
  glassIntensity?: number;
}

export interface PremiumFeature {
  id: string;
  type: "dashboard" | "calculator" | "terminal" | "map" | "timeline";
  title: string;
  config: Record<string, any>;
}

export interface TemplateMasterData {
  id: string;
  templateSlug: string;
  title: string;
  description: string;
  image?: string;
  priceValue?: number | string;
  unit?: string;
  features: PremiumFeature[];
  schema?: ProfessionalService | Product;
  style?: TemplateStyleConfig;
  socialProof?: {
    rating: number;
    reviewCount: number;
    clients: string[];
  };
}

export interface TemplateContextProps {
  data: TemplateMasterData;
  activeTheme: TemplateTheme;
  isHighPerformance: boolean;
  toggleTheme: (theme: TemplateTheme) => void;
}
