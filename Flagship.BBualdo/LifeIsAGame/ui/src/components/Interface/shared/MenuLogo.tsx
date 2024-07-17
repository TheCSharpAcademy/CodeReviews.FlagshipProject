"use client";

import { arcade } from "@/src/fonts";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";
import Logo from "./Logo";

const MenuLogo = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.7, 1, 1.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <Logo className="xs:max-md:h-[60px] xs:max-md:w-[60px]" />
      <h1 className={`${arcade.className} text-cp-red xs:text-3xl md:text-5xl`}>
        LiaG
      </h1>
    </motion.div>
  );
};

export default MenuLogo;
