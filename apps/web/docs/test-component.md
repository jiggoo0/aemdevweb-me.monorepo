# TestComponent

`TestComponent` เป็นคอมโพเนนต์พื้นฐานสำหรับทดสอบการทำงานของระบบ Gemini CLI ในส่วนของเครื่องมือและทักษะต่าง ๆ (Skills & Commands)

## รายละเอียด
คอมโพเนนต์นี้ทำหน้าที่แสดงผลหัวข้อ (Title) และตัวนับ (Counter) ที่สามารถเพิ่มค่าได้เมื่อคลิกปุ่ม

## Props
- `title`: ข้อความที่จะแสดงเป็นหัวข้อของคอมโพเนนต์

## การใช้งาน
<!-- prettier-ignore -->
> [!NOTE]
> คอมโพเนนต์นี้ถูกสร้างขึ้นเพื่อวัตถุประสงค์ในการทดสอบเท่านั้น

```tsx
import { TestComponent } from './components/TestComponent';

const App = () => {
  return <TestComponent title="Hello Gemini" />;
};
```
