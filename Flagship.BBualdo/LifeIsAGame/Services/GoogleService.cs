using System.Net.Http.Headers;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.Auth.GoogleDto;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Services;

public class GoogleService(UserManager<User> userManager, IConfiguration configuration) : IGoogleService
{
    private readonly UserManager<User> _userManager = userManager;
    private readonly IConfiguration _configuration = configuration;
    
    public async Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client)
    {
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri("https://www.googleapis.com/oauth2/v4/token"),
            Content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                {"client_id", _configuration["ExternalAuth:Google:ClientId"]!},
                {"client_secret", _configuration["ExternalAuth:Google:ClientSecret"]!},
                {"grant_type", "authorization_code"},
                {"code", code},
                {"redirect_uri", "http://localhost:3000/google-callback"},
            })
        };
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(content);
        return tokenResponse?.Token;
    }

    public async Task<GoogleUser?> GetUserInfo(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "https://www.googleapis.com/oauth2/v2/userinfo");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var user = JsonConvert.DeserializeObject<GoogleUser>(content);
        return user;
    }
}