/* @identity 9mza */
/** @format */

import { supabase } from "@/lib/supabase";
import {
  ShieldCheck,
  Activity,
  Database,
  Users,
  Briefcase,
  Lock,
} from "lucide-react";
import AdminIdentityManager from "@/components/admin-identity-manager";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  // Fetch stats
  const { count: identityCount } = await supabase
    .from("identities")
    .select("*", { count: "exact", head: true });

  const { data: recentLogs } = await supabase
    .from("audit_logs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  // Fetch all identities for the manager (Phase 3 Scaling)
  const { data: allIdentities } = await supabase
    .from("identities")
    .select("*")
    .order("updated_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Admin Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">
              <Lock size={12} />
              Secure Admin Environment
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
              Identity <span className="text-blue-600">Command</span> Center
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Global Registry Management Protocol v5.2 • Central Control Node
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 shadow-2xl flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                System Operational
              </span>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Identities"
            value={identityCount || 0}
            icon={<Users className="w-5 h-5 text-blue-400" />}
            color="blue"
          />
          <StatCard
            title="Trust Node Status"
            value="Active"
            icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
            color="emerald"
          />
          <StatCard
            title="Registry Health"
            value="Optimal"
            icon={<Activity className="w-5 h-5 text-amber-400" />}
            color="amber"
          />
          <StatCard
            title="Storage Engine"
            value="Supabase + Turso"
            icon={<Database className="w-5 h-5 text-slate-400" />}
            color="slate"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Identity Manager */}
          <div className="lg:col-span-2 space-y-6">
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Users size={20} />
                </div>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                  Identity Registry Manager
                </h2>
              </div>
              <AdminIdentityManager initialIdentities={allIdentities || []} />
            </section>
          </div>

          {/* Sidebar: Audit Logs */}
          <section className="space-y-6">
            <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-500" />
                  Real-time Audit Trail
                </h2>
              </div>
              <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {recentLogs?.map((log) => (
                  <div
                    key={log.id}
                    className="group flex flex-col gap-1.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">
                        [{log.action.replace(/-/g, " ")}]
                      </span>
                      <span className="text-[9px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                        {new Date(log.created_at).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-slate-300">
                      Target: {log.target_table}
                    </p>
                    <div className="text-[9px] font-mono text-slate-500 truncate">
                      ID: {log.target_id}
                    </div>
                  </div>
                ))}
                {(!recentLogs || recentLogs.length === 0) && (
                  <div className="py-20 text-center">
                    <p className="text-slate-500 text-xs italic">
                      No audit logs available yet.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* System Info Card */}
            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-blue-400">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Protocol Notice
                </span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed italic">
                All modifications to the identity registry are cryptographically
                logged and synchronized with the UNLINK-AUDIT Sentinel node.
                Unauthorized attempts to manipulate data will trigger immediate
                node isolation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  const colorMap: any = {
    blue: "from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400",
    emerald:
      "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
    amber:
      "from-amber-500/10 to-amber-600/5 border-amber-500/20 text-amber-400",
    slate:
      "from-slate-500/10 to-slate-600/5 border-slate-500/20 text-slate-400",
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${colorMap[color]} p-6 rounded-2xl border shadow-xl group hover:scale-[1.02] transition-transform`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
          Global Ledger
        </span>
      </div>
      <p className="text-3xl font-black text-white tracking-tighter">{value}</p>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
        {title}
      </p>

      {/* Decorative element */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
    </div>
  );
}
