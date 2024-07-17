import { cn } from "@/src/lib/utils";
import { ClassValue } from "clsx";

const MissionsEmpty = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: ClassValue;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default MissionsEmpty;
