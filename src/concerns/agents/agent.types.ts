import { 
    Agent, 
    Anomaly, 
    Competency, 
    Game, 
    Reality,
    User 
} from "@prisma/client";

export type AgentWithRelations = Agent & {
    player?: User;
    game?: Game;
    anomaly?: Anomaly;
    reality?: Reality;
    competency?: Competency;
}

export interface AgentData {
    name: string;
    playerId: string;
    gameId: string;
}