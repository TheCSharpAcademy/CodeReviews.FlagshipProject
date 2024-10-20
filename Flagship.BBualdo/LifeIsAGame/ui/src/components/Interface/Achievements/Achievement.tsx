import clsx from "clsx";
import Image from "next/image";
import { GiTrophy } from "react-icons/gi";
import IAchievement from "@/src/models/IAchievement";
import IUserAchievement from "@/src/models/IUserAchievement";
import { format } from "date-fns";

const Achievement = ({
  achievement,
  userAchievements,
}: {
  achievement: IAchievement;
  userAchievements: Map<string, IUserAchievement>;
}) => {
  const userAchievement = userAchievements.get(achievement.id);
  return (
    <div
      className={clsx(
        "relative flex items-center justify-between border-y border-light-silver/20 py-4 pr-4 text-white transition-all duration-200 hover:bg-white/10",
        { "opacity-50": !userAchievement },
      )}
    >
      <div className="flex items-center gap-2">
        <Image alt="" src={achievement.imageUrl} width={50} height={50} />
        <div className="flex flex-col xs:max-lg:max-w-[70%]">
          <h3 className="text-white shadow-white text-shadow-lg xs:text-lg lg:text-xl">
            {achievement.title}
          </h3>
          <p className="lg:text-md text-light-silver xs:text-sm">
            {achievement.requirements}
          </p>
        </div>
      </div>

      {userAchievement && (
        <p className="lg:text-md font-bold text-cp-green xs:text-xs xs:max-lg:absolute xs:max-lg:bottom-1 xs:max-lg:right-1">
          <GiTrophy className="inline" />{" "}
          {format(new Date(userAchievement.unlockedAt), "dd-MM-yyyy")}
        </p>
      )}

      <p className="xs:text-md text-cp-white whitespace-nowrap font-bold lg:text-lg">
        {achievement.xpReward} XP
      </p>
    </div>
  );
};

export default Achievement;
