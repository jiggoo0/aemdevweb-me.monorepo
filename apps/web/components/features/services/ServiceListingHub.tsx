/**
 * [FEATURE COMPONENT]: SERVICE_LISTING_HUB v18.0.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure Server Component | Grid-Symmetry Protocol | Zero-JS
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { cacheLife, cacheTag } from "next/cache"; // [NEW]: Next.js 16 Caching
import { MASTER_REGISTRY } from "@/constants/master-registry";
import ServiceCard from "./ServiceCard";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceCategory, TemplateMasterData } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceListingHubProps {
  readonly limit?: number;
  readonly category?: ServiceCategory | string;
  readonly className?: string;
  readonly showEmptyState?: boolean;
}

/**
 * @component ServiceListingHub
 * @description ศูนย์กลางการจัดระเบียบ Node บริการ (RSC Version)
 * [STRATEGY]: Next.js 16 Data Caching | Semantic ItemList Support
 */
const ServiceListingHub = async ({
  limit,
  category,
  className,
  showEmptyState = true,
}: ServiceListingHubProps) => {
  /**
   * [DATA_ORCHESTRATION]: Server-side sorting and filtering with Next.js Cache
   */
  const getServices = async () => {
    "use cache";
    cacheLife("hours");
    cacheTag("service-registry");

    const registry = Array.isArray(MASTER_REGISTRY) ? MASTER_REGISTRY : [];
    return [...registry]
      .filter((svc) => !category || svc.category === category)
      .sort((a, b) => {
        const pA = a.priority ?? 99;
        const pB = b.priority ?? 99;
        if (pA !== pB) return pA - pB;
        return (a.title || "").localeCompare(b.title || "", "th");
      })
      .slice(0, limit || registry.length);
  };

  const services = await getServices();

  /**
   * [UI_STATE]: STANDBY_NODE (Empty State Protocol)
   */
  if (services.length === 0 && showEmptyState) {
    return (
      <div
        role="alert"
        className="border-border bg-surface-card/30 rounded-section md:rounded-card-xl relative flex flex-col items-center justify-center overflow-hidden border border-dashed p-12 text-center backdrop-blur-md transition-all duration-700 md:p-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          aria-hidden="true"
        />

        <div className="border-border rounded-card relative z-10 mb-8 flex h-20 w-20 items-center justify-center border bg-[var(--surface-offset)] shadow-sm">
          <IconRenderer name="Layers" size={32} className="text-[var(--color-brand-primary)]/40" />
        </div>

        <div className="relative z-10 space-y-4">
          <h3 className="text-text-primary font-mono text-sm font-black tracking-[0.5em] uppercase opacity-90">
            รอข้อมูล
          </h3>
          <p className="text-text-secondary mx-auto max-w-sm text-xs font-medium italic opacity-70">
            ระบบกำลังเตรียมการ Deploy ชุดข้อมูล <br />
            <span className="font-bold text-[var(--color-brand-primary)]">
              พร้อมให้บริการเร็วๆ นี้
            </span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Professional Service Nodes"
      className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8", className)}
    >
      {services.map((service, index) => (
        <div
          key={service.id || `svc-${index}`}
          role="listitem"
          className="group flex h-full w-full flex-col"
        >
          <ServiceCard
            data={service as TemplateMasterData}
            index={index}
            isPopular={service.isPopular}
            className="h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceListingHub;
