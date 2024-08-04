using Data.Models;

namespace Contracts;

public interface IMissionsRepository
{
    Task<IEnumerable<Mission>> GetMissionsAsync(string userId);
    Task<Mission> GetMissionByIdAsync(Guid missionId);
    Task AddMissionAsync(Mission mission);
    Task UpdateMissionAsync(Mission mission);
    Task CompleteMissionAsync(Guid missionId);
    Task DeleteMissionAsync(Guid missionId);
}