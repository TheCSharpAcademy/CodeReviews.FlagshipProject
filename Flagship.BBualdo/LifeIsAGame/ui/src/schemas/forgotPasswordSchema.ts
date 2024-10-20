import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
});

export default forgotPasswordSchema;
