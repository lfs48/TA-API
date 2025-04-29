import { Router } from 'express';
import exampleController from '../controllers';
import {logger } from '../middlewares';
import { join } from 'node:path';

const router = Router();

router.use([
    logger,
]);

router.get('/example', exampleController.getExample);
router.post('/example', exampleController.createExample);

export default router;