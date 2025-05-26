import { z } from "zod";

export const loginValidation = z.object({
    body: z.object({
        user: z.object({
            username: z.string().min(1, "Username is required"),
            password: z.string().min(1, "Password is required"),
        }),
    }),
});

export const signupValidation = z.object({
    body: z.object({
        user: z.object({
            username: 
                z.string()
                .min(3, "Username must be at least 3 characters")
                .max(20, "Username must be less than 20 characters"),
            password: 
                z.string()
                .min(12, "Password must be at least 12 characters")
                .max(100, "Password must be less than 100 characters"),
        }),
    }),
})