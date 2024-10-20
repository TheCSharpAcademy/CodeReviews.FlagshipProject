"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import { FaPlus, FaRegCheckCircle } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { LuAlertCircle } from "react-icons/lu";

const Step2 = ({ currentStep }: { currentStep: number }) => {
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
        className="flex flex-col lg:max-w-[80%]"
      >
        <h2 className="flex items-center gap-2 font-bold uppercase text-white xs:text-lg lg:text-2xl">
          Missions <GiOpenBook />
        </h2>
        <div className="flex flex-col">
          <p className="xs:text-md text-white lg:text-lg">
            Here you can create missions to complete. Click the{" "}
            <span className="font-bold uppercase text-cp-yellow">
              Create Mission <FaPlus className="inline" />
            </span>{" "}
            button to open the form.
          </p>
          <p className="xs:text-md text-white lg:text-lg">
            In the form you can define mission's{" "}
            <span className="font-bold uppercase text-cp-cyan">Title</span>,
            write your plan or ideas in{" "}
            <span className="font-bold uppercase text-cp-cyan">
              Description
            </span>
            , set it's{" "}
            <span className="font-bold uppercase text-cp-cyan">Difficulty</span>{" "}
            and split it into various{" "}
            <span className="font-bold uppercase text-cp-cyan">Subtasks</span>.
          </p>
          <p className="xs:text-md text-white lg:text-lg">
            After clicking{" "}
            <span className="font-bold uppercase text-cp-yellow">Create</span>{" "}
            button, mission will appear in{" "}
            <span className="font-bold uppercase text-cp-cyan">
              Active <LuAlertCircle className="inline" />
            </span>{" "}
            section.
          </p>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            <span className="font-bold uppercase text-cp-red">DIFFICULTY:</span>{" "}
            Be fair with yourself when you set up mission's difficulty level.
            Harder missions will give you more XP, but there is no fun in
            getting max XP for easy missions. Tweak the slider to your personal
            feelings about the challenge the mission give you.
          </p>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            <span className="font-bold uppercase text-cp-red">SUBTASKS:</span>{" "}
            You don't have to split mission into smaller parts. If mission is
            simple you can leave it empty. The app will create one subtask based
            on your mission's title.
          </p>
          <p className="xs:text-md mt-2 text-white lg:text-lg">
            If you check all your subtasks as completed,{" "}
            <span className="font-bold uppercase text-cp-green">
              Complete Mission
            </span>{" "}
            button will become active. When you click it you will gain XP and
            mission will be moved into{" "}
            <span className="font-bold uppercase text-cp-red">
              Completed <FaRegCheckCircle className="inline" />
            </span>{" "}
            section.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Step2;
