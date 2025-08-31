import { Anomaly, Reality, Competency } from '@prisma/client';

export function whitelistAnomalyFields(anomaly: Anomaly) {
    return {
        id: anomaly.id,
        name: anomaly.name,
    };
}

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