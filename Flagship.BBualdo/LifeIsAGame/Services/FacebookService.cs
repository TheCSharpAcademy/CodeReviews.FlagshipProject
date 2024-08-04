using System.Net.Http.Headers;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.Auth.FacebookDto;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Services;

public class FacebookService(IConfiguration configuration) : IFacebookService
{
    private readonly IConfiguration _configuration = configuration;
    
    public async Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client)
    {
        var baseUri = "https://graph.facebook.com/v20.0/oauth/access_token";
        var param = new Dictionary<string, string>
        {
            { "client_id", _configuration["ExternalAuth:Facebook:ClientId"]! },
            { "client_secret", _configuration["ExternalAuth:Facebook:ClientSecret"]!},
            { "code", code },
            { "redirect_uri", "http://localhost:3000/facebook-callback" }
        };
        var request = new HttpRequestMessage(HttpMethod.Get, QueryHelpers.AddQueryString(baseUri, param));
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(content);
        return tokenResponse?.Token;
    }

    public async Task<FacebookUser?> GetUserInfo(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get,
            $"https://graph.facebook.com/me?access_token={accessToken}&fields=email");
        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var user = JsonConvert.DeserializeObject<FacebookUser>(content);
        return user;
    }
}