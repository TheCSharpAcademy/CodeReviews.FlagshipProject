import * as z from "zod";
import DifficultyLevel from "@/src/enums/DifficultyLevel";

const addMissionFormSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z
    .string()
    .max(2000, { message: "Mission description is too long." }),
  difficulty: z.nativeEnum(DifficultyLevel),
  xpReward: z.number(),
  subtasks: z.array(
    z.object({
      id: z.string(),
      title: z.string().max(50, { message: "Subtask title is too long." }),
      isCompleted: z.boolean(),
    }),
  ),
  userId: z.string(),
});

export default addMissionFormSchema;
