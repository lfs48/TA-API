import express from 'express';
import AuthController from '@/controllers/auth.controller';
import { validator } from '@/middlewares/validator.middleware';
import { loginValidation, registerValidation } from '@/validations/auth.validation';

const authRouter = express.Router();

authRouter.post("/auth/login", validator(loginValidation), AuthController.login);
authRouter.post("/auth/register", validator(registerValidation), AuthController.register)

export default authRouter;