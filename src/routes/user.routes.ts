import express from 'express';

import userController from '@/controllers/users.controller';
import { authenticator, ensureOwnership } from '@/middlewares';

const userRouter = express.Router();

userRouter.get("/user/:id", authenticator, userController.getUser);
userRouter.get("/user/:id/games", ensureOwnership, userController.getUserGames);
userRouter.get("/user/:id/invites", ensureOwnership, userController.getUserInvites)

export default userRouter;