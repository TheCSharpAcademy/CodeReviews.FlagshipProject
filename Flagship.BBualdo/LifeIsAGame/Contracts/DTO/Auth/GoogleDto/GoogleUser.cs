using Newtonsoft.Json;

namespace Contracts.DTO.Auth.GoogleDto;

public class GoogleUser
{
    public string? Id { get; set; }

    [JsonProperty("name")]
    public string? Username { get; set; }
    public string? Email { get; set; }
}