import prisma from '@/services';
import { Reality } from '@prisma/client';

// Reality services
export const findAllRealities = async (): Promise<Reality[]> => {
    return await prisma.reality.findMany({
        orderBy: { name: 'asc' }
    });
};
