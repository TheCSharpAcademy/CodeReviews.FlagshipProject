import clsx from "clsx";
import IUser from "@/src/models/IUser";

const UserDefaultAvatar = ({
  user,
  variant,
}: {
  user: IUser;
  variant: "small" | "large";
}) => {
  // splits username into words array to take initials from it
  const initialsArr = user.username.split(" ").map((el) => el[0]);

  return (
    <div
      className={clsx(
        "flex h-full w-full items-center justify-center bg-black uppercase text-cp-cyan shadow-cp-cyan text-shadow-xl",
        {
          "text-[120px]": variant === "large",
          "text-3xl": variant === "small",
          "text-2xl": initialsArr.length > 1,
        },
      )}
    >
      {/* For case that user has more than one space in username */}
      {initialsArr.length > 1
        ? initialsArr[0] + initialsArr[1]
        : initialsArr.join()}
    </div>
  );
};

export default UserDefaultAvatar;
