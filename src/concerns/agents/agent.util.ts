import { AbilityInstance, Agent, Relationship, RequisitionInstance } from "@prisma/client";
import { whitelistUserFields } from "@/util";
import { whitelistGameFields } from "@/util";
import { AgentWithRelations } from "@/concerns/agents/agent.types";
import { 
    whitelistAnomalyFields, 
    whitelistCompetencyFields, 
    whitelistRealityFields 
} from "@/util";
import { whitelistRelationshipFields } from "./relationships/relationship.util";

export function whitelistAgentFields(
    agent: AgentWithRelations | Agent,
    includeRelations = true,
) {
    const base = {
        id: agent.id,
        name: agent.name,
        playerId: agent.playerId,
        gameId: agent.gameId,
        qualities: agent.qualities,
        currency: agent.currency,
        directive: agent.directive,
        sanctioned: agent.sanctioned,
        assessment: agent.assessment,
        anomalyId: agent.anomalyId ?? undefined,
        realityId: agent.realityId ?? undefined,
        competencyId: agent.competencyId ?? undefined,
        abilityInstanceIds: 'abilityInstances' in agent && agent.abilityInstances
            ? agent.abilityInstances.map(instance => instance.id)
            : [],
        requisitionInstanceIds: 'requisitionInstances' in agent && agent.requisitionInstances
            ? agent.requisitionInstances.map(instance => instance.id)
            : [],
        relationshipIds: 'relationships' in agent && agent.relationships
            ? agent.relationships.map(relationship => relationship.id)
            : [],
    };

    if (!includeRelations) {
        return base;
    }

    return {
        ...base,
        player: ('player' in agent && agent.player)
            ? whitelistUserFields(agent.player, false)
            : undefined,
        game: ('game' in agent && agent.game)
            ? whitelistGameFields(agent.game, false)
            : undefined,
        anomaly: ('anomaly' in agent && agent.anomaly)
            ? whitelistAnomalyFields(agent.anomaly)
            : undefined,
        reality: ('reality' in agent && agent.reality)
            ? whitelistRealityFields(agent.reality)
            : undefined,
        competency: ('competency' in agent && agent.competency)
            ? whitelistCompetencyFields(agent.competency)
            : undefined,
        abilityInstances: 'abilityInstances' in agent && agent.abilityInstances
            ? agent.abilityInstances.map(instance => whitelistAbilityInstanceFields(instance))
            : [],
        requisitionInstances: 'requisitionInstances' in agent && agent.requisitionInstances
            ? agent.requisitionInstances.map(instance => whitelistRequisitionInstanceFields(instance))
            : [],
        relationships: 'relationships' in agent && agent.relationships
            ? agent.relationships.map(relationship => whitelistRelationshipFields(relationship))
            : [],
    };
}

export function whitelistAbilityInstanceFields(abilityInstance: AbilityInstance) {
    return {
        id: abilityInstance.id,
        abilityId: abilityInstance.abilityId,
        agentId: abilityInstance.agentId,
        practiced: abilityInstance.practiced,
        answers: abilityInstance.answers,
    };
}

export function whitelistRequisitionInstanceFields(requisitionInstance:RequisitionInstance) {
    return {
        id: requisitionInstance.id,
        agentId: requisitionInstance.agentId,
        requisitionId: requisitionInstance.requisitionId,
        currentUses: requisitionInstance.currentUses,
        maxUses: requisitionInstance.maxUses,
        notes: requisitionInstance.notes,
        rented: requisitionInstance.rented,
        quantity: requisitionInstance.quantity
    };
}

export function isAgentPlayer(agent:Agent, userId:string) {
    return agent.playerId === userId;
}