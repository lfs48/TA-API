import { Agent, ConnectionBonus, Relationship, User } from "@prisma/client";

export interface RelationshipWithRelations extends Relationship {
    agent: Agent;
    player: User;
    bonus: ConnectionBonus;
}