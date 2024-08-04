using Contracts.DTO.User;

namespace Contracts;

public interface IProfileService
{
    Task<OperationResult> UpdateProfileAsync(string userId, EditProfileDto profileDto);
    Task<OperationResult> UpdateAvatarAsync(string userId, string avatarPath);
}