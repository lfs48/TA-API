import { Request, Response } from 'express';

import { 
    findInviteById, 
    createInvite, 
    acceptInvite as acceptInviteService,
    rejectInvite as rejectInviteService,
    findUserByUsername,
    findPendingGameInvite,
    findGameById
} from '@/services';
import { 
    isInviteParticipant,
    whitelistInviteFields,
    getIdFromJWT,
    isInviteInvitee
} from '@/util';
import { ioServer } from '@/server';
import SocketMessages from '@/sockets/messages.enum';

// GET /invite/:id endpoint controller
export const getInvite = async (req: Request, res: Response) => {
    try {
        const userId = getIdFromJWT(req);
        const inviteId = req.params.id;
        const invite = await findInviteById(inviteId);

        if (!invite) {
            res.status(404).json({ messages: ['Invite not found'] });
            return;
        }

        if (!isInviteParticipant(userId, invite)) {
            res.status(403).json({ messages: ['Forbidden: Not your invite'] });
            return;
        }

        res.status(200).json({ invite: whitelistInviteFields(invite) });
    } catch (error) {
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

// POST /invite endpoint controller
export const postInvite = async (req: Request, res: Response) => {
    try {
        const inviterId = getIdFromJWT(req);
        const inviteData = req.body.invite;
        const invitee = await findUserByUsername(inviteData.inviteeUsername);

        if (!invitee) {
            res.status(404).json({ messages: ['User not found'] });
            return;
        }

        const pendingInvite = await findPendingGameInvite(invitee.id, inviteData.gameId);
        if (pendingInvite) {
            res.status(409).json({ messages: ['User already has a pending invite for this game'] });
            return;
        }

        const invite = await createInvite({
            inviterId: inviterId,
            inviteeId: invitee.id,
            gameId: inviteData.gameId,
        });

        const userSocketMap = ioServer.userSocketMap;
        const inviteeSocketId = userSocketMap.get(invitee.id);
        if (inviteeSocketId) {
            ioServer.to(inviteeSocketId).emit(SocketMessages.GAME_INVITE_SENT, {
                invite: whitelistInviteFields(invite)
            });
        }
        res.status(201).json({ invite: whitelistInviteFields(invite) });
    } catch (error) {
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

// PATCH /invite/:id endpoint controller
export const acceptOrRejectInvite = (accept:boolean) => async (req: Request, res: Response) => {
    const service = accept ? acceptInviteService : rejectInviteService;
    try {
        const userId = getIdFromJWT(req);
        const inviteId = req.params.id;
        const invite = await findInviteById(inviteId);

        if (!invite) {
            res.status(404).json({ messages: ['Invite not found'] });
            return;
        }
        if (invite.status !== 'PENDING') {
            res.status(400).json({ messages: ['Invite is not pending'] });
            return;
        }
        if (!isInviteInvitee(userId, invite)) {
            res.status(403).json({ messages: ['Forbidden: Not your invite'] });
            return;
        }

        const updatedInvite = await service(inviteId);

        const userSocketMap = ioServer.userSocketMap;
        const inviterSocketId = userSocketMap.get(invite.inviterId);
        if (inviterSocketId) {
            ioServer.to(inviterSocketId).emit(
                accept ? SocketMessages.GAME_INVITE_ACCEPT : SocketMessages.GAME_INVITE_REJECTED,
                { invite: whitelistInviteFields(updatedInvite) }
            );
        }
        res.status(200).json({ invite: whitelistInviteFields(updatedInvite) });
    } catch (error) {
        console.log(error)
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getInvite,
    postInvite,
    acceptOrRejectInvite,
};