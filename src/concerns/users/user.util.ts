import { User } from "@prisma/client";
import { 
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
    games: ('games' in user && user.games)
      ? user.games.map(game => whitelistGameFields(game, false))
      : undefined,
    invites: ('invites' in user && user.invites)
      ? user.invites.map(invite => whitelistInviteFields(invite, false))
      : undefined,
  };
}