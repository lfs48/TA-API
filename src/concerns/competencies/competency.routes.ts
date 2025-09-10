import express from 'express';
import competencyController from './competencies.controller';
import { authenticator } from '@/middlewares';

const competencyRouter = express.Router();

competencyRouter.get("/competencies", authenticator, competencyController.getCompetencies);

export default competencyRouter;