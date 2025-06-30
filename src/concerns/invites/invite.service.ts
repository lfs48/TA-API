import { Invite } from '@prisma/client';

import prisma from '@/services';
import { 
    InviteData, 
    InviteWithRelations 
} from '@/types';
import { InviteStatus } from 'validations';

export const findInviteById = async (id: string):Promise<InviteWithRelations | null> => await prisma.invite.findUnique({
    where: { id: id },
    include: {
        invitee: true,
        inviter: true,
        game: true,
    }
})

export const createInvite = async (inviteData:InviteData):Promise<InviteWithRelations> => await prisma.invite.create({
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

export const findGameInvites = async(gameId:string): Promise<InviteWithRelations[]> => await prisma.invite.findMany({
    where: { gameId },
    include: {
        invitee: true,
        inviter: true,
        game: true,
    }
});

export const findReceivedInvites = async(inviteeId:string): Promise<InviteWithRelations[]> => await prisma.invite.findMany({
    where: { inviteeId },
    include: {
        invitee: true,
        inviter: true,
        game: true,
    }
});

export const findPendingGameInvite = async(inviteeId: string, gameId:string): Promise<Invite | null> => {
    const invite = await prisma.invite.findFirst({
        where: {
            inviteeId: inviteeId,
            gameId: gameId,
            status: "PENDING",
        },
    });

    return invite;
}