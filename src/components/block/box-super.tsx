import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CardDescription } from "../ui/card";
import React from "react";
import { cn } from "@/lib/utils";

export const BoxSuper = ({
  icon,
  title,
  description,
  className,
  classNameTitle,
  classNameDesc,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description?: string | null;
  className?: string;
  classNameDesc?: string;
  classNameTitle?: string;
  children?: React.ReactNode;
}) => {
  const Icon = icon;
  return (
    <div className={cn(className, "mb-4 md:mb-7 lg:mb-6")}>
      <div className="flex items-center gap-3">
        <Button size="icon">
          <Icon />
        </Button>
        <h2
          className={cn(
            classNameTitle,
            "text-2xl font-bold tracking-tight sm:text-3xl",
          )}
        >
          {title}
        </h2>
      </div>
      {description === null ? (
        ""
      ) : (
        <CardDescription className={cn(classNameDesc, "mt-4")}>
          {description}
        </CardDescription>
      )}
      <>{children}</>
    </div>
  );
};
