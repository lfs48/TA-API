import express from 'express';
import connectionBonusController from './connection-bonuses.controller';
import { authenticator } from '@/middlewares';

const connectionBonusRouter = express.Router();

connectionBonusRouter.get("/bonuses", authenticator, connectionBonusController.getConnectionBonuses);

export default connectionBonusRouter;