"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";

const Step3 = ({ currentStep }: { currentStep: number }) => {
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
          Achievements <FaTrophy />
        </h2>
        <div className="flex flex-col">
          <p className="xs:text-md text-white lg:text-lg">
            Welcome to the Achievements section, where your accomplishments are
            celebrated!
          </p>
          <p className="xs:text-md text-white lg:text-lg">
            Achievements are{" "}
            <span className="text-cp-cyan">special milestones</span> that you
            can unlock by completing various tasks and challenges within the
            app. Successfully unlocking an achievement not only showcases your
            skills but also{" "}
            <span className="text-cp-cyan">rewards you with XP</span> to help
            you level up.
          </p>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            Each achievement comes with its own set of requirements, and some
            may require strategic planning and dedication to accomplish.{" "}
          </p>
          <p className="xs:text-md mt-2 gap-1 text-white lg:flex lg:items-center lg:text-lg">
            <span className="font-bold uppercase text-cp-green">
              <GiChampions className="inline" /> Pro Tip:
            </span>{" "}
            Keep an eye on your progress and aim for the achievements that align
            with your goals.
          </p>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            Once you meet the criteria for an achievement, it will be
            highlighted as completed showcasing your accomplishment. Don't
            forget to check your progress regularly and strive to unlock them
            all!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step3;
