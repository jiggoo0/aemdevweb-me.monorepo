"use client";

import React from "react";
import { Mail, Clock, MessageSquare } from "lucide-react";

export type LeadStatus = "new" | "contacted" | "completed";

export function LeadStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    contacted: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    completed: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles[status] || styles.new}`}
    >
      {status}
    </span>
  );
}

interface LeadCardProps {
  lead: {
    id: string;
    site_origin: string;
    name: string;
    contact: string;
    message: string;
    status: string;
    created_at: string;
  };
  onStatusUpdate?: (id: string, status: LeadStatus) => void;
}

export function LeadCard({ lead, onStatusUpdate }: LeadCardProps) {
  return (
    <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            {lead.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">{lead.name}</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              {lead.site_origin}
            </p>
          </div>
        </div>
        <LeadStatusBadge status={lead.status} />
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-400">
          <Mail size={14} className="flex-shrink-0" />
          <span className="text-xs font-mono">{lead.contact}</span>
        </div>
        <div className="flex items-start gap-3 text-gray-400">
          <MessageSquare size={14} className="mt-1 flex-shrink-0" />
          <p className="text-xs leading-relaxed line-clamp-2">{lead.message}</p>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Clock size={14} />
          <span className="text-[10px] uppercase tracking-widest">
            {new Date(lead.created_at).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {lead.status === "new" && (
          <button
            onClick={() => onStatusUpdate?.(lead.id, "contacted")}
            className="flex-1 py-2 rounded-lg bg-purple-500/10 text-purple-500 text-[10px] font-bold uppercase tracking-widest border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
          >
            Mark Contacted
          </button>
        )}
        {lead.status !== "completed" && (
          <button
            onClick={() => onStatusUpdate?.(lead.id, "completed")}
            className="flex-1 py-2 rounded-lg bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20 hover:bg-green-500/20 transition-colors"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}
