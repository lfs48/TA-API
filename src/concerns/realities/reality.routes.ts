import express from 'express';
import realityController from './realities.controller';
import { authenticator } from '@/middlewares';

const realityRouter = express.Router();

realityRouter.get("/realities", authenticator, realityController.getRealities);

export default realityRouter;
