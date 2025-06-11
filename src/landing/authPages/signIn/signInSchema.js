import * as z from "zod";

export const signinSchema = z.object({
    email: z.string().trim().email("Please type a valid email").min(1, "Please type your log in id"),
    password: z.string().trim().min(1, "Please type your password"),
});