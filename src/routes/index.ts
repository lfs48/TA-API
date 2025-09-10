import { Router } from 'express';

import { authenticator, logger } from '@/middlewares';
import authRouter from '@/concerns/auth/auth.routes';
import userRouter from '@/concerns/users/user.routes';
import gameRouter from '@/concerns/games/game.routes';
import inviteRouter from '@/concerns/invites/invite.routes';
import agentRouter from '@/concerns/agents/agent.routes';
import arcRouter from '@/concerns/arc/arc.routes';
import anomalyRouter from '@/concerns/anomalies/anomaly.routes';
import realityRouter from '@/concerns/realities/reality.routes';
import competencyRouter from '@/concerns/competencies/competency.routes';

const router = Router();

router.use([
    logger,
]);

//Inject routes
router.use(authRouter);
router.use(userRouter);
router.use(gameRouter);
router.use(inviteRouter);
router.use(agentRouter);
router.use(arcRouter);
router.use(anomalyRouter);
router.use(realityRouter);
router.use(competencyRouter);

export default router;