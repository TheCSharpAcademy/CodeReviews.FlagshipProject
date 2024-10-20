using Contracts.DTO.Auth.FacebookDto;

namespace Contracts;

public interface IFacebookService
{
    Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client);
    Task<FacebookUser?> GetUserInfo(string accessToken, HttpClient client);
}