using Contracts;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/achievements")]
[ApiController]
[Authorize]
public class AchievementsController(IAchievementsService achievementsService) : ControllerBase
{
    private readonly IAchievementsService _achievementsService = achievementsService;

    [HttpGet("get-achievements")]
    public async Task<ActionResult<IEnumerable<Achievement>>> GetAchievements()
    {
        var achievements = await _achievementsService.GetAchievementsAsync();
        return Ok(achievements);
    }

    [HttpGet("get-user-achievements")]
    public async Task<ActionResult<IEnumerable<UserAchievement>>> GetUserAchievements(string userId)
    {
        var userAchievements = await _achievementsService.GetUserAchievementsAsync(userId);
        return Ok(userAchievements);
    }

    [HttpPut("{achievementId:guid}/unlock")]
    public async Task<ActionResult> UnlockAchievement(Guid achievementId, [FromQuery] string userId)
    {
        var achievementDto = await _achievementsService.UnlockAchievementAsync(userId, achievementId);
        if (achievementDto is null) return NotFound(new { message = "Achievement not found." });
        return Ok(
            new
            {
                userAchievementId = achievementDto.UserAchievementId,
                message = achievementDto.Achievement?.Title,
                description = achievementDto.Achievement?.Requirements,
                updatedXp = achievementDto.UpdatedXp
            }
        );
    }
}