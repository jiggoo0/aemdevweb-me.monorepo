/**
 * [SYSTEM ENGINE]: UNIFIED_LAYOUT_ENGINE v20.0.0 (PRODUCTION_STABILIZED)
 * [STRATEGY]: Shell + Strategy Pattern | Strict Type Integrity | Zero-Flicker
 * [MAINTAINER]: [CENTRALIZED_IN_SITE_CONFIG]
 */

import React, { memo } from "react";
import dynamic from "next/dynamic"; // [PERFORMANCE]: Dynamic Code Splitting
import { cn, injectThemeVariables } from "@/lib/utils";
import type { UniversalTemplateProps, BaseTemplateProps, ThemeConfig } from "@/types";
import AmbientBackground from "@/components/ui/AmbientBackground";

// --- 01. SECTION REGISTRY (Strategy Mode) ---
// [DYNAMIC_IMPORT]: โหลดเฉพาะที่ใช้งานจริงเพื่อลด TBT และ Bundle Size
const UniversalHero = dynamic(() => import("./sections/UniversalHero"));
const ImpactStats = dynamic(() => import("@/components/shared/ImpactStats"));
const LocalInsight = dynamic(() =>
  import("./sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const RegionalGallery = dynamic(() =>
  import("./sections/RegionalGallery").then((mod) => mod.RegionalGallery),
);
const DynamicFAQ = dynamic(() => import("./sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("./sections/RegionalNodeHub"));

// [TYPE_DEFINITION]: รายการ Section ที่รองรับ (Strict Union)
type SectionKey =
  | "hero"
  | "stats"
  | "insight"
  | "trust"
  | "process"
  | "pricing"
  | "gallery"
  | "faq"
  | "cta"
  | "nodes";

const SECTION_MAP: Record<SectionKey, React.ComponentType<BaseTemplateProps>> = {
  hero: UniversalHero,
  stats: ImpactStats as React.ComponentType<BaseTemplateProps>,
  insight: LocalInsight,
  trust: TrustBadge as React.ComponentType<BaseTemplateProps>,
  process: WorkProcess as React.ComponentType<BaseTemplateProps>,
  pricing: PricingSection as React.ComponentType<BaseTemplateProps>,
  gallery: RegionalGallery,
  faq: DynamicFAQ,
  cta: ConversionCTA as React.ComponentType<BaseTemplateProps>,
  nodes: RegionalNodeHub,
};

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  /** [STRATEGY]: ข้อมูล Template สำหรับการเรนเดอร์อัตโนมัติ */
  readonly data?: UniversalTemplateProps;
  /** [CUSTOM]: ลำดับของ Section (Override) */
  readonly sectionOrder?: SectionKey[];
  /** [SHELL]: เนื้อหาที่ต้องการครอบด้วย Shell */
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  /** [THEME]: บังคับฉีดค่าธีม (ถ้าไม่ใช้ data.theme) */
  readonly theme?: ThemeConfig;
}

/**
 * @component LayoutEngine
 * @description เครื่องจักรจัดการ Layout หลักของระบบ รองรับทั้งการเรนเดอร์อัตโนมัติผ่าน data
 * และการเป็น Container Shell สำหรับหน้า Hub ต่างๆ
 */
const LayoutEngine = ({
  data,
  sectionOrder,
  children,
  className,
  spacing = "none",
  theme: directTheme,
}: LayoutEngineProps) => {
  // [A] THEME_RESOLUTION: จัดลำดับความสำคัญของธีม
  const activeTheme = data?.theme || directTheme;
  const dynamicStyles = injectThemeVariables(activeTheme);
  const ambientColor = activeTheme?.primary || "var(--brand-primary)";

  // [B] SPACING_CALCULATION
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-12 md:gap-y-16",
    medium: "gap-y-20 md:gap-y-28",
    large: "gap-y-24 md:gap-y-36",
    specialist: "gap-y-40 md:gap-y-64",
  };

  // [C] RENDER_STRATEGY: ลำดับการแสดงผลแบบ Context-Aware (เอกลักษณ์และอิสระ)
  // หากมีการระบุ sectionOrder มาโดยตรง ให้ใช้ตามนั้น (Highest Priority)
  // หากไม่มี ให้เลือกตามประเภทของโหนด (Area vs Service)
  const defaultAreaOrder: SectionKey[] = [
    "hero",
    "nodes", // [IDENTITY]: โชว์โครงข่ายพื้นที่ทันที
    "stats",
    "insight", // [LOCAL]: ข้อมูลเฉพาะพื้นที่
    "trust",
    "gallery",
    "faq",
    "cta",
  ];

  const defaultServiceOrder: SectionKey[] = [
    "hero",
    "stats", // [AUTHORITY]: โชว์ตัวเลขความสำเร็จระดับมาสเตอร์
    "process", // [TECHNICAL]: ขั้นตอนการทำงานระดับวิศวกรรม
    "pricing",
    "trust",
    "faq",
    "cta",
  ];

  // ตัดสินใจเลือกเลย์เอาต์ที่เหมาะสมที่สุด
  const isAreaNode = !!data?.province;
  const order =
    sectionOrder || data?.layoutOrder || (isAreaNode ? defaultAreaOrder : defaultServiceOrder);

  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden",
        "isolate touch-pan-y antialiased selection:bg-[var(--color-brand-primary)]/30",
        "bg-[var(--surface-main)] text-[var(--text-primary)]",
        // [VISUAL_IDENTITY]: แยกบรรยากาศผ่าน Class
        isAreaNode ? "layout-mode-area-local" : "layout-mode-service-master",
        className,
      )}
      style={{ ...dynamicStyles, isolation: "isolate" } as React.CSSProperties}
      data-theme-mode={activeTheme?.mode || "light"}
    >
      {/* --- LAYER 01: ATMOSPHERIC INFRASTRUCTURE --- */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <AmbientBackground
          color={ambientColor}
          opacity={activeTheme?.mode === "dark" ? 0.12 : 0.05}
        />
      </div>

      {/* --- LAYER 02: CONTENT CORE --- */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col text-[var(--text-primary)]",
          spacingMap[spacing],
        )}
      >
        {children
          ? children
          : data
            ? order.map((key: SectionKey, index: number) => {
                const SectionComponent = SECTION_MAP[key];
                if (!SectionComponent) return null;

                return (
                  <SectionComponent
                    key={`${key}-${index}`}
                    data={data}
                    {...(data.sections?.[key as keyof typeof data.sections] || {})}
                  />
                );
              })
            : null}
      </main>

      {/* Visual Terminal Baseline */}
      <div className="via-brand-primary/20 pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};

export default memo(LayoutEngine);
