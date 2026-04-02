"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

interface DirectTerminalProps {
  mode?: "contact" | "health-check";
  province?: string;
  latency?: number;
}

export const DirectTerminal = ({
  mode = "contact",
  province = "Global",
  latency: providedความเร็ว,
}: DirectTerminalProps) => {
  const [status, setStatus] = React.useState<"idle" | "running" | "complete">("idle");
  const [output, setOutput] = React.useState<string[]>([]);
  const [_latency, setความเร็ว] = React.useState<number>(providedความเร็ว || 25);

  // [HYDRATION_SAFE]: Generate stable simulated latency on mount if not provided
  React.useEffect(() => {
    if (!providedความเร็ว) {
      const base = province.length * 2;
      const variance = Math.floor(Math.abs(Math.sin(province.length) * 15));
      setความเร็ว(10 + base + variance);
    }
  }, [providedความเร็ว, province]);

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const runCheck = () => {
    setStatus("running");
    const steps = [
      "กำลังเชื่อมต่อข้อมูลพื้นที่...",
      `Target_Geo: ${province}`,
      "Measuring_Network_Latencies...",
      `Syncing_Local_Registry_v18.4...`,
      "Verifying_SSL_End-to-End...",
      "Firewall_Audit: PASS",
      `ตรวจสอบสำเร็จ: พื้นที่ ${province} พร้อมให้บริการ`,
    ];

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setOutput((prev) => [...prev, steps[currentStep]]);
        currentStep++;
        // [REALISM]: ปรับความเร็วแต่ละขั้นตอนไม่เท่ากันตามความซับซ้อนของ Task
        const nextDelay = currentStep === 2 ? 1500 : 400 + Math.random() * 600;
        setTimeout(runStep, nextDelay);
      } else {
        setStatus("complete");
      }
    };
    runStep();
  };

  const handleDeploy = () => {
    if (!email.includes("@") || email.length < 5) {
      setError("Error: Invalid_Credential_Protocol");
      return;
    }
    setError("");
    setStatus("running");
    setOutput(["Encrypting_Request...", "Sending_Handshake_Signal..."]);

    setTimeout(() => {
      setStatus("complete");
      setOutput((prev) => [...prev, "Status: Dispatched", "Specialist_Notified_v18"]);
    }, 2000);
  };

  return (
    <div className="group border-border/50 bg-surface-card/90 relative overflow-hidden rounded-2xl border p-6 font-mono shadow-2xl transition-all duration-500 hover:border-[var(--color-brand-primary)]/30">
      {/* [VISUAL]: CRT Scanline Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />

      <div className="border-border/10 relative z-10 flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-amber-500/40" />
          <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
          <span className="text-text-muted ml-2 text-[9px] font-black tracking-widest uppercase opacity-40">
            {mode === "health-check"
              ? `พื้นที่เป้าหมาย: ${province}`
              : "ระบบพร้อมให้คำปรึกษาตลอด 24 ชม."}
          </span>
        </div>
        {status === "complete" && (
          <div className="flex items-center gap-2 text-emerald-500">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[8px] font-black tracking-widest uppercase">Authenticated</span>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-4 space-y-4">
        {mode === "health-check" ? (
          <div className="space-y-4">
            <div className="min-h-[140px] text-[10px] leading-relaxed font-bold">
              {output.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    "transition-all duration-300",
                    line.includes("Success") ? "text-emerald-500" : "text-text-secondary",
                  )}
                >
                  <span className="mr-2 text-[var(--color-brand-primary)] opacity-30">❯</span>
                  {line}
                  {i === output.length - 1 && status === "running" && (
                    <span className="ml-1 inline-block h-3 w-1.5 bg-[var(--color-brand-primary)]" />
                  )}
                </p>
              ))}
              {status === "idle" && (
                <p className="text-text-muted italic opacity-40">
                  Ready to scan infrastructure. Initializing...
                </p>
              )}
            </div>
            {status === "complete" ? (
              <Button
                asChild
                variant="specialist"
                className="glow-primary h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
              >
                <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                  Connect_With_Specialist
                </a>
              </Button>
            ) : (
              <Button
                onClick={runCheck}
                disabled={status === "running"}
                variant="specialist"
                className="h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
              >
                {status === "running" ? "Analyzing_Infrastructure..." : "Analyze_Health"}
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="border-border/20 flex gap-3 border-b pb-2 text-sm">
                <span className="font-bold text-[var(--color-brand-primary)]">❯</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter_Access_ID (Email)..."
                  className="text-text-primary w-full border-none bg-transparent font-bold outline-none selection:bg-[var(--color-brand-primary)]/30 placeholder:opacity-20"
                />
              </div>
              {error && (
                <span className="text-[9px] font-black tracking-widest text-red-500 uppercase italic">
                  {error}
                </span>
              )}
              <div className="text-text-muted/60 min-h-[40px] text-[10px] leading-tight italic">
                {output.map((line, i) => (
                  <p key={i}>
                    <span className="mr-2 text-[var(--color-brand-primary)]/30">⌁</span>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <Button
              onClick={handleDeploy}
              disabled={status === "running" || status === "complete"}
              variant="specialist"
              className={cn(
                "h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase transition-all",
                status === "complete"
                  ? "border-emerald-500/30 bg-emerald-500/20 text-emerald-500"
                  : "",
              )}
            >
              {status === "running"
                ? "Processing_Handshake..."
                : status === "complete"
                  ? "Request_Acknowledged"
                  : "Deploy_Strategic_Signal"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
