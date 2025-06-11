import prisma from './index';

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