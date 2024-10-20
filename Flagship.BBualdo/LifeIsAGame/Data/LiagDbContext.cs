using Data.Helpers;
using Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Data;

public class LiagDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
  public DbSet<Mission> Missions { get; set; }
  public DbSet<Subtask> Subtasks { get; set; }
  public DbSet<Achievement> Achievements { get; set; }
  public DbSet<UserAchievement> UserAchievements { get; set; }
  public DbSet<ErrorLog> ErrorLogs { get; set; }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);
    builder.Entity<Achievement>().HasData(AchievementSeeder.GetAchievements());
    
    builder.Entity<Subtask>()
      .HasOne(st => st.Mission)
      .WithMany(m => m.Subtasks)
      .HasForeignKey(st => st.MissionId);
  }
}