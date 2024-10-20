import IUser from "@/src/models/IUser";
import providers from "@/src/constants/externalProviders";
import UserLink from "@/src/components/Interface/Profile/UserLink";

const UserLinks = ({ user }: { user: IUser }) => {
  return (
    <div className="mt-10 flex w-full items-center justify-center gap-2">
      {providers.map((provider) => {
        return <UserLink key={provider.id} provider={provider} user={user} />;
      })}
      )
    </div>
  );
};

export default UserLinks;
