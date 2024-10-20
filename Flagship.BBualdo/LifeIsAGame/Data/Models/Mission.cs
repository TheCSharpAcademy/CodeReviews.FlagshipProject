using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Data.Enums;

namespace Data.Models;

public class Mission
{
  [Required] [Key] public Guid Id { get; set; }
  [Required] [StringLength(50)] public string? Title { get; set; }
  [StringLength(2000)] public string? Description { get; set; }
  [Required] public DifficultyLevel Difficulty { get; set; }
  [Required] public int XpReward { get; set; }
  [Required] public DateTime? CreatedAt { get; set; }
  [Required] public bool IsCompleted { get; set; }
  public DateTime? CompletedAt { get; set; }
  public List<Subtask> Subtasks { get; set; } = [];
  [Required] [ForeignKey(nameof(User))] public string? UserId { get; set; }
}