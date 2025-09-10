import express from 'express';
import arcController from './arc.controller';
import { authenticator } from '@/middlewares';

const arcRouter = express.Router();

arcRouter.get("/competencies", authenticator, arcController.getCompetencies);
arcRouter.get("/arcs", authenticator, arcController.getArcs);

export default arcRouter;