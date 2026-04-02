import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

interface LocalSuccessNodeProps {
  title: string;
  result: string;
  province: string;
}

export const LocalSuccessNode = ({ title, result, province }: LocalSuccessNodeProps) => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-[var(--brand-primary)]/20 bg-gradient-to-br from-[var(--brand-primary)]/5 to-transparent p-10 md:p-16">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <IconRenderer name="Award" size={120} />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)]/10 px-4 py-1">
              <span className="font-mono text-[10px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                Success_Story: {province}
              </span>
            </div>
            <h3 className="text-3xl leading-none font-black tracking-tighter uppercase italic md:text-5xl">
              {title}
            </h3>
          </div>

          <div className="shadow-pro rounded-2xl border-l-4 border-[var(--brand-primary)] bg-[var(--surface-card)] p-8">
            <p className="mb-4 font-mono text-sm font-bold tracking-widest uppercase opacity-40">
              Performance_Metric
            </p>
            <p className="text-xl leading-relaxed font-medium text-[var(--text-primary)]/90 italic">
              "{result}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
