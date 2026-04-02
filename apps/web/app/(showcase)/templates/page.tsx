/** @format */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "เทมเพลตเว็บไซต์ธุรกิจ | AEMDEVWEB",
  description: "เลือกชมเทมเพลตเว็บไซต์สำหรับธุรกิจประเภทต่างๆ ที่ออกแบบอย่างมีเอกลักษณ์และพร้อมใช้งาน",
};

export default function TemplatesPage() {
  return (
    <div className="container py-24">
      <h1 className="text-4xl font-bold">Template Showcase</h1>
      <p className="text-lg text-muted-foreground">
        ตัวอย่างเทมเพลตสำหรับธุรกิจของคุณ
      </p>
      {/* List of templates will be rendered here */}
    </div>
  );
}
