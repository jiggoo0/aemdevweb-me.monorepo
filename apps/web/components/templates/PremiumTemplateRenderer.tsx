/**
 * [TEMPLATE CORE]: PREMIUM_TEMPLATE_RENDERER v2.0.0
 * [STRATEGY]: Schema-Driven Hydration | Premium_V2 Architecture
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { Suspense } from "react";
import type { PremiumTemplateProps } from "@/lib/templates/premium-types";
import { PremiumTemplateBuilderProvider } from "@/components/providers/PremiumTemplateBuilderProvider";
import PremiumLayoutEngine from "@/components/features/wow-factor/core/PremiumLayoutEngine";

// Dynamic Imports for Premium Templates
const PremiumCorporateTemplate = React.lazy(() => import("./corporate/PremiumCorporateTemplate"));

interface RendererProps {
  data: PremiumTemplateProps;
}

/**
 * @component PremiumTemplateRenderer
 * @description ตัวเรนเดอร์หลักสำหรับเทมเพลตระดับพรีเมียม (Premium_V2)
 * รองรับการฉีด Context และการจัดการโครงสร้างผ่าน PremiumLayoutEngine
 */
export const PremiumTemplateRenderer = ({ data }: RendererProps) => {
  return (
    <PremiumTemplateBuilderProvider data={data}>
      <PremiumLayoutEngine data={data}>
        <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
          {/* --- TEMPLATE RESOLUTION LOGIC --- */}
          {data.id.includes("corporate") && (
            <PremiumCorporateTemplate data={data} />
          )}
          
          {/* Default Fallback or Other Templates */}
          {!data.id.includes("corporate") && (
            <div className="container mx-auto py-32 text-center">
              <h1 className="text-4xl font-black italic text-white uppercase tracking-tighter">
                Premium Template: {data.title}
              </h1>
              <p className="mt-4 text-slate-400">Template structure resolution pending for this ID.</p>
            </div>
          )}
        </Suspense>
      </PremiumLayoutEngine>
    </PremiumTemplateBuilderProvider>
  );
};
