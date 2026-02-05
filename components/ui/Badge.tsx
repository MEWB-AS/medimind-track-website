import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variant === "default" && "bg-mint text-primary",
        variant === "success" && "bg-success/10 text-success",
        variant === "outline" && "border border-primary/30 text-primary bg-white",
        className
      )}
    >
      {children}
    </span>
  );
}
