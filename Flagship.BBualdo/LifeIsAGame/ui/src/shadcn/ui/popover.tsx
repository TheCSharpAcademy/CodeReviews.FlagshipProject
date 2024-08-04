"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/src/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "constants-[state=open]:animate-in constants-[state=closed]:animate-out constants-[state=closed]:fade-out-0 constants-[state=open]:fade-in-0 constants-[state=closed]:zoom-out-95 constants-[state=open]:zoom-in-95 constants-[side=bottom]:slide-in-from-top-2 constants-[side=left]:slide-in-from-right-2 constants-[side=right]:slide-in-from-left-2 constants-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border border-gray-200 bg-white p-4 text-gray-950 shadow-md outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
