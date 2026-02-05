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
          "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/30",
          // Variants
          variant === "primary" && [
            "bg-primary text-white hover:bg-primary-700 active:bg-primary-800",
          ],
          variant === "secondary" && [
            "bg-white text-primary border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
          ],
          variant === "ghost" && [
            "text-muted hover:text-primary hover:bg-gray-50",
          ],
          variant === "outline" && [
            "border border-primary/30 text-primary hover:bg-primary hover:text-white",
          ],
          // Sizes - slightly smaller, more refined
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2.5 text-sm",
          size === "lg" && "px-6 py-3 text-base",
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
