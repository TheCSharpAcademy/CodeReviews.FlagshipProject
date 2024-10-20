"use client";

import Logo from "../shared/Logo";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/fadeIn";

const Step1 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        translate: -100 * (currentStep - 1) + "%",
      }}
      className="transition-translate flex h-[300px] w-full flex-col overflow-x-auto duration-500"
    >
      <motion.div
        variants={fadeIn("", 0.2, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <Logo className="animate-[pulse_3s_ease-in-out_infinite] xs:h-[80px] xs:w-[80px] lg:h-[100px] lg:w-[100px]" />
        <div className="flex w-full flex-col items-center gap-2">
          <h2 className="text-center uppercase text-white xs:text-xl lg:text-3xl">
            Welcome to{" "}
            <span className="font-bold text-cp-cyan">Life is a Game</span>!
          </h2>
          <p className="text-center font-bold text-cp-red xs:text-lg lg:w-1/2 lg:text-xl">
            Here you can bring your life skills to new levels (literally) by
            completing missions given to you by yourself!
          </p>
          <p className="text-center font-bold text-white xs:text-lg lg:w-1/2 lg:text-xl">
            This module will show you what to do to get started.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step1;
