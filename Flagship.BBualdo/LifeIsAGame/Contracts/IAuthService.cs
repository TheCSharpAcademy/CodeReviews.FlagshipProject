using System.Security.Claims;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Data.Models;

namespace Contracts;

public interface IAuthService
{
  Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims);
  Task<OperationResult> LoginAsync(LoginDto loginDto);
  Task<OperationResult> RegisterAsync(RegisterDto registerDto);
  Task LogoutAsync();
  Task<OperationResult> RequestPasswordResetAsync(string email);
  Task<OperationResult> ResetPasswordAsync(NewPasswordDto passwordDto);
  Task<OperationResult> LoginOrLinkWithGithubAsync(string code, HttpClient client, string? userId = null);
  Task<OperationResult> LoginOrLinkWithGoogleAsync(string code, HttpClient client, string? userId = null);
  Task<OperationResult> LoginOrLinkWithFacebookAsync(string code, HttpClient client, string? userId = null);
  Task<OperationResult> UnlinkAccountAsync(string providerName, string userId);
}