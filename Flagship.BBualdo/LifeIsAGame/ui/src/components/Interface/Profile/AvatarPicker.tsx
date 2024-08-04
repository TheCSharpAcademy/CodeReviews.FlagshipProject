"use client";

import avatars from "@/src/constants/avatars";
import { AppDispatch } from "@/src/redux/store";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import useUser from "@/src/utils/hooks/useUser";
import Loading from "@/src/app/loading";
import { setUserAvatar } from "@/src/redux/slices/userSlice";
import UserService from "@/src/services/UserService";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";

const AvatarPicker = ({ closeModal }: { closeModal: () => void }) => {
  const { user, isLoadingUser } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  if (isLoadingUser) return <Loading />;
  if (!user) return null;

  async function updateAvatar(userId: string, avatarPath: string) {
    try {
      const res = await UserService.updateAvatar(userId, avatarPath);
      dispatch(setUserAvatar(avatarPath));
      toast(res.data.message);
    } catch (error: any) {
      if (error.res) {
        toast.error(error.res.data.message, {
          description: error.res.data.errors?.map(
            (error: string, index: number) => <p key={index}>{error}</p>,
          ),
        });
      } else {
        toast.error("Avatar update failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
        });
      }
    }

    closeModal();
  }

  const avatarPicker = avatars.map((avatar, index) => (
    <div
      key={index}
      onClick={async () => await updateAvatar(user.id, avatar)}
      className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 xs:h-[100px] xs:w-[100px] lg:h-[150px] lg:w-[150px]"
    >
      <Image alt="" src={avatar} fill objectFit="cover" priority className="" />
      {avatar === user.avatarUrl && (
        <div className="absolute bottom-0 top-0 flex w-full items-center justify-center bg-black/50">
          <FaRegCheckCircle className="text-cp-cyan shadow-cp-cyan text-shadow-xl xs:text-3xl lg:text-6xl" />
        </div>
      )}
    </div>
  ));

  return (
    <div className="grid place-items-center gap-4 xs:grid-cols-2 xs:py-4 xs:max-lg:px-10 lg:grid-cols-4 lg:py-10">
      {avatarPicker}
    </div>
  );
};

export default AvatarPicker;
