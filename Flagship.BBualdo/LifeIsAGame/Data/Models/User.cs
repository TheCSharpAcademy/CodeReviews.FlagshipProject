using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Data.Models;

public class User : IdentityUser
{
  [StringLength(24)] public string? FirstName { get; set; }
  [StringLength(32)] public string? LastName { get; set; }
  [StringLength(50)] public string? CurrentGoal { get; set; }
  [StringLength(2000)] public string? Bio { get; set; }
  [Required] public int Xp { get; set; }
  [Required] public int Level { get; set; }
  [Required] public int TotalMissionsAdded { get; set; }
  [Required] public int TotalMissionsCompleted { get; set; }
  [Required] public int TotalXpGained { get; set; }
  public string? AvatarUrl { get; set; }
  public string? GoogleId { get; set; }
  public string? GithubId { get; set; }
  public string? FacebookId { get; set; }
}