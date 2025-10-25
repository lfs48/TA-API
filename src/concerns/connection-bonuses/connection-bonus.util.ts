import { ConnectionBonus } from "@prisma/client";

export function whitelistConnectionBonusFields(connectionBonus: ConnectionBonus) {
    return {
        id: connectionBonus.id,
        title: connectionBonus.title,
        description: connectionBonus.description,
        maxUses: connectionBonus.maxUses,
        createdAt: connectionBonus.createdAt,
        updatedAt: connectionBonus.updatedAt,
    };
}