import prisma from '@/services';
import { Anomaly, Reality, Competency } from '@prisma/client';

// Anomaly services
export const findAllAnomalies = async (): Promise<Anomaly[]> => {
    return await prisma.anomaly.findMany({
        orderBy: { name: 'asc' }
    });
};

// Reality services
export const findAllRealities = async (): Promise<Reality[]> => {
    return await prisma.reality.findMany({
        orderBy: { name: 'asc' }
    });
};

// Competency services
export const findAllCompetencies = async (): Promise<Competency[]> => {
    return await prisma.competency.findMany({
        orderBy: { name: 'asc' }
    });
};

// Get all arc data (anomalies, realities, competencies) in one call
export const findAllArcData = async () => {
    const [anomalies, realities, competencies] = await Promise.all([
        findAllAnomalies(),
        findAllRealities(),
        findAllCompetencies(),
    ]);

    return {
        anomalies,
        realities,
        competencies,
    };
};