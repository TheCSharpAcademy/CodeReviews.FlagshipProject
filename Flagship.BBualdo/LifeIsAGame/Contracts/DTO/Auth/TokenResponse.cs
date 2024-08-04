using Newtonsoft.Json;

namespace Contracts.DTO.Auth;

public class TokenResponse
{
    [JsonProperty("access_token")]
    public string? Token { get; set; }
}