import { z } from "zod/v4";

import { Game, Invite, User } from "@prisma/client";

export type InviteWithRelations = Invite & {
    invitee: User;
    inviter: User;
    game: Game;
}

export const InviteStatus = z.enum([
    'PENDING',
    'ACCEPTED',
    'REJECTED',
])