import { Router } from 'express';
import exampleController from '@/controllers';
import authController from '@/controllers/auth.controller';
import { logger } from '@/middlewares';
import authRouter from '@/routes/auth.routes';

const router = Router();

router.use([
    logger,
]);

//Example routes
router.get('/example', exampleController.getExample);
router.post('/example', exampleController.createExample);

//Auth routes
router.use(authRouter);

export default router;