import { PostUser } from 'types';
import prisma from './index';
import bcrypt from 'bcryptjs';

const newUser = async ({ username, password }: PostUser) => await prisma.user.create({
    data: {
        username: username,
        password: await bcrypt.hash(password, 10),
    },
});

const findUser = async (username: string) => await prisma.user.findFirst({
    where: {
        username: username,
    },
});

export default {
    newUser,
    findUser,
};