import { ConnectionBonus } from "@prisma/client";

export type ConnectionBonusWithRelations = ConnectionBonus & {
    relationships?: any[];
}

export interface ConnectionBonusData {
    title: string;
    description: string;
    maxUses?: number;
}