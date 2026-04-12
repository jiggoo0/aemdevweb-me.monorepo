import { cacheLife, cacheTag } from "next/cache";
import { DataRegistry } from "@repo/db";

/**
 * [CACHED_FETCH]: getProvinceData
 * ดึงข้อมูลคอนเทนต์จังหวัดจาก DB พร้อมระบบแคชระดับ Next.js 16
 */
export async function getCachedProvinceData(province: string) {
  "use cache";
  cacheTag("province-data", `province-${province}`);
  cacheLife("days");

  try {
    console.log(`[Cache Miss] Attempting to fetch data for province: ${province}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = (await DataRegistry.getProvinceData(province)) as any;

    if (!result || !result.data) {
      throw new Error("Empty data returned from registry");
    }

    return result.data;
  } catch {
    console.warn(
      `[Data Recovery] Failed to fetch live data for ${province}, activating architectural fallback.`,
    );

    // 🎨 Creative Fallback: Return a structured standard data based on province name
    return {
      title: `สถาปัตยกรรมเว็บไซต์และยุทธศาสตร์ SEO ชั้นนำใน ${province.toUpperCase()}`,
      content: `<p>เราพร้อมส่งมอบโครงสร้างพื้นฐานดิจิทัลที่ปรับแต่งมาเพื่อธุรกิจในพื้นที่ ${province} โดยเฉพาะ เพื่อยึดครองอันดับในการค้นหาและสร้างความน่าเชื่อถือระดับสถาบัน</p>`,
      metadata: {
        description: `ยกระดับธุรกิจใน ${province} ด้วยระบบ P-SEO และสถาปัตยกรรม Next.js 16 จาก AEM DEVWEB`,
      },
    };
  }
}
