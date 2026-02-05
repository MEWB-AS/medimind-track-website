"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
          // Variants
          variant === "primary" && [
            "bg-primary text-white hover:bg-primary-700 active:bg-primary-800",
            "shadow-soft hover:shadow-medium",
          ],
          variant === "secondary" && [
            "bg-white text-primary border-2 border-primary/20 hover:border-primary/40 hover:bg-mint",
            "shadow-soft hover:shadow-medium",
          ],
          variant === "ghost" && [
            "text-primary hover:bg-mint hover:text-primary-700",
          ],
          variant === "outline" && [
            "border-2 border-primary/30 text-primary hover:bg-primary hover:text-white",
          ],
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
