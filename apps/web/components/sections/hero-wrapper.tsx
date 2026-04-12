import { getCachedIndustries } from "@/lib/actions";
import { HeroAndShowcase } from "./hero-showcase";

/**
 * [SERVER_COMPONENT]: HeroWrapper
 * ทำหน้าที่ดึงข้อมูลที่ถูก Cache ไว้จาก Server แล้วส่งต่อให้ Client Component
 * สอดคล้องกับมาตรฐาน "use cache" ของ Next.js 16
 */
export async function HeroWrapper() {
  await getCachedIndustries();

  return <HeroAndShowcase   />;
}
