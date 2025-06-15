import express from 'express';

import { authenticator, validator } from '@/middlewares';
import { patchInviteValidation, postInviteValidation } from '@/validations/invite.validation';
import invitesController from '@/controllers/invites.controller';

const inviteRouter = express.Router();

inviteRouter.get("/invite/:id", authenticator, invitesController.getInvite);
inviteRouter.post("/invite", authenticator, validator(postInviteValidation), invitesController.postInvite);
inviteRouter.patch("/invite/:id", authenticator, validator(patchInviteValidation), invitesController.patchInvite)

export default inviteRouter;