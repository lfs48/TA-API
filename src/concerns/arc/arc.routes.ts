import express from 'express';
import arcController from './arc.controller';
import { authenticator } from '@/middlewares';

const arcRouter = express.Router();

arcRouter.get("/anomalies", authenticator, arcController.getAnomalies);
arcRouter.get("/realities", authenticator, arcController.getRealities);
arcRouter.get("/competencies", authenticator, arcController.getCompetencies);
arcRouter.get("/arcs", authenticator, arcController.getArcs);

export default arcRouter;