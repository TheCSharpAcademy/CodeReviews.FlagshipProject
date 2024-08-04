using Data.Models;

namespace Contracts;

public interface IAchievementsRepository
{
    Task<IEnumerable<Achievement>> GetAchievementsAsync();
    Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId);
    Task<UserAchievement> UnlockAchievementAsync(string userId, Achievement achievement);
    Task<Achievement?> FindAchievementByIdAsync(Guid achievementId);
}