"use client";

import avatars from "@/src/data/avatars";
import { updateAvatar } from "@/src/redux/slices/userSlice";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AvatarPicker = () => {
  const userAvatar = useAppSelector((state) => state.userReducer.avatar);
  const dispatch = useDispatch<AppDispatch>();

  const avatarPicker = avatars.map((avatar, index) => (
    <div
      key={index}
      onClick={() => dispatch(updateAvatar({ avatar }))}
      className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 xs:h-[100px] xs:w-[100px] lg:h-[150px] lg:w-[150px]"
    >
      <Image alt="" src={avatar} fill objectFit="cover" priority className="" />
      {avatar === userAvatar && (
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
