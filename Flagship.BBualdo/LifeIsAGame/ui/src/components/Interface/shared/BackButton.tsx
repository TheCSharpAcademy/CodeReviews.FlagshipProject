"use client";

import { cn } from "@/src/lib/utils";
import { fadeIn } from "@/src/utils/fadeIn";
import { ClassValue } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowBigLeftDash } from "react-icons/lu";

const BackButton = ({ className }: { className: ClassValue }) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-3/5"
    >
      <Link href="/">
        <button
          className={cn("text-4xl transition-all duration-200", className)}
        >
          <LuArrowBigLeftDash />
        </button>
      </Link>
    </motion.div>
  );
};

export default BackButton;
