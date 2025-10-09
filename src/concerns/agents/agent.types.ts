import { 
    Ability,
    AbilityInstance,
    Agent, 
    Anomaly, 
    Competency, 
    Game, 
    Reality,
    Relationship,
    Requisition,
    RequisitionInstance,
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
    requisitionInstances?: RequisitionInstance[];
    relationships?: Relationship[];
}

export type AbilityInstanceWithRelations = AbilityInstance & {
    ability?: Ability & {
        anomaly?: Anomaly;
    };
    agent?: Agent & {
        player?: User;
    };
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

export interface AbilityInstanceData {
    practiced?: boolean;
    answers?: any;
}

export type RequisitionInstanceWithRelations = RequisitionInstance & {
    requisition?: Requisition;
    agent?: Agent & {
        player?: User;
    };
}

export interface RequisitionInstanceData {
    currentUses?: number;
    maxUses?: number;
    notes?: string;
    rented?: boolean;
    quantity?: number;
}

export type AgentQualities = typeof DEFAULT_AGENT_QUALITIES;

export type AgentCurrencies = typeof DEFAULT_AGENT_CURRENCY;