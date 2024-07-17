import MissingData from "../shared/MissingData";
import { User } from "@/src/utils/types";

const UserInfo = ({ user }: { user: User }) => {
  return (
    <>
      <div className="mt-4 flex xs:gap-2   lg:gap-4">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Username:
          </h2>
          {user.username ? (
            <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
              {user.username}
            </h3>
          ) : (
            <MissingData />
          )}
        </div>
        <div className="flex-1 border border-white p-2 opacity-50">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Email Address:
          </h2>
          {user.email ? (
            <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
              {user.email}
            </h3>
          ) : (
            <MissingData />
          )}
        </div>
      </div>
      <div className="flex xs:mt-2 lg:mt-4">
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            First Name:
          </h2>
          {user.firstName ? (
            <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
              {user.firstName}
            </h3>
          ) : (
            <MissingData />
          )}
        </div>
        <div className="flex-1 border border-white p-2">
          <h2 className="lg:text-md uppercase text-white xs:text-sm">
            Last Name:
          </h2>
          {user.lastName ? (
            <h3 className="font-bold text-cp-red xs:text-xl lg:text-3xl">
              {user.lastName}
            </h3>
          ) : (
            <MissingData />
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
