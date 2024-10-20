using Contracts.DTO.Missions;
using Data.Models;

namespace Contracts;

public interface IMissionsService
{
    Task<IEnumerable<Mission>> GetMissionsAsync(string userId);
    Task<Mission> GetMissionByIdAsync(Guid missionId);
    Task<Mission?> AddMissionAsync(string userId, AddMissionDto missionDto);
    Task UpdateMissionAsync( UpdateMissionDto missionDto);
    Task CompleteMissionAsync(string userId, Guid missionId);
    Task DeleteMissionAsync(Guid missionId);
}