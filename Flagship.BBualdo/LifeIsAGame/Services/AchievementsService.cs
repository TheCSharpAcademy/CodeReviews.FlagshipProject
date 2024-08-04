using Contracts;
using Contracts.DTO.Achievements;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Services;

public class AchievementsService(IAchievementsRepository achievementsRepository, UserManager<User> userManager, ILevelsService levelsService) : IAchievementsService
{
    private readonly IAchievementsRepository _achievementsRepository = achievementsRepository;
    private readonly UserManager<User> _userManager = userManager;
    private readonly ILevelsService _levelsService = levelsService;
    
    public async Task<IEnumerable<Achievement>> GetAchievementsAsync()
    {
        return await _achievementsRepository.GetAchievementsAsync();
    }

    public async Task<IEnumerable<UserAchievement>> GetUserAchievementsAsync(string userId)
    {
        return await _achievementsRepository.GetUserAchievementsAsync(userId);
    }

    public async Task<AchievementUnlockDto?> UnlockAchievementAsync(string userId, Guid achievementId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return null;

        var achievement = await _achievementsRepository.FindAchievementByIdAsync(achievementId);
        if (achievement is null) return null;
        
        var userAchievement = await _achievementsRepository.UnlockAchievementAsync(userId, achievement);
        
        var response = await _levelsService.AddXpAsync(userId, achievement.XpReward);
        if (response is null) return null;
        
        return new AchievementUnlockDto
        {
            UserAchievementId = userAchievement.Id,
            Achievement = achievement,
            UpdatedXp = response
        };
    }
}