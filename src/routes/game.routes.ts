import express from 'express';

import gamesController from '@/controllers/games.controller';
import { authenticator, validator } from '@/middlewares';
import { patchGameValidation, postGameValidation, removePlayerValidation } from '@/validations/game.validation';

const gameRouter = express.Router();

gameRouter.get("/game", authenticator, gamesController.getGame);
gameRouter.get("/game/:id", authenticator, gamesController.getGameByID);
gameRouter.post("/game", authenticator, validator(postGameValidation), gamesController.postGame);
gameRouter.patch("/game/:id", authenticator, validator(patchGameValidation), gamesController.patchGame);
gameRouter.patch("/game/:id/remove-player", authenticator, validator(removePlayerValidation), gamesController.removePlayerFromGame);

export default gameRouter;