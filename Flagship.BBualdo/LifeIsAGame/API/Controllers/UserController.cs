using Contracts;
using Contracts.DTO.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/user")]
    [ApiController]
    [Authorize]
    public class UserController(ILevelsService levelsService, IProfileService profileService) : ControllerBase
    {
        private readonly ILevelsService _levelsService = levelsService;
        private readonly IProfileService _profileService = profileService;

        [HttpPost("add-xp")]
        public async Task<ActionResult<UserXpResponseDto>> AddXp(AddXpDto addXpDto)
        {
           var response = await _levelsService.AddXpAsync(addXpDto.UserId, addXpDto.XpAmount);
           if (response is null) return NotFound(new { message = "User not found!" });

           return Ok(response);
        }

        [HttpPut("{userId}/update-profile")]
        public async Task<ActionResult> UpdateProfileInfo(string userId, EditProfileDto profileDto)
        {
            var result = await _profileService.UpdateProfileAsync(userId, profileDto);
            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });

            return Ok(new {message = result.Message});
        }

        [HttpPut("{userId}/update-avatar")]
        public async Task<ActionResult> UpdateAvatar(string userId, string avatarPath)
        {
            var result = await _profileService.UpdateAvatarAsync(userId, avatarPath);
            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });

            return Ok(new { message = result.Message });
        }
    }
}
