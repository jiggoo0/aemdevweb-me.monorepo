/**
 * [PAGE]: PREMIUM_DEMO_PAGE v1.0.0
 * [STRATEGY]: Live Showcase | Phase 5 Deliverables
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Metadata } from "next";
import { PremiumTemplateRenderer } from "@/components/templates/PremiumTemplateRenderer";
import type { PremiumTemplateProps } from "@/lib/templates/premium-types";

export const metadata: Metadata = {
  title: "AEMZA Design Engine - Premium V2 Demo",
  description: "Live showcase of Phase 5 Premium Template infrastructure with WOW-Factor interaction.",
  robots: "noindex, nofollow", // Demo page only
};

// Mock Data for Phase 5 Showcase
const demoData: PremiumTemplateProps = {
  id: "corporate-elite-v2",
  slug: "premium-demo",
  title: "AEMZA MACKS Elite Portfolio",
  theme: {
    primaryRaw: "55% 0.18 260", // Deep Blue OKLCH
    secondaryRaw: "65% 0.25 290", // Purple Accent
    accentRaw: "85% 0.12 180", // Cyan Glow
    mode: "dark",
    glassIntensity: 0.6,
    atmosphereOpacity: 0.15,
  },
  sections: [
    {
      id: "tracking",
      type: "dashboard",
      title: "Real-Time Engine Performance",
      description: "Live monitoring of Vercel Edge hydration and Framer Motion spring physics. Optimized for 60fps on mobile.",
    },
    {
      id: "roi",
      type: "calculator",
      title: "Executive ROI Builder",
      description: "Strategic investment simulation for high-end digital infrastructure. Real-time theme response based on profitability metrics.",
    },
    {
      id: "mission",
      type: "standard",
      title: "Zero-Error Engineering",
      description: "Every pixel is backed by a rigorous verification protocol. From OKLCH color logic to React 19 server components, we deliver technical perfection for world-class corporate identities.",
    }
  ],
  metadata: {
    author: "AEMZA MACKS",
    version: "2.0.0",
    performanceScore: 98,
  }
};

const PremiumDemoPage = () => {
  return (
    <div className="bg-slate-950">
       <PremiumTemplateRenderer data={demoData} />
    </div>
  );
};

export default PremiumDemoPage;
