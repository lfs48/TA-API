import { InviteWithRelations } from "types/invite.types";
import { whitelistGameFieldsWithoutRelations } from "@/util/game.util";
import { whitelistUserFields } from "@/util/user.util";

export function whitelistInviteFields(invite:InviteWithRelations) {
    return({
        id: invite.id,
        status: invite.status,
        invitee: whitelistUserFields(invite.invitee),
        inviter: whitelistUserFields(invite.inviter),
        game: whitelistGameFieldsWithoutRelations(invite.game),
    })
}

export function isInviteParticipant(userId: string, invite:InviteWithRelations) {
    return userId === invite.invitee.id || userId === invite.inviter.id;
}