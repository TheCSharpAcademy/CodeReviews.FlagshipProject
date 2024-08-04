import { cn } from "@/src/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

const MissionsEmpty = ({
  children,
  className,
}: {
  children: ReactNode;
  className: ClassValue;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default MissionsEmpty;
