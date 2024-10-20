using Data.Models;

namespace Contracts;

public interface IErrorLogsRepository
{
    Task InsertLog(ErrorLog log);
}