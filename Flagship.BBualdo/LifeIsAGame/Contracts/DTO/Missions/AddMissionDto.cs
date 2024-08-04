using Contracts.DTO.Subtasks;
using Data.Enums;
using Data.Models;

namespace Contracts.DTO.Missions;

public class AddMissionDto
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DifficultyLevel Difficulty { get; set; }
    public int XpReward { get; set; }
    public List<SubtaskDto> Subtasks { get; set; } = [];
    public string? UserId { get; set; }

    public Mission ToMission()
    {
        var missionId = Guid.NewGuid();
        return new Mission
        {
            Id = missionId,
            Title = Title,
            Description = Description,
            Difficulty = Difficulty,
            XpReward = XpReward,
            CreatedAt = DateTime.UtcNow,
            Subtasks = Subtasks.Select(subtask => subtask.ToSubtask(missionId)).ToList(),
            UserId = UserId,
            IsCompleted = false,
        };
    }
}