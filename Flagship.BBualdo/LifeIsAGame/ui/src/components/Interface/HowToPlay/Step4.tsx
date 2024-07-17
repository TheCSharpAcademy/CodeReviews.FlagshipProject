"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Step4 = ({ currentStep }: { currentStep: number }) => {
  return (
    <div
      style={{
        transform: `translateX(-${100 * (currentStep - 1)}%)`,
      }}
      className="flex h-[300px] w-full flex-col overflow-x-auto transition-transform duration-500"
    >
      <motion.div
        variants={fadeIn("", 0.2, 1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:max-w-[80%]"
      >
        <h2 className="flex items-center gap-2 font-bold uppercase text-white xs:text-lg lg:text-2xl">
          Profile <FaUser />
        </h2>
        <div className="flex flex-col">
          <p className="xs:text-md text-white lg:text-lg">
            Here you can see your level and how much XP you have to get to reach
            another one or customize your Profile by:
          </p>
          <ul className="xs:text-md mt-2 text-white lg:text-lg">
            <li>
              <RiArrowRightDoubleFill className="inline text-cp-red xs:text-xl lg:text-3xl" />
              Changing your{" "}
              <span className="font-bold uppercase text-cp-cyan">Avatar</span>,
            </li>
            <li>
              <RiArrowRightDoubleFill className="inline text-cp-red xs:text-xl lg:text-3xl" />
              Setting up your{" "}
              <span className="font-bold uppercase text-cp-cyan">Username</span>
              ,{" "}
              <span className="font-bold uppercase text-cp-cyan">
                First Name
              </span>{" "}
              and{" "}
              <span className="font-bold uppercase text-cp-cyan">
                Last Name
              </span>
              ,
            </li>
            <li>
              <RiArrowRightDoubleFill className="inline text-cp-red xs:text-xl lg:text-3xl" />
              Defining your{" "}
              <span className="font-bold uppercase text-cp-cyan">
                current Goal
              </span>
              . If you have any long term dream, you can share it here!
            </li>
            <li>
              <RiArrowRightDoubleFill className="inline text-cp-red xs:text-xl lg:text-3xl" />
              Writing something about you in{" "}
              <span className="font-bold uppercase text-cp-cyan">Bio</span>
            </li>
          </ul>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            All of these are classified, so no worries, you won't be{" "}
            <span className="font-bold uppercase text-cp-red">Hacked</span>!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step4;
