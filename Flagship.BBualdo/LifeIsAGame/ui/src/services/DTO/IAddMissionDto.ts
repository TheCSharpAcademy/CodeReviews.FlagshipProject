import DifficultyLevel from "@/src/enums/DifficultyLevel";
import ISubtask from "@/src/models/ISubtask";

interface IAddMissionDto {
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  xpReward: number;
  subtasks: ISubtask[];
  userId: string;
}

export default IAddMissionDto;
