import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const userData = [
    {
        username: 'Alice',
        password: '12345678',
    },
    {
        username: 'Bob',
        password: '12345678',
    },
    {
        username: 'Charlie',
        password: '12345678',
    },
    {
        username: 'Dave',
        password: '12345678',
    },
    {
        username: 'Eve',
        password: '12345678',
    },
];

const gameData = [
    {
        title: 'Test Game 1',
        description: 'This is a test game.',
        passphrase: 'stegosaur-untoasted-peroxide-buffed',
    },
        {
        title: 'Test Game 2',
        description: 'This is a test game.',
        passphrase: 'pushpin-unexpired-afflicted-jaundice',
    },
        {
        title: 'Test Game 3',
        description: 'This is a test game.',
        passphrase: 'mayflower-partly-condition-conch',
    },
        {
        title: 'Test Game 4',
        description: 'This is a test game.',
        passphrase: 'prone-tropical-triage-clover',
    },
        {
        title: 'Test Game 5',
        description: 'This is a test game.',
        passphrase: 'abacus-foil-goatskin-husband',
    },
];


async function main() {

    const users = await Promise.all(
        userData.map(async (user) => {
            return await prisma.user.upsert({
                where: { username: user.username },
                update: {},
                create: {
                    username: user.username,
                    password: await bcrypt.hash(user.password, 10),
                },
            });
        })
    );

    let gmIndex = 0;
    const games = await Promise.all(
        gameData.map(async (game) => {
            gmIndex = (gmIndex + 1) % users.length;
            return await prisma.game.create({
                data: {
                    ...game,
                    gmID: users[gmIndex].id,
                    players: {
                        connect: users.filter((_, index) => index !== gmIndex).map(user => ({ id: user.id })),
                    },
                },
            });
        })
    );
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })