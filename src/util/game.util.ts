import generatePassphrase from 'eff-diceware-passphrase';

import { whitelistUserFields } from "./user.util";
import { findGameByPassphrase } from "@/services/game.service";
import { GameWithRelations } from '@/types';
import { Game } from '@prisma/client';
import { whitelistInviteFields } from './invite.util';

export function whitelistGameFields(
  game: GameWithRelations | Game,
  include = true,
) {
  const base = {
    id: game.id,
    title: game.title,
    description: game.description,
    passphrase: game.passphrase,
    active: game.active,
    createdAt: game.createdAt,
  };

  if (!include) {
    return base;
  }

  return {
    ...base,
    gm: ('gm' in game && game.gm) ? whitelistUserFields(game.gm) : undefined,
    players: 'players' in game ? game.players?.map(player => whitelistUserFields(player)) : undefined,
    invites: 'invites' in game ? game.invites?.map(inv => whitelistInviteFields(inv, false)) : undefined,
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