"use client";

import { levelUp } from "@/src/redux/slices/userSlice";
import { AppDispatch } from "@/src/redux/store";
import { User } from "@/src/utils/types";
import { useDispatch } from "react-redux";

const UserXP = ({ user }: { user: User }) => {
  const { xp, level } = user;
  const dispatch = useDispatch<AppDispatch>();

  const calculateProgress = () => {
    let progress = (xp / level.ceil) * 100;

    if (progress >= 100) {
      dispatch(levelUp());
      progress = (xp / level.ceil) * 100;
    }

    return progress;
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 xs:max-lg:mt-6">
      <div className="flex w-full items-end justify-between text-cp-red">
        <p className="xs:text-xl lg:text-2xl">
          Level:{" "}
          <span className="font-bold xs:text-2xl lg:text-4xl">
            {level.level}
          </span>
        </p>
        <p className="xs:text-lg lg:text-xl">
          XP:{" "}
          <span className="font-bold">
            {xp}/{level.ceil}
          </span>
        </p>
      </div>
      <div className="w-full -skew-x-12 bg-cp-red/30 xs:h-[12px] lg:h-[20px]">
        <div
          className={`gradient-cp-red h-full transition-all duration-700`}
          style={{ width: calculateProgress() + "%" }}
        />
      </div>
    </div>
  );
};

export default UserXP;
