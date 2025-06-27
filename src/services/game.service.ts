import { Game } from '@prisma/client';
import prisma from './index';
import { GameWithRelations } from '@/types';
import { GameRelations } from '@/types/game.types';

export const findGameById = async (id:string, includeRelations=true): Promise<GameWithRelations | null> => await prisma.game.findUnique({
    where: { id },
    include: {
        gm: includeRelations,
        players: includeRelations,
        invites: includeRelations,
    },
});

export const findGameByPassphrase = async (passphrase:string, includeRelations=true): Promise<GameWithRelations | null> => await prisma.game.findUnique({
    where: { passphrase },
    include: {
        gm: includeRelations,
        players: includeRelations
    },
});

export const findUserGames = async (id:string) => await prisma.game.findMany({
    where: {
        OR: [
            { gmID: id },
            { players: { some: { id } } }
        ]
    },
    include: {
        gm: true,
        players: true,
    },
});

export const createNewGame = async (gameData:Game) => await prisma.game.create({
    data: {
        ...gameData
    },
    include: {
        gm: true,
        players: true,
    }
});

export const updateGame = async (id:string, gameData:Game) => await prisma.game.update({
    where: { id: id },
    data: {
        ...gameData
    },
    include: {
        gm: true,
        players: true,
    }
});

export const disconnectPlayerFromGame = async(gameId:string, playerId:string):Promise<GameWithRelations> => await prisma.game.update({
    where: { id: gameId },
    data: {
        players: {
            disconnect: { id: playerId }
        }
    },
    include: {
        gm: true,
        players: true,
        invites: true,
    }
});