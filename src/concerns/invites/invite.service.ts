import { Invite } from '@prisma/client';

import prisma from '@/services';
import { 
    InviteData, 
    InviteWithRelations 
} from '@/types';

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

export const rejectInvite = async (
    id: string
): Promise<InviteWithRelations> => {
    const invite = await prisma.invite.update({
        where: { id },
        data: { status: "REJECTED" },
        include: {
            invitee: true,
            inviter: true,
            game: true,
        },
    });

    return invite;
};

export const acceptInvite = async (id: string): Promise<InviteWithRelations> => {
    return await prisma.$transaction(async (tx) => {
        const invite = await tx.invite.update({
            where: { id },
            data: { status: "ACCEPTED" },
            include: {
                invitee: true,
                inviter: true,
                game: true,
            },
        });

        await tx.game.update({
            where: { id: invite.gameId },
            data: {
                players: {
                    connect: { id: invite.inviteeId }
                }
            }
        });

        return invite;
    });
};

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