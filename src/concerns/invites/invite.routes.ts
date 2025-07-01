import express from 'express';

import { authenticator, validator } from '@/middlewares';
import { patchInviteValidation, postInviteValidation } from '@/validations';
import invitesController from './invites.controller';

const inviteRouter = express.Router();

inviteRouter.get("/invite/:id", authenticator, invitesController.getInvite);
inviteRouter.post("/invite", authenticator, validator(postInviteValidation), invitesController.postInvite);
inviteRouter.patch("/invite/:id/accept", authenticator, invitesController.acceptOrRejectInvite(true));
inviteRouter.patch("/invite/:id/reject", authenticator, invitesController.acceptOrRejectInvite(false));

export default inviteRouter;