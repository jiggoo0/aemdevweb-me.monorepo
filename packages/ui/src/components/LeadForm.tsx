/** @format */

"use client";

import React, { useState } from "react";
import { submitLead } from "@repo/db";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface LeadFormProps {
  siteOrigin: string;
  metadata?: Record<string, unknown>;
}

export function LeadForm({ siteOrigin, metadata = {} }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await submitLead({
        site_origin: siteOrigin,
        name: formData.name,
        contact: formData.contact,
        message: formData.message,
        metadata: metadata as Record<string, string>,
      });

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", contact: "", message: "" });
    } catch (err: unknown) {
      console.error("Lead submission error:", err);
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message: unknown }).message)
            : "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 text-center bg-success/10 border border-success/20 rounded-3xl animate-in zoom-in-95 duration-500">
        <div className="inline-flex p-4 bg-success/20 rounded-full mb-6">
          <CheckCircle2 size={32} className="text-success" />
        </div>
        <h4 className="text-xl font-bold mb-2">Transmission Successful</h4>
        <p className="text-sm text-muted-foreground">
          ข้อมูลของคุณถูกเข้ารหัสและส่งเข้าสู่ระบบ UNLINK Thailand เรียบร้อยแล้ว
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3 text-error text-xs font-bold uppercase tracking-widest">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
            Identity / Full Name
          </label>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe"
            className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
            Communication Protocol
          </label>
          <input
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="Phone or Email"
            className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
          Strategic Inquiry / Message
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your requirements..."
          className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium resize-none"
        />
      </div>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full py-5 bg-primary text-primary-foreground rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            Send Transmission
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
