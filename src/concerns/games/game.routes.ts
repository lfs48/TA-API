import express from 'express';

import gamesController from './games.controller';
import { 
    authenticator, 
    validator 
} from '@/middlewares';
import { 
    patchGameValidation, 
    postGameValidation, 
    removePlayerValidation 
} from './game.validation';

const gameRouter = express.Router();

gameRouter.get("/game", authenticator, gamesController.getGame);
gameRouter.get("/game/:id", authenticator, gamesController.getGameByID);
gameRouter.post("/game", authenticator, validator(postGameValidation), gamesController.postGame);
gameRouter.patch("/game/:id", authenticator, validator(patchGameValidation), gamesController.patchGame);
gameRouter.patch("/game/:id/remove-player", authenticator, validator(removePlayerValidation), gamesController.removePlayerFromGame);
gameRouter.get("/game/:id/invites", authenticator, gamesController.getGameInvites);

export default gameRouter;