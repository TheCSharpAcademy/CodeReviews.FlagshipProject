"use client";

import { motion } from "framer-motion";
import { GiPowerButton } from "react-icons/gi";
import logout from "@/src/utils/logout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const UserModal = ({ closeModal }: { closeModal: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      className="absolute border-2 border-cp-cyan bg-black xs:max-lg:-top-12 xs:max-lg:right-0 lg:-bottom-14 lg:w-full"
      ref={ref}
    >
      <button
        onClick={async () => await logout(dispatch, router)}
        className="flex h-full w-full items-center gap-2 p-2 text-xl uppercase text-cp-red transition-all duration-300 hover:bg-cp-cyan/20"
      >
        <GiPowerButton /> Logout
      </button>
    </motion.div>
  );
};

export default UserModal;
