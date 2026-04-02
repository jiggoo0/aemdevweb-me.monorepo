/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v18.1.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Hybrid Performance | Zero-Framer
 */

"use client";

import React, { memo, useMemo, useState, useEffect, useRef } from "react";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site-config";

interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: number | string;
  readonly unit: string;
  readonly features: readonly string[];
  readonly roi: string;
  readonly cta: string;
  readonly highlight: boolean;
  readonly href: string;
  readonly isExternal?: boolean;
}

const PricingSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = sectionRef.current?.querySelectorAll("[data-pricing-card]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const displayPlans = useMemo<readonly PricingPlan[]>(() => {
    const conversionData =
      MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-SP-01") || MASTER_REGISTRY[1];
    const foundationData =
      MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-CP-03") || MASTER_REGISTRY[2];
    const growthData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-SEO-07") || MASTER_REGISTRY[0];

    return [
      {
        id: "conversion",
        name: "Conversion Engine",
        price: conversionData?.priceValue || 3500,
        unit: conversionData?.unit || "/ Project",
        roi: "x4.5 Expected Growth",
        features: conversionData?.benefits?.slice(0, 4) || [],
        cta: "ปั้นยอดขายทันที",
        highlight: false,
        href: `/services/${conversionData?.templateSlug || "salepage"}`,
      },
      {
        id: "foundation",
        name: "Infrastructure Core",
        price: foundationData?.priceValue || 19500,
        unit: foundationData?.unit || "/ Project",
        roi: "Global Trust Authority",
        features: foundationData?.benefits?.slice(0, 4) || [],
        cta: "วางรากฐานธุรกิจสากล",
        highlight: true,
        href: `/services/${foundationData?.templateSlug || "corporate"}`,
      },
      {
        id: "growth",
        name: "Authority Growth",
        price: growthData?.priceValue || 19500,
        unit: growthData?.unit || "/ Month",
        roi: "Sustainable Market Dominance",
        features: growthData?.benefits?.slice(0, 4) || [],
        cta: "ยกระดับอันดับ Google",
        highlight: false,
        href: `/services/${growthData?.templateSlug || "seo-agency"}`,
      },
    ];
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="border-border/10 relative overflow-hidden border-y bg-[var(--surface-offset)] py-24 md:py-48"
    >
      {/* 01. BLUEPRINT INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* --- HEADER_NODE --- */}
        <header className="mb-24 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2.5 backdrop-blur-md">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
            <span className="font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
              แผนการลงทุนที่คุ้มค่า
            </span>
          </div>

          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            แพ็กเกจ <br /> <span className="text-[var(--color-brand-primary)]">บริการ.</span>
          </h2>

          <div className="border-l-[6px] border-[var(--color-brand-primary)]/40 pl-8 md:pl-12">
            <p className="text-text-primary max-w-3xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
              “เราเปลี่ยนงบประมาณโฆษณา ให้เป็นสินทรัพย์ดิจิทัลที่ทำงานแทนคุณได้ตลอด 24 ชม.”
            </p>
          </div>
        </header>

        {/* --- PRICING_MATRIX --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-stretch">
          {displayPlans.map((plan, i) => (
            <div
              key={plan.id}
              data-pricing-card
              data-index={i}
              className={cn(
                "group rounded-section relative flex flex-col border p-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:p-16",
                "translate-y-16 opacity-0",
                visibleItems.has(i) && "translate-y-0 opacity-100",
                plan.highlight
                  ? "bg-surface-card z-10 border-[var(--color-brand-primary)] shadow-sm hover:shadow-md lg:-translate-y-4"
                  : "bg-surface-card border-border/10 hover:border-[var(--color-brand-primary)]/40",
              )}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {plan.highlight && (
                <div className="absolute top-8 right-10">
                  <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                    แนะนำสำหรับคุณ
                  </span>
                </div>
              )}

              <div className="mb-12 space-y-2">
                <span className="text-text-muted font-sans text-[11px] font-bold tracking-widest uppercase opacity-100">
                  แพ็กเกจที่ 0{i + 1}
                </span>
                <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-4xl">
                  {plan.name}
                </h3>

                <div className="pt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter text-[var(--color-brand-primary)] italic tabular-nums md:text-7xl">
                      {isMounted
                        ? typeof plan.price === "number"
                          ? `฿${plan.price.toLocaleString()}`
                          : plan.price
                        : "---"}
                    </span>
                    <span className="text-text-muted text-xs font-black uppercase opacity-60">
                      {plan.unit}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                    <div className="h-1 w-1 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[9px] font-black tracking-widest text-emerald-500 uppercase">
                      {plan.roi}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <ul className="border-border/5 mb-16 space-y-6 border-t pt-12">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 shrink-0 text-[var(--color-brand-primary)]">
                        <IconRenderer name="CheckCircle2" size={16} />
                      </div>
                      <span className="text-text-secondary text-sm leading-relaxed font-medium italic opacity-80 md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    asChild
                    variant={plan.highlight ? "specialist" : "outline"}
                    className={cn(
                      "h-16 w-full text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500",
                      !plan.highlight &&
                        "border-border hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]",
                    )}
                  >
                    <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
