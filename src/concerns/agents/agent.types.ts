import { 
    AbilityInstance,
    Agent, 
    Anomaly, 
    Competency, 
    Game, 
    Reality,
    User 
} from "@prisma/client";
import { 
    DEFAULT_AGENT_CURRENCY,
    DEFAULT_AGENT_QUALITIES 
} from "./agent.constants";

export type AgentWithRelations = Agent & {
    player?: User;
    game?: Game;
    anomaly?: Anomaly;
    reality?: Reality;
    competency?: Competency;
    abilityInstances?: AbilityInstance[];
}

export interface AgentData {
    name: string;
    playerId: string;
    gameId: string;
    qualities?: AgentQualities;
    anomalyId?: string;
    realityId?: string;
    competencyId?: string;
}

export type AgentQualities = typeof DEFAULT_AGENT_QUALITIES;

export type AgentCurrencies = typeof DEFAULT_AGENT_CURRENCY;