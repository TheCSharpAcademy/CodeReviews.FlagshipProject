"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import Achievement from "./Achievement";
import AchievementsStats from "./AchievementsStats";
import { useAppSelector } from "@/src/redux/store";

const AchievementsContainer = () => {
  const achievements = useAppSelector(
    (state) => state.userReducer.achievements,
  );

  const achievementsList = achievements.map((achievement) => (
    <Achievement key={achievement.id} achievement={achievement} />
  ));

  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex w-full flex-col items-center overflow-y-auto bg-transparent xs:gap-10 xs:p-2 xs:max-lg:pb-[130px] lg:gap-20 lg:p-10"
    >
      <AchievementsStats />
      <div className="flex w-full flex-col">{achievementsList}</div>
    </motion.section>
  );
};

export default AchievementsContainer;
