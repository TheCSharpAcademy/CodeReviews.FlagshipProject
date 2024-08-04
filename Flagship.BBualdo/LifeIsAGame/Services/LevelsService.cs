using Contracts;
using Contracts.DTO.User;
using Data.Helpers;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Services;

public class LevelsService(UserManager<User> userManager) : ILevelsService
{
    private readonly UserManager<User> _userManager = userManager;
    public async Task<UserXpResponseDto?> AddXpAsync(string userId, int xpAmount)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return null;
        user.Xp += xpAmount;
        user.TotalXpGained += xpAmount;
        while (user.Xp >= LevelsHelper.GetCeilForLevel(user.Level))
        {
            user.Xp -= LevelsHelper.GetCeilForLevel(user.Level);
            user.Level++;
        }

        await _userManager.UpdateAsync(user);
        return new UserXpResponseDto
        {
            Level = user.Level,
            TotalXpGained = user.TotalXpGained,
            Xp = user.Xp
        };
    }
}