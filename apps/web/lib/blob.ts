/**
 * [ASSET INFRASTRUCTURE]: VERCEL_BLOB_ENGINE v18.0.0 (EDGE_OPTIMIZED)
 * [STRATEGY]: Global Asset Management | Automatic Filename Sanitization | Public Access
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { put, del, list, type PutBlobResult } from "@vercel/blob";

/**
 * @function uploadAsset
 * อัปโหลดไฟล์ขึ้น Vercel Blob พร้อมระบบจัดการความปลอดภัย
 */
export async function uploadAsset(
  pathname: string,
  file: Buffer | ReadableStream | string,
  options = {},
): Promise<PutBlobResult> {
  try {
    return await put(pathname, file, {
      access: "public",
      addRandomSuffix: true, // ป้องกันการอัปโหลดไฟล์ซ้ำชื่อกันแล้วทับกัน
      ...options,
    });
  } catch (error) {
    console.error("❌ [BLOB_UPLOAD_ERROR]:", error);
    throw error;
  }
}

/**
 * @function deleteAsset
 * ลบไฟล์ออกจาก Storage
 */
export async function deleteAsset(url: string): Promise<void> {
  try {
    await del(url);
  } catch (error) {
    console.error("❌ [BLOB_DELETE_ERROR]:", error);
  }
}

/**
 * @function getAllAssets
 * ดึงรายการไฟล์ทั้งหมด (ใช้สำหรับการ Sync ข้อมูล)
 */
export async function getAllAssets() {
  return await list();
}
