import IAchievement from "@/src/models/IAchievement";
import IUserAchievement from "@/src/models/IUserAchievement";

const AchievementsStats = ({
  achievements,
  userAchievements,
}: {
  achievements: IAchievement[];
  userAchievements: Map<string, IUserAchievement>;
}) => {
  const progress = Math.floor(
    (userAchievements.size / achievements.length) * 100,
  );

  const calculateTotalXP = () => {
    return achievements.reduce(
      (total, achievement) => (total += achievement.xpReward),
      0,
    );
  };

  const calculateGainedXP = () => {
    return Array.from(userAchievements.values()).reduce(
      (total, userAchievement) => {
        const achievement = achievements.find(
          (ach) => ach.id === userAchievement.achievementId,
        );
        return (total += achievement ? achievement.xpReward : 0);
      },
      0,
    );
  };

  const calculateProgressColor = () => {
    if (progress < 25) {
      return "text-cp-red";
    } else if (progress < 50) {
      return "text-cp-yellow";
    } else if (progress < 75) {
      return "text-cp-green";
    } else if (progress > 75) {
      return "text-cp-cyan";
    } else {
      return "text-white";
    }
  };

  return (
    <div className="flex items-center border-2 border-cp-cyan bg-cp-red/20 py-4 xs:gap-2 xs:px-4 xs:max-lg:w-full xs:max-lg:flex-col lg:gap-20 lg:px-20">
      <div className="flex items-center gap-2 xs:max-lg:w-full xs:max-lg:justify-between lg:flex-col">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">
          Completed:
        </h3>
        <p className="xs:text-xl lg:text-3xl">
          {userAchievements.size}/{achievements.length}
        </p>
      </div>
      <div className="flex items-center gap-2 xs:max-lg:hidden xs:max-lg:w-full xs:max-lg:justify-between lg:flex-col">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">
          Progress %:
        </h3>
        <p className={`xs:text-xl lg:text-3xl ${calculateProgressColor()}`}>
          {progress}%
        </p>
      </div>
      <div className="flex items-center gap-2 xs:max-lg:w-full xs:max-lg:justify-between lg:flex-col">
        <h3 className="xs:text-md font-bold uppercase lg:text-lg">Total XP:</h3>
        <p className="xs:text-xl lg:text-3xl">
          {calculateGainedXP()}/{calculateTotalXP()}
        </p>
      </div>
    </div>
  );
};

export default AchievementsStats;
