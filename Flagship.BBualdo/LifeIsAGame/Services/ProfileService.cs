using Contracts;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Services;

public class ProfileService(UserManager<User> userManager) : IProfileService
{
    private readonly UserManager<User> _userManager = userManager;
    
    public async Task<OperationResult> UpdateProfileAsync(string userId, EditProfileDto profileDto)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return new OperationResult
        {
            Success = false,
            Message = "User not found!"
        };

        user.UserName = profileDto.Username;
        user.FirstName = profileDto.FirstName;
        user.LastName = profileDto.LastName;
        user.CurrentGoal = profileDto.CurrentGoal;
        user.Bio = profileDto.Bio;

        var result = await _userManager.UpdateAsync(user);
        if (result.Succeeded) return new OperationResult
        {
            Success = true,
            Message = "Profile updated successfully!",
        };

        return new OperationResult
        {
            Success = false,
            Message = "Profile update failed!",
            Errors = result.Errors.Select(e => e.Description)
        };
    }

    public async Task<OperationResult> UpdateAvatarAsync(string userId, string avatarPath)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null) return new OperationResult
        {
            Success = false,
            Message = "User not found!"
        };

        user.AvatarUrl = avatarPath;
        var result = await _userManager.UpdateAsync(user);

        if (!result.Succeeded) return new OperationResult
        {
            Success = false,
            Message = "Avatar update failed!",
            Errors = result.Errors.Select(e => e.Description)
        };

        return new OperationResult
        {
            Success = true,
            Message = "Avatar updated successfully!"
        };
    }
}