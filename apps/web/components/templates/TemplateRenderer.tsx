/**
 * [SYSTEM ENGINE]: UNIVERSAL_RENDERER v20.5.0 (IDENTITY_SYNC_CORE)
 * [STRATEGY]: Provincial DNA Injection | Theme Morphing | Centralized Theme Engine
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import React from "react";
import { cn, injectThemeVariables } from "@/lib/utils";
import type { UniversalTemplateProps } from "@/types";
import LayoutEngine from "./LayoutEngine";

// --- Specialized Templates ---
import CorporateTemplate from "./corporate/Index";
import SalePageTemplate from "./salepage/Index";
import CatalogTemplate from "./catalog/Index";
import BioTemplate from "./bio/Index";
import HotelResortTemplate from "./hotelresort/Index";
import LocalAuthorityTemplate from "./local-authority/Index";
import SeoAgencyTemplate from "./seo-agency/Index";

interface TemplateRendererProps {
  readonly data: UniversalTemplateProps;
  readonly renderMode?: "full" | "section-only";
  readonly contextMode?: "area" | "service";
}

const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: UniversalTemplateProps }>> = {
  corporate: CorporateTemplate,
  salepage: SalePageTemplate,
  catalog: CatalogTemplate,
  bio: BioTemplate,
  hotelresort: HotelResortTemplate,
  "local-authority": LocalAuthorityTemplate,
  "seo-agency": SeoAgencyTemplate,
};

/**
 * @component TemplateRenderer
 * @description ด่านหน้าในการเลือกเทมเพลตที่เหมาะสมที่สุดตาม templateSlug
 * [CENTRALIZED_CONTROL]: ใช้ injectThemeVariables เพื่อความสอดคล้องของระบบสีทั่วทั้งโปรเจกต์
 */
export const TemplateRenderer = ({
  data,
  contextMode: _contextMode = "service",
}: TemplateRendererProps) => {
  if (!data || !data.templateSlug) {
    console.error("[RENDERER_ERROR]: Data or TemplateSlug is missing");
    return null;
  }

  const { theme } = data;
  const isDarkMode = theme?.mode === "dark";

  // [CENTRALIZED_THEME_ENGINE]: ฉีดค่าสีและพื้นผิวหลัก
  const semanticStyles = injectThemeVariables(theme);

  // [DNA_ROUTER]: กำหนดพารามิเตอร์การออกแบบเฉพาะตามประเภทเทมเพลต (Aesthetic Differentiation)
  const templateDna = {
    corporate: {
      "--dna-blur": "40px",
      "--dna-opacity": "0.05",
      "--dna-grid": "0.1",
      "--dna-radius": "1rem",
    },
    hotelresort: {
      "--dna-blur": "180px",
      "--dna-opacity": "0.12",
      "--dna-grid": "0.02",
      "--dna-radius": "3rem",
    },
    salepage: {
      "--dna-blur": "120px",
      "--dna-opacity": "0.20",
      "--dna-grid": "0.05",
      "--dna-radius": "2rem",
    },
    catalog: {
      "--dna-blur": "60px",
      "--dna-opacity": "0.08",
      "--dna-grid": "0.12",
      "--dna-radius": "1.5rem",
    },
    bio: {
      "--dna-blur": "100px",
      "--dna-opacity": "0.15",
      "--dna-grid": "0.03",
      "--dna-radius": "5rem",
    },
    "local-authority": {
      "--dna-blur": "30px",
      "--dna-opacity": "0.04",
      "--dna-grid": "0.15",
      "--dna-radius": "0.75rem",
    },
    "seo-agency": {
      "--dna-blur": "150px",
      "--dna-opacity": "0.10",
      "--dna-grid": "0.08",
      "--dna-radius": "2.5rem",
    },
  }[data.templateSlug as string] || {
    "--dna-blur": "100px",
    "--dna-opacity": "0.1",
    "--dna-grid": "0.05",
    "--dna-radius": "1.5rem",
  };

  const finalStyles = {
    ...semanticStyles,
    ...(templateDna as React.CSSProperties),
    "--context-aura-blur": "var(--dna-blur)",
    "--context-aura-opacity": "var(--dna-opacity)",
  } as React.CSSProperties;

  const SpecificTemplate = TEMPLATE_MAP[data.templateSlug];

  return (
    <div
      style={finalStyles}
      className={cn(
        "contents-dna-container relative w-full overflow-hidden transition-all duration-1000",
        isDarkMode ? "dark" : "light",
        "min-h-screen bg-[var(--surface-main)] text-[var(--text-primary)]",
        "selection:bg-[var(--color-brand-primary)]/30",
        `template-${data.templateSlug}`,
      )}
    >
      {/* [DYNAMIC_ATMOSPHERE]: Adaptive Background Layers based on DNA */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="animate-aura absolute -top-[10%] -right-[10%] h-[1000px] w-[1000px] rounded-full opacity-[var(--dna-opacity)] blur-[var(--dna-blur)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-primary)" }}
        />
        <div
          className="animate-aura absolute -bottom-[10%] -left-[10%] h-[800px] w-[800px] rounded-full opacity-[calc(var(--dna-opacity)*0.6)] blur-[var(--dna-blur)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-secondary)" }}
          delay-700
        />
        {/* [BLUEPRINT_GRID]: ตารางฉากหลังที่ความเข้มเปลี่ยนตาม DNA */}
        <div
          className="absolute inset-0 opacity-[var(--dna-grid)]"
          style={{
            backgroundImage: "radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* บังคับการแสดงผล Content ให้อยู่ภายใต้ Semantic Layer */}
      <main className="relative z-10 w-full text-[var(--text-primary)] antialiased">
        {SpecificTemplate ? (
          <SpecificTemplate data={data} />
        ) : (
          <LayoutEngine data={data} sectionOrder={data.layoutOrder} />
        )}
      </main>
    </div>
  );
};

TemplateRenderer.displayName = "TemplateRenderer";
