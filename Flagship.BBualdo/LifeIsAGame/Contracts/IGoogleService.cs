using Contracts.DTO.Auth.GoogleDto;

namespace Contracts;

public interface IGoogleService
{
    Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client);
    Task<GoogleUser?> GetUserInfo(string accessToken, HttpClient client);
}