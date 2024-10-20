using Contracts;
using Data;
using Data.Models;

namespace Repository;

public class ErrorLogsRepository(LiagDbContext dbContext) : IErrorLogsRepository
{
    private readonly LiagDbContext _dbContext = dbContext;
    
    public async Task InsertLog(ErrorLog log)
    {
        await _dbContext.ErrorLogs.AddAsync(log);
        await _dbContext.SaveChangesAsync();
    }
}