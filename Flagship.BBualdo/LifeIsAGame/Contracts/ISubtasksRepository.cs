using Contracts.DTO.Subtasks;
using Data.Models;

namespace Contracts;

public interface ISubtasksRepository
{
    Task AddSubtaskAsync(Subtask subtask);
    Task UpdateSubtaskAsync(Subtask subtask);
    Task DeleteSubtaskAsync(Guid subtaskId);
    Task ToggleSubtaskCompleteAsync(Guid subtaskId);
}