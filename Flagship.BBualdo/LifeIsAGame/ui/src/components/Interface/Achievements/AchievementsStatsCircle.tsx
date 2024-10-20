"use client";

import useAchievements from "@/src/utils/hooks/useAchievements";
import Loading from "@/src/app/loading";
import IUserAchievement from "@/src/models/IUserAchievement";

const AchievementsStatsCircle = () => {
  const { achievements, userAchievements, isLoadingAchievements } =
    useAchievements();

  if (isLoadingAchievements) return <Loading />;
  if (!achievements || !userAchievements) return null;

  const userAchievementsMap = new Map<string, IUserAchievement>(
    userAchievements.map((ua) => [ua.achievementId, ua]),
  );

  const progress = Math.floor(
    (userAchievementsMap.size / achievements.length) * 100,
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
