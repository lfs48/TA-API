import prisma from '@/services';
import { Agent } from '@prisma/client';
import { AgentData } from 'concerns/agents/agent.types';
import { DEFAULT_AGENT_QUALITIES } from './agent.constants';

// Fetch an agent by id
export const findAgentById = async (
    id: string,
) => {
    return await prisma.agent.findUnique({
        where: {id: id},
        include: {
            player: true,
            game: true,
        }
    })
}

// Create an agent for a user in a game
export const createAgent = async (agentData: AgentData) => {
  return await prisma.agent.create({
    data: {
      ...agentData,
      qualities: DEFAULT_AGENT_QUALITIES,
    },
    include: {
      player: true,
      game: true,
    },
  });
};

// Update an agent by ID
export const updateAgent = async (id: string, agentData: Partial<AgentData>) => {
  return await prisma.agent.update({
    where: { id },
    data: {
      ...agentData,
    },
    include: {
      player: true,
      game: true,
      anomaly: true,
      reality: true,
      competency: true,
    },
  });
};

// Fetch all agents for a user
export const findUserAgents = async (playerId: string) => {
  return await prisma.agent.findMany({
    where: { playerId },
    include: {
      player: true,
      game: true,
    },
  });
};

// Fetch all agents for a game
export const findGameAgents = async (gameId: string) => {
  return await prisma.agent.findMany({
    where: { gameId },
    include: {
      player: true,
      game: true,
      anomaly: true,
      reality: true,
      competency: true,
    },
  });
};