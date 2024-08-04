"use client";

import { fadeIn } from "@/src/utils/fadeIn";
import { motion } from "framer-motion";
import Achievement from "./Achievement";
import AchievementsStats from "./AchievementsStats";
import useAchievements from "@/src/utils/hooks/useAchievements";
import Loading from "@/src/app/loading";
import IUserAchievement from "@/src/models/IUserAchievement";

const AchievementsContainer = () => {
  const { achievements, userAchievements, isLoadingAchievements } =
    useAchievements();

  if (isLoadingAchievements) return <Loading text="Loading Achievements..." />;
  if (!achievements || !userAchievements) return null;

  const userAchievementsMap = new Map<string, IUserAchievement>(
    userAchievements.map((ua) => [ua.achievementId, ua]),
  );

  const achievementsList = achievements.map((achievement) => (
    <Achievement
      key={achievement.id}
      achievement={achievement}
      userAchievements={userAchievementsMap}
    />
  ));

  return (
    <motion.section
      variants={fadeIn("", 0.5, 1, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex w-full flex-col items-center overflow-y-auto bg-transparent xs:gap-10 xs:p-2 xs:max-lg:pb-[130px] lg:gap-20 lg:p-10"
    >
      {achievements && userAchievements && (
        <AchievementsStats
          achievements={achievements}
          userAchievements={userAchievementsMap}
        />
      )}
      <div className="flex w-full flex-col">{achievementsList}</div>
    </motion.section>
  );
};

export default AchievementsContainer;
