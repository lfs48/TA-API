import { z } from "zod/v4";

import { Game, Invite, User } from "@prisma/client";

export interface InviteData {
    inviteeId: string;
    inviterId: string;
    gameId: string;
}

export type InviteWithRelations = Invite & {
    invitee: User;
    inviter: User;
    game: Game;
};

export const InviteStatus = z.enum([
    'PENDING',
    'ACCEPTED',
    'REJECTED',
]);