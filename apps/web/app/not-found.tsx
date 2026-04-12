import { Button, GlassCard } from "@repo/ui";
import { ShieldQuestion, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * [PAGE]: 404 NOT FOUND v2.0.0
 * [STRATEGY]: Cinematic Dark Fallback
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-primary/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/5 blur-[180px]" />
      </div>

      <GlassCard className="max-w-2xl w-full p-12 text-center border-white/10 relative z-10 bg-black/40">
        <ShieldQuestion size={64} className="mx-auto text-blue-500 mb-8 opacity-80" />

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
          Route <span className="text-blue-500 italic">Not Found</span>
        </h1>

        <p className="text-white/50 text-lg font-light mb-12">
          ไม่พบหน้าที่คุณต้องการในโครงสร้างพื้นฐานปัจจุบัน โปรดตรวจสอบ URL
          อีกครั้งหรือกลับสู่ศูนย์กลางการควบคุม
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            size="lg"
            variant="neo"
            asChild
            className="flex items-center gap-3 px-10 w-full sm:w-auto"
          >
            <Link href="/">
              <Home size={18} /> Return to Hub
            </Link>
          </Button>

          <Button size="lg" variant="specialist" asChild className="w-full sm:w-auto px-10">
            <Link href="/services" className="flex items-center gap-3">
              Explore Solutions <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </GlassCard>
    </main>
  );
}
