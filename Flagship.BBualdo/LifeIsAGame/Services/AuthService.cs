using System.Security.Claims;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Services;

public class AuthService(
    UserManager<User> userManager,
    SignInManager<User> signInManager,
    IGithubService githubService,
    IFacebookService facebookService,
    IGoogleService googleService,
    ILogsService logger,
    IEmailService emailService) : IAuthService
{
    private readonly IFacebookService _facebookService = facebookService;
    private readonly IGithubService _githubService = githubService;
    private readonly IGoogleService _googleService = googleService;
    private readonly ILogsService _logger = logger;
    private readonly SignInManager<User> _signInManager = signInManager;
    private readonly UserManager<User> _userManager = userManager;
    private readonly IEmailService _emailService = emailService;

    public async Task<UserDto?> GetCurrentUserAsync(ClaimsPrincipal claims)
    {
        var user = await _userManager.GetUserAsync(claims);

        if (user is null) return null;

        var userDto = new UserDto
        {
            Id = user.Id,
            Username = user.UserName,
            Email = user.Email,
            Level = user.Level,
            Xp = user.Xp,
            FirstName = user.FirstName,
            LastName = user.LastName,
            CurrentGoal = user.CurrentGoal,
            Bio = user.Bio,
            AvatarUrl = user.AvatarUrl,
            TotalMissionsAdded = user.TotalMissionsAdded,
            TotalMissionsCompleted = user.TotalMissionsCompleted,
            TotalXpGained = user.TotalXpGained,
            FacebookId = user.FacebookId,
            GithubId = user.GithubId,
            GoogleId = user.GoogleId
        };

        return userDto;
    }

    public async Task<OperationResult> LoginAsync(LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email!);

        if (user is null)
        {
            await _logger.InsertLog("User '{0}' failed to login via form.", loginDto.Email!);
            return new OperationResult
            {
                Success = false,
                Message = "Login attempt failed.",
                Errors = ["User doesn't exist."]
            };
        }

        var result =
            await _signInManager.PasswordSignInAsync(user, loginDto.Password!, loginDto.RememberMe, false);

        if (result.Succeeded)
            return new OperationResult
            {
                Success = true,
                Message = "Login Successful."
            };

        await _logger.InsertLog("User '{0}' tried to login with wrong password.", loginDto.Email!);
        return new OperationResult
        {
            Success = false,
            Message = "Login attempt failed.",
            Errors = ["Invalid email or password."]
        };
    }

    public async Task<OperationResult> RegisterAsync(RegisterDto registerDto)
    {
        var user = new User
        {
            Email = registerDto.Email,
            UserName = registerDto.Username,
            Level = 1,
            Xp = 0,
            TotalMissionsAdded = 0,
            TotalMissionsCompleted = 0,
            TotalXpGained = 0
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password!);

        if (result.Succeeded)
            return new OperationResult
            {
                Success = result.Succeeded,
                Message = "Register successful."
            };

        await _logger.InsertLog("User '{0}' failed to register account via form.", registerDto.Email!);
        return new OperationResult
        {
            Success = false,
            Message = "Register attempt failed.",
            Errors = result.Errors.Select(e => e.Description)
        };
    }

    public async Task LogoutAsync()
    {
        await _signInManager.SignOutAsync();
    }

    public async Task<OperationResult> RequestPasswordResetAsync(string email)
    {
        var result = new OperationResult
        {
            Success = true,
            Message = "If email is correct, we sent you an email with link to set your new password. Check your inbox."
        };
        var user = await _userManager.FindByEmailAsync(email);
        if (user is null) return result;

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        var resetLink = $"http://localhost:3000/reset-password?email={Uri.EscapeDataString(email)}&token={Uri.EscapeDataString(token)}";

        var emailContent = $"Click <a href=\"{resetLink}\">here</a> to reset your password.";
        
        var emailResult = await _emailService.SendEmailAsync(email, "Password Reset Request", emailContent);
        return !emailResult.Success ? emailResult : result;
    }

    public async Task<OperationResult> ResetPasswordAsync(NewPasswordDto passwordDto)
    {
        var user = await _userManager.FindByEmailAsync(passwordDto.Email!);

        var result = await _userManager.ResetPasswordAsync(user!, passwordDto.ResetToken!, passwordDto.NewPassword!);
        if (!result.Succeeded) return new OperationResult
        {
            Success = false,
            Message = "Resetting password failed!",
            Errors = result.Errors.Select(e => e.Description)
        };

        return new OperationResult
        {
            Success = true,
            Message = "Password has been changed. Now you can login with your new password."
        };
    }

    public async Task<OperationResult> LoginOrLinkWithGithubAsync(string code, HttpClient client, string? userId = null)
    {
        var token = await _githubService.ExchangeCodeForTokenAsync(code, client);
        if (token is null)
        {
            await _logger.InsertLog("User failed to login or link account via Github because token retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Github login failed!",
                Errors = ["Something went wrong when retrieving access token."]
            };
        }

        var githubUser = await _githubService.GetUserInfo(token, client);
        if (githubUser is null)
        {
            await _logger.InsertLog(
                "User failed to login or link account via Github because user info retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Github login failed!",
                Errors = ["Couldn't find user or user doesn't have public email address."]
            };
        }

        // If userId is null that means user is logging in
        if (userId is null)
        {
            var user = await _userManager.FindByEmailAsync(githubUser.Email!);

            if (user is null)
            {
                user = new User
                {
                    Email = githubUser.Email,
                    UserName = await GenerateUsernameSuffixAsync(githubUser.Username!),
                    Level = 1,
                    Xp = 0,
                    TotalMissionsAdded = 0,
                    TotalMissionsCompleted = 0,
                    TotalXpGained = 0
                };

                var result = await _userManager.CreateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Github. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Github login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            if (user.GithubId is null)
            {
                user.GithubId = githubUser.Id;
                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Github. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Github login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            await _signInManager.SignInAsync(user, false);
            return new OperationResult
            {
                Success = true,
                Message = "User signed in successfully!"
            };
        }
        // If userId is not null that means user is logged in and want to link his account
        else
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user is null)
            {
                await _logger.InsertLog(
                    "User {0} failed to link his Github account, because user wasn't found in Database. That's requires inspection in passing userId when linking Github account.",
                    githubUser.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["User doesn't exist."]
                };
            }
            

            if (user.GithubId != null)
            {
                await _logger.InsertLog("User {0} tried to link his account with Github but it's already assigned with one. Frontend linking account methods need to be investigated.", user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["That account already has Github account assigned."]
                };
            }

            if (await _userManager.Users.Where(u => u.GithubId == githubUser.Id).FirstOrDefaultAsync() != null)
            {
                await _logger.InsertLog("User {0} tried to link his account with Github account which was already linked with other account.", user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = ["That Github account is already assigned to other user."]
                };
            }

            user.GithubId = githubUser.Id;
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                await _logger.InsertLog("User {0} failed to link his account with Github. Errors: {1}", user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Github account failed!",
                    Errors = result.Errors.Select(e => e.Description)
                };
            }

            return new OperationResult
            {
                Success = true,
                Message = "Github account linked successfully!"
            };
        }
    }

    public async Task<OperationResult> LoginOrLinkWithGoogleAsync(string code, HttpClient client, string? userId = null)
    {
        var token = await _googleService.ExchangeCodeForTokenAsync(code, client);
        if (token is null)
        {
            await _logger.InsertLog("User failed to login or link account via Google because token retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Google login failed!",
                Errors = ["Something went wrong when retrieving access token."]
            };
        }

        var googleUser = await _googleService.GetUserInfo(token, client);
        if (googleUser is null)
        {
            await _logger.InsertLog(
                "User failed to login or link account via Google because user info retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Google login failed!",
                Errors = ["Couldn't find user or user doesn't have public email address."]
            };
        }

        // If userId is null that means user is logging in
        if (userId is null)
        {
            var user = await _userManager.FindByEmailAsync(googleUser.Email!);

            if (user is null)
            {
                user = new User
                {
                    Email = googleUser.Email,
                    UserName = await GenerateUsernameSuffixAsync(googleUser.Username!),
                    Level = 1,
                    Xp = 0,
                    TotalMissionsAdded = 0,
                    TotalMissionsCompleted = 0,
                    TotalXpGained = 0
                };

                var result = await _userManager.CreateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Google. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Google login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            if (user.GoogleId is null)
            {
                user.GoogleId = googleUser.Id;
                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Google. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Google login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            await _signInManager.SignInAsync(user, false);
            return new OperationResult
            {
                Success = true,
                Message = "User signed in successfully!"
            };
        }
        // If userId is not null that means user is logged in and want to link his account
        else
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user is null)
            {
                await _logger.InsertLog(
                    "User {0} failed to link his Google account, because user wasn't found in Database. That's requires inspection in passing userId when linking Google account.",
                    googleUser.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Google account failed!",
                    Errors = ["User doesn't exist."]
                };
            }

            if (user.GoogleId != null)
            {
                await _logger.InsertLog("User {0} tried to link his account with Google but it's already assigned with one. Frontend linking account methods need to be investigated.", user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Google account failed!",
                    Errors = ["That account already has Google account assigned."]
                };
            }

            if (await _userManager.Users.Where(u => u.GoogleId == googleUser.Id).FirstOrDefaultAsync() != null)
            {
                await _logger.InsertLog("User {0} tried to link his account with Google account which was already linked with other account.", user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Google account failed!",
                    Errors = ["That Google account is already assigned to other user."]
                };
            }

            user.GoogleId = googleUser.Id;
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                await _logger.InsertLog("User {0} failed to link his account with Google. Errors: {1}", user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Google account failed!",
                    Errors = result.Errors.Select(e => e.Description)
                };
            }
                

            return new OperationResult
            {
                Success = true,
                Message = "Google account linked successfully!"
            };
        }
    }

    public async Task<OperationResult> LoginOrLinkWithFacebookAsync(string code, HttpClient client,
        string? userId = null)
    {
        var token = await _facebookService.ExchangeCodeForTokenAsync(code, client);
        if (token is null)
        {
            await _logger.InsertLog(
                "User failed to login or link account via Facebook because token retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Facebook login failed!",
                Errors = ["Something went wrong when retrieving access token."]
            };
        }

        var facebookUser = await _facebookService.GetUserInfo(token, client);
        if (facebookUser is null)
        {
            await _logger.InsertLog(
                "User failed to login or link account via Facebook because user info retrieving error.");
            return new OperationResult
            {
                Success = false,
                Message = "Facebook login failed!",
                Errors = ["Couldn't find user or user doesn't have public email address."]
            };
        }

        // If userId is null that means user is logging in
        if (userId is null)
        {
            var user = await _userManager.FindByEmailAsync(facebookUser.Email!);

            if (user is null)
            {
                user = new User
                {
                    Email = facebookUser.Email,
                    UserName = facebookUser.Email,
                    Level = 1,
                    Xp = 0,
                    TotalMissionsAdded = 0,
                    TotalMissionsCompleted = 0,
                    TotalXpGained = 0
                };

                var result = await _userManager.CreateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Facebook. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Facebook login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            if (user.FacebookId is null)
            {
                user.FacebookId = facebookUser.Id;
                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    await _logger.InsertLog("User '{0}' failed to login via Facebook. Errors: {1}",
                        user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                    return new OperationResult
                    {
                        Success = false,
                        Message = "Facebook login failed!",
                        Errors = result.Errors.Select(e => e.Description)
                    };
                }
            }

            await _signInManager.SignInAsync(user, false);
            return new OperationResult
            {
                Success = true,
                Message = "User signed in successfully!"
            };
        }
        // If userId is not null that means user is logged in and want to link his account
        else
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user is null)
            {
                await _logger.InsertLog(
                    "User {0} failed to link his Facebook account, because user wasn't found in Database. That's requires inspection in passing userId when linking Facebook account.",
                    facebookUser.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Facebook account failed!",
                    Errors = ["User doesn't exist."]
                };
            }

            if (user.FacebookId != null)
            {
                await _logger.InsertLog(
                    "User {0} tried to link his account with Facebook but it's already assigned with one. Frontend linking account methods need to be investigated.",
                    user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Facebook account failed!",
                    Errors = ["That account already has Facebook account assigned."]
                };
            }

            if (await _userManager.Users.Where(u => u.FacebookId == facebookUser.Id).FirstOrDefaultAsync() != null)
            {
                await _logger.InsertLog(
                    "User {0} tried to link his account with Facebook account which was already linked with other account.",
                    user.Email!);
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Facebook account failed!",
                    Errors = ["That Facebook account is already assigned to other user."]
                };
            }

            user.FacebookId = facebookUser.Id;
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                await _logger.InsertLog("User {0} failed to link his account with Facebook. Errors: {1}",
                    user.Email!, string.Join(", ", result.Errors.Select(e => e.Description)));
                return new OperationResult
                {
                    Success = false,
                    Message = "Linking Facebook account failed!",
                    Errors = result.Errors.Select(e => e.Description)
                };
            }

            return new OperationResult
            {
                Success = true,
                Message = "Facebook account linked successfully!"
            };
        }
    }

    public async Task<OperationResult> UnlinkAccountAsync(string providerName, string userId)
    {
        var user = await _userManager.FindByIdAsync(userId);
        if (user is null)
            return new OperationResult
            {
                Success = false,
                Message = "User doesn't exist."
            };

        switch (providerName)
        {
            case "Google":
                user.GoogleId = null;
                break;
            case "Github":
                user.GithubId = null;
                break;
            case "Facebook":
                user.FacebookId = null;
                break;
        }

        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded)
        {
            await _logger.InsertLog("User {0} failed trying to disconnect his account from {1}.",
                user.Email!, providerName);
            return new OperationResult
            {
                Success = false,
                Message = $"Unlinking account from {providerName} failed!",
                Errors = result.Errors.Select(e => e.Description)
            };
        }

        return new OperationResult
        {
            Success = true,
            Message = $"Account unlinked from {providerName}!"
        };
    }

    private async Task<string> GenerateUsernameSuffixAsync(string baseUsername)
    {
        var username = baseUsername;
        var counter = 1;
        while (await _userManager.FindByNameAsync(username) != null)
        {
            username = $"{username}_{counter}";
            counter++;
        }

        return username;
    }
}