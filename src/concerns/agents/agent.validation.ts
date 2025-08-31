import { z } from "zod/v4";

export const postAgentValidation = z.object({
    body: z.object({
        agent: z.object({
            name: z.string()
                .min(1, "Name is required")
                .max(30, "Name must be 30 characters or fewer"),
            gameId: z.string(),
            anomalyId: z.string().optional(),
            realityId: z.string().optional(),
            competencyId: z.string().optional(),
        })

    })
});

export const patchAgentValidation = z.object({
    body: z.object({
        agent: z.object({
            name: z.string()
                .min(1, "Name is required")
                .max(30, "Name must be 30 characters or fewer")
                .optional(),
            anomalyId: z.string().optional(),
            realityId: z.string().optional(),
            competencyId: z.string().optional(),
        })
    })
});