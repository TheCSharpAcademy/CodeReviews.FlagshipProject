import { User } from "@/src/utils/types";
import Image from "next/image";
import UserDefaultAvatar from "../shared/UserDefaultAvatar";
import ChangeAvatarButton from "./ChangeAvatarButton";

const UserAvatar = ({ user }: { user: User }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-cp-cyan bg-black xs:h-[200px] xs:w-[200px] lg:h-[300px] lg:w-[300px]">
      {user.avatar ? (
        <Image
          alt="User Avatar"
          src={user.avatar}
          fill
          objectFit="cover"
          priority
        />
      ) : (
        <UserDefaultAvatar user={user} variant="large" />
      )}
      <ChangeAvatarButton />
    </div>
  );
};

export default UserAvatar;
