"use client";

import Link from "next/link";
import { arcade } from "@/src/fonts";
import { usePathname } from "next/navigation";
import links from "@/src/constants/nav-links";
import clsx from "clsx";
import UserBanner from "./UserBanner/UserBanner";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = links.map((link) => (
    <Link key={link.key} href={link.href}>
      <button
        className={clsx(
          "border-b-2 px-4 py-4 text-xl transition-all duration-200 disabled:border-gray-500 disabled:text-gray-500",
          {
            "border-cp-cyan text-cp-cyan shadow-cp-cyan text-shadow-lg":
              link.href === pathname,
            "border-cp-red text-cp-red hover:border-cp-cyan/50 enabled:hover:text-cp-cyan/50":
              link.href !== pathname,
          },
        )}
        disabled={link.disabled}
      >
        {link.title}
      </button>
    </Link>
  ));

  return (
    <nav className="relative flex min-h-[50px] w-full items-center justify-center border-b border-cp-red/20 bg-black px-4">
      <Link
        href="/"
        className="group absolute flex items-center gap-2 transition-all duration-200 hover:scale-105 xs:max-lg:top-0 lg:left-4"
      >
        <Logo className="h-[50px] w-[50px] transition-all duration-200 group-hover:brightness-125" />
        <h1 className={`${arcade.className} text-cp-red`}>LiaG</h1>
      </Link>

      <div className="flex items-center justify-center gap-1 text-white xs:max-lg:hidden">
        {navLinks}
      </div>
      <div className="absolute right-4 xs:max-lg:hidden">
        <UserBanner />
      </div>
    </nav>
  );
};

export default Navbar;
