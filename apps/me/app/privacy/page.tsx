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
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description: `นโยบายความเป็นส่วนตัวและมาตรฐานการจัดการข้อมูลส่วนบุคคลของ ${siteConfig.fullName} (9mza)`,
};

export default function PrivacyPage() {
  const lastUpdated = "30 มีนาคม 2026";

  const protocols = [
    {
      title: "Non-Disclosure Policy",
      description: "ข้อมูลทุกอย่างที่ระบุในระหว่างการปรึกษา จะถูกเก็บเป็นความลับสูงสุดภายใต้สัญญา NDA ทันที",
      icon: EyeOff,
    },
    {
      title: "Data Destruction Protocol",
      description: "นโยบายทำลายข้อมูลทันทีหลังจบโปรเจกต์ เพื่อป้องกันการตกค้างของข้อมูลในระบบนิเวศดิจิทัล",
      icon: Trash2,
    },
    {
      title: "Encrypted Communication",
      description: "การรับส่งข้อมูลทั้งหมดดำเนินการผ่านช่องทางที่มีการเข้ารหัสมาตรฐานระดับสากล",
      icon: Lock,
    },
  ];

  return (
    <div className="pb-24 pt-32">
      <Container>
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:bg-blue-600/10 dark:text-blue-400">
            <ShieldCheck size={14} /> Privacy & Protection
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Privacy <span className="text-blue-600 italic">Policy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-slate-500 dark:text-slate-400">
            เพราะความน่าเชื่อถือเริ่มต้นที่ความลับ เราจึงวางระบบจัดการข้อมูลที่เข้มงวดที่สุดเพื่อปกป้องสิทธิส่วนบุคคลตามมาตรฐาน PDPA และ GDPR
          </p>
          <div className="mt-8 flex gap-4 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            <span>ID: AEM-PRIV-2026</span>
            <span>Updated: {lastUpdated}</span>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {protocols.map((p, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-white/5 dark:bg-white/5">
              <div className="mb-8 w-fit rounded-2xl bg-blue-50 p-3 dark:bg-blue-600/10">
                <p.icon className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">{p.description}</p>
            </div>
          ))}
        </div>

        <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Unified Data Protection Standard</h2>
          <p className="text-lg mb-12">
            {siteConfig.fullName} ในฐานะผู้ควบคุมข้อมูลส่วนบุคคล ยึดถือจริยธรรมดิจิทัลในการจัดการข้อมูลสูงสุด 
            นโยบายฉบับนี้คือพันธสัญญาในการคุ้มครองสิทธิความเป็นส่วนตัวของท่าน
          </p>

          <div className="space-y-12">
            <section>
              <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                <Globe className="text-blue-600" size={20} /> 1. มาตรฐานสากล
              </h3>
              <p>เราปฏิบัติตาม PDPA (ประเทศไทย) และยึดถือหลักการ GDPR (EU) เพื่อความปลอดภัยสูงสุดของข้อมูล</p>
            </section>

            <section>
              <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                <Server className="text-blue-600" size={20} /> 2. การจัดเก็บข้อมูล
              </h3>
              <p>เราจัดเก็บข้อมูลเท่าที่จำเป็น (Data Minimization) เพื่อใช้ในการดำเนินงานด้านเทคนิคและยืนยันตัวตนเท่านั้น</p>
            </section>

            <section>
              <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
                <Scale className="text-blue-600" size={20} /> 3. สิทธิของท่าน
              </h3>
              <p>ท่านมีสิทธิในการเข้าถึง แก้ไข และขอให้ลบข้อมูล (Right to be Forgotten) ได้ทุกเมื่อผ่านช่องทางติดต่อทางการ</p>
            </section>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white dark:bg-blue-600">
            <h4 className="text-lg font-bold mb-2">Security Contact</h4>
            <p className="text-slate-300 dark:text-blue-50 mb-4">หากมีข้อสงสัยเกี่ยวกับความปลอดภัยข้อมูล กรุณาติดต่อ:</p>
            <code className="bg-white/10 px-4 py-2 rounded-lg font-mono text-sm">{siteConfig.email}</code>
          </div>
        </article>
      </Container>
    </div>
  );
}
