"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "focus-visible:ring-brand-primary inline-flex items-center justify-center gap-2 rounded-[var(--radius-button,0.75rem)] text-sm font-bold whitespace-nowrap transition-all duration-300 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "shadow-glow bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-fg)] hover:brightness-110",
        neo: "shadow-glow hover:shadow-pro bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-fg)] hover:translate-y-[-2px]",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-offset)]",
        secondary:
          "bg-[var(--surface-offset)] text-[var(--text-primary)] hover:bg-[var(--border)]/50",
        ghost:
          "text-[var(--text-secondary)] hover:bg-[var(--surface-offset)] hover:text-[var(--text-primary)]",
        link: "text-[var(--color-brand-primary)] underline-offset-4 hover:underline",
        specialist:
          "border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-[1rem] px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// [PATCH]: Unified Props to handle Button, Anchor, and Link safely
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const isExternal =
      href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:");

    if (href) {
      const commonProps = {
        className: cn(buttonVariants({ variant, size, className })),
        children: props.children,
      };

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...commonProps}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        );
      }

      return <Link href={href} {...commonProps} {...(props as Record<string, unknown>)} />;
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
