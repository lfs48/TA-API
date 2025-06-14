import generatePassphrase from 'eff-diceware-passphrase';

import { whitelistUserFields } from "./user.util";
import { findGameByPassphrase } from "@/services/game.service";
import { Game } from '@prisma/client';
import { GameWithRelations } from 'types';

export function whitelistGameFields(game) {
  return {
    id: game.id,
    title: game.title,
    description: game.description,
    passphrase: game.passphrase,
    gm: whitelistUserFields(game.gm),
    players: game.players.map(player => whitelistUserFields(player)),
    createdAt: game.createdAt,
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

export function authenticateParticipation(id:string, game:GameWithRelations) {
  return (id === game.gmID || game.players.some(player => player.id === id));
}

function _generatePhrase() {
  return generatePassphrase(4)
  .join('-');
}