import { Relationship } from "@prisma/client";
import { RelationshipWithRelations } from "./relationship.types";
import { whitelistAgentFields, whitelistUserFields } from "@/util";

export function whitelistRelationshipFields(
    relationship: Relationship | RelationshipWithRelations,
    includeRelations = true,
) {
    const base = {
        id: relationship.id,
        name: relationship.name,
        description: relationship.description,
        connection: relationship.connection,
        active: relationship.active,
        uses: relationship.uses,
        playerId: relationship.playerId,
        connectionBonusId: relationship.connectionBonusId,
    };

    if (!includeRelations) {
        return base;
    }

    return {
        ...base,
        agent: 'agent' in relationship && relationship.agent
            ? whitelistAgentFields(relationship.agent, false)
            : undefined,
        player: 'player' in relationship && relationship.player
            ? whitelistUserFields(relationship.player, false)
            : undefined,
        connectionBonus: 'connectionBonus' in relationship && relationship.connectionBonus
            ? relationship.connectionBonus
            : undefined,
    }
}
