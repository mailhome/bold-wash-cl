import z from "zod";

export const newsLetterSchema = z.object({
    email: z
        .string()
        .min(1, "Email address is required")
        .email("Please enter a valid email address")
})

export type NewsLetterValues = z.infer<typeof newsLetterSchema>;