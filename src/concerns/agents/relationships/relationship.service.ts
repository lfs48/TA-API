import prisma from '@/services';

// Relations for relationship queries
const relationshipRelations = {
  agent: {
    include: {
      player: true,
    }
  },
  player: true,
  connectionBonus: true,
};

// Find relationship by ID with relations
export const findRelationshipById = async (id: string) => {
  return await prisma.relationship.findUnique({
    where: { id },
    include: relationshipRelations,
  });
};

// Update relationship
export const updateRelationship = async (id: string, relationshipData: any) => {
  return await prisma.relationship.update({
    where: { id },
    data: relationshipData,
    include: relationshipRelations,
  });
};