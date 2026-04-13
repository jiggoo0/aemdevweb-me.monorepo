import { cacheLife, cacheTag } from "next/cache";
import { DataRegistry } from "@repo/db";

/**
 * [TYPE]: ProvinceData
 * โครงสร้างข้อมูลมาตรฐานสำหรับหน้าจังหวัด (ยึดตาม DB Schema)
 */
export interface ProvinceData {
  title: string;
  content: string;
  metadata: {
    description: string;
  };
  source: "database" | "fallback"; // 🛠️ เพิ่มสถานะที่มาของข้อมูล
}

/**
 * [CACHED_FETCH]: getProvinceData
 * ดึงข้อมูลคอนเทนต์จังหวัดจาก DB พร้อมระบบแคชระดับ Next.js 16
 */
export async function getCachedProvinceData(province: string): Promise<ProvinceData> {
  "use cache";
  cacheTag("province-data", `province-${province}`);
  cacheLife("days");

  try {
    const result = await DataRegistry.getProvinceData(province);

    if (!result || !result.data) {
      throw new Error(`Data missing for province: ${province}`);
    }

    // [TYPE_SAFE]: แปลงข้อมูลให้เป็นโครงสร้างมาตรฐาน และตรวจสอบความถูกต้อง
    const rawData = result.data as Record<string, unknown>;

    const title = String(rawData.title || `สถาปัตยกรรมเว็บไซต์ใน ${province}`);
    const content =
      typeof rawData.content === "string" ? rawData.content : JSON.stringify(rawData.content || ""); // Safe string conversion

    const metadata = (rawData.metadata as Record<string, unknown>) || {};

    return {
      title,
      content,
      metadata: {
        description: String(metadata.description || `บริการ SEO ใน ${province}`),
      },
      source: rawData.is_fallback ? "fallback" : "database",
    };
  } catch (err) {
    // 📢 Fallback Monitoring (Simulated)
    console.error(`[Data Integrity] Fallback activated for ${province}. Cause:`, err);

    return {
      title: `สถาปัตยกรรมเว็บไซต์และยุทธศาสตร์ SEO ชั้นนำใน ${province.toUpperCase()}`,
      content: `<p>เราพร้อมส่งมอบโครงสร้างพื้นฐานดิจิทัลที่ปรับแต่งมาเพื่อธุรกิจในพื้นที่ ${province} โดยเฉพาะ</p>`,
      metadata: {
        description: `ยกระดับธุรกิจใน ${province} ด้วยระบบ P-SEO และสถาปัตยกรรม Next.js 16 จาก AEM DEVWEB`,
      },
      source: "fallback",
    };
  }
}
