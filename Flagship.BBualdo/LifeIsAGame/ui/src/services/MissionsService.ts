import axios, { AxiosResponse } from "axios";
import IMission from "@/src/models/IMission";
import { baseUrl } from "@/src/utils/config";
import IAddMissionDto from "@/src/services/DTO/IAddMissionDto";
import IUpdateMissionDto from "@/src/services/DTO/IUpdateMissionDto";

class MissionsService {
  static async getMissions(userId: string): Promise<AxiosResponse<IMission[]>> {
    return await axios.get(baseUrl + "missions/get-missions", {
      params: { userId },
      withCredentials: true,
    });
  }

  static async addMission(
    mission: IAddMissionDto,
  ): Promise<AxiosResponse<IMission>> {
    return await axios.post(baseUrl + "missions/add-mission", mission, {
      withCredentials: true,
    });
  }

  static async updateMission(
    mission: IUpdateMissionDto,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.put(
      baseUrl + `missions/update-mission/${mission.id}`,
      mission,
      { withCredentials: true },
    );
  }

  static async deleteMission(
    missionId: string,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.delete(baseUrl + `missions/${missionId}`, {
      withCredentials: true,
    });
  }

  static async toggleSubtask(
    subtaskId: string,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.put(
      baseUrl + `missions/${subtaskId}/toggle`,
      {},
      { withCredentials: true },
    );
  }

  static async completeMission(
    missionId: string,
    userId: string,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.put(
      baseUrl + `missions/${missionId}/complete`,
      {},
      {
        params: {
          userId,
        },
        withCredentials: true,
      },
    );
  }
}

export default MissionsService;
