"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalBackdrop from "./ModalBackdrop";
import { motion } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@/src/lib/utils";

const Modal = ({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  className: ClassValue[];
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return mounted && isOpen
    ? createPortal(
        <div
          className={cn(
            "fixed bottom-0 top-0 z-50 flex w-full items-center justify-center",
            className[1],
          )}
        >
          <ModalBackdrop />
          <motion.div
            initial={{ width: "0vw" }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className={cn(
              "z-50 max-h-[90vh] overflow-y-auto border-2 py-4 xs:px-4 lg:mx-20 lg:px-10",
              className,
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
