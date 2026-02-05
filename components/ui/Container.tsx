import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        size === "default" && "max-w-container",
        size === "narrow" && "max-w-content",
        size === "wide" && "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
