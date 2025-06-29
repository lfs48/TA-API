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