import { Game, Invite, User } from "@prisma/client";

export type InviteWithRelations = Invite & {
    invitee: User;
    inviter: User;
    game: Game;
}

export enum InviteStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}