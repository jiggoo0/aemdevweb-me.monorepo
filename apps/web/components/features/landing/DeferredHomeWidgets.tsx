/**
 * [CLIENT COMPONENT]: DEFERRED_HOME_WIDGETS v18.0.0
 * [STRATEGY]: Hydration-Safe Orchestration | Main-thread Relief
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// --- [DYNAMIC IMPORTS]: Optimized for Zero-Blocking ---
const LeadScoringHUD = dynamic(
  () => import("@/components/templates/sections/LeadScoringHUD").then((mod) => mod.LeadScoringHUD),
  { ssr: false },
);

const TrustEquation = dynamic(
  () => import("@/components/templates/sections/TrustEquation").then((mod) => mod.TrustEquation),
  { ssr: false },
);

const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"), { ssr: false });
const ImpactStats = dynamic(() => import("@/components/shared/ImpactStats"), { ssr: false });
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"), {
  ssr: false,
});
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"), {
  ssr: false,
});

const AuditReportGenerator = dynamic(
  () =>
    import("@/components/templates/sections/AuditReportGenerator").then(
      (mod) => mod.AuditReportGenerator,
    ),
  { ssr: false },
);

const DirectTerminal = dynamic(
  () => import("@/components/templates/sections/DirectTerminal").then((mod) => mod.DirectTerminal),
  { ssr: false },
);

// --- [FALLBACKS] ---
const WidgetSkeleton = ({ height }: { height: string }) => (
  <div
    className={`bg-surface-card/30 border-border/10 rounded-section animate-pulse border ${height}`}
  />
);

export function DeferredHomeWidgets({
  section,
  liveMetrics,
}: {
  section: string;
  liveMetrics?: Record<string, number>;
}) {
  switch (section) {
    case "trust-metrics":
      return (
        <div className="relative z-10 flex flex-col items-center gap-16 md:gap-24">
          <Suspense fallback={<WidgetSkeleton height="h-24 w-full" />}>
            <TrustBadge />
          </Suspense>
          <div className="bg-border/20 h-px w-full" />
          <Suspense fallback={<WidgetSkeleton height="h-[280px] w-full" />}>
            <ImpactStats liveMetrics={liveMetrics} />
          </Suspense>
        </div>
      );
    case "audit-generator":
      return (
        <Suspense fallback={<WidgetSkeleton height="h-[400px]" />}>
          <AuditReportGenerator />
        </Suspense>
      );
    case "lead-scoring":
      return (
        <Suspense fallback={<WidgetSkeleton height="h-[300px]" />}>
          <LeadScoringHUD />
        </Suspense>
      );
    case "trust-equation":
      return (
        <Suspense fallback={<WidgetSkeleton height="h-[500px]" />}>
          <TrustEquation />
        </Suspense>
      );
    case "work-process":
      return (
        <Suspense fallback={<WidgetSkeleton height="h-[500px]" />}>
          <WorkProcess />
        </Suspense>
      );
    case "pricing":
      return (
        <Suspense fallback={<WidgetSkeleton height="h-[650px]" />}>
          <PricingSection />
        </Suspense>
      );
    case "terminal-health":
      return (
        <Suspense fallback={<div className="h-48 w-full animate-pulse rounded-2xl bg-black/20" />}>
          <DirectTerminal mode="health-check" province="Thailand" />
        </Suspense>
      );
    default:
      return null;
  }
}
