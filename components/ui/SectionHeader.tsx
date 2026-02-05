import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  titleClassName?: string;
  variant?: "default" | "light";
}

export function SectionHeader({
  title,
  description,
  alignment = "center",
  className,
  titleClassName,
  variant = "default",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        alignment === "center" && "text-center",
        alignment === "left" && "text-left",
        className
      )}
    >
      <h2
        className={cn(
          "text-display-sm md:text-display-md lg:text-display-lg mb-4",
          variant === "default" && "text-primary",
          variant === "light" && "text-white",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            alignment === "center" && "mx-auto",
            variant === "default" && "text-muted",
            variant === "light" && "text-white/80"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
