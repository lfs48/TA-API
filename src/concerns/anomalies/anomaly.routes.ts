import express from 'express';
import anomalyController from './anomalies.controller';
import { authenticator } from '@/middlewares';

const anomalyRouter = express.Router();

anomalyRouter.get("/anomalies", authenticator, anomalyController.getAnomalies);

export default anomalyRouter;