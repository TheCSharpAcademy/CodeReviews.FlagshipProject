"use client";

import useUser from "@/src/utils/useUser";

const ProfileBackdrop = () => {
  useUser();

  return (
    <div className="gradient-cp fixed bottom-0 top-0 z-[-1] w-full blur-xl" />
  );
};

export default ProfileBackdrop;
