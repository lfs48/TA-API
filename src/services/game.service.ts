import { Game } from '@prisma/client';
import prisma from './index';
import { GameWithRelations } from 'types';

export const findGameById = async (id:string): Promise<GameWithRelations | null> => await prisma.game.findUnique({
    where: { id },
    include: {
        gm: true,
        players: true
    },
});

export const findGameByPassphrase = async (passphrase:string): Promise<GameWithRelations | null> => await prisma.game.findUnique({
    where: { passphrase },
    include: {
        gm: true,
        players: true
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