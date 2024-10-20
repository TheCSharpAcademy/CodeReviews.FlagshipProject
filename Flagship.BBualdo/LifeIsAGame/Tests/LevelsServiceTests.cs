using Contracts;
using Contracts.DTO.User;
using Data.Models;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Services;

namespace Tests;

public class LevelsServiceTests
{
    private readonly ILevelsService _levelsService;
    private readonly UserManager<User> _userManager = A.Fake<UserManager<User>>();

    public LevelsServiceTests()
    {
        _levelsService = new LevelsService(_userManager);
    }

    [Fact]
    public async Task AddXpAsync_UserNotFound_ReturnsNull()
    {
        // Arrange
        const string userId = "userId";
        const int xpAmount = 100;
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        // Act
        var result = await _levelsService.AddXpAsync(userId, xpAmount);
        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task AddXpAsync_UserFound_AddsXP_NoLevelUp()
    {
        // Arrange
        const string userId = "userId";
        const int xpAmount = 50;
        
        var user = new User
        {
            Id = userId,
            Xp = 0,
            TotalXpGained = 0,
            Level = 1
        };

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _userManager.UpdateAsync(user)).Returns(Task.FromResult(IdentityResult.Success));

        // Act
        var result = await _levelsService.AddXpAsync(userId, xpAmount);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(50, result.Xp);
        Assert.Equal(50, result.TotalXpGained);
        Assert.Equal(1, result.Level);
    }
    
    [Theory]
    [InlineData(150, 50, 100, 50, 200, 1, 2)]
    [InlineData(1000, 500, 125, 1550, 2550, 6, 8)]
    [InlineData(1000, 0, 0, 0, 1000, 1, 5)]
    
    public async Task AddXpAsync_UserFound_AddsXP_LevelUp(int xpToAdd, int currentXp, int expectedXp, int currentTotalXp, int expectedTotalXp, int currentLevel, int expectedLevel)
    {
        // Arrange
        const string userId = "userId";

        var user = new User
        {
            Id = userId,
            Xp = currentXp,
            TotalXpGained = currentTotalXp,
            Level = currentLevel
        };

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _userManager.UpdateAsync(user)).Returns(Task.FromResult(IdentityResult.Success));

        // Act
        var result = await _levelsService.AddXpAsync(userId, xpToAdd);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedXp, result.Xp);
        Assert.Equal(expectedTotalXp, result.TotalXpGained);
        Assert.Equal(expectedLevel, result.Level);
    }
}