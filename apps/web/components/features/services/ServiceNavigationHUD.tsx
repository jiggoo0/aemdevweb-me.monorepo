/**
 * [FEATURE COMPONENT]: SERVICE_NAVIGATION_HUD v20.0.0 (INTERACTIVE_ELITE)
 * [STRATEGY]: Adaptive Color Branding | Visual Node Status | Framer-lite GPU
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { TemplateMasterData } from "@/types";

interface ServiceNavigationHUDProps {
  readonly currentService: TemplateMasterData;
  readonly allServices: readonly TemplateMasterData[];
}

const ServiceNavigationHUD = ({ currentService, allServices }: ServiceNavigationHUDProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // [ENGINE]: ติดตามการ Scroll เพื่อปรับเปลี่ยนสถานะ HUD (Visual Continuity)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed top-24 left-0 z-[100] flex w-full justify-center transition-all duration-700 md:top-28",
        isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100",
      )}
    >
      <nav
        className={cn(
          "pointer-events-auto relative flex flex-col items-center gap-2",
          "rounded-full border border-[var(--color-brand-primary)]/10 bg-[var(--surface-main)]/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-500",
          isOpen ? "rounded-[2rem] px-6 py-6" : "rounded-full",
        )}
      >
        {/* --- [LAYER 01]: ACTIVE NODE STATUS --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
          aria-expanded={isOpen}
          aria-label="Toggle Service Navigation"
        >
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <div className="absolute h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-40" />
            <div className="relative h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-text-primary font-sans text-[10px] font-black tracking-[0.4em] uppercase">
              Service_{currentService.templateSlug.replace(/-/g, "_")}
            </span>
            <IconRenderer
              name="ChevronDown"
              size={12}
              className={cn(
                "transition-transform duration-500",
                isOpen ? "rotate-180" : "rotate-0",
              )}
            />
          </div>
        </button>

        {/* --- [LAYER 02]: SERVICE REGISTRY (DROPDOWN) --- */}
        {isOpen && (
          <div className="border-border/20 mt-4 grid grid-cols-1 gap-2 border-t pt-4 md:grid-cols-2">
            {allServices.map((service) => {
              const isActive = service.templateSlug === currentService.templateSlug;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.templateSlug}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
                    isActive
                      ? "text-surface-main bg-[var(--color-brand-primary)] shadow-sm"
                      : "text-text-secondary hover:bg-[var(--color-brand-primary)]/5 hover:text-[var(--color-brand-primary)]",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-lg border text-[10px] font-black transition-all",
                      isActive
                        ? "border-white/20 bg-white/10"
                        : "border-border bg-[var(--surface-offset)] group-hover:border-[var(--color-brand-primary)]/20",
                    )}
                  >
                    {service.templateSlug.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.1em] whitespace-nowrap uppercase">
                    {service.title.split("|")[0].trim()}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default ServiceNavigationHUD;
