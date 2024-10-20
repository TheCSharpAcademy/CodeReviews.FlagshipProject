namespace Contracts.DTO.User;

public class AddXpDto
{
    public required string UserId { get; set; }
    public int XpAmount { get; set; }
}