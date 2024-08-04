import * as z from "zod";
import {
  digitValidator,
  specialCharacterValidator,
  uppercaseValidator,
} from "@/src/utils/passwordValidators";

const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters long." })
      .max(50, { message: "Username is too long." }),
    email: z.string().email({ message: "Email must be valid." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(30)
      .regex(digitValidator, {
        message: "Password must contain at least one digit.",
      })
      .regex(specialCharacterValidator, {
        message: "Password must contain at least one special character.",
      })
      .regex(uppercaseValidator, {
        message: "Password must contain at least one uppercase.",
      }),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] },
  );

export default signupFormSchema;
