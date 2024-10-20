import IUser from "@/src/models/IUser";

const UserStats = ({ user }: { user: IUser }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Missions Added:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.totalMissionsAdded}
          </h3>
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Missions Completed:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.totalMissionsCompleted}
          </h3>
        </div>

        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Total XP Gained:
          </h2>
          <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
            {user.totalXpGained}
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserStats;
