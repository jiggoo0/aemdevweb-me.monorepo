"use client";

import { ProtectedRoute, UserMenu } from "@repo/ui";
import Link from "next/link";
import { ChevronLeft, ShieldCheck, Activity, Search, FileText } from "lucide-react";

export default function AuditPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#050505] text-white">
        {/* Nav */}
        <nav className="p-6 border-b border-gray-900 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
            Back to Portal
          </Link>
          <UserMenu />
        </nav>

        <div className="container mx-auto px-6 py-12">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-blue-500 mb-4">
              <ShieldCheck size={40} />
              <h1 className="text-4xl font-black uppercase tracking-tighter">Unlink Audit</h1>
            </div>
            <p className="text-gray-400 max-w-2xl">
              ระบบบริหารจัดการความปลอดภัยและตรวจสอบความสมบูรณ์ของระบบนิเวศ UNLINK-TH
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl">
              <Activity className="text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">System Status</h3>
              <p className="text-sm text-gray-500">
                ตรวจสอบสถานะการเชื่อมต่อและประสิทธิภาพของ API ทั่วทั้งระบบ
              </p>
            </div>
            <div className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl">
              <Search className="text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Entity Scanner</h3>
              <p className="text-sm text-gray-500">
                ค้นหาและวิเคราะห์ตัวตนดิจิทัลที่ถูกสร้างขึ้นในระบบนิเวศ
              </p>
            </div>
            <div className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl">
              <FileText className="text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Case Management</h3>
              <p className="text-sm text-gray-500">
                จัดการเอกสารและเหตุการณ์ทางกฎหมาย (PDPA Enforcement)
              </p>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
