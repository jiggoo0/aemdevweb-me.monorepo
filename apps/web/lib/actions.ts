"use cache";

import { cacheLife } from "next/dist/server/use-cache/cache-life";

/**
 * [ACTION]: Get Cached Industries Data
 * ใช้ "use cache" เพื่อจัดเก็บข้อมูลโครงสร้างอุตสาหกรรมไว้ในระดับ Server
 * ช่วยลดเวลาการประมวลผลหน้าแรกให้เหลือระดับมิลลิวินาที
 */
export async function getCachedIndustries() {
  // กำหนดอายุของ Cache (เช่น 1 วัน หรือจนกว่าจะมีการอัปเดตระบบ)
  cacheLife("weeks");

  return [
    {
      id: "corporate",
      name: "Corporate",
      color: "blue",
      oklch: "oklch(0.546 0.245 262.881)", // Trust Blue
      title: "Global Enterprise Architecture.",
      description:
        "สถาปัตยกรรมดิจิทัลสำหรับองค์กรขนาดใหญ่ที่เน้นความมั่นคง และการประมวลผลข้อมูลระดับวินาที",
      features: ["Entity Identity Verified", "Multi-Region SSR", "Governance Ready"],
      metrics: { label: "Performance_Score", value: "99/100" },
    },
    {
      id: "hospitality",
      name: "Hospitality",
      color: "emerald",
      oklch: "oklch(0.627 0.194 149.214)", // Success Emerald
      title: "Ambient Guest Experience.",
      description:
        "สร้างความประทับใจตั้งแต่แรกเห็นด้วยดีไซน์ที่เน้นอารมณ์ ควบคู่กับระบบจองที่รวดเร็วไร้รอยต่อ",
      features: ["Cinematic Narrative", "Fluid Booking Engine", "Visual Storytelling"],
      metrics: { label: "Conversion_Lift", value: "+42%" },
    },
    {
      id: "industrial",
      name: "Industrial",
      color: "orange",
      oklch: "oklch(0.6 0.2 45)", // Industrial Orange
      title: "Supply Chain Authority.",
      description:
        "ระบบบริหารจัดการข้อมูลสินค้าและ SEO รายพื้นที่ เพื่อยึดครองส่วนแบ่งการตลาดในภูมิภาค",
      features: ["P-SEO Local Dominance", "Inventory Intelligence", "B2B Lead Engine"],
      metrics: { label: "Local_Visibility", value: "Top 3" },
    },
    {
      id: "governance",
      name: "Governance",
      color: "purple",
      oklch: "oklch(0.5 0.2 300)", // Royal Purple
      title: "Institutional Transparency.",
      description:
        "แพลตฟอร์มสารสนเทศระดับท้องถิ่นที่เน้นความโปร่งใส การเข้าถึงข้อมูลที่ง่าย และความปลอดภัยสูงสุด",
      features: ["Public Data Integrity", "Accessibility AA Standard", "Secure Public Ledger"],
      metrics: { label: "Trust_Index", value: "A+ Verified" },
    },
  ];
}
