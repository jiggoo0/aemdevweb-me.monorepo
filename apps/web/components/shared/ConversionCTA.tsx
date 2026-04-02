/**
 * [COMPONENT]: CONVERSION_CTA_SYSTEM v19.0.0 (SSOT_INTEGRATED)
 * [STRATEGY]: UI Strings Registry | Dynamic Prop Mapping | Production Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import { UI_STRINGS } from "@/constants/ui-strings";

interface ConversionCTAProps {
  readonly title?: string;
  readonly description?: string;
  readonly buttonLabel?: string;
  readonly buttonHref?: string;
  readonly className?: string;
}

const ConversionCTA = ({
  title = UI_STRINGS.cta.readyTitle,
  description = UI_STRINGS.cta.defaultSupportText,
  buttonLabel = UI_STRINGS.cta.consultToday,
  buttonHref = "#",
  className,
}: ConversionCTAProps) => {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-32", className)} role="region">
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={cn(
            "rounded-section relative overflow-hidden p-8 md:p-16 lg:p-24",
            "border border-[var(--color-brand-primary)]/20 bg-[var(--surface-main)] shadow-2xl",
            "transition-all duration-500 hover:border-[var(--color-brand-primary)]/40",
          )}
        >
          {/* Atmospheric Background (Dynamic) */}
          <div
            className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--color-brand-primary)] opacity-5 blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            {/* สถานะความพร้อม (Human-Friendly Status) */}
            <div className="flex items-center gap-3 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-primary)]"></span>
              </span>
              <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                {UI_STRINGS.cta.availabilityStatus}
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl leading-tight font-black tracking-tight text-[var(--text-primary)] md:text-6xl lg:text-7xl">
              {title}
            </h2>

            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed font-medium opacity-90 md:text-xl">
              {description}
            </p>

            <Button
              asChild
              size="lg"
              className={cn(
                "h-16 rounded-2xl px-12 md:h-20 md:px-16",
                "bg-[var(--color-brand-primary)] text-white hover:opacity-95",
                "shadow-md-md transition-all hover:scale-[1.02] active:scale-95",
              )}
            >
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <IconRenderer name="MessageSquare" size={24} />
                <span className="text-[13px] font-bold tracking-widest uppercase">
                  {buttonLabel}
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ConversionCTA);
