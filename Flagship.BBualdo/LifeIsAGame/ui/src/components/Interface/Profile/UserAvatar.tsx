import Image from "next/image";
import UserDefaultAvatar from "../shared/UserDefaultAvatar";
import ChangeAvatarButton from "./ChangeAvatarButton";
import IUser from "@/src/models/IUser";

const UserAvatar = ({ user }: { user: IUser }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-cp-cyan bg-black xs:h-[200px] xs:w-[200px] lg:h-[300px] lg:w-[300px]">
      {user.avatarUrl ? (
        <Image
          alt="User Avatar"
          src={user.avatarUrl}
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
