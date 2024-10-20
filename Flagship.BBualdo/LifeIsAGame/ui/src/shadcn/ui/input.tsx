import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        autoComplete="off"
        className={cn(
          "flex w-full border border-cp-cyan bg-cp-cyan/20 p-2 text-base font-extrabold text-cp-cyan ring-offset-cp-cyan file:border-0 file:bg-transparent file:text-base file:font-extrabold file:text-cp-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
