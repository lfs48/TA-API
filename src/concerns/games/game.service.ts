import { Game } from '@prisma/client';
import prisma from '@/services';
import { GameWithRelations } from '@/types';

export const findGameById = async (id:string): Promise<GameWithRelations | null> => {
    const game = await prisma.game.findUnique({
        where: { id },
        include: allGameRelations
    });

    if (!game) return null;
    return game;
};

export const findGameByPassphrase = async (passphrase:string): Promise<GameWithRelations | null> => {
    const game = await prisma.game.findUnique({
        where: { passphrase },
        include: allGameRelations
    });

    if (!game) return null;
    return game;
}

export const findUserGames = async (id:string) => {
    const games = await prisma.game.findMany({
        where: {
            OR: [
                { gmID: id },
                { players: { some: { id } } }
            ]
        },
        include: allGameRelations
    });

    return games;
}

export const createNewGame = async (gameData:Game) => {
    const game = await prisma.game.create({
        data: {
            ...gameData
        },
        include: allGameRelations
    });

    return game;
};

export const updateGame = async (id:string, gameData:Game) => {
    const game = await prisma.game.update({
        where: { id: id },
        data: {
            ...gameData
        },
        include: allGameRelations
    });

    return game;
};

export const disconnectPlayerFromGame = async(gameId:string, playerId:string):Promise<GameWithRelations> => {
    const game = await prisma.game.update({
        where: { id: gameId },
        data: {
            players: {
                disconnect: { id: playerId }
            }
        },
        include: allGameRelations,
    });

    return game;
};

const allGameRelations = {
  gm: true,
  players: true,
  invites: {
    include: {
      invitee: true,
      inviter: true,
      game: false,
    }
  }
};