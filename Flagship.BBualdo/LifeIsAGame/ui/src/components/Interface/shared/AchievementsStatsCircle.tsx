"use client";

import { useAppSelector } from "@/src/redux/store";

const AchievementsStatsCircle = () => {
  const achievements = useAppSelector(
    (state) => state.userReducer.achievements,
  );

  const completedAchievements = achievements.filter(
    (achievement) => achievement.isUnlocked === true,
  );

  const progress = Math.floor(
    (completedAchievements.length / achievements.length) * 100,
  );
  return (
    <div className="group flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full border-2 border-cp-cyan backdrop-blur-lg">
      <p className="text-xl text-white">{progress}%</p>
      <div
        className="absolute bottom-0 z-[-1] w-full rounded-full bg-cp-red/50 transition-all duration-200 group-hover:bg-cp-red"
        style={{ height: progress + "%" }}
      />
    </div>
  );
};

export default AchievementsStatsCircle;
