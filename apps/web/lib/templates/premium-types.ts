/**
 * [PREMIUM TYPE SYSTEM]: PREMIUM_TEMPLATE_ENGINE v1.0.0
 * [STRATEGY]: Schema-Driven Hydration | OKLCH Theming | Strict Type Integrity
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

export type OKLCHColor = string; // Format: "L C H" or "oklch(L C H)"

export interface PremiumThemeConfig {
  /** [OKLCH]: L C H values (e.g., "50% 0.18 260") */
  primaryRaw: string;
  secondaryRaw?: string;
  accentRaw?: string;
  mode: "light" | "dark";
  glassIntensity?: number; // 0-1
  atmosphereOpacity?: number; // 0-1
}

export interface PremiumSection {
  id: string;
  type: string;
  title?: string;
  description?: string;
  props?: Record<string, unknown>;
  wowFactor?: {
    entranceAnimation?: string;
    atmosphereEffect?: string;
    parallaxIntensity?: number;
  };
}

export interface PremiumTemplateProps {
  id: string;
  slug: string;
  title: string;
  theme: PremiumThemeConfig;
  sections: PremiumSection[];
  metadata?: {
    author?: string;
    version?: string;
    performanceScore?: number;
  };
}

export interface PremiumContextState {
  data: PremiumTemplateProps;
  activeSectionId: string | null;
  cursorPosition: { x: number; y: number };
  isScrolled: boolean;
  isMounted: boolean;
}

export type PremiumAction =
  | { type: "SET_ACTIVE_SECTION"; id: string | null }
  | { type: "UPDATE_CURSOR"; x: number; y: number }
  | { type: "SET_SCROLLED"; isScrolled: boolean }
  | { type: "MOUNTED" };
