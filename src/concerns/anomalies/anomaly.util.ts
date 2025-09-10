import { Anomaly, Ability } from '@prisma/client';
import { AbilityWithRelations, AnomalyWithRelations } from './anomaly.types';

export function whitelistAnomalyFields(
    anomaly: Anomaly | AnomalyWithRelations,
    includeRelations = false,
) {
    const base = {
        id: anomaly.id,
        name: anomaly.name,
        abilityIds: 'abilities' in anomaly && anomaly.abilities
            ? anomaly.abilities.map(ability => ability.id)
            : []
    };

    if (!includeRelations) {
        return base;
    }

    return {
        ...base,
        abilities: ('abilities' in anomaly && anomaly.abilities)
            ? anomaly.abilities.map(ability => whitelistAbilityFields(ability))
            : [],
    };
}

export function whitelistAbilityFields(
    ability: Ability | AbilityWithRelations,
    includeRelations = false,
) {
    const base = {
        id: ability.id,
        title: ability.title,
        data: ability.data,
        anomalyId: ability.anomalyId,
    };

    if (!includeRelations) {
        return base;
    }

    return {
        ...base,
        anomaly: 'anomaly' in ability && ability.anomaly
        ? whitelistAnomalyFields(ability.anomaly)
        : undefined,
    };
}