import { Request, Response } from "express";
import { 
    createAgent, 
    findUserAgents, 
    findGameAgents, 
    findAgentById,
    updateAgent
} from "./agent.service";
import { getIdFromJWT } from "@/util";
import { whitelistAgentFields } from "./agent.util";

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

export default {
    getAgentById,
    postAgent,
    getUserAgents,
    getGameAgents,
    patchAgent,
};