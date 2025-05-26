import express from 'express';
import AuthController from '@/controllers/auth.controller';
import { validator } from '@/middlewares/validator.middleware';
import { loginValidation } from '@/validations/auth.validation';

const authRouter = express.Router();

authRouter.post("/auth/login", validator(loginValidation), AuthController.login);
authRouter.post("/auth/register", validator(loginValidation), AuthController.register)

export default authRouter;