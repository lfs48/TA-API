import { Request, Response } from "express";
import { 
    createAgent, 
    findUserAgents, 
    findGameAgents, 
    findAgentById,
    updateAgent,
    updateAgentQualityCurrent,
    updateAgentQualityMax,
    earnAgentCurrency,
    spendAgentCurrency,
    resetAgentCurrencyCurrent,
    resetAgent,
    findAbilityInstanceById,
    updateAbilityInstance,
    findRequisitionInstanceById,
    updateRequisitionInstance,
    findRelationshipById,
    updateRelationship
} from "./agent.service";
import { getIdFromJWT } from "@/util";
import { whitelistAgentFields, whitelistAbilityInstanceFields, whitelistRequisitionInstanceFields } from "./agent.util";
import { whitelistRelationshipFields } from "./relationships/relationship.util";

// GET /agent/user endpoint controller (fetch all agents for the current user)
export const getAgentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const agent = await findAgentById(id);

        if(!agent) {
            res.status(404).json({ messages: ['Agent not found']});
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(agent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// GET /agent/user endpoint controller (fetch all agents for the current user)
export const getUserAgents = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const agents = await findUserAgents(userId);
        res.status(200).json({ agents: agents.map(agent => whitelistAgentFields(agent)) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// GET /agent/game/:gameId endpoint controller (fetch all agents for a game)
export const getGameAgents = async (req: Request, res: Response) => {
    try {
        const { gameId } = req.params;
        const agents = await findGameAgents(gameId);
        res.status(200).json({ agents: agents.map(agent => whitelistAgentFields(agent)) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// POST /agent endpoint controller
export const postAgent = async (req: Request, res: Response) => {
    try {
        const playerId = getIdFromJWT(req);
        const agentData = req.body.agent;

        const agent = await createAgent({
            ...agentData,
            playerId,
        });
        res.status(201).json({ agent: whitelistAgentFields(agent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id endpoint controller
export const patchAgent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const agentData = req.body.agent;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['This is not your agent'] });
            return;
        }

        const updatedAgent = await updateAgent(id, agentData);
        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/qa/current endpoint controller
export const patchAgentQualityCurrent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const { quality, quantity } = req.body;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your Agent'] });
            return;
        }

        const updatedAgent = await updateAgentQualityCurrent(id, quality, quantity);
        if (!updatedAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/qa/max endpoint controller
export const patchAgentQualityMax = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const { quality, quantity } = req.body;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Forbidden: You do not own this agent'] });
            return;
        }

        const updatedAgent = await updateAgentQualityMax(id, quality, quantity);
        if (!updatedAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/currency/earn endpoint controller
export const patchAgentCurrencyEarn = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const { currency, quantity } = req.body;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your Agent'] });
            return;
        }

        const updatedAgent = await earnAgentCurrency(id, currency, quantity);
        if (!updatedAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/currency/spend endpoint controller
export const patchAgentCurrencySpend = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const { currency, quantity } = req.body;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your Agent'] });
            return;
        }

        const updatedAgent = await spendAgentCurrency(id, currency, quantity);
        if (!updatedAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/currency/reset-current endpoint controller
export const patchAgentCurrencyResetCurrent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const { currency } = req.body;

        // Check if agent exists
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your Agent'] });
            return;
        }

        const updatedAgent = await resetAgentCurrencyCurrent(id, currency);
        if (!updatedAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(updatedAgent) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /agent/:id/reset endpoint controller (reset agent for new mission)
export const patchAgentReset = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);

        // Get existing agent to verify ownership
        const existingAgent = await findAgentById(id);
        if (!existingAgent) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        // Check if user owns the agent
        if (existingAgent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your Agent'] });
            return;
        }

        const resetAgentResult = await resetAgent(id);
        if (!resetAgentResult) {
            res.status(404).json({ messages: ['Agent not found'] });
            return;
        }

        res.status(200).json({ agent: whitelistAgentFields(resetAgentResult) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /ability-instance/:id endpoint controller
export const patchAbilityInstance = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const abilityInstanceData = req.body.abilityInstance;

        // Get existing ability instance to verify ownership
        const existingAbilityInstance = await findAbilityInstanceById(id);
        if (!existingAbilityInstance) {
            res.status(404).json({ messages: ['Ability instance not found'] });
            return;
        }

        // Check if user owns the agent associated with this ability instance
        if (existingAbilityInstance.agent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your ability instance'] });
            return;
        }

        const updatedAbilityInstance = await updateAbilityInstance(id, abilityInstanceData);
        if (!updatedAbilityInstance) {
            res.status(404).json({ messages: ['Ability instance not found'] });
            return;
        }

        res.status(200).json({ abilityInstance: whitelistAbilityInstanceFields(updatedAbilityInstance) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /requisition-instance/:id endpoint controller
export const patchRequisitionInstance = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const requisitionInstanceData = req.body.requisitionInstance;

        // Get existing requisition instance to verify ownership
        const existingRequisitionInstance = await findRequisitionInstanceById(id);
        if (!existingRequisitionInstance) {
            res.status(404).json({ messages: ['Requisition instance not found'] });
            return;
        }

        // Check if user owns the agent associated with this requisition instance
        if (existingRequisitionInstance.agent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your requisition instance'] });
            return;
        }

        const updatedRequisitionInstance = await updateRequisitionInstance(id, requisitionInstanceData);
        if (!updatedRequisitionInstance) {
            res.status(404).json({ messages: ['Requisition instance not found'] });
            return;
        }

        res.status(200).json({ requisitionInstance: whitelistRequisitionInstanceFields(updatedRequisitionInstance) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

// PATCH /relationship/:id endpoint controller
export const patchRelationship = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const relationshipData = req.body.relationship;

        // Get existing relationship to verify ownership
        const existingRelationship = await findRelationshipById(id);
        if (!existingRelationship) {
            res.status(404).json({ messages: ['Relationship not found'] });
            return;
        }

        // Check if user owns the agent associated with this relationship
        if (existingRelationship.agent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your relationship'] });
            return;
        }

        const updatedRelationship = await updateRelationship(id, relationshipData);
        if (!updatedRelationship) {
            res.status(404).json({ messages: ['Relationship not found'] });
            return;
        }

        res.status(200).json({ relationship: whitelistRelationshipFields(updatedRelationship) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

export default {
    getAgentById,
    postAgent,
    getUserAgents,
    getGameAgents,
    patchAgent,
    patchAgentQualityCurrent,
    patchAgentQualityMax,
    patchAgentCurrencyEarn,
    patchAgentCurrencySpend,
    patchAgentCurrencyResetCurrent,
    patchAgentReset,
    patchAbilityInstance,
    patchRequisitionInstance,
    patchRelationship,
};