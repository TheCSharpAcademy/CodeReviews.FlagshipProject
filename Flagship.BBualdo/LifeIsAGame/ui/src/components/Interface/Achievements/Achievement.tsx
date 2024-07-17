import { AchievementType } from "@/src/utils/types";
import clsx from "clsx";
import Image from "next/image";
import { GiTrophy } from "react-icons/gi";

const Achievement = ({ achievement }: { achievement: AchievementType }) => {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-between border-y border-light-silver/20 py-4 pr-4 text-white transition-all duration-200 hover:bg-white/10",
        { "opacity-50": !achievement.isUnlocked },
      )}
    >
      <div className="flex items-center gap-2">
        <Image alt="" src={achievement.image} width={50} height={50} />
        <div className="flex flex-col xs:max-lg:max-w-[70%]">
          <h3 className="text-white shadow-white text-shadow-lg xs:text-lg lg:text-xl">
            {achievement.title}
          </h3>
          <p className="lg:text-md text-light-silver xs:text-sm">
            {achievement.requirements}
          </p>
        </div>
      </div>

      {achievement.unlockDate && (
        <p className="lg:text-md font-bold text-cp-green xs:text-xs xs:max-lg:absolute xs:max-lg:bottom-1 xs:max-lg:right-1">
          <GiTrophy className="inline" /> {achievement.unlockDate}
        </p>
      )}

      <p className="xs:text-md text-cp-white flex items-center gap-1 font-bold lg:text-lg">
        {achievement.xp} <p>XP</p>
      </p>
    </div>
  );
};

export default Achievement;
