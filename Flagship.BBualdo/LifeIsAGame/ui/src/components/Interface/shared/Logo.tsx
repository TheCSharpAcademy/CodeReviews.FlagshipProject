import { cn } from "@/src/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";

const Logo = ({ className }: { className: ClassValue }) => {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="Gamepad Logo"
      width={100}
      height={100}
      priority
      className={cn(className)}
    />
  );
};

export default Logo;
