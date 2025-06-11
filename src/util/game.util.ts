import { whitelistUserFields } from "./user.util";

export function whitelistGameFields(game) {
  return {
    id: game.id,
    name: game.name,
    description: game.description,
    gm: whitelistUserFields(game.gm),
    players: game.players.map(player => whitelistUserFields(player)),
  };
}