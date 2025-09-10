import prisma from '@/services';
import { Anomaly } from '@prisma/client';

// Anomaly services
export const findAllAnomalies = async (): Promise<Anomaly[]> => {
    return await prisma.anomaly.findMany({
        orderBy: { name: 'asc' },
        include: allAnomalyRelations,
    });
};

const allAnomalyRelations = {
    abilities: true,
}
