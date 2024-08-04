using Contracts.DTO.User;

namespace Contracts;

public interface ILevelsService
{
    Task<UserXpResponseDto?> AddXpAsync(string userId, int xpAmount);
}