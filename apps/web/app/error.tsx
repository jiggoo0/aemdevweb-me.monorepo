/**
 * [SYSTEM MODULE]: ROOT_ERROR_BOUNDARY v18.0.0 (STABLE_RECOVERY)
 * [STRATEGY]: Resilient UI | Diagnostic Feedback | Direct Recovery Path
 */

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

/**
 * @component Error
 * @description ด่านกักกันความผิดพลาดระดับ Route (Segment Error Boundary)
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // [LOGGING]: บันทึกข้อผิดพลาดลงระบบ Monitoring (เช่น Sentry หรือ Log Node)
    console.error("[SEGMENT_CRASH]:", error);
  }, [error]);

  return (
    <div className="bg-surface-main relative flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 max-w-xl space-y-10">
        {/* Error Node Interface */}
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full bg-rose-500/10 blur-2xl" />
          <div className="bg-surface-card rounded-section flex h-20 w-20 items-center justify-center border border-rose-500/20 shadow-2xl">
            <IconRenderer name="ShieldAlert" size={40} className="text-rose-500" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-5xl">
            Segment <br /> <span className="text-rose-500">Unstable.</span>
          </h2>
          <div className="mx-auto max-w-md border-l-4 border-rose-500/30 pl-6 text-left">
            <p className="text-text-secondary text-base font-medium italic opacity-80">
              ตรวจพบความไม่เสถียรในโหนดปัจจุบัน ระบบกำลังพยายามรักษาสถานะความปลอดภัยของข้อมูล
            </p>
          </div>
        </div>

        {/* Action Group */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => reset()}
            variant="neo"
            className="h-14 w-full bg-rose-600 px-10 text-[11px] font-black tracking-widest hover:bg-rose-700 sm:w-auto"
          >
            <IconRenderer name="RefreshCcw" size={16} className="mr-2" />
            RE-INITIALIZE NODE
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-14 w-full px-10 text-[11px] font-black tracking-widest sm:w-auto"
          >
            <Link href="/">BACK TO COMMAND CENTER</Link>
          </Button>
        </div>

        {/* Trace Metadata */}
        {error.digest && (
          <p className="font-mono text-[8px] font-bold tracking-widest uppercase opacity-20">
            Error_Digest: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
