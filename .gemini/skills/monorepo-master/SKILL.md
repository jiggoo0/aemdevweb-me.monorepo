# Skill: Monorepo Master (The Guardian)

ทักษะระดับ Expert สำหรับการควบคุม ดูแล และขยายระบบ AEM Monorepo 77 จังหวัด

## 🧠 AI Self-Audit Workflow (ห้ามข้าม)

ก่อนส่งมอบงานหรือแก้ไขโค้ด AI ต้องตรวจสอบหัวข้อเหล่านี้:

1. **Type Check:** การแก้ไขกระทบ `AreaNode` หรือไม่? ถ้าใช่ ต้องอัปเดต `node-factory.ts` ด้วย
2. **Facade Check:** มีการเรียก `supabase` โดยตรงไหม? ถ้ามี ต้องย้ายไปไว้ใน `DataRegistry` (@repo/db)
3. **Design Check:** สอดคล้องกับ `docs/DESIGN.md` หรือไม่? (สี OKLCH, ฟอนต์ Geist)
4. **Platform Check:** คำสั่ง build มี `--webpack` หรือไม่?

## 🛠️ Operational Commands

- **Check All:** `pnpm run audit:all`
- **Build Web:** `pnpm --filter web build`
- **Build Me:** `pnpm --filter me build`
- **Build Unlink:** `pnpm --filter unlink-th build`

## 🧱 Standard File Paths

- **Design:** `docs/DESIGN.md`
- **Database:** `docs/DATABASE-SCHEMA.md`
- **Migration:** `packages/db/src/migration_v2.sql`
- **Identity:** `GEMINI.md` (Constitution)

## ⚖️ Policy Enforcement

- **No Hacks:** ห้ามใช้ `as any` ยกเว้นในจุดที่พิสูจน์แล้วว่าจำเป็นสำหรับ WASM Compatibility
- **Single Source:** ข้อมูลจังหวัดต้องมาจาก `@repo/core` หรือ `DataRegistry` เท่านั้น
