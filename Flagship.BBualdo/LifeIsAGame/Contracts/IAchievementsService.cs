using Contracts.DTO.Achievements;
using Data.Models;

namespace Contracts;

public interface IAchievementsService
{
    Task<IEnumerable<Achievement>> GetAchievementsAsync();
    Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId);
    Task<AchievementUnlockDto?> UnlockAchievementAsync(string userId, Guid achievementId);
}