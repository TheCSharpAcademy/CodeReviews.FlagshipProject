import MobileNav from "@/src/components/Interface/shared/MobileNav";
import Navbar from "@/src/components/Interface/shared/Navbar";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileNav />
      {children}
    </>
  );
}
