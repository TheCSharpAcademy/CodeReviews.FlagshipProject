import * as z from "zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
  password: z.string().min(1, "Password is required."),
  rememberMe: z.boolean(),
});

export default loginFormSchema;
