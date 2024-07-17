import { User } from "@/src/utils/types";
import MissingData from "../shared/MissingData";

const UserBio = ({ user }: { user: User }) => {
  return (
    <div className="mt-4 flex max-h-[200px] flex-col border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">Bio:</h2>
      {user.bio ? (
        <h3 className="xs:text-md font-bold text-cp-red lg:text-xl">
          {user.bio}
        </h3>
      ) : (
        <MissingData />
      )}
    </div>
  );
};

export default UserBio;
