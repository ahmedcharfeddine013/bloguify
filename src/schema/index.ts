import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().min(1, "Email is required!").email("Invalid email"),
  password: z.string().min(8, "Password should be minimum of 8!"),
});
