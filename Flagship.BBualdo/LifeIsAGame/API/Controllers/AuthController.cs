using Contracts;
using Contracts.DTO.Auth;
using Contracts.DTO.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController(IAuthService authService, IHttpClientFactory httpClientFactory) : ControllerBase
    {
        private readonly IAuthService _authService = authService;
        private readonly IHttpClientFactory _httpClientFactory = httpClientFactory;

        [HttpGet("current-user")]
        [Authorize]
        public async Task<ActionResult> GetUser()
        {
            var user = await _authService.GetCurrentUserAsync(User);
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto loginDto)
        {
            var result = await _authService.LoginAsync(loginDto);
            if (result.Success)
                return Ok(result.Message);

            return BadRequest(new { message = result.Message, errors = result.Errors });
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            var result = await _authService.RegisterAsync(registerDto);
            if (result.Success)
                return Ok(result.Message);

            return BadRequest(new { message = result.Message, errors = result.Errors });
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await _authService.LogoutAsync();
            return Ok(new { message = "Logout successful." });
        }

        [HttpGet("login-with-github")]
        public async Task<ActionResult> LoginWithGithub(string code)
        {
            var client = _httpClientFactory.CreateClient();
            var result = await _authService.LoginOrLinkWithGithubAsync(code, client);

            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });
            
            return Ok(result.Message);
        }
        
        [HttpGet("login-with-facebook")]
        public async Task<ActionResult> LoginWithFacebook(string code)
        {
            var client = _httpClientFactory.CreateClient();
            var result = await _authService.LoginOrLinkWithFacebookAsync(code, client);

            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });
            
            return Ok(result.Message);
        }
        
        [HttpGet("login-with-google")]
        public async Task<ActionResult> LoginWithGoogle(string code)
        {
            var client = _httpClientFactory.CreateClient();
            var result = await _authService.LoginOrLinkWithGoogleAsync(code, client);

            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });
            
            return Ok(result.Message);
        }

        [HttpPost("link-account")]
        public async Task<ActionResult> LinkAccount(string code, string userId, string providerName)
        {
            var client = _httpClientFactory.CreateClient();
            OperationResult result;
            switch (providerName)
            {
                case "Github":
                    result = await _authService.LoginOrLinkWithGithubAsync(code, client, userId);
                    break;
                case "Facebook":
                    result = await _authService.LoginOrLinkWithFacebookAsync(code, client, userId);
                    break;
                case "Google":
                    result = await _authService.LoginOrLinkWithGoogleAsync(code, client, userId);
                    break;
                
                default:
                    result = new OperationResult
                    {
                        Success = false,
                        Message = "Wrong provider!",
                        Errors = ["Provider with that name doesn't exist."]
                    };
                    break;
            }

            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });

            return Ok(new { message = result.Message });
        }

        [HttpPost("unlink-account")]
        public async Task<ActionResult> UnlinkAccount(string providerName, string userId)
        {
            var result = await _authService.UnlinkAccountAsync(providerName, userId);
            if (!result.Success) return BadRequest(new { message = result.Message, errors = result.Errors });
            return Ok(new { message = result.Message } );
        }

        [HttpGet("forgot-password")]
        public async Task<ActionResult> ForgotPassword(string email)
        {
            var result = await _authService.RequestPasswordResetAsync(email);
            return !result.Success ? Problem(result.Message) : Ok(result.Message);
        }

        [HttpPost("reset-password")]
        public async Task<ActionResult> ResetPassword(NewPasswordDto passwordDto)
        {
            var result = await _authService.ResetPasswordAsync(passwordDto);
            return !result.Success
                ? BadRequest(new { message = result.Message, errors = result.Errors })
                : Ok(result.Message);
        }
    }
}
