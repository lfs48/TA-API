import prisma from '@/services';
import { Competency } from '@prisma/client';

// Competency services
export const findAllCompetencies = async (): Promise<Competency[]> => {
    return await prisma.competency.findMany({
        orderBy: { name: 'asc' }
    });
};

// Get all arc data (competencies) in one call
export const findAllArcData = async () => {
    const [competencies] = await Promise.all([
        findAllCompetencies(),
    ]);

    return {
        competencies,
    };
};