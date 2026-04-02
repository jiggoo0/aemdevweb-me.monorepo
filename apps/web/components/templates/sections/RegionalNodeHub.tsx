/**
 * [SYSTEM COMPONENT]: REGIONAL_NODE_HUB v18.1.0 (DYNAMIC_LINKING)
 * [STRATEGY]: Programmatic Internal Linking | Geographic Authority | Cross-Node SEO
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import type { UniversalTemplateProps } from "@/types";
import IconRenderer from "@/components/ui/IconRenderer";

const RegionalNodeHub = ({ data }: { data: UniversalTemplateProps }) => {
  const { servingAreas, province, masterServiceUrl, title } = data;
  const isAreaPage = !!province;

  return (
    <div className="flex flex-col gap-0">
      {/* --- SECTION 01: CROSS-SERVICE AUTHORITY (If on Area Page) --- */}
      {isAreaPage && masterServiceUrl && (
        <section className="bg-[var(--surface-main)] py-20 pb-10">
          <div className="container mx-auto px-4">
            <div className="border-border/40 relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl border bg-[var(--surface-offset)] p-12 md:flex-row md:p-16">
              <div className="relative z-10 space-y-4 text-center md:text-left">
                <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase">
                  Service_Origin_Authority
                </span>
                <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                  กลับสู่หน้าบริการหลัก <br />
                  <span className="text-[var(--color-brand-primary)]">
                    {title.replace(`ในพื้นที่ ${province}`, "").trim()}
                  </span>
                </h3>
              </div>

              <Link
                href={masterServiceUrl}
                className="group shadow-md-md relative z-10 flex h-20 items-center gap-6 rounded-2xl bg-[var(--color-brand-primary)] px-12 text-[12px] font-black tracking-[0.2em] text-white uppercase transition-all hover:scale-105 active:scale-95"
              >
                <IconRenderer name="ArrowRight" size={24} />
                <span>Full_Service_Details</span>
              </Link>

              <div className="absolute inset-0 -z-0 bg-[var(--color-brand-primary)]/5" />
              <div className="bg-infrastructure-grid absolute inset-0 z-0 opacity-[0.03]" />
            </div>
          </div>
        </section>
      )}

      {/* --- SECTION 02: DYNAMIC NODE NETWORK --- */}
      {servingAreas && servingAreas.length > 0 && (
        <section className="border-border/40 border-y bg-[var(--surface-offset)] py-24 md:py-32">
          <div className="container mx-auto px-4">
            <header className="mb-16 space-y-6 text-center">
              <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2 font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase backdrop-blur-md">
                <IconRenderer name="Map" size={14} />
                <span>{isAreaPage ? "Nearby_Regional_Nodes" : "Regional_Service_Network"}</span>
              </div>
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                {isAreaPage ? "พื้นที่ใกล้เคียง" : "Serving Across"}{" "}
                <span className="text-[var(--color-brand-primary)]">
                  {isAreaPage ? "อื่นๆ." : "Thailand."}
                </span>
              </h2>
              <p className="text-text-secondary mx-auto max-w-2xl text-lg font-medium italic opacity-80">
                {isAreaPage
                  ? `พบกับบริการคุณภาพสูงในพื้นที่จังหวัดใกล้เคียง ที่ยังคงมาตรฐานวิศวกรรมเดียวกัน`
                  : `ครอบคลุมพื้นที่ยุทธศาสตร์ทั่วประเทศ ด้วยมาตรฐานวิศวกรรมเว็บไซต์เดียวกันทุกภูมิภาค`}
              </p>
            </header>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {servingAreas.map((slug) => (
                <Link
                  key={slug}
                  href={`/areas/${slug}`}
                  className="group border-border/50 bg-surface-card relative flex items-center justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/40 hover:shadow-sm"
                >
                  <span className="text-text-primary text-[11px] font-black tracking-widest uppercase transition-colors group-hover:text-[var(--color-brand-primary)]">
                    {slug.replace(/-/g, " ")}
                  </span>
                  <IconRenderer
                    name="ChevronRight"
                    size={14}
                    className="text-text-muted transition-all group-hover:translate-x-1 group-hover:text-[var(--color-brand-primary)]"
                  />
                  <div className="absolute inset-0 -z-10 bg-[var(--color-brand-primary)]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/areas"
                className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8 transition-colors hover:text-[var(--color-brand-primary)]"
              >
                ดูพื้นที่ให้บริการทั้งหมด
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default memo(RegionalNodeHub);
