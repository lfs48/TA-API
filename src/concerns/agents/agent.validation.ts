import { z } from "zod/v4";

export const postAgentValidation = z.object({
    body: z.object({
        agent: z.object({
            name: z.string()
                .min(1, "Name is required")
                .max(30, "Name must be 30 characters or fewer"),
            gameId: z.uuid(),
        })

    })
});