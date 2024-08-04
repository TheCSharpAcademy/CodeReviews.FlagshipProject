using System.ComponentModel.DataAnnotations;

namespace Data.Models;

public class Achievement
{
  [Required] [Key] public Guid Id { get; set; }
  [Required] [StringLength(64)] public string? Key { get; set; }
  [Required] [StringLength(60)] public string? Title { get; set; }
  [Required] [StringLength(200)] public string? Requirements { get; set; }
  [Required] public int XpReward { get; set; }
  [Required] public string? ImageUrl { get; set; }
}