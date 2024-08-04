using Contracts;
using Contracts.DTO.Missions;
using Data;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Repository;

public class MissionsRepository(LiagDbContext dbContext) : IMissionsRepository
{
    private readonly LiagDbContext _dbContext = dbContext;
    
    public async Task<IEnumerable<Mission>> GetMissionsAsync(string userId)
    {
        return await _dbContext.Missions
            .Where(mission => mission.UserId == userId)
            .Include(mission => mission.Subtasks)
            .OrderByDescending(m => m.CreatedAt)
            .ToListAsync();
    }

    public async Task<Mission> GetMissionByIdAsync(Guid missionId)
    {
        return await _dbContext.Missions
            .Include(mission => mission.Subtasks)
            .FirstAsync(mission => mission.Id == missionId);
    }

    public async Task AddMissionAsync(Mission mission)
    {
        await _dbContext.Missions.AddAsync(mission);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateMissionAsync(Mission mission)
    {
        _dbContext.Entry(mission).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task CompleteMissionAsync(Guid missionId)
    {
        var mission = await _dbContext.Missions.FindAsync(missionId);
        if (mission is null) return;
        
        mission.IsCompleted = true;
        mission.CompletedAt = DateTime.UtcNow;
        
        _dbContext.Missions.Entry(mission).State = EntityState.Modified;
        await _dbContext.SaveChangesAsync();
    }

    public async Task DeleteMissionAsync(Guid missionId)
    {
        var mission = await _dbContext.Missions.FindAsync(missionId);
        if (mission is null) return;
        
        _dbContext.Missions.Remove(mission);
        await _dbContext.SaveChangesAsync();
    }
}