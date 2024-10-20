"use client";

import useAchievements from "@/src/utils/hooks/useAchievements";
import AchievementsService from "@/src/services/AchievementsService";
import useUser from "@/src/utils/hooks/useUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { toast } from "sonner";
import { setUserXp } from "@/src/redux/slices/userSlice";
import { unlockAchievement } from "@/src/redux/slices/userAchievementsSlice";
import IUserAchievement from "@/src/models/IUserAchievement";
import IMission from "@/src/models/IMission";
import ACHIEVEMENT_KEYS from "@/src/constants/achievements";
import DifficultyLevel from "@/src/enums/DifficultyLevel";
import IUser from "@/src/models/IUser";
import { useEffect } from "react";
import useMissions from "@/src/utils/hooks/useMissions";

const useAchievementsUnlocker = () => {
  const { userAchievements, achievements } = useAchievements();
  const { user } = useUser();
  const { missions } = useMissions();
  const dispatch = useDispatch<AppDispatch>();

  async function tryUnlockAchievement(achievementKey: string) {
    if (!userAchievements || !user || !achievements) return;

    const achievement = achievements.find((ach) => ach.key === achievementKey);
    if (!achievement) return;

    const userAchievement = userAchievements.find(
      (ua) => ua.achievementId === achievement.id,
    );
    if (userAchievement) return;

    try {
      const res = await AchievementsService.unlockAchievement(
        achievement.id,
        user.id,
      );
      const { message, description, userAchievementId, updatedXp } = res.data;

      toast(message, { description });

      const newUserAchievement: IUserAchievement = {
        id: userAchievementId,
        achievementId: achievement.id,
        unlockedAt: new Date(),
        userId: user.id,
      };

      dispatch(unlockAchievement(newUserAchievement));
      dispatch(setUserXp(updatedXp));
    } catch {
      toast.error(
        "Achievement unlocking failed! If it won't unlock in 24 hours, please contact support.",
      );
    }
  }

  async function checkMissionAchievements(missions: IMission[]) {
    const completedDifficulties = new Set(
      missions.filter((m) => m.isCompleted).map((m) => m.difficulty),
    );

    if (user!.totalMissionsCompleted >= 1)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_FIRST_MISSION);

    if (user!.totalMissionsCompleted >= 5)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_5_MISSIONS);

    if (user!.totalMissionsCompleted >= 10)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_10_MISSIONS);

    if (user!.totalMissionsCompleted >= 25)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_25_MISSIONS);

    if (user!.totalMissionsCompleted >= 50)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_50_MISSIONS);

    if (completedDifficulties.has(DifficultyLevel.Daily))
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_DAILY_MISSION);

    if (completedDifficulties.has(DifficultyLevel["Drop of Sweat"]))
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_DROP_OF_SWEAT_MISSION,
      );

    if (completedDifficulties.has(DifficultyLevel.Challenging))
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_CHALLENGING_MISSION);

    if (completedDifficulties.has(DifficultyLevel["Life-Hacker"]))
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_LIFE_HACKER_MISSION);

    if (completedDifficulties.has(DifficultyLevel["Anti-Procrastinator"]))
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_ANTI_PROCRASTINATOR_MISSION,
      );

    if (
      completedDifficulties.has(DifficultyLevel.Daily) &&
      completedDifficulties.has(DifficultyLevel["Drop of Sweat"]) &&
      completedDifficulties.has(DifficultyLevel.Challenging) &&
      completedDifficulties.has(DifficultyLevel["Life-Hacker"]) &&
      completedDifficulties.has(DifficultyLevel["Anti-Procrastinator"])
    )
      await tryUnlockAchievement(
        ACHIEVEMENT_KEYS.COMPLETE_ALL_DIFFICULTY_LEVELS,
      );
  }

  async function checkProfileAchievements(user: IUser) {
    if (user.level >= 5)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_5);

    if (user.level >= 10)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_10);

    if (user.level >= 25)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_25);

    if (user.level >= 50)
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.REACH_LEVEL_50);

    if (
      user.firstName &&
      user.lastName &&
      user.currentGoal &&
      user.bio &&
      user.avatarUrl
    ) {
      await tryUnlockAchievement(ACHIEVEMENT_KEYS.COMPLETE_PROFILE);
    }
  }

  async function checkAllAchievements() {
    if (userAchievements && achievements) {
      const userAchievementIds = new Set(
        userAchievements.map((ua) => ua.achievementId),
      );
      const achievementIds = new Set(achievements.map((ach) => ach.id));

      const allAchievementUnlocked = Array.from(achievementIds).every(
        (id) =>
          userAchievementIds.has(id) ||
          id === ACHIEVEMENT_KEYS.UNLOCK_ALL_ACHIEVEMENTS,
      );

      if (allAchievementUnlocked)
        await tryUnlockAchievement(ACHIEVEMENT_KEYS.UNLOCK_ALL_ACHIEVEMENTS);
    }
  }

  useEffect(() => {
    if (user) checkProfileAchievements(user);
  }, []);

  useEffect(() => {
    if (missions) checkMissionAchievements(missions);
  }, []);

  useEffect(() => {
    checkAllAchievements();
  }, []);

  return {
    tryUnlockAchievement,
  };
};

export default useAchievementsUnlocker;
