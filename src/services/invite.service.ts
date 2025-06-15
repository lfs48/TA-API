import { Invite } from '@prisma/client';

import prisma from './index';
import { InviteWithRelations } from '@/types/invite.types';

export const findInviteById = async (id: string):Promise<InviteWithRelations | null> => await prisma.invite.findUnique({
    where: { id: id },
    include: {
        invitee: true,
        inviter: true,
        game: true,
    }
})

export const createInvite = async (inviteData:Invite):Promise<InviteWithRelations> => await prisma.invite.create({
    data: { ...inviteData },
    include: {
        invitee: true,
        inviter: true,
        game: true,
    }
});

export const updateInvite = async (id: string, inviteData:Partial<Invite>): Promise<InviteWithRelations> => await prisma.invite.update({
    where: { id: id },
    data: inviteData,
        include: {
        invitee: true,
        inviter: true,
        game: true,
    }
});