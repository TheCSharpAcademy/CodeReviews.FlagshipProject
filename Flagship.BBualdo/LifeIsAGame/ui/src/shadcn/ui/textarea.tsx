import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex max-h-[200px] min-h-[80px] w-full border border-cp-cyan bg-cp-cyan/20 p-2 text-base font-extrabold text-cp-cyan ring-offset-cp-cyan placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
