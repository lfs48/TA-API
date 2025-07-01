import { Invite } from "@prisma/client";
import { InviteWithRelations } from "@/types";
import { 
    whitelistGameFields, 
    whitelistUserFields 
} from "@/util";

export function whitelistInviteFields(
    invite: InviteWithRelations | Invite,
    include = true,
) {
    const base = {
        id: invite.id,
        inviterId: invite.inviterId,
        inviteeId: invite.inviteeId,
        gameId: invite.gameId,
        status: invite.status,
    };

    if (!include) {
        return base;
    }

    return {
        ...base,
        invitee: ('invitee' in invite && invite.invitee)
            ? whitelistUserFields(invite.invitee, false)
            : undefined,
        inviter: ('inviter' in invite && invite.inviter)
            ? whitelistUserFields(invite.inviter, false)
            : undefined,
        game: ('game' in invite && invite.game)
            ? whitelistGameFields(invite.game, false)
            : undefined,
    };
}


export function isInviteParticipant(userId: string, invite:InviteWithRelations) {
    return userId === invite.invitee.id || userId === invite.inviter.id;
}

export function isInviteInvitee(userId: string, invite:InviteWithRelations) {
    return userId === invite.invitee.id;
}