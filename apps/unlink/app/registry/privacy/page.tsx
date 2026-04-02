/** @format */

import { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Trash2,
  ShieldAlert,
  Server,
  FileKey,
  ChevronRight,
  Globe,
  Scale,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "นโยบายการรักษาความลับและมาตรฐานการจัดการข้อมูลส่วนบุคคลสำหรับระบบทะเบียนอัตลักษณ์ดิจิทัล UNLINK Registry",
};

export default function PrivacyPage() {
  const lastUpdated = "30 มีนาคม 2026";

  return (
    <div className="pb-24 pt-40">
      <div className="container max-w-6xl mx-auto px-6">
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground text-[10px] font-mono tracking-widest uppercase shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            Registry Compliance Protocol
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Privacy <span className="text-primary">Registry</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            มาตรฐานการคุ้มครองข้อมูลส่วนบุคคลระดับสถาบัน สำหรับการบริหารจัดการทะเบียนอัตลักษณ์ดิจิทัลภายใต้เครือข่าย UNLINK GLOBAL
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 mb-24">
          <div className="authority-card p-10">
            <Lock className="text-primary mb-6" size={32} />
            <h3 className="text-xl font-bold mb-4">Zero-Knowledge Architecture</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              ระบบถูกออกแบบมาเพื่อไม่ให้มีการเก็บข้อมูลดิบที่ระบุตัวตนได้ในลักษณะที่เข้าถึงได้โดยง่าย ข้อมูลทุกอย่างจะถูกเข้ารหัสระดับ AES-256
            </p>
          </div>
          <div className="authority-card p-10">
            <ShieldAlert className="text-primary mb-6" size={32} />
            <h3 className="text-xl font-bold mb-4">Strict Access Control</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              การเข้าถึงฐานข้อมูลทะเบียนจะถูกบันทึก (Audit Log) และจำกัดสิทธิ์เฉพาะเจ้าหน้าที่ระดับสูงที่ได้รับอนุญาตเท่านั้น
            </p>
          </div>
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight border-b border-border pb-4 mb-8">Data Governance Standards</h2>
          
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold text-primary mb-4">1. วัตถุประสงค์การจัดเก็บ</h3>
              <p>UNLINK Registry จัดเก็บข้อมูลเพื่อวัตถุประสงค์ในการยืนยันความถูกต้องของอัตลักษณ์ดิจิทัลและการรับรองสถานะสมาชิกในเครือข่ายเท่านั้น</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">2. ระยะเวลาการเก็บรักษา</h3>
              <p>ข้อมูลในทะเบียนจะถูกเก็บรักษาไว้ตราบเท่าที่สถานะการรับรองยังมีผลบังคับใช้ และจะถูกลบทำลายอย่างถาวรเมื่อมีการยกเลิกสถานะหรือตามคำขอของผู้เป็นเจ้าของข้อมูล</p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-primary mb-4">3. การเปิดเผยข้อมูลต่อบุคคลภายนอก</h3>
              <p>เราจะไม่มีการเปิดเผยข้อมูลในทะเบียนต่อบุคคลภายนอก เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษร หรือเป็นการปฏิบัติตามคำสั่งศาลตามกฎหมายที่เกี่ยวข้อง</p>
            </section>
          </div>

          <div className="mt-20 p-10 rounded-2xl border border-border bg-card text-center">
            <h4 className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Compliance Inquiry</h4>
            <p className="text-lg font-bold mb-6">ติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-primary font-mono font-bold hover:underline">
              {siteConfig.contact.email}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
