using Newtonsoft.Json;

namespace Contracts.DTO.Auth.GithubDto;

public class GithubUser
{
    public string? Id { get; set; }
    public string? Email { get; set; }
    [JsonProperty("login")]
    public string? Username { get; set; }
}