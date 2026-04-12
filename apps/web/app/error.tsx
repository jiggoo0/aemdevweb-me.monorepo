"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button, GlassCard } from "@repo/ui";
import { ShieldAlert, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // โลจิกสำหรับการส่ง Log Error ไปยัง Sentry หรือ Logger อื่นๆ บน Production
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-primary/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[150px]" />
      </div>

      <GlassCard className="max-w-2xl w-full p-12 text-center border-white/10 relative z-10 bg-black/40">
        <ShieldAlert size={64} className="mx-auto text-red-500 mb-8 opacity-80" />

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
          System Integrity <span className="text-red-500 italic">Compromised</span>
        </h1>

        <p className="text-white/50 text-lg font-light mb-12">
          ระบบตรวจพบข้อผิดพลาดชั่วคราวในการประมวลผลคำขอของคุณ
          กรุณาลองใหม่อีกครั้งหรือกลับสู่หน้าหลัก
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            variant="neo"
            onClick={() => reset()}
            className="flex items-center gap-3 px-10 w-full sm:w-auto"
          >
            <RefreshCcw size={18} /> Reboot Sequence
          </Button>

          <Button size="lg" variant="specialist" asChild className="w-full sm:w-auto px-10">
            <Link href="/">Return to Hub</Link>
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-12 p-6 bg-red-500/10 border border-red-500/20 rounded-xl text-left overflow-auto">
            <p className="text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
              Developer Logs:
            </p>
            <pre className="text-white/70 text-xs whitespace-pre-wrap font-mono">
              {error.message}
            </pre>
          </div>
        )}
      </GlassCard>
    </main>
  );
}
