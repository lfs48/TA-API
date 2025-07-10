import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const userData = [
    {
        id: 'alice',
        username: 'Alice',
        password: '12345678',
    },
    {
        id: 'bob',
        username: 'Bob',
        password: '12345678',
    },
    {
        id: 'charlie',
        username: 'Charlie',
        password: '12345678',
    },
    {
        id: 'dave',
        username: 'Dave',
        password: '12345678',
    },
    {
        id: 'eve',
        username: 'Eve',
        password: '12345678',
    },
];

const gameData = [
    {
        id: 'alicegame',
        title: "Alice's Game",
        description: 'This is a test game.',
        passphrase: 'stegosaur-untoasted-peroxide-buffed',
        gmId: 'Alice',
        playerIds: ['Bob', 'Charlie'],
    },
    {
        id: 'bobgame',
        title: "Bob's Game",
        description: 'This is a test game.',
        passphrase: 'pushpin-unexpired-afflicted-jaundice',
        gmId: 'Bob',
        playerIds: ['Alice', 'Charlie'],
    },
    {
        id: 'charliegame',
        title: "Charlie's Game",
        description: 'This is a test game.',
        passphrase: 'mayflower-partly-condition-conch',
        gmId: 'Charlie',
        playerIds: ['Alice', 'Bob'],
    },
    {
        id: 'davegame',
        title: "Dave's Game",
        description: 'This is a test game.',
        passphrase: 'prone-tropical-triage-clover',
        gmId: 'Dave',
        playerIds: ['Eve', 'Alice'],
    },
    {
        id: 'evegame',
        title: "Eve's Game",
        description: 'This is a test game.',
        passphrase: 'abacus-foil-goatskin-husband',
        gmId: 'Eve',
        playerIds: ['Dave', 'Bob'],
    },
];

const inviteData = [
    {
        gameId: `alicegame`,
        inviteeId: 'Bob',
        inviterId: 'Alice',
    },
    {
        gameId: `bobgame`,
        inviteeId: 'Charlie',
        inviterId: 'Bob',
    },
    {
        gameId: `charliegame`,
        inviteeId: 'Alice',
        inviterId: 'Charlie',
    },
    {
        gameId: `davegame`,
        inviteeId: 'Eve',
        inviterId: 'Dave',
    },
    {
        gameId: `evegame`,
        inviteeId: 'Bob',
        inviterId: 'Eve',
    },
];

async function main() {

    // Seed users
    await Promise.all(
        userData.map(async (user) => {
            return await prisma.user.upsert({
                where: { id: user.id },
                update: {},
                create: {
                    id: user.id,
                    username: user.username,
                    password: await bcrypt.hash(user.password, 10),
                },
            });
        })
    );

    // Seed games
    await Promise.all(
        gameData.map(async (game) => {
            return await prisma.game.upsert({
                where: { id: game.id },
                update: {},
                create: {
                    id: game.id,
                    title: game.title,
                    description: game.description,
                    passphrase: game.passphrase,
                    gmID: game.gmId,
                    players: {
                        connect: game.playerIds.map(pid => ({ id: pid })),
                    },
                },
            });
        })
    );

    // Seed invites
    await Promise.all(
        inviteData.map(async (invite) => {
            await prisma.invite.create({
                data: {
                    inviterId: invite.inviterId,
                    inviteeId: invite.inviteeId,
                    gameId: invite.gameId,
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