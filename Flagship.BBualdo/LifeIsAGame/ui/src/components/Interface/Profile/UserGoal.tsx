import MissingData from "../shared/MissingData";
import { User } from "@/src/utils/types";

const UserGoal = ({ user }: { user: User }) => {
  return (
    <div className="flex-1 border border-white p-2">
      <h2 className="lg:text-md uppercase text-white xs:text-sm">
        Current Goal:
      </h2>
      {user.currentGoal ? (
        <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
          {user.currentGoal}
        </h3>
      ) : (
        <MissingData />
      )}
    </div>
  );
};

export default UserGoal;
