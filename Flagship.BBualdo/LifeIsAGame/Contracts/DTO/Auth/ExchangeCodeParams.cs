namespace Contracts.DTO.Auth;

public class ExchangeCodeParams
{
    public required string Code { get; set; }
    public required string RequestUri { get; set; }
    public required string ClientId { get; set; }
    public required string ClientSecret { get; set; }
    public required string RedirectUri { get; set; }
}