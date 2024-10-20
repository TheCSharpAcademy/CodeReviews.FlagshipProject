using Contracts.DTO.Subtasks;
using Data.Models;

namespace Contracts.DTO.Missions;

public class UpdateMissionDto
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public List<SubtaskDto> Subtasks { get; set; } = [];
}