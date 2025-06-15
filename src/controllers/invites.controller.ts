import { Request, Response } from 'express';

import { findInviteById, createInvite, updateInvite } from '@/services/invite.service';
import { isInviteParticipant, whitelistInviteFields } from '@/util/invite.util';
import { getIdFromJWT } from '@/util/auth.util';

// GET /invite/:id endpoint controller
export const getInvite = async (req: Request, res: Response) => {
    try {
        const userId = getIdFromJWT(req);
        const inviteId = req.params.id;
        const invite = await findInviteById(inviteId);

        if (!invite) {
            res.status(404).json({ message: 'Invite not found' });
            return;
        }

        if (!isInviteParticipant(userId, invite)) {
            res.status(403).json({ message: 'Forbidden: Not your invite' });
            return;
        }

        res.status(200).json({ invite: whitelistInviteFields(invite) });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// POST /invite endpoint controller
export const postInvite = async (req: Request, res: Response) => {
    try {
        const inviterId = getIdFromJWT(req);
        const inviteData = req.body.invite;
        const invite = await createInvite({
            inviterId: inviterId,
            ...inviteData,
        });
        res.status(201).json({ invite: whitelistInviteFields(invite) });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// PATCH /invite/:id endpoint controller
export const patchInvite = async (req: Request, res: Response) => {
    try {
        const userId = getIdFromJWT(req);
        const inviteId = req.params.id;
        const inviteData = req.body.invite;
        const invite = await findInviteById(inviteId);

        if (!invite) {
            res.status(404).json({ message: 'Invite not found' });
            return;
        }

        if (!isInviteParticipant(userId, invite)) {
            res.status(403).json({ message: 'Forbidden: Not your invite' });
            return;
        }

        const updatedInvite = await updateInvite(inviteId, inviteData);
        res.status(200).json({ invite: whitelistInviteFields(updatedInvite) });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default {
    getInvite,
    postInvite,
    patchInvite,
};