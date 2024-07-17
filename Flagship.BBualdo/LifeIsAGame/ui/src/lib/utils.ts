import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function format(date: Date) {
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  return day + " " + month + " " + year;
}
