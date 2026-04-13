import * as fs from 'fs';
import * as path from 'path';

// 1. ตั้งค่าตัวแปร (ปรับเปลี่ยนได้ตามต้องการ)
const OUTPUT_FILE = 'LLM-CONTEXT.md';

// โฟลเดอร์หรือไฟล์ที่ต้องการดึงข้อมูล (เน้นเฉพาะแกนหลักของโปรเจ็กต์)
const TARGET_PATHS = [
  'docs',
  'packages/core/src/types',
  'packages/ui/src/components',
  'packages/seo/src/schemas.ts',
  'db/migrations/schema.sql',
  'turbo.json',
  'apps/web/package.json'
];

// โฟลเดอร์ที่ต้องการละเว้นเพื่อไม่ให้ไฟล์ใหญ่เกินไป
const IGNORE_DIRS = ['node_modules', '.next', 'dist', 'build', '.git', 'public'];

// นามสกุลไฟล์ที่อนุญาตให้อ่าน
const ALLOWED_EXTENSIONS = ['.ts', '.tsx', '.md', '.json', '.sql'];

// 2. ฟังก์ชันสำหรับอ่านไฟล์แบบ Recursive
function walkSync(currentDirPath: string, callback: (filePath: string) => void) {
  if (!fs.existsSync(currentDirPath)) return;

  const stat = fs.statSync(currentDirPath);
  if (stat.isFile()) {
    callback(currentDirPath);
    return;
  }

  fs.readdirSync(currentDirPath).forEach((name) => {
    const filePath = path.join(currentDirPath, name);
    const isDir = fs.statSync(filePath).isDirectory();

    if (isDir && IGNORE_DIRS.includes(name)) return; // ข้ามโฟลเดอร์ที่ไม่อยากได้

    if (isDir) {
      walkSync(filePath, callback);
    } else {
      const ext = path.extname(filePath);
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        callback(filePath);
      }
    }
  });
}

// 3. เริ่มกระบวนการดึงข้อมูล
function generateContext() {
  console.log('🚀 กำลังสร้างไฟล์ Context สำหรับ LLM...');
  
  // ลบไฟล์เก่าทิ้งถ้ามี
  if (fs.existsSync(OUTPUT_FILE)) {
    fs.unlinkSync(OUTPUT_FILE);
  }

  const writeStream = fs.createWriteStream(OUTPUT_FILE, { flags: 'a' });
  writeStream.write('# Project Context for LLM\n\n');
  writeStream.write('เอกสารนี้รวบรวมโครงสร้างและโค้ดที่สำคัญของโปรเจ็กต์เพื่อใช้เป็นบริบทอ้างอิง\n\n');

  TARGET_PATHS.forEach((targetPath) => {
    const fullPath = path.resolve(__dirname, '..', targetPath); // อ้างอิงจากโฟลเดอร์ root
    
    walkSync(fullPath, (filePath) => {
      const relativePath = path.relative(path.resolve(__dirname, '..'), filePath);
      const content = fs.readFileSync(filePath, 'utf8');
      const ext = path.extname(filePath).replace('.', ''); // เอาจุดออกสำหรับ Markdown code block

      // เขียนชื่อไฟล์และเนื้อหาลงไปในไฟล์ปลายทาง
      writeStream.write(`## File: \`${relativePath}\`\n\n`);
      writeStream.write(`\`\`\`${ext}\n`);
      writeStream.write(content);
      writeStream.write('\n\`\`\`\n\n');
    });
  });

  writeStream.end();
  console.log(`✅ สร้างไฟล์สำเร็จแล้วที่: ${OUTPUT_FILE}`);
}

generateContext();
