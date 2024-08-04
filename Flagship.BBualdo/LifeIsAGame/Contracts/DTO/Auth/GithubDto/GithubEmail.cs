using Newtonsoft.Json;

namespace Contracts.DTO.Auth.GithubDto;

public class GithubEmail
{
    public string? Email { get; set; }
    [JsonProperty("primary")]
    public bool IsPrimary { get; set; }
}