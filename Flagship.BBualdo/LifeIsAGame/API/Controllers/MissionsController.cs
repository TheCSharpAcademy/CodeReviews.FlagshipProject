using Contracts;
using Contracts.DTO.Missions;
using Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/missions")]
    [ApiController]
    [Authorize]
    public class MissionsController(IMissionsService missionsService, ISubtasksService subtasksService) : ControllerBase
    {
        private readonly IMissionsService _missionsService = missionsService;
        private readonly ISubtasksService _subtasksService = subtasksService;

        [HttpGet("get-missions")]
        public async Task<ActionResult<IEnumerable<Mission>>> GetMissions(string userId)
        {
            var missions = await _missionsService.GetMissionsAsync(userId);
            return Ok(missions);
        }

        [HttpGet("get-mission")]
        public async Task<ActionResult<Mission>> GetMissionById(Guid missionId)
        {
            var mission = await _missionsService.GetMissionByIdAsync(missionId);
            return Ok(mission);
        }

        [HttpPost("add-mission")]
        public async Task<ActionResult> AddMission(AddMissionDto missionDto)
        {
            var mission = await _missionsService.AddMissionAsync(missionDto.UserId!, missionDto);
            return CreatedAtAction(nameof(AddMission), mission);
        }

        [HttpPut("update-mission/{missionId:guid}")]
        public async Task<ActionResult> UpdateMission(Guid missionId, UpdateMissionDto missionDto)
        {
            if (missionId != missionDto.Id) return BadRequest();
            await _missionsService.UpdateMissionAsync(missionDto);
            return NoContent();
        }

        [HttpPut("{missionId:guid}/complete")]
        public async Task<ActionResult> CompleteMission(Guid missionId, [FromQuery] string userId)
        {
            await _missionsService.CompleteMissionAsync(userId, missionId);
            return Ok(new {message = "Mission Complete."});
        }

        [HttpDelete("{missionId:guid}")]
        public async Task<ActionResult> DeleteMission(Guid missionId)
        {
            await _missionsService.DeleteMissionAsync(missionId);
            return Ok(new { message = "Mission Deleted." });
        }

        [HttpPut("{subtaskId:guid}/toggle")]
        public async Task<ActionResult> ToggleSubtask(Guid subtaskId)
        {
            await _subtasksService.ToggleSubtaskComplete(subtaskId);
            return NoContent();
        }
    }
}
