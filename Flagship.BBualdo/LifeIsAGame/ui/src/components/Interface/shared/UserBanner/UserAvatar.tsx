"use client";

import Image from "next/image";
import CircleProgressBar from "./CircleProgressBar";
import { toast } from "sonner";
import UserDefaultAvatar from "../UserDefaultAvatar";
import useUser from "@/src/utils/hooks/useUser";
import levels from "@/src/constants/levels";
import { useState } from "react";
import UserModal from "@/src/components/Interface/shared/UserBanner/UserModal";
import Loading from "@/src/app/loading";

const UserAvatar = () => {
  const { user, isLoadingUser } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isLoadingUser) return <Loading text="" />;
  if (!user) return null;

  const { xp, level, avatarUrl } = user;

  const closeModal = () => {
    setIsOpen(false);
  };

  const calculateProgress = () => {
    let progress = (xp / levels[level - 1].ceil) * 100;

    if (progress >= 100) {
      toast(`You have reached level ${level + 1}!`);
      progress = (xp / levels[level - 1].ceil) * 100;
    }

    return progress;
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div
          onClick={() => setIsOpen(true)}
          className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full transition-all duration-200 lg:border-2 lg:border-light-silver lg:hover:border-cp-cyan"
        >
          {avatarUrl ? (
            <Image src={avatarUrl} alt="" fill objectFit="cover" priority />
          ) : (
            <UserDefaultAvatar user={user} variant="small" />
          )}
        </div>
        <div className="absolute -top-[2] z-[-1] lg:hidden">
          <CircleProgressBar progress={calculateProgress()} circleWidth={60} />
        </div>

        <div className="absolute -bottom-3 flex h-[20px] w-[20px] rotate-45 items-center justify-center border-2 border-light-silver bg-black lg:hidden">
          <p className="text-md -rotate-45 font-bold text-cp-cyan">{level}</p>
        </div>
      </div>

      {isOpen && <UserModal closeModal={closeModal} />}
    </>
  );
};

export default UserAvatar;
