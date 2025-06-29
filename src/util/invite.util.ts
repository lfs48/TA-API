import { InviteWithRelations } from "@/types/invite.types";
import { whitelistUserFields } from "@/util/user.util";
import { Invite } from "@prisma/client";
import { whitelistGameFields } from "./game.util";

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