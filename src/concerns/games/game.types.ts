import { Game, Invite, User } from '@prisma/client';
import { AgentWithRelations, InviteWithRelations } from 'types';

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
    agents?: AgentWithRelations[] | null;
}