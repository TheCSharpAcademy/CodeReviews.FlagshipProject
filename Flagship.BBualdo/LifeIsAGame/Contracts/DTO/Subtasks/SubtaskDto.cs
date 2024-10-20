using Data.Models;

namespace Contracts.DTO.Subtasks;

public class SubtaskDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public bool IsCompleted { get; set; }

    public Subtask ToSubtask(Guid missionId)
    {
        return new Subtask
        {
            Id = Id,
            Title = Title,
            IsCompleted = IsCompleted,
            MissionId = missionId
        };
    }
}