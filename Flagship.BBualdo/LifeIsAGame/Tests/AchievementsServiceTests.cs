using Contracts;
using Contracts.DTO.User;
using Data.Models;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Services;

namespace Tests;

public class AchievementsServiceTests
{
    private readonly IAchievementsRepository _achievementsRepository = A.Fake<IAchievementsRepository>();
    private readonly IAchievementsService _achievementsService;
    private readonly ILevelsService _levelsService = A.Fake<ILevelsService>();
    private readonly UserManager<User> _userManager = A.Fake<UserManager<User>>();

    public AchievementsServiceTests()
    {
        _achievementsService = new AchievementsService(_achievementsRepository, _userManager, _levelsService);
    }

    [Fact]
    public async Task GetAchievementsAsync_ReturnsAchievementsList()
    {
        // Arrange
        var achievements = A.CollectionOfFake<Achievement>(20);
        A.CallTo(() => _achievementsRepository.GetAchievementsAsync())
            .Returns(Task.FromResult<IEnumerable<Achievement>>(achievements));
        // Act
        var result = await _achievementsService.GetAchievementsAsync();
        var resultList = result.ToList();
        // Assert
        Assert.NotNull(resultList);
        Assert.NotEmpty(resultList);
        Assert.Equal(achievements.Count, resultList.Count);
    }

    [Fact]
    public async Task GetUserAchievementsAsync_UserNotFound_ReturnsEmptyList()
    {
        // Arrange
        const string userId = "userId";
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        // Act
        var result = await _achievementsService.GetUserAchievementsAsync(userId);
        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task GetUserAchievementsAsync_UserFoundAndNoAchievements_ReturnsEmptyList()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId
        };

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _achievementsRepository.GetUserAchievementsAsync(userId))
            .Returns(Task.FromResult<IEnumerable<UserAchievement>>(new List<UserAchievement>()));
        // Act
        var result = await _achievementsService.GetUserAchievementsAsync(userId);
        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task GetUserAchievementsAsync_UserFoundAndHasAchievements_ReturnsUserAchievementList()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId
        };
        var userAchievements = A.CollectionOfFake<UserAchievement>(2);
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _achievementsRepository.GetUserAchievementsAsync(userId))
            .Returns(Task.FromResult<IEnumerable<UserAchievement>>(userAchievements));
        // Act
        var result = await _achievementsService.GetUserAchievementsAsync(userId);
        var resultList = result.ToList();
        // Assert
        Assert.NotNull(resultList);
        Assert.NotEmpty(resultList);
        Assert.Equal(2, resultList.Count);
    }

    [Fact]
    public async Task UnlockAchievementAsync_UserNotFound_ReturnsNull()
    {
        // Arrange
        const string userId = "userId";
        var achievementId = Guid.NewGuid();
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        A.CallTo(() => _achievementsRepository.FindAchievementByIdAsync(achievementId))
            .Returns(Task.FromResult<Achievement?>(null));
        // Act
        var result = await _achievementsService.UnlockAchievementAsync(userId, achievementId);
        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task UnlockAchievementAsync_AchievementNotFound_ReturnsNull()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId
        };
        var achievementId = Guid.NewGuid();
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _achievementsRepository.FindAchievementByIdAsync(achievementId))
            .Returns(Task.FromResult<Achievement?>(null));
        // Act
        var result = await _achievementsService.UnlockAchievementAsync(userId, achievementId);
        // Assert
        Assert.Null(result);
    }

    [Theory]
    [InlineData(20)]
    [InlineData(100)]
    [InlineData(500)]
    public async Task UnlockAchievementAsync_EverythingFound_UnlocksAchievementAndUpdatesXp(int achievementXpReward)
    {
        // Arrange
        const string userId = "userId";
        
        var user = new User
        {
            Id = userId,
            TotalXpGained = 0
        };
        
        var achievementId = Guid.NewGuid();
        
        var achievement = new Achievement
        {
            Id = achievementId,
            XpReward = achievementXpReward
        };
        
        List<UserAchievement> initialUserAchievements = [];
        
        List<UserAchievement> userAchievements =
        [
            new UserAchievement
            {
                UserId = userId,
                AchievementId = achievementId,
            }
        ];
        
        var userXpDto = new UserXpResponseDto
        {
            TotalXpGained = achievementXpReward
        };

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _achievementsRepository.FindAchievementByIdAsync(achievementId))
            .Returns(Task.FromResult<Achievement?>(achievement));
        A.CallTo(() => _achievementsRepository.GetUserAchievementsAsync(userId))
            .Returns(Task.FromResult<IEnumerable<UserAchievement>>(initialUserAchievements));
        A.CallTo(() => _levelsService.AddXpAsync(userId, achievementXpReward))
            .Returns(Task.FromResult<UserXpResponseDto?>(userXpDto));
        // Act
        var result = await _achievementsService.UnlockAchievementAsync(userId, achievementId);
        // Assert
        Assert.NotNull(result);
        Assert.Equal(achievementXpReward, result.UpdatedXp.TotalXpGained);
        Assert.Contains(userAchievements, ua => ua.AchievementId == achievementId);
    }
}