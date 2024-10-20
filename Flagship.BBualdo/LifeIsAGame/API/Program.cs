using Contracts;
using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Repository;
using Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<LiagDbContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer")));

builder.Services.AddAuthentication();

builder.Services.AddIdentity<User, IdentityRole>(options =>
  {
    options.User.RequireUniqueEmail = true;
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+ ";
  })
  .AddEntityFrameworkStores<LiagDbContext>()
  .AddSignInManager<SignInManager<User>>()
  .AddTokenProvider<DataProtectorTokenProvider<User>>(TokenOptions.DefaultProvider);

builder.Services.ConfigureApplicationCookie(options =>
{
  options.Cookie.HttpOnly = false;
  options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
  options.Cookie.SameSite = SameSiteMode.None;
  options.Cookie.Name = "LIAGToken";
  options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
  options.SlidingExpiration = true;
});

builder.Services.AddHttpClient();

builder.Services.AddScoped<IAchievementsRepository, AchievementsRepository>();
builder.Services.AddScoped<IMissionsRepository, MissionsRepository>();
builder.Services.AddScoped<ISubtasksRepository, SubtasksRepository>();
builder.Services.AddScoped<IErrorLogsRepository, ErrorLogsRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IGithubService, GithubService>();
builder.Services.AddScoped<IFacebookService, FacebookService>();
builder.Services.AddScoped<IGoogleService, GoogleService>();
builder.Services.AddScoped<IAchievementsService, AchievementsService>();
builder.Services.AddScoped<IMissionsService, MissionsService>();
builder.Services.AddScoped<ISubtasksService, SubtasksService>();
builder.Services.AddScoped<ILevelsService, LevelsService>();
builder.Services.AddScoped<IProfileService, ProfileService>();
builder.Services.AddScoped<ILogsService, LogsService>();
builder.Services.AddScoped<IEmailService, AzureEmailService>();

builder.Services.AddCors(options =>
  options.AddPolicy("default", policyBuilder => 
    policyBuilder.AllowCredentials().AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"))
  );

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
  var dbContext = scope.ServiceProvider.GetRequiredService<LiagDbContext>();
  dbContext.Database.EnsureCreated();
}

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("default");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();