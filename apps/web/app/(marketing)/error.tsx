"use client";

import React, { useEffect } from "react";
import { Button, GlassCard } from "@repo/ui";
import { AlertTriangle, RotateCcw } from "lucide-react";

/**
 * [BOUNDARY]: MarketingErrorBoundary
 * จัดการข้อผิดพลาดที่เกิดขึ้นในกลุ่มหน้าการตลาด พร้อม UI ระดับสถาบัน
 */
export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an institutional logging service if needed
    console.error("Infrastructure Hub Protocol Failure:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <GlassCard className="max-w-xl w-full p-12 text-center border-red-500/20 bg-red-500/5">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <AlertTriangle className="text-red-500" size={40} />
        </div>

        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 text-white">
          Protocol <span className="text-red-500 italic">Interrupted.</span>
        </h2>

        <p className="text-lg font-light text-white/40 mb-12 italic leading-relaxed">
          "ตรวจพบความผิดปกติในกระบวนการประมวลผลข้อมูลระดับสถาบัน โปรดลองทำการเชื่อมต่อใหม่อีกครั้ง"
        </p>

        <div className="space-y-4">
          <Button
            variant="neo"
            className="w-full flex items-center justify-center gap-3"
            onClick={() => reset()}
          >
            <RotateCcw size={18} />
            Re-initialize Connection
          </Button>
          <div className="text-[10px] font-mono text-white/10 uppercase tracking-widest pt-4">
            Digest: {error.digest || "UNKNOWN_ERROR_CODE"}
          </div>
        </div>
      </GlassCard>
    </main>
  );
}
