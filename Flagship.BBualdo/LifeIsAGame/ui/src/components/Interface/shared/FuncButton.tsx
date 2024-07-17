"use client";

import { usePathname } from "next/navigation";
import CreateMissionButton from "../Missions/CreateMissionButton";
import { FaPlus, FaUserEdit } from "react-icons/fa";
import EditProfileButton from "../Profile/EditProfileButton";
import AchievementsStatsCircle from "./AchievementsStatsCircle";

const FuncButton = () => {
  const pathname = usePathname();

  return (
    <div className="relative -top-12">
      {pathname === "/missions" && (
        <CreateMissionButton className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-cp-yellow transition-all duration-200 hover:bg-cp-cyan">
          <FaPlus className="text-2xl text-black" />
        </CreateMissionButton>
      )}
      {pathname === "/profile" && (
        <EditProfileButton className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-cp-red transition-all duration-200 hover:bg-cp-cyan">
          <FaUserEdit className="text-2xl text-white" />
        </EditProfileButton>
      )}
      {pathname === "/achievements" && <AchievementsStatsCircle />}
    </div>
  );
};

export default FuncButton;
