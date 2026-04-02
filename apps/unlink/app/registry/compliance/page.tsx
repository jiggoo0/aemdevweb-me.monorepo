/** @format */

import { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  ShieldAlert,
  Server,
  FileKey,
  Globe,
  Scale,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `Compliance Center | ${siteConfig.name}`,
  description: "ศูนย์ปฏิบัติการตามมาตรฐานสากล ISO 27001 และ GDPR สำหรับระบบทะเบียนอัตลักษณ์ดิจิทัล UNLINK Registry",
};

export default function CompliancePage() {
  return (
    <div className="pb-24 pt-40">
      <div className="container max-w-6xl mx-auto px-6">
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground text-[10px] font-mono tracking-widest uppercase shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Institutional Compliance Framework
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Compliance <span className="text-primary">Center</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ความมุ่งมั่นในการรักษามาตรฐานความปลอดภัยข้อมูลระดับสากลและการปฏิบัติตามกฎระเบียบข้อบังคับด้านการคุ้มครองข้อมูลส่วนบุคคล
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 mb-24">
          <div className="authority-card p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileCheck size={24} />
              </div>
              <h3 className="text-lg font-bold">ISO 27001</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              มาตรฐานสากลสำหรับการจัดการความปลอดภัยของข้อมูล (ISMS) เพื่อให้มั่นใจว่าข้อมูลในทะเบียนได้รับการปกป้องอย่างสูงสุด
            </p>
          </div>
          <div className="authority-card p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Scale size={24} />
              </div>
              <h3 className="text-lg font-bold">GDPR Ready</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              การปฏิบัติตามข้อกำหนดการคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป (GDPR) ซึ่งเป็นมาตรฐานที่เข้มงวดที่สุดในโลก
            </p>
          </div>
          <div className="authority-card p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-lg font-bold">PDPA Compliance</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ของประเทศไทยอย่างครบถ้วนในทุกมิติ
            </p>
          </div>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight border-b border-border pb-4 mb-8 flex items-center gap-3">
              <Lock className="text-primary" />
              Security Infrastructure
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-foreground">Data Encryption at Rest & Transit</h4>
                  <p className="text-muted-foreground text-sm">ข้อมูลทั้งหมดถูกเข้ารหัสด้วยมาตรฐาน AES-256 เมื่อจัดเก็บ และ TLS 1.3 ระหว่างการรับส่งข้อมูล</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-foreground">Multi-Factor Authentication (MFA)</h4>
                  <p className="text-muted-foreground text-sm">การเข้าถึงระบบบริหารจัดการทะเบียนต้องผ่านการยืนยันตัวตนหลายขั้นตอนเสมอ</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-foreground">Continuous Monitoring</h4>
                  <p className="text-muted-foreground text-sm">ระบบตรวจจับการบุกรุกและตรวจสอบความผิดปกติทำงานตลอด 24 ชั่วโมง (24/7 SOC Monitoring)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight border-b border-border pb-4 mb-8 flex items-center gap-3">
              <Globe className="text-primary" />
              Global Standards Integration
            </h2>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <p className="text-sm leading-relaxed mb-6">
                UNLINK Registry ยึดถือหลักการ "Privacy by Design" และ "Privacy by Default" ในการพัฒนาระบบทุกขั้นตอน เพื่อให้มั่นใจว่าสิทธิความเป็นส่วนตัวของผู้ใช้จะได้รับการคุ้มครองตั้งแต่วันแรกที่เริ่มใช้งาน
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  ISO/IEC 27001:2022 Certified
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  GDPR Article 32 Compliant
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  NIST Cybersecurity Framework
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  SOC 2 Type II Alignment
                </div>
              </div>
            </div>
          </section>

          <div className="mt-20 p-10 rounded-2xl border border-border bg-card text-center">
            <AlertCircle className="mx-auto text-primary mb-6" size={40} />
            <h4 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Compliance Audit</h4>
            <p className="text-lg font-bold mb-6">ต้องการรายงานการตรวจสอบความปลอดภัย (Audit Report)?</p>
            <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
              สำหรับสถาบันการเงินและองค์กรพันธมิตร สามารถขอรับรายงานสรุปการตรวจสอบความปลอดภัยประจำปีได้ผ่านช่องทางติดต่ออย่างเป็นทางการ
            </p>
            <a href={`mailto:compliance@unlink-th.com`} className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm transition-transform hover:scale-105">
              Request Audit Report
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
