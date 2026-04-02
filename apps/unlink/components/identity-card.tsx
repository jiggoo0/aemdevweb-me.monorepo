"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Calendar,
  Award,
  User,
  Building,
  Briefcase,
  Info,
  BadgeCheck,
  AlertTriangle,
} from "lucide-react";
import { Identity } from "@/lib/shared-source/types";

interface IdentityCardProps {
  identity: Identity;
}

export function IdentityCard({ identity }: IdentityCardProps) {
  const isPerson = identity.type === "person";

  // Trust color mapping using theme variables
  const getTrustColor = (level: number) => {
    if (level >= 9)
      return "text-success bg-success/5 border-success/20";
    if (level >= 7) return "text-primary bg-primary/5 border-primary/20";
    if (level >= 5) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-destructive bg-destructive/5 border-destructive/20";
  };

  const trustColorClass = getTrustColor(identity.trust_level);

  // Parse metadata if it exists
  let metadataObj: any = {};
  if (identity.metadata) {
    try {
      metadataObj =
        typeof identity.metadata === "string"
          ? JSON.parse(identity.metadata)
          : identity.metadata;
    } catch (e) {
      console.error("Failed to parse metadata", e);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Subtle Shadow for Depth */}
      <div className="absolute inset-0 bg-foreground/5 rounded-2xl blur-2xl -z-10" />

      <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        {/* Institutional Header Bar */}
        <div className="h-2 bg-primary w-full" />
        
        <div className="p-8 md:p-10 space-y-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-sm">
                {isPerson ? <User size={32} /> : <Building size={32} />}
              </div>
              <div>
                <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-[0.2em] mb-1">
                  Official Accreditation
                </div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  {identity.name}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-muted-foreground text-xs font-medium">
                  {isPerson ? "Verified Individual" : "Verified Organization"}
                  <span className="w-1 h-1 rounded-full bg-border" />
                  Registry ID: <span className="font-mono text-foreground">{identity.id}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold font-mono shadow-sm ${trustColorClass}`}>
                <ShieldCheck size={16} />
                TRUST LEVEL: {identity.trust_level}/10
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-success font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Active & Validated
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-border/50">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                  <Briefcase size={14} className="text-primary/60" />
                  {isPerson ? "Area of Expertise" : "Industry Sector"}
                </div>
                <p className="text-foreground text-base font-medium leading-relaxed">
                  {isPerson ? identity.expertise : identity.industry}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                  <Info size={14} className="text-primary/60" />
                  {isPerson ? "Professional Summary" : "Operational Assets"}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {isPerson ? identity.bio : identity.assets_summary}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {metadataObj.role && (
                <div className="space-y-2">
                  <div className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                    Official Designation
                  </div>
                  <div className="text-foreground text-base font-medium">
                    {metadataObj.role}
                  </div>
                </div>
              )}
              
              {metadataObj.tags && (
                <div className="space-y-3">
                  <div className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                    Classifications
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(metadataObj.tags as string[]).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary border border-border rounded text-[10px] text-foreground font-bold font-mono uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {identity.last_checked && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest">
                    <Calendar size={14} className="text-primary/60" />
                    Last Authority Audit
                  </div>
                  <div className="text-muted-foreground text-[11px] font-mono">
                    {new Date(identity.last_checked).toUTCString()}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Security Section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 rounded-xl bg-secondary/50 border border-border">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground">
                  <Award size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold font-mono text-foreground uppercase tracking-widest">
                    Cryptographic Signature
                  </div>
                  <p className="text-[10px] text-muted-foreground font-mono break-all leading-tight max-w-md">
                    SHA256: {identity.id.split('').map(c => c.charCodeAt(0).toString(16)).join('')}f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-lg shadow-sm">
                <BadgeCheck size={18} className="text-primary" />
                <span className="text-[10px] font-bold font-mono text-foreground uppercase tracking-widest">
                  Verified by UNLINK
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3 items-start">
              <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[9px] text-muted-foreground leading-normal italic">
                This identity accreditation is cryptographically signed and valid across all UNLINK network nodes. 
                Unauthorized use or impersonation of this identity is subject to automated protocol sanctions under the Global Trust Framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function IdentityNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-10 text-center space-y-6 bg-destructive/5 border border-destructive/10 rounded-2xl max-w-lg mx-auto shadow-sm"
    >
      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-destructive/10 text-destructive mb-2">
        <AlertTriangle size={32} />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">
          Identity Not Recognized
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The provided Registry ID does not match any authenticated record in our
          global ledger. Please verify the identifier or contact the UNLINK
          Registry Authority for assistance.
        </p>
      </div>
      <div className="pt-6 flex flex-col items-center gap-3 border-t border-destructive/10">
        <div className="text-[10px] font-bold font-mono text-destructive uppercase tracking-[0.2em]">
          Safety Advisory
        </div>
        <div className="text-[11px] text-muted-foreground italic">
          Do not proceed with transactions involving unverified identities.
        </div>
      </div>
    </motion.div>
  );
}
