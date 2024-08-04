using System.Net.Http.Headers;
using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.Auth.GithubDto;
using Contracts.DTO.User;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Services;

public class GithubService(UserManager<User> userManager, IConfiguration configuration) : IGithubService
{
    private readonly UserManager<User> _userManager = userManager;
    private readonly IConfiguration _configuration = configuration;
    
    public async Task<string?> ExchangeCodeForTokenAsync(string code, HttpClient client)
    {
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri("https://github.com/login/oauth/access_token"),
            Content = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                { "client_id", _configuration["ExternalAuth:Github:ClientId"]! },
                { "client_secret", _configuration["ExternalAuth:Github:ClientSecret"]!},
                { "code", code },
                { "redirect_uri", "http://localhost:3000/github-callback" }
            })
        };
        request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var tokenResponse = JsonConvert.DeserializeObject<TokenResponse>(content);
        return tokenResponse?.Token;
    }
    
    public async Task<GithubUser?> GetUserInfo(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        request.Headers.UserAgent.ParseAdd("Life is a Game");

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var user = JsonConvert.DeserializeObject<GithubUser>(content);
        if (user is null) return null;

        if (user.Email is null)
        {
            var email = await GetGithubUserEmail(accessToken, client);
            if (email is null) return null;
            user.Email = email.Email;
        }
        
        return user;
    }

    private async Task<GithubEmail?> GetGithubUserEmail(string accessToken, HttpClient client)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.github.com/user/emails");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
        request.Headers.UserAgent.ParseAdd("Life is a Game");

        var response = await client.SendAsync(request);
        var content = await response.Content.ReadAsStringAsync();

        var emails = JsonConvert.DeserializeObject<List<GithubEmail>>(content);
        return emails?.FirstOrDefault(e => e.IsPrimary);
    }
}