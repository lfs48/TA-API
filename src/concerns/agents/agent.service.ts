import prisma from '@/services';
import { Agent } from '@prisma/client';
import { AgentData } from 'concerns/agents/agent.types';
import { DEFAULT_AGENT_CURRENCY, DEFAULT_AGENT_QUALITIES } from './agent.constants';

// Fetch an agent by id
export const findAgentById = async (
    id: string,
) => {
    return await prisma.agent.findUnique({
        where: {id: id},
        include: allAgentRelations,
    })
}

// Create an agent for a user in a game
export const createAgent = async (agentData: AgentData) => {
  return await prisma.agent.create({
    data: {
      ...agentData,
      qualities: DEFAULT_AGENT_QUALITIES,
      currency: DEFAULT_AGENT_CURRENCY,
    },
    include: allAgentRelations
  });
};

// Update an agent by ID
export const updateAgent = async (id: string, agentData: Partial<AgentData>) => {
  return await prisma.agent.update({
    where: { id },
    data: {
      ...agentData,
    },
    include: allAgentRelations
  });
};

// Fetch all agents for a user
export const findUserAgents = async (playerId: string) => {
  return await prisma.agent.findMany({
    where: { playerId },
    include: allAgentRelations
  });
};

// Fetch all agents for a game
export const findGameAgents = async (gameId: string) => {
  return await prisma.agent.findMany({
    where: { gameId },
    include: allAgentRelations
  });
};

// Update agent quality current value
export const updateAgentQualityCurrent = async (id: string, quality: string, quantity: number) => {
  const agent = await findAgentById(id);
  if (!agent) return null;

  const qualities = agent.qualities as any || DEFAULT_AGENT_QUALITIES;
  const currentValue = qualities[quality]?.current || 0;
  const maxValue = qualities[quality]?.max || 0;

  // Calculate new current value, clamped between 0 and max
  const newCurrent = Math.max(0, Math.min(maxValue, currentValue + quantity));

  const updatedQualities = {
    ...qualities,
    [quality]: {
      ...qualities[quality],
      current: newCurrent
    }
  };

  return await prisma.agent.update({
    where: { id },
    data: { qualities: updatedQualities },
    include: allAgentRelations,
  });
};

// Update agent quality max value
export const updateAgentQualityMax = async (id: string, quality: string, quantity: number) => {
  const agent = await findAgentById(id);
  if (!agent) return null;

  const qualities = agent.qualities as any || DEFAULT_AGENT_QUALITIES;
  const currentMax = qualities[quality]?.max || 0;
  const currentCurrent = qualities[quality]?.current || 0;

  // Calculate new max value, clamped between 0 and 9
  const newMax = Math.max(0, Math.min(9, currentMax + quantity));
  
  // If new max is less than current, adjust current down
  const newCurrent = Math.min(currentCurrent, newMax);

  const updatedQualities = {
    ...qualities,
    [quality]: {
      current: newCurrent,
      max: newMax
    }
  };

  return await prisma.agent.update({
    where: { id },
    data: { qualities: updatedQualities },
    include: allAgentRelations,
  });
};

// Earn currency (increase current and banked)
export const earnAgentCurrency = async (id: string, currency: string, quantity: number) => {
  const agent = await findAgentById(id);
  if (!agent) return null;

  const currencyData = agent.currency as any || DEFAULT_AGENT_CURRENCY;
  const currentValues = currencyData[currency] || { current: 0, banked: 0, spent: 0 };

  const updatedCurrency = {
    ...currencyData,
    [currency]: {
      ...currentValues,
      current: currentValues.current + quantity,
      banked: currentValues.banked + quantity
    }
  };

  return await prisma.agent.update({
    where: { id },
    data: { currency: updatedCurrency },
    include: allAgentRelations,
  });
};

// Spend currency (decrease banked, increase spent)
export const spendAgentCurrency = async (id: string, currency: string, quantity: number) => {
  const agent = await findAgentById(id);
  if (!agent) return null;

  const currencyData = agent.currency as any || DEFAULT_AGENT_CURRENCY;
  const currentValues = currencyData[currency] || { current: 0, banked: 0, spent: 0 };

  const updatedCurrency = {
    ...currencyData,
    [currency]: {
      ...currentValues,
      banked: currentValues.banked - quantity,
      spent: currentValues.spent + quantity
    }
  };

  return await prisma.agent.update({
    where: { id },
    data: { currency: updatedCurrency },
    include: allAgentRelations,
  });
};

// Reset currency current value to 0
export const resetAgentCurrencyCurrent = async (id: string, currency: string) => {
  const agent = await findAgentById(id);
  if (!agent) return null;

  const currencyData = agent.currency as any || DEFAULT_AGENT_CURRENCY;
  const currentValues = currencyData[currency] || { current: 0, banked: 0, spent: 0 };

  const updatedCurrency = {
    ...currencyData,
    [currency]: {
      ...currentValues,
      current: 0
    }
  };

  return await prisma.agent.update({
    where: { id },
    data: { currency: updatedCurrency },
    include: allAgentRelations,
  });
};

const allAgentRelations = {
  player: true,
  game: true,
  anomaly: {
    include: {
      abilities: true,
    }
  },
  reality: true,
  competency: true,
  abilityInstances: true,
}