import UserBannerXP from "./UserBannerXP";
import UserAvatar from "./UserAvatar";

const UserBanner = () => {
  return (
    <div className="flex items-center gap-10">
      <UserBannerXP />
      <UserAvatar />
    </div>
  );
};

export default UserBanner;
