import { Anomaly, Competency, Reality } from '@prisma/client';

export type ArcData = {
    anomalies: Anomaly[];
    realities: Reality[];
    competencies: Competency[];
};
