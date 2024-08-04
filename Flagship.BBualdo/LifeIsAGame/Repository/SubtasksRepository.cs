using Contracts;
using Data;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Repository;

public class SubtasksRepository(LiagDbContext dbContext) : ISubtasksRepository
{
    private readonly LiagDbContext _dbContext = dbContext;
    
    public async Task AddSubtaskAsync(Subtask subtask)
    {
        await _dbContext.Subtasks.AddAsync(subtask);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateSubtaskAsync(Subtask subtask)
    {
        _dbContext.Entry(subtask).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteSubtaskAsync(Guid subtaskId)
    {
        var subtask = await _dbContext.Subtasks.FindAsync(subtaskId);
        if (subtask is null) return;
        
        _dbContext.Subtasks.Remove(subtask);
        await _dbContext.SaveChangesAsync();
    }

    public async Task ToggleSubtaskCompleteAsync(Guid subtaskId)
    {
        var subtask = await _dbContext.Subtasks.FindAsync(subtaskId);
        if (subtask is null) return;
        
        subtask.IsCompleted = !subtask.IsCompleted;
        _dbContext.Subtasks.Entry(subtask).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }
}