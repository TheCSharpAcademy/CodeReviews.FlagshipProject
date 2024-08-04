import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/src/utils/config";
import IAchievement from "@/src/models/IAchievement";
import IUserAchievement from "@/src/models/IUserAchievement";
import IAchievementUnlockDto from "@/src/services/DTO/IAchievementUnlockDto";

class AchievementsService {
  static async getAchievements(): Promise<AxiosResponse<IAchievement[]>> {
    return await axios.get(baseUrl + "achievements/get-achievements", {
      withCredentials: true,
    });
  }

  static async getUserAchievements(
    userId: string,
  ): Promise<AxiosResponse<IUserAchievement[]>> {
    return await axios.get(baseUrl + `achievements/get-user-achievements`, {
      params: {
        userId,
      },
      withCredentials: true,
    });
  }

  static async unlockAchievement(
    achievementId: string,
    userId: string,
  ): Promise<AxiosResponse<IAchievementUnlockDto>> {
    return await axios.put(
      baseUrl + `achievements/${achievementId}/unlock`,
      {},
      { params: { userId }, withCredentials: true },
    );
  }
}

export default AchievementsService;
