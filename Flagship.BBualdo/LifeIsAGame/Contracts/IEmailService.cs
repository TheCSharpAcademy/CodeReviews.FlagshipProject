using Contracts.DTO.User;

namespace Contracts;

public interface IEmailService
{
    Task<OperationResult> SendEmailAsync(string email, string subject, string htmlMessage);
}