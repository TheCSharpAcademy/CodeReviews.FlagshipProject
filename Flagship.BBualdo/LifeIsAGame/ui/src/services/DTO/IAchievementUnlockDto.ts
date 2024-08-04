interface IAchievementUnlockDto {
  userAchievementId: string;
  message: string;
  description: string;
  updatedXp: {
    level: number;
    xp: number;
    totalXpGained: number;
  };
}

export default IAchievementUnlockDto;
