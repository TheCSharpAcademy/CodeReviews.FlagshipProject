import MissionsBackdrop from "@/src/components/Interface/Missions/MissionsBackdrop";
import MissionsContainer from "@/src/components/Interface/Missions/MissionsContainer";
import BackButton from "@/src/components/Interface/shared/BackButton";

export default function Missions() {
  return (
    <>
      <MissionsBackdrop />
      <main className="gradient-cp-red-2 flex min-h-screen flex-col text-white xs:px-4 xs:py-4 lg:px-20 lg:py-10">
        <BackButton className="text-cp-red hover:text-cp-red/50" />
        <MissionsContainer />
      </main>
    </>
  );
}
