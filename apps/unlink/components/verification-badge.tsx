"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  registrationNumber: string;
  className?: string;
}

export function VerificationBadge({ registrationNumber, className }: VerificationBadgeProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const { data, error } = await supabase
          .from("ip_records")
          .select("status")
          .eq("registration_number", registrationNumber)
          .single();

        if (error) throw error;
        setStatus(data.status);
      } catch (err) {
        console.error("Error fetching verification status:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (registrationNumber) {
      fetchStatus();
    }
  }, [registrationNumber]);

  if (loading) {
    return <Loader2 className="animate-spin text-muted-foreground" size={16} />;
  }

  if (error || !status) {
    return null;
  }

  if (status.toLowerCase() === "verified") {
    return (
      <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold uppercase tracking-wider", className)}>
        <ShieldCheck size={12} />
        Verified
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-bold uppercase tracking-wider", className)}>
      {status}
    </div>
  );
}
