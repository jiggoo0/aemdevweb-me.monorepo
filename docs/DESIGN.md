# AEM Monorepo Design System (v4.0.0)

เอกสารนี้กำหนดมาตรฐานการออกแบบ (Design System) สำหรับโปรเจกต์ในเครือ AEM Ecosystem เพื่อให้ AI Agent สามารถเจนหน้าเว็บที่ pixel-perfect และสอดคล้องกัน

---

## 1. Visual Theme & Atmosphere
- **Core Mood:** Institutional Authority, Professional Trust, High-end Craftsmanship.
- **Atmosphere:** Cinematic Dark (Unlink), Clean Editorial (Me), Corporate Precision (Web).
- **Density:** Spacious with high legibility.

---

## 2. Color Palette & Roles (OKLCH Standard)

### 🏛️ Institutional Core (Unlink-TH)
- **Primary:** `oklch(0.546 0.245 262.881)` - Trust Blue
- **Background:** `oklch(0.05 0 0)` - Void Black
- **Surface:** `oklch(0.08 0 0)` - Deep Gray

### 💼 Identity Core (Me)
- **Primary:** `oklch(0.21 0.006 285.885)` - Professional Slate
- **Accent:** `oklch(0.446 0.03 256.802)` - Expert Gray

### 🌐 Global Status
- **Success:** `oklch(0.627 0.194 149.214)`
- **Error:** `oklch(0.577 0.245 27.325)`

---

## 3. Typography Rules
- **Sans-serif:** `Geist Sans`, `Inter`, `system-ui`
- **Monospace:** `Geist Mono`, `JetBrains Mono` (ใช้สำหรับ Site ID และ Technical Data)
- **Scale:**
  - `Display:` 8xl (Black tracking-tighter) - สำหรับชื่อจังหวัด/หัวข้อหลัก
  - `Heading:` 2xl (Bold) - สำหรับ Section Headers
  - `Body:` base (Light/Regular) - สำหรับเนื้อหา

---

## 4. Component Stylings

### 🛡️ Glass Cards (Glassmorphism)
- **Standard:** `bg-white/5 backdrop-blur-2xl border-white/10`
- **Hover:** `border-primary/30 -translate-y-1 transition-all`

### 🔘 Buttons
- **Premium:** OKLCH Linear Gradient, high-contrast text.
- **Glass:** Transparent background, heavy backdrop blur, subtle border.

---

## 5. Layout Principles
- **Grid:** 12-column system, max-width 6xl (1152px).
- **Spacing:** Factor of 4 (4, 8, 16, 24, 32, 40, 64, 80).
- **P-SEO Pattern:** Hero -> Network Grid -> Strategic Content -> Conversion Form.

---

## 6. Depth & Elevation
- **Level 0:** Base background with `tech-grid` radial pattern.
- **Level 1:** Cards with subtle 1px border.
- **Level 2:** Modals/Overlays with heavy 2xl shadow and high blur.

---

## 7. Agent Prompt Guide
**เมื่อสั่งให้ AI สร้างหน้าใหม่:**
> "Build a page using the AEM DESIGN.md standards. Focus on OKLCH colors, Geist typography, and high-end Glassmorphism cards. Apply the `tech-grid` background and maintain Institutional Authority mood."
