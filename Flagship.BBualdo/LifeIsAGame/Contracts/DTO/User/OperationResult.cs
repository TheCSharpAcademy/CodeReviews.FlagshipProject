namespace Contracts.DTO.User;

public class OperationResult
{
    public bool Success { get; set; }
    public string? Message { get; set; }
    public IEnumerable<string>? Errors { get; set; }
}