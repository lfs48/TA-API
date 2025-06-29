import { Game, Invite, User } from '@prisma/client';

export interface PostGame {
    game: {
        title: string;
        description: string;
    }
}

export type GameWithRelations = Game & {
    playerIds?: string[] | null;
    inviteIds?: string[] | null;
    gm?: User | null;
    players?: User[] | null;
    invites?: Invite[] | null;
}