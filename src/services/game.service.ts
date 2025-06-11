import prisma from './index';

export const findGameById = async (id) => await prisma.game.findUnique({
    where: { id },
    include: {
        gm: true,
        players: true
    },
});

export const findUserGames = async (id) => await prisma.game.findMany({
    where: {
        OR: [
            { gmID: id },
            { players: { some: { id } } }
        ]
    },
    include: {
        gm: true,
        players: true
    },
});