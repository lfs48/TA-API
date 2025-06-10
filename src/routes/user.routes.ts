import express from 'express';

import userController from '@/controllers/user.controller';
import { authenticator } from '@/middlewares';

const userRouter = express.Router();

userRouter.get("/user/:id", authenticator, userController.getUser);

export default userRouter;