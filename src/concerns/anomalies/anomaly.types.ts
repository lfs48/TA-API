import { Anomaly, Ability } from '@prisma/client';

export type AnomalyWithRelations = Anomaly & {
    abilities: Ability[];
};

export type AbilityWithRelations = Ability & {
    anomaly: Anomaly;
}