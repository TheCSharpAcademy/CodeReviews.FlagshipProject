import BackButton from "@/src/components/Interface/shared/BackButton";
import UserData from "@/src/components/Interface/Profile/UserData";
import ProfileBackdrop from "@/src/components/Interface/Profile/ProfileBackdrop";

function Profile() {
  return (
    <>
      <ProfileBackdrop />
      <main className="flex min-h-screen flex-col justify-center xs:px-4 xs:py-4 lg:px-20 lg:py-10">
        <BackButton className="text-cp-red hover:text-cp-red/50" />
        <UserData />
      </main>
    </>
  );
}

export default Profile;
