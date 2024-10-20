using Contracts.DTO.Auth.GithubDto;

namespace Contracts;

public interface IGithubService
{
    Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client);
    Task<GithubUser?> GetUserInfo(string accessToken, HttpClient client);
}