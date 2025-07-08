import { Agent } from "@prisma/client";
import { whitelistUserFields } from "@/util";
import { whitelistGameFields } from "@/util";
import { AgentWithRelations } from "concerns/agents/agent.types";

export function whitelistAgentFields(
    agent: AgentWithRelations,
    includeRelations = true,
) {
    const base = {
        id: agent.id,
        name: agent.name,
        playerId: agent.playerId,
        gameId: agent.gameId,
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
    };
}


export function isAgentPlayer(agent:Agent, userId:string) {
    return agent.playerId === userId;
}