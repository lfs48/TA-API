import { Anomaly, Reality, Competency } from '@prisma/client';

export type AnomalyData = Omit<Anomaly, 'id' | 'createdAt' | 'updatedAt'>;
export type RealityData = Omit<Reality, 'id' | 'createdAt' | 'updatedAt'>;
export type CompetencyData = Omit<Competency, 'id' | 'createdAt' | 'updatedAt'>;

export type ArcData = {
    anomalies: Anomaly[];
    realities: Reality[];
    competencies: Competency[];
};
