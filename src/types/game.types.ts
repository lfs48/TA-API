import { Game, User } from '@prisma/client';

export interface PostGame {
    game: {
        title: string;
        description: string;
    }
}

export type GameWithRelations = Game & {
    gm: User | null;
    players: User[];
}