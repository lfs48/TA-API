import { Agent, Game, User } from "@prisma/client";

export type AgentWithRelations = Agent & {
    player?: User;
    game?: Game;
}

export interface AgentData {
    name: string;
    playerId: string;
    gameId: string;
}