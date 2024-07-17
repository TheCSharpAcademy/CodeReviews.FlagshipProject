"use client";

import useUser from "@/src/utils/useUser";

const AchievementsBackdrop = () => {
  useUser();
  return (
    <div className="fixed bottom-0 top-0 z-[-1] w-full bg-achievements bg-center bg-no-repeat blur-md brightness-50" />
  );
};

export default AchievementsBackdrop;
