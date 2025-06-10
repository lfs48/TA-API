import { PostUser } from 'types';
import prisma from './index';
import bcrypt from 'bcryptjs';

export const createNewUser = async ({ username, password }: PostUser) => await prisma.user.create({
    data: {
        username: username,
        password: await bcrypt.hash(password, 10),
    },
});

export const findUserByUsername = async (username: string) => await prisma.user.findFirst({
    where: {
        username: username,
    },
});

export const findUserByID = async (id: string) => await prisma.user.findUnique({
    where: {
        id: id,
    },
});