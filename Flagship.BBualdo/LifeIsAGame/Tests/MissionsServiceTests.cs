using Contracts;
using Contracts.DTO.Missions;
using Contracts.DTO.Subtasks;
using Data.Models;
using FakeItEasy;
using Microsoft.AspNetCore.Identity;
using Services;

namespace Tests;

public class MissionsServiceTests
{
    private readonly IMissionsRepository _missionsRepository = A.Fake<IMissionsRepository>();
    private readonly IMissionsService _missionsService;
    private readonly ISubtasksService _subtasksService = A.Fake<ISubtasksService>();
    private readonly UserManager<User> _userManager = A.Fake<UserManager<User>>();

    public MissionsServiceTests()
    {
        _missionsService = new MissionsService(_missionsRepository, _subtasksService, _userManager);
    }

    [Fact]
    public async Task GetMissionsAsync_UserNotFound_ReturnsEmptyMissionList()
    {
        // Arrange
        const string userId = "userId";

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        // Act
        var result = await _missionsService.GetMissionsAsync(userId);
        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task GetMissionByIdAsync_UserFound_ReturnsMission()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId
        };
        var missions = A.CollectionOfFake<Mission>(5);

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _missionsRepository.GetMissionsAsync(userId))
            .Returns(Task.FromResult<IEnumerable<Mission>>(missions));
        // Act
        var result = await _missionsService.GetMissionsAsync(userId);
        var resultList = result.ToList();
        // Assert
        Assert.NotNull(resultList);
        Assert.NotEmpty(resultList);
        Assert.Equal(5, resultList.Count);
    }

    [Fact]
    public async Task AddMissionAsync_UserNotFound_ReturnsNull()
    {
        // Arrange
        const string userId = "userId";
        var mission = A.Fake<AddMissionDto>();

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        // Act
        var result = await _missionsService.AddMissionAsync(userId, mission);
        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task AddMissionAsync_UserFound_UpdatesMissionsCountAndReturnsCreatedMission()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId,
            TotalMissionsAdded = 0
        };
        var mission = A.Fake<AddMissionDto>();

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _userManager.UpdateAsync(user)).Returns(Task.FromResult(IdentityResult.Success));
        // Act
        var result = await _missionsService.AddMissionAsync(userId, mission);
        // Assert
        Assert.NotNull(result);
        Assert.Equal(mission.UserId, result.UserId);
        Assert.Equal(1, user.TotalMissionsAdded);
    }

    [Fact]
    public async Task UpdateMissionAsync_UpdatesMissionTitleAndDescription()
    {
        // Arrange
        var missionId = Guid.NewGuid();
        var existingMission = new Mission
        {
            Id = missionId,
            Title = "Mission to Update",
            Description = "Description 1"
        };
        var updatedMission = new UpdateMissionDto
        {
            Id = missionId,
            Title = "Updated Mission",
            Description = "Description 2"
        };

        A.CallTo(() => _missionsRepository.GetMissionByIdAsync(missionId))
            .Returns(Task.FromResult(existingMission));
        A.CallTo(() => _missionsRepository.UpdateMissionAsync(existingMission)).Returns(Task.CompletedTask);
        // Act
        await _missionsService.UpdateMissionAsync(updatedMission);
        // Assert
        Assert.Equal(existingMission.Title, updatedMission.Title);
        Assert.Equal(existingMission.Description, updatedMission.Description);
    }

    [Fact]
    public async Task UpdateMissionAsync_UpdatesExistingSubtasks()
    {
        // Arrange
        var missionId = Guid.NewGuid();
        var subtaskId = Guid.NewGuid();
        var existingSubtask = new Subtask
        {
            Id = subtaskId,
            Title = "Old Subtask Title",
            IsCompleted = false
        };
        var existingMission = new Mission
        {
            Id = missionId,
            Subtasks = [existingSubtask]
        };

        var updatedSubtask = new SubtaskDto
        {
            Id = subtaskId,
            Title = "New Subtask Title",
            IsCompleted = true
        };
        var updatedMission = new UpdateMissionDto
        {
            Id = missionId,
            Subtasks = [updatedSubtask]
        };

        A.CallTo(() => _missionsRepository.GetMissionByIdAsync(missionId))
            .Returns(Task.FromResult(existingMission));
        A.CallTo(() => _subtasksService.UpdateSubtaskAsync(existingSubtask)).Returns(Task.CompletedTask);
        // Act
        await _missionsService.UpdateMissionAsync(updatedMission);

        // Assert
        A.CallTo(() => _subtasksService.UpdateSubtaskAsync(A<Subtask>.That.Matches(st =>
            st.Id == updatedSubtask.Id && st.Title == updatedSubtask.Title &&
            st.IsCompleted == updatedSubtask.IsCompleted))).MustHaveHappenedOnceExactly();
    }

    [Fact]
    public async Task UpdateMissionAsync_AddsNewSubtasks()
    {
        // Arrange
        var missionId = Guid.NewGuid();
        var existingMission = new Mission
        {
            Id = missionId,
            Subtasks = []
        };
        var updatedSubtask = new SubtaskDto
        {
            Id = Guid.NewGuid(),
            Title = "Added Subtask",
            IsCompleted = false
        };
        var updatedMission = new UpdateMissionDto
        {
            Id = missionId,
            Subtasks = [updatedSubtask]
        };

        A.CallTo(() => _missionsRepository.GetMissionByIdAsync(missionId)).Returns(Task.FromResult(existingMission));
        A.CallTo(() => _subtasksService.AddSubtaskAsync(A<Subtask>.Ignored)).Returns(Task.CompletedTask);

        // Act
        await _missionsService.UpdateMissionAsync(updatedMission);
        // Assert
        A.CallTo(() => _subtasksService.AddSubtaskAsync(A<Subtask>.That.Matches(st =>
            st.Id == updatedSubtask.Id && st.Title == updatedSubtask.Title &&
            st.IsCompleted == updatedSubtask.IsCompleted))).MustHaveHappenedOnceExactly();
    }

    [Fact]
    public async Task UpdateMissionAsync_DeletesRemovedSubtasks()
    {
        // Arrange
        var missionId = Guid.NewGuid();
        var subtaskId = Guid.NewGuid();
        var existingSubtask = new Subtask
        {
            Id = subtaskId,
            Title = "Old Subtask Title",
            IsCompleted = false
        };
        var existingMission = new Mission
        {
            Id = missionId,
            Subtasks = [existingSubtask]
        };
        var updatedMission = new UpdateMissionDto
        {
            Id = missionId,
            Subtasks = []
        };

        A.CallTo(() => _missionsRepository.GetMissionByIdAsync(missionId)).Returns(Task.FromResult(existingMission));
        A.CallTo(() => _subtasksService.DeleteSubtaskAsync(subtaskId)).Returns(Task.CompletedTask);

        // Act
        await _missionsService.UpdateMissionAsync(updatedMission);

        // Assert
        A.CallTo(() => _subtasksService.DeleteSubtaskAsync(subtaskId))
            .MustHaveHappenedOnceExactly();
    }

    [Fact]
    public async Task CompleteMissionAsync_UserNotFound_RepositoryCallNotHappened()
    {
        // Arrange
        const string userId = "userId";
        var missionId = Guid.NewGuid();
        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(null));
        // Act
        await _missionsService.CompleteMissionAsync(userId, missionId);
        // Assert
        A.CallTo(() => _missionsRepository.CompleteMissionAsync(missionId)).MustNotHaveHappened();
    }

    [Fact]
    public async Task CompleteMissionAsync_UserFound_UpdatesMissionsCountAndCompletesMission()
    {
        // Arrange
        const string userId = "userId";
        var user = new User
        {
            Id = userId,
            TotalMissionsCompleted = 0
        };
        var missionId = Guid.NewGuid();

        A.CallTo(() => _userManager.FindByIdAsync(userId)).Returns(Task.FromResult<User?>(user));
        A.CallTo(() => _userManager.UpdateAsync(user)).Returns(Task.FromResult(IdentityResult.Success));
        // Act
        await _missionsService.CompleteMissionAsync(userId, missionId);
        // Assert
        A.CallTo(() => _missionsRepository.CompleteMissionAsync(missionId)).MustHaveHappened();
        Assert.Equal(1, user.TotalMissionsCompleted);
    }

    [Fact]
    public async Task DeleteMissionAsync_DeletesMission()
    {
        // Arrange
        var missionOneId = Guid.NewGuid();
        var missionTwoId = Guid.NewGuid();
        List<Mission> missions =
        [
            new Mission
            {
                Id = missionOneId
            },
            new Mission
            {
                Id = missionTwoId
            }
        ];
        A.CallTo(() => _missionsRepository.GetMissionsAsync(A<string>.Ignored))
            .Returns(Task.FromResult<IEnumerable<Mission>>(missions));
        A.CallTo(() => _missionsRepository.DeleteMissionAsync(missionOneId))
            .Invokes(() => missions.RemoveAll(m => m.Id == missionOneId));

        // Act
        await _missionsService.DeleteMissionAsync(missionOneId);
        // Assert
        var missionsAfterDelete = await _missionsRepository.GetMissionsAsync("someUserId");
        var missionsAfterDeleteList = missionsAfterDelete.ToList();

        Assert.NotNull(missionsAfterDeleteList);
        Assert.DoesNotContain(missionsAfterDeleteList, m => m.Id == missionOneId);
        Assert.Contains(missionsAfterDeleteList, m => m.Id == missionTwoId);
    }
}