import prisma from '@/services';
import { Anomaly } from '@prisma/client';
import { AnomalyWithRelations } from 'types';

// Anomaly services
export const findAllAnomalies = async (): Promise<AnomalyWithRelations[]> => {
    return await prisma.anomaly.findMany({
        orderBy: { name: 'asc' },
        include: allAnomalyRelations,
    });
};

const allAnomalyRelations = {
    abilities: true,
}
