import generatePassphrase from 'eff-diceware-passphrase';

import { Game } from '@prisma/client';
import { 
  whitelistUserFields, 
  whitelistInviteFields, 
  whitelistAgentFields} from "@/util";
import { findGameByPassphrase } from "@/services";
import { GameWithRelations } from '@/types';

export function whitelistGameFields(
  game: GameWithRelations | Game,
  includeRelations = true,
) {
  const base = {
    id: game.id,
    title: game.title,
    description: game.description,
    passphrase: game.passphrase,
    active: game.active,
    gmId: game.gmID,
    agentIds: ('agents' in game && game.agents)
      ? game.agents?.map(agent => agent.id)
      : undefined,
    playerIds: ('players' in game && game.players)
      ? game.players?.map(player => player.id)
      : undefined,
    inviteIds: ('invites' in game && game.invites)
      ? game.invites?.map(inv => inv.id)
      : undefined,
    inviteeIds: ('invites' in game && game.invites)
      ? game.invites?.map(inv => inv.inviteeId)
      : undefined,
  };

  if (!includeRelations) {
    return base;
  }

  return {
    ...base,
    ...base,
    gm: ('gm' in game && game.gm)
      ? whitelistUserFields(game.gm, false)
      : undefined,
    players: ('players' in game && game.players)
      ? game.players?.map(player => whitelistUserFields(player, false))
      : undefined,
    invites: ('invites' in game && game.invites)
      ? game.invites?.map(inv => whitelistInviteFields(inv, false))
      : undefined,
    invitees: ('invites' in game && game.invites)
      ? game.invites?.map(inv => whitelistUserFields(inv.invitee, false))
      : undefined,
    agents: ('agents' in game && game.agents)
      ? game.agents?.map(agent => whitelistAgentFields(agent, false))
      : undefined,
  };
}

export async function generateGamePhrase() {
  let phrase = _generatePhrase();
  const game = await findGameByPassphrase(phrase);
  while (game) {
    phrase = _generatePhrase();
  }
  return phrase;
}

export function isGm(id:string, game:GameWithRelations) {
  return id === game.gmID;
}

export function isParticipant(id:string, game:GameWithRelations) {
  return (id === game.gmID || game.players?.some(player => player.id === id));
}

function _generatePhrase() {
  return generatePassphrase(4)
  .join('-');
}