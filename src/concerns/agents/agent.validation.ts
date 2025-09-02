import { z } from "zod/v4";

// Schema for individual quality validation
const qualitySchema = z.object({
    current: z.number().int().min(0).max(9),
    max: z.number().int().min(0).max(9),
});

// Schema for agent qualities validation
const qualitiesSchema = z.object({
    attentiveness: qualitySchema,
    duplicity: qualitySchema,
    dynamism: qualitySchema,
    empathy: qualitySchema,
    initiative: qualitySchema,
    persistence: qualitySchema,
    presence: qualitySchema,
    professionalism: qualitySchema,
    subtlety: qualitySchema,
}).optional();

export const postAgentValidation = z.object({
    body: z.object({
        agent: z.object({
            name: z.string()
                .min(1, "Name is required")
                .max(30, "Name must be 30 characters or fewer"),
            gameId: z.string(),
            qualities: qualitiesSchema.optional(),
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
            qualities: qualitiesSchema.optional(),
            anomalyId: z.string().optional(),
            realityId: z.string().optional(),
            competencyId: z.string().optional(),
        })
    })
});

// Validation for quality adjustment endpoints
export const patchAgentQualityValidation = z.object({
    body: z.object({
        quality: z.enum([
            "attentiveness",
            "duplicity", 
            "dynamism",
            "empathy",
            "initiative",
            "persistence",
            "presence",
            "professionalism",
            "subtlety"
        ]),
        quantity: z.number().int()
    })
});