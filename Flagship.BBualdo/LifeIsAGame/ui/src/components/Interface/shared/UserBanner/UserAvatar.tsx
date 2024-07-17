"use client";

import Image from "next/image";

import CircleProgressBar from "./CircleProgressBar";
import { AppDispatch, useAppSelector } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { levelUp } from "@/src/redux/slices/userSlice";
import { toast } from "sonner";
import UserDefaultAvatar from "../UserDefaultAvatar";
import Link from "next/link";

const UserAvatar = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { xp, level, avatar } = user;
  const dispatch = useDispatch<AppDispatch>();

  const calculateProgress = () => {
    let progress = (xp / level.ceil) * 100;

    if (progress >= 100) {
      dispatch(levelUp());
      toast(`You have reached level ${level.level + 1}!`);
      progress = (xp / level.ceil) * 100;
    }

    return progress;
  };

  // TODO: This is commented out, because for now once user create profile, he can't log out

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleBodyClick = () => {
  //     setIsOpen(false);
  //   };

  //   document.body.addEventListener("click", handleBodyClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleBodyClick);
  //   };
  // }, []);

  return (
    <Link href="/profile">
      <div className="relative flex items-center justify-center">
        <div
          // onClick={() => setIsOpen(true)}
          className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full transition-all duration-200 lg:border-2 lg:border-light-silver lg:hover:border-cp-cyan"
        >
          {avatar ? (
            <Image src={avatar} alt="" fill objectFit="cover" priority />
          ) : (
            <UserDefaultAvatar user={user} variant="small" />
          )}
        </div>
        <div className="absolute -top-[2] z-[-1] lg:hidden">
          <CircleProgressBar progress={calculateProgress()} circleWidth={60} />
        </div>

        <div className="absolute -bottom-3 flex h-[20px] w-[20px] rotate-45 items-center justify-center border-2 border-light-silver bg-black lg:hidden">
          <p className="text-md -rotate-45 font-bold text-cp-cyan">
            {level.level}
          </p>
        </div>
      </div>

      {/* {isOpen && <UserModal />} */}
    </Link>
  );
};

export default UserAvatar;
