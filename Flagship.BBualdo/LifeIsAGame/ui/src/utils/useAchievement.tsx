"use client";

import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import { giveXP, unlockAchievement } from "../redux/slices/userSlice";
import { AchievementType } from "./types";
import { toast } from "sonner";

const useAchievement = () => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();

  const completedAchievements = user.achievements.filter(
    (achievement) => achievement.isUnlocked,
  );

  const tryUnlockAchievement = (achievement: AchievementType) => {
    if (achievement && !achievement.isUnlocked) {
      dispatch(unlockAchievement(achievement));
      toast(achievement.title, {
        description: achievement.requirements,
      });
      dispatch(giveXP({ xp: achievement.xp }));
    }
  };

  const achievementsMap = {
    // Level Achievements
    reachLevel5: user.achievements.find(
      (achievement) => achievement.requirements === "Reach level 5.",
    ),
    reachLevel10: user.achievements.find(
      (achievement) => achievement.requirements === "Reach level 10.",
    ),
    reachLevel25: user.achievements.find(
      (achievement) => achievement.requirements === "Reach level 25.",
    ),
    reachLevel50: user.achievements.find(
      (achievement) => achievement.requirements === "Reach level 50.",
    ),

    // Difficulty Achievements
    dailyDifficulty: user.achievements.find(
      (achievement) =>
        achievement.requirements === "Complete mission on 'Daily' difficulty.",
    ),
    dropOfSweatDifficulty: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete mission on 'Drop of Sweat' difficulty.",
    ),
    challengingDifficulty: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete mission on 'Challenging' difficulty.",
    ),
    lifeHackerDifficulty: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete mission on 'Life-Hacker' difficulty.",
    ),
    antiProcrastinatorDifficulty: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete mission on 'Anti-Procrastinator' difficulty.",
    ),
    allDifficulties: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete mission on every difficulty level.",
    ),

    // Completed Missions Achievements
    completeYourFirstMission: user.achievements.find(
      (achievement) =>
        achievement.requirements === "Complete your first mission.",
    ),
    complete5Missions: user.achievements.find(
      (achievement) => achievement.requirements === "Complete 5 missions.",
    ),
    complete10Missions: user.achievements.find(
      (achievement) => achievement.requirements === "Complete 10 missions.",
    ),
    complete25Missions: user.achievements.find(
      (achievement) => achievement.requirements === "Complete 25 missions.",
    ),
    complete50Missions: user.achievements.find(
      (achievement) => achievement.requirements === "Complete 50 missions.",
    ),

    // Add Your First Mission Achievement
    addYourFirstMission: user.achievements.find(
      (achievement) => achievement.requirements === "Add your first mission.",
    ),

    // Complete Profile Achievement
    completeProfileFields: user.achievements.find(
      (achievement) =>
        achievement.requirements ===
        "Complete every field in profile dashboard.",
    ),
    // Complete Tutorial Achievement
    completeTutorial: user.achievements.find(
      (achievement) => achievement.requirements === "Complete 'How To Play'.",
    ),
    // Unlock Every Achievement... Achievement
    unlockAllAchievements: user.achievements.find(
      (achievement) => achievement.requirements === "Unlock every achievement.",
    ),
  };

  useEffect(() => {
    // Level achievements check
    if (user.level.level >= 50) {
      tryUnlockAchievement(achievementsMap.reachLevel50!);
    }
    if (user.level.level >= 25) {
      tryUnlockAchievement(achievementsMap.reachLevel25!);
    }
    if (user.level.level >= 10) {
      tryUnlockAchievement(achievementsMap.reachLevel10!);
    }
    if (user.level.level >= 5) {
      tryUnlockAchievement(achievementsMap.reachLevel5!);
    }

    // Difficulty level achievements check
    {
      const completedMissions = user.missions.filter(
        (mission) => mission.status === "completed",
      );
      const completedDifficulties = completedMissions.map(
        (mission) => mission.difficulty,
      );

      if (completedDifficulties.includes("Daily")) {
        tryUnlockAchievement(achievementsMap.dailyDifficulty!);
      }
      if (completedDifficulties.includes("Drop of Sweat")) {
        tryUnlockAchievement(achievementsMap.dropOfSweatDifficulty!);
      }
      if (completedDifficulties.includes("Challenging")) {
        tryUnlockAchievement(achievementsMap.challengingDifficulty!);
      }
      if (completedDifficulties.includes("Life-Hacker")) {
        tryUnlockAchievement(achievementsMap.lifeHackerDifficulty!);
      }
      if (completedDifficulties.includes("Anti-Procrastinator")) {
        tryUnlockAchievement(achievementsMap.antiProcrastinatorDifficulty!);
      }
    }

    // All difficulty achievement check
    if (
      achievementsMap.dailyDifficulty!.isUnlocked &&
      achievementsMap.dropOfSweatDifficulty!.isUnlocked &&
      achievementsMap.challengingDifficulty!.isUnlocked &&
      achievementsMap.lifeHackerDifficulty!.isUnlocked &&
      achievementsMap.antiProcrastinatorDifficulty!.isUnlocked
    ) {
      tryUnlockAchievement(achievementsMap.allDifficulties!);
    }

    // Complete mission achievements check
    switch (user.totalMissionsCompleted) {
      case 1: {
        tryUnlockAchievement(achievementsMap.completeYourFirstMission!);
        break;
      }
      case 5: {
        tryUnlockAchievement(achievementsMap.complete5Missions!);
        break;
      }
      case 10: {
        tryUnlockAchievement(achievementsMap.complete10Missions!);
        break;
      }
      case 25: {
        tryUnlockAchievement(achievementsMap.complete25Missions!);
        break;
      }
      case 50: {
        tryUnlockAchievement(achievementsMap.complete50Missions!);
        break;
      }
    }

    // Add first mission achievement check
    if (user.totalMissionsAdded === 1) {
      tryUnlockAchievement(achievementsMap.addYourFirstMission!);
    }

    // Complete profile achievement check
    if (
      user.bio !== undefined &&
      user.currentGoal !== undefined &&
      user.lastName !== undefined &&
      user.avatar !== ""
    ) {
      tryUnlockAchievement(achievementsMap.completeProfileFields!);
    }

    // Complete tutorial achievement check
    if (user.hasCompletedTutorial) {
      tryUnlockAchievement(achievementsMap.completeTutorial!);
    }

    // Unlock All Achievements achievement check
    if (completedAchievements.length === user.achievements.length - 1) {
      tryUnlockAchievement(achievementsMap.unlockAllAchievements!);
    }
  }, [user]);
};

export default useAchievement;
