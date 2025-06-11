import { Router } from 'express';

import exampleController from '@/controllers';
import { authenticator, logger } from '@/middlewares';
import authRouter from './auth.routes';
import userRouter from './user.routes';
import gameRouter from './game.routes';

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

export default router;