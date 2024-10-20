using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Data.Models;

public class Subtask
{
  [Required] [Key] public Guid Id { get; set; }
  [Required] [StringLength(50)] public string? Title { get; set; }
  [Required] public bool IsCompleted { get; set; }
  [Required] [ForeignKey(nameof(Mission))] public Guid MissionId { get; set; }
  [JsonIgnore] public Mission Mission { get; set; }
}