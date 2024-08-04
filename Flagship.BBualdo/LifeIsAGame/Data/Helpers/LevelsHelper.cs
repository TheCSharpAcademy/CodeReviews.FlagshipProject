using Data.Models;

namespace Data.Helpers;

public class LevelsHelper
{
    public static readonly List<Level> Levels =
    [
        new Level(1, 100),
        new Level(2, 200),
        new Level(3, 300),
        new Level(4, 400),
        new Level(5, 500),
        new Level(6, 625),
        new Level(7, 750),
        new Level(8, 875),
        new Level(9, 1000),
        new Level(10, 1150),
        new Level(11, 1300),
        new Level(12, 1450),
        new Level(13, 1600),
        new Level(14, 1750),
        new Level(15, 2000),
        new Level(16, 2200),
        new Level(17, 2400),
        new Level(18, 2600),
        new Level(19, 2800),
        new Level(20, 3000),
        new Level(21, 3250),
        new Level(22, 3500),
        new Level(23, 3750),
        new Level(24, 4000),
        new Level(25, 4250),
        new Level(26, 4500),
        new Level(27, 4750),
        new Level(28, 5000),
        new Level(29, 5250),
        new Level(30, 5500),
        new Level(31, 5750),
        new Level(32, 6000),
        new Level(33, 6250),
        new Level(34, 6500),
        new Level(35, 6750),
        new Level(36, 7000),
        new Level(37, 7250),
        new Level(38, 7500),
        new Level(39, 7750),
        new Level(40, 8000),
        new Level(41, 8250),
        new Level(42, 8500),
        new Level(43, 8750),
        new Level(44, 9000),
        new Level(45, 9250),
        new Level(46, 9500),
        new Level(47, 9750),
        new Level(48, 10000),
        new Level(49, 10500),
        new Level(50, 11000)
    ];

    public static int GetCeilForLevel(int levelNumber)
    {
        return Levels.FirstOrDefault(level => level.LevelNumber == levelNumber)?.XpCeil ?? 0;
    }
}