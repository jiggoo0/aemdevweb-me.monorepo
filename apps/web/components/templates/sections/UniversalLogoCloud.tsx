/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_LOGO_CLOUD_VARIANTS
 * [COMPONENT_ID]: UniversalLogoCloud.tsx
 * [VERSION]: 1.0.0
 * [STATUS]: PRODUCTION_READY
 * [STRATEGY]: Client-Side Animation on Intersection, Reusable & Data-Driven
 */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface UniversalLogoCloudProps {
  readonly title: string;
  /**
   * Optional array of logos. For now, it only affects the count.
   * In the future, can be expanded to include src, alt text, etc.
   */
  readonly logos?: unknown[];
  readonly theme?: "full_section" | "minimal_bar";
}

const UniversalLogoCloud = ({ title, logos, theme = "full_section" }: UniversalLogoCloudProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const logoCount = logos?.length || 5;

  // Full section theme, similar to TrustNetwork
  if (theme === "full_section") {
    return (
      <section ref={ref} className="overflow-hidden py-24 sm:py-32">
        <div className="container mx-auto space-y-16 px-4 text-center">
          <div
            className={cn(
              "mx-auto max-w-4xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              {title}
            </h3>
          </div>
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-x-8 gap-y-10 opacity-40 grayscale transition-all delay-300 duration-1000 sm:gap-x-16 dark:opacity-50",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            {[...Array(logoCount)].map((_, i) => (
              <div key={i} className="h-10 w-32 rounded-lg bg-[var(--border)] opacity-50" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Minimal bar theme, similar to CredentialStack
  if (theme === "minimal_bar") {
    return (
      <section
        ref={ref}
        className="space-y-6 overflow-hidden border-y border-gray-200 py-6 text-center dark:border-gray-800"
      >
        <p
          className={cn(
            "font-mono text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-1000",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {title}
        </p>
        <div
          className={cn(
            "flex flex-wrap justify-center gap-8 opacity-30 grayscale transition-all delay-300 duration-1000 dark:opacity-40",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {[...Array(logoCount)].map((_, i) => (
            <div key={i} className="h-7 w-24 rounded-md bg-gray-400 dark:bg-gray-700" />
          ))}
        </div>
      </section>
    );
  }

  return null;
};

export default UniversalLogoCloud;
