namespace Contracts.DTO.Auth;

public class UserDto
{
  public string? Id { get; set; }
  public string? Username { get; set; }
  public string? Email { get; set; }
  public string? FirstName { get; set; }
  public string? LastName { get; set; }
  public string? CurrentGoal { get; set; }
  public string? Bio { get; set; }
  public int Xp { get; set; }
  public int Level { get; set; }
  public int TotalMissionsAdded { get; set; }
  public int TotalMissionsCompleted { get; set; }
  public int TotalXpGained { get; set; }
  public string? AvatarUrl { get; set; }
  public string? GoogleId { get; set; }
  public string? GithubId { get; set; }
  public string? FacebookId { get; set; }
}