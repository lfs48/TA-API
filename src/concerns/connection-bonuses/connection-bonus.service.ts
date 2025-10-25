import prisma from '@/services';

// Fetch all connection bonuses
export const findAllConnectionBonuses = async () => {
    return await prisma.connectionBonus.findMany({
        orderBy: {
            title: 'asc'
        }
    });
};