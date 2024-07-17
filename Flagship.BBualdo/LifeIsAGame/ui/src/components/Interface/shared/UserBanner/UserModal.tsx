"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";

const UserModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      className="absolute border-2 border-cp-cyan bg-black xs:max-lg:-top-12 xs:max-lg:right-0 lg:-bottom-14 lg:w-full"
    >
      {/* TODO: Allow to log out when authentication will be implemented */}
      <Link href="/login">
        <button className="flex h-full w-full items-center gap-2 p-2 text-xl uppercase text-cp-red transition-all duration-300 hover:bg-cp-cyan/20">
          <GiPowerButton /> Logout
        </button>
      </Link>
    </motion.div>
  );
};

export default UserModal;
