import { Anomaly, Reality, Competency, Ability } from '@prisma/client';

export type ArcData = {
    anomalies: Anomaly[];
    realities: Reality[];
    competencies: Competency[];
};

export type AnomalyWithRelations = Anomaly & {
    abilities: Ability[];
};

export type AbilityWithRelations = Ability & {
    anomaly: Anomaly;
}
