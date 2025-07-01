import { Game, Invite, User } from '@prisma/client';
import { InviteWithRelations } from 'types';

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
    invites?: InviteWithRelations[] | null;
}