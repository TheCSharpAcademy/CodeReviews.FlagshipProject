using System.ComponentModel.DataAnnotations;

namespace Data.Models;

public class ErrorLog
{
  [Required] [Key] public int Id { get; set; }
  [Required] [StringLength(200)] public string? Message { get; set; }
  [Required] public DateTime? Date { get; set; }
}