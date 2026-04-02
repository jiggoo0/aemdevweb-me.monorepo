import { defineAreaNode } from "./node-factory";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard)
import { localAuthorityService } from "../services/local-authority";

export const surinNode = defineAreaNode(localAuthorityService, {
  slug: "surin",
  tier: 2,
  province: "สุรินทร์",
  region: "Northeast",
  priority: 84,
  title: "รับทำเว็บไซต์ สุรินทร์ | โหลดเร็วพิเศษ ยกระดับแบรนด์ผ้าไหมพรีเมียมและข้าวหอมมะลิโลก",
  description:
    "เปลี่ยนภูมิปัญญาผ้าไหมสุรินทร์ให้เป็นแบรนด์ดิจิทัลที่น่าดึงดูด ด้วยดีไซน์ประณีตและระบบจัดการสินค้าที่ทันสมัย",
  heroImage: "/images/areas/universal-node.webp",
  coordinates: { lat: 14.8818, lng: 103.4936 },
  districts: ["เมืองสุรินทร์", "ย่านธุรกิจสำคัญ", "ย่านการค้า"],
  localContext: {
    marketInsight: "ตลาดผู้บริโภคขนาดใหญ่และการค้าชายแดน",
    localStrength:
      "ความเป็น 'เมืองช้าง' และ 'ราชินีผ้าไหม' เป็นจุดขายที่สร้างความเชื่อมั่นได้ทันที",
    nicheIndustries: [
      "วิสาหกิจชุมชนผ้าไหมพรีเมียม",
      "ธุรกิจข้าวหอมมะลิออร์แกนิก",
      "ที่พักสายวัฒนธรรม",
    ],
    technicalApproach:
      "เน้น Image Optimization โชว์ลายผ้าไหมความละเอียดสูง และระบบจัดการแคตตาล็อกสินค้าพรีเมียม",
    painPoints: ["สินค้าพรีเมียมแต่ภาพลักษณ์เว็บดูธรรมดา", "หาช่องทางขายตรงต่างประเทศยาก"],
    competitorLevel: "low",
    socialProof: {
      rating: 5.0,
      reviewCount: 42,
      localClient: "แบรนด์ผ้าไหมยกทองพรีเมียม สุรินทร์",
    },
    regionalPricing: { startPrice: `${localAuthorityService.price} บาท`, timeline: "14-21 วัน" },
  },
  keywords: [
    "วางระบบเว็บไซต์ สุรินทร์",
    "ทำเว็บผ้าไหม สุรินทร์",
    "จ้างทำเว็บสุรินทร์",
    "รับทำ SEO สุรินทร์",
  ],
});
