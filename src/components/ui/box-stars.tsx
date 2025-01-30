import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";

interface BoxStartProps {
  className?: string;
  classNameStars?: string;
}

export const BoxStars: React.FC<BoxStartProps> = ({
  className,
  classNameStars,
}) => {
  const classNameStart = cn(
    "absolute h-6 w-6 dark:text-white text-black opacity-0 group-hover:opacity-100 z-50",
    classNameStars,
  );

  return (
    <div className={cn(className)}>
      <Plus className={cn(classNameStart, "-top-3 -left-3")} />
      <Plus className={cn(classNameStart, "-bottom-3 -left-3")} />
      <Plus className={cn(classNameStart, "-top-3 -right-3")} />
      <Plus className={cn(classNameStart, "-bottom-3 -right-3")} />
    </div>
  );
};
