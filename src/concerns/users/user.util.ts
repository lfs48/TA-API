import { User } from "@prisma/client";
import { 
  whitelistAgentFields,
  whitelistGameFields, 
  whitelistInviteFields,
} from "@/util";
import { UserWithRelations } from "@/types";

export function whitelistUserFields(
  user: User | UserWithRelations,
  include = true,
) {
  const base = {
    id: user.id,
    username: user.username,
    agentIds: ('agents' in user && user.agents)
      ? user.agents.map(agent => agent.id)
      : undefined,
    gameIds: ('games' in user && user.games)
      ? user.games.map(game => game.id)
      : undefined,
    inviteIds: ('invites' in user && user.invites)
      ? user.invites.map(invite => invite.id)
      : undefined,
  };

  if (!include) {
    return base;
  }

  return {
    ...base,
    agents: ('agents' in user && user.agents)
      ? user.agents.map(agent => whitelistAgentFields(agent, false))
      : undefined,
    games: ('games' in user && user.games)
      ? user.games.map(game => whitelistGameFields(game, false))
      : undefined,
    invites: ('invites' in user && user.invites)
      ? user.invites.map(invite => whitelistInviteFields(invite, false))
      : undefined,
  };
}