using Contracts.DTO.Subtasks;
using Data.Models;

namespace Contracts;

public interface ISubtasksService
{
    Task AddSubtaskAsync(Subtask subtask);
    Task UpdateSubtaskAsync(Subtask subtask);
    Task DeleteSubtaskAsync(Guid subtaskId);
    Task ToggleSubtaskComplete(Guid subtaskId);
}