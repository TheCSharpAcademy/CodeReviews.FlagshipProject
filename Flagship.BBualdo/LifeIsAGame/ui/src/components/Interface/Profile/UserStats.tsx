"use client";

import { useAppSelector } from "@/src/redux/store";
import { User } from "@/src/utils/types";

const UserStats = ({ user }: { user: User }) => {
  const missions = useAppSelector((state) => state.userReducer.missions);

  const missionsCompleted = missions.filter(
    (mission) => mission.status === "completed",
  );
  const missionsActive = missions.filter(
    (missions) => missions.status === "active",
  );

  return (
    <>
      <div className="flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Missions Active:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {missionsActive.length}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Missions Completed:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {missionsCompleted.length}
          </h3>
        </div>

        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Total XP Gained:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.xpGained}
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserStats;
