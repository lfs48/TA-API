import { z } from "zod/v4";

// Validation for relationship endpoint
export const patchRelationshipValidation = z.object({
    body: z.object({
        relationship: z.object({
            name: z.string().min(1, "Name is required").max(100, "Name must be 100 characters or fewer").optional(),
            description: z.string().max(500, "Description must be 500 characters or fewer").optional(),
            connection: z.number().int().min(0).max(9).optional(),
            active: z.boolean().optional(),
            uses: z.number().int().min(0).optional(),
            playerId: z.string().optional(),
            connectionBonusId: z.string().optional()
        }).strict()
    })
});