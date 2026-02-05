import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export function StatCard({
  value,
  label,
  description,
  icon,
  className,
  variant = "default",
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl text-center",
        variant === "default" && "bg-white shadow-soft",
        variant === "dark" && "bg-white/10 backdrop-blur-sm",
        className
      )}
    >
      {icon && (
        <div
          className={cn(
            "w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center",
            variant === "default" && "bg-mint text-primary",
            variant === "dark" && "bg-white/20 text-white"
          )}
        >
          {icon}
        </div>
      )}
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold mb-2",
          variant === "default" && "text-primary",
          variant === "dark" && "text-white"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "text-sm font-medium mb-1",
          variant === "default" && "text-primary",
          variant === "dark" && "text-white/90"
        )}
      >
        {label}
      </div>
      {description && (
        <p
          className={cn(
            "text-sm",
            variant === "default" && "text-muted",
            variant === "dark" && "text-white/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
