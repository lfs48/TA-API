import { Router } from 'express';

import exampleController from '@/controllers';
import { authenticator, logger } from '@/middlewares';
import authRouter from '@/concerns/auth/auth.routes';
import userRouter from '@/concerns/users/user.routes';
import gameRouter from '@/concerns/games/game.routes';
import inviteRouter from '@/concerns/invites/invite.routes';

const router = Router();

router.use([
    logger,
]);

//Example routes
router.get('/example', authenticator, exampleController.getExample);
router.post('/example', exampleController.createExample);

//Inject routes
router.use(authRouter);
router.use(userRouter);
router.use(gameRouter);
router.use(inviteRouter);

export default router;