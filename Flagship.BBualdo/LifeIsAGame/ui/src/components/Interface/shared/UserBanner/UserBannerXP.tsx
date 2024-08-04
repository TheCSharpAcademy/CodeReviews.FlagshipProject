"use client";

import { toast } from "sonner";
import useUser from "@/src/utils/hooks/useUser";
import levels from "@/src/constants/levels";
import Loading from "@/src/app/loading";

const UserBannerXP = () => {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) return <Loading text="" />;
  if (!user) return null;
  const { xp, level } = user;

  const calculateProgress = () => {
    let progress = (xp / levels[level - 1].ceil) * 100;

    if (progress >= 100) {
      toast(`You have reached level ${level + 1}!`);
      progress = (xp / levels[level - 1].ceil) * 100;
    }

    return progress;
  };

  return (
    <div className="flex items-start gap-2">
      <h3 className="text-4xl text-cp-cyan">{level}</h3>
      <div className="flex w-[100px] flex-col items-start gap-1">
        <p className="text-xl uppercase text-cp-cyan">level</p>
        <div className="h-1 w-full bg-cp-cyan/20 shadow-xl shadow-cp-cyan">
          <div
            className="h-full bg-cp-cyan transition-all duration-700"
            style={{ width: calculateProgress() + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserBannerXP;
