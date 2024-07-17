"use client";

import Link from "next/link";
import MenuLogo from "../shared/MenuLogo";
import links from "@/src/data/nav-links";
import Backdrop from "./Backdrop";

import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";
import { useState } from "react";
import TutorialStepper from "../HowToPlay/TutorialStepper";
import { GiPowerButton } from "react-icons/gi";
import { useRouter } from "next/navigation";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const router = useRouter();

  const navLinks = links.map((link) => (
    <Link key={link.key} href={link.href}>
      <button
        disabled={link.disabled}
        className="btn-menu w-full text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
      >
        {link.title}
      </button>
    </Link>
  ));

  return (
    <>
      <Backdrop />
      <section className="xs:px-4 md:px-[120px]">
        <p className="absolute right-2 top-1 text-sm text-cp-red">
          version: beta 0.5.0
        </p>
        <MenuLogo />
        <motion.div
          variants={fadeIn("right", 0.7, 1, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 text-white"
        >
          <button
            onClick={openModal}
            className="btn-menu text-white hover:border-cp-cyan hover:text-cp-cyan disabled:text-white/50 disabled:hover:border-transparent"
          >
            How to Play
          </button>
          {navLinks}
          {/* TODO: Allow to log out when authentication will be implemented */}
         <button
            className="btn-menu flex items-center gap-2 text-cp-red enabled:hover:border-cp-red enabled:hover:text-cp-red-hover disabled:text-cp-red/50"
            onClick={() => router.push("/login")}
          >
            <GiPowerButton />
            Logout
          </button>
        </motion.div>
      </section>
      <TutorialStepper isOpen={isOpen} closeStepper={closeModal} />
    </>
  );
};

export default MainMenu;
