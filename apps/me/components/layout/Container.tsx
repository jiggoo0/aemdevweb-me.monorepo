/** @format */

import { cn } from "@/lib/utils";
import React from "react";

/**
 * ContainerProps
 * ใช้ Generics เพื่อให้ Component เป็น Polymorphic (เปลี่ยนแท็ก HTML ได้)
 * ช่วยเรื่อง Semantic HTML และการวางโครงสร้าง SEO Architecture
 */
interface ContainerProps<T extends React.ElementType> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: T;
}

/**
 * Container Component
 * ควบคุมความกว้างของเนื้อหา (Max-width 1280px) และจัดกึ่งกลาง
 * รองรับการเป็น div, section, article หรือ main ตามความเหมาะสมของเนื้อหา
 */
export default function Container<T extends React.ElementType = "div">({
  children,
  className,
  id,
  as,
  ...props
}: ContainerProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || "div";

  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl", // ควบคุมความกว้างสูงสุด 1280px
        "px-5 sm:px-8 lg:px-12", // ระยะขอบกันขอบจอแต่ละ Device
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
