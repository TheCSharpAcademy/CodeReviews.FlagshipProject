"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import useUser from "@/src/utils/useUser";
import { motion } from "framer-motion";

const Backdrop = () => {
  useUser();

  return (
    <motion.video
      autoPlay
      loop
      muted
      variants={fadeIn("", 1.5, 0.7, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      aria-hidden
      className="fixed bottom-0 top-0 z-[-10] min-h-screen w-full bg-black object-cover blur-[8px]"
    >
      <source src="/assets/images/night-city.webm" type="video/webm" />
    </motion.video>
  );
};

export default Backdrop;
