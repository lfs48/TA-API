import prisma from '@/services';
import { Competency } from '@prisma/client';

// Competency services
export const findAllCompetencies = async (): Promise<Competency[]> => {
    return await prisma.competency.findMany({
        orderBy: { name: 'asc' },
        include: {
            requisition: true,
        }
    });
};