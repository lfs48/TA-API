import prisma from '@/services';
import { Reality, Competency } from '@prisma/client';

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

// Get all arc data (realities, competencies) in one call
export const findAllArcData = async () => {
    const [realities, competencies] = await Promise.all([
        findAllRealities(),
        findAllCompetencies(),
    ]);

    return {
        realities,
        competencies,
    };
};