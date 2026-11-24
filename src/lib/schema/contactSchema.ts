import z from "zod";

export const contactSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, "Full name must be at least 3 characters"),
    email: z
        .string()
        .min(1, "Email address is required")
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .trim()
        .min(1, "Phone number is required")
        .regex(/^(?:\+234|0)[789]\d{9}$/, "Enter a vlid Nigerian phone number"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
})

export type ContactFormValues = z.infer<typeof contactSchema>;