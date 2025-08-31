import { z } from "zod/v4";

export const postGameValidation = z.object({
    body: z.object({
        game: z.object({
            title: z.string()
                .min(3, "Title must be at least 3 characters")
                .max(30, "Title must be 30 characters or fewer")
            ,
            description: z.string()
                .max(255, "Description must be 255 characters or fewer")
            ,
        }),
    }),
});

export const patchGameValidation = z.object({
    body: z.object({
        game: z.object({
            title: z.string()
                .min(3, "Title must be at least 3 characters")
                .max(30, "Title must be 30 characters or fewer")
                .optional()
            ,
            description: z.string()
                .max(255, "Description must be 255 characters or fewer")
                .optional()
            ,
            active: z.boolean()
                .optional()
            ,
        }),
    }),
});

export const removePlayerValidation = z.object({
    body: z.object({
        playerId: z.string(),
    }),
});