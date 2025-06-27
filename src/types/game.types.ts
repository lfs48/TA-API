import { Game, Invite, User } from '@prisma/client';

export interface PostGame {
    game: {
        title: string;
        description: string;
    }
}

export type GameWithRelations = Game & {
    gm?: User | null;
    players?: User[] | null;
    invites?: Invite[] | null;
}

export enum GameRelations {
    PLAYERS='players',
    GM='gm',
    INVITES='invites',
};