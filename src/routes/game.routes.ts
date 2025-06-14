import express from 'express';

import gamesController from '@/controllers/games.controller';
import { authenticator, validator } from '@/middlewares';
import { patchGameValidation, postGameValidation } from '@/validations/game.validation';

const gameRouter = express.Router();

gameRouter.get("/game", authenticator, gamesController.getGame);
gameRouter.get("/game/:id", authenticator, gamesController.getGameByID);
gameRouter.post("/game", authenticator, validator(postGameValidation), gamesController.postGame);
gameRouter.patch("/game/:id", authenticator, validator(patchGameValidation), gamesController.patchGame)

export default gameRouter;