using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Models;

public class UserAchievement
{
  [Required] [Key] public Guid Id { get; set; }
  [Required] [ForeignKey(nameof(User))] public string? UserId { get; set; }
  [Required] [ForeignKey(nameof(Achievement))] public Guid AchievementId { get; set; }
  public DateTime? UnlockedAt { get; set; }
}