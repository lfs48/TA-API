import { Router } from 'express';

import exampleController from '@/controllers';
import { authenticator, logger } from '@/middlewares';
import authRouter from '@/routes/auth.routes';
import userRouter from '@/routes/user.routes';

const router = Router();

router.use([
    logger,
]);

//Example routes
router.get('/example', authenticator, exampleController.getExample);
router.post('/example', exampleController.createExample);

//Inject routes
router.use(authRouter);
router.use(userRouter)

export default router;