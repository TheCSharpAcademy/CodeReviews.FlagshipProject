import * as z from "zod";

// Mission Schema
export const missionFormSchema = z.object({
  id: z.string(),
  status: z.union([z.literal("active"), z.literal("completed")]),
  title: z
    .string()
    .min(6, { message: "Mission title is too short." })
    .max(50, { message: "Mission title is too long." }),
  description: z.string().max(2000),
  difficulty: z.union([
    z.literal("Daily"),
    z.literal("Drop of Sweat"),
    z.literal("Challenging"),
    z.literal("Life-Hacker"),
    z.literal("Anti-Procrastinator"),
  ]),
  xp: z.number(),
  subtasks: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      isCompleted: z.boolean(),
    }),
  ),
  creationDate: z.string(),
  completionDate: z.string(),
});

// Signup Zod Schema
export const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters." })
      .max(50),
    email: z.string().email({ message: "Email must be valid." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(30),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(30),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] },
  );

// Login Zod Schema
export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(30, { message: "Password is too long." }),
});

// Temporary User Creation
export const userCreatorSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters." })
    .max(15, { message: "First name can't be longer than 15 characters." }),
  lastName: z
    .string()
    .max(25, { message: "Last name can't be longer than 25 characters." })
    .optional(),
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." })
    .max(50),
  currentGoal: z
    .string()
    .max(50, { message: "Describe your goal shorter." })
    .optional(),
  bio: z.string().optional(),
});
