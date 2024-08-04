import { z } from "zod";

const editProfileInfoSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long." })
    .max(50, { message: "Username is too long." }),
  firstName: z
    .string()
    .max(24, { message: "First name can't be longer than 24 characters." })
    .optional(),
  lastName: z
    .string()
    .max(32, { message: "Last name can't be longer than 32 characters." })
    .optional(),
  currentGoal: z
    .string()
    .max(50, { message: "Describe your goal shorter." })
    .optional(),
  bio: z.string().max(2000, { message: "Bio is too long." }).optional(),
});

export default editProfileInfoSchema;
