import { z } from "zod/v4";

export const InviteStatus = z.enum([
    'PENDING',
    'ACCEPTED',
    'REJECTED',
]);

export const postInviteValidation = z.object({
    body: z.object({
        invite: z.object({
            inviteeUsername: z.string(),
            gameId: z.uuid(),
        }),
    }),
});

export const patchInviteValidation = z.object({
    body: z.object({
        invite: z.object({
            status: InviteStatus
            ,
        }),
    }),
});