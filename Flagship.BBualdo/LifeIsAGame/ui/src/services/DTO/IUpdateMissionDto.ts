import ISubtask from "@/src/models/ISubtask";

interface IUpdateMissionDto {
  id: string;
  title: string;
  description: string;
  subtasks: ISubtask[];
}

export default IUpdateMissionDto;
