import { Reality, Competency } from '@prisma/client';

export function whitelistRealityFields(reality: Reality) {
    return {
        id: reality.id,
        name: reality.name,
    };
}

export function whitelistCompetencyFields(competency: Competency) {
    return {
        id: competency.id,
        name: competency.name,
    };
}