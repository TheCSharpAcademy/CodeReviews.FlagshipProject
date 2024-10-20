namespace Contracts;

public interface ILogsService
{
    Task InsertLog(string message, params object[] args);
}