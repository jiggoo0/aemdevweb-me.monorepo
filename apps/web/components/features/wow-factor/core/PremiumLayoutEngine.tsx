/**
 * [STRUCTURAL ENGINE]: PREMIUM_LAYOUT_ENGINE v1.0.0
 * [STRATEGY]: Schema-Driven Hydration | Tailwind v4 OKLCH | Dynamic Sectioning
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo, Suspense } from "react";
import { cn } from "@/lib/utils";
import type { PremiumTemplateProps, PremiumThemeConfig } from "@/lib/templates/premium-types";
import PremiumAtmosphere from "./PremiumAtmosphere";

interface PremiumLayoutEngineProps {
  data: PremiumTemplateProps;
  children?: React.ReactNode;
  className?: string;
}

/**
 * [HELPER]: injectPremiumTheme
 * แปลง PremiumThemeConfig ให้เป็น CSS Variables (OKLCH Native)
 */
function injectPremiumTheme(theme: PremiumThemeConfig): React.CSSProperties {
  return {
    "--brand-primary-raw": theme.primaryRaw,
    "--brand-secondary-raw": theme.secondaryRaw || theme.primaryRaw,
    "--brand-accent-raw": theme.accentRaw || "85% 0.1 260",
    "--atmosphere-opacity": theme.atmosphereOpacity?.toString() || "0.1",
    "--glass-intensity": theme.glassIntensity?.toString() || "0.5",
  } as React.CSSProperties;
}

/**
 * @component PremiumLayoutEngine
 * @description เครื่องจักรจัดการโครงสร้างหลักสำหรับเทมเพลตระดับพรีเมียม
 * รองรับการฉีดค่าธีมแบบ OKLCH และการจัดการบรรยากาศ (Atmosphere)
 */
const PremiumLayoutEngine = ({ data, children, className }: PremiumLayoutEngineProps) => {
  const { theme, sections } = data;
  const dynamicStyles = injectPremiumTheme(theme);

  return (
    <div
      className={cn(
        "premium-engine-root relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden",
        "bg-[var(--surface-main)] text-[var(--text-primary)] antialiased selection:bg-brand-primary/30",
        theme.mode === "dark" ? "dark" : "light",
        className,
      )}
      style={dynamicStyles}
      data-premium-template={data.slug}
    >
      {/* --- LAYER 01: ATMOSPHERIC ENGINE --- */}
      <Suspense fallback={null}>
        <PremiumAtmosphere
          mode={theme.mode}
          opacity={theme.atmosphereOpacity}
        />
      </Suspense>

      {/* --- LAYER 02: CONTENT CORE --- */}
      <main className="relative z-10 flex w-full flex-auto flex-col">
        {children ? (
          children
        ) : (
          <div className="flex w-full flex-col">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={cn(
                  "premium-section relative w-full",
                  index === 0 ? "pt-0" : "pt-24 md:pt-32",
                )}
                data-section-type={section.type}
              >
                {/* [PLACEHOLDER]: Actual components will be mapped here in Phase 5.2 */}
                <div className="container mx-auto px-4">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-12 backdrop-blur-sm">
                    <span className="text-brand-primary mb-4 block text-sm font-bold tracking-widest uppercase">
                      Section: {section.type}
                    </span>
                    <h2 className="text-4xl font-black tracking-tight text-white italic">
                      {section.title || "Premium Content Block"}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Visual Terminal Baseline */}
      <div className="from-brand-primary/20 pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r via-transparent" />
    </div>
  );
};

export default memo(PremiumLayoutEngine);
