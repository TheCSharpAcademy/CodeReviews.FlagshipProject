import DifficultyLevel from "@/src/enums/DifficultyLevel";
import ISubtask from "@/src/models/ISubtask";

interface IMission {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  xpReward: number;
  createdAt: Date;
  isCompleted: boolean;
  completedAt: Date;
  subtasks: ISubtask[];
  userId: string;
}

export default IMission;
