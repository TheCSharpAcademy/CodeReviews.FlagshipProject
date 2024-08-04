import AchievementsBackdrop from "@/src/components/Interface/Achievements/AchievementsBackdrop";
import AchievementsContainer from "@/src/components/Interface/Achievements/AchievementsContainer";
import BackButton from "@/src/components/Interface/shared/BackButton";

function Achievements() {
  return (
    <>
      <AchievementsBackdrop />
      <main className="flex min-h-screen flex-col text-white xs:px-4 xs:py-4 lg:px-20 lg:py-10">
        <BackButton className="text-cp-cyan hover:text-cp-cyan/50" />
        <AchievementsContainer />
      </main>
    </>
  );
}

export default Achievements;
