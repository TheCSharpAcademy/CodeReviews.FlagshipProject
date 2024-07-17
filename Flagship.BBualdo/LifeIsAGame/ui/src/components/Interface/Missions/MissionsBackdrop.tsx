"use client";

import useUser from "@/src/utils/useUser";

const MissionsBackdrop = () => {
  useUser();
  return (
    <div className="gradient-cp-2 fixed bottom-0 top-0 z-[-1] w-full blur-xl" />
  );
};

export default MissionsBackdrop;
