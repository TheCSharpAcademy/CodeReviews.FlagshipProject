namespace Contracts.DTO.Auth;

public class NewPasswordDto
{
    public string? Email { get; set; }
    public string? ResetToken { get; set; }
    public string? NewPassword { get; set; }
}