using Azure;
using Azure.Communication.Email;
using Contracts;
using Contracts.DTO.User;
using Microsoft.Extensions.Configuration;

namespace Services;

public class AzureEmailService : IEmailService
{
    private readonly EmailClient _emailClient;
    
    public AzureEmailService(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("AzureCommunicationService")!;
        _emailClient = new EmailClient(connectionString);
    }
    public async Task<OperationResult> SendEmailAsync(string email, string subject, string htmlMessage)
    {
        var emailContent = new EmailContent(subject)
        {
            Html = htmlMessage
        };

        var emailMessage = new EmailMessage("DoNotReply@990b5b3e-8a90-4d18-829c-422f14bed5f5.azurecomm.net", email, emailContent);

        var emailSendOperation = await _emailClient.SendAsync(
            WaitUntil.Completed,
            emailMessage);

        if (emailSendOperation.Value.Status == EmailSendStatus.Failed)
        {
            return new OperationResult
            {
                Success = false,
                Message = "Sending email failed!"
            };
        }

        return new OperationResult()
        {
            Success = true,
            Message = "Email sent!"
        };
    }
}