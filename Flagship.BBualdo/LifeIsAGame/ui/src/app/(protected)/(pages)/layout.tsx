import MobileNav from "@/src/components/Interface/shared/MobileNav";
import Navbar from "@/src/components/Interface/shared/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MobileNav />
      {children}
    </>
  );
}
