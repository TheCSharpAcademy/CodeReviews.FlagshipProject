namespace Data.Models;

public class Level(int levelNumber, int xpCeil)
{
    public int LevelNumber { get; set; } = levelNumber;
    public int XpCeil { get; set; } = xpCeil;
}