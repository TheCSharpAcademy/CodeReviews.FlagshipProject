using Contracts;
using Data.Models;

namespace Services;

public class SubtasksService(ISubtasksRepository subtasksRepository) : ISubtasksService
{
    private readonly ISubtasksRepository _subtasksRepository = subtasksRepository;
    
    public async Task AddSubtaskAsync(Subtask subtask)
    {
        await _subtasksRepository.AddSubtaskAsync(subtask);
    }

    public async Task UpdateSubtaskAsync(Subtask subtask)
    {
        await _subtasksRepository.UpdateSubtaskAsync(subtask);
    }

    public async Task DeleteSubtaskAsync(Guid subtaskId)
    {
        await _subtasksRepository.DeleteSubtaskAsync(subtaskId);
    }

    public async Task ToggleSubtaskComplete(Guid subtaskId)
    {
        await _subtasksRepository.ToggleSubtaskCompleteAsync(subtaskId);
    }
}