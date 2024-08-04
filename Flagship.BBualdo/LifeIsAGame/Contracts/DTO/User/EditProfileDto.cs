namespace Contracts.DTO.User;

public class EditProfileDto
{
    public string? Username { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? CurrentGoal { get; set; }
    public string? Bio { get; set; }
}