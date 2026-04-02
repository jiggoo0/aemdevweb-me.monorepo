/**
 * [COMPONENT]: THAI_TRUST_BADGE v17.9.105 (SEMANTIC_HARDENED)
 * [STRATEGY]: Adaptive Theme Architecture | Conversion Psychology | Lint Fixed
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

interface ThaiTrustBadgeProps {
  readonly clientTrust?: string;
}

// Interface สำหรับ Sub-component เพื่อความชัดเจนของ Type
interface TrustItemProps {
  icon: string;
  title: string;
  description: string;
}

export function ThaiTrustBadge({ clientTrust }: ThaiTrustBadgeProps) {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-4">
      {/* 01. SECTION HEADER: Authority & Trust Signaling */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-[var(--color-brand-primary)] uppercase">
          <IconRenderer name="ShieldCheck" size={14} strokeWidth={2.5} />
          <span>Verified Business Merchant</span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] uppercase italic transition-colors sm:text-4xl lg:text-5xl">
          มั่นใจในคุณภาพ <span className="text-[var(--color-brand-primary)] not-italic">&</span>{" "}
          ความปลอดภัย
        </h2>

        <div className="mt-6 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-[var(--color-brand-primary)] shadow-sm" />
        </div>
      </div>

      {/* 02. TRUST GRID: Core Reliability Nodes */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TrustItem
          icon="FileText"
          title="จดทะเบียนถูกต้อง"
          description="ดำเนินงานโปร่งใส ตรวจสอบสถานะบริษัทได้จริงตามกฎหมายพาณิชย์"
        />
        <TrustItem
          icon="Lock"
          title="ชำระเงินปลอดภัย"
          description="เข้ารหัสข้อมูลขั้นสูง 256-bit SSL มั่นใจได้ทุกธุรกรรมการเงิน"
        />
        <TrustItem
          icon="Truck"
          title="จัดส่งรวดเร็ว"
          description="จัดส่งผ่าน Kerry / Flash สินค้าถึงมือใน 1-3 วัน พร้อมเลข Tracking"
        />
        <TrustItem
          icon="Award"
          title="การันตีความพอใจ"
          description={
            clientTrust || "คัดสรรสินค้าเกรดพรีเมียม พร้อมทีมงานดูแลหลังการขายตลอด 24 ชม."
          }
        />
      </div>

      {/* 03. INFRASTRUCTURE SIGNALS: Tech & Payment Verification */}
      <div className="mt-16 border-y border-[var(--border)] py-8 transition-colors">
        <div className="flex flex-col items-center justify-between gap-8 opacity-60 transition-all duration-500 hover:opacity-100 md:flex-row">
          <div className="flex items-center gap-5">
            <span className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">
              Secure Checkout:
            </span>
            <div className="flex gap-3 grayscale transition-all duration-500 hover:grayscale-0">
              <PaymentIcon icon="CreditCard" />
              <PaymentIcon icon="Landmark" />
              <PaymentIcon icon="Wallet" />
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-[var(--border)] px-4 py-2 opacity-80">
            <IconRenderer name="Lock" size={14} className="text-[var(--color-brand-primary)]" />
            <span className="text-[10px] font-bold tracking-tight text-[var(--text-secondary)]">
              Industry-Standard SSL Encryption
            </span>
          </div>
        </div>
      </div>

      {/* 04. PDPA COMPLIANCE: Legal Safety Net */}
      <div className="mt-10 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-offset)] p-5 text-center shadow-sm backdrop-blur-md">
        <p className="text-xs leading-relaxed font-medium text-[var(--text-secondary)]">
          <strong className="mr-1 font-black text-[var(--text-primary)] uppercase">
            Privacy Policy:
          </strong>
          เราให้ความสำคัญกับข้อมูลส่วนบุคคลของคุณสูงสุด ข้อมูลทั้งหมดจะถูกจัดการภายใต้มาตรฐาน PDPA
        </p>
      </div>
    </div>
  );
}

// --- Internal Sub-Components ---

function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className="group rounded-section hover:shadow-pro-xl flex flex-col items-center border border-[var(--border)] bg-[var(--surface-card)] p-8 text-center transition-all duration-500 hover:border-[var(--color-brand-primary)]/30">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-6">
        <IconRenderer name={icon as IconName} size={32} strokeWidth={2} />
      </div>

      <h4 className="mb-3 text-xl font-black tracking-tight text-[var(--text-primary)]">{title}</h4>

      <p className="font-thai text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}

function PaymentIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-9 w-14 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-card)] text-[var(--text-muted)] transition-all">
      <IconRenderer name={icon as IconName} size={18} />
    </div>
  );
}
