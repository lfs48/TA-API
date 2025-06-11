import express from 'express';

import gamesController from '@/controllers/games.controller';
import { authenticator, ensureOwnership } from '@/middlewares';

const gameRouter = express.Router();

gameRouter.get("/game/:id", authenticator, gamesController.getGame);

export default gameRouter;