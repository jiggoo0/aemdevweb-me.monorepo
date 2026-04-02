/* @identity 9mza */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  
  Plus,
  Edit2,
  
  Search,
  X,
  ShieldCheck,
  Building,
  User,
  ExternalLink,
  
  Loader2,
  AlertCircle,
  Save,
} from "lucide-react";
import { Identity } from "@/lib/shared-source/types";
import { z } from "zod";

const identitySchema = z.object({
  id: z
    .string()
    .min(3)
    .regex(/^[A-Z0-9-]+$/, "ID must be alphanumeric and uppercase"),
  type: z.enum(["person", "organization"]),
  name: z.string().min(2),
  gender: z.string().optional().nullable(),
  expertise: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  industry: z.string().optional().nullable(),
  key_person_id: z.string().optional().nullable(),
  assets_summary: z.string().optional().nullable(),
  trust_level: z.number().min(1).max(10).default(1),
  last_verified_at: z.string().datetime().optional().nullable(),
  authority_score: z.number().min(0).max(100).default(0),
  verified_badge_url: z.string().url().optional().nullable(),
  metadata: z.any().optional().default({}),
});

type IdentityFormData = z.infer<typeof identitySchema>;

interface AdminIdentityManagerProps {
  initialIdentities: Identity[];
}

export default function AdminIdentityManager({
  initialIdentities,
}: AdminIdentityManagerProps) {
  const [identities, setIdentities] = useState<Identity[]>(initialIdentities);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IdentityFormData>>({
    type: "person",
    trust_level: 1,
    authority_score: 0,
    metadata: {},
  });

  const filteredIdentities = identities.filter(
    (id) =>
      id.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      id.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleOpenCreate = () => {
    setIsEditing(false);
    setFormData({
      id: "",
      name: "",
      type: "person",
      trust_level: 1,
      authority_score: 0,
      metadata: {},
    });
    setError(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (identity: Identity) => {
    setIsEditing(true);
    setFormData({
      id: identity.id,
      name: identity.name,
      type: identity.type,
      gender: identity.gender,
      expertise: identity.expertise,
      bio: identity.bio,
      industry: identity.industry,
      key_person_id: identity.key_person_id,
      assets_summary: identity.assets_summary,
      trust_level: identity.trust_level,
      last_verified_at: identity.last_verified_at,
      authority_score: identity.authority_score,
      verified_badge_url: identity.verified_badge_url,
      metadata:
        typeof identity.metadata === "string"
          ? JSON.parse(identity.metadata)
          : identity.metadata || {},
    });
    setError(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const validatedData = identitySchema.parse(formData);
      const url = isEditing
        ? `/api/identity/${validatedData.id}`
        : "/api/identity";
      const method = isEditing ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Operation failed");
      }

      if (isEditing) {
        setIdentities((prev) =>
          prev.map((id) => (id.id === result.id ? result : id)),
        );
      } else {
        setIdentities((prev) => [result, ...prev]);
      }

      setIsModalOpen(false);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0a0f1d] p-4 rounded-2xl border border-white/5 shadow-2xl">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search identities (ID, Name)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
        <button
          onClick={handleOpenCreate}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          CREATE NEW IDENTITY
        </button>
      </div>

      {/* Identity List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredIdentities.map((id) => (
            <motion.div
              key={id.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all shadow-xl"
            >
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${id.type === "person" ? "bg-blue-500/10 text-blue-400" : "bg-amber-500/10 text-amber-400"} border border-white/5`}
                    >
                      {id.type === "person" ? (
                        <User size={18} />
                      ) : (
                        <Building size={18} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate max-w-[150px]">
                        {id.name}
                      </h3>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        ID: {id.id}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 font-mono">
                      LVL {id.trust_level}
                    </div>
                    {id.last_verified_at && (
                      <div className="flex items-center gap-1 text-[8px] text-emerald-500 font-bold uppercase">
                        <ShieldCheck size={10} />
                        VERIFIED
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-slate-400 line-clamp-2 min-h-[30px]">
                    {id.type === "person" ? id.expertise : id.industry}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="text-[9px] font-mono text-slate-500">
                      Score: {id.authority_score || 0}/100
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEdit(id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title="Edit Identity"
                      >
                        <Edit2 size={14} />
                      </button>
                      <a
                        href={`/v/${id.id}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-colors"
                        title="View Public Profile"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d1221] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    {isEditing ? (
                      <Edit2 className="text-blue-500" size={20} />
                    ) : (
                      <Plus className="text-blue-500" size={20} />
                    )}
                    {isEditing ? "EDIT IDENTITY" : "PROVISION NEW IDENTITY"}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono">
                    {isEditing
                      ? `Modifying: ${formData.id}`
                      : "Global Registry Protocol v5.2"}
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-6 max-h-[70vh] overflow-y-auto modal-scrollbar"
              >
                {error && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-400 text-sm">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ID Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Registry ID
                    </label>
                    <input
                      type="text"
                      disabled={isEditing}
                      value={formData.id}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          id: e.target.value.toUpperCase(),
                        })
                      }
                      placeholder="E.g. UNLK-ID-001"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Full Name / Entity Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Identity Label"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>

                  {/* Type Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Identity Type
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, type: "person" })
                        }
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all ${formData.type === "person" ? "bg-blue-600 border-blue-500 text-white" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"}`}
                      >
                        <User size={14} /> INDIVIDUAL
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, type: "organization" })
                        }
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all ${formData.type === "organization" ? "bg-amber-600 border-amber-500 text-white" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"}`}
                      >
                        <Building size={14} /> ORGANIZATION
                      </button>
                    </div>
                  </div>

                  {/* Trust Level */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Trust Level (1-10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.trust_level}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          trust_level: parseInt(e.target.value),
                        })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Conditional Fields */}
                <div className="space-y-4">
                  {formData.type === "person" ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Expertise
                        </label>
                        <input
                          type="text"
                          value={formData.expertise || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expertise: e.target.value,
                            })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Bio
                        </label>
                        <textarea
                          value={formData.bio || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, bio: e.target.value })
                          }
                          rows={3}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Industry
                        </label>
                        <input
                          type="text"
                          value={formData.industry || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              industry: e.target.value,
                            })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          Assets Summary
                        </label>
                        <textarea
                          value={formData.assets_summary || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              assets_summary: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Authority Score (0-100)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.authority_score}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          authority_score: parseInt(e.target.value),
                        })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Verified Badge URL
                    </label>
                    <input
                      type="text"
                      value={formData.verified_badge_url || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          verified_badge_url: e.target.value,
                        })
                      }
                      placeholder="https://..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-white/5">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 py-3 rounded-xl border border-white/10 text-slate-400 text-sm font-bold hover:bg-white/5 transition-all"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-[2] py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <Save size={18} />
                    )}
                    {isEditing ? "UPDATE IDENTITY" : "CONFIRM PROVISIONING"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
