import { z } from "zod";
import addMissionFormSchema from "@/src/schemas/addMissionFormSchema";
import editMissionFormSchema from "@/src/schemas/editMissionFormSchema";

const combinedMissionFormSchema = z.union([
  addMissionFormSchema,
  editMissionFormSchema,
]);

export default combinedMissionFormSchema;
