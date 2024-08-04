using Contracts;
using Data.Models;
using Microsoft.Extensions.Logging;

namespace Services;

public class LogsService(IErrorLogsRepository errorLogsRepository, ILoggerFactory factory) : ILogsService
{
    private readonly IErrorLogsRepository _errorLogsRepository = errorLogsRepository;
    private readonly ILogger _logger = factory.CreateLogger("LifeIsAGame");
    
    public async Task InsertLog(string message, params object[] args)
    {
        _logger.LogError(message, args);
        var errorLog = new ErrorLog
        {
            Message = string.Format(message, args),
            Date = DateTime.UtcNow
        };

        await _errorLogsRepository.InsertLog(errorLog);
    }
}