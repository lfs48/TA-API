import { Agent, ConnectionBonus, Relationship, User } from "@prisma/client";

export interface RelationshipWithRelations extends Relationship {
    agent: Agent;
    player: User;
    connectionBonus: ConnectionBonus;
}

export interface RelationshipData {
    name?: string;
    description?: string;
    connection?: number;
    active?: boolean;
    uses?: number;
    playerId?: string;
    connectionBonusId?: string;
}