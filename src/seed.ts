import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

import { ABILITY_SEED_DATA } from "./concerns/anomalies/anomaly.constants";
import { COMPETENCY_SEED_DATA } from "./concerns/competencies/competency.constants";

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
        gmId: 'alice',
        playerIds: ['bob', 'charlie'],
    },
    {
        id: 'bobgame',
        title: "Bob's Game",
        description: 'This is a test game.',
        passphrase: 'pushpin-unexpired-afflicted-jaundice',
        gmId: 'bob',
        playerIds: ['alice', 'charlie'],
    },
    {
        id: 'charliegame',
        title: "Charlie's Game",
        description: 'This is a test game.',
        passphrase: 'mayflower-partly-condition-conch',
        gmId: 'charlie',
        playerIds: ['alice', 'bob'],
    },
    {
        id: 'davegame',
        title: "Dave's Game",
        description: 'This is a test game.',
        passphrase: 'prone-tropical-triage-clover',
        gmId: 'dave',
        playerIds: ['eve', 'alice'],
    },
    {
        id: 'evegame',
        title: "Eve's Game",
        description: 'This is a test game.',
        passphrase: 'abacus-foil-goatskin-husband',
        gmId: 'eve',
        playerIds: ['dave', 'bob'],
    },
];

const inviteData = [
    {
        gameId: `alicegame`,
        inviteeId: 'bob',
        inviterId: 'alice',
    },
    {
        gameId: `bobgame`,
        inviteeId: 'charlie',
        inviterId: 'bob',
    },
    {
        gameId: `charliegame`,
        inviteeId: 'alice',
        inviterId: 'charlie',
    },
    {
        gameId: `davegame`,
        inviteeId: 'eve',
        inviterId: 'dave',
    },
    {
        gameId: `evegame`,
        inviteeId: 'bob',
        inviterId: 'eve',
    },
];

const anomalyData = [
    {
        id: 'whisper',
        name: 'Whisper',
    },
    {
        id: 'catalogue',
        name: 'Catalogue',
    },
    {
        id: 'drain',
        name: 'Drain',
    },
    {
        id: 'timepiece',
        name: 'Timepiece',
    },
    {
        id: 'growth',
        name: 'Growth',
    },
    {
        id: 'gun',
        name: 'Gun',
    },
    {
        id: 'dream',
        name: 'Dream',
    },
    {
        id: 'manifold',
        name: 'Manifold',
    },
    {
        id: 'absence',
        name: 'Absence',
    }
];

const realityData = [
    {
        id: 'caretaker',
        name: 'Caretaker',
    },
    {
        id: 'overbooked',
        name: 'Overbooked',
    },
    {
        id: 'pursued',
        name: 'Pursued',
    },
    {
        id: 'star',
        name: 'Star',
    },
    {
        id: 'struggling',
        name: 'Struggling',
    },
    {
        id: 'newborn',
        name: 'Newborn',
    },
    {
        id: 'romantic',
        name: 'Romantic',
    },
    {
        id: 'backbone',
        name: 'Backbone',
    },
    {
        id: 'creature',
        name: 'Creature',
    }
];

const agentData = [
    {
        id: 'agent1',
        name: 'Agent One',
        playerId: 'alice',
        gameId: 'alicegame',
        anomalyId: 'whisper',
        realityId: 'caretaker',
        competencyId: 'reception',
    },
    {
        id: 'agent2',
        name: 'Agent Two',
        playerId: 'bob',
        gameId: 'bobgame',
        anomalyId: 'catalogue',
        realityId: 'overbooked',
        competencyId: 'rnd',
    },
    {
        id: 'agent3',
        name: 'Agent Three',
        playerId: 'charlie',
        gameId: 'charliegame',
        anomalyId: 'drain',
        realityId: 'pursued',
        competencyId: 'barista',
    },
    {
        id: 'agent4',
        name: 'Agent Four',
        playerId: 'dave',
        gameId: 'davegame',
        anomalyId: 'timepiece',
        realityId: 'star',
        competencyId: 'ceo',
    },
    {
        id: 'agent5',
        name: 'Agent Five',
        playerId: 'eve',
        gameId: 'evegame',
        anomalyId: 'growth',
        realityId: 'newborn',
        competencyId: 'gravedigger',
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
    for (const invite of inviteData) {
        try {
            await prisma.invite.create({
                data: {
                    inviterId: invite.inviterId,
                    inviteeId: invite.inviteeId,
                    gameId: invite.gameId,
                },
            });
        } catch (error) {
            // Skip if already exists
            console.log(`Invite already exists for game ${invite.gameId} and invitee ${invite.inviteeId}`);
        }
    }

    //Seed anomalies
    await Promise.all(
        anomalyData.map(async (anomaly) => {
            await prisma.anomaly.upsert({
                where: { id: anomaly.id },
                update: {},
                create: {
                    id: anomaly.id,
                    name: anomaly.name,
                },
            });
        })
    );

    // Seed realities
    await Promise.all(
        realityData.map(async (reality) => {
            await prisma.reality.upsert({
                where: { id: reality.id },
                update: {},
                create: {
                    id: reality.id,
                    name: reality.name,
                },
            });
        })
    );

    // Seed competencies
    await Promise.all(
        COMPETENCY_SEED_DATA.map(async (competency) => {
            await prisma.competency.upsert({
                where: { id: competency.id },
                update: {},
                create: {
                    id: competency.id,
                    name: competency.name,
                },
            });
        })
    );

    //Seed abilities
    await Promise.all(
        ABILITY_SEED_DATA.map(async (ability) => {
            await prisma.ability.upsert({
                where: { id: ability.id },
                update: {},
                create: {
                    id: ability.id,
                    title: ability.title,
                    data: ability.data,
                    anomalyId: ability.anomalyId,
                },
            });
        })
    );

    //Seed agents
    await Promise.all(
        agentData.map(async (agent) => {
            await prisma.agent.upsert({
                where: { id: agent.id },
                update: {},
                create: {
                    id: agent.id,
                    name: agent.name,
                    playerId: agent.playerId,
                    gameId: agent.gameId,
                    anomalyId: agent.anomalyId,
                    realityId: agent.realityId,
                    competencyId: agent.competencyId,
                },
            });
        })
    );

    // Seed ability instances for each agent
    for (const agent of agentData) {
        // Find abilities that match this agent's anomaly
        const matchingAbilities = ABILITY_SEED_DATA.filter(
            ability => (ability as any).anomalyId === agent.anomalyId
        );

        // Create ability instances for each matching ability
        for (const ability of matchingAbilities) {
            try {
                await prisma.abilityInstance.create({
                    data: {
                        agentId: agent.id,
                        abilityId: ability.id,
                        practiced: false,
                        answers: {},
                    },
                });
            } catch (error) {
                // Skip if already exists
                console.log(`Ability instance already exists for agent ${agent.id} and ability ${ability.id}`);
            }
        }
    }

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