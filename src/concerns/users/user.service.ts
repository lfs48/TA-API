import bcrypt from 'bcryptjs';

import { PostUser } from 'types';
import prisma from '@/services';

export const createNewUser = async ({ username, password }: PostUser) => await prisma.user.create({
    data: {
        username: username,
        password: await bcrypt.hash(password, 10),
    },
});

export const findUserByUsername = async (username: string) => {
    const user = await prisma.user.findFirst({
    where: {
        username: username,
    },
    include: {
        gmGames: true,
        playerGames: true,
        invitesReceived: true,
    }
    });

    if (!user) return null;

    const userGames = [
        ...(user.gmGames ?? []),
        ...(user.playerGames ?? [])
    ];

    // Return user with a single games key
    return {
        ...user,
        games: userGames,
        invites: user.invitesReceived,
    };
}

export const findUserByID = async (id: string) => {
    const user = await prisma.user.findFirst({
    where: {
        id: id,
    },
    include: {
        gmGames: true,
        playerGames: true,
        invitesReceived: true,
    }
    });

    if (!user) return null;

    const userGames = [
        ...(user.gmGames ?? []),
        ...(user.playerGames ?? [])
    ];

    return {
        ...user,
        games: userGames,
        invites: user.invitesReceived,
    };
};