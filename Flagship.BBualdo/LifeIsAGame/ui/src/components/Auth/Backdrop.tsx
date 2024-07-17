"use client";

import useUser from "@/src/utils/useUser";
import { motion } from "framer-motion";

const Backdrop = () => {
  useUser();

  return (
    <motion.video
      autoPlay
      loop
      muted
      initial={{ filter: "blur(0px)", opacity: 1 }}
      animate={{ filter: "blur(8px)", opacity: 0.7 }}
      aria-hidden
      className="fixed bottom-0 top-0 z-[-10] min-h-screen w-full bg-black object-cover"
    >
      <source src="/assets/images/rog.webm" type="video/webm" />
    </motion.video>
  );
};

export default Backdrop;
