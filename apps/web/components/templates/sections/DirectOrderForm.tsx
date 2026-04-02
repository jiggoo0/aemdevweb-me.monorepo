/**
 * [COMPONENT]: DIRECT_ORDER_FORM v17.9.103 (LINT_STABILIZED)
 * [STRATEGY]: Zero-Friction UX | Dynamic Branding | Input Sanitization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, memo, useCallback } from "react";
import { toast } from "sonner";
import IconRenderer from "@/components/ui/IconRenderer";

interface DirectOrderFormProps {
  readonly price?: string | number;
  readonly unit?: string;
}

export const DirectOrderForm = memo(({ price, unit = "โปรเจกต์" }: DirectOrderFormProps) => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState("");

  // [LOGIC]: Simple Phone Formatter (08X-XXX-XXXX)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      let formatted = value;
      if (value.length > 3 && value.length <= 6) {
        formatted = `${value.slice(0, 3)}-${value.slice(3)}`;
      } else if (value.length > 6) {
        formatted = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
      }
      setPhone(formatted);
    }
  };

  // [HANDLER]: Form Submission
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    try {
      // [NODE]: ในโปรดักชั่นจริง จะเปลี่ยนตรงนี้เป็นคำสั่ง fetch API หรือ Action
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast.success("ส่งข้อมูลคำสั่งซื้อเรียบร้อยแล้ว", {
        description: "เจ้าหน้าที่จะติดต่อกลับหาคุณโดยเร็วที่สุด",
      });
    } catch {
      // [FIXED]: ปรับเป็น Optional Catch Binding เพื่อแก้ปัญหา Unused Variable
      toast.error("เกิดข้อผิดพลาดในการส่งข้อมูล", {
        description: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต",
      });
    } finally {
      setIsPending(false);
    }
  }, []);

  // [UI]: Success Transition Node
  if (isSuccess) {
    return (
      <div className="animate-in fade-in zoom-in shadow-pro-xl rounded-section flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--surface-card)] p-8 text-center backdrop-blur-sm duration-500 md:p-12">
        <div
          style={{ backgroundColor: "var(--color-brand-primary)", opacity: 0.1 }}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white shadow-sm">
          <IconRenderer name="CheckCircle" size={48} strokeWidth={2} className="animate-bounce" />
        </div>
        <h3 className="relative z-10 text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
          Order Received!
        </h3>
        <p className="font-thai relative z-10 mt-4 text-lg text-[var(--text-secondary)]">
          ระบบได้รับข้อมูลเรียบร้อยแล้ว <br />
          ทีมงานจะติดต่อกลับเพื่อยืนยันยอดสั่งซื้อภายใน 5 นาที
        </p>

        {price && (
          <div className="relative z-10 mt-4 text-sm font-bold text-[var(--color-brand-primary)]">
            ยอดรวม: ฿{typeof price === "number" ? price.toLocaleString() : price} {unit}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="relative z-10 mt-10 text-xs font-black tracking-[0.3em] text-[var(--text-muted)] uppercase transition-all hover:tracking-[0.4em] hover:text-[var(--text-primary)]"
        >
          [ Back to Form ]
        </button>
      </div>
    );
  }

  return (
    <div className="relative isolate">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        {/* [SECTION 1]: Identification */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="group space-y-2">
            <label
              htmlFor="name"
              className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase"
            >
              ชื่อ-นามสกุล *
            </label>
            <input
              id="name"
              required
              name="customer_name"
              autoComplete="name"
              placeholder="คุณลูกค้า (ระบุชื่อ)"
              className="w-full rounded-xl border-0 bg-[var(--surface-offset)] px-5 py-4 text-[var(--text-primary)] ring-1 ring-[var(--border)] transition-all outline-none focus:bg-[var(--surface-card)] focus:ring-2 focus:ring-[var(--color-brand-primary)]"
            />
          </div>

          <div className="group space-y-2">
            <label
              htmlFor="phone"
              className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase"
            >
              เบอร์โทรศัพท์ *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={handlePhoneChange}
              placeholder="08X-XXX-XXXX"
              className="w-full rounded-xl border-0 bg-[var(--surface-offset)] px-5 py-4 text-[var(--text-primary)] ring-1 ring-[var(--border)] transition-all outline-none focus:bg-[var(--surface-card)] focus:ring-2 focus:ring-[var(--color-brand-primary)]"
            />
          </div>
        </div>

        {/* [SECTION 2]: Logistics Detail */}
        <div className="space-y-2">
          <label
            htmlFor="address"
            className="text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase"
          >
            รายละเอียดเพิ่มเติม / ที่อยู่
          </label>
          <textarea
            id="address"
            rows={3}
            placeholder="ระบุความต้องการพิเศษ หรือที่อยู่จัดส่ง..."
            className="w-full resize-none rounded-xl border-0 bg-[var(--surface-offset)] px-5 py-4 text-[var(--text-primary)] ring-1 ring-[var(--border)] transition-all outline-none focus:bg-[var(--surface-card)] focus:ring-2 focus:ring-[var(--color-brand-primary)]"
          />
        </div>

        {/* [SECTION 3]: Payment Logic Overlay */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-offset)]/50 p-6 backdrop-blur-sm">
          <p className="mb-4 text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">
            Select Payment Method
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 border-transparent bg-[var(--surface-card)] p-4 shadow-sm transition-all hover:border-[var(--color-brand-primary)]/30 has-[:checked]:border-[var(--color-brand-primary)]">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="h-5 w-5 accent-[var(--color-brand-primary)]"
              />
              <div className="flex flex-col">
                <span className="text-sm font-black text-[var(--text-primary)]">
                  โอนเงิน / PromptPay
                </span>
                <span className="text-[10px] font-bold tracking-tighter text-[var(--text-muted)] uppercase">
                  Fast processing
                </span>
              </div>
            </label>

            <label className="flex w-full cursor-not-allowed items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-offset)] p-4 opacity-50 grayscale">
              <input type="radio" disabled className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-sm font-black text-[var(--text-muted)]">เก็บเงินปลายทาง</span>
                <span className="text-[10px] font-bold tracking-tighter text-[var(--text-muted)] uppercase opacity-50">
                  Unavailable
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* [CTA_ENGINE] */}
        <button
          type="submit"
          disabled={isPending}
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-brand-primary)] py-6 text-xl font-black text-white shadow-sm transition-all hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:grayscale"
        >
          {isPending ? (
            <IconRenderer name="Loader2" className="h-7 w-7 animate-spin" />
          ) : (
            <div className="relative z-10 flex items-center gap-3">
              <span>ยืนยันคำสั่งซื้อ</span>
              {price && (
                <span className="text-sm font-normal opacity-80">
                  (฿{typeof price === "number" ? price.toLocaleString() : price} {unit})
                </span>
              )}
              <IconRenderer
                name="Send"
                size={20}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          )}

          {/* High-end Shimmer Effect */}
          <div className="group-hover: absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </button>

        {/* Security Indicator */}
        <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-[var(--text-muted)] uppercase">
          <IconRenderer name="ShieldCheck" size={14} className="text-emerald-500" />
          <span>Encrypted Secure Transaction</span>
        </div>
      </form>
    </div>
  );
});

DirectOrderForm.displayName = "DirectOrderForm";
