import { z } from "zod/v4";

// Schema for individual quality validation
const qualitySchema = z.object({
    current: z.number().int().min(0).max(9),
    max: z.number().int().min(0).max(9),
});

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
});

const currencySchema = z.object({
    current: z.number().int().min(0),
    banked: z.number().int().min(0),
    spent: z.number().int().min(0),
});

const currenciesSchema = z.object({
    commendations: currencySchema,
    demerits: currencySchema,
});

const answersSchema = z.record(z.string(), z.number());

const directiveSchema = z.number().min(0).max(1);
const sanctionedSchema = z.array(z.boolean()).length(3);
const assessmentSchema = z.array(z.number().min(0).max(1));

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
            qualities: qualitiesSchema.optional(),
            currency: currenciesSchema.optional(),
            anomalyId: z.string().optional(),
            realityId: z.string().optional(),
            competencyId: z.string().optional(),
            directive: directiveSchema.optional(),
            sanctioned: sanctionedSchema.optional(),
            assessment: assessmentSchema.optional()
        }),
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

// Validation for currency endpoints
export const patchAgentCurrencyValidation = z.object({
    body: z.object({
        currency: z.enum(["commendations", "demerits"]),
        quantity: z.number().int()
    })
});

// Validation for currency reset endpoint
export const patchAgentCurrencyResetValidation = z.object({
    body: z.object({
        currency: z.enum(["commendations", "demerits"])
    })
});

// Validation for ability instance endpoint
export const patchAbilityInstanceValidation = z.object({
    body: z.object({
        abilityInstance: z.object({
            practiced: z.boolean().optional(),
            answers: answersSchema.optional()
        })
    })
});