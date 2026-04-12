import React from "react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

/**
 * [UI COMPONENT]: ServiceCard
 * [DESIGN]: Institutional Authority Style
 */
export const ServiceCard = ({ title, description, icon, href, className }: ServiceCardProps) => {
  return (
    <a href={href} className={cn("authority-card group block no-underline", className)}>
      <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
        {/* Render icon directly or wrap it to ensure type safety */}
        <div className="size-8">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors duration-300 tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-light">{description}</p>
    </a>
  );
};
